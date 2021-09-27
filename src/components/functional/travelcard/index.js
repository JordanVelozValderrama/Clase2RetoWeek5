import React from "react";
import './index.css'
import PropTypes from "prop-types";

const TravelCard = (props) => {
    const { name,
        title,
        img,
        color,
        additional,
        showAdditional} = props

    return (
        <div className="travel-wrapper" style={{backgroundColor:color,color:'#fff'}}>
            <h3 style={{textAlign:"left"}}>{title}</h3>
            <br>
            </br>
            <img alt={name} src={img} />
            <h2>{name}</h2>
            {additional && (
                <button 
                    onClick={() => showAdditional(additional)}
                >
                    More info
                </button>
            )}
        </div>
    )
};

TravelCard.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    additional: PropTypes.shape({
        link: PropTypes.string,
        notes: PropTypes.string
    }),
    showAdditional: PropTypes.func.isRequired
}

TravelCard.defaultProps = {
    additional: {
        notes: 'No additional information'
    }
}

export default TravelCard;