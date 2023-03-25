// import './count.css';
// import './goods.css';
// import './order.css';

import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../store/modalDelivery/modalDeliverySlice';
import { orderRequestAsync } from '../../store/order/orderSlice';
import { ModalDelivery } from '../ModalDelivery/ModalDelivery';
import { OrderGoods } from '../OrderGoods/OrderGoods';
import style from './Order.module.css';
// const orderList = ['Супер сырный', 'Картошка фри', 'Жгучий хот-дог'];

export const Order = () => {
  const { totalPrice, totalCount, orderGoods, orderList } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  let [openOrder, setOpenOrder] = useState(false);

  useEffect(() => {
    dispatch(orderRequestAsync());
  }, [orderList.length]);

  return (
    <div className={classNames(style.order, openOrder ? style.order_open : '')}>
      <section className={style.wrapper}>
        <div
          className={style.header}
          tabIndex="0"
          role="button"
          onClick={() => {
            setOpenOrder(!openOrder);
          }}
        >
          <h2 className={style.title}>Корзина</h2>

          <span className={style.count}>{totalCount}</span>
        </div>

        <div className={style.wrap_list}>
          <ul className={style.list}>
            {orderGoods.map((elem) => {
              return <OrderGoods {...elem} key={elem.id} />;
            })}
          </ul>

          <div className={style.total}>
            <p>Итого</p>
            <p>
              <span className={style.amount}>{totalPrice}</span>
              <span className={style.currency}>&nbsp; ₽</span>
            </p>
          </div>

          <button
            className={style.submit}
            disabled={!orderGoods.length}
            onClick={() => {
              dispatch(openModal());
            }}
          >
            Оформить заказ
          </button>

          <div className={style.apeal}>
            <p className={style.text}>Бесплатная доставка</p>
            <button className={style.close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  );
};
