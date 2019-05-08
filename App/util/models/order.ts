import { iPet } from "./pets";

export class Order {
    constructor(public id: number, public pet: iPet, purchasedAccessories: any[]) { }

    get price() {
        // TODO sum accesories price
        return this.pet.price
    }
}