"use strict";
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