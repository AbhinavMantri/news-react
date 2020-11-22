import { Col, Layout, Row } from 'antd';
import React from 'react';
import { connect } from 'react-redux';

import TopHeadLines from '../components/commons/TopHeadLines';
import { newsAction } from '../actions';
import constants from '../constants';
import Loader from '../components/commons/Loader';
import Home from '../components/Home';
import { debounce } from '../utils';

import '../assets/css/home.css';

class HomePage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            source: null,
        };

        this.onNewsScrollCall = debounce(this.requestNews, 300);
    }

    componentDidMount() {
        this.props.newsAction(constants.ACTIONS.SET_NEWS_PROVIDER, this.props.match.params.provider);
    }

    componentWillReceiveProps(newProps) {
        if(newProps.app.sources && newProps.app.sources.length > 0 && newProps.app.sources !== this.props.app.sources) {
            const provider = newProps.match.params.provider ? newProps.app.sources.find(d => d.id === newProps.match.params.provider) : newProps.app.sources[0];
            this.setState({source: provider.id });
            this.requestNewsProvider(provider);
        }

        if(newProps.match.params.provider !== this.props.match.params.provider) {
            this.requestNewsProvider(newProps.match.params.provider ? {id: newProps.match.params.provider} : newProps.app.sources[0]);    
        }
    }


    requestNewsProvider(provider) {
        const { id } = provider || {};
        const { app } = this.props || {};
        const { providers } = app || {};

        if(!(providers[id] && providers[id].topheadlines))
            this.props.newsAction(constants.ACTIONS.GET_TOP_HEADLINES, { source: id }); 
            
        if(!(providers[id] && providers[id].news))    
            this.requestNews(id);
    }

    requestNews(id = this.state.source, page = 1) {
        this.props.newsAction(constants.ACTIONS.GET_NEWS, { source: id, page });
    }

    onNewsScroll(e) {
        if (e.target.scrollTop >= (e.target.scrollHeight - e.target.clientHeight - 5)) {
            const { app } = this.props || {};
            const { providers } = app || {};
            const { news } = providers[this.state.source] || {};

            this.onNewsScrollCall(this.state.source, news.page ? news.page + 1 : 1);
        }
    }

    render() {
        const { app, match } = this.props ||  {};
        const { provider } = match.params || {};
        const { sources } = app || {};
        const { Content } = Layout;
        const { topheadlines, news } = app.providers[provider || (sources && sources.length > 0 ? sources[0].id : '')] || {};

        return ( 
            <>
                
                <Layout className="site-layout">
                    <div className="site-layout-background">
                        {sources ?
                        <Content>
                            <Row>
                                <Col span={16}>
                                    <Home
                                        show={news}
                                        news={news}
                                        onNewsScroll={e => this.onNewsScroll(e)}
                                        onNewsClick={title => this.props.history.push(`/news/${title}`)}
                                    />
                                </Col>
                                <Col span={8}>
                                    <TopHeadLines
                                        show={sources && topheadlines}
                                        topheadlines={topheadlines}
                                    />
                                </Col>
                            </Row>
                        </Content> : <Loader />}
                    </div>  
                </Layout>
            </> 
        );
    }
}

const mapStateToProps = ({ app }) => { return { app }; }

export default connect(mapStateToProps, { newsAction })(HomePage);