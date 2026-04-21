
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_valentineFlowerClear/Scripts/ValentineFlowerClearTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65ba2LQpvFIu5/p+2Q3EkmX', 'ValentineFlowerClearTrait');
// subpackages/r_valentineFlowerClear/Scripts/ValentineFlowerClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ValentineFlowerClearTrait = /** @class */ (function (_super) {
    __extends(ValentineFlowerClearTrait, _super);
    function ValentineFlowerClearTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkData = null;
        return _this;
    }
    ValentineFlowerClearTrait.prototype.getAniCfg = function () {
        return {
            bundleName: "r_valentineFlowerClear",
            spinePath: "spine/gameplay_special_elimination"
        };
    };
    ValentineFlowerClearTrait.prototype.loadSpine = function (t) {
        var e, r = this, n = this.getAniCfg(), i = n.bundleName, a = n.spinePath;
        this._currSkData = null;
        null === (e = null == t ? void 0 : t.gameCtr) || void 0 === e || e.loadRes(a, sp.SkeletonData, i).then(function (t) {
            var e = Array.isArray(t) ? t[0] : t;
            r._currSkData = e || null;
        }).catch(function () {
            r._currSkData = null;
        });
    };
    ValentineFlowerClearTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        if (this.isFlowerClearEffectActive()) {
            this.loadSpine(t.ins.context);
            e();
        }
        else
            e();
    };
    ValentineFlowerClearTrait.prototype.onClearEffBhv_changeSpSkd = function (t, e) {
        if (this.isFlowerClearEffectActive()) {
            var r = t.args[0], n = this._currSkData;
            n && cc.isValid(n) && r && r.skeletonData !== n && (r.skeletonData = n);
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    ValentineFlowerClearTrait.prototype.isFlowerClearEffectActive = function () {
        if (null != this._traitData.flowerClearEffect)
            return this._traitData.flowerClearEffect;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    ValentineFlowerClearTrait.traitKey = "ValentineFlowerClear";
    ValentineFlowerClearTrait = __decorate([
        mj.trait,
        mj.class("ValentineFlowerClearTrait")
    ], ValentineFlowerClearTrait);
    return ValentineFlowerClearTrait;
}(Trait_1.default));
exports.default = ValentineFlowerClearTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3ZhbGVudGluZUZsb3dlckNsZWFyL1NjcmlwdHMvVmFsZW50aW5lRmxvd2VyQ2xlYXJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQXVELDZDQUFLO0lBQTVEO1FBQUEscUVBNkNDO1FBNUNDLGlCQUFXLEdBQUcsSUFBSSxDQUFDOztJQTRDckIsQ0FBQztJQTFDQyw2Q0FBUyxHQUFUO1FBQ0UsT0FBTztZQUNMLFVBQVUsRUFBRSx3QkFBd0I7WUFDcEMsU0FBUyxFQUFFLG9DQUFvQztTQUNoRCxDQUFDO0lBQ0osQ0FBQztJQUNELDZDQUFTLEdBQVQsVUFBVSxDQUFDO1FBQ1QsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksRUFDUixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUNwQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNoSCxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsd0RBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlCLENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsNkRBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDZixDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN2QixDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCw2REFBeUIsR0FBekI7UUFDRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQjtZQUFFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztRQUN4RixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBMUNNLGtDQUFRLEdBQUcsc0JBQXNCLENBQUM7SUFGdEIseUJBQXlCO1FBRjdDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztPQUNqQix5QkFBeUIsQ0E2QzdDO0lBQUQsZ0NBQUM7Q0E3Q0QsQUE2Q0MsQ0E3Q3NELGVBQUssR0E2QzNEO2tCQTdDb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVmFsZW50aW5lRmxvd2VyQ2xlYXJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsZW50aW5lRmxvd2VyQ2xlYXJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2N1cnJTa0RhdGEgPSBudWxsO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlZhbGVudGluZUZsb3dlckNsZWFyXCI7XG4gIGdldEFuaUNmZygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYnVuZGxlTmFtZTogXCJyX3ZhbGVudGluZUZsb3dlckNsZWFyXCIsXG4gICAgICBzcGluZVBhdGg6IFwic3BpbmUvZ2FtZXBsYXlfc3BlY2lhbF9lbGltaW5hdGlvblwiXG4gICAgfTtcbiAgfVxuICBsb2FkU3BpbmUodCkge1xuICAgIHZhciBlLFxuICAgICAgciA9IHRoaXMsXG4gICAgICBuID0gdGhpcy5nZXRBbmlDZmcoKSxcbiAgICAgIGkgPSBuLmJ1bmRsZU5hbWUsXG4gICAgICBhID0gbi5zcGluZVBhdGg7XG4gICAgdGhpcy5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgbnVsbCA9PT0gKGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmdhbWVDdHIpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLmxvYWRSZXMoYSwgc3AuU2tlbGV0b25EYXRhLCBpKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgZSA9IEFycmF5LmlzQXJyYXkodCkgPyB0WzBdIDogdDtcbiAgICAgIHIuX2N1cnJTa0RhdGEgPSBlIHx8IG51bGw7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgci5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgfSk7XG4gIH1cbiAgb25Jbml0Vmlld0Jodl9jcnRUbHModCwgZSkge1xuICAgIGlmICh0aGlzLmlzRmxvd2VyQ2xlYXJFZmZlY3RBY3RpdmUoKSkge1xuICAgICAgdGhpcy5sb2FkU3BpbmUodC5pbnMuY29udGV4dCk7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkNsZWFyRWZmQmh2X2NoYW5nZVNwU2tkKHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc0Zsb3dlckNsZWFyRWZmZWN0QWN0aXZlKCkpIHtcbiAgICAgIHZhciByID0gdC5hcmdzWzBdLFxuICAgICAgICBuID0gdGhpcy5fY3VyclNrRGF0YTtcbiAgICAgIG4gJiYgY2MuaXNWYWxpZChuKSAmJiByICYmIHIuc2tlbGV0b25EYXRhICE9PSBuICYmIChyLnNrZWxldG9uRGF0YSA9IG4pO1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBpc0Zsb3dlckNsZWFyRWZmZWN0QWN0aXZlKCkge1xuICAgIGlmIChudWxsICE9IHRoaXMuX3RyYWl0RGF0YS5mbG93ZXJDbGVhckVmZmVjdCkgcmV0dXJuIHRoaXMuX3RyYWl0RGF0YS5mbG93ZXJDbGVhckVmZmVjdDtcbiAgICB2YXIgdCA9IG1qLmdldENsYXNzQnlOYW1lKFwiVmFsZW50aW5lTW9kZWxcIik7XG4gICAgcmV0dXJuIG51bGwgIT0gdCAmJiB0LmdldEluc3RhbmNlKCkuaXNFZmZlY3RBY3RpdmUoKTtcbiAgfVxufSJdfQ==