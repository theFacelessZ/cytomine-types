export default class ImageInstanceCollection extends Collection {
    /** @inheritdoc */
    static get model(): typeof ImageInstance;
    /**
     * @static Fetch last opened image instances
     *
     * @param {number}  [project]           Identifier of project to consider (/!\ requires user parameter to be set)
     * @param {number}  [user]              Identifier of user to consider (/!\ requires project parameter to be set)
     * @param {boolean} [distinctImages]    If true, the result will include distinct images
     * @param {number}  [max=0]             The maximum number of items to retrieve
     * @param {number}  [offset=0]          The offset
     *
     * @returns {Array<{id: Number, date: String, thumb: String, instanceFilename: String, project: Number}>
     *           | Array<{created: String, user: Number, image: Number, time: Number, imageThumb: String,
     *                    imageName: String, countCreatedAnnotations: Number, project: Number}>}
     *          The last opened images (second format used iff project and user are specified)
     */
    static fetchLastOpened({ project, user, distinctImages, max, offset }?: number): Array<{
        id: number;
        date: string;
        thumb: string;
        instanceFilename: string;
        project: number;
    }> | Array<{
        created: string;
        user: number;
        image: number;
        time: number;
        imageThumb: string;
        imageName: string;
        countCreatedAnnotations: number;
        project: number;
    }>;
    /**
     * @static Fetch all image instances available to current user
     *
     * @param {number} [max=0]    The maximum number of items to retrieve
     * @param {number} [offset=0] The offset
     *
     * @returns {Array<{id: Number, filename: String, originalFilename: String, projectName: String, project: Number}>}
     *          The list of images (light format)
     */
    static fetchAllLight({ max, offset }?: number): Array<{
        id: number;
        filename: string;
        originalFilename: string;
        projectName: string;
        project: number;
    }>;
    /**
     * @static Fetch bounds of the attributes of all image instances into a project
     *
     * @param {number}  [project]           Identifier of project to consider
     *
     * @returns {{width: {min: Long, max: Long}, height: {min: Long, max: Long}, magnification: {min: Long, max: Long, list: Array<Long>}, resolution: {min: Long, max: Long, list: Array<Long>}, format: {list: Array<String>}, mimeType: {list: Array<String>}}}
     *          The max, min or list of all the image instances properties
     */
    static fetchBounds({ project }?: number): {
        width: {
            min: Long;
            max: Long;
        };
        height: {
            min: Long;
            max: Long;
        };
        magnification: {
            min: Long;
            max: Long;
            list: Array<Long>;
        };
        resolution: {
            min: Long;
            max: Long;
            list: Array<Long>;
        };
        format: {
            list: Array<string>;
        };
        mimeType: {
            list: Array<string>;
        };
    };
    withLastActivity: any;
}
import Collection from "cytomine-client/src/collections/collection";
import ImageInstance from "cytomine-client/src/models/image-instance";
//# sourceMappingURL=image-instance-collection.d.ts.map