import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';
//import { Link } from 'react-router-dom';
import styles from '../../modules/peopleCardFront.module.css';
//{/*className={styles.name}*/}

const PeopleCardFront = ({ person }) => {
  const {
    name,
    profileImg,
    nameColor,
    gradientColor1,
    gradientColor2,
    gradientColor3,
  } = person;
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
        <CardImg src={profileImg} width="100%" alt={name} />
      </CardBody>
    </Card>
  );
};

export default PeopleCardFront;
