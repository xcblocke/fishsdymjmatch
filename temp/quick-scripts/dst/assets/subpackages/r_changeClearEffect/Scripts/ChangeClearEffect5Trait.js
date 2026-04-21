
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_changeClearEffect/Scripts/ChangeClearEffect5Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2c03XnVFVBKZY2L8RK/nNv', 'ChangeClearEffect5Trait');
// subpackages/r_changeClearEffect/Scripts/ChangeClearEffect5Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ChangeClearEffect5Trait = /** @class */ (function (_super) {
    __extends(ChangeClearEffect5Trait, _super);
    function ChangeClearEffect5Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        _this._selectedType = 1;
        _this._isGameOpen = false;
        return _this;
    }
    ChangeClearEffect5Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._selectedType = this.getRandomEffect();
        this.registerEvent([{
                event: "ChangeCEffTrait_bundle"
            }, {
                event: "ChangeCEffTrait_getType"
            }, {
                event: "ChangeCEffTrait_getSKDt"
            }]);
    };
    ChangeClearEffect5Trait.prototype.getBundleName = function () {
        var t = this._selectedType;
        return 5 === t ? "mainRes" : "clear_effect" + t;
    };
    ChangeClearEffect5Trait.prototype.setType = function (t) {
        this._selectedType = t;
    };
    ChangeClearEffect5Trait.prototype.onChangeCEffTrait_bundle = function (t, e) {
        var r = this.getBundleName();
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: r
        });
    };
    ChangeClearEffect5Trait.prototype.onChangeCEffTrait_getType = function (t, e) {
        var r = this._selectedType;
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: r
        });
    };
    ChangeClearEffect5Trait.prototype.onChangeCEffTrait_getSKDt = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: this._currSkData
        });
    };
    ChangeClearEffect5Trait.prototype.onChangeCEffTrait_loadSpine = function (t, e) {
        var r = this;
        this._isGameOpen = t.ins.isGameTypeOpen(t.ins._gameType);
        var a = t.args[0], n = t.args[1];
        0 == this._traitData.type && (a = this.getRandomEffect());
        this.setType(a);
        this._selectedType = a;
        var i = this.getBundleName(), o = "spine/gameplay_elimination_a";
        "mainRes" === i && (o = "spine/clear/gameplay_elimination_a");
        var s = n;
        if (s && "function" == typeof s.loadRes) {
            this._currSkData = null;
            s.loadRes(o, sp.SkeletonData, i).then(function (t) {
                var e = Array.isArray(t) ? t[0] : t;
                r._currSkData = e || null;
            }).catch(function () {
                r._currSkData = null;
            });
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else
            e();
    };
    ChangeClearEffect5Trait.prototype.getRandomEffect = function () {
        var t = Math.random() > 0.5 ? 5 : 0;
        0 == t && (t = Math.floor(4 * Math.random()) + 1);
        return t;
    };
    ChangeClearEffect5Trait.prototype.onClearEffBhv_changeSkd = function (t, e) {
        if (0 == this._traitData.type) {
            var r = t.args[0], a = this._currSkData;
            a && cc.isValid(a) && r && r.skeletonData !== a && this._isGameOpen && (r.skeletonData = a);
            e();
        }
        else
            e();
    };
    ChangeClearEffect5Trait.prototype.onClearEffBhv_getAnimName = function (t, e) {
        if (0 == this._traitData.type) {
            var r = t.args[0], a = t.args[1], n = "in";
            if (this._isGameOpen && this._currSkData && cc.isValid(this._currSkData)) {
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
        }
        else
            e();
    };
    ChangeClearEffect5Trait.traitKey = "ChangeClearEffect5";
    __decorate([
        mj.traitEvent("ChangeCEff5Trait_bundle")
    ], ChangeClearEffect5Trait.prototype, "getBundleName", null);
    __decorate([
        mj.traitEvent("ChangeCEff5Trait_setType")
    ], ChangeClearEffect5Trait.prototype, "setType", null);
    ChangeClearEffect5Trait = __decorate([
        mj.trait,
        mj.class("ChangeClearEffect5Trait")
    ], ChangeClearEffect5Trait);
    return ChangeClearEffect5Trait;
}(Trait_1.default));
exports.default = ChangeClearEffect5Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NoYW5nZUNsZWFyRWZmZWN0L1NjcmlwdHMvQ2hhbmdlQ2xlYXJFZmZlY3Q1VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFHeEY7SUFBcUQsMkNBQUs7SUFBMUQ7UUFBQSxxRUEwR0M7UUF6R0MsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsaUJBQVcsR0FBRyxLQUFLLENBQUM7O0lBdUd0QixDQUFDO0lBckdDLHdDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLHdCQUF3QjthQUNoQyxFQUFFO2dCQUNELEtBQUssRUFBRSx5QkFBeUI7YUFDakMsRUFBRTtnQkFDRCxLQUFLLEVBQUUseUJBQXlCO2FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELCtDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCx5Q0FBTyxHQUFQLFVBQVEsQ0FBQztRQUNQLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDRCwwREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJ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RyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUMvRjthQUNGO2lCQUFNO2dCQUNMLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQ3ZCO1lBQ0QsQ0FBQyxDQUFDO2dCQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxJQUFJO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQzthQUNiLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXJHTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBYXZDO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztnRUFJeEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7MERBR3pDO0lBeEJrQix1QkFBdUI7UUFGM0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO09BQ2YsdUJBQXVCLENBMEczQztJQUFELDhCQUFDO0NBMUdELEFBMEdDLENBMUdvRCxlQUFLLEdBMEd6RDtrQkExR29CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNoYW5nZUNsZWFyRWZmZWN0NVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VDbGVhckVmZmVjdDVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2N1cnJTa0RhdGEgPSBudWxsO1xuICBfc2VsZWN0ZWRUeXBlID0gMTtcbiAgX2lzR2FtZU9wZW4gPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDaGFuZ2VDbGVhckVmZmVjdDVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3NlbGVjdGVkVHlwZSA9IHRoaXMuZ2V0UmFuZG9tRWZmZWN0KCk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFt7XG4gICAgICBldmVudDogXCJDaGFuZ2VDRWZmVHJhaXRfYnVuZGxlXCJcbiAgICB9LCB7XG4gICAgICBldmVudDogXCJDaGFuZ2VDRWZmVHJhaXRfZ2V0VHlwZVwiXG4gICAgfSwge1xuICAgICAgZXZlbnQ6IFwiQ2hhbmdlQ0VmZlRyYWl0X2dldFNLRHRcIlxuICAgIH1dKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkNoYW5nZUNFZmY1VHJhaXRfYnVuZGxlXCIpXG4gIGdldEJ1bmRsZU5hbWUoKSB7XG4gICAgdmFyIHQgPSB0aGlzLl9zZWxlY3RlZFR5cGU7XG4gICAgcmV0dXJuIDUgPT09IHQgPyBcIm1haW5SZXNcIiA6IFwiY2xlYXJfZWZmZWN0XCIgKyB0O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2hhbmdlQ0VmZjVUcmFpdF9zZXRUeXBlXCIpXG4gIHNldFR5cGUodCkge1xuICAgIHRoaXMuX3NlbGVjdGVkVHlwZSA9IHQ7XG4gIH1cbiAgb25DaGFuZ2VDRWZmVHJhaXRfYnVuZGxlKHQsIGUpIHtcbiAgICB2YXIgciA9IHRoaXMuZ2V0QnVuZGxlTmFtZSgpO1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICByZXR1cm5WYWw6IHJcbiAgICB9KTtcbiAgfVxuICBvbkNoYW5nZUNFZmZUcmFpdF9nZXRUeXBlKHQsIGUpIHtcbiAgICB2YXIgciA9IHRoaXMuX3NlbGVjdGVkVHlwZTtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgcmV0dXJuVmFsOiByXG4gICAgfSk7XG4gIH1cbiAgb25DaGFuZ2VDRWZmVHJhaXRfZ2V0U0tEdCh0LCBlKSB7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcCxcbiAgICAgIHJldHVyblZhbDogdGhpcy5fY3VyclNrRGF0YVxuICAgIH0pO1xuICB9XG4gIG9uQ2hhbmdlQ0VmZlRyYWl0X2xvYWRTcGluZSh0LCBlKSB7XG4gICAgdmFyIHIgPSB0aGlzO1xuICAgIHRoaXMuX2lzR2FtZU9wZW4gPSB0Lmlucy5pc0dhbWVUeXBlT3Blbih0Lmlucy5fZ2FtZVR5cGUpO1xuICAgIHZhciBhID0gdC5hcmdzWzBdLFxuICAgICAgbiA9IHQuYXJnc1sxXTtcbiAgICAwID09IHRoaXMuX3RyYWl0RGF0YS50eXBlICYmIChhID0gdGhpcy5nZXRSYW5kb21FZmZlY3QoKSk7XG4gICAgdGhpcy5zZXRUeXBlKGEpO1xuICAgIHRoaXMuX3NlbGVjdGVkVHlwZSA9IGE7XG4gICAgdmFyIGkgPSB0aGlzLmdldEJ1bmRsZU5hbWUoKSxcbiAgICAgIG8gPSBcInNwaW5lL2dhbWVwbGF5X2VsaW1pbmF0aW9uX2FcIjtcbiAgICBcIm1haW5SZXNcIiA9PT0gaSAmJiAobyA9IFwic3BpbmUvY2xlYXIvZ2FtZXBsYXlfZWxpbWluYXRpb25fYVwiKTtcbiAgICB2YXIgcyA9IG47XG4gICAgaWYgKHMgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBzLmxvYWRSZXMpIHtcbiAgICAgIHRoaXMuX2N1cnJTa0RhdGEgPSBudWxsO1xuICAgICAgcy5sb2FkUmVzKG8sIHNwLlNrZWxldG9uRGF0YSwgaSkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgZSA9IEFycmF5LmlzQXJyYXkodCkgPyB0WzBdIDogdDtcbiAgICAgICAgci5fY3VyclNrRGF0YSA9IGUgfHwgbnVsbDtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgci5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgICB9KTtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGdldFJhbmRvbUVmZmVjdCgpIHtcbiAgICB2YXIgdCA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyA1IDogMDtcbiAgICAwID09IHQgJiYgKHQgPSBNYXRoLmZsb29yKDQgKiBNYXRoLnJhbmRvbSgpKSArIDEpO1xuICAgIHJldHVybiB0O1xuICB9XG4gIG9uQ2xlYXJFZmZCaHZfY2hhbmdlU2tkKHQsIGUpIHtcbiAgICBpZiAoMCA9PSB0aGlzLl90cmFpdERhdGEudHlwZSkge1xuICAgICAgdmFyIHIgPSB0LmFyZ3NbMF0sXG4gICAgICAgIGEgPSB0aGlzLl9jdXJyU2tEYXRhO1xuICAgICAgYSAmJiBjYy5pc1ZhbGlkKGEpICYmIHIgJiYgci5za2VsZXRvbkRhdGEgIT09IGEgJiYgdGhpcy5faXNHYW1lT3BlbiAmJiAoci5za2VsZXRvbkRhdGEgPSBhKTtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uQ2xlYXJFZmZCaHZfZ2V0QW5pbU5hbWUodCwgZSkge1xuICAgIGlmICgwID09IHRoaXMuX3RyYWl0RGF0YS50eXBlKSB7XG4gICAgICB2YXIgciA9IHQuYXJnc1swXSxcbiAgICAgICAgYSA9IHQuYXJnc1sxXSxcbiAgICAgICAgbiA9IFwiaW5cIjtcbiAgICAgIGlmICh0aGlzLl9pc0dhbWVPcGVuICYmIHRoaXMuX2N1cnJTa0RhdGEgJiYgY2MuaXNWYWxpZCh0aGlzLl9jdXJyU2tEYXRhKSkge1xuICAgICAgICBpZiAoMSA9PSB0aGlzLl9zZWxlY3RlZFR5cGUpIHtcbiAgICAgICAgICBuID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/IFwiaW5fMVwiIDogXCJpbl8yXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgNCA9PSB0aGlzLl9zZWxlY3RlZFR5cGUgJiYgKG4gPSBhLnggPCAtNzUgPyBcImluX2xlZnRcIiA6IGEueCA+IDc1ID8gXCJpbl9yaWdodDNcIiA6IFwiaW5fbWlkZGxlXCIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuID0gciA/IFwiaW5fMVwiIDogXCJpblwiO1xuICAgICAgfVxuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICAgIHJldHVyblZhbDogblxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==