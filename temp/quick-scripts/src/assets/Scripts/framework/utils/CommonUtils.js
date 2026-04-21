"use strict";
cc._RF.push(module, '2903dupxZRBSZGt1uRgo3TZ', 'CommonUtils');
// Scripts/framework/utils/CommonUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HSV2RGB = exports.RGB2HSV = exports.delayFrame = exports.formatLanguageStringToCode = exports.formatLanguageCodeToString = exports.getNaturalDayDiff = exports.isNetworkAvailable = exports.setSpriteGray = exports.createSingleColorScreenNode = exports.createSingleColorNode = exports.createSingleColorSpriteFrame = exports.performWithSchedule = exports.performWithDelay = exports.deepClone = exports.playSpineAnim = exports.getDataByBuildResPath = exports.getResPathAfterBuild = exports.captureScreen = exports.getRandomNum = exports.AniTimeScale = void 0;
var ResManager_1 = require("../manager/ResManager");
var r = 1;
exports.AniTimeScale = {
    get: function () {
        return r;
    },
    set: function (e) {
        r = e;
    }
};
var getRandomNum = function (e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
};
exports.getRandomNum = getRandomNum;
var captureScreen = function () {
    var e = new cc.RenderTexture(), t = cc.visibleRect.width, o = cc.visibleRect.height;
    e.initWithSize(t, o, cc.gfx.RB_FMT_S8);
    var n = cc.Canvas.instance.node.getChildByName("Main Camera").getComponent(cc.Camera);
    n.targetTexture = e;
    n.render();
    n.targetTexture = null;
    var i = new cc.Node(), r = new cc.SpriteFrame();
    r.setFlipY(true);
    r.setTexture(e);
    var a = i.addComponent(cc.Sprite);
    a.spriteFrame = r;
    a.srcBlendFactor = cc.macro.BlendFactor.ONE;
    a.dstBlendFactor = cc.macro.BlendFactor.ZERO;
    return i;
};
exports.captureScreen = captureScreen;
function getResPathAfterBuild(e, t, o, n) {
    if (n === void 0) { n = cc.resources; }
    var i = n.getInfoWithPath(e, cc.Asset);
    assert(i, n.name + ":资源 " + e + " 缺失");
    return cc.assetManager.utils.getUrlWithUuid(i.uuid, {
        isNative: !t,
        nativeExt: o
    });
}
exports.getResPathAfterBuild = getResPathAfterBuild;
var getDataByBuildResPath = function (e, t, o, n) {
    n || (n = ResManager_1.resManager.getBundle("mainRes"));
    return n.get(e, cc.JsonAsset).json;
    // let filePath = getResPathAfterBuild(e, t, o, n);
    // return jsb.fileUtils.getStringFromFile(filePath);
};
exports.getDataByBuildResPath = getDataByBuildResPath;
var playSpineAnim = function (e, t, n, i, r, a) {
    if (i === void 0) { i = null; }
    if (r === void 0) { r = false; }
    if (0 !== t) {
        e.setCompleteListener(null);
        a = a || exports.AniTimeScale.get();
        e.timeScale = a;
        e.loop = t < 0;
        e.paused = false;
        e.setAnimation(0, n, e.loop);
        if (!(t < 0)) {
            var l = 0;
            e.setCompleteListener(null);
            e.setCompleteListener(function () {
                l++;
                if (r && l >= t) {
                    e.setCompleteListener(null);
                    e.node.destroy();
                }
                if (!r && l >= t) {
                    e.setCompleteListener(null);
                    e.paused = true;
                }
                null == i || i(l);
            });
        }
    }
};
exports.playSpineAnim = playSpineAnim;
var deepClone = function (e) {
    var t = JSON.stringify(e);
    return JSON.parse(t);
};
exports.deepClone = deepClone;
var performWithDelay = function (e, t, o) {
    var n = cc.sequence(cc.delayTime(o / 1000), cc.callFunc(t));
    e.runAction(n);
    return n;
};
exports.performWithDelay = performWithDelay;
var performWithSchedule = function (e, t, o) {
    var n = cc.delayTime(o / 1000), i = cc.sequence(n, cc.callFunc(t)), r = cc.repeatForever(i);
    e.runAction(r);
    return r;
};
exports.performWithSchedule = performWithSchedule;
function createSingleColorSpriteFrame(e) {
    var t = new cc.Texture2D();
    t.initWithData(new Uint8Array([e.r, e.g, e.b]), cc.Texture2D.PixelFormat.RGB888, 1, 1);
    var o = new cc.SpriteFrame();
    o.setTexture(t);
    return o;
}
exports.createSingleColorSpriteFrame = createSingleColorSpriteFrame;
function createSingleColorNode(e, t) {
    var o = new cc.Node(), n = o.addComponent(cc.Sprite), i = createSingleColorSpriteFrame(e);
    n.spriteFrame = i;
    if (t) {
        n.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        o.setContentSize(t);
    }
    return o;
}
exports.createSingleColorNode = createSingleColorNode;
var createSingleColorScreenNode = function () {
    var e = cc.size(cc.visibleRect.width, cc.visibleRect.height);
    return createSingleColorNode(cc.Color.BLACK, e);
};
exports.createSingleColorScreenNode = createSingleColorScreenNode;
var setSpriteGray = function (e, t) {
    var o = e instanceof cc.Sprite ? e : e.getComponent(cc.Sprite);
    if (o) {
        var n = t ? cc.Material.getBuiltinMaterial("2d-gray-sprite") : cc.Material.getBuiltinMaterial("2d-sprite");
        o.setMaterial(0, n);
    }
};
exports.setSpriteGray = setSpriteGray;
var isNetworkAvailable = function () {
    return cc.sys.isNative ? 0 !== cc.sys.getNetworkType() : navigator.onLine;
};
exports.isNetworkAvailable = isNetworkAvailable;
var getNaturalDayDiff = function (e, t) {
    var o = new Date(new Date(e).setHours(0, 0, 0, 0)), n = new Date(new Date(t).setHours(0, 0, 0, 0)).getTime() - o.getTime();
    return Math.round(n / 86400000);
};
exports.getNaturalDayDiff = getNaturalDayDiff;
var formatLanguageCodeToString = function (e) {
    return e ? e.replace(/[a-z]|-/g, function (e) {
        return "-" === e ? "_" : e.toUpperCase();
    }) : "";
};
exports.formatLanguageCodeToString = formatLanguageCodeToString;
var formatLanguageStringToCode = function (e) {
    if (!e)
        return "";
    var t = e.replace(/_/g, "-").split("-");
    return 2 == t.length ? t[0].toLowerCase() + "-" + t[1].toUpperCase() : t[0].toLowerCase();
};
exports.formatLanguageStringToCode = formatLanguageStringToCode;
var delayFrame = function (e, t) {
    var o = 0, n = function n() {
        if (++o >= t) {
            e();
        }
        else {
            setTimeout(n, 0);
        }
    };
    setTimeout(n, 0);
};
exports.delayFrame = delayFrame;
var RGB2HSV = function (e, t, o) {
    e /= 255;
    t /= 255;
    o /= 255;
    var n = Math.max(e, t, o), i = n - Math.min(e, t, o), r = i ? 60 * (n == e ? (t - o) / i : n == t ? 2 + (o - e) / i : 4 + (e - t) / i) : 0;
    return {
        h: r < 0 ? r + 360 : r,
        s: n ? i / n : 0,
        v: n
    };
};
exports.RGB2HSV = RGB2HSV;
var HSV2RGB = function (e, t, o) {
    if (!t)
        return {
            r: 255 * o,
            g: 255 * o,
            b: 255 * o
        };
    e /= 60;
    var i = Math.floor(e), r = e - i, a = o * (1 - t), l = o * (1 - t * r), s = o * (1 - t * (1 - r)), c = __read([[o, s, a], [l, o, a], [a, o, s], [a, l, o], [s, a, o], [o, a, l]][i], 3);
    return {
        r: 255 * c[0],
        g: 255 * c[1],
        b: 255 * c[2]
    };
};
exports.HSV2RGB = HSV2RGB;

cc._RF.pop();