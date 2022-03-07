export default class OntologyCollection extends Collection {
    /** @inheritdoc */
    static get model(): typeof Ontology;
    /** @inheritdoc */
    static get allowedFilters(): any[];
    light: any;
}
import Collection from "cytomine-client/src/collections/collection";
import Ontology from "cytomine-client/src/models/ontology";
//# sourceMappingURL=ontology-collection.d.ts.map