import CardsPage from '@pages/Cards/Cards.page';
import { Overlay } from './layouts/Overlay';

function App() {
  return (
    <>
      <Overlay>
        <div
          style={{ width: '100px', height: '100px', backgroundColor: 'white' }}
        >
          test
        </div>
      </Overlay>
    </>
  );
}

export default App;
