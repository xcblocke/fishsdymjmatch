"use strict";
cc._RF.push(module, 'e1ceb+OsIpO7bmB5k7MpJo+', 'MaskOpacityTrait');
// subpackages/l_maskOpacity/Scripts/MaskOpacityTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var MaskOpacityTrait = /** @class */ (function (_super) {
    __extends(MaskOpacityTrait, _super);
    function MaskOpacityTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._defaultOpacity = 200;
        _this._excludeControllers = new Set(["WinController", "TravelWinController", "DailyChallengeWinController", "NormalBoxController", "TravelBoxController", "RankBoxController", "LevelBoxController", "DailyRewardController", "AgeSurveyRewardController", "TravelRewardController"]);
        _this._originalShowBlackLayer = null;
        return _this;
    }
    MaskOpacityTrait.prototype.onLoad = function () {
        var r, e;
        _super.prototype.onLoad.call(this);
        this._defaultOpacity = null !== (e = null === (r = this.traitData.config) || void 0 === r ? void 0 : r.defaultOpacity) && void 0 !== e ? e : 200;
        var o = ControllerManager_1.default.getInstance();
        this._originalShowBlackLayer = o.showBlackLayer.bind(o);
        o.showBlackLayer = this._showBlackLayerOverride.bind(this);
    };
    MaskOpacityTrait.prototype._showBlackLayerOverride = function (t, r, e, o) {
        var a, n, l;
        if (null !== e) {
            var c = mj.getClassName(null == r ? void 0 : r.constructor) || "";
            if (this._excludeControllers.has(c))
                null === (n = this._originalShowBlackLayer) || void 0 === n || n.call(this, t, r, e, o);
            else {
                var s = e ? Object.assign({}, e) : {};
                "number" != typeof s.blackOpacity && (s.blackOpacity = this._defaultOpacity);
                null === (l = this._originalShowBlackLayer) || void 0 === l || l.call(this, t, r, s, o);
            }
        }
        else
            null === (a = this._originalShowBlackLayer) || void 0 === a || a.call(this, t, r, e, o);
    };
    MaskOpacityTrait.traitKey = "MaskOpacity";
    MaskOpacityTrait = __decorate([
        mj.trait,
        mj.class("MaskOpacityTrait")
    ], MaskOpacityTrait);
    return MaskOpacityTrait;
}(Trait_1.default));
exports.default = MaskOpacityTrait;

cc._RF.pop();