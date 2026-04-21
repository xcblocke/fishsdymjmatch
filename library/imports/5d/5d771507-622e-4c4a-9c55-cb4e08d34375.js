"use strict";
cc._RF.push(module, '5d771UHYi5MSpxVy04I00N1', 'FailTrait');
// subpackages/l_fail/Scripts/FailTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var FailTrait = /** @class */ (function (_super) {
    __extends(FailTrait, _super);
    function FailTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FailTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FailTrait.prototype.onFailBhv_start = function (e, t) {
        var i, o = e.ins, a = null === (i = e.args[0].data) || void 0 === i ? void 0 : i.isGM;
        if (!o || !o.context || a || o.context.getTileMapObject().checkIsDead([])) {
            var n = e.args[0];
            if (n && n.data) {
                var r = n.data.shuffleNum || 0;
                this.showFailView(r);
                t();
            }
            else
                t();
        }
        else
            t();
    };
    FailTrait.prototype.showFailView = function (e) {
        ControllerManager_1.default.getInstance().pushViewByController("FailController", {
            shuffleNum: e
        });
    };
    FailTrait.traitKey = "Fail";
    FailTrait = __decorate([
        mj.trait,
        mj.class("FailTrait")
    ], FailTrait);
    return FailTrait;
}(Trait_1.default));
exports.default = FailTrait;

cc._RF.pop();