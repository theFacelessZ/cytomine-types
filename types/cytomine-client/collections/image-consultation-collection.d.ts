export default class ImageConsultationCollection extends Collection {
    /** @inheritdoc */
    static get model(): typeof ImageConsultation;
    /** @inheritdoc */
    static get allowedFilters(): any[];
    resume: any;
    project: any;
    user: any;
    projectConnection: any;
    /**
     * @returns {String} The URL allowing to download the list of image consultations
     */
    get downloadURL(): string;
}
import Collection from "cytomine-client/src/collections/collection";
import ImageConsultation from "cytomine-client/src/models/image-consultation";
//# sourceMappingURL=image-consultation-collection.d.ts.map