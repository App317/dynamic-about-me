import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from 'reactstrap';
//import { Link } from 'react-router-dom';
import styles from '../../modules/peopleCardFront.module.css';

const PeopleCardFront = ({ person }) => {
  const { id, name, profileImg } = person;
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
