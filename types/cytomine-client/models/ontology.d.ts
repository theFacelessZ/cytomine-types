export default class Ontology extends Model {
    name: any;
    user: any;
    set projects(arg: ProjectCollection);
    /** @type {ProjectCollection} */
    get projects(): ProjectCollection;
    set children(arg: TermCollection);
    /** @type {TermCollection} */
    get children(): TermCollection;
    set terms(arg: TermCollection);
    /**
     * @type {TermCollection}
     * Alias for children property
     */
    get terms(): TermCollection;
}
import Model from "cytomine-client/src/models/model";
import ProjectCollection from "cytomine-client/src/collections/project-collection";
import TermCollection from "cytomine-client/src/collections/term-collection";
//# sourceMappingURL=ontology.d.ts.map