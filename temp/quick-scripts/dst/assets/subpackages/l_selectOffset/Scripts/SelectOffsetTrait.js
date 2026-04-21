
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_selectOffset/Scripts/SelectOffsetTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NlbGVjdE9mZnNldC9TY3JpcHRzL1NlbGVjdE9mZnNldFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBaUU7QUFDakUsZ0VBQTJEO0FBRzNEO0lBQStDLHFDQUFLO0lBQXBEO1FBQUEscUVBZUM7UUFkQyxvQkFBYyxHQUFHLEVBQUUsQ0FBQzs7SUFjdEIsQ0FBQztJQVpDLDRDQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBQ0Qsa0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMxSSxDQUFDO0lBQ0QsOENBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLHVCQUFVLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDakQsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBWk0sMEJBQVEsR0FBRyxjQUFjLENBQUM7SUFGZCxpQkFBaUI7UUFGckMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBZXJDO0lBQUQsd0JBQUM7Q0FmRCxBQWVDLENBZjhDLGVBQUssR0FlbkQ7a0JBZm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbGVPYmplY3QgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL29iamVjdHMvVGlsZU9iamVjdCc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJTZWxlY3RPZmZzZXRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0T2Zmc2V0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9zZWxlY3RPZmZzZXRYID0gMzA7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiU2VsZWN0T2Zmc2V0XCI7XG4gIGdldFNlbGVjdE9mZnNldFgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdE9mZnNldFg7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3NlbGVjdE9mZnNldFggPSBudWxsICE9PSAociA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnNlbGVjdE9mZnNldFgpICYmIHZvaWQgMCAhPT0gciA/IHIgOiAzMDtcbiAgfVxuICBvbkxvZ2luTV9lbnRlckdhbWUodCwgZSkge1xuICAgIFRpbGVPYmplY3QuU0VMRUNUX09GRlNFVF9YID0gdGhpcy5fc2VsZWN0T2Zmc2V0WDtcbiAgICBlKCk7XG4gIH1cbn0iXX0=