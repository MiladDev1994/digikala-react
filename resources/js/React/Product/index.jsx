import React from 'react';
import Product from "./Product";
import ProductContexProvider from "./Context/ProductContexProvider";

const Index = () => {
    return (
        <ProductContexProvider>
            <Product />
        </ProductContexProvider>
    );
};

export default Index;
