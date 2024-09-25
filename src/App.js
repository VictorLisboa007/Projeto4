import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavBar from './components/MyNavBar.jsx';
import MyAlert from './components/MyAlert.jsx';
import MyButton from './components/MyButton.jsx';
import MyCard from './components/MyCard.jsx';
import MyCarousel from './components/MyCarousel.jsx';
import MyModal from './components/MyModal.jsx';
import MyLogin from './components/MyLogin.jsx';
import MyCadastro from './components/MyCadastro.jsx';

function App() {
  return (
    <div className="App">
      <MyNavBar/>
      {/* <MyAlert/>
      <MyButton/>
      <MyCard/>
      <MyCarousel/>
      <MyModal/>
      <MyLogin/> */}
      <MyCadastro/>
    </div>
  );
}

export default App;
