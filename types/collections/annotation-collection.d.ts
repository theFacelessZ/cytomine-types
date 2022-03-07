export default class AnnotationCollection extends Collection {
    /**
     * Validate or reject all annotations belonging to the provided image and user layers
     *
     * @param {Boolean} accept      If true, all targetted annotations will be validated ; if false, they will all be rejected
     * @param {Number} image        The identifier of the image
     * @param {Array<Number>} users The identifiers of the users whose annotation layers must be accepted or rejected
     * @param {Number} task         The identifier of the Cytomine task to use
     */
    static reviewAll({ accept, image, users, task }?: boolean): Promise<void>;
    /** @inheritdoc */
    static get model(): typeof Annotation;
    /** @inheritdoc */
    static get allowedFilters(): any[];
    showDefault: boolean;
    showBasic: any;
    showMeta: any;
    showWKT: any;
    showGIS: any;
    showTerm: any;
    showAlgo: any;
    showUser: any;
    showImage: any;
    showSlice: any;
    reviewed: any;
    notReviewedOnly: any;
    reviewUsers: any;
    project: any;
    image: any;
    images: any;
    slice: any;
    slices: any;
    job: any;
    user: any;
    users: any;
    includeAlgo: any;
    kmeans: any;
    term: any;
    terms: any;
    suggestedTerm: any;
    userForTermAlgo: any;
    jobForTermAlgo: any;
    noTerm: any;
    noAlgoTerm: any;
    multipleTerm: any;
    bbox: any;
    bboxAnnotation: any;
    baseAnnotation: any;
    maxDistanceBaseAnnotation: any;
    afterThan: any;
    beforeThan: any;
    /**
     * Returns the URL for downloading the collection under the provided format
     * @param   {String} [format="pdf"] The format of the file to download ("csv", "xls" or "pdf")
     * @returns {String} The download URL
     */
    getDownloadURL(format?: string): string;
}
import Collection from "cytomine-client/src/collections/collection";
import Annotation from "cytomine-client/src/models/annotation";
//# sourceMappingURL=annotation-collection.d.ts.map