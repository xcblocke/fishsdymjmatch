"use strict";
cc._RF.push(module, 'd112bkMIH5L1ayttRa/5768', 'Tile2Flip3DNodeStateAni');
// Scripts/Tile2Flip3DNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2Flip3DNodeStateAni = void 0;
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var Tile2NodeStateAniBase_1 = require("./base/Tile2NodeStateAniBase");
var Tile2Flip3DNodeStateAni = /** @class */ (function (_super) {
    __extends(Tile2Flip3DNodeStateAni, _super);
    function Tile2Flip3DNodeStateAni(t, o, n) {
        var _this = _super.call(this, t, "flip") || this;
        _this._easing = "";
        _this._isLeft = true;
        _this._baseTileNode = null;
        _this._component = null;
        _this._baseTileNode = o;
        _this._component = n;
        return _this;
    }
    Tile2Flip3DNodeStateAni.prototype.updateIsLeft = function () {
        if (this._baseTileNode.tileObject.isHasLeft())
            this._isLeft = false;
        else if (this._baseTileNode.tileObject.isHasRight())
            this._isLeft = true;
        else {
            var e = this._baseTileNode.tileObject.getPosition(), t = this._baseTileNode.layerNode.parent.convertToWorldSpaceAR(e), o = cc.find("Canvas").convertToNodeSpaceAR(t);
            this._isLeft = o.x < 0;
        }
    };
    Tile2Flip3DNodeStateAni.prototype.createAnimNode = function () {
        var e = new cc.Node();
        e.setContentSize(this._baseTileNode.info.tileObject.getCardContentSize());
        e.setAnchorPoint(0.5, 0.5);
        e.setPosition(0, 0, 0);
        e.name = "imgCard";
        var t = CardUtil_1.default.getAtlasPathAndBundleName(this._baseTileNode.info.tileObject.resName, this._baseTileNode), o = t.path, n = t.bundleName, i = t.fromAtlas;
        BaseSprite_1.default.refreshWithNode(e, o, i, false, n);
        e.scale = 1 / this._baseTileNode.animNode.scale;
        return e;
    };
    Tile2Flip3DNodeStateAni.prototype.onEnterStart = function (e) {
        if (cc.isValid(this._node)) {
            this.playEnterStartAni(e);
        }
        else {
            this.onEnterEnd(e);
        }
    };
    Tile2Flip3DNodeStateAni.prototype.playEnterStartAni = function (e) {
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
    Tile2Flip3DNodeStateAni.prototype.handleEnterAnimationComplete = function (e) {
        this._baseTileNode.tileNode.active = true;
        this._baseTileNode.shadowNode.active = true;
        this._component.setIsBack(false);
        this._baseTileNode.stopAnimNodeAnimation();
        this._baseTileNode.updateImgCard();
        this.onEnterEnd(e);
    };
    Tile2Flip3DNodeStateAni.prototype.onExitStart = function (e) {
        if (cc.isValid(this._node)) {
            this.playExitStartAni(e);
        }
        else {
            this.onExitEnd(e);
        }
    };
    Tile2Flip3DNodeStateAni.prototype.playExitStartAni = function (e) {
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
    Tile2Flip3DNodeStateAni.prototype.handleExitAnimationComplete = function (e) {
        this._baseTileNode.tileNode.active = true;
        this._baseTileNode.shadowNode.active = true;
        this._component.setIsBack(true);
        this._baseTileNode.updateImgCard();
        this._baseTileNode.stopAnimNodeAnimation();
        this.onExitEnd(e);
    };
    Tile2Flip3DNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        this._baseTileNode.tileNode.active = true;
        this._baseTileNode.shadowNode.active = true;
        this._component.setIsBack(false);
        this._baseTileNode.stopAnimNodeAnimation();
        this._baseTileNode.updateImgCard();
    };
    Tile2Flip3DNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        this._baseTileNode.tileNode.active = true;
        this._baseTileNode.shadowNode.active = true;
        this._component.setIsBack(true);
        this._baseTileNode.updateImgCard();
        this._baseTileNode.stopAnimNodeAnimation();
    };
    Tile2Flip3DNodeStateAni.prototype.ensureLockBgState = function (e) {
        var t;
        if (cc.isValid(e) && (null === (t = e.info) || void 0 === t ? void 0 : t.tileObject)) {
            var o = e.imgLockBg;
            if (cc.isValid(o) && !e.info.tileObject.isCardLock()) {
                o.active = false;
                o.opacity = 255;
            }
        }
    };
    return Tile2Flip3DNodeStateAni;
}(Tile2NodeStateAniBase_1.Tile2NodeStateAniBase));
exports.Tile2Flip3DNodeStateAni = Tile2Flip3DNodeStateAni;

cc._RF.pop();