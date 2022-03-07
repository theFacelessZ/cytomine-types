export default class UserPositionCollection extends Collection {
    /** @inheritdoc */
    static get model(): typeof UserPosition;
    user: any;
    beforeThan: any;
    afterThan: any;
    showDetails: boolean;
}
import Collection from "cytomine-client/src/collections/collection";
import UserPosition from "cytomine-client/src/models/user-position";
//# sourceMappingURL=user-position-collection.d.ts.map