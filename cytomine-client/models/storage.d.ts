export default class Storage extends Model {
    /**
     * Create a storage for the provided user (name and basePath are set by the backend)
     *
     * @param {number} idUser The identifier of the user
     *
     * @returns {this} The created storage
     */
    static create(idUser: number): any;
    name: any;
    user: any;
}
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=storage.d.ts.map