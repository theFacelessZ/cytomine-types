/** Enum providing the project member roles handled in Cytomine */
export const ProjectMemberRole: Readonly<{
    CONTRIBUTOR: string;
    MANAGER: string;
    REPRESENTATIVE: string;
}>;
export default class Project extends Model {
    /**
     * Fetch the last actions performed in the instance
     *
     * @param {number}  [project]   If specified, only actions in this project will be returned
     * @param {number}  [max]       The maximum number of actions to return
     * @param {number}  [offset]    Offset of first record
     * @param {number}  [user]      If specified, only actions from this user will be returned
     * @param {boolean} [fullData]  Specifies whether or not the response should include the full JSON of the data field
     * @param {number}  [startDate] If specified, only actions performed after this date will be returned
     * @param {number}  [endDate]   If specified, only actions performed before this date will be returned
     * @returns {Array<{id, created, message, prefix, prefixAction, user, project, data, serviceName, className, action}>}
     *                              The list of actions (properites data, serviceName, className and action will only be
     *                              provided if fullData is set to true)
     */
    static fetchCommandHistory({ project, max, offset, user, fullData, startDate, endDate }?: number): {
        id: any;
        created: any;
        message: any;
        prefix: any;
        prefixAction: any;
        user: any;
        project: any;
        data: any;
        serviceName: any;
        className: any;
        action: any;
    }[];
    name: any;
    ontology: any;
    ontologyName: any;
    discipline: any;
    disciplineName: any;
    numberOfSlides: any;
    numberOfImages: any;
    numberOfAnnotations: any;
    numberOfJobAnnotations: any;
    numberOfReviewedAnnotations: any;
    retrievalDisable: any;
    retrievalAllOntology: any;
    retrievalProjects: any;
    blindMode: any;
    isClosed: any;
    isReadOnly: any;
    isRestricted: any;
    hideUsersLayers: any;
    hideAdminsLayers: any;
    /**
     * Fetch the user that created the project
     *
     * @returns {User}
     */
    fetchCreator(): User;
    _creator: User;
    /**
     * Fetch all project users
     *
     * @param {boolean} [online]    If true, only online users are included in response
     * @param {boolean} [showJob]   If true, the user jobs are included in response
     *
     * @returns {UserCollection} the collection of project users
     */
    fetchUsers(online?: boolean, showJob?: boolean): UserCollection;
    /**
     * Fetch the connected project users and their current positions (opened images in this project)
     *
     * @returns {Array<{id: , position: Array<{id: , image: , filename: , originalFilename: , date: }>}>}
     */
    fetchConnectedUsers(): Array<{
        id: any;
        position: Array<{
            id: any;
            image: any;
            filename: any;
            originalFilename: any;
            date: any;
        }>;
    }>;
    /**
     * Fetch all project administrators
     *
     * @returns {UserCollection} the collection of project administrators
     */
    fetchAdministrators(): UserCollection;
    /**
     * Fetch all project representatives
     * (compared to ProjectRepresentativeCollection, it returns the User instances rather than the ProjectRepresentative
     * instances - which only contain the ID of the users, not their data)
     *
     * @returns {UserCollection} the collection of project representatives
     */
    fetchRepresentatives(): UserCollection;
    /**
     * Fetch the user layers available in the project
     *
     * @param {number} [image]  Identifier of the image: if this parameter is set, the result will also contain user job
     *                          layers available in this image
     *
     * @returns {UserCollection} the collection of users having a layer in the project (and image)
     */
    fetchUserLayers(image?: number): UserCollection;
    /**
     * Add a user to the project
     *
     * @param {number} idUser identifier of the user
     */
    addUser(idUser: number): Promise<void>;
    /**
     * Add users to the project
     *
     * @param {array} idUsers identifiers of the users
     */
    addUsers(idUsers: any[]): Promise<void>;
    /**
     * Delete a user from the project
     *
     * @param {number} idUser identifier of the user
     */
    deleteUser(idUser: number): Promise<void>;
    /**
     * Delete users from the project
     *
     * @param {array} idUsers identifiers of the users
     */
    deleteUsers(idUsers: any[]): Promise<void>;
    /**
     * Add an admin to the project
     *
     * @param {number} idUser identifier of the user
     */
    addAdmin(idUser: number): Promise<void>;
    /**
     * Delete an admin from the project
     *
     * @param {number} idUser identifier of the user
     */
    deleteAdmin(idUser: number): Promise<void>;
    /**
     * Fetch all users of a project with their last activity
     *
     * @returns {UserCollection}    The collection of project users. The following attributes are set for each user:
     *                              id, username, firstname, lastname, email, LDAP, lastImageId, lastImageName,
     *                              lastConnection, frequency
     */
    fetchUsersActivity(): UserCollection;
    /**
     * Fetch the UI config of the project
     * @returns {Object} Set of properties describing which parts of the UI to display, depending on the role of the
     *                   user (each property is an object {CONTRIBUTOR_PROJECT: boolean, ADMIN_PROJECT: boolean})
     */
    fetchUIConfig(): any;
    /**
     * Sets the UI config of the project
     * @param   {Object} config Set of properties describing which parts of the UI to display, depending on the role of the
     *                          user (each property is an object {CONTRIBUTOR_PROJECT: boolean, ADMIN_PROJECT: boolean})
     * @returns {Object}        Resulting UI config as returned by backend (same structure as input)
     */
    saveUIConfig(config: any): any;
    /**
     * Fetch the last actions in the project
     *
     * @param {number}  [max]       The maximum number of actions to return
     * @param {number}  [offset]    Offset of first record
     * @param {number}  [user]      If specified, only actions from this user will be returned
     * @param {boolean} [fullData]  Specifies whether or not the response should include the full JSON of the data field
     * @param {number}  [startDate] If specified, only actions performed after this date will be returned
     * @param {number}  [endDate]   If specified, only actions performed before this date will be returned
     * @returns {Array<{id, created, message, prefix, prefixAction, user, project, data, serviceName, className, action}>}
     *                              The list of actions (properites data, serviceName, className and action will only be
     *                              provided if fullData is set to true)
     */
    fetchCommandHistory({ max, offset, user, fullData, startDate, endDate }?: number): Array<{
        id;
        created;
        message;
        prefix;
        prefixAction;
        user;
        project;
        data;
        serviceName;
        className;
        action;
    }>;
    /**
     * Fetches the number of connections in this project
     *
     * @param {number}  [startDate] If specified, only connections after this date will be counted
     * @param {number}  [endDate]   If specified, only connections before this date will be counted
     * @returns {number} The number of connections
     */
    fetchNbConnections({ startDate, endDate }?: number): number;
    /**
     * Fetches the evolution of connections in this project
     *
     * @param {number}  [startDate]     If specified, only connections after this date will be counted
     * @param {number}  [endDate]       If specified, only connections before this date will be counted
     * @param {number}  [daysRange]     The durations of the periods to consider
     * @param {boolean} [accumulate]    Whether or not the count should be accumulated across periods
     * @returns {Array<{date, endDate, size}>} The number of connections for each period
     */
    fetchConnectionsEvolution({ startDate, endDate, daysRange, accumulate }?: number): Array<{
        date;
        endDate;
        size;
    }>;
    /**
     * Fetches the number of image consultations in this project
     *
     * @param {number}  [startDate] If specified, only consultations after this date will be counted
     * @param {number}  [endDate]   If specified, only consultations before this date will be counted
     * @returns {number} The number of image consultations
     */
    fetchNbImageConsultations({ startDate, endDate }?: number): number;
    /**
     * Fetches the evolution of image consultations in this project
     *
     * @param {number}  [startDate]     If specified, only consultations after this date will be counted
     * @param {number}  [endDate]       If specified, only consultations before this date will be counted
     * @param {number}  [daysRange]     The durations of the periods to consider
     * @param {boolean} [accumulate]    Whether or not the count should be accumulated across periods
     * @returns {Array<{date, endDate, size}>} The number of image consultations for each period
     */
    fetchImageConsultationsEvolution({ startDate, endDate, daysRange, accumulate }?: number): Array<{
        date;
        endDate;
        size;
    }>;
    /**
     * Fetches the number of annotation actions in this project
     *
     * @param {number}  [startDate] If specified, only actions after this date will be counted
     * @param {number}  [endDate]   If specified, only actions before this date will be counted
     * @param {string}  [type]    The type of annotation action to take into account
     * @returns {number} The number of annotation actions
     */
    fetchNbAnnotationActions({ startDate, endDate, type }?: number): number;
    /**
     * Fetches the evolution of annotation actions in this project
     *
     * @param {number}  [startDate]     If specified, only actions after this date will be counted
     * @param {number}  [endDate]       If specified, only actions before this date will be counted
     * @param {number}  [daysRange]     The durations of the periods to consider
     * @param {boolean} [accumulate]    Whether or not the count should be accumulated across periods
     * @param {string}  [type]        The type of annotation action to take into account
     * @returns {Array<{date, endDate, size}>} The number of annotation actions for each period
     */
    fetchAnnotationActionsEvolution({ startDate, endDate, daysRange, accumulate, type }?: number): Array<{
        date;
        endDate;
        size;
    }>;
    /**
     * Fetches the number of annotations in this project
     *
     * @param {number}  [startDate] If specified, only annotations created after this date will be counted
     * @param {number}  [endDate]   If specified, only annotations created before this date will be counted
     * @param {string} annotationType The annotation type to count (see AnnotationType for allowed values)
     * @returns {number} The number of annotations
     */
    fetchNbAnnotations({ startDate, endDate, annotationType }?: number): number;
    /** Fetches the evolution of annotations in this project
     *
     * @param {number}  [startDate]     If specified, only annotations created after this date will be counted
     * @param {number}  [endDate]       If specified, only annotations created before this date will be counted
     * @param {number}  [daysRange]     The durations of the periods to consider
     * @param {boolean} [accumulate]    Whether or not the count should be accumulated across periods
     * @param {boolean} [reverseOrder]  If true, the latest period will be returned as first element of the array
     * @param {number}  [term]          The identifier of the term to consider
     * @param {string}  annotationType The annotation type to count (see AnnotationType for allowed values)
     * @returns {Array<{date, endDate, size}>} The number of annotations for each period
     */
    fetchAnnotationsEvolution({ startDate, endDate, annotationType, daysRange, accumulate, reverseOrder, term }?: number): Array<{
        date;
        endDate;
        size;
    }>;
    /**
     * Fetches the number of annotations for each term
     *
     * @param {number}  [startDate]     If specified, only associations after this date will be counted
     * @param {number}  [endDate]       If specified, only associations before this date will be counted
     * @param {boolean}  [leafsOnly]    If true, only leafs terms will be returned in the statistics
     * @returns {Array<{id, key, color, value}>} The terms, with their associated count (value property)
     */
    fetchStatsTerms({ startDate, endDate, leafsOnly }?: number): Array<{
        id;
        key;
        color;
        value;
    }>;
    /**
     * Fetches for each term the number of images having annotations associated with this term
     *
     * @param {number}  [startDate]     If specified, only associations after this date will be counted
     * @param {number}  [endDate]       If specified, only associations before this date will be counted
     * @returns {Array<{id, key, color, value}>} The terms, with their associated count (value property)
     */
    fetchStatsAnnotatedImagesByTerm({ startDate, endDate }?: number): Array<{
        id;
        key;
        color;
        value;
    }>;
    /**
     * Fetches the number of annotations for each contributor
     *
     * @param {number}  [startDate]     If specified, only annotations created after this date will be counted
     * @param {number}  [endDate]       If specified, only annotations created before this date will be counted
     * @returns {Array<{id, key, username, value}>} The contributors (key=firstName + lastName), with their associated count (value property)
     */
    fetchStatsAnnotationCreators({ startDate, endDate }?: number): Array<{
        id;
        key;
        username;
        value;
    }>;
    /**
     * Fetches the number of annotated images for each contributor
     *
     * @param {number}  [startDate]     If specified, only annotations created after this date will be counted
     * @param {number}  [endDate]       If specified, only annotations created before this date will be counted
     * @returns {Array<{id, key, value}>} The contributors (key=firstName + lastName), with their associated count (value property)
     */
    fetchStatsAnnotatedImagesByCreator({ startDate, endDate }?: number): Array<{
        id;
        key;
        value;
    }>;
}
import Model from "cytomine-client/src/models/model";
import User from "cytomine-client/src/models/user";
import UserCollection from "cytomine-client/src/collections/user-collection";
//# sourceMappingURL=project.d.ts.map