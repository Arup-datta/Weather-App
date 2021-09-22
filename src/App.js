import './App.css';
import { Homepage } from './components/Homepage';
import "./styles/imgstyle.css";

function App() {
  const ImgUrl = '../images/zionnp.jpg';
  const converted = {
      backgroundImage: 'url(' + ImgUrl + ')',
      transition: "0.4 ease-out",
      backgroundSize: "cover",
      backgroundPosition: "center top",
      minWidth: "60vh",
      minHeight: "100vh",
      // color: 'blue'
  };
  

  return (
      <div className="app">
        <main>
          <Homepage/>
        </main>
      </div>
   
  );
}

export default App;
