"use strict";
cc._RF.push(module, '12cddAwV0hJIZ6X74N2aXT4', 'TravelMapController');
// Scripts/TravelMapController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var TravelMapView_1 = require("./view/TravelMapView");
var TravelGameModel_1 = require("./gamePlay/travel/model/TravelGameModel");
var TravelMapController = /** @class */ (function (_super) {
    __extends(TravelMapController, _super);
    function TravelMapController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = TravelMapView_1.default;
        _this.viewMode = ViewController_1.viewMode.SCENE;
        _this.bundleName = "mainRes";
        return _this;
    }
    TravelMapController.prototype.init = function (t) {
        this.initConfig(t);
        _super.prototype.init.call(this, t);
    };
    TravelMapController.prototype.initConfig = function () {
        var e = TravelGameModel_1.default.getInstance().getCurJourney(), t = TravelGameModel_1.default.getInstance().getLevelConfig(e);
        if (t) {
            var o = __read(this.getMapPath(t.mapRes), 2), n = o[0], i = o[1];
            TravelMapView_1.default.prefabUrl = i;
            TravelMapView_1.default.bundleName = n;
            this.bundleName = n;
        }
    };
    TravelMapController.prototype.getMapPath = function (e) {
        var t = e.split(":");
        return 2 === t.length ? [t[0], "prefabs/" + t[1]] : ["mainRes", "prefabs/journeyMap/" + t[0]];
    };
    TravelMapController.prototype.getMessageListeners = function () {
        return {};
    };
    TravelMapController.prototype.initDependRes = function () {
        this.addPreloadRes("Prefab", "mainRes:prefabs/journey/JourneyReward");
    };
    TravelMapController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("viewDidLoad", this.args);
    };
    TravelMapController.prototype.viewDidShow = function (t) {
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("viewDidShow", this.args);
    };
    __decorate([
        mj.traitEvent("TLMapCtl_initRes")
    ], TravelMapController.prototype, "initDependRes", null);
    TravelMapController = __decorate([
        mj.class("TravelMapController")
    ], TravelMapController);
    return TravelMapController;
}(ViewController_1.default));
exports.default = TravelMapController;

cc._RF.pop();