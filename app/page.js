import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles['main']}>
      <form className={styles['search-area']}>
        <input className={styles['search-area__input']}/>
        <img 
          className={styles['search-area__img']} 
          src="/images/magnifyGlass.png"/>
        <ul className={styles['suggestion-area']}>
          <li className={styles['suggestion-area__bar']}>
            <img 
              className={styles['suggestion-area__thumbnail']}
              src="/images/opening.png"/>
            <div className={styles['suggestion-area__title']}>
              또롱맨 깃허브
            </div>
          </li>
          <li className={styles['suggestion-area__bar']}>
            <img 
              className={styles['suggestion-area__thumbnail']}
              src="/images/openingZero.png"/>
            <div className={styles['suggestion-area__title']}>
              또롱맨 유튜브
            </div>
          </li>
        </ul>
      </form>
    </main>
  )
}
