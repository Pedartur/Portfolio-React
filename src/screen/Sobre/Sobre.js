import styles from './Sobre.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from '../../assests';

function Sobre(){
    return(
        <div className={styles.pag}>
            <Header/>
            <div className={styles.corp}>
                <img className={styles.img} src={Image.Art}/>
                <div className={styles.text}>
                {/* <h2 className={styles.h2}>Sobre Mim</h2> */}
                <h5 className={styles.h5}>Desenvolvedor <span className={styles.span}> Full Stack</span></h5>
                <p className={styles.p}>Sou um desenvolvedor de 21 anos que ama tecnologia e inovação. Atualmente, estou cursando Engenharia de Computação no CEFET-MG, onde venho aprimorando meu conhecimento em diversas áreas da computação. Minha curiosidade pelo desenvolvimento de software me levou a me tornar um desenvolvedor full stack, permitindo-me trabalhar tanto na criação do front-end quanto do back-end.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Sobre