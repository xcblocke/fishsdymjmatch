"use strict";
cc._RF.push(module, '5bdaamroilIRY6jQdSn23oi', 'DaxiaoCardTileNode');
// Scripts/DaxiaoCardTileNode.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DaxiaoCardTileNode = void 0;
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var BaseTileNode_1 = require("./BaseTileNode");
var TileNodeObject_1 = require("./TileNodeObject");
var DaxiaoCardTileNode = /** @class */ (function (_super) {
    __extends(DaxiaoCardTileNode, _super);
    function DaxiaoCardTileNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initType = TileTypeEnum_1.ETileNodeShowType.DaxiaoCard;
        return _this;
    }
    DaxiaoCardTileNode.prototype.refreshNode = function (t) {
        _super.prototype.refreshNode.call(this, t);
        this._daxiaoFlagNode || (this._daxiaoFlagNode = this.createDaxiaoFlag());
        this.updateDaxiaoFlag();
    };
    DaxiaoCardTileNode.prototype.createDaxiaoFlag = function () {
        if (!this.tileNode.getChildByName("DaxiaoCardFlagNode")) {
            var e = new cc.Node();
            e.name = "DaxiaoCardFlagNode";
            this.tileNode.addChild(e);
            e.scale = 1 * this.info.tileObject.layoutScale;
            e.zIndex = BaseTileNode_1.TileNodeZIndexMap[BaseTileNode_1.ETileNodeNames.imgCard] + 1;
            return e;
        }
    };
    DaxiaoCardTileNode.prototype.updateDaxiaoFlag = function () {
        this._daxiaoFlagNode && BaseSpine_1.default.refreshWithNode(this._daxiaoFlagNode, "spine/daxiao/idle/gameplay_hintGreat", "mainRes").setAnimation("init", -1, null, false);
    };
    DaxiaoCardTileNode.prototype.realShowSelectEffect = function () {
        _super.prototype.realShowSelectEffect.call(this);
    };
    DaxiaoCardTileNode.prototype.hideSelectEffect = function () {
        _super.prototype.hideSelectEffect.call(this);
    };
    return DaxiaoCardTileNode;
}(TileNodeObject_1.TileNodeObject));
exports.DaxiaoCardTileNode = DaxiaoCardTileNode;

cc._RF.pop();