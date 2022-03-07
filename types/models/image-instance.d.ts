export default class ImageInstance extends Model {
    baseImage: any;
    project: any;
    user: any;
    filename: any;
    originalFilename: any;
    instanceFilename: any;
    path: any;
    sample: any;
    width: any;
    height: any;
    depth: any;
    time: any;
    channels: any;
    resolution: any;
    magnification: any;
    physicalSizeX: any;
    physicalSizeY: any;
    physicalSizeZ: any;
    fps: any;
    zoom: any;
    contentType: any;
    thumb: any;
    preview: any;
    macro: any;
    numberOfAnnotations: any;
    numberOfJobAnnotations: any;
    numberOfReviewedAnnotations: any;
    reviewStart: any;
    reviewStop: any;
    reviewUser: any;
    reviewed: any;
    inReview: any;
    /**
    * @returns {String} the preview URL of the image with a specified size
    */
    previewURL(size: any): string;
    /**
    * @returns {String} the thumb URL of the image with a specified size
    */
    thumbURL(size: any): string;
    /**
     * @returns {String} the download URL of the image (valid iff the identifier of the image was previously defined)
     */
    get downloadURL(): string;
    /**
    * Fetch the next image instance of the project (first image created before)
    *
    * @returns {ImageInstance}
    */
    fetchNext(): ImageInstance;
    /**
    * Fetch the previous image instance of the project (first image created after)
    *
    * @returns {ImageInstance}
    */
    fetchPrevious(): ImageInstance;
    /**
     * Fetch the users that have opened the image recently
     *
     * @param {boolean} broadcast  If true, only users broadcasting their positions will be returned
     *
     * @returns {Array<number>} The list of IDs of the connected users
     */
    fetchConnectedUsers(broadcast?: boolean): Array<number>;
    /**
     * Fetch the layers associated with the base abstract image in other projects
     *
     * @param {number} project  The identifier of the project to search. If not set, all projects will be considered.
     *
     * @returns {Array<{image, project, projectName, user, username, firstname, lastname, admin}>} the layers
     */
    fetchLayersInOtherProjects(project: number): Array<{
        image;
        project;
        projectName;
        user;
        username;
        firstname;
        lastname;
        admin;
    }>;
    /**
     * Copy to the image instance the properties and description associated with the provided source image
     *
     * @param {number} idSource Identifier of the source image instance
     */
    copyMetadata(idSource: number): Promise<void>;
    /**
     * Copy to the image instance all annotations from provided layers
     *
     * @param {Array<{image: Number, user: Number}>} layers  Layers to copy
     * @param {boolean} [giveMe=false]   If true, all copied annotations will be added to the current user layer
     */
    copyData(layers: Array<{
        image: number;
        user: number;
    }>, giveMe?: boolean): Promise<void>;
    /**
     * Start the review of the image instance
     *
     * @returns {this} The image instance as returned by backend
     */
    review(): this;
    /**
     * Stop the review of the image instance (either validates the image or cancel the review/the validation)
     *
     * @param {boolean} [cancel=false]  If true, cancels the review (if the image is under review) or the validation
     *                                  (if the image is validated)
     *                                  If false, stop the review and validate the image
     *
     * @returns {this} The image instance as returned by backend
     */
    stopReview(cancel?: boolean): this;
    /**
     * Fetch statistics regarding the number of reviewed annotations for each layer of the image
     *
     * @returns {Array<user: Number, all: Number, reviewed: Number>} The review statistics
     */
    fetchReviewStatistics(): Array<user>;
    /**
     * Fetch the reference slice instance for the image instance
     *
     * @returns {SliceInstance}
     */
    fetchReferenceSlice(): SliceInstance;
    _referenceSlice: SliceInstance;
}
import Model from "cytomine-client/src/models/model";
import SliceInstance from "cytomine-client/src/models/slice-instance";
//# sourceMappingURL=image-instance.d.ts.map