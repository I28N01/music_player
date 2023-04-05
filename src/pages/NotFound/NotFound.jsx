import page from './NotFound.module.scss';
import image from '../../img/smile_crying.png'
import { NavLink } from 'react-router-dom';

export const NotFound = function () {
    return (
        <section className={page.NotFound}>
        <div className={page.block}>
            <div className={page.title}>404</div>
            <div className={page.textBox}>
                <div className={page.subTitle}>Страница не найдена</div>
                <img src={image} alt={page.Crying} />
            </div>
            <div className={page.text}>Возможно, она была удалена или перенесена на другой адрес</div>
            <NavLink to="/"><div className={page.Button}>Вернуться на главную</div></ NavLink>
        </div>
        </section>
    )
  }

  export default NotFound;