export default class ProjectCollection extends Collection {
    /** @inheritdoc */
    static get model(): typeof Project;
    /**
     * @static Fetch last opened projects
     *
     * @param {number} [max=0]    The maximum number of items to retrieve
     * @param {number} [offset=0] The offset
     *
     * @returns {Array<{id: Number, date: String, opened: Boolean}>} The last opened projects
     */
    static fetchLastOpened(max?: number, offset?: number): Array<{
        id: number;
        date: string;
        opened: boolean;
    }>;
    /**
     * @static Fetch bounds of the attributes of all projects
     *
     * @returns {{numberOfAnnotations: {min: Long, max: Long}, numberOfJobAnnotations: {min: Long, max: Long}, numberOfReviewedAnnotations: {min: Long, max: Long}, numberOfImages: {min: Long, max: Long}, members: {min: Long, max: Long}}}
     *          The max, min or list of all the projects properties. members is returned iif withMembersCount parameter is set to true
     */
    static fetchBounds({ withMembersCount }?: {
        withMembersCount?: boolean;
    }): {
        numberOfAnnotations: {
            min: Long;
            max: Long;
        };
        numberOfJobAnnotations: {
            min: Long;
            max: Long;
        };
        numberOfReviewedAnnotations: {
            min: Long;
            max: Long;
        };
        numberOfImages: {
            min: Long;
            max: Long;
        };
        members: {
            min: Long;
            max: Long;
        };
    };
    light: any;
    admin: any;
    withLastActivity: any;
    withMembersCount: any;
}
import Collection from "cytomine-client/src/collections/collection";
import Project from "cytomine-client/src/models/project";
//# sourceMappingURL=project-collection.d.ts.map