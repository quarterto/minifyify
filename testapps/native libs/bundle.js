;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function filter(r,e){for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}function normalizeArray(r,e){for(var t=0,n=r.length;n>=0;n--){var o=r[n];"."==o?r.splice(n,1):".."===o?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var process=require("__browserify_process"),splitPathRe=/^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;exports.resolve=function(){for(var r="",e=!1,t=arguments.length;t>=-1&&!e;t--){var n=t>=0?arguments[t]:process.cwd();"string"==typeof n&&n&&(r=n+"/"+r,e="/"===n.charAt(0))}return r=normalizeArray(filter(r.split("/"),function(r){return!!r}),!e).join("/"),(e?"/":"")+r||"."},exports.normalize=function(r){var e="/"===r.charAt(0),t="/"===r.slice(-1);return r=normalizeArray(filter(r.split("/"),function(r){return!!r}),!e).join("/"),r||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r},exports.join=function(){var r=Array.prototype.slice.call(arguments,0);return exports.normalize(filter(r,function(r){return r&&"string"==typeof r}).join("/"))},exports.dirname=function(r){var e=splitPathRe.exec(r)[1]||"",t=!1;return e?1===e.length||t&&e.length<=3&&":"===e.charAt(1)?e:e.substring(0,e.length-1):"."},exports.basename=function(r,e){var t=splitPathRe.exec(r)[2]||"";return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t},exports.extname=function(r){return splitPathRe.exec(r)[3]||""},exports.relative=function(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=exports.resolve(r).substr(1),e=exports.resolve(e).substr(1);for(var n=t(r.split("/")),o=t(e.split("/")),i=Math.min(n.length,o.length),s=i,u=0;i>u;u++)if(n[u]!==o[u]){s=u;break}for(var a=[],u=s;u<n.length;u++)a.push("..");return a=a.concat(o.slice(s)),a.join("/")},exports.sep="/";
},{"__browserify_process":2}],2:[function(require,module,exports){
var process=module.exports={};process.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,r="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(r){var t=[];return window.addEventListener("message",function(e){if(e.source===window&&"process-tick"===e.data&&(e.stopPropagation(),t.length>0)){var r=t.shift();r()}},!0),function(e){t.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),process.title="browser",process.browser=!0,process.env={},process.argv=[],process.binding=function(){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(){throw new Error("process.chdir is not supported")};
},{}],3:[function(require,module,exports){
var submodule=require("./submodule"),path=require("path"),myString;myString=submodule.createString(function(){return path.join("highway","to","hell")}),myString=path.join(myString,"stairway","to","heaven"),console.log(myString);
},{"./submodule":4,"path":1}],4:[function(require,module,exports){
var createString=function(e){for(var r=[],t=0,n=3;n>t;t++)r.push(e());return r.join()};module.exports={createString:createString};
},{}]},{},[3])
;;;
//@ sourceMappingURL=bundle.map
