export default class GenericCollection extends Collection {
    /** @inheritdoc */
    static get model(): typeof Generic;
    /** @inheritdoc */
    static get allowedFilters(): any[];
    path: any;
}
import Collection from "cytomine-client/src/collections/collection";
import Generic from "cytomine-client/src/models/generic";
//# sourceMappingURL=generic-collection.d.ts.map