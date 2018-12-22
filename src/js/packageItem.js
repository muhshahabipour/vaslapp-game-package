import { extend } from "underscore";

class PackageItem {
    constructor(packageItem) {
        
        this.packageItem = extend({
            id: guid(),
            point: "",
            number: 0,
            price: 0,
        }, packageItem);
    }

    getPackage() {
        return this.packageItem
    }
}


export { PackageItem as default }