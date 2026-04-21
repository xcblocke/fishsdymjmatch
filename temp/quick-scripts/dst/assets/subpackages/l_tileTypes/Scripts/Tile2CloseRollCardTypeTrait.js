
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tileTypes/Scripts/Tile2CloseRollCardTypeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79154WHxZ1Ev64C0F+JlYPK', 'Tile2CloseRollCardTypeTrait');
// subpackages/l_tileTypes/Scripts/Tile2CloseRollCardTypeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2CloseRollCardTypeTrait = /** @class */ (function (_super) {
    __extends(Tile2CloseRollCardTypeTrait, _super);
    function Tile2CloseRollCardTypeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2CloseRollCardTypeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2CloseRollCardTypeTrait.prototype.onT2GameCtrl_getTileTypes = function (t, e) {
        t.beforReturnVal && (t.beforReturnVal = t.beforReturnVal.replace(new RegExp(TileTypeEnum_1.ETileType.RollCard, "g"), ""));
        e({
            returnVal: t.beforReturnVal
        });
    };
    Tile2CloseRollCardTypeTrait.traitKey = "Tile2CloseRollCardType";
    Tile2CloseRollCardTypeTrait = __decorate([
        mj.trait,
        mj.class("Tile2CloseRollCardTypeTrait")
    ], Tile2CloseRollCardTypeTrait);
    return Tile2CloseRollCardTypeTrait;
}(Trait_1.default));
exports.default = Tile2CloseRollCardTypeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGVUeXBlcy9TY3JpcHRzL1RpbGUyQ2xvc2VSb2xsQ2FyZFR5cGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUZBQTZFO0FBQzdFLGdFQUEyRDtBQUczRDtJQUF5RCwrQ0FBSztJQUE5RDs7SUFXQSxDQUFDO0lBVEMsNENBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELCtEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyx3QkFBUyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNHLENBQUMsQ0FBQztZQUNBLFNBQVMsRUFBRSxDQUFDLENBQUMsY0FBYztTQUM1QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBVE0sb0NBQVEsR0FBRyx3QkFBd0IsQ0FBQztJQUR4QiwyQkFBMkI7UUFGL0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDO09BQ25CLDJCQUEyQixDQVcvQztJQUFELGtDQUFDO0NBWEQsQUFXQyxDQVh3RCxlQUFLLEdBVzdEO2tCQVhvQiwyQkFBMkIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVGlsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGlsZTJDbG9zZVJvbGxDYXJkVHlwZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMkNsb3NlUm9sbENhcmRUeXBlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGlsZTJDbG9zZVJvbGxDYXJkVHlwZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25UMkdhbWVDdHJsX2dldFRpbGVUeXBlcyh0LCBlKSB7XG4gICAgdC5iZWZvclJldHVyblZhbCAmJiAodC5iZWZvclJldHVyblZhbCA9IHQuYmVmb3JSZXR1cm5WYWwucmVwbGFjZShuZXcgUmVnRXhwKEVUaWxlVHlwZS5Sb2xsQ2FyZCwgXCJnXCIpLCBcIlwiKSk7XG4gICAgZSh7XG4gICAgICByZXR1cm5WYWw6IHQuYmVmb3JSZXR1cm5WYWxcbiAgICB9KTtcbiAgfVxufSJdfQ==