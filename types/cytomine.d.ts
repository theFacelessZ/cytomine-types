export default class Cytomine {
    /**
     * @returns {this} The singleton instance
     */
    static get instance(): any;
    /**
     * @param {string}   host             The Cytomine host
     * @param {string} [basePath=/api/]   The base path to perform API requests
     *
     * @returns {this} The singleton instance
     */
    constructor(host: string, basePath?: string);
    _host: string;
    _basePath: string;
    api: import("axios").AxiosInstance;
    lastCommand: any;
    /**
     * @returns {string} The host
     */
    get host(): string;
    /**
     * @returns {string} The base path
     */
    get basePath(): string;
    /**
     * Ping the server to get info
     *
     * @param {number}  [project]   The identifier of the active project
     * @returns {{alive, authenticated, version, serverURL, serverID, user}} The data returned by the server
     */
    ping(project?: number): {
        alive;
        authenticated;
        version;
        serverURL;
        serverID;
        user;
    };
    /**
     * Login to Cytomine with the provided credentials
     *
     * @param {string}  username            The username
     * @param {string}  password            The password
     * @param {boolean} [rememberMe=true]   Whether or not to remember the user
     */
    login(username: string, password: string, rememberMe?: boolean): Promise<void>;
    /**
     * Login to Cytomine with a token
     *
     * @param {string}  username    The username
     * @param {string}  tokenKey    The token
     */
    loginWithToken(username: string, tokenKey: string): Promise<void>;
    /**
     * Impersonate another user
     *
     * @param {String} username The username of the user to impersonate
     */
    switchUser(username: string): Promise<void>;
    /**
     * Stops impersonating another user
     */
    stopSwitchUser(): Promise<void>;
    /**
     * Logout from Cytomine
     */
    logout(): Promise<void>;
    /**
     * Send a mail to the provided email address with the associated username
     *
     * @param {string}  email   The email address
     */
    forgotUsername(email: string): Promise<void>;
    /**
     * Send a mail to the email associated to the provided username to reset password
     *
     * @param {string}  username    The username
     */
    forgotPassword(username: string): Promise<void>;
    /**
     * Open an admin session
     * @returns {boolean} True if the current user is now connected as admin
     */
    openAdminSession(): boolean;
    /**
     * Close an admin session
     * @returns {boolean} True if the current user is no longer connected as admin
     */
    closeAdminSession(): boolean;
    /**
     * Fetch the UI configuration for the current user
     * @param {number} [project] The identifier of the project to consider (if specified, in addition to the general UI
     *                           config, the UI config of the specified project will be returned)
     * @returns {Object} Set of properties describing which parts of the UI to display
     */
    fetchUIConfigCurrentUser(project?: number): any;
    /**
     * Fetch a signature string for the current user
     * @returns {string} The generated signature
     * @param options
     */
    fetchSignature(options?: { method: string, uri: string, queryString: string, date: string, contentMD5: string, contentType: string }): string;
    /**
     * Fetch total count of each model
     *
     * @returns {{users, projects, images, userAnnotations, jobAnnotations, terms, ontologies, softwares, jobs}}
     *          The total count for each model
     */
    fetchTotalCounts(): {
        users;
        projects;
        images;
        userAnnotations;
        jobAnnotations;
        terms;
        ontologies;
        softwares;
        jobs;
    };
    /**
     * Fetch stats of current activity
     *
     * @returns {{users, projects, mostActiveProject}} Stats related to current activity
     */
    fetchCurrentStats(): {
        users;
        projects;
        mostActiveProject;
    };
    /**
     * Fetch stats related to storage space
     *
     * @returns {{total, available, used, usedP}} Stats related to the storage
     */
    fetchStorageStats(): {
        total;
        available;
        used;
        usedP;
    };
    /**
     * Undo a command
     *
     * @param {number} command The identifier of the command to undo ; if null, the last command will be undone
     *
     * @returns {Array<Object>} The collection of affected models
     */
    undo(command?: number): Array<any>;
    /**
     * Redo a command
     *
     * @param {number} command The identifier of the command to redo ; if null, the last undone command will be redone
     *
     * @returns {Array<Object>} The collection of affected models
     */
    redo(command?: number): Array<any>;
}
//# sourceMappingURL=cytomine.d.ts.map