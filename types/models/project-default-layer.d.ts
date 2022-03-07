export default class ProjectDefaultLayer extends Model {
    /**
     * @override
     * @static Fetch a default layer
     *
     * @param {number} id       The identifier of the default layer
     * @param {number} project  The identifier of the project
     *
     * @returns {this} The fetched object
     */
    static override fetch(id: number, project: number): any;
    /**
     * @override
     * @static Delete a default layer
     *
     * @param {number} id       The identifier of the default layer
     * @param {number} project  The identifier of the project
     */
    static override delete(id: number, project: number): Promise<void>;
    project: any;
    user: any;
    hideByDefault: any;
}
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=project-default-layer.d.ts.map