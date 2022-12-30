import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import PeopleCardFront from './PeopleCardFront';
//import PeopleCard1
//import PeopleCard1
//import PeopleCard1
import { selectAllPeople } from './peopleSlice';

const PeopleCardGroup = () => {
  const people = useSelector(selectAllPeople);
  console.log('people:', people);

  return (
    <Row>
      {people.map((person) => {
        return (
          <Col key={person.id}>
            <PeopleCardFront person={person} />
          </Col>
        );
      })}
    </Row>
  );
};

export default PeopleCardGroup;
