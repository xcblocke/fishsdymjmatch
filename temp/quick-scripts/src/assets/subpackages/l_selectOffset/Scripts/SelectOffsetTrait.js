"use strict";
cc._RF.push(module, '03922LAveBIUqRkDEDY/LKw', 'SelectOffsetTrait');
// subpackages/l_selectOffset/Scripts/SelectOffsetTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileObject_1 = require("../../../Scripts/objects/TileObject");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var SelectOffsetTrait = /** @class */ (function (_super) {
    __extends(SelectOffsetTrait, _super);
    function SelectOffsetTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selectOffsetX = 30;
        return _this;
    }
    SelectOffsetTrait.prototype.getSelectOffsetX = function () {
        return this._selectOffsetX;
    };
    SelectOffsetTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._selectOffsetX = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.selectOffsetX) && void 0 !== r ? r : 30;
    };
    SelectOffsetTrait.prototype.onLoginM_enterGame = function (t, e) {
        TileObject_1.TileObject.SELECT_OFFSET_X = this._selectOffsetX;
        e();
    };
    SelectOffsetTrait.traitKey = "SelectOffset";
    SelectOffsetTrait = __decorate([
        mj.trait,
        mj.class("SelectOffsetTrait")
    ], SelectOffsetTrait);
    return SelectOffsetTrait;
}(Trait_1.default));
exports.default = SelectOffsetTrait;

cc._RF.pop();