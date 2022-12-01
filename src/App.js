
import './App.css';
import Header from "./components/header"
import  Intro from "./components/intro"
import Why from "./components/why"
import Latestarticle from "./components/latestarticle";
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro />
      <Why/>
      <Latestarticle/>
      <Footer/>
    </div>
  );
}

export default App;
