export default class JobTemplateAnnotation extends Model {
    jobTemplate: any;
    annotationIdent: any;
    annotationClassName: any;
    _job: Job;
    get job(): Job;
}
import Model from "cytomine-client/src/models/model";
import Job from "cytomine-client/src/models/job";
//# sourceMappingURL=job-template-annotation.d.ts.map