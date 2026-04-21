
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/framework/manager/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73b60ZxUjpDsZ0JJ7+VJFM1', 'AudioManager');
// Scripts/framework/manager/AudioManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioType = void 0;
var ConfigType_1 = require("../../gamePlay/base/data/ConfigType");
var DataReader_1 = require("../data/DataReader");
var ResManager_1 = require("./ResManager");
var AudioType;
(function (AudioType) {
    AudioType[AudioType["BGM"] = 0] = "BGM";
    AudioType[AudioType["Effect"] = 1] = "Effect";
})(AudioType = exports.AudioType || (exports.AudioType = {}));
var AudioManager = /** @class */ (function () {
    function AudioManager() {
        this._currentBgmId = -1;
        this._currentBgmUrl = "";
        this._bgmVolume = 1;
        this._EffectVolume = 1;
        this._bgmMuted = false;
        this._EffectMuted = false;
        this._playingEffectMap = new Map();
        this._maxEffectCount = 8;
        this._defaultPath = "audios/";
    }
    AudioManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new AudioManager();
            this._instance.init();
        }
        return this._instance;
    };
    AudioManager.prototype.init = function () {
        this.loadVolumeSettings();
        cc.audioEngine.setMusicVolume(this._bgmVolume);
        cc.audioEngine.setEffectsVolume(this._EffectVolume);
    };
    AudioManager.prototype.loadVolumeSettings = function () {
        var e = cc.sys.localStorage.getItem("audio_bgm_volume"), t = cc.sys.localStorage.getItem("audio_Effect_volume"), o = cc.sys.localStorage.getItem("audio_bgm_mute"), n = cc.sys.localStorage.getItem("audio_Effect_mute");
        this._bgmVolume = e ? parseFloat(e) : 1;
        this._EffectVolume = t ? parseFloat(t) : 1;
        this._bgmMuted = "true" === o;
        this._EffectMuted = "true" === n;
    };
    AudioManager.prototype.saveVolumeSettings = function () {
        cc.sys.localStorage.setItem("audio_bgm_volume", this._bgmVolume.toString());
        cc.sys.localStorage.setItem("audio_Effect_volume", this._EffectVolume.toString());
        cc.sys.localStorage.setItem("audio_bgm_mute", this._bgmMuted.toString());
        cc.sys.localStorage.setItem("audio_Effect_mute", this._EffectMuted.toString());
    };
    AudioManager.prototype.playBGM = function (e, t) {
        if (t === void 0) { t = true; }
        return __awaiter(this, void 0, void 0, function () {
            var o, n;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(o = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.audio_config, e))) return [3 /*break*/, 2];
                        (n = o.Bundle) && "" !== n || (n = ResManager_1.resManager.defaultBundleName);
                        return [4 /*yield*/, this._playBGM(o.Url, t, n)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AudioManager.prototype._playBGM = function (e, t, o) {
        if (t === void 0) { t = true; }
        return __awaiter(this, void 0, void 0, function () {
            var n, i, __error_1_0_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e = this._defaultPath + e;
                        if (this._currentBgmUrl === e && cc.audioEngine.isMusicPlaying()) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ResManager_1.resManager.loadRes(e, cc.AudioClip, o)];
                    case 2:
                        n = _a.sent();
                        -1 !== this._currentBgmId && this.stopBGM();
                        this._currentBgmUrl = e;
                        this._currentBgmId = cc.audioEngine.playMusic(n, t);
                        if (this._bgmMuted) {
                            cc.audioEngine.setMusicVolume(0);
                        }
                        else {
                            cc.audioEngine.setMusicVolume(this._bgmVolume);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        __error_1_0_1 = _a.sent();
                        i = __error_1_0_1;
                        console.error("[AudioManager] 播放BGM失败: " + e + ", 原因: " + i.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AudioManager.prototype.stopBGM = function () {
        if (-1 !== this._currentBgmId) {
            cc.audioEngine.stopMusic();
            this._currentBgmId = -1;
            this._currentBgmUrl = "";
        }
    };
    AudioManager.prototype.pauseBGM = function () {
        -1 !== this._currentBgmId && cc.audioEngine.pauseMusic();
    };
    AudioManager.prototype.resumeBGM = function () {
        -1 !== this._currentBgmId && cc.audioEngine.resumeMusic();
    };
    AudioManager.prototype.setBGMVolume = function (e) {
        this._bgmVolume = Math.max(0, Math.min(1, e));
        this._bgmMuted || cc.audioEngine.setMusicVolume(this._bgmVolume);
        this.saveVolumeSettings();
    };
    AudioManager.prototype.getBGMVolume = function () {
        return this._bgmVolume;
    };
    AudioManager.prototype.setBGMMuted = function (e) {
        this._bgmMuted = e;
        cc.audioEngine.setMusicVolume(e ? 0 : this._bgmVolume);
        this.saveVolumeSettings();
    };
    AudioManager.prototype.isBGMMuted = function () {
        return this._bgmMuted;
    };
    AudioManager.prototype.fadeBGMIn = function (e) {
        if (e === void 0) { e = 1; }
        var t = this;
        if (!this._bgmMuted) {
            var o = 0;
            this._bgmVolume;
            cc.audioEngine.setMusicVolume(0);
            var n = setInterval(function () {
                if (t._bgmMuted)
                    clearInterval(n);
                else {
                    o += 0.05;
                    var i = Math.min(o / e * t._bgmVolume, t._bgmVolume);
                    cc.audioEngine.setMusicVolume(i);
                    if (o >= e) {
                        clearInterval(n);
                        cc.audioEngine.setMusicVolume(t._bgmVolume);
                    }
                }
            }, 50);
        }
    };
    AudioManager.prototype.fadeBGMOut = function (e, t) {
        if (e === void 0) { e = 1; }
        if (t === void 0) { t = true; }
        var o = this;
        var n = 0, i = this._bgmMuted ? 0 : this._bgmVolume, r = setInterval(function () {
            n += 0.05;
            var a = Math.max(i * (1 - n / e), 0);
            cc.audioEngine.setMusicVolume(a);
            if (n >= e) {
                clearInterval(r);
                cc.audioEngine.setMusicVolume(0);
                t && o.stopBGM();
            }
        }, 50);
    };
    AudioManager.prototype.playEffect = function (e, t, o) {
        if (t === void 0) { t = false; }
        return __awaiter(this, void 0, void 0, function () {
            var n, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(n = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.audio_config, e))) return [3 /*break*/, 2];
                        (i = n.Bundle) && "" !== i || (i = ResManager_1.resManager.defaultBundleName);
                        return [4 /*yield*/, this._playEffect(n.Url, t, i, o)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, -1];
                }
            });
        });
    };
    AudioManager.prototype._playEffect = function (e, t, o, n) {
        if (t === void 0) { t = false; }
        return __awaiter(this, void 0, void 0, function () {
            var i, a, l, c, u, __error_1_0_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        u = this;
                        if (this._EffectMuted) {
                            n && n();
                            return [2 /*return*/, -1];
                        }
                        this._playingEffectMap.size >= this._maxEffectCount && this.stopOldestEffect();
                        e = this._defaultPath + e;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ResManager_1.resManager.loadRes(e, cc.AudioClip, o)];
                    case 2:
                        i = _a.sent();
                        if (-1 !== (a = cc.audioEngine.playEffect(i, t))) {
                            l = {
                                audioId: a,
                                url: e,
                                finishCallback: n
                            };
                            this._playingEffectMap.set(a, l);
                            cc.audioEngine.setFinishCallback(a, function () {
                                u._playingEffectMap.delete(a);
                                null == n || n();
                            });
                        }
                        return [2 /*return*/, a];
                    case 3:
                        __error_1_0_2 = _a.sent();
                        c = __error_1_0_2;
                        console.error("[AudioManager] 播放音效失败: " + e + ", 原因: " + c.message);
                        return [2 /*return*/, -1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AudioManager.prototype.stopEffect = function (e) {
        if (-1 !== e) {
            cc.audioEngine.stopEffect(e);
            this._playingEffectMap.delete(e);
        }
    };
    AudioManager.prototype.stopAllEffect = function () {
        cc.audioEngine.stopAllEffects();
        this._playingEffectMap.clear();
    };
    AudioManager.prototype.pauseEffect = function (e) {
        -1 !== e && cc.audioEngine.pauseEffect(e);
    };
    AudioManager.prototype.pauseAllEffect = function () {
        cc.audioEngine.pauseAllEffects();
    };
    AudioManager.prototype.resumeEffect = function (e) {
        -1 !== e && cc.audioEngine.resumeEffect(e);
    };
    AudioManager.prototype.resumeAllEffect = function () {
        cc.audioEngine.resumeAllEffects();
    };
    AudioManager.prototype.stopOldestEffect = function () {
        var e = this._playingEffectMap.keys().next().value;
        void 0 !== e && this.stopEffect(e);
    };
    AudioManager.prototype.setEffectVolume = function (e) {
        this._EffectVolume = Math.max(0, Math.min(1, e));
        this._EffectMuted || cc.audioEngine.setEffectsVolume(this._EffectVolume);
        this.saveVolumeSettings();
    };
    AudioManager.prototype.getEffectVolume = function () {
        return this._EffectVolume;
    };
    AudioManager.prototype.setEffectMuted = function (e) {
        this._EffectMuted = e;
        this.saveVolumeSettings();
    };
    AudioManager.prototype.isEffectMuted = function () {
        return this._EffectMuted;
    };
    AudioManager.prototype.setMaxEffectCount = function (e) {
        this._maxEffectCount = Math.max(1, e);
    };
    AudioManager.prototype.setAllMuted = function (e) {
        this.setBGMMuted(e);
        this.setEffectMuted(e);
    };
    AudioManager.prototype.stopAll = function () {
        this.stopBGM();
        this.stopAllEffect();
    };
    AudioManager.prototype.pauseAll = function () {
        this.pauseBGM();
        this.pauseAllEffect();
    };
    AudioManager.prototype.resumeAll = function () {
        this.resumeBGM();
        this.resumeAllEffect();
    };
    AudioManager.prototype.preloadAudio = function (e, t) {
        return __awaiter(this, void 0, void 0, function () {
            var o, n, __error_1_0_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        n = this;
                        e = e.map(function (e) {
                            return n._defaultPath + e;
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ResManager_1.resManager.loadRes(e, cc.AudioClip, t)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        __error_1_0_3 = _a.sent();
                        o = __error_1_0_3;
                        console.error("音频预加载失败:", o);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AudioManager.prototype.getPlayingEffectCount = function () {
        return this._playingEffectMap.size;
    };
    AudioManager.prototype.isEffectPlaying = function (e) {
        return this._playingEffectMap.has(e);
    };
    AudioManager.prototype.cleanup = function () {
        this.stopAll();
        this._playingEffectMap.clear();
    };
    AudioManager._instance = null;
    __decorate([
        mj.traitEvent("AudioMgr_playBGM")
    ], AudioManager.prototype, "playBGM", null);
    __decorate([
        mj.traitEvent("AudioMgr_playEff")
    ], AudioManager.prototype, "playEffect", null);
    return AudioManager;
}());
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0F1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUFpRTtBQUNqRSxpREFBZ0Q7QUFDaEQsMkNBQTBDO0FBQzFDLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix1Q0FBTyxDQUFBO0lBQ1AsNkNBQVUsQ0FBQTtBQUNaLENBQUMsRUFIVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUdwQjtBQUNEO0lBQUE7UUFDRSxrQkFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25CLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLHNCQUFpQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDOUIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsaUJBQVksR0FBRyxTQUFTLENBQUM7SUEyUDNCLENBQUM7SUF6UFEsd0JBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN2QjtRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsMkJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FB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LENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7NEJBRS9CLHNCQUFPOzs7O0tBQ1I7SUFDRCw0Q0FBcUIsR0FBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUNELHNDQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsOEJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBelBNLHNCQUFTLEdBQUcsSUFBSSxDQUFDO0lBOEJ4QjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7K0NBUWpDO0lBdUZEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztrREFRakM7SUF1SEgsbUJBQUM7Q0FwUUQsQUFvUUMsSUFBQTtrQkFwUW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWdUeXBlIH0gZnJvbSAnLi4vLi4vZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4uL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgeyByZXNNYW5hZ2VyIH0gZnJvbSAnLi9SZXNNYW5hZ2VyJztcbmV4cG9ydCBlbnVtIEF1ZGlvVHlwZSB7XG4gIEJHTSA9IDAsXG4gIEVmZmVjdCA9IDEsXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb01hbmFnZXIge1xuICBfY3VycmVudEJnbUlkID0gLTE7XG4gIF9jdXJyZW50QmdtVXJsID0gXCJcIjtcbiAgX2JnbVZvbHVtZSA9IDE7XG4gIF9FZmZlY3RWb2x1bWUgPSAxO1xuICBfYmdtTXV0ZWQgPSBmYWxzZTtcbiAgX0VmZmVjdE11dGVkID0gZmFsc2U7XG4gIF9wbGF5aW5nRWZmZWN0TWFwID0gbmV3IE1hcCgpO1xuICBfbWF4RWZmZWN0Q291bnQgPSA4O1xuICBfZGVmYXVsdFBhdGggPSBcImF1ZGlvcy9cIjtcbiAgc3RhdGljIF9pbnN0YW5jZSA9IG51bGw7XG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBBdWRpb01hbmFnZXIoKTtcbiAgICAgIHRoaXMuX2luc3RhbmNlLmluaXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5sb2FkVm9sdW1lU2V0dGluZ3MoKTtcbiAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh0aGlzLl9iZ21Wb2x1bWUpO1xuICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodGhpcy5fRWZmZWN0Vm9sdW1lKTtcbiAgfVxuICBsb2FkVm9sdW1lU2V0dGluZ3MoKSB7XG4gICAgdmFyIGUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdWRpb19iZ21fdm9sdW1lXCIpLFxuICAgICAgdCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1ZGlvX0VmZmVjdF92b2x1bWVcIiksXG4gICAgICBvID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXVkaW9fYmdtX211dGVcIiksXG4gICAgICBuID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXVkaW9fRWZmZWN0X211dGVcIik7XG4gICAgdGhpcy5fYmdtVm9sdW1lID0gZSA/IHBhcnNlRmxvYXQoZSkgOiAxO1xuICAgIHRoaXMuX0VmZmVjdFZvbHVtZSA9IHQgPyBwYXJzZUZsb2F0KHQpIDogMTtcbiAgICB0aGlzLl9iZ21NdXRlZCA9IFwidHJ1ZVwiID09PSBvO1xuICAgIHRoaXMuX0VmZmVjdE11dGVkID0gXCJ0cnVlXCIgPT09IG47XG4gIH1cbiAgc2F2ZVZvbHVtZVNldHRpbmdzKCkge1xuICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1ZGlvX2JnbV92b2x1bWVcIiwgdGhpcy5fYmdtVm9sdW1lLnRvU3RyaW5nKCkpO1xuICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1ZGlvX0VmZmVjdF92b2x1bWVcIiwgdGhpcy5fRWZmZWN0Vm9sdW1lLnRvU3RyaW5nKCkpO1xuICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1ZGlvX2JnbV9tdXRlXCIsIHRoaXMuX2JnbU11dGVkLnRvU3RyaW5nKCkpO1xuICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1ZGlvX0VmZmVjdF9tdXRlXCIsIHRoaXMuX0VmZmVjdE11dGVkLnRvU3RyaW5nKCkpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQXVkaW9NZ3JfcGxheUJHTVwiKVxuICBhc3luYyBwbGF5QkdNKGUsIHQgPSB0cnVlKSB7XG4gICAgdmFyIG8sIG47XG4gICAgaWYgKG8gPSBEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUuYXVkaW9fY29uZmlnLCBlKSkge1xuICAgICAgKG4gPSBvLkJ1bmRsZSkgJiYgXCJcIiAhPT0gbiB8fCAobiA9IHJlc01hbmFnZXIuZGVmYXVsdEJ1bmRsZU5hbWUpO1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3BsYXlCR00oby5VcmwsIHQsIG4pO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgYXN5bmMgX3BsYXlCR00oZSwgdCA9IHRydWUsIG8/KSB7XG4gICAgdmFyIG4sIGk7XG4gICAgZSA9IHRoaXMuX2RlZmF1bHRQYXRoICsgZTtcbiAgICBpZiAodGhpcy5fY3VycmVudEJnbVVybCA9PT0gZSAmJiBjYy5hdWRpb0VuZ2luZS5pc011c2ljUGxheWluZygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBuID0gYXdhaXQgcmVzTWFuYWdlci5sb2FkUmVzKGUsIGNjLkF1ZGlvQ2xpcCwgbyk7XG4gICAgICAtMSAhPT0gdGhpcy5fY3VycmVudEJnbUlkICYmIHRoaXMuc3RvcEJHTSgpO1xuICAgICAgdGhpcy5fY3VycmVudEJnbVVybCA9IGU7XG4gICAgICB0aGlzLl9jdXJyZW50QmdtSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMobiwgdCk7XG4gICAgICBpZiAodGhpcy5fYmdtTXV0ZWQpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh0aGlzLl9iZ21Wb2x1bWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKF9fZXJyb3JfMV8wKSB7XG4gICAgICBpID0gX19lcnJvcl8xXzA7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW0F1ZGlvTWFuYWdlcl0g5pKt5pS+QkdN5aSx6LSlOiBcIiArIGUgKyBcIiwg5Y6f5ZugOiBcIiArIGkubWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBzdG9wQkdNKCkge1xuICAgIGlmICgtMSAhPT0gdGhpcy5fY3VycmVudEJnbUlkKSB7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRCZ21JZCA9IC0xO1xuICAgICAgdGhpcy5fY3VycmVudEJnbVVybCA9IFwiXCI7XG4gICAgfVxuICB9XG4gIHBhdXNlQkdNKCkge1xuICAgIC0xICE9PSB0aGlzLl9jdXJyZW50QmdtSWQgJiYgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xuICB9XG4gIHJlc3VtZUJHTSgpIHtcbiAgICAtMSAhPT0gdGhpcy5fY3VycmVudEJnbUlkICYmIGNjLmF1ZGlvRW5naW5lLnJlc3VtZU11c2ljKCk7XG4gIH1cbiAgc2V0QkdNVm9sdW1lKGUpIHtcbiAgICB0aGlzLl9iZ21Wb2x1bWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBlKSk7XG4gICAgdGhpcy5fYmdtTXV0ZWQgfHwgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodGhpcy5fYmdtVm9sdW1lKTtcbiAgICB0aGlzLnNhdmVWb2x1bWVTZXR0aW5ncygpO1xuICB9XG4gIGdldEJHTVZvbHVtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmdtVm9sdW1lO1xuICB9XG4gIHNldEJHTU11dGVkKGUpIHtcbiAgICB0aGlzLl9iZ21NdXRlZCA9IGU7XG4gICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoZSA/IDAgOiB0aGlzLl9iZ21Wb2x1bWUpO1xuICAgIHRoaXMuc2F2ZVZvbHVtZVNldHRpbmdzKCk7XG4gIH1cbiAgaXNCR01NdXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmdtTXV0ZWQ7XG4gIH1cbiAgZmFkZUJHTUluKGUgPSAxKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmICghdGhpcy5fYmdtTXV0ZWQpIHtcbiAgICAgIHZhciBvID0gMDtcbiAgICAgIHRoaXMuX2JnbVZvbHVtZTtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKDApO1xuICAgICAgdmFyIG4gPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0Ll9iZ21NdXRlZCkgY2xlYXJJbnRlcnZhbChuKTtlbHNlIHtcbiAgICAgICAgICBvICs9IDAuMDU7XG4gICAgICAgICAgdmFyIGkgPSBNYXRoLm1pbihvIC8gZSAqIHQuX2JnbVZvbHVtZSwgdC5fYmdtVm9sdW1lKTtcbiAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZShpKTtcbiAgICAgICAgICBpZiAobyA+PSBlKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKG4pO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodC5fYmdtVm9sdW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDUwKTtcbiAgICB9XG4gIH1cbiAgZmFkZUJHTU91dChlID0gMSwgdCA9IHRydWUpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgdmFyIG4gPSAwLFxuICAgICAgaSA9IHRoaXMuX2JnbU11dGVkID8gMCA6IHRoaXMuX2JnbVZvbHVtZSxcbiAgICAgIHIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG4gKz0gMC4wNTtcbiAgICAgICAgdmFyIGEgPSBNYXRoLm1heChpICogKDEgLSBuIC8gZSksIDApO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZShhKTtcbiAgICAgICAgaWYgKG4gPj0gZSkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwocik7XG4gICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoMCk7XG4gICAgICAgICAgdCAmJiBvLnN0b3BCR00oKTtcbiAgICAgICAgfVxuICAgICAgfSwgNTApO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQXVkaW9NZ3JfcGxheUVmZlwiKVxuICBhc3luYyBwbGF5RWZmZWN0KGUsIHQgPSBmYWxzZSwgbz8pIHtcbiAgICB2YXIgbiwgaTtcbiAgICBpZiAobiA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5hdWRpb19jb25maWcsIGUpKSB7XG4gICAgICAoaSA9IG4uQnVuZGxlKSAmJiBcIlwiICE9PSBpIHx8IChpID0gcmVzTWFuYWdlci5kZWZhdWx0QnVuZGxlTmFtZSk7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5fcGxheUVmZmVjdChuLlVybCwgdCwgaSwgbyk7XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfVxuICBhc3luYyBfcGxheUVmZmVjdChlLCB0ID0gZmFsc2UsIG8/LCBuPykge1xuICAgIHZhciBpLFxuICAgICAgYSxcbiAgICAgIGwsXG4gICAgICBjLFxuICAgICAgdSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX0VmZmVjdE11dGVkKSB7XG4gICAgICBuICYmIG4oKTtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgdGhpcy5fcGxheWluZ0VmZmVjdE1hcC5zaXplID49IHRoaXMuX21heEVmZmVjdENvdW50ICYmIHRoaXMuc3RvcE9sZGVzdEVmZmVjdCgpO1xuICAgIGUgPSB0aGlzLl9kZWZhdWx0UGF0aCArIGU7XG4gICAgdHJ5IHtcbiAgICAgIGkgPSBhd2FpdCByZXNNYW5hZ2VyLmxvYWRSZXMoZSwgY2MuQXVkaW9DbGlwLCBvKTtcbiAgICAgIGlmICgtMSAhPT0gKGEgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGksIHQpKSkge1xuICAgICAgICBsID0ge1xuICAgICAgICAgIGF1ZGlvSWQ6IGEsXG4gICAgICAgICAgdXJsOiBlLFxuICAgICAgICAgIGZpbmlzaENhbGxiYWNrOiBuXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3BsYXlpbmdFZmZlY3RNYXAuc2V0KGEsIGwpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhhLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdS5fcGxheWluZ0VmZmVjdE1hcC5kZWxldGUoYSk7XG4gICAgICAgICAgbnVsbCA9PSBuIHx8IG4oKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYTtcbiAgICB9IGNhdGNoIChfX2Vycm9yXzFfMCkge1xuICAgICAgYyA9IF9fZXJyb3JfMV8wO1xuICAgICAgY29uc29sZS5lcnJvcihcIltBdWRpb01hbmFnZXJdIOaSreaUvumfs+aViOWksei0pTogXCIgKyBlICsgXCIsIOWOn+WboDogXCIgKyBjLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgc3RvcEVmZmVjdChlKSB7XG4gICAgaWYgKC0xICE9PSBlKSB7XG4gICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KGUpO1xuICAgICAgdGhpcy5fcGxheWluZ0VmZmVjdE1hcC5kZWxldGUoZSk7XG4gICAgfVxuICB9XG4gIHN0b3BBbGxFZmZlY3QoKSB7XG4gICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcbiAgICB0aGlzLl9wbGF5aW5nRWZmZWN0TWFwLmNsZWFyKCk7XG4gIH1cbiAgcGF1c2VFZmZlY3QoZSkge1xuICAgIC0xICE9PSBlICYmIGNjLmF1ZGlvRW5naW5lLnBhdXNlRWZmZWN0KGUpO1xuICB9XG4gIHBhdXNlQWxsRWZmZWN0KCkge1xuICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsRWZmZWN0cygpO1xuICB9XG4gIHJlc3VtZUVmZmVjdChlKSB7XG4gICAgLTEgIT09IGUgJiYgY2MuYXVkaW9FbmdpbmUucmVzdW1lRWZmZWN0KGUpO1xuICB9XG4gIHJlc3VtZUFsbEVmZmVjdCgpIHtcbiAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWVBbGxFZmZlY3RzKCk7XG4gIH1cbiAgc3RvcE9sZGVzdEVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuX3BsYXlpbmdFZmZlY3RNYXAua2V5cygpLm5leHQoKS52YWx1ZTtcbiAgICB2b2lkIDAgIT09IGUgJiYgdGhpcy5zdG9wRWZmZWN0KGUpO1xuICB9XG4gIHNldEVmZmVjdFZvbHVtZShlKSB7XG4gICAgdGhpcy5fRWZmZWN0Vm9sdW1lID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgZSkpO1xuICAgIHRoaXMuX0VmZmVjdE11dGVkIHx8IGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodGhpcy5fRWZmZWN0Vm9sdW1lKTtcbiAgICB0aGlzLnNhdmVWb2x1bWVTZXR0aW5ncygpO1xuICB9XG4gIGdldEVmZmVjdFZvbHVtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fRWZmZWN0Vm9sdW1lO1xuICB9XG4gIHNldEVmZmVjdE11dGVkKGUpIHtcbiAgICB0aGlzLl9FZmZlY3RNdXRlZCA9IGU7XG4gICAgdGhpcy5zYXZlVm9sdW1lU2V0dGluZ3MoKTtcbiAgfVxuICBpc0VmZmVjdE11dGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9FZmZlY3RNdXRlZDtcbiAgfVxuICBzZXRNYXhFZmZlY3RDb3VudChlKSB7XG4gICAgdGhpcy5fbWF4RWZmZWN0Q291bnQgPSBNYXRoLm1heCgxLCBlKTtcbiAgfVxuICBzZXRBbGxNdXRlZChlKSB7XG4gICAgdGhpcy5zZXRCR01NdXRlZChlKTtcbiAgICB0aGlzLnNldEVmZmVjdE11dGVkKGUpO1xuICB9XG4gIHN0b3BBbGwoKSB7XG4gICAgdGhpcy5zdG9wQkdNKCk7XG4gICAgdGhpcy5zdG9wQWxsRWZmZWN0KCk7XG4gIH1cbiAgcGF1c2VBbGwoKSB7XG4gICAgdGhpcy5wYXVzZUJHTSgpO1xuICAgIHRoaXMucGF1c2VBbGxFZmZlY3QoKTtcbiAgfVxuICByZXN1bWVBbGwoKSB7XG4gICAgdGhpcy5yZXN1bWVCR00oKTtcbiAgICB0aGlzLnJlc3VtZUFsbEVmZmVjdCgpO1xuICB9XG4gIGFzeW5jIHByZWxvYWRBdWRpbyhlLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBuID0gdGhpcztcbiAgICBlID0gZS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBuLl9kZWZhdWx0UGF0aCArIGU7XG4gICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHJlc01hbmFnZXIubG9hZFJlcyhlLCBjYy5BdWRpb0NsaXAsIHQpO1xuICAgIH0gY2F0Y2ggKF9fZXJyb3JfMV8wKSB7XG4gICAgICBvID0gX19lcnJvcl8xXzA7XG4gICAgICBjb25zb2xlLmVycm9yKFwi6Z+z6aKR6aKE5Yqg6L295aSx6LSlOlwiLCBvKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGdldFBsYXlpbmdFZmZlY3RDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxheWluZ0VmZmVjdE1hcC5zaXplO1xuICB9XG4gIGlzRWZmZWN0UGxheWluZyhlKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYXlpbmdFZmZlY3RNYXAuaGFzKGUpO1xuICB9XG4gIGNsZWFudXAoKSB7XG4gICAgdGhpcy5zdG9wQWxsKCk7XG4gICAgdGhpcy5fcGxheWluZ0VmZmVjdE1hcC5jbGVhcigpO1xuICB9XG59Il19