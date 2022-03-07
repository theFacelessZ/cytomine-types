export default class AbstractImageCollection extends Collection {
    /** @inheritdoc */
    static get model(): typeof AbstractImage;
    /**
     * @static Fetch all unused abstract images (that is images not used in any project)
     *
     * @returns {this}
     */
    static fetchUnused(): any;
    /**
     * Fetch all unused abstract images (that is images not used in any project) and fills the collection with those
     *
     * @returns {this}
     */
    fetchUnused(): this;
}
import Collection from "cytomine-client/src/collections/collection";
import AbstractImage from "cytomine-client/src/models/abstract-image";
//# sourceMappingURL=abstract-image-collection.d.ts.map