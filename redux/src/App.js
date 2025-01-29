import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment,decrement } from './features/counter/counterSlice';
function App() {
  const curState=useSelector((state)=>state.number);
  const dispatch=useDispatch();
  return (
    <>
    <h1 style={{backgroundColor:"pink"}}>React redux</h1>

    <h1>{curState}</h1>

    <button onClick={()=>dispatch(increment(10))}>Inc</button>
    <button onClick={()=>dispatch(decrement())}>Dec</button>
    </>
  );
}

export default App;
