
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/E01Normal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c38edaXTu1Gv5ccTPjvSJLu', 'E01Normal');
// Scripts/E01Normal.ts

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
var E01Normal = /** @class */ (function (_super) {
    __extends(E01Normal, _super);
    function E01Normal() {
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
    E01Normal.prototype.uiOnLoad = function () {
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
    E01Normal.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
        this.hookNode(this.animProxy, "hook_level", this.titleLabel.node, this.levelParent);
        this.hookNode(this.animProxy, "hook_level", this.boxNode, this.levelParent);
        this.titleLabel.string = "" + this._data.level;
        this.updateReward();
    };
    E01Normal.prototype.resetState = function () {
        cc.Tween.stopAllByTarget(this.titleLabel.node);
        this.cardSpine.paused = true;
        this.selectSpine.paused = true;
        this.selectSpine.node.active = false;
    };
    E01Normal.prototype.updateReward = function () {
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
    E01Normal.prototype.onLevelSelect = function () {
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
    E01Normal.prototype.onLevelLock = function () {
        if (cc.isValid(this.cardSpine) && cc.isValid(this.selectSpine)) {
            this.selectSpine.node.active = false;
            GameUtils_1.default.playSpine(this.cardSpine, a.lockedIdle, false);
        }
    };
    E01Normal.prototype.onLevelUnlock = function () {
        if (cc.isValid(this.cardSpine) && cc.isValid(this.selectSpine)) {
            this.selectSpine.node.active = false;
            GameUtils_1.default.playSpine(this.cardSpine, a.unlockedIdle, false);
        }
    };
    E01Normal.prototype.onLevelUnlockPass = function () {
        this._data.state = TravelMapInterface_1.EJourneyMapState.Unlocked;
        this.onLevelUnlock();
    };
    E01Normal.prototype.onButtonClick = function () {
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
    E01Normal.prefabUrl = "prefabs/journeyMap/01/E01Normal";
    E01Normal.size = new cc.Size(146, 164);
    E01Normal = __decorate([
        mj.class
    ], E01Normal);
    return E01Normal;
}(ElementLevel_1.default));
exports.default = E01Normal;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0UwMU5vcm1hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTBDO0FBQzFDLDJEQUEwRTtBQUMxRSw2REFBd0Q7QUFDeEQsMERBQXFEO0FBQ3JELDREQUF1RDtBQUN2RCx5RUFBbUU7QUFDbkUsSUFBSSxDQUFDLEdBQUc7SUFDTixVQUFVLEVBQUUsYUFBYTtJQUN6QixTQUFTLEVBQUUsWUFBWTtJQUN2QixZQUFZLEVBQUUsZUFBZTtJQUM3QixXQUFXLEVBQUUsY0FBYztJQUMzQixVQUFVLEVBQUUsZ0JBQWdCO0lBQzVCLFNBQVMsRUFBRSxlQUFlO0lBQzFCLFlBQVksRUFBRSxjQUFjO0lBQzVCLGVBQWUsRUFBRSxxQkFBcUI7SUFDdEMsaUJBQWlCLEVBQUUsbUJBQW1CO0NBQ3ZDLENBQUM7QUFFRjtJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQW1IQztRQWxIQyxnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGFBQU8sR0FBRyxJQUFJLENBQUM7O0lBNEdqQixDQUFDO0lBekdDLDRCQUFRLEdBQVI7UUFDRSxpQkFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFD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SUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUsscUNBQWdCLENBQUMsUUFBUSxFQUFFO2dCQUN6RCxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7YUFDbEI7WUFDRCxtQkFBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUU7Z0JBQzVDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLG1CQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hFLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQTFHTSxtQkFBUyxHQUFHLGlDQUFpQyxDQUFDO0lBQzlDLGNBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBVGpCLFNBQVM7UUFEN0IsRUFBRSxDQUFDLEtBQUs7T0FDWSxTQUFTLENBbUg3QjtJQUFELGdCQUFDO0NBbkhELEFBbUhDLENBbkhzQyxzQkFBWSxHQW1IbEQ7a0JBbkhvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVsZW1lbnRMZXZlbCBmcm9tICcuL0VsZW1lbnRMZXZlbCc7XG5pbXBvcnQgeyBMZXZlbEJveEljb25QYXRoLCBFSm91cm5leU1hcFN0YXRlIH0gZnJvbSAnLi9UcmF2ZWxNYXBJbnRlcmZhY2UnO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG52YXIgYSA9IHtcbiAgbG9ja2VkSWRsZTogXCJsb2NrZWRfaWRsZVwiLFxuICBsb2NrZWRUYXA6IFwibG9ja2VkX3RhcFwiLFxuICB1bmxvY2tlZElkbGU6IFwidW5sb2NrZWRfaWRsZVwiLFxuICB1bmxvY2tlZFRhcDogXCJ1bmxvY2tlZF90YXBcIixcbiAgc2VsZWN0SWRsZTogXCJ1bmxvY2tpbmdfaWRsZVwiLFxuICBzZWxlY3RUYXA6IFwidW5sb2NraW5nX3RhcFwiLFxuICBzZWxlY3RTd2l0Y2g6IFwidW5sb2NraW5nX2luXCIsXG4gIHNlbGVjdExpZ2h0SWRsZTogXCJ1bmxvY2tpbmdfaWRsZV9pbml0XCIsXG4gIHNlbGVjdExpZ2h0U3dpdGNoOiBcInVubG9ja2luZ19pZGxlX2luXCJcbn07XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEUwMU5vcm1hbCBleHRlbmRzIEVsZW1lbnRMZXZlbCB7XG4gIHRpdGxlTGFiZWwgPSBudWxsO1xuICBidXR0b24gPSBudWxsO1xuICBjYXJkU3BpbmUgPSBudWxsO1xuICBzZWxlY3RTcGluZSA9IG51bGw7XG4gIGFuaW1Qcm94eSA9IG51bGw7XG4gIGxldmVsUGFyZW50ID0gbnVsbDtcbiAgYm94Tm9kZSA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvam91cm5leU1hcC8wMS9FMDFOb3JtYWxcIjtcbiAgc3RhdGljIHNpemUgPSBuZXcgY2MuU2l6ZSgxNDYsIDE2NCk7XG4gIHVpT25Mb2FkKCkge1xuICAgIHN1cGVyLnVpT25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy50aXRsZUxhYmVsID0gY2MuZmluZChcIkVsZW1lbnQvTGV2ZWxcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuY2FyZFNwaW5lID0gY2MuZmluZChcIkVsZW1lbnQvQ2FyZFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgdGhpcy5zZWxlY3RTcGluZSA9IGNjLmZpbmQoXCJFbGVtZW50L1NlbGVjdFwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgdGhpcy5idXR0b24gPSBjYy5maW5kKFwiRWxlbWVudFwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuYW5pbVByb3h5ID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZSh0aGlzLmNhcmRTcGluZS5ub2RlKTtcbiAgICB0aGlzLmFuaW1Qcm94eS5yZXNldChcIlwiKTtcbiAgICB0aGlzLmFuaW1Qcm94eS5tYXJrUmVhZHkoXCJcIik7XG4gICAgdGhpcy5sZXZlbFBhcmVudCA9IGNjLmZpbmQoXCJFbGVtZW50XCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5ib3hOb2RlID0gY2MuZmluZChcIkVsZW1lbnQvQm94XCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5hZGRMZXZlbEJ0bkNsaWNrKHRoaXMuYnV0dG9uLCB0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzKSwge1xuICAgICAgY2xpY2tBdWRpbzogRUF1ZGlvSUQuVHJhdmVsQnV0dG9uMVxuICAgIH0pO1xuICB9XG4gIHVwZGF0ZVVJKCkge1xuICAgIHN1cGVyLnVwZGF0ZVVJLmNhbGwodGhpcyk7XG4gICAgdGhpcy5ob29rTm9kZSh0aGlzLmFuaW1Qcm94eSwgXCJob29rX2xldmVsXCIsIHRoaXMudGl0bGVMYWJlbC5ub2RlLCB0aGlzLmxldmVsUGFyZW50KTtcbiAgICB0aGlzLmhvb2tOb2RlKHRoaXMuYW5pbVByb3h5LCBcImhvb2tfbGV2ZWxcIiwgdGhpcy5ib3hOb2RlLCB0aGlzLmxldmVsUGFyZW50KTtcbiAgICB0aGlzLnRpdGxlTGFiZWwuc3RyaW5nID0gXCJcIiArIHRoaXMuX2RhdGEubGV2ZWw7XG4gICAgdGhpcy51cGRhdGVSZXdhcmQoKTtcbiAgfVxuICByZXNldFN0YXRlKCkge1xuICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnRpdGxlTGFiZWwubm9kZSk7XG4gICAgdGhpcy5jYXJkU3BpbmUucGF1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGVjdFNwaW5lLnBhdXNlZCA9IHRydWU7XG4gICAgdGhpcy5zZWxlY3RTcGluZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG4gIHVwZGF0ZVJld2FyZCgpIHtcbiAgICB2YXIgZSA9IExldmVsQm94SWNvblBhdGhbdGhpcy5fZGF0YS50eXBlXTtcbiAgICBpZiAoZSkge1xuICAgICAgdmFyIHQgPSB0aGlzLl9kYXRhLnN0YXRlID09PSBFSm91cm5leU1hcFN0YXRlLlVubG9ja2VkID8gZS5vcGVuUGF0aCA6IGUucGF0aDtcbiAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuYm94Tm9kZSwgdCwgZS5hdGxhcyk7XG4gICAgICB0aGlzLmJveE5vZGUuc2V0U2NhbGUoZS5zY2FsZSk7XG4gICAgICB0aGlzLmJveE5vZGUuc2V0UG9zaXRpb24oZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuICAgICAgdGhpcy50aXRsZUxhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmJveE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ib3hOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy50aXRsZUxhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgb25MZXZlbFNlbGVjdCgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5jYXJkU3BpbmUpICYmIGNjLmlzVmFsaWQodGhpcy5zZWxlY3RTcGluZSkpIGlmICh0aGlzLl9kYXRhLmlzU2VsZWN0KSB7XG4gICAgICB0aGlzLnNlbGVjdFNwaW5lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUodGhpcy5jYXJkU3BpbmUsIGEuc2VsZWN0SWRsZSwgdHJ1ZSk7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuc2VsZWN0U3BpbmUsIGEuc2VsZWN0TGlnaHRJZGxlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YS5pc1NlbGVjdCA9IHRydWU7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuY2FyZFNwaW5lLCBhLnNlbGVjdFN3aXRjaCwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGUuX2RhdGEuc3RhdGUgPT09IEVKb3VybmV5TWFwU3RhdGUuVW5sb2NrZWQpIHtcbiAgICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKGUuY2FyZFNwaW5lLCBhLnVubG9ja2VkSWRsZSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGUuX2RhdGEuc3RhdGUgPT09IEVKb3VybmV5TWFwU3RhdGUuTG9ja2VkKSB7XG4gICAgICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKGUuY2FyZFNwaW5lLCBhLmxvY2tlZElkbGUsIHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLl9kYXRhLnN0YXRlID09PSBFSm91cm5leU1hcFN0YXRlLlNlbGVjdGVkICYmIEdhbWVVdGlscy5wbGF5U3BpbmUoZS5jYXJkU3BpbmUsIGEuc2VsZWN0SWRsZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2VsZWN0U3BpbmUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLnNlbGVjdFNwaW5lLCBhLnNlbGVjdExpZ2h0U3dpdGNoLCBmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZS5fZGF0YS5zdGF0ZSA9PT0gRUpvdXJuZXlNYXBTdGF0ZS5TZWxlY3RlZCkge1xuICAgICAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUoZS5zZWxlY3RTcGluZSwgYS5zZWxlY3RMaWdodElkbGUsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGUuc2VsZWN0U3BpbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG9uTGV2ZWxMb2NrKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuY2FyZFNwaW5lKSAmJiBjYy5pc1ZhbGlkKHRoaXMuc2VsZWN0U3BpbmUpKSB7XG4gICAgICB0aGlzLnNlbGVjdFNwaW5lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuY2FyZFNwaW5lLCBhLmxvY2tlZElkbGUsIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgb25MZXZlbFVubG9jaygpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmNhcmRTcGluZSkgJiYgY2MuaXNWYWxpZCh0aGlzLnNlbGVjdFNwaW5lKSkge1xuICAgICAgdGhpcy5zZWxlY3RTcGluZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLmNhcmRTcGluZSwgYS51bmxvY2tlZElkbGUsIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgb25MZXZlbFVubG9ja1Bhc3MoKSB7XG4gICAgdGhpcy5fZGF0YS5zdGF0ZSA9IEVKb3VybmV5TWFwU3RhdGUuVW5sb2NrZWQ7XG4gICAgdGhpcy5vbkxldmVsVW5sb2NrKCk7XG4gIH1cbiAgb25CdXR0b25DbGljaygpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5jYXJkU3BpbmUpICYmIGNjLmlzVmFsaWQodGhpcy5zZWxlY3RTcGluZSkpIHtcbiAgICAgIHZhciB0ID0gYS5sb2NrZWRUYXAsXG4gICAgICAgIG8gPSBhLmxvY2tlZElkbGU7XG4gICAgICBpZiAodGhpcy5fZGF0YS5zdGF0ZSA9PT0gRUpvdXJuZXlNYXBTdGF0ZS5VbmxvY2tlZCkge1xuICAgICAgICB0ID0gYS51bmxvY2tlZFRhcDtcbiAgICAgICAgbyA9IGEudW5sb2NrZWRJZGxlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9kYXRhLnN0YXRlID09PSBFSm91cm5leU1hcFN0YXRlLlNlbGVjdGVkKSB7XG4gICAgICAgIHQgPSBhLnNlbGVjdFRhcDtcbiAgICAgICAgbyA9IGEuc2VsZWN0SWRsZTtcbiAgICAgIH1cbiAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUodGhpcy5jYXJkU3BpbmUsIHQsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmlzVmFsaWQoZS5jYXJkU3BpbmUpICYmIEdhbWVVdGlscy5wbGF5U3BpbmUoZS5jYXJkU3BpbmUsIG8sIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5nb1RvVHJhdmVsR2FtZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==