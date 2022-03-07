export default class JobTemplateAnnotationCollection extends Collection {
    /** @inheritdoc */
    static get model(): typeof JobTemplateAnnotation;
    /** @inheritdoc */
    static get allowedFilters(): any[];
    jobtemplate: any;
    annotation: any;
}
import Collection from "cytomine-client/src/collections/collection";
import JobTemplateAnnotation from "cytomine-client/src/models/job-template-annotation";
//# sourceMappingURL=job-template-annotation-collection.d.ts.map