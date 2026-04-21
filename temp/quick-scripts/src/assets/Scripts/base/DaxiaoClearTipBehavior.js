"use strict";
cc._RF.push(module, '0b702ZXa3pH9L7hwOwj46dg', 'DaxiaoClearTipBehavior');
// Scripts/base/DaxiaoClearTipBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DaxiaoClearTipBehavior = void 0;
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var BaseTileNode_1 = require("../BaseTileNode");
var DaxiaoAnimPlayer_1 = require("../anim/DaxiaoAnimPlayer");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var DaxiaoClearTipBehavior = /** @class */ (function (_super) {
    __extends(DaxiaoClearTipBehavior, _super);
    function DaxiaoClearTipBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DaxiaoClearTipBehavior.prototype.start = function (e) {
        e.data.tileIds;
        var t = e.data.finalMatchInfos, o = DaxiaoAnimPlayer_1.DaxiaoAnimPlayer.configBase.resources.flowLight;
        this.showTip(t, o.path, o.bundle);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    DaxiaoClearTipBehavior.prototype.showTip = function (e, t, o) {
        var n, i;
        try {
            for (var r = __values(e), l = r.next(); !l.done; l = r.next()) {
                var s = l.value;
                if (s.isFix) {
                    var c = this.context.getTileNodeMap().get(s.tileId1), u = this.context.getTileNodeMap().get(s.tileId2);
                    this.showDaxiaoClearTip(c, t, o);
                    this.showDaxiaoClearTip(u, t, o);
                }
                else {
                    c = this.context.getTileNodeMap().get(s.tileId1);
                    this.showDaxiaoClearTip(c, t, o);
                }
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (i = r.return) && i.call(r);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
    };
    DaxiaoClearTipBehavior.prototype.showDaxiaoClearTip = function (e, t, o) {
        if (e && cc.isValid(e.tileNode)) {
            var n = e.tileNode;
            if (!n.getChildByName("DaxiaoCardTipNode")) {
                var i = new cc.Node();
                i.name = "DaxiaoCardTipNode";
                n.addChild(i);
                i.zIndex = BaseTileNode_1.TileNodeZIndexMap[BaseTileNode_1.ETileNodeNames.imgCard] + 1;
                i.scale = 1 * e.info.tileObject.layoutScale;
                BaseSpine_1.default.refreshWithNode(i, t, o).setAnimation("init", -1, null, false);
            }
        }
    };
    __decorate([
        mj.traitEvent("DaxiaoTipBhr_showTip")
    ], DaxiaoClearTipBehavior.prototype, "showTip", null);
    return DaxiaoClearTipBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.DaxiaoClearTipBehavior = DaxiaoClearTipBehavior;

cc._RF.pop();