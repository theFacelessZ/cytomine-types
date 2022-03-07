export default class UserGroup extends Model {
    /**
     * @override
     * @static Fetch a usergroup relation
     *
     * @param {number} user   The identifier of the user
     * @param {number} group  The identifier of the group
     *
     * @returns {this} The fetched object
     */
    static override fetch(user: number, group: number): any;
    /**
     * @override
     * @static Delete an association between a user and a group
     *
     * @param {number} user   The identifier of the user
     * @param {number} group  The identifier of the group
     */
    static override delete(user: number, group: number): Promise<void>;
    user: any;
    group: any;
}
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=user-group.d.ts.map