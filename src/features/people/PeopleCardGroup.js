import { useSelector } from 'react-redux';
import { Col, Row, CardGroup, Card } from 'reactstrap';
import PeopleCardFront from './PeopleCardFront';
import PeopleCard1 from './PeopleCard1';
//import PeopleCard1
//import PeopleCard1
import { selectAllPeople } from './peopleSlice';
import styles from '../../modules/CardGroup.module.css';
// <Col key={person.id}> <PeopleCard1 person={person} /> </Col>

const PeopleCardGroup = () => {
  const people = useSelector(selectAllPeople);
  console.log('people:', people);

  return (
    <>
      {people.map((person) => {
        return (
          <div className={styles.CardGroup} key={person.id}>
            {/*<PeopleCard3 />*/}
            {/*<PeopleCard2 />*/}
            <PeopleCard1 person={person} />
            <PeopleCardFront person={person} />
          </div>
        );
      })}
    </>
  );
};

export default PeopleCardGroup;
