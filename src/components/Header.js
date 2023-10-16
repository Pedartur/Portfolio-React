import styles from './Header.module.css';

function Header(){
    return(
        <nav className={styles.nav}>
  <h2 className={styles.navh2}>Port<span className={styles.navspan}>folio</span></h2>
  <div class="collapse navbar-collapse" id="NavBar">
    <ul className={styles.navulli}>
      <li class="nav-item active">
        <a className={styles.navullia} href="/">Home </a>
      </li>
      <li class="nav-item">
        <a className={styles.navullia} href="/about">Sobre Mim</a>
      </li>
      <li class="nav-item">
        <a className={styles.navullia} href="/project">Projetos</a>
      </li>
      <li class="nav-item">
        <a className={styles.navullia} href="/client">Clientes</a>
      </li>
      <li class="nav-item">
        <a className={styles.navullia} href="/contact">Contato</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Header