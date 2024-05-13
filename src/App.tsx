import './App.css'
import img1 from './assets/Me.jpg'

function App() {

  return (
  <div className = "container">
  <div className="App">
    <header className="App-header">
      <h1>Hi I'm Lucas, I am a Software Engineer</h1>
    </header>
      <p>
        I have experience in full stack development, as well as a background in computer science. I am always looking for new opportunities to learn and grow. 
      </p>
    </div>
    <div className='App-body'>
      <img src={img1} />
  </div>
  </div>
  )
}

export default App