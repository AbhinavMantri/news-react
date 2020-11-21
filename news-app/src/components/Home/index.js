import React from 'react';
import { Card, Row, Col } from 'antd';
import withLoader from '../../hoc/withLoader';

import defaultImg from '../../assets/img/default-news-card.png';

const Home = props => {
    const { news } = props || {};
    const { page, data } = news || {};

    return (
        <>
            <div className="news-list" onScroll={e => props.onNewsScroll(e, page + 1)}>
                <Row>
                    {data.map(d => {
                        return (
                            <Col span={12}>
                                <Card 
                                    hoverable
                                    cover={
                                        <img
                                            alt={d.title}
                                            src={d.urlToImage && d.urlToImage !== "null" ? d.urlToImage : defaultImg}
                                        />
                                    }
                                >
                                    <Card.Meta
                                        title={d.title}
                                        description={d.description}
                                    />
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>      
        </>
    );
}

export default withLoader(Home);