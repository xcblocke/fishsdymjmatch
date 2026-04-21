
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_changeClearEffect/Scripts/ChangeClearEffectTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7812b+xeF1Om5TMF7uSFEQu', 'ChangeClearEffectTrait');
// subpackages/r_changeClearEffect/Scripts/ChangeClearEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var ChangeClearEffectTrait = /** @class */ (function (_super) {
    __extends(ChangeClearEffectTrait, _super);
    function ChangeClearEffectTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        _this._selectedType = 1;
        _this._gameType = GameTypeEnums_1.MjGameType.None;
        _this._bundleName = "clear_effect1";
        return _this;
    }
    ChangeClearEffectTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._selectedType = this.resolveType();
        this.registerEvent([{
                event: "T2ClearEffBhv_getAniCfg"
            }]);
    };
    ChangeClearEffectTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.Clear_ClassicChange] = this.onClassicChange.bind(this);
        return _t;
    };
    ChangeClearEffectTrait.prototype.getRandomEffect = function (t) {
        var e = Math.max(1, t || 1);
        return Math.floor(Math.random() * e) + 1;
    };
    ChangeClearEffectTrait.prototype.resolveType = function () {
        var t, e, r = Number((null === (t = this.traitData) || void 0 === t ? void 0 : t.type) || 1);
        if (0 === r) {
            var a = Number((null === (e = this.traitData) || void 0 === e ? void 0 : e.maxType) || 2);
            r = this.getRandomEffect(a);
        }
        (!r || r < 1 || r > 5) && (r = 1);
        return r;
    };
    ChangeClearEffectTrait.prototype.getBundleName = function (t) {
        return "clear_effect" + t;
    };
    ChangeClearEffectTrait.prototype.loadSpine = function (t, e) {
        var r = this;
        if (5 !== t) {
            this._selectedType = t;
            var a = this.getBundleName(this._selectedType);
            this._bundleName = a;
            var n = e;
            if (n && "function" == typeof n.loadRes) {
                this._currSkData = null;
                n.loadRes("spine/gameplay_elimination_a", sp.SkeletonData, a).then(function (t) {
                    var e = Array.isArray(t) ? t[0] : t;
                    r._currSkData = e || null;
                }).catch(function () {
                    r._currSkData = null;
                });
            }
        }
        else
            this._currSkData = null;
    };
    ChangeClearEffectTrait.prototype.isGameTypeOpen = function (t) {
        return t === GameTypeEnums_1.MjGameType.Normal;
    };
    ChangeClearEffectTrait.prototype.setType = function (t) {
        this._selectedType = t;
    };
    ChangeClearEffectTrait.prototype.getType = function () {
        return this._selectedType;
    };
    ChangeClearEffectTrait.prototype.getCurrSkData = function () {
        return this._currSkData;
    };
    ChangeClearEffectTrait.prototype.onClassicChange = function (t, e) {
        var r;
        this.loadSpine(this._selectedType, null === (r = null == e ? void 0 : e.context) || void 0 === r ? void 0 : r.gameCtr);
    };
    ChangeClearEffectTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var r, a, n, i;
        this._gameType = null === (a = null === (r = t.ins) || void 0 === r ? void 0 : r._context) || void 0 === a ? void 0 : a.gameType;
        0 == this._traitData.type && (this._selectedType = this.getRandomEffect(4));
        this.setType(this._selectedType);
        this.loadSpine(this._selectedType, null === (i = null === (n = t.ins) || void 0 === n ? void 0 : n.context) || void 0 === i ? void 0 : i.gameCtr);
        e();
    };
    ChangeClearEffectTrait.prototype.onClearEffBhv_changeSkd = function (t, e) {
        var r = t.args[0], a = this._currSkData;
        a && cc.isValid(a) && r && r.skeletonData !== a && this.isGameTypeOpen(this._gameType) && (r.skeletonData = a);
        e();
    };
    ChangeClearEffectTrait.prototype.onClearEffBhv_getAnimName = function (t, e) {
        var r = t.args[0], a = t.args[1], n = "in";
        if (this.isGameTypeOpen(this._gameType) && this._currSkData && cc.isValid(this._currSkData)) {
            if (1 == this._selectedType) {
                n = Math.random() < 0.5 ? "in_1" : "in_2";
            }
            else {
                4 == this._selectedType && (n = a.x < -75 ? "in_left" : a.x > 75 ? "in_right3" : "in_middle");
            }
        }
        else {
            n = r ? "in_1" : "in";
        }
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: n
        });
    };
    ChangeClearEffectTrait.prototype.getAnimNameByType = function (t, e) {
        var r = "in";
        if (1 == t) {
            r = Math.random() < 0.5 ? "in_1" : "in_2";
        }
        else {
            4 == t && (r = e.x < -75 ? "in_left" : e.x > 75 ? "in_right3" : "in_middle");
        }
        return r;
    };
    ChangeClearEffectTrait.prototype.onT2ClearEffBhv_getAniCfg = function (t, e) {
        if (this.getCurrSkData()) {
            var r = this.getType(), a = this.getBundleName(r), n = "spine/gameplay_elimination_a";
            "mainRes" === a && (n = "spine/clear/gameplay_elimination_a");
            var i = this.getAnimNameByType(r, t.args[1]);
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: {
                    path: n,
                    bundle: a,
                    animName: i
                }
            });
        }
        else
            e();
    };
    ChangeClearEffectTrait.traitKey = "ChangeClearEffect";
    __decorate([
        mj.traitEvent("ChangeCEffTrait_bundle")
    ], ChangeClearEffectTrait.prototype, "getBundleName", null);
    __decorate([
        mj.traitEvent("ChangeCEffTrait_loadSpine")
    ], ChangeClearEffectTrait.prototype, "loadSpine", null);
    __decorate([
        mj.traitEvent("ChangeCEffTrait_isGTOpen")
    ], ChangeClearEffectTrait.prototype, "isGameTypeOpen", null);
    __decorate([
        mj.traitEvent("ChangeCEffTrait_setType")
    ], ChangeClearEffectTrait.prototype, "setType", null);
    __decorate([
        mj.traitEvent("ChangeCEffTrait_getType")
    ], ChangeClearEffectTrait.prototype, "getType", null);
    __decorate([
        mj.traitEvent("ChangeCEffTrait_getSKDt")
    ], ChangeClearEffectTrait.prototype, "getCurrSkData", null);
    ChangeClearEffectTrait = __decorate([
        mj.trait,
        mj.class("ChangeClearEffectTrait")
    ], ChangeClearEffectTrait);
    return ChangeClearEffectTrait;
}(Trait_1.default));
exports.default = ChangeClearEffectTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NoYW5nZUNsZWFyRWZmZWN0L1NjcmlwdHMvQ2hhbmdlQ2xlYXJFZmZlY3RUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4Rix3RkFBb0Y7QUFDcEYsMkVBQTJFO0FBRzNFO0lBQW9ELDBDQUFLO0lBQXpEO1FBQUEscUVBc0lDO1FBcklDLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGVBQVMsR0FBRywwQkFBVSxDQUFDLElBQUksQ0FBQztRQUM1QixpQkFBVyxHQUFHLGVBQWUsQ0FBQzs7SUFrSWhDLENBQUM7SUFoSUMsdUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsQixLQUFLLEVBQUUseUJBQXlCO2FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELG9EQUFtQixHQUFuQjtRQUNFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNaLEVBQUUsQ0FBQyxzQkFBVSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckUsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsZ0RBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCw0Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDWCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxRixDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QjtRQUNELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsOENBQWEsR0FBYixVQUFjLENBQUM7UUFDYixPQUFPLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELDBDQUFTLEdBQVQsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLElBQUksQ0FBQyxJQUFJLFVBQVUsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixDQUFDLENBQUMsT0FBTyxDQUFDLDhCQUE4QixFQUFFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDNUUsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQztnQkFDNUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUNQLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7O1lBQU0sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELCtDQUFjLEdBQWQsVUFBZSxDQUFDO1FBQ2QsT0FBTyxDQUFDLEtBQUssMEJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDakMsQ0FBQztJQUVELHdDQUFPLEdBQVAsVUFBUSxDQUFDO1FBQ1AsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELHdDQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUVELDhDQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELGdEQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pILENBQUM7SUFDRCxxREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ2pJLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xKLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHdEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNmLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3ZCLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0csQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsMERBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2IsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNYLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUMzRixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUMzQixDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMvRjtTQUNGO2FBQU07WUFDTCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUN2QjtRQUNELENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxJQUFJO1lBQ3hDLFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGtEQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDM0M7YUFBTTtZQUNMLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5RTtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELDBEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQ3BCLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUN6QixDQUFDLEdBQUcsOEJBQThCLENBQUM7WUFDckMsU0FBUyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxvQ0FBb0MsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsSUFBSTtnQkFDeEMsU0FBUyxFQUFFO29CQUNULElBQUksRUFBRSxDQUFDO29CQUNQLE1BQU0sRUFBRSxDQUFDO29CQUNULFFBQVEsRUFBRSxDQUFDO2lCQUNaO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBaElNLCtCQUFRLEdBQUcsbUJBQW1CLENBQUM7SUE2QnRDO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzsrREFHdkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7MkRBa0IxQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQztnRUFHekM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7eURBR3hDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO3lEQUd4QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQzsrREFHeEM7SUF2RWtCLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FzSTFDO0lBQUQsNkJBQUM7Q0F0SUQsQUFzSUMsQ0F0SW1ELGVBQUssR0FzSXhEO2tCQXRJb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVFdmVudCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNoYW5nZUNsZWFyRWZmZWN0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZUNsZWFyRWZmZWN0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jdXJyU2tEYXRhID0gbnVsbDtcbiAgX3NlbGVjdGVkVHlwZSA9IDE7XG4gIF9nYW1lVHlwZSA9IE1qR2FtZVR5cGUuTm9uZTtcbiAgX2J1bmRsZU5hbWUgPSBcImNsZWFyX2VmZmVjdDFcIjtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDaGFuZ2VDbGVhckVmZmVjdFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fc2VsZWN0ZWRUeXBlID0gdGhpcy5yZXNvbHZlVHlwZSgpO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudChbe1xuICAgICAgZXZlbnQ6IFwiVDJDbGVhckVmZkJodl9nZXRBbmlDZmdcIlxuICAgIH1dKTtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W0VHYW1lRXZlbnQuQ2xlYXJfQ2xhc3NpY0NoYW5nZV0gPSB0aGlzLm9uQ2xhc3NpY0NoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfdDtcbiAgfVxuICBnZXRSYW5kb21FZmZlY3QodCkge1xuICAgIHZhciBlID0gTWF0aC5tYXgoMSwgdCB8fCAxKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZSkgKyAxO1xuICB9XG4gIHJlc29sdmVUeXBlKCkge1xuICAgIHZhciB0LFxuICAgICAgZSxcbiAgICAgIHIgPSBOdW1iZXIoKG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQudHlwZSkgfHwgMSk7XG4gICAgaWYgKDAgPT09IHIpIHtcbiAgICAgIHZhciBhID0gTnVtYmVyKChudWxsID09PSAoZSA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLm1heFR5cGUpIHx8IDIpO1xuICAgICAgciA9IHRoaXMuZ2V0UmFuZG9tRWZmZWN0KGEpO1xuICAgIH1cbiAgICAoIXIgfHwgciA8IDEgfHwgciA+IDUpICYmIChyID0gMSk7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDaGFuZ2VDRWZmVHJhaXRfYnVuZGxlXCIpXG4gIGdldEJ1bmRsZU5hbWUodCkge1xuICAgIHJldHVybiBcImNsZWFyX2VmZmVjdFwiICsgdDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNoYW5nZUNFZmZUcmFpdF9sb2FkU3BpbmVcIilcbiAgbG9hZFNwaW5lKHQsIGUpIHtcbiAgICB2YXIgciA9IHRoaXM7XG4gICAgaWYgKDUgIT09IHQpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkVHlwZSA9IHQ7XG4gICAgICB2YXIgYSA9IHRoaXMuZ2V0QnVuZGxlTmFtZSh0aGlzLl9zZWxlY3RlZFR5cGUpO1xuICAgICAgdGhpcy5fYnVuZGxlTmFtZSA9IGE7XG4gICAgICB2YXIgbiA9IGU7XG4gICAgICBpZiAobiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG4ubG9hZFJlcykge1xuICAgICAgICB0aGlzLl9jdXJyU2tEYXRhID0gbnVsbDtcbiAgICAgICAgbi5sb2FkUmVzKFwic3BpbmUvZ2FtZXBsYXlfZWxpbWluYXRpb25fYVwiLCBzcC5Ta2VsZXRvbkRhdGEsIGEpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICB2YXIgZSA9IEFycmF5LmlzQXJyYXkodCkgPyB0WzBdIDogdDtcbiAgICAgICAgICByLl9jdXJyU2tEYXRhID0gZSB8fCBudWxsO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgci5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB0aGlzLl9jdXJyU2tEYXRhID0gbnVsbDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNoYW5nZUNFZmZUcmFpdF9pc0dUT3BlblwiKVxuICBpc0dhbWVUeXBlT3Blbih0KSB7XG4gICAgcmV0dXJuIHQgPT09IE1qR2FtZVR5cGUuTm9ybWFsO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2hhbmdlQ0VmZlRyYWl0X3NldFR5cGVcIilcbiAgc2V0VHlwZSh0KSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRUeXBlID0gdDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNoYW5nZUNFZmZUcmFpdF9nZXRUeXBlXCIpXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkVHlwZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNoYW5nZUNFZmZUcmFpdF9nZXRTS0R0XCIpXG4gIGdldEN1cnJTa0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJTa0RhdGE7XG4gIH1cbiAgb25DbGFzc2ljQ2hhbmdlKHQsIGUpIHtcbiAgICB2YXIgcjtcbiAgICB0aGlzLmxvYWRTcGluZSh0aGlzLl9zZWxlY3RlZFR5cGUsIG51bGwgPT09IChyID0gbnVsbCA9PSBlID8gdm9pZCAwIDogZS5jb250ZXh0KSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmdhbWVDdHIpO1xuICB9XG4gIG9uSW5pdFZpZXdCaHZfY3J0VGxzKHQsIGUpIHtcbiAgICB2YXIgciwgYSwgbiwgaTtcbiAgICB0aGlzLl9nYW1lVHlwZSA9IG51bGwgPT09IChhID0gbnVsbCA9PT0gKHIgPSB0LmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5fY29udGV4dCkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5nYW1lVHlwZTtcbiAgICAwID09IHRoaXMuX3RyYWl0RGF0YS50eXBlICYmICh0aGlzLl9zZWxlY3RlZFR5cGUgPSB0aGlzLmdldFJhbmRvbUVmZmVjdCg0KSk7XG4gICAgdGhpcy5zZXRUeXBlKHRoaXMuX3NlbGVjdGVkVHlwZSk7XG4gICAgdGhpcy5sb2FkU3BpbmUodGhpcy5fc2VsZWN0ZWRUeXBlLCBudWxsID09PSAoaSA9IG51bGwgPT09IChuID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uY29udGV4dCkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5nYW1lQ3RyKTtcbiAgICBlKCk7XG4gIH1cbiAgb25DbGVhckVmZkJodl9jaGFuZ2VTa2QodCwgZSkge1xuICAgIHZhciByID0gdC5hcmdzWzBdLFxuICAgICAgYSA9IHRoaXMuX2N1cnJTa0RhdGE7XG4gICAgYSAmJiBjYy5pc1ZhbGlkKGEpICYmIHIgJiYgci5za2VsZXRvbkRhdGEgIT09IGEgJiYgdGhpcy5pc0dhbWVUeXBlT3Blbih0aGlzLl9nYW1lVHlwZSkgJiYgKHIuc2tlbGV0b25EYXRhID0gYSk7XG4gICAgZSgpO1xuICB9XG4gIG9uQ2xlYXJFZmZCaHZfZ2V0QW5pbU5hbWUodCwgZSkge1xuICAgIHZhciByID0gdC5hcmdzWzBdLFxuICAgICAgYSA9IHQuYXJnc1sxXSxcbiAgICAgIG4gPSBcImluXCI7XG4gICAgaWYgKHRoaXMuaXNHYW1lVHlwZU9wZW4odGhpcy5fZ2FtZVR5cGUpICYmIHRoaXMuX2N1cnJTa0RhdGEgJiYgY2MuaXNWYWxpZCh0aGlzLl9jdXJyU2tEYXRhKSkge1xuICAgICAgaWYgKDEgPT0gdGhpcy5fc2VsZWN0ZWRUeXBlKSB7XG4gICAgICAgIG4gPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gXCJpbl8xXCIgOiBcImluXzJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIDQgPT0gdGhpcy5fc2VsZWN0ZWRUeXBlICYmIChuID0gYS54IDwgLTc1ID8gXCJpbl9sZWZ0XCIgOiBhLnggPiA3NSA/IFwiaW5fcmlnaHQzXCIgOiBcImluX21pZGRsZVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbiA9IHIgPyBcImluXzFcIiA6IFwiaW5cIjtcbiAgICB9XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgcmV0dXJuVmFsOiBuXG4gICAgfSk7XG4gIH1cbiAgZ2V0QW5pbU5hbWVCeVR5cGUodCwgZSkge1xuICAgIHZhciByID0gXCJpblwiO1xuICAgIGlmICgxID09IHQpIHtcbiAgICAgIHIgPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gXCJpbl8xXCIgOiBcImluXzJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgNCA9PSB0ICYmIChyID0gZS54IDwgLTc1ID8gXCJpbl9sZWZ0XCIgOiBlLnggPiA3NSA/IFwiaW5fcmlnaHQzXCIgOiBcImluX21pZGRsZVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgb25UMkNsZWFyRWZmQmh2X2dldEFuaUNmZyh0LCBlKSB7XG4gICAgaWYgKHRoaXMuZ2V0Q3VyclNrRGF0YSgpKSB7XG4gICAgICB2YXIgciA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICBhID0gdGhpcy5nZXRCdW5kbGVOYW1lKHIpLFxuICAgICAgICBuID0gXCJzcGluZS9nYW1lcGxheV9lbGltaW5hdGlvbl9hXCI7XG4gICAgICBcIm1haW5SZXNcIiA9PT0gYSAmJiAobiA9IFwic3BpbmUvY2xlYXIvZ2FtZXBsYXlfZWxpbWluYXRpb25fYVwiKTtcbiAgICAgIHZhciBpID0gdGhpcy5nZXRBbmltTmFtZUJ5VHlwZShyLCB0LmFyZ3NbMV0pO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgIHBhdGg6IG4sXG4gICAgICAgICAgYnVuZGxlOiBhLFxuICAgICAgICAgIGFuaW1OYW1lOiBpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=