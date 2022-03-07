export default class AbstractImage extends Model {
    filename: any;
    originalFilename: any;
    path: any;
    scanner: any;
    sample: any;
    uploadedFile: any;
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
    macroURL: any;
    /**
    * @returns {String} the preview URL of the image with a specified size
    */
    previewURL(size: any): string;
    /**
     * Get the user that uploaded the abstract image
     *
     * @returns {User}
     */
    fetchUploader(): User;
    _uploader: User;
    /**
     * Get the list of image servers (as URLs) associated with the abstract image
     *
     * @returns {Array<String>}
     */
    fetchImageServers(): Array<string>;
    _imageServers: any;
    /**
     * @returns {String} the download URL of the image (valid iff the identifier of the image was previously defined)
     */
    get downloadURL(): string;
}
import Model from "cytomine-client/src/models/model";
import User from "cytomine-client/src/models/user";
//# sourceMappingURL=abstract-image.d.ts.map