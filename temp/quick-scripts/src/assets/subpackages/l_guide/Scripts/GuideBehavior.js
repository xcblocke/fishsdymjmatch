"use strict";
cc._RF.push(module, '56730ibi1VNJrXTV/DNS5ew', 'GuideBehavior');
// subpackages/l_guide/Scripts/GuideBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var GuideUI_1 = require("./GuideUI");
var GuideBehavior = /** @class */ (function (_super) {
    __extends(GuideBehavior, _super);
    function GuideBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._behaviorKey = "GuideBehavior";
        return _this;
    }
    GuideBehavior.prototype.finishGuide = function () { };
    GuideBehavior.prototype.start = function (t) {
        var e = this, i = this.context.gameView.guideRootNode, n = i.guideUI, o = i.getChildByName("guideNode"), a = this.context.getTileNodeMap().get(t.data.tileId), s = this.context.gameView.topRootNode, p = this.context.gameView.bottomRootNode, u = s.getChildByName("btnBack"), l = s.getChildByName("btnSettings");
        if (a && !t.data.finishGuide) {
            p.active = false;
            u.active = false;
            l.active = false;
            var d = a.layerNode.convertToWorldSpaceAR(a.info.tileObject.getPosition());
            if (o) {
                n.setGuidePosition(t.data.tileId, d, t.data.showHand);
                n.setText(t.data.text, t.data.guideStep);
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
            }
            else
                GuideUI_1.default.createUI().then(function (o) {
                    o.parent = e.context.gameView.guideRootNode;
                    o.name = "guideNode";
                    n = o.getComponent(GuideUI_1.default);
                    i.guideUI = n;
                    n.setGuidePosition(t.data.tileId, d, t.data.showHand);
                    n.setText(t.data.text, t.data.guideStep);
                    e.finish(GameInputEnum_1.EBehaviorEnum.Success);
                });
        }
        else {
            if (o) {
                o.destroy();
                i.guideUI = null;
            }
            this.finishGuide();
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
            l.active = true;
        }
    };
    __decorate([
        mj.traitEvent("GuideBhv_finish")
    ], GuideBehavior.prototype, "finishGuide", null);
    __decorate([
        mj.traitEvent("GuideBhv_start")
    ], GuideBehavior.prototype, "start", null);
    return GuideBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = GuideBehavior;

cc._RF.pop();