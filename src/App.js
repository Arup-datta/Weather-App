import './App.css';
import { Homepage } from './components/Homepage';
import "./styles/imgstyle.css";

import zion from './images/zionnp.jpg'
import grandCanyon from './images/grandcanyon.jpeg';

import { images } from './styles/images';

function App() {

  // const ara = []
  // ara.push(zion);
  // ara.push(grandCanyon);

  const converted = {
      backgroundImage: `url(${images()})`,
      transition: "0.4 ease-out",
      backgroundSize: "cover",
      backgroundPosition: "center top",
      minWidth: "60vh",
      minHeight: "100vh",
    ///  backgroundColor: 'blue'
  };


  const style = {
      backgroundColor: 'blue'
  }

  return (
      <div style = {converted}>
        <main>
          <Homepage/>
        </main>
      </div>
   
  );
}

export default App;
