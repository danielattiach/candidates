import { Container } from '@mui/system';
import { Candidates } from './components/candidates';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration)
dayjs.extend(relativeTime)

function App() {
  return (
    <Container>
      <Candidates />
    </Container>
  );
}

export default App;
