export default class ImageServerCollection extends Collection {
    /** @inheritdoc */
    static get model(): typeof ImageServer;
    /** @inheritdoc */
    static get allowedFilters(): any[];
}
import Collection from "cytomine-client/src/collections/collection";
import ImageServer from "cytomine-client/src/models/image-server";
//# sourceMappingURL=image-server-collection.d.ts.map