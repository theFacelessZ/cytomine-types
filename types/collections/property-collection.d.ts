export default class PropertyCollection extends DomainCollection {
    /** @inheritdoc */
    static get model(): typeof Property;
    /**
     * @static Fetch the keys (or the keys/users associations) of all annotation properties in a project or image
     *
     * @param {number} [idProject]  The project identifier (mandatory if idImage is null)
     * @param {number} [idImage]    The image identifier (mandatory if idProject is null)
     * @param {boolean} [user=false]    If true, will fetch the key/user association instead of the keys only
     * @param {number} [max=0]          The maximum number of items to return (if set to 0, all items will be returned)
     * @param {number} [offset=0]       The offset (0=first record)
     *
     * @returns {Array<{key: String, userId: String}> | Array<String>}
     */
    static fetchKeysAnnotationProperties(idProject?: number, idImage?: number, user?: boolean, max?: number, offset?: number): Array<{
        key: string;
        userId: string;
    }> | Array<string>;
    /**
     * @static Fetch the keys of all image properties in a project
     *
     * @param {number} idProject    The project identifier
     * @param {number} [max=0]      The maximum number of items to return (if set to 0, all items will be returned)
     * @param {number} [offset=0]   The offset (0=first record)
     *
     * @returns {Array<String>}
     */
    static fetchKeysImageProperties(idProject: number, max?: number, offset?: number): Array<string>;
    /**
     * @static Fetch the values and positions of all properties with the provided key in a given image and layer
     *
     * @param {number}   idUser     The user identifier (targetting the layer)
     * @param {number}   idImage    The image identifier
     * @param {number}   key        The key
     * @param {string} [bbox]       The bbox to consider (properties related to annotations outside this bbox will be ignored)
     * @param {number} [max=0]      The maximum number of items to return (if set to 0, all items will be returned)
     * @param {number} [offset=0]   The offset (0=first record)
     *
     * @returns {Array<{idAnnotation: Number, x: Number, y: Number, value: String}>}
     */
    static fetchPropertiesValuesAndPositions(idUser: number, idImage: number, key: number, bbox?: string, max?: number, offset?: number): Array<{
        idAnnotation: number;
        x: number;
        y: number;
        value: string;
    }>;
}
import DomainCollection from "cytomine-client/src/collections/domain-collection";
import Property from "cytomine-client/src/models/property";
//# sourceMappingURL=property-collection.d.ts.map