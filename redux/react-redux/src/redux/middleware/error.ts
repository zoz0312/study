import { isRejected } from "@reduxjs/toolkit";

const errorMiddleware = (store: any) => (next: any) => (action: any) => {
  if (isRejected(action)) {
    console.log("Error 감지");
  }

  return next(action);
};

export default errorMiddleware;
