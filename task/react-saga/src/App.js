
import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import Data from './components/Data';
import { GET_PRODUCT_PROGRESS } from './redux-saga/admin/action/action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_PROGRESS });
  }, []);

  return (
    <div className="App">
      <Data/>
    </div>
  );
}

export default App;
