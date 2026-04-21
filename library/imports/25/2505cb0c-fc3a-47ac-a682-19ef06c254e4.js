"use strict";
cc._RF.push(module, '2505csM/DpHrKaCGe8GwlTk', 'StackShuffleStrategy');
// Scripts/strategy/shuffle/StackShuffleStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.StackShuffleStrategy = void 0;
var ShuffleAnimationConfig_1 = require("../../config/ShuffleAnimationConfig");
var StackShuffleStrategy = /** @class */ (function () {
    function StackShuffleStrategy() {
        this.GATHER_DURATION = 0.13;
        this.PILE_DURATION = 0.2;
        this.PILE_SPACING = 17.5;
        this.WAVE_UP_DURATION = 0.1;
        this.WAVE_DOWN_DURATION = 0.73;
        this.WAVE_HEIGHT = 30;
        this.WAVE_BLOCK_DELAY = 0.03;
        this.EXPAND_DURATION = 0.5;
        this.BLOCKS_PER_GROUP = 20;
        this.TILE_WIDTH = 156;
        this.TILE_HEIGHT = 194;
        this.GROUP_GAP = 0;
        this.PERSPECTIVE_OFFSET_RATIO = 0.03;
        this.totalDuration = 0;
        this.currentStackGroups = [];
    }
    StackShuffleStrategy.prototype.getName = function () {
        return "StackShuffle";
    };
    StackShuffleStrategy.prototype.generateAnimationConfig = function (e) {
        var t = this, o = [], n = this.createStackGroups(e);
        this.currentStackGroups = n;
        var i = this.generateGatherPhaseConfigs(n);
        o.push({
            phase: ShuffleAnimationConfig_1.EShufflePhase.Gather,
            configs: i,
            duration: this.GATHER_DURATION
        });
        var r = this.generatePilePhaseConfigs(n);
        o.push({
            phase: "pile",
            configs: r,
            duration: this.PILE_DURATION
        });
        var l = this.generateWavePhaseConfigs(n), s = l.waveConfigs, c = l.waveDuration;
        o.push({
            phase: "wave",
            configs: s,
            duration: c
        });
        var u = {
            phase: ShuffleAnimationConfig_1.EShufflePhase.Expand,
            configs: [],
            duration: this.EXPAND_DURATION
        };
        o.push({
            phase: ShuffleAnimationConfig_1.EShufflePhase.Stay,
            configs: [],
            onPhaseComplete: function () {
                var o = e.tileNodes, i = e.onRebuild(e.tileNodes);
                t.setupHiddenTilesPosition(o, i, e.extraData);
                e.tileNodes = i;
                var r = t.generateExpandPhaseConfigs(e, n);
                u.configs = r;
            },
            duration: 0
        });
        o.push(u);
        this.totalDuration = o.reduce(function (e, t) {
            return e + t.duration;
        }, 0);
        return {
            phases: o,
            totalDuration: this.totalDuration
        };
    };
    StackShuffleStrategy.prototype.createStackGroups = function (e) {
        for (var t, o, n, a, l = this, s = e.tileNodes, c = e.centerPos, u = s.length, p = this.calculateGroupCount(u), f = [], d = Math.ceil(u / p), h = 0; h < p; h++) {
            var y = h * d, m = Math.min(y + d, s.length), v = s.slice(y, m), g = v.reduce(function (e, t) {
                return e + (t.info.layerIndex || 0);
            }, 0) / v.length;
            f.push({
                tiles: v,
                avgLayer: g
            });
        }
        f.sort(function (e, t) {
            return t.avgLayer - e.avgLayer;
        });
        var _ = s.length > 0 ? s[0].cardNode.width : this.TILE_WIDTH, T = [], C = new Set(), b = new Map(), E = function E(e) {
            var t = S.calculateGroupPosition(c, e, p, _);
            T.push({
                position: t,
                tiles: f[e].tiles
            });
            f[e].tiles.forEach(function (e, o) {
                b.set(e, t);
                if (o >= l.BLOCKS_PER_GROUP) {
                    var n = s.indexOf(e);
                    n >= 0 && C.add(n);
                }
            });
        }, S = this;
        for (h = 0; h < f.length; h++)
            E(h);
        e.extraData = {
            hiddenIndices: C,
            tileToGroupPosMap: b
        };
        var I = __spreadArrays(T).sort(function (e, t) {
            return t.position.y - e.position.y;
        }), w = 0, B = s.length;
        try {
            for (var x = __values(I), M = x.next(); !M.done; M = x.next()) {
                var O = M.value;
                try {
                    for (var D = (n = void 0, __values(O.tiles)), P = D.next(); !P.done; P = D.next()) {
                        var A = P.value;
                        A.shadowCardNode.zIndex = w++;
                        A.cardNode.zIndex = B++;
                    }
                }
                catch (e) {
                    n = {
                        error: e
                    };
                }
                finally {
                    try {
                        P && !P.done && (a = D.return) && a.call(D);
                    }
                    finally {
                        if (n)
                            throw n.error;
                    }
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                M && !M.done && (o = x.return) && o.call(x);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return T;
    };
    StackShuffleStrategy.prototype.calculateGroupPosition = function (e, t, o, n) {
        var i = n + this.GROUP_GAP, r = 10 * this.PILE_SPACING + this.GROUP_GAP;
        if (1 === o)
            return cc.v3(e.x, e.y, e.z);
        if (2 === o) {
            var a = i / 2, l = e.x - a, s = e.x + a;
            if (0 === t) {
                var c = l * this.PERSPECTIVE_OFFSET_RATIO;
                return cc.v3(l, e.y + c, e.z);
            }
            c = s * this.PERSPECTIVE_OFFSET_RATIO;
            return cc.v3(s, e.y + c, e.z);
        }
        if (3 === o) {
            a = i / 2;
            var u = e.y - r / 2, p = e.y + r / 2;
            if (0 === t)
                return cc.v3(e.x, u, e.z);
            if (1 === t) {
                c = (l = e.x - a) * this.PERSPECTIVE_OFFSET_RATIO;
                return cc.v3(l, p + c, e.z);
            }
            c = (s = e.x + a) * this.PERSPECTIVE_OFFSET_RATIO;
            return cc.v3(s, p + c, e.z);
        }
        if (4 === o) {
            a = i / 2, u = e.y - r / 2, p = e.y + r / 2, l = e.x - a, s = e.x + a;
            if (0 === t) {
                c = l * this.PERSPECTIVE_OFFSET_RATIO;
                return cc.v3(l, u + c, e.z);
            }
            if (1 === t) {
                c = s * this.PERSPECTIVE_OFFSET_RATIO;
                return cc.v3(s, u + c, e.z);
            }
            if (2 === t) {
                c = l * this.PERSPECTIVE_OFFSET_RATIO;
                return cc.v3(l, p + c, e.z);
            }
            c = s * this.PERSPECTIVE_OFFSET_RATIO;
            return cc.v3(s, p + c, e.z);
        }
        return cc.v3(e.x, e.y, e.z);
    };
    StackShuffleStrategy.prototype.generateGatherPhaseConfigs = function (e) {
        var t = this, o = [];
        e.forEach(function (e) {
            var n = Math.min(e.tiles.length, t.BLOCKS_PER_GROUP);
            e.tiles.forEach(function (i, r) {
                var a = r >= n;
                o.push({
                    node: i.cardNode,
                    startOffset: cc.v2(0, 0),
                    endPosition: e.position,
                    delay: 0,
                    duration: t.GATHER_DURATION,
                    animationType: "stackMove",
                    easing: "circOut",
                    metadata: {
                        layer: i.info.layerIndex || 0,
                        row: 0,
                        col: 0,
                        isLeft: e.position.x < 0
                    },
                    extraParams: {
                        fadeOut: a
                    }
                });
                if (0 !== r || a) {
                    o.push({
                        node: i.shadowCardNode,
                        startOffset: cc.v2(0, 0),
                        endPosition: e.position,
                        delay: 0,
                        duration: t.GATHER_DURATION,
                        animationType: "stackMove",
                        easing: "circOut",
                        extraParams: {
                            fadeOut: true
                        }
                    });
                }
                else {
                    o.push({
                        node: i.shadowCardNode,
                        startOffset: cc.v2(0, 0),
                        endPosition: e.position,
                        delay: 0,
                        duration: t.GATHER_DURATION,
                        animationType: "stackMove",
                        easing: "circOut"
                    });
                }
            });
        });
        return o;
    };
    StackShuffleStrategy.prototype.generatePilePhaseConfigs = function (e) {
        var t = this, o = [];
        e.forEach(function (e) {
            t.generateSingleGroupPileConfigs(o, e);
        });
        return o;
    };
    StackShuffleStrategy.prototype.calculateGroupCount = function (e) {
        return e < 10 ? 1 : e < 60 ? 2 : e <= 100 ? 3 : 4;
    };
    StackShuffleStrategy.prototype.calculateBlocksPerGroup = function (e, t) {
        var o = Math.ceil(e / t);
        return Math.min(o, this.BLOCKS_PER_GROUP);
    };
    StackShuffleStrategy.prototype.generateSingleGroupPileConfigs = function (e, t) {
        for (var o = t.tiles, n = t.position, i = Math.min(o.length, this.BLOCKS_PER_GROUP), r = 0; r < o.length; r++) {
            var a = o[r], l = 0 === r;
            if (r >= i) {
                e.push({
                    node: a.cardNode,
                    startOffset: cc.v2(0, 0),
                    endPosition: n,
                    delay: 0,
                    duration: this.PILE_DURATION,
                    animationType: "stackPile",
                    easing: "sineInOut",
                    extraParams: {
                        isBottom: true
                    }
                });
                a.shadowCardNode.opacity = 0;
            }
            else {
                var s = l ? 0 : r * this.PILE_SPACING, c = n.clone().add(cc.v3(0, s, 0));
                e.push({
                    node: a.cardNode,
                    startOffset: cc.v2(0, 0),
                    endPosition: c,
                    delay: 0,
                    duration: this.PILE_DURATION,
                    animationType: "stackPile",
                    easing: "sineInOut",
                    extraParams: {
                        isBottom: l
                    }
                });
                l || (a.shadowCardNode.opacity = 0);
            }
        }
    };
    StackShuffleStrategy.prototype.generateWavePhaseConfigs = function (e) {
        var t = this, o = [], n = [];
        e.forEach(function (e) {
            for (var o = Math.min(e.tiles.length, t.BLOCKS_PER_GROUP), i = 0; i < o; i++)
                n.push({
                    tile: e.tiles[i],
                    groupPosition: e.position,
                    indexInGroup: i,
                    groupDisplayCount: o
                });
        });
        for (var i = n.length, r = 0; r < i; r++) {
            var a = n[r], l = a.tile, s = a.groupPosition, c = a.indexInGroup, u = a.groupDisplayCount, p = s.clone().add(cc.v3(0, c * this.PILE_SPACING, 0)), f = c * this.WAVE_BLOCK_DELAY, d = (u - 1 - c) * this.WAVE_BLOCK_DELAY, h = Math.max(0.1, this.WAVE_DOWN_DURATION - d);
            o.push({
                node: l.cardNode,
                startOffset: cc.v2(0, 0),
                endPosition: p,
                delay: f,
                duration: this.WAVE_UP_DURATION + h,
                animationType: "stackWave",
                extraParams: {
                    waveHeight: this.WAVE_HEIGHT,
                    upDuration: this.WAVE_UP_DURATION,
                    downDuration: h,
                    upEasing: "circOut",
                    downEasing: "sineInOut"
                }
            });
        }
        var y = 0;
        for (r = 0; r < i; r++)
            (u = n[r].groupDisplayCount) > y && (y = u);
        var m = (y - 1) * this.WAVE_BLOCK_DELAY, v = this.WAVE_DOWN_DURATION;
        return {
            waveConfigs: o,
            waveDuration: m + this.WAVE_UP_DURATION + v
        };
    };
    StackShuffleStrategy.prototype.setupHiddenTilesPosition = function (e, t, o) {
        var n = null == o ? void 0 : o.hiddenIndices, i = null == o ? void 0 : o.tileToGroupPosMap;
        if (n && i) {
            t.forEach(function (t, o) {
                if (n.has(o)) {
                    var r = e[o], a = i.get(r);
                    if (a) {
                        t.cardNode.position = a.clone();
                        t.shadowCardNode.position = a.clone();
                        t.cardNode.opacity = 0;
                        t.shadowCardNode.opacity = 0;
                    }
                }
            });
        }
        else {
            console.error("[StackShuffleStrategy] setupHiddenTilesPosition - extraData缺少必要信息");
        }
    };
    StackShuffleStrategy.prototype.generateExpandPhaseConfigs = function (e) {
        var t, o = this, n = [], i = e.tileNodes, r = null === (t = e.extraData) || void 0 === t ? void 0 : t.hiddenIndices;
        i.forEach(function (e, t) {
            var i = (null == r ? void 0 : r.has(t)) || false, a = e.tileObject.getPosition();
            n.push({
                node: e.cardNode,
                startOffset: cc.v2(0, 0),
                endPosition: a,
                delay: 0,
                duration: o.EXPAND_DURATION,
                animationType: "stackExpand",
                easing: "backOut",
                extraParams: {
                    fadeIn: i
                }
            });
            n.push({
                node: e.shadowCardNode,
                startOffset: cc.v2(0, 0),
                endPosition: a,
                delay: 0,
                duration: o.EXPAND_DURATION,
                animationType: "stackExpand",
                easing: "backOut",
                extraParams: {
                    fadeIn: true
                }
            });
        });
        return n;
    };
    StackShuffleStrategy.prototype.getTotalDuration = function () {
        return this.totalDuration;
    };
    return StackShuffleStrategy;
}());
exports.StackShuffleStrategy = StackShuffleStrategy;

cc._RF.pop();