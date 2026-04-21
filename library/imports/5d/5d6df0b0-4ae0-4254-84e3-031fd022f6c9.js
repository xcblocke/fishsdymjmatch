"use strict";
cc._RF.push(module, '5d6dfCwSuBCVITjAx/QIvbJ', 'FlowerColdStartChangeTrait');
// subpackages/l_flowerCardSeries/Scripts/FlowerColdStartChangeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FlowerColdStartChangeTrait = /** @class */ (function (_super) {
    __extends(FlowerColdStartChangeTrait, _super);
    function FlowerColdStartChangeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        _this._cdMilliseconds = 0;
        _this._shouldChange = false;
        return _this;
    }
    FlowerColdStartChangeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
        "number" == typeof this._config.cdHours && this._config.cdHours > 0 && (this._cdMilliseconds = 3600000 * this._config.cdHours);
        this.localData.lastChangeTime || (this.localData.lastChangeTime = Date.now());
        this.checkCDTime();
    };
    FlowerColdStartChangeTrait.prototype.checkCDTime = function () {
        var e = Date.now(), t = this.localData.lastChangeTime;
        if (e - t >= this._cdMilliseconds) {
            this._shouldChange = true;
            this._cdMilliseconds;
        }
        else {
            this._shouldChange = false;
            ((this._cdMilliseconds - (e - t)) / 3600000).toFixed(1);
        }
        this.localData.lastChangeTime = e;
    };
    FlowerColdStartChangeTrait.prototype.onFlowerCS_shouldKeep = function (e, t) {
        if (this._shouldChange) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
        else {
            t();
        }
    };
    FlowerColdStartChangeTrait.traitKey = "FlowerColdStartChange";
    FlowerColdStartChangeTrait = __decorate([
        mj.trait,
        mj.class("FlowerColdStartChangeTrait")
    ], FlowerColdStartChangeTrait);
    return FlowerColdStartChangeTrait;
}(Trait_1.default));
exports.default = FlowerColdStartChangeTrait;

cc._RF.pop();