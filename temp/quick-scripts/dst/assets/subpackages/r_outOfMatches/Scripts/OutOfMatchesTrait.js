
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_outOfMatches/Scripts/OutOfMatchesTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab95c+hQy5FGZ9Ohk6eNcs5', 'OutOfMatchesTrait');
// subpackages/r_outOfMatches/Scripts/OutOfMatchesTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var OutOfMatchesUI_1 = require("./OutOfMatchesUI");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var OutOfMatchesTrait = /** @class */ (function (_super) {
    __extends(OutOfMatchesTrait, _super);
    function OutOfMatchesTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animationMode = 1;
        _this.outOfMatchesUI = null;
        _this._minShuffleCount = 0;
        return _this;
    }
    OutOfMatchesTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._traitData && this._traitData.animationMode && (this.animationMode = this._traitData.animationMode);
        this._traitData && void 0 !== this._traitData.minShuffleCount && (this._minShuffleCount = this._traitData.minShuffleCount);
    };
    OutOfMatchesTrait.prototype.onFailBhv_start = function (t, e) {
        var o = t.ins;
        if (o && o.context) {
            var n = o.context, r = n.gameView;
            if (cc.isValid(r) && cc.isValid(r.nodeTopEffectRoot)) {
                if (this._minShuffleCount > 0) {
                    if (UserModel_1.default.getInstance().getGameDataByGameType(n.gameType).getShuffleNums() < this._minShuffleCount) {
                        e();
                        return;
                    }
                }
                this.playDeadAnimation(o, r.nodeTopEffectRoot);
                e();
            }
            else
                e();
        }
        else
            e();
    };
    OutOfMatchesTrait.prototype.playDeadAnimation = function (t, e) {
        var o = this;
        if (1 === this.animationMode)
            Promise.all([this.preloadOutOfMatchesUI(e)]).then(function () {
                o.grayoutAllTiles(t);
                return o.playAllAnimations(t, false);
            }).then(function () {
                o.resetTiles(t);
                o.emitAnimationCompleteEvent();
                o.closeOutOfMatchesUI();
            }).catch(function () {
                o.closeOutOfMatchesUI();
                o.emitAnimationCompleteEvent();
            });
        else if (2 === this.animationMode) {
            this.grayoutAllTiles(t);
            Promise.all([this.preloadOutOfMatchesUI(e)]).then(function () {
                return o.playAllAnimations(t, true);
            }).then(function () {
                o.resetTiles(t);
                o.emitAnimationCompleteEvent();
                o.closeOutOfMatchesUI();
            }).catch(function () {
                o.closeOutOfMatchesUI();
                o.emitAnimationCompleteEvent();
            });
        }
    };
    OutOfMatchesTrait.prototype.dropSingleTile = function (t) {
        if (t && t.cardNode && cc.isValid(t.cardNode)) {
            var e = t.cardNode, o = t.shadowCardNode, n = Math.random() > 0.5 ? 180 : -180, r = cc.view.getVisibleSize().height;
            cc.tween(e).parallel(cc.tween().by(0.66, {
                y: -r
            }), cc.tween().by(0.66, {
                angle: n
            })).start();
            o && cc.isValid(o) && cc.tween(o).parallel(cc.tween().by(0.66, {
                y: -r
            }), cc.tween().by(0.66, {
                angle: n
            })).start();
        }
    };
    OutOfMatchesTrait.prototype.grayoutAllTiles = function (t) {
        try {
            if (!t || !t.context)
                return;
            var e = t.context.getTileNodeMap();
            if (!e)
                return;
            e.forEach(function (t) {
                if (t && t.cardNode && cc.isValid(t.cardNode)) {
                    var e = t.imgCardBg, o = t.imgCard;
                    cc.tween(e).to(0.5, {
                        color: cc.color(107, 107, 107)
                    }, {
                        easing: "sineInOut"
                    }).start();
                    cc.tween(o).to(0.5, {
                        color: cc.color(107, 107, 107)
                    }, {
                        easing: "sineInOut"
                    }).start();
                }
            });
        }
        catch (t) { }
    };
    OutOfMatchesTrait.prototype.delay = function (t) {
        return new Promise(function (e) {
            setTimeout(function () {
                e();
            }, t);
        });
    };
    OutOfMatchesTrait.prototype.preloadOutOfMatchesUI = function (t) {
        var e = this;
        return new Promise(function (o, n) {
            if (e.outOfMatchesUI && cc.isValid(e.outOfMatchesUI.node)) {
                o();
            }
            else {
                OutOfMatchesUI_1.default.createUI().then(function (r) {
                    if (r) {
                        var i = r.getComponent(OutOfMatchesUI_1.default);
                        if (i) {
                            if (cc.isValid(t)) {
                                t.addChild(r);
                                r.opacity = 0;
                                e.outOfMatchesUI = i;
                                o();
                            }
                            else {
                                r.destroy();
                                n(new Error("nodeTopEffectRoot 无效"));
                            }
                        }
                        else {
                            r.destroy();
                            n(new Error("获取UI组件失败"));
                        }
                    }
                    else
                        n(new Error("创建UI失败"));
                }).catch(function (t) {
                    n(t);
                });
            }
        });
    };
    OutOfMatchesTrait.prototype.playAllAnimations = function (t, e) {
        if (!t || !t.context)
            return Promise.resolve();
        if (!this.outOfMatchesUI || !cc.isValid(this.outOfMatchesUI.node))
            return Promise.resolve();
        var o = [];
        o.push(this.playUIAnimation());
        e && o.push(this.dropAllTilesAsync(t));
        return Promise.all(o).then(function () { });
    };
    OutOfMatchesTrait.prototype.playUIAnimation = function () {
        var t = this;
        return new Promise(function (e) {
            t.outOfMatchesUI.node.opacity = 255;
            t.outOfMatchesUI.playAnimation(function () {
                e();
            });
        });
    };
    OutOfMatchesTrait.prototype.dropAllTilesAsync = function (t) {
        var e = this;
        return new Promise(function (o) {
            try {
                if (!t || !t.context) {
                    o();
                    return;
                }
                var n = t.context.getTileNodeMap();
                if (!n) {
                    o();
                    return;
                }
                var r = [];
                n.forEach(function (t) {
                    t && t.tileObject && cc.isValid(t.cardNode) && r.push({
                        tileNode: t,
                        row: t.tileObject.gridPosY,
                        layer: t.tileObject.layer
                    });
                });
                if (0 === r.length) {
                    o();
                    return;
                }
                var i = Math.max.apply(Math, __spreadArrays(r.map(function (t) {
                    return t.row;
                }))), a = Math.max.apply(Math, __spreadArrays(r.map(function (t) {
                    return t.layer;
                }))), s = 1000 * (0.03 * (i - Math.min.apply(Math, __spreadArrays(r.map(function (t) {
                    return t.row;
                })))) + 0.1 * a + 0.66);
                r.forEach(function (t) {
                    var o = t.tileNode, n = t.row, r = t.layer;
                    setTimeout(function () {
                        e.dropSingleTile(o);
                    }, 1000 * (0.03 * (i - n) + 0.1 * r));
                });
                setTimeout(function () {
                    o();
                }, s);
            }
            catch (t) {
                o();
            }
        });
    };
    OutOfMatchesTrait.prototype.closeOutOfMatchesUI = function () {
        if (this.outOfMatchesUI && cc.isValid(this.outOfMatchesUI.node)) {
            this.outOfMatchesUI.node.destroy();
            this.outOfMatchesUI = null;
        }
    };
    OutOfMatchesTrait.prototype.resetTiles = function (t) {
        if (t && t.context) {
            var e = t.context.getTileNodeMap();
            e && e.forEach(function (t) {
                if (t && t.cardNode && cc.isValid(t.cardNode)) {
                    cc.Tween.stopAllByTarget(t.cardNode);
                    cc.Tween.stopAllByTarget(t.shadowCardNode);
                    cc.Tween.stopAllByTarget(t.imgCardBg);
                    cc.Tween.stopAllByTarget(t.imgCard);
                    t.cardNode.angle = 0;
                    t.shadowCardNode.angle = 0;
                    t.imgCardBg.color = cc.color(255, 255, 255);
                    t.imgCard.color = cc.color(255, 255, 255);
                }
            });
        }
    };
    OutOfMatchesTrait.prototype.emitAnimationCompleteEvent = function () {
        mj.EventManager.emit("OutOfMatches_AnimationComplete");
    };
    OutOfMatchesTrait.traitKey = "OutOfMatches";
    OutOfMatchesTrait = __decorate([
        mj.trait,
        mj.class("OutOfMatchesTrait")
    ], OutOfMatchesTrait);
    return OutOfMatchesTrait;
}(Trait_1.default));
exports.default = OutOfMatchesTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX291dE9mTWF0Y2hlcy9TY3JpcHRzL091dE9mTWF0Y2hlc1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsbURBQThDO0FBQzlDLHNFQUFpRTtBQUdqRTtJQUErQyxxQ0FBSztJQUFwRDtRQUFBLHFFQWdPQztRQS9OQyxtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixzQkFBZ0IsR0FBRyxDQUFDLENBQUM7O0lBNk52QixDQUFDO0lBM05DLGtDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekcsSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzdILENBQUM7SUFDRCwyQ0FBZSxHQUFmLFVBQWdCLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQ2YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDakIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEVB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LENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUMzQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3RDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDcEMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDNUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUMzQztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0Qsc0RBQTBCLEdBQTFCO1FBQ0UsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBM05NLDBCQUFRLEdBQUcsY0FBYyxDQUFDO0lBSmQsaUJBQWlCO1FBRnJDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztPQUNULGlCQUFpQixDQWdPckM7SUFBRCx3QkFBQztDQWhPRCxBQWdPQyxDQWhPOEMsZUFBSyxHQWdPbkQ7a0JBaE9vQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IE91dE9mTWF0Y2hlc1VJIGZyb20gJy4vT3V0T2ZNYXRjaGVzVUknO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiT3V0T2ZNYXRjaGVzVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE91dE9mTWF0Y2hlc1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBhbmltYXRpb25Nb2RlID0gMTtcbiAgb3V0T2ZNYXRjaGVzVUkgPSBudWxsO1xuICBfbWluU2h1ZmZsZUNvdW50ID0gMDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJPdXRPZk1hdGNoZXNcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3RyYWl0RGF0YSAmJiB0aGlzLl90cmFpdERhdGEuYW5pbWF0aW9uTW9kZSAmJiAodGhpcy5hbmltYXRpb25Nb2RlID0gdGhpcy5fdHJhaXREYXRhLmFuaW1hdGlvbk1vZGUpO1xuICAgIHRoaXMuX3RyYWl0RGF0YSAmJiB2b2lkIDAgIT09IHRoaXMuX3RyYWl0RGF0YS5taW5TaHVmZmxlQ291bnQgJiYgKHRoaXMuX21pblNodWZmbGVDb3VudCA9IHRoaXMuX3RyYWl0RGF0YS5taW5TaHVmZmxlQ291bnQpO1xuICB9XG4gIG9uRmFpbEJodl9zdGFydCh0LCBlKSB7XG4gICAgdmFyIG8gPSB0LmlucztcbiAgICBpZiAobyAmJiBvLmNvbnRleHQpIHtcbiAgICAgIHZhciBuID0gby5jb250ZXh0LFxuICAgICAgICByID0gbi5nYW1lVmlldztcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHIpICYmIGNjLmlzVmFsaWQoci5ub2RlVG9wRWZmZWN0Um9vdCkpIHtcbiAgICAgICAgaWYgKHRoaXMuX21pblNodWZmbGVDb3VudCA+IDApIHtcbiAgICAgICAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKG4uZ2FtZVR5cGUpLmdldFNodWZmbGVOdW1zKCkgPCB0aGlzLl9taW5TaHVmZmxlQ291bnQpIHtcbiAgICAgICAgICAgIGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5RGVhZEFuaW1hdGlvbihvLCByLm5vZGVUb3BFZmZlY3RSb290KTtcbiAgICAgICAgZSgpO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIHBsYXlEZWFkQW5pbWF0aW9uKHQsIGUpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgaWYgKDEgPT09IHRoaXMuYW5pbWF0aW9uTW9kZSkgUHJvbWlzZS5hbGwoW3RoaXMucHJlbG9hZE91dE9mTWF0Y2hlc1VJKGUpXSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBvLmdyYXlvdXRBbGxUaWxlcyh0KTtcbiAgICAgIHJldHVybiBvLnBsYXlBbGxBbmltYXRpb25zKHQsIGZhbHNlKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIG8ucmVzZXRUaWxlcyh0KTtcbiAgICAgIG8uZW1pdEFuaW1hdGlvbkNvbXBsZXRlRXZlbnQoKTtcbiAgICAgIG8uY2xvc2VPdXRPZk1hdGNoZXNVSSgpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIG8uY2xvc2VPdXRPZk1hdGNoZXNVSSgpO1xuICAgICAgby5lbWl0QW5pbWF0aW9uQ29tcGxldGVFdmVudCgpO1xuICAgIH0pO2Vsc2UgaWYgKDIgPT09IHRoaXMuYW5pbWF0aW9uTW9kZSkge1xuICAgICAgdGhpcy5ncmF5b3V0QWxsVGlsZXModCk7XG4gICAgICBQcm9taXNlLmFsbChbdGhpcy5wcmVsb2FkT3V0T2ZNYXRjaGVzVUkoZSldKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG8ucGxheUFsbEFuaW1hdGlvbnModCwgdHJ1ZSk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgby5yZXNldFRpbGVzKHQpO1xuICAgICAgICBvLmVtaXRBbmltYXRpb25Db21wbGV0ZUV2ZW50KCk7XG4gICAgICAgIG8uY2xvc2VPdXRPZk1hdGNoZXNVSSgpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICBvLmNsb3NlT3V0T2ZNYXRjaGVzVUkoKTtcbiAgICAgICAgby5lbWl0QW5pbWF0aW9uQ29tcGxldGVFdmVudCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGRyb3BTaW5nbGVUaWxlKHQpIHtcbiAgICBpZiAodCAmJiB0LmNhcmROb2RlICYmIGNjLmlzVmFsaWQodC5jYXJkTm9kZSkpIHtcbiAgICAgIHZhciBlID0gdC5jYXJkTm9kZSxcbiAgICAgICAgbyA9IHQuc2hhZG93Q2FyZE5vZGUsXG4gICAgICAgIG4gPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gMTgwIDogLTE4MCxcbiAgICAgICAgciA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHQ7XG4gICAgICBjYy50d2VlbihlKS5wYXJhbGxlbChjYy50d2VlbigpLmJ5KDAuNjYsIHtcbiAgICAgICAgeTogLXJcbiAgICAgIH0pLCBjYy50d2VlbigpLmJ5KDAuNjYsIHtcbiAgICAgICAgYW5nbGU6IG5cbiAgICAgIH0pKS5zdGFydCgpO1xuICAgICAgbyAmJiBjYy5pc1ZhbGlkKG8pICYmIGNjLnR3ZWVuKG8pLnBhcmFsbGVsKGNjLnR3ZWVuKCkuYnkoMC42Niwge1xuICAgICAgICB5OiAtclxuICAgICAgfSksIGNjLnR3ZWVuKCkuYnkoMC42Niwge1xuICAgICAgICBhbmdsZTogblxuICAgICAgfSkpLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIGdyYXlvdXRBbGxUaWxlcyh0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghdCB8fCAhdC5jb250ZXh0KSByZXR1cm47XG4gICAgICB2YXIgZSA9IHQuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpO1xuICAgICAgaWYgKCFlKSByZXR1cm47XG4gICAgICBlLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHQgJiYgdC5jYXJkTm9kZSAmJiBjYy5pc1ZhbGlkKHQuY2FyZE5vZGUpKSB7XG4gICAgICAgICAgdmFyIGUgPSB0LmltZ0NhcmRCZyxcbiAgICAgICAgICAgIG8gPSB0LmltZ0NhcmQ7XG4gICAgICAgICAgY2MudHdlZW4oZSkudG8oMC41LCB7XG4gICAgICAgICAgICBjb2xvcjogY2MuY29sb3IoMTA3LCAxMDcsIDEwNylcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBlYXNpbmc6IFwic2luZUluT3V0XCJcbiAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgIGNjLnR3ZWVuKG8pLnRvKDAuNSwge1xuICAgICAgICAgICAgY29sb3I6IGNjLmNvbG9yKDEwNywgMTA3LCAxMDcpXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZWFzaW5nOiBcInNpbmVJbk91dFwiXG4gICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAodCkge31cbiAgfVxuICBkZWxheSh0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChlKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZSgpO1xuICAgICAgfSwgdCk7XG4gICAgfSk7XG4gIH1cbiAgcHJlbG9hZE91dE9mTWF0Y2hlc1VJKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgICBpZiAoZS5vdXRPZk1hdGNoZXNVSSAmJiBjYy5pc1ZhbGlkKGUub3V0T2ZNYXRjaGVzVUkubm9kZSkpIHtcbiAgICAgICAgbygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT3V0T2ZNYXRjaGVzVUkuY3JlYXRlVUkoKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIHZhciBpID0gci5nZXRDb21wb25lbnQoT3V0T2ZNYXRjaGVzVUkpO1xuICAgICAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodCkpIHtcbiAgICAgICAgICAgICAgICB0LmFkZENoaWxkKHIpO1xuICAgICAgICAgICAgICAgIHIub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgZS5vdXRPZk1hdGNoZXNVSSA9IGk7XG4gICAgICAgICAgICAgICAgbygpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIG4obmV3IEVycm9yKFwibm9kZVRvcEVmZmVjdFJvb3Qg5peg5pWIXCIpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgIG4obmV3IEVycm9yKFwi6I635Y+WVUnnu4Tku7blpLHotKVcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBuKG5ldyBFcnJvcihcIuWIm+W7ulVJ5aSx6LSlXCIpKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBuKHQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBwbGF5QWxsQW5pbWF0aW9ucyh0LCBlKSB7XG4gICAgaWYgKCF0IHx8ICF0LmNvbnRleHQpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBpZiAoIXRoaXMub3V0T2ZNYXRjaGVzVUkgfHwgIWNjLmlzVmFsaWQodGhpcy5vdXRPZk1hdGNoZXNVSS5ub2RlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHZhciBvID0gW107XG4gICAgby5wdXNoKHRoaXMucGxheVVJQW5pbWF0aW9uKCkpO1xuICAgIGUgJiYgby5wdXNoKHRoaXMuZHJvcEFsbFRpbGVzQXN5bmModCkpO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChvKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcbiAgfVxuICBwbGF5VUlBbmltYXRpb24oKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZSkge1xuICAgICAgdC5vdXRPZk1hdGNoZXNVSS5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICB0Lm91dE9mTWF0Y2hlc1VJLnBsYXlBbmltYXRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICBlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBkcm9wQWxsVGlsZXNBc3luYyh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAobykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCF0IHx8ICF0LmNvbnRleHQpIHtcbiAgICAgICAgICBvKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuID0gdC5jb250ZXh0LmdldFRpbGVOb2RlTWFwKCk7XG4gICAgICAgIGlmICghbikge1xuICAgICAgICAgIG8oKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSBbXTtcbiAgICAgICAgbi5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgdCAmJiB0LnRpbGVPYmplY3QgJiYgY2MuaXNWYWxpZCh0LmNhcmROb2RlKSAmJiByLnB1c2goe1xuICAgICAgICAgICAgdGlsZU5vZGU6IHQsXG4gICAgICAgICAgICByb3c6IHQudGlsZU9iamVjdC5ncmlkUG9zWSxcbiAgICAgICAgICAgIGxheWVyOiB0LnRpbGVPYmplY3QubGF5ZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICgwID09PSByLmxlbmd0aCkge1xuICAgICAgICAgIG8oKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSBNYXRoLm1heC5hcHBseShNYXRoLCBbLi4uci5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0LnJvdztcbiAgICAgICAgICB9KV0pLFxuICAgICAgICAgIGEgPSBNYXRoLm1heC5hcHBseShNYXRoLCBbLi4uci5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0LmxheWVyO1xuICAgICAgICAgIH0pXSksXG4gICAgICAgICAgcyA9IDEwMDAgKiAoMC4wMyAqIChpIC0gTWF0aC5taW4uYXBwbHkoTWF0aCwgWy4uLnIubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdC5yb3c7XG4gICAgICAgICAgfSldKSkgKyAwLjEgKiBhICsgMC42Nik7XG4gICAgICAgIHIuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHZhciBvID0gdC50aWxlTm9kZSxcbiAgICAgICAgICAgIG4gPSB0LnJvdyxcbiAgICAgICAgICAgIHIgPSB0LmxheWVyO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZS5kcm9wU2luZ2xlVGlsZShvKTtcbiAgICAgICAgICB9LCAxMDAwICogKDAuMDMgKiAoaSAtIG4pICsgMC4xICogcikpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbygpO1xuICAgICAgICB9LCBzKTtcbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgbygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNsb3NlT3V0T2ZNYXRjaGVzVUkoKSB7XG4gICAgaWYgKHRoaXMub3V0T2ZNYXRjaGVzVUkgJiYgY2MuaXNWYWxpZCh0aGlzLm91dE9mTWF0Y2hlc1VJLm5vZGUpKSB7XG4gICAgICB0aGlzLm91dE9mTWF0Y2hlc1VJLm5vZGUuZGVzdHJveSgpO1xuICAgICAgdGhpcy5vdXRPZk1hdGNoZXNVSSA9IG51bGw7XG4gICAgfVxuICB9XG4gIHJlc2V0VGlsZXModCkge1xuICAgIGlmICh0ICYmIHQuY29udGV4dCkge1xuICAgICAgdmFyIGUgPSB0LmNvbnRleHQuZ2V0VGlsZU5vZGVNYXAoKTtcbiAgICAgIGUgJiYgZS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0ICYmIHQuY2FyZE5vZGUgJiYgY2MuaXNWYWxpZCh0LmNhcmROb2RlKSkge1xuICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0LmNhcmROb2RlKTtcbiAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodC5zaGFkb3dDYXJkTm9kZSk7XG4gICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHQuaW1nQ2FyZEJnKTtcbiAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodC5pbWdDYXJkKTtcbiAgICAgICAgICB0LmNhcmROb2RlLmFuZ2xlID0gMDtcbiAgICAgICAgICB0LnNoYWRvd0NhcmROb2RlLmFuZ2xlID0gMDtcbiAgICAgICAgICB0LmltZ0NhcmRCZy5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAgIHQuaW1nQ2FyZC5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZW1pdEFuaW1hdGlvbkNvbXBsZXRlRXZlbnQoKSB7XG4gICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoXCJPdXRPZk1hdGNoZXNfQW5pbWF0aW9uQ29tcGxldGVcIik7XG4gIH1cbn0iXX0=