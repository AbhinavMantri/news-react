import React from 'react';
import { Row, Col } from 'antd';

import withLoader from '../../hoc/withLoader';

const TopHeadlines = ({ topheadlines }) => {
    return (
        <>
            <h4 className="top-head">Top HeadLines</h4> 
            <Row>  
                {topheadlines.map(t => { 
                    return ( 
                        <Col span={24}> 
                            <div className="top-headline"> 
                                <div className="top-headline-header"> 
                                    <h4>{t.title}</h4>
                                </div>
                                {/* <div className="top-headline-content"> 
                                    <img src={t.urlToImage} alt={t.title} /> 
                                    <p>{t.description}</p> 
                                </div>  */}
                            </div> 
                        </Col> 
                    ); 
                })}
            </Row> 
        </>
    );  
}

export default React.memo(withLoader(TopHeadlines));