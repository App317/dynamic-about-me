import { Container } from 'reactstrap';
import HomeMenu from '../features/menu/HomeMenu';
import HomeBackground from '../components/HomeBackground';
import styles from '../modules/HomePage.module.css';

const HomePage = () => {
  return (
    <Container className={styles.container}>
      <div>{<HomeMenu />}</div>
      <div> {<HomeBackground />} </div>
    </Container>
  );
};

export default HomePage;
