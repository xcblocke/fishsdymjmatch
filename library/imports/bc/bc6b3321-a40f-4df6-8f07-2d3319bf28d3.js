"use strict";
cc._RF.push(module, 'bc6b3MhpA9N9o8HLTMZvyjT', 'ClickCoverLockTipBehavior');
// subpackages/l_coverTip/Scripts/ClickCoverLockTipBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickCoverLockTipBehavior = void 0;
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var enumRes_1 = require("../../../Scripts/constant/enumRes");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var ClickCoverLockTipBehavior = /** @class */ (function (_super) {
    __extends(ClickCoverLockTipBehavior, _super);
    function ClickCoverLockTipBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClickCoverLockTipBehavior.prototype.getTileNode = function (t) {
        var e;
        return (null === (e = this.context.getTileNodeMap().get(t)) || void 0 === e ? void 0 : e.cardNode) || null;
    };
    ClickCoverLockTipBehavior.prototype.start = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var e, o;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                        if (!(e = this.getTileNode(t.data.tileId))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getOrCreateTip()];
                    case 1:
                        if (!(o = _a.sent()))
                            return [2 /*return*/];
                        this.setupTipAndPlayAnimation(e, o);
                        return [2 /*return*/];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ClickCoverLockTipBehavior.prototype.getOrCreateTip = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t, o, r, i, c;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        t = this.context.gameView;
                        if (!(o = t.nodeTopEffectRoot) || !cc.isValid(o)) {
                            return [2 /*return*/, null];
                        }
                        r = o.getChildByName(ClickCoverLockTipBehavior.TIP_NODE_NAME);
                        if (cc.isValid(r)) {
                            cc.Tween.stopAllByTarget(r);
                            this.resetTipState(r);
                            return [2 /*return*/, r];
                        }
                        return [4 /*yield*/, BaseUI_1.default.createUI(enumRes_1.PrefabPath.CoverLockTip, "mainRes")];
                    case 1:
                        i = _a.sent();
                        if (!cc.isValid(o)) {
                            return [2 /*return*/, null];
                        }
                        if (!i) {
                            return [2 /*return*/, null];
                        }
                        i.name = ClickCoverLockTipBehavior.TIP_NODE_NAME;
                        (c = i.getChildByName("content")) && I18NStrings_1.default.setText(c, "The tile is blocked!", "MahjongTiles_InGame_Tips_2");
                        o.addChild(i);
                        this.resetTipState(i);
                        return [2 /*return*/, i];
                }
            });
        });
    };
    ClickCoverLockTipBehavior.prototype.resetTipState = function (t) {
        t.opacity = 255;
        t.scale = 1;
        t.active = true;
    };
    ClickCoverLockTipBehavior.prototype.setupTipAndPlayAnimation = function (t, o) {
        if (cc.isValid(o) && cc.isValid(t)) {
            var r = o.parent;
            if (r && cc.isValid(r)) {
                var i = t.convertToWorldSpaceAR(cc.v2(0, 0)), c = cc.view.getDesignResolutionSize().width;
                if (i.x + ClickCoverLockTipBehavior.TIP_WIDTH / 2 > c) {
                    i.x = c - ClickCoverLockTipBehavior.TIP_WIDTH / 2 - 25;
                }
                else {
                    i.x - ClickCoverLockTipBehavior.TIP_WIDTH / 2 < 0 && (i.x = ClickCoverLockTipBehavior.TIP_WIDTH / 2 + 25);
                }
                var n = r.convertToNodeSpaceAR(i);
                o.position = cc.v3(n.x, n.y + ClickCoverLockTipBehavior.TIP_OFFSET_Y, 0);
                this.playTipAnimation(o);
            }
        }
    };
    ClickCoverLockTipBehavior.prototype.playTipAnimation = function (t) {
        cc.tween(t).parallel(cc.tween().by(ClickCoverLockTipBehavior.TIP_ANIMATION_DURATION, {
            position: cc.v3(0, ClickCoverLockTipBehavior.TIP_FLOAT_DISTANCE, 0)
        }), cc.tween().to(ClickCoverLockTipBehavior.TIP_ANIMATION_DURATION, {
            opacity: 0
        })).call(function () {
            cc.isValid(t) && (t.active = false);
        }).start();
    };
    ClickCoverLockTipBehavior.TIP_NODE_NAME = "CoverLockTip";
    ClickCoverLockTipBehavior.TIP_OFFSET_Y = 50;
    ClickCoverLockTipBehavior.TIP_FLOAT_DISTANCE = 100;
    ClickCoverLockTipBehavior.TIP_ANIMATION_DURATION = 0.85;
    ClickCoverLockTipBehavior.TIP_WIDTH = 500;
    return ClickCoverLockTipBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ClickCoverLockTipBehavior = ClickCoverLockTipBehavior;

cc._RF.pop();