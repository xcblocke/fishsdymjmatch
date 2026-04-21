"use strict";
cc._RF.push(module, '447e8paA2tJ2onviyM2Y57m', 'ScrollRatingDialogTrait');
// subpackages/l_ratingDialog/Scripts/ScrollRatingDialogTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UIRatingDialog_1 = require("./UIRatingDialog");
var ScrollRatingDialogTrait = /** @class */ (function (_super) {
    __extends(ScrollRatingDialogTrait, _super);
    function ScrollRatingDialogTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._customPrefabUrl = "prefabs/ui/ratingDialog/UIRatingDialogScroll";
        return _this;
    }
    ScrollRatingDialogTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ScrollRatingDialogTrait.prototype.onUIRatingDlgCtrl_initRes = function (t, e) {
        UIRatingDialog_1.UIRatingDialog.prefabUrl = this._customPrefabUrl;
        e();
    };
    ScrollRatingDialogTrait.traitKey = "ScrollRatingDialog";
    ScrollRatingDialogTrait = __decorate([
        mj.trait,
        mj.class("ScrollRatingDialogTrait")
    ], ScrollRatingDialogTrait);
    return ScrollRatingDialogTrait;
}(Trait_1.default));
exports.default = ScrollRatingDialogTrait;

cc._RF.pop();