import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext} from "../ToastProvider";

function ToastShelf({ handleDismiss }) {
  const { toasts } = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <Toast key={toast.id} id={toast.id} variant={toast.variant} handleDismiss={handleDismiss}>
          {toast.message}
        </Toast>
      ))}
      <li className={styles.toastWrapper}>
        <Toast variant="notice">Example notice toast</Toast>
      </li>
      <li className={styles.toastWrapper}>
        <Toast variant="error">Example error toast</Toast>
      </li>
    </ol>
  );
}

export default ToastShelf;
