export default class ConsensusScoreCollection extends Collection {
    /** @inheritdoc */
    static get model(): typeof ConsensusScore;
    /** @inheritdoc */
    static get allowedFilters(): any[];
    imageInstance: any;
    project: any;
}
import Collection from "cytomine-client/src/collections/collection";
import ConsensusScore from "cytomine-client/src/models/consensus-score";
//# sourceMappingURL=consensus-score-collection.d.ts.map