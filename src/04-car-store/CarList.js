import React from 'react'

export const CartList = ({ title, children }) => {
    return (
     <div className="car-list">
         <h3>{title}</h3>
         {children}
     </div>
    )
};
