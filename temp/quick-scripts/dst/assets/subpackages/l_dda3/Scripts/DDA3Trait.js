
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dda3/Scripts/DDA3Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a3c66Gmc75AEbhMuoQf0QTi', 'DDA3Trait');
// subpackages/l_dda3/Scripts/DDA3Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Common_1 = require("../../../Scripts/types/Common");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DDA3Trait = /** @class */ (function (_super) {
    __extends(DDA3Trait, _super);
    function DDA3Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDA3Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DDA3Trait.prototype.getStrategy = function () {
        return this.traitData.strategy || {
            x: 3,
            y: 60,
            z: 10
        };
    };
    DDA3Trait.prototype.onDCMgr_setDDASgy = function (t, e) {
        t.ins.ddaLayer.addStrategy({
            name: "DDA3",
            param: this.getStrategy()
        });
        e();
    };
    DDA3Trait.prototype.onDCMgr_recordGameEnd = function (t, e) {
        var r = t.args[1], o = t.args[0], n = this.getStrategy(), i = n.x, c = n.y, s = n.z;
        if (!r.win && r.time < c) {
            var u = Common_1.getCustomDataKey("DDA4", [i, c, s]), p = o.getCachedData(u, 0);
            o.cacheData(u, p + 1);
        }
        e();
    };
    DDA3Trait.traitKey = "DDA3";
    DDA3Trait = __decorate([
        mj.trait,
        mj.class("DDA3Trait")
    ], DDA3Trait);
    return DDA3Trait;
}(Trait_1.default));
exports.default = DDA3Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RkYTMvU2NyaXB0cy9EREEzVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFpRTtBQUNqRSxnRUFBMkQ7QUFHM0Q7SUFBdUMsNkJBQUs7SUFBNUM7O0lBaUNBLENBQUM7SUEvQkMsMEJBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELCtCQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJO1lBQ2hDLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLEVBQUU7WUFDTCxDQUFDLEVBQUUsRUFBRTtTQUNOLENBQUM7SUFDSixDQUFDO0lBQ0QscUNBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztZQUN6QixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO1NBQzFCLENBQUMsQ0FBQztRQUNILENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHlDQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNmLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNiLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ3RCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNQLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNQLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcseUJBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBL0JNLGtCQUFRLEdBQUcsTUFBTSxDQUFDO0lBRE4sU0FBUztRQUY3QixFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO09BQ0QsU0FBUyxDQWlDN0I7SUFBRCxnQkFBQztDQWpDRCxBQWlDQyxDQWpDc0MsZUFBSyxHQWlDM0M7a0JBakNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q3VzdG9tRGF0YUtleSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvdHlwZXMvQ29tbW9uJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkREQTNUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRERBM1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkREQTNcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIGdldFN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLnRyYWl0RGF0YS5zdHJhdGVneSB8fCB7XG4gICAgICB4OiAzLFxuICAgICAgeTogNjAsXG4gICAgICB6OiAxMFxuICAgIH07XG4gIH1cbiAgb25EQ01ncl9zZXREREFTZ3kodCwgZSkge1xuICAgIHQuaW5zLmRkYUxheWVyLmFkZFN0cmF0ZWd5KHtcbiAgICAgIG5hbWU6IFwiRERBM1wiLFxuICAgICAgcGFyYW06IHRoaXMuZ2V0U3RyYXRlZ3koKVxuICAgIH0pO1xuICAgIGUoKTtcbiAgfVxuICBvbkRDTWdyX3JlY29yZEdhbWVFbmQodCwgZSkge1xuICAgIHZhciByID0gdC5hcmdzWzFdLFxuICAgICAgbyA9IHQuYXJnc1swXSxcbiAgICAgIG4gPSB0aGlzLmdldFN0cmF0ZWd5KCksXG4gICAgICBpID0gbi54LFxuICAgICAgYyA9IG4ueSxcbiAgICAgIHMgPSBuLno7XG4gICAgaWYgKCFyLndpbiAmJiByLnRpbWUgPCBjKSB7XG4gICAgICB2YXIgdSA9IGdldEN1c3RvbURhdGFLZXkoXCJEREE0XCIsIFtpLCBjLCBzXSksXG4gICAgICAgIHAgPSBvLmdldENhY2hlZERhdGEodSwgMCk7XG4gICAgICBvLmNhY2hlRGF0YSh1LCBwICsgMSk7XG4gICAgfVxuICAgIGUoKTtcbiAgfVxufSJdfQ==