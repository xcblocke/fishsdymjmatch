
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_mirrorLock/Scripts/MirrorLockTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97bc01rqxJJKI7gzRCwOua2', 'MirrorLockTrait');
// subpackages/l_mirrorLock/Scripts/MirrorLockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var MirrorLockTrait = /** @class */ (function (_super) {
    __extends(MirrorLockTrait, _super);
    function MirrorLockTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MirrorLockTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MirrorLockTrait.prototype.onClickSwLkBhv_playLockAni = function (t, r) {
        var e = t.args[0];
        if (e && cc.isValid(e)) {
            var o = e.getChildByName("lock");
            if (o && cc.isValid(o)) {
                o.scaleX = -1;
                r();
            }
            else
                r();
        }
        else
            r();
    };
    MirrorLockTrait.traitKey = "MirrorLock";
    MirrorLockTrait = __decorate([
        mj.trait,
        mj.class("MirrorLockTrait")
    ], MirrorLockTrait);
    return MirrorLockTrait;
}(Trait_1.default));
exports.default = MirrorLockTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21pcnJvckxvY2svU2NyaXB0cy9NaXJyb3JMb2NrVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUE2QyxtQ0FBSztJQUFsRDs7SUFlQSxDQUFDO0lBYkMsZ0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUEwQixHQUExQixVQUEyQixDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN0QixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNkLENBQUMsRUFBRSxDQUFDO2FBQ0w7O2dCQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBYk0sd0JBQVEsR0FBRyxZQUFZLENBQUM7SUFEWixlQUFlO1FBRm5DLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztPQUNQLGVBQWUsQ0FlbkM7SUFBRCxzQkFBQztDQWZELEFBZUMsQ0FmNEMsZUFBSyxHQWVqRDtrQkFmb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk1pcnJvckxvY2tUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWlycm9yTG9ja1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIk1pcnJvckxvY2tcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uQ2xpY2tTd0xrQmh2X3BsYXlMb2NrQW5pKHQsIHIpIHtcbiAgICB2YXIgZSA9IHQuYXJnc1swXTtcbiAgICBpZiAoZSAmJiBjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICB2YXIgbyA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrXCIpO1xuICAgICAgaWYgKG8gJiYgY2MuaXNWYWxpZChvKSkge1xuICAgICAgICBvLnNjYWxlWCA9IC0xO1xuICAgICAgICByKCk7XG4gICAgICB9IGVsc2UgcigpO1xuICAgIH0gZWxzZSByKCk7XG4gIH1cbn0iXX0=