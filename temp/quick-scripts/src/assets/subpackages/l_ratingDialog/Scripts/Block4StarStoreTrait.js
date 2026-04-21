"use strict";
cc._RF.push(module, 'c1dd98yV4pA9KppwO3sIKRf', 'Block4StarStoreTrait');
// subpackages/l_ratingDialog/Scripts/Block4StarStoreTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Block4StarStoreTrait = /** @class */ (function (_super) {
    __extends(Block4StarStoreTrait, _super);
    function Block4StarStoreTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Block4StarStoreTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Block4StarStoreTrait.prototype.onRatingDlg_getHighStar = function (t, e) {
        if (this._traitData.feedback4Star) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: 5,
                isBreak: true
            });
        }
        else {
            e();
        }
    };
    Block4StarStoreTrait.prototype.onRatingDlg_GotoStore = function (t, e) {
        var o, i = null === (o = null == t ? void 0 : t.args) || void 0 === o ? void 0 : o[0];
        if (i && i <= 4) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    Block4StarStoreTrait.traitKey = "Block4StarStore";
    Block4StarStoreTrait = __decorate([
        mj.trait,
        mj.class("Block4StarStoreTrait")
    ], Block4StarStoreTrait);
    return Block4StarStoreTrait;
}(Trait_1.default));
exports.default = Block4StarStoreTrait;

cc._RF.pop();