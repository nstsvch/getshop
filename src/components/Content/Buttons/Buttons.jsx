import React from 'react'; 
import Button from './Button';
import styles from './Buttons.module.css'


class Buttons extends React.Component {
    render() {
        return (
            <div className={styles.buttons}>
                <Button className={styles.button} value="1"/>
                <Button className={styles.button} value="2"/>
                <Button className={styles.button} value="3"/>
                <Button className={styles.button} value="4"/>
                <Button className={styles.button} value="5"/>
                <Button className={styles.button} value="6"/>
                <Button className={styles.button} value="7"/>
                <Button className={styles.button} value="8"/>
                <Button className={styles.button} value="9"/>
                <Button className={`${styles.clear} ${styles.button}`} value="Стереть" />
                <Button className={styles.button} value="0"/>
            </div>
        );
    }
}

export default Buttons;