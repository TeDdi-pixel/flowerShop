import { ToastOptions, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const config: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  transition: Zoom,
};

export const notify = (message: string) => {
  toast.success(message, config);
};

export const error = (message: string) => {
  toast.error(message, config);
};

export const warn = (message: string) =>{
  toast.warn(message, config)
}