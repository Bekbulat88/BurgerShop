import { Count } from '../Count/Count';
import style from './OrderGoods.module.css';

export const OrderGoods = (props) => {
  return (
    <li key={props.i} className={style.item}>
      <img className={style.image} src="img/burger_1.jpg" alt={props.goodsTitle} />

      <div className={style.goods}>
        <h3 className={style.title}>{props.goodsTitle}</h3>

        <p className={style.weight}>512г</p>

        <p className={style.price}>
          1279
          <span className={style.currency}>₽</span>
        </p>
      </div>
      <Count count={1} />
    </li>
  );
};
