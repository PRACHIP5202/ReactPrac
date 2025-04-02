import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
function App() {
  return (
    <>  
      <Navbar title="Prac" home="Hoooom"/>
      
      <div className="container">
        <Form heading="ENTER smthing"/>
      </div>
    </>
  );
}

export default App;
