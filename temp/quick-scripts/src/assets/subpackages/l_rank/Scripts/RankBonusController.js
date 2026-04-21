"use strict";
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