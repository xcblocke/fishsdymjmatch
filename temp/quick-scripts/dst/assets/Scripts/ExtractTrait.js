
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ExtractTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1a6bubkXFB7rQbXrZBJcvA', 'ExtractTrait');
// Scripts/ExtractTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("./framework/trait/Trait");
var UserModel_1 = require("./gamePlay/user/UserModel");
var ExtractTrait = /** @class */ (function (_super) {
    __extends(ExtractTrait, _super);
    function ExtractTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtractTrait.prototype.isSupportMode = function (e) {
        var t = this._traitData.gameType || ["Normal", "Travel", "DailyChallenge", "Tile2Normal"];
        return (t = Array.isArray(t) ? t : [t]).includes(e);
    };
    ExtractTrait.prototype.checkGameMode = function () {
        var e = this._traitData.travelActivitys || ["Yoga", "Flip", "Color"], t = UserModel_1.default.getInstance(), o = t.getCurrentGameType(), n = t.getGameDataByGameType(o);
        if (!this.isSupportMode(o))
            return false;
        var i = n && n.getJourneyType ? n.getJourneyType() : null;
        if ("Travel" === o && e && Array.isArray(e) && e.length > 0) {
            if (null == i) {
                "l_cbadYo" == this._traitData.bundle && console.error("【关卡抽取】checkGameMode, gameType=Travel, gameData=" + !!n + ", journeyType=" + i);
                return false;
            }
            var r = this.journeyTypeToString(i);
            if (!r || !e.includes(r))
                return false;
        }
        return true;
    };
    ExtractTrait.prototype.journeyTypeToString = function (e) {
        switch (e) {
            case 1:
                return "Yoga";
            case 2:
                return "Flip";
            case 3:
                return "Color";
            default:
                return "";
        }
    };
    ExtractTrait = __decorate([
        mj.class("ExtractTrait")
    ], ExtractTrait);
    return ExtractTrait;
}(Trait_1.default));
exports.default = ExtractTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0V4dHJhY3RUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTRDO0FBQzVDLHVEQUFrRDtBQUVsRDtJQUEwQyxnQ0FBSztJQUEvQzs7SUFrQ0EsQ0FBQztJQWpDQyxvQ0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUMxRixPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0Qsb0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFDbEUsQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLEVBQzNCLENBQUMsR0FBRyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsRUFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUQsSUFBSSxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNELElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtnQkFDYixVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxpREFBaUQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN0SSxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUssQ0FBQztTQUN4QztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELDBDQUFtQixHQUFuQixVQUFvQixDQUFDO1FBQ25CLFFBQVEsQ0FBQyxFQUFFO1lBQ1QsS0FBSyxDQUFDO2dCQUNKLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLEtBQUssQ0FBQztnQkFDSixPQUFPLE1BQU0sQ0FBQztZQUNoQixLQUFLLENBQUM7Z0JBQ0osT0FBTyxPQUFPLENBQUM7WUFDakI7Z0JBQ0UsT0FBTyxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7SUFqQ2tCLFlBQVk7UUFEaEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7T0FDSixZQUFZLENBa0NoQztJQUFELG1CQUFDO0NBbENELEFBa0NDLENBbEN5QyxlQUFLLEdBa0M5QztrQkFsQ29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai5jbGFzcyhcIkV4dHJhY3RUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0cmFjdFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBpc1N1cHBvcnRNb2RlKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuX3RyYWl0RGF0YS5nYW1lVHlwZSB8fCBbXCJOb3JtYWxcIiwgXCJUcmF2ZWxcIiwgXCJEYWlseUNoYWxsZW5nZVwiLCBcIlRpbGUyTm9ybWFsXCJdO1xuICAgIHJldHVybiAodCA9IEFycmF5LmlzQXJyYXkodCkgPyB0IDogW3RdKS5pbmNsdWRlcyhlKTtcbiAgfVxuICBjaGVja0dhbWVNb2RlKCkge1xuICAgIHZhciBlID0gdGhpcy5fdHJhaXREYXRhLnRyYXZlbEFjdGl2aXR5cyB8fCBbXCJZb2dhXCIsIFwiRmxpcFwiLCBcIkNvbG9yXCJdLFxuICAgICAgdCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgbyA9IHQuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICBuID0gdC5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUobyk7XG4gICAgaWYgKCF0aGlzLmlzU3VwcG9ydE1vZGUobykpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgaSA9IG4gJiYgbi5nZXRKb3VybmV5VHlwZSA/IG4uZ2V0Sm91cm5leVR5cGUoKSA6IG51bGw7XG4gICAgaWYgKFwiVHJhdmVsXCIgPT09IG8gJiYgZSAmJiBBcnJheS5pc0FycmF5KGUpICYmIGUubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKG51bGwgPT0gaSkge1xuICAgICAgICBcImxfY2JhZFlvXCIgPT0gdGhpcy5fdHJhaXREYXRhLmJ1bmRsZSAmJiBjb25zb2xlLmVycm9yKFwi44CQ5YWz5Y2h5oq95Y+W44CRY2hlY2tHYW1lTW9kZSwgZ2FtZVR5cGU9VHJhdmVsLCBnYW1lRGF0YT1cIiArICEhbiArIFwiLCBqb3VybmV5VHlwZT1cIiArIGkpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgciA9IHRoaXMuam91cm5leVR5cGVUb1N0cmluZyhpKTtcbiAgICAgIGlmICghciB8fCAhZS5pbmNsdWRlcyhyKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBqb3VybmV5VHlwZVRvU3RyaW5nKGUpIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIFwiWW9nYVwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gXCJGbGlwXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcIkNvbG9yXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1cbn0iXX0=