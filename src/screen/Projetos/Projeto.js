import styles from './Projeto.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from '../../assests';

function Projeto(){
    return(
        <div className={styles.pag}>
             <Header/>
             <div  className={styles.corp}>
             <img className={styles.img} src={Image.Serve}/>
             <div className={styles.main}>
             <h5 className={styles.h5}>Projeto 1</h5>
             <img className={styles.icon} src={Image.Proj}/>
             <a href="https://github.com/Pedartur/avaliacao_tecnica" target="_blank"><button className={styles.btn}>Acessar o Código</button></a>
             <img className={styles.icon} src={Image.Proj}/>
             <h5 className={styles.h5}>Projeto 2</h5>
             <a href="https://github.com/Pedartur/Estudo-HTML-CSS" target="_blank"><button className={styles.btn}>Acessar o Código</button></a>
             </div>
             </div>
             <Footer/>
        </div>
    )
}

export default Projeto