"use strict";
cc._RF.push(module, '3e601l1umZBsYQU4OXyONYP', 'DuoxiaoCardTileNode');
// Scripts/DuoxiaoCardTileNode.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DuoxiaoCardTileNode = void 0;
var BaseLabel_1 = require("./gamePlay/base/ui/BaseLabel");
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var BaseTileNode_1 = require("./BaseTileNode");
var TileNodeObject_1 = require("./TileNodeObject");
var DuoxiaoCardTileNode = /** @class */ (function (_super) {
    __extends(DuoxiaoCardTileNode, _super);
    function DuoxiaoCardTileNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initType = TileTypeEnum_1.ETileNodeShowType.DuoxiaoCard;
        return _this;
    }
    DuoxiaoCardTileNode.prototype.refreshNode = function (t) {
        _super.prototype.refreshNode.call(this, t);
        this._duoxiaoFlagNode || (this._duoxiaoFlagNode = this.createDuoxiaoFlag());
        this.updateDuoxiaoFlag();
    };
    DuoxiaoCardTileNode.prototype.createDuoxiaoFlag = function () {
        if (!this.tileNode.getChildByName("DuoxiaoCardFlagNode")) {
            var e = new cc.Node();
            e.name = "DuoxiaoCardFlagNode";
            this.tileNode.addChild(e);
            e.scale = 1 * this.info.tileObject.layoutScale;
            e.zIndex = BaseTileNode_1.TileNodeZIndexMap[BaseTileNode_1.ETileNodeNames.imgCard] + 1;
            return e;
        }
    };
    DuoxiaoCardTileNode.prototype.updateDuoxiaoFlag = function () {
        var e = this;
        if (this._duoxiaoFlagNode) {
            var t = BaseSpine_1.default.refreshWithNode(this._duoxiaoFlagNode, "spine/duoxiao/idle/gameplay_hintCombo", "mainRes");
            t.setAnimation("init", -1, null, false);
            t.attachNode("hook_number", function () {
                var t = e.info.tileObject.getDuoxiaoCount().toString(), o = BaseLabel_1.default.create(t, "font/SPARTAN-BOLD", "mainRes", 36);
                o.node.name = "DuoxiaoCardCountNode";
                o.setColor(new cc.Color().fromHEX("#013713"));
                o.setAlign(cc.Label.HorizontalAlign.CENTER, cc.Label.VerticalAlign.CENTER);
                return o.node;
            });
        }
    };
    return DuoxiaoCardTileNode;
}(TileNodeObject_1.TileNodeObject));
exports.DuoxiaoCardTileNode = DuoxiaoCardTileNode;

cc._RF.pop();