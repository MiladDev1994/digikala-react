import React, {useContext} from 'react';
import {ProductContext} from "../Context/ProductContexProvider";

const About = () => {

    const {product , favorite} = useContext(ProductContext);

    return (
        <div className={'px-3 text-light'}>
            <h5 className={'opacity-50'}>درباره محصول</h5>
            {product.length ?
                <div className={'px-3 py-2 border border-secondary rounded-4 shadow mt-3 opacity-50'} style={{lineHeight: '2'}}>{product[0].product[0].about}</div>
                : null
            }

        </div>
    );
};

export default About;
