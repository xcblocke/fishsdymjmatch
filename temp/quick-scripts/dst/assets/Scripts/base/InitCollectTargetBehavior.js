
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/InitCollectTargetBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvSW5pdENvbGxlY3RUYXJnZXRCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRTtBQUNwRSxtRUFBK0Q7QUFDL0QseURBQXdEO0FBQ3hELGdFQUEyRDtBQUMzRCw2RUFBd0U7QUFDeEU7SUFBK0MsNkNBQWlCO0lBQWhFO1FBQUEscUVBMkZDO1FBMUZDLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsa0JBQVksR0FBRyxFQUFFLENBQUM7O0lBeUZwQixDQUFDO0lBeEZDLHlDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQzlCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkMsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLHFCQUFxQixDQUFDO29CQUN0QixDQUFDLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0RCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDUCxDQUFDLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLENB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LENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLDBCQUFnQixDQUFDLENBQUM7b0JBQ3pDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztvQkFDeEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7d0JBQzNDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO3dCQUNoQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNSO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7SUEvREQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO3VFQXNDdkM7SUEyQkgsZ0NBQUM7Q0EzRkQsQUEyRkMsQ0EzRjhDLHFDQUFpQixHQTJGL0Q7QUEzRlksOERBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmltcG9ydCBDb2xsZWN0VGFyZ2V0SXRlbSBmcm9tICcuLi9pdGVtcy9Db2xsZWN0VGFyZ2V0SXRlbSc7XG5pbXBvcnQgVHJhdmVsQ29sbGVjdFRpcCBmcm9tICcuLi9nYW1lUGxheS90cmF2ZWwvdmlldy9UcmF2ZWxDb2xsZWN0VGlwJztcbmV4cG9ydCBjbGFzcyBJbml0Q29sbGVjdFRhcmdldEJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBfdGltZW91dCA9IDgwMDA7XG4gIGNvbGxlY3RJdGVtcyA9IFtdO1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbyA9IGUuZGF0YS5jb2xsZWN0RGV0YWlscztcbiAgICAgIGlmICghbyB8fCAwID09PSBvLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuc2V0U3dhbGxvd0V2ZW50Tm9kZUFjdGl2ZSh0cnVlKTtcbiAgICAgIHRoaXMuY3JlYXRlQ29sbGVjdEl0ZW1zKG8pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB0LmNyZWF0ZVNob3dDb2xsZWN0VmlldyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdC5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgICAgICB0LmNvbnRleHQuZ2FtZVZpZXcuc2V0U3dhbGxvd0V2ZW50Tm9kZUFjdGl2ZShmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICB0LmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgICB0LmNvbnRleHQuZ2FtZVZpZXcuc2V0U3dhbGxvd0V2ZW50Tm9kZUFjdGl2ZShmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgdGhpcy5jb250ZXh0LmdhbWVWaWV3LnNldFN3YWxsb3dFdmVudE5vZGVBY3RpdmUoZmFsc2UpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkluaXRDb2xUYWdCaHZfY3J0SXRlbXNcIilcbiAgYXN5bmMgY3JlYXRlQ29sbGVjdEl0ZW1zKGUsIHQgPSAyMCwgbyA9IDE1NywgbiA9IDAuNTYsIGkgPSAwKSB7XG4gICAgdmFyIHIsIGEsIHMsIHUsIGYsIGQsIGgsIHksIG0sIHYsIGcsIF8sIFQ7XG4gICAgaWYgKCEociA9IHRoaXMuY29udGV4dC5nYW1lVmlldykgfHwgIXIubm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIShhID0gci5ub2RlQ29sbGVjdCkgfHwgIWNjLmlzVmFsaWQoYSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyQ29sbGVjdFRhcmdldFBvc2l0aW9ucygpO1xuICAgIHRoaXMuY29udGV4dC5jbGVhckNvbGxlY3RUYXJnZXRJdGVtcygpO1xuICAgIHMgPSBvICogbjtcbiAgICB1ID0gZS5sZW5ndGggKiBzICsgKGUubGVuZ3RoIC0gMSkgKiB0O1xuICAgIGYgPSAtdSAvIDIgKyBzIC8gMjtcbiAgICBkID0gYXdhaXQgUHJvbWlzZS5hbGwoZS5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIENvbGxlY3RUYXJnZXRJdGVtLmNyZWF0ZVVJKCk7XG4gICAgfSkpO1xuICAgIGZvciAoaCA9IDA7IGggPCBkLmxlbmd0aDsgaCsrKSB7XG4gICAgICB5ID0gZFtoXTtcbiAgICAgIG0gPSBlW2hdO1xuICAgICAgaWYgKHkgJiYgY2MuaXNWYWxpZCh5KSkge1xuICAgICAgICBhLmFkZENoaWxkKHkpO1xuICAgICAgICB2ID0gZiArIGggKiAocyArIHQpO1xuICAgICAgICB5LnNldFBvc2l0aW9uKHYsIGkpO1xuICAgICAgICB5Ll9kZXNpZ25Qb3MgPSBjYy52Myh2LCBpLCAwKTtcbiAgICAgICAgaWYgKGcgPSB5LmdldENvbXBvbmVudChDb2xsZWN0VGFyZ2V0SXRlbSkpIHtcbiAgICAgICAgICBnLmRlbGVnYXRlID0gci5kZWxlZ2F0ZTtcbiAgICAgICAgICBnLmluaXRVSShtKTtcbiAgICAgICAgICBnLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jb2xsZWN0SXRlbXMucHVzaChnKTtcbiAgICAgICAgICBfID0gbS50eXBlID09PSBFVGlsZVR5cGUuUm9sbENhcmQgPyBcIlwiICsgbS50eXBlIDogbS50eXBlICsgXCJfXCIgKyBtLmNhcmRJZDtcbiAgICAgICAgICBUID0geS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuICAgICAgICAgIHRoaXMuY29udGV4dC5zZXRDb2xsZWN0VGFyZ2V0UG9zaXRpb24oXywgY2MudjMoVC54LCBULnksIDApKTtcbiAgICAgICAgICB0aGlzLmNvbnRleHQucmVnaXN0ZXJDb2xsZWN0VGFyZ2V0SXRlbShfLCBnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgY3JlYXRlU2hvd0NvbGxlY3RWaWV3KGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdHJ5IHtcbiAgICAgIFRyYXZlbENvbGxlY3RUaXAuY3JlYXRlVUkoKS50aGVuKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIGlmIChvICYmIGNjLmlzVmFsaWQobykgJiYgY2MuaXNWYWxpZCh0LmNvbnRleHQuZ2FtZVZpZXcpKSB7XG4gICAgICAgICAgdmFyIG4gPSB0LmNvbnRleHQuZ2FtZVZpZXcsXG4gICAgICAgICAgICBpID0gbi5ub2RlQ29sbGVjdFNob3c7XG4gICAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKGkpKSB7XG4gICAgICAgICAgICBudWxsID09IGUgfHwgZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpLmFkZENoaWxkKG8pO1xuICAgICAgICAgIG8uc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICAgdmFyIHIgPSBvLmdldENvbXBvbmVudChUcmF2ZWxDb2xsZWN0VGlwKTtcbiAgICAgICAgICByLmRlbGVnYXRlID0gbi5kZWxlZ2F0ZTtcbiAgICAgICAgICByLnBsYXlTaG93QW5pbSh0LmNvbGxlY3RJdGVtcy5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLm5vZGU7XG4gICAgICAgICAgfSksIHQuY29sbGVjdEl0ZW1zLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUuZ2V0RGF0YSgpLnR5cGU7XG4gICAgICAgICAgfSksIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBudWxsID09IGUgfHwgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==