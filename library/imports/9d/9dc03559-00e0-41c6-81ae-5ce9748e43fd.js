"use strict";
cc._RF.push(module, '9dc03VZAOBBxoGuXOl0jkP9', 'SelectLockBehavior');
// Scripts/base/SelectLockBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectLockBehavior = void 0;
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var ShakeNodeStateAni_1 = require("../tilenodes/fsm/ani/ShakeNodeStateAni");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var SelectLockBehavior = /** @class */ (function (_super) {
    __extends(SelectLockBehavior, _super);
    function SelectLockBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectLockBehavior.prototype.start = function (e) {
        this.finish();
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Wrong);
        var t = this.context.getTileNodeMap(), o = [e.data.tileId], n = e.data.lockCorrelationCard;
        for (var i in n) {
            var l = n[i];
            o.push(l.id);
        }
        for (var s = 0; s < o.length; s++) {
            var c = o[s], u = t.get(c);
            if (u) {
                var p = new ShakeNodeStateAni_1.ShakeNodeStateAni(u.tileNode, u), f = new ShakeNodeStateAni_1.ShakeNodeStateAni(u.shadowNode, u);
                u.attachNodeStateAnis([p, f]);
                u.playAttachEnterAni(null, function () { });
            }
        }
    };
    return SelectLockBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.SelectLockBehavior = SelectLockBehavior;

cc._RF.pop();