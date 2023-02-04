import logo from './logo.svg';
import './App.css';
import Message from './Components/Message';
import Profile from './Components/Profile';
import DestructureProps from './Components/DestructureProps';
import EventHandling from './Components/EventHandling';
import Form from './Components/Form';
function App() {
  return (
    <div className="App">
     <Message/>
     <Profile fname="Ghafor" lname="Sabury" age="32"/>
     <Profile fname="Jumah" lname="Mohammadi" age="29"/>
     <Profile fname="Mahmood" lname="Sabeghi" age="28"/>
     <DestructureProps fname="Ali" lname="Qasemi" age="25"/>
     <EventHandling />

     <Form/>
    </div>
  );
}

export default App;
