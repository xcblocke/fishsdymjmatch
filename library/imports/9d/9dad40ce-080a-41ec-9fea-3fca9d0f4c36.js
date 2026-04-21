"use strict";
cc._RF.push(module, '9dad4DOCApB7J/qP8qdD0w2', 'ChangeBoardDataYogaTrait');
// subpackages/l_cbadYo/Scripts/ChangeBoardDataYogaTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var ChangeBoardDataYogaTrait = /** @class */ (function (_super) {
    __extends(ChangeBoardDataYogaTrait, _super);
    function ChangeBoardDataYogaTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._configConfigPath = null;
        _this._configOffsetPath = null;
        _this._configLevelDataPath = null;
        _this._configJsonPath = null;
        _this._localConfigPath = null;
        _this._localOffsetPath = null;
        _this._localLevelDataPath = null;
        _this._localJsonPath = null;
        _this.bundleName = "";
        _this.traitFolder = "";
        _this.isRemoteBundle = false;
        _this._useConfigBundle = false;
        return _this;
    }
    ChangeBoardDataYogaTrait_1 = ChangeBoardDataYogaTrait;
    ChangeBoardDataYogaTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.bundleName = this._traitData.bundleName || "mainRes";
        this.traitFolder = this._traitData.traitFolder || "travelYoGa";
        this.isRemoteBundle = "mainRes" !== this.bundleName;
        this._configConfigPath = ["byteData/" + this.traitFolder + "/level_file_config", this.bundleName];
        this._configOffsetPath = ["byteData/" + this.traitFolder + "/level_data_offsets", this.bundleName];
        this._configLevelDataPath = ["byteData/" + this.traitFolder + "/level_data", this.bundleName];
        this._configJsonPath = ["config/boards/" + this.traitFolder + "/", this.bundleName];
        var e = ChangeBoardDataYogaTrait_1.LOCAL_FALLBACK_FOLDER;
        this._localConfigPath = ["byteData/" + e + "/level_file_config", "mainRes"];
        this._localOffsetPath = ["byteData/" + e + "/level_data_offsets", "mainRes"];
        this._localLevelDataPath = ["byteData/" + e + "/level_data", "mainRes"];
        this._localJsonPath = ["config/boards/" + e + "/", "mainRes"];
        this.isRemoteBundle && LowPriorityBundleLoader_1.default.getInstance().addTask(this.bundleName, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultHightPriority);
    };
    ChangeBoardDataYogaTrait.prototype.isBundleReady = function () {
        return !this.isRemoteBundle || LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(this.bundleName);
    };
    ChangeBoardDataYogaTrait.prototype.resolveSource = function () {
        this._useConfigBundle = this.isBundleReady();
    };
    ChangeBoardDataYogaTrait.prototype.shouldUseYogaPath = function (t, e) {
        if (t && null != e)
            return t === GameTypeEnums_1.MjGameType.Travel && e === GameTypeEnums_1.JourneyType.Yoga;
        var a = ExtractTool_1.default.getCurrentGameType(), r = ExtractTool_1.default.getCurrentJourneyType();
        return a === GameTypeEnums_1.MjGameType.Travel && r === GameTypeEnums_1.JourneyType.Yoga;
    };
    ChangeBoardDataYogaTrait.prototype.onExtNormLv_getConfigPath = function (t, e) {
        var a, r, o = null === (a = t.args) || void 0 === a ? void 0 : a[0], i = null === (r = t.args) || void 0 === r ? void 0 : r[1];
        if (this.shouldUseYogaPath(o, i)) {
            this.resolveSource();
            var n = this._useConfigBundle ? this._configConfigPath : this._localConfigPath;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: n
            });
        }
        else
            e();
    };
    ChangeBoardDataYogaTrait.prototype.onExtNormLv_getOffsetPath = function (t, e) {
        var a, r, o = null === (a = t.args) || void 0 === a ? void 0 : a[0], i = null === (r = t.args) || void 0 === r ? void 0 : r[1];
        if (this.shouldUseYogaPath(o, i)) {
            this.resolveSource();
            var n = this._useConfigBundle ? this._configOffsetPath : this._localOffsetPath;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: n
            });
        }
        else
            e();
    };
    ChangeBoardDataYogaTrait.prototype.onExtNormLv_getLevDataPath = function (t, e) {
        var a, r, o = null === (a = t.args) || void 0 === a ? void 0 : a[0], i = null === (r = t.args) || void 0 === r ? void 0 : r[1];
        if (this.shouldUseYogaPath(o, i)) {
            this.resolveSource();
            var n = this._useConfigBundle ? this._configLevelDataPath : this._localLevelDataPath;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: n
            });
        }
        else
            e();
    };
    ChangeBoardDataYogaTrait.prototype.onExtNormLv_getJsonPath = function (t, e) {
        var a, r, o = null === (a = t.args) || void 0 === a ? void 0 : a[1], i = null === (r = t.args) || void 0 === r ? void 0 : r[2];
        if (this.shouldUseYogaPath(o, i)) {
            var n = this._useConfigBundle ? this._configJsonPath : this._localJsonPath;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: n
            });
        }
        else
            e();
    };
    var ChangeBoardDataYogaTrait_1;
    ChangeBoardDataYogaTrait.traitKey = "ChangeBoardDataYoga";
    ChangeBoardDataYogaTrait.LOCAL_FALLBACK_FOLDER = "travelYoGa";
    ChangeBoardDataYogaTrait = ChangeBoardDataYogaTrait_1 = __decorate([
        mj.trait,
        mj.class("ChangeBoardDataYogaTrait")
    ], ChangeBoardDataYogaTrait);
    return ChangeBoardDataYogaTrait;
}(Trait_1.default));
exports.default = ChangeBoardDataYogaTrait;

cc._RF.pop();