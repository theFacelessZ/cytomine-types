export default class UserPosition extends Model {
    /** @override */
    static override fetch(): Promise<void>;
    /**
     * Fetch the last position of a user in an image
     *
     * @param {number} imageInstance    the identifier of the image
     * @param {number} user             the identifier of the user
     * @param {boolean} broadcast       if true, the last position broadcasted by the user will be returned
     * @returns the last position of the user
     */
    static fetchLastPosition(imageInstance: number, user: number, broadcast?: boolean): Promise<UserPosition>;
    /**
     * @static Record the position of the current user on an image
     *
     * @param {{image, topLeftX, topLeftY, topRightX, topRightY, bottomLeftX, bottomLeftY, bottomRightX, bottomRightY, zoom, broadcast}} position
     *
     * @returns {this} The created position
     */
    static create(position: {
        image;
        topLeftX;
        topLeftY;
        topRightX;
        topRightY;
        bottomLeftX;
        bottomLeftY;
        bottomRightX;
        bottomRightY;
        zoom;
        broadcast;
    }): any;
    user: any;
    image: any;
    slice: any;
    project: any;
    location: any;
    x: any;
    y: any;
    zoom: any;
    rotation: any;
    broadcast: any;
}
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=user-position.d.ts.map