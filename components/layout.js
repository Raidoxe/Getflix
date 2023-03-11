import styles from './layout.module.css'




export default function Layout({ children }) {
  return <div className={styles.container}>
  <div className={styles.header}><img className="logo-main" src="/images/GetFlix.png"></img>
  <p className="quote">"For TV executives that want to go home early"</p>
  </div>
  <div className={styles.main}>{children}</div>
  <div className={styles.footer}><p>We retain all merchandise and animation rights for any series you make based on this generator</p></div>
   
  </div>
}
