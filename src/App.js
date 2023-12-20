import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navsection from './Navbar';
import Carouselsection from './Carosel';
import "./style.css";
import Crud from './Crud';

function App() {
  return (
    <div className="App">
      <Navsection />
      <Carouselsection />
      <Crud />
    </div>
  );
}

export default App;
