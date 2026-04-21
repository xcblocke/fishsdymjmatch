
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/E01House.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13dd0xvrjdFMYpUYajZ4FGf', 'E01House');
// Scripts/E01House.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("./core/simulator/util/GameUtils");
var TravelMapInterface_1 = require("./TravelMapInterface");
var ElementLevel_1 = require("./ElementLevel");
var a = {
    locked: "locked",
    lockedTap: "locked_tap",
    unlockedIn: "in",
    unlockedIdle: "init"
};
var E01House = /** @class */ (function (_super) {
    __extends(E01House, _super);
    function E01House() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLabel = null;
        _this.button = null;
        _this.cardSpine = null;
        _this.selectAnim = null;
        return _this;
    }
    E01House.prototype.uiOnLoad = function () {
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
    E01House.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
        this.titleLabel.string = "" + this._data.level;
    };
    E01House.prototype.resetState = function () { };
    E01House.prototype.onButtonClick = function () {
        var e = this;
        if (cc.isValid(this.cardSpine)) {
            this._data.state !== TravelMapInterface_1.EJourneyMapState.Selected && this._data.state !== TravelMapInterface_1.EJourneyMapState.Locked || GameUtils_1.default.playSpine(this.cardSpine, a.lockedTap, false, function () {
                GameUtils_1.default.playSpine(e.cardSpine, a.locked, false);
            });
            this.goToTravelGame();
        }
    };
    E01House.prototype.onLevelSelect = function () {
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
    E01House.prototype.onLevelLock = function () {
        if (cc.isValid(this.cardSpine)) {
            GameUtils_1.default.playSpine(this.cardSpine, a.locked, false);
            this.selectAnim.node.active = false;
        }
    };
    E01House.prototype.onLevelUnlock = function () {
        var e = this;
        if (cc.isValid(this.cardSpine)) {
            GameUtils_1.default.playSpine(this.cardSpine, a.unlockedIn, false, function () {
                cc.isValid(e.cardSpine) && GameUtils_1.default.playSpine(e.cardSpine, a.unlockedIdle, true);
            });
            this.selectAnim.node.active = false;
        }
    };
    E01House.prototype.onLevelUnlockPass = function () {
        this._data.state = TravelMapInterface_1.EJourneyMapState.Unlocked;
        this.onLevelUnlock();
    };
    E01House.prefabUrl = "prefabs/journeyMap/01/E01House";
    E01House.size = new cc.Size(348, 378);
    E01House = __decorate([
        mj.class
    ], E01House);
    return E01House;
}(ElementLevel_1.default));
exports.default = E01House;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0UwMUhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RUFBbUU7QUFDbkUsNkRBQXdEO0FBQ3hELDJEQUF3RDtBQUN4RCwrQ0FBMEM7QUFDMUMsSUFBSSxDQUFDLEdBQUc7SUFDTixNQUFNLEVBQUUsUUFBUTtJQUNoQixTQUFTLEVBQUUsWUFBWTtJQUN2QixVQUFVLEVBQUUsSUFBSTtJQUNoQixZQUFZLEVBQUUsTUFBTTtDQUNyQixDQUFDO0FBRUY7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFnRUM7UUEvREMsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7O0lBNERwQixDQUFDO0lBekRDLDJCQUFRLEdBQVI7UUFDRSxpQkFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFD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RSxLQUFLLEVBQUU7Z0JBQ3ZELEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLG1CQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwRixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBQ0Qsb0NBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcscUNBQWdCLENBQUMsUUFBUSxDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBMURNLGtCQUFTLEdBQUcsZ0NBQWdDLENBQUM7SUFDN0MsYUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFOakIsUUFBUTtRQUQ1QixFQUFFLENBQUMsS0FBSztPQUNZLFFBQVEsQ0FnRTVCO0lBQUQsZUFBQztDQWhFRCxBQWdFQyxDQWhFcUMsc0JBQVksR0FnRWpEO2tCQWhFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgeyBFSm91cm5leU1hcFN0YXRlIH0gZnJvbSAnLi9UcmF2ZWxNYXBJbnRlcmZhY2UnO1xuaW1wb3J0IEVsZW1lbnRMZXZlbCBmcm9tICcuL0VsZW1lbnRMZXZlbCc7XG52YXIgYSA9IHtcbiAgbG9ja2VkOiBcImxvY2tlZFwiLFxuICBsb2NrZWRUYXA6IFwibG9ja2VkX3RhcFwiLFxuICB1bmxvY2tlZEluOiBcImluXCIsXG4gIHVubG9ja2VkSWRsZTogXCJpbml0XCJcbn07XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEUwMUhvdXNlIGV4dGVuZHMgRWxlbWVudExldmVsIHtcbiAgdGl0bGVMYWJlbCA9IG51bGw7XG4gIGJ1dHRvbiA9IG51bGw7XG4gIGNhcmRTcGluZSA9IG51bGw7XG4gIHNlbGVjdEFuaW0gPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2pvdXJuZXlNYXAvMDEvRTAxSG91c2VcIjtcbiAgc3RhdGljIHNpemUgPSBuZXcgY2MuU2l6ZSgzNDgsIDM3OCk7XG4gIHVpT25Mb2FkKCkge1xuICAgIHN1cGVyLnVpT25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy50aXRsZUxhYmVsID0gY2MuZmluZChcIkVsZW1lbnQvTGV2ZWxcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuYnV0dG9uID0gY2MuZmluZChcIkVsZW1lbnRcIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLmNhcmRTcGluZSA9IGNjLmZpbmQoXCJFbGVtZW50L0NhcmRcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgIHRoaXMuc2VsZWN0QW5pbSA9IGNjLmZpbmQoXCJFbGVtZW50L1NlbGVjdFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgdGhpcy5zZWxlY3RBbmltLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5hZGRMZXZlbEJ0bkNsaWNrKHRoaXMuYnV0dG9uLCB0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzKSwge1xuICAgICAgY2xpY2tBdWRpbzogRUF1ZGlvSUQuVHJhdmVsQnV0dG9uMVxuICAgIH0pO1xuICB9XG4gIHVwZGF0ZVVJKCkge1xuICAgIHN1cGVyLnVwZGF0ZVVJLmNhbGwodGhpcyk7XG4gICAgdGhpcy50aXRsZUxhYmVsLnN0cmluZyA9IFwiXCIgKyB0aGlzLl9kYXRhLmxldmVsO1xuICB9XG4gIHJlc2V0U3RhdGUoKSB7fVxuICBvbkJ1dHRvbkNsaWNrKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmNhcmRTcGluZSkpIHtcbiAgICAgIHRoaXMuX2RhdGEuc3RhdGUgIT09IEVKb3VybmV5TWFwU3RhdGUuU2VsZWN0ZWQgJiYgdGhpcy5fZGF0YS5zdGF0ZSAhPT0gRUpvdXJuZXlNYXBTdGF0ZS5Mb2NrZWQgfHwgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLmNhcmRTcGluZSwgYS5sb2NrZWRUYXAsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUoZS5jYXJkU3BpbmUsIGEubG9ja2VkLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZ29Ub1RyYXZlbEdhbWUoKTtcbiAgICB9XG4gIH1cbiAgb25MZXZlbFNlbGVjdCgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5jYXJkU3BpbmUpKSB7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuY2FyZFNwaW5lLCBhLmxvY2tlZCwgZmFsc2UpO1xuICAgICAgdGhpcy5zZWxlY3RBbmltLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLl9kYXRhLmlzU2VsZWN0KSBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuc2VsZWN0QW5pbSwgXCJ1bmxvY2tpbmdfaWRsZV9pbml0XCIsIHRydWUpO2Vsc2Uge1xuICAgICAgICB0aGlzLl9kYXRhLmlzU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLnNlbGVjdEFuaW0sIFwidW5sb2NraW5nX2lkbGVfaW5cIiwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKGUuc2VsZWN0QW5pbSwgXCJ1bmxvY2tpbmdfaWRsZV9pbml0XCIsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25MZXZlbExvY2soKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5jYXJkU3BpbmUpKSB7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuY2FyZFNwaW5lLCBhLmxvY2tlZCwgZmFsc2UpO1xuICAgICAgdGhpcy5zZWxlY3RBbmltLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIG9uTGV2ZWxVbmxvY2soKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuY2FyZFNwaW5lKSkge1xuICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLmNhcmRTcGluZSwgYS51bmxvY2tlZEluLCBmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5pc1ZhbGlkKGUuY2FyZFNwaW5lKSAmJiBHYW1lVXRpbHMucGxheVNwaW5lKGUuY2FyZFNwaW5lLCBhLnVubG9ja2VkSWRsZSwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2VsZWN0QW5pbS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBvbkxldmVsVW5sb2NrUGFzcygpIHtcbiAgICB0aGlzLl9kYXRhLnN0YXRlID0gRUpvdXJuZXlNYXBTdGF0ZS5VbmxvY2tlZDtcbiAgICB0aGlzLm9uTGV2ZWxVbmxvY2soKTtcbiAgfVxufSJdfQ==