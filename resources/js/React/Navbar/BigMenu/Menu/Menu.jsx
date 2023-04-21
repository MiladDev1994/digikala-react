import React, {useContext, useEffect} from 'react';
import styles from './Menu.module.css';
import {Link} from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";
import {MenuContext} from "../../Context/MenuContextProvider";
// import {fetchApi} from "../../../Redux/Categories/categoryAction";

const Menu = () => {

    const {menu , setMenu} = useContext(MenuContext);
    const category = useSelector(element => element.category.data);
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(fetchApi());
    } , [])
    return (
        <div className={`${styles.Box} position-absolute bg-dark shadow d-flex`}>
            <div className={`${styles.head} border-end border-secondary border-opacity-10`}>
                {
                    category.map(item => item.level === 1 ?
                        <div key={item.id} className={`btn btn-dark rounded-0 d-flex ${styles.headItem}`} onClick={() => setMenu(false)}>
                            <img src={`http://127.0.0.1:8000/images/${item.logo}`} className={`${styles.logo} me-2 mt-1 opacity-50`}/>
                            <Link to={`shop/category-${item.id}`} className={'w-100 text-start'}>{item.name}</Link>
                            <div className={`${styles.menuFooter} bg-dark p-3`} style={{cursor:'default'}}>
                                {
                                    category.map(itemB => item.id === itemB.parent_id ?
                                        <div key={itemB.id} className={'float-start px-3 text-start mt-2'}>
                                            <Link to={`shop/category-${itemB.id}`} onClick={() => setMenu(false)} className={`border-start border-danger px-2  ${styles.menuItem}`} style={{fontWeight:'1000'}}>{itemB.name}</Link>
                                            {
                                                category.map(itemC => itemB.id === itemC.parent_id ?
                                                    <div key={itemC.id} className={'mt-2'}>
                                                        <Link to={`shop/category-${itemC.id}`} onClick={() => setMenu(false)} className={`px-2 ${styles.menuItem}`}>{itemC.name}</Link>
                                                        {
                                                            category.map(itemD => itemC.id === itemD.parent_id ?
                                                                <div key={itemD.id} className={'mt-2'}>
                                                                    <Link to={`shop/category-${itemD.id}`} onClick={() => setMenu(false)} className={`px-2 ${styles.menuItem}`}>{itemD.name}</Link>
                                                                    {
                                                                        category.map(itemE => itemD.id === itemE.parent_id ?
                                                                            <div key={itemE.id} className={'mt-2'}>
                                                                                <Link to={`shop/category-${itemE.id}`} onClick={() => setMenu(false)} className={`px-2 ${styles.menuItem}`}>{itemE.name}</Link>
                                                                                {
                                                                                    category.map(itemF => itemE.id === itemF.parent_id ?
                                                                                        <div key={itemF.id} className={'mt-2'}>
                                                                                            <Link to={`shop/category-${itemF.id}`} onClick={() => setMenu(false)} className={`px-2 ${styles.menuItem}`}>{itemF.name}</Link>

                                                                                        </div> : null
                                                                                    )
                                                                                }
                                                                            </div> : null
                                                                        )
                                                                    }
                                                                </div> : null
                                                            )
                                                        }
                                                    </div> : null
                                                )
                                            }
                                        </div> : null
                                    )
                                }
                            </div>
                        </div> : null
                    )
                }
            </div>

            <div className={`bg-dark p-3 ${styles.menuFooterFake}`}>
                {
                    category.map(itemB => category[0].id === itemB.parent_id ?
                        <div key={itemB.id} className={'float-start px-3 text-start mt-2'}>
                            <Link to={`shop/category-${itemB.id}`} onClick={() => setMenu(false)} className={`border-start border-danger px-2  ${styles.menuItem}`} style={{fontWeight:'1000'}}>{itemB.name}</Link>
                            {
                                category.map(itemC => itemB.id === itemC.parent_id ?
                                    <div key={itemC.id} className={'mt-2'}>
                                        <Link to={`shop/category-${itemC.id}`} onClick={() => setMenu(false)} className={`px-2 ${styles.menuItem}`}>{itemC.name}</Link>
                                        {
                                            category.map(itemD => itemC.id === itemD.parent_id ?
                                                <div key={itemD.id} className={'mt-2'}>
                                                    <Link to={`shop/category-${itemD.id}`} onClick={() => setMenu(false)} className={`px-2 ${styles.menuItem}`}>{itemD.name}</Link>
                                                    {
                                                        category.map(itemE => itemD.id === itemE.parent_id ?
                                                            <div key={itemE.id} className={'mt-2'}>
                                                                <Link to={`shop/category-${itemE.id}`} onClick={() => setMenu(false)} className={`px-2 ${styles.menuItem}`}>{itemE.name}</Link>
                                                                {
                                                                    category.map(itemF => itemE.id === itemF.parent_id ?
                                                                        <div key={itemF.id} className={'mt-2'}>
                                                                            <Link to={`shop/category-${itemF.id}`} onClick={() => setMenu(false)} className={`px-2 ${styles.menuItem}`}>{itemF.name}</Link>

                                                                        </div> : null
                                                                    )
                                                                }
                                                            </div> : null
                                                        )
                                                    }
                                                </div> : null
                                            )
                                        }
                                    </div> : null
                                )
                            }
                        </div> : null
                    )
                }
            </div>
        </div>
    );
};

export default Menu;
