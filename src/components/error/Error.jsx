import styles from './Error.module.css'
import errorImg from  "../../assets/error.svg"

export default function Error({message}) {
  return (
    <div>
         <img src={errorImg} alt="errorImg"  width={250} height={250}/>
        <p>{message}</p>
    </div>
  )
}
