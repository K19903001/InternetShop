import style from './style.module.css';

export const Spinner =() => {
    return (
        <div className='d-flex justify-content-center'><div className={style["lds-hourglass"]}></div></div>
    
    )
}