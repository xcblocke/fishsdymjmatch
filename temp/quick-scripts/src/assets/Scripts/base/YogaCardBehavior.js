"use strict";
cc._RF.push(module, 'c728evNrg5BIZ9/mzWT+ZRZ', 'YogaCardBehavior');
// Scripts/base/YogaCardBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var TravelGameModel_1 = require("../gamePlay/travel/model/TravelGameModel");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var YogaCardBehavior = /** @class */ (function (_super) {
    __extends(YogaCardBehavior, _super);
    function YogaCardBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YogaCardBehavior.playCollectAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.CollectionSpecial);
    };
    YogaCardBehavior.playTwoStageAnimation = function (e, o, n, i, r, a, l) {
        if (r === void 0) { r = 0.15; }
        if (a === void 0) { a = 0.5; }
        if (e && cc.isValid(e)) {
            e.position = o;
            var s = o.x + 0.2 * (n.x - o.x), c = o.y + 0.3 * (n.y - o.y), u = cc.v2(s, c), p = o.x + 0.5 * (n.x - o.x), f = o.y + 0.85 * (n.y - o.y), d = cc.v2(p, f), h = cc.v2(n.x, n.y), y = n.x + 0.25 * (i.x - n.x), m = n.y + 0.15 * (i.y - n.y), v = cc.v2(y, m), g = n.x + 0.7 * (i.x - n.x), _ = n.y + 0.6 * (i.y - n.y), T = cc.v2(g, _), C = cc.v2(i.x, i.y);
            cc.tween(e).delay(0.77).call(function () {
                YogaCardBehavior.playCollectAudio();
            }).bezierTo(r, u, d, h).bezierTo(a, v, T, C).call(function () {
                null == l || l();
            }).start();
        }
    };
    YogaCardBehavior.prototype.start = function (e) {
        var o, n, i = this, s = e.data.tileIds, u = function u(e) {
            var o = p.context.getTileNodeMap().get(e);
            if (o) {
                var n = o.tileObject.type + "_" + o.tileObject.cardId, a = p.context.getTileNodeWorldPosition(e), s = p.context.getCollectTargetPosition(n);
                if (!s) {
                    var u = p.context.gameView.topRootNode.position;
                    s = p.context.gameView.topRootNode.parent.convertToWorldSpaceAR(u);
                }
                o.hide();
                p.context.removeTileNodeByTileId(e);
                var f = __read(p.getAnimPath(), 2), d = f[0], h = f[1], y = BaseSpine_1.default.create(h, "in", 1, null, false, d);
                p.context.gameView.effectNode.addChild(y.node);
                var m = p.context.gameView.effectNode.convertToNodeSpaceAR(a), v = new cc.Vec3(m.x, m.y, 0), g = p.context.gameView.effectNode.convertToNodeSpaceAR(s), _ = new cc.Vec3(m.x, m.y - 200, 0);
                p.playInitAudio();
                YogaCardBehavior.playTwoStageAnimation(y.node, v, _, g, 0.15, 0.44, function () {
                    cc.isValid(y.node) && y.node.destroy();
                    i.finish(GameInputEnum_1.EBehaviorEnum.Success);
                });
            }
        }, p = this;
        try {
            for (var f = __values(s), d = f.next(); !d.done; d = f.next())
                u(d.value);
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                d && !d.done && (n = f.return) && n.call(f);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
    };
    YogaCardBehavior.prototype.getAnimPath = function () {
        if (this.context.gameCtr.gameType === GameTypeEnums_1.MjGameType.Travel) {
            var e = TravelGameModel_1.default.getInstance().getCurJourney(), t = TravelGameModel_1.default.getInstance().getConfig(e);
            if (t && t.yogaAnim) {
                var o = t.yogaAnim.split(":");
                return 2 === o.length ? [o[0], "spine/" + o[1]] : ["mainRes", "spine/yoga/" + t.yogaAnim];
            }
        }
        return ["mainRes", "spine/yoga/gameplay_obstacle"];
    };
    YogaCardBehavior.prototype.playInitAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.CollectionShow);
    };
    return YogaCardBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = YogaCardBehavior;

cc._RF.pop();