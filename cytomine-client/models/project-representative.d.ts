export default class ProjectRepresentative extends Model {
    /**
     * @override
     * @static Fetch a project representative
     *
     * @param {number} id       The identifier of the project representative
     * @param {number} project  The identifier of the project
     *
     * @returns {this} The fetched object
     */
    static override fetch(id: number, project: number): any;
    /**
     * @override
     * @static Delete a project representative
     *
     * @param {number} id       The identifier of the project representative
     * @param {number} project  The identifier of the project
     */
    static override delete(id: number, project: number, user: any): Promise<void>;
    project: any;
    user: any;
}
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=project-representative.d.ts.map