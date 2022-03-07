export default class ProjectConnection extends Model {
    user: any;
    project: any;
    time: any;
    os: any;
    browser: import("detect-browser").Browser | "node" | "bot";
    browserVersion: string;
    countViewedImages: any;
    countCreatedAnnotations: any;
    online: any;
}
import Model from "cytomine-client/src/models/model";
//# sourceMappingURL=project-connection.d.ts.map