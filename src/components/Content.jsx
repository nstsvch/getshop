import React from 'react';

class Content extends React.Component {
    render() {
        function push() {
            let btn = document.getElementsByTagName('button');
            for (let i = 0; i < btn.length; i++) {
                console.log(btn[i].innerHTML)
            }  
        }
        return (
        <div className="content">
            <header>Введите ваш номер <br/> мобильного телефона </header>
            <div className="number" id="number">+7(___)___-__-__</div>
            <p>и с Вами свяжется наш менеждер для <br/> дальнейшей консультации</p>
            <div className="buttons">
                <button onClick={push}>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="clear">Стереть</button>
                <button>0</button>
            </div>
        </div>
        );
    }
}

export default Content;