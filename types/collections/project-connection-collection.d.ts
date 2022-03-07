export default class ProjectConnectionCollection extends Collection {
    /** @inheritdoc */
    static get model(): typeof ProjectConnection;
    /**
     * Fetches the average number of connections in given periods
     *
     * @param {number}  [project]       The identifier of the project to consider
     * @param {number}  [user]          The identifier of the user to consider
     * @param {number}  [afterThan]     If specified, only connections after this date will be taken into account
     * @param {number}  [beforeThan]       If specified, only connections before this date will be taken into account
     * @param {string}  [period=hour]   The periods to consider
     * @returns {Array<{time, frequency}>} The timestamps defining the period (depends on the period parameter) and the
     *                                     associated relative frequency
     */
    static fetchAverageConnections({ project, user, afterThan, beforeThan, period }?: number): Array<{
        time;
        frequency;
    }>;
    /**
     * Fetches the number of connections in given periods
     *
     * @param {number}  [project]       The identifier of the project to consider
     * @param {number}  [user]          The identifier of the user to consider
     * @param {number}  [afterThan]     If specified, only connections after this date will be taken into account
     * @param {number}  [beforeThan]       If specified, only connections before this date will be taken into account
     * @param {string}  [period=hour]   The periods to consider
     * @returns {Array<{time, frequency}>} The timestamps defining the period and the associated numbers of connections
     */
    static fetchConnectionsFrequency({ project, user, afterThan, beforeThan, period }?: number): Array<{
        time;
        frequency;
    }>;
    user: any;
    _project: any;
    set project(arg: any);
    get project(): any;
    /**
     * @returns {String} The URL allowing to download the list of project connections
     */
    get downloadURL(): string;
}
import Collection from "cytomine-client/src/collections/collection";
import ProjectConnection from "cytomine-client/src/models/project-connection";
//# sourceMappingURL=project-connection-collection.d.ts.map