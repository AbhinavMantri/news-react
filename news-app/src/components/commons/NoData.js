import React from 'react';

import '../../assets/css/commons/no-data.css';

const NoData = ({ message }) => {
    return (
        <div className="no-data">
            <div className="no-data-message">
                <span>{message || 'No Data Available'}</span>
            </div>
        </div>
    );
}

export default NoData;