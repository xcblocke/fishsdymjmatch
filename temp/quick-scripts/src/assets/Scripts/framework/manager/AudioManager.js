"use strict";
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