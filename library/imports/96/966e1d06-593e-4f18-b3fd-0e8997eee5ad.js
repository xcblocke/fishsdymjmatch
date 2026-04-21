"use strict";
cc._RF.push(module, '966e10GWT5PGLP9DomX7uWt', 'E07Normal');
// Scripts/elements/E07Normal.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ESimpleNormal_1 = require("../ESimpleNormal");
var l = cc.color(122, 56, 14, 255);
var s = cc.color(52, 67, 7, 255);
var E07Normal = /** @class */ (function (_super) {
    __extends(E07Normal, _super);
    function E07Normal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    E07Normal.prototype.onLevelSelect = function () {
        _super.prototype.onLevelSelect.call(this);
        this.titleLabel.node.color = l;
    };
    E07Normal.prototype.onLevelLock = function () {
        _super.prototype.onLevelLock.call(this);
        this.titleLabel.node.color = s;
    };
    E07Normal.prototype.onLevelUnlock = function () {
        _super.prototype.onLevelUnlock.call(this);
        this.titleLabel.node.color = s;
    };
    E07Normal.prototype.onLevelUnlockPass = function () {
        _super.prototype.onLevelUnlockPass.call(this);
        this.titleLabel.node.color = s;
    };
    E07Normal.prefabUrl = "prefabs/E07Normal";
    E07Normal.bundleName = "l_travel05";
    E07Normal = __decorate([
        mj.class
    ], E07Normal);
    return E07Normal;
}(ESimpleNormal_1.default));
exports.default = E07Normal;

cc._RF.pop();