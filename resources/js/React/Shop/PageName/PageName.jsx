import React, {useContext} from 'react';
import styles from "../Shop.module.css";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {FetchApiContext} from "../../Context/FetchApiContextProvider";

const PageName = () => {

    const variety = useContext(FetchApiContext);
    const categories = useSelector(item => item.category.data);
    const params = useParams();
    const types = params.id.split('-')[0];

    return (
        <div className={`${styles.box} text-light px-4 d-flex align-items-center justify-content-start opacity-50`} style={{height: '40px' , fontSize: '13px'}}>

            فروشگاه اینترنتی دیجی‌کالا /
            {types === 'category' ?
                <>
                {categories.length ?
                        categories.map(item => item.id === Number(params.id.split('-')[1]) ?
                            <div key={item.id} className={'d-flex align-items-center justify-content-start'} dir={'ltr'}>
                                {`${item.name} ${item.parent.length ? `/` : ``}`}
                                {
                                    categories.map(itemB => itemB.id === item.parent_id ?
                                        <div key={itemB.id} className={'d-flex align-items-center justify-content-start'} dir={'ltr'}>
                                            {`${itemB.name} ${itemB.parent.length ? `/` : ``}`}
                                            {
                                                categories.map(itemC => itemC.id === itemB.parent_id ?
                                                    <div key={itemC.id} className={'d-flex align-items-center justify-content-start'} dir={'ltr'}>
                                                        {`${itemC.name} ${itemC.parent.length ? `/` : ``}`}
                                                        {
                                                            categories.map(itemD => itemD.id === itemC.parent_id ?
                                                                <div key={itemD.id} className={'d-flex align-items-center justify-content-start'} dir={'ltr'}>
                                                                    {`${itemD.name} ${itemD.parent.length ? `/` : ``}`}
                                                                    {
                                                                        categories.map(itemE => itemE.id === itemD.parent_id ?
                                                                            <div key={itemE.id} className={'d-flex align-items-center justify-content-start'} dir={'ltr'}>
                                                                                {`${itemE.name} ${itemE.parent.length ? `/` : ``}`}
                                                                                {
                                                                                    categories.map(itemF => itemF.id === itemE.parent_id ?
                                                                                        <div key={itemF.id} className={'d-flex align-items-center justify-content-start'} dir={'ltr'}>
                                                                                            {`${itemF.name} ${itemF.parent.length ? `/` : ``}`}

                                                                                        </div>
                                                                                        :null
                                                                                    )
                                                                                }
                                                                            </div>
                                                                            :null
                                                                        )
                                                                    }
                                                                </div>
                                                                :null
                                                            )
                                                        }
                                                    </div>
                                                    :null
                                                )
                                            }
                                        </div>
                                        :null
                                    )
                                }
                            </div>
                            :null
                        )
                        :null
                }
                </>
                : types === 'brand' ?
                        variety.length ?
                            ` ${variety[0].brand.name}`
                            : null

                    : types === 'moreSell' ?
                        <> {` پرفروش ها `} </>
                        : types === 'special' ?
                            <> {` شگفت انگیز ها `} </>
                            : types === 'seller' ?
                                variety.length ?
                                    ` ${variety[0].user.seller_name}`
                                    : null
                                : null
            }

        </div>
    );
};

export default PageName;
