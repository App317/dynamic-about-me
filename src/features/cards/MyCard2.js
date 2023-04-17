import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Col,
  Row,
} from 'reactstrap';
//import { Link } from 'react-router-dom';
import styles from '../../modules/MyCard2.module.css';

const MyCard2 = ({ card }) => {
  const {
    name,
    description,
    htmlLogo,
    cssLogo,
    jsLogo,
    card2Img1,
    card2Img2,
    card2Img3,
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
        <Row>
          <Col>
            <CardImg className={styles.rowImg} src={htmlLogo} alt={name} />
          </Col>
          <Col>
            <CardImg className={styles.rowImg} src={cssLogo} alt={name} />
          </Col>
          <Col>
            <CardImg className={styles.rowImg} src={jsLogo} alt={name} />
          </Col>
          <Col className="m-3">
            <CardText className={styles.cardText}>{description}</CardText>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardImg className={styles.img} src={card2Img2} alt={name} />
          </Col>
          <Col>
            <CardText className={styles.cardText}>{description}</CardText>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardImg className={styles.img} src={card2Img3} alt={name} />
          </Col>
          <Col>
            <CardText className={styles.cardText}>{description}</CardText>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default MyCard2;
