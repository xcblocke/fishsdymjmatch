
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCard/Scripts/MaterialCard1Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0495DVLWxO9rOGXlqbSgK8', 'MaterialCard1Trait');
// subpackages/l_materialCard/Scripts/MaterialCard1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var MaterialCard1Trait = /** @class */ (function (_super) {
    __extends(MaterialCard1Trait, _super);
    function MaterialCard1Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaterialCard1Trait_1 = MaterialCard1Trait;
    MaterialCard1Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MaterialCard1Trait.prototype._getModeData = function (t) {
        var e;
        if (!this.localData[t]) {
            this.localData[t] = {
                hadInterAdLastRound: false
            };
            this.localData[t] = this.localData[t];
        }
        return null !== (e = this.localData[t]) && void 0 !== e ? e : {
            hadInterAdLastRound: false
        };
    };
    MaterialCard1Trait.prototype.onAdMgr_interAdClose = function (t, e) {
        try {
            var a = this.getCurrentGameType();
            this._getModeData(a).hadInterAdLastRound = true;
            this.localData[a] = this.localData[a];
        }
        catch (t) {
            console.error("[" + MaterialCard1Trait_1.traitKey + "] 插屏广告关闭处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    MaterialCard1Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            var a = this.getCurrentGameType();
            if (!this.isNormalMode() && !this.isTravelMode() && !this.isDailyMode()) {
                e();
                return;
            }
            var i = this._getModeData(a);
            if (i.hadInterAdLastRound) {
                this.switchToNextMaterialCard();
                i.hadInterAdLastRound = false;
                this.localData[a] = this.localData[a];
            }
        }
        catch (t) {
            console.error("[" + MaterialCard1Trait_1.traitKey + "] 关卡切换处理失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    var MaterialCard1Trait_1;
    MaterialCard1Trait.traitKey = "MaterialCard1";
    MaterialCard1Trait = MaterialCard1Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard1Trait")
    ], MaterialCard1Trait);
    return MaterialCard1Trait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCard1Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZC9TY3JpcHRzL01hdGVyaWFsQ2FyZDFUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBRzVEO0lBQWdELHNDQUFxQjtJQUFyRTs7SUE2Q0EsQ0FBQzsyQkE3Q29CLGtCQUFrQjtJQUVyQyxtQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QseUNBQVksR0FBWixVQUFhLENBQUM7UUFDWixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUc7Z0JBQ2xCLG1CQUFtQixFQUFFLEtBQUs7YUFDM0IsQ0FBQztZQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsbUJBQW1CLEVBQUUsS0FBSztTQUMzQixDQUFDO0lBQ0osQ0FBQztJQUNELGlEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJO1lBQ0YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7WUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxvQkFBa0IsQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDeEc7UUFDRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxtREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ3ZFLENBQUMsRUFBRSxDQUFDO2dCQUNKLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLENBQUMsbUJBQW1CLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2dCQUNoQyxDQUFDLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkM7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsb0JBQWtCLENBQUMsUUFBUSxHQUFHLGNBQWMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUN0RztRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQzs7SUEzQ00sMkJBQVEsR0FBRyxlQUFlLENBQUM7SUFEZixrQkFBa0I7UUFGdEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBNkN0QztJQUFELHlCQUFDO0NBN0NELEFBNkNDLENBN0MrQywrQkFBcUIsR0E2Q3BFO2tCQTdDb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hdGVyaWFsQ2FyZEJhc2VUcmFpdCBmcm9tICcuL01hdGVyaWFsQ2FyZEJhc2VUcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk1hdGVyaWFsQ2FyZDFUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0ZXJpYWxDYXJkMVRyYWl0IGV4dGVuZHMgTWF0ZXJpYWxDYXJkQmFzZVRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJNYXRlcmlhbENhcmQxXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBfZ2V0TW9kZURhdGEodCkge1xuICAgIHZhciBlO1xuICAgIGlmICghdGhpcy5sb2NhbERhdGFbdF0pIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhW3RdID0ge1xuICAgICAgICBoYWRJbnRlckFkTGFzdFJvdW5kOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHRoaXMubG9jYWxEYXRhW3RdID0gdGhpcy5sb2NhbERhdGFbdF07XG4gICAgfVxuICAgIHJldHVybiBudWxsICE9PSAoZSA9IHRoaXMubG9jYWxEYXRhW3RdKSAmJiB2b2lkIDAgIT09IGUgPyBlIDoge1xuICAgICAgaGFkSW50ZXJBZExhc3RSb3VuZDogZmFsc2VcbiAgICB9O1xuICB9XG4gIG9uQWRNZ3JfaW50ZXJBZENsb3NlKHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGEgPSB0aGlzLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgICAgdGhpcy5fZ2V0TW9kZURhdGEoYSkuaGFkSW50ZXJBZExhc3RSb3VuZCA9IHRydWU7XG4gICAgICB0aGlzLmxvY2FsRGF0YVthXSA9IHRoaXMubG9jYWxEYXRhW2FdO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBNYXRlcmlhbENhcmQxVHJhaXQudHJhaXRLZXkgKyBcIl0g5o+S5bGP5bm/5ZGK5YWz6Zet5aSE55CG5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vbk5ld0dhbWUodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgYSA9IHRoaXMuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgICBpZiAoIXRoaXMuaXNOb3JtYWxNb2RlKCkgJiYgIXRoaXMuaXNUcmF2ZWxNb2RlKCkgJiYgIXRoaXMuaXNEYWlseU1vZGUoKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBpID0gdGhpcy5fZ2V0TW9kZURhdGEoYSk7XG4gICAgICBpZiAoaS5oYWRJbnRlckFkTGFzdFJvdW5kKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoVG9OZXh0TWF0ZXJpYWxDYXJkKCk7XG4gICAgICAgIGkuaGFkSW50ZXJBZExhc3RSb3VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YVthXSA9IHRoaXMubG9jYWxEYXRhW2FdO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBNYXRlcmlhbENhcmQxVHJhaXQudHJhaXRLZXkgKyBcIl0g5YWz5Y2h5YiH5o2i5aSE55CG5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG59Il19