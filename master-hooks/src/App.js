import './App.css';
import UseState from './components-useReducer/UseState';
import UseReducerHook from './components-useReducer/UseReducerHook';
import UseReducerLikeRedux from './components-useReducer/UseReducerLikeRedux';

function App() {
  return (
    <div className="App">
      <UseState />
      <UseReducerHook />
      <UseReducerLikeRedux />
    </div>
  );
}

export default App;
