export default class DomainCollection extends Collection {
    /** @inheritdoc */
    static get allowedFilters(): any[];
    /**
     * Create a collection containing metadata objects characterizing a reference existing model instance
     *
     * @param {Model}   object          The reference model instance
     * @param {number}  [nbPerPage=0]   The maximum number of items fetched at a time (if set to 0, all items will be fetched at once)
     * @param {string}  [filterKey]     The filter key
     * @param {number}  [filterValue]   The filter value (an identifier)
     * @param {Object}  [props]         Properties of the collection to set (the allowed props are model-dependent and
     *                                  defined in _initProperties())
     */
    constructor({ object, nbPerPage, filterKey, filterValue, ...props }?: Model);
    /**
     * Set the reference object
     *
     * @param {Model} obj The reference object
     */
    set object(arg: Model);
    _object: Model;
    /**
     * The class name of the reference object
     * @type {string}
     */
    get domainClassName(): string;
    /**
     * The identifier of the reference object
     * @type {number}
     */
    get domainIdent(): number;
}
import Collection from "cytomine-client/src/collections/collection";
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=domain-collection.d.ts.map