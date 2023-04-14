import React from 'react';

const Home = () => {
    return (
        <div style={{height:"2000px"}}>
            <div style={{height: '170px'}}>1</div>
            <h1
                className={'text-light'}
                onClick={event => event.target.style.display = 'none'}
            >milad</h1>
        </div>
    );
};

export default Home;
