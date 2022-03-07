export default class JobData extends Model {
    key: any;
    job: any;
    filename: any;
    size: any;
    _file: Blob;
    set file(arg: Blob | File);
    /** @type {File|Blob} */
    get file(): Blob | File;
    /**
     * Upload a file for the job data
     *
     * @param {File|Blob} [file] The file to upload ; if undefined, the file contained in file property will be used
     *
     * @returns {this} The job data, as returned by back-end
     */
    upload(file?: File | Blob): this;
    /**
     * @returns {String|null} The URL allowing to download the job data file | null if the ID of the job data is not set
     */
    get downloadURL(): string;
    /**
     * @returns {String|null} The URL allowing to view the job data file | null if the ID of the job data is not set
     */
    get viewURL(): string;
}
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=job-data.d.ts.map