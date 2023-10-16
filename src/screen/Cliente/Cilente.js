import styles from './Cliente.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from '../../assests';

function Cliente(){
    return(
        <div className={styles.container}>
      <Header/>
      <div className={styles.body}>
      <div className={styles.cardgp}>
  <div className={styles.card}>
    <img className={styles.img} src={Image.Usuario}/>
    <div class="card-body">
      <h5 className={styles.h5}>Galeria de Jogos</h5>
      <p className={styles.p}>É uma empresa de pequeno porte, cujo seus serviços são de vendas de jogos digitais para todas as plataformas</p>
    </div>
  </div>
  <div className={styles.card}>
    <img className={styles.img} src={Image.Usuario}/>
    <div class="card-body">
      <h5 className={styles.h5}>Empresa de E-commerce Local</h5>
      <p className={styles.p}>Nossa empresa de e-commerce local é um ponto de referência para compras online na região.</p>
    </div>
  </div>
  <div className={styles.card}>
    <img className={styles.img} src={Image.Usuario}/>
    <div class="card-body">
      <h5 className={styles.h5}>Aplicativo de Bem-Estar Pessoal</h5>
      <p className={styles.p}>Nossa startup tem a missão de promover o bem-estar pessoal e a saúde mental por meio da tecnologia.</p>
    </div>
  </div>
</div>
      </div>
      <Footer/>
    </div>
    )
}

export default Cliente