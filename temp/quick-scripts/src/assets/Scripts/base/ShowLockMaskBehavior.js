"use strict";
cc._RF.push(module, '18781BC+wVBQpv/TWgwEWVs', 'ShowLockMaskBehavior');
// Scripts/base/ShowLockMaskBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowLockMaskBehavior = void 0;
var LockMaskNodeStateAni_1 = require("../tilenodes/fsm/ani/LockMaskNodeStateAni");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ShowLockMaskBehavior = /** @class */ (function (_super) {
    __extends(ShowLockMaskBehavior, _super);
    function ShowLockMaskBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShowLockMaskBehavior.prototype.start = function (e) {
        var t, o = this.context.getTileNodeMap(), n = e.data.tileId, i = null !== (t = e.data.delay) && void 0 !== t ? t : 0.7, a = o.get(n);
        if (a) {
            var l = new LockMaskNodeStateAni_1.LockMaskNodeStateAni(a.tileNode, a, i);
            a.attachNodeStateAnis([l]);
            a.playAttachEnterAni(null, function () { });
            this.finish();
        }
        else
            this.finish();
    };
    return ShowLockMaskBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ShowLockMaskBehavior = ShowLockMaskBehavior;

cc._RF.pop();