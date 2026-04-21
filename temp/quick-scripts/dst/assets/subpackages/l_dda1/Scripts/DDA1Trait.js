
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dda1/Scripts/DDA1Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '474e965ROxK+p1jmJbPBLm9', 'DDA1Trait');
// subpackages/l_dda1/Scripts/DDA1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DDA1Trait = /** @class */ (function (_super) {
    __extends(DDA1Trait, _super);
    function DDA1Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DDA1Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DDA1Trait.prototype.getStrategy = function () {
        return this.traitData.strategy || {
            x: 3
        };
    };
    DDA1Trait.prototype.onDCMgr_setDDASgy = function (t, e) {
        t.ins.ddaLayer.addStrategy({
            name: "DDA1",
            param: this.getStrategy()
        });
        e();
    };
    DDA1Trait.traitKey = "DDA1";
    DDA1Trait = __decorate([
        mj.trait,
        mj.class("DDA1Trait")
    ], DDA1Trait);
    return DDA1Trait;
}(Trait_1.default));
exports.default = DDA1Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RkYTEvU2NyaXB0cy9EREExVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUF1Qyw2QkFBSztJQUE1Qzs7SUFpQkEsQ0FBQztJQWZDLDBCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCwrQkFBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSTtZQUNoQyxDQUFDLEVBQUUsQ0FBQztTQUNMLENBQUM7SUFDSixDQUFDO0lBQ0QscUNBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztZQUN6QixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO1NBQzFCLENBQUMsQ0FBQztRQUNILENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQWZNLGtCQUFRLEdBQUcsTUFBTSxDQUFDO0lBRE4sU0FBUztRQUY3QixFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO09BQ0QsU0FBUyxDQWlCN0I7SUFBRCxnQkFBQztDQWpCRCxBQWlCQyxDQWpCc0MsZUFBSyxHQWlCM0M7a0JBakJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRERBMVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEREExVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRERBMVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgZ2V0U3RyYXRlZ3koKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhaXREYXRhLnN0cmF0ZWd5IHx8IHtcbiAgICAgIHg6IDNcbiAgICB9O1xuICB9XG4gIG9uRENNZ3Jfc2V0RERBU2d5KHQsIGUpIHtcbiAgICB0Lmlucy5kZGFMYXllci5hZGRTdHJhdGVneSh7XG4gICAgICBuYW1lOiBcIkREQTFcIixcbiAgICAgIHBhcmFtOiB0aGlzLmdldFN0cmF0ZWd5KClcbiAgICB9KTtcbiAgICBlKCk7XG4gIH1cbn0iXX0=