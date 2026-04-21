
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_goldRankPush/Scripts/GoldRankPushTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a16e4Bo0GtAhoNUnUwxU+Gp', 'GoldRankPushTrait');
// subpackages/l_goldRankPush/Scripts/GoldRankPushTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var PushManager_1 = require("../../../Scripts/gamePlay/base/push/PushManager");
var Config_1 = require("../../../Scripts/Config");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var c = {
    pushHour: 17,
    opewaynum: "mbgqgoldrank1",
    taskType: "mbgqgoldrank01"
};
var GoldRankPushTrait = /** @class */ (function (_super) {
    __extends(GoldRankPushTrait, _super);
    function GoldRankPushTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = c;
        return _this;
    }
    GoldRankPushTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        if (this._traitData) {
            void 0 !== this._traitData.Time && (this._config.pushHour = this._traitData.Time);
            void 0 !== this._traitData.PlanCode && (this._config.opewaynum = this._traitData.PlanCode);
            void 0 !== this._traitData.StrategyCode && (this._config.taskType = this._traitData.StrategyCode);
        }
    };
    GoldRankPushTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
        return _t;
    };
    GoldRankPushTrait.prototype.onGameHide = function () {
        this.checkAndTriggerPush();
    };
    GoldRankPushTrait.prototype.getConfig = function () {
        return this._config;
    };
    GoldRankPushTrait.prototype.getRankModel = function () {
        var t = mj.getClassByName("RankModel");
        return null == t ? void 0 : t.getInstance();
    };
    GoldRankPushTrait.prototype.hasParticipatedInActivity = function () {
        var t = this.getRankModel();
        return !!t && !(!t.hasOpeningActivity || !t.hasOpeningActivity());
    };
    GoldRankPushTrait.prototype.isActivityEnded = function () {
        var t = this.getRankModel();
        return !t || !!t.isNowActivityFinished && t.isNowActivityFinished();
    };
    GoldRankPushTrait.prototype.onLoginM_enterGame = function (t, e) {
        var i = PushManager_1.default.getInstance().getOpenAppOpeway();
        if (i && i.opewaynum === this._config.opewaynum) {
            JumpManager_1.default.getInstance().jumpToGame();
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    GoldRankPushTrait.prototype.onPushMgr_init = function (t, e) {
        this.checkAndTriggerPush();
        e();
    };
    GoldRankPushTrait.prototype.checkAndTriggerPush = function () {
        this.isActivityEnded() || this.hasParticipatedInActivity() && this.sendPush();
    };
    GoldRankPushTrait.prototype.sendPush = function () {
        var t = this.getConfig(), e = PushManager_1.default.getInstance().getPushTimestamp(t.pushHour);
        PushManager_1.default.getInstance().sendGamePush({
            opewaynum: t.opewaynum,
            taskType: t.taskType,
            sendTime: e
        }, {
            keyNum: "participated"
        });
    };
    GoldRankPushTrait.traitKey = "GoldRankPush";
    GoldRankPushTrait = __decorate([
        mj.trait,
        mj.class("GoldRankPushTrait")
    ], GoldRankPushTrait);
    return GoldRankPushTrait;
}(Trait_1.default));
exports.default = GoldRankPushTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2dvbGRSYW5rUHVzaC9TY3JpcHRzL0dvbGRSYW5rUHVzaFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsK0VBQTBFO0FBQzFFLGtEQUFpRTtBQUNqRSxzRUFBaUU7QUFDakUsSUFBSSxDQUFDLEdBQUc7SUFDTixRQUFRLEVBQUUsRUFBRTtJQUNaLFNBQVMsRUFBRSxlQUFlO0lBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7Q0FDM0IsQ0FBQztBQUdGO0lBQStDLHFDQUFLO0lBQXBEO1FBQUEscUVBOERDO1FBN0RDLGFBQU8sR0FBRyxDQUFDLENBQUM7O0lBNkRkLENBQUM7SUEzREMsa0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRixLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0YsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25HO0lBQ0gsQ0FBQztJQUNELCtDQUFtQixHQUFuQjtRQUNFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNaLEVBQUUsQ0FBQywrQkFBc0IsQ0FBQyxHQUFH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cmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgUHVzaE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3B1c2gvUHVzaE1hbmFnZXInO1xuaW1wb3J0IHsgRVZUX01TR19LRVlfRVZFTlRfSElERSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQ29uZmlnJztcbmltcG9ydCBKdW1wTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvanVtcC9KdW1wTWFuYWdlcic7XG52YXIgYyA9IHtcbiAgcHVzaEhvdXI6IDE3LFxuICBvcGV3YXludW06IFwibWJncWdvbGRyYW5rMVwiLFxuICB0YXNrVHlwZTogXCJtYmdxZ29sZHJhbmswMVwiXG59O1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJHb2xkUmFua1B1c2hUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29sZFJhbmtQdXNoVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jb25maWcgPSBjO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkdvbGRSYW5rUHVzaFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgaWYgKHRoaXMuX3RyYWl0RGF0YSkge1xuICAgICAgdm9pZCAwICE9PSB0aGlzLl90cmFpdERhdGEuVGltZSAmJiAodGhpcy5fY29uZmlnLnB1c2hIb3VyID0gdGhpcy5fdHJhaXREYXRhLlRpbWUpO1xuICAgICAgdm9pZCAwICE9PSB0aGlzLl90cmFpdERhdGEuUGxhbkNvZGUgJiYgKHRoaXMuX2NvbmZpZy5vcGV3YXludW0gPSB0aGlzLl90cmFpdERhdGEuUGxhbkNvZGUpO1xuICAgICAgdm9pZCAwICE9PSB0aGlzLl90cmFpdERhdGEuU3RyYXRlZ3lDb2RlICYmICh0aGlzLl9jb25maWcudGFza1R5cGUgPSB0aGlzLl90cmFpdERhdGEuU3RyYXRlZ3lDb2RlKTtcbiAgICB9XG4gIH1cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICB2YXIgX3QgPSB7fTtcbiAgICBfdFtFVlRfTVNHX0tFWV9FVkVOVF9ISURFXSA9IHRoaXMub25HYW1lSGlkZS5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfdDtcbiAgfVxuICBvbkdhbWVIaWRlKCkge1xuICAgIHRoaXMuY2hlY2tBbmRUcmlnZ2VyUHVzaCgpO1xuICB9XG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIGdldFJhbmtNb2RlbCgpIHtcbiAgICB2YXIgdCA9IG1qLmdldENsYXNzQnlOYW1lKFwiUmFua01vZGVsXCIpO1xuICAgIHJldHVybiBudWxsID09IHQgPyB2b2lkIDAgOiB0LmdldEluc3RhbmNlKCk7XG4gIH1cbiAgaGFzUGFydGljaXBhdGVkSW5BY3Rpdml0eSgpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0UmFua01vZGVsKCk7XG4gICAgcmV0dXJuICEhdCAmJiAhKCF0Lmhhc09wZW5pbmdBY3Rpdml0eSB8fCAhdC5oYXNPcGVuaW5nQWN0aXZpdHkoKSk7XG4gIH1cbiAgaXNBY3Rpdml0eUVuZGVkKCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRSYW5rTW9kZWwoKTtcbiAgICByZXR1cm4gIXQgfHwgISF0LmlzTm93QWN0aXZpdHlGaW5pc2hlZCAmJiB0LmlzTm93QWN0aXZpdHlGaW5pc2hlZCgpO1xuICB9XG4gIG9uTG9naW5NX2VudGVyR2FtZSh0LCBlKSB7XG4gICAgdmFyIGkgPSBQdXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldE9wZW5BcHBPcGV3YXkoKTtcbiAgICBpZiAoaSAmJiBpLm9wZXdheW51bSA9PT0gdGhpcy5fY29uZmlnLm9wZXdheW51bSkge1xuICAgICAgSnVtcE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5qdW1wVG9HYW1lKCk7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uUHVzaE1ncl9pbml0KHQsIGUpIHtcbiAgICB0aGlzLmNoZWNrQW5kVHJpZ2dlclB1c2goKTtcbiAgICBlKCk7XG4gIH1cbiAgY2hlY2tBbmRUcmlnZ2VyUHVzaCgpIHtcbiAgICB0aGlzLmlzQWN0aXZpdHlFbmRlZCgpIHx8IHRoaXMuaGFzUGFydGljaXBhdGVkSW5BY3Rpdml0eSgpICYmIHRoaXMuc2VuZFB1c2goKTtcbiAgfVxuICBzZW5kUHVzaCgpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0Q29uZmlnKCksXG4gICAgICBlID0gUHVzaE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRQdXNoVGltZXN0YW1wKHQucHVzaEhvdXIpO1xuICAgIFB1c2hNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2VuZEdhbWVQdXNoKHtcbiAgICAgIG9wZXdheW51bTogdC5vcGV3YXludW0sXG4gICAgICB0YXNrVHlwZTogdC50YXNrVHlwZSxcbiAgICAgIHNlbmRUaW1lOiBlXG4gICAgfSwge1xuICAgICAga2V5TnVtOiBcInBhcnRpY2lwYXRlZFwiXG4gICAgfSk7XG4gIH1cbn0iXX0=