
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BombCardTileNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c615d47z5N2rbxek1vvpLe', 'BombCardTileNode');
// Scripts/BombCardTileNode.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BombCardTileNode = void 0;
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var TileNodeObject_1 = require("./TileNodeObject");
var BombCardTileNode = /** @class */ (function (_super) {
    __extends(BombCardTileNode, _super);
    function BombCardTileNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initType = TileTypeEnum_1.ETileNodeShowType.Bomb;
        return _this;
    }
    BombCardTileNode.prototype.createImgCard = function (t) {
        return _super.prototype.createImgCard.call(this, t);
    };
    __decorate([
        mj.traitEvent("BombCardNode_crtImgCard")
    ], BombCardTileNode.prototype, "createImgCard", null);
    return BombCardTileNode;
}(TileNodeObject_1.TileNodeObject));
exports.BombCardTileNode = BombCardTileNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0JvbWJDYXJkVGlsZU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBc0U7QUFDdEUsbURBQWtEO0FBQ2xEO0lBQXNDLG9DQUFjO0lBQXBEO1FBQUEscUVBTUM7UUFMQyxlQUFTLEdBQUcsZ0NBQWlCLENBQUMsSUFBSSxDQUFDOztJQUtyQyxDQUFDO0lBSEMsd0NBQWEsR0FBYixVQUFjLENBQUM7UUFDYixPQUFPLGlCQUFNLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFGRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7eURBR3hDO0lBQ0gsdUJBQUM7Q0FORCxBQU1DLENBTnFDLCtCQUFjLEdBTW5EO0FBTlksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVRpbGVOb2RlU2hvd1R5cGUgfSBmcm9tICcuL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IHsgVGlsZU5vZGVPYmplY3QgfSBmcm9tICcuL1RpbGVOb2RlT2JqZWN0JztcbmV4cG9ydCBjbGFzcyBCb21iQ2FyZFRpbGVOb2RlIGV4dGVuZHMgVGlsZU5vZGVPYmplY3Qge1xuICBfaW5pdFR5cGUgPSBFVGlsZU5vZGVTaG93VHlwZS5Cb21iO1xuICBAbWoudHJhaXRFdmVudChcIkJvbWJDYXJkTm9kZV9jcnRJbWdDYXJkXCIpXG4gIGNyZWF0ZUltZ0NhcmQodCkge1xuICAgIHJldHVybiBzdXBlci5jcmVhdGVJbWdDYXJkLmNhbGwodGhpcywgdCk7XG4gIH1cbn0iXX0=