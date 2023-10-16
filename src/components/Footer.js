import styles from './Footer.module.css';
import Image from '../assests/index';

function Footer(){
    return(
        <div className={styles.footer}>
            <a className={styles.a} href="https://www.instagram.com/pedro_artt/" target="_blank" ><img className={styles.img} src={Image.Instaicon}/></a>
            <a className={styles.a} href="https://whatsa.me/5531997773933" target="_blank"><img className={styles.img} src={Image.Whatsicon}/></a>
            <a className={styles.a} href="https://www.linkedin.com/in/pedro-arthur-430b06226/" target="_blank"><img className={styles.img} src={Image.Linkicon}/></a>
            {/* <p className={styles.p}>CopyRight By Pedro Arthur</p> */}
        </div>
    )
}

export default Footer