
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/E01Snowman.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab952ozlhhD0Z22EfphjmlX', 'E01Snowman');
// Scripts/E01Snowman.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TravelMapInterface_1 = require("./TravelMapInterface");
var ElementLevel_1 = require("./ElementLevel");
var GameUtils_1 = require("./core/simulator/util/GameUtils");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var a = {
    locked: "locked",
    lockedTap: "locked_tap",
    unlockedIn: "in",
    unlockedIdle: "init"
};
var E01Snowman = /** @class */ (function (_super) {
    __extends(E01Snowman, _super);
    function E01Snowman() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLabel = null;
        _this.button = null;
        _this.cardSpine = null;
        _this.selectAnim = null;
        return _this;
    }
    E01Snowman.prototype.uiOnLoad = function () {
        _super.prototype.uiOnLoad.call(this);
        this.titleLabel = cc.find("Element/Level", this.node).getComponent(cc.Label);
        this.button = cc.find("Element", this.node);
        this.cardSpine = cc.find("Element/Card", this.node).getComponent(sp.Skeleton);
        this.selectAnim = cc.find("Element/Select", this.node).getComponent(sp.Skeleton);
        this.selectAnim.node.active = false;
        this.addLevelBtnClick(this.button, this.onButtonClick.bind(this), {
            clickAudio: GameTypeEnums_1.EAudioID.TravelButton1
        });
    };
    E01Snowman.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
        this.titleLabel.string = "" + this._data.level;
    };
    E01Snowman.prototype.resetState = function () { };
    E01Snowman.prototype.onButtonClick = function () {
        var e = this;
        if (cc.isValid(this.cardSpine)) {
            this._data.state !== TravelMapInterface_1.EJourneyMapState.Selected && this._data.state !== TravelMapInterface_1.EJourneyMapState.Locked || GameUtils_1.default.playSpine(this.cardSpine, a.lockedTap, false, function () {
                GameUtils_1.default.playSpine(e.cardSpine, a.locked, false);
            });
            this.goToTravelGame();
        }
    };
    E01Snowman.prototype.onLevelSelect = function () {
        var e = this;
        if (cc.isValid(this.cardSpine)) {
            GameUtils_1.default.playSpine(this.cardSpine, a.locked, false);
            this.selectAnim.node.active = true;
            if (this._data.isSelect)
                GameUtils_1.default.playSpine(this.selectAnim, "unlocking_idle_init", true);
            else {
                this._data.isSelect = true;
                GameUtils_1.default.playSpine(this.selectAnim, "unlocking_idle_in", false, function () {
                    GameUtils_1.default.playSpine(e.selectAnim, "unlocking_idle_init", true);
                });
            }
        }
    };
    E01Snowman.prototype.onLevelLock = function () {
        if (cc.isValid(this.cardSpine)) {
            GameUtils_1.default.playSpine(this.cardSpine, a.locked, false);
            this.selectAnim.node.active = false;
        }
    };
    E01Snowman.prototype.onLevelUnlock = function () {
        var e = this;
        if (cc.isValid(this.cardSpine)) {
            GameUtils_1.default.playSpine(this.cardSpine, a.unlockedIn, false, function () {
                cc.isValid(e.cardSpine) && GameUtils_1.default.playSpine(e.cardSpine, a.unlockedIdle, true);
            });
            this.selectAnim.node.active = false;
        }
    };
    E01Snowman.prototype.onLevelUnlockPass = function () {
        this._data.state = TravelMapInterface_1.EJourneyMapState.Unlocked;
        this.onLevelUnlock();
    };
    E01Snowman.prefabUrl = "prefabs/journeyMap/01/E01Snowman";
    E01Snowman.size = new cc.Size(348, 378);
    E01Snowman = __decorate([
        mj.class
    ], E01Snowman);
    return E01Snowman;
}(ElementLevel_1.default));
exports.default = E01Snowman;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0UwMVNub3dtYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF3RDtBQUN4RCwrQ0FBMEM7QUFDMUMsNkRBQXdEO0FBQ3hELHlFQUFtRTtBQUNuRSxJQUFJLENBQUMsR0FBRztJQUNOLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLFlBQVksRUFBRSxNQUFNO0NBQ3JCLENBQUM7QUFFRjtJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQWdFQztRQS9EQyxnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVSxHQUFHLElBQUksQ0FBQzs7SUE0RHBCLENBQUM7SUF6REMsNkJBQVEsR0FBUjtRQUNFLGlCQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hFLFVBQVUsRUFBRSx3QkFBUSxDQUFDLGFBQWE7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELDZCQUFRLEdBQVI7UUFDRSxpQkFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNqRCxDQUFDO0lBQ0QsK0JBQVUsR0FBVixjQUFjLENBQUM7SUFDZixrQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxxQ0FBZ0IsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUsscUNBQWdCLENBQUMsTUFBTSxJQUFJLG1CQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUU7Z0JBQ3hKLG1CQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFDRCxrQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM5QixtQkFBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtnQkFBRSxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUFLO2dCQUM5RixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLG1CQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFO29CQUMvRCxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNqRSxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsZ0NBQVcsR0FBWDtRQUNFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDOUIsbUJBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBQ0Qsa0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDOUIsbUJBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRTtnQkFDdkQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksbUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3BGLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQztJQUNILENBQUM7SUFDRCxzQ0FBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxxQ0FBZ0IsQ0FBQyxRQUFRLENBQUM7UUFDN0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUExRE0sb0JBQVMsR0FBRyxrQ0FBa0MsQ0FBQztJQUMvQyxlQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQU5qQixVQUFVO1FBRDlCLEVBQUUsQ0FBQyxLQUFLO09BQ1ksVUFBVSxDQWdFOUI7SUFBRCxpQkFBQztDQWhFRCxBQWdFQyxDQWhFdUMsc0JBQVksR0FnRW5EO2tCQWhFb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVKb3VybmV5TWFwU3RhdGUgfSBmcm9tICcuL1RyYXZlbE1hcEludGVyZmFjZSc7XG5pbXBvcnQgRWxlbWVudExldmVsIGZyb20gJy4vRWxlbWVudExldmVsJztcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG52YXIgYSA9IHtcbiAgbG9ja2VkOiBcImxvY2tlZFwiLFxuICBsb2NrZWRUYXA6IFwibG9ja2VkX3RhcFwiLFxuICB1bmxvY2tlZEluOiBcImluXCIsXG4gIHVubG9ja2VkSWRsZTogXCJpbml0XCJcbn07XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEUwMVNub3dtYW4gZXh0ZW5kcyBFbGVtZW50TGV2ZWwge1xuICB0aXRsZUxhYmVsID0gbnVsbDtcbiAgYnV0dG9uID0gbnVsbDtcbiAgY2FyZFNwaW5lID0gbnVsbDtcbiAgc2VsZWN0QW5pbSA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvam91cm5leU1hcC8wMS9FMDFTbm93bWFuXCI7XG4gIHN0YXRpYyBzaXplID0gbmV3IGNjLlNpemUoMzQ4LCAzNzgpO1xuICB1aU9uTG9hZCgpIHtcbiAgICBzdXBlci51aU9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMudGl0bGVMYWJlbCA9IGNjLmZpbmQoXCJFbGVtZW50L0xldmVsXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLmJ1dHRvbiA9IGNjLmZpbmQoXCJFbGVtZW50XCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5jYXJkU3BpbmUgPSBjYy5maW5kKFwiRWxlbWVudC9DYXJkXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICB0aGlzLnNlbGVjdEFuaW0gPSBjYy5maW5kKFwiRWxlbWVudC9TZWxlY3RcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgIHRoaXMuc2VsZWN0QW5pbS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWRkTGV2ZWxCdG5DbGljayh0aGlzLmJ1dHRvbiwgdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcyksIHtcbiAgICAgIGNsaWNrQXVkaW86IEVBdWRpb0lELlRyYXZlbEJ1dHRvbjFcbiAgICB9KTtcbiAgfVxuICB1cGRhdGVVSSgpIHtcbiAgICBzdXBlci51cGRhdGVVSS5jYWxsKHRoaXMpO1xuICAgIHRoaXMudGl0bGVMYWJlbC5zdHJpbmcgPSBcIlwiICsgdGhpcy5fZGF0YS5sZXZlbDtcbiAgfVxuICByZXNldFN0YXRlKCkge31cbiAgb25CdXR0b25DbGljaygpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5jYXJkU3BpbmUpKSB7XG4gICAgICB0aGlzLl9kYXRhLnN0YXRlICE9PSBFSm91cm5leU1hcFN0YXRlLlNlbGVjdGVkICYmIHRoaXMuX2RhdGEuc3RhdGUgIT09IEVKb3VybmV5TWFwU3RhdGUuTG9ja2VkIHx8IEdhbWVVdGlscy5wbGF5U3BpbmUodGhpcy5jYXJkU3BpbmUsIGEubG9ja2VkVGFwLCBmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKGUuY2FyZFNwaW5lLCBhLmxvY2tlZCwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmdvVG9UcmF2ZWxHYW1lKCk7XG4gICAgfVxuICB9XG4gIG9uTGV2ZWxTZWxlY3QoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuY2FyZFNwaW5lKSkge1xuICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLmNhcmRTcGluZSwgYS5sb2NrZWQsIGZhbHNlKTtcbiAgICAgIHRoaXMuc2VsZWN0QW5pbS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICBpZiAodGhpcy5fZGF0YS5pc1NlbGVjdCkgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLnNlbGVjdEFuaW0sIFwidW5sb2NraW5nX2lkbGVfaW5pdFwiLCB0cnVlKTtlbHNlIHtcbiAgICAgICAgdGhpcy5fZGF0YS5pc1NlbGVjdCA9IHRydWU7XG4gICAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUodGhpcy5zZWxlY3RBbmltLCBcInVubG9ja2luZ19pZGxlX2luXCIsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZShlLnNlbGVjdEFuaW0sIFwidW5sb2NraW5nX2lkbGVfaW5pdFwiLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTGV2ZWxMb2NrKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuY2FyZFNwaW5lKSkge1xuICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLmNhcmRTcGluZSwgYS5sb2NrZWQsIGZhbHNlKTtcbiAgICAgIHRoaXMuc2VsZWN0QW5pbS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBvbkxldmVsVW5sb2NrKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmNhcmRTcGluZSkpIHtcbiAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUodGhpcy5jYXJkU3BpbmUsIGEudW5sb2NrZWRJbiwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuaXNWYWxpZChlLmNhcmRTcGluZSkgJiYgR2FtZVV0aWxzLnBsYXlTcGluZShlLmNhcmRTcGluZSwgYS51bmxvY2tlZElkbGUsIHRydWUpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNlbGVjdEFuaW0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgb25MZXZlbFVubG9ja1Bhc3MoKSB7XG4gICAgdGhpcy5fZGF0YS5zdGF0ZSA9IEVKb3VybmV5TWFwU3RhdGUuVW5sb2NrZWQ7XG4gICAgdGhpcy5vbkxldmVsVW5sb2NrKCk7XG4gIH1cbn0iXX0=