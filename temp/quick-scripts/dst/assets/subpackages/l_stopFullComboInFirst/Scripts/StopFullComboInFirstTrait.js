
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_stopFullComboInFirst/Scripts/StopFullComboInFirstTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7398BlDGlMcI5Lu7+g7dyu', 'StopFullComboInFirstTrait');
// subpackages/l_stopFullComboInFirst/Scripts/StopFullComboInFirstTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var StopFullComboInFirstTrait = /** @class */ (function (_super) {
    __extends(StopFullComboInFirstTrait, _super);
    function StopFullComboInFirstTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isMainLineFirstLevel = false;
        return _this;
    }
    StopFullComboInFirstTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    StopFullComboInFirstTrait.prototype.isMainLineFirstLevel = function () {
        return this._isMainLineFirstLevel;
    };
    StopFullComboInFirstTrait.prototype.onInitViewBhv_crtTls = function (t, e) {
        var r, n, i, o = t.ins, a = (null == o ? void 0 : o.context) || (null == o ? void 0 : o._context), l = false, c = null === (n = null === (r = null == a ? void 0 : a.getTileMapObject) || void 0 === r ? void 0 : r.call(a)) || void 0 === n ? void 0 : n.gameContext;
        if ((null == c ? void 0 : c.gameType) === GameTypeEnums_1.MjGameType.Normal) {
            var p = null === (i = null == c ? void 0 : c.getGameData) || void 0 === i ? void 0 : i.call(c), f = 1;
            if ("function" == typeof (null == p ? void 0 : p.getCurrentLevelId)) {
                f = p.getCurrentLevelId();
            }
            else {
                "function" == typeof (null == p ? void 0 : p.getLevelId) && (f = p.getLevelId());
            }
            if (1 === f) {
                l = true;
                ExtractTool_1.default.getInstance().isFixedLevel(1) || (l = false);
            }
        }
        this._isMainLineFirstLevel = l;
        e();
    };
    StopFullComboInFirstTrait.prototype.onFullComboChk_canFullCb = function (t, e) {
        if (this.isMainLineFirstLevel()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            e();
        }
    };
    StopFullComboInFirstTrait.prototype.onRwdComboChk_sTriNow = function (t, e) {
        if (this.isMainLineFirstLevel()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            e();
        }
    };
    StopFullComboInFirstTrait.prototype.onMotivWdsChk_canShow = function (t, e) {
        if (this.isMainLineFirstLevel()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            e();
        }
    };
    StopFullComboInFirstTrait.prototype.onComboChk_canShowCombo = function (t, e) {
        if (this.isMainLineFirstLevel()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            e();
        }
    };
    StopFullComboInFirstTrait.prototype.onDianZanTt_checkDZSpecial = function (t, e) {
        if (this.isMainLineFirstLevel()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            e();
        }
    };
    StopFullComboInFirstTrait.traitKey = "StopFullComboInFirst";
    StopFullComboInFirstTrait = __decorate([
        mj.trait,
        mj.class("StopFullComboInFirstTrait")
    ], StopFullComboInFirstTrait);
    return StopFullComboInFirstTrait;
}(Trait_1.default));
exports.default = StopFullComboInFirstTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3N0b3BGdWxsQ29tYm9JbkZpcnN0L1NjcmlwdHMvU3RvcEZ1bGxDb21ib0luRmlyc3RUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4Rix3RkFBb0Y7QUFDcEYsaUZBQTRFO0FBRzVFO0lBQXVELDZDQUFLO0lBQTVEO1FBQUEscUVBd0ZDO1FBdkZDLDJCQUFxQixHQUFHLEtBQUssQ0FBQzs7SUF1RmhDLENBQUM7SUFyRkMsMENBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHdEQUFvQixHQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7SUFDRCx3REFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDVCxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFDekUsQ0FBQyxHQUFHLEtBQUssRUFDVCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFL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QW9CLEVBQUUsRUFBRTtZQUMvQixDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELDhEQUEwQixHQUExQixVQUEyQixDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO1lBQy9CLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBckZNLGtDQUFRLEdBQUcsc0JBQXNCLENBQUM7SUFGdEIseUJBQXlCO1FBRjdDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztPQUNqQix5QkFBeUIsQ0F3RjdDO0lBQUQsZ0NBQUM7Q0F4RkQsQUF3RkMsQ0F4RnNELGVBQUssR0F3RjNEO2tCQXhGb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IEV4dHJhY3RUb29sIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdFRvb2wnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJTdG9wRnVsbENvbWJvSW5GaXJzdFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9wRnVsbENvbWJvSW5GaXJzdFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfaXNNYWluTGluZUZpcnN0TGV2ZWwgPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTdG9wRnVsbENvbWJvSW5GaXJzdFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgaXNNYWluTGluZUZpcnN0TGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTWFpbkxpbmVGaXJzdExldmVsO1xuICB9XG4gIG9uSW5pdFZpZXdCaHZfY3J0VGxzKHQsIGUpIHtcbiAgICB2YXIgcixcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgbyA9IHQuaW5zLFxuICAgICAgYSA9IChudWxsID09IG8gPyB2b2lkIDAgOiBvLmNvbnRleHQpIHx8IChudWxsID09IG8gPyB2b2lkIDAgOiBvLl9jb250ZXh0KSxcbiAgICAgIGwgPSBmYWxzZSxcbiAgICAgIGMgPSBudWxsID09PSAobiA9IG51bGwgPT09IChyID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYS5nZXRUaWxlTWFwT2JqZWN0KSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmNhbGwoYSkpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uZ2FtZUNvbnRleHQ7XG4gICAgaWYgKChudWxsID09IGMgPyB2b2lkIDAgOiBjLmdhbWVUeXBlKSA9PT0gTWpHYW1lVHlwZS5Ob3JtYWwpIHtcbiAgICAgIHZhciBwID0gbnVsbCA9PT0gKGkgPSBudWxsID09IGMgPyB2b2lkIDAgOiBjLmdldEdhbWVEYXRhKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmNhbGwoYyksXG4gICAgICAgIGYgPSAxO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgKG51bGwgPT0gcCA/IHZvaWQgMCA6IHAuZ2V0Q3VycmVudExldmVsSWQpKSB7XG4gICAgICAgIGYgPSBwLmdldEN1cnJlbnRMZXZlbElkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIChudWxsID09IHAgPyB2b2lkIDAgOiBwLmdldExldmVsSWQpICYmIChmID0gcC5nZXRMZXZlbElkKCkpO1xuICAgICAgfVxuICAgICAgaWYgKDEgPT09IGYpIHtcbiAgICAgICAgbCA9IHRydWU7XG4gICAgICAgIEV4dHJhY3RUb29sLmdldEluc3RhbmNlKCkuaXNGaXhlZExldmVsKDEpIHx8IChsID0gZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pc01haW5MaW5lRmlyc3RMZXZlbCA9IGw7XG4gICAgZSgpO1xuICB9XG4gIG9uRnVsbENvbWJvQ2hrX2NhbkZ1bGxDYih0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNNYWluTGluZUZpcnN0TGV2ZWwoKSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25Sd2RDb21ib0Noa19zVHJpTm93KHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc01haW5MaW5lRmlyc3RMZXZlbCgpKSB7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbk1vdGl2V2RzQ2hrX2NhblNob3codCwgZSkge1xuICAgIGlmICh0aGlzLmlzTWFpbkxpbmVGaXJzdExldmVsKCkpIHtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uQ29tYm9DaGtfY2FuU2hvd0NvbWJvKHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc01haW5MaW5lRmlyc3RMZXZlbCgpKSB7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkRpYW5aYW5UdF9jaGVja0RaU3BlY2lhbCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNNYWluTGluZUZpcnN0TGV2ZWwoKSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbn0iXX0=