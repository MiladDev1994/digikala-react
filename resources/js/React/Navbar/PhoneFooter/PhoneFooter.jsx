import React, {useContext} from 'react';
import styles from './PhoneFooter.module.css';
import {Link} from "react-router-dom";
import {MenuContext} from "../Context/MenuContextProvider";

const PhoneFooter = () => {

    const {menu , setMenu} = useContext(MenuContext);
    return (
        <div className={`w-100 bg-dark p-0 text-light ${styles.box} border-top border-secondary border-opacity-25`}>
            <Link to={'/'} className={'d-flex align-items-center justify-content-center flex-column w-100 py-1'}>
                <i className={'bi-person-fill h3'} />
                <div className={styles.text}>دیجی&zwnj;کالای&zwnj;من</div>
            </Link>
            <Link className={'d-flex align-items-center justify-content-center flex-column w-100 py-1'}>
                <i className={'bi-lightning-fill h5'} />
                <div className={styles.text}>مگنت</div>
            </Link>
            <Link to={'/'} className={'d-flex align-items-center justify-content-center flex-column w-100 py-1'}>
                <i className={'bi-bag-fill h5'} />
                <div className={styles.text}>سبد&zwnj;خرید</div>
            </Link>
            <Link onClick={() => setMenu(true)} className={'d-flex align-items-center justify-content-center flex-column w-100 py-1'}>
                <i className={'bi-list h3'} />
                <div className={styles.text}>دسته&zwnj;بندی&zwnj;ها</div>
            </Link>
            <Link to={'/'} className={'d-flex align-items-center justify-content-center flex-column w-100 py-1'}>
                <i className={'bi-house-fill h5'} />
                <div className={styles.text}>خانه</div>
            </Link>
        </div>
    );
};

export default PhoneFooter;
