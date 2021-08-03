import './App.css';
import Content from './components/Content';
import background from './images/promo-zone.png'; 

function App() {
  return (
    <div className='background-image' style ={ { backgroundImage: `url(${background})` } }>
      <Content />
    </div>
    // <img src={background} alt="background"/>
  );
}

export default App;
