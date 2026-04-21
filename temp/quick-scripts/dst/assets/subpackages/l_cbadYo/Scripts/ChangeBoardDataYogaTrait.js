
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_cbadYo/Scripts/ChangeBoardDataYogaTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NiYWRZby9TY3JpcHRzL0NoYW5nZUJvYXJkRGF0YVlvZ2FUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUZBQTRFO0FBQzVFLHdGQUFpRztBQUNqRyw4RUFBd0Y7QUFDeEYsZ0VBQTJEO0FBQzNELHFHQUFnSTtBQUdoSTtJQUFzRCw0Q0FBSztJQUEzRDtRQUFBLHFFQXNHQztRQXJHQyx1QkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsdUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLDBCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixzQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsc0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLHlCQUFtQixHQUFHLElBQUksQ0FBQztRQUMzQixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixvQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixzQkFBZ0IsR0FBRyxLQUFLLENBQUM7O0lBMEYzQixDQUFDO2lDQXRHb0Isd0JBQXdCO0lBZTNDLHlDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLElBQUksWUFBWSxDQUFDO1FBQy9ELElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDcEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLHFCQUFxQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLEdBQUcsMEJBQXdCLENBQUMscUJBQXFCLENBQUM7UUFDdkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxjQUFjLElBQUksaUNBQXVCLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsb0RBQTBCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN6SSxDQUFDO0lBQ0QsZ0RBQWEsR0FBYjtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLGlDQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBQ0QsZ0RBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUNELG9EQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQyxLQUFLLDBCQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSywyQkFBVyxDQUFDLElBQUksQ0FBQztRQUM3RSxJQUFJLENBQUMsR0FBRyxxQkFBVyxDQUFDLGtCQUFrQixFQUFFLEVBQ3RDLENBQUMsR0FBRyxxQkFBVyxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDMUMsT0FBTyxDQUFDLEtBQUssMEJBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLDJCQUFXLENBQUMsSUFBSSxDQUFDO0lBQzNELENBQUM7SUFDRCw0REFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDekQsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUMvRSxDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsNERBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pELENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDL0UsQ0FBQyxDQUFDO2dCQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUUsQ0FBQzthQUNiLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELDZEQUEwQixHQUExQixVQUEyQixDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN6RCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3JGLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCwwREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDekQsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDM0UsQ0FBQyxDQUFDO2dCQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUUsQ0FBQzthQUNiLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7SUF4Rk0saUNBQVEsR0FBRyxxQkFBcUIsQ0FBQztJQUNqQyw4Q0FBcUIsR0FBRyxZQUFZLENBQUM7SUFkekIsd0JBQXdCO1FBRjVDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztPQUNoQix3QkFBd0IsQ0FzRzVDO0lBQUQsK0JBQUM7Q0F0R0QsQUFzR0MsQ0F0R3FELGVBQUssR0FzRzFEO2tCQXRHb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUb29sIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdFRvb2wnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSwgSm91cm5leVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlciwgeyBFTG93UHJpb3JpdHlCdW5kbGVQcmlvcml0eSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9Mb3dQcmlvcml0eUJ1bmRsZUxvYWRlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNoYW5nZUJvYXJkRGF0YVlvZ2FUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlQm9hcmREYXRhWW9nYVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY29uZmlnQ29uZmlnUGF0aCA9IG51bGw7XG4gIF9jb25maWdPZmZzZXRQYXRoID0gbnVsbDtcbiAgX2NvbmZpZ0xldmVsRGF0YVBhdGggPSBudWxsO1xuICBfY29uZmlnSnNvblBhdGggPSBudWxsO1xuICBfbG9jYWxDb25maWdQYXRoID0gbnVsbDtcbiAgX2xvY2FsT2Zmc2V0UGF0aCA9IG51bGw7XG4gIF9sb2NhbExldmVsRGF0YVBhdGggPSBudWxsO1xuICBfbG9jYWxKc29uUGF0aCA9IG51bGw7XG4gIGJ1bmRsZU5hbWUgPSBcIlwiO1xuICB0cmFpdEZvbGRlciA9IFwiXCI7XG4gIGlzUmVtb3RlQnVuZGxlID0gZmFsc2U7XG4gIF91c2VDb25maWdCdW5kbGUgPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDaGFuZ2VCb2FyZERhdGFZb2dhXCI7XG4gIHN0YXRpYyBMT0NBTF9GQUxMQkFDS19GT0xERVIgPSBcInRyYXZlbFlvR2FcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuYnVuZGxlTmFtZSA9IHRoaXMuX3RyYWl0RGF0YS5idW5kbGVOYW1lIHx8IFwibWFpblJlc1wiO1xuICAgIHRoaXMudHJhaXRGb2xkZXIgPSB0aGlzLl90cmFpdERhdGEudHJhaXRGb2xkZXIgfHwgXCJ0cmF2ZWxZb0dhXCI7XG4gICAgdGhpcy5pc1JlbW90ZUJ1bmRsZSA9IFwibWFpblJlc1wiICE9PSB0aGlzLmJ1bmRsZU5hbWU7XG4gICAgdGhpcy5fY29uZmlnQ29uZmlnUGF0aCA9IFtcImJ5dGVEYXRhL1wiICsgdGhpcy50cmFpdEZvbGRlciArIFwiL2xldmVsX2ZpbGVfY29uZmlnXCIsIHRoaXMuYnVuZGxlTmFtZV07XG4gICAgdGhpcy5fY29uZmlnT2Zmc2V0UGF0aCA9IFtcImJ5dGVEYXRhL1wiICsgdGhpcy50cmFpdEZvbGRlciArIFwiL2xldmVsX2RhdGFfb2Zmc2V0c1wiLCB0aGlzLmJ1bmRsZU5hbWVdO1xuICAgIHRoaXMuX2NvbmZpZ0xldmVsRGF0YVBhdGggPSBbXCJieXRlRGF0YS9cIiArIHRoaXMudHJhaXRGb2xkZXIgKyBcIi9sZXZlbF9kYXRhXCIsIHRoaXMuYnVuZGxlTmFtZV07XG4gICAgdGhpcy5fY29uZmlnSnNvblBhdGggPSBbXCJjb25maWcvYm9hcmRzL1wiICsgdGhpcy50cmFpdEZvbGRlciArIFwiL1wiLCB0aGlzLmJ1bmRsZU5hbWVdO1xuICAgIHZhciBlID0gQ2hhbmdlQm9hcmREYXRhWW9nYVRyYWl0LkxPQ0FMX0ZBTExCQUNLX0ZPTERFUjtcbiAgICB0aGlzLl9sb2NhbENvbmZpZ1BhdGggPSBbXCJieXRlRGF0YS9cIiArIGUgKyBcIi9sZXZlbF9maWxlX2NvbmZpZ1wiLCBcIm1haW5SZXNcIl07XG4gICAgdGhpcy5fbG9jYWxPZmZzZXRQYXRoID0gW1wiYnl0ZURhdGEvXCIgKyBlICsgXCIvbGV2ZWxfZGF0YV9vZmZzZXRzXCIsIFwibWFpblJlc1wiXTtcbiAgICB0aGlzLl9sb2NhbExldmVsRGF0YVBhdGggPSBbXCJieXRlRGF0YS9cIiArIGUgKyBcIi9sZXZlbF9kYXRhXCIsIFwibWFpblJlc1wiXTtcbiAgICB0aGlzLl9sb2NhbEpzb25QYXRoID0gW1wiY29uZmlnL2JvYXJkcy9cIiArIGUgKyBcIi9cIiwgXCJtYWluUmVzXCJdO1xuICAgIHRoaXMuaXNSZW1vdGVCdW5kbGUgJiYgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIuZ2V0SW5zdGFuY2UoKS5hZGRUYXNrKHRoaXMuYnVuZGxlTmFtZSwgRUxvd1ByaW9yaXR5QnVuZGxlUHJpb3JpdHkuRGVmYXVsdEhpZ2h0UHJpb3JpdHkpO1xuICB9XG4gIGlzQnVuZGxlUmVhZHkoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzUmVtb3RlQnVuZGxlIHx8IExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuaXNCdW5kbGVQcmVMb2FkZWQodGhpcy5idW5kbGVOYW1lKTtcbiAgfVxuICByZXNvbHZlU291cmNlKCkge1xuICAgIHRoaXMuX3VzZUNvbmZpZ0J1bmRsZSA9IHRoaXMuaXNCdW5kbGVSZWFkeSgpO1xuICB9XG4gIHNob3VsZFVzZVlvZ2FQYXRoKHQsIGUpIHtcbiAgICBpZiAodCAmJiBudWxsICE9IGUpIHJldHVybiB0ID09PSBNakdhbWVUeXBlLlRyYXZlbCAmJiBlID09PSBKb3VybmV5VHlwZS5Zb2dhO1xuICAgIHZhciBhID0gRXh0cmFjdFRvb2wuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICByID0gRXh0cmFjdFRvb2wuZ2V0Q3VycmVudEpvdXJuZXlUeXBlKCk7XG4gICAgcmV0dXJuIGEgPT09IE1qR2FtZVR5cGUuVHJhdmVsICYmIHIgPT09IEpvdXJuZXlUeXBlLllvZ2E7XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0Q29uZmlnUGF0aCh0LCBlKSB7XG4gICAgdmFyIGEsXG4gICAgICByLFxuICAgICAgbyA9IG51bGwgPT09IChhID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhWzBdLFxuICAgICAgaSA9IG51bGwgPT09IChyID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByWzFdO1xuICAgIGlmICh0aGlzLnNob3VsZFVzZVlvZ2FQYXRoKG8sIGkpKSB7XG4gICAgICB0aGlzLnJlc29sdmVTb3VyY2UoKTtcbiAgICAgIHZhciBuID0gdGhpcy5fdXNlQ29uZmlnQnVuZGxlID8gdGhpcy5fY29uZmlnQ29uZmlnUGF0aCA6IHRoaXMuX2xvY2FsQ29uZmlnUGF0aDtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogblxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkV4dE5vcm1Mdl9nZXRPZmZzZXRQYXRoKHQsIGUpIHtcbiAgICB2YXIgYSxcbiAgICAgIHIsXG4gICAgICBvID0gbnVsbCA9PT0gKGEgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGFbMF0sXG4gICAgICBpID0gbnVsbCA9PT0gKHIgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHJbMV07XG4gICAgaWYgKHRoaXMuc2hvdWxkVXNlWW9nYVBhdGgobywgaSkpIHtcbiAgICAgIHRoaXMucmVzb2x2ZVNvdXJjZSgpO1xuICAgICAgdmFyIG4gPSB0aGlzLl91c2VDb25maWdCdW5kbGUgPyB0aGlzLl9jb25maWdPZmZzZXRQYXRoIDogdGhpcy5fbG9jYWxPZmZzZXRQYXRoO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiBuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uRXh0Tm9ybUx2X2dldExldkRhdGFQYXRoKHQsIGUpIHtcbiAgICB2YXIgYSxcbiAgICAgIHIsXG4gICAgICBvID0gbnVsbCA9PT0gKGEgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGFbMF0sXG4gICAgICBpID0gbnVsbCA9PT0gKHIgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHJbMV07XG4gICAgaWYgKHRoaXMuc2hvdWxkVXNlWW9nYVBhdGgobywgaSkpIHtcbiAgICAgIHRoaXMucmVzb2x2ZVNvdXJjZSgpO1xuICAgICAgdmFyIG4gPSB0aGlzLl91c2VDb25maWdCdW5kbGUgPyB0aGlzLl9jb25maWdMZXZlbERhdGFQYXRoIDogdGhpcy5fbG9jYWxMZXZlbERhdGFQYXRoO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiBuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uRXh0Tm9ybUx2X2dldEpzb25QYXRoKHQsIGUpIHtcbiAgICB2YXIgYSxcbiAgICAgIHIsXG4gICAgICBvID0gbnVsbCA9PT0gKGEgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGFbMV0sXG4gICAgICBpID0gbnVsbCA9PT0gKHIgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHJbMl07XG4gICAgaWYgKHRoaXMuc2hvdWxkVXNlWW9nYVBhdGgobywgaSkpIHtcbiAgICAgIHZhciBuID0gdGhpcy5fdXNlQ29uZmlnQnVuZGxlID8gdGhpcy5fY29uZmlnSnNvblBhdGggOiB0aGlzLl9sb2NhbEpzb25QYXRoO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiBuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19