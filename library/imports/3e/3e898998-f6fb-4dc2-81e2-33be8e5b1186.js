"use strict";
cc._RF.push(module, '3e898mY9vtNwoHiM76OWxGG', 'InputNoMatchFail');
// Scripts/input/InputNoMatchFail.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var FailEffect_1 = require("../FailEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputNoMatchFail = /** @class */ (function (_super) {
    __extends(InputNoMatchFail, _super);
    function InputNoMatchFail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputNoMatchFail.prototype.getPreShuffleData = function () {
        return null;
    };
    InputNoMatchFail.prototype.excute = function (e) {
        var t, o, n, i = (null == e ? void 0 : e.tileIds) || [];
        if (null !== (n = null === (o = null === (t = this.gameContext.getTileMapObject()) || void 0 === t ? void 0 : t.checkIsDead) || void 0 === o ? void 0 : o.call(t, i)) && void 0 !== n && n) {
            var r = this.gameContext.getGameData(), s = new FailEffect_1.FailEffect({
                shuffleNum: r.getShuffleNums(),
                preShuffleData: this.getPreShuffleData()
            });
            this.pushEffect(s, BehaviorsEnum_1.EInsertType.Root);
        }
    };
    __decorate([
        mj.traitEvent("IptNoMatch_getPreShf")
    ], InputNoMatchFail.prototype, "getPreShuffleData", null);
    return InputNoMatchFail;
}(InputBase_1.InputBase));
exports.default = InputNoMatchFail;

cc._RF.pop();