import React from 'react'
import { CartList } from "./CarList";
import { CarItem } from "./CarItem";

export const CarContainer = (props) => {

    console.log('pr', props);
  return (
      <div>
          <CartList title="Tesla Testing STore">
              {props.cars.map((car) =>
                  <CarItem
                      key={car.id}
                      make={car.make}
                      model={car.model}
                      inventory={car.inventory}
                      addCarToCart={props.addCarToCart}
                  />
              )}
          </CartList>
      </div>
  )
};