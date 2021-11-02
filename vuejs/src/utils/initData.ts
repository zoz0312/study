import ReservationWaiting from "../store/tk.reservation.waiting";

declare global {
  interface Window {
    initData: (injectData: any) => void;
  }
}

interface InitDataDTO {
  doInit: (injectData: any) => void;
}

export const InitData = ({
 doInit
}: InitDataDTO) => {
  let flag = false;
  window.initData = (injectData: any) => {
    if (flag) {
      return;
    }
    flag = true;
    doInit(injectData);
  }
}