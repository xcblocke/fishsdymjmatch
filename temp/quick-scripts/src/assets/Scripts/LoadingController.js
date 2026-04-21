"use strict";
cc._RF.push(module, 'b9a3fxBeB9Ll4BCStVkni0R', 'LoadingController');
// Scripts/LoadingController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var LoadingView_1 = require("./view/LoadingView");
var DGamePageShow_1 = require("./dot/DGamePageShow");
var TileNodePool_1 = require("./TileNodePool");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var LoadingController = /** @class */ (function (_super) {
    __extends(LoadingController, _super);
    function LoadingController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = LoadingView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this._model = null;
        return _this;
    }
    LoadingController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.rootView.zIndex = 10001;
    };
    LoadingController.prototype.initDependRes = function () {
        var e = CardUtil_1.default.getAtlasName();
        this.preloadResMap.SpriteAtlas = [e];
    };
    LoadingController.prototype.viewDidShow = function (t) {
        _super.prototype.viewDidShow.call(this, t);
        var o = CardUtil_1.default.getAtlasName();
        this.getRes(o, cc.SpriteAtlas).addRef();
        DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.LoadingPage);
        TileNodePool_1.TileNodePool.getInstance().preLoadNode();
    };
    LoadingController = __decorate([
        mj.class("LoadingController")
    ], LoadingController);
    return LoadingController;
}(ViewController_1.default));
exports.default = LoadingController;

cc._RF.pop();