import styles from '../styles/pages/Home.module.css'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Main />
      </div>
      <div className={styles.rightContainer}>
        teste
      </div>
    </div>
  )
}
