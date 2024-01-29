import './App.css';
import UseState from './components/UseState';
import UseReducerHook from './components/UseReducerHook';
import UseReducerLikeRedux from './components/UseReducerLikeRedux';

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
