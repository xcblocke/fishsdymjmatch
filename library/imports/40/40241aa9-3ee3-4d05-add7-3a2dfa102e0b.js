"use strict";
cc._RF.push(module, '40241qpPuNNBa3XOi36EC4L', 'MainTopBtmVisibleTrait');
// subpackages/l_mainTopBtmVisible/Scripts/MainTopBtmVisibleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var MainTopBtmVisibleTrait = /** @class */ (function (_super) {
    __extends(MainTopBtmVisibleTrait, _super);
    function MainTopBtmVisibleTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainTopBtmVisibleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MainTopBtmVisibleTrait.prototype.onMainGmVw_calcAreaSz = function (t, o) {
        var e, r;
        (null === (e = t.ins) || void 0 === e ? void 0 : e.topRootNode) && (t.ins.topRootNode.active = false);
        (null === (r = t.ins) || void 0 === r ? void 0 : r.bottomRootNode) && (t.ins.bottomRootNode.active = false);
        o();
    };
    MainTopBtmVisibleTrait.prototype.onInitViewBhv_crtTls = function (t, o) {
        var e, r, i = null === (r = null === (e = t.ins) || void 0 === e ? void 0 : e.context) || void 0 === r ? void 0 : r.gameView;
        (null == i ? void 0 : i.topRootNode) && (i.topRootNode.active = true);
        (null == i ? void 0 : i.bottomRootNode) && (i.bottomRootNode.active = true);
        o();
    };
    MainTopBtmVisibleTrait.traitKey = "MainTopBtmVisible";
    MainTopBtmVisibleTrait = __decorate([
        mj.trait,
        mj.class("MainTopBtmVisibleTrait")
    ], MainTopBtmVisibleTrait);
    return MainTopBtmVisibleTrait;
}(Trait_1.default));
exports.default = MainTopBtmVisibleTrait;

cc._RF.pop();