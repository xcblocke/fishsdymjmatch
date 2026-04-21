"use strict";
cc._RF.push(module, '818e88p3/VPN46ep0zxR6/a', 'Tile2InitSlotBarBehavior');
// Scripts/base/Tile2InitSlotBarBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2InitSlotBarBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var SlotBarView_1 = require("../gamePlay/tile2game/view/SlotBarView");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2InitSlotBarBehavior = /** @class */ (function (_super) {
    __extends(Tile2InitSlotBarBehavior, _super);
    function Tile2InitSlotBarBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2InitSlotBarBehavior.prototype.start = function (e) {
        var t = this, o = e.data, n = o.tileIds, i = o.slotLevel, r = this.context.gameView, l = null == r ? void 0 : r.slotBarView;
        if (l)
            this.initSlotBar(l, n, i);
        else {
            var u = "prefabs/game/Tile2nodeSlotBar";
            e.data.slotType === GameTypeEnums_1.ETile2SlotType.Slot4 && (u = "prefabs/game/Tile2Slot4nodeSlotBar");
            SlotBarView_1.default.createUI(u).then(function (o) {
                var l = r.getSlotBarNode();
                if (cc.isValid(l)) {
                    l.setContentSize(o.getContentSize());
                    o.parent = l;
                    var c = o.getComponent(SlotBarView_1.default);
                    r.setSlotBarView(c);
                    c.init(e.data.slotType);
                    t.initSlotBar(c, n, i);
                }
                else
                    t.finish(GameInputEnum_1.EBehaviorEnum.Fail);
            });
        }
    };
    Tile2InitSlotBarBehavior.prototype.initSlotBar = function (e, t, o) {
        var n = this.context.getTileNodeMap();
        t.forEach(function (t, o) {
            var i = n.get(t);
            if (i) {
                e.addTileNode(i, o);
                i.tile2ShowFrontImmediately();
            }
        });
        o > 0 && e.slotBarEffectManager && e.slotBarEffectManager.initToLevel(o);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("T2InitSlotBarBhv_start")
    ], Tile2InitSlotBarBehavior.prototype, "start", null);
    return Tile2InitSlotBarBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2InitSlotBarBehavior = Tile2InitSlotBarBehavior;

cc._RF.pop();