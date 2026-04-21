
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_coverTip/Scripts/ClickCoverLockTipBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NvdmVyVGlwL1NjcmlwdHMvQ2xpY2tDb3ZlckxvY2tUaXBCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1GQUFrRjtBQUNsRiw2RUFBNEU7QUFDNUUsNkRBQStEO0FBQy9ELCtEQUEwRDtBQUMxRCwyRUFBc0U7QUFDdEU7SUFBK0MsNkNBQWlCO0lBQWhFOztJQTZFQSxDQUFDO0lBdkVDLCtDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUM7UUFDTixPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUM3RyxDQUFDO0lBQ0sseUNBQUssR0FBWCxVQUFZLENBQUM7Ozs7Ozt3QkFFWCxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7NkJBQy9CLENBQUEsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxFQUFuQyx3QkFBbUM7d0JBQzNCLHFCQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBQTs7d0JBQXJDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUEyQixDQUFDOzRCQUFFLHNCQUFPO3dCQUMvQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxzQkFBTzs0QkFFUCxzQkFBTzs7OztLQUVWO0lBQ0ssa0RBQWMsR0FBcEI7Ozs7Ozt3QkFFRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8s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bSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvR2FtZUJlaGF2aW9yc0Jhc2UnO1xuaW1wb3J0IHsgUHJlZmFiUGF0aCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29uc3RhbnQvZW51bVJlcyc7XG5pbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5leHBvcnQgY2xhc3MgQ2xpY2tDb3ZlckxvY2tUaXBCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhdGljIFRJUF9OT0RFX05BTUUgPSBcIkNvdmVyTG9ja1RpcFwiO1xuICBzdGF0aWMgVElQX09GRlNFVF9ZID0gNTA7XG4gIHN0YXRpYyBUSVBfRkxPQVRfRElTVEFOQ0UgPSAxMDA7XG4gIHN0YXRpYyBUSVBfQU5JTUFUSU9OX0RVUkFUSU9OID0gMC44NTtcbiAgc3RhdGljIFRJUF9XSURUSCA9IDUwMDtcbiAgZ2V0VGlsZU5vZGUodCkge1xuICAgIHZhciBlO1xuICAgIHJldHVybiAobnVsbCA9PT0gKGUgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVNYXAoKS5nZXQodCkpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY2FyZE5vZGUpIHx8IG51bGw7XG4gIH1cbiAgYXN5bmMgc3RhcnQodCkge1xuICAgIHZhciBlLCBvO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgaWYgKGUgPSB0aGlzLmdldFRpbGVOb2RlKHQuZGF0YS50aWxlSWQpKSB7XG4gICAgICBpZiAoIShvID0gYXdhaXQgdGhpcy5nZXRPckNyZWF0ZVRpcCgpKSkgcmV0dXJuO1xuICAgICAgdGhpcy5zZXR1cFRpcEFuZFBsYXlBbmltYXRpb24oZSwgbyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgYXN5bmMgZ2V0T3JDcmVhdGVUaXAoKSB7XG4gICAgdmFyIHQsIG8sIHIsIGksIGM7XG4gICAgdCA9IHRoaXMuY29udGV4dC5nYW1lVmlldztcbiAgICBpZiAoIShvID0gdC5ub2RlVG9wRWZmZWN0Um9vdCkgfHwgIWNjLmlzVmFsaWQobykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByID0gby5nZXRDaGlsZEJ5TmFtZShDbGlja0NvdmVyTG9ja1RpcEJlaGF2aW9yLlRJUF9OT0RFX05BTUUpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHIpKSB7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQocik7XG4gICAgICB0aGlzLnJlc2V0VGlwU3RhdGUocik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG4gICAgaSA9IGF3YWl0IEJhc2VVSS5jcmVhdGVVSShQcmVmYWJQYXRoLkNvdmVyTG9ja1RpcCwgXCJtYWluUmVzXCIpO1xuICAgIGlmICghY2MuaXNWYWxpZChvKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICghaSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGkubmFtZSA9IENsaWNrQ292ZXJMb2NrVGlwQmVoYXZpb3IuVElQX05PREVfTkFNRTtcbiAgICAoYyA9IGkuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpKSAmJiBJMThOU3RyaW5ncy5zZXRUZXh0KGMsIFwiVGhlIHRpbGUgaXMgYmxvY2tlZCFcIiwgXCJNYWhqb25nVGlsZXNfSW5HYW1lX1RpcHNfMlwiKTtcbiAgICBvLmFkZENoaWxkKGkpO1xuICAgIHRoaXMucmVzZXRUaXBTdGF0ZShpKTtcbiAgICByZXR1cm4gaTtcbiAgfVxuICByZXNldFRpcFN0YXRlKHQpIHtcbiAgICB0Lm9wYWNpdHkgPSAyNTU7XG4gICAgdC5zY2FsZSA9IDE7XG4gICAgdC5hY3RpdmUgPSB0cnVlO1xuICB9XG4gIHNldHVwVGlwQW5kUGxheUFuaW1hdGlvbih0LCBvKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQobykgJiYgY2MuaXNWYWxpZCh0KSkge1xuICAgICAgdmFyIHIgPSBvLnBhcmVudDtcbiAgICAgIGlmIChyICYmIGNjLmlzVmFsaWQocikpIHtcbiAgICAgICAgdmFyIGkgPSB0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSksXG4gICAgICAgICAgYyA9IGNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKS53aWR0aDtcbiAgICAgICAgaWYgKGkueCArIENsaWNrQ292ZXJMb2NrVGlwQmVoYXZpb3IuVElQX1dJRFRIIC8gMiA+IGMpIHtcbiAgICAgICAgICBpLnggPSBjIC0gQ2xpY2tDb3ZlckxvY2tUaXBCZWhhdmlvci5USVBfV0lEVEggLyAyIC0gMjU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaS54IC0gQ2xpY2tDb3ZlckxvY2tUaXBCZWhhdmlvci5USVBfV0lEVEggLyAyIDwgMCAmJiAoaS54ID0gQ2xpY2tDb3ZlckxvY2tUaXBCZWhhdmlvci5USVBfV0lEVEggLyAyICsgMjUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuID0gci5jb252ZXJ0VG9Ob2RlU3BhY2VBUihpKTtcbiAgICAgICAgby5wb3NpdGlvbiA9IGNjLnYzKG4ueCwgbi55ICsgQ2xpY2tDb3ZlckxvY2tUaXBCZWhhdmlvci5USVBfT0ZGU0VUX1ksIDApO1xuICAgICAgICB0aGlzLnBsYXlUaXBBbmltYXRpb24obyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBsYXlUaXBBbmltYXRpb24odCkge1xuICAgIGNjLnR3ZWVuKHQpLnBhcmFsbGVsKGNjLnR3ZWVuKCkuYnkoQ2xpY2tDb3ZlckxvY2tUaXBCZWhhdmlvci5USVBfQU5JTUFUSU9OX0RVUkFUSU9OLCB7XG4gICAgICBwb3NpdGlvbjogY2MudjMoMCwgQ2xpY2tDb3ZlckxvY2tUaXBCZWhhdmlvci5USVBfRkxPQVRfRElTVEFOQ0UsIDApXG4gICAgfSksIGNjLnR3ZWVuKCkudG8oQ2xpY2tDb3ZlckxvY2tUaXBCZWhhdmlvci5USVBfQU5JTUFUSU9OX0RVUkFUSU9OLCB7XG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSkpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgY2MuaXNWYWxpZCh0KSAmJiAodC5hY3RpdmUgPSBmYWxzZSk7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxufSJdfQ==