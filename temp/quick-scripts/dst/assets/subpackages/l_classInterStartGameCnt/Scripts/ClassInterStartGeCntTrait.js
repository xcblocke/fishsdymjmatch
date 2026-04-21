
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classInterStartGameCnt/Scripts/ClassInterStartGeCntTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b0ebEcNWVPbZW1FPoBkN1I', 'ClassInterStartGeCntTrait');
// subpackages/l_classInterStartGameCnt/Scripts/ClassInterStartGeCntTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ClassInterStartGeCntTrait = /** @class */ (function (_super) {
    __extends(ClassInterStartGeCntTrait, _super);
    function ClassInterStartGeCntTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._skipAdGameCount = 2;
        return _this;
    }
    ClassInterStartGeCntTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this._traitData;
        this._skipAdGameCount = (null == e ? void 0 : e.skipAdGameCount) || 2;
        void 0 !== this.localData.playedGameCount && null !== this.localData.playedGameCount && "" !== this.localData.playedGameCount || (this.localData.playedGameCount = 0);
    };
    ClassInterStartGeCntTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Classic) {
            if (this.localData.playedGameCount <= this._skipAdGameCount) {
                e({
                    returnVal: false,
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    ClassInterStartGeCntTrait.prototype.onGsListener_onNewGame = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Classic) {
            this.localData.playedGameCount++;
            this.localData = this.localData;
        }
        e();
    };
    ClassInterStartGeCntTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Classic) {
            this.localData.playedGameCount++;
            this.localData = this.localData;
        }
        e();
    };
    ClassInterStartGeCntTrait.traitKey = "ClassInterStartGeCnt";
    ClassInterStartGeCntTrait = __decorate([
        mj.trait,
        mj.class("ClassInterStartGeCntTrait")
    ], ClassInterStartGeCntTrait);
    return ClassInterStartGeCntTrait;
}(Trait_1.default));
exports.default = ClassInterStartGeCntTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzSW50ZXJTdGFydEdhbWVDbnQvU2NyaXB0cy9DbGFzc0ludGVyU3RhcnRHZUNudFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHdGQUFvRjtBQUNwRixzRUFBaUU7QUFHakU7SUFBdUQsNkNBQUs7SUFBNUQ7UUFBQSxxRUFvQ0M7UUFuQ0Msc0JBQWdCLEdBQUcsQ0FBQyxDQUFDOztJQW1DdkIsQ0FBQztJQWpDQywwQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsSUFBSSxFQUFFLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4SyxDQUFDO0lBQ0Qsc0RBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3ZFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUMzRCxDQUFDLENBQUM7b0JBQ0EsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCLE9BQU8sRUFBRSxJQUFJO29CQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2lCQUMzQyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxDQUFDLEVBQUUsQ0FBQzthQUNMO1NBQ0Y7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsMERBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ2pDO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsNkRBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ2pDO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBakNNLGtDQUFRLEdBQUcsc0JBQXNCLENBQUM7SUFGdEIseUJBQXlCO1FBRjdDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztPQUNqQix5QkFBeUIsQ0FvQzdDO0lBQUQsZ0NBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ3NELGVBQUssR0FvQzNEO2tCQXBDb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2xhc3NJbnRlclN0YXJ0R2VDbnRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhc3NJbnRlclN0YXJ0R2VDbnRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3NraXBBZEdhbWVDb3VudCA9IDI7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2xhc3NJbnRlclN0YXJ0R2VDbnRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciBlID0gdGhpcy5fdHJhaXREYXRhO1xuICAgIHRoaXMuX3NraXBBZEdhbWVDb3VudCA9IChudWxsID09IGUgPyB2b2lkIDAgOiBlLnNraXBBZEdhbWVDb3VudCkgfHwgMjtcbiAgICB2b2lkIDAgIT09IHRoaXMubG9jYWxEYXRhLnBsYXllZEdhbWVDb3VudCAmJiBudWxsICE9PSB0aGlzLmxvY2FsRGF0YS5wbGF5ZWRHYW1lQ291bnQgJiYgXCJcIiAhPT0gdGhpcy5sb2NhbERhdGEucGxheWVkR2FtZUNvdW50IHx8ICh0aGlzLmxvY2FsRGF0YS5wbGF5ZWRHYW1lQ291bnQgPSAwKTtcbiAgfVxuICBvbkFkTWdyX2Noa0ludGVyQWQodCwgZSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICBpZiAodGhpcy5sb2NhbERhdGEucGxheWVkR2FtZUNvdW50IDw9IHRoaXMuX3NraXBBZEdhbWVDb3VudCkge1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5WYWw6IGZhbHNlLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uTmV3R2FtZSh0LCBlKSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnBsYXllZEdhbWVDb3VudCsrO1xuICAgICAgdGhpcy5sb2NhbERhdGEgPSB0aGlzLmxvY2FsRGF0YTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vblJlcGxheUdhbWUodCwgZSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5wbGF5ZWRHYW1lQ291bnQrKztcbiAgICAgIHRoaXMubG9jYWxEYXRhID0gdGhpcy5sb2NhbERhdGE7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxufSJdfQ==