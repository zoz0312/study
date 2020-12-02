const useConfirm = (
  message: string = '',
  onConfirm: Function,
  onCancle: Function,
): Function => {
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancle();
    }
  }
  return confirmAction;
}

export default useConfirm;
