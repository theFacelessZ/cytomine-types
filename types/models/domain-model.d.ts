export default class DomainModel extends Model {
    /**
     * @override
     * @static Fetch a metadata object
     *
     * @param {number} id       The identifier of the metadata to fetch
     * @param {Model} object    The reference object
     *
     * @returns {this} The fetched object
     */
    static override fetch(id: number, object: Model): any;
    /**
     * @override
     * @static Delete a metadata object
     *
     * @param {number} id       The identifier of the metadata to delete
     * @param {Model} object    The reference object
     */
    static override delete(id: number, object: Model): Promise<void>;
    /**
     * Create a metadata object characterizing an existing model instance
     *
     * @param {Object} [props]  Object containing the properties of the object to set
     * @param {Model} object    The reference object
     */
    constructor(props?: any, object: Model);
    set object(arg: Model);
    /** @type {Model} */
    get object(): Model;
    _object: Model;
    domainClassName: any;
    domainIdent: any;
}
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=domain-model.d.ts.map