"use strict";
cc._RF.push(module, '763f4+YsGNBOosId8AAQ87U', 'InitCollectTargetBehavior');
// Scripts/base/InitCollectTargetBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.InitCollectTargetBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var CollectTargetItem_1 = require("../items/CollectTargetItem");
var TravelCollectTip_1 = require("../gamePlay/travel/view/TravelCollectTip");
var InitCollectTargetBehavior = /** @class */ (function (_super) {
    __extends(InitCollectTargetBehavior, _super);
    function InitCollectTargetBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 8000;
        _this.collectItems = [];
        return _this;
    }
    InitCollectTargetBehavior.prototype.start = function (e) {
        var t = this;
        try {
            var o = e.data.collectDetails;
            if (!o || 0 === o.length) {
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                return;
            }
            this.context.gameView.setSwallowEventNodeActive(true);
            this.createCollectItems(o).then(function () {
                t.createShowCollectView(function () {
                    t.finish(GameInputEnum_1.EBehaviorEnum.Success);
                    t.context.gameView.setSwallowEventNodeActive(false);
                });
            }).catch(function () {
                t.finish(GameInputEnum_1.EBehaviorEnum.Success);
                t.context.gameView.setSwallowEventNodeActive(false);
            });
        }
        catch (e) {
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
            this.context.gameView.setSwallowEventNodeActive(false);
        }
    };
    InitCollectTargetBehavior.prototype.createCollectItems = function (e, t, o, n, i) {
        if (t === void 0) { t = 20; }
        if (o === void 0) { o = 157; }
        if (n === void 0) { n = 0.56; }
        if (i === void 0) { i = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var r, a, s, u, f, d, h, y, m, v, g, _, T;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(r = this.context.gameView) || !r.node) {
                            return [2 /*return*/];
                        }
                        if (!(a = r.nodeCollect) || !cc.isValid(a)) {
                            return [2 /*return*/];
                        }
                        this.context.clearCollectTargetPositions();
                        this.context.clearCollectTargetItems();
                        s = o * n;
                        u = e.length * s + (e.length - 1) * t;
                        f = -u / 2 + s / 2;
                        return [4 /*yield*/, Promise.all(e.map(function () {
                                return CollectTargetItem_1.default.createUI();
                            }))];
                    case 1:
                        d = _a.sent();
                        for (h = 0; h < d.length; h++) {
                            y = d[h];
                            m = e[h];
                            if (y && cc.isValid(y)) {
                                a.addChild(y);
                                v = f + h * (s + t);
                                y.setPosition(v, i);
                                y._designPos = cc.v3(v, i, 0);
                                if (g = y.getComponent(CollectTargetItem_1.default)) {
                                    g.delegate = r.delegate;
                                    g.initUI(m);
                                    g.node.active = false;
                                    this.collectItems.push(g);
                                    _ = m.type === TileTypeEnum_1.ETileType.RollCard ? "" + m.type : m.type + "_" + m.cardId;
                                    T = y.convertToWorldSpaceAR(cc.v2(0, 0));
                                    this.context.setCollectTargetPosition(_, cc.v3(T.x, T.y, 0));
                                    this.context.registerCollectTargetItem(_, g);
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    InitCollectTargetBehavior.prototype.createShowCollectView = function (e) {
        var t = this;
        try {
            TravelCollectTip_1.default.createUI().then(function (o) {
                if (o && cc.isValid(o) && cc.isValid(t.context.gameView)) {
                    var n = t.context.gameView, i = n.nodeCollectShow;
                    if (!cc.isValid(i)) {
                        null == e || e();
                        return;
                    }
                    i.addChild(o);
                    o.setPosition(0, 0);
                    var r = o.getComponent(TravelCollectTip_1.default);
                    r.delegate = n.delegate;
                    r.playShowAnim(t.collectItems.map(function (e) {
                        return e.node;
                    }), t.collectItems.map(function (e) {
                        return e.getData().type;
                    }), e);
                }
            });
        }
        catch (t) {
            null == e || e();
        }
    };
    __decorate([
        mj.traitEvent("InitColTagBhv_crtItems")
    ], InitCollectTargetBehavior.prototype, "createCollectItems", null);
    return InitCollectTargetBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.InitCollectTargetBehavior = InitCollectTargetBehavior;

cc._RF.pop();