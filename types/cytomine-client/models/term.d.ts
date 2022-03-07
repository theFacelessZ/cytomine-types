export default class Term extends Model {
    name: any;
    comment: any;
    ontology: any;
    parent: any;
    color: any;
    changeParent(idNewParent: any): Promise<void>;
}
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=term.d.ts.map