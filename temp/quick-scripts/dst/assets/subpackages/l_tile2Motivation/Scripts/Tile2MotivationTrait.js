
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2Motivation/Scripts/Tile2MotivationTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f271ckgw49E7qq5HzdWemDl', 'Tile2MotivationTrait');
// subpackages/l_tile2Motivation/Scripts/Tile2MotivationTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ClearTile2NormalHelper_1 = require("../../../Scripts/ClearTile2NormalHelper");
var Tile2MotivationTrait = /** @class */ (function (_super) {
    __extends(Tile2MotivationTrait, _super);
    function Tile2MotivationTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MotivationTrait.prototype.onT2CheerChk_canShow = function (t, r) {
        var e = t.ins, o = e.context || e._context;
        if (o) {
            var i = ClearTile2NormalHelper_1.default._options;
            if (i) {
                var n = i.clearSlotBarList;
                if (n && 0 !== n.length) {
                    var a = i.slotBarSnapshotBefore;
                    if (!a || a.length < 2)
                        r();
                    else {
                        var s = n[0][0], f = a.indexOf(s);
                        if (f < 0)
                            r();
                        else {
                            var u = a.length, p = o.getGameData(), _ = p.slotBarCount - p.slotBarIds.length, v = (i.rollCardDatas || []).some(function (t) {
                                return !t.frontToBack;
                            }), h = -1;
                            if (v && 3 === u && 0 === f && 2 === _) {
                                h = 4;
                            }
                            else {
                                if (v && 3 === u && 1 === f && 2 === _) {
                                    h = 3;
                                }
                                else {
                                    if (3 === u && 0 === f && 2 === _) {
                                        h = 2;
                                    }
                                    else {
                                        if (3 === u && 1 === f && 2 === _) {
                                            h = 1;
                                        }
                                        else {
                                            2 === u && 0 === f && 3 === _ && (h = 0);
                                        }
                                    }
                                }
                            }
                            r({
                                isBreak: true,
                                returnType: TraitManager_1.TraitCallbackReturnType.return,
                                returnVal: {
                                    isShow: h > -1,
                                    index: h
                                }
                            });
                        }
                    }
                }
                else
                    r();
            }
            else
                r();
        }
        else
            r();
    };
    Tile2MotivationTrait.traitKey = "Tile2Motivation";
    Tile2MotivationTrait = __decorate([
        mj.trait,
        mj.class("Tile2MotivationTrait")
    ], Tile2MotivationTrait);
    return Tile2MotivationTrait;
}(Trait_1.default));
exports.default = Tile2MotivationTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyTW90aXZhdGlvbi9TY3JpcHRzL1RpbGUyTW90aXZhdGlvblRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLGtGQUE2RTtBQUc3RTtJQUFrRCx3Q0FBSztJQUF2RDs7SUFxREEsQ0FBQztJQW5EQyxtREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDWCxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsZ0NBQXNCLENBQUMsUUFBUSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7d0JBQUUsQ0FBQyxFQUFFLENBQUM7eUJBQUs7d0JBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQzs0QkFBRSxDQUFDLEVBQUUsQ0FBQzs2QkFBSzs0QkFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFDZCxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dDQUMxQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQzs0QkFDeEIsQ0FBQyxDQUFDLEVBQ0YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUNULElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dDQUN0QyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzZCQUNQO2lDQUFNO2dDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO29DQUN0QyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lDQUNQO3FDQUFNO29DQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7d0NBQ2pDLENBQUMsR0FBRyxDQUFDLENBQUM7cUNBQ1A7eUNBQU07d0NBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTs0Q0FDakMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt5Q0FDUDs2Q0FBTTs0Q0FDTCxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt5Q0FDMUM7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7NEJBQ0QsQ0FBQyxDQUFDO2dDQUNBLE9BQU8sRUFBRSxJQUFJO2dDQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dDQUMxQyxTQUFTLEVBQUU7b0NBQ1QsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7b0NBQ2QsS0FBSyxFQUFFLENBQUM7aUNBQ1Q7NkJBQ0YsQ0FBQyxDQUFDO3lCQUNKO3FCQUNGO2lCQUNGOztvQkFBTSxDQUFDLEVBQUUsQ0FBQzthQUNaOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQW5ETSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0FxRHhDO0lBQUQsMkJBQUM7Q0FyREQsQUFxREMsQ0FyRGlELGVBQUssR0FxRHREO2tCQXJEb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBDbGVhclRpbGUyTm9ybWFsSGVscGVyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQ2xlYXJUaWxlMk5vcm1hbEhlbHBlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyTW90aXZhdGlvblRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMk1vdGl2YXRpb25UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMk1vdGl2YXRpb25cIjtcbiAgb25UMkNoZWVyQ2hrX2NhblNob3codCwgcikge1xuICAgIHZhciBlID0gdC5pbnMsXG4gICAgICBvID0gZS5jb250ZXh0IHx8IGUuX2NvbnRleHQ7XG4gICAgaWYgKG8pIHtcbiAgICAgIHZhciBpID0gQ2xlYXJUaWxlMk5vcm1hbEhlbHBlci5fb3B0aW9ucztcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIHZhciBuID0gaS5jbGVhclNsb3RCYXJMaXN0O1xuICAgICAgICBpZiAobiAmJiAwICE9PSBuLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBhID0gaS5zbG90QmFyU25hcHNob3RCZWZvcmU7XG4gICAgICAgICAgaWYgKCFhIHx8IGEubGVuZ3RoIDwgMikgcigpO2Vsc2Uge1xuICAgICAgICAgICAgdmFyIHMgPSBuWzBdWzBdLFxuICAgICAgICAgICAgICBmID0gYS5pbmRleE9mKHMpO1xuICAgICAgICAgICAgaWYgKGYgPCAwKSByKCk7ZWxzZSB7XG4gICAgICAgICAgICAgIHZhciB1ID0gYS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgcCA9IG8uZ2V0R2FtZURhdGEoKSxcbiAgICAgICAgICAgICAgICBfID0gcC5zbG90QmFyQ291bnQgLSBwLnNsb3RCYXJJZHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHYgPSAoaS5yb2xsQ2FyZERhdGFzIHx8IFtdKS5zb21lKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gIXQuZnJvbnRUb0JhY2s7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgaCA9IC0xO1xuICAgICAgICAgICAgICBpZiAodiAmJiAzID09PSB1ICYmIDAgPT09IGYgJiYgMiA9PT0gXykge1xuICAgICAgICAgICAgICAgIGggPSA0O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh2ICYmIDMgPT09IHUgJiYgMSA9PT0gZiAmJiAyID09PSBfKSB7XG4gICAgICAgICAgICAgICAgICBoID0gMztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaWYgKDMgPT09IHUgJiYgMCA9PT0gZiAmJiAyID09PSBfKSB7XG4gICAgICAgICAgICAgICAgICAgIGggPSAyO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDMgPT09IHUgJiYgMSA9PT0gZiAmJiAyID09PSBfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgMiA9PT0gdSAmJiAwID09PSBmICYmIDMgPT09IF8gJiYgKGggPSAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByKHtcbiAgICAgICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICAgICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgICAgICAgICAgIGlzU2hvdzogaCA+IC0xLFxuICAgICAgICAgICAgICAgICAgaW5kZXg6IGhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHIoKTtcbiAgICAgIH0gZWxzZSByKCk7XG4gICAgfSBlbHNlIHIoKTtcbiAgfVxufSJdfQ==