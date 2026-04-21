"use strict";
cc._RF.push(module, 'cd8acYcU1pF64TWD4IPOmrf', 'FlipNodeStateAni');
// Scripts/ani/FlipNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FlipNodeStateAni = void 0;
var BaseSprite_1 = require("../gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("../gamePlay/user/CardUtil");
var NodeStateAniBase_1 = require("../base/NodeStateAniBase");
var FlipNodeStateAni = /** @class */ (function (_super) {
    __extends(FlipNodeStateAni, _super);
    function FlipNodeStateAni(t, o) {
        var _this = _super.call(this, t, "flip") || this;
        _this._easing = "";
        _this._isLeft = true;
        _this._baseTileNode = null;
        _this._baseTileNode = o;
        return _this;
    }
    FlipNodeStateAni.prototype.updateIsLeft = function () {
        if (this._baseTileNode.tileObject.isHasLeft())
            this._isLeft = false;
        else if (this._baseTileNode.tileObject.isHasRight())
            this._isLeft = true;
        else {
            var e = this._baseTileNode.tileObject.getPosition(), t = this._baseTileNode.layerNode.parent.convertToWorldSpaceAR(e), o = cc.find("Canvas").convertToNodeSpaceAR(t);
            this._isLeft = o.x < 0;
        }
    };
    FlipNodeStateAni.prototype.createAnimNode = function () {
        var e = new cc.Node();
        e.setContentSize(this._baseTileNode.info.tileObject.getCardContentSize());
        e.setAnchorPoint(0.5, 0.5);
        e.setPosition(0, 0, 0);
        e.name = "imgCard";
        this._baseTileNode.context;
        var t = CardUtil_1.default.getAtlasPathAndBundleName(this._baseTileNode.info.tileObject.resName, this._baseTileNode), o = t.path, n = t.bundleName, i = t.fromAtlas;
        BaseSprite_1.default.refreshWithNode(e, o, i, false, n);
        e.scale = 1 / this._baseTileNode.animNode.scale;
        return e;
    };
    FlipNodeStateAni.prototype.onEnterStart = function (t) {
        _super.prototype.onEnterStart.call(this, t);
        if (cc.isValid(this._node)) {
            this.playEnterStartAni(t);
        }
        else {
            this.onEnterEnd(t);
        }
    };
    FlipNodeStateAni.prototype.playEnterStartAni = function (e) {
        var t = this;
        this.updateIsLeft();
        var o = this._isLeft ? "in_front_left" : "in_front_right";
        this._baseTileNode.tileNode.active = false;
        this._baseTileNode.shadowNode.active = false;
        this._baseTileNode.playAnimNodeAnimation("spine/rollcard/gameplay_flip", o, false, this.handleEnterAnimationComplete.bind(this, e), function () {
            return t.createAnimNode();
        });
        this.ensureLockBgState(this._baseTileNode);
    };
    FlipNodeStateAni.prototype.handleEnterAnimationComplete = function (e) {
        this._baseTileNode.tileNode.active = true;
        this._baseTileNode.shadowNode.active = true;
        this._baseTileNode.setIsBack(false);
        this._baseTileNode.stopAnimNodeAnimation();
        this._baseTileNode.updateImgCard();
        this.onEnterEnd(e);
    };
    FlipNodeStateAni.prototype.onExitStart = function (t) {
        _super.prototype.onExitStart.call(this, t);
        this.playExitStartAni(t);
    };
    FlipNodeStateAni.prototype.playExitStartAni = function (e) {
        var t = this;
        this.updateIsLeft();
        var o = this._isLeft ? "in_back_left" : "in_back_right";
        this._baseTileNode.tileNode.active = false;
        this._baseTileNode.shadowNode.active = false;
        this._baseTileNode.playAnimNodeAnimation("spine/rollcard/gameplay_flip", o, false, this.handleExitAnimationComplete.bind(this, e), function () {
            return t.createAnimNode();
        });
        this.ensureLockBgState(this._baseTileNode);
    };
    FlipNodeStateAni.prototype.handleExitAnimationComplete = function (e) {
        this._baseTileNode.tileNode.active = true;
        this._baseTileNode.shadowNode.active = true;
        this._baseTileNode.setIsBack(true);
        this._baseTileNode.updateImgCard();
        this._baseTileNode.stopAnimNodeAnimation();
        this.onExitEnd(e);
    };
    FlipNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        this._baseTileNode.tileNode.active = true;
        this._baseTileNode.shadowNode.active = true;
        this._baseTileNode.setIsBack(false);
        this._baseTileNode.stopAnimNodeAnimation();
        this._baseTileNode.updateImgCard();
    };
    FlipNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        this._baseTileNode.tileNode.active = true;
        this._baseTileNode.shadowNode.active = true;
        this._baseTileNode.setIsBack(true);
        this._baseTileNode.updateImgCard();
        this._baseTileNode.stopAnimNodeAnimation();
    };
    FlipNodeStateAni.prototype.applyImmediate = function () {
        cc.isValid(this._node);
    };
    FlipNodeStateAni.prototype.reset = function () {
        if (this._onEnteredCallBack) {
            this._onEnteredCallBack();
            this._onEnteredCallBack = void 0;
        }
    };
    FlipNodeStateAni.prototype.ensureLockBgState = function (e) {
        var t;
        if (cc.isValid(e) && (null === (t = e.info) || void 0 === t ? void 0 : t.tileObject)) {
            var o = e.imgLockBg;
            if (cc.isValid(o) && !e.info.tileObject.isCardLock()) {
                o.active = false;
                o.opacity = 255;
            }
        }
    };
    __decorate([
        mj.traitEvent("FlipAni_playEnter")
    ], FlipNodeStateAni.prototype, "playEnterStartAni", null);
    __decorate([
        mj.traitEvent("FlipAni_playExit")
    ], FlipNodeStateAni.prototype, "playExitStartAni", null);
    return FlipNodeStateAni;
}(NodeStateAniBase_1.NodeStateAniBase));
exports.FlipNodeStateAni = FlipNodeStateAni;

cc._RF.pop();