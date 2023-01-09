import { render } from '@testing-library/react';
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Col,
  Row,
} from 'reactstrap';
import { PEOPLE } from '../../app/shared/PEOPLE';
//import { Link } from 'react-router-dom';
import styles from '../../modules/peopleCard1.module.css';

const jobAndSchool = ({ person }) => {
  return (
    
  )
}


const PeopleCard1test = ({ person }) => {
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
        <Row>
          <Col md="6">
            <CardImg src={jobImg} width="100%" alt={name} />
          </Col>
          <Col md="6">
            <CardText className={styles.cardText}>{description}</CardText>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PeopleCard1test;
