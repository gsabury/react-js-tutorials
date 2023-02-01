import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';
import Profile from './Components/Profile';
function App() {
  return (
    <div className="App">
      <Hello />
      <Profile fname="Ghafor" lname="Sabury" age="32"/>
      <Profile fname="Jumah" lname="Mohammadi" age="30"/>
      <Profile fname="Mahmood" lname="Sabeghi" age="29">
        <p>Component Child</p>
      </Profile>
    </div>
  );
}

export default App;
