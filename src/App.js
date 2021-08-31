import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store/index';
import MoviesDashboard from "./components/Dashboard";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MoviesDashboard />
      </div>
    </Provider>
  );
}

export default App;
