export default class AnnotationComment extends DomainModel {
    comment: any;
    sender: any;
    receivers: any;
    subject: any;
    from: any;
    emails: any;
    annotationURL: any;
    shareAnnotationURL: any;
    set annotation(arg: import("cytomine-client/src/models/model").default);
    get annotation(): import("cytomine-client/src/models/model").default;
    set annotationIdent(arg: any);
    get annotationIdent(): any;
    set annotationClassName(arg: any);
    get annotationClassName(): any;
}
import DomainModel from "cytomine-client/src/models/domain-model";
//# sourceMappingURL=annotation-comment.d.ts.map