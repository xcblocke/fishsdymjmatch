"use strict";
cc._RF.push(module, '91348POWD1Jt72+CiCPFsaQ', 'ClassicReviveTrait');
// subpackages/l_classicRevive/Scripts/ClassicReviveTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var ClassicReviveTrait = /** @class */ (function (_super) {
    __extends(ClassicReviveTrait, _super);
    function ClassicReviveTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callBack = null;
        return _this;
    }
    Object.defineProperty(ClassicReviveTrait.prototype, "limitCount", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this._traitData) || void 0 === e ? void 0 : e.limitCount) && void 0 !== t ? t : 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClassicReviveTrait.prototype, "score", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this._traitData) || void 0 === e ? void 0 : e.score) && void 0 !== t ? t : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClassicReviveTrait.prototype, "gameCount", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this._traitData) || void 0 === e ? void 0 : e.gameCount) && void 0 !== t ? t : 2;
        },
        enumerable: false,
        configurable: true
    });
    ClassicReviveTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ClassicReviveTrait.prototype.getMessageListeners = function () {
        var _e = {};
        _e[GameEvent_1.EGameEvent.ClassicRevive_UseRevive] = this.onClassicRevive_UseRevive.bind(this);
        return _e;
    };
    ClassicReviveTrait.prototype.onClassicRevive_UseRevive = function (e) {
        if (this.callBack) {
            this.callBack(e);
            this.callBack = null;
        }
    };
    ClassicReviveTrait.prototype.onClcRevChk_canRevive = function (e, t) {
        var o = e.ins;
        if (this.canRevive(o)) {
            t({
                returnType: TraitCallbackReturnType.return,
                returnVal: true,
                isBreak: true
            });
        }
        else {
            t();
        }
    };
    ClassicReviveTrait.prototype.onClcRevBhv_showReviveVw = function (e, t) {
        var o = e.args[0];
        this.showReviveView(function (e) {
            o && o(e);
            t({
                returnType: TraitCallbackReturnType.jump
            });
        });
    };
    ClassicReviveTrait.prototype.canRevive = function (e) {
        var t = e.context.getGameData();
        return !(t.getGameCount() <= this.gameCount) && !(t.getScore() < this.score) && !(t.getReviveCount() >= this.limitCount);
    };
    ClassicReviveTrait.prototype.showReviveView = function (e) {
        this.callBack = e;
        ControllerManager_1.default.getInstance().pushViewByController("ClassicReviveController", {
            bgStyle: {
                blackOpacity: 0
            },
            isShowAction: false
        });
    };
    ClassicReviveTrait.prototype.onAdMgr_videoFailed = function (e, t) {
        if (e.ins) {
            var o = e.ins._videoAdPosition;
            if ([DGameAdShow_1.EAdPosition.InGameMotivation_Revive_Classic].includes(o)) {
                t({
                    isBreak: true
                });
                return;
            }
        }
        t();
    };
    ClassicReviveTrait.traitKey = "ClassicRevive";
    ClassicReviveTrait.nextTimeOut = -1;
    ClassicReviveTrait = __decorate([
        mj.trait,
        mj.class("ClassicReviveTrait")
    ], ClassicReviveTrait);
    return ClassicReviveTrait;
}(Trait_1.default));
exports.default = ClassicReviveTrait;

cc._RF.pop();