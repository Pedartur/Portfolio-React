import styles from './Contato.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from '../../assests';

function Contato(){
    return(
        <div className={styles.pag}>
        <Header/>
        <div className={styles.corp}>
        <img className={styles.img} src={Image.Email}/>
        <div className={styles.main}>
            <img className={styles.phone} src={Image.Telefone}/>
            <h5 className={styles.h5}>Meios de Contato</h5>
            <a className={styles.a} href="https://www.instagram.com/pedro_artt/" target="_blank" ><img className={styles.icon} src={Image.Instaicon}/>Instagram</a>
            <a className={styles.a} href="https://whatsa.me/5531997773933" target="_blank"><img className={styles.icon} src={Image.Whatsicon}/>(31) 99777-3933</a>
            <a className={styles.a} href="https://www.linkedin.com/in/pedro-arthur-430b06226/" target="_blank"><img className={styles.icon} src={Image.Linkicon}/>Pedro Arthur</a> 
        </div>
        </div>
        <Footer/>
        </div>
    )
}
    

export default Contato