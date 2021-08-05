import React from 'react';
import background from '../../images/promo-zone.png'
import Buttons from './Buttons/Buttons';
import styles from './Content.module.css'

class Content extends React.Component {
    render() {
        return (
        <div className={styles.backgroundImage} style ={ { backgroundImage: `url(${background})` } } alt="малыш с собакой">
            <div className={styles.content}>
                <h1>Введите ваш номер <br/> мобильного телефона </h1>
                <div className={styles.number} id="number">+7(___)___-__-__</div>
                <p>и с Вами свяжется наш менеждер для <br/> дальнейшей консультации</p>
                <Buttons />
            </div>
        </div>
        );
    }
}

export default Content;