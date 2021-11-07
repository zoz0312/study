import {
  atom, RecoilState,
} from 'recoil';
import { channelTypeDTO } from "@dto/channelType.dto";

export const channelState = atom<channelTypeDTO>({
  key: 'channelState',
  default: 'PC',
});