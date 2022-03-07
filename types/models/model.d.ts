export default class Model {
    /**
     * @static Fetch an object
     *
     * @param {number} id The identifier of the object to fetch
     *
     * @returns {this} The fetched object
     */
    static fetch(id: number): any;
    /**
     * @static Delete an object
     *
     * @param {number} id The identifier of the object to delete
     */
    static delete(id: number): Promise<void>;
    /**
     * @abstract
     * @returns {string} The callback identifier of the model used in API requests
     */
    static get callbackIdentifier(): string;
    /**
     * @param {Object} [props]    Object containing the properties of the object to set
     */
    constructor(props?: any);
    /**
     * Initialize the properties allowed for current object (the children must override this method to initialize their
     * custom properties)
     */
    _initProperties(): void;
    id: any;
    class: any;
    created: any;
    updated: any;
    deleted: any;
    toString(): string;
    /**
     * Populate the instance with the properties of the provided object
     *
     * @param {Object} props Object containing the properties to set
     */
    populate(props: any): void;
    /**
     * Deep clone the object
     *
     * @returns {this} the clone of the object
     */
    clone(): this;
    /**
     * Set a property of the model as a collection of other models
     *
     * @param {null|Collection|Array<Model>} value  The value to assign to the property
     * @param {string} property         The name of the property that contains the collection
     * @param {Class} collectionClass   The expected collection class
     */
    _setCollection(value: null | Collection | Array<Model>, property: string, collectionClass: Class): void;
    /**
     * Return an object containing only the public properties of the current object
     *
     * @returns {Object} Object with public properties only
     */
    getPublicProperties(): any;
    /**
     * Fetch from database the properties of the model and update the model with those properties
     *
     * @returns {this} The object with fetched properties
     */
    fetch(): this;
    /**
     * Save the object (if it is new, it is added; otherwise, it is updated)
     *
     * @returns {this} The saved object, as returned by backend
     */
    save(): this;
    /**
     * Update the object
     *
     * @returns {this} The updated object, as returned by backend
     */
    update(): this;
    /**
     * Delete the object
     */
    delete(): Promise<void>;
    /**
     * @returns {boolean} whether or not the object is new (not yet added to the database)
     */
    isNew(): boolean;
    /**
     * @returns {string} API URI to use to perform operations on the object
     */
    get uri(): string;
    get callbackIdentifier(): any;
}
//# sourceMappingURL=model.d.ts.map