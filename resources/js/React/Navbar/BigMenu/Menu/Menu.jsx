import React from 'react';
import styles from './Menu.module.css';
import {Link} from "react-router-dom";

const Menu = ({category}) => {

    // const newCategory =  category.filter(element => item.id === element.parent_id);
    //
    // console.log(newCategory)

    // console.log(category)
    return (
        <div className={`${styles.Box} position-absolute bg-dark shadow`}>
            <div className={`${styles.head} border-start border-secondary border-opacity-10`}>
                {
                    category.map(item => item.level === 1 ?
                        <Link to={``} key={item.id} className={`btn btn-dark rounded-0 d-flex ${styles.headItem}`}>
                            <img src={`http://127.0.0.1:8000/images/${item.logo}`} className={`${styles.logo} ms-2 mt-1 opacity-50`}/>
                            <div>{item.name}</div>
                            <div className={`${styles.menuFooter} bg-dark p-3`} style={{cursor:'default'}}>
                                {
                                    category.map(itemB => item.id === itemB.parent_id ?
                                        <div className={'float-end p-3 text-end'} key={itemB.id}>
                                            <Link to={`/${itemB.id}`} className={`border-end border-danger px-2 mt-2 ${styles.menuItem}`} style={{fontWeight:'1000'}}>{itemB.name}</Link>
                                            {
                                                category.map(itemC => itemB.id === itemC.parent_id ?
                                                    <div key={itemC.id}>
                                                        {/*<Link to={`/${itemC.id}`} className={`px-2 mt-2  ${styles.menuItem}`}>{itemC.name}</Link>*/}
                                                        {
                                                            category.map(itemD => itemC.id === itemD.parent_id ?
                                                                <div key={itemD.id}>
                                                                    {/*<Link to={`/${itemD.id}`} className={`px-2 mt-2  ${styles.menuItem}`}>{itemD.name}</Link>*/}
                                                                    {
                                                                        category.map(itemE => itemD.id === itemE.parent_id ?
                                                                            <div key={itemE.id}>
                                                                                {/*<Link to={`/${itemE.id}`} className={`px-2 mt-2  ${styles.menuItem}`}>{itemE.name}</Link>*/}
                                                                                {
                                                                                    category.map(itemF => itemE.id === itemF.parent_id ?
                                                                                        <div key={itemF.id}>
                                                                                            {/*<Link to={`/${itemF.id}`} className={`px-2 mt-2  ${styles.menuItem}`}>{itemF.name}</Link>*/}

                                                                                        </div>
                                                                                        : null)
                                                                                }
                                                                            </div>
                                                                            : null)
                                                                    }
                                                                </div>
                                                                : null)
                                                        }
                                                    </div>
                                                    : null)
                                            }
                                        </div>
                                        : null)
                                }
                            </div>
                        </Link>
                         : null )
                }
            </div>
        </div>
    );
};

export default Menu;
