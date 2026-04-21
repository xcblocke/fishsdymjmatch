"use strict";
cc._RF.push(module, 'd79e9qzkMFMg5GBJf/MtW7Y', 'WideScreenAdaptTrait');
// subpackages/l_wideScreenAdapt/Scripts/WideScreenAdaptTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Adapter_1 = require("../../../Scripts/component/Adapter");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WideScreenAdaptTrait = /** @class */ (function (_super) {
    __extends(WideScreenAdaptTrait, _super);
    function WideScreenAdaptTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WideScreenAdaptTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerTile2Event();
    };
    WideScreenAdaptTrait.prototype.registerTile2Event = function () {
        this.registerEvent([{
                event: "T2TopVw_onLoad",
                priority: 0,
                type: 2
            }]);
    };
    WideScreenAdaptTrait.prototype.isWideScreen = function () {
        var t = cc.view.getFrameSize();
        return t.height / t.width <= cc.Canvas.instance.designResolution.height / cc.Canvas.instance.designResolution.width;
    };
    WideScreenAdaptTrait.prototype.getBlackX = function () {
        return Adapter_1.default.blackX || 0;
    };
    WideScreenAdaptTrait.prototype.onMainGmVw_initLayers = function (t, i) {
        var e = t.ins;
        if (e && cc.isValid(e.node)) {
            this.adaptMainGameTop(e);
            i();
        }
        else
            i();
    };
    WideScreenAdaptTrait.prototype.onT2TopVw_onLoad = function (t, i) {
        var e = t.ins;
        if (e && cc.isValid(e.node)) {
            this.adaptTile2TopView(e);
            i();
        }
        else
            i();
    };
    WideScreenAdaptTrait.prototype.adaptTile2TopView = function (t) {
        if (this.isWideScreen()) {
            var i = this.getBlackX();
            if (!(i <= 0)) {
                var e = t.node;
                if (e && cc.isValid(e)) {
                    var o = e.getChildByName("btnBack");
                    if (o && cc.isValid(o)) {
                        var n = o.position;
                        o.setPosition(n.x - i, n.y);
                    }
                    var a = e.getChildByName("btnSettings");
                    if (a && cc.isValid(a)) {
                        n = a.position;
                        a.setPosition(n.x + i, n.y);
                    }
                }
            }
        }
    };
    WideScreenAdaptTrait.prototype.onDailyView_onLoad = function (t, i) {
        var e = t.ins;
        if (e && cc.isValid(e.node)) {
            this.adaptDailyViewTop(e);
            i();
        }
        else
            i();
    };
    WideScreenAdaptTrait.prototype.onRankVw_onLoad = function (t, i) {
        var e = t.ins;
        if (e && cc.isValid(e.node)) {
            this.adaptRankViewTop(e);
            i();
        }
        else
            i();
    };
    WideScreenAdaptTrait.prototype.adaptRankViewTop = function (t) {
        if (this.isWideScreen()) {
            var i = this.getBlackX();
            if (!(i <= 0)) {
                var e = t.node.getChildByName("top_adapt");
                if (e && cc.isValid(e)) {
                    var o = e.getChildByName("btn_back");
                    if (o && cc.isValid(o)) {
                        var n = o.position;
                        o.setPosition(n.x - i, n.y);
                    }
                    var a = e.getChildByName("btn_tips");
                    if (a && cc.isValid(a)) {
                        n = a.position;
                        a.setPosition(n.x + i, n.y);
                    }
                }
            }
        }
    };
    WideScreenAdaptTrait.prototype.adaptMainGameTop = function (t) {
        if (this.isWideScreen()) {
            var i = this.getBlackX();
            if (!(i <= 0)) {
                var e = t.topRootNode;
                if (e && cc.isValid(e)) {
                    var o = e.getChildByName("btnBack");
                    if (o && cc.isValid(o)) {
                        var n = o.position;
                        o.setPosition(n.x - i, n.y);
                    }
                    var a = e.getChildByName("btnSettings");
                    if (a && cc.isValid(a)) {
                        n = a.position;
                        a.setPosition(n.x + i, n.y);
                    }
                }
            }
        }
    };
    WideScreenAdaptTrait.prototype.onDailyCollVw_onLoad = function (t, i) {
        var e = t.ins;
        if (e && cc.isValid(e.node)) {
            this.adaptDailyCollectViewTop(e);
            i();
        }
        else
            i();
    };
    WideScreenAdaptTrait.prototype.adaptDailyCollectViewTop = function (t) {
        if (this.isWideScreen()) {
            var i = this.getBlackX();
            if (!(i <= 0)) {
                var e = t.node.getChildByName("node_top");
                if (e && cc.isValid(e)) {
                    var o = e.getChildByName("btn_back");
                    if (o && cc.isValid(o)) {
                        var n = o.position;
                        o.setPosition(n.x - i, n.y);
                    }
                }
            }
        }
    };
    WideScreenAdaptTrait.prototype.adaptDailyViewTop = function (t) {
        if (this.isWideScreen()) {
            var i = this.getBlackX();
            if (!(i <= 0)) {
                var e = t.node.getChildByName("node_top");
                if (e && cc.isValid(e)) {
                    var o = e.getChildByName("btn_back");
                    if (o && cc.isValid(o)) {
                        var n = o.position;
                        o.setPosition(n.x - i, n.y);
                    }
                    var a = e.getChildByName("btn_more");
                    if (a && cc.isValid(a)) {
                        n = a.position;
                        a.setPosition(n.x + i, n.y);
                    }
                }
            }
        }
    };
    WideScreenAdaptTrait.traitKey = "WideScreenAdapt";
    WideScreenAdaptTrait = __decorate([
        mj.trait,
        mj.class("WideScreenAdaptTrait")
    ], WideScreenAdaptTrait);
    return WideScreenAdaptTrait;
}(Trait_1.default));
exports.default = WideScreenAdaptTrait;

cc._RF.pop();