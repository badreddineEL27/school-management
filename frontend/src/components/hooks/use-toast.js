// src/components/hooks/use-toast.js
import { toast } from "react-toastify"; // If you're using react-toastify

const useToast = () => {
  const showToast = (message, type = "success") => {
    toast(message, { type });
  };

  return { showToast };
};

export { useToast };
