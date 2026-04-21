"use strict";
cc._RF.push(module, '0dcbfZzwk9E+p9wzF+mn0eF', 'InitViewBehavior');
// Scripts/base/InitViewBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.InitViewBehavior = void 0;
var TileNodeManager_1 = require("../tilenodes/TileNodeManager");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var InitViewBehavior = /** @class */ (function (_super) {
    __extends(InitViewBehavior, _super);
    function InitViewBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    InitViewBehavior.prototype.start = function (e) {
        var t = this;
        Date.now();
        this._cardLayoutConfig = e.data.cardLayoutConfig;
        this._cardConfigMap = e.data.cardConfigMap;
        this.context.setTileMapObject(e.data.tilemapObject);
        this.context.setLayoutScale(e.data.layoutScale);
        this.initAllTileNodes().then(function () {
            Date.now();
            t.createAllTileNodes();
            t.finish();
        });
    };
    InitViewBehavior.prototype.initAllTileNodes = function () {
        return new TileNodeManager_1.default(this.context).createAllTileNodes({
            tileMapObject: this.context.getTileMapObject(),
            cardLayoutConfig: this._cardLayoutConfig,
            cardConfigMap: this._cardConfigMap
        });
    };
    InitViewBehavior.prototype.createAllTileNodes = function () { };
    __decorate([
        mj.traitEvent("InitViewBhv_crtTls")
    ], InitViewBehavior.prototype, "createAllTileNodes", null);
    return InitViewBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.InitViewBehavior = InitViewBehavior;

cc._RF.pop();