import './App.css';
import { Data } from './Data';
import MeanComponent from './component/MeanComponent';
import MedianComponent from './component/MedianComponent';
import ModeComponent from './component/ModeComponent';

function App() {

  return (
    <div>
      <MeanComponent />
      <MedianComponent />
      <ModeComponent />
      
    </div>
  );
}

export default App;
