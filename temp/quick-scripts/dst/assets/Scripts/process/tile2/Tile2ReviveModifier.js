
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tile2/Tile2ReviveModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '044ecUXOg5CvpVyvA5OeZ9f', 'Tile2ReviveModifier');
// Scripts/process/tile2/Tile2ReviveModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ReviveModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var Tile2ReviveModifier = /** @class */ (function (_super) {
    __extends(Tile2ReviveModifier, _super);
    function Tile2ReviveModifier(t) {
        return _super.call(this, t) || this;
    }
    Tile2ReviveModifier.prototype.initRevive = function () {
        this.context.getGameData().getReviveNums();
    };
    Tile2ReviveModifier.prototype.useRevive = function () {
        var e = this.context.getGameData().getReviveNums();
        this.context.getGameData().changeReviveNums(-1);
        return e > 0;
    };
    Tile2ReviveModifier.prototype.addReviveCount = function (e) {
        if (e === void 0) { e = 1; }
        this.context.getGameData().changeReviveNums(e);
    };
    return Tile2ReviveModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2ReviveModifier = Tile2ReviveModifier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZTIvVGlsZTJSZXZpdmVNb2RpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RDtJQUF5Qyx1Q0FBYztJQUNyRCw2QkFBWSxDQUFDO2VBQ1gsa0JBQU0sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUNELHdDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFDRCx1Q0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUNELDRDQUFjLEdBQWQsVUFBZSxDQUFLO1FBQUwsa0JBQUEsRUFBQSxLQUFLO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FmQSxBQWVDLENBZndDLCtCQUFjLEdBZXREO0FBZlksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvcmVPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlQ29yZU9iamVjdCc7XG5leHBvcnQgY2xhc3MgVGlsZTJSZXZpdmVNb2RpZmllciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICB9XG4gIGluaXRSZXZpdmUoKSB7XG4gICAgdGhpcy5jb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0UmV2aXZlTnVtcygpO1xuICB9XG4gIHVzZVJldml2ZSgpIHtcbiAgICB2YXIgZSA9IHRoaXMuY29udGV4dC5nZXRHYW1lRGF0YSgpLmdldFJldml2ZU51bXMoKTtcbiAgICB0aGlzLmNvbnRleHQuZ2V0R2FtZURhdGEoKS5jaGFuZ2VSZXZpdmVOdW1zKC0xKTtcbiAgICByZXR1cm4gZSA+IDA7XG4gIH1cbiAgYWRkUmV2aXZlQ291bnQoZSA9IDEpIHtcbiAgICB0aGlzLmNvbnRleHQuZ2V0R2FtZURhdGEoKS5jaGFuZ2VSZXZpdmVOdW1zKGUpO1xuICB9XG59Il19