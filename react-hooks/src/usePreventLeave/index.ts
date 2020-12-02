const usePreventLeave = (
): {
  enablePrevent: Function,
  disablePrevent: Function,
} => {
  const listener = (event: Event) => {
    event.preventDefault();
    event.returnValue = false;
  }
  const enablePrevent = () =>
    window.addEventListener('beforeunload', listener);
  const disablePrevent = () =>
    window.removeEventListener('beforeunload', listener);

  return { enablePrevent, disablePrevent }
}

export default usePreventLeave;
