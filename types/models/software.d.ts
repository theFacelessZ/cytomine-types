export default class Software extends Model {
    name: any;
    serviceName: any;
    resultName: any;
    description: any;
    executeCommand: any;
    defaultProcessingServer: any;
    deprecated: any;
    set parameters(arg: SoftwareParameterCollection);
    /** @type {SoftwareParameterCollection} */
    get parameters(): SoftwareParameterCollection;
    numberOfJob: any;
    numberOfNotLaunch: any;
    numberOfInQueue: any;
    numberOfRunning: any;
    numberOfSuccess: any;
    numberOfFailed: any;
    numberOfIndeterminate: any;
    numberOfWait: any;
    numberOfKilled: any;
    /**
     * Fetch the statistics related to the software in the provided project
     *
     * @param {number} idProject The identifier of the project
     *
     * @returns {{numberOfJob, numberOfNotLaunch, numberOfInQueue, numberOfRunning, numberOfSuccess, numberOfFailed, numberOfIndeterminate, numberOfWait, numberOfKilled}}
     */
    fetchStats(idProject: number): {
        numberOfJob;
        numberOfNotLaunch;
        numberOfInQueue;
        numberOfRunning;
        numberOfSuccess;
        numberOfFailed;
        numberOfIndeterminate;
        numberOfWait;
        numberOfKilled;
    };
}
import Model from "cytomine-client/src/models/model";
import SoftwareParameterCollection from "cytomine-client/src/collections/software-parameter-collection";
//# sourceMappingURL=software.d.ts.map