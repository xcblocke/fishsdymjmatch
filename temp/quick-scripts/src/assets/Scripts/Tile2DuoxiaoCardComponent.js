"use strict";
cc._RF.push(module, 'd05f9uUIEVCXpy3XT0CeXu/', 'Tile2DuoxiaoCardComponent');
// Scripts/Tile2DuoxiaoCardComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2DuoxiaoCardComponent = void 0;
var BaseLabel_1 = require("./gamePlay/base/ui/BaseLabel");
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var BaseTileNode_1 = require("./BaseTileNode");
var TileNodeComponent_1 = require("./TileNodeComponent");
var Tile2DuoxiaoCardComponent = /** @class */ (function (_super) {
    __extends(Tile2DuoxiaoCardComponent, _super);
    function Tile2DuoxiaoCardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2DuoxiaoCardComponent.prototype.onRefreshNode = function () {
        this._flagNode || (this._flagNode = this._createFlag());
        this._updateFlag();
    };
    Tile2DuoxiaoCardComponent.prototype.onUnbind = function () {
        this._flagNode && cc.isValid(this._flagNode) && this._flagNode.destroy();
        this._flagNode = null;
    };
    Tile2DuoxiaoCardComponent.prototype._createFlag = function () {
        var e = this._host.tileNode, t = e.getChildByName("DuoxiaoCardFlagNode");
        if (t)
            return t;
        var o = new cc.Node("DuoxiaoCardFlagNode");
        e.addChild(o);
        o.scale = 1 * this._host.info.tileObject.layoutScale;
        o.zIndex = BaseTileNode_1.TileNodeZIndexMap[BaseTileNode_1.ETileNodeNames.imgCard] + 1;
        return o;
    };
    Tile2DuoxiaoCardComponent.prototype._updateFlag = function () {
        var e = this;
        if (this._flagNode) {
            var t = BaseSpine_1.default.refreshWithNode(this._flagNode, "spine/duoxiao/idle/gameplay_hintCombo", "mainRes");
            t.setAnimation("init", -1, null, false);
            t.attachNode("hook_number", function () {
                var t = e._host.info.tileObject.getDuoxiaoCount().toString(), o = BaseLabel_1.default.create(t, "font/SPARTAN-BOLD", "mainRes", 36);
                o.node.name = "DuoxiaoCardCountNode";
                o.setColor(new cc.Color().fromHEX("#013713"));
                o.setAlign(cc.Label.HorizontalAlign.CENTER, cc.Label.VerticalAlign.CENTER);
                return o.node;
            });
        }
    };
    return Tile2DuoxiaoCardComponent;
}(TileNodeComponent_1.TileNodeComponent));
exports.Tile2DuoxiaoCardComponent = Tile2DuoxiaoCardComponent;

cc._RF.pop();