import { Card, CardImg, CardTitle, CardBody, CardText, Col } from 'reactstrap';
//import { Link } from 'react-router-dom';
import styles from '../../modules/peopleCard1.module.css';

const PeopleCard1 = ({ person }) => {
  const {
    name,
    description,
    jobImg,
    schoolImg,
    gradientColor1,
    gradientColor2,
    gradientColor3,
  } = person;
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

export default PeopleCard1;
