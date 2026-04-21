"use strict";
cc._RF.push(module, 'cb7bdmW2HxNzpKa3F1jfbBf', 'ChangeMatchNumsPosTrait');
// subpackages/r_changeMatchNumsPos/Scripts/ChangeMatchNumsPosTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var NodeSkinTool_1 = require("../../../Scripts/NodeSkinTool");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ChangeMatchNumsPosTrait = /** @class */ (function (_super) {
    __extends(ChangeMatchNumsPosTrait, _super);
    function ChangeMatchNumsPosTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._skinKey = "ChangeMatchNumsPos";
        _this._isInitialized = false;
        return _this;
    }
    ChangeMatchNumsPosTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ChangeMatchNumsPosTrait.prototype.onMainGRTop_applyTSCfg = function (t, e) {
        var o;
        this._isInitialized = true;
        var i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
        this.applySkinConfig(i);
        e();
    };
    ChangeMatchNumsPosTrait.prototype.applySkinConfig = function (t) {
        var e, o, i, a, r;
        if (t && t.topRootNode) {
            var s = (null === (e = this._traitData.config) || void 0 === e ? void 0 : e.skinKey) || this._skinKey, c = DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.mainGameTopSkin, "SkinKey", s);
            if (c && 0 !== c.length) {
                var d = t.topRootNode;
                NodeSkinTool_1.default.parseConfigList(d, c, t.gameType, "nodeTop");
                var v = UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Normal), y = null !== (r = null !== (i = null === (o = null == v ? void 0 : v.getCurrentLevelId) || void 0 === o ? void 0 : o.call(v)) && void 0 !== i ? i : null === (a = null == v ? void 0 : v.getLevelId) || void 0 === a ? void 0 : a.call(v)) && void 0 !== r ? r : null;
                if (!("number" == typeof y && y <= 1)) {
                    var m = mj.getClassByName("MainGameTxtShowTrait"), g = null == m ? void 0 : m.getInstance();
                    if (true === (null == g ? void 0 : g.eventEnabled)) {
                        var h = d.getChildByName("labelCanMatchNum");
                        if (h) {
                            h.active = false;
                            h.opacity = 0;
                        }
                    }
                }
            }
        }
    };
    ChangeMatchNumsPosTrait.prototype.onScoreItem_updScore = function (t, e) {
        var o, i;
        if (this._isInitialized) {
            var a = t.ins;
            if ((null === (o = t.args) || void 0 === o ? void 0 : o[2]) && a) {
                var r = null === (i = a.node) || void 0 === i ? void 0 : i.getChildByName("spin_combo");
                if (r && !r.active) {
                    var n = r.getComponent(sp.Skeleton);
                    n && GameUtils_1.default.playSpine(n, "init", true);
                }
            }
            e();
        }
        else
            e();
    };
    ChangeMatchNumsPosTrait.traitKey = "ChangeMatchNumsPos";
    __decorate([
        mj.traitEvent("ChgMtchNmsPos_applyCfg")
    ], ChangeMatchNumsPosTrait.prototype, "applySkinConfig", null);
    ChangeMatchNumsPosTrait = __decorate([
        mj.trait,
        mj.class("ChangeMatchNumsPosTrait")
    ], ChangeMatchNumsPosTrait);
    return ChangeMatchNumsPosTrait;
}(Trait_1.default));
exports.default = ChangeMatchNumsPosTrait;

cc._RF.pop();