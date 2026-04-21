"use strict";
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