
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_ratingDialog/Scripts/ScrollRatingDialogTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhdGluZ0RpYWxvZy9TY3JpcHRzL1Njcm9sbFJhdGluZ0RpYWxvZ1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsbURBQWtEO0FBR2xEO0lBQXFELDJDQUFLO0lBQTFEO1FBQUEscUVBVUM7UUFUQyxzQkFBZ0IsR0FBRyw4Q0FBOEMsQ0FBQzs7SUFTcEUsQ0FBQztJQVBDLHdDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCwyREFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsK0JBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQVBNLGdDQUFRLEdBQUcsb0JBQW9CLENBQUM7SUFGcEIsdUJBQXVCO1FBRjNDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztPQUNmLHVCQUF1QixDQVUzQztJQUFELDhCQUFDO0NBVkQsQUFVQyxDQVZvRCxlQUFLLEdBVXpEO2tCQVZvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVUlSYXRpbmdEaWFsb2cgfSBmcm9tICcuL1VJUmF0aW5nRGlhbG9nJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiU2Nyb2xsUmF0aW5nRGlhbG9nVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFJhdGluZ0RpYWxvZ1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY3VzdG9tUHJlZmFiVXJsID0gXCJwcmVmYWJzL3VpL3JhdGluZ0RpYWxvZy9VSVJhdGluZ0RpYWxvZ1Njcm9sbFwiO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlNjcm9sbFJhdGluZ0RpYWxvZ1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25VSVJhdGluZ0RsZ0N0cmxfaW5pdFJlcyh0LCBlKSB7XG4gICAgVUlSYXRpbmdEaWFsb2cucHJlZmFiVXJsID0gdGhpcy5fY3VzdG9tUHJlZmFiVXJsO1xuICAgIGUoKTtcbiAgfVxufSJdfQ==