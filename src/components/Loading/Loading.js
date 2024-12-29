import { Spin } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const Loading = ({ state }) => {
    return <Spin spinning={state} fullscreen />;
};

Loading.propTypes = {
    state: PropTypes.bool,
};

export default Loading;
