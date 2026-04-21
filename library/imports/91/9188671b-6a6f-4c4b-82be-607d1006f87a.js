"use strict";
cc._RF.push(module, '91886cbam9MS4K+YH0QBvh6', 'MotivationalWordsLv4Trait');
// subpackages/l_motivationalWordsLv4/Scripts/MotivationalWordsLv4Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var MotivationalWordsEffectEffect_1 = require("../../../Scripts/MotivationalWordsEffectEffect");
var MotivationalWordsEffect_1 = require("../../../Scripts/MotivationalWordsEffect");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MotivationalWordsLv4Trait = /** @class */ (function (_super) {
    __extends(MotivationalWordsLv4Trait, _super);
    function MotivationalWordsLv4Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._triggerPoints = [];
        _this._isLoaded = false;
        _this._lightNode = null;
        _this._isLoadingLight = false;
        _this._url = "prefabs/EffectMotivationalWordsItem";
        _this._lightUrl = "prefabs/EffectMotivationalLights";
        _this._gameType = GameTypeEnums_1.MjGameType.None;
        return _this;
    }
    MotivationalWordsLv4Trait_1 = MotivationalWordsLv4Trait;
    MotivationalWordsLv4Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._trigSteps = this._traitData.trigSteps || [2, 1, 1, 5];
        for (var e = 0, i = 0; i < this._trigSteps.length; i++) {
            e += this._trigSteps[i];
            this._triggerPoints.push(e);
        }
    };
    MotivationalWordsLv4Trait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var i, r;
        this._gameType = null === (r = null === (i = t.ins) || void 0 === i ? void 0 : i._context) || void 0 === r ? void 0 : r.gameType;
        this._isLoaded = false;
        e();
    };
    MotivationalWordsLv4Trait.prototype.loadResPools = function () {
        if (!this._isLoaded) {
            this._isLoaded = true;
            var t = ControllerManager_1.default.getInstance().getControByName("MainGameController");
            t && t.loadRes(this._url, cc.Prefab, "l_motivationalWordsLv4").then(function (e) {
                var r = Array.isArray(e) ? e[0] : e;
                r && t.gameObjectPool.createObjectPool(MotivationalWordsLv4Trait_1.MotivationalWordsLv4, r, 1);
            }).catch(function () { });
        }
    };
    MotivationalWordsLv4Trait.prototype.calcLevel = function (t) {
        for (var e = 0; e < this._triggerPoints.length; e++)
            if (t === this._triggerPoints[e])
                return e + 1;
        var i = this._triggerPoints[this._triggerPoints.length - 1];
        return t > i && (t - i) % this._trigSteps[this._trigSteps.length - 1] == 0 ? 4 : 0;
    };
    MotivationalWordsLv4Trait.prototype.getCurrentTier = function (t) {
        for (var e = 0; e < this._triggerPoints.length; e++) {
            if (t < this._triggerPoints[e])
                return e;
            if (t === this._triggerPoints[e])
                return e + 1;
        }
        return t > this._triggerPoints[this._triggerPoints.length - 1] ? 4 : 0;
    };
    MotivationalWordsLv4Trait.prototype.onMotivWdsChk_canShow = function (t, e) {
        var i;
        if (this._gameType == GameTypeEnums_1.MjGameType.Normal) {
            if (UserModel_1.default.getInstance().isGuideFinished()) {
                this.loadResPools();
                var r = t.ins.context, o = (null === (i = null == r ? void 0 : r.getGameData()) || void 0 === i ? void 0 : i.getComboNum()) || 0, a = this.calcLevel(o);
                e(a > 0 ? {
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: {
                        isShow: true,
                        index: a
                    }
                } : {
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: {
                        isShow: false,
                        index: 0
                    }
                });
            }
            else
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: {
                        isShow: false,
                        index: 0
                    }
                });
        }
        else
            e();
    };
    MotivationalWordsLv4Trait.prototype.onMotivWordsBhv_nodeName = function (t, e) {
        if (this._gameType == GameTypeEnums_1.MjGameType.Normal) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: MotivationalWordsLv4Trait_1.MotivationalWordsLv4
            });
        }
        else {
            e();
        }
    };
    MotivationalWordsLv4Trait.prototype.onMotivWordsBhv_start = function (t, e) {
        var i, r, o;
        if (this._gameType == GameTypeEnums_1.MjGameType.Normal) {
            var a = t.args[0];
            3 === ((null === (i = null == a ? void 0 : a.data) || void 0 === i ? void 0 : i.index) || 0) && this.playLightEffect(null === (o = null === (r = t.ins) || void 0 === r ? void 0 : r.context) || void 0 === o ? void 0 : o.gameView);
            e();
        }
        else
            e();
    };
    MotivationalWordsLv4Trait.prototype.onComboChk_canBreakCb = function (t, e) {
        if (this._gameType == GameTypeEnums_1.MjGameType.Normal) {
            true === t.beforReturnVal && this.removeLightEffect();
            e();
        }
        else
            e();
    };
    MotivationalWordsLv4Trait.prototype.onClrNormHlp_chkBombMotiv = function (t, e) {
        this.handleBombMotivationalWords(t);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    MotivationalWordsLv4Trait.prototype.playLightEffect = function (t) {
        var e = this;
        if (!(this._isLoadingLight || this._lightNode && cc.isValid(this._lightNode) && this._lightNode.parent)) {
            this._lightNode = null;
            var i = this.getEffectNode(t);
            if (i) {
                this._isLoadingLight = true;
                BaseUI_1.default.createUI(this._lightUrl, "l_motivationalWordsLv4").then(function (t) {
                    e._isLoadingLight = false;
                    t.parent = i;
                    t.position = cc.v3(0, 0, 0);
                    t.active = true;
                    e._lightNode = t;
                });
            }
        }
    };
    MotivationalWordsLv4Trait.prototype.getEffectNode = function (t) {
        if (!t)
            return null;
        var e = t.effectNode;
        return e && cc.isValid(e) ? e : null;
    };
    MotivationalWordsLv4Trait.prototype.removeLightEffect = function () {
        this._lightNode && cc.isValid(this._lightNode) && this._lightNode.destroy();
        this._lightNode = null;
        this._isLoadingLight = false;
    };
    MotivationalWordsLv4Trait.prototype.onClearBhv_matchAud = function (t, e) {
        var i, r, o;
        if (this._gameType == GameTypeEnums_1.MjGameType.Normal) {
            var a = t.ins, n = null === (r = null === (i = null == a ? void 0 : a.context) || void 0 === i ? void 0 : i.getTileMapObject) || void 0 === r ? void 0 : r.call(i);
            if (n) {
                var l = n.gameContext;
                if (l) {
                    var c = (null === (o = l.getGameData()) || void 0 === o ? void 0 : o.getComboNum()) || 0;
                    if (c < this._triggerPoints[0])
                        e();
                    else {
                        var u = this.getCurrentTier(c);
                        if (0 !== u) {
                            var p = 61 + u;
                            mj.audioManager.playEffect(p);
                            e({
                                isBreak: true,
                                returnType: TraitManager_1.TraitCallbackReturnType.return
                            });
                        }
                        else
                            e();
                    }
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    MotivationalWordsLv4Trait.prototype.handleBombMotivationalWords = function (t) {
        var e = t.args[0], i = t.args[1], r = t.ins, o = r._gameContext, a = r._baseInput;
        if (o && a) {
            var n = o.motivationalWordsChecker.canShowMotivationalWords(), s = n.isShow, l = n.index;
            if (s && e && e.length >= 2) {
                var c = o.getGameData().getComboNum(), f = new MotivationalWordsEffect_1.MotivationalWordsEffect({
                    index: l,
                    comboNum: c,
                    tileId1: e[1],
                    tileId2: e[0]
                });
                a.pushEffect(f, BehaviorsEnum_1.EInsertType.Parallel, i, false);
                var h = new MotivationalWordsEffectEffect_1.MotivationalWordsEffectEffect({
                    index: l
                });
                a.pushEffect(h, BehaviorsEnum_1.EInsertType.Parallel, i, false);
            }
        }
    };
    var MotivationalWordsLv4Trait_1;
    MotivationalWordsLv4Trait.traitKey = "MotivationalWordsLv4";
    MotivationalWordsLv4Trait.MotivationalWordsLv4 = "MotivationalWordsLv4";
    MotivationalWordsLv4Trait = MotivationalWordsLv4Trait_1 = __decorate([
        mj.trait,
        mj.class("MotivationalWordsLv4Trait")
    ], MotivationalWordsLv4Trait);
    return MotivationalWordsLv4Trait;
}(Trait_1.default));
exports.default = MotivationalWordsLv4Trait;

cc._RF.pop();