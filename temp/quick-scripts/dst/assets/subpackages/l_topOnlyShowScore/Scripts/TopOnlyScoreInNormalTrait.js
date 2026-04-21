
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_topOnlyShowScore/Scripts/TopOnlyScoreInNormalTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d7cbSZl61PXZDMNBQP9NRA', 'TopOnlyScoreInNormalTrait');
// subpackages/l_topOnlyShowScore/Scripts/TopOnlyScoreInNormalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TopOnlyScoreInNormalTrait = /** @class */ (function (_super) {
    __extends(TopOnlyScoreInNormalTrait, _super);
    function TopOnlyScoreInNormalTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopOnlyScoreInNormalTrait.prototype.isMatchGameType = function (t) {
        var e, r = (null === (e = this.traitData) || void 0 === e ? void 0 : e.gameTypes) || [], o = GameTypeEnums_1.MjGameType[t];
        return r.includes(o);
    };
    TopOnlyScoreInNormalTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        null === (e = this.traitData) || void 0 === e || e.gameTypes;
    };
    TopOnlyScoreInNormalTrait.prototype.onTOSScore_isMatchGType = function (t, e) {
        var r, o = null === (r = t.args) || void 0 === r ? void 0 : r[0];
        if (this.isMatchGameType(o)) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    TopOnlyScoreInNormalTrait.traitKey = "TopOnlyScoreInNormal";
    TopOnlyScoreInNormalTrait = __decorate([
        mj.trait,
        mj.class("TopOnlyScoreInNormalTrait")
    ], TopOnlyScoreInNormalTrait);
    return TopOnlyScoreInNormalTrait;
}(Trait_1.default));
exports.default = TopOnlyScoreInNormalTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RvcE9ubHlTaG93U2NvcmUvU2NyaXB0cy9Ub3BPbmx5U2NvcmVJbk5vcm1hbFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHdGQUFvRjtBQUdwRjtJQUF1RCw2Q0FBSztJQUE1RDs7SUEwQkEsQ0FBQztJQXhCQyxtREFBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQ2hGLENBQUMsR0FBRywwQkFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0QsMENBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9ELENBQUM7SUFDRCwyREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMzQixDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQXhCTSxrQ0FBUSxHQUFHLHNCQUFzQixDQUFDO0lBRHRCLHlCQUF5QjtRQUY3QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUM7T0FDakIseUJBQXlCLENBMEI3QztJQUFELGdDQUFDO0NBMUJELEFBMEJDLENBMUJzRCxlQUFLLEdBMEIzRDtrQkExQm9CLHlCQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVG9wT25seVNjb3JlSW5Ob3JtYWxUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wT25seVNjb3JlSW5Ob3JtYWxUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUb3BPbmx5U2NvcmVJbk5vcm1hbFwiO1xuICBpc01hdGNoR2FtZVR5cGUodCkge1xuICAgIHZhciBlLFxuICAgICAgciA9IChudWxsID09PSAoZSA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdhbWVUeXBlcykgfHwgW10sXG4gICAgICBvID0gTWpHYW1lVHlwZVt0XTtcbiAgICByZXR1cm4gci5pbmNsdWRlcyhvKTtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgdmFyIGU7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlIHx8IGUuZ2FtZVR5cGVzO1xuICB9XG4gIG9uVE9TU2NvcmVfaXNNYXRjaEdUeXBlKHQsIGUpIHtcbiAgICB2YXIgcixcbiAgICAgIG8gPSBudWxsID09PSAociA9IHQuYXJncykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogclswXTtcbiAgICBpZiAodGhpcy5pc01hdGNoR2FtZVR5cGUobykpIHtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbn0iXX0=