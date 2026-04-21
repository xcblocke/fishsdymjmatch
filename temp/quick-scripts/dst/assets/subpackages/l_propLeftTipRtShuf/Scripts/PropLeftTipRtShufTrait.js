
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_propLeftTipRtShuf/Scripts/PropLeftTipRtShufTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f40de1cUIlEJ6MytFHOsIwy', 'PropLeftTipRtShufTrait');
// subpackages/l_propLeftTipRtShuf/Scripts/PropLeftTipRtShufTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var PropLeftTipRtShufTrait = /** @class */ (function (_super) {
    __extends(PropLeftTipRtShufTrait, _super);
    function PropLeftTipRtShufTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropLeftTipRtShufTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PropLeftTipRtShufTrait.prototype.onGameUI_onLoad = function (t, r) {
        var e = t.ins;
        if (e && cc.isValid(e.node)) {
            var o = e.btnHitTips, i = e.btnShuffle;
            if (cc.isValid(o) && cc.isValid(i)) {
                var n = o.x, f = i.x;
                o.x = f;
                i.x = n;
                r();
            }
            else
                r();
        }
        else
            r();
    };
    PropLeftTipRtShufTrait.traitKey = "PropLeftTipRtShuf";
    PropLeftTipRtShufTrait = __decorate([
        mj.trait,
        mj.class("PropLeftTipRtShufTrait")
    ], PropLeftTipRtShufTrait);
    return PropLeftTipRtShufTrait;
}(Trait_1.default));
exports.default = PropLeftTipRtShufTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Byb3BMZWZ0VGlwUnRTaHVmL1NjcmlwdHMvUHJvcExlZnRUaXBSdFNodWZUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQW9ELDBDQUFLO0lBQXpEOztJQW1CQSxDQUFDO0lBakJDLHVDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxnREFBZSxHQUFmLFVBQWdCLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUNsQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUNuQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDVCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDVixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDUixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDUixDQUFDLEVBQUUsQ0FBQzthQUNMOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQWpCTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBRG5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FtQjFDO0lBQUQsNkJBQUM7Q0FuQkQsQUFtQkMsQ0FuQm1ELGVBQUssR0FtQnhEO2tCQW5Cb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUHJvcExlZnRUaXBSdFNodWZUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcExlZnRUaXBSdFNodWZUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJQcm9wTGVmdFRpcFJ0U2h1ZlwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25HYW1lVUlfb25Mb2FkKHQsIHIpIHtcbiAgICB2YXIgZSA9IHQuaW5zO1xuICAgIGlmIChlICYmIGNjLmlzVmFsaWQoZS5ub2RlKSkge1xuICAgICAgdmFyIG8gPSBlLmJ0bkhpdFRpcHMsXG4gICAgICAgIGkgPSBlLmJ0blNodWZmbGU7XG4gICAgICBpZiAoY2MuaXNWYWxpZChvKSAmJiBjYy5pc1ZhbGlkKGkpKSB7XG4gICAgICAgIHZhciBuID0gby54LFxuICAgICAgICAgIGYgPSBpLng7XG4gICAgICAgIG8ueCA9IGY7XG4gICAgICAgIGkueCA9IG47XG4gICAgICAgIHIoKTtcbiAgICAgIH0gZWxzZSByKCk7XG4gICAgfSBlbHNlIHIoKTtcbiAgfVxufSJdfQ==