import React from 'react';

export const ToastContext = React.createContext()



function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id:crypto.randomUUID(),
      message: 'butthead',
      variant: 'warning'
    }
  ])

  function createToast(message, variant){
    const newToast = { id: crypto.randomUUID(), message, variant }
    const nextToasts = [...toasts, newToast]
    setToasts(nextToasts)
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter(toast => {
      return toast.id !== id
    })
    setToasts(nextToasts)
  }
  return (
    <ToastContext.Provider
      value={{
       toasts,
       createToast,
       dismissToast
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
