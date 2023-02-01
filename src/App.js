import logo from './logo.svg';
import './App.css';
import Message from './Components/Message';
import Profile from './Components/Profile';
function App() {
  return (
    <div className="App">
     <Message/>
     <Profile fname="Ghafor" lname="Sabury" age="32"/>
     <Profile fname="Jumah" lname="Mohammadi" age="29"/>
     <Profile fname="Mahmood" lname="Sabeghi" age="28"/>
    </div>
  );
}

export default App;
