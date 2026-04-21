
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ESimpleNormal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e1b9UchWZHxaieIT6XblPR', 'ESimpleNormal');
// Scripts/ESimpleNormal.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ElementLevel_1 = require("./ElementLevel");
var TravelMapInterface_1 = require("./TravelMapInterface");
var GameUtils_1 = require("./core/simulator/util/GameUtils");
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var a = {
    lockedIdle: "locked_idle",
    lockedTap: "locked_tap",
    unlockedIdle: "unlocked_idle",
    unlockedTap: "unlocked_tap",
    selectIdle: "unlocking_idle",
    selectTap: "unlocking_tap",
    selectSwitch: "unlocking_in",
    selectLightIdle: "unlocking_idle_init",
    selectLightSwitch: "unlocking_idle_in"
};
var ESimpleNormal = /** @class */ (function (_super) {
    __extends(ESimpleNormal, _super);
    function ESimpleNormal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLabel = null;
        _this.button = null;
        _this.cardSpine = null;
        _this.selectSpine = null;
        _this.animProxy = null;
        _this.levelParent = null;
        _this.boxNode = null;
        return _this;
    }
    ESimpleNormal.prototype.uiOnLoad = function () {
        _super.prototype.uiOnLoad.call(this);
        this.titleLabel = cc.find("Element/Level", this.node).getComponent(cc.Label);
        this.cardSpine = cc.find("Element/Card", this.node).getComponent(sp.Skeleton);
        this.selectSpine = cc.find("Element/Select", this.node).getComponent(sp.Skeleton);
        this.button = cc.find("Element", this.node);
        this.animProxy = BaseSpine_1.default.refreshWithNode(this.cardSpine.node);
        this.animProxy.reset("");
        this.animProxy.markReady("");
        this.levelParent = cc.find("Element", this.node);
        this.boxNode = cc.find("Element/Box", this.node);
        this.addLevelBtnClick(this.button, this.onButtonClick.bind(this), {
            clickAudio: GameTypeEnums_1.EAudioID.TravelButton1
        });
    };
    ESimpleNormal.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
        this.hookNode(this.animProxy, "hook_level", this.titleLabel.node, this.levelParent);
        this.hookNode(this.animProxy, "hook_level", this.boxNode, this.levelParent);
        this.titleLabel.string = "" + this._data.level;
        this.updateReward();
    };
    ESimpleNormal.prototype.resetState = function () {
        cc.Tween.stopAllByTarget(this.titleLabel.node);
        this.cardSpine.paused = true;
        this.selectSpine.paused = true;
        this.selectSpine.node.active = false;
    };
    ESimpleNormal.prototype.updateReward = function () {
        var e = TravelMapInterface_1.LevelBoxIconPath[this._data.type];
        if (e) {
            var t = this._data.state === TravelMapInterface_1.EJourneyMapState.Unlocked ? e.openPath : e.path;
            BaseSprite_1.default.refreshWithNode(this.boxNode, t, e.atlas);
            this.boxNode.setScale(e.scale);
            this.boxNode.setPosition(e.offsetX, e.offsetY);
            this.titleLabel.node.active = false;
            this.boxNode.active = true;
        }
        else {
            this.boxNode.active = false;
            this.titleLabel.node.active = true;
        }
    };
    ESimpleNormal.prototype.onLevelSelect = function () {
        var e = this;
        if (cc.isValid(this.cardSpine) && cc.isValid(this.selectSpine))
            if (this._data.isSelect) {
                this.selectSpine.node.active = true;
                GameUtils_1.default.playSpine(this.cardSpine, a.selectIdle, true);
                GameUtils_1.default.playSpine(this.selectSpine, a.selectLightIdle, true);
            }
            else {
                this._data.isSelect = true;
                GameUtils_1.default.playSpine(this.cardSpine, a.selectSwitch, false, function () {
                    if (e._data.state === TravelMapInterface_1.EJourneyMapState.Unlocked) {
                        GameUtils_1.default.playSpine(e.cardSpine, a.unlockedIdle, true);
                    }
                    else {
                        if (e._data.state === TravelMapInterface_1.EJourneyMapState.Locked) {
                            GameUtils_1.default.playSpine(e.cardSpine, a.lockedIdle, true);
                        }
                        else {
                            e._data.state === TravelMapInterface_1.EJourneyMapState.Selected && GameUtils_1.default.playSpine(e.cardSpine, a.selectIdle, true);
                        }
                    }
                });
                this.selectSpine.node.active = true;
                GameUtils_1.default.playSpine(this.selectSpine, a.selectLightSwitch, false, function () {
                    if (e._data.state === TravelMapInterface_1.EJourneyMapState.Selected) {
                        GameUtils_1.default.playSpine(e.selectSpine, a.selectLightIdle, true);
                    }
                    else {
                        e.selectSpine.node.active = false;
                    }
                });
            }
    };
    ESimpleNormal.prototype.onLevelLock = function () {
        if (cc.isValid(this.cardSpine) && cc.isValid(this.selectSpine)) {
            this.selectSpine.node.active = false;
            GameUtils_1.default.playSpine(this.cardSpine, a.lockedIdle, false);
        }
    };
    ESimpleNormal.prototype.onLevelUnlock = function () {
        if (cc.isValid(this.cardSpine) && cc.isValid(this.selectSpine)) {
            this.selectSpine.node.active = false;
            GameUtils_1.default.playSpine(this.cardSpine, a.unlockedIdle, false);
        }
    };
    ESimpleNormal.prototype.onLevelUnlockPass = function () {
        this._data.state = TravelMapInterface_1.EJourneyMapState.Unlocked;
        this.onLevelUnlock();
    };
    ESimpleNormal.prototype.onButtonClick = function () {
        var e = this;
        if (cc.isValid(this.cardSpine) && cc.isValid(this.selectSpine)) {
            var t = a.lockedTap, o = a.lockedIdle;
            if (this._data.state === TravelMapInterface_1.EJourneyMapState.Unlocked) {
                t = a.unlockedTap;
                o = a.unlockedIdle;
            }
            else if (this._data.state === TravelMapInterface_1.EJourneyMapState.Selected) {
                t = a.selectTap;
                o = a.selectIdle;
            }
            GameUtils_1.default.playSpine(this.cardSpine, t, false, function () {
                cc.isValid(e.cardSpine) && GameUtils_1.default.playSpine(e.cardSpine, o, false);
            });
            this.goToTravelGame();
        }
    };
    ESimpleNormal.prefabUrl = "prefabs/journeyMap/01/E01Normal";
    ESimpleNormal.size = new cc.Size(146, 164);
    ESimpleNormal = __decorate([
        mj.class
    ], ESimpleNormal);
    return ESimpleNormal;
}(ElementLevel_1.default));
exports.default = ESimpleNormal;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0VTaW1wbGVOb3JtYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUMxQywyREFBMEU7QUFDMUUsNkRBQXdEO0FBQ3hELDBEQUFxRDtBQUNyRCw0REFBdUQ7QUFDdkQseUVBQW1FO0FBQ25FLElBQUksQ0FBQyxHQUFHO0lBQ04sVUFBVSxFQUFFLGFBQWE7SUFDekIsU0FBUyxFQUFFLFlBQVk7SUFDdkIsWUFBWSxFQUFFLGVBQWU7SUFDN0IsV0FBVyxFQUFFLGNBQWM7SUFDM0IsVUFBVSxFQUFFLGdCQUFnQjtJQUM1QixTQUFTLEVBQUUsZUFBZTtJQUMxQixZQUFZLEVBQUUsY0FBYztJQUM1QixlQUFlLEVBQUUscUJBQXFCO0lBQ3RDLGlCQUFpQixFQUFFLG1CQUFtQjtDQUN2QyxDQUFDO0FBRUY7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFtSEM7UUFsSEMsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixhQUFPLEdBQUcsSUFBSSxDQUFDOztJQTRHakIsQ0FBQztJQXpHQyxnQ0FBUSxHQUFSO1FBQ0UsaUJBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVks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QUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLHFDQUFnQixDQUFDLFFBQVEsRUFBRTtnQkFDekQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO2FBQ2xCO1lBQ0QsbUJBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFO2dCQUM1QyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4RSxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7SUExR00sdUJBQVMsR0FBRyxpQ0FBaUMsQ0FBQztJQUM5QyxrQkFBSSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFUakIsYUFBYTtRQURqQyxFQUFFLENBQUMsS0FBSztPQUNZLGFBQWEsQ0FtSGpDO0lBQUQsb0JBQUM7Q0FuSEQsQUFtSEMsQ0FuSDBDLHNCQUFZLEdBbUh0RDtrQkFuSG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRWxlbWVudExldmVsIGZyb20gJy4vRWxlbWVudExldmVsJztcbmltcG9ydCB7IExldmVsQm94SWNvblBhdGgsIEVKb3VybmV5TWFwU3RhdGUgfSBmcm9tICcuL1RyYXZlbE1hcEludGVyZmFjZSc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4vY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbnZhciBhID0ge1xuICBsb2NrZWRJZGxlOiBcImxvY2tlZF9pZGxlXCIsXG4gIGxvY2tlZFRhcDogXCJsb2NrZWRfdGFwXCIsXG4gIHVubG9ja2VkSWRsZTogXCJ1bmxvY2tlZF9pZGxlXCIsXG4gIHVubG9ja2VkVGFwOiBcInVubG9ja2VkX3RhcFwiLFxuICBzZWxlY3RJZGxlOiBcInVubG9ja2luZ19pZGxlXCIsXG4gIHNlbGVjdFRhcDogXCJ1bmxvY2tpbmdfdGFwXCIsXG4gIHNlbGVjdFN3aXRjaDogXCJ1bmxvY2tpbmdfaW5cIixcbiAgc2VsZWN0TGlnaHRJZGxlOiBcInVubG9ja2luZ19pZGxlX2luaXRcIixcbiAgc2VsZWN0TGlnaHRTd2l0Y2g6IFwidW5sb2NraW5nX2lkbGVfaW5cIlxufTtcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRVNpbXBsZU5vcm1hbCBleHRlbmRzIEVsZW1lbnRMZXZlbCB7XG4gIHRpdGxlTGFiZWwgPSBudWxsO1xuICBidXR0b24gPSBudWxsO1xuICBjYXJkU3BpbmUgPSBudWxsO1xuICBzZWxlY3RTcGluZSA9IG51bGw7XG4gIGFuaW1Qcm94eSA9IG51bGw7XG4gIGxldmVsUGFyZW50ID0gbnVsbDtcbiAgYm94Tm9kZSA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvam91cm5leU1hcC8wMS9FMDFOb3JtYWxcIjtcbiAgc3RhdGljIHNpemUgPSBuZXcgY2MuU2l6ZSgxNDYsIDE2NCk7XG4gIHVpT25Mb2FkKCkge1xuICAgIHN1cGVyLnVpT25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy50aXRsZUxhYmVsID0gY2MuZmluZChcIkVsZW1lbnQvTGV2ZWxcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuY2FyZFNwaW5lID0gY2MuZmluZChcIkVsZW1lbnQvQ2FyZFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgdGhpcy5zZWxlY3RTcGluZSA9IGNjLmZpbmQoXCJFbGVtZW50L1NlbGVjdFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgdGhpcy5idXR0b24gPSBjYy5maW5kKFwiRWxlbWVudFwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuYW5pbVByb3h5ID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZSh0aGlzLmNhcmRTcGluZS5ub2RlKTtcbiAgICB0aGlzLmFuaW1Qcm94eS5yZXNldChcIlwiKTtcbiAgICB0aGlzLmFuaW1Qcm94eS5tYXJrUmVhZHkoXCJcIik7XG4gICAgdGhpcy5sZXZlbFBhcmVudCA9IGNjLmZpbmQoXCJFbGVtZW50XCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5ib3hOb2RlID0gY2MuZmluZChcIkVsZW1lbnQvQm94XCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5hZGRMZXZlbEJ0bkNsaWNrKHRoaXMuYnV0dG9uLCB0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzKSwge1xuICAgICAgY2xpY2tBdWRpbzogRUF1ZGlvSUQuVHJhdmVsQnV0dG9uMVxuICAgIH0pO1xuICB9XG4gIHVwZGF0ZVVJKCkge1xuICAgIHN1cGVyLnVwZGF0ZVVJLmNhbGwodGhpcyk7XG4gICAgdGhpcy5ob29rTm9kZSh0aGlzLmFuaW1Qcm94eSwgXCJob29rX2xldmVsXCIsIHRoaXMudGl0bGVMYWJlbC5ub2RlLCB0aGlzLmxldmVsUGFyZW50KTtcbiAgICB0aGlzLmhvb2tOb2RlKHRoaXMuYW5pbVByb3h5LCBcImhvb2tfbGV2ZWxcIiwgdGhpcy5ib3hOb2RlLCB0aGlzLmxldmVsUGFyZW50KTtcbiAgICB0aGlzLnRpdGxlTGFiZWwuc3RyaW5nID0gXCJcIiArIHRoaXMuX2RhdGEubGV2ZWw7XG4gICAgdGhpcy51cGRhdGVSZXdhcmQoKTtcbiAgfVxuICByZXNldFN0YXRlKCkge1xuICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnRpdGxlTGFiZWwubm9kZSk7XG4gICAgdGhpcy5jYXJkU3BpbmUucGF1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGVjdFNwaW5lLnBhdXNlZCA9IHRydWU7XG4gICAgdGhpcy5zZWxlY3RTcGluZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG4gIHVwZGF0ZVJld2FyZCgpIHtcbiAgICB2YXIgZSA9IExldmVsQm94SWNvblBhdGhbdGhpcy5fZGF0YS50eXBlXTtcbiAgICBpZiAoZSkge1xuICAgICAgdmFyIHQgPSB0aGlzLl9kYXRhLnN0YXRlID09PSBFSm91cm5leU1hcFN0YXRlLlVubG9ja2VkID8gZS5vcGVuUGF0aCA6IGUucGF0aDtcbiAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuYm94Tm9kZSwgdCwgZS5hdGxhcyk7XG4gICAgICB0aGlzLmJveE5vZGUuc2V0U2NhbGUoZS5zY2FsZSk7XG4gICAgICB0aGlzLmJveE5vZGUuc2V0UG9zaXRpb24oZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuICAgICAgdGhpcy50aXRsZUxhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmJveE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ib3hOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy50aXRsZUxhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgb25MZXZlbFNlbGVjdCgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5jYXJkU3BpbmUpICYmIGNjLmlzVmFsaWQodGhpcy5zZWxlY3RTcGluZSkpIGlmICh0aGlzLl9kYXRhLmlzU2VsZWN0KSB7XG4gICAgICB0aGlzLnNlbGVjdFNwaW5lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUodGhpcy5jYXJkU3BpbmUsIGEuc2VsZWN0SWRsZSwgdHJ1ZSk7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuc2VsZWN0U3BpbmUsIGEuc2VsZWN0TGlnaHRJZGxlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YS5pc1NlbGVjdCA9IHRydWU7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuY2FyZFNwaW5lLCBhLnNlbGVjdFN3aXRjaCwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGUuX2RhdGEuc3RhdGUgPT09IEVKb3VybmV5TWFwU3RhdGUuVW5sb2NrZWQpIHtcbiAgICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKGUuY2FyZFNwaW5lLCBhLnVubG9ja2VkSWRsZSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGUuX2RhdGEuc3RhdGUgPT09IEVKb3VybmV5TWFwU3RhdGUuTG9ja2VkKSB7XG4gICAgICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKGUuY2FyZFNwaW5lLCBhLmxvY2tlZElkbGUsIHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLl9kYXRhLnN0YXRlID09PSBFSm91cm5leU1hcFN0YXRlLlNlbGVjdGVkICYmIEdhbWVVdGlscy5wbGF5U3BpbmUoZS5jYXJkU3BpbmUsIGEuc2VsZWN0SWRsZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2VsZWN0U3BpbmUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLnNlbGVjdFNwaW5lLCBhLnNlbGVjdExpZ2h0U3dpdGNoLCBmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZS5fZGF0YS5zdGF0ZSA9PT0gRUpvdXJuZXlNYXBTdGF0ZS5TZWxlY3RlZCkge1xuICAgICAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUoZS5zZWxlY3RTcGluZSwgYS5zZWxlY3RMaWdodElkbGUsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGUuc2VsZWN0U3BpbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG9uTGV2ZWxMb2NrKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuY2FyZFNwaW5lKSAmJiBjYy5pc1ZhbGlkKHRoaXMuc2VsZWN0U3BpbmUpKSB7XG4gICAgICB0aGlzLnNlbGVjdFNwaW5lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuY2FyZFNwaW5lLCBhLmxvY2tlZElkbGUsIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgb25MZXZlbFVubG9jaygpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmNhcmRTcGluZSkgJiYgY2MuaXNWYWxpZCh0aGlzLnNlbGVjdFNwaW5lKSkge1xuICAgICAgdGhpcy5zZWxlY3RTcGluZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLmNhcmRTcGluZSwgYS51bmxvY2tlZElkbGUsIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgb25MZXZlbFVubG9ja1Bhc3MoKSB7XG4gICAgdGhpcy5fZGF0YS5zdGF0ZSA9IEVKb3VybmV5TWFwU3RhdGUuVW5sb2NrZWQ7XG4gICAgdGhpcy5vbkxldmVsVW5sb2NrKCk7XG4gIH1cbiAgb25CdXR0b25DbGljaygpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5jYXJkU3BpbmUpICYmIGNjLmlzVmFsaWQodGhpcy5zZWxlY3RTcGluZSkpIHtcbiAgICAgIHZhciB0ID0gYS5sb2NrZWRUYXAsXG4gICAgICAgIG8gPSBhLmxvY2tlZElkbGU7XG4gICAgICBpZiAodGhpcy5fZGF0YS5zdGF0ZSA9PT0gRUpvdXJuZXlNYXBTdGF0ZS5VbmxvY2tlZCkge1xuICAgICAgICB0ID0gYS51bmxvY2tlZFRhcDtcbiAgICAgICAgbyA9IGEudW5sb2NrZWRJZGxlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9kYXRhLnN0YXRlID09PSBFSm91cm5leU1hcFN0YXRlLlNlbGVjdGVkKSB7XG4gICAgICAgIHQgPSBhLnNlbGVjdFRhcDtcbiAgICAgICAgbyA9IGEuc2VsZWN0SWRsZTtcbiAgICAgIH1cbiAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUodGhpcy5jYXJkU3BpbmUsIHQsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmlzVmFsaWQoZS5jYXJkU3BpbmUpICYmIEdhbWVVdGlscy5wbGF5U3BpbmUoZS5jYXJkU3BpbmUsIG8sIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5nb1RvVHJhdmVsR2FtZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==