import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import store from './store';
import { increment,decrement } from './action'; 
const CounterComponent = () => { 
    const count = useSelector(state => state.count);
    const dispatch = useDispatch(); 
    return ( 
        <div style={{marginTop:250,marginLeft:670,fontWeight:700,fontSize:20}}> 
            <h1>Count: {count}</h1> 
            <button onClick={() => dispatch(increment()) }>Increment</button> 
            <button onClick={() => dispatch(decrement())}>Decrement</button> 
        </div> 
    ); 
}; 
export default CounterComponent;