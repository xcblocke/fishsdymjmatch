
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_travelValentine/Scripts/scripts/TravelValentineTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0143a/9NTBP87NyhNle7xZ6', 'TravelValentineTrait');
// subpackages/l_travelValentine/Scripts/scripts/TravelValentineTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../../Scripts/framework/manager/ControllerManager");
var TravelMapInterface_1 = require("../../../../Scripts/TravelMapInterface");
var E06GiftBox_1 = require("./E06GiftBox");
var E06Normal_1 = require("./E06Normal");
var E06Rose_1 = require("./E06Rose");
var E06Letter_1 = require("./E06Letter");
var MapElementFactory_1 = require("../../../../Scripts/elements/MapElementFactory");
var GameTypeEnums_1 = require("../../../../Scripts/core/simulator/constant/GameTypeEnums");
var TravelGameModel_1 = require("../../../../Scripts/gamePlay/travel/model/TravelGameModel");
var BaseSprite_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSprite");
var TravelValentineTrait = /** @class */ (function (_super) {
    __extends(TravelValentineTrait, _super);
    function TravelValentineTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TravelValentineTrait.prototype, "startTime", {
        get: function () {
            return this.traitData.special.start;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelValentineTrait.prototype, "endTime", {
        get: function () {
            return this.traitData.special.end;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelValentineTrait.prototype, "journey", {
        get: function () {
            return this.traitData.special.journey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TravelValentineTrait.prototype, "replaceHallTheme", {
        get: function () {
            var e, t;
            return null === (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.replaceHallTheme) || void 0 === t || t;
        },
        enumerable: false,
        configurable: true
    });
    TravelValentineTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerElements();
    };
    TravelValentineTrait.prototype.registerElements = function () {
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06Normal, E06Normal_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06GiftBox1, E06GiftBox_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06GiftBox2, E06GiftBox_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06GiftBox3, E06GiftBox_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06Rose, E06Rose_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06Letter, E06Letter_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06LevelGiftBox1, E06Normal_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06LevelGiftBox2, E06Normal_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06LevelGiftBox3, E06Normal_1.default);
        MapElementFactory_1.MapElementFactory.registerMapElement(TravelMapInterface_1.MapElementId.E06LevelGiftBox4, E06Normal_1.default);
    };
    TravelValentineTrait.prototype.checkInSpecialTime = function () {
        var e = Date.now() / 1000;
        return e >= this.startTime && e <= this.endTime;
    };
    TravelValentineTrait.prototype.isLocalEmpty = function (e) {
        return null == e || "" === e;
    };
    TravelValentineTrait.prototype.getCurSpecialKey = function () {
        return "Special_" + this.journey + "_" + this.startTime + "_" + this.endTime;
    };
    TravelValentineTrait.prototype.canTriggerSpecial = function (e) {
        return !!this.checkInSpecialTime() && !!e.isActiveJourney() && !this.isTriggered();
    };
    TravelValentineTrait.prototype.isTriggered = function () {
        var e = this.getCurSpecialKey(), t = this.localData[e];
        return !this.isLocalEmpty(t);
    };
    TravelValentineTrait.prototype.onJourney_NextSession = function (e, t) {
        if (this.canTriggerSpecial(e.ins)) {
            t({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: [this.journey, -1]
            });
        }
        else {
            t();
        }
    };
    TravelValentineTrait.prototype.onJourney_DoChange = function (e, t) {
        if (this.canTriggerSpecial(e.ins)) {
            var r = __read(e.args, 2), n = r[0], o = r[1];
            if (n === this.journey && o < 0) {
                var i = this.getCurSpecialKey();
                this.localData[i] = new Date().getTime();
            }
        }
        t();
    };
    TravelValentineTrait.prototype.onJourney_doShwActiveVw = function (e, t) {
        var r = e.args[0], n = r.config, o = r.isNewSession;
        if (n.session === this.journey) {
            ControllerManager_1.default.getInstance().pushViewByController("TravelValentineController", {
                config: n,
                isNewSession: o,
                isShowAction: false,
                bgStyle: {
                    blackOpacity: 0
                }
            });
            t({
                returnType: TraitCallbackReturnType.jump
            });
        }
        else
            t();
    };
    TravelValentineTrait.prototype.onJourney_doHideActiveVw = function (e, t) {
        ControllerManager_1.default.getInstance().closeViewByName("TravelValentineController");
        t();
    };
    TravelValentineTrait.prototype.onMainGmVw_afChangeTheme = function (e, t) {
        var r = e.ins;
        if (e.args[0] === GameTypeEnums_1.MjGameType.Travel) {
            if (TravelGameModel_1.default.getInstance().localData.curJourney === this.journey) {
                this.changeBg(r);
                t();
            }
            else
                t();
        }
        else
            t();
    };
    TravelValentineTrait.prototype.changeBg = function (e) {
        if (cc.isValid(e) && cc.isValid(e.gameNode) && cc.isValid(e.node)) {
            var t = e.gameNode.getSiblingIndex(), r = e.node.getChildByName("bg");
            if (cc.isValid(r) || !cc.isValid(r.parent)) {
                var n = r.parent.getChildByName("_valentineBg_");
                cc.isValid(n) && n.destroy();
                var o = new cc.Node("_valentineBg_");
                o.parent = r.parent;
                o.setSiblingIndex(t);
                o.once(BaseSprite_1.SPRITE_LOAD_COMPLETE, function (t) {
                    if (e && cc.isValid(e.node)) {
                        var r = t.spriteFrame;
                        if (r) {
                            if (r.getRect().width > 0 && r.getRect().height > 0) {
                                var n = cc.size(r.getRect().width, r.getRect().height);
                                o.setContentSize(n);
                                var i = cc.Canvas.instance.node.getContentSize(), a = n.width / n.height;
                                if (i.width / i.height > a) {
                                    o.setScale(i.width / n.width);
                                }
                                else {
                                    o.setScale(i.height / n.height);
                                }
                            }
                            var l = e.node.getChildByName("bg");
                            cc.isValid(l) && (l.active = false);
                        }
                    }
                });
                BaseSprite_1.default.refreshWithNode(o, "texture/gameplay_bg_board", false, true, "l_travelValentine");
            }
        }
    };
    TravelValentineTrait.prototype.onHallVw_chgTheme = function (e, t) {
        var r = TravelGameModel_1.default.getInstance(), n = r.getCurJourney();
        if (this.replaceHallTheme) {
            if (e.args[1]) {
                if (n === this.journey) {
                    if (r.isSessionActive()) {
                        e.args[0] = "Hall4";
                        t();
                    }
                    else
                        t();
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    TravelValentineTrait.traitKey = "TravelValentine";
    TravelValentineTrait = __decorate([
        mj.trait,
        mj.class("TravelValentineTrait")
    ], TravelValentineTrait);
    return TravelValentineTrait;
}(Trait_1.default));
exports.default = TravelValentineTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RyYXZlbFZhbGVudGluZS9TY3JpcHRzL3NjcmlwdHMvVHJhdmVsVmFsZW50aW5lVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUE4RDtBQUM5RCw2RkFBd0Y7QUFDeEYsNkVBQXNFO0FBQ3RFLDJDQUFzQztBQUN0Qyx5Q0FBb0M7QUFDcEMscUNBQWdDO0FBQ2hDLHlDQUFvQztBQUNwQyxvRkFBbUY7QUFDbkYsMkZBQXVGO0FBQ3ZGLDZGQUF3RjtBQUN4Riw4RUFBbUc7QUFHbkc7SUFBa0Qsd0NBQUs7SUFBdkQ7O0lBdUpBLENBQUM7SUFySkMsc0JBQUksMkNBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUkseUNBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUkseUNBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksa0RBQWdCO2FBQXBCO1lBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pILENBQUM7OztPQUFBO0lBQ0QscUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1B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Q0FBQztJQXJKTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0F1SnhDO0lBQUQsMkJBQUM7Q0F2SkQsQUF1SkMsQ0F2SmlELGVBQUssR0F1SnREO2tCQXZKb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCB7IE1hcEVsZW1lbnRJZCB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvVHJhdmVsTWFwSW50ZXJmYWNlJztcbmltcG9ydCBFMDZHaWZ0Qm94IGZyb20gJy4vRTA2R2lmdEJveCc7XG5pbXBvcnQgRTA2Tm9ybWFsIGZyb20gJy4vRTA2Tm9ybWFsJztcbmltcG9ydCBFMDZSb3NlIGZyb20gJy4vRTA2Um9zZSc7XG5pbXBvcnQgRTA2TGV0dGVyIGZyb20gJy4vRTA2TGV0dGVyJztcbmltcG9ydCB7IE1hcEVsZW1lbnRGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9lbGVtZW50cy9NYXBFbGVtZW50RmFjdG9yeSc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmF2ZWxHYW1lTW9kZWwgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS90cmF2ZWwvbW9kZWwvVHJhdmVsR2FtZU1vZGVsJztcbmltcG9ydCBCYXNlU3ByaXRlLCB7IFNQUklURV9MT0FEX0NPTVBMRVRFIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcHJpdGUnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUcmF2ZWxWYWxlbnRpbmVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhdmVsVmFsZW50aW5lVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVHJhdmVsVmFsZW50aW5lXCI7XG4gIGdldCBzdGFydFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhaXREYXRhLnNwZWNpYWwuc3RhcnQ7XG4gIH1cbiAgZ2V0IGVuZFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhaXREYXRhLnNwZWNpYWwuZW5kO1xuICB9XG4gIGdldCBqb3VybmV5KCkge1xuICAgIHJldHVybiB0aGlzLnRyYWl0RGF0YS5zcGVjaWFsLmpvdXJuZXk7XG4gIH1cbiAgZ2V0IHJlcGxhY2VIYWxsVGhlbWUoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgcmV0dXJuIG51bGwgPT09ICh0ID0gbnVsbCA9PT0gKGUgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5yZXBsYWNlSGFsbFRoZW1lKSB8fCB2b2lkIDAgPT09IHQgfHwgdDtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZWdpc3RlckVsZW1lbnRzKCk7XG4gIH1cbiAgcmVnaXN0ZXJFbGVtZW50cygpIHtcbiAgICBNYXBFbGVtZW50RmFjdG9yeS5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwNk5vcm1hbCwgRTA2Tm9ybWFsKTtcbiAgICBNYXBFbGVtZW50RmFjdG9yeS5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwNkdpZnRCb3gxLCBFMDZHaWZ0Qm94KTtcbiAgICBNYXBFbGVtZW50RmFjdG9yeS5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwNkdpZnRCb3gyLCBFMDZHaWZ0Qm94KTtcbiAgICBNYXBFbGVtZW50RmFjdG9yeS5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwNkdpZnRCb3gzLCBFMDZHaWZ0Qm94KTtcbiAgICBNYXBFbGVtZW50RmFjdG9yeS5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwNlJvc2UsIEUwNlJvc2UpO1xuICAgIE1hcEVsZW1lbnRGYWN0b3J5LnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTA2TGV0dGVyLCBFMDZMZXR0ZXIpO1xuICAgIE1hcEVsZW1lbnRGYWN0b3J5LnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTA2TGV2ZWxHaWZ0Qm94MSwgRTA2Tm9ybWFsKTtcbiAgICBNYXBFbGVtZW50RmFjdG9yeS5yZWdpc3Rlck1hcEVsZW1lbnQoTWFwRWxlbWVudElkLkUwNkxldmVsR2lmdEJveDIsIEUwNk5vcm1hbCk7XG4gICAgTWFwRWxlbWVudEZhY3RvcnkucmVnaXN0ZXJNYXBFbGVtZW50KE1hcEVsZW1lbnRJZC5FMDZMZXZlbEdpZnRCb3gzLCBFMDZOb3JtYWwpO1xuICAgIE1hcEVsZW1lbnRGYWN0b3J5LnJlZ2lzdGVyTWFwRWxlbWVudChNYXBFbGVtZW50SWQuRTA2TGV2ZWxHaWZ0Qm94NCwgRTA2Tm9ybWFsKTtcbiAgfVxuICBjaGVja0luU3BlY2lhbFRpbWUoKSB7XG4gICAgdmFyIGUgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICByZXR1cm4gZSA+PSB0aGlzLnN0YXJ0VGltZSAmJiBlIDw9IHRoaXMuZW5kVGltZTtcbiAgfVxuICBpc0xvY2FsRW1wdHkoZSkge1xuICAgIHJldHVybiBudWxsID09IGUgfHwgXCJcIiA9PT0gZTtcbiAgfVxuICBnZXRDdXJTcGVjaWFsS2V5KCkge1xuICAgIHJldHVybiBcIlNwZWNpYWxfXCIgKyB0aGlzLmpvdXJuZXkgKyBcIl9cIiArIHRoaXMuc3RhcnRUaW1lICsgXCJfXCIgKyB0aGlzLmVuZFRpbWU7XG4gIH1cbiAgY2FuVHJpZ2dlclNwZWNpYWwoZSkge1xuICAgIHJldHVybiAhIXRoaXMuY2hlY2tJblNwZWNpYWxUaW1lKCkgJiYgISFlLmlzQWN0aXZlSm91cm5leSgpICYmICF0aGlzLmlzVHJpZ2dlcmVkKCk7XG4gIH1cbiAgaXNUcmlnZ2VyZWQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldEN1clNwZWNpYWxLZXkoKSxcbiAgICAgIHQgPSB0aGlzLmxvY2FsRGF0YVtlXTtcbiAgICByZXR1cm4gIXRoaXMuaXNMb2NhbEVtcHR5KHQpO1xuICB9XG4gIG9uSm91cm5leV9OZXh0U2Vzc2lvbihlLCB0KSB7XG4gICAgaWYgKHRoaXMuY2FuVHJpZ2dlclNwZWNpYWwoZS5pbnMpKSB7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IFt0aGlzLmpvdXJuZXksIC0xXVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgb25Kb3VybmV5X0RvQ2hhbmdlKGUsIHQpIHtcbiAgICBpZiAodGhpcy5jYW5UcmlnZ2VyU3BlY2lhbChlLmlucykpIHtcbiAgICAgIHZhciByID0gX19yZWFkKGUuYXJncywgMiksXG4gICAgICAgIG4gPSByWzBdLFxuICAgICAgICBvID0gclsxXTtcbiAgICAgIGlmIChuID09PSB0aGlzLmpvdXJuZXkgJiYgbyA8IDApIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmdldEN1clNwZWNpYWxLZXkoKTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGFbaV0gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdCgpO1xuICB9XG4gIG9uSm91cm5leV9kb1Nod0FjdGl2ZVZ3KGUsIHQpIHtcbiAgICB2YXIgciA9IGUuYXJnc1swXSxcbiAgICAgIG4gPSByLmNvbmZpZyxcbiAgICAgIG8gPSByLmlzTmV3U2Vzc2lvbjtcbiAgICBpZiAobi5zZXNzaW9uID09PSB0aGlzLmpvdXJuZXkpIHtcbiAgICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJUcmF2ZWxWYWxlbnRpbmVDb250cm9sbGVyXCIsIHtcbiAgICAgICAgY29uZmlnOiBuLFxuICAgICAgICBpc05ld1Nlc3Npb246IG8sXG4gICAgICAgIGlzU2hvd0FjdGlvbjogZmFsc2UsXG4gICAgICAgIGJnU3R5bGU6IHtcbiAgICAgICAgICBibGFja09wYWNpdHk6IDBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbkpvdXJuZXlfZG9IaWRlQWN0aXZlVncoZSwgdCkge1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2xvc2VWaWV3QnlOYW1lKFwiVHJhdmVsVmFsZW50aW5lQ29udHJvbGxlclwiKTtcbiAgICB0KCk7XG4gIH1cbiAgb25NYWluR21Wd19hZkNoYW5nZVRoZW1lKGUsIHQpIHtcbiAgICB2YXIgciA9IGUuaW5zO1xuICAgIGlmIChlLmFyZ3NbMF0gPT09IE1qR2FtZVR5cGUuVHJhdmVsKSB7XG4gICAgICBpZiAoVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkubG9jYWxEYXRhLmN1ckpvdXJuZXkgPT09IHRoaXMuam91cm5leSkge1xuICAgICAgICB0aGlzLmNoYW5nZUJnKHIpO1xuICAgICAgICB0KCk7XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgY2hhbmdlQmcoZSkge1xuICAgIGlmIChjYy5pc1ZhbGlkKGUpICYmIGNjLmlzVmFsaWQoZS5nYW1lTm9kZSkgJiYgY2MuaXNWYWxpZChlLm5vZGUpKSB7XG4gICAgICB2YXIgdCA9IGUuZ2FtZU5vZGUuZ2V0U2libGluZ0luZGV4KCksXG4gICAgICAgIHIgPSBlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHIpIHx8ICFjYy5pc1ZhbGlkKHIucGFyZW50KSkge1xuICAgICAgICB2YXIgbiA9IHIucGFyZW50LmdldENoaWxkQnlOYW1lKFwiX3ZhbGVudGluZUJnX1wiKTtcbiAgICAgICAgY2MuaXNWYWxpZChuKSAmJiBuLmRlc3Ryb3koKTtcbiAgICAgICAgdmFyIG8gPSBuZXcgY2MuTm9kZShcIl92YWxlbnRpbmVCZ19cIik7XG4gICAgICAgIG8ucGFyZW50ID0gci5wYXJlbnQ7XG4gICAgICAgIG8uc2V0U2libGluZ0luZGV4KHQpO1xuICAgICAgICBvLm9uY2UoU1BSSVRFX0xPQURfQ09NUExFVEUsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgaWYgKGUgJiYgY2MuaXNWYWxpZChlLm5vZGUpKSB7XG4gICAgICAgICAgICB2YXIgciA9IHQuc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICBpZiAoci5nZXRSZWN0KCkud2lkdGggPiAwICYmIHIuZ2V0UmVjdCgpLmhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGNjLnNpemUoci5nZXRSZWN0KCkud2lkdGgsIHIuZ2V0UmVjdCgpLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgby5zZXRDb250ZW50U2l6ZShuKTtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbnRlbnRTaXplKCksXG4gICAgICAgICAgICAgICAgICBhID0gbi53aWR0aCAvIG4uaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlmIChpLndpZHRoIC8gaS5oZWlnaHQgPiBhKSB7XG4gICAgICAgICAgICAgICAgICBvLnNldFNjYWxlKGkud2lkdGggLyBuLndpZHRoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgby5zZXRTY2FsZShpLmhlaWdodCAvIG4uaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIGwgPSBlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKTtcbiAgICAgICAgICAgICAgY2MuaXNWYWxpZChsKSAmJiAobC5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUobywgXCJ0ZXh0dXJlL2dhbWVwbGF5X2JnX2JvYXJkXCIsIGZhbHNlLCB0cnVlLCBcImxfdHJhdmVsVmFsZW50aW5lXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkhhbGxWd19jaGdUaGVtZShlLCB0KSB7XG4gICAgdmFyIHIgPSBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIG4gPSByLmdldEN1ckpvdXJuZXkoKTtcbiAgICBpZiAodGhpcy5yZXBsYWNlSGFsbFRoZW1lKSB7XG4gICAgICBpZiAoZS5hcmdzWzFdKSB7XG4gICAgICAgIGlmIChuID09PSB0aGlzLmpvdXJuZXkpIHtcbiAgICAgICAgICBpZiAoci5pc1Nlc3Npb25BY3RpdmUoKSkge1xuICAgICAgICAgICAgZS5hcmdzWzBdID0gXCJIYWxsNFwiO1xuICAgICAgICAgICAgdCgpO1xuICAgICAgICAgIH0gZWxzZSB0KCk7XG4gICAgICAgIH0gZWxzZSB0KCk7XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbn0iXX0=