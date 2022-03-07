export default class Collection {
    /**
     * @static Fetch all available items
     *
     * @param {number}  [nbPerPage=0]   The maximum number of items fetched at a time (if set to 0, all items will be fetched at once)
     * @param {string}  [filterKey]     The filter key
     * @param {number}  [filterValue]   The filter value (an identifier)
     * @param {Object}  [props]         Properties of the collection to set (the allowed props are model-dependent and
     *                                  defined in _initProperties())
     *
     * @returns {this} collection containing all available items
     */
    static fetchAll({ nbPerPage, filterKey, filterValue, ...props }?: number): any;
    /**
     * @static The class of the objects that are allowed in the collection.
     * @abstract
     *
     * @returns {class}
     */
    static get model(): class;
    /**
     * @abstract
     * @static Defines the list of filters allowed for the collection. If the collection can be fetched without filter,
     * the list must include null.
     *
     *
     * @returns {Array<String>} The allowed filters
     */
    static get allowedFilters(): string[];
    /**
     * @static Defines whether or not the API allows to save the collection. It should be overridden in children
     * collections for which it is allowed
     */
    static get isSaveAllowed(): boolean;
    /**
     * @param {number}  [nbPerPage=0]   The maximum number of items fetched at a time (if set to 0, all items will be fetched at once)
     * @param {string}  [filterKey]     The filter key
     * @param {number}  [filterValue]   The filter value (an identifier)
     * @param {Object}  [props]         Properties of the collection to set (the allowed props are model-dependent and
     *                                  defined in _initProperties())
     */
    constructor({ nbPerPage, filterKey, filterValue, ...props }?: number);
    _data: any[];
    _filter: {};
    max: any;
    offset: number;
    _total: any;
    _nbPages: any;
    _curPage: number;
    /**
     * Initialize the properties allowed for collection (the children must override this method to initialize their
     * custom properties)
     */
    _initProperties(): void;
    toString(): string;
    get array(): any[];
    forEach(callback: any, thisArg: any): void;
    /**
     * Clone the collection (beware that only the filter and properties will be copied not the contained data, nor the pagination info)
     *
     * @returns {this} the clone of the object
     */
    clone(): this;
    /**
     * Populate the instance with the properties of the provided object (useful for collections accepting custom
     * parameters in addition to max and offset)
     *
     * @param {Object} props Object containing the properties to set
     */
    setProps(props: any): void;
    /**
     * Set the filter
     *
     * @param {string} key   The filter key
     * @param {number} value The filter value (an identifier)
     */
    setFilter(key: string, value: number): void;
    set curPage(arg: number);
    /** @type {number} */
    get curPage(): number;
    _doFetch(): Promise<any>;
    _fetch(append?: boolean): Promise<Collection>;
    getParameters(): {};
    /**
     * Fetch all available items and fill the collection with them
     *
     * @returns {this} collection containing all available items
     */
    fetchAll(): this;
    /**
     * Fetch a page of the items
     *
     * @param {number}  [numPage=0]     The number of the page to fetch (first page has number 0)
     * @param {boolean} [append=false]  Whether the fetched data should be appended to the existing collection, or should
     *                                  replace the existing content
     *
     * @returns {this} collection containing the fetched items
     */
    fetchPage(numPage?: number, append?: boolean): this;
    /**
     * Fetch the next page of items
     *
     * @param {boolean} [append=false]  Whether the fetched data should be appended to the existing collection, or should
     *                                  replace the existing content
     *
     * @returns {this} collection containing the fetched items
     */
    fetchNextPage(append?: boolean): this;
    /**
     * Fetch the previous page of items
     *
     * @param {boolean} [append=false]  Whether the fetched data should be appended to the existing collection, or should
     *                                  replace the existing content
     *
     * @returns {this} collection containing the fetched items
     */
    fetchPreviousPage(append?: boolean): this;
    /**
     * Add an item to the collection (this item is not automatically persisted in the database)
     *
     * @param {Model} model The item to add
     */
    push(model: Model): void;
    /**
     * Get the item of the collection at the provided index
     *
     * @param {number} idx The index of the item to get
     *
     * @returns {Model} The item
     */
    get(idx: number): Model;
    /**
     * Persist the items of the collection in the database
     */
    save(): Promise<void>;
    /**
     * @returns {number} The number of items contained in the collection
     */
    get length(): number;
    /**
     * @returns {number} The total number of items available in the database (whereas length() returns the number
     *                   of items fetched from the database, which can be a subset of those available)
     */
    get totalNbItems(): number;
    /**
     * @returns {number} The number of available pages
     */
    get nbPages(): number;
    /**
     * @returns {string} The callback identifier of the collection used in API requests
     */
    get callbackIdentifier(): string;
    /**
     * @returns {string} API URI to use to perform operations on the collection (including filter path parameters if a
     * filter was set)
     */
    get uri(): string;
    /**
     * @returns {string} API URI to use to perform operations on the collection, without filter path parameters
     */
    get uriWithoutFilter(): string;
}
//# sourceMappingURL=collection.d.ts.map