
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_motivationalWordsLv4/Scripts/MotivationalWordsLv4Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21vdGl2YXRpb25hbFdvcmRzTHY0L1NjcmlwdHMvTW90aXZhdGlvbmFsV29yZHNMdjRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RiwwRkFBcUY7QUFDckYsK0RBQTBEO0FBQzFELHdGQUFvRjtBQUNwRix5RUFBc0U7QUFDdEUsZ0dBQStGO0FBQy9GLG9GQUFtRjtBQUNuRixzRUFBaUU7QUFHakU7SUFBdUQsNkNBQUs7SUFBNUQ7UUFBQSxxRUEyTEM7UUExTEMsb0JBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsZUFBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixxQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixVQUFJLEdBQUcscUNBQXFDLENBQUM7UUFDN0MsZUFBUyxHQUFHLGtDQUFrQyxDQUFDO1FBQy9DLGVBQVMsR0FBRywwQkFBVSxDQUFDLElBQUksQ0FBQzs7SUFvTDlCLENBQUM7a0NBM0xvQix5QkFBeUI7SUFVNUMsMENBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RELENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FB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QyxDQUFDO29CQUNiLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNkLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxHQUFHLElBQUksNkRBQTZCLENBQUM7b0JBQ3hDLEtBQUssRUFBRSxDQUFDO2lCQUNULENBQUMsQ0FBQztnQkFDSCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDakQ7U0FDRjtJQUNILENBQUM7O0lBbExNLGtDQUFRLEdBQUcsc0JBQXNCLENBQUM7SUFDbEMsOENBQW9CLEdBQUcsc0JBQXNCLENBQUM7SUFUbEMseUJBQXlCO1FBRjdDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztPQUNqQix5QkFBeUIsQ0EyTDdDO0lBQUQsZ0NBQUM7Q0EzTEQsQUEyTEMsQ0EzTHNELGVBQUssR0EyTDNEO2tCQTNMb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgTW90aXZhdGlvbmFsV29yZHNFZmZlY3RFZmZlY3QgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL01vdGl2YXRpb25hbFdvcmRzRWZmZWN0RWZmZWN0JztcbmltcG9ydCB7IE1vdGl2YXRpb25hbFdvcmRzRWZmZWN0IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9Nb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJNb3RpdmF0aW9uYWxXb3Jkc0x2NFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3RpdmF0aW9uYWxXb3Jkc0x2NFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfdHJpZ2dlclBvaW50cyA9IFtdO1xuICBfaXNMb2FkZWQgPSBmYWxzZTtcbiAgX2xpZ2h0Tm9kZSA9IG51bGw7XG4gIF9pc0xvYWRpbmdMaWdodCA9IGZhbHNlO1xuICBfdXJsID0gXCJwcmVmYWJzL0VmZmVjdE1vdGl2YXRpb25hbFdvcmRzSXRlbVwiO1xuICBfbGlnaHRVcmwgPSBcInByZWZhYnMvRWZmZWN0TW90aXZhdGlvbmFsTGlnaHRzXCI7XG4gIF9nYW1lVHlwZSA9IE1qR2FtZVR5cGUuTm9uZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJNb3RpdmF0aW9uYWxXb3Jkc0x2NFwiO1xuICBzdGF0aWMgTW90aXZhdGlvbmFsV29yZHNMdjQgPSBcIk1vdGl2YXRpb25hbFdvcmRzTHY0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl90cmlnU3RlcHMgPSB0aGlzLl90cmFpdERhdGEudHJpZ1N0ZXBzIHx8IFsyLCAxLCAxLCA1XTtcbiAgICBmb3IgKHZhciBlID0gMCwgaSA9IDA7IGkgPCB0aGlzLl90cmlnU3RlcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGUgKz0gdGhpcy5fdHJpZ1N0ZXBzW2ldO1xuICAgICAgdGhpcy5fdHJpZ2dlclBvaW50cy5wdXNoKGUpO1xuICAgIH1cbiAgfVxuICBvbkluaXRWaWV3Qmh2X2NydFRscyh0LCBlKSB7XG4gICAgdmFyIGksIHI7XG4gICAgdGhpcy5fZ2FtZVR5cGUgPSBudWxsID09PSAociA9IG51bGwgPT09IChpID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuX2NvbnRleHQpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuZ2FtZVR5cGU7XG4gICAgdGhpcy5faXNMb2FkZWQgPSBmYWxzZTtcbiAgICBlKCk7XG4gIH1cbiAgbG9hZFJlc1Bvb2xzKCkge1xuICAgIGlmICghdGhpcy5faXNMb2FkZWQpIHtcbiAgICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcbiAgICAgIHZhciB0ID0gQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDb250cm9CeU5hbWUoXCJNYWluR2FtZUNvbnRyb2xsZXJcIik7XG4gICAgICB0ICYmIHQubG9hZFJlcyh0aGlzLl91cmwsIGNjLlByZWZhYiwgXCJsX21vdGl2YXRpb25hbFdvcmRzTHY0XCIpLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHIgPSBBcnJheS5pc0FycmF5KGUpID8gZVswXSA6IGU7XG4gICAgICAgIHIgJiYgdC5nYW1lT2JqZWN0UG9vbC5jcmVhdGVPYmplY3RQb29sKE1vdGl2YXRpb25hbFdvcmRzTHY0VHJhaXQuTW90aXZhdGlvbmFsV29yZHNMdjQsIHIsIDEpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge30pO1xuICAgIH1cbiAgfVxuICBjYWxjTGV2ZWwodCkge1xuICAgIGZvciAodmFyIGUgPSAwOyBlIDwgdGhpcy5fdHJpZ2dlclBvaW50cy5sZW5ndGg7IGUrKykgaWYgKHQgPT09IHRoaXMuX3RyaWdnZXJQb2ludHNbZV0pIHJldHVybiBlICsgMTtcbiAgICB2YXIgaSA9IHRoaXMuX3RyaWdnZXJQb2ludHNbdGhpcy5fdHJpZ2dlclBvaW50cy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gdCA+IGkgJiYgKHQgLSBpKSAlIHRoaXMuX3RyaWdTdGVwc1t0aGlzLl90cmlnU3RlcHMubGVuZ3RoIC0gMV0gPT0gMCA/IDQgOiAwO1xuICB9XG4gIGdldEN1cnJlbnRUaWVyKHQpIHtcbiAgICBmb3IgKHZhciBlID0gMDsgZSA8IHRoaXMuX3RyaWdnZXJQb2ludHMubGVuZ3RoOyBlKyspIHtcbiAgICAgIGlmICh0IDwgdGhpcy5fdHJpZ2dlclBvaW50c1tlXSkgcmV0dXJuIGU7XG4gICAgICBpZiAodCA9PT0gdGhpcy5fdHJpZ2dlclBvaW50c1tlXSkgcmV0dXJuIGUgKyAxO1xuICAgIH1cbiAgICByZXR1cm4gdCA+IHRoaXMuX3RyaWdnZXJQb2ludHNbdGhpcy5fdHJpZ2dlclBvaW50cy5sZW5ndGggLSAxXSA/IDQgOiAwO1xuICB9XG4gIG9uTW90aXZXZHNDaGtfY2FuU2hvdyh0LCBlKSB7XG4gICAgdmFyIGk7XG4gICAgaWYgKHRoaXMuX2dhbWVUeXBlID09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNHdWlkZUZpbmlzaGVkKCkpIHtcbiAgICAgICAgdGhpcy5sb2FkUmVzUG9vbHMoKTtcbiAgICAgICAgdmFyIHIgPSB0Lmlucy5jb250ZXh0LFxuICAgICAgICAgIG8gPSAobnVsbCA9PT0gKGkgPSBudWxsID09IHIgPyB2b2lkIDAgOiByLmdldEdhbWVEYXRhKCkpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2V0Q29tYm9OdW0oKSkgfHwgMCxcbiAgICAgICAgICBhID0gdGhpcy5jYWxjTGV2ZWwobyk7XG4gICAgICAgIGUoYSA+IDAgPyB7XG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgICBpc1Nob3c6IHRydWUsXG4gICAgICAgICAgICBpbmRleDogYVxuICAgICAgICAgIH1cbiAgICAgICAgfSA6IHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgICAgIGlzU2hvdzogZmFsc2UsXG4gICAgICAgICAgICBpbmRleDogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgaXNTaG93OiBmYWxzZSxcbiAgICAgICAgICBpbmRleDogMFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uTW90aXZXb3Jkc0Jodl9ub2RlTmFtZSh0LCBlKSB7XG4gICAgaWYgKHRoaXMuX2dhbWVUeXBlID09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcCxcbiAgICAgICAgcmV0dXJuVmFsOiBNb3RpdmF0aW9uYWxXb3Jkc0x2NFRyYWl0Lk1vdGl2YXRpb25hbFdvcmRzTHY0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbk1vdGl2V29yZHNCaHZfc3RhcnQodCwgZSkge1xuICAgIHZhciBpLCByLCBvO1xuICAgIGlmICh0aGlzLl9nYW1lVHlwZSA9PSBNakdhbWVUeXBlLk5vcm1hbCkge1xuICAgICAgdmFyIGEgPSB0LmFyZ3NbMF07XG4gICAgICAzID09PSAoKG51bGwgPT09IChpID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYS5kYXRhKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmluZGV4KSB8fCAwKSAmJiB0aGlzLnBsYXlMaWdodEVmZmVjdChudWxsID09PSAobyA9IG51bGwgPT09IChyID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuY29udGV4dCkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5nYW1lVmlldyk7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkNvbWJvQ2hrX2NhbkJyZWFrQ2IodCwgZSkge1xuICAgIGlmICh0aGlzLl9nYW1lVHlwZSA9PSBNakdhbWVUeXBlLk5vcm1hbCkge1xuICAgICAgdHJ1ZSA9PT0gdC5iZWZvclJldHVyblZhbCAmJiB0aGlzLnJlbW92ZUxpZ2h0RWZmZWN0KCk7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkNsck5vcm1IbHBfY2hrQm9tYk1vdGl2KHQsIGUpIHtcbiAgICB0aGlzLmhhbmRsZUJvbWJNb3RpdmF0aW9uYWxXb3Jkcyh0KTtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIGlzQnJlYWs6IHRydWVcbiAgICB9KTtcbiAgfVxuICBwbGF5TGlnaHRFZmZlY3QodCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAoISh0aGlzLl9pc0xvYWRpbmdMaWdodCB8fCB0aGlzLl9saWdodE5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLl9saWdodE5vZGUpICYmIHRoaXMuX2xpZ2h0Tm9kZS5wYXJlbnQpKSB7XG4gICAgICB0aGlzLl9saWdodE5vZGUgPSBudWxsO1xuICAgICAgdmFyIGkgPSB0aGlzLmdldEVmZmVjdE5vZGUodCk7XG4gICAgICBpZiAoaSkge1xuICAgICAgICB0aGlzLl9pc0xvYWRpbmdMaWdodCA9IHRydWU7XG4gICAgICAgIEJhc2VVSS5jcmVhdGVVSSh0aGlzLl9saWdodFVybCwgXCJsX21vdGl2YXRpb25hbFdvcmRzTHY0XCIpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBlLl9pc0xvYWRpbmdMaWdodCA9IGZhbHNlO1xuICAgICAgICAgIHQucGFyZW50ID0gaTtcbiAgICAgICAgICB0LnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgICAgICAgdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIGUuX2xpZ2h0Tm9kZSA9IHQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXRFZmZlY3ROb2RlKHQpIHtcbiAgICBpZiAoIXQpIHJldHVybiBudWxsO1xuICAgIHZhciBlID0gdC5lZmZlY3ROb2RlO1xuICAgIHJldHVybiBlICYmIGNjLmlzVmFsaWQoZSkgPyBlIDogbnVsbDtcbiAgfVxuICByZW1vdmVMaWdodEVmZmVjdCgpIHtcbiAgICB0aGlzLl9saWdodE5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLl9saWdodE5vZGUpICYmIHRoaXMuX2xpZ2h0Tm9kZS5kZXN0cm95KCk7XG4gICAgdGhpcy5fbGlnaHROb2RlID0gbnVsbDtcbiAgICB0aGlzLl9pc0xvYWRpbmdMaWdodCA9IGZhbHNlO1xuICB9XG4gIG9uQ2xlYXJCaHZfbWF0Y2hBdWQodCwgZSkge1xuICAgIHZhciBpLCByLCBvO1xuICAgIGlmICh0aGlzLl9nYW1lVHlwZSA9PSBNakdhbWVUeXBlLk5vcm1hbCkge1xuICAgICAgdmFyIGEgPSB0LmlucyxcbiAgICAgICAgbiA9IG51bGwgPT09IChyID0gbnVsbCA9PT0gKGkgPSBudWxsID09IGEgPyB2b2lkIDAgOiBhLmNvbnRleHQpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2V0VGlsZU1hcE9iamVjdCkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5jYWxsKGkpO1xuICAgICAgaWYgKG4pIHtcbiAgICAgICAgdmFyIGwgPSBuLmdhbWVDb250ZXh0O1xuICAgICAgICBpZiAobCkge1xuICAgICAgICAgIHZhciBjID0gKG51bGwgPT09IChvID0gbC5nZXRHYW1lRGF0YSgpKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmdldENvbWJvTnVtKCkpIHx8IDA7XG4gICAgICAgICAgaWYgKGMgPCB0aGlzLl90cmlnZ2VyUG9pbnRzWzBdKSBlKCk7ZWxzZSB7XG4gICAgICAgICAgICB2YXIgdSA9IHRoaXMuZ2V0Q3VycmVudFRpZXIoYyk7XG4gICAgICAgICAgICBpZiAoMCAhPT0gdSkge1xuICAgICAgICAgICAgICB2YXIgcCA9IDYxICsgdTtcbiAgICAgICAgICAgICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QocCk7XG4gICAgICAgICAgICAgIGUoe1xuICAgICAgICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBlKCk7XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgaGFuZGxlQm9tYk1vdGl2YXRpb25hbFdvcmRzKHQpIHtcbiAgICB2YXIgZSA9IHQuYXJnc1swXSxcbiAgICAgIGkgPSB0LmFyZ3NbMV0sXG4gICAgICByID0gdC5pbnMsXG4gICAgICBvID0gci5fZ2FtZUNvbnRleHQsXG4gICAgICBhID0gci5fYmFzZUlucHV0O1xuICAgIGlmIChvICYmIGEpIHtcbiAgICAgIHZhciBuID0gby5tb3RpdmF0aW9uYWxXb3Jkc0NoZWNrZXIuY2FuU2hvd01vdGl2YXRpb25hbFdvcmRzKCksXG4gICAgICAgIHMgPSBuLmlzU2hvdyxcbiAgICAgICAgbCA9IG4uaW5kZXg7XG4gICAgICBpZiAocyAmJiBlICYmIGUubGVuZ3RoID49IDIpIHtcbiAgICAgICAgdmFyIGMgPSBvLmdldEdhbWVEYXRhKCkuZ2V0Q29tYm9OdW0oKSxcbiAgICAgICAgICBmID0gbmV3IE1vdGl2YXRpb25hbFdvcmRzRWZmZWN0KHtcbiAgICAgICAgICAgIGluZGV4OiBsLFxuICAgICAgICAgICAgY29tYm9OdW06IGMsXG4gICAgICAgICAgICB0aWxlSWQxOiBlWzFdLFxuICAgICAgICAgICAgdGlsZUlkMjogZVswXVxuICAgICAgICAgIH0pO1xuICAgICAgICBhLnB1c2hFZmZlY3QoZiwgRUluc2VydFR5cGUuUGFyYWxsZWwsIGksIGZhbHNlKTtcbiAgICAgICAgdmFyIGggPSBuZXcgTW90aXZhdGlvbmFsV29yZHNFZmZlY3RFZmZlY3Qoe1xuICAgICAgICAgIGluZGV4OiBsXG4gICAgICAgIH0pO1xuICAgICAgICBhLnB1c2hFZmZlY3QoaCwgRUluc2VydFR5cGUuUGFyYWxsZWwsIGksIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=