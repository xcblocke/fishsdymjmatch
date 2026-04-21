
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_magnet/Scripts/Tile2MagnetZoneTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e83c5pz7pRLn6MG5rqo1KH0', 'Tile2MagnetZoneTrait');
// subpackages/l_magnet/Scripts/Tile2MagnetZoneTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var Tile2MagnetZoneTrait = /** @class */ (function (_super) {
    __extends(Tile2MagnetZoneTrait, _super);
    function Tile2MagnetZoneTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Tile2MagnetZoneTrait.prototype, "country", {
        get: function () {
            return LoginModel_1.default.getInstance().countryIso || "";
        },
        enumerable: false,
        configurable: true
    });
    Tile2MagnetZoneTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2MagnetZoneTrait.prototype.getCountryConfig = function () {
        var t;
        return null === (t = this._traitData) || void 0 === t ? void 0 : t.countries;
    };
    Tile2MagnetZoneTrait.prototype.isPreconMet = function () {
        var t = this.country;
        return this.getCountryConfig().includes(t);
    };
    Tile2MagnetZoneTrait.prototype.onT2MagSlotStep_preMet = function (t, e) {
        t.beforReturnVal && (t.beforReturnVal = this.isPreconMet());
        e({
            returnVal: t.beforReturnVal
        });
    };
    Tile2MagnetZoneTrait.prototype.onT2MagSlotStep_breakCon = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: false
        });
    };
    Tile2MagnetZoneTrait.traitKey = "Tile2MagnetZone";
    Tile2MagnetZoneTrait = __decorate([
        mj.trait,
        mj.class("Tile2MagnetZoneTrait")
    ], Tile2MagnetZoneTrait);
    return Tile2MagnetZoneTrait;
}(Trait_1.default));
exports.default = Tile2MagnetZoneTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hZ25ldC9TY3JpcHRzL1RpbGUyTWFnbmV0Wm9uZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsK0VBQTBFO0FBRzFFO0lBQWtELHdDQUFLO0lBQXZEOztJQTZCQSxDQUFDO0lBM0JDLHNCQUFJLHlDQUFPO2FBQVg7WUFDRSxPQUFPLG9CQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUNuRCxDQUFDOzs7T0FBQTtJQUNELHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCwrQ0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9FLENBQUM7SUFDRCwwQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QscURBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQztZQUNBLFNBQVMsRUFBRSxDQUFDLENBQUMsY0FBYztTQUM1QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsdURBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTNCTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0E2QnhDO0lBQUQsMkJBQUM7Q0E3QkQsQUE2QkMsQ0E3QmlELGVBQUssR0E2QnREO2tCQTdCb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBMb2dpbk1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvbG9naW4vbW9kZWwvTG9naW5Nb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyTWFnbmV0Wm9uZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMk1hZ25ldFpvbmVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMk1hZ25ldFpvbmVcIjtcbiAgZ2V0IGNvdW50cnkoKSB7XG4gICAgcmV0dXJuIExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKS5jb3VudHJ5SXNvIHx8IFwiXCI7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIGdldENvdW50cnlDb25maWcoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmNvdW50cmllcztcbiAgfVxuICBpc1ByZWNvbk1ldCgpIHtcbiAgICB2YXIgdCA9IHRoaXMuY291bnRyeTtcbiAgICByZXR1cm4gdGhpcy5nZXRDb3VudHJ5Q29uZmlnKCkuaW5jbHVkZXModCk7XG4gIH1cbiAgb25UMk1hZ1Nsb3RTdGVwX3ByZU1ldCh0LCBlKSB7XG4gICAgdC5iZWZvclJldHVyblZhbCAmJiAodC5iZWZvclJldHVyblZhbCA9IHRoaXMuaXNQcmVjb25NZXQoKSk7XG4gICAgZSh7XG4gICAgICByZXR1cm5WYWw6IHQuYmVmb3JSZXR1cm5WYWxcbiAgICB9KTtcbiAgfVxuICBvblQyTWFnU2xvdFN0ZXBfYnJlYWtDb24odCwgZSkge1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICB9KTtcbiAgfVxufSJdfQ==