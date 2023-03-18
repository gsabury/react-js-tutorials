
import "./App.css";

import { Provider } from "react-redux";

import store from "./store/store";

import Cart from './components/Cart';

const App = ()=>{
  

  return (
      <Provider store={store}>
        <Cart />
      </Provider>
  );
}

export default App;
