/** Enum providing the uploaded file status handled in Cytomine */
export const UploadedFileStatus: Readonly<{
    UPLOADED: number;
    DETECTING_FORMAT: number;
    ERROR_FORMAT: number;
    EXTRACTING_DATA: number;
    ERROR_EXTRACTION: number;
    CONVERTING: number;
    ERROR_CONVERSION: number;
    DEPLOYING: number;
    ERROR_DEPLOYMENT: number;
    DEPLOYED: number;
    EXTRACTED: number;
    CONVERTED: number;
}>;
export default class UploadedFile extends Model {
    user: any;
    projects: any;
    storage: any;
    imageServer: any;
    path: any;
    filename: any;
    originalFilename: any;
    ext: any;
    contentType: any;
    size: any;
    parent: any;
    thumbURL: any;
    status: any;
    statusText: any;
    get downloadURL(): string;
}
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=uploaded-file.d.ts.map