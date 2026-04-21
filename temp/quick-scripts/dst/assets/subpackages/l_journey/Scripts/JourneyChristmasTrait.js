
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_journey/Scripts/JourneyChristmasTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '72233ZCguJLvq0QRcFCIXHY', 'JourneyChristmasTrait');
// subpackages/l_journey/Scripts/JourneyChristmasTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TravelGameData_1 = require("../../../Scripts/core/simulator/data/TravelGameData");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var JourneyChristmasTrait = /** @class */ (function (_super) {
    __extends(JourneyChristmasTrait, _super);
    function JourneyChristmasTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.needRestore = false;
        return _this;
    }
    JourneyChristmasTrait_1 = JourneyChristmasTrait;
    Object.defineProperty(JourneyChristmasTrait.prototype, "startTime", {
        get: function () {
            return this.traitData.special.start;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JourneyChristmasTrait.prototype, "endTime", {
        get: function () {
            return this.traitData.special.end;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JourneyChristmasTrait.prototype, "journey", {
        get: function () {
            return this.traitData.special.journey;
        },
        enumerable: false,
        configurable: true
    });
    JourneyChristmasTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    JourneyChristmasTrait.prototype.checkInSpecialTime = function () {
        var t = Date.now() / 1000;
        return t >= this.startTime && t <= this.endTime;
    };
    JourneyChristmasTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    JourneyChristmasTrait.prototype.getCurSpecialKey = function () {
        return "Special_" + this.journey + "_" + this.startTime + "_" + this.endTime;
    };
    JourneyChristmasTrait.prototype.canTriggerSpecial = function (t) {
        return !!this.checkInSpecialTime() && !!t.isActiveJourney() && !this.isTriggered();
    };
    JourneyChristmasTrait.prototype.isTriggered = function () {
        var t = this.getCurSpecialKey(), e = this.localData[t];
        return !this.isLocalEmpty(e);
    };
    JourneyChristmasTrait.prototype.onJourney_IsSessionEnd = function (t, e) {
        if (this.canTriggerSpecial(t.ins)) {
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    JourneyChristmasTrait.prototype.onJourney_NextSession = function (t, e) {
        if (this.canTriggerSpecial(t.ins))
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: [this.journey, -1]
            });
        else {
            var r = TravelGameModel_1.default.getInstance().getCurJourney(), o = TravelGameModel_1.default.getInstance().isSpecialSession();
            if (this.isTriggered() && r === this.journey && o) {
                var n = this.getLastJourney();
                if (n.length > 0) {
                    var i = __read(n, 2), s = i[0], c = i[1];
                    return e({
                        returnType: TraitCallbackReturnType.return,
                        isBreak: true,
                        returnVal: [s, c]
                    });
                }
            }
            e();
        }
    };
    JourneyChristmasTrait.prototype.onJourney_DoChange = function (t, e) {
        if (this.canTriggerSpecial(t.ins)) {
            var r = __read(t.args, 2), o = r[0], n = r[1];
            if (o === this.journey && n < 0) {
                var i = this.getCurSpecialKey();
                this.localData[i] = new Date().getTime();
            }
        }
        else if (this.needRestore) {
            this.needRestore = false;
            var c = this.getLastJourney();
            if (3 === c.length) {
                var l = __read(c, 3), u = (l[0], l[1], l[2]);
                TravelGameData_1.default.getInstance().setLevelId(u);
                this.localData.lastJourney = [];
            }
        }
        e();
    };
    JourneyChristmasTrait.prototype.onTLGameModel_activeSession = function (t, e) {
        var r = __read(t.args, 4), o = r[0], n = (r[1], r[2], r[3]);
        if (o === this.journey && n < 0) {
            var i = (p = t.ins).getCurJourney(), c = p.getCurSessionIndex();
            if ("" !== i && c >= 0 && !p.isComplete(i)) {
                var l = TravelGameData_1.default.getInstance().getLevelId();
                this.setLastJourney(i, c, l);
            }
        }
        else {
            var u = this.getLastJourney();
            if (u.length > 0) {
                i = (p = t.ins).getCurJourney();
                var p, f = p.isSpecialSession(), y = __read(u, 1)[0];
                this.journey === i && f && y === o && (this.needRestore = true);
            }
        }
        e();
    };
    JourneyChristmasTrait.prototype.onTravelBtn_updateUI = function (t, e) {
        this.updateTravelBtnUI(t);
        e();
    };
    JourneyChristmasTrait.prototype.updateTravelBtnUI = function (t) {
        try {
            var e = t.ins, o = t.args[0];
            if (cc.isValid(e.node)) {
                var n = cc.find("Root/BgWood", e.node), i = cc.find("Root/BgBtn", e.node), a = cc.find("Root/Timer/Time", e.node), s = cc.find("Root/Timer/Icon", e.node), c = cc.find("Root/Title", e.node), l = cc.find("Root/Timer/Icon_new", e.node), p = cc.find("Root/BgWood_new", e.node), f = cc.find("Root/BgBtn_new", e.node);
                if (o === this.journey) {
                    n.active = false;
                    i.active = false;
                    s.active = false;
                    if (!cc.isValid(p)) {
                        (p = BaseSprite_1.default.create("texture/journey/main_btn_green").node).name = "BgWood_new";
                        p.active = true;
                        p.parent = n.parent;
                        p.setPosition(n.position);
                        p.setSiblingIndex(n.getSiblingIndex());
                    }
                    if (!cc.isValid(f)) {
                        (f = BaseSprite_1.default.create("texture/journey/main_btn_red").node).name = "BgBtn_new";
                        f.active = true;
                        f.parent = i.parent;
                        f.setPosition(cc.v2(i.position.x + 2, i.position.y - 18));
                        f.setSiblingIndex(i.getSiblingIndex());
                    }
                    if (!cc.isValid(l)) {
                        (l = BaseSprite_1.default.create("texture/journey/main_img_time").node).name = "Icon_new";
                        l.active = true;
                        l.parent = s.parent;
                        l.setPosition(s.position);
                        l.setSiblingIndex(s.getSiblingIndex());
                    }
                    if (!a._originalColor_) {
                        a._originalColor_ = a.color;
                        a.color = cc.color(237, 112, 112, 255);
                    }
                    if (!c._originalColor_) {
                        c._originalColor_ = c.color;
                        c.color = cc.color(255, 234, 229, 255);
                    }
                }
                else {
                    n.active = true;
                    i.active = true;
                    s.active = true;
                    cc.isValid(p) && (p.active = false);
                    cc.isValid(f) && (f.active = false);
                    cc.isValid(l) && (l.active = false);
                    a._originalColor_ && (a.color = a._originalColor_);
                    c._originalColor_ && (c.color = c._originalColor_);
                }
            }
        }
        catch (t) {
            console.error("[" + JourneyChristmasTrait_1.traitKey + "] 更新旅行按钮UI失败:" + ((null == t ? void 0 : t.message) || "未知错误"));
        }
    };
    JourneyChristmasTrait.prototype.isInSpecialJourney = function () {
        if (this.checkInSpecialTime() && !this.isTriggered())
            return true;
        if (this.isTriggered()) {
            var t = TravelGameModel_1.default.getInstance().getCurJourney(), e = TravelGameModel_1.default.getInstance().isSpecialSession();
            return !(t !== this.journey || !e);
        }
        return false;
    };
    JourneyChristmasTrait.prototype.onHallVw_travelChange = function (t, e) {
        this.updateHallUI(t.ins);
        e();
    };
    JourneyChristmasTrait.prototype.onHallVw_initBtns = function (t, e) {
        this.updateHallUI(t.ins);
        e();
    };
    JourneyChristmasTrait.prototype.updateHallUI = function (t) {
        try {
            if (this.isInSpecialJourney()) {
                this.replaceChristmasHallUI(t);
            }
            else {
                this.restoreChristmasHallUI(t);
            }
        }
        catch (t) {
            console.error("[" + JourneyChristmasTrait_1.traitKey + "] 更新大厅界面UI失败:" + ((null == t ? void 0 : t.message) || "未知错误"));
        }
    };
    JourneyChristmasTrait.prototype.replaceChristmasHallUI = function (t) {
        if (cc.isValid(t.node) && !t.isSimpleHall()) {
            var e = cc.find("Mask/Anim", t.node), r = cc.find("Mask/Img", t.node), o = cc.find("Anim_new", t.node), n = cc.find("Img_new", t.node);
            if (!cc.isValid(o)) {
                (o = cc.instantiate(e)).name = "Anim_new";
                o.active = true;
                o.parent = e.parent;
                o.setSiblingIndex(e.getSiblingIndex());
                BaseSpine_1.default.refreshWithNode(o, "spine/hall/main_snowScene_christmas").setAnimation("init", -1);
            }
            if (!cc.isValid(n)) {
                (n = cc.instantiate(r)).name = "Img_new";
                n.active = true;
                n.parent = r.parent;
                n.setSiblingIndex(r.getSiblingIndex());
                BaseSprite_1.default.refreshWithNode(n, "texture/hall/main_snowScene_bg_christmas", false);
            }
            e.active = false;
            e.opacity = 0;
            r.active = false;
            r.opacity = 0;
        }
    };
    JourneyChristmasTrait.prototype.restoreChristmasHallUI = function (t) {
        if (cc.isValid(t.node) && !t.isSimpleHall()) {
            var e = cc.find("Mask/Anim", t.node), r = cc.find("Mask/Img", t.node), o = cc.find("Anim_new", t.node), n = cc.find("Img_new", t.node);
            e.active = true;
            r.active = true;
            e.opacity = 255;
            r.opacity = 255;
            cc.isValid(o) && (o.active = false);
            cc.isValid(n) && (n.active = false);
        }
    };
    JourneyChristmasTrait.prototype.setLastJourney = function (t, e, r) {
        this.localData.lastJourney = [t, e, r];
    };
    JourneyChristmasTrait.prototype.getLastJourney = function () {
        return this.isLocalEmpty(this.localData.lastJourney) ? [] : this.localData.lastJourney;
    };
    var JourneyChristmasTrait_1;
    JourneyChristmasTrait.traitKey = "JourneyChristmas";
    JourneyChristmasTrait = JourneyChristmasTrait_1 = __decorate([
        mj.trait,
        mj.class("JourneyChristmasTrait")
    ], JourneyChristmasTrait);
    return JourneyChristmasTrait;
}(Trait_1.default));
exports.default = JourneyChristmasTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2pvdXJuZXkvU2NyaXB0cy9Kb3VybmV5Q2hyaXN0bWFzVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNGQUFpRjtBQUNqRixnRUFBMkQ7QUFDM0QseUVBQW9FO0FBQ3BFLDJFQUFzRTtBQUN0RSwwRkFBcUY7QUFHckY7SUFBbUQseUNBQUs7SUFBeEQ7UUFBQSxxRUEyUEM7UUExUEMsaUJBQVcsR0FBRyxLQUFLLENBQUM7O0lBMFB0QixDQUFDOzhCQTNQb0IscUJBQXFCO0lBR3hDLHNCQUFJLDRDQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDBDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDBDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUNELHNDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxrREFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDbEQsQ0FBQztJQUNELDRDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELGdEQUFnQixHQUFoQjtRQUNFLE9BQU8sVUFB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Q0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztJQUN6RixDQUFDOztJQXhQTSw4QkFBUSxHQUFHLGtCQUFrQixDQUFDO0lBRmxCLHFCQUFxQjtRQUZ6QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0EyUHpDO0lBQUQsNEJBQUM7Q0EzUEQsQUEyUEMsQ0EzUGtELGVBQUssR0EyUHZEO2tCQTNQb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYXZlbEdhbWVEYXRhIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvZGF0YS9UcmF2ZWxHYW1lRGF0YSc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCBUcmF2ZWxHYW1lTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS90cmF2ZWwvbW9kZWwvVHJhdmVsR2FtZU1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiSm91cm5leUNocmlzdG1hc1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKb3VybmV5Q2hyaXN0bWFzVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIG5lZWRSZXN0b3JlID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiSm91cm5leUNocmlzdG1hc1wiO1xuICBnZXQgc3RhcnRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRyYWl0RGF0YS5zcGVjaWFsLnN0YXJ0O1xuICB9XG4gIGdldCBlbmRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRyYWl0RGF0YS5zcGVjaWFsLmVuZDtcbiAgfVxuICBnZXQgam91cm5leSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFpdERhdGEuc3BlY2lhbC5qb3VybmV5O1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBjaGVja0luU3BlY2lhbFRpbWUoKSB7XG4gICAgdmFyIHQgPSBEYXRlLm5vdygpIC8gMTAwMDtcbiAgICByZXR1cm4gdCA+PSB0aGlzLnN0YXJ0VGltZSAmJiB0IDw9IHRoaXMuZW5kVGltZTtcbiAgfVxuICBpc0xvY2FsRW1wdHkodCkge1xuICAgIHJldHVybiBudWxsID09IHQgfHwgXCJcIiA9PT0gdDtcbiAgfVxuICBnZXRDdXJTcGVjaWFsS2V5KCkge1xuICAgIHJldHVybiBcIlNwZWNpYWxfXCIgKyB0aGlzLmpvdXJuZXkgKyBcIl9cIiArIHRoaXMuc3RhcnRUaW1lICsgXCJfXCIgKyB0aGlzLmVuZFRpbWU7XG4gIH1cbiAgY2FuVHJpZ2dlclNwZWNpYWwodCkge1xuICAgIHJldHVybiAhIXRoaXMuY2hlY2tJblNwZWNpYWxUaW1lKCkgJiYgISF0LmlzQWN0aXZlSm91cm5leSgpICYmICF0aGlzLmlzVHJpZ2dlcmVkKCk7XG4gIH1cbiAgaXNUcmlnZ2VyZWQoKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldEN1clNwZWNpYWxLZXkoKSxcbiAgICAgIGUgPSB0aGlzLmxvY2FsRGF0YVt0XTtcbiAgICByZXR1cm4gIXRoaXMuaXNMb2NhbEVtcHR5KGUpO1xuICB9XG4gIG9uSm91cm5leV9Jc1Nlc3Npb25FbmQodCwgZSkge1xuICAgIGlmICh0aGlzLmNhblRyaWdnZXJTcGVjaWFsKHQuaW5zKSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkpvdXJuZXlfTmV4dFNlc3Npb24odCwgZSkge1xuICAgIGlmICh0aGlzLmNhblRyaWdnZXJTcGVjaWFsKHQuaW5zKSkgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVmFsOiBbdGhpcy5qb3VybmV5LCAtMV1cbiAgICB9KTtlbHNlIHtcbiAgICAgIHZhciByID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VySm91cm5leSgpLFxuICAgICAgICBvID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuaXNTcGVjaWFsU2Vzc2lvbigpO1xuICAgICAgaWYgKHRoaXMuaXNUcmlnZ2VyZWQoKSAmJiByID09PSB0aGlzLmpvdXJuZXkgJiYgbykge1xuICAgICAgICB2YXIgbiA9IHRoaXMuZ2V0TGFzdEpvdXJuZXkoKTtcbiAgICAgICAgaWYgKG4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBpID0gX19yZWFkKG4sIDIpLFxuICAgICAgICAgICAgcyA9IGlbMF0sXG4gICAgICAgICAgICBjID0gaVsxXTtcbiAgICAgICAgICByZXR1cm4gZSh7XG4gICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgcmV0dXJuVmFsOiBbcywgY11cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkpvdXJuZXlfRG9DaGFuZ2UodCwgZSkge1xuICAgIGlmICh0aGlzLmNhblRyaWdnZXJTcGVjaWFsKHQuaW5zKSkge1xuICAgICAgdmFyIHIgPSBfX3JlYWQodC5hcmdzLCAyKSxcbiAgICAgICAgbyA9IHJbMF0sXG4gICAgICAgIG4gPSByWzFdO1xuICAgICAgaWYgKG8gPT09IHRoaXMuam91cm5leSAmJiBuIDwgMCkge1xuICAgICAgICB2YXIgaSA9IHRoaXMuZ2V0Q3VyU3BlY2lhbEtleSgpO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YVtpXSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5uZWVkUmVzdG9yZSkge1xuICAgICAgdGhpcy5uZWVkUmVzdG9yZSA9IGZhbHNlO1xuICAgICAgdmFyIGMgPSB0aGlzLmdldExhc3RKb3VybmV5KCk7XG4gICAgICBpZiAoMyA9PT0gYy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGwgPSBfX3JlYWQoYywgMyksXG4gICAgICAgICAgdSA9IChsWzBdLCBsWzFdLCBsWzJdKTtcbiAgICAgICAgVHJhdmVsR2FtZURhdGEuZ2V0SW5zdGFuY2UoKS5zZXRMZXZlbElkKHUpO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0Sm91cm5leSA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25UTEdhbWVNb2RlbF9hY3RpdmVTZXNzaW9uKHQsIGUpIHtcbiAgICB2YXIgciA9IF9fcmVhZCh0LmFyZ3MsIDQpLFxuICAgICAgbyA9IHJbMF0sXG4gICAgICBuID0gKHJbMV0sIHJbMl0sIHJbM10pO1xuICAgIGlmIChvID09PSB0aGlzLmpvdXJuZXkgJiYgbiA8IDApIHtcbiAgICAgIHZhciBpID0gKHAgPSB0LmlucykuZ2V0Q3VySm91cm5leSgpLFxuICAgICAgICBjID0gcC5nZXRDdXJTZXNzaW9uSW5kZXgoKTtcbiAgICAgIGlmIChcIlwiICE9PSBpICYmIGMgPj0gMCAmJiAhcC5pc0NvbXBsZXRlKGkpKSB7XG4gICAgICAgIHZhciBsID0gVHJhdmVsR2FtZURhdGEuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbElkKCk7XG4gICAgICAgIHRoaXMuc2V0TGFzdEpvdXJuZXkoaSwgYywgbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1ID0gdGhpcy5nZXRMYXN0Sm91cm5leSgpO1xuICAgICAgaWYgKHUubGVuZ3RoID4gMCkge1xuICAgICAgICBpID0gKHAgPSB0LmlucykuZ2V0Q3VySm91cm5leSgpO1xuICAgICAgICB2YXIgcCxcbiAgICAgICAgICBmID0gcC5pc1NwZWNpYWxTZXNzaW9uKCksXG4gICAgICAgICAgeSA9IF9fcmVhZCh1LCAxKVswXTtcbiAgICAgICAgdGhpcy5qb3VybmV5ID09PSBpICYmIGYgJiYgeSA9PT0gbyAmJiAodGhpcy5uZWVkUmVzdG9yZSA9IHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25UcmF2ZWxCdG5fdXBkYXRlVUkodCwgZSkge1xuICAgIHRoaXMudXBkYXRlVHJhdmVsQnRuVUkodCk7XG4gICAgZSgpO1xuICB9XG4gIHVwZGF0ZVRyYXZlbEJ0blVJKHQpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGUgPSB0LmlucyxcbiAgICAgICAgbyA9IHQuYXJnc1swXTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGUubm9kZSkpIHtcbiAgICAgICAgdmFyIG4gPSBjYy5maW5kKFwiUm9vdC9CZ1dvb2RcIiwgZS5ub2RlKSxcbiAgICAgICAgICBpID0gY2MuZmluZChcIlJvb3QvQmdCdG5cIiwgZS5ub2RlKSxcbiAgICAgICAgICBhID0gY2MuZmluZChcIlJvb3QvVGltZXIvVGltZVwiLCBlLm5vZGUpLFxuICAgICAgICAgIHMgPSBjYy5maW5kKFwiUm9vdC9UaW1lci9JY29uXCIsIGUubm9kZSksXG4gICAgICAgICAgYyA9IGNjLmZpbmQoXCJSb290L1RpdGxlXCIsIGUubm9kZSksXG4gICAgICAgICAgbCA9IGNjLmZpbmQoXCJSb290L1RpbWVyL0ljb25fbmV3XCIsIGUubm9kZSksXG4gICAgICAgICAgcCA9IGNjLmZpbmQoXCJSb290L0JnV29vZF9uZXdcIiwgZS5ub2RlKSxcbiAgICAgICAgICBmID0gY2MuZmluZChcIlJvb3QvQmdCdG5fbmV3XCIsIGUubm9kZSk7XG4gICAgICAgIGlmIChvID09PSB0aGlzLmpvdXJuZXkpIHtcbiAgICAgICAgICBuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIGkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoIWNjLmlzVmFsaWQocCkpIHtcbiAgICAgICAgICAgIChwID0gQmFzZVNwcml0ZS5jcmVhdGUoXCJ0ZXh0dXJlL2pvdXJuZXkvbWFpbl9idG5fZ3JlZW5cIikubm9kZSkubmFtZSA9IFwiQmdXb29kX25ld1wiO1xuICAgICAgICAgICAgcC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgcC5wYXJlbnQgPSBuLnBhcmVudDtcbiAgICAgICAgICAgIHAuc2V0UG9zaXRpb24obi5wb3NpdGlvbik7XG4gICAgICAgICAgICBwLnNldFNpYmxpbmdJbmRleChuLmdldFNpYmxpbmdJbmRleCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKGYpKSB7XG4gICAgICAgICAgICAoZiA9IEJhc2VTcHJpdGUuY3JlYXRlKFwidGV4dHVyZS9qb3VybmV5L21haW5fYnRuX3JlZFwiKS5ub2RlKS5uYW1lID0gXCJCZ0J0bl9uZXdcIjtcbiAgICAgICAgICAgIGYuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGYucGFyZW50ID0gaS5wYXJlbnQ7XG4gICAgICAgICAgICBmLnNldFBvc2l0aW9uKGNjLnYyKGkucG9zaXRpb24ueCArIDIsIGkucG9zaXRpb24ueSAtIDE4KSk7XG4gICAgICAgICAgICBmLnNldFNpYmxpbmdJbmRleChpLmdldFNpYmxpbmdJbmRleCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKGwpKSB7XG4gICAgICAgICAgICAobCA9IEJhc2VTcHJpdGUuY3JlYXRlKFwidGV4dHVyZS9qb3VybmV5L21haW5faW1nX3RpbWVcIikubm9kZSkubmFtZSA9IFwiSWNvbl9uZXdcIjtcbiAgICAgICAgICAgIGwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGwucGFyZW50ID0gcy5wYXJlbnQ7XG4gICAgICAgICAgICBsLnNldFBvc2l0aW9uKHMucG9zaXRpb24pO1xuICAgICAgICAgICAgbC5zZXRTaWJsaW5nSW5kZXgocy5nZXRTaWJsaW5nSW5kZXgoKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghYS5fb3JpZ2luYWxDb2xvcl8pIHtcbiAgICAgICAgICAgIGEuX29yaWdpbmFsQ29sb3JfID0gYS5jb2xvcjtcbiAgICAgICAgICAgIGEuY29sb3IgPSBjYy5jb2xvcigyMzcsIDExMiwgMTEyLCAyNTUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWMuX29yaWdpbmFsQ29sb3JfKSB7XG4gICAgICAgICAgICBjLl9vcmlnaW5hbENvbG9yXyA9IGMuY29sb3I7XG4gICAgICAgICAgICBjLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyMzQsIDIyOSwgMjU1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIGkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICBzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgY2MuaXNWYWxpZChwKSAmJiAocC5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICAgICAgY2MuaXNWYWxpZChmKSAmJiAoZi5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICAgICAgY2MuaXNWYWxpZChsKSAmJiAobC5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICAgICAgYS5fb3JpZ2luYWxDb2xvcl8gJiYgKGEuY29sb3IgPSBhLl9vcmlnaW5hbENvbG9yXyk7XG4gICAgICAgICAgYy5fb3JpZ2luYWxDb2xvcl8gJiYgKGMuY29sb3IgPSBjLl9vcmlnaW5hbENvbG9yXyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgSm91cm5leUNocmlzdG1hc1RyYWl0LnRyYWl0S2V5ICsgXCJdIOabtOaWsOaXheihjOaMiemSrlVJ5aSx6LSlOlwiICsgKChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpIHx8IFwi5pyq55+l6ZSZ6K+vXCIpKTtcbiAgICB9XG4gIH1cbiAgaXNJblNwZWNpYWxKb3VybmV5KCkge1xuICAgIGlmICh0aGlzLmNoZWNrSW5TcGVjaWFsVGltZSgpICYmICF0aGlzLmlzVHJpZ2dlcmVkKCkpIHJldHVybiB0cnVlO1xuICAgIGlmICh0aGlzLmlzVHJpZ2dlcmVkKCkpIHtcbiAgICAgIHZhciB0ID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VySm91cm5leSgpLFxuICAgICAgICBlID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuaXNTcGVjaWFsU2Vzc2lvbigpO1xuICAgICAgcmV0dXJuICEodCAhPT0gdGhpcy5qb3VybmV5IHx8ICFlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIG9uSGFsbFZ3X3RyYXZlbENoYW5nZSh0LCBlKSB7XG4gICAgdGhpcy51cGRhdGVIYWxsVUkodC5pbnMpO1xuICAgIGUoKTtcbiAgfVxuICBvbkhhbGxWd19pbml0QnRucyh0LCBlKSB7XG4gICAgdGhpcy51cGRhdGVIYWxsVUkodC5pbnMpO1xuICAgIGUoKTtcbiAgfVxuICB1cGRhdGVIYWxsVUkodCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5pc0luU3BlY2lhbEpvdXJuZXkoKSkge1xuICAgICAgICB0aGlzLnJlcGxhY2VDaHJpc3RtYXNIYWxsVUkodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlc3RvcmVDaHJpc3RtYXNIYWxsVUkodCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIEpvdXJuZXlDaHJpc3RtYXNUcmFpdC50cmFpdEtleSArIFwiXSDmm7TmlrDlpKfljoXnlYzpnaJVSeWksei0pTpcIiArICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSB8fCBcIuacquefpemUmeivr1wiKSk7XG4gICAgfVxuICB9XG4gIHJlcGxhY2VDaHJpc3RtYXNIYWxsVUkodCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHQubm9kZSkgJiYgIXQuaXNTaW1wbGVIYWxsKCkpIHtcbiAgICAgIHZhciBlID0gY2MuZmluZChcIk1hc2svQW5pbVwiLCB0Lm5vZGUpLFxuICAgICAgICByID0gY2MuZmluZChcIk1hc2svSW1nXCIsIHQubm9kZSksXG4gICAgICAgIG8gPSBjYy5maW5kKFwiQW5pbV9uZXdcIiwgdC5ub2RlKSxcbiAgICAgICAgbiA9IGNjLmZpbmQoXCJJbWdfbmV3XCIsIHQubm9kZSk7XG4gICAgICBpZiAoIWNjLmlzVmFsaWQobykpIHtcbiAgICAgICAgKG8gPSBjYy5pbnN0YW50aWF0ZShlKSkubmFtZSA9IFwiQW5pbV9uZXdcIjtcbiAgICAgICAgby5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBvLnBhcmVudCA9IGUucGFyZW50O1xuICAgICAgICBvLnNldFNpYmxpbmdJbmRleChlLmdldFNpYmxpbmdJbmRleCgpKTtcbiAgICAgICAgQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZShvLCBcInNwaW5lL2hhbGwvbWFpbl9zbm93U2NlbmVfY2hyaXN0bWFzXCIpLnNldEFuaW1hdGlvbihcImluaXRcIiwgLTEpO1xuICAgICAgfVxuICAgICAgaWYgKCFjYy5pc1ZhbGlkKG4pKSB7XG4gICAgICAgIChuID0gY2MuaW5zdGFudGlhdGUocikpLm5hbWUgPSBcIkltZ19uZXdcIjtcbiAgICAgICAgbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBuLnBhcmVudCA9IHIucGFyZW50O1xuICAgICAgICBuLnNldFNpYmxpbmdJbmRleChyLmdldFNpYmxpbmdJbmRleCgpKTtcbiAgICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUobiwgXCJ0ZXh0dXJlL2hhbGwvbWFpbl9zbm93U2NlbmVfYmdfY2hyaXN0bWFzXCIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICBlLm9wYWNpdHkgPSAwO1xuICAgICAgci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHIub3BhY2l0eSA9IDA7XG4gICAgfVxuICB9XG4gIHJlc3RvcmVDaHJpc3RtYXNIYWxsVUkodCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHQubm9kZSkgJiYgIXQuaXNTaW1wbGVIYWxsKCkpIHtcbiAgICAgIHZhciBlID0gY2MuZmluZChcIk1hc2svQW5pbVwiLCB0Lm5vZGUpLFxuICAgICAgICByID0gY2MuZmluZChcIk1hc2svSW1nXCIsIHQubm9kZSksXG4gICAgICAgIG8gPSBjYy5maW5kKFwiQW5pbV9uZXdcIiwgdC5ub2RlKSxcbiAgICAgICAgbiA9IGNjLmZpbmQoXCJJbWdfbmV3XCIsIHQubm9kZSk7XG4gICAgICBlLmFjdGl2ZSA9IHRydWU7XG4gICAgICByLmFjdGl2ZSA9IHRydWU7XG4gICAgICBlLm9wYWNpdHkgPSAyNTU7XG4gICAgICByLm9wYWNpdHkgPSAyNTU7XG4gICAgICBjYy5pc1ZhbGlkKG8pICYmIChvLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgIGNjLmlzVmFsaWQobikgJiYgKG4uYWN0aXZlID0gZmFsc2UpO1xuICAgIH1cbiAgfVxuICBzZXRMYXN0Sm91cm5leSh0LCBlLCByKSB7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdEpvdXJuZXkgPSBbdCwgZSwgcl07XG4gIH1cbiAgZ2V0TGFzdEpvdXJuZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmxhc3RKb3VybmV5KSA/IFtdIDogdGhpcy5sb2NhbERhdGEubGFzdEpvdXJuZXk7XG4gIH1cbn0iXX0=