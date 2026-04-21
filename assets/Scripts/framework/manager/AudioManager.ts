import { ConfigType } from '../../gamePlay/base/data/ConfigType';
import { DataReader } from '../data/DataReader';
import { resManager } from './ResManager';
export enum AudioType {
  BGM = 0,
  Effect = 1,
}
export default class AudioManager {
  _currentBgmId = -1;
  _currentBgmUrl = "";
  _bgmVolume = 1;
  _EffectVolume = 1;
  _bgmMuted = false;
  _EffectMuted = false;
  _playingEffectMap = new Map();
  _maxEffectCount = 8;
  _defaultPath = "audios/";
  static _instance = null;
  static getInstance() {
    if (!this._instance) {
      this._instance = new AudioManager();
      this._instance.init();
    }
    return this._instance;
  }
  init() {
    this.loadVolumeSettings();
    cc.audioEngine.setMusicVolume(this._bgmVolume);
    cc.audioEngine.setEffectsVolume(this._EffectVolume);
  }
  loadVolumeSettings() {
    var e = cc.sys.localStorage.getItem("audio_bgm_volume"),
      t = cc.sys.localStorage.getItem("audio_Effect_volume"),
      o = cc.sys.localStorage.getItem("audio_bgm_mute"),
      n = cc.sys.localStorage.getItem("audio_Effect_mute");
    this._bgmVolume = e ? parseFloat(e) : 1;
    this._EffectVolume = t ? parseFloat(t) : 1;
    this._bgmMuted = "true" === o;
    this._EffectMuted = "true" === n;
  }
  saveVolumeSettings() {
    cc.sys.localStorage.setItem("audio_bgm_volume", this._bgmVolume.toString());
    cc.sys.localStorage.setItem("audio_Effect_volume", this._EffectVolume.toString());
    cc.sys.localStorage.setItem("audio_bgm_mute", this._bgmMuted.toString());
    cc.sys.localStorage.setItem("audio_Effect_mute", this._EffectMuted.toString());
  }
  @mj.traitEvent("AudioMgr_playBGM")
  async playBGM(e, t = true) {
    var o, n;
    if (o = DataReader.getByKey(ConfigType.audio_config, e)) {
      (n = o.Bundle) && "" !== n || (n = resManager.defaultBundleName);
      return await this._playBGM(o.Url, t, n);
    }
    return;
  }
  async _playBGM(e, t = true, o?) {
    var n, i;
    e = this._defaultPath + e;
    if (this._currentBgmUrl === e && cc.audioEngine.isMusicPlaying()) {
      return;
    }
    try {
      n = await resManager.loadRes(e, cc.AudioClip, o);
      -1 !== this._currentBgmId && this.stopBGM();
      this._currentBgmUrl = e;
      this._currentBgmId = cc.audioEngine.playMusic(n, t);
      if (this._bgmMuted) {
        cc.audioEngine.setMusicVolume(0);
      } else {
        cc.audioEngine.setMusicVolume(this._bgmVolume);
      }
    } catch (__error_1_0) {
      i = __error_1_0;
      console.error("[AudioManager] 播放BGM失败: " + e + ", 原因: " + i.message);
    }
    return;
  }
  stopBGM() {
    if (-1 !== this._currentBgmId) {
      cc.audioEngine.stopMusic();
      this._currentBgmId = -1;
      this._currentBgmUrl = "";
    }
  }
  pauseBGM() {
    -1 !== this._currentBgmId && cc.audioEngine.pauseMusic();
  }
  resumeBGM() {
    -1 !== this._currentBgmId && cc.audioEngine.resumeMusic();
  }
  setBGMVolume(e) {
    this._bgmVolume = Math.max(0, Math.min(1, e));
    this._bgmMuted || cc.audioEngine.setMusicVolume(this._bgmVolume);
    this.saveVolumeSettings();
  }
  getBGMVolume() {
    return this._bgmVolume;
  }
  setBGMMuted(e) {
    this._bgmMuted = e;
    cc.audioEngine.setMusicVolume(e ? 0 : this._bgmVolume);
    this.saveVolumeSettings();
  }
  isBGMMuted() {
    return this._bgmMuted;
  }
  fadeBGMIn(e = 1) {
    var t = this;
    if (!this._bgmMuted) {
      var o = 0;
      this._bgmVolume;
      cc.audioEngine.setMusicVolume(0);
      var n = setInterval(function () {
        if (t._bgmMuted) clearInterval(n);else {
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
  }
  fadeBGMOut(e = 1, t = true) {
    var o = this;
    var n = 0,
      i = this._bgmMuted ? 0 : this._bgmVolume,
      r = setInterval(function () {
        n += 0.05;
        var a = Math.max(i * (1 - n / e), 0);
        cc.audioEngine.setMusicVolume(a);
        if (n >= e) {
          clearInterval(r);
          cc.audioEngine.setMusicVolume(0);
          t && o.stopBGM();
        }
      }, 50);
  }
  @mj.traitEvent("AudioMgr_playEff")
  async playEffect(e, t = false, o?) {
    var n, i;
    if (n = DataReader.getByKey(ConfigType.audio_config, e)) {
      (i = n.Bundle) && "" !== i || (i = resManager.defaultBundleName);
      return await this._playEffect(n.Url, t, i, o);
    }
    return -1;
  }
  async _playEffect(e, t = false, o?, n?) {
    var i,
      a,
      l,
      c,
      u = this;
    if (this._EffectMuted) {
      n && n();
      return -1;
    }
    this._playingEffectMap.size >= this._maxEffectCount && this.stopOldestEffect();
    e = this._defaultPath + e;
    try {
      i = await resManager.loadRes(e, cc.AudioClip, o);
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
      return a;
    } catch (__error_1_0) {
      c = __error_1_0;
      console.error("[AudioManager] 播放音效失败: " + e + ", 原因: " + c.message);
      return -1;
    }
    return;
  }
  stopEffect(e) {
    if (-1 !== e) {
      cc.audioEngine.stopEffect(e);
      this._playingEffectMap.delete(e);
    }
  }
  stopAllEffect() {
    cc.audioEngine.stopAllEffects();
    this._playingEffectMap.clear();
  }
  pauseEffect(e) {
    -1 !== e && cc.audioEngine.pauseEffect(e);
  }
  pauseAllEffect() {
    cc.audioEngine.pauseAllEffects();
  }
  resumeEffect(e) {
    -1 !== e && cc.audioEngine.resumeEffect(e);
  }
  resumeAllEffect() {
    cc.audioEngine.resumeAllEffects();
  }
  stopOldestEffect() {
    var e = this._playingEffectMap.keys().next().value;
    void 0 !== e && this.stopEffect(e);
  }
  setEffectVolume(e) {
    this._EffectVolume = Math.max(0, Math.min(1, e));
    this._EffectMuted || cc.audioEngine.setEffectsVolume(this._EffectVolume);
    this.saveVolumeSettings();
  }
  getEffectVolume() {
    return this._EffectVolume;
  }
  setEffectMuted(e) {
    this._EffectMuted = e;
    this.saveVolumeSettings();
  }
  isEffectMuted() {
    return this._EffectMuted;
  }
  setMaxEffectCount(e) {
    this._maxEffectCount = Math.max(1, e);
  }
  setAllMuted(e) {
    this.setBGMMuted(e);
    this.setEffectMuted(e);
  }
  stopAll() {
    this.stopBGM();
    this.stopAllEffect();
  }
  pauseAll() {
    this.pauseBGM();
    this.pauseAllEffect();
  }
  resumeAll() {
    this.resumeBGM();
    this.resumeAllEffect();
  }
  async preloadAudio(e, t) {
    var o,
      n = this;
    e = e.map(function (e) {
      return n._defaultPath + e;
    });
    try {
      await resManager.loadRes(e, cc.AudioClip, t);
    } catch (__error_1_0) {
      o = __error_1_0;
      console.error("音频预加载失败:", o);
    }
    return;
  }
  getPlayingEffectCount() {
    return this._playingEffectMap.size;
  }
  isEffectPlaying(e) {
    return this._playingEffectMap.has(e);
  }
  cleanup() {
    this.stopAll();
    this._playingEffectMap.clear();
  }
}