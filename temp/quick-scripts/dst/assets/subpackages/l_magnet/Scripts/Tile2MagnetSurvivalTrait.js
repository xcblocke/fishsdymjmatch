
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_magnet/Scripts/Tile2MagnetSurvivalTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5129eIgSbtKR7aBhPn1I6MY', 'Tile2MagnetSurvivalTrait');
// subpackages/l_magnet/Scripts/Tile2MagnetSurvivalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2MagnetSurvivalTrait = /** @class */ (function (_super) {
    __extends(Tile2MagnetSurvivalTrait, _super);
    function Tile2MagnetSurvivalTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MagnetSurvivalTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2MagnetSurvivalTrait.prototype.onGsListener_onSurvivalGame = function (t, e) {
        var r, o = mj.getClassByName("Tile2MagnetTrait");
        if (o && "function" == typeof o.getInstance) {
            var n = o.getInstance();
            n && n.eventEnabled && (null === (r = n.resetPopupCount) || void 0 === r || r.call(n));
        }
        e();
    };
    Tile2MagnetSurvivalTrait.traitKey = "Tile2MagnetSurvival";
    Tile2MagnetSurvivalTrait = __decorate([
        mj.trait,
        mj.class("Tile2MagnetSurvivalTrait")
    ], Tile2MagnetSurvivalTrait);
    return Tile2MagnetSurvivalTrait;
}(Trait_1.default));
exports.default = Tile2MagnetSurvivalTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hZ25ldC9TY3JpcHRzL1RpbGUyTWFnbmV0U3Vydml2YWxUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQXNELDRDQUFLO0lBQTNEOztJQWNBLENBQUM7SUFaQyx5Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsOERBQTJCLEdBQTNCLFVBQTRCLENBQUMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksVUFBVSxJQUFJLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRTtZQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDeEIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEY7UUFDRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFaTSxpQ0FBUSxHQUFHLHFCQUFxQixDQUFDO0lBRHJCLHdCQUF3QjtRQUY1QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBYzVDO0lBQUQsK0JBQUM7Q0FkRCxBQWNDLENBZHFELGVBQUssR0FjMUQ7a0JBZG9CLHdCQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyTWFnbmV0U3Vydml2YWxUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJNYWduZXRTdXJ2aXZhbFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbGUyTWFnbmV0U3Vydml2YWxcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vblN1cnZpdmFsR2FtZSh0LCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBvID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJUaWxlMk1hZ25ldFRyYWl0XCIpO1xuICAgIGlmIChvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygby5nZXRJbnN0YW5jZSkge1xuICAgICAgdmFyIG4gPSBvLmdldEluc3RhbmNlKCk7XG4gICAgICBuICYmIG4uZXZlbnRFbmFibGVkICYmIChudWxsID09PSAociA9IG4ucmVzZXRQb3B1cENvdW50KSB8fCB2b2lkIDAgPT09IHIgfHwgci5jYWxsKG4pKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG59Il19