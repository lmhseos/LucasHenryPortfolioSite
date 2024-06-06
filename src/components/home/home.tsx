import './home.css';
import Me from '../../assets/Me.jpg';

function Home() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <h1>Hi, I'm Lucas, I am a Software Engineer</h1>
        </header>
        <p className='paragraph'>
          I have experience in full stack development, as well as a background in computer science. I am always looking for new opportunities to learn and grow.
        </p>
      </div>
      <div className='App-body'>
        <img src={Me} alt="Lucas" />
      </div>
    </div>
  );
}

export default Home;
