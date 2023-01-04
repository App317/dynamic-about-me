import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Container,
} from 'reactstrap';
//import { Link } from 'react-router-dom';
import styles from '../../modules/peopleCard1.module.css';

const PeopleCard1 = ({ person }) => {
  const { name, bigImg1 } = person;
  return (
    <Card className={styles.card}>
      <CardImg src={bigImg1} alt={name} />
      <CardImgOverlay>
        <CardTitle className={styles.name}>{name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default PeopleCard1;
