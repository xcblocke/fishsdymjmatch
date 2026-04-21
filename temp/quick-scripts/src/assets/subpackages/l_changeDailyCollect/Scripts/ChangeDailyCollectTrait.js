"use strict";
cc._RF.push(module, 'b4d71XMN4ZHwLSZejZNqC3a', 'ChangeDailyCollectTrait');
// subpackages/l_changeDailyCollect/Scripts/ChangeDailyCollectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ChangeDailyCollectTrait = /** @class */ (function (_super) {
    __extends(ChangeDailyCollectTrait, _super);
    function ChangeDailyCollectTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._changes = [];
        return _this;
    }
    ChangeDailyCollectTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._changes = this._traitData.changes;
    };
    ChangeDailyCollectTrait.prototype.onDailyMdl_itemUrl = function (t, e) {
        var r, n = t.args[0], o = null === (r = (this._changes || []).find(function (t) {
            return t.itemId === n;
        })) || void 0 === r ? void 0 : r.itemUrl;
        if (o) {
            e({
                returnType: TraitCallbackReturnType.jump,
                returnVal: "texture/badge/" + o
            });
        }
        else {
            e();
        }
    };
    ChangeDailyCollectTrait.traitKey = "ChangeDailyCollect";
    ChangeDailyCollectTrait = __decorate([
        mj.trait,
        mj.class("ChangeDailyCollectTrait")
    ], ChangeDailyCollectTrait);
    return ChangeDailyCollectTrait;
}(Trait_1.default));
exports.default = ChangeDailyCollectTrait;

cc._RF.pop();