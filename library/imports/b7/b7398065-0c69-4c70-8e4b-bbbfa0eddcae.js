"use strict";
cc._RF.push(module, 'b7398BlDGlMcI5Lu7+g7dyu', 'StopFullComboInFirstTrait');
// subpackages/l_stopFullComboInFirst/Scripts/StopFullComboInFirstTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var StopFullComboInFirstTrait = /** @class */ (function (_super) {
    __extends(StopFullComboInFirstTrait, _super);
    function StopFullComboInFirstTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isMainLineFirstLevel = false;
        return _this;
    }
    StopFullComboInFirstTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    StopFullComboInFirstTrait.prototype.isMainLineFirstLevel = function () {
        return this._isMainLineFirstLevel;
    };
    StopFullComboInFirstTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var r, n, i, o = t.ins, a = (null == o ? void 0 : o.context) || (null == o ? void 0 : o._context), l = false, c = null === (n = null === (r = null == a ? void 0 : a.getTileMapObject) || void 0 === r ? void 0 : r.call(a)) || void 0 === n ? void 0 : n.gameContext;
        if ((null == c ? void 0 : c.gameType) === GameTypeEnums_1.MjGameType.Normal) {
            var p = null === (i = null == c ? void 0 : c.getGameData) || void 0 === i ? void 0 : i.call(c), f = 1;
            if ("function" == typeof (null == p ? void 0 : p.getCurrentLevelId)) {
                f = p.getCurrentLevelId();
            }
            else {
                "function" == typeof (null == p ? void 0 : p.getLevelId) && (f = p.getLevelId());
            }
            if (1 === f) {
                l = true;
                ExtractTool_1.default.getInstance().isFixedLevel(1) || (l = false);
            }
        }
        this._isMainLineFirstLevel = l;
        e();
    };
    StopFullComboInFirstTrait.prototype.onFullComboChk_canFullCb = function (t, e) {
        if (this.isMainLineFirstLevel()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            e();
        }
    };
    StopFullComboInFirstTrait.prototype.onRwdComboChk_sTriNow = function (t, e) {
        if (this.isMainLineFirstLevel()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            e();
        }
    };
    StopFullComboInFirstTrait.prototype.onMotivWdsChk_canShow = function (t, e) {
        if (this.isMainLineFirstLevel()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            e();
        }
    };
    StopFullComboInFirstTrait.prototype.onComboChk_canShowCombo = function (t, e) {
        if (this.isMainLineFirstLevel()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            e();
        }
    };
    StopFullComboInFirstTrait.prototype.onDianZanTt_checkDZSpecial = function (t, e) {
        if (this.isMainLineFirstLevel()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            e();
        }
    };
    StopFullComboInFirstTrait.traitKey = "StopFullComboInFirst";
    StopFullComboInFirstTrait = __decorate([
        mj.trait,
        mj.class("StopFullComboInFirstTrait")
    ], StopFullComboInFirstTrait);
    return StopFullComboInFirstTrait;
}(Trait_1.default));
exports.default = StopFullComboInFirstTrait;

cc._RF.pop();