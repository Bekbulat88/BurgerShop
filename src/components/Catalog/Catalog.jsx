import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsRequestAsync } from '../../store/category/productsSlice';
import { CatalogProduct } from '../CatalogProduct/CatalogProduct';
import { Container } from '../Container/Container';
import { Order } from '../Order/Order';
import style from './Catalog.module.css';
import './product.css';

export const Catalog = () => {
  const { products } = useSelector((state) => state.products);
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (category.length) {
      dispatch(productsRequestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory]);

  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order />
        <div className={style.wrapper}>
          <h2 className={style.title}>{category[activeCategory]?.rus}</h2>

          <div className={style.wrap_list}>
            {products.length ? (
              <ul className={style.list}>
                {products.map((elem) => {
                  return (
                    <li key={elem.id}>
                      <CatalogProduct elem={elem} />
                    </li>
                  );
                })}
              </ul>
            ) : (
              'К сожалению товаров в данной категории нет'
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
