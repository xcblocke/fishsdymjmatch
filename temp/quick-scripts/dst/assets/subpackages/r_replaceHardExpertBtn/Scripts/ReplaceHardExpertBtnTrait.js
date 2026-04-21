
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_replaceHardExpertBtn/Scripts/ReplaceHardExpertBtnTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95f39YlKaZNqaHwcTdLqPyi', 'ReplaceHardExpertBtnTrait');
// subpackages/r_replaceHardExpertBtn/Scripts/ReplaceHardExpertBtnTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var TravelGameData_1 = require("../../../Scripts/core/simulator/data/TravelGameData");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var EventDefine_1 = require("../../../Scripts/base/event/EventDefine");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ReplaceHardExpertBtnTrait = /** @class */ (function (_super) {
    __extends(ReplaceHardExpertBtnTrait, _super);
    function ReplaceHardExpertBtnTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReplaceHardExpertBtnTrait_1 = ReplaceHardExpertBtnTrait;
    ReplaceHardExpertBtnTrait.prototype.onHallVw_updateUI = function (t, e) {
        this.dispatchEvent(EventDefine_1.EVT_MSG_HALL_FORCE_UPDATE);
        e();
    };
    ReplaceHardExpertBtnTrait.prototype.onHallNmlBtn_updateUI = function (t, e) {
        this.isValentineEffectActive() || this.updateHallNormalBtn(t.ins);
        e();
    };
    ReplaceHardExpertBtnTrait.prototype.onHallNmlBtn_forceUpdate = function (t, e) {
        this.isValentineEffectActive() || this.updateHallNormalBtn(t.ins);
        e();
    };
    ReplaceHardExpertBtnTrait.prototype.onTLMapVw_viewShow = function (t, e) {
        this.updateTravelMapBtn(t.ins);
        e();
    };
    ReplaceHardExpertBtnTrait.prototype.onWinVw_showWinVw = function (t, e) {
        this.updateWinViewBtn(t.ins);
        e();
    };
    ReplaceHardExpertBtnTrait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        this.updateTLWinViewBtn(t.ins);
        e();
    };
    ReplaceHardExpertBtnTrait.prototype.updateWinViewBtn = function (t) {
        if (cc.isValid(t.node)) {
            var e = this.isNormalHard(), n = this.isNormalExpert(), a = t._btnNext, i = cc.find("content/bg_up", a);
            if (e || n) {
                var o = n ? "texture/main_btn_red_up" : "texture/main_btn_purple_up";
                BaseSprite_1.default.refreshWithNode(i, o, false, true, ReplaceHardExpertBtnTrait_1.BUNDLE_NAME);
            }
            else
                BaseSprite_1.default.refreshWithNode(i, "texture/win/result_btn_up", false, true);
        }
    };
    ReplaceHardExpertBtnTrait.prototype.updateTLWinViewBtn = function (t) {
        if (cc.isValid(t.node)) {
            var e = this.isTravelHard(), n = t._btnNext, a = cc.find("content/bg_up", n);
            if (e) {
                BaseSprite_1.default.refreshWithNode(a, "texture/main_btn_purple_up", false, true, ReplaceHardExpertBtnTrait_1.BUNDLE_NAME);
            }
            else {
                BaseSprite_1.default.refreshWithNode(a, "texture/win/result_btn_up", false, true);
            }
        }
    };
    ReplaceHardExpertBtnTrait.prototype.updateTravelMapBtn = function (t) {
        if (cc.isValid(t.node)) {
            var e = this.isTravelHard(), n = cc.find("Bottom/LevelBtn/BgBtn", t.node);
            if (e) {
                BaseSprite_1.default.refreshWithNode(n, "texture/main_btn_purple_up", false, true, ReplaceHardExpertBtnTrait_1.BUNDLE_NAME);
            }
            else {
                BaseSprite_1.default.refreshWithNode(n, "texture/win/result_btn_up", false, true);
            }
        }
    };
    ReplaceHardExpertBtnTrait.prototype.updateHallNormalBtn = function (t) {
        if (cc.isValid(t.node)) {
            var e = this.isNormalHard(), n = this.isNormalExpert(), a = cc.find("BgBtn", t.node);
            if (e || n) {
                var i = n ? "texture/main_btn_red_up" : "texture/main_btn_purple_up";
                BaseSprite_1.default.refreshWithNode(a, i, false, true, ReplaceHardExpertBtnTrait_1.BUNDLE_NAME);
            }
            else
                BaseSprite_1.default.refreshWithNode(a, "texture/win/result_btn_up", false, true);
        }
    };
    ReplaceHardExpertBtnTrait.prototype.isNormalHard = function () {
        var t = UserModel_1.default.getInstance().getMainGameData().getLevelId();
        return ExtractTool_1.default.getInstance().isHardUI(t);
    };
    ReplaceHardExpertBtnTrait.prototype.isNormalExpert = function () {
        var t = UserModel_1.default.getInstance().getMainGameData().getLevelId();
        return ExtractTool_1.default.getInstance().isExpertUI(t);
    };
    ReplaceHardExpertBtnTrait.prototype.isTravelHard = function () {
        var t = TravelGameData_1.default.getInstance().getLevelId();
        return TravelGameModel_1.default.getInstance().isHardLevel(t);
    };
    ReplaceHardExpertBtnTrait.prototype.isValentineEffectActive = function () {
        var t, e = mj.getClassByName("ValentineModel");
        return null != e && (null === (t = e.getInstance()) || void 0 === t ? void 0 : t.isEffectActive());
    };
    var ReplaceHardExpertBtnTrait_1;
    ReplaceHardExpertBtnTrait.traitKey = "ReplaceHardExpertBtn";
    ReplaceHardExpertBtnTrait.BUNDLE_NAME = "r_replaceHardExpertBtn";
    ReplaceHardExpertBtnTrait = ReplaceHardExpertBtnTrait_1 = __decorate([
        mj.trait,
        mj.class("ReplaceHardExpertBtnTrait")
    ], ReplaceHardExpertBtnTrait);
    return ReplaceHardExpertBtnTrait;
}(Trait_1.default));
exports.default = ReplaceHardExpertBtnTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3JlcGxhY2VIYXJkRXhwZXJ0QnRuL1NjcmlwdHMvUmVwbGFjZUhhcmRFeHBlcnRCdG5UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUZBQTRFO0FBQzVFLHNGQUFpRjtBQUNqRixnRUFBMkQ7QUFDM0QsdUVBQW9GO0FBQ3BGLDBGQUFxRjtBQUNyRiwyRUFBc0U7QUFDdEUsc0VBQWlFO0FBR2pFO0lBQXVELDZDQUFLO0lBQTVEOztJQTBGQSxDQUFDO2tDQTFGb0IseUJBQXlCO0lBRzVDLHFEQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLHVDQUF5QixDQUFDLENBQUM7UUFDOUMsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QseURBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsNERBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsc0RBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QscURBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMs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LENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUNyRyxDQUFDOztJQXhGTSxrQ0FBUSxHQUFHLHNCQUFzQixDQUFDO0lBQ2xDLHFDQUFXLEdBQUcsd0JBQXdCLENBQUM7SUFGM0IseUJBQXlCO1FBRjdDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztPQUNqQix5QkFBeUIsQ0EwRjdDO0lBQUQsZ0NBQUM7Q0ExRkQsQUEwRkMsQ0ExRnNELGVBQUssR0EwRjNEO2tCQTFGb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUb29sIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdFRvb2wnO1xuaW1wb3J0IFRyYXZlbEdhbWVEYXRhIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvZGF0YS9UcmF2ZWxHYW1lRGF0YSc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgRVZUX01TR19IQUxMX0ZPUkNFX1VQREFURSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9ldmVudC9FdmVudERlZmluZSc7XG5pbXBvcnQgVHJhdmVsR2FtZU1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdHJhdmVsL21vZGVsL1RyYXZlbEdhbWVNb2RlbCc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJSZXBsYWNlSGFyZEV4cGVydEJ0blRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBsYWNlSGFyZEV4cGVydEJ0blRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlJlcGxhY2VIYXJkRXhwZXJ0QnRuXCI7XG4gIHN0YXRpYyBCVU5ETEVfTkFNRSA9IFwicl9yZXBsYWNlSGFyZEV4cGVydEJ0blwiO1xuICBvbkhhbGxWd191cGRhdGVVSSh0LCBlKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KEVWVF9NU0dfSEFMTF9GT1JDRV9VUERBVEUpO1xuICAgIGUoKTtcbiAgfVxuICBvbkhhbGxObWxCdG5fdXBkYXRlVUkodCwgZSkge1xuICAgIHRoaXMuaXNWYWxlbnRpbmVFZmZlY3RBY3RpdmUoKSB8fCB0aGlzLnVwZGF0ZUhhbGxOb3JtYWxCdG4odC5pbnMpO1xuICAgIGUoKTtcbiAgfVxuICBvbkhhbGxObWxCdG5fZm9yY2VVcGRhdGUodCwgZSkge1xuICAgIHRoaXMuaXNWYWxlbnRpbmVFZmZlY3RBY3RpdmUoKSB8fCB0aGlzLnVwZGF0ZUhhbGxOb3JtYWxCdG4odC5pbnMpO1xuICAgIGUoKTtcbiAgfVxuICBvblRMTWFwVndfdmlld1Nob3codCwgZSkge1xuICAgIHRoaXMudXBkYXRlVHJhdmVsTWFwQnRuKHQuaW5zKTtcbiAgICBlKCk7XG4gIH1cbiAgb25XaW5Wd19zaG93V2luVncodCwgZSkge1xuICAgIHRoaXMudXBkYXRlV2luVmlld0J0bih0Lmlucyk7XG4gICAgZSgpO1xuICB9XG4gIG9uVExXaW5Wd19zaG93VExXaW5Wdyh0LCBlKSB7XG4gICAgdGhpcy51cGRhdGVUTFdpblZpZXdCdG4odC5pbnMpO1xuICAgIGUoKTtcbiAgfVxuICB1cGRhdGVXaW5WaWV3QnRuKHQpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0Lm5vZGUpKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuaXNOb3JtYWxIYXJkKCksXG4gICAgICAgIG4gPSB0aGlzLmlzTm9ybWFsRXhwZXJ0KCksXG4gICAgICAgIGEgPSB0Ll9idG5OZXh0LFxuICAgICAgICBpID0gY2MuZmluZChcImNvbnRlbnQvYmdfdXBcIiwgYSk7XG4gICAgICBpZiAoZSB8fCBuKSB7XG4gICAgICAgIHZhciBvID0gbiA/IFwidGV4dHVyZS9tYWluX2J0bl9yZWRfdXBcIiA6IFwidGV4dHVyZS9tYWluX2J0bl9wdXJwbGVfdXBcIjtcbiAgICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUoaSwgbywgZmFsc2UsIHRydWUsIFJlcGxhY2VIYXJkRXhwZXJ0QnRuVHJhaXQuQlVORExFX05BTUUpO1xuICAgICAgfSBlbHNlIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKGksIFwidGV4dHVyZS93aW4vcmVzdWx0X2J0bl91cFwiLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZVRMV2luVmlld0J0bih0KSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodC5ub2RlKSkge1xuICAgICAgdmFyIGUgPSB0aGlzLmlzVHJhdmVsSGFyZCgpLFxuICAgICAgICBuID0gdC5fYnRuTmV4dCxcbiAgICAgICAgYSA9IGNjLmZpbmQoXCJjb250ZW50L2JnX3VwXCIsIG4pO1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUoYSwgXCJ0ZXh0dXJlL21haW5fYnRuX3B1cnBsZV91cFwiLCBmYWxzZSwgdHJ1ZSwgUmVwbGFjZUhhcmRFeHBlcnRCdG5UcmFpdC5CVU5ETEVfTkFNRSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZShhLCBcInRleHR1cmUvd2luL3Jlc3VsdF9idG5fdXBcIiwgZmFsc2UsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cGRhdGVUcmF2ZWxNYXBCdG4odCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHQubm9kZSkpIHtcbiAgICAgIHZhciBlID0gdGhpcy5pc1RyYXZlbEhhcmQoKSxcbiAgICAgICAgbiA9IGNjLmZpbmQoXCJCb3R0b20vTGV2ZWxCdG4vQmdCdG5cIiwgdC5ub2RlKTtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKG4sIFwidGV4dHVyZS9tYWluX2J0bl9wdXJwbGVfdXBcIiwgZmFsc2UsIHRydWUsIFJlcGxhY2VIYXJkRXhwZXJ0QnRuVHJhaXQuQlVORExFX05BTUUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUobiwgXCJ0ZXh0dXJlL3dpbi9yZXN1bHRfYnRuX3VwXCIsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdXBkYXRlSGFsbE5vcm1hbEJ0bih0KSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodC5ub2RlKSkge1xuICAgICAgdmFyIGUgPSB0aGlzLmlzTm9ybWFsSGFyZCgpLFxuICAgICAgICBuID0gdGhpcy5pc05vcm1hbEV4cGVydCgpLFxuICAgICAgICBhID0gY2MuZmluZChcIkJnQnRuXCIsIHQubm9kZSk7XG4gICAgICBpZiAoZSB8fCBuKSB7XG4gICAgICAgIHZhciBpID0gbiA/IFwidGV4dHVyZS9tYWluX2J0bl9yZWRfdXBcIiA6IFwidGV4dHVyZS9tYWluX2J0bl9wdXJwbGVfdXBcIjtcbiAgICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUoYSwgaSwgZmFsc2UsIHRydWUsIFJlcGxhY2VIYXJkRXhwZXJ0QnRuVHJhaXQuQlVORExFX05BTUUpO1xuICAgICAgfSBlbHNlIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKGEsIFwidGV4dHVyZS93aW4vcmVzdWx0X2J0bl91cFwiLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIGlzTm9ybWFsSGFyZCgpIHtcbiAgICB2YXIgdCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lRGF0YSgpLmdldExldmVsSWQoKTtcbiAgICByZXR1cm4gRXh0cmFjdFRvb2wuZ2V0SW5zdGFuY2UoKS5pc0hhcmRVSSh0KTtcbiAgfVxuICBpc05vcm1hbEV4cGVydCgpIHtcbiAgICB2YXIgdCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lRGF0YSgpLmdldExldmVsSWQoKTtcbiAgICByZXR1cm4gRXh0cmFjdFRvb2wuZ2V0SW5zdGFuY2UoKS5pc0V4cGVydFVJKHQpO1xuICB9XG4gIGlzVHJhdmVsSGFyZCgpIHtcbiAgICB2YXIgdCA9IFRyYXZlbEdhbWVEYXRhLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxJZCgpO1xuICAgIHJldHVybiBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0hhcmRMZXZlbCh0KTtcbiAgfVxuICBpc1ZhbGVudGluZUVmZmVjdEFjdGl2ZSgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSBtai5nZXRDbGFzc0J5TmFtZShcIlZhbGVudGluZU1vZGVsXCIpO1xuICAgIHJldHVybiBudWxsICE9IGUgJiYgKG51bGwgPT09ICh0ID0gZS5nZXRJbnN0YW5jZSgpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmlzRWZmZWN0QWN0aXZlKCkpO1xuICB9XG59Il19