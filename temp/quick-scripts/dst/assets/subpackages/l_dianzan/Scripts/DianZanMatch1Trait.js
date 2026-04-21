
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dianzan/Scripts/DianZanMatch1Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95b84anUghBf4qVMvSFiwEH', 'DianZanMatch1Trait');
// subpackages/l_dianzan/Scripts/DianZanMatch1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DianZanTrait_1 = require("./DianZanTrait");
var DianZanMatch1Trait = /** @class */ (function (_super) {
    __extends(DianZanMatch1Trait, _super);
    function DianZanMatch1Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DianZanMatch1Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DianZanMatch1Trait.prototype._checkDianZan = function () {
        return 1 == this._beforeClearMatchNum && this._afterClearMatchNum >= 1;
    };
    DianZanMatch1Trait.traitKey = "DianZanMatch1";
    DianZanMatch1Trait = __decorate([
        mj.trait,
        mj.class("DianZanMatch1Trait")
    ], DianZanMatch1Trait);
    return DianZanMatch1Trait;
}(DianZanTrait_1.default));
exports.default = DianZanMatch1Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RpYW56YW4vU2NyaXB0cy9EaWFuWmFuTWF0Y2gxVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUcxQztJQUFnRCxzQ0FBWTtJQUE1RDs7SUFRQSxDQUFDO0lBTkMsbUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDBDQUFhLEdBQWI7UUFDRSxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBTk0sMkJBQVEsR0FBRyxlQUFlLENBQUM7SUFEZixrQkFBa0I7UUFGdEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBUXRDO0lBQUQseUJBQUM7Q0FSRCxBQVFDLENBUitDLHNCQUFZLEdBUTNEO2tCQVJvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlhblphblRyYWl0IGZyb20gJy4vRGlhblphblRyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRGlhblphbk1hdGNoMVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFuWmFuTWF0Y2gxVHJhaXQgZXh0ZW5kcyBEaWFuWmFuVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkRpYW5aYW5NYXRjaDFcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIF9jaGVja0RpYW5aYW4oKSB7XG4gICAgcmV0dXJuIDEgPT0gdGhpcy5fYmVmb3JlQ2xlYXJNYXRjaE51bSAmJiB0aGlzLl9hZnRlckNsZWFyTWF0Y2hOdW0gPj0gMTtcbiAgfVxufSJdfQ==