import './App.css';
import BodList from './component/BodList';
import ClubDetails from './component/ClubDetails';

function App() {
  return (
    <div className="my-4 App md:my-8">
      <ClubDetails/>
      <BodList/>
      <p className='mt-8 text-base md:text-lg'>“ Inspiring growth and change ”</p>
    </div>
  );
}

export default App;
