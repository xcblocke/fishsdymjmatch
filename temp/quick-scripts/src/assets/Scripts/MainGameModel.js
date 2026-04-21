"use strict";
cc._RF.push(module, '016c6gZCSZCE5RrA8XT+5Dw', 'MainGameModel');
// Scripts/MainGameModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("./framework/data/Model");
var MainGameModel = /** @class */ (function (_super) {
    __extends(MainGameModel, _super);
    function MainGameModel() {
        var _this = _super.call(this) || this;
        _this.localData.version = "1.0.0";
        return _this;
    }
    MainGameModel = __decorate([
        mj.class("MainGameModel")
    ], MainGameModel);
    return MainGameModel;
}(Model_1.default));
exports.default = MainGameModel;

cc._RF.pop();