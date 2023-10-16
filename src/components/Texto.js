import styles from './Texto.module.css';
function Texto(){
    return(
        <div className={styles.main}>
  <div class="container">
    <h2 className={styles.h2}>Bem-Vindo, eu sou Pedro Arthur</h2>
    <p class={styles.p}>Este é o meu portfólio para apresentar <br/> meus projetos </p>
  </div>
</div>
    )
}

export default Texto