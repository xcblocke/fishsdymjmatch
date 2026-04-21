
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ani/FlipNodeStateAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2FuaS9GbGlwTm9kZVN0YXRlQW5pLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQXdEO0FBQ3hELHNEQUFpRDtBQUNqRCw2REFBNEQ7QUFDNUQ7SUFBc0Msb0NBQWdCO0lBSXBELDBCQUFZLENBQUMsRUFBRSxDQUFDO1FBQWhCLFlBQ0Usa0JBQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxTQUVqQjtRQU5ELGFBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFHbkIsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7O0lBQ3pCLENBQUM7SUFDRCx1Q0FBWSxHQUFaO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFBSztZQUNoSixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFDakQsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsRUFDaEUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFDRCx5Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENB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QUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUNELDRDQUFpQixHQUFqQixVQUFrQixDQUFDO1FBQ2pCLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDcEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNwQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDcEQsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2FBQ2pCO1NBQ0Y7SUFDSCxDQUFDO0lBN0VEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQzs2REFXbEM7SUFjRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7NERBV2pDO0lBNENILHVCQUFDO0NBdEhELEFBc0hDLENBdEhxQyxtQ0FBZ0IsR0FzSHJEO0FBdEhZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi4vZ2FtZVBsYXkvdXNlci9DYXJkVXRpbCc7XG5pbXBvcnQgeyBOb2RlU3RhdGVBbmlCYXNlIH0gZnJvbSAnLi4vYmFzZS9Ob2RlU3RhdGVBbmlCYXNlJztcbmV4cG9ydCBjbGFzcyBGbGlwTm9kZVN0YXRlQW5pIGV4dGVuZHMgTm9kZVN0YXRlQW5pQmFzZSB7XG4gIF9lYXNpbmcgPSBcIlwiO1xuICBfaXNMZWZ0ID0gdHJ1ZTtcbiAgX2Jhc2VUaWxlTm9kZSA9IG51bGw7XG4gIGNvbnN0cnVjdG9yKHQsIG8pIHtcbiAgICBzdXBlcih0LCBcImZsaXBcIik7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlID0gbztcbiAgfVxuICB1cGRhdGVJc0xlZnQoKSB7XG4gICAgaWYgKHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlT2JqZWN0LmlzSGFzTGVmdCgpKSB0aGlzLl9pc0xlZnQgPSBmYWxzZTtlbHNlIGlmICh0aGlzLl9iYXNlVGlsZU5vZGUudGlsZU9iamVjdC5pc0hhc1JpZ2h0KCkpIHRoaXMuX2lzTGVmdCA9IHRydWU7ZWxzZSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlT2JqZWN0LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHQgPSB0aGlzLl9iYXNlVGlsZU5vZGUubGF5ZXJOb2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoZSksXG4gICAgICAgIG8gPSBjYy5maW5kKFwiQ2FudmFzXCIpLmNvbnZlcnRUb05vZGVTcGFjZUFSKHQpO1xuICAgICAgdGhpcy5faXNMZWZ0ID0gby54IDwgMDtcbiAgICB9XG4gIH1cbiAgY3JlYXRlQW5pbU5vZGUoKSB7XG4gICAgdmFyIGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgIGUuc2V0Q29udGVudFNpemUodGhpcy5fYmFzZVRpbGVOb2RlLmluZm8udGlsZU9iamVjdC5nZXRDYXJkQ29udGVudFNpemUoKSk7XG4gICAgZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG4gICAgZS5zZXRQb3NpdGlvbigwLCAwLCAwKTtcbiAgICBlLm5hbWUgPSBcImltZ0NhcmRcIjtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUuY29udGV4dDtcbiAgICB2YXIgdCA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUodGhpcy5fYmFzZVRpbGVOb2RlLmluZm8udGlsZU9iamVjdC5yZXNOYW1lLCB0aGlzLl9iYXNlVGlsZU5vZGUpLFxuICAgICAgbyA9IHQucGF0aCxcbiAgICAgIG4gPSB0LmJ1bmRsZU5hbWUsXG4gICAgICBpID0gdC5mcm9tQXRsYXM7XG4gICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUoZSwgbywgaSwgZmFsc2UsIG4pO1xuICAgIGUuc2NhbGUgPSAxIC8gdGhpcy5fYmFzZVRpbGVOb2RlLmFuaW1Ob2RlLnNjYWxlO1xuICAgIHJldHVybiBlO1xuICB9XG4gIG9uRW50ZXJTdGFydCh0KSB7XG4gICAgc3VwZXIub25FbnRlclN0YXJ0LmNhbGwodGhpcywgdCk7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fbm9kZSkpIHtcbiAgICAgIHRoaXMucGxheUVudGVyU3RhcnRBbmkodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25FbnRlckVuZCh0KTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGbGlwQW5pX3BsYXlFbnRlclwiKVxuICBwbGF5RW50ZXJTdGFydEFuaShlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMudXBkYXRlSXNMZWZ0KCk7XG4gICAgdmFyIG8gPSB0aGlzLl9pc0xlZnQgPyBcImluX2Zyb250X2xlZnRcIiA6IFwiaW5fZnJvbnRfcmlnaHRcIjtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUudGlsZU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnNoYWRvd05vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnBsYXlBbmltTm9kZUFuaW1hdGlvbihcInNwaW5lL3JvbGxjYXJkL2dhbWVwbGF5X2ZsaXBcIiwgbywgZmFsc2UsIHRoaXMuaGFuZGxlRW50ZXJBbmltYXRpb25Db21wbGV0ZS5iaW5kKHRoaXMsIGUpLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5jcmVhdGVBbmltTm9kZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuZW5zdXJlTG9ja0JnU3RhdGUodGhpcy5fYmFzZVRpbGVOb2RlKTtcbiAgfVxuICBoYW5kbGVFbnRlckFuaW1hdGlvbkNvbXBsZXRlKGUpIHtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUudGlsZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUuc2hhZG93Tm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS5zZXRJc0JhY2soZmFsc2UpO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS5zdG9wQW5pbU5vZGVBbmltYXRpb24oKTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUudXBkYXRlSW1nQ2FyZCgpO1xuICAgIHRoaXMub25FbnRlckVuZChlKTtcbiAgfVxuICBvbkV4aXRTdGFydCh0KSB7XG4gICAgc3VwZXIub25FeGl0U3RhcnQuY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLnBsYXlFeGl0U3RhcnRBbmkodCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGbGlwQW5pX3BsYXlFeGl0XCIpXG4gIHBsYXlFeGl0U3RhcnRBbmkoZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLnVwZGF0ZUlzTGVmdCgpO1xuICAgIHZhciBvID0gdGhpcy5faXNMZWZ0ID8gXCJpbl9iYWNrX2xlZnRcIiA6IFwiaW5fYmFja19yaWdodFwiO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUuc2hhZG93Tm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUucGxheUFuaW1Ob2RlQW5pbWF0aW9uKFwic3BpbmUvcm9sbGNhcmQvZ2FtZXBsYXlfZmxpcFwiLCBvLCBmYWxzZSwgdGhpcy5oYW5kbGVFeGl0QW5pbWF0aW9uQ29tcGxldGUuYmluZCh0aGlzLCBlKSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQuY3JlYXRlQW5pbU5vZGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLmVuc3VyZUxvY2tCZ1N0YXRlKHRoaXMuX2Jhc2VUaWxlTm9kZSk7XG4gIH1cbiAgaGFuZGxlRXhpdEFuaW1hdGlvbkNvbXBsZXRlKGUpIHtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUudGlsZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUuc2hhZG93Tm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS5zZXRJc0JhY2sodHJ1ZSk7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnVwZGF0ZUltZ0NhcmQoKTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUuc3RvcEFuaW1Ob2RlQW5pbWF0aW9uKCk7XG4gICAgdGhpcy5vbkV4aXRFbmQoZSk7XG4gIH1cbiAgb25FbnRlcih0KSB7XG4gICAgc3VwZXIub25FbnRlci5jYWxsKHRoaXMsIHQpO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS5zaGFkb3dOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnNldElzQmFjayhmYWxzZSk7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnN0b3BBbmltTm9kZUFuaW1hdGlvbigpO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS51cGRhdGVJbWdDYXJkKCk7XG4gIH1cbiAgb25FeGl0KHQpIHtcbiAgICBzdXBlci5vbkV4aXQuY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUudGlsZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUuc2hhZG93Tm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS5zZXRJc0JhY2sodHJ1ZSk7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnVwZGF0ZUltZ0NhcmQoKTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUuc3RvcEFuaW1Ob2RlQW5pbWF0aW9uKCk7XG4gIH1cbiAgYXBwbHlJbW1lZGlhdGUoKSB7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9ub2RlKTtcbiAgfVxuICByZXNldCgpIHtcbiAgICBpZiAodGhpcy5fb25FbnRlcmVkQ2FsbEJhY2spIHtcbiAgICAgIHRoaXMuX29uRW50ZXJlZENhbGxCYWNrKCk7XG4gICAgICB0aGlzLl9vbkVudGVyZWRDYWxsQmFjayA9IHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgZW5zdXJlTG9ja0JnU3RhdGUoZSkge1xuICAgIHZhciB0O1xuICAgIGlmIChjYy5pc1ZhbGlkKGUpICYmIChudWxsID09PSAodCA9IGUuaW5mbykgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC50aWxlT2JqZWN0KSkge1xuICAgICAgdmFyIG8gPSBlLmltZ0xvY2tCZztcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG8pICYmICFlLmluZm8udGlsZU9iamVjdC5pc0NhcmRMb2NrKCkpIHtcbiAgICAgICAgby5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgby5vcGFjaXR5ID0gMjU1O1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ==