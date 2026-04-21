"use strict";
cc._RF.push(module, 'd604as+6HZAYKTA7lVe++xw', 'T2CheerFWTrait');
// subpackages/l_t2CheerFW/Scripts/T2CheerFWTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var s = {
    0: "good",
    1: "great",
    2: "excellent",
    3: "amazing",
    4: "in"
};
var f = {
    0: {
        faceWidth: 80,
        faceHeight: 100,
        wordWidth: 280,
        wordHeight: 120,
        gap: 5
    },
    1: {
        faceWidth: 80,
        faceHeight: 100,
        wordWidth: 320,
        wordHeight: 120,
        gap: 5
    },
    2: {
        faceWidth: 100,
        faceHeight: 100,
        wordWidth: 470,
        wordHeight: 120,
        gap: 5
    },
    3: {
        faceWidth: 120,
        faceHeight: 100,
        wordWidth: 520,
        wordHeight: 120,
        gap: 5
    }
};
var T2CheerFWTrait = /** @class */ (function (_super) {
    __extends(T2CheerFWTrait, _super);
    function T2CheerFWTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    T2CheerFWTrait.prototype.onT2CheerBhv_createNode = function (e, t) {
        var r = e.args[0], n = e.args[1], i = e.args[2], o = e.args[3], a = 4 === i ? this._createSingleSpineNode(r, n, i, o) : this._createDoubleSpineNode(r, n, i, o);
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: a
        });
    };
    T2CheerFWTrait.prototype.onT2CheerBhv_getAniNm = function (e, t) {
        var r = e.args[0];
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: s[r] || "good"
        });
    };
    T2CheerFWTrait.prototype._createDoubleSpineNode = function (e, t, r, n) {
        var i = new cc.Node("CheerContainer");
        i.parent = e;
        i.position = t;
        var o = new cc.Node("spinFace");
        o.parent = i;
        var a = new cc.Node("spinWord");
        a.parent = i;
        this._alignHorizontalCenter(o, a, r);
        var c = BaseSpine_1.default.refreshWithNode(o, "spine/tile2Cheer/gameplay_word_face_a", "mainRes"), f = BaseSpine_1.default.refreshWithNode(a, "spine/tile2Cheer/gameplay_word_face_b", "mainRes"), u = 0, l = function l() {
            if (!(++u < 2)) {
                var e = s[r] || "good";
                null == c || c.setAnimation(e, 1);
                null == f || f.setAnimation(e, 1, function () {
                    n(i);
                });
            }
        };
        c.setOnReadyCallback(l);
        f.setOnReadyCallback(l);
        return i;
    };
    T2CheerFWTrait.prototype._createSingleSpineNode = function (e, t, r, n) {
        var i = new cc.Node("CheerContainer");
        i.parent = e;
        i.position = t;
        var o = new cc.Node("spinEffect");
        o.parent = i;
        var a = BaseSpine_1.default.refreshWithNode(o, "spine/tile2Cheer/gameplay_moreAwesome", "mainRes");
        a.setOnReadyCallback(function () {
            var e = s[r] || "in";
            a.setAnimation(e, 1, function () {
                n(i);
            });
        });
        return i;
    };
    T2CheerFWTrait.prototype._alignHorizontalCenter = function (e, t, r) {
        var n, i = null !== (n = f[r]) && void 0 !== n ? n : f[0], o = i.faceWidth, a = i.faceHeight, c = i.wordWidth, p = i.wordHeight, s = o + i.gap + c;
        e.setContentSize(o, a);
        e.position = cc.v3(-s / 2 + o / 2, 0, 0);
        t.setContentSize(c, p);
        t.position = cc.v3(s / 2 - c / 2, 0, 0);
    };
    T2CheerFWTrait.traitKey = "T2CheerFW";
    T2CheerFWTrait = __decorate([
        mj.trait,
        mj.class("T2CheerFWTrait")
    ], T2CheerFWTrait);
    return T2CheerFWTrait;
}(Trait_1.default));
exports.default = T2CheerFWTrait;

cc._RF.pop();