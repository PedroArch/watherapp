import styles from '../styles/components/Main.module.css';

function Main() {
  return (
    <div className={styles.container}>
      <p>arch.weather</p>
      <div className={styles.weatherInfo}>
        <h1>08&#176;</h1>
        
        <div className={styles.cityDate}>
          <strong>London</strong>
          <p>06:09 - Domingo 06/09/2020</p>
        </div>
      </div>
    </div>
  )
}

export default Main
