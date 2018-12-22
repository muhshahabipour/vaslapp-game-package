import { each } from "underscore"



class PackagesList {
    constructor(data) {
        this.data = data || [];
    }

    addPackageItem(packageItem) {
        this.data.push(packageItem.getPackage())
    }

    removePackageItem(idToRemove) {
        this.data = (this.data).filter(el => {
            return el.id !== idToRemove; //delete this
        });
    };

    updateValueNestedPackageItem(idToUpdate, name, value) {
        this.data = each(this.data, function (item) {
            if (item.id == idToUpdate) {
                item[name] = value;
            }
            return item;
        });

        return this.data;
    }


    getList() {
        return this.data;
    }
}


export { PackagesList as default}