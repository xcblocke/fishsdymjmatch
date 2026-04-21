
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_mtlClearEffect/Scripts/MtlClearEffectTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d17dzgZDtMH7ryHJldDGs2', 'MtlClearEffectTrait');
// subpackages/l_mtlClearEffect/Scripts/MtlClearEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MtlClearEffectTrait = /** @class */ (function (_super) {
    __extends(MtlClearEffectTrait, _super);
    function MtlClearEffectTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentMaterialId = 0;
        _this._currSkData = null;
        _this._isBaseClear = true;
        return _this;
    }
    MtlClearEffectTrait_1 = MtlClearEffectTrait;
    MtlClearEffectTrait.prototype.getCurrMaterialId = function () {
        var t = UserModel_1.default.getInstance().getCurrentGameData().getCardMaterialID();
        t || (t = 0);
        return t;
    };
    MtlClearEffectTrait.prototype.onChangeCEff5Trait_setType = function (t, e) {
        var r = t.args[0];
        this._isBaseClear = 5 == r;
        e();
    };
    MtlClearEffectTrait.prototype.onChangeCEffTrait_setType = function (t, e) {
        var r = t.args[0];
        this._isBaseClear = 5 == r;
        e();
    };
    MtlClearEffectTrait.prototype.onChangeCEffTrait_bundle = function (t, e) {
        var r = t.args[0];
        this._currentMaterialId = this.getCurrMaterialId();
        if (r < 1 || !this.isChangeClear())
            e();
        else {
            var a = this.getBundleName(r);
            if (a) {
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: a
                });
            }
            else {
                e();
            }
        }
    };
    MtlClearEffectTrait.prototype.onChangeCEff5Trait_bundle = function (t, e) {
        var r = t.args[0];
        this._currentMaterialId = this.getCurrMaterialId();
        if (r < 1 || !this.isChangeClear())
            e();
        else {
            var a = this.getBundleName(r);
            if (a) {
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: a
                });
            }
            else {
                e();
            }
        }
    };
    MtlClearEffectTrait.prototype.isChangeClear = function () {
        this._currentMaterialId = this.getCurrMaterialId();
        var t = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.MaterialConfig, this._currentMaterialId);
        return !(!t || 1 != t.ChangeClear);
    };
    MtlClearEffectTrait.prototype.getBundleName = function (t) {
        this._isBaseClear = 5 === t;
        var e = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.MaterialConfig, this._currentMaterialId);
        return e && 1 === e.ChangeClear ? e.Color === MtlClearEffectTrait_1.COLOR_SPECIAL ? 5 === t ? "r_materialCard" + this._currentMaterialId : null : 5 === t ? "l_mtlClear" + e.Color : "r_mtlClear" + e.Color + t : null;
    };
    MtlClearEffectTrait.prototype.getAniCfg = function () {
        var t = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.MaterialConfig, this._currentMaterialId), e = null;
        t && 1 === t.ChangeClear && (e = t.Color === MtlClearEffectTrait_1.COLOR_SPECIAL ? "r_materialCard" + this._currentMaterialId : "l_mtlClear" + t.Color);
        return {
            bundleName: e,
            spinePath: "spine/gameplay_elimination_a"
        };
    };
    MtlClearEffectTrait.prototype.loadSpine = function (t) {
        var e, r = this, a = this.getAniCfg(), i = a.bundleName, n = a.spinePath;
        this._currSkData = null;
        var o = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.MaterialConfig, this._currentMaterialId);
        o && 0 !== o.ChangeClear && i && (null === (e = null == t ? void 0 : t.gameCtr) || void 0 === e || e.loadRes(n, sp.SkeletonData, i).then(function (t) {
            var e = Array.isArray(t) ? t[0] : t;
            r._currSkData = e || null;
        }).catch(function () {
            r._currSkData = null;
        }));
    };
    MtlClearEffectTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        this._currentMaterialId = this.getCurrMaterialId();
        this.loadSpine(t.ins.context);
        e();
    };
    MtlClearEffectTrait.prototype.onChangeBatchBhv_start = function (t, e) {
        this._currentMaterialId = this.getCurrMaterialId();
        mj.EventManager.emit(GameEvent_1.EGameEvent.Clear_ClassicChange, this, {
            context: t.ins.context
        });
        this.loadSpine(t.ins.context);
        e();
    };
    MtlClearEffectTrait.prototype.onClearEffBhv_changeSkd = function (t, e) {
        var a = t.args[0];
        cc.isValid(a.skeletonData) || (a.skeletonData = null);
        if (this.isChangeClear()) {
            if (!this._isBaseClear) {
                var i = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.MaterialConfig, this._currentMaterialId);
                if (!i || i.Color !== MtlClearEffectTrait_1.COLOR_SPECIAL) {
                    e();
                    return;
                }
            }
            if (cc.isValid(this._currSkData)) {
                var n = this._currSkData;
                if (a.skeletonData === n)
                    e();
                else {
                    a.skeletonData = n;
                    e({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                }
            }
            else
                e();
        }
        else
            e();
    };
    MtlClearEffectTrait.prototype.onChangeCEffTrait_isGTOpen = function (t, e) {
        this._currentMaterialId = this.getCurrMaterialId();
        if (this._currentMaterialId) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    var MtlClearEffectTrait_1;
    MtlClearEffectTrait.traitKey = "MtlClearEffect";
    MtlClearEffectTrait.BundleName = "r_mtlClearEffect";
    MtlClearEffectTrait.COLOR_SPECIAL = "Special";
    MtlClearEffectTrait = MtlClearEffectTrait_1 = __decorate([
        mj.trait,
        mj.class("MtlClearEffectTrait")
    ], MtlClearEffectTrait);
    return MtlClearEffectTrait;
}(Trait_1.default));
exports.default = MtlClearEffectTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX210bENsZWFyRWZmZWN0L1NjcmlwdHMvTXRsQ2xlYXJFZmZlY3RUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQTJFO0FBQzNFLHlFQUF3RTtBQUN4RSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLDZFQUE0RTtBQUM1RSxzRUFBaUU7QUFHakU7SUFBaUQsdUNBQUs7SUFBdEQ7UUFBQSxxRUF1SUM7UUF0SUMsd0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGtCQUFZLEdBQUcsSUFBSSxDQUFDOztJQW9JdEIsQ0FBQzs0QkF2SW9CLG1CQUFtQjtJQU90QywrQ0FBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6RSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDYixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCx3REFBMEIsR0FBMUIsVUFBMkIsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsdURBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHNEQUF3QixHQUF4QixVQUF5QixD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QWtCLENBQUM7SUFDaEMsaUNBQWEsR0FBRyxTQUFTLENBQUM7SUFOZCxtQkFBbUI7UUFGdkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBdUl2QztJQUFELDBCQUFDO0NBdklELEFBdUlDLENBdklnRCxlQUFLLEdBdUlyRDtrQkF2SW9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVHYW1lRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTXRsQ2xlYXJFZmZlY3RUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXRsQ2xlYXJFZmZlY3RUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2N1cnJlbnRNYXRlcmlhbElkID0gMDtcbiAgX2N1cnJTa0RhdGEgPSBudWxsO1xuICBfaXNCYXNlQ2xlYXIgPSB0cnVlO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIk10bENsZWFyRWZmZWN0XCI7XG4gIHN0YXRpYyBCdW5kbGVOYW1lID0gXCJyX210bENsZWFyRWZmZWN0XCI7XG4gIHN0YXRpYyBDT0xPUl9TUEVDSUFMID0gXCJTcGVjaWFsXCI7XG4gIGdldEN1cnJNYXRlcmlhbElkKCkge1xuICAgIHZhciB0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVEYXRhKCkuZ2V0Q2FyZE1hdGVyaWFsSUQoKTtcbiAgICB0IHx8ICh0ID0gMCk7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgb25DaGFuZ2VDRWZmNVRyYWl0X3NldFR5cGUodCwgZSkge1xuICAgIHZhciByID0gdC5hcmdzWzBdO1xuICAgIHRoaXMuX2lzQmFzZUNsZWFyID0gNSA9PSByO1xuICAgIGUoKTtcbiAgfVxuICBvbkNoYW5nZUNFZmZUcmFpdF9zZXRUeXBlKHQsIGUpIHtcbiAgICB2YXIgciA9IHQuYXJnc1swXTtcbiAgICB0aGlzLl9pc0Jhc2VDbGVhciA9IDUgPT0gcjtcbiAgICBlKCk7XG4gIH1cbiAgb25DaGFuZ2VDRWZmVHJhaXRfYnVuZGxlKHQsIGUpIHtcbiAgICB2YXIgciA9IHQuYXJnc1swXTtcbiAgICB0aGlzLl9jdXJyZW50TWF0ZXJpYWxJZCA9IHRoaXMuZ2V0Q3Vyck1hdGVyaWFsSWQoKTtcbiAgICBpZiAociA8IDEgfHwgIXRoaXMuaXNDaGFuZ2VDbGVhcigpKSBlKCk7ZWxzZSB7XG4gICAgICB2YXIgYSA9IHRoaXMuZ2V0QnVuZGxlTmFtZShyKTtcbiAgICAgIGlmIChhKSB7XG4gICAgICAgIGUoe1xuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIHJldHVyblZhbDogYVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25DaGFuZ2VDRWZmNVRyYWl0X2J1bmRsZSh0LCBlKSB7XG4gICAgdmFyIHIgPSB0LmFyZ3NbMF07XG4gICAgdGhpcy5fY3VycmVudE1hdGVyaWFsSWQgPSB0aGlzLmdldEN1cnJNYXRlcmlhbElkKCk7XG4gICAgaWYgKHIgPCAxIHx8ICF0aGlzLmlzQ2hhbmdlQ2xlYXIoKSkgZSgpO2Vsc2Uge1xuICAgICAgdmFyIGEgPSB0aGlzLmdldEJ1bmRsZU5hbWUocik7XG4gICAgICBpZiAoYSkge1xuICAgICAgICBlKHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IGFcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlzQ2hhbmdlQ2xlYXIoKSB7XG4gICAgdGhpcy5fY3VycmVudE1hdGVyaWFsSWQgPSB0aGlzLmdldEN1cnJNYXRlcmlhbElkKCk7XG4gICAgdmFyIHQgPSBEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUuTWF0ZXJpYWxDb25maWcsIHRoaXMuX2N1cnJlbnRNYXRlcmlhbElkKTtcbiAgICByZXR1cm4gISghdCB8fCAxICE9IHQuQ2hhbmdlQ2xlYXIpO1xuICB9XG4gIGdldEJ1bmRsZU5hbWUodCkge1xuICAgIHRoaXMuX2lzQmFzZUNsZWFyID0gNSA9PT0gdDtcbiAgICB2YXIgZSA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5NYXRlcmlhbENvbmZpZywgdGhpcy5fY3VycmVudE1hdGVyaWFsSWQpO1xuICAgIHJldHVybiBlICYmIDEgPT09IGUuQ2hhbmdlQ2xlYXIgPyBlLkNvbG9yID09PSBNdGxDbGVhckVmZmVjdFRyYWl0LkNPTE9SX1NQRUNJQUwgPyA1ID09PSB0ID8gXCJyX21hdGVyaWFsQ2FyZFwiICsgdGhpcy5fY3VycmVudE1hdGVyaWFsSWQgOiBudWxsIDogNSA9PT0gdCA/IFwibF9tdGxDbGVhclwiICsgZS5Db2xvciA6IFwicl9tdGxDbGVhclwiICsgZS5Db2xvciArIHQgOiBudWxsO1xuICB9XG4gIGdldEFuaUNmZygpIHtcbiAgICB2YXIgdCA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5NYXRlcmlhbENvbmZpZywgdGhpcy5fY3VycmVudE1hdGVyaWFsSWQpLFxuICAgICAgZSA9IG51bGw7XG4gICAgdCAmJiAxID09PSB0LkNoYW5nZUNsZWFyICYmIChlID0gdC5Db2xvciA9PT0gTXRsQ2xlYXJFZmZlY3RUcmFpdC5DT0xPUl9TUEVDSUFMID8gXCJyX21hdGVyaWFsQ2FyZFwiICsgdGhpcy5fY3VycmVudE1hdGVyaWFsSWQgOiBcImxfbXRsQ2xlYXJcIiArIHQuQ29sb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBidW5kbGVOYW1lOiBlLFxuICAgICAgc3BpbmVQYXRoOiBcInNwaW5lL2dhbWVwbGF5X2VsaW1pbmF0aW9uX2FcIlxuICAgIH07XG4gIH1cbiAgbG9hZFNwaW5lKHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIHIgPSB0aGlzLFxuICAgICAgYSA9IHRoaXMuZ2V0QW5pQ2ZnKCksXG4gICAgICBpID0gYS5idW5kbGVOYW1lLFxuICAgICAgbiA9IGEuc3BpbmVQYXRoO1xuICAgIHRoaXMuX2N1cnJTa0RhdGEgPSBudWxsO1xuICAgIHZhciBvID0gRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLk1hdGVyaWFsQ29uZmlnLCB0aGlzLl9jdXJyZW50TWF0ZXJpYWxJZCk7XG4gICAgbyAmJiAwICE9PSBvLkNoYW5nZUNsZWFyICYmIGkgJiYgKG51bGwgPT09IChlID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5nYW1lQ3RyKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5sb2FkUmVzKG4sIHNwLlNrZWxldG9uRGF0YSwgaSkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIGUgPSBBcnJheS5pc0FycmF5KHQpID8gdFswXSA6IHQ7XG4gICAgICByLl9jdXJyU2tEYXRhID0gZSB8fCBudWxsO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHIuX2N1cnJTa0RhdGEgPSBudWxsO1xuICAgIH0pKTtcbiAgfVxuICBvbkluaXRWaWV3Qmh2X2NydFRscyh0LCBlKSB7XG4gICAgdGhpcy5fY3VycmVudE1hdGVyaWFsSWQgPSB0aGlzLmdldEN1cnJNYXRlcmlhbElkKCk7XG4gICAgdGhpcy5sb2FkU3BpbmUodC5pbnMuY29udGV4dCk7XG4gICAgZSgpO1xuICB9XG4gIG9uQ2hhbmdlQmF0Y2hCaHZfc3RhcnQodCwgZSkge1xuICAgIHRoaXMuX2N1cnJlbnRNYXRlcmlhbElkID0gdGhpcy5nZXRDdXJyTWF0ZXJpYWxJZCgpO1xuICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVHYW1lRXZlbnQuQ2xlYXJfQ2xhc3NpY0NoYW5nZSwgdGhpcywge1xuICAgICAgY29udGV4dDogdC5pbnMuY29udGV4dFxuICAgIH0pO1xuICAgIHRoaXMubG9hZFNwaW5lKHQuaW5zLmNvbnRleHQpO1xuICAgIGUoKTtcbiAgfVxuICBvbkNsZWFyRWZmQmh2X2NoYW5nZVNrZCh0LCBlKSB7XG4gICAgdmFyIGEgPSB0LmFyZ3NbMF07XG4gICAgY2MuaXNWYWxpZChhLnNrZWxldG9uRGF0YSkgfHwgKGEuc2tlbGV0b25EYXRhID0gbnVsbCk7XG4gICAgaWYgKHRoaXMuaXNDaGFuZ2VDbGVhcigpKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzQmFzZUNsZWFyKSB7XG4gICAgICAgIHZhciBpID0gRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLk1hdGVyaWFsQ29uZmlnLCB0aGlzLl9jdXJyZW50TWF0ZXJpYWxJZCk7XG4gICAgICAgIGlmICghaSB8fCBpLkNvbG9yICE9PSBNdGxDbGVhckVmZmVjdFRyYWl0LkNPTE9SX1NQRUNJQUwpIHtcbiAgICAgICAgICBlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9jdXJyU2tEYXRhKSkge1xuICAgICAgICB2YXIgbiA9IHRoaXMuX2N1cnJTa0RhdGE7XG4gICAgICAgIGlmIChhLnNrZWxldG9uRGF0YSA9PT0gbikgZSgpO2Vsc2Uge1xuICAgICAgICAgIGEuc2tlbGV0b25EYXRhID0gbjtcbiAgICAgICAgICBlKHtcbiAgICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uQ2hhbmdlQ0VmZlRyYWl0X2lzR1RPcGVuKHQsIGUpIHtcbiAgICB0aGlzLl9jdXJyZW50TWF0ZXJpYWxJZCA9IHRoaXMuZ2V0Q3Vyck1hdGVyaWFsSWQoKTtcbiAgICBpZiAodGhpcy5fY3VycmVudE1hdGVyaWFsSWQpIHtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICByZXR1cm5WYWw6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG59Il19