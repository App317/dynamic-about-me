import { Card, CardImg, CardTitle, CardBody, Col } from 'reactstrap';
//import { Link } from 'react-router-dom';
import styles from '../../modules/MyCard3.module.css';

const MyCard3 = ({ card }) => {
  const { name, hobbyImg1, gradientColor1, gradientColor2, gradientColor3 } =
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
          style={{ color: `${gradientColor2}` }}
          className={styles.title}
        >
          Hobbies
        </CardTitle>
        <CardImg src={hobbyImg1} width="100%" alt={name} />
      </CardBody>
    </Card>
  );
};

export default MyCard3;
