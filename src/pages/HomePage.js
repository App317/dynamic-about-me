import { Container } from 'reactstrap';
import PeopleCardGroup from '../features/people/PeopleCardGroup';
import PeopleCardFront from '../features/people/PeopleCardFront';
import PeopleCard1 from '../features/people/PeopleCard1';

const HomePage = () => {
  return (
    <Container>
      <PeopleCardGroup />
    </Container>
  );
};

export default HomePage;
