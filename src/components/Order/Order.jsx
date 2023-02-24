// import './count.css';
// import './goods.css';
// import './order.css';

import { OrderGoods } from '../OrderGoods/OrderGoods';
import style from './Order.module.css';
const orderList = ['Супер сырный', 'Картошка фри', 'Жгучий хот-дог'];

export const Order = () => {
  return (
    <div className="order">
      <section className={style.wrapper}>
        <div className={style.header} tabIndex="0" role="button">
          <h2 className={style.title}>Корзина</h2>

          <span className={style.count}>4</span>
        </div>

        <div className={style.wrap_list}>
          <ul className={style.list}>
            {orderList.map((elem, i) => {
              return <OrderGoods goodsTitle={elem} key={i} />;
            })}

            {/* <li className="item">
              <img className="image" src="img/burger_1.jpg" alt="Супер сырный" />

              <div className="goods">
                <h3 className="goods__title">Супер сырный</h3>

                <p className="goods__weight">512г</p>

                <p className="goods__price">
                  1279
                  <span className="currency">₽</span>
                </p>
              </div>

              <div className="count">
                <button className="count__minus">-</button>
                <p className="count__amount">1</p>
                <button className="count__plus">+</button>
              </div>
            </li> */}
          </ul>

          <div className={style.total}>
            <p>Итого</p>
            <p>
              <span className={style.amount}>1279</span>
              <span className={style.currency}>₽</span>
            </p>
          </div>

          <button className={style.submit}>Оформить заказ</button>

          <div className={style.apeal}>
            <p className={style.text}>Бесплатная доставка</p>
            <button className={style.close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  );
};
