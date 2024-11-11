// src/toastNotifications.ts
import { toast } from "react-hot-toast";

export const errorMsg = (msg:string) => {
  toast.error(msg, {
    style: {
      border: '1px solid #ef4444',
      padding: '16px',
      color: '#ef4444',
    },
    iconTheme: {
      primary: '#ef4444',
      secondary: '#FFFAEE',
    },
  });
}

export const successMsg = (msg:string) => {
  toast.success(msg, {
    style: {
      border: '1px solid successMsg',
      padding: '16px',
      color: '#22c55e',
    },
    iconTheme: {
      primary: '#22c55e',
      secondary: '#FFFAEE',
    },
  });
}