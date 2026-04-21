"use strict";
cc._RF.push(module, '9d0967/O8lB8p23pYPHsBZh', 'HitTipsBehavior');
// Scripts/base/HitTipsBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HitTipsBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var HitTipsBehavior = /** @class */ (function (_super) {
    __extends(HitTipsBehavior, _super);
    function HitTipsBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HitTipsBehavior.prototype.start = function (e) {
        var t = e.data.isClearHit, o = this.context.getTileNodeMap();
        if (t) {
            var n = e.data.tileId1, i = e.data.tileId2, r = o.get(n), s = o.get(i);
            null == r || r.hidePropHint();
            null == s || s.hidePropHint();
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else {
            var c = e.data.tileId1, u = e.data.tileId2;
            if (c && u) {
                r = o.get(c), s = o.get(u);
                null == r || r.showPropHint();
                null == s || s.showPropHint();
                this.triggerShowHintEvent(r, s);
            }
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Hint);
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
    };
    HitTipsBehavior.prototype.triggerShowHintEvent = function (e, t) {
        return {
            tileNode1: e,
            tileNode2: t,
            direction1: 1,
            direction2: -1
        };
    };
    __decorate([
        mj.traitEvent("HitTipsBhv_trgHint")
    ], HitTipsBehavior.prototype, "triggerShowHintEvent", null);
    return HitTipsBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.HitTipsBehavior = HitTipsBehavior;

cc._RF.pop();