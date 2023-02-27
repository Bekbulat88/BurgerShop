import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../../store/order/orderSlice';
import style from './Count.module.css';

export const Count = ({ count, id }) => {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(addProductToCart({ id }));
  };
  const decrement = () => {
    dispatch(removeProductFromCart({ id }));
  };

  return (
    <div className={style.count}>
      <button className={style.minus} onClick={decrement}>
        -
      </button>
      <p className={style.amount}>{count}</p>
      <button className={style.plus} onClick={increment}>
        +
      </button>
    </div>
  );
};
