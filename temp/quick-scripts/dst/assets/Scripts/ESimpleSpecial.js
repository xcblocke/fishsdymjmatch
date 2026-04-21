
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ESimpleSpecial.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c59dkgbvJKSLnBb86BQyR/', 'ESimpleSpecial');
// Scripts/ESimpleSpecial.ts

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
var ESimpleSpecial = /** @class */ (function (_super) {
    __extends(ESimpleSpecial, _super);
    function ESimpleSpecial() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLabel = null;
        _this.button = null;
        _this.cardSpine = null;
        _this.selectAnim = null;
        return _this;
    }
    ESimpleSpecial.prototype.uiOnLoad = function () {
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
    ESimpleSpecial.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
        this.titleLabel.string = "" + this._data.level;
    };
    ESimpleSpecial.prototype.resetState = function () { };
    ESimpleSpecial.prototype.onButtonClick = function () {
        var e = this;
        if (cc.isValid(this.cardSpine)) {
            this._data.state !== TravelMapInterface_1.EJourneyMapState.Selected && this._data.state !== TravelMapInterface_1.EJourneyMapState.Locked || GameUtils_1.default.playSpine(this.cardSpine, a.lockedTap, false, function () {
                GameUtils_1.default.playSpine(e.cardSpine, a.locked, false);
            });
            this.goToTravelGame();
        }
    };
    ESimpleSpecial.prototype.onLevelSelect = function () {
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
    ESimpleSpecial.prototype.onLevelLock = function () {
        if (cc.isValid(this.cardSpine)) {
            GameUtils_1.default.playSpine(this.cardSpine, a.locked, false);
            this.selectAnim.node.active = false;
        }
    };
    ESimpleSpecial.prototype.onLevelUnlock = function () {
        var e = this;
        if (cc.isValid(this.cardSpine)) {
            GameUtils_1.default.playSpine(this.cardSpine, a.unlockedIn, false, function () {
                cc.isValid(e.cardSpine) && GameUtils_1.default.playSpine(e.cardSpine, a.unlockedIdle, true);
            });
            this.selectAnim.node.active = false;
        }
    };
    ESimpleSpecial.prototype.onLevelUnlockPass = function () {
        this._data.state = TravelMapInterface_1.EJourneyMapState.Unlocked;
        this.onLevelUnlock();
    };
    ESimpleSpecial.prefabUrl = "prefabs/journeyMap/01/E01House";
    ESimpleSpecial.size = new cc.Size(348, 378);
    ESimpleSpecial = __decorate([
        mj.class
    ], ESimpleSpecial);
    return ESimpleSpecial;
}(ElementLevel_1.default));
exports.default = ESimpleSpecial;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0VTaW1wbGVTcGVjaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RUFBbUU7QUFDbkUsNkRBQXdEO0FBQ3hELDJEQUF3RDtBQUN4RCwrQ0FBMEM7QUFDMUMsSUFBSSxDQUFDLEdBQUc7SUFDTixNQUFNLEVBQUUsUUFBUTtJQUNoQixTQUFTLEVBQUUsWUFBWTtJQUN2QixVQUFVLEVBQUUsSUFBSTtJQUNoQixZQUFZLEVBQUUsTUFBTTtDQUNyQixDQUFDO0FBRUY7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFnRUM7UUEvREMsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7O0lBNERwQixDQUFDO0lBekRDLGlDQUFRLEdBQVI7UUFDRSxpQkFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFB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QVUsRUFBRSxLQUFLLEVBQUU7Z0JBQ3ZELEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLG1CQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwRixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBQ0QsMENBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcscUNBQWdCLENBQUMsUUFBUSxDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBMURNLHdCQUFTLEdBQUcsZ0NBQWdDLENBQUM7SUFDN0MsbUJBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBTmpCLGNBQWM7UUFEbEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxjQUFjLENBZ0VsQztJQUFELHFCQUFDO0NBaEVELEFBZ0VDLENBaEUyQyxzQkFBWSxHQWdFdkQ7a0JBaEVvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCB7IEVKb3VybmV5TWFwU3RhdGUgfSBmcm9tICcuL1RyYXZlbE1hcEludGVyZmFjZSc7XG5pbXBvcnQgRWxlbWVudExldmVsIGZyb20gJy4vRWxlbWVudExldmVsJztcbnZhciBhID0ge1xuICBsb2NrZWQ6IFwibG9ja2VkXCIsXG4gIGxvY2tlZFRhcDogXCJsb2NrZWRfdGFwXCIsXG4gIHVubG9ja2VkSW46IFwiaW5cIixcbiAgdW5sb2NrZWRJZGxlOiBcImluaXRcIlxufTtcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRVNpbXBsZVNwZWNpYWwgZXh0ZW5kcyBFbGVtZW50TGV2ZWwge1xuICB0aXRsZUxhYmVsID0gbnVsbDtcbiAgYnV0dG9uID0gbnVsbDtcbiAgY2FyZFNwaW5lID0gbnVsbDtcbiAgc2VsZWN0QW5pbSA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvam91cm5leU1hcC8wMS9FMDFIb3VzZVwiO1xuICBzdGF0aWMgc2l6ZSA9IG5ldyBjYy5TaXplKDM0OCwgMzc4KTtcbiAgdWlPbkxvYWQoKSB7XG4gICAgc3VwZXIudWlPbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnRpdGxlTGFiZWwgPSBjYy5maW5kKFwiRWxlbWVudC9MZXZlbFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5idXR0b24gPSBjYy5maW5kKFwiRWxlbWVudFwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuY2FyZFNwaW5lID0gY2MuZmluZChcIkVsZW1lbnQvQ2FyZFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgdGhpcy5zZWxlY3RBbmltID0gY2MuZmluZChcIkVsZW1lbnQvU2VsZWN0XCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICB0aGlzLnNlbGVjdEFuaW0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmFkZExldmVsQnRuQ2xpY2sodGhpcy5idXR0b24sIHRoaXMub25CdXR0b25DbGljay5iaW5kKHRoaXMpLCB7XG4gICAgICBjbGlja0F1ZGlvOiBFQXVkaW9JRC5UcmF2ZWxCdXR0b24xXG4gICAgfSk7XG4gIH1cbiAgdXBkYXRlVUkoKSB7XG4gICAgc3VwZXIudXBkYXRlVUkuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnRpdGxlTGFiZWwuc3RyaW5nID0gXCJcIiArIHRoaXMuX2RhdGEubGV2ZWw7XG4gIH1cbiAgcmVzZXRTdGF0ZSgpIHt9XG4gIG9uQnV0dG9uQ2xpY2soKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuY2FyZFNwaW5lKSkge1xuICAgICAgdGhpcy5fZGF0YS5zdGF0ZSAhPT0gRUpvdXJuZXlNYXBTdGF0ZS5TZWxlY3RlZCAmJiB0aGlzLl9kYXRhLnN0YXRlICE9PSBFSm91cm5leU1hcFN0YXRlLkxvY2tlZCB8fCBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuY2FyZFNwaW5lLCBhLmxvY2tlZFRhcCwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZShlLmNhcmRTcGluZSwgYS5sb2NrZWQsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5nb1RvVHJhdmVsR2FtZSgpO1xuICAgIH1cbiAgfVxuICBvbkxldmVsU2VsZWN0KCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmNhcmRTcGluZSkpIHtcbiAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUodGhpcy5jYXJkU3BpbmUsIGEubG9ja2VkLCBmYWxzZSk7XG4gICAgICB0aGlzLnNlbGVjdEFuaW0ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuX2RhdGEuaXNTZWxlY3QpIEdhbWVVdGlscy5wbGF5U3BpbmUodGhpcy5zZWxlY3RBbmltLCBcInVubG9ja2luZ19pZGxlX2luaXRcIiwgdHJ1ZSk7ZWxzZSB7XG4gICAgICAgIHRoaXMuX2RhdGEuaXNTZWxlY3QgPSB0cnVlO1xuICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuc2VsZWN0QW5pbSwgXCJ1bmxvY2tpbmdfaWRsZV9pblwiLCBmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUoZS5zZWxlY3RBbmltLCBcInVubG9ja2luZ19pZGxlX2luaXRcIiwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkxldmVsTG9jaygpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmNhcmRTcGluZSkpIHtcbiAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUodGhpcy5jYXJkU3BpbmUsIGEubG9ja2VkLCBmYWxzZSk7XG4gICAgICB0aGlzLnNlbGVjdEFuaW0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgb25MZXZlbFVubG9jaygpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5jYXJkU3BpbmUpKSB7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuY2FyZFNwaW5lLCBhLnVubG9ja2VkSW4sIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmlzVmFsaWQoZS5jYXJkU3BpbmUpICYmIEdhbWVVdGlscy5wbGF5U3BpbmUoZS5jYXJkU3BpbmUsIGEudW5sb2NrZWRJZGxlLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZWxlY3RBbmltLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIG9uTGV2ZWxVbmxvY2tQYXNzKCkge1xuICAgIHRoaXMuX2RhdGEuc3RhdGUgPSBFSm91cm5leU1hcFN0YXRlLlVubG9ja2VkO1xuICAgIHRoaXMub25MZXZlbFVubG9jaygpO1xuICB9XG59Il19