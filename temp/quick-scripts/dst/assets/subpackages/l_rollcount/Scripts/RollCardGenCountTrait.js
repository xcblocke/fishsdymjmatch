
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rollcount/Scripts/RollCardGenCountTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'baf44+oxjtM9o2uhbwtPf+o', 'RollCardGenCountTrait');
// subpackages/l_rollcount/Scripts/RollCardGenCountTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RollCardGenCountTrait = /** @class */ (function (_super) {
    __extends(RollCardGenCountTrait, _super);
    function RollCardGenCountTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RollCardGenCountTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RollCardGenCountTrait.prototype.onRollCardType_getPCount = function (t, r) {
        var e = t.args[0].gameType;
        if (e === GameTypeEnums_1.MjGameType.Normal || e === GameTypeEnums_1.MjGameType.Tile2Normal) {
            var o = t.beforReturnVal + this._traitData.addCount;
            r({
                returnVal: o = Math.max(1, o)
            });
        }
        else
            r();
    };
    RollCardGenCountTrait.traitKey = "RollCardGenCount";
    RollCardGenCountTrait = __decorate([
        mj.trait,
        mj.class("RollCardGenCountTrait")
    ], RollCardGenCountTrait);
    return RollCardGenCountTrait;
}(Trait_1.default));
exports.default = RollCardGenCountTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JvbGxjb3VudC9TY3JpcHRzL1JvbGxDYXJkR2VuQ291bnRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUczRDtJQUFtRCx5Q0FBSztJQUF4RDs7SUFjQSxDQUFDO0lBWkMsc0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHdEQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSywwQkFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssMEJBQVUsQ0FBQyxXQUFXLEVBQUU7WUFDM0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwRCxDQUFDLENBQUM7Z0JBQ0EsU0FBUyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDOUIsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBWk0sOEJBQVEsR0FBRyxrQkFBa0IsQ0FBQztJQURsQixxQkFBcUI7UUFGekMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBY3pDO0lBQUQsNEJBQUM7Q0FkRCxBQWNDLENBZGtELGVBQUssR0FjdkQ7a0JBZG9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUm9sbENhcmRHZW5Db3VudFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2xsQ2FyZEdlbkNvdW50VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUm9sbENhcmRHZW5Db3VudFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25Sb2xsQ2FyZFR5cGVfZ2V0UENvdW50KHQsIHIpIHtcbiAgICB2YXIgZSA9IHQuYXJnc1swXS5nYW1lVHlwZTtcbiAgICBpZiAoZSA9PT0gTWpHYW1lVHlwZS5Ob3JtYWwgfHwgZSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCkge1xuICAgICAgdmFyIG8gPSB0LmJlZm9yUmV0dXJuVmFsICsgdGhpcy5fdHJhaXREYXRhLmFkZENvdW50O1xuICAgICAgcih7XG4gICAgICAgIHJldHVyblZhbDogbyA9IE1hdGgubWF4KDEsIG8pXG4gICAgICB9KTtcbiAgICB9IGVsc2UgcigpO1xuICB9XG59Il19