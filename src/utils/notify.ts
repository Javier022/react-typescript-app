import { toast } from "react-toastify";

export const notify = (message: string, type?: string) => {
  if (type === "error") {
    toast.error(message);
  } else if (type === "warnig") {
    toast.warning(message);
  } else {
    toast.success(message);
  }
};
