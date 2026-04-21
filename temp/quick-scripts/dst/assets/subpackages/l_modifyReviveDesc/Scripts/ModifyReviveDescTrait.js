
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_modifyReviveDesc/Scripts/ModifyReviveDescTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7ae0ODncZBwJ9qqxtN+AFr', 'ModifyReviveDescTrait');
// subpackages/l_modifyReviveDesc/Scripts/ModifyReviveDescTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NComponent_1 = require("../../../Scripts/component/I18NComponent");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ModifyReviveDescTrait = /** @class */ (function (_super) {
    __extends(ModifyReviveDescTrait, _super);
    function ModifyReviveDescTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ModifyReviveDescTrait.prototype, "descKey", {
        get: function () {
            return null != this._traitData.descKey ? this._traitData.descKey : "TileMatch_Revive_Details_2";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModifyReviveDescTrait.prototype, "useBtnKey", {
        get: function () {
            return null != this._traitData.useBtnKey ? this._traitData.useBtnKey : "TileMatch_Revive_Button_Yes_2";
        },
        enumerable: false,
        configurable: true
    });
    ModifyReviveDescTrait.prototype.onFailVw_onLoad = function (e, t) {
        var r = e.ins;
        r.node.getChildByName("content_node").getChildByName("desc").getComponent(I18NComponent_1.default).setTranslateId(this.descKey, "Use Shuffle to Revive!");
        r.node.getChildByName("content_node").getChildByName("btn_use").getChildByName("use").getComponent(I18NComponent_1.default).setTranslateId(this.useBtnKey, "Use");
        t();
    };
    ModifyReviveDescTrait.traitKey = "ModifyReviveDesc";
    ModifyReviveDescTrait = __decorate([
        mj.trait,
        mj.class("ModifyReviveDescTrait")
    ], ModifyReviveDescTrait);
    return ModifyReviveDescTrait;
}(Trait_1.default));
exports.default = ModifyReviveDescTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21vZGlmeVJldml2ZURlc2MvU2NyaXB0cy9Nb2RpZnlSZXZpdmVEZXNjVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUFxRTtBQUNyRSxnRUFBMkQ7QUFHM0Q7SUFBbUQseUNBQUs7SUFBeEQ7O0lBY0EsQ0FBQztJQVpDLHNCQUFJLDBDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDO1FBQ2xHLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksNENBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsK0JBQStCLENBQUM7UUFDekcsQ0FBQzs7O09BQUE7SUFDRCwrQ0FBZSxHQUFmLFVBQWdCLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2hKLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4SixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFaTSw4QkFBUSxHQUFHLGtCQUFrQixDQUFDO0lBRGxCLHFCQUFxQjtRQUZ6QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0FjekM7SUFBRCw0QkFBQztDQWRELEFBY0MsQ0Fka0QsZUFBSyxHQWN2RDtrQkFkb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEkxOE5Db21wb25lbnQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb21wb25lbnQvSTE4TkNvbXBvbmVudCc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJNb2RpZnlSZXZpdmVEZXNjVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGlmeVJldml2ZURlc2NUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJNb2RpZnlSZXZpdmVEZXNjXCI7XG4gIGdldCBkZXNjS2V5KCkge1xuICAgIHJldHVybiBudWxsICE9IHRoaXMuX3RyYWl0RGF0YS5kZXNjS2V5ID8gdGhpcy5fdHJhaXREYXRhLmRlc2NLZXkgOiBcIlRpbGVNYXRjaF9SZXZpdmVfRGV0YWlsc18yXCI7XG4gIH1cbiAgZ2V0IHVzZUJ0bktleSgpIHtcbiAgICByZXR1cm4gbnVsbCAhPSB0aGlzLl90cmFpdERhdGEudXNlQnRuS2V5ID8gdGhpcy5fdHJhaXREYXRhLnVzZUJ0bktleSA6IFwiVGlsZU1hdGNoX1Jldml2ZV9CdXR0b25fWWVzXzJcIjtcbiAgfVxuICBvbkZhaWxWd19vbkxvYWQoZSwgdCkge1xuICAgIHZhciByID0gZS5pbnM7XG4gICAgci5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29udGVudF9ub2RlXCIpLmdldENoaWxkQnlOYW1lKFwiZGVzY1wiKS5nZXRDb21wb25lbnQoSTE4TkNvbXBvbmVudCkuc2V0VHJhbnNsYXRlSWQodGhpcy5kZXNjS2V5LCBcIlVzZSBTaHVmZmxlIHRvIFJldml2ZSFcIik7XG4gICAgci5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29udGVudF9ub2RlXCIpLmdldENoaWxkQnlOYW1lKFwiYnRuX3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcInVzZVwiKS5nZXRDb21wb25lbnQoSTE4TkNvbXBvbmVudCkuc2V0VHJhbnNsYXRlSWQodGhpcy51c2VCdG5LZXksIFwiVXNlXCIpO1xuICAgIHQoKTtcbiAgfVxufSJdfQ==