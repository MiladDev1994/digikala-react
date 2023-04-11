import React from 'react';
import styles from './SmallMenu.module.css';
import digiLogo from '../../../../../public/image/logo.svg'

const SmallMenu = () => {

    return (
        <div className={`${styles.box} bg-dark align-items-center justify-content-between px-4`}>

            <i className={'bi-question-diamond h5 text-light'} />
            <img src={digiLogo}  alt={'logo'}/>
            <i className={'bi-list h4 text-light'} />

        </div>
    );
};

export default SmallMenu;
