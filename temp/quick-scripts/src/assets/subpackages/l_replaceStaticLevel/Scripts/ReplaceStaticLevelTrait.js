"use strict";
cc._RF.push(module, '9f6f2rzJ19H2JpzhFcCo7FU', 'ReplaceStaticLevelTrait');
// subpackages/l_replaceStaticLevel/Scripts/ReplaceStaticLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var ExtractStatic_1 = require("../../../Scripts/core/extractQuestion/ExtractStatic");
var ReplaceStaticLevelTrait = /** @class */ (function (_super) {
    __extends(ReplaceStaticLevelTrait, _super);
    function ReplaceStaticLevelTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._levelData = null;
        return _this;
    }
    ReplaceStaticLevelTrait.prototype.onLoad = function () {
        var e, a, r = this;
        _super.prototype.onLoad.call(this);
        this._config = {
            dataPath: (null === (e = this._traitData) || void 0 === e ? void 0 : e.dataPath) || "byteData/static/static20",
            bundleName: (null === (a = this._traitData) || void 0 === a ? void 0 : a.dataBundle) || "mainRes"
        };
        if (this.localData.dataPath !== this._config.dataPath) {
            this.localData.dataPath = this._config.dataPath;
            this.localData.currentIndex = -1;
            this.localData.levelID = -1;
        }
        ExtractStatic_1.default.getInstance().loadStaticDataByPath(this._config.dataPath, this._config.bundleName, function (t) {
            r._levelData = t;
        }, function () {
            r.eventEnabled = false;
        });
    };
    ReplaceStaticLevelTrait.prototype.isDataLoaded = function () {
        return null !== this._levelData && this._levelData.length > 0;
    };
    ReplaceStaticLevelTrait.prototype.isNextExtract = function () {
        return !!this.isDataLoaded() && this.localData.currentIndex + 1 < this._levelData.length;
    };
    ReplaceStaticLevelTrait.prototype.getDataLength = function () {
        return this.isDataLoaded() ? this._levelData.length : 0;
    };
    ReplaceStaticLevelTrait.prototype.getContentByIndex = function (t) {
        return this.isDataLoaded() ? t < 0 || t >= this._levelData.length ? null : this._levelData[t] : null;
    };
    ReplaceStaticLevelTrait.prototype.onExtractTool_isStaticLv = function (t, e) {
        if (this.checkGameMode()) {
            if (t.args[0] !== this.localData.levelID) {
                if (this.isNextExtract()) {
                    e({
                        returnType: TraitManager_1.TraitCallbackReturnType.return,
                        isBreak: true,
                        returnVal: true
                    });
                }
                else {
                    e();
                }
            }
            else {
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: true
                });
            }
        }
        else {
            e();
        }
    };
    ReplaceStaticLevelTrait.prototype.onExtractStatic_getContent = function (t, e) {
        if (this.checkGameMode() && this.isNextExtract()) {
            var a = t.args[0];
            this.localData.currentIndex++;
            var r = this.localData.currentIndex, i = this.getContentByIndex(r);
            if (i) {
                this.getDataLength();
                this.localData.levelID = a;
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: [i, 0, r.toString(), this._config.dataPath, "00", false]
                });
            }
            else
                e();
        }
        else
            e();
    };
    ReplaceStaticLevelTrait.prototype.onIptSetLv_reGenFaces = function (t, e) {
        var a, r = t.args[0], i = null === (a = null == r ? void 0 : r.levelData) || void 0 === a ? void 0 : a.levelId;
        if (this.checkGameMode() && i === this.localData.levelID) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else {
            e();
        }
    };
    ReplaceStaticLevelTrait.traitKey = "ReplaceStaticLevel";
    ReplaceStaticLevelTrait = __decorate([
        mj.trait,
        mj.class("ReplaceStaticLevelTrait")
    ], ReplaceStaticLevelTrait);
    return ReplaceStaticLevelTrait;
}(ExtractTrait_1.default));
exports.default = ReplaceStaticLevelTrait;

cc._RF.pop();