import { ACTIONS } from './App';

export default function DigitButton({ dispatch, digit }) {
  return (
    <button 
    style={{ width: 80, height: 80,}}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
