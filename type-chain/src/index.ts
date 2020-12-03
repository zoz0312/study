import * as CryptoJS from 'crypto-js';

class Block {
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timeStamp: number,
    data: string,
  ): string => {
    return CryptoJS.SHA256(index + previousHash + timeStamp + data).toString();
  }

  static validateStructure = (aBlock: Block): boolean => {
    return typeof aBlock.index === 'number'
      && typeof aBlock.hash === 'string'
      && typeof aBlock.previousHash === 'string'
      && typeof aBlock.timeStamp === 'number'
      && typeof aBlock.data === 'string';
  }

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timeStamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timeStamp: number,
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timeStamp = timeStamp;
  }
}

const genesisBlock: Block = new Block(0, '123', '', 'hi', 123);

let blockChain: Block[] = [genesisBlock];

// const getBlockchain = (): Block[] => blockChain;
const getLastestBlock = (): Block => blockChain[blockChain.length - 1];
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (
  data: string
): Block => {
  const previousBlock: Block = getLastestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimeStamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimeStamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimeStamp
  );
  addBlock(newBlock);
  return newBlock;
}

const getHashForBlock = (aBlock: Block): string => {
  return Block.calculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timeStamp,
    aBlock.data
  );
}

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    console.log('Block.validateStructure')
    return false;
  }
  if (previousBlock.index + 1 !== candidateBlock.index) {
    console.log('previousBlock.index')
    return false;
  }
  if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  }
  if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
    console.log('candidateBlock')
    return false;
  }
  return true;
}

const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLastestBlock())) {
    blockChain.push(candidateBlock);
  }
}

createNewBlock('secondBlock');
createNewBlock('thirdBlock');
createNewBlock('fourthBlock');

console.log(blockChain);

export {};
