export default class AbstractSlice extends Model {
    uploadedFile: any;
    path: any;
    image: any;
    mime: any;
    channel: any;
    zStack: any;
    time: any;
    /**
     * Get the user that uploaded the abstract slice
     *
     * @returns {User}
     */
    fetchUploader(): User;
    _uploader: User;
}
import Model from "cytomine-client/src/models/model";
import User from "cytomine-client/src/models/user";
//# sourceMappingURL=abstract-slice.d.ts.map