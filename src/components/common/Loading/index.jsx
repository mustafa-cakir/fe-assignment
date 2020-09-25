import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ size }) => {
    return (
        <div className={`loading size-${size}`}>
            loading... <div>...</div>
        </div>
    );
};

Loading.propTypes = {
    size: PropTypes.string,
};

Loading.defaultProps = {
    size: 'small',
};

export default Loading;
