import { Container } from 'reactstrap';
import HomeMenu from '../features/menu/HomeMenu';
import HomeBackground from '../components/HomeBackground';
import styles from '../modules/HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      {<HomeBackground />}
      <Container className={styles.container}>{<HomeMenu />}</Container>
    </div>
  );
};

export default HomePage;
