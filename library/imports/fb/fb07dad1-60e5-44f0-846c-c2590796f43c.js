"use strict";
cc._RF.push(module, 'fb07drRYOVE8IRswlkHlvQ8', 'JourneyWinOptTrait');
// subpackages/r_journeyWinOpt/Scripts/JourneyWinOptTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var JourneyWinOptView_1 = require("./JourneyWinOptView");
var JourneyWinOptTrait = /** @class */ (function (_super) {
    __extends(JourneyWinOptTrait, _super);
    function JourneyWinOptTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requireRes = ["r_journeyWinOpt:prefabs/JourneyWinOpt"];
        return _this;
    }
    JourneyWinOptTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    JourneyWinOptTrait.prototype.onTLWinCtrl_initRes = function (t, e) {
        var r = t.ins;
        null == r || r.addPreloadRes("Prefab", this.requireRes);
        e();
    };
    JourneyWinOptTrait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        var r, i = t.ins;
        t.args[0];
        if (cc.isValid(i)) {
            var o = i.getContentNode();
            if (cc.isValid(o)) {
                var n = o.getChildByName("JourneyWinOpt");
                if (!cc.isValid(n)) {
                    n = i.createUISync(JourneyWinOptView_1.default);
                    cc.isValid(n) && o.addChild(n);
                }
                cc.isValid(n) && (null === (r = n.getComponent(JourneyWinOptView_1.default)) || void 0 === r || r.showUI(o));
            }
        }
        e();
    };
    JourneyWinOptTrait.traitKey = "JourneyWinOpt";
    JourneyWinOptTrait = __decorate([
        mj.trait,
        mj.class("JourneyWinOptTrait")
    ], JourneyWinOptTrait);
    return JourneyWinOptTrait;
}(Trait_1.default));
exports.default = JourneyWinOptTrait;

cc._RF.pop();