export default class User extends Model {
    /**
     * @static Fetch the current user
     *
     * @returns {User} The current user
     */
    static fetchCurrent(): User;
    /**
     * Check the password of the current user
     *
     * @param {string} password       The password to check
     * @returns {boolean}    Whether or not the password is valid
     */
    static checkCurrentPassword(password: string): boolean;
    firstname: any;
    lastname: any;
    username: any;
    email: any;
    color: any;
    guest: any;
    user: any;
    admin: any;
    algo: any;
    sipAccount: any;
    passwordExpired: any;
    publicKey: string;
    privateKey: string;
    guestByNow: any;
    userByNow: any;
    adminByNow: any;
    /**
     * Fetch the friends of the user (users sharing access to a project)
     *
     * @param {number} [project]    The identifier of the project (if specified, only users having access to this
     *                              project will be included in response)
     * @param {boolean} [offline]   If true, offline users will be included in response
     *
     * @returns {type} Description
     */
    fetchFriends(project?: number, offline?: boolean): type;
    /**
     * Fetch a résumé of the activity of the user in the provided project
     *
     * @param {number} idProject The identifier of the project
     *
     * @returns {{firstConnection: String, lastConnection: String, totalAnnotations: Number, totalConnections: Number}}
     *          The résumé of the user activity
     */
    fetchResumeActivity(idProject: number): {
        firstConnection: string;
        lastConnection: string;
        totalAnnotations: number;
        totalConnections: number;
    };
    /**
     * Fetch the number of annotations for the user in the provided project or in all projects
     *
     * @param {boolean} [reviewed=false]    If true, counts reviewed annotations, if false, user annotations
     * @param {number}  [idProject]         The identifier of the project to consider (if undefined, annotations of all
     *                                      projects will be counted)
     *
     * @returns {number} The retrieved count
     */
    fetchNbAnnotations(reviewed?: boolean, idProject?: number): number;
    /**
     * Regenerate API keys.
     *
     * @returns {this} The updated user (with new API keys)
     */
    regenerateKeys(): this;
    /**
     * Lock the user
     *
     * @returns {this} The updated user
     */
    lock(): this;
    /**
     * Unlock the user
     *
     * @returns {this} The updated user
     */
    unlock(): this;
    /**
     * Define the role of the user
     *
     * @param {number} idRole       The identifier of the role to assign
     * @returns {RoleCollection}    The list of roles associated to the user
     */
    defineRole(idRole: number): RoleCollection;
    /**
     * Change the password of the user
     *
     * @param {string} password       The new password
     * @returns {this}    The user
     */
    savePassword(password: string): this;
}
import Model from "cytomine-client/src/models/model";
import RoleCollection from "cytomine-client/src/collections/role-collection";
//# sourceMappingURL=user.d.ts.map