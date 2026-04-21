
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_valentineHall/Scripts/ValentineHallTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a402uVDjxNcYz9rmB723qB', 'ValentineHallTrait');
// subpackages/r_valentineHall/Scripts/ValentineHallTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ValentineHallTrait = /** @class */ (function (_super) {
    __extends(ValentineHallTrait, _super);
    function ValentineHallTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ValentineHallTrait.prototype, "replaceAllHall", {
        get: function () {
            var t, e;
            return null === (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.replaceAllHall) || void 0 === e || e;
        },
        enumerable: false,
        configurable: true
    });
    ValentineHallTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ValentineHallTrait.prototype.isEffectActive = function () {
        var t = mj.getClassByName("ValentineModel"), e = mj.getClassByName("ComplexValentineTrait");
        return !!(e && e.getInstance() && e.getInstance().eventEnabled && t && t.getInstance()) && t.getInstance().isEffectActive();
    };
    ValentineHallTrait.prototype.onHallVw_updateUI = function (t, e) {
        this.updateHallUI(t.ins);
        e();
    };
    ValentineHallTrait.prototype.onHallVw_forceUpdate = function (t, e) {
        this.updateHallUI(t.ins);
        e();
    };
    ValentineHallTrait.prototype.updateHallUI = function (t) {
        t.constructor.getUrl();
        cc.isValid(t.node) && (this.replaceAllHall || "Hall" !== t.hallTheme) && (this.isEffectActive() ? t.changeTheme("Hall4", false) : t.changeTheme(t.hallTheme, false));
    };
    ValentineHallTrait.traitKey = "ValentineHall";
    ValentineHallTrait = __decorate([
        mj.trait,
        mj.class("ValentineHallTrait")
    ], ValentineHallTrait);
    return ValentineHallTrait;
}(Trait_1.default));
exports.default = ValentineHallTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3ZhbGVudGluZUhhbGwvU2NyaXB0cy9WYWxlbnRpbmVIYWxsVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUFnRCxzQ0FBSztJQUFyRDs7SUEwQkEsQ0FBQztJQXhCQyxzQkFBSSw4Q0FBYzthQUFsQjtZQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkgsQ0FBQzs7O09BQUE7SUFDRCxtQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsMkNBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFDekMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNqRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzlILENBQUM7SUFDRCw4Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsaURBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHlDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2QixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksTUFBTSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZLLENBQUM7SUF4Qk0sMkJBQVEsR0FBRyxlQUFlLENBQUM7SUFEZixrQkFBa0I7UUFGdEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBMEJ0QztJQUFELHlCQUFDO0NBMUJELEFBMEJDLENBMUIrQyxlQUFLLEdBMEJwRDtrQkExQm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlZhbGVudGluZUhhbGxUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsZW50aW5lSGFsbFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlZhbGVudGluZUhhbGxcIjtcbiAgZ2V0IHJlcGxhY2VBbGxIYWxsKCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiBudWxsID09PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQucmVwbGFjZUFsbEhhbGwpIHx8IHZvaWQgMCA9PT0gZSB8fCBlO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBpc0VmZmVjdEFjdGl2ZSgpIHtcbiAgICB2YXIgdCA9IG1qLmdldENsYXNzQnlOYW1lKFwiVmFsZW50aW5lTW9kZWxcIiksXG4gICAgICBlID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJDb21wbGV4VmFsZW50aW5lVHJhaXRcIik7XG4gICAgcmV0dXJuICEhKGUgJiYgZS5nZXRJbnN0YW5jZSgpICYmIGUuZ2V0SW5zdGFuY2UoKS5ldmVudEVuYWJsZWQgJiYgdCAmJiB0LmdldEluc3RhbmNlKCkpICYmIHQuZ2V0SW5zdGFuY2UoKS5pc0VmZmVjdEFjdGl2ZSgpO1xuICB9XG4gIG9uSGFsbFZ3X3VwZGF0ZVVJKHQsIGUpIHtcbiAgICB0aGlzLnVwZGF0ZUhhbGxVSSh0Lmlucyk7XG4gICAgZSgpO1xuICB9XG4gIG9uSGFsbFZ3X2ZvcmNlVXBkYXRlKHQsIGUpIHtcbiAgICB0aGlzLnVwZGF0ZUhhbGxVSSh0Lmlucyk7XG4gICAgZSgpO1xuICB9XG4gIHVwZGF0ZUhhbGxVSSh0KSB7XG4gICAgdC5jb25zdHJ1Y3Rvci5nZXRVcmwoKTtcbiAgICBjYy5pc1ZhbGlkKHQubm9kZSkgJiYgKHRoaXMucmVwbGFjZUFsbEhhbGwgfHwgXCJIYWxsXCIgIT09IHQuaGFsbFRoZW1lKSAmJiAodGhpcy5pc0VmZmVjdEFjdGl2ZSgpID8gdC5jaGFuZ2VUaGVtZShcIkhhbGw0XCIsIGZhbHNlKSA6IHQuY2hhbmdlVGhlbWUodC5oYWxsVGhlbWUsIGZhbHNlKSk7XG4gIH1cbn0iXX0=