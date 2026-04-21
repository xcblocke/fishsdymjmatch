
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankChaseParams/Scripts/RankChaseParamsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90fcfA/k1BKcZ+WWWXWYatz', 'RankChaseParamsTrait');
// subpackages/l_rankChaseParams/Scripts/RankChaseParamsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RankChaseParamsTrait = /** @class */ (function (_super) {
    __extends(RankChaseParamsTrait, _super);
    function RankChaseParamsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RankChaseParamsTrait.prototype, "gradCoef", {
        get: function () {
            return null != this._traitData.gradCoef ? this._traitData.gradCoef : 0.05;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankChaseParamsTrait.prototype, "addPointsTop", {
        get: function () {
            return null != this._traitData.addPointsTop ? this._traitData.addPointsTop : {
                2: 1,
                4: 3,
                6: 3,
                8: 2,
                12: 1
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankChaseParamsTrait.prototype, "chasingBotsMaxPoint", {
        get: function () {
            return null != this._traitData.chasingBotsMaxPoint ? this._traitData.chasingBotsMaxPoint : 12;
        },
        enumerable: false,
        configurable: true
    });
    RankChaseParamsTrait.prototype.onRkChasing2_baseCfg = function (t, e) {
        e();
        null != t.beforReturnVal && (t.beforReturnVal.gradCoef = this.gradCoef);
    };
    RankChaseParamsTrait.prototype.onRkChasing2_pointsCfg = function (t, e) {
        e();
        null != t.beforReturnVal && (t.beforReturnVal.addPointsTop = this.addPointsTop);
    };
    RankChaseParamsTrait.prototype.onRkChasing2_chasingCfg = function (t, e) {
        e();
        null != t.beforReturnVal && (t.beforReturnVal.chasingBotsMaxPoint = this.chasingBotsMaxPoint);
    };
    RankChaseParamsTrait.traitKey = "RankChaseParams";
    RankChaseParamsTrait = __decorate([
        mj.trait,
        mj.class("RankChaseParamsTrait")
    ], RankChaseParamsTrait);
    return RankChaseParamsTrait;
}(Trait_1.default));
exports.default = RankChaseParamsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtDaGFzZVBhcmFtcy9TY3JpcHRzL1JhbmtDaGFzZVBhcmFtc1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBa0Qsd0NBQUs7SUFBdkQ7O0lBNkJBLENBQUM7SUEzQkMsc0JBQUksMENBQVE7YUFBWjtZQUNFLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzVFLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksOENBQVk7YUFBaEI7WUFDRSxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUMzRSxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixFQUFFLEVBQUUsQ0FBQzthQUNOLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHFEQUFtQjthQUF2QjtZQUNFLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoRyxDQUFDOzs7T0FBQTtJQUNELG1EQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsQ0FBQztRQUNKLElBQUksSUFBSSxDQUFDLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDRCxxREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLElBQUksQ0FBQyxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0Qsc0RBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBRSxDQUFDO1FBQ0osSUFBSSxJQUFJLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUEzQk0sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQURqQixvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBNkJ4QztJQUFELDJCQUFDO0NBN0JELEFBNkJDLENBN0JpRCxlQUFLLEdBNkJ0RDtrQkE3Qm9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlJhbmtDaGFzZVBhcmFtc1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rQ2hhc2VQYXJhbXNUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJSYW5rQ2hhc2VQYXJhbXNcIjtcbiAgZ2V0IGdyYWRDb2VmKCkge1xuICAgIHJldHVybiBudWxsICE9IHRoaXMuX3RyYWl0RGF0YS5ncmFkQ29lZiA/IHRoaXMuX3RyYWl0RGF0YS5ncmFkQ29lZiA6IDAuMDU7XG4gIH1cbiAgZ2V0IGFkZFBvaW50c1RvcCgpIHtcbiAgICByZXR1cm4gbnVsbCAhPSB0aGlzLl90cmFpdERhdGEuYWRkUG9pbnRzVG9wID8gdGhpcy5fdHJhaXREYXRhLmFkZFBvaW50c1RvcCA6IHtcbiAgICAgIDI6IDEsXG4gICAgICA0OiAzLFxuICAgICAgNjogMyxcbiAgICAgIDg6IDIsXG4gICAgICAxMjogMVxuICAgIH07XG4gIH1cbiAgZ2V0IGNoYXNpbmdCb3RzTWF4UG9pbnQoKSB7XG4gICAgcmV0dXJuIG51bGwgIT0gdGhpcy5fdHJhaXREYXRhLmNoYXNpbmdCb3RzTWF4UG9pbnQgPyB0aGlzLl90cmFpdERhdGEuY2hhc2luZ0JvdHNNYXhQb2ludCA6IDEyO1xuICB9XG4gIG9uUmtDaGFzaW5nMl9iYXNlQ2ZnKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgbnVsbCAhPSB0LmJlZm9yUmV0dXJuVmFsICYmICh0LmJlZm9yUmV0dXJuVmFsLmdyYWRDb2VmID0gdGhpcy5ncmFkQ29lZik7XG4gIH1cbiAgb25Sa0NoYXNpbmcyX3BvaW50c0NmZyh0LCBlKSB7XG4gICAgZSgpO1xuICAgIG51bGwgIT0gdC5iZWZvclJldHVyblZhbCAmJiAodC5iZWZvclJldHVyblZhbC5hZGRQb2ludHNUb3AgPSB0aGlzLmFkZFBvaW50c1RvcCk7XG4gIH1cbiAgb25Sa0NoYXNpbmcyX2NoYXNpbmdDZmcodCwgZSkge1xuICAgIGUoKTtcbiAgICBudWxsICE9IHQuYmVmb3JSZXR1cm5WYWwgJiYgKHQuYmVmb3JSZXR1cm5WYWwuY2hhc2luZ0JvdHNNYXhQb2ludCA9IHRoaXMuY2hhc2luZ0JvdHNNYXhQb2ludCk7XG4gIH1cbn0iXX0=