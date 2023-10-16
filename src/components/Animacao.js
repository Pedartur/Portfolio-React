import styles from'./Animacao.module.css';
import Image from '../assests/Visionary technology-bro.png';

function Animacao(){
    return(
        <div className={styles.animacao}>
            <img  src={Image} width={"80%"}/>
        </div>
    )
}

export default Animacao