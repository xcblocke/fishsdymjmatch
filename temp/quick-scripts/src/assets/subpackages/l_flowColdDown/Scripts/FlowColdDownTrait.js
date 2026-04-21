"use strict";
cc._RF.push(module, '0bb93wRZZNJZZkDQKP5JokG', 'FlowColdDownTrait');
// subpackages/l_flowColdDown/Scripts/FlowColdDownTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FlowColdDownTrait = /** @class */ (function (_super) {
    __extends(FlowColdDownTrait, _super);
    function FlowColdDownTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._maxDown = 0;
        _this._downValue = 0;
        return _this;
    }
    FlowColdDownTrait.prototype.onLoad = function () {
        var e, a;
        _super.prototype.onLoad.call(this);
        this._maxDown = null !== (e = this._traitData.maxDown) && void 0 !== e ? e : 1;
        this._downValue = null !== (a = this._traitData.downValue) && void 0 !== a ? a : 1;
        this.ensureLocalData();
        this.updateSession();
        this.tryDownLevel();
    };
    FlowColdDownTrait.prototype.ensureLocalData = function () {
        this.isEmptyField(this.localData.fcdSession) && (this.localData.fcdSession = 0);
        this.isEmptyField(this.localData.fcdSessionTime) && (this.localData.fcdSessionTime = 0);
        this.isEmptyField(this.localData.fcdDownCount) && (this.localData.fcdDownCount = 0);
        this.isEmptyField(this.localData.fcdDownValue) && (this.localData.fcdDownValue = 0);
        this.isEmptyField(this.localData.fcdCurLevel) && (this.localData.fcdCurLevel = 0);
        this.isEmptyField(this.localData.fcdPrevLevel) && (this.localData.fcdPrevLevel = 0);
        this.isEmptyField(this.localData.fcdNeedUpdate) && (this.localData.fcdNeedUpdate = false);
    };
    FlowColdDownTrait.prototype.updateSession = function () {
        var t = this.localData.fcdSessionTime, e = Date.now(), a = GameUtils_1.default.isSameDay(t, e);
        this.localData.fcdSessionTime = e;
        this.localData.fcdSession = this.localData.fcdSession + 1;
        if (!a) {
            this.localData.fcdDownCount = 0;
            this.localData.fcdDownValue = 0;
            this.localData.fcdNeedUpdate = false;
        }
    };
    FlowColdDownTrait.prototype.tryDownLevel = function () {
        this.localData.fcdSession <= 1 || this.localData.fcdDownCount >= this._maxDown || (this.localData.fcdNeedUpdate = true);
    };
    FlowColdDownTrait.prototype.isEmptyField = function (t) {
        return null == t || "" === t;
    };
    FlowColdDownTrait.prototype.onFlwLv_getResolveStg = function (t, e) {
        var a, o, i = null === (a = t.args) || void 0 === a ? void 0 : a[0], l = null === (o = t.args) || void 0 === o ? void 0 : o[1];
        if (i <= 0 || !l)
            e();
        else {
            t.args[0] = this.getFixedLevel(i);
            e();
        }
    };
    FlowColdDownTrait.prototype.getFixedLevel = function (t) {
        var e = t;
        this.localData.fcdCurLevel > 0 && (e = this.localData.fcdCurLevel + (t - this.localData.fcdPrevLevel));
        return e;
    };
    FlowColdDownTrait.prototype.onFlwLv_fixLevelStage = function (t, e) {
        var a, o, i, l = null === (a = t.args) || void 0 === a ? void 0 : a[0], r = null === (o = t.args) || void 0 === o ? void 0 : o[1], n = null === (i = t.args) || void 0 === i ? void 0 : i[2];
        if (l <= 0 || !r || !n)
            e();
        else {
            var c = this.fixLevelStage(l, r, n);
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: {
                    stageIdx: c.stageIdx,
                    levelInStage: c.levelInStage,
                    posInStage: c.posInStage
                }
            });
        }
    };
    FlowColdDownTrait.prototype.fixLevelStage = function (t, e, a) {
        var o;
        if (this.localData.fcdNeedUpdate) {
            var i = this.getFixedLevel(t), l = a.stageIdx, r = Math.max(0, l - this._downValue), n = (i - 1) % (null !== (o = e[r].levelsInStage) && void 0 !== o ? o : 10) + 1;
            i = e.slice(0, r).reduce(function (t, e) {
                var a;
                return t + (null !== (a = e.levelsInStage) && void 0 !== a ? a : 10);
            }, 0) + n;
            this.localData.fcdCurLevel = i;
            this.localData.fcdPrevLevel = t;
            this.localData.fcdNeedUpdate = false;
            this.localData.fcdDownCount = this.localData.fcdDownCount + 1;
            this.localData.fcdDownValue = this.localData.fcdDownValue + this._downValue;
            return this.resolveStage(i, e);
        }
        return a;
    };
    FlowColdDownTrait.prototype.resolveStage = function (t, e) {
        for (var a, o = Math.max(0, t - 1), i = 0; i < e.length; i++) {
            var l = null !== (a = e[i].levelsInStage) && void 0 !== a ? a : 10;
            if (o < l)
                return {
                    stageIdx: i,
                    levelInStage: o + 1,
                    posInStage: l > 1 ? o / (l - 1) : 0,
                    overflow: 0
                };
            o -= l;
        }
        return {
            stageIdx: e.length - 1,
            levelInStage: 0,
            posInStage: 1,
            overflow: o + 1
        };
    };
    FlowColdDownTrait.traitKey = "FlowColdDown";
    FlowColdDownTrait = __decorate([
        mj.trait,
        mj.class("FlowColdDownTrait")
    ], FlowColdDownTrait);
    return FlowColdDownTrait;
}(Trait_1.default));
exports.default = FlowColdDownTrait;

cc._RF.pop();