import { observable, computed, action } from 'mobx';
import { Order } from '../util/models/order';
import mockPets from '../util/Moks/api';

export class OrderStore {
    // Mybe need re-hydrate
    @observable orders: Order[] = [new Order(0, mockPets[0], [])];

    @action addOrder(order: Order) {
        this.orders.push(order);
    }

    @computed get totalPrice() {
        return this.orders.reduce((prev, value) => prev + value.price, 0);
    }
}

const OrderStoreInstance = new OrderStore();
export default OrderStoreInstance;