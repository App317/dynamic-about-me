import { useSelector } from 'react-redux';
import { Col, Row, CardGroup, Card, Container } from 'reactstrap';
import PeopleCardFront from './PeopleCardFront';
import PeopleCard1 from './PeopleCard1';
//import PeopleCard2
//import PeopleCard3
import { selectAllPeople } from './peopleSlice';
import styles from '../../modules/peopleCardGroup.module.css';
import { StackCard } from 'react-stack-cards';
// <div className={styles.CardGroup} key={person.id}>

const PeopleCardGroup = () => {
  const people = useSelector(selectAllPeople);
  console.log('people:', people);
  return (
    <>
      {people.map((person) => {
        return (
          <>
            <CardGroup className={styles.BigCardGroup}>
              {/*<PeopleCard3 />*/}
              {/*<PeopleCard2 />*/}
              <PeopleCard1 className={styles.BigCard1} person={person} />
              <PeopleCardFront person={person} />
            </CardGroup>
          </>
        );
      })}
    </>
  );
};

export default PeopleCardGroup;
