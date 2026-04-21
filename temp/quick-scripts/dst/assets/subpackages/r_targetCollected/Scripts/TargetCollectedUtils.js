
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_targetCollected/Scripts/TargetCollectedUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32051ptyBBA7rRnaQXEZxMw', 'TargetCollectedUtils');
// subpackages/r_targetCollected/Scripts/TargetCollectedUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetCollectedUtils = void 0;
var TargetCollectedUtils = /** @class */ (function () {
    function TargetCollectedUtils() {
    }
    TargetCollectedUtils.getTargetCollectedResMap = function () {
        var e = new Map();
        e.set("Journey01", ["spine/gameplay_combo10_snow", "r_targetCollected"]);
        e.set("Journey02", ["spine/gameplay_combo10_snow", "r_targetCollected"]);
        return e;
    };
    TargetCollectedUtils.getTargetCollectedRes = function (e) {
        var t = this.getTargetCollectedResMap();
        return t.has(e) ? t.get(e) : null;
    };
    __decorate([
        mj.traitEvent("TagColUtils_getRes")
    ], TargetCollectedUtils, "getTargetCollectedRes", null);
    return TargetCollectedUtils;
}());
exports.TargetCollectedUtils = TargetCollectedUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3RhcmdldENvbGxlY3RlZC9TY3JpcHRzL1RhcmdldENvbGxlY3RlZFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQVlBLENBQUM7SUFYUSw2Q0FBd0IsR0FBL0I7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsNkJBQTZCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsNkJBQTZCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLDBDQUFxQixHQUE1QixVQUE2QixDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFIRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7MkRBSW5DO0lBQ0gsMkJBQUM7Q0FaRCxBQVlDLElBQUE7QUFaWSxvREFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVGFyZ2V0Q29sbGVjdGVkVXRpbHMge1xuICBzdGF0aWMgZ2V0VGFyZ2V0Q29sbGVjdGVkUmVzTWFwKCkge1xuICAgIHZhciBlID0gbmV3IE1hcCgpO1xuICAgIGUuc2V0KFwiSm91cm5leTAxXCIsIFtcInNwaW5lL2dhbWVwbGF5X2NvbWJvMTBfc25vd1wiLCBcInJfdGFyZ2V0Q29sbGVjdGVkXCJdKTtcbiAgICBlLnNldChcIkpvdXJuZXkwMlwiLCBbXCJzcGluZS9nYW1lcGxheV9jb21ibzEwX3Nub3dcIiwgXCJyX3RhcmdldENvbGxlY3RlZFwiXSk7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUYWdDb2xVdGlsc19nZXRSZXNcIilcbiAgc3RhdGljIGdldFRhcmdldENvbGxlY3RlZFJlcyhlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldFRhcmdldENvbGxlY3RlZFJlc01hcCgpO1xuICAgIHJldHVybiB0LmhhcyhlKSA/IHQuZ2V0KGUpIDogbnVsbDtcbiAgfVxufSJdfQ==