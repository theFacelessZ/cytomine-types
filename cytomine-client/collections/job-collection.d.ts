export default class JobCollection extends Collection {
    /** @inheritdoc */
    static get model(): typeof Job;
    /** @inheritdoc */
    static get allowedFilters(): any[];
    /**
     * @static Fetch bounds of the attributes of all jobs into a project
     *
     * @param {number}  [project]           Identifier of project to consider
     *
     * @returns {{software: {list: Array<String>}, username: {list: Array<String>}}}
     *          The max, min or list of all the jobs properties
     */
    static fetchBounds({ project }?: number): {
        software: {
            list: Array<string>;
        };
        username: {
            list: Array<string>;
        };
    };
    software: any;
    project: any;
    light: any;
}
import Collection from "cytomine-client/src/collections/collection";
import Job from "cytomine-client/src/models/job";
//# sourceMappingURL=job-collection.d.ts.map