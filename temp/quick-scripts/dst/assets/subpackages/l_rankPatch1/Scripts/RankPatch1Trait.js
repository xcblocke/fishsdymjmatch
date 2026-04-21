
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankPatch1/Scripts/RankPatch1Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8ceazR/T1Bc6vZGW7DJccc', 'RankPatch1Trait');
// subpackages/l_rankPatch1/Scripts/RankPatch1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var EventDefine_1 = require("../../../Scripts/base/event/EventDefine");
var RankPatch1Trait = /** @class */ (function (_super) {
    __extends(RankPatch1Trait, _super);
    function RankPatch1Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rankTrait = null;
        _this._openActTimer = -1;
        return _this;
    }
    RankPatch1Trait.prototype.onRankTrait_startEnterHall = function (t, e) {
        e();
        this._rankTrait = t.ins;
    };
    RankPatch1Trait.prototype.onRankBtn_updateAll = function (t, e) {
        this._rankTrait, e();
    };
    RankPatch1Trait.prototype.onRankBtn_closeOutCD = function (t, e) {
        var r, n;
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump
        });
        this.tryExecuteHomeRankPipeline(null === (n = null === (r = t.ins) || void 0 === r ? void 0 : r.node) || void 0 === n ? void 0 : n.parent);
    };
    RankPatch1Trait.prototype.onRankBtn_finishCD = function (t, e) {
        var r, n;
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
        this.tryExecuteHomeRankPipeline(null === (n = null === (r = t.ins) || void 0 === r ? void 0 : r.node) || void 0 === n ? void 0 : n.parent);
    };
    RankPatch1Trait.prototype.tryExecuteHomeRankPipeline = function (t, e) {
        var r = this;
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.None) {
            this.clearOpenActTimer();
            this._openActTimer = setTimeout(function () {
                if (r._rankTrait && r.isRankOpen() && r.checkIfOpenNewActivity(r._rankTrait.getRankModel())) {
                    r._rankTrait.executeHomeRankPipeline(t);
                    null == e || e();
                    r.dispatchEvent(EventDefine_1.EVT_MSG_HALL_FORCE_UPDATE);
                    r.clearOpenActTimer();
                }
            }, 1100);
        }
    };
    RankPatch1Trait.prototype.clearOpenActTimer = function () {
        if (-1 !== this._openActTimer) {
            clearTimeout(this._openActTimer);
            this._openActTimer = -1;
        }
    };
    RankPatch1Trait.prototype.checkIfOpenNewActivity = function (t) {
        var e = Date.now();
        return t.localData.curActStartTime < 0 || e >= t.localData.nextActStartTime || Math.abs(t.localData.nextActStartTime - e) < 1100;
    };
    RankPatch1Trait.prototype.onRankModel_checkOpen = function (t, e) {
        var r = t.ins, n = this.checkIfOpenNewActivity(r);
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: n
        });
    };
    RankPatch1Trait.prototype.onRankVw_closeOutCD = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
        this.dispatchEvent("msg_removeRankBoxTips");
        var r = t.ins;
        this.tryExecuteHomeRankPipeline(null, function () {
            if (cc.isValid(r)) {
                r.updateLabels();
                r.updateCountdown();
                r.initRank123();
                r.refreshList();
            }
        });
    };
    RankPatch1Trait.prototype.onRankVw_finishCD = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
        this.dispatchEvent("msg_removeRankBoxTips");
        var r = t.ins;
        this.tryExecuteHomeRankPipeline(null, function () {
            if (cc.isValid(r)) {
                r.updateLabels();
                r.updateCountdown();
                r.initRank123();
                r.refreshList();
            }
        });
    };
    RankPatch1Trait.prototype.isRankOpen = function () {
        var t, e;
        return !!this._rankTrait && UserModel_1.default.getInstance().getMainGameData().getLevelId() > ((null === (e = (t = this._rankTrait).getLimitLevel) || void 0 === e ? void 0 : e.call(t)) || 0);
    };
    RankPatch1Trait.traitKey = "RankPatch1";
    RankPatch1Trait = __decorate([
        mj.trait,
        mj.class("RankPatch1Trait")
    ], RankPatch1Trait);
    return RankPatch1Trait;
}(Trait_1.default));
exports.default = RankPatch1Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtQYXRjaDEvU2NyaXB0cy9SYW5rUGF0Y2gxVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRixnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUNqRSx1RUFBb0Y7QUFHcEY7SUFBNkMsbUNBQUs7SUFBbEQ7UUFBQSxxRUErRkM7UUE5RkMsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsbUJBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUE2RnJCLENBQUM7SUEzRkMsb0RBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLENBQUMsRUFBRSxDQUFDO1FBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzFCLENBQUM7SUFDRCw2Q0FBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsOENBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxJQUFJO1NBQ3pDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0s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LENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hMLENBQUM7SUEzRk0sd0JBQVEsR0FBRyxZQUFZLENBQUM7SUFIWixlQUFlO1FBRm5DLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztPQUNQLGVBQWUsQ0ErRm5DO0lBQUQsc0JBQUM7Q0EvRkQsQUErRkMsQ0EvRjRDLGVBQUssR0ErRmpEO2tCQS9Gb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBFVlRfTVNHX0hBTExfRk9SQ0VfVVBEQVRFIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL2V2ZW50L0V2ZW50RGVmaW5lJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUmFua1BhdGNoMVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rUGF0Y2gxVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9yYW5rVHJhaXQgPSBudWxsO1xuICBfb3BlbkFjdFRpbWVyID0gLTE7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUmFua1BhdGNoMVwiO1xuICBvblJhbmtUcmFpdF9zdGFydEVudGVySGFsbCh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHRoaXMuX3JhbmtUcmFpdCA9IHQuaW5zO1xuICB9XG4gIG9uUmFua0J0bl91cGRhdGVBbGwodCwgZSkge1xuICAgIHRoaXMuX3JhbmtUcmFpdCwgZSgpO1xuICB9XG4gIG9uUmFua0J0bl9jbG9zZU91dENEKHQsIGUpIHtcbiAgICB2YXIgciwgbjtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXBcbiAgICB9KTtcbiAgICB0aGlzLnRyeUV4ZWN1dGVIb21lUmFua1BpcGVsaW5lKG51bGwgPT09IChuID0gbnVsbCA9PT0gKHIgPSB0LmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5ub2RlKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLnBhcmVudCk7XG4gIH1cbiAgb25SYW5rQnRuX2ZpbmlzaENEKHQsIGUpIHtcbiAgICB2YXIgciwgbjtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICB9KTtcbiAgICB0aGlzLnRyeUV4ZWN1dGVIb21lUmFua1BpcGVsaW5lKG51bGwgPT09IChuID0gbnVsbCA9PT0gKHIgPSB0LmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5ub2RlKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLnBhcmVudCk7XG4gIH1cbiAgdHJ5RXhlY3V0ZUhvbWVSYW5rUGlwZWxpbmUodCwgZSkge1xuICAgIHZhciByID0gdGhpcztcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuTm9uZSkge1xuICAgICAgdGhpcy5jbGVhck9wZW5BY3RUaW1lcigpO1xuICAgICAgdGhpcy5fb3BlbkFjdFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChyLl9yYW5rVHJhaXQgJiYgci5pc1JhbmtPcGVuKCkgJiYgci5jaGVja0lmT3Blbk5ld0FjdGl2aXR5KHIuX3JhbmtUcmFpdC5nZXRSYW5rTW9kZWwoKSkpIHtcbiAgICAgICAgICByLl9yYW5rVHJhaXQuZXhlY3V0ZUhvbWVSYW5rUGlwZWxpbmUodCk7XG4gICAgICAgICAgbnVsbCA9PSBlIHx8IGUoKTtcbiAgICAgICAgICByLmRpc3BhdGNoRXZlbnQoRVZUX01TR19IQUxMX0ZPUkNFX1VQREFURSk7XG4gICAgICAgICAgci5jbGVhck9wZW5BY3RUaW1lcigpO1xuICAgICAgICB9XG4gICAgICB9LCAxMTAwKTtcbiAgICB9XG4gIH1cbiAgY2xlYXJPcGVuQWN0VGltZXIoKSB7XG4gICAgaWYgKC0xICE9PSB0aGlzLl9vcGVuQWN0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9vcGVuQWN0VGltZXIpO1xuICAgICAgdGhpcy5fb3BlbkFjdFRpbWVyID0gLTE7XG4gICAgfVxuICB9XG4gIGNoZWNrSWZPcGVuTmV3QWN0aXZpdHkodCkge1xuICAgIHZhciBlID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gdC5sb2NhbERhdGEuY3VyQWN0U3RhcnRUaW1lIDwgMCB8fCBlID49IHQubG9jYWxEYXRhLm5leHRBY3RTdGFydFRpbWUgfHwgTWF0aC5hYnModC5sb2NhbERhdGEubmV4dEFjdFN0YXJ0VGltZSAtIGUpIDwgMTEwMDtcbiAgfVxuICBvblJhbmtNb2RlbF9jaGVja09wZW4odCwgZSkge1xuICAgIHZhciByID0gdC5pbnMsXG4gICAgICBuID0gdGhpcy5jaGVja0lmT3Blbk5ld0FjdGl2aXR5KHIpO1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogblxuICAgIH0pO1xuICB9XG4gIG9uUmFua1Z3X2Nsb3NlT3V0Q0QodCwgZSkge1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChcIm1zZ19yZW1vdmVSYW5rQm94VGlwc1wiKTtcbiAgICB2YXIgciA9IHQuaW5zO1xuICAgIHRoaXMudHJ5RXhlY3V0ZUhvbWVSYW5rUGlwZWxpbmUobnVsbCwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNjLmlzVmFsaWQocikpIHtcbiAgICAgICAgci51cGRhdGVMYWJlbHMoKTtcbiAgICAgICAgci51cGRhdGVDb3VudGRvd24oKTtcbiAgICAgICAgci5pbml0UmFuazEyMygpO1xuICAgICAgICByLnJlZnJlc2hMaXN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgb25SYW5rVndfZmluaXNoQ0QodCwgZSkge1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChcIm1zZ19yZW1vdmVSYW5rQm94VGlwc1wiKTtcbiAgICB2YXIgciA9IHQuaW5zO1xuICAgIHRoaXMudHJ5RXhlY3V0ZUhvbWVSYW5rUGlwZWxpbmUobnVsbCwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNjLmlzVmFsaWQocikpIHtcbiAgICAgICAgci51cGRhdGVMYWJlbHMoKTtcbiAgICAgICAgci51cGRhdGVDb3VudGRvd24oKTtcbiAgICAgICAgci5pbml0UmFuazEyMygpO1xuICAgICAgICByLnJlZnJlc2hMaXN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgaXNSYW5rT3BlbigpIHtcbiAgICB2YXIgdCwgZTtcbiAgICByZXR1cm4gISF0aGlzLl9yYW5rVHJhaXQgJiYgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpID4gKChudWxsID09PSAoZSA9ICh0ID0gdGhpcy5fcmFua1RyYWl0KS5nZXRMaW1pdExldmVsKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmNhbGwodCkpIHx8IDApO1xuICB9XG59Il19