import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Style.scss';

const TitleBreaker = ({ title, titleColor, subtitle, ctaText, ctaLink }) => {
    return (
        <div className="title-breaker">
            <div className="row align-items-center">
                <div className="col col-content">
                    <h2 className={`color-${titleColor}`}>{title}</h2>
                    {subtitle && <div className="subtitle mt-3 mt-lg-0">{subtitle}</div>}
                </div>
                {ctaText && (
                    <div className="col col-btn">
                        <ConditionalLink ctaLink={ctaLink} ctaText={ctaText} />
                    </div>
                )}
            </div>
        </div>
    );
};

TitleBreaker.propTypes = {
    title: PropTypes.string.isRequired,
    titleColor: PropTypes.string,
    subtitle: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
};

TitleBreaker.defaultProps = {
    titleColor: null,
    subtitle: null,
    ctaText: null,
    ctaLink: null,
};

export default TitleBreaker;

const ConditionalLink = ({ ctaLink, ctaText }) => {
    if (ctaLink)
        return (
            <Link to={ctaLink} className="btn" title={ctaText}>
                {ctaText}
            </Link>
        );
    return (
        <button type="button" className="btn">
            {ctaText}
        </button>
    );
};
