import React from 'react';

import loader from '../../assets/img/loader.jpg';

import '../../assets/css/commons/loader.css';

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <div className="loader">
                <img src={loader} />
            </div>
        </div>
    );
}

export default Loader;