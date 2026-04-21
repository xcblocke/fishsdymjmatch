"use strict";
cc._RF.push(module, 'c42612JyUFIeI3qrzZ/kbRN', 'ReplaceRndStaticLvTrait');
// subpackages/l_replaceStaticLevel/Scripts/ReplaceRndStaticLvTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var ExtractStatic_1 = require("../../../Scripts/core/extractQuestion/ExtractStatic");
var ReplaceRndStaticLvTrait = /** @class */ (function (_super) {
    __extends(ReplaceRndStaticLvTrait, _super);
    function ReplaceRndStaticLvTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._levelData = null;
        return _this;
    }
    ReplaceRndStaticLvTrait.prototype.onLoad = function () {
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
            this.localData.shuffledOrder = null;
            this.localData.shuffledOrder = this.localData.shuffledOrder;
        }
        ExtractStatic_1.default.getInstance().loadStaticDataByPath(this._config.dataPath, this._config.bundleName, function (t) {
            r._levelData = t;
            r.localData.shuffledOrder && r.localData.shuffledOrder.length === t.length || r.initShuffledOrder(t.length);
        }, function () {
            r.eventEnabled = false;
        });
    };
    ReplaceRndStaticLvTrait.prototype.initShuffledOrder = function (t) {
        for (var e = [], a = 0; a < t; a++)
            e.push(a);
        this.localData.shuffledOrder = e;
        this.localData.shuffledOrder = this.localData.shuffledOrder;
        this.localData.currentIndex = -1;
        this.localData.currentIndex = this.localData.currentIndex;
    };
    ReplaceRndStaticLvTrait.prototype.isDataLoaded = function () {
        return null !== this._levelData && this._levelData.length > 0;
    };
    ReplaceRndStaticLvTrait.prototype.isNextExtract = function () {
        return !!this.isDataLoaded() && !!this.localData.shuffledOrder && this.localData.currentIndex + 1 < this.localData.shuffledOrder.length;
    };
    ReplaceRndStaticLvTrait.prototype.getDataLength = function () {
        return this.isDataLoaded() ? this._levelData.length : 0;
    };
    ReplaceRndStaticLvTrait.prototype.getContentByIndex = function (t) {
        return this.isDataLoaded() ? t < 0 || t >= this._levelData.length ? null : this._levelData[t] : null;
    };
    ReplaceRndStaticLvTrait.prototype.onExtractTool_isStaticLv = function (t, e) {
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
    ReplaceRndStaticLvTrait.prototype.onExtractStatic_getContent = function (t, e) {
        if (this.checkGameMode() && this.isNextExtract()) {
            var a = t.args[0];
            this.localData.currentIndex++;
            var r = this.localData.currentIndex, i = this.localData.shuffledOrder.length - r, n = r + Math.floor(Math.random() * i), o = this.localData.shuffledOrder[n];
            this.localData.shuffledOrder[n] = this.localData.shuffledOrder[r];
            this.localData.shuffledOrder[r] = o;
            this.localData.shuffledOrder = this.localData.shuffledOrder;
            var c = this.localData.shuffledOrder[r], s = this.getContentByIndex(c);
            if (s) {
                this.getDataLength();
                this.localData.levelID = a;
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: [s, 0, c.toString(), this._config.dataPath, "00", false]
                });
            }
            else
                e();
        }
        else
            e();
    };
    ReplaceRndStaticLvTrait.prototype.onIptSetLv_reGenFaces = function (t, e) {
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
    ReplaceRndStaticLvTrait.traitKey = "ReplaceRndStaticLv";
    ReplaceRndStaticLvTrait = __decorate([
        mj.trait,
        mj.class("ReplaceRndStaticLvTrait")
    ], ReplaceRndStaticLvTrait);
    return ReplaceRndStaticLvTrait;
}(ExtractTrait_1.default));
exports.default = ReplaceRndStaticLvTrait;

cc._RF.pop();