import styles from "./Card.module.css";
import humidity from "../../assets/humidity.png";
import pressure from '../../assets/pressure.png'
import max from '../../assets/max.png'
import min from '../../assets/min.png'

export default function Card({ data }) {
  console.log("card", data);
  const urlImg = "http://openweathermap.org/img/w/";

  return (
    <div className={styles.container}>
      <p className={styles.name}>{data.name}</p>

      <div className={styles.topCard}>
        <p className={styles.weather}>{data.weather[0].main}</p>

        <p className={styles.temp}>{(data.main.temp - 273).toFixed(1)}C°</p>

        <div className={styles.icon}>
          <img
            src={urlImg + data.weather[0].icon + ".png"}
            alt="ss"
            width={60}
            height={60}
          />
          <p className={styles.description}>{data.weather[0].description}</p>
        </div>
      </div>
      <footer className={styles.footer}>
        <p className={styles.footerItem}>
        Humidity
          <img src={humidity} alt="icon"/>{data.main.humidity}%
        </p>
        <p className={styles.footerItem}>Pressure<img src={pressure} alt="icon"/>{data.main.pressure} hPa</p>
        <p className={styles.footerItem}> 
        Max temp
        <img src={max} alt="icon" height={55} width={55}/>
         {(data.main.temp_max - 273).toFixed(1)} C°
        </p>
        <p className={styles.footerItem}>
        Min temp
        <img src={min} alt="icon" height={55} width={55}/>
          {(data.main.temp_min - 273).toFixed(1)} C°
        </p>
      </footer>
    </div>
  );
}
