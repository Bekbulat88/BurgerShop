import { useState } from 'react';
import style from './Count.module.css';

export const Count = (props) => {
  let [count, setCount] = useState(props.count);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };

  return (
    <div className={style.count}>
      <button className={style.minus} onClick={decrement} disabled={count === 1}>
        -
      </button>
      <p className={style.amount}>{count}</p>
      <button className={style.plus} onClick={increment}>
        +
      </button>
    </div>
  );
};
