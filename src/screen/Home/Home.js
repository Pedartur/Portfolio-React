import styles from'./Home.module.css';
import Header from '../../components/Header';
import Texto from '../../components/Texto';
import Animacao from '../../components/Animacao';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.body}>
      <Animacao/>
      <Texto/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
