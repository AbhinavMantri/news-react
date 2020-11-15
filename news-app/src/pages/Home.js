import React from 'react';
import { connect } from 'react-redux';

const Home = props => {
    return (
        <div className="home-wrapper">
            <h1>Home Page</h1>
        </div>
    );
}

const mapStateToProps = ({ app }) => {
    return {
        app,
    };
}

export default connect(mapStateToProps, {})(Home);