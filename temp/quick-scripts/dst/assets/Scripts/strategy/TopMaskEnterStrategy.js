
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/strategy/TopMaskEnterStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd493eiObaZMI5UzvtqlF1dY', 'TopMaskEnterStrategy');
// Scripts/strategy/TopMaskEnterStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TopMaskEnterStrategy = void 0;
var TopMaskEnterStrategy = /** @class */ (function () {
    function TopMaskEnterStrategy() {
        this.ANIM_DURATION = 0.5;
        this.ROW_INTERVAL = 0.03;
        this.RANDOM_DELAY_RANGE = 0.03;
        this.DROP_OFFSET_Y = 200;
        this.totalDuration = 0;
    }
    TopMaskEnterStrategy.prototype.getName = function () {
        return "TopMaskEnter";
    };
    TopMaskEnterStrategy.prototype.generateAnimationConfigs = function (e) {
        var t, o, n, a, l, s, c, u, p, f, d, h, y = [], m = e.tileNodeMap, v = new Map(), g = -Infinity, _ = Infinity;
        try {
            for (var T = __values(m), C = T.next(); !C.done; C = T.next()) {
                var b = __read(C.value, 2)[1];
                if (cc.isValid(b.cardNode) && cc.isValid(b.shadowNode)) {
                    var E = b.info.layerIndex || 0, S = (null === (d = b.info.tileObject) || void 0 === d ? void 0 : d.gridPosY) || 0, I = (null === (h = b.info.tileObject) || void 0 === h ? void 0 : h.gridPosX) || 0, w = b.cardNode.position.y;
                    g = Math.max(g, w);
                    _ = Math.min(_, w);
                    v.has(E) || v.set(E, new Map());
                    (j = v.get(E)).has(S) || j.set(S, []);
                    j.get(S).push({
                        cardNode: b.cardNode,
                        shadowNode: b.shadowNode,
                        layer: E,
                        row: S,
                        col: I
                    });
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
                C && !C.done && (o = T.return) && o.call(T);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        if (0 === v.size)
            return y;
        var B = g + this.DROP_OFFSET_Y, x = g - _ + this.DROP_OFFSET_Y;
        try {
            for (var M = __values(m), O = M.next(); !O.done; O = M.next()) {
                b = __read(O.value, 2)[1];
                cc.isValid(b.cardNode) && (b.cardNode.opacity = 0);
                cc.isValid(b.shadowNode) && (b.shadowNode.opacity = 0);
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                O && !O.done && (a = M.return) && a.call(M);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        var D = 0, P = 0, A = Array.from(v.keys()).sort(function (e, t) {
            return e - t;
        });
        try {
            for (var R = __values(A), N = R.next(); !N.done; N = R.next()) {
                E = N.value;
                var j = v.get(E), k = Array.from(j.keys()).sort(function (e, t) {
                    return t - e;
                });
                try {
                    for (var L = (c = void 0, __values(k)), G = L.next(); !G.done; G = L.next()) {
                        S = G.value;
                        var F = j.get(S);
                        try {
                            for (var V = (p = void 0, __values(F)), U = V.next(); !U.done; U = V.next()) {
                                var H = U.value, W = (2 * Math.random() - 1) * this.RANDOM_DELAY_RANGE, z = Math.max(0, P + W);
                                D = Math.max(D, z);
                                var Y = H.cardNode.position;
                                y.push({
                                    node: H.cardNode,
                                    startOffset: cc.v2(0, x),
                                    endPosition: Y.clone(),
                                    delay: z,
                                    duration: this.ANIM_DURATION,
                                    animationType: "move",
                                    easing: "backOut",
                                    metadata: {
                                        layer: H.layer,
                                        row: H.row,
                                        col: H.col,
                                        isLeft: false
                                    },
                                    extraParams: {
                                        maskTopY: B,
                                        fadeIn: true
                                    }
                                });
                                if (cc.isValid(H.shadowNode)) {
                                    var K = H.shadowNode.position;
                                    y.push({
                                        node: H.shadowNode,
                                        startOffset: cc.v2(0, x),
                                        endPosition: K.clone(),
                                        delay: z,
                                        duration: this.ANIM_DURATION,
                                        animationType: "move",
                                        easing: "backOut",
                                        metadata: {
                                            layer: H.layer,
                                            row: H.row,
                                            col: H.col,
                                            isLeft: false
                                        },
                                        extraParams: {
                                            maskTopY: B,
                                            fadeIn: true
                                        }
                                    });
                                }
                            }
                        }
                        catch (e) {
                            p = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                U && !U.done && (f = V.return) && f.call(V);
                            }
                            finally {
                                if (p)
                                    throw p.error;
                            }
                        }
                        P += this.ROW_INTERVAL;
                    }
                }
                catch (e) {
                    c = {
                        error: e
                    };
                }
                finally {
                    try {
                        G && !G.done && (u = L.return) && u.call(L);
                    }
                    finally {
                        if (c)
                            throw c.error;
                    }
                }
            }
        }
        catch (e) {
            l = {
                error: e
            };
        }
        finally {
            try {
                N && !N.done && (s = R.return) && s.call(R);
            }
            finally {
                if (l)
                    throw l.error;
            }
        }
        this.totalDuration = D + this.ANIM_DURATION;
        return y;
    };
    TopMaskEnterStrategy.prototype.getTotalDuration = function () {
        return this.totalDuration;
    };
    __decorate([
        mj.traitEvent("TopMaskStgy_genCfgs")
    ], TopMaskEnterStrategy.prototype, "generateAnimationConfigs", null);
    return TopMaskEnterStrategy;
}());
exports.TopMaskEnterStrategy = TopMaskEnterStrategy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3N0cmF0ZWd5L1RvcE1hc2tFbnRlclN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUNFLGtCQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQixrQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUNwQixrQkFBYSxHQUFHLENBQUMsQ0FBQztJQXNMcEIsQ0FBQztJQXJMQyxzQ0FBTyxHQUFQO1FBQ0UsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQUVELHVEQUF3QixHQUF4QixVQUF5QixDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLEVBQUUsRUFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFDakIsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLEVBQ2IsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUNiLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDZixJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUks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LEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCwrQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQWhMRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7d0VBOEtwQztJQUlILDJCQUFDO0NBM0xELEFBMkxDLElBQUE7QUEzTFksb0RBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRvcE1hc2tFbnRlclN0cmF0ZWd5IHtcbiAgQU5JTV9EVVJBVElPTiA9IDAuNTtcbiAgUk9XX0lOVEVSVkFMID0gMC4wMztcbiAgUkFORE9NX0RFTEFZX1JBTkdFID0gMC4wMztcbiAgRFJPUF9PRkZTRVRfWSA9IDIwMDtcbiAgdG90YWxEdXJhdGlvbiA9IDA7XG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIFwiVG9wTWFza0VudGVyXCI7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUb3BNYXNrU3RneV9nZW5DZmdzXCIpXG4gIGdlbmVyYXRlQW5pbWF0aW9uQ29uZmlncyhlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbixcbiAgICAgIGEsXG4gICAgICBsLFxuICAgICAgcyxcbiAgICAgIGMsXG4gICAgICB1LFxuICAgICAgcCxcbiAgICAgIGYsXG4gICAgICBkLFxuICAgICAgaCxcbiAgICAgIHkgPSBbXSxcbiAgICAgIG0gPSBlLnRpbGVOb2RlTWFwLFxuICAgICAgdiA9IG5ldyBNYXAoKSxcbiAgICAgIGcgPSAtSW5maW5pdHksXG4gICAgICBfID0gSW5maW5pdHk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIFQgPSBfX3ZhbHVlcyhtKSwgQyA9IFQubmV4dCgpOyAhQy5kb25lOyBDID0gVC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGIgPSBfX3JlYWQoQy52YWx1ZSwgMilbMV07XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGIuY2FyZE5vZGUpICYmIGNjLmlzVmFsaWQoYi5zaGFkb3dOb2RlKSkge1xuICAgICAgICAgIHZhciBFID0gYi5pbmZvLmxheWVySW5kZXggfHwgMCxcbiAgICAgICAgICAgIFMgPSAobnVsbCA9PT0gKGQgPSBiLmluZm8udGlsZU9iamVjdCkgfHwgdm9pZCAwID09PSBkID8gdm9pZCAwIDogZC5ncmlkUG9zWSkgfHwgMCxcbiAgICAgICAgICAgIEkgPSAobnVsbCA9PT0gKGggPSBiLmluZm8udGlsZU9iamVjdCkgfHwgdm9pZCAwID09PSBoID8gdm9pZCAwIDogaC5ncmlkUG9zWCkgfHwgMCxcbiAgICAgICAgICAgIHcgPSBiLmNhcmROb2RlLnBvc2l0aW9uLnk7XG4gICAgICAgICAgZyA9IE1hdGgubWF4KGcsIHcpO1xuICAgICAgICAgIF8gPSBNYXRoLm1pbihfLCB3KTtcbiAgICAgICAgICB2LmhhcyhFKSB8fCB2LnNldChFLCBuZXcgTWFwKCkpO1xuICAgICAgICAgIChqID0gdi5nZXQoRSkpLmhhcyhTKSB8fCBqLnNldChTLCBbXSk7XG4gICAgICAgICAgai5nZXQoUykucHVzaCh7XG4gICAgICAgICAgICBjYXJkTm9kZTogYi5jYXJkTm9kZSxcbiAgICAgICAgICAgIHNoYWRvd05vZGU6IGIuc2hhZG93Tm9kZSxcbiAgICAgICAgICAgIGxheWVyOiBFLFxuICAgICAgICAgICAgcm93OiBTLFxuICAgICAgICAgICAgY29sOiBJXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgQyAmJiAhQy5kb25lICYmIChvID0gVC5yZXR1cm4pICYmIG8uY2FsbChUKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoMCA9PT0gdi5zaXplKSByZXR1cm4geTtcbiAgICB2YXIgQiA9IGcgKyB0aGlzLkRST1BfT0ZGU0VUX1ksXG4gICAgICB4ID0gZyAtIF8gKyB0aGlzLkRST1BfT0ZGU0VUX1k7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIE0gPSBfX3ZhbHVlcyhtKSwgTyA9IE0ubmV4dCgpOyAhTy5kb25lOyBPID0gTS5uZXh0KCkpIHtcbiAgICAgICAgYiA9IF9fcmVhZChPLnZhbHVlLCAyKVsxXTtcbiAgICAgICAgY2MuaXNWYWxpZChiLmNhcmROb2RlKSAmJiAoYi5jYXJkTm9kZS5vcGFjaXR5ID0gMCk7XG4gICAgICAgIGNjLmlzVmFsaWQoYi5zaGFkb3dOb2RlKSAmJiAoYi5zaGFkb3dOb2RlLm9wYWNpdHkgPSAwKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgTyAmJiAhTy5kb25lICYmIChhID0gTS5yZXR1cm4pICYmIGEuY2FsbChNKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgRCA9IDAsXG4gICAgICBQID0gMCxcbiAgICAgIEEgPSBBcnJheS5mcm9tKHYua2V5cygpKS5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHJldHVybiBlIC0gdDtcbiAgICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBSID0gX192YWx1ZXMoQSksIE4gPSBSLm5leHQoKTsgIU4uZG9uZTsgTiA9IFIubmV4dCgpKSB7XG4gICAgICAgIEUgPSBOLnZhbHVlO1xuICAgICAgICB2YXIgaiA9IHYuZ2V0KEUpLFxuICAgICAgICAgIGsgPSBBcnJheS5mcm9tKGoua2V5cygpKS5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICByZXR1cm4gdCAtIGU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgTCA9IChjID0gdm9pZCAwLCBfX3ZhbHVlcyhrKSksIEcgPSBMLm5leHQoKTsgIUcuZG9uZTsgRyA9IEwubmV4dCgpKSB7XG4gICAgICAgICAgICBTID0gRy52YWx1ZTtcbiAgICAgICAgICAgIHZhciBGID0gai5nZXQoUyk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBWID0gKHAgPSB2b2lkIDAsIF9fdmFsdWVzKEYpKSwgVSA9IFYubmV4dCgpOyAhVS5kb25lOyBVID0gVi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgSCA9IFUudmFsdWUsXG4gICAgICAgICAgICAgICAgICBXID0gKDIgKiBNYXRoLnJhbmRvbSgpIC0gMSkgKiB0aGlzLlJBTkRPTV9ERUxBWV9SQU5HRSxcbiAgICAgICAgICAgICAgICAgIHogPSBNYXRoLm1heCgwLCBQICsgVyk7XG4gICAgICAgICAgICAgICAgRCA9IE1hdGgubWF4KEQsIHopO1xuICAgICAgICAgICAgICAgIHZhciBZID0gSC5jYXJkTm9kZS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICB5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgbm9kZTogSC5jYXJkTm9kZSxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0T2Zmc2V0OiBjYy52MigwLCB4KSxcbiAgICAgICAgICAgICAgICAgIGVuZFBvc2l0aW9uOiBZLmNsb25lKCksXG4gICAgICAgICAgICAgICAgICBkZWxheTogeixcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLkFOSU1fRFVSQVRJT04sXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb25UeXBlOiBcIm1vdmVcIixcbiAgICAgICAgICAgICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCIsXG4gICAgICAgICAgICAgICAgICBtZXRhZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBsYXllcjogSC5sYXllcixcbiAgICAgICAgICAgICAgICAgICAgcm93OiBILnJvdyxcbiAgICAgICAgICAgICAgICAgICAgY29sOiBILmNvbCxcbiAgICAgICAgICAgICAgICAgICAgaXNMZWZ0OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4dHJhUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hc2tUb3BZOiBCLFxuICAgICAgICAgICAgICAgICAgICBmYWRlSW46IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChILnNoYWRvd05vZGUpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgSyA9IEguc2hhZG93Tm9kZS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgIHkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IEguc2hhZG93Tm9kZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRPZmZzZXQ6IGNjLnYyKDAsIHgpLFxuICAgICAgICAgICAgICAgICAgICBlbmRQb3NpdGlvbjogSy5jbG9uZSgpLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogeixcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuQU5JTV9EVVJBVElPTixcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uVHlwZTogXCJtb3ZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGF5ZXI6IEgubGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBILnJvdyxcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IEguY29sLFxuICAgICAgICAgICAgICAgICAgICAgIGlzTGVmdDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXNrVG9wWTogQixcbiAgICAgICAgICAgICAgICAgICAgICBmYWRlSW46IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHAgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgVSAmJiAhVS5kb25lICYmIChmID0gVi5yZXR1cm4pICYmIGYuY2FsbChWKTtcbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAocCkgdGhyb3cgcC5lcnJvcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUCArPSB0aGlzLlJPV19JTlRFUlZBTDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBHICYmICFHLmRvbmUgJiYgKHUgPSBMLnJldHVybikgJiYgdS5jYWxsKEwpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoYykgdGhyb3cgYy5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgTiAmJiAhTi5kb25lICYmIChzID0gUi5yZXR1cm4pICYmIHMuY2FsbChSKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChsKSB0aHJvdyBsLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRvdGFsRHVyYXRpb24gPSBEICsgdGhpcy5BTklNX0RVUkFUSU9OO1xuICAgIHJldHVybiB5O1xuICB9XG4gIGdldFRvdGFsRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxEdXJhdGlvbjtcbiAgfVxufSJdfQ==