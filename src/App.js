import './App.css';
import { Footer } from './components/footer/Footer';
// components
import { Header } from './components/header/Header';
import { Maincontent } from "./components/maincontent/Maincontent"

function App() {
  return (
    <>
      <Header/>
      <Maincontent/>
      <Footer/>
    </>
  );
}

export default App;
