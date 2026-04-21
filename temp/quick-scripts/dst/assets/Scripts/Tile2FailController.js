
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2FailController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8437IgeatCL48i7NvBPAuc', 'Tile2FailController');
// Scripts/Tile2FailController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var Tile2FailView_1 = require("./view/Tile2FailView");
var Tile2FailController = /** @class */ (function (_super) {
    __extends(Tile2FailController, _super);
    function Tile2FailController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = Tile2FailView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "mainRes";
        return _this;
    }
    Tile2FailController.prototype.getMessageListeners = function () {
        return {};
    };
    Tile2FailController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("show", this.args);
    };
    Tile2FailController.prototype.refreshForReuse = function (t) {
        _super.prototype.refreshForReuse.call(this, t);
        this.viewDoAction("show", t);
    };
    Tile2FailController = __decorate([
        mj.class("Tile2FailController")
    ], Tile2FailController);
    return Tile2FailController;
}(ViewController_1.default));
exports.default = Tile2FailController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyRmFpbENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdFQUFpRjtBQUNqRixzREFBaUQ7QUFFakQ7SUFBaUQsdUNBQWM7SUFBL0Q7UUFBQSxxRUFlQztRQWRDLGVBQVMsR0FBRyx1QkFBYSxDQUFDO1FBQzFCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBVSxHQUFHLFNBQVMsQ0FBQzs7SUFZekIsQ0FBQztJQVhDLGlEQUFtQixHQUFuQjtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELHlDQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsNkNBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsaUJBQU0sZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQWRrQixtQkFBbUI7UUFEdkMsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQWV2QztJQUFELDBCQUFDO0NBZkQsQUFlQyxDQWZnRCx3QkFBYyxHQWU5RDtrQkFmb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgVGlsZTJGYWlsVmlldyBmcm9tICcuL3ZpZXcvVGlsZTJGYWlsVmlldyc7XG5AbWouY2xhc3MoXCJUaWxlMkZhaWxDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMkZhaWxDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBUaWxlMkZhaWxWaWV3O1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLlBBTkVMO1xuICBidW5kbGVOYW1lID0gXCJtYWluUmVzXCI7XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHZpZXdEaWRMb2FkKCkge1xuICAgIHN1cGVyLnZpZXdEaWRMb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJzaG93XCIsIHRoaXMuYXJncyk7XG4gIH1cbiAgcmVmcmVzaEZvclJldXNlKHQpIHtcbiAgICBzdXBlci5yZWZyZXNoRm9yUmV1c2UuY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInNob3dcIiwgdCk7XG4gIH1cbn0iXX0=