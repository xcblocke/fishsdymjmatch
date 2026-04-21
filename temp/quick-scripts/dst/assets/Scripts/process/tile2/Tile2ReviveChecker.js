
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tile2/Tile2ReviveChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57720Bo0/5KI4bWqLWnQk5z', 'Tile2ReviveChecker');
// Scripts/process/tile2/Tile2ReviveChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ReviveChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var Tile2ReviveChecker = /** @class */ (function (_super) {
    __extends(Tile2ReviveChecker, _super);
    function Tile2ReviveChecker(t) {
        return _super.call(this, t) || this;
    }
    Tile2ReviveChecker.prototype.getReviveCount = function () {
        return this._context.getGameData().getReviveNums();
    };
    Tile2ReviveChecker.prototype.hasRevive = function () {
        return this._context.getGameData().hasRevive();
    };
    return Tile2ReviveChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2ReviveChecker = Tile2ReviveChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZTIvVGlsZTJSZXZpdmVDaGVja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3REO0lBQXdDLHNDQUFjO0lBQ3BELDRCQUFZLENBQUM7ZUFDWCxrQkFBTSxDQUFDLENBQUM7SUFDVixDQUFDO0lBQ0QsMkNBQWMsR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBQ0Qsc0NBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQVZBLEFBVUMsQ0FWdUMsK0JBQWMsR0FVckQ7QUFWWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29yZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VDb3JlT2JqZWN0JztcbmV4cG9ydCBjbGFzcyBUaWxlMlJldml2ZUNoZWNrZXIgZXh0ZW5kcyBCYXNlQ29yZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBzdXBlcih0KTtcbiAgfVxuICBnZXRSZXZpdmVDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5nZXRHYW1lRGF0YSgpLmdldFJldml2ZU51bXMoKTtcbiAgfVxuICBoYXNSZXZpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5oYXNSZXZpdmUoKTtcbiAgfVxufSJdfQ==