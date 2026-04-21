"use strict";
cc._RF.push(module, '9cd13bGTDtGJqDJT/9JVg/f', 'AddLevelDropBehavior');
// Scripts/AddLevelDropBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLevelDropBehavior = void 0;
var UserModel_1 = require("./gamePlay/user/UserModel");
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameInteraction_1 = require("./GameInteraction/GameInteraction");
var GameBehaviorsBase_1 = require("./base/GameBehaviorsBase");
var AddLevelDropBehavior = /** @class */ (function (_super) {
    __extends(AddLevelDropBehavior, _super);
    function AddLevelDropBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddLevelDropBehavior.prototype.start = function (e) {
        var t, o, n, i, a, l, s = e.data.fallingTiles, c = this.context.getTileNodeManager(), u = [];
        try {
            for (var p = __values(s), f = p.next(); !f.done; f = p.next()) {
                var d = f.value, h = d.tile;
                c.handleFallingTileNode(h, d.newLayer, d.indexInLayer);
                u.push(d.newLayer);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (o = p.return) && o.call(p);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        try {
            for (var y = __values(u), m = y.next(); !m.done; m = y.next()) {
                var v = m.value;
                c.updateLayerSiblingIndexes(v);
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                m && !m.done && (i = y.return) && i.call(y);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        try {
            for (var g = __values(u), _ = g.next(); !_.done; _ = g.next()) {
                v = _.value;
                c.updateLayerShadowSize(v);
            }
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                _ && !_.done && (l = g.return) && l.call(g);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        c.destoryEmptyLayerNodes();
        this.refreshCardLockDarken();
        this.finish();
    };
    AddLevelDropBehavior.prototype.refreshCardLockDarken = function () {
        UserModel_1.default.getInstance().isLockHighlightEnabled() && GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.RefreshCardLockDarken,
            isShowAni: false
        });
    };
    return AddLevelDropBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.AddLevelDropBehavior = AddLevelDropBehavior;

cc._RF.pop();