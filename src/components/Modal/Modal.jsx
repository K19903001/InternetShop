import ReactDOM from 'react-dom';
import style from './modal.module.css'
import { useEffect } from 'react'


 function ModalContent ({children, closeModal}) { // то что будет в окне
    useEffect(() => {
        const listner = (event) => {
          if (event.key === 'Escape') {
            closeModal();
          }
        }
        document.addEventListener('keydown', listner)

    return () => {
      document.removeEventListener('keydown', listner)
    }
  }, [closeModal])

   return(
    <div className={style.modal_content}>
        <button type="button" onClick={closeModal} className="btn btn-primary">Закрыть</button>
        {children}
    </div>
    )
 }

     export function Modal({ children, isOpen= false, closeModal }) { //модальное окно
     if (!isOpen) return null;                            // начальное состояние окна

const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal()
    }
  }

    return ReactDOM.createPortal(
        <div onClick={handleClick} className={style.modal_wrapper}>
        <ModalContent closeModal={closeModal}>
          {children}
        </ModalContent>
      </div>,
      document.getElementById('modal-root')) // место где появится окно
}