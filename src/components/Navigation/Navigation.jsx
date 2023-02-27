import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URI } from '../../const';
import { categoryRequestAsync, changeCategory } from '../../store/category/categorySlice';
import { Container } from '../Container/Container';
import style from './Navigation.module.css';

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => {
    return state.category;
    console.log(category);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryRequestAsync('max'));
  }, []);

  return (
    <nav className={style.navigation}>
      <Container className={style.container}>
        <ul className={style.list}>
          {category.map((item, i) => {
            return (
              <li className={style.item}>
                <button
                  className={classNames(
                    style.button,
                    activeCategory === i ? style.button_active : '',
                  )}
                  style={{ backgroundImage: `url(${API_URI}/${item.image})` }}
                  onClick={() => {
                    dispatch(changeCategory({ indexCategory: i }));
                  }}
                >
                  {item.rus}
                </button>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
};
