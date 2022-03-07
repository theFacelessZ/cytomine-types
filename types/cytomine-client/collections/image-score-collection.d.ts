export default class ImageScoreCollection extends Collection {
    /** @inheritdoc */
    static get model(): typeof ImageScore;
    /** @inheritdoc */
    static get allowedFilters(): any[];
    imageInstance: any;
    project: any;
}
import Collection from "cytomine-client/src/collections/collection";
import ImageScore from "cytomine-client/src/models/image-score";
//# sourceMappingURL=image-score-collection.d.ts.map