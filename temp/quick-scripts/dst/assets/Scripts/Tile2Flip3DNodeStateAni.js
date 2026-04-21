
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2Flip3DNodeStateAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyRmxpcDNETm9kZVN0YXRlQW5pLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXVEO0FBQ3ZELHFEQUFnRDtBQUNoRCxzRUFBcUU7QUFDckU7SUFBNkMsMkNBQXFCO0lBS2hFLGlDQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUFuQixZQUNFLGtCQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsU0FHakI7UUFSRCxhQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsYUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBR2hCLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDOztJQUN0QixDQUFDO0lBQ0QsOENBQVksR0FBWjtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFBSyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQUs7WUFDaEosSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQ2pELENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQ2hFLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBQ0QsZ0RBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUMxRSxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsa0JBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFDeEcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xCLG9CQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDaEQsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsOENBQVksR0FBWixVQUFhLENBQUM7UUFDWixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFDRCxtREFBaUIsR0FBakIsVUFBa0IsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ2xJLE9BQU8sQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsOERBQTRCLEdBQTVCLFVBQTZCLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNELDZDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBQ0Qsa0RBQWdCLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLDhCQUE4QixFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDakksT0FBTyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCw2REFBMkIsR0FBM0IsVUFBNEIsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0QseUNBQU8sR0FBUCxVQUFRLENBQUM7UUFDUCxpQkFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUNELHdDQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFDRCxtREFBaUIsR0FBakIsVUFBa0IsQ0FBQztRQUNqQixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3BGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDcEIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLEVBQUU7Z0JBQ3BELENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzthQUNqQjtTQUNGO0lBQ0gsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0E5R0EsQUE4R0MsQ0E5RzRDLDZDQUFxQixHQThHakU7QUE5R1ksMERBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VTcHJpdGUgZnJvbSAnLi9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcHJpdGUnO1xuaW1wb3J0IENhcmRVdGlsIGZyb20gJy4vZ2FtZVBsYXkvdXNlci9DYXJkVXRpbCc7XG5pbXBvcnQgeyBUaWxlMk5vZGVTdGF0ZUFuaUJhc2UgfSBmcm9tICcuL2Jhc2UvVGlsZTJOb2RlU3RhdGVBbmlCYXNlJztcbmV4cG9ydCBjbGFzcyBUaWxlMkZsaXAzRE5vZGVTdGF0ZUFuaSBleHRlbmRzIFRpbGUyTm9kZVN0YXRlQW5pQmFzZSB7XG4gIF9lYXNpbmcgPSBcIlwiO1xuICBfaXNMZWZ0ID0gdHJ1ZTtcbiAgX2Jhc2VUaWxlTm9kZSA9IG51bGw7XG4gIF9jb21wb25lbnQgPSBudWxsO1xuICBjb25zdHJ1Y3Rvcih0LCBvLCBuKSB7XG4gICAgc3VwZXIodCwgXCJmbGlwXCIpO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZSA9IG87XG4gICAgdGhpcy5fY29tcG9uZW50ID0gbjtcbiAgfVxuICB1cGRhdGVJc0xlZnQoKSB7XG4gICAgaWYgKHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlT2JqZWN0LmlzSGFzTGVmdCgpKSB0aGlzLl9pc0xlZnQgPSBmYWxzZTtlbHNlIGlmICh0aGlzLl9iYXNlVGlsZU5vZGUudGlsZU9iamVjdC5pc0hhc1JpZ2h0KCkpIHRoaXMuX2lzTGVmdCA9IHRydWU7ZWxzZSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlT2JqZWN0LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHQgPSB0aGlzLl9iYXNlVGlsZU5vZGUubGF5ZXJOb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoZSksXG4gICAgICAgIG8gPSBjYy5maW5kKFwiQ2FudmFzXCIpLmNvbnZlcnRUb05vZGVTcGFjZUFSKHQpO1xuICAgICAgdGhpcy5faXNMZWZ0ID0gby54IDwgMDtcbiAgICB9XG4gIH1cbiAgY3JlYXRlQW5pbU5vZGUoKSB7XG4gICAgdmFyIGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgIGUuc2V0Q29udGVudFNpemUodGhpcy5fYmFzZVRpbGVOb2RlLmluZm8udGlsZU9iamVjdC5nZXRDYXJkQ29udGVudFNpemUoKSk7XG4gICAgZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG4gICAgZS5zZXRQb3NpdGlvbigwLCAwLCAwKTtcbiAgICBlLm5hbWUgPSBcImltZ0NhcmRcIjtcbiAgICB2YXIgdCA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUodGhpcy5fYmFzZVRpbGVOb2RlLmluZm8udGlsZU9iamVjdC5yZXNOYW1lLCB0aGlzLl9iYXNlVGlsZU5vZGUpLFxuICAgICAgbyA9IHQucGF0aCxcbiAgICAgIG4gPSB0LmJ1bmRsZU5hbWUsXG4gICAgICBpID0gdC5mcm9tQXRsYXM7XG4gICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUoZSwgbywgaSwgZmFsc2UsIG4pO1xuICAgIGUuc2NhbGUgPSAxIC8gdGhpcy5fYmFzZVRpbGVOb2RlLmFuaW1Ob2RlLnNjYWxlO1xuICAgIHJldHVybiBlO1xuICB9XG4gIG9uRW50ZXJTdGFydChlKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fbm9kZSkpIHtcbiAgICAgIHRoaXMucGxheUVudGVyU3RhcnRBbmkoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25FbnRlckVuZChlKTtcbiAgICB9XG4gIH1cbiAgcGxheUVudGVyU3RhcnRBbmkoZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLnVwZGF0ZUlzTGVmdCgpO1xuICAgIHZhciBvID0gdGhpcy5faXNMZWZ0ID8gXCJpbl9mcm9udF9sZWZ0XCIgOiBcImluX2Zyb250X3JpZ2h0XCI7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnRpbGVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS5zaGFkb3dOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS5wbGF5QW5pbU5vZGVBbmltYXRpb24oXCJzcGluZS9yb2xsY2FyZC9nYW1lcGxheV9mbGlwXCIsIG8sIGZhbHNlLCB0aGlzLmhhbmRsZUVudGVyQW5pbWF0aW9uQ29tcGxldGUuYmluZCh0aGlzLCBlKSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQuY3JlYXRlQW5pbU5vZGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLmVuc3VyZUxvY2tCZ1N0YXRlKHRoaXMuX2Jhc2VUaWxlTm9kZSk7XG4gIH1cbiAgaGFuZGxlRW50ZXJBbmltYXRpb25Db21wbGV0ZShlKSB7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnRpbGVOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnNoYWRvd05vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9jb21wb25lbnQuc2V0SXNCYWNrKGZhbHNlKTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUuc3RvcEFuaW1Ob2RlQW5pbWF0aW9uKCk7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnVwZGF0ZUltZ0NhcmQoKTtcbiAgICB0aGlzLm9uRW50ZXJFbmQoZSk7XG4gIH1cbiAgb25FeGl0U3RhcnQoZSkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX25vZGUpKSB7XG4gICAgICB0aGlzLnBsYXlFeGl0U3RhcnRBbmkoZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25FeGl0RW5kKGUpO1xuICAgIH1cbiAgfVxuICBwbGF5RXhpdFN0YXJ0QW5pKGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy51cGRhdGVJc0xlZnQoKTtcbiAgICB2YXIgbyA9IHRoaXMuX2lzTGVmdCA/IFwiaW5fYmFja19sZWZ0XCIgOiBcImluX2JhY2tfcmlnaHRcIjtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUudGlsZU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnNoYWRvd05vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnBsYXlBbmltTm9kZUFuaW1hdGlvbihcInNwaW5lL3JvbGxjYXJkL2dhbWVwbGF5X2ZsaXBcIiwgbywgZmFsc2UsIHRoaXMuaGFuZGxlRXhpdEFuaW1hdGlvbkNvbXBsZXRlLmJpbmQodGhpcywgZSksIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0LmNyZWF0ZUFuaW1Ob2RlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5lbnN1cmVMb2NrQmdTdGF0ZSh0aGlzLl9iYXNlVGlsZU5vZGUpO1xuICB9XG4gIGhhbmRsZUV4aXRBbmltYXRpb25Db21wbGV0ZShlKSB7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnRpbGVOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnNoYWRvd05vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9jb21wb25lbnQuc2V0SXNCYWNrKHRydWUpO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS51cGRhdGVJbWdDYXJkKCk7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnN0b3BBbmltTm9kZUFuaW1hdGlvbigpO1xuICAgIHRoaXMub25FeGl0RW5kKGUpO1xuICB9XG4gIG9uRW50ZXIodCkge1xuICAgIHN1cGVyLm9uRW50ZXIuY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUudGlsZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUuc2hhZG93Tm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2NvbXBvbmVudC5zZXRJc0JhY2soZmFsc2UpO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS5zdG9wQW5pbU5vZGVBbmltYXRpb24oKTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUudXBkYXRlSW1nQ2FyZCgpO1xuICB9XG4gIG9uRXhpdCh0KSB7XG4gICAgc3VwZXIub25FeGl0LmNhbGwodGhpcywgdCk7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnRpbGVOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnNoYWRvd05vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9jb21wb25lbnQuc2V0SXNCYWNrKHRydWUpO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS51cGRhdGVJbWdDYXJkKCk7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnN0b3BBbmltTm9kZUFuaW1hdGlvbigpO1xuICB9XG4gIGVuc3VyZUxvY2tCZ1N0YXRlKGUpIHtcbiAgICB2YXIgdDtcbiAgICBpZiAoY2MuaXNWYWxpZChlKSAmJiAobnVsbCA9PT0gKHQgPSBlLmluZm8pIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQudGlsZU9iamVjdCkpIHtcbiAgICAgIHZhciBvID0gZS5pbWdMb2NrQmc7XG4gICAgICBpZiAoY2MuaXNWYWxpZChvKSAmJiAhZS5pbmZvLnRpbGVPYmplY3QuaXNDYXJkTG9jaygpKSB7XG4gICAgICAgIG8uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIG8ub3BhY2l0eSA9IDI1NTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=