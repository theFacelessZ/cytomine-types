export default class StorageCollection extends Collection {
    /** @inheritdoc */
    static get model(): typeof Storage;
    /** @inheritdoc */
    static get allowedFilters(): any[];
    all: any;
}
import Collection from "cytomine-client/src/collections/collection";
import Storage from "cytomine-client/src/models/storage";
//# sourceMappingURL=storage-collection.d.ts.map