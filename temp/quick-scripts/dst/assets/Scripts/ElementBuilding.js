
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ElementBuilding.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa798xC30lMOLh4KnD2fz7s', 'ElementBuilding');
// Scripts/ElementBuilding.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ElementBase_1 = require("./ElementBase");
var ElementBuilding = /** @class */ (function (_super) {
    __extends(ElementBuilding, _super);
    function ElementBuilding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementBuilding.prototype.uiOnLoad = function () {
        _super.prototype.uiOnLoad.call(this);
        cc.isValid(this.node.parent) && this.node.setContentSize(cc.size(this.node.parent.width, this.node.height));
    };
    ElementBuilding.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
    };
    ElementBuilding.prototype.getDesignZOrder = function () {
        return cc.isValid(this.node.parent) ? this.node.parent.children.length - 1 : 0;
    };
    ElementBuilding.prefabUrl = "";
    ElementBuilding.size = new cc.Size(1080, 1920);
    ElementBuilding = __decorate([
        mj.class
    ], ElementBuilding);
    return ElementBuilding;
}(ElementBase_1.default));
exports.default = ElementBuilding;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0VsZW1lbnRCdWlsZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBRXhDO0lBQTZDLG1DQUFXO0lBQXhEOztJQWFBLENBQUM7SUFWQyxrQ0FBUSxHQUFSO1FBQ0UsaUJBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzlHLENBQUM7SUFDRCxrQ0FBUSxHQUFSO1FBQ0UsaUJBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QseUNBQWUsR0FBZjtRQUNFLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFYTSx5QkFBUyxHQUFHLEVBQUUsQ0FBQztJQUNmLG9CQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUZuQixlQUFlO1FBRG5DLEVBQUUsQ0FBQyxLQUFLO09BQ1ksZUFBZSxDQWFuQztJQUFELHNCQUFDO0NBYkQsQUFhQyxDQWI0QyxxQkFBVyxHQWF2RDtrQkFib0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbGVtZW50QmFzZSBmcm9tICcuL0VsZW1lbnRCYXNlJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudEJ1aWxkaW5nIGV4dGVuZHMgRWxlbWVudEJhc2Uge1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJcIjtcbiAgc3RhdGljIHNpemUgPSBuZXcgY2MuU2l6ZSgxMDgwLCAxOTIwKTtcbiAgdWlPbkxvYWQoKSB7XG4gICAgc3VwZXIudWlPbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBjYy5pc1ZhbGlkKHRoaXMubm9kZS5wYXJlbnQpICYmIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYy5zaXplKHRoaXMubm9kZS5wYXJlbnQud2lkdGgsIHRoaXMubm9kZS5oZWlnaHQpKTtcbiAgfVxuICB1cGRhdGVVSSgpIHtcbiAgICBzdXBlci51cGRhdGVVSS5jYWxsKHRoaXMpO1xuICB9XG4gIGdldERlc2lnblpPcmRlcigpIHtcbiAgICByZXR1cm4gY2MuaXNWYWxpZCh0aGlzLm5vZGUucGFyZW50KSA/IHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMSA6IDA7XG4gIH1cbn0iXX0=