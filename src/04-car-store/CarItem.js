import React from 'react'

export const CarItem = (props) => {

    const { addCarToCart, make, model, inventory, id } = props;
    const isSoldOut = inventory === 0;
    const imageUrl = `/images/${make}-${model}.png`;

    return (
        <div id={`car-item-${id}`}>
            <img src={imageUrl} alt="car"/>
            <span>Make: {make}</span>
            <span>Model: {model}</span>
            <button
                onClick={addCarToCart}
                disabled={isSoldOut ? '' : 'disabled'}>
                {isSoldOut ? 'Car Sold Out' : 'BUY NOW!'}
            </button>
        </div>
    )
};
