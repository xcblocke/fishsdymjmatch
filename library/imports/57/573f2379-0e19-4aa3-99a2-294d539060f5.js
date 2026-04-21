"use strict";
cc._RF.push(module, '573f2N5DhlKo5miKU1TkGD1', 'DianZanStepTrait');
// subpackages/l_dianZanStep/Scripts/DianZanStepTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DianZanStepTrait = /** @class */ (function (_super) {
    __extends(DianZanStepTrait, _super);
    function DianZanStepTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        _this._currentMatchDelta = 0;
        _this._triggerDianZan = false;
        return _this;
    }
    Object.defineProperty(DianZanStepTrait.prototype, "bundleName", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spineBundle) || "l_dianZanStep";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DianZanStepTrait.prototype, "matchNum", {
        get: function () {
            var t;
            return (null === (t = this.traitData) || void 0 === t ? void 0 : t.matchNum) || 1;
        },
        enumerable: false,
        configurable: true
    });
    DianZanStepTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var r, i;
        this.loadSpine(null === (i = null === (r = t.ins) || void 0 === r ? void 0 : r.context) || void 0 === i ? void 0 : i.gameCtr);
        e();
    };
    DianZanStepTrait.prototype.loadSpine = function (t) {
        var e, r = this;
        if (t && "function" == typeof t.loadRes) {
            var i = (null === (e = this.traitData) || void 0 === e ? void 0 : e.spinePath) || "spine/gamplay_doubleLikes";
            this._currSkData = null;
            t.loadRes(i, sp.SkeletonData, this.bundleName).then(function (t) {
                var e = Array.isArray(t) ? t[0] : t;
                r._currSkData = e || null;
            }).catch(function () {
                r._currSkData = null;
            });
        }
    };
    DianZanStepTrait.prototype.checkBeforeMatchNum = function (t) {
        return t === this.matchNum;
    };
    DianZanStepTrait.prototype.onDianZanTt_checkDZ = function (t, e) {
        var r, i, n = t.ins, a = null !== (r = n._beforeClearMatchNum) && void 0 !== r ? r : 0, c = null !== (i = n._afterClearMatchNum) && void 0 !== i ? i : 0;
        if (this.checkBeforeMatchNum(a)) {
            this._currentMatchDelta = c - a;
            this._triggerDianZan = this._currentMatchDelta >= 1;
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: this._triggerDianZan
            });
        }
        else {
            this._triggerDianZan = false;
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: false
            });
        }
    };
    DianZanStepTrait.prototype.onDianZanItem_initComp = function (t, e) {
        var r;
        if (this._triggerDianZan) {
            var i = null === (r = t.ins) || void 0 === r ? void 0 : r._spineAnim, n = this._currSkData;
            if (n && i && i.skeletonData !== n) {
                i.clearTracks();
                i.setToSetupPose();
                i.skeletonData = n;
            }
            e();
        }
        else
            e();
    };
    DianZanStepTrait.prototype.onDianZanBhv_getAniName = function (t, e) {
        if (this._triggerDianZan) {
            if (this._currSkData) {
                var r = "in_" + this._currentMatchDelta;
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.jump,
                    returnVal: r
                });
            }
            else
                e();
        }
        else
            e();
    };
    DianZanStepTrait.traitKey = "DianZanStep";
    DianZanStepTrait = __decorate([
        mj.trait,
        mj.class("DianZanStepTrait")
    ], DianZanStepTrait);
    return DianZanStepTrait;
}(Trait_1.default));
exports.default = DianZanStepTrait;

cc._RF.pop();