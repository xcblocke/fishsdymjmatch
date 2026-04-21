
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ani/MoveNodeStateAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1507fTO9M9L8ZQ7vPRSST8K', 'MoveNodeStateAni');
// Scripts/ani/MoveNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveNodeStateAni = void 0;
var NodeStateAniBase_1 = require("../base/NodeStateAniBase");
var MoveNodeStateAni = /** @class */ (function (_super) {
    __extends(MoveNodeStateAni, _super);
    function MoveNodeStateAni(t, o) {
        var _this = _super.call(this, t, "move") || this;
        _this._duration = 0.1;
        _this._easing = "";
        _this._baseTileNode = null;
        _this._baseTileNode = o;
        return _this;
    }
    MoveNodeStateAni.prototype.getDuration = function () {
        return this._duration;
    };
    MoveNodeStateAni.prototype.onEnterStart = function (t) {
        var o = this;
        _super.prototype.onEnterStart.call(this, t);
        if (cc.isValid(this._node)) {
            this._currentTween && this._currentTween.stop();
            var n = this._baseTileNode.tileObject.getSelectOffsetX(), i = this._baseTileNode.tileObject.getPosition(), r = this._baseTileNode.layerNode.convertToWorldSpaceAR(i), a = cc.v3(r.x + n, r.y, 0), l = this.node.parent.convertToNodeSpaceAR(a);
            this._currentTween = cc.tween(this._node).to(this.getDuration(), {
                position: l
            }, this._easing ? {
                easing: this._easing
            } : {}).call(function () {
                o.onEnterEnd(t);
            }).start();
        }
        else
            this.onEnterEnd(t);
    };
    MoveNodeStateAni.prototype.onExitStart = function (t) {
        var o = this;
        _super.prototype.onExitStart.call(this, t);
        this._currentTween && this._currentTween.stop();
        var n = this._baseTileNode.tileObject.getPosition(), i = this._baseTileNode.layerNode.convertToWorldSpaceAR(n), r = this.node.parent.convertToNodeSpaceAR(i);
        this._currentTween = cc.tween(this._node).to(this.getDuration(), {
            position: r
        }, this._easing ? {
            easing: this._easing
        } : {}).call(function () {
            o.onExitEnd(t);
        }).start();
    };
    MoveNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        if (cc.isValid(this._node)) {
            var o = this._baseTileNode.tileObject.getPosition(), n = this._baseTileNode.layerNode.convertToWorldSpaceAR(o), i = this.node.parent.convertToNodeSpaceAR(n);
            this._node.position = i;
        }
    };
    MoveNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        var o = this._baseTileNode.tileObject.getPosition(), n = this._baseTileNode.layerNode.convertToWorldSpaceAR(o), i = this.node.parent.convertToNodeSpaceAR(n);
        this.node.position = i;
    };
    MoveNodeStateAni.prototype.applyImmediate = function (e) {
        if (cc.isValid(this._node)) {
            if (this._currentTween) {
                this._currentTween.stop();
                this._currentTween = void 0;
            }
            this._node.position = new cc.Vec3(this._node.position.x + e.x, this._node.position.y + e.y, this._node.position.z);
        }
    };
    __decorate([
        mj.traitEvent("MoveStateAni_duration")
    ], MoveNodeStateAni.prototype, "getDuration", null);
    return MoveNodeStateAni;
}(NodeStateAniBase_1.NodeStateAniBase));
exports.MoveNodeStateAni = MoveNodeStateAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2FuaS9Nb3ZlTm9kZVN0YXRlQW5pLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTREO0FBQzVEO0lBQXNDLG9DQUFnQjtJQUlwRCwwQkFBWSxDQUFDLEVBQUUsQ0FBQztRQUFoQixZQUNFLGtCQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsU0FFakI7UUFORCxlQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLGFBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUduQixLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQzs7SUFDekIsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELHVDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsaUJBQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsRUFDdEQsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUMvQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQ3pELENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFD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QyxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQ2pELENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsRUFDekQsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QseUNBQWMsR0FBZCxVQUFlLENBQUM7UUFDZCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQzthQUM3QjtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwSDtJQUNILENBQUM7SUFqRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO3VEQUd0QztJQWdFSCx1QkFBQztDQTNFRCxBQTJFQyxDQTNFcUMsbUNBQWdCLEdBMkVyRDtBQTNFWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb2RlU3RhdGVBbmlCYXNlIH0gZnJvbSAnLi4vYmFzZS9Ob2RlU3RhdGVBbmlCYXNlJztcbmV4cG9ydCBjbGFzcyBNb3ZlTm9kZVN0YXRlQW5pIGV4dGVuZHMgTm9kZVN0YXRlQW5pQmFzZSB7XG4gIF9kdXJhdGlvbiA9IDAuMTtcbiAgX2Vhc2luZyA9IFwiXCI7XG4gIF9iYXNlVGlsZU5vZGUgPSBudWxsO1xuICBjb25zdHJ1Y3Rvcih0LCBvKSB7XG4gICAgc3VwZXIodCwgXCJtb3ZlXCIpO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZSA9IG87XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJNb3ZlU3RhdGVBbmlfZHVyYXRpb25cIilcbiAgZ2V0RHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R1cmF0aW9uO1xuICB9XG4gIG9uRW50ZXJTdGFydCh0KSB7XG4gICAgdmFyIG8gPSB0aGlzO1xuICAgIHN1cGVyLm9uRW50ZXJTdGFydC5jYWxsKHRoaXMsIHQpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX25vZGUpKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gJiYgdGhpcy5fY3VycmVudFR3ZWVuLnN0b3AoKTtcbiAgICAgIHZhciBuID0gdGhpcy5fYmFzZVRpbGVOb2RlLnRpbGVPYmplY3QuZ2V0U2VsZWN0T2Zmc2V0WCgpLFxuICAgICAgICBpID0gdGhpcy5fYmFzZVRpbGVOb2RlLnRpbGVPYmplY3QuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgciA9IHRoaXMuX2Jhc2VUaWxlTm9kZS5sYXllck5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGkpLFxuICAgICAgICBhID0gY2MudjMoci54ICsgbiwgci55LCAwKSxcbiAgICAgICAgbCA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoYSk7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSBjYy50d2Vlbih0aGlzLl9ub2RlKS50byh0aGlzLmdldER1cmF0aW9uKCksIHtcbiAgICAgICAgcG9zaXRpb246IGxcbiAgICAgIH0sIHRoaXMuX2Vhc2luZyA/IHtcbiAgICAgICAgZWFzaW5nOiB0aGlzLl9lYXNpbmdcbiAgICAgIH0gOiB7fSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG8ub25FbnRlckVuZCh0KTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSBlbHNlIHRoaXMub25FbnRlckVuZCh0KTtcbiAgfVxuICBvbkV4aXRTdGFydCh0KSB7XG4gICAgdmFyIG8gPSB0aGlzO1xuICAgIHN1cGVyLm9uRXhpdFN0YXJ0LmNhbGwodGhpcywgdCk7XG4gICAgdGhpcy5fY3VycmVudFR3ZWVuICYmIHRoaXMuX2N1cnJlbnRUd2Vlbi5zdG9wKCk7XG4gICAgdmFyIG4gPSB0aGlzLl9iYXNlVGlsZU5vZGUudGlsZU9iamVjdC5nZXRQb3NpdGlvbigpLFxuICAgICAgaSA9IHRoaXMuX2Jhc2VUaWxlTm9kZS5sYXllck5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKG4pLFxuICAgICAgciA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoaSk7XG4gICAgdGhpcy5fY3VycmVudFR3ZWVuID0gY2MudHdlZW4odGhpcy5fbm9kZSkudG8odGhpcy5nZXREdXJhdGlvbigpLCB7XG4gICAgICBwb3NpdGlvbjogclxuICAgIH0sIHRoaXMuX2Vhc2luZyA/IHtcbiAgICAgIGVhc2luZzogdGhpcy5fZWFzaW5nXG4gICAgfSA6IHt9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIG8ub25FeGl0RW5kKHQpO1xuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgb25FbnRlcih0KSB7XG4gICAgc3VwZXIub25FbnRlci5jYWxsKHRoaXMsIHQpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX25vZGUpKSB7XG4gICAgICB2YXIgbyA9IHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlT2JqZWN0LmdldFBvc2l0aW9uKCksXG4gICAgICAgIG4gPSB0aGlzLl9iYXNlVGlsZU5vZGUubGF5ZXJOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihvKSxcbiAgICAgICAgaSA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobik7XG4gICAgICB0aGlzLl9ub2RlLnBvc2l0aW9uID0gaTtcbiAgICB9XG4gIH1cbiAgb25FeGl0KHQpIHtcbiAgICBzdXBlci5vbkV4aXQuY2FsbCh0aGlzLCB0KTtcbiAgICBpZiAodGhpcy5fY3VycmVudFR3ZWVuKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4uc3RvcCgpO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVuID0gdm9pZCAwO1xuICAgIH1cbiAgICB2YXIgbyA9IHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlT2JqZWN0LmdldFBvc2l0aW9uKCksXG4gICAgICBuID0gdGhpcy5fYmFzZVRpbGVOb2RlLmxheWVyTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobyksXG4gICAgICBpID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihuKTtcbiAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBpO1xuICB9XG4gIGFwcGx5SW1tZWRpYXRlKGUpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9ub2RlKSkge1xuICAgICAgaWYgKHRoaXMuX2N1cnJlbnRUd2Vlbikge1xuICAgICAgICB0aGlzLl9jdXJyZW50VHdlZW4uc3RvcCgpO1xuICAgICAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSB2b2lkIDA7XG4gICAgICB9XG4gICAgICB0aGlzLl9ub2RlLnBvc2l0aW9uID0gbmV3IGNjLlZlYzModGhpcy5fbm9kZS5wb3NpdGlvbi54ICsgZS54LCB0aGlzLl9ub2RlLnBvc2l0aW9uLnkgKyBlLnksIHRoaXMuX25vZGUucG9zaXRpb24ueik7XG4gICAgfVxuICB9XG59Il19