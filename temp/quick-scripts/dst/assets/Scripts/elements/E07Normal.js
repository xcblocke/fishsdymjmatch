
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/elements/E07Normal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2VsZW1lbnRzL0UwN05vcm1hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTZDO0FBQzdDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbkMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUVqQztJQUF1Qyw2QkFBYTtJQUFwRDs7SUFtQkEsQ0FBQztJQWhCQyxpQ0FBYSxHQUFiO1FBQ0UsaUJBQU0sYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCwrQkFBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxpQ0FBYSxHQUFiO1FBQ0UsaUJBQU0sYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxxQ0FBaUIsR0FBakI7UUFDRSxpQkFBTSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBakJNLG1CQUFTLEdBQUcsbUJBQW1CLENBQUM7SUFDaEMsb0JBQVUsR0FBRyxZQUFZLENBQUM7SUFGZCxTQUFTO1FBRDdCLEVBQUUsQ0FBQyxLQUFLO09BQ1ksU0FBUyxDQW1CN0I7SUFBRCxnQkFBQztDQW5CRCxBQW1CQyxDQW5Cc0MsdUJBQWEsR0FtQm5EO2tCQW5Cb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFU2ltcGxlTm9ybWFsIGZyb20gJy4uL0VTaW1wbGVOb3JtYWwnO1xudmFyIGwgPSBjYy5jb2xvcigxMjIsIDU2LCAxNCwgMjU1KTtcbnZhciBzID0gY2MuY29sb3IoNTIsIDY3LCA3LCAyNTUpO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFMDdOb3JtYWwgZXh0ZW5kcyBFU2ltcGxlTm9ybWFsIHtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9FMDdOb3JtYWxcIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcImxfdHJhdmVsMDVcIjtcbiAgb25MZXZlbFNlbGVjdCgpIHtcbiAgICBzdXBlci5vbkxldmVsU2VsZWN0LmNhbGwodGhpcyk7XG4gICAgdGhpcy50aXRsZUxhYmVsLm5vZGUuY29sb3IgPSBsO1xuICB9XG4gIG9uTGV2ZWxMb2NrKCkge1xuICAgIHN1cGVyLm9uTGV2ZWxMb2NrLmNhbGwodGhpcyk7XG4gICAgdGhpcy50aXRsZUxhYmVsLm5vZGUuY29sb3IgPSBzO1xuICB9XG4gIG9uTGV2ZWxVbmxvY2soKSB7XG4gICAgc3VwZXIub25MZXZlbFVubG9jay5jYWxsKHRoaXMpO1xuICAgIHRoaXMudGl0bGVMYWJlbC5ub2RlLmNvbG9yID0gcztcbiAgfVxuICBvbkxldmVsVW5sb2NrUGFzcygpIHtcbiAgICBzdXBlci5vbkxldmVsVW5sb2NrUGFzcy5jYWxsKHRoaXMpO1xuICAgIHRoaXMudGl0bGVMYWJlbC5ub2RlLmNvbG9yID0gcztcbiAgfVxufSJdfQ==