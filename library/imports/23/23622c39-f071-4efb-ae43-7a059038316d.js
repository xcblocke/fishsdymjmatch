"use strict";
cc._RF.push(module, '23622w58HFO+65DegWQODFt', 'MainGameReplaceTopTrait');
// subpackages/l_mainGameTop/Scripts/MainGameReplaceTopTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var NodeSkinTool_1 = require("../../../Scripts/NodeSkinTool");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MainGameReplaceTopTrait = /** @class */ (function (_super) {
    __extends(MainGameReplaceTopTrait, _super);
    function MainGameReplaceTopTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._skinKey = "MainGameReplaceTop_1";
        return _this;
    }
    MainGameReplaceTopTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MainGameReplaceTopTrait.prototype.onMainGmVw_getUrl = function (e, t) {
        t();
    };
    MainGameReplaceTopTrait.prototype.onMainGmVw_initLayers = function (e, t) {
        var o = e.ins;
        if (o.gameType !== GameTypeEnums_1.MjGameType.Classic) {
            this.applyTopSkinConfig(o);
            t();
        }
        else
            t();
    };
    MainGameReplaceTopTrait.prototype.applyTopSkinConfig = function (e) {
        var t;
        if (e && e.topRootNode) {
            var o = DataReader_1.DataReader.getTypeList(ConfigType_1.ConfigType.mainGameTopSkin, "SkinKey", (null === (t = this._traitData.config) || void 0 === t ? void 0 : t.skinKey) || this._skinKey), r = e.topRootNode;
            o && 0 !== o.length && NodeSkinTool_1.default.parseConfigList(r, o, e.gameType, "nodeTop");
        }
    };
    MainGameReplaceTopTrait.traitKey = "MainGameReplaceTop";
    __decorate([
        mj.traitEvent("MainGRTop_applyTSCfg")
    ], MainGameReplaceTopTrait.prototype, "applyTopSkinConfig", null);
    MainGameReplaceTopTrait = __decorate([
        mj.trait,
        mj.class("MainGameReplaceTopTrait")
    ], MainGameReplaceTopTrait);
    return MainGameReplaceTopTrait;
}(Trait_1.default));
exports.default = MainGameReplaceTopTrait;

cc._RF.pop();