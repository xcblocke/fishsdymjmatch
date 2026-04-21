
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankSynXingyun/Scripts/RankSynListScrollTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58508jYwhROVaDZ7ZCaVRhk', 'RankSynListScrollTrait');
// subpackages/l_rankSynXingyun/Scripts/RankSynListScrollTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RankSynListScrollTrait = /** @class */ (function (_super) {
    __extends(RankSynListScrollTrait, _super);
    function RankSynListScrollTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isStopScroll = true;
        return _this;
    }
    Object.defineProperty(RankSynListScrollTrait.prototype, "minMemory", {
        get: function () {
            return null == this._traitData.minMemory ? 5 : this._traitData.minMemory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankSynListScrollTrait.prototype, "maxMemory", {
        get: function () {
            return null == this._traitData.maxMemory ? 11 : this._traitData.maxMemory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankSynListScrollTrait.prototype, "isCheckMemory", {
        get: function () {
            return null != this._traitData.checkMemory && this._traitData.checkMemory;
        },
        enumerable: false,
        configurable: true
    });
    RankSynListScrollTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._checkDeviceMemory();
    };
    RankSynListScrollTrait.prototype.onRankVw_listScroll = function (t, e) {
        if (!this.isCheckMemory || this.isStopScroll) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    RankSynListScrollTrait.prototype._checkDeviceMemory = function () {
        try {
            var t = mj.sdk.getDeviceInfo(), e = null == t ? void 0 : t.all_memory;
            if (e) {
                var r = Number(e) / 1024;
                if (this.minMemory <= r && r <= this.maxMemory) {
                    this.isStopScroll = true;
                }
                else {
                    this.isStopScroll = false;
                }
            }
        }
        catch (t) { }
    };
    RankSynListScrollTrait.traitKey = "RankSynListScroll";
    RankSynListScrollTrait = __decorate([
        mj.trait,
        mj.class("RankSynListScrollTrait")
    ], RankSynListScrollTrait);
    return RankSynListScrollTrait;
}(Trait_1.default));
exports.default = RankSynListScrollTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtTeW5YaW5neXVuL1NjcmlwdHMvUmFua1N5bkxpc3RTY3JvbGxUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQW9ELDBDQUFLO0lBQXpEO1FBQUEscUVBd0NDO1FBdkNDLGtCQUFZLEdBQUcsSUFBSSxDQUFDOztJQXVDdEIsQ0FBQztJQXJDQyxzQkFBSSw2Q0FBUzthQUFiO1lBQ0UsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDM0UsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSw2Q0FBUzthQUFiO1lBQ0UsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDNUUsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxpREFBYTthQUFqQjtZQUNFLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVFLENBQUM7OztPQUFBO0lBQ0QsdUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVDLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCxtREFBa0IsR0FBbEI7UUFDRSxJQUFJO1lBQ0YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsRUFDNUIsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2lCQUMxQjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztpQkFDM0I7YUFDRjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtJQUNoQixDQUFDO0lBckNNLCtCQUFRLEdBQUcsbUJBQW1CLENBQUM7SUFGbkIsc0JBQXNCO1FBRjFDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztPQUNkLHNCQUFzQixDQXdDMUM7SUFBRCw2QkFBQztDQXhDRCxBQXdDQyxDQXhDbUQsZUFBSyxHQXdDeEQ7a0JBeENvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJSYW5rU3luTGlzdFNjcm9sbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rU3luTGlzdFNjcm9sbFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBpc1N0b3BTY3JvbGwgPSB0cnVlO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlJhbmtTeW5MaXN0U2Nyb2xsXCI7XG4gIGdldCBtaW5NZW1vcnkoKSB7XG4gICAgcmV0dXJuIG51bGwgPT0gdGhpcy5fdHJhaXREYXRhLm1pbk1lbW9yeSA/IDUgOiB0aGlzLl90cmFpdERhdGEubWluTWVtb3J5O1xuICB9XG4gIGdldCBtYXhNZW1vcnkoKSB7XG4gICAgcmV0dXJuIG51bGwgPT0gdGhpcy5fdHJhaXREYXRhLm1heE1lbW9yeSA/IDExIDogdGhpcy5fdHJhaXREYXRhLm1heE1lbW9yeTtcbiAgfVxuICBnZXQgaXNDaGVja01lbW9yeSgpIHtcbiAgICByZXR1cm4gbnVsbCAhPSB0aGlzLl90cmFpdERhdGEuY2hlY2tNZW1vcnkgJiYgdGhpcy5fdHJhaXREYXRhLmNoZWNrTWVtb3J5O1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jaGVja0RldmljZU1lbW9yeSgpO1xuICB9XG4gIG9uUmFua1Z3X2xpc3RTY3JvbGwodCwgZSkge1xuICAgIGlmICghdGhpcy5pc0NoZWNrTWVtb3J5IHx8IHRoaXMuaXNTdG9wU2Nyb2xsKSB7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBfY2hlY2tEZXZpY2VNZW1vcnkoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciB0ID0gbWouc2RrLmdldERldmljZUluZm8oKSxcbiAgICAgICAgZSA9IG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuYWxsX21lbW9yeTtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIHZhciByID0gTnVtYmVyKGUpIC8gMTAyNDtcbiAgICAgICAgaWYgKHRoaXMubWluTWVtb3J5IDw9IHIgJiYgciA8PSB0aGlzLm1heE1lbW9yeSkge1xuICAgICAgICAgIHRoaXMuaXNTdG9wU2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlzU3RvcFNjcm9sbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge31cbiAgfVxufSJdfQ==