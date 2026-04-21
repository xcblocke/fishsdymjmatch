"use strict";
cc._RF.push(module, 'b1743vyLRZMC5y3OreVDmuY', 'DianZanBehavior');
// subpackages/l_dianzan/Scripts/DianZanBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DianZanBehavior = void 0;
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var DianZanItem_1 = require("./DianZanItem");
var DianZanBehavior = /** @class */ (function (_super) {
    __extends(DianZanBehavior, _super);
    function DianZanBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DianZanBehavior.prototype.start = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var e, n, r, o, i, a, p, l, f, h, y, _, d, v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e = t.data;
                        n = e.tileId;
                        r = e.lastTileId;
                        if (!n || !r) {
                            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                            return [2 /*return*/];
                        }
                        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                        o = this.context.getTileNodeWorldPosition(n);
                        i = this.context.getTileNodeWorldPosition(r);
                        a = this.getScale(this.context.layoutScale);
                        return [4 /*yield*/, DianZanItem_1.default.createUI()];
                    case 1:
                        p = _a.sent();
                        return [4 /*yield*/, DianZanItem_1.default.createUI()];
                    case 2:
                        l = _a.sent();
                        f = this.context.gameView.effectNode;
                        p.parent = f;
                        h = f.convertToNodeSpaceAR(o);
                        p.position = this.getDianZanPosition(h);
                        l.parent = f;
                        y = f.convertToNodeSpaceAR(i);
                        l.position = this.getDianZanPosition(y);
                        _ = p.getComponent(DianZanItem_1.default);
                        d = l.getComponent(DianZanItem_1.default);
                        v = this.getAnimName();
                        this.playDianZanAni(_, d, v, a);
                        return [2 /*return*/];
                }
            });
        });
    };
    DianZanBehavior.prototype.getDianZanPosition = function (t) {
        return cc.v3(t.x, t.y, 0);
    };
    DianZanBehavior.prototype.getScale = function (t) {
        return t;
    };
    DianZanBehavior.prototype.getAnimName = function () {
        return "in";
    };
    DianZanBehavior.prototype.playDianZanAni = function (t, e, n, r) {
        t.setScale(r);
        e.setScale(r);
        t.startPlayAni(n);
        e.startPlayAni(n, function () { });
    };
    __decorate([
        mj.traitEvent("DianZanBhv_getPos")
    ], DianZanBehavior.prototype, "getDianZanPosition", null);
    __decorate([
        mj.traitEvent("DianZanBhv_getScale")
    ], DianZanBehavior.prototype, "getScale", null);
    __decorate([
        mj.traitEvent("DianZanBhv_getAniName")
    ], DianZanBehavior.prototype, "getAnimName", null);
    __decorate([
        mj.traitEvent("DianZanBhv_playAni")
    ], DianZanBehavior.prototype, "playDianZanAni", null);
    return DianZanBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.DianZanBehavior = DianZanBehavior;

cc._RF.pop();