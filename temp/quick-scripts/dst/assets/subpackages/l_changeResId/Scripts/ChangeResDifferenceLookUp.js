
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_changeResId/Scripts/ChangeResDifferenceLookUp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8758adYwfpNdoL7JZzE6GqH', 'ChangeResDifferenceLookUp');
// subpackages/l_changeResId/Scripts/ChangeResDifferenceLookUp.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var ChangeResDifferenceLookUp = /** @class */ (function () {
    function ChangeResDifferenceLookUp() {
        this.dict = new Map();
        this._cardIdSet = new Set();
        var e = this;
        DataReader_1.DataReader.getList(this.getConfigName()).forEach(function (t) {
            e._cardIdSet.add(t.CardId1);
            var r = Math.min(t.CardId1, t.CardId2) + "_" + Math.max(t.CardId1, t.CardId2);
            e.dict.set(r, t.Difference);
        });
    }
    ChangeResDifferenceLookUp.prototype.getConfigName = function () {
        return ConfigType_1.ConfigType.card_difference2;
    };
    ChangeResDifferenceLookUp.prototype.hasCard = function (e) {
        return this._cardIdSet.has(e);
    };
    ChangeResDifferenceLookUp.prototype.get = function (e, t) {
        if (e === t)
            return 0;
        var r = Math.min(e, t) + "_" + Math.max(e, t), i = this.dict.get(r);
        return void 0 !== i ? i : 50;
    };
    return ChangeResDifferenceLookUp;
}());
exports.default = ChangeResDifferenceLookUp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NoYW5nZVJlc0lkL1NjcmlwdHMvQ2hhbmdlUmVzRGlmZmVyZW5jZUxvb2tVcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQXdFO0FBQ3hFLDZFQUE0RTtBQUM1RTtJQUdFO1FBRkEsU0FBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsZUFBVSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsdUJBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUMxRCxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5RSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGlEQUFhLEdBQWI7UUFDRSxPQUFPLHVCQUFVLENBQUMsZ0JBQWdCLENBQUM7SUFDckMsQ0FBQztJQUNELDJDQUFPLEdBQVAsVUFBUSxDQUFDO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsdUNBQUcsR0FBSCxVQUFJLENBQUMsRUFBRSxDQUFDO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDM0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgeyBDb25maWdUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL2RhdGEvQ29uZmlnVHlwZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VSZXNEaWZmZXJlbmNlTG9va1VwIHtcbiAgZGljdCA9IG5ldyBNYXAoKTtcbiAgX2NhcmRJZFNldCA9IG5ldyBTZXQoKTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIERhdGFSZWFkZXIuZ2V0TGlzdCh0aGlzLmdldENvbmZpZ05hbWUoKSkuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgZS5fY2FyZElkU2V0LmFkZCh0LkNhcmRJZDEpO1xuICAgICAgdmFyIHIgPSBNYXRoLm1pbih0LkNhcmRJZDEsIHQuQ2FyZElkMikgKyBcIl9cIiArIE1hdGgubWF4KHQuQ2FyZElkMSwgdC5DYXJkSWQyKTtcbiAgICAgIGUuZGljdC5zZXQociwgdC5EaWZmZXJlbmNlKTtcbiAgICB9KTtcbiAgfVxuICBnZXRDb25maWdOYW1lKCkge1xuICAgIHJldHVybiBDb25maWdUeXBlLmNhcmRfZGlmZmVyZW5jZTI7XG4gIH1cbiAgaGFzQ2FyZChlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmRJZFNldC5oYXMoZSk7XG4gIH1cbiAgZ2V0KGUsIHQpIHtcbiAgICBpZiAoZSA9PT0gdCkgcmV0dXJuIDA7XG4gICAgdmFyIHIgPSBNYXRoLm1pbihlLCB0KSArIFwiX1wiICsgTWF0aC5tYXgoZSwgdCksXG4gICAgICBpID0gdGhpcy5kaWN0LmdldChyKTtcbiAgICByZXR1cm4gdm9pZCAwICE9PSBpID8gaSA6IDUwO1xuICB9XG59Il19