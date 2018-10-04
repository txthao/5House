import { ShopVM } from "./shop-vm";
export class HomeVM {
    home_title: string;
    shops: ShopVM[];

    constructor() {
        this.home_title = 'Home title';
        this.shops = [];
    }
}
