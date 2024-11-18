import React from 'react';

export const ToastContext = React.createContext()

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];


function ToastProvider({ children }) {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0])
  const [toasts, setToasts] = React.useState([
    {
      id:crypto.randomUUID(),
      message: 'butthead',
      variant: 'warning'
    }
  ])

  function handleAddToast(event){
    event.preventDefault()
    const newToast = { id: crypto.randomUUID(), message: message, variant: variant }
    const nextToasts = [...toasts, newToast]
    setToasts(nextToasts)
    setMessage('')
    setVariant(VARIANT_OPTIONS[0])
  }

  function handleDismiss(id) {
    const nextToasts = toasts.filter(toast => {
      return toast.id !== id
    })
    setToasts(nextToasts)
  }
  return (
    <ToastContext.Provider
      value={{
       toasts

      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
