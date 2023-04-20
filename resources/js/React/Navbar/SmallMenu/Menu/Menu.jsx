import React, {useContext, useEffect} from 'react';
import styles from './Menu.module.css'
import logo from "../../../../../../public/image/logo.svg";
import {Link} from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";
import {fetchCategoriesApi} from "../../../Redux/Categories/categoriesAction";
import {MenuContext} from "../../Context/MenuContextProvider";

const Menu = () => {

    const data = useSelector(element => element.category.data);
    const dispatch = useDispatch();

    const {menu , setMenu} = useContext(MenuContext)

    const menuItems = [
        {title: "سوپرمارکت", link: `1`, icon: 'bi-list'},
        {title: `پرفروش ترین ها`, link: `2`, icon: 'bi-list'},
        {title: `تخفیفها و پیشنهادات`, link: `3`, icon: 'bi-list'},
        {title: `شگفت انگیزها`, link: `4`, icon: 'bi-list'},
        {title: `در دیجیکالا بفروشید`, link: `5`, icon: 'bi-list'},
    ]

    const categoryHandler = (data) => {
        if (data.type){
            data.event.target.parentNode.parentNode.parentNode.childNodes[1].style.height = 'unset';
            data.event.target.parentNode.style.rotate = '180deg';
            data.event.target.style.display = 'none'
            data.event.target.nextElementSibling.style.display = 'block'
        }else {
            data.event.target.parentNode.parentNode.parentNode.childNodes[1].style.height = 0;
            data.event.target.parentNode.style.rotate = '0deg';
            data.event.target.style.display = 'none'
            data.event.target.parentNode.childNodes[1].style.display = 'block'
        }
    }

    useEffect(() => {
        dispatch(fetchCategoriesApi());
    } , [])

    return (
        <div className={'position-relative'}>
            <i className={`position-absolute bi-x-lg text-light ${styles.closeBtn}`} onClick={() => setMenu(false)}/>
            <div className={'w-100 d-flex align-items-center py-3 border-bottom border-secondary border-opacity-10'}>
                <img src={logo} className={'m-auto'}/>
            </div>
            <div className={'text-light py-2 border-bottom border-secondary border-opacity-10'}  onClick={() => setMenu(false)}>
                {
                    menuItems.map(item =>
                        <Link key={item.title} to={item.link} className={`d-flex align-items-sm-center justify-content-end px-3 ${styles.menuItem}`}>
                            <div className={'opacity-75'}>{item.title}</div>
                            <i className={`${item.icon} h5 mt-2 me-1`}/>
                        </Link>
                    )
                }
            </div>
            <div className={`text-light ${styles.menuTitr}`}>
                <h5 className={'text-center py-2'}>دسته بندی ها</h5>
                <div className={`w-100 ${styles.menuItemBox}`} dir={'rtl'}>
                    {
                        data.map(item => item.level === 1 ?
                            <div key={item.id} className={`py-2 px-3 opacity-75 border-bottom border-secondary border-opacity-10`} style={{fontSize:'14px'}}>
                                <div className={`d-flex justify-content-between ${styles.menuMain}`}>
                                    <Link to={`/${item.id}`} className={styles.menuLink}  onClick={() => setMenu(false)}>{item.name}</Link>
                                    {
                                        item.child.length ?
                                            <div className={`${styles.arrowBox} rounded-pill position-relative`}>
                                                <i className={'bi-chevron-down'} />
                                                <div
                                                    className={`${styles.arrowBoxOpen} position-absolute  w-100 h-100`}
                                                    onClick={event => categoryHandler({event: event, product: item, type: true})}
                                                />
                                                <div
                                                    className={`${styles.arrowBoxClose} position-absolute  w-100 h-100`}
                                                    onClick={event => categoryHandler({event: event, product: item, type: false})}
                                                />
                                            </div>
                                            : null
                                    }
                                </div>
                                <div className={styles.underMenu}>
                                    {
                                        data.map(itemB => item.id === itemB.parent_id ?
                                            <div key={itemB.id} className={'py-2 px-3 mt-1'}>
                                                <div className={'d-flex justify-content-between'}>
                                                    <Link to={`/${itemB.id}`} className={styles.menuLink} onClick={() => setMenu(false)}>{itemB.name}</Link>
                                                    {
                                                        itemB.child.length ?
                                                            <div className={`${styles.arrowBox} rounded-pill position-relative`}>
                                                                <i onClick={event => categoryHandler({event: event, product: itemB, type: true})} className={'bi-chevron-down'} />
                                                                <div
                                                                    className={`${styles.arrowBoxOpen} position-absolute  w-100 h-100`}
                                                                    onClick={event => categoryHandler({event: event, product: itemB, type: true})}
                                                                />
                                                                <div
                                                                    className={`${styles.arrowBoxClose} position-absolute  w-100 h-100`}
                                                                    onClick={event => categoryHandler({event: event, product: itemB, type: false})}
                                                                />
                                                            </div>
                                                            : null
                                                    }
                                                </div>
                                                <div className={styles.underMenu}>
                                                    {
                                                        data.map(itemC => itemB.id === itemC.parent_id ?
                                                            <div key={itemC.id} className={'p-2 mt-1'}>
                                                                <div className={'d-flex justify-content-between'}>
                                                                    <Link to={`/${itemC.id}`} className={styles.menuLink} onClick={() => setMenu(false)}>{itemC.name}</Link>
                                                                    {
                                                                        itemC.child.length ?
                                                                            <div className={`${styles.arrowBox} rounded-pill position-relative`}>
                                                                                <i onClick={event => categoryHandler({event: event, product: itemC, type: true})} className={'bi-chevron-down'} />
                                                                                <div
                                                                                    className={`${styles.arrowBoxOpen} position-absolute  w-100 h-100`}
                                                                                    onClick={event => categoryHandler({event: event, product: itemC, type: true})}
                                                                                />
                                                                                <div
                                                                                    className={`${styles.arrowBoxClose} position-absolute  w-100 h-100`}
                                                                                    onClick={event => categoryHandler({event: event, product: itemC, type: false})}
                                                                                />
                                                                            </div>
                                                                            : null
                                                                    }

                                                                </div>
                                                                <div className={styles.underMenu}>
                                                                    {
                                                                        data.map(itemD => itemC.id === itemD.parent_id ?
                                                                            <div key={itemD.id} className={'p-2 mt-1'}>
                                                                                <div className={'d-flex justify-content-between'}>
                                                                                    <Link to={`/${itemD.id}`} className={styles.menuLink} onClick={() => setMenu(false)}>{itemD.name}</Link>
                                                                                    {
                                                                                        itemD.child.length ?
                                                                                            <div className={`${styles.arrowBox} rounded-pill position-relative`}>
                                                                                                <i onClick={event => categoryHandler({event: event, product: itemD, type: true})} className={'bi-chevron-down'} />
                                                                                                <div
                                                                                                    className={`${styles.arrowBoxOpen} position-absolute  w-100 h-100`}
                                                                                                    onClick={event => categoryHandler({event: event, product: itemD, type: true})}
                                                                                                />
                                                                                                <div
                                                                                                    className={`${styles.arrowBoxClose} position-absolute  w-100 h-100`}
                                                                                                    onClick={event => categoryHandler({event: event, product: itemD, type: false})}
                                                                                                />
                                                                                            </div>
                                                                                            : null
                                                                                    }

                                                                                </div>
                                                                                <div className={styles.underMenu}>1
                                                                                    {
                                                                                        data.map(itemE => itemD.id === itemE.parent_id ?
                                                                                            <div key={itemD.id} className={'p-2 mt-1'}>
                                                                                                <div className={'d-flex justify-content-between'}>
                                                                                                    <Link to={`/${itemE.id}`} className={styles.menuLink} onClick={() => setMenu(false)}>{itemE.name}</Link>
                                                                                                    {
                                                                                                        itemE.child.length ?
                                                                                                            <div className={`${styles.arrowBox} rounded-pill position-relative`}>
                                                                                                                <i onClick={event => categoryHandler({event: event, product: itemE, type: true})} className={'bi-chevron-down'} />
                                                                                                                <div
                                                                                                                    className={`${styles.arrowBoxOpen} position-absolute  w-100 h-100`}
                                                                                                                    onClick={event => categoryHandler({event: event, product: itemE, type: true})}
                                                                                                                />
                                                                                                                <div
                                                                                                                    className={`${styles.arrowBoxClose} position-absolute  w-100 h-100`}
                                                                                                                    onClick={event => categoryHandler({event: event, product: itemE, type: false})}
                                                                                                                />
                                                                                                            </div>
                                                                                                            : null
                                                                                                    }

                                                                                                </div>
                                                                                                <div className={styles.underMenu}>1
                                                                                                    {
                                                                                                        data.map(itemF => itemE.id === itemF.parent_id ?
                                                                                                            <div key={itemD.id} className={'p-2 mt-1'}>
                                                                                                                <div className={'d-flex justify-content-between'}>
                                                                                                                    <Link to={`/${itemF.id}`} className={styles.menuLink} onClick={() => setMenu(false)}>{itemF.name}</Link>
                                                                                                                    {
                                                                                                                        itemF.child.length ?
                                                                                                                            <div className={`${styles.arrowBox} rounded-pill position-relative`}>
                                                                                                                                <i onClick={event => categoryHandler({event: event, product: itemF, type: true})} className={'bi-chevron-down'} />
                                                                                                                                <div
                                                                                                                                    className={`${styles.arrowBoxOpen} position-absolute  w-100 h-100`}
                                                                                                                                    onClick={event => categoryHandler({event: event, product: itemF, type: true})}
                                                                                                                                />
                                                                                                                                <div
                                                                                                                                    className={`${styles.arrowBoxClose} position-absolute  w-100 h-100`}
                                                                                                                                    onClick={event => categoryHandler({event: event, product: itemF, type: false})}
                                                                                                                                />
                                                                                                                            </div>
                                                                                                                            : null
                                                                                                                    }
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            : null
                                                                                                        )
                                                                                                    }
                                                                                                </div>
                                                                                            </div>
                                                                                            : null
                                                                                        )
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                            : null
                                                                        )
                                                                    }
                                                                </div>
                                                            </div>
                                                            : null
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            : null
                                        )
                                    }
                                </div>
                            </div>
                            : null
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;
