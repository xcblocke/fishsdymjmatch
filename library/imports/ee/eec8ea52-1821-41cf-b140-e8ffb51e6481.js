"use strict";
cc._RF.push(module, 'eec8epSGCFBz7FA6P+1HmSB', 'BombIdleSpineTrait');
// subpackages/l_bombidlespine/Scripts/BombIdleSpineTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BombIdleSpineTrait = /** @class */ (function (_super) {
    __extends(BombIdleSpineTrait, _super);
    function BombIdleSpineTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BombIdleSpineTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BombIdleSpineTrait.prototype.getAnimType = function () {
        return this._traitData.animType || 1;
    };
    BombIdleSpineTrait.prototype.onBombCardNode_crtImgCard = function (e, t) {
        var r = e.ins, n = e.beforReturnVal;
        n.active = false;
        var i = n.getChildByName("BombIdleSpine");
        if (!i || !cc.isValid(i)) {
            (i = new cc.Node()).name = "BombIdleSpine";
            n.parent.addChild(i);
            i.zIndex = n.zIndex;
        }
        i.scale = 1 * r.info.tileObject.layoutScale;
        if (1 == this.getAnimType()) {
            var o = "spine/bomb1/gameplay_Lightningcard", a = "l_bombidlespine";
            BaseSpine_1.default.refreshWithNode(i, o, a).setAnimation("in", -1, null, false);
        }
        else {
            o = "spine/bomb2/gameplay_Lightningcard", a = "l_bombidlespine";
            BaseSpine_1.default.refreshWithNode(i, o, a).setAnimation("in", -1, null, false);
        }
        t({
            returnType: TraitCallbackReturnType.jump
        });
    };
    BombIdleSpineTrait.traitKey = "BombIdleSpine";
    BombIdleSpineTrait = __decorate([
        mj.trait,
        mj.class("BombIdleSpineTrait")
    ], BombIdleSpineTrait);
    return BombIdleSpineTrait;
}(Trait_1.default));
exports.default = BombIdleSpineTrait;

cc._RF.pop();