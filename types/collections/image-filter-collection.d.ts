export default class ImageFilterCollection extends Collection {
    /** @inheritdoc */
    static get model(): typeof ImageFilter;
    /** @inheritdoc */
    static get allowedFilters(): any[];
}
import Collection from "cytomine-client/src/collections/collection";
import ImageFilter from "cytomine-client/src/models/image-filter";
//# sourceMappingURL=image-filter-collection.d.ts.map