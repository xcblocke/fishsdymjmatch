"use strict";
cc._RF.push(module, '9adb4eiyi5JHotM7Vm/GZpE', 'AddDuoxiaoOutTimeBehavior');
// subpackages/r_addDuoxiaoOutTime/Scripts/AddDuoxiaoOutTimeBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDuoxiaoOutTimeBehavior = void 0;
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var AddDuoxiaoOutTimeBehavior = /** @class */ (function (_super) {
    __extends(AddDuoxiaoOutTimeBehavior, _super);
    function AddDuoxiaoOutTimeBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddDuoxiaoOutTimeBehavior.prototype.start = function (e) {
        var t = e.data, i = null == t ? void 0 : t.tileId;
        if (i) {
            this._rebuildTileNode(i);
            this._playFlashEffect(i);
        }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    AddDuoxiaoOutTimeBehavior.prototype._rebuildTileNode = function (e) {
        var t, i = null === (t = this.context.getTileNodeMap()) || void 0 === t ? void 0 : t.get(e);
        if (i) {
            var o = null == i ? void 0 : i.tileNode;
            if (o && cc.isValid(o)) {
                var a = o.getChildByName("DuoxiaoCardFlagNode");
                if (a) {
                    a.active = true;
                    return;
                }
            }
            var n = this.context.getTileNodeManager();
            n && n.rebuildChangeTypeTileNodes([i]);
        }
    };
    AddDuoxiaoOutTimeBehavior.prototype._playFlashEffect = function (e) {
        var t, i = null === (t = this.context.getTileNodeMap()) || void 0 === t ? void 0 : t.get(e), o = null == i ? void 0 : i.tileNode;
        if (o && cc.isValid(o)) {
            var a = BaseSpine_1.default.create("spine/gameplay_effect_3", "in", 1, function () {
                cc.isValid(null == a ? void 0 : a.node) && a.node.destroy();
            }, false, "r_addDuoxiaoOutTime");
            if (null == a ? void 0 : a.node) {
                a.node.parent = o;
                a.node.setPosition(-5, 7);
            }
        }
    };
    return AddDuoxiaoOutTimeBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.AddDuoxiaoOutTimeBehavior = AddDuoxiaoOutTimeBehavior;

cc._RF.pop();