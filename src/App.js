import './App.css';
import Header from './component/Header';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import Banner from './component/Banner';
import Converter from './component/Converter';

function App() {
  return (
   <>
      <Header/>
      <Banner/>
      <Converter/>
   </>
  );
}

export default App;
