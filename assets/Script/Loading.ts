const { ccclass, property } = cc._decorator;

@ccclass
export default class Loading extends cc.Component {

    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null;
    @property(cc.Node)
    subBar: cc.Node = null;
    @property(cc.Label)
    label: cc.Label = null;
    @property(cc.Node)
    body: cc.Node = null;

    onLoad() {
        cc.macro.ENABLE_MULTI_TOUCH = false;
        const manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.preloadGameScene();
        // manager.enabledDebugDraw = true; 
        // cc.director.getPhysicsManager().enabled = true; 
    }

    preloadGameScene() {
        cc.director.preloadScene('game', (completeCount, totalCount, item) => {
            let v = completeCount / totalCount;
            this.progressBar.node.getComponent("progressBarMoveEffect").updateProgress(v, (num) => {
                let x = this.subBar.width * num;
                this.body.setPosition(cc.v2(x, this.body.y));
                this.label.string = `${Math.floor(v * 100)}%`;
            });
        }, () => {
            cc.director.loadScene("game");
            cc.log('game scene preloaded');
        });
    }
}
