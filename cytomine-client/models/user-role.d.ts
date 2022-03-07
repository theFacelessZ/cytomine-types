export default class UserRole extends Model {
    /**
     * @override
     * @static Fetch a userrole relation
     *
     * @param {number} user   The identifier of the user
     * @param {number} role  The identifier of the role
     *
     * @returns {this} The fetched object
     */
    static override fetch(user: number, role: number): any;
    /**
     * @override
     * @static Delete an association between a user and a role
     *
     * @param {number} user   The identifier of the user
     * @param {number} role  The identifier of the role
     */
    static override delete(user: number, role: number): Promise<void>;
    user: any;
    role: any;
    authority: any;
}
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=user-role.d.ts.map