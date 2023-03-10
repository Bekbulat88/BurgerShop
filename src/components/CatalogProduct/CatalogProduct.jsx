import { useDispatch } from 'react-redux';
import { API_URI } from '../../const';
import { addProductToCart } from '../../store/order/orderSlice';
import style from './CatalogProduct.module.css';

export const CatalogProduct = (props) => {
  const dispatch = useDispatch();
  return (
    <article className={style.product}>
      <img src={`${API_URI}/${props.elem.image}`} alt={props.elem.title} className={style.image} />

      <p className={style.price}>
        {props.elem.price}
        <span className="currency">₽</span>
      </p>

      <h3 className={style.title}>
        <button className={style.detail}>{props.elem.title}</button>
      </h3>

      <p className={style.weight}>{props.elem.weight}г</p>

      <button
        className={style.add}
        type="button"
        onClick={() => {
          dispatch(addProductToCart({ id: props.elem.id }));
        }}
      >
        Добавить
      </button>
    </article>
  );
};
