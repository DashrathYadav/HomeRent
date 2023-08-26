import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastSuccesstInvoke=(message,direction="top-right")=>{
  
    toast.success(`!🦄 ${message}`,{
      position:"top-right",
      autoClose:3000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
      progress:undefined,
      theme:'light',
      
    })
  }
  
   export const toastErrortInvoke=(message,direction="top-right")=>{
    
    toast.error(`! ${message}`,{
      position:"top-right",
      autoClose:3000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
      progress:undefined,
      theme:'light',
      
    })
  }
  