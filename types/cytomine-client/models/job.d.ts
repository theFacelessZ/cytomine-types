/** Enum providing the job status handled in Cytomine */
export const JobStatus: Readonly<{
    NOTLAUNCH: number;
    INQUEUE: number;
    RUNNING: number;
    SUCCESS: number;
    FAILED: number;
    INDETERMINATE: number;
    WAIT: number;
    PREVIEWED: number;
    KILLED: number;
}>;
export default class Job extends Model {
    software: any;
    project: any;
    progress: any;
    status: any;
    statusComment: any;
    rate: any;
    dataDeleted: boolean;
    algoType: any;
    favorite: any;
    userJob: any;
    username: any;
    set jobParameters(arg: JobParameterCollection);
    /** @type {JobParameterCollection} */
    get jobParameters(): JobParameterCollection;
    softwareName: any;
    number: any;
    /**
     * Copy the job and its parameter to create a new job
     *
     * @returns {this} The job created from the original
     */
    copy(): this;
    /**
     * Launch the execution of the job
     *
     * @returns {this} The job as returned by backend
     */
    execute(): this;
    /**
     * Kill the execution of the job
     *
     * @returns {this} The job as returned by backend
     */
    kill(): this;
    setFavorite(): Promise<Job>;
    /**
     * Fetch the number of each type of data created by the job
     *
     * @returns {{annotations: Number, annotationsTerm: Number, jobDatas: Number, reviewed: Number}}
     */
    fetchAllData(): {
        annotations: number;
        annotationsTerm: number;
        jobDatas: number;
        reviewed: number;
    };
    /**
     * Delete all data created by the job
     *
     * @param {Number} [task] The identifier of the task to associate to the job data deletion
     */
    deleteAllData(task?: number): Promise<void>;
    /**
     * Fetch the log created by the job
     *
     * @returns {AttachedFile}
     */
    fetchLog(): AttachedFile;
}
import Model from "cytomine-client/src/models/model";
import JobParameterCollection from "cytomine-client/src/collections/job-parameter-collection";
//# sourceMappingURL=job.d.ts.map