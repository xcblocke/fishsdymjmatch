
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/base/sdk/A_index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16f05hkMb5JkoVJlicW1jvN', 'A_index');
// Scripts/gamePlay/base/sdk/A_index.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../framework/trait/TraitManager");
var AudioManager_1 = require("../../../framework/manager/AudioManager");
var SDKManager_1 = require("./SDKManager");
var EventTrackingManager_1 = require("../../../base/event/EventTrackingManager");
TraitManager_1.default.getInstance();
window['TraitEventPositionType'] = {
    befor: 0,
    in: 1,
    after: 2
};
window['TraitCallbackReturnType'] = {
    return: 0,
    continue: 1,
    jump: 2
};
window['mj'].audioManager = AudioManager_1.default.getInstance();
window['mj'].sdk = SDKManager_1.default.getInstance();
window['mj'].eventTrackingManager = EventTrackingManager_1.default.getInstance();
// window['mj'].reportError = window['_reportError'] || function (e) {
//   console.error(e);
//   cc.game.emit("jsError", e);
// };
function l(e) {
    var t, o;
    if (e) {
        for (var n = null == e ? void 0 : e.refCount, i = null === (t = this.node) || void 0 === t ? void 0 : t.name, r = null === (o = this.node) || void 0 === o ? void 0 : o.parent; r;) {
            i = r.name + "/" + i;
            r = r.parent;
        }
        console.error("spine: skeletonData is not valid,nodePath: " + i + ",refCount: " + n);
    }
}
var s = sp.Skeleton.prototype.update;
sp.Skeleton.prototype.update = function (e) {
    var t;
    if (this.skeletonData)
        if (!this.skeletonData || cc.isValid(this.skeletonData, true) && (null === (t = this.skeletonData) || void 0 === t ? void 0 : t.textures))
            s.call(this, e);
        else {
            l.call(this, this.skeletonData);
            this.skeletonData = null;
        }
};
var c = sp.Skeleton.prototype._validateRender;
c && (sp.Skeleton.prototype._validateRender = function () {
    var e = this.skeletonData;
    if (e) {
        if (e.textures)
            c.call(this);
        else {
            l.call(this, e);
            this.disableRender();
            this.skeletonData = null;
        }
    }
    else
        this.disableRender();
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2Jhc2Uvc2RrL0FfaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUFpRTtBQUNqRSx3RUFBbUU7QUFDbkUsMkNBQXNDO0FBQ3RDLGlGQUE0RTtBQUM1RSxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzNCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHO0lBQ2pDLEtBQUssRUFBRSxDQUFDO0lBQ1IsRUFBRSxFQUFFLENBQUM7SUFDTCxLQUFLLEVBQUUsQ0FBQztDQUNULENBQUM7QUFDRixNQUFNLENBQUMseUJBQXlCLENBQUMsR0FBRztJQUNsQyxNQUFNLEVBQUUsQ0FBQztJQUNULFFBQVEsRUFBRSxDQUFDO0lBQ1gsSUFBSSxFQUFFLENBQUM7Q0FDUixDQUFDO0FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksR0FBRyxzQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsb0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLEdBQUcsOEJBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdkUsc0VBQXNFO0FBQ3RFLHNCQUFzQjtBQUN0QixnQ0FBZ0M7QUFDaEMsS0FBSztBQUNMLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDVixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxJQUFJLENBQUMsRUFBRTtRQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRztZQUNsTCxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQ2Q7UUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxHQUFHLENBQUMsR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDdEY7QUFDSCxDQUFDO0FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQ3JDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7SUFDeEMsSUFBSSxDQUFDLENBQUM7SUFDTixJQUFJLElBQUksQ0FBQyxZQUFZO1FBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFBSztZQUNyTCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDMUI7QUFDSCxDQUFDLENBQUM7QUFDRixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUM7QUFDOUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHO0lBQzVDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsSUFBSSxDQUFDLEVBQUU7UUFDTCxJQUFJLENBQUMsQ0FBQyxRQUFRO1lBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUFLO1lBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMxQjtLQUNGOztRQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUM5QixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gJy4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL0F1ZGlvTWFuYWdlcic7XG5pbXBvcnQgU0RLTWFuYWdlciBmcm9tICcuL1NES01hbmFnZXInO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL2Jhc2UvZXZlbnQvRXZlbnRUcmFja2luZ01hbmFnZXInO1xuVHJhaXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG53aW5kb3dbJ1RyYWl0RXZlbnRQb3NpdGlvblR5cGUnXSA9IHtcbiAgYmVmb3I6IDAsXG4gIGluOiAxLFxuICBhZnRlcjogMlxufTtcbndpbmRvd1snVHJhaXRDYWxsYmFja1JldHVyblR5cGUnXSA9IHtcbiAgcmV0dXJuOiAwLFxuICBjb250aW51ZTogMSxcbiAganVtcDogMlxufTtcbndpbmRvd1snbWonXS5hdWRpb01hbmFnZXIgPSBBdWRpb01hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbndpbmRvd1snbWonXS5zZGsgPSBTREtNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG53aW5kb3dbJ21qJ10uZXZlbnRUcmFja2luZ01hbmFnZXIgPSBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuLy8gd2luZG93WydtaiddLnJlcG9ydEVycm9yID0gd2luZG93WydfcmVwb3J0RXJyb3InXSB8fCBmdW5jdGlvbiAoZSkge1xuLy8gICBjb25zb2xlLmVycm9yKGUpO1xuLy8gICBjYy5nYW1lLmVtaXQoXCJqc0Vycm9yXCIsIGUpO1xuLy8gfTtcbmZ1bmN0aW9uIGwoZSkge1xuICB2YXIgdCwgbztcbiAgaWYgKGUpIHtcbiAgICBmb3IgKHZhciBuID0gbnVsbCA9PSBlID8gdm9pZCAwIDogZS5yZWZDb3VudCwgaSA9IG51bGwgPT09ICh0ID0gdGhpcy5ub2RlKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0Lm5hbWUsIHIgPSBudWxsID09PSAobyA9IHRoaXMubm9kZSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5wYXJlbnQ7IHI7KSB7XG4gICAgICBpID0gci5uYW1lICsgXCIvXCIgKyBpO1xuICAgICAgciA9IHIucGFyZW50O1xuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKFwic3BpbmU6IHNrZWxldG9uRGF0YSBpcyBub3QgdmFsaWQsbm9kZVBhdGg6IFwiICsgaSArIFwiLHJlZkNvdW50OiBcIiArIG4pO1xuICB9XG59XG52YXIgcyA9IHNwLlNrZWxldG9uLnByb3RvdHlwZS51cGRhdGU7XG5zcC5Ta2VsZXRvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGUpIHtcbiAgdmFyIHQ7XG4gIGlmICh0aGlzLnNrZWxldG9uRGF0YSkgaWYgKCF0aGlzLnNrZWxldG9uRGF0YSB8fCBjYy5pc1ZhbGlkKHRoaXMuc2tlbGV0b25EYXRhLCB0cnVlKSAmJiAobnVsbCA9PT0gKHQgPSB0aGlzLnNrZWxldG9uRGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC50ZXh0dXJlcykpIHMuY2FsbCh0aGlzLCBlKTtlbHNlIHtcbiAgICBsLmNhbGwodGhpcywgdGhpcy5za2VsZXRvbkRhdGEpO1xuICAgIHRoaXMuc2tlbGV0b25EYXRhID0gbnVsbDtcbiAgfVxufTtcbnZhciBjID0gc3AuU2tlbGV0b24ucHJvdG90eXBlLl92YWxpZGF0ZVJlbmRlcjtcbmMgJiYgKHNwLlNrZWxldG9uLnByb3RvdHlwZS5fdmFsaWRhdGVSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlID0gdGhpcy5za2VsZXRvbkRhdGE7XG4gIGlmIChlKSB7XG4gICAgaWYgKGUudGV4dHVyZXMpIGMuY2FsbCh0aGlzKTtlbHNlIHtcbiAgICAgIGwuY2FsbCh0aGlzLCBlKTtcbiAgICAgIHRoaXMuZGlzYWJsZVJlbmRlcigpO1xuICAgICAgdGhpcy5za2VsZXRvbkRhdGEgPSBudWxsO1xuICAgIH1cbiAgfSBlbHNlIHRoaXMuZGlzYWJsZVJlbmRlcigpO1xufSk7Il19