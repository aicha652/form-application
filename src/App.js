import './App.css';
import Form from './Form';
import { UserContext } from './contexts/UserContext';

function App() {
  return (
    <UserContext.Provider 
     value={{ userName: "aicha", name: "aicha", email: "aicha@gmail.com" }}>
      <div className="App">
        <Form />
      </div>
    </UserContext.Provider>
  );
}

export default App;
