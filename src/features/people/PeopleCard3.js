import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';
//import { Link } from 'react-router-dom';
import styles from '../../modules/peopleCard3.module.css';

const PeopleCard3 = ({ person }) => {
  const { name, hobbyImg2, gradientColor1, gradientColor2, gradientColor3 } =
    person;
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

export default PeopleCard3;
