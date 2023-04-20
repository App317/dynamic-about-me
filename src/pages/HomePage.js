import { Container } from 'reactstrap';
import HomeMenu from '../features/menu/HomeMenu';
import styles from '../modules/HomePage.module.css';

const HomePage = () => {
  return (
    <Container className={styles.container}>
      <div>{<HomeMenu />}</div>
    </Container>
  );
};

export default HomePage;
