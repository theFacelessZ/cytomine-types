export default class SliceInstance extends Model {
    uploadedFile: any;
    path: any;
    image: any;
    mime: any;
    channel: any;
    zStack: any;
    time: any;
    /**
     * Fetch the information about the annotation layers present in the image instance
     *
     * @returns {Array<user, slice, countAnnotation, countReviewedAnnotation>} The list of annotation layers with counts
     */
    fetchAnnotationsIndex(): Array<user, slice, countAnnotation, countReviewedAnnotation>;
}
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=slice-instance.d.ts.map