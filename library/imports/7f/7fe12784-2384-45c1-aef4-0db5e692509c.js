"use strict";
cc._RF.push(module, '7fe12eEI4RFwa70DbXmklCc', 'InputRefreshCardLockDarken');
// Scripts/input/InputRefreshCardLockDarken.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var CardLockDarkenEffect_1 = require("../CardLockDarkenEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputRefreshCardLockDarken = /** @class */ (function (_super) {
    __extends(InputRefreshCardLockDarken, _super);
    function InputRefreshCardLockDarken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputRefreshCardLockDarken.prototype.excute = function (e) {
        var t = void 0 === e.isShowAni || e.isShowAni;
        this.pushRefreshCardLockDarkenEffect(t);
    };
    InputRefreshCardLockDarken.prototype.pushRefreshCardLockDarkenEffect = function (e) {
        var t = new CardLockDarkenEffect_1.CardLockDarkenEffect({
            isShowAni: e
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    return InputRefreshCardLockDarken;
}(InputBase_1.InputBase));
exports.default = InputRefreshCardLockDarken;

cc._RF.pop();