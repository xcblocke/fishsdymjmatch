
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_valentineHallBtn/Scripts/ValentineHallBtnTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'abb2cc0I6xOt5tC/JgRsUoj', 'ValentineHallBtnTrait');
// subpackages/r_valentineHallBtn/Scripts/ValentineHallBtnTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var ValentineHallBtnTrait = /** @class */ (function (_super) {
    __extends(ValentineHallBtnTrait, _super);
    function ValentineHallBtnTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValentineHallBtnTrait_1 = ValentineHallBtnTrait;
    ValentineHallBtnTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "ClassicBtn_updateUI"
            }, {
                event: "ClassicBtn_forceUpdate"
            }]);
    };
    ValentineHallBtnTrait.prototype.isEffectActive = function () {
        var t = mj.getClassByName("ValentineModel"), e = mj.getClassByName("ComplexValentineTrait");
        return !!(e && e.getInstance() && e.getInstance().eventEnabled && t && t.getInstance()) && t.getInstance().isEffectActive();
    };
    ValentineHallBtnTrait.prototype.onHallNmlBtn_forceUpdate = function (t, e) {
        this.updateHallNormalBtn(t.ins);
        e();
    };
    ValentineHallBtnTrait.prototype.onHallNmlBtn_updateUI = function (t, e) {
        this.updateHallNormalBtn(t.ins);
        e();
    };
    ValentineHallBtnTrait.prototype.onTravelBtn_forceUpdate = function (t, e) {
        this.updateHallTravelBtn(t.ins);
        e();
    };
    ValentineHallBtnTrait.prototype.onTravelBtn_updateUI = function (t, e) {
        this.updateHallTravelBtn(t.ins);
        e();
    };
    ValentineHallBtnTrait.prototype.onClassicBtn_updateUI = function (t, e) {
        this.updateHallClassicBtn(t.ins);
        e();
    };
    ValentineHallBtnTrait.prototype.onClassicBtn_forceUpdate = function (t, e) {
        this.updateHallClassicBtn(t.ins);
        e();
    };
    ValentineHallBtnTrait.prototype.updateHallNormalBtn = function (t) {
        if (cc.isValid(t.node)) {
            var e = cc.find("BgBtn", t.node), n = cc.find("BgBtn/Label", t.node);
            if (this.isEffectActive()) {
                BaseSprite_1.default.refreshWithNode(e, "texture/com_btn_orange", false, true, "r_valentineHallBtn");
                this.changeLabelColor(n, cc.color(255, 248, 242, 255));
            }
            else {
                BaseSprite_1.default.refreshWithNode(e, "texture/win/result_btn_up", false, true);
                this.changeLabelColor(n);
            }
        }
    };
    ValentineHallBtnTrait.prototype.updateHallTravelBtn = function (t) {
        if (cc.isValid(t.node)) {
            var e = cc.find("Root/BgBtn", t.node), n = cc.find("Root/Timer/Time", t.node), o = cc.find("Root/Timer/Icon", t.node), r = cc.find("Root/Title", t.node), i = cc.find("Root/Lock/Desc", t.node);
            if (this.isEffectActive()) {
                this.changeLabelColor(n, cc.color(243, 157, 207, 255));
                this.changeLabelColor(i, cc.color(255, 248, 242, 255));
                this.changeLabelColor(r, cc.color(255, 222, 248, 255));
                BaseSprite_1.default.refreshWithNode(e, "texture/com_btn_pink", false, true, "r_valentineHallBtn");
                BaseSprite_1.default.refreshWithNode(o, "texture/main_img_time", false, true, "r_valentineHallBtn");
            }
            else {
                this.changeLabelColor(n);
                this.changeLabelColor(i);
                this.changeLabelColor(r);
                BaseSprite_1.default.refreshWithNode(e, "texture/boxReward/reward_btn_blue_up", false, true);
                BaseSprite_1.default.refreshWithNode(o, "texture/hall/main_img_time", false, true);
            }
        }
    };
    ValentineHallBtnTrait.prototype.updateHallClassicBtn = function (t) {
        if (cc.isValid(t.node)) {
            var e = cc.find("BgBtn", t.node), n = cc.find("BgBtn/Label", t.node);
            if (this.isEffectActive()) {
                this.changeLabelColor(n, cc.color(255, 222, 248, 255));
                BaseSprite_1.default.refreshWithNode(e, "texture/com_btn_pink", false, true, "r_valentineHallBtn");
            }
            else {
                this.changeLabelColor(n);
                BaseSprite_1.default.refreshWithNode(e, "texture/boxReward/reward_btn_blue_up", false, true);
            }
        }
    };
    ValentineHallBtnTrait.prototype.changeLabelColor = function (t, e) {
        var o = ValentineHallBtnTrait_1.traitKey + "_originalColor_";
        t[o] || (t[o] = t.color);
        (e = e || t[o]) && this.setLabelColor(t, e);
    };
    ValentineHallBtnTrait.prototype.setLabelColor = function (t, e) {
        if (!cc.isValid(t))
            return false;
        t.color = e;
        return true;
    };
    var ValentineHallBtnTrait_1;
    ValentineHallBtnTrait.traitKey = "ValentineHallBtn";
    __decorate([
        mj.traitEvent("ValHallBtn_setLabCol")
    ], ValentineHallBtnTrait.prototype, "setLabelColor", null);
    ValentineHallBtnTrait = ValentineHallBtnTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineHallBtnTrait")
    ], ValentineHallBtnTrait);
    return ValentineHallBtnTrait;
}(Trait_1.default));
exports.default = ValentineHallBtnTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3ZhbGVudGluZUhhbGxCdG4vU2NyaXB0cy9WYWxlbnRpbmVIYWxsQnRuVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCwyRUFBc0U7QUFHdEU7SUFBbUQseUNBQUs7SUFBeEQ7O0lBa0dBLENBQUM7OEJBbEdvQixxQkFBcUI7SUFFeEMsc0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsQixLQUFLLEVBQUUscUJBQXFCO2FBQzdCLEVBQUU7Z0JBQ0QsS0FBSyxFQUFFLHdCQUF3QjthQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCw4Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUN6QyxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDOUgsQ0FBQztJQUNELHdEQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHFEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxD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QXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQWtHekM7SUFBRCw0QkFBQztDQWxHRCxBQWtHQyxDQWxHa0QsZUFBSyxHQWtHdkQ7a0JBbEdvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IEJhc2VTcHJpdGUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcHJpdGUnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJWYWxlbnRpbmVIYWxsQnRuVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGVudGluZUhhbGxCdG5UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJWYWxlbnRpbmVIYWxsQnRuXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoW3tcbiAgICAgIGV2ZW50OiBcIkNsYXNzaWNCdG5fdXBkYXRlVUlcIlxuICAgIH0sIHtcbiAgICAgIGV2ZW50OiBcIkNsYXNzaWNCdG5fZm9yY2VVcGRhdGVcIlxuICAgIH1dKTtcbiAgfVxuICBpc0VmZmVjdEFjdGl2ZSgpIHtcbiAgICB2YXIgdCA9IG1qLmdldENsYXNzQnlOYW1lKFwiVmFsZW50aW5lTW9kZWxcIiksXG4gICAgICBlID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJDb21wbGV4VmFsZW50aW5lVHJhaXRcIik7XG4gICAgcmV0dXJuICEhKGUgJiYgZS5nZXRJbnN0YW5jZSgpICYmIGUuZ2V0SW5zdGFuY2UoKS5ldmVudEVuYWJsZWQgJiYgdCAmJiB0LmdldEluc3RhbmNlKCkpICYmIHQuZ2V0SW5zdGFuY2UoKS5pc0VmZmVjdEFjdGl2ZSgpO1xuICB9XG4gIG9uSGFsbE5tbEJ0bl9mb3JjZVVwZGF0ZSh0LCBlKSB7XG4gICAgdGhpcy51cGRhdGVIYWxsTm9ybWFsQnRuKHQuaW5zKTtcbiAgICBlKCk7XG4gIH1cbiAgb25IYWxsTm1sQnRuX3VwZGF0ZVVJKHQsIGUpIHtcbiAgICB0aGlzLnVwZGF0ZUhhbGxOb3JtYWxCdG4odC5pbnMpO1xuICAgIGUoKTtcbiAgfVxuICBvblRyYXZlbEJ0bl9mb3JjZVVwZGF0ZSh0LCBlKSB7XG4gICAgdGhpcy51cGRhdGVIYWxsVHJhdmVsQnRuKHQuaW5zKTtcbiAgICBlKCk7XG4gIH1cbiAgb25UcmF2ZWxCdG5fdXBkYXRlVUkodCwgZSkge1xuICAgIHRoaXMudXBkYXRlSGFsbFRyYXZlbEJ0bih0Lmlucyk7XG4gICAgZSgpO1xuICB9XG4gIG9uQ2xhc3NpY0J0bl91cGRhdGVVSSh0LCBlKSB7XG4gICAgdGhpcy51cGRhdGVIYWxsQ2xhc3NpY0J0bih0Lmlucyk7XG4gICAgZSgpO1xuICB9XG4gIG9uQ2xhc3NpY0J0bl9mb3JjZVVwZGF0ZSh0LCBlKSB7XG4gICAgdGhpcy51cGRhdGVIYWxsQ2xhc3NpY0J0bih0Lmlucyk7XG4gICAgZSgpO1xuICB9XG4gIHVwZGF0ZUhhbGxOb3JtYWxCdG4odCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHQubm9kZSkpIHtcbiAgICAgIHZhciBlID0gY2MuZmluZChcIkJnQnRuXCIsIHQubm9kZSksXG4gICAgICAgIG4gPSBjYy5maW5kKFwiQmdCdG4vTGFiZWxcIiwgdC5ub2RlKTtcbiAgICAgIGlmICh0aGlzLmlzRWZmZWN0QWN0aXZlKCkpIHtcbiAgICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUoZSwgXCJ0ZXh0dXJlL2NvbV9idG5fb3JhbmdlXCIsIGZhbHNlLCB0cnVlLCBcInJfdmFsZW50aW5lSGFsbEJ0blwiKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VMYWJlbENvbG9yKG4sIGNjLmNvbG9yKDI1NSwgMjQ4LCAyNDIsIDI1NSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUoZSwgXCJ0ZXh0dXJlL3dpbi9yZXN1bHRfYnRuX3VwXCIsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VMYWJlbENvbG9yKG4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cGRhdGVIYWxsVHJhdmVsQnRuKHQpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0Lm5vZGUpKSB7XG4gICAgICB2YXIgZSA9IGNjLmZpbmQoXCJSb290L0JnQnRuXCIsIHQubm9kZSksXG4gICAgICAgIG4gPSBjYy5maW5kKFwiUm9vdC9UaW1lci9UaW1lXCIsIHQubm9kZSksXG4gICAgICAgIG8gPSBjYy5maW5kKFwiUm9vdC9UaW1lci9JY29uXCIsIHQubm9kZSksXG4gICAgICAgIHIgPSBjYy5maW5kKFwiUm9vdC9UaXRsZVwiLCB0Lm5vZGUpLFxuICAgICAgICBpID0gY2MuZmluZChcIlJvb3QvTG9jay9EZXNjXCIsIHQubm9kZSk7XG4gICAgICBpZiAodGhpcy5pc0VmZmVjdEFjdGl2ZSgpKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlTGFiZWxDb2xvcihuLCBjYy5jb2xvcigyNDMsIDE1NywgMjA3LCAyNTUpKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VMYWJlbENvbG9yKGksIGNjLmNvbG9yKDI1NSwgMjQ4LCAyNDIsIDI1NSkpO1xuICAgICAgICB0aGlzLmNoYW5nZUxhYmVsQ29sb3IociwgY2MuY29sb3IoMjU1LCAyMjIsIDI0OCwgMjU1KSk7XG4gICAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKGUsIFwidGV4dHVyZS9jb21fYnRuX3BpbmtcIiwgZmFsc2UsIHRydWUsIFwicl92YWxlbnRpbmVIYWxsQnRuXCIpO1xuICAgICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZShvLCBcInRleHR1cmUvbWFpbl9pbWdfdGltZVwiLCBmYWxzZSwgdHJ1ZSwgXCJyX3ZhbGVudGluZUhhbGxCdG5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoYW5nZUxhYmVsQ29sb3Iobik7XG4gICAgICAgIHRoaXMuY2hhbmdlTGFiZWxDb2xvcihpKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VMYWJlbENvbG9yKHIpO1xuICAgICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZShlLCBcInRleHR1cmUvYm94UmV3YXJkL3Jld2FyZF9idG5fYmx1ZV91cFwiLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKG8sIFwidGV4dHVyZS9oYWxsL21haW5faW1nX3RpbWVcIiwgZmFsc2UsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cGRhdGVIYWxsQ2xhc3NpY0J0bih0KSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodC5ub2RlKSkge1xuICAgICAgdmFyIGUgPSBjYy5maW5kKFwiQmdCdG5cIiwgdC5ub2RlKSxcbiAgICAgICAgbiA9IGNjLmZpbmQoXCJCZ0J0bi9MYWJlbFwiLCB0Lm5vZGUpO1xuICAgICAgaWYgKHRoaXMuaXNFZmZlY3RBY3RpdmUoKSkge1xuICAgICAgICB0aGlzLmNoYW5nZUxhYmVsQ29sb3IobiwgY2MuY29sb3IoMjU1LCAyMjIsIDI0OCwgMjU1KSk7XG4gICAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKGUsIFwidGV4dHVyZS9jb21fYnRuX3BpbmtcIiwgZmFsc2UsIHRydWUsIFwicl92YWxlbnRpbmVIYWxsQnRuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VMYWJlbENvbG9yKG4pO1xuICAgICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZShlLCBcInRleHR1cmUvYm94UmV3YXJkL3Jld2FyZF9idG5fYmx1ZV91cFwiLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNoYW5nZUxhYmVsQ29sb3IodCwgZSkge1xuICAgIHZhciBvID0gVmFsZW50aW5lSGFsbEJ0blRyYWl0LnRyYWl0S2V5ICsgXCJfb3JpZ2luYWxDb2xvcl9cIjtcbiAgICB0W29dIHx8ICh0W29dID0gdC5jb2xvcik7XG4gICAgKGUgPSBlIHx8IHRbb10pICYmIHRoaXMuc2V0TGFiZWxDb2xvcih0LCBlKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlZhbEhhbGxCdG5fc2V0TGFiQ29sXCIpXG4gIHNldExhYmVsQ29sb3IodCwgZSkge1xuICAgIGlmICghY2MuaXNWYWxpZCh0KSkgcmV0dXJuIGZhbHNlO1xuICAgIHQuY29sb3IgPSBlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59Il19