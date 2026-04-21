"use strict";
cc._RF.push(module, '4e51acdsbZA8qvXFee3gLvu', 'BadgeTrait');
// subpackages/l_badge/Scripts/BadgeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var HallBadgeBtn_1 = require("./HallBadgeBtn");
var BadgeTrait = /** @class */ (function (_super) {
    __extends(BadgeTrait, _super);
    function BadgeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BadgeTrait_1 = BadgeTrait;
    BadgeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BadgeTrait.prototype.onHallVw_initBtns = function (t, e) {
        var r;
        this.createHallButton(null === (r = t.ins) || void 0 === r ? void 0 : r.node);
        e();
    };
    BadgeTrait.prototype.onHallVw_updateUI = function (t, e) {
        e();
    };
    BadgeTrait.prototype.createHallButton = function (t) {
        cc.isValid(t) && HallBadgeBtn_1.default.createUI().then(function (e) {
            cc.isValid(e) && cc.isValid(t) && t.addChild(e);
        }).catch(function (t) {
            console.error("[" + BadgeTrait_1.traitKey + "] 游戏内创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallBadgeBtn按钮加载失败"));
        });
    };
    var BadgeTrait_1;
    BadgeTrait.traitKey = "Badge";
    BadgeTrait = BadgeTrait_1 = __decorate([
        mj.trait,
        mj.class("BadgeTrait")
    ], BadgeTrait);
    return BadgeTrait;
}(Trait_1.default));
exports.default = BadgeTrait;

cc._RF.pop();