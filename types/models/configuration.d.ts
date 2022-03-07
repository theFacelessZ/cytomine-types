export default class Configuration extends Model {
    /**
     * @override
     * @static Fetch a configuration item
     *
     * @param {string} key The key of the configuration item to fetch
     *
     * @returns {this} The fetched configuration
     */
    static override fetch(key: string): any;
    /**
     * @override
     * @static Delete a configuration item
     *
     * @param {string} key The key of the configuration item to delete
     */
    static override delete(key: string): Promise<void>;
    key: any;
    value: any;
    readingRole: any;
}
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=configuration.d.ts.map