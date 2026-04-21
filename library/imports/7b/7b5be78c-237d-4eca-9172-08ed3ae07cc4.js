"use strict";
cc._RF.push(module, '7b5beeMI31OypFyCO064HzE', 'InitCapRUTrait');
// subpackages/l_initCapRU/Scripts/InitCapRUTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var InitCapRUTrait = /** @class */ (function (_super) {
    __extends(InitCapRUTrait, _super);
    function InitCapRUTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InitCapRUTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    InitCapRUTrait.prototype.onExtNormLv_getInitCapRU = function (t, r) {
        var e;
        if (this.checkGameMode()) {
            var i = Math.floor(t.args[0] / 2), n = t.args[1], o = this._traitData.capabilityValues;
            if (null != o) {
                var a = -1 === o ? (null === (e = n.CapabilityDimensionMedian) || void 0 === e ? void 0 : e[i]) || n.MinDiffulty : o;
                r({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: a
                });
            }
            else
                r();
        }
        else
            r();
    };
    InitCapRUTrait.traitKey = "InitCapRU";
    InitCapRUTrait = __decorate([
        mj.trait,
        mj.class("InitCapRUTrait")
    ], InitCapRUTrait);
    return InitCapRUTrait;
}(ExtractTrait_1.default));
exports.default = InitCapRUTrait;

cc._RF.pop();