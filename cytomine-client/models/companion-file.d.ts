export default class CompanionFile extends Model {
    uploadedFile: any;
    path: any;
    image: any;
    type: any;
    originalFilename: any;
    filename: any;
    /**
     * @returns {String} the download URL of the file (valid iff the identifier of the image was previously defined)
     */
    get downloadURL(): string;
}
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=companion-file.d.ts.map