
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_languageSelector/Scripts/UILanguageLockItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2655flc/+NME6uPMZl0gjLe', 'UILanguageLockItem');
// subpackages/l_languageSelector/Scripts/UILanguageLockItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UILanguageLockItem = void 0;
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var UILanguageItem_1 = require("./UILanguageItem");
var UILanguageLockItem = /** @class */ (function (_super) {
    __extends(UILanguageLockItem, _super);
    function UILanguageLockItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lockNode = null;
        _this._imgMask = null;
        _this._lockNode2 = null;
        _this._imgMask2 = null;
        _this._locked = false;
        _this._originalOnClick = null;
        return _this;
    }
    UILanguageLockItem.prototype.uiOnLoad = function () {
        var e, o, n, a, i, r, l, c;
        _super.prototype.uiOnLoad.call(this);
        if (cc.isValid(this._cellUI)) {
            this._lockNode = null === (o = null === (e = this._cellUI.getChildByName("btn_normal")) || void 0 === e ? void 0 : e.getChildByName("bg")) || void 0 === o ? void 0 : o.getChildByName("img_lock");
            this._imgMask = null === (a = null === (n = this._cellUI.getChildByName("btn_normal")) || void 0 === n ? void 0 : n.getChildByName("bg")) || void 0 === a ? void 0 : a.getChildByName("img_mask");
            this._lockNode2 = null === (r = null === (i = this._cellUI.getChildByName("btn_selected")) || void 0 === i ? void 0 : i.getChildByName("bg")) || void 0 === r ? void 0 : r.getChildByName("img_lock2");
            this._imgMask2 = null === (c = null === (l = this._cellUI.getChildByName("btn_selected")) || void 0 === l ? void 0 : l.getChildByName("bg")) || void 0 === c ? void 0 : c.getChildByName("img_mask2");
        }
    };
    UILanguageLockItem.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
        this._refreshLockState();
    };
    UILanguageLockItem.prototype.setOnClick = function (e) {
        var o = this;
        this._originalOnClick = e;
        _super.prototype.setOnClick.call(this, function (t) {
            if (o._locked) {
                o._onLockedClick(t);
            }
            else {
                e(t);
            }
        });
    };
    UILanguageLockItem.prototype._refreshLockState = function () {
        this._locked = this._checkIsLocked();
        if (cc.isValid(this._lockNode)) {
            this._lockNode.active = this._locked;
            this._lockNode.opacity = 255;
            this._lockNode.scale = 1;
            this._lockNode2.active = this._locked;
            this._lockNode2.opacity = 255;
            this._lockNode2.scale = 1;
            this._imgMask.active = this._locked;
            this._imgMask.opacity = 255;
            this._imgMask.width = 670;
            this._imgMask2.active = this._locked;
            this._imgMask2.opacity = 255;
            this._imgMask2.width = 670;
        }
    };
    UILanguageLockItem.prototype._checkIsLocked = function () {
        var t;
        if (!this._data)
            return false;
        var e = mj.getClassByName("ChangeBaseCardByLanTrait"), o = null === (t = null == e ? void 0 : e.getInstance) || void 0 === t ? void 0 : t.call(e);
        if (!o)
            return false;
        var n = o.getBundleByLang(this._data.code);
        return !o.getUnlockedSkins().includes(n);
    };
    UILanguageLockItem.prototype._onLockedClick = function (t) {
        var e, o, n = this;
        if (this._data) {
            var a = mj.getClassByName("ChangeBaseCardByLanTrait");
            (null === (e = null == a ? void 0 : a.getInstance) || void 0 === e ? void 0 : e.call(a)) && ControllerManager_1.default.getInstance().pushViewByController("UILanguageLockController", {
                isGlobal: true,
                bundleName: "r_changeBaseCardByLan",
                code: null === (o = this._data.code) || void 0 === o ? void 0 : o.toLowerCase(),
                onSuccess: function () {
                    n._locked = false;
                    n._playUnlockEffect(function () {
                        cc.tween(n._imgMask).to(0.8, {
                            width: 0
                        }).call(function () {
                            var e;
                            null === (e = n._originalOnClick) || void 0 === e || e.call(n, t);
                        }).start();
                        cc.tween(n._imgMask2).to(0.8, {
                            width: 0
                        }).start();
                    });
                }
            });
        }
    };
    UILanguageLockItem.prototype._playUnlockEffect = function (t) {
        cc.isValid(this._lockNode) && (this._lockNode.active = false);
        cc.isValid(this._lockNode2) && (this._lockNode2.active = false);
        if (cc.isValid(this._cellUI)) {
            var e = cc.Vec2.ZERO;
            if (cc.isValid(this._lockNode)) {
                var o = this._lockNode.convertToWorldSpaceAR(cc.Vec2.ZERO);
                e = this._cellUI.convertToNodeSpaceAR(o);
            }
            var n = BaseSpine_1.default.create("spine/game_kaisuo1", "in", 1, function () {
                null == t || t();
            }, true, "r_changeBaseCardByLan");
            n.node.setPosition(e);
            n.node.parent = this._cellUI;
            VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.Strong);
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.SkinUnlock);
        }
        else
            null == t || t();
    };
    UILanguageLockItem.prefabUrl = "prefab/UILanguageLockItem";
    UILanguageLockItem.bundleName = "r_changeBaseCardByLan";
    UILanguageLockItem = __decorate([
        mj.class
    ], UILanguageLockItem);
    return UILanguageLockItem;
}(UILanguageItem_1.UILanguageItem));
exports.UILanguageLockItem = UILanguageLockItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xhbmd1YWdlU2VsZWN0b3IvU2NyaXB0cy9VSUxhbmd1YWdlTG9ja0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBa0Y7QUFDbEYsMEZBQXFGO0FBQ3JGLHlFQUFvRTtBQUNwRSx3RkFBeUc7QUFDekcsbURBQWtEO0FBRWxEO0lBQXdDLHNDQUFjO0lBQXREO1FBQUEscUVBeUdDO1FBeEdDLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsc0JBQWdCLEdBQUcsSUFBSSxDQUFDOztJQW1HMUIsQ0FBQztJQWhHQyxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLGlCQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuTSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsTSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN2TSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFD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LG9CQUFvQixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7Z0JBQ3RELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxFQUFFLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0Isd0JBQWMsQ0FBQyxjQUFjLENBQUMsaUNBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkQsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsd0JBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNqRDs7WUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFqR00sNEJBQVMsR0FBRywyQkFBMkIsQ0FBQztJQUN4Qyw2QkFBVSxHQUFHLHVCQUF1QixDQUFDO0lBUmpDLGtCQUFrQjtRQUQ5QixFQUFFLENBQUMsS0FBSztPQUNJLGtCQUFrQixDQXlHOUI7SUFBRCx5QkFBQztDQXpHRCxBQXlHQyxDQXpHdUMsK0JBQWMsR0F5R3JEO0FBekdZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgVmlicmF0ZU1hbmFnZXIsIHsgRVZpYnJhdGVTdHJlbmd0aCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS92aWJyYXRlL1ZpYnJhdGVNYW5hZ2VyJztcbmltcG9ydCB7IFVJTGFuZ3VhZ2VJdGVtIH0gZnJvbSAnLi9VSUxhbmd1YWdlSXRlbSc7XG5AbWouY2xhc3NcbmV4cG9ydCBjbGFzcyBVSUxhbmd1YWdlTG9ja0l0ZW0gZXh0ZW5kcyBVSUxhbmd1YWdlSXRlbSB7XG4gIF9sb2NrTm9kZSA9IG51bGw7XG4gIF9pbWdNYXNrID0gbnVsbDtcbiAgX2xvY2tOb2RlMiA9IG51bGw7XG4gIF9pbWdNYXNrMiA9IG51bGw7XG4gIF9sb2NrZWQgPSBmYWxzZTtcbiAgX29yaWdpbmFsT25DbGljayA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYi9VSUxhbmd1YWdlTG9ja0l0ZW1cIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcInJfY2hhbmdlQmFzZUNhcmRCeUxhblwiO1xuICB1aU9uTG9hZCgpIHtcbiAgICB2YXIgZSwgbywgbiwgYSwgaSwgciwgbCwgYztcbiAgICBzdXBlci51aU9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX2NlbGxVSSkpIHtcbiAgICAgIHRoaXMuX2xvY2tOb2RlID0gbnVsbCA9PT0gKG8gPSBudWxsID09PSAoZSA9IHRoaXMuX2NlbGxVSS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9ub3JtYWxcIikpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5nZXRDaGlsZEJ5TmFtZShcImltZ19sb2NrXCIpO1xuICAgICAgdGhpcy5faW1nTWFzayA9IG51bGwgPT09IChhID0gbnVsbCA9PT0gKG4gPSB0aGlzLl9jZWxsVUkuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fbm9ybWFsXCIpKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmdldENoaWxkQnlOYW1lKFwiYmdcIikpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdfbWFza1wiKTtcbiAgICAgIHRoaXMuX2xvY2tOb2RlMiA9IG51bGwgPT09IChyID0gbnVsbCA9PT0gKGkgPSB0aGlzLl9jZWxsVUkuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fc2VsZWN0ZWRcIikpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nZXRDaGlsZEJ5TmFtZShcImltZ19sb2NrMlwiKTtcbiAgICAgIHRoaXMuX2ltZ01hc2syID0gbnVsbCA9PT0gKGMgPSBudWxsID09PSAobCA9IHRoaXMuX2NlbGxVSS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9zZWxlY3RlZFwiKSkgfHwgdm9pZCAwID09PSBsID8gdm9pZCAwIDogbC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpKSB8fCB2b2lkIDAgPT09IGMgPyB2b2lkIDAgOiBjLmdldENoaWxkQnlOYW1lKFwiaW1nX21hc2syXCIpO1xuICAgIH1cbiAgfVxuICB1cGRhdGVVSSgpIHtcbiAgICBzdXBlci51cGRhdGVVSS5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3JlZnJlc2hMb2NrU3RhdGUoKTtcbiAgfVxuICBzZXRPbkNsaWNrKGUpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgdGhpcy5fb3JpZ2luYWxPbkNsaWNrID0gZTtcbiAgICBzdXBlci5zZXRPbkNsaWNrLmNhbGwodGhpcywgZnVuY3Rpb24gKHQpIHtcbiAgICAgIGlmIChvLl9sb2NrZWQpIHtcbiAgICAgICAgby5fb25Mb2NrZWRDbGljayh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUodCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgX3JlZnJlc2hMb2NrU3RhdGUoKSB7XG4gICAgdGhpcy5fbG9ja2VkID0gdGhpcy5fY2hlY2tJc0xvY2tlZCgpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX2xvY2tOb2RlKSkge1xuICAgICAgdGhpcy5fbG9ja05vZGUuYWN0aXZlID0gdGhpcy5fbG9ja2VkO1xuICAgICAgdGhpcy5fbG9ja05vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgIHRoaXMuX2xvY2tOb2RlLnNjYWxlID0gMTtcbiAgICAgIHRoaXMuX2xvY2tOb2RlMi5hY3RpdmUgPSB0aGlzLl9sb2NrZWQ7XG4gICAgICB0aGlzLl9sb2NrTm9kZTIub3BhY2l0eSA9IDI1NTtcbiAgICAgIHRoaXMuX2xvY2tOb2RlMi5zY2FsZSA9IDE7XG4gICAgICB0aGlzLl9pbWdNYXNrLmFjdGl2ZSA9IHRoaXMuX2xvY2tlZDtcbiAgICAgIHRoaXMuX2ltZ01hc2sub3BhY2l0eSA9IDI1NTtcbiAgICAgIHRoaXMuX2ltZ01hc2sud2lkdGggPSA2NzA7XG4gICAgICB0aGlzLl9pbWdNYXNrMi5hY3RpdmUgPSB0aGlzLl9sb2NrZWQ7XG4gICAgICB0aGlzLl9pbWdNYXNrMi5vcGFjaXR5ID0gMjU1O1xuICAgICAgdGhpcy5faW1nTWFzazIud2lkdGggPSA2NzA7XG4gICAgfVxuICB9XG4gIF9jaGVja0lzTG9ja2VkKCkge1xuICAgIHZhciB0O1xuICAgIGlmICghdGhpcy5fZGF0YSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBlID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJDaGFuZ2VCYXNlQ2FyZEJ5TGFuVHJhaXRcIiksXG4gICAgICBvID0gbnVsbCA9PT0gKHQgPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLmdldEluc3RhbmNlKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmNhbGwoZSk7XG4gICAgaWYgKCFvKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIG4gPSBvLmdldEJ1bmRsZUJ5TGFuZyh0aGlzLl9kYXRhLmNvZGUpO1xuICAgIHJldHVybiAhby5nZXRVbmxvY2tlZFNraW5zKCkuaW5jbHVkZXMobik7XG4gIH1cbiAgX29uTG9ja2VkQ2xpY2sodCkge1xuICAgIHZhciBlLFxuICAgICAgbyxcbiAgICAgIG4gPSB0aGlzO1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB2YXIgYSA9IG1qLmdldENsYXNzQnlOYW1lKFwiQ2hhbmdlQmFzZUNhcmRCeUxhblRyYWl0XCIpO1xuICAgICAgKG51bGwgPT09IChlID0gbnVsbCA9PSBhID8gdm9pZCAwIDogYS5nZXRJbnN0YW5jZSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5jYWxsKGEpKSAmJiBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiVUlMYW5ndWFnZUxvY2tDb250cm9sbGVyXCIsIHtcbiAgICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgICAgIGJ1bmRsZU5hbWU6IFwicl9jaGFuZ2VCYXNlQ2FyZEJ5TGFuXCIsXG4gICAgICAgIGNvZGU6IG51bGwgPT09IChvID0gdGhpcy5fZGF0YS5jb2RlKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG4uX2xvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIG4uX3BsYXlVbmxvY2tFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MudHdlZW4obi5faW1nTWFzaykudG8oMC44LCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAwXG4gICAgICAgICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICAgIG51bGwgPT09IChlID0gbi5fb3JpZ2luYWxPbkNsaWNrKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5jYWxsKG4sIHQpO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKG4uX2ltZ01hc2syKS50bygwLjgsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDBcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBfcGxheVVubG9ja0VmZmVjdCh0KSB7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9sb2NrTm9kZSkgJiYgKHRoaXMuX2xvY2tOb2RlLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuX2xvY2tOb2RlMikgJiYgKHRoaXMuX2xvY2tOb2RlMi5hY3RpdmUgPSBmYWxzZSk7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fY2VsbFVJKSkge1xuICAgICAgdmFyIGUgPSBjYy5WZWMyLlpFUk87XG4gICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9sb2NrTm9kZSkpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLl9sb2NrTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKTtcbiAgICAgICAgZSA9IHRoaXMuX2NlbGxVSS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihvKTtcbiAgICAgIH1cbiAgICAgIHZhciBuID0gQmFzZVNwaW5lLmNyZWF0ZShcInNwaW5lL2dhbWVfa2Fpc3VvMVwiLCBcImluXCIsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbnVsbCA9PSB0IHx8IHQoKTtcbiAgICAgIH0sIHRydWUsIFwicl9jaGFuZ2VCYXNlQ2FyZEJ5TGFuXCIpO1xuICAgICAgbi5ub2RlLnNldFBvc2l0aW9uKGUpO1xuICAgICAgbi5ub2RlLnBhcmVudCA9IHRoaXMuX2NlbGxVSTtcbiAgICAgIFZpYnJhdGVNYW5hZ2VyLmV4ZWN1dGVWaWJyYXRlKEVWaWJyYXRlU3RyZW5ndGguU3Ryb25nKTtcbiAgICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELlNraW5VbmxvY2spO1xuICAgIH0gZWxzZSBudWxsID09IHQgfHwgdCgpO1xuICB9XG59Il19