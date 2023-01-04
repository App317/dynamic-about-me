import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Container,
} from 'reactstrap';
//import { Link } from 'react-router-dom';
import styles from '../../modules/peopleCardFront.module.css';
//{/*className={styles.name}*/}

const PeopleCardFront = ({ person }) => {
  const { name, profileImg } = person;
  return (
    <Card className={styles.card}>
      <CardImg src={profileImg} alt={name} />
      <CardImgOverlay>
        <CardTitle className={styles.name}>{name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default PeopleCardFront;
