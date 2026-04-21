
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_gameEndHighlight/Scripts/GameEndExpTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2c19fabHhLnZoSr1W4a+Zy', 'GameEndExpTrait');
// subpackages/l_gameEndHighlight/Scripts/GameEndExpTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameEndExpTrait = /** @class */ (function (_super) {
    __extends(GameEndExpTrait, _super);
    function GameEndExpTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameEndExpTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this._traitData.i18nKeys;
        e && Object.keys(e).map(function (t) {
            var a, i;
            return t + "=" + (null !== (i = null === (a = e[t]) || void 0 === a ? void 0 : a.length) && void 0 !== i ? i : 0);
        }).join(", ");
    };
    GameEndExpTrait.prototype.onGameEndHighLT_getI18NKey = function (t, e) {
        var a, i, r = __read(t.args, 1)[0], o = this._traitData, n = "type" + r, c = null === (a = o.i18nKeys) || void 0 === a ? void 0 : a[n];
        if (c && 0 !== c.length) {
            var p = (null !== (i = o.keyPrefix) && void 0 !== i ? i : "MahjongBlast_GameEnd_Type") + c[Math.floor(Math.random() * c.length)];
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: p
            });
        }
        else
            e();
    };
    GameEndExpTrait.traitKey = "GameEndExp";
    GameEndExpTrait = __decorate([
        mj.trait,
        mj.class("GameEndExpTrait")
    ], GameEndExpTrait);
    return GameEndExpTrait;
}(Trait_1.default));
exports.default = GameEndExpTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2dhbWVFbmRIaWdobGlnaHQvU2NyaXB0cy9HYW1lRW5kRXhwVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFHeEY7SUFBNkMsbUNBQUs7SUFBbEQ7O0lBMEJBLENBQUM7SUF4QkMsZ0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDakMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEgsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDRCxvREFBMEIsR0FBMUIsVUFBMkIsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQ25CLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUNkLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pJLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUF4Qk0sd0JBQVEsR0FBRyxZQUFZLENBQUM7SUFEWixlQUFlO1FBRm5DLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztPQUNQLGVBQWUsQ0EwQm5DO0lBQUQsc0JBQUM7Q0ExQkQsQUEwQkMsQ0ExQjRDLGVBQUssR0EwQmpEO2tCQTFCb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkdhbWVFbmRFeHBUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUVuZEV4cFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkdhbWVFbmRFeHBcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciBlID0gdGhpcy5fdHJhaXREYXRhLmkxOG5LZXlzO1xuICAgIGUgJiYgT2JqZWN0LmtleXMoZSkubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgYSwgaTtcbiAgICAgIHJldHVybiB0ICsgXCI9XCIgKyAobnVsbCAhPT0gKGkgPSBudWxsID09PSAoYSA9IGVbdF0pIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEubGVuZ3RoKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogMCk7XG4gICAgfSkuam9pbihcIiwgXCIpO1xuICB9XG4gIG9uR2FtZUVuZEhpZ2hMVF9nZXRJMThOS2V5KHQsIGUpIHtcbiAgICB2YXIgYSxcbiAgICAgIGksXG4gICAgICByID0gX19yZWFkKHQuYXJncywgMSlbMF0sXG4gICAgICBvID0gdGhpcy5fdHJhaXREYXRhLFxuICAgICAgbiA9IFwidHlwZVwiICsgcixcbiAgICAgIGMgPSBudWxsID09PSAoYSA9IG8uaTE4bktleXMpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGFbbl07XG4gICAgaWYgKGMgJiYgMCAhPT0gYy5sZW5ndGgpIHtcbiAgICAgIHZhciBwID0gKG51bGwgIT09IChpID0gby5rZXlQcmVmaXgpICYmIHZvaWQgMCAhPT0gaSA/IGkgOiBcIk1haGpvbmdCbGFzdF9HYW1lRW5kX1R5cGVcIikgKyBjW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGMubGVuZ3RoKV07XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=