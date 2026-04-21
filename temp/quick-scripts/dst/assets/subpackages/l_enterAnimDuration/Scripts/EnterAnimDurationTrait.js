
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_enterAnimDuration/Scripts/EnterAnimDurationTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7046d4ZNwJGz5vsTllo+WRg', 'EnterAnimDurationTrait');
// subpackages/l_enterAnimDuration/Scripts/EnterAnimDurationTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var EnterAnimDurationTrait = /** @class */ (function (_super) {
    __extends(EnterAnimDurationTrait, _super);
    function EnterAnimDurationTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnterAnimDurationTrait.prototype.getTargetDuration = function () {
        return this._traitData.targetDuration || 0;
    };
    EnterAnimDurationTrait.prototype.scaleAnimationConfigs = function (t) {
        var n = this.getTargetDuration();
        if (n && !(n <= 0)) {
            var r = t.beforReturnVal;
            if (r && 0 !== r.length) {
                var o = t.ins, e = o.totalDuration;
                if (e && !(e <= 0)) {
                    var i = n / e;
                    r.forEach(function (t) {
                        t.delay *= i;
                        t.duration *= i;
                    });
                    o.totalDuration = n;
                }
            }
        }
    };
    EnterAnimDurationTrait.prototype.onCrossLayerStgy_genCfgs = function (t, n) {
        this.scaleAnimationConfigs(t);
        n();
    };
    EnterAnimDurationTrait.prototype.onCenterRadialStgy_genCfgs = function (t, n) {
        this.scaleAnimationConfigs(t);
        n();
    };
    EnterAnimDurationTrait.prototype.onTopDropStgy_genCfgs = function (t, n) {
        this.scaleAnimationConfigs(t);
        n();
    };
    EnterAnimDurationTrait.prototype.onRowByRowStgy_genCfgs = function (t, n) {
        this.scaleAnimationConfigs(t);
        n();
    };
    EnterAnimDurationTrait.prototype.onTopMaskStgy_genCfgs = function (t, n) {
        this.scaleAnimationConfigs(t);
        n();
    };
    EnterAnimDurationTrait.traitKey = "EnterAnimDuration";
    EnterAnimDurationTrait = __decorate([
        mj.trait,
        mj.class("EnterAnimDurationTrait")
    ], EnterAnimDurationTrait);
    return EnterAnimDurationTrait;
}(Trait_1.default));
exports.default = EnterAnimDurationTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2VudGVyQW5pbUR1cmF0aW9uL1NjcmlwdHMvRW50ZXJBbmltRHVyYXRpb25UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQW9ELDBDQUFLO0lBQXpEOztJQTJDQSxDQUFDO0lBekNDLGtEQUFpQixHQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxzREFBcUIsR0FBckIsVUFBc0IsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7d0JBQ25CLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO3dCQUNiLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO29CQUNsQixDQUFDLENBQUMsQ0FBQztvQkFDSCxDQUFDLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztpQkFDckI7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUNELHlEQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsMkRBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxzREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHVEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsc0RBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUF6Q00sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQURuQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBMkMxQztJQUFELDZCQUFDO0NBM0NELEFBMkNDLENBM0NtRCxlQUFLLEdBMkN4RDtrQkEzQ29CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkVudGVyQW5pbUR1cmF0aW9uVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudGVyQW5pbUR1cmF0aW9uVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRW50ZXJBbmltRHVyYXRpb25cIjtcbiAgZ2V0VGFyZ2V0RHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYWl0RGF0YS50YXJnZXREdXJhdGlvbiB8fCAwO1xuICB9XG4gIHNjYWxlQW5pbWF0aW9uQ29uZmlncyh0KSB7XG4gICAgdmFyIG4gPSB0aGlzLmdldFRhcmdldER1cmF0aW9uKCk7XG4gICAgaWYgKG4gJiYgIShuIDw9IDApKSB7XG4gICAgICB2YXIgciA9IHQuYmVmb3JSZXR1cm5WYWw7XG4gICAgICBpZiAociAmJiAwICE9PSByLmxlbmd0aCkge1xuICAgICAgICB2YXIgbyA9IHQuaW5zLFxuICAgICAgICAgIGUgPSBvLnRvdGFsRHVyYXRpb247XG4gICAgICAgIGlmIChlICYmICEoZSA8PSAwKSkge1xuICAgICAgICAgIHZhciBpID0gbiAvIGU7XG4gICAgICAgICAgci5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB0LmRlbGF5ICo9IGk7XG4gICAgICAgICAgICB0LmR1cmF0aW9uICo9IGk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgby50b3RhbER1cmF0aW9uID0gbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkNyb3NzTGF5ZXJTdGd5X2dlbkNmZ3ModCwgbikge1xuICAgIHRoaXMuc2NhbGVBbmltYXRpb25Db25maWdzKHQpO1xuICAgIG4oKTtcbiAgfVxuICBvbkNlbnRlclJhZGlhbFN0Z3lfZ2VuQ2Zncyh0LCBuKSB7XG4gICAgdGhpcy5zY2FsZUFuaW1hdGlvbkNvbmZpZ3ModCk7XG4gICAgbigpO1xuICB9XG4gIG9uVG9wRHJvcFN0Z3lfZ2VuQ2Zncyh0LCBuKSB7XG4gICAgdGhpcy5zY2FsZUFuaW1hdGlvbkNvbmZpZ3ModCk7XG4gICAgbigpO1xuICB9XG4gIG9uUm93QnlSb3dTdGd5X2dlbkNmZ3ModCwgbikge1xuICAgIHRoaXMuc2NhbGVBbmltYXRpb25Db25maWdzKHQpO1xuICAgIG4oKTtcbiAgfVxuICBvblRvcE1hc2tTdGd5X2dlbkNmZ3ModCwgbikge1xuICAgIHRoaXMuc2NhbGVBbmltYXRpb25Db25maWdzKHQpO1xuICAgIG4oKTtcbiAgfVxufSJdfQ==