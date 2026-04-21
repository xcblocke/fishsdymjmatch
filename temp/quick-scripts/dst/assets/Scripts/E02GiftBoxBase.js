
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/E02GiftBoxBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b3a9qAhf9ECZIL2Q5nKr6g', 'E02GiftBoxBase');
// Scripts/E02GiftBoxBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ElementLevel_1 = require("./ElementLevel");
var TravelMapInterface_1 = require("./TravelMapInterface");
var GameUtils_1 = require("./core/simulator/util/GameUtils");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var E02GiftBoxBase = /** @class */ (function (_super) {
    __extends(E02GiftBoxBase, _super);
    function E02GiftBoxBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLabel = null;
        _this.button = null;
        _this.animNode = null;
        _this.maskNode = null;
        _this.collectSpine = null;
        _this.cardNode = null;
        _this.selectAnim = null;
        _this.selectUpAnim = null;
        return _this;
    }
    E02GiftBoxBase.prototype.uiOnLoad = function () {
        _super.prototype.uiOnLoad.call(this);
        this.selectAnim = cc.find("Element/Card/Base/DownAnim", this.node).getComponent(sp.Skeleton);
        this.selectUpAnim = cc.find("Element/Card/Base/UpAnim", this.node).getComponent(sp.Skeleton);
        this.cardNode = cc.find("Element/Card/Base", this.node);
        this.titleLabel = cc.find("Element/Card/Base/Level", this.node).getComponent(cc.Label);
        this.button = cc.find("Element/Card", this.node);
        this.animNode = cc.find("Element/Card/Base/Anim", this.node);
        this.maskNode = cc.find("Element/Card/Base/Mask", this.node);
        this.collectSpine = cc.find("Element/Card/Collect", this.node).getComponent(sp.Skeleton);
        this.addLevelBtnClick(this.button, this.onButtonClick.bind(this), {
            clickAudio: GameTypeEnums_1.EAudioID.TravelButton1
        });
    };
    E02GiftBoxBase.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
        this.titleLabel.string = "" + this._data.level;
    };
    E02GiftBoxBase.prototype.resetState = function () {
        this.collectSpine.node.active = false;
        this.selectAnim.node.active = false;
        this.cardNode.active = true;
        this.animNode.active = true;
        this.animNode.getComponent(sp.Skeleton).paused = true;
        this.selectAnim.paused = true;
        this.collectSpine.paused = true;
        this.maskNode.active = true;
        this.selectUpAnim.node.active = false;
        cc.Tween.stopAllByTarget(this.node);
    };
    E02GiftBoxBase.prototype.onLevelSelect = function () {
        this.selectAnim.node.active = true;
        this.maskNode.active = false;
        this.animNode.active = false;
        this.collectSpine.node.active = false;
        GameUtils_1.default.playSpine(this.selectAnim, "journey_map_level_big_down", true);
        this.selectUpAnim.node.active = true;
        GameUtils_1.default.playSpine(this.selectUpAnim, "journey_map_level_big_up", true);
        cc.Tween.stopAllByTarget(this.node);
        var e = cc.tween().to(0, {
            scale: 1
        }).to(0.5, {
            scale: 1.1
        }).to(0.5, {
            scale: 1
        });
        cc.tween(this.node).repeatForever(e).start();
    };
    E02GiftBoxBase.prototype.onLevelLock = function () {
        this.selectAnim.node.active = false;
        this.maskNode.active = true;
        this.animNode.active = true;
        this.collectSpine.node.active = false;
    };
    E02GiftBoxBase.prototype.onLevelUnlock = function () {
        this.cardNode.active = false;
        this.selectAnim.node.active = false;
        this.collectSpine.node.active = true;
        GameUtils_1.default.playSpine(this.collectSpine, "init", false);
    };
    E02GiftBoxBase.prototype.onLevelUnlockPass = function () {
        this._data.state = TravelMapInterface_1.EJourneyMapState.Unlocked;
        this.onLevelUnlock();
    };
    E02GiftBoxBase.prototype.badgeCollectStart = function () {
        this.cardNode.active = false;
        this.collectSpine.node.active = false;
    };
    E02GiftBoxBase.prototype.badgeCollectEnd = function () {
        var t = this;
        _super.prototype.badgeCollectEnd.call(this);
        this.cardNode.active = false;
        this.collectSpine.node.active = false;
        cc.Tween.stopAllByTarget(this.node);
        this.addBlockTouch();
        cc.tween(this.node).delay(0).call(function () {
            t.collectSpine.node.active = true;
            GameUtils_1.default.playSpine(t.collectSpine, "in", false, function () {
                t.onLevelUnlock();
            });
        }).start();
    };
    E02GiftBoxBase.prototype.onButtonClick = function () {
        this._data.state === TravelMapInterface_1.EJourneyMapState.Locked && GameUtils_1.default.playSpine(this.animNode.getComponent(sp.Skeleton), "in", false);
        this.goToTravelGame();
    };
    E02GiftBoxBase.prefabUrl = "";
    E02GiftBoxBase.size = new cc.Size(201, 270);
    E02GiftBoxBase = __decorate([
        mj.class
    ], E02GiftBoxBase);
    return E02GiftBoxBase;
}(ElementLevel_1.default));
exports.default = E02GiftBoxBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0UwMkdpZnRCb3hCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFDMUMsMkRBQXdEO0FBQ3hELDZEQUF3RDtBQUN4RCx5RUFBbUU7QUFFbkU7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFpR0M7UUFoR0MsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGtCQUFZLEdBQUcsSUFBSSxDQUFDOztJQXlGdEIsQ0FBQztJQXRGQyxpQ0FBUSxHQUFSO1FBQ0UsaUJBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUss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RSxDQUFDO0lBQ2YsbUJBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBVmpCLGNBQWM7UUFEbEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxjQUFjLENBaUdsQztJQUFELHFCQUFDO0NBakdELEFBaUdDLENBakcyQyxzQkFBWSxHQWlHdkQ7a0JBakdvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVsZW1lbnRMZXZlbCBmcm9tICcuL0VsZW1lbnRMZXZlbCc7XG5pbXBvcnQgeyBFSm91cm5leU1hcFN0YXRlIH0gZnJvbSAnLi9UcmF2ZWxNYXBJbnRlcmZhY2UnO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRTAyR2lmdEJveEJhc2UgZXh0ZW5kcyBFbGVtZW50TGV2ZWwge1xuICB0aXRsZUxhYmVsID0gbnVsbDtcbiAgYnV0dG9uID0gbnVsbDtcbiAgYW5pbU5vZGUgPSBudWxsO1xuICBtYXNrTm9kZSA9IG51bGw7XG4gIGNvbGxlY3RTcGluZSA9IG51bGw7XG4gIGNhcmROb2RlID0gbnVsbDtcbiAgc2VsZWN0QW5pbSA9IG51bGw7XG4gIHNlbGVjdFVwQW5pbSA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcIlwiO1xuICBzdGF0aWMgc2l6ZSA9IG5ldyBjYy5TaXplKDIwMSwgMjcwKTtcbiAgdWlPbkxvYWQoKSB7XG4gICAgc3VwZXIudWlPbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnNlbGVjdEFuaW0gPSBjYy5maW5kKFwiRWxlbWVudC9DYXJkL0Jhc2UvRG93bkFuaW1cIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgIHRoaXMuc2VsZWN0VXBBbmltID0gY2MuZmluZChcIkVsZW1lbnQvQ2FyZC9CYXNlL1VwQW5pbVwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgdGhpcy5jYXJkTm9kZSA9IGNjLmZpbmQoXCJFbGVtZW50L0NhcmQvQmFzZVwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMudGl0bGVMYWJlbCA9IGNjLmZpbmQoXCJFbGVtZW50L0NhcmQvQmFzZS9MZXZlbFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5idXR0b24gPSBjYy5maW5kKFwiRWxlbWVudC9DYXJkXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5hbmltTm9kZSA9IGNjLmZpbmQoXCJFbGVtZW50L0NhcmQvQmFzZS9BbmltXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5tYXNrTm9kZSA9IGNjLmZpbmQoXCJFbGVtZW50L0NhcmQvQmFzZS9NYXNrXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5jb2xsZWN0U3BpbmUgPSBjYy5maW5kKFwiRWxlbWVudC9DYXJkL0NvbGxlY3RcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgIHRoaXMuYWRkTGV2ZWxCdG5DbGljayh0aGlzLmJ1dHRvbiwgdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcyksIHtcbiAgICAgIGNsaWNrQXVkaW86IEVBdWRpb0lELlRyYXZlbEJ1dHRvbjFcbiAgICB9KTtcbiAgfVxuICB1cGRhdGVVSSgpIHtcbiAgICBzdXBlci51cGRhdGVVSS5jYWxsKHRoaXMpO1xuICAgIHRoaXMudGl0bGVMYWJlbC5zdHJpbmcgPSBcIlwiICsgdGhpcy5fZGF0YS5sZXZlbDtcbiAgfVxuICByZXNldFN0YXRlKCkge1xuICAgIHRoaXMuY29sbGVjdFNwaW5lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RBbmltLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jYXJkTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYW5pbU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1Ob2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikucGF1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGVjdEFuaW0ucGF1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLmNvbGxlY3RTcGluZS5wYXVzZWQgPSB0cnVlO1xuICAgIHRoaXMubWFza05vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGVjdFVwQW5pbS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xuICB9XG4gIG9uTGV2ZWxTZWxlY3QoKSB7XG4gICAgdGhpcy5zZWxlY3RBbmltLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLm1hc2tOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jb2xsZWN0U3BpbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuc2VsZWN0QW5pbSwgXCJqb3VybmV5X21hcF9sZXZlbF9iaWdfZG93blwiLCB0cnVlKTtcbiAgICB0aGlzLnNlbGVjdFVwQW5pbS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLnNlbGVjdFVwQW5pbSwgXCJqb3VybmV5X21hcF9sZXZlbF9iaWdfdXBcIiwgdHJ1ZSk7XG4gICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSk7XG4gICAgdmFyIGUgPSBjYy50d2VlbigpLnRvKDAsIHtcbiAgICAgIHNjYWxlOiAxXG4gICAgfSkudG8oMC41LCB7XG4gICAgICBzY2FsZTogMS4xXG4gICAgfSkudG8oMC41LCB7XG4gICAgICBzY2FsZTogMVxuICAgIH0pO1xuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkucmVwZWF0Rm9yZXZlcihlKS5zdGFydCgpO1xuICB9XG4gIG9uTGV2ZWxMb2NrKCkge1xuICAgIHRoaXMuc2VsZWN0QW5pbS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubWFza05vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1Ob2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5jb2xsZWN0U3BpbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuICBvbkxldmVsVW5sb2NrKCkge1xuICAgIHRoaXMuY2FyZE5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RBbmltLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jb2xsZWN0U3BpbmUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIEdhbWVVdGlscy5wbGF5U3BpbmUodGhpcy5jb2xsZWN0U3BpbmUsIFwiaW5pdFwiLCBmYWxzZSk7XG4gIH1cbiAgb25MZXZlbFVubG9ja1Bhc3MoKSB7XG4gICAgdGhpcy5fZGF0YS5zdGF0ZSA9IEVKb3VybmV5TWFwU3RhdGUuVW5sb2NrZWQ7XG4gICAgdGhpcy5vbkxldmVsVW5sb2NrKCk7XG4gIH1cbiAgYmFkZ2VDb2xsZWN0U3RhcnQoKSB7XG4gICAgdGhpcy5jYXJkTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNvbGxlY3RTcGluZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG4gIGJhZGdlQ29sbGVjdEVuZCgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgc3VwZXIuYmFkZ2VDb2xsZWN0RW5kLmNhbGwodGhpcyk7XG4gICAgdGhpcy5jYXJkTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNvbGxlY3RTcGluZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGUpO1xuICAgIHRoaXMuYWRkQmxvY2tUb3VjaCgpO1xuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoMCkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICB0LmNvbGxlY3RTcGluZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHQuY29sbGVjdFNwaW5lLCBcImluXCIsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQub25MZXZlbFVubG9jaygpO1xuICAgICAgfSk7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICBvbkJ1dHRvbkNsaWNrKCkge1xuICAgIHRoaXMuX2RhdGEuc3RhdGUgPT09IEVKb3VybmV5TWFwU3RhdGUuTG9ja2VkICYmIEdhbWVVdGlscy5wbGF5U3BpbmUodGhpcy5hbmltTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLCBcImluXCIsIGZhbHNlKTtcbiAgICB0aGlzLmdvVG9UcmF2ZWxHYW1lKCk7XG4gIH1cbn0iXX0=