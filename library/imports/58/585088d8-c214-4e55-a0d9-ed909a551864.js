"use strict";
cc._RF.push(module, '58508jYwhROVaDZ7ZCaVRhk', 'RankSynListScrollTrait');
// subpackages/l_rankSynXingyun/Scripts/RankSynListScrollTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RankSynListScrollTrait = /** @class */ (function (_super) {
    __extends(RankSynListScrollTrait, _super);
    function RankSynListScrollTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isStopScroll = true;
        return _this;
    }
    Object.defineProperty(RankSynListScrollTrait.prototype, "minMemory", {
        get: function () {
            return null == this._traitData.minMemory ? 5 : this._traitData.minMemory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankSynListScrollTrait.prototype, "maxMemory", {
        get: function () {
            return null == this._traitData.maxMemory ? 11 : this._traitData.maxMemory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankSynListScrollTrait.prototype, "isCheckMemory", {
        get: function () {
            return null != this._traitData.checkMemory && this._traitData.checkMemory;
        },
        enumerable: false,
        configurable: true
    });
    RankSynListScrollTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._checkDeviceMemory();
    };
    RankSynListScrollTrait.prototype.onRankVw_listScroll = function (t, e) {
        if (!this.isCheckMemory || this.isStopScroll) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    RankSynListScrollTrait.prototype._checkDeviceMemory = function () {
        try {
            var t = mj.sdk.getDeviceInfo(), e = null == t ? void 0 : t.all_memory;
            if (e) {
                var r = Number(e) / 1024;
                if (this.minMemory <= r && r <= this.maxMemory) {
                    this.isStopScroll = true;
                }
                else {
                    this.isStopScroll = false;
                }
            }
        }
        catch (t) { }
    };
    RankSynListScrollTrait.traitKey = "RankSynListScroll";
    RankSynListScrollTrait = __decorate([
        mj.trait,
        mj.class("RankSynListScrollTrait")
    ], RankSynListScrollTrait);
    return RankSynListScrollTrait;
}(Trait_1.default));
exports.default = RankSynListScrollTrait;

cc._RF.pop();