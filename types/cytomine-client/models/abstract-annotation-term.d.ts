export default class AbstractAnnotationTerm extends Model {
    /**
     * @override
     * @static Fetch an annotation term
     *
     * @param {number} annotation The identifier of the annotation
     * @param {number} term       The identifier of the term
     *
     * @returns {this} The fetched object
     */
    static override fetch(annotation: number, term: number): any;
    /**
     * @override
     * @static Delete an annotation term
     *
     * @param {number} annotation The identifier of the annotation
     * @param {number} term       The identifier of the term
     * @param {number} [user]       The identifier of the user
     */
    static override delete(annotation: number, term: number, user?: number): Promise<void>;
    annotation: any;
    term: any;
    user: any;
    /**
     * Add an annotation term and remove all other annotation terms
     *
     * @param {boolean} [clearForAllUsers=false] Whether the terms added by all users should be removed or only the current one
     */
    saveAndClearPrevious(clearForAllUsers?: boolean): Promise<AbstractAnnotationTerm>;
}
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=abstract-annotation-term.d.ts.map