import React, {useContext} from 'react';
import styles from './SmallMenu.module.css';
import digiLogo from '../../../../../public/image/logo.svg'
import {MenuContext} from "../Context/MenuContextProvider";
import logo from '../../../../../public/image/logo.svg'
import Menu from "./Menu/Menu";

const SmallMenu = () => {

    const {menu , setMenu} = useContext(MenuContext)

    return (
        <div className={`${styles.box} bg-dark align-items-center justify-content-between px-4`}>

            <i className={'bi-question-diamond h5 text-light'} />
            <img src={digiLogo}  alt={'logo'}/>
            <i
                className={'bi-list h4 text-light'}
                onClick={() => setMenu(true)}
            />

            <div className={`position-absolute bg-dark shadow ${menu ? styles.menuShow : styles.menuHidden}`}>
                <Menu />
            </div>

            {
                menu ?
                    <div
                        className={`${styles.menuFake} bg-dark opacity-50`}
                        onClick={() => setMenu(false)}
                    > </div>
                    : null
            }


        </div>
    );
};

export default SmallMenu;
