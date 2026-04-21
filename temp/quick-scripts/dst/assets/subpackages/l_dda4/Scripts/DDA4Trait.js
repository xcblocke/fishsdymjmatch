
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dda4/Scripts/DDA4Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79aca9u/tBGCZxAnfJ/45tA', 'DDA4Trait');
// subpackages/l_dda4/Scripts/DDA4Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DDA4Trait = /** @class */ (function (_super) {
    __extends(DDA4Trait, _super);
    function DDA4Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDA4Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DDA4Trait.prototype.getStrategy = function () {
        return this.traitData.strategy || {
            x: 3,
            y: 240,
            z: 10
        };
    };
    DDA4Trait.prototype.onDCMgr_setDDASgy = function (t, e) {
        t.ins.ddaLayer.addStrategy({
            name: "DDA4",
            param: this.getStrategy()
        });
        e();
    };
    DDA4Trait.traitKey = "DDA4";
    DDA4Trait = __decorate([
        mj.trait,
        mj.class("DDA4Trait")
    ], DDA4Trait);
    return DDA4Trait;
}(Trait_1.default));
exports.default = DDA4Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RkYTQvU2NyaXB0cy9EREE0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUF1Qyw2QkFBSztJQUE1Qzs7SUFtQkEsQ0FBQztJQWpCQywwQkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsK0JBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUk7WUFDaEMsQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxFQUFFO1NBQ04sQ0FBQztJQUNKLENBQUM7SUFDRCxxQ0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1lBQ3pCLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUU7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBakJNLGtCQUFRLEdBQUcsTUFBTSxDQUFDO0lBRE4sU0FBUztRQUY3QixFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO09BQ0QsU0FBUyxDQW1CN0I7SUFBRCxnQkFBQztDQW5CRCxBQW1CQyxDQW5Cc0MsZUFBSyxHQW1CM0M7a0JBbkJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRERBNFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEREE0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRERBNFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgZ2V0U3RyYXRlZ3koKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhaXREYXRhLnN0cmF0ZWd5IHx8IHtcbiAgICAgIHg6IDMsXG4gICAgICB5OiAyNDAsXG4gICAgICB6OiAxMFxuICAgIH07XG4gIH1cbiAgb25EQ01ncl9zZXREREFTZ3kodCwgZSkge1xuICAgIHQuaW5zLmRkYUxheWVyLmFkZFN0cmF0ZWd5KHtcbiAgICAgIG5hbWU6IFwiRERBNFwiLFxuICAgICAgcGFyYW06IHRoaXMuZ2V0U3RyYXRlZ3koKVxuICAgIH0pO1xuICAgIGUoKTtcbiAgfVxufSJdfQ==