
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DifficultyDecisionCoordSel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8993fHiJXpEsbGEW/4ASW33', 'DifficultyDecisionCoordSel');
// Scripts/DifficultyDecisionCoordSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DifficultyDecisionCoordSel = void 0;
var ChainMultiCoordSel_1 = require("./ChainMultiCoordSel");
var DifficultyDecisionCoordSel = /** @class */ (function (_super) {
    __extends(DifficultyDecisionCoordSel, _super);
    function DifficultyDecisionCoordSel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DifficultyDecisionCoordSel.prototype.calculatePriority = function (t, o, n) {
        return _super.prototype.calculatePriority.call(this, t, o, n);
    };
    return DifficultyDecisionCoordSel;
}(ChainMultiCoordSel_1.ChainMultiCoordSel));
exports.DifficultyDecisionCoordSel = DifficultyDecisionCoordSel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0RpZmZpY3VsdHlEZWNpc2lvbkNvb3JkU2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBQzFEO0lBQWdELDhDQUFrQjtJQUFsRTs7SUFJQSxDQUFDO0lBSEMsc0RBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN2QixPQUFPLGlCQUFNLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0gsaUNBQUM7QUFBRCxDQUpBLEFBSUMsQ0FKK0MsdUNBQWtCLEdBSWpFO0FBSlksZ0VBQTBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhaW5NdWx0aUNvb3JkU2VsIH0gZnJvbSAnLi9DaGFpbk11bHRpQ29vcmRTZWwnO1xuZXhwb3J0IGNsYXNzIERpZmZpY3VsdHlEZWNpc2lvbkNvb3JkU2VsIGV4dGVuZHMgQ2hhaW5NdWx0aUNvb3JkU2VsIHtcbiAgY2FsY3VsYXRlUHJpb3JpdHkodCwgbywgbikge1xuICAgIHJldHVybiBzdXBlci5jYWxjdWxhdGVQcmlvcml0eS5jYWxsKHRoaXMsIHQsIG8sIG4pO1xuICB9XG59Il19