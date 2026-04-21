(function (t, e) {
    window.QRCode = t.QRCode = e();
})(this, function () {
    "use strict";
    var t = t || function () {
        var t, e, r, o = {
                L: 1,
                M: 0,
                Q: 3,
                H: 2
            }, n = {
                MODE_NUMBER: 1,
                MODE_ALPHA_NUM: 2,
                MODE_8BIT_BYTE: 4,
                MODE_KANJI: 8
            },
            i = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
            s = (t = new Array(256),
                e = new Array(256), r = !1, {
                init: function () {
                    if (!r) {
                        for (var o = 0; o < 8; o++) t[o] = 1 << o;
                        for (o = 8; o < 256; o++) t[o] = t[o - 4] ^ t[o - 5] ^ t[o - 6] ^ t[o - 8];
                        for (o = 0; o < 255; o++) e[t[o]] = o;
                        r = !0;
                    }
                },
                glog: function (t) {
                    if (t < 1) throw new Error("glog(" + t + ")");
                    return e[t];
                },
                gexp: function (e) {
                    for (; e < 0;) e += 255;
                    for (; e >= 256;) e -= 255;
                    return t[e];
                }
            });

        function u(t, e) {
            e = e || 0;
            for (var r = 0; r < t.length && 0 === t[r];) r++;
            this._num = new Array(t.length - r + e);
            for (var o = 0; o < t.length - r; o++) this._num[o] = t[o + r];
        }

        u.prototype.get = function (t) {
            return this._num[t];
        };
        u.prototype.getLength = function () {
            return this._num.length;
        };
        u.prototype.multiply = function (t) {
            for (var e = new Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++) for (var o = 0; o < t.getLength(); o++) e[r + o] ^= s.gexp(s.glog(this.get(r)) + s.glog(t.get(o)));
            return new u(e);
        };
        u.prototype.mod = function (t) {
            if (this.getLength() - t.getLength() < 0) return this;
            for (var e = s.glog(this.get(0)) - s.glog(t.get(0)), r = new Array(this.getLength()), o = 0; o < this.getLength(); o++) r[o] = this.get(o);
            for (o = 0; o < t.getLength(); o++) r[o] ^= s.gexp(s.glog(t.get(o)) + e);
            return new u(r).mod(t);
        };

        function h(t) {
            this.mode = n.MODE_8BIT_BYTE;
            this.data = t;
            this._utf8Bytes = this._stringToUtf8Bytes(t);
        }

        h.prototype.getLength = function () {
            return this._utf8Bytes.length;
        };
        h.prototype.write = function (t) {
            for (var e = 0; e < this._utf8Bytes.length; e++) t.put(this._utf8Bytes[e], 8);
        };
        h.prototype._stringToUtf8Bytes = function (t) {
            for (var e = [], r = 0; r < t.length; r++) {
                var o = t.charCodeAt(r);
                if (o >= 55296 && o <= 56319 && r + 1 < t.length) {
                    var n = t.charCodeAt(r + 1);
                    if (n >= 56320 && n <= 57343) {
                        o = 65536 + (o - 55296 << 10) + (n - 56320);
                        r++;
                    }
                }
                if (o < 128) e.push(o); else if (o < 2048) {
                    e.push(192 | o >> 6);
                    e.push(128 | 63 & o);
                } else if (o < 65536) {
                    e.push(224 | o >> 12);
                    e.push(128 | o >> 6 & 63);
                    e.push(128 | 63 & o);
                } else {
                    e.push(240 | o >> 18);
                    e.push(128 | o >> 12 & 63);
                    e.push(128 | o >> 6 & 63);
                    e.push(128 | 63 & o);
                }
            }
            return e;
        };

        function a() {
            this.buffer = [];
            this.length = 0;
        }

        a.prototype.get = function (t) {
            var e = Math.floor(t / 8);
            return 1 == (this.buffer[e] >>> 7 - t % 8 & 1);
        };
        a.prototype.put = function (t, e) {
            for (var r = 0; r < e; r++) this.putBit(1 == (t >>> e - r - 1 & 1));
        };
        a.prototype.getLengthInBits = function () {
            return this.length;
        };
        a.prototype.putBit = function (t) {
            var e = Math.floor(this.length / 8);
            this.buffer.length <= e && this.buffer.push(0);
            t && (this.buffer[e] |= 128 >>> this.length % 8);
            this.length++;
        };

        function f(t, e) {
            this.totalCount = t;
            this.dataCount = e;
        }

        f.getRSBlocks = function (t, e) {
            for (var r = f._getRsBlockTable(t, e), o = [], n = 0; n < r.length; n += 3) for (var i = r[n], s = r[n + 1], u = r[n + 2], h = 0; h < i; h++) o.push(new f(s, u));
            return o;
        };
        f._getRsBlockTable = function (t, e) {
            switch (e) {
                case o.L:
                    return i[4 * (t - 1) + 0];

                case o.M:
                    return i[4 * (t - 1) + 1];

                case o.Q:
                    return i[4 * (t - 1) + 2];

                case o.H:
                    return i[4 * (t - 1) + 3];

                default:
                    return [];
            }
        };
        var g = {
            PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (t) {
                for (var e = t << 10; this._getBCHDigit(e) - this._getBCHDigit(this.G15) >= 0;) e ^= this.G15 << this._getBCHDigit(e) - this._getBCHDigit(this.G15);
                return (t << 10 | e) ^ this.G15_MASK;
            },
            getBCHTypeNumber: function (t) {
                for (var e = t << 12; this._getBCHDigit(e) - this._getBCHDigit(this.G18) >= 0;) e ^= this.G18 << this._getBCHDigit(e) - this._getBCHDigit(this.G18);
                return t << 12 | e;
            },
            _getBCHDigit: function (t) {
                for (var e = 0; 0 !== t;) {
                    e++;
                    t >>>= 1;
                }
                return e;
            },
            getPatternPosition: function (t) {
                return this.PATTERN_POSITION_TABLE[t - 1];
            },
            getMask: function (t, e, r) {
                switch (t) {
                    case 0:
                        return (e + r) % 2 == 0;

                    case 1:
                        return e % 2 == 0;

                    case 2:
                        return r % 3 == 0;

                    case 3:
                        return (e + r) % 3 == 0;

                    case 4:
                        return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;

                    case 5:
                        return e * r % 2 + e * r % 3 == 0;

                    case 6:
                        return (e * r % 2 + e * r % 3) % 2 == 0;

                    case 7:
                        return (e * r % 3 + (e + r) % 2) % 2 == 0;

                    default:
                        throw new Error("bad maskPattern:" + t);
                }
            },
            getErrorCorrectPolynomial: function (t) {
                for (var e = new u([1]), r = 0; r < t; r++) e = e.multiply(new u([1, s.gexp(r)]));
                return e;
            },
            getLengthInBits: function (t, e) {
                if (1 <= e && e < 10) switch (t) {
                    case n.MODE_NUMBER:
                        return 10;

                    case n.MODE_ALPHA_NUM:
                        return 9;

                    case n.MODE_8BIT_BYTE:
                    case n.MODE_KANJI:
                        return 8;

                    default:
                        throw new Error("mode:" + t);
                } else if (e < 27) switch (t) {
                    case n.MODE_NUMBER:
                        return 12;

                    case n.MODE_ALPHA_NUM:
                        return 11;

                    case n.MODE_8BIT_BYTE:
                        return 16;

                    case n.MODE_KANJI:
                        return 10;

                    default:
                        throw new Error("mode:" + t);
                } else {
                    if (!(e < 41)) throw new Error("type:" + e);
                    switch (t) {
                        case n.MODE_NUMBER:
                            return 14;

                        case n.MODE_ALPHA_NUM:
                            return 13;

                        case n.MODE_8BIT_BYTE:
                            return 16;

                        case n.MODE_KANJI:
                            return 12;

                        default:
                            throw new Error("mode:" + t);
                    }
                }
            },
            getLostPoint: function (t) {
                for (var e = t.getModuleCount(), r = 0, o = 0; o < e; o++) for (var n = 0; n < e; n++) {
                    for (var i = 0, s = t.isDark(o, n), u = -1; u <= 1; u++) if (!(o + u < 0 || e <= o + u)) for (var h = -1; h <= 1; h++) n + h < 0 || e <= n + h || 0 === u && 0 === h || s === t.isDark(o + u, n + h) && i++;
                    i > 5 && (r += 3 + i - 5);
                }
                for (o = 0; o < e - 1; o++) for (n = 0; n < e - 1; n++) {
                    var a = 0;
                    t.isDark(o, n) && a++;
                    t.isDark(o + 1, n) && a++;
                    t.isDark(o, n + 1) && a++;
                    t.isDark(o + 1, n + 1) && a++;
                    0 !== a && 4 !== a || (r += 3);
                }
                for (o = 0; o < e; o++) for (n = 0; n < e - 6; n++) t.isDark(o, n) && !t.isDark(o, n + 1) && t.isDark(o, n + 2) && t.isDark(o, n + 3) && t.isDark(o, n + 4) && !t.isDark(o, n + 5) && t.isDark(o, n + 6) && (r += 40);
                for (n = 0; n < e; n++) for (o = 0; o < e - 6; o++) t.isDark(o, n) && !t.isDark(o + 1, n) && t.isDark(o + 2, n) && t.isDark(o + 3, n) && t.isDark(o + 4, n) && !t.isDark(o + 5, n) && t.isDark(o + 6, n) && (r += 40);
                var f = 0;
                for (n = 0; n < e; n++) for (o = 0; o < e; o++) t.isDark(o, n) && f++;
                return r + Math.abs(100 * f / e / e - 50) / 5 * 10;
            }
        };

        function l(t, e) {
            this._typeNumber = t || 0;
            this._errorCorrectLevel = void 0 !== e ? e : o.M;
            this._modules = [];
            this._moduleCount = 0;
            this._dataCache = null;
            this._dataList = [];
            s.init();
        }

        l.prototype.addData = function (t) {
            this._dataList.push(new h(t));
            this._dataCache = null;
        };
        l.prototype.make = function () {
            if (this._typeNumber < 1) {
                for (var t = 1; t < 40; t++) {
                    for (var e = f.getRSBlocks(t, this._errorCorrectLevel), r = new a(), o = 0, n = 0; n < e.length; n++) o += e[n].dataCount;
                    for (n = 0; n < this._dataList.length; n++) {
                        var i = this._dataList[n];
                        r.put(i.mode, 4);
                        r.put(i.getLength(), g.getLengthInBits(i.mode, t));
                        i.write(r);
                    }
                    if (r.getLengthInBits() <= 8 * o) break;
                }
                this._typeNumber = t;
            }
            this._makeImpl(!1, this._getBestMaskPattern());
        };
        l.prototype._makeImpl = function (t, e) {
            this._moduleCount = 4 * this._typeNumber + 17;
            this._modules = new Array(this._moduleCount);
            for (var r = 0; r < this._moduleCount; r++) {
                this._modules[r] = new Array(this._moduleCount);
                for (var o = 0; o < this._moduleCount; o++) this._modules[r][o] = null;
            }
            this._setupPositionProbePattern(0, 0);
            this._setupPositionProbePattern(this._moduleCount - 7, 0);
            this._setupPositionProbePattern(0, this._moduleCount - 7);
            this._setupPositionAdjustPattern();
            this._setupTimingPattern();
            this._setupTypeInfo(t, e);
            this._typeNumber >= 7 && this._setupTypeNumber(t);
            null === this._dataCache && (this._dataCache = this._createData(this._typeNumber, this._errorCorrectLevel, this._dataList));
            this._mapData(this._dataCache, e);
        };
        l.prototype._setupPositionProbePattern = function (t, e) {
            for (var r = -1; r <= 7; r++) if (!(t + r <= -1 || this._moduleCount <= t + r)) for (var o = -1; o <= 7; o++) e + o <= -1 || this._moduleCount <= e + o || (this._modules[t + r][e + o] = 0 <= r && r <= 6 && (0 === o || 6 === o) || 0 <= o && o <= 6 && (0 === r || 6 === r) || 2 <= r && r <= 4 && 2 <= o && o <= 4);
        };
        l.prototype._getBestMaskPattern = function () {
            for (var t = 0, e = 0, r = 0; r < 8; r++) {
                this._makeImpl(!0, r);
                var o = g.getLostPoint(this);
                if (0 === r || t > o) {
                    t = o;
                    e = r;
                }
            }
            return e;
        };
        l.prototype._setupTimingPattern = function () {
            for (var t = 8; t < this._moduleCount - 8; t++) null === this._modules[t][6] && (this._modules[t][6] = t % 2 == 0);
            for (var e = 8; e < this._moduleCount - 8; e++) null === this._modules[6][e] && (this._modules[6][e] = e % 2 == 0);
        };
        l.prototype._setupPositionAdjustPattern = function () {
            for (var t = g.getPatternPosition(this._typeNumber), e = 0; e < t.length; e++) for (var r = 0; r < t.length; r++) {
                var o = t[e], n = t[r];
                if (null === this._modules[o][n]) for (var i = -2; i <= 2; i++) for (var s = -2; s <= 2; s++) this._modules[o + i][n + s] = -2 === i || 2 === i || -2 === s || 2 === s || 0 === i && 0 === s;
            }
        };
        l.prototype._setupTypeNumber = function (t) {
            for (var e = g.getBCHTypeNumber(this._typeNumber), r = 0; r < 18; r++) {
                var o = !t && 1 == (e >> r & 1);
                this._modules[Math.floor(r / 3)][r % 3 + this._moduleCount - 8 - 3] = o;
            }
            for (r = 0; r < 18; r++) {
                o = !t && 1 == (e >> r & 1);
                this._modules[r % 3 + this._moduleCount - 8 - 3][Math.floor(r / 3)] = o;
            }
        };
        l.prototype._setupTypeInfo = function (t, e) {
            for (var r = this._errorCorrectLevel << 3 | e, o = g.getBCHTypeInfo(r), n = 0; n < 15; n++) {
                var i = !t && 1 == (o >> n & 1);
                n < 6 ? this._modules[n][8] = i : n < 8 ? this._modules[n + 1][8] = i : this._modules[this._moduleCount - 15 + n][8] = i;
            }
            for (n = 0; n < 15; n++) {
                i = !t && 1 == (o >> n & 1);
                n < 8 ? this._modules[8][this._moduleCount - n - 1] = i : n < 9 ? this._modules[8][15 - n - 1 + 1] = i : this._modules[8][15 - n - 1] = i;
            }
            this._modules[this._moduleCount - 8][8] = !t;
        };
        l.prototype._mapData = function (t, e) {
            for (var r = -1, o = this._moduleCount - 1, n = 7, i = 0, s = this._moduleCount - 1; s > 0; s -= 2) {
                6 === s && s--;
                for (; ;) {
                    for (var u = 0; u < 2; u++) if (null === this._modules[o][s - u]) {
                        var h = !1;
                        i < t.length && (h = 1 == (t[i] >>> n & 1));
                        g.getMask(e, o, s - u) && (h = !h);
                        this._modules[o][s - u] = h;
                        if (-1 == --n) {
                            i++;
                            n = 7;
                        }
                    }
                    if ((o += r) < 0 || this._moduleCount <= o) {
                        o -= r;
                        r = -r;
                        break;
                    }
                }
            }
        };
        l.prototype._createData = function (t, e, r) {
            for (var o = f.getRSBlocks(t, e), n = new a(), i = 0; i < r.length; i++) {
                var s = r[i];
                n.put(s.mode, 4);
                n.put(s.getLength(), g.getLengthInBits(s.mode, t));
                s.write(n);
            }
            var u = 0;
            for (i = 0; i < o.length; i++) u += o[i].dataCount;
            if (n.getLengthInBits() > 8 * u) throw new Error("code length overflow. (" + n.getLengthInBits() + ">" + 8 * u + ")");
            n.getLengthInBits() + 4 <= 8 * u && n.put(0, 4);
            for (; n.getLengthInBits() % 8 != 0;) n.putBit(!1);
            for (; !(n.getLengthInBits() >= 8 * u);) {
                n.put(236, 8);
                if (n.getLengthInBits() >= 8 * u) break;
                n.put(17, 8);
            }
            return this._createBytes(n, o);
        };
        l.prototype._createBytes = function (t, e) {
            for (var r = 0, o = 0, n = 0, i = new Array(e.length), s = new Array(e.length), h = 0; h < e.length; h++) {
                var a = e[h].dataCount, f = e[h].totalCount - a;
                o = Math.max(o, a);
                n = Math.max(n, f);
                i[h] = new Array(a);
                for (var l = 0; l < i[h].length; l++) i[h][l] = 255 & t.buffer[l + r];
                r += a;
                var _ = g.getErrorCorrectPolynomial(f), p = new u(i[h], _.getLength() - 1).mod(_);
                s[h] = new Array(_.getLength() - 1);
                for (l = 0; l < s[h].length; l++) {
                    var c = l + p.getLength() - s[h].length;
                    s[h][l] = c >= 0 ? p.get(c) : 0;
                }
            }
            var d = 0;
            for (l = 0; l < e.length; l++) d += e[l].totalCount;
            var m = new Array(d), v = 0;
            for (l = 0; l < o; l++) for (h = 0; h < e.length; h++) l < i[h].length && (m[v++] = i[h][l]);
            for (l = 0; l < n; l++) for (h = 0; h < e.length; h++) l < s[h].length && (m[v++] = s[h][l]);
            return m;
        };
        l.prototype.getModuleCount = function () {
            return this._moduleCount;
        };
        l.prototype.isDark = function (t, e) {
            if (t < 0 || this._moduleCount <= t || e < 0 || this._moduleCount <= e) throw new Error(t + "," + e);
            return !0 === this._modules[t][e];
        };
        l.prototype.getModules = function () {
            for (var t = [], e = 0; e < this._moduleCount; e++) {
                t[e] = [];
                for (var r = 0; r < this._moduleCount; r++) t[e][r] = !0 === this._modules[e][r];
            }
            return t;
        };
        return {
            Generator: l,
            ErrorCorrectLevel: o
        };
    }();
    return t;
});