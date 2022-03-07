export default class AnnotationCommentCollection extends DomainCollection {
    /** @inheritdoc */
    static get model(): typeof AnnotationComment;
    set annotation(arg: import("cytomine-client/src/models/model").default);
    get annotation(): import("cytomine-client/src/models/model").default;
    get annotationIdent(): number;
    get annotationClassName(): string;
}
import DomainCollection from "cytomine-client/src/collections/domain-collection";
import AnnotationComment from "cytomine-client/src/models/annotation-comment";
//# sourceMappingURL=annotation-comment-collection.d.ts.map