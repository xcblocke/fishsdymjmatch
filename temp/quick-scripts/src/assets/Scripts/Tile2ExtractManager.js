"use strict";
cc._RF.push(module, 'b0505RhkvBPa6CQ8kJt5o6D', 'Tile2ExtractManager');
// Scripts/Tile2ExtractManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("./core/extractQuestion/ExtractTool");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var ExtractChain_1 = require("./core/extractTile2/ExtractChain");
var Tile2CapabilityExtractRegistry_1 = require("./Tile2CapabilityExtractRegistry");
var Tile2DynamicStrategy_1 = require("./Tile2DynamicStrategy");
var Tile2FixedStrategy_1 = require("./Tile2FixedStrategy");
var Tile2HardStrategy_1 = require("./Tile2HardStrategy");
var Tile2StaticStrategy_1 = require("./Tile2StaticStrategy");
var Tile2StaticLevelTypeStrategy_1 = require("./Tile2StaticLevelTypeStrategy");
var Tile2FixedRandomStrategy_1 = require("./Tile2FixedRandomStrategy");
var Tile2ExtractManager = /** @class */ (function () {
    function Tile2ExtractManager() {
        this._isInit = false;
        this._chain = new ExtractChain_1.default();
        this._chain.register(new Tile2FixedStrategy_1.default());
        this._chain.register(new Tile2FixedRandomStrategy_1.default());
        this._chain.register(new Tile2HardStrategy_1.default());
        this._chain.register(new Tile2DynamicStrategy_1.default());
        this._chain.register(new Tile2StaticLevelTypeStrategy_1.default());
        this._chain.register(new Tile2StaticStrategy_1.default());
    }
    Tile2ExtractManager_1 = Tile2ExtractManager;
    Object.defineProperty(Tile2ExtractManager.prototype, "chain", {
        get: function () {
            return this._chain;
        },
        enumerable: false,
        configurable: true
    });
    Tile2ExtractManager.getInstance = function () {
        this._instance || (this._instance = new Tile2ExtractManager_1());
        return this._instance;
    };
    Tile2ExtractManager.prototype.initData = function () {
        var e = this;
        if (this._isInit)
            return Promise.resolve();
        var t = function t() {
            return e._chain.initAll().then(function () {
                e._chain.resort();
                e._isInit = true;
            });
        };
        return Tile2CapabilityExtractRegistry_1.default.isEnabled() ? ExtractTool_1.default.getInstance().initData(GameTypeEnums_1.MjGameType.Tile2Normal).then(function () {
            return t();
        }) : t();
    };
    Tile2ExtractManager.prototype.getContentData = function (e) {
        return this._chain.execute({
            gameData: e
        }).then(function (e) {
            return e;
        });
    };
    var Tile2ExtractManager_1;
    Tile2ExtractManager._instance = null;
    __decorate([
        mj.traitEvent("T2ExtMgr_getCont")
    ], Tile2ExtractManager.prototype, "getContentData", null);
    Tile2ExtractManager = Tile2ExtractManager_1 = __decorate([
        mj.class("Tile2ExtractManager")
    ], Tile2ExtractManager);
    return Tile2ExtractManager;
}());
exports.default = Tile2ExtractManager;

cc._RF.pop();