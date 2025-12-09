import './App.css';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <ProblemSolution />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
