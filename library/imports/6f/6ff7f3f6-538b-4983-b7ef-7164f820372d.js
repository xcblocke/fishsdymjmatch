"use strict";
cc._RF.push(module, '6ff7fP2U4tJg7fvcWT4IDct', 'TravelTopCollectTrait');
// subpackages/l_travelTopCollect/Scripts/TravelTopCollectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var TravelTopCollectTrait = /** @class */ (function (_super) {
    __extends(TravelTopCollectTrait, _super);
    function TravelTopCollectTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelTopCollectTrait.prototype.onTravelGmVw_initExpands = function (e, t) {
        var r = e.ins;
        r.gameType === GameTypeEnums_1.MjGameType.Travel && this.fixTopCollectNode(r);
        t();
    };
    TravelTopCollectTrait.prototype.fixTopCollectNode = function (e) {
        if (e && e.nodeCollect) {
            var t = BaseSprite_1.default.create("texture/gamePlayTop/gameplay_bg", "mainRes", cc.Sprite.SizeMode.CUSTOM);
            t.getComponent(cc.Sprite).type = cc.Sprite.Type.SLICED;
            t.node.name = "nodeCollectBg";
            t.node.setPosition(e.nodeCollect.position);
            t.node.setContentSize(cc.size(726, 152));
            t.node.parent = e.nodeCollect.parent;
            t.node.setSiblingIndex(e.nodeCollect.getSiblingIndex());
        }
    };
    TravelTopCollectTrait.prototype.getOffsetY = function (e) {
        var t = 8;
        if (1 === e.length && e[0].type === TileTypeEnum_1.ETileType.Yoga)
            switch (TravelGameModel_1.default.getInstance().getCurJourney()) {
                case "Journey01":
                    t = -2;
                    break;
                case "Journey02":
                    t = 0;
                    break;
                case "Journey03":
                    t = 4;
                    break;
                case "Journey04":
                    t = -6;
                    break;
                default:
                    t = -2;
            }
        return t;
    };
    TravelTopCollectTrait.prototype.onInitColTagBhv_crtItems = function (e, t) {
        var r = __read(e.args, 1)[0], o = this.getOffsetY(r);
        e.args[0] = r;
        e.args[1] = r.length > 6 ? 20 : 15;
        e.args[2] = 157;
        e.args[3] = 0.56;
        e.args[4] = o;
        t();
    };
    TravelTopCollectTrait.traitKey = "TravelTopCollect";
    TravelTopCollectTrait = __decorate([
        mj.trait,
        mj.class("TravelTopCollectTrait")
    ], TravelTopCollectTrait);
    return TravelTopCollectTrait;
}(Trait_1.default));
exports.default = TravelTopCollectTrait;

cc._RF.pop();