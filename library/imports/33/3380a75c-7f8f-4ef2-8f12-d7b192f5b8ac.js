"use strict";
cc._RF.push(module, '3380adcf49O8o8S17GS9bis', 'AcAnimPlayerBase');
// Scripts/AcAnimPlayerBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AcAnimPlayerBase = void 0;
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var AcAnimPlayerBase = /** @class */ (function () {
    function AcAnimPlayerBase(e) {
        this.nodeInfos = [];
        this.maskLayer = null;
        this.maskGraphics = null;
        this.context = null;
        this.context = e;
    }
    AcAnimPlayerBase.prototype.delay = function (e, t) {
        return new Promise(function (o) {
            if (!cc.isValid(e) || t <= 0) {
                o();
            }
            else {
                cc.tween(e).delay(t).call(o).start();
            }
        });
    };
    AcAnimPlayerBase.prototype.arcTo = function (e, t, o, n) {
        return new Promise(function (i) {
            if (cc.isValid(e)) {
                var r = e.position.clone(), a = t, l = a.x - r.x, s = a.y - r.y, c = Math.sqrt(l * l + s * s), u = c * (0.6 + 0.2 * Math.random()), p = Math.random() > 0.5, f = (r.x + a.x) / 2, d = (r.y + a.y) / 2, h = f + -s / c * u * (p ? 1 : -1), y = d + l / c * u * (p ? 1 : -1);
                e._arcProgress = 0;
                cc.tween(e).to(o, {
                    _arcProgress: 1
                }, {
                    progress: function (t, o, i, l) {
                        var s = l < 0.5 ? 2 * l * l : 1 - Math.pow(-2 * l + 2, 2) / 2, c = (1 - s) * (1 - s) * r.x + 2 * (1 - s) * s * h + s * s * a.x, u = (1 - s) * (1 - s) * r.y + 2 * (1 - s) * s * y + s * s * a.y;
                        cc.isValid(e) && (e.position = cc.v3(c, u, 0));
                        if (n && cc.isValid(n)) {
                            var p = 2 * (1 - s) * (h - r.x) + 2 * s * (a.x - h), f = 2 * (1 - s) * (y - r.y) + 2 * s * (a.y - y);
                            n.angle = 180 * Math.atan2(f, p) / Math.PI - 90;
                        }
                        return t + (o - t) * l;
                    }
                }).call(function () {
                    cc.isValid(e) && (e.position = t);
                    i();
                }).start();
            }
            else
                i();
        });
    };
    AcAnimPlayerBase.prototype.bezierTo = function (e, t, o) {
        var n = this;
        return new Promise(function (i) {
            if (cc.isValid(e)) {
                var r = n.createBezierEasing(0.25, 0, 0.25, 1);
                cc.tween(e).to(o, {
                    position: t
                }, {
                    easing: r
                }).call(i).start();
            }
            else
                i();
        });
    };
    AcAnimPlayerBase.prototype.createBezierEasing = function (e, t, o, n) {
        return function (i) {
            if (0 === i || 1 === i)
                return i;
            for (var r = 0, a = 1, l = 0, s = 0; s < 10; s++) {
                var c = (r + a) / 2;
                l = 3 * (1 - c) * (1 - c) * c * e + 3 * (1 - c) * c * c * o + c * c * c;
                if (Math.abs(l - i) < 0.001)
                    break;
                if (l < i) {
                    r = c;
                }
                else {
                    a = c;
                }
            }
            var u = (r + a) / 2;
            return 3 * (1 - u) * (1 - u) * u * t + 3 * (1 - u) * u * u * n + u * u * u;
        };
    };
    AcAnimPlayerBase.prototype.createGraphicsMask = function (e) {
        if (e === void 0) { e = "AcMaskLayer"; }
        this.maskLayer = new cc.Node(e);
        this.maskLayer.parent = this.context.effectNode;
        this.maskLayer.position = cc.v3(0, 0, 0);
        this.maskLayer.zIndex = -1000;
        this.maskLayer._fadeAlpha = 0;
        this.maskGraphics = this.maskLayer.addComponent(cc.Graphics);
        var t = cc.winSize;
        this.maskGraphics.rect(-t.width / 2, -t.height / 2, t.width, t.height);
        this.maskGraphics.fillColor = new cc.Color(0, 0, 0, 0);
        this.maskGraphics.fill();
    };
    AcAnimPlayerBase.prototype.fadeMaskDark = function (e, t) {
        var o = this;
        if (cc.isValid(this.maskLayer) && this.maskGraphics) {
            var n = cc.winSize;
            cc.tween(this.maskLayer).to(t, {
                _fadeAlpha: e
            }, {
                progress: function (e, t, i, r) {
                    if (cc.isValid(o.maskLayer) && o.maskGraphics) {
                        var a = e + (t - e) * r;
                        o.maskGraphics.clear();
                        o.maskGraphics.rect(-n.width / 2, -n.height / 2, n.width, n.height);
                        o.maskGraphics.fillColor = new cc.Color(0, 0, 0, a);
                        o.maskGraphics.fill();
                    }
                    return e + (t - e) * r;
                }
            }).start();
        }
    };
    AcAnimPlayerBase.prototype.fadeMaskWhite = function (e) {
        var t = this;
        if (cc.isValid(this.maskLayer) && this.maskGraphics) {
            var o = cc.winSize;
            cc.tween(this.maskLayer).to(e, {
                _fadeAlpha: 0
            }, {
                progress: function (e, n, i, r) {
                    if (cc.isValid(t.maskLayer) && t.maskGraphics) {
                        var a = e + (n - e) * r;
                        t.maskGraphics.clear();
                        t.maskGraphics.rect(-o.width / 2, -o.height / 2, o.width, o.height);
                        t.maskGraphics.fillColor = new cc.Color(0, 0, 0, a);
                        t.maskGraphics.fill();
                    }
                    return e + (n - e) * r;
                }
            }).start();
        }
    };
    AcAnimPlayerBase.prototype.hideFlowLight = function (e) {
        var t = e.getChildByName("DaxiaoFlowLightNode");
        t && (t.active = false);
        var o = e.getChildByName("DaxiaoCardTipNode");
        o && (o.active = false);
    };
    AcAnimPlayerBase.prototype.showFlowLightNode = function (e, t, o, i) {
        if (i === void 0) { i = -1; }
        var r = e.getChildByName("DaxiaoCardTipNode");
        r && (r.active = false);
        if (!e.getChildByName("DaxiaoFlowLightNode")) {
            var a = new cc.Node("DaxiaoFlowLightNode");
            e.addChild(a);
            a.scale = this.context.layoutScale;
            BaseSpine_1.default.refreshWithNode(a, t, o).setAnimation("init", i, null, false);
        }
    };
    AcAnimPlayerBase.prototype.cleanupAndComplete = function () {
        this.nodeInfos.forEach(function (e) {
            cc.isValid(e.cardNode1) && e.cardNode1.destroy();
            cc.isValid(e.cardNode2) && e.cardNode2.destroy();
        });
        if (cc.isValid(this.maskLayer)) {
            this.maskLayer.destroy();
            this.maskLayer = null;
        }
        this.maskGraphics = null;
        this.context.onComplete && this.context.onComplete();
    };
    return AcAnimPlayerBase;
}());
exports.AcAnimPlayerBase = AcAnimPlayerBase;

cc._RF.pop();