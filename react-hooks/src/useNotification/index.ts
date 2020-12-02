
const useNotification = (
  title: string,
  options: {} = {},
) => {
  if (!('Notification' in window)) {
    return;
  }
  const fireNotification = async () => {
    if (Notification.permission !== 'granted') {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        new Notification(title, options);
      } else {
        return;
      }
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
}

export default useNotification;