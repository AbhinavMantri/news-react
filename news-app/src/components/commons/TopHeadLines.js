import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import withLoader from '../../hoc/withLoader';

import '../../assets/css/commons/top-headlines.css';

const TopHeadlines = ({ topheadlines, title }) => {
    return (
        <div className="top-headlines">
            <h4 className="top-head">{title || 'Top HeadLines'}</h4> 
            <Row>  
                {topheadlines.map(t => { 
                    return ( 
                        <Col span={24}> 
                            <div className="top-headline"> 
                                <div className="top-headline-header"> 
                                    <h4>
                                        <Link to={`/news/${t.title}`}>{t.title}</Link>
                                    </h4>
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
        </div>
    );  
}

export default React.memo(withLoader(TopHeadlines));