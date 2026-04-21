"use strict";
cc._RF.push(module, 'f29b067+CxOvYZkeCY2BaS9', 'InputClassicFail');
// Scripts/input/InputClassicFail.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var ClassicBeforeFailEffect_1 = require("../ClassicBeforeFailEffect");
var ClassicFailEffect_1 = require("../ClassicFailEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputClassicFail = /** @class */ (function (_super) {
    __extends(InputClassicFail, _super);
    function InputClassicFail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputClassicFail.prototype.excute = function (e) {
        this.gameContext.gameModifier.modifyClassicEnd();
        (null == e ? void 0 : e.skipBeforeFailEffect) || this.pushClassicBeforeFailEffect();
        this.pushClassicFailEffect(e);
    };
    InputClassicFail.prototype.pushClassicBeforeFailEffect = function () {
        var e = new ClassicBeforeFailEffect_1.ClassicBeforeFailEffect({});
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    InputClassicFail.prototype.pushClassicFailEffect = function (e) {
        var t = new ClassicFailEffect_1.ClassicFailEffect({
            isGM: null == e ? void 0 : e.isGM,
            skipInterAd: null == e ? void 0 : e.skipInterAd
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
    };
    return InputClassicFail;
}(InputBase_1.InputBase));
exports.default = InputClassicFail;

cc._RF.pop();