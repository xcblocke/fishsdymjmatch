
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_randomShuffleAni/Scripts/RandomShuffleAniTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '325e5aZCCZAIqmQ8yKeqIxR', 'RandomShuffleAniTrait');
// subpackages/l_randomShuffleAni/Scripts/RandomShuffleAniTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ShuffleEffect_1 = require("../../../Scripts/ShuffleEffect");
var SpiralShuffleEffect_1 = require("../../../Scripts/SpiralShuffleEffect");
var StackShuffleEffect_1 = require("../../../Scripts/StackShuffleEffect");
var Tile2ShuffleEffect_1 = require("../../../Scripts/Tile2ShuffleEffect");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var RandomShuffleAniTrait = /** @class */ (function (_super) {
    __extends(RandomShuffleAniTrait, _super);
    function RandomShuffleAniTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RandomShuffleAniTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "IptT2Shuffle_getEff"
            }]);
    };
    RandomShuffleAniTrait.prototype.onIptShuffle_getEffect = function (e, t) {
        var r;
        switch (Math.floor(3 * Math.random())) {
            case 0:
                r = new ShuffleEffect_1.ShuffleEffect({});
                break;
            case 1:
                r = new SpiralShuffleEffect_1.SpiralShuffleEffect({});
                break;
            case 2:
            default:
                r = new StackShuffleEffect_1.StackShuffleEffect({});
        }
        t({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    RandomShuffleAniTrait.prototype.onIptT2Shuffle_getEff = function (e, t) {
        var r;
        switch (Math.floor(3 * Math.random())) {
            case 0:
                r = new Tile2ShuffleEffect_1.Tile2ShuffleEffect({});
                break;
            case 1:
                r = new SpiralShuffleEffect_1.SpiralShuffleEffect({});
                break;
            case 2:
            default:
                r = new StackShuffleEffect_1.StackShuffleEffect({});
        }
        t({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    RandomShuffleAniTrait.traitKey = "RandomShuffleAni";
    RandomShuffleAniTrait = __decorate([
        mj.trait,
        mj.class("RandomShuffleAniTrait")
    ], RandomShuffleAniTrait);
    return RandomShuffleAniTrait;
}(Trait_1.default));
exports.default = RandomShuffleAniTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmRvbVNodWZmbGVBbmkvU2NyaXB0cy9SYW5kb21TaHVmZmxlQW5pVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUErRDtBQUMvRCw0RUFBMkU7QUFDM0UsMEVBQXlFO0FBQ3pFLDBFQUF5RTtBQUN6RSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQW1ELHlDQUFLO0lBQXhEOztJQThDQSxDQUFDO0lBNUNDLHNDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLHFCQUFxQjthQUM3QixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCxzREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLENBQUM7UUFDTixRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1lBQ3JDLEtBQUssQ0FBQztnQkFDSixDQUFDLEdBQUcsSUFBSSw2QkFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQixNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLENBQUMsR0FBRyxJQUFJLHlDQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1IsS0FBSyxDQUFDLENBQUM7WUFDUDtnQkFDRSxDQUFDLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsQztRQUNELENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QscURBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxDQUFDO1FBQ04sUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUNyQyxLQUFLLENBQUM7Z0JBQ0osQ0FBQyxHQUFHLElBQUksdUNBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQy9CLE1BQU07WUFDUixLQUFLLENBQUM7Z0JBQ0osQ0FBQyxHQUFHLElBQUkseUNBQW1CLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07WUFDUixLQUFLLENBQUMsQ0FBQztZQUNQO2dCQUNFLENBQUMsR0FBRyxJQUFJLHVDQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUE1Q00sOEJBQVEsR0FBRyxrQkFBa0IsQ0FBQztJQURsQixxQkFBcUI7UUFGekMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBOEN6QztJQUFELDRCQUFDO0NBOUNELEFBOENDLENBOUNrRCxlQUFLLEdBOEN2RDtrQkE5Q29CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNodWZmbGVFZmZlY3QgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL1NodWZmbGVFZmZlY3QnO1xuaW1wb3J0IHsgU3BpcmFsU2h1ZmZsZUVmZmVjdCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvU3BpcmFsU2h1ZmZsZUVmZmVjdCc7XG5pbXBvcnQgeyBTdGFja1NodWZmbGVFZmZlY3QgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL1N0YWNrU2h1ZmZsZUVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMlNodWZmbGVFZmZlY3QgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL1RpbGUyU2h1ZmZsZUVmZmVjdCc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJSYW5kb21TaHVmZmxlQW5pVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmRvbVNodWZmbGVBbmlUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJSYW5kb21TaHVmZmxlQW5pXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoW3tcbiAgICAgIGV2ZW50OiBcIklwdFQyU2h1ZmZsZV9nZXRFZmZcIlxuICAgIH1dKTtcbiAgfVxuICBvbklwdFNodWZmbGVfZ2V0RWZmZWN0KGUsIHQpIHtcbiAgICB2YXIgcjtcbiAgICBzd2l0Y2ggKE1hdGguZmxvb3IoMyAqIE1hdGgucmFuZG9tKCkpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHIgPSBuZXcgU2h1ZmZsZUVmZmVjdCh7fSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByID0gbmV3IFNwaXJhbFNodWZmbGVFZmZlY3Qoe30pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHIgPSBuZXcgU3RhY2tTaHVmZmxlRWZmZWN0KHt9KTtcbiAgICB9XG4gICAgdCh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiByXG4gICAgfSk7XG4gIH1cbiAgb25JcHRUMlNodWZmbGVfZ2V0RWZmKGUsIHQpIHtcbiAgICB2YXIgcjtcbiAgICBzd2l0Y2ggKE1hdGguZmxvb3IoMyAqIE1hdGgucmFuZG9tKCkpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHIgPSBuZXcgVGlsZTJTaHVmZmxlRWZmZWN0KHt9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHIgPSBuZXcgU3BpcmFsU2h1ZmZsZUVmZmVjdCh7fSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgciA9IG5ldyBTdGFja1NodWZmbGVFZmZlY3Qoe30pO1xuICAgIH1cbiAgICB0KHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IHJcbiAgICB9KTtcbiAgfVxufSJdfQ==