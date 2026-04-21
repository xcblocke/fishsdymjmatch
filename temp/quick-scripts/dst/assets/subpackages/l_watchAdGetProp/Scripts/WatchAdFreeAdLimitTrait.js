
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_watchAdGetProp/Scripts/WatchAdFreeAdLimitTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d3a1pvkrVLpq6ggEMCspOo', 'WatchAdFreeAdLimitTrait');
// subpackages/l_watchAdGetProp/Scripts/WatchAdFreeAdLimitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var WatchAdFreeAdLimitTrait = /** @class */ (function (_super) {
    __extends(WatchAdFreeAdLimitTrait, _super);
    function WatchAdFreeAdLimitTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pendingMode = null;
        _this._pendingAutoClose = -1;
        return _this;
    }
    WatchAdFreeAdLimitTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._pendingAutoClose = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.autoCloseTime) && void 0 !== r ? r : -1;
    };
    WatchAdFreeAdLimitTrait.prototype.onAdUnavailVw_autoCloseTime = function (t, e) {
        if (this._pendingAutoClose > 0) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: this._pendingAutoClose
            });
        }
        else {
            e();
        }
    };
    WatchAdFreeAdLimitTrait.prototype.onAdUnavailVw_ShowRetry = function (t, e) {
        if ("noRetry" !== this._pendingMode) {
            e();
        }
        else {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    WatchAdFreeAdLimitTrait.prototype.onAdUnavailVw_ShowNoNet = function (t, e) {
        if ("noRetry" !== this._pendingMode && "freebie" !== this._pendingMode) {
            e();
        }
        else {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    WatchAdFreeAdLimitTrait.prototype.onAdUnavailVw_ShowLoading = function (t, e) {
        if ("noRetry" !== this._pendingMode) {
            e();
        }
        else {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    WatchAdFreeAdLimitTrait.prototype.onAdUnavailVw_onLoad = function (t, e) {
        var r, o, i;
        if (AdManager_1.default.getInstance().checkVideoAdIsReady())
            e();
        else {
            var n = t.ins, a = null === (o = null === (r = n.node) || void 0 === r ? void 0 : r.getChildByName) || void 0 === o ? void 0 : o.call(r, "content_node");
            if (a) {
                if ("noRetry" === this._pendingMode) {
                    this._hideBtns(a, ["btn_retry", "btn_noNet", "btn_loading"]);
                    var s = a.getChildByName("btn_cancel");
                    s && cc.isValid(s) && s.setPosition(s.position.x, -221);
                    var c = null === (i = n.node) || void 0 === i ? void 0 : i.getChildByName("bg_spr");
                    c && cc.isValid(c) && (c.height = 820);
                }
                else
                    "freebie" === this._pendingMode && this._hideBtns(a, ["btn_noNet", "btn_loading"]);
                e();
            }
            else
                e();
        }
    };
    WatchAdFreeAdLimitTrait.prototype._hideBtns = function (t, e) {
        var r, o;
        try {
            for (var i = __values(e), n = i.next(); !n.done; n = i.next()) {
                var s = n.value, c = t.getChildByName(s);
                c && cc.isValid(c) && (c.active = false);
            }
        }
        catch (t) {
            r = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (o = i.return) && o.call(i);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
    };
    WatchAdFreeAdLimitTrait.prototype.onWatchAdCtrl_playAd = function (t, e) {
        var r;
        if (AdManager_1.default.getInstance().checkVideoAdIsReady())
            e();
        else {
            var o = null === (r = this._traitData) || void 0 === r ? void 0 : r.tag, i = t.ins, n = i.getPropType();
            if (1 !== o && 2 !== o) {
                if (3 === o) {
                    this._pendingMode = "noRetry";
                    i.close();
                    ControllerManager_1.default.getInstance().pushViewByController("AdUnavailableController", {
                        isShowAction: true
                    });
                }
                else {
                    if (4 !== o) {
                        e();
                        return;
                    }
                    this._pendingMode = "noRetry";
                    i.close();
                    ControllerManager_1.default.getInstance().pushViewByController("AdUnavailableController", {
                        isShowAction: true
                    });
                }
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
            else {
                this._handleDailyLimitTag(o, n, i);
                e();
            }
        }
    };
    WatchAdFreeAdLimitTrait.prototype._handleDailyLimitTag = function (t, e, r) {
        var o = this._getTodayStr(), i = e + "_" + (2 === t ? this._getModeKey() : "all");
        if (this._getFreebieUsed(i) !== o) {
            this._setFreebieUsed(i, o);
            this._pendingMode = "freebie";
        }
        else
            this._pendingMode = "noRetry";
        r.close();
        ControllerManager_1.default.getInstance().pushViewByController("AdUnavailableController", {
            isShowAction: true
        });
    };
    WatchAdFreeAdLimitTrait.prototype._getFreebieUsed = function (t) {
        var e, r;
        return null !== (r = null === (e = this.localData.freebieUsed) || void 0 === e ? void 0 : e[t]) && void 0 !== r ? r : null;
    };
    WatchAdFreeAdLimitTrait.prototype._setFreebieUsed = function (t, e) {
        this.localData.freebieUsed || (this.localData.freebieUsed = {});
        this.localData.freebieUsed[t] = e;
        this.localData.freebieUsed = this.localData.freebieUsed;
    };
    WatchAdFreeAdLimitTrait.prototype._getTodayStr = function () {
        var t = new Date();
        return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
    };
    WatchAdFreeAdLimitTrait.prototype._getModeKey = function () {
        var t = UserModel_1.default.getInstance().getCurrentGameType();
        return t ? String(t) : "unknown";
    };
    WatchAdFreeAdLimitTrait.traitKey = "WatchAdFreeAdLimit";
    WatchAdFreeAdLimitTrait = __decorate([
        mj.trait,
        mj.class("WatchAdFreeAdLimitTrait")
    ], WatchAdFreeAdLimitTrait);
    return WatchAdFreeAdLimitTrait;
}(Trait_1.default));
exports.default = WatchAdFreeAdLimitTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dhdGNoQWRHZXRQcm9wL1NjcmlwdHMvV2F0Y2hBZEZyZWVBZExpbWl0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsZ0VBQTJEO0FBQzNELDBGQUFxRjtBQUNyRixzRUFBaUU7QUFHakU7SUFBcUQsMkNBQUs7SUFBMUQ7UUFBQSxxRUFzSkM7UUFySkMsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsdUJBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBb0p6QixDQUFDO0lBbEpDLHdDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdJLENBQUM7SUFDRCw2REFBMkIsR0FBM0IsVUFBNEIsQ0FBQyxFQUFFLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUI7YUFDbEMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxD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QUNELGlEQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7SUFDMUQsQ0FBQztJQUNELDhDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hFLENBQUM7SUFDRCw2Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBbEpNLGdDQUFRLEdBQUcsb0JBQW9CLENBQUM7SUFIcEIsdUJBQXVCO1FBRjNDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztPQUNmLHVCQUF1QixDQXNKM0M7SUFBRCw4QkFBQztDQXRKRCxBQXNKQyxDQXRKb0QsZUFBSyxHQXNKekQ7a0JBdEpvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIldhdGNoQWRGcmVlQWRMaW1pdFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXRjaEFkRnJlZUFkTGltaXRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3BlbmRpbmdNb2RlID0gbnVsbDtcbiAgX3BlbmRpbmdBdXRvQ2xvc2UgPSAtMTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJXYXRjaEFkRnJlZUFkTGltaXRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3BlbmRpbmdBdXRvQ2xvc2UgPSBudWxsICE9PSAociA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmF1dG9DbG9zZVRpbWUpICYmIHZvaWQgMCAhPT0gciA/IHIgOiAtMTtcbiAgfVxuICBvbkFkVW5hdmFpbFZ3X2F1dG9DbG9zZVRpbWUodCwgZSkge1xuICAgIGlmICh0aGlzLl9wZW5kaW5nQXV0b0Nsb3NlID4gMCkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLl9wZW5kaW5nQXV0b0Nsb3NlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkFkVW5hdmFpbFZ3X1Nob3dSZXRyeSh0LCBlKSB7XG4gICAgaWYgKFwibm9SZXRyeVwiICE9PSB0aGlzLl9wZW5kaW5nTW9kZSkge1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb25BZFVuYXZhaWxWd19TaG93Tm9OZXQodCwgZSkge1xuICAgIGlmIChcIm5vUmV0cnlcIiAhPT0gdGhpcy5fcGVuZGluZ01vZGUgJiYgXCJmcmVlYmllXCIgIT09IHRoaXMuX3BlbmRpbmdNb2RlKSB7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBvbkFkVW5hdmFpbFZ3X1Nob3dMb2FkaW5nKHQsIGUpIHtcbiAgICBpZiAoXCJub1JldHJ5XCIgIT09IHRoaXMuX3BlbmRpbmdNb2RlKSB7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBvbkFkVW5hdmFpbFZ3X29uTG9hZCh0LCBlKSB7XG4gICAgdmFyIHIsIG8sIGk7XG4gICAgaWYgKEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNoZWNrVmlkZW9BZElzUmVhZHkoKSkgZSgpO2Vsc2Uge1xuICAgICAgdmFyIG4gPSB0LmlucyxcbiAgICAgICAgYSA9IG51bGwgPT09IChvID0gbnVsbCA9PT0gKHIgPSBuLm5vZGUpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuZ2V0Q2hpbGRCeU5hbWUpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uY2FsbChyLCBcImNvbnRlbnRfbm9kZVwiKTtcbiAgICAgIGlmIChhKSB7XG4gICAgICAgIGlmIChcIm5vUmV0cnlcIiA9PT0gdGhpcy5fcGVuZGluZ01vZGUpIHtcbiAgICAgICAgICB0aGlzLl9oaWRlQnRucyhhLCBbXCJidG5fcmV0cnlcIiwgXCJidG5fbm9OZXRcIiwgXCJidG5fbG9hZGluZ1wiXSk7XG4gICAgICAgICAgdmFyIHMgPSBhLmdldENoaWxkQnlOYW1lKFwiYnRuX2NhbmNlbFwiKTtcbiAgICAgICAgICBzICYmIGNjLmlzVmFsaWQocykgJiYgcy5zZXRQb3NpdGlvbihzLnBvc2l0aW9uLngsIC0yMjEpO1xuICAgICAgICAgIHZhciBjID0gbnVsbCA9PT0gKGkgPSBuLm5vZGUpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2V0Q2hpbGRCeU5hbWUoXCJiZ19zcHJcIik7XG4gICAgICAgICAgYyAmJiBjYy5pc1ZhbGlkKGMpICYmIChjLmhlaWdodCA9IDgyMCk7XG4gICAgICAgIH0gZWxzZSBcImZyZWViaWVcIiA9PT0gdGhpcy5fcGVuZGluZ01vZGUgJiYgdGhpcy5faGlkZUJ0bnMoYSwgW1wiYnRuX25vTmV0XCIsIFwiYnRuX2xvYWRpbmdcIl0pO1xuICAgICAgICBlKCk7XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH1cbiAgfVxuICBfaGlkZUJ0bnModCwgZSkge1xuICAgIHZhciByLCBvO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMoZSksIG4gPSBpLm5leHQoKTsgIW4uZG9uZTsgbiA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gbi52YWx1ZSxcbiAgICAgICAgICBjID0gdC5nZXRDaGlsZEJ5TmFtZShzKTtcbiAgICAgICAgYyAmJiBjYy5pc1ZhbGlkKGMpICYmIChjLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICByID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbiAmJiAhbi5kb25lICYmIChvID0gaS5yZXR1cm4pICYmIG8uY2FsbChpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbldhdGNoQWRDdHJsX3BsYXlBZCh0LCBlKSB7XG4gICAgdmFyIHI7XG4gICAgaWYgKEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNoZWNrVmlkZW9BZElzUmVhZHkoKSkgZSgpO2Vsc2Uge1xuICAgICAgdmFyIG8gPSBudWxsID09PSAociA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci50YWcsXG4gICAgICAgIGkgPSB0LmlucyxcbiAgICAgICAgbiA9IGkuZ2V0UHJvcFR5cGUoKTtcbiAgICAgIGlmICgxICE9PSBvICYmIDIgIT09IG8pIHtcbiAgICAgICAgaWYgKDMgPT09IG8pIHtcbiAgICAgICAgICB0aGlzLl9wZW5kaW5nTW9kZSA9IFwibm9SZXRyeVwiO1xuICAgICAgICAgIGkuY2xvc2UoKTtcbiAgICAgICAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiQWRVbmF2YWlsYWJsZUNvbnRyb2xsZXJcIiwge1xuICAgICAgICAgICAgaXNTaG93QWN0aW9uOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKDQgIT09IG8pIHtcbiAgICAgICAgICAgIGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fcGVuZGluZ01vZGUgPSBcIm5vUmV0cnlcIjtcbiAgICAgICAgICBpLmNsb3NlKCk7XG4gICAgICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIkFkVW5hdmFpbGFibGVDb250cm9sbGVyXCIsIHtcbiAgICAgICAgICAgIGlzU2hvd0FjdGlvbjogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGUoe1xuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGFuZGxlRGFpbHlMaW1pdFRhZyhvLCBuLCBpKTtcbiAgICAgICAgZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBfaGFuZGxlRGFpbHlMaW1pdFRhZyh0LCBlLCByKSB7XG4gICAgdmFyIG8gPSB0aGlzLl9nZXRUb2RheVN0cigpLFxuICAgICAgaSA9IGUgKyBcIl9cIiArICgyID09PSB0ID8gdGhpcy5fZ2V0TW9kZUtleSgpIDogXCJhbGxcIik7XG4gICAgaWYgKHRoaXMuX2dldEZyZWViaWVVc2VkKGkpICE9PSBvKSB7XG4gICAgICB0aGlzLl9zZXRGcmVlYmllVXNlZChpLCBvKTtcbiAgICAgIHRoaXMuX3BlbmRpbmdNb2RlID0gXCJmcmVlYmllXCI7XG4gICAgfSBlbHNlIHRoaXMuX3BlbmRpbmdNb2RlID0gXCJub1JldHJ5XCI7XG4gICAgci5jbG9zZSgpO1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJBZFVuYXZhaWxhYmxlQ29udHJvbGxlclwiLCB7XG4gICAgICBpc1Nob3dBY3Rpb246IHRydWVcbiAgICB9KTtcbiAgfVxuICBfZ2V0RnJlZWJpZVVzZWQodCkge1xuICAgIHZhciBlLCByO1xuICAgIHJldHVybiBudWxsICE9PSAociA9IG51bGwgPT09IChlID0gdGhpcy5sb2NhbERhdGEuZnJlZWJpZVVzZWQpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGVbdF0pICYmIHZvaWQgMCAhPT0gciA/IHIgOiBudWxsO1xuICB9XG4gIF9zZXRGcmVlYmllVXNlZCh0LCBlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuZnJlZWJpZVVzZWQgfHwgKHRoaXMubG9jYWxEYXRhLmZyZWViaWVVc2VkID0ge30pO1xuICAgIHRoaXMubG9jYWxEYXRhLmZyZWViaWVVc2VkW3RdID0gZTtcbiAgICB0aGlzLmxvY2FsRGF0YS5mcmVlYmllVXNlZCA9IHRoaXMubG9jYWxEYXRhLmZyZWViaWVVc2VkO1xuICB9XG4gIF9nZXRUb2RheVN0cigpIHtcbiAgICB2YXIgdCA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIHQuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgKHQuZ2V0TW9udGgoKSArIDEpICsgXCItXCIgKyB0LmdldERhdGUoKTtcbiAgfVxuICBfZ2V0TW9kZUtleSgpIHtcbiAgICB2YXIgdCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgIHJldHVybiB0ID8gU3RyaW5nKHQpIDogXCJ1bmtub3duXCI7XG4gIH1cbn0iXX0=