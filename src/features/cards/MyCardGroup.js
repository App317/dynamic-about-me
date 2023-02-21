import { useSelector } from 'react-redux';
import {
  CardGroup,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Container,
  Row,
  Col,
} from 'reactstrap';
import MyCard1 from './MyCard1';
import MyCard2 from './MyCard2';
import MyCard3 from './MyCard3';
import MyCard4 from './MyCard4';
import { selectAllCards } from './cardGroupSlice';
import styles from '../../modules/MyCardGroup.module.css';
import { StackCard } from 'react-stack-cards';
// <div className={styles.CardGroup} key={person.id}>
// <CardGroup className={styles.BigCardGroup}>
// <> </>
const MyCardGroup = () => {
  const card = useSelector(selectAllCards);
  console.log('card:', card);

  return (
    <>
      {card.map((card) => {
        return (
          <CardGroup className={styles.BigCardGroup}>
            <Card>
              <MyCard4 card={card} />
            </Card>
            <Card>
              <MyCard3 card={card} />
            </Card>
            <Card>
              <MyCard2 card={card} />
            </Card>
            <Card>
              <MyCard1 card={card} />
            </Card>
          </CardGroup>
        );
      })}
    </>
  );
};

export default MyCardGroup;
