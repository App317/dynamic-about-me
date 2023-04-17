import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardHeader,
  Col,
} from 'reactstrap';
//import { Link } from 'react-router-dom';
import styles from '../../modules/MyCard1.module.css';
//{/*className={styles.name}*/}

const MyCard1 = ({ card }) => {
  const {
    name,
    card1Img,
    nameColor,
    gradientColor1,
    gradientColor2,
    gradientColor3,
  } = card;
  return (
    <Card className={styles.card}>
      <CardBody
        className={styles.border}
        style={{
          background: `linear-gradient(to bottom right,
          ${gradientColor1},${gradientColor2},${gradientColor3} )`,
        }}
      >
        <CardTitle className={styles.name} style={{ color: `${nameColor}` }}>
          {name}
        </CardTitle>
        <CardImg className={styles.img} src={card1Img} alt={name} />
      </CardBody>
    </Card>
  );
};

export default MyCard1;
