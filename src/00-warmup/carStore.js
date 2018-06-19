'use strict';

export class CarStore {

    constructor(storeName, inventory) {
        this.storeName = storeName;
        this.inventory = [...inventory];
        this.numberSold = 0;
        this.lastSoldCar = '';
    }

    startTransaction(chosenCar) {
        this.transactionDate = new Date.now();
        this.buyCar(chosenCar);
    }

    carAvailable(chosenCar) {
        this._inventory.some((inventoryCar) => chosenCar === inventoryCar);
    }

    getCarIndex (chosenCar) {
        this._inventory.forEach((car, index) => {
            if (car === chosenCar) {
                return index;
            }
        });
    }

    geCarReceipt() {
        return `${this.storeName}-${this.lastSoldCar}-${this.transactionDate}`;
    }

    buyCar(chosenCar) {

        if(this.carAvailable(chosenCar)) {
            const carIndex = this.getCarIndex(chosenCar);

            if(carIndex) {
                this._inventory = this._inventory.splice(this.getCarIndex, 1);
            }

            this.numberSold = ++this.numberSold;

            return this.geCarReceipt();
        }
    }
}