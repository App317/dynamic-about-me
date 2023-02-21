import { Card, CardImg, CardTitle, CardBody, Col } from 'reactstrap';
//import { Link } from 'react-router-dom';
import styles from '../../modules/MyCard4.module.css';

const Card4 = ({ card }) => {
  const { name, hobbyImg2, gradientColor1, gradientColor2, gradientColor3 } =
    card;
  return (
    <Card className={styles.card}>
      <CardBody
        className={styles.border}
        style={{
          background: `linear-gradient(to bottom right,
          ${gradientColor1},${gradientColor2},${gradientColor3} )`,
        }}
      >
        <CardTitle
          className={styles.title}
          style={{ color: `${gradientColor3}` }}
        >
          Hobbies
        </CardTitle>
        <CardImg src={hobbyImg2} alt={name} />
      </CardBody>
    </Card>
  );
};

export default Card4;
