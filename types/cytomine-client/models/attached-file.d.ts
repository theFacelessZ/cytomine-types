export default class AttachedFile extends DomainModel {
    url: any;
    filename: any;
    _file: Blob;
    set file(arg: Blob | File);
    /** @type {File|Blob} */
    get file(): Blob | File;
}
import DomainModel from "cytomine-client/src/models/domain-model";
//# sourceMappingURL=attached-file.d.ts.map