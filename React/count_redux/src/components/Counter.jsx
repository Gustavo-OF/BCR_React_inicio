import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment} from "../store/action";

export default function Counter(props) {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    function handleIncrementClick() {
        dispatch(increment(1))
    }
    function handleIncrementClick2() {
        dispatch(increment(2))
    }
    function handleDecrementClick() {
        dispatch(decrement(1))
    }
    function handleDecrementClick2() {
        dispatch(decrement(2))
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrementClick}>+ 1</button>
            <button onClick={handleIncrementClick2}>+ 2</button>
            <button onClick={handleDecrementClick}>- 1</button>
            <button onClick={handleDecrementClick2}>-2</button>
        </div>
    )
}