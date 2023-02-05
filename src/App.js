import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';
import Profile from './Components/Profile';
import DestructureProps from './Components/DestructureProps';
import EventHandling from './Components/EventHandling';
import ConditionalRendering from './Components/ConditionalRendering';
import ConditionalRendering2 from './Components/ConditionalRendering2';
import ConditionalRendering3 from './Components/ConditionalRendering3';
import RenderingListOfObjects from './Components/RenderingListOfObjects';
import RenderingListOfArray from './Components/RenderingListOfArray';
import SimpleTodoApp from './Components/SimpleTodoApp';
import InlineStyleComponent from './Components/InlineStyleComponent';
import StyleSheetComponent from './Components/StyleSheetComponent';
import CssModuleComponent from './Components/CssModuleComponent';
import FragmentComponent from './Components/FragmentComponent';
import UsingFragmentInTable from './Components/UsingFragmentInTable';
function App() {
  return (
    <div className="App">
      <Hello />
      <Profile fname="Ghafor" lname="Sabury" age="32"/>
      <Profile fname="Jumah" lname="Mohammadi" age="30"/>
      <Profile fname="Mahmood" lname="Sabeghi" age="29">
        <p>Component Child</p>
      </Profile>
      <DestructureProps fname="Ali" lname="Qasemi" age="25"/>

      <EventHandling/>

      <ConditionalRendering></ConditionalRendering>
      <ConditionalRendering2/>
      <ConditionalRendering3/>
      <RenderingListOfObjects/>
      <RenderingListOfArray/>

      <SimpleTodoApp/>

      <InlineStyleComponent/>

      <StyleSheetComponent/>

      <CssModuleComponent/>

      <FragmentComponent/>
      
      <UsingFragmentInTable/>
      
    </div>
  );
}

export default App;
