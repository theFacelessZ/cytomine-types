export default class AnnotationTrack extends Model {
    /**
     * @override
     * @static Fetch an annotation track
     *
     * @param {number} annotation The identifier of the annotation
     * @param {number} track       The identifier of the track
     *
     * @returns {this} The fetched object
     */
    static override fetch(annotation: number, track: number): any;
    /**
     * @override
     * @static Delete an annotation track
     *
     * @param {number} annotation The identifier of the annotation
     * @param {number} track       The identifier of the track
     */
    static override delete(annotation: number, track: number): Promise<void>;
    annotationClassName: any;
    annotation: any;
    track: any;
    slice: any;
    set annotationIdent(arg: any);
    get annotationIdent(): any;
}
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=annotation-track.d.ts.map