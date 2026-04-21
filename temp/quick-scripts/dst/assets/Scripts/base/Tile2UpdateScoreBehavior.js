
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2UpdateScoreBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29eba/9fmNAxKYgija41SAW', 'Tile2UpdateScoreBehavior');
// Scripts/base/Tile2UpdateScoreBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2UpdateScoreBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2UpdateScoreBehavior = /** @class */ (function (_super) {
    __extends(Tile2UpdateScoreBehavior, _super);
    function Tile2UpdateScoreBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2UpdateScoreBehavior.prototype.start = function (e) {
        var t, o = e.data, n = o.isShowCombo, i = o.addScore, a = o.targetScore, l = null === (t = this.context.gameView.nodeTopView) || void 0 === t ? void 0 : t.scoreItem;
        l && l.updateScore(i, a, n);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2UpdateScoreBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2UpdateScoreBehavior = Tile2UpdateScoreBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJVcGRhdGVTY29yZUJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLHlEQUF3RDtBQUN4RDtJQUE4Qyw0Q0FBaUI7SUFBL0Q7O0lBV0EsQ0FBQztJQVZDLHdDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQ2pCLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUNkLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUNqQixDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDOUYsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FYQSxBQVdDLENBWDZDLHFDQUFpQixHQVc5RDtBQVhZLDREQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIFRpbGUyVXBkYXRlU2NvcmVCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyA9IGUuZGF0YSxcbiAgICAgIG4gPSBvLmlzU2hvd0NvbWJvLFxuICAgICAgaSA9IG8uYWRkU2NvcmUsXG4gICAgICBhID0gby50YXJnZXRTY29yZSxcbiAgICAgIGwgPSBudWxsID09PSAodCA9IHRoaXMuY29udGV4dC5nYW1lVmlldy5ub2RlVG9wVmlldykgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5zY29yZUl0ZW07XG4gICAgbCAmJiBsLnVwZGF0ZVNjb3JlKGksIGEsIG4pO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbn0iXX0=