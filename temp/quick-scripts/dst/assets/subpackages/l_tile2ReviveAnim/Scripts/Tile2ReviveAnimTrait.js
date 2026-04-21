
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2ReviveAnim/Scripts/Tile2ReviveAnimTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90314WygkxJcYBE/4MK2hbz', 'Tile2ReviveAnimTrait');
// subpackages/l_tile2ReviveAnim/Scripts/Tile2ReviveAnimTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2ReviveAnimTrait = /** @class */ (function (_super) {
    __extends(Tile2ReviveAnimTrait, _super);
    function Tile2ReviveAnimTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._animType = 0;
        return _this;
    }
    Tile2ReviveAnimTrait.prototype.onLoad = function () {
        var e, r, i;
        _super.prototype.onLoad.call(this);
        this._animType = null !== (i = null === (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.config) || void 0 === r ? void 0 : r.animType) && void 0 !== i ? i : 0;
    };
    Tile2ReviveAnimTrait.prototype.onT2Revive_animType = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: this._animType
        });
    };
    Tile2ReviveAnimTrait.traitKey = "Tile2ReviveAnim";
    Tile2ReviveAnimTrait = __decorate([
        mj.trait,
        mj.class("Tile2ReviveAnimTrait")
    ], Tile2ReviveAnimTrait);
    return Tile2ReviveAnimTrait;
}(Trait_1.default));
exports.default = Tile2ReviveAnimTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyUmV2aXZlQW5pbS9TY3JpcHRzL1RpbGUyUmV2aXZlQW5pbVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQWtELHdDQUFLO0lBQXZEO1FBQUEscUVBY0M7UUFiQyxlQUFTLEdBQUcsQ0FBQyxDQUFDOztJQWFoQixDQUFDO0lBWEMscUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsTCxDQUFDO0lBQ0Qsa0RBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxJQUFJO1lBQ3hDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMxQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBWE0sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQUZqQixvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBY3hDO0lBQUQsMkJBQUM7Q0FkRCxBQWNDLENBZGlELGVBQUssR0FjdEQ7a0JBZG9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyUmV2aXZlQW5pbVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMlJldml2ZUFuaW1UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2FuaW1UeXBlID0gMDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMlJldml2ZUFuaW1cIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByLCBpO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2FuaW1UeXBlID0gbnVsbCAhPT0gKGkgPSBudWxsID09PSAociA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmNvbmZpZykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5hbmltVHlwZSkgJiYgdm9pZCAwICE9PSBpID8gaSA6IDA7XG4gIH1cbiAgb25UMlJldml2ZV9hbmltVHlwZSh0LCBlKSB7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLl9hbmltVHlwZVxuICAgIH0pO1xuICB9XG59Il19