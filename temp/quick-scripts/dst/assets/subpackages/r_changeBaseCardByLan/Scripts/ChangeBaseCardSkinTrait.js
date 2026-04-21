
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_changeBaseCardByLan/Scripts/ChangeBaseCardSkinTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c00d3J3fnxNhoqdwGdFGtYZ', 'ChangeBaseCardSkinTrait');
// subpackages/r_changeBaseCardByLan/Scripts/ChangeBaseCardSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ChangeBaseCardSkinTrait = /** @class */ (function (_super) {
    __extends(ChangeBaseCardSkinTrait, _super);
    function ChangeBaseCardSkinTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._changeMaps = {};
        return _this;
    }
    ChangeBaseCardSkinTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        for (var a = (null === (e = this._traitData) || void 0 === e ? void 0 : e.changeList) || [], r = 0; r < a.length; r++) {
            var n = a[r];
            this._changeMaps[n[0]] = n[1];
        }
    };
    ChangeBaseCardSkinTrait.prototype.onChCardByLanTt_getRBName = function (t, e) {
        var a, r = null === (a = t.args) || void 0 === a ? void 0 : a[0];
        this._changeMaps && this._changeMaps[r] && (r = this._changeMaps[r]);
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    ChangeBaseCardSkinTrait.traitKey = "ChangeBaseCardSkin";
    ChangeBaseCardSkinTrait = __decorate([
        mj.trait,
        mj.class("ChangeBaseCardSkinTrait")
    ], ChangeBaseCardSkinTrait);
    return ChangeBaseCardSkinTrait;
}(Trait_1.default));
exports.default = ChangeBaseCardSkinTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NoYW5nZUJhc2VDYXJkQnlMYW4vU2NyaXB0cy9DaGFuZ2VCYXNlQ2FyZFNraW5UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFxRCwyQ0FBSztJQUExRDtRQUFBLHFFQXFCQztRQXBCQyxpQkFBVyxHQUFHLEVBQUUsQ0FBQzs7SUFvQm5CLENBQUM7SUFsQkMsd0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBQ0QsMkRBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBbEJNLGdDQUFRLEdBQUcsb0JBQW9CLENBQUM7SUFGcEIsdUJBQXVCO1FBRjNDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztPQUNmLHVCQUF1QixDQXFCM0M7SUFBRCw4QkFBQztDQXJCRCxBQXFCQyxDQXJCb0QsZUFBSyxHQXFCekQ7a0JBckJvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDaGFuZ2VCYXNlQ2FyZFNraW5UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlQmFzZUNhcmRTa2luVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jaGFuZ2VNYXBzID0ge307XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2hhbmdlQmFzZUNhcmRTa2luXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBmb3IgKHZhciBhID0gKG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmNoYW5nZUxpc3QpIHx8IFtdLCByID0gMDsgciA8IGEubGVuZ3RoOyByKyspIHtcbiAgICAgIHZhciBuID0gYVtyXTtcbiAgICAgIHRoaXMuX2NoYW5nZU1hcHNbblswXV0gPSBuWzFdO1xuICAgIH1cbiAgfVxuICBvbkNoQ2FyZEJ5TGFuVHRfZ2V0UkJOYW1lKHQsIGUpIHtcbiAgICB2YXIgYSxcbiAgICAgIHIgPSBudWxsID09PSAoYSA9IHQuYXJncykgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYVswXTtcbiAgICB0aGlzLl9jaGFuZ2VNYXBzICYmIHRoaXMuX2NoYW5nZU1hcHNbcl0gJiYgKHIgPSB0aGlzLl9jaGFuZ2VNYXBzW3JdKTtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IHJcbiAgICB9KTtcbiAgfVxufSJdfQ==