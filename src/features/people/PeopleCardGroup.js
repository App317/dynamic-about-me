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
import PeopleCardFront from './PeopleCardFront';
import PeopleCard1 from './PeopleCard1';
import PeopleCard2 from './PeopleCard2';
import PeopleCard3 from './PeopleCard3';
import { selectAllPeople } from './peopleSlice';
import styles from '../../modules/peopleCardGroup.module.css';
import { StackCard } from 'react-stack-cards';
// <div className={styles.CardGroup} key={person.id}>
// <CardGroup className={styles.BigCardGroup}>
// <> </>
const PeopleCardGroup = () => {
  const people = useSelector(selectAllPeople);
  console.log('people:', people);

  return (
    <>
      {people.map((person) => {
        return (
          <CardGroup className={styles.BigCardGroup}>
            <Card>
              <PeopleCard3 person={person} />
            </Card>
            <Card>
              <PeopleCard2 person={person} />
            </Card>
            <Card>
              <PeopleCard1 person={person} />
            </Card>
            <Card>
              <PeopleCardFront person={person} />
            </Card>
          </CardGroup>
        );
      })}
    </>
  );
};

export default PeopleCardGroup;
