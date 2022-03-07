/** Enum providing the annotation types handled in Cytomine */
export const AnnotationType: Readonly<{
    ALGO: string;
    USER: string;
    REVIEWED: string;
    ROI: string;
}>;
export default class Annotation extends Model {
    /**
     * @override
     * @static Fetch an annotation
     *
     * @param {number} id   The identifier of the annotation to fetch
     * @param {AnnotationType} [annotationType=null]    The type of the annotation (optional but allows to speed up request)
     *
     * @returns {Annotation} The fetched annotation
     */
    static override fetch(id: number, annotationType?: Readonly<{
        ALGO: string;
        USER: string;
        REVIEWED: string;
        ROI: string;
    }>): Annotation;
    /**
     * @static Correct annotation(s) with freehand drawing
     *
     * @param {number} image    The identifier of the image instance
     * @param {string} location The correcting geometric object, described in WKT format
     * @param {boolean} review  If set to true, the correction is to be applied on reviewed annotations if possible
     * @param {boolean} remove  If true, the correcting geometric object will be removed from the existing annotations
     *                          If false, it will be added to them
     * @param {number} annotation   The identifier of the annotation to correct (if specified, only the targetted
     *                              annotation will be affected by the correction)
     * @param {Array<Number>} layers   The identifiers of the layers to correct
     *
     * @returns {Annotation} One of the corrected annotations
     */
    static correctAnnotations({ image, location, review, remove, layers, annotation }: number): Annotation;
    project: any;
    image: any;
    slice: any;
    user: any;
    location: any;
    geometryCompression: any;
    centroid: any;
    area: any;
    areaUnit: any;
    perimeter: any;
    perimeterUnit: any;
    reviewed: any;
    parentIdent: any;
    term: any;
    imageURL: any;
    cropURL: any;
    smallCropURL: any;
    set type(arg: Readonly<{
        ALGO: string;
        USER: string;
        REVIEWED: string;
        ROI: string;
    }>);
    /** @type {AnnotationType} */
    get type(): Readonly<{
        ALGO: string;
        USER: string;
        REVIEWED: string;
        ROI: string;
    }>;
    _type: any;
    /**
     * Get the profile of the annotation, if available
     */
    fetchProfile(): Promise<any>;
    _profile: any;
    /**
     * Record an action performed on the annotation
     *
     * @param {string} [action="select"] The action performed on the annotation (select, add, delete, update)
     *
     * @returns {Object} The annotation action
     */
    recordAction(action?: string): any;
    /**
     * Create a reviewed annotation based on the current annotation
     *
     * @param {Array<Number>} terms The identifiers of the terms to associate to the annotation
     *
     * @returns {Annotation} The newly created reviewed annotation
     */
    review(terms: Array<number>): Annotation;
    repeat(slice: any, number: any): Promise<any>;
    /**
     * Cancel the review of the current annotation (thus deleting associated reviewed annotations)
     */
    cancelReview(): Promise<void>;
    /**
     * Simplifies the annotation so that it is described with a number of points between minNbPoints and maxNbPoints (no
     * guarantee, best effort)
     *
     * @param {number} minNbPoints
     * @param {number} maxNbPoints
     *
     * @returns {Annotation} The simplified annotation
     */
    simplify(minNbPoints: number, maxNbPoints: number): Annotation;
    /**
     * Fills the annotation
     *
     * @returns {Annotation} The filled annotation
     */
    fill(): Annotation;
}
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=annotation.d.ts.map