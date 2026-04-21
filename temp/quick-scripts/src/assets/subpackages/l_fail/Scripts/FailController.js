"use strict";
cc._RF.push(module, 'b6b03+0VP9MFquZL+Kj50cr', 'FailController');
// subpackages/l_fail/Scripts/FailController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var FailView_1 = require("./FailView");
var FailController = /** @class */ (function (_super) {
    __extends(FailController, _super);
    function FailController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = FailView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "mainRes";
        _this.preShuffleData = null;
        return _this;
    }
    FailController.prototype.getMessageListeners = function () {
        return {};
    };
    FailController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        var t = mj.getClassByName("FailPreviewTrait");
        if (t && t.getInstance() && true === t.getInstance().eventEnabled) {
            this.preShuffleData = t.getPreShuffleData();
            this.preShuffleData;
        }
        this.viewDoAction("show", Object.assign(Object.assign({}, this.args), {
            preShuffleData: this.preShuffleData
        }));
    };
    FailController.prototype.refreshForReuse = function (t) {
        _super.prototype.refreshForReuse.call(this, t);
        var i = mj.getClassByName("FailPreviewTrait");
        i && i.getInstance() && true === i.getInstance().eventEnabled && (this.preShuffleData = i.getPreShuffleData());
        this.viewDoAction("show", Object.assign(Object.assign({}, t), {
            preShuffleData: this.preShuffleData
        }));
    };
    FailController.prototype.close = function () {
        _super.prototype.close.call(this);
        var t = mj.getClassByName("FailPreviewTrait");
        t && t.getInstance() && true === t.getInstance().eventEnabled && t.clearPreShuffleData();
    };
    FailController = __decorate([
        mj.class("FailController")
    ], FailController);
    return FailController;
}(ViewController_1.default));
exports.default = FailController;

cc._RF.pop();