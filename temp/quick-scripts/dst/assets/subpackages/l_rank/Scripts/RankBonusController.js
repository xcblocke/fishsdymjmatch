
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/RankBonusController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3baf65QsBhBmLSzXD51G0Zs', 'RankBonusController');
// subpackages/l_rank/Scripts/RankBonusController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var RankModel_1 = require("./RankModel");
var RankBonusView_1 = require("./RankBonusView");
var RankBonusController = /** @class */ (function (_super) {
    __extends(RankBonusController, _super);
    function RankBonusController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = RankBonusView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "mainRes";
        _this._model = null;
        return _this;
    }
    Object.defineProperty(RankBonusController.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    RankBonusController.prototype.initDependRes = function () {
        this.preloadResMap = {
            Prefab: ["prefabs/rank/RankBonusView"]
        };
    };
    RankBonusController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this._model = RankModel_1.default.getInstance();
    };
    RankBonusController.prototype.viewDidShow = function (e) {
        e = e || this.args;
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("show");
    };
    RankBonusController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
    };
    __decorate([
        mj.traitEvent("RankBonusCtrl_initRes")
    ], RankBonusController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("RankBonusCtrl_viewShow")
    ], RankBonusController.prototype, "viewDidShow", null);
    RankBonusController = __decorate([
        mj.class("RankBonusController")
    ], RankBonusController);
    return RankBonusController;
}(ViewController_1.default));
exports.default = RankBonusController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9SYW5rQm9udXNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFBZ0c7QUFDaEcseUNBQW9DO0FBQ3BDLGlEQUE0QztBQUU1QztJQUFpRCx1Q0FBYztJQUEvRDtRQUFBLHFFQTJCQztRQTFCQyxlQUFTLEdBQUcsdUJBQWEsQ0FBQztRQUMxQixjQUFRLEdBQUcseUJBQVEsQ0FBQyxLQUFLLENBQUM7UUFDMUIsZ0JBQVUsR0FBRyxTQUFTLENBQUM7UUFDdkIsWUFBTSxHQUFHLElBQUksQ0FBQzs7SUF1QmhCLENBQUM7SUF0QkMsc0JBQUksc0NBQUs7YUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVELDJDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ25CLE1BQU0sRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQ3ZDLENBQUM7SUFDSixDQUFDO0lBQ0QseUNBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCx5Q0FBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBakJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzs0REFLdEM7SUFNRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7MERBS3ZDO0lBdkJrQixtQkFBbUI7UUFEdkMsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQTJCdkM7SUFBRCwwQkFBQztDQTNCRCxBQTJCQyxDQTNCZ0Qsd0JBQWMsR0EyQjlEO2tCQTNCb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgUmFua01vZGVsIGZyb20gJy4vUmFua01vZGVsJztcbmltcG9ydCBSYW5rQm9udXNWaWV3IGZyb20gJy4vUmFua0JvbnVzVmlldyc7XG5AbWouY2xhc3MoXCJSYW5rQm9udXNDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rQm9udXNDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBSYW5rQm9udXNWaWV3O1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLlBBTkVMO1xuICBidW5kbGVOYW1lID0gXCJtYWluUmVzXCI7XG4gIF9tb2RlbCA9IG51bGw7XG4gIGdldCBtb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWw7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQm9udXNDdHJsX2luaXRSZXNcIilcbiAgaW5pdERlcGVuZFJlcygpIHtcbiAgICB0aGlzLnByZWxvYWRSZXNNYXAgPSB7XG4gICAgICBQcmVmYWI6IFtcInByZWZhYnMvcmFuay9SYW5rQm9udXNWaWV3XCJdXG4gICAgfTtcbiAgfVxuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX21vZGVsID0gUmFua01vZGVsLmdldEluc3RhbmNlKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQm9udXNDdHJsX3ZpZXdTaG93XCIpXG4gIHZpZXdEaWRTaG93KGUpIHtcbiAgICBlID0gZSB8fCB0aGlzLmFyZ3M7XG4gICAgc3VwZXIudmlld0RpZFNob3cuY2FsbCh0aGlzLCBlKTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInNob3dcIik7XG4gIH1cbiAgdmlld0RpZEhpZGUoKSB7XG4gICAgc3VwZXIudmlld0RpZEhpZGUuY2FsbCh0aGlzKTtcbiAgfVxufSJdfQ==