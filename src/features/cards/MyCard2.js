import { Card, CardImg, CardTitle, CardBody, CardText, Col } from 'reactstrap';
//import { Link } from 'react-router-dom';
import styles from '../../modules/MyCard2.module.css';

const MyCard2 = ({ card }) => {
  const {
    name,
    description,
    jobImg,
    schoolImg,
    gradientColor1,
    gradientColor2,
    gradientColor3,
  } = card;
  return (
    <Card className={styles.card}>
      <CardBody
        className={styles.border}
        style={{
          background: `linear-gradient(
          ${gradientColor1},${gradientColor2},${gradientColor3} )`,
        }}
      >
        <CardTitle
          className={styles.title}
          style={{ color: `${gradientColor1}` }}
        >
          About Me
        </CardTitle>
        <CardImg className={styles.img} src={jobImg} alt={name} />
        <CardText className={styles.cardText}>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard2;
