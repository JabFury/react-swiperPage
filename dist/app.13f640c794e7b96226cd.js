webpackJsonp([5],{"/oyU":function(e,t,r){e.exports=function(e){r.e(3).then(function(t){e(r("cuP8"))}.bind(null,r)).catch(r.oe)}},0:function(e,t,r){e.exports=r("lVK7")},BVBi:function(e,t,r){"use strict";(function(e){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.showUserMsg=c,t.fetchUserMsg=s,(n=r("IDVs").enterModule)&&n(e);var o,u,l=t.USERMSG="USERMSG";function c(e){return{type:l,userInfo:e}}function s(){return function(e){return fetch("http://localhost:8080/api/user.json").then(function(e){return e.json()}).then(function(t){e(c(t))}).catch(function(e){console.log(e)})}}o=r("IDVs").default,u=r("IDVs").leaveModule,o&&(o.register(l,"USERMSG","E:/works/myself/react-demo/src/redux/actions/userInfo.js"),o.register(c,"showUserMsg","E:/works/myself/react-demo/src/redux/actions/userInfo.js"),o.register(s,"fetchUserMsg","E:/works/myself/react-demo/src/redux/actions/userInfo.js"),u(e))}).call(t,r("S3gy")(e))},"C+gl":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var n,o=r("oTjF");(n=r("IDVs").enterModule)&&n(e);var u,l,c={count:0};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;switch(arguments[1].type){case o.INCREMENT:return{count:e.count+1};case o.DECREMENT:return{count:e.count-1};case o.RESET:return{count:0};default:return e}}u=r("IDVs").default,l=r("IDVs").leaveModule,u&&(u.register(c,"initState","E:/works/myself/react-demo/src/redux/reducers/counter.js"),u.register(s,"reducer","E:/works/myself/react-demo/src/redux/reducers/counter.js"),l(e))}).call(t,r("S3gy")(e))},IDVs:function(e,t,r){"use strict";e.exports=r("tVN6")},JU1R:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,o=f(r("2144")),u=r("3vYS"),l=f(r("gf5I")),c=f(r("edL+")),s=f(r("/oyU")),a=f(r("lpFP")),i=f(r("oWqY"));function f(e){return e&&e.__esModule?e:{default:e}}(n=r("IDVs").enterModule)&&n(e);var d,p,m=function(){return o.default.createElement("div",null,"Loading...")},y=function(e){return function(t){return o.default.createElement(l.default,{load:e},function(e){return e?o.default.createElement(e,t):o.default.createElement(m,null)})}},_=function(){return o.default.createElement(u.HashRouter,{history:u.hashHistory},o.default.createElement("div",null,o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement(u.Link,{to:"/"},"首页")),o.default.createElement("li",null,o.default.createElement(u.Link,{to:"/child"},"Page1")),o.default.createElement("li",null,o.default.createElement(u.Link,{to:"/counter"},"Counter")),o.default.createElement("li",null,o.default.createElement(u.Link,{to:"/user-info"},"userInfo"))),o.default.createElement(u.Switch,null,o.default.createElement(u.Route,{exact:!0,path:"/",component:y(c.default)}),o.default.createElement(u.Route,{path:"/child",component:y(s.default)}),o.default.createElement(u.Route,{path:"/counter",component:y(a.default)}),o.default.createElement(u.Route,{path:"/user-info",component:y(i.default)}))))},E=_;t.default=E,d=r("IDVs").default,p=r("IDVs").leaveModule,d&&(d.register(m,"Loading","E:/works/myself/react-demo/src/router/router.js"),d.register(y,"createComponent","E:/works/myself/react-demo/src/router/router.js"),d.register(_,"getRouter","E:/works/myself/react-demo/src/router/router.js"),d.register(E,"default","E:/works/myself/react-demo/src/router/router.js"),p(e))}).call(t,r("S3gy")(e))},PDYz:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=a;var o,u=r("BVBi");(o=r("IDVs").enterModule)&&o(e);var l,c,s={userInfo:{}};function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1];switch(t.type){case u.USERMSG:return n({},e,{userInfo:t.userInfo});default:return e}}l=r("IDVs").default,c=r("IDVs").leaveModule,l&&(l.register(s,"initState","E:/works/myself/react-demo/src/redux/reducers/userInfo.js"),l.register(a,"reducer","E:/works/myself/react-demo/src/redux/reducers/userInfo.js"),c(e))}).call(t,r("S3gy")(e))},S3gy:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},VCmz:function(e,t,r){"use strict";function n(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"==typeof o?o(r,n,e):t(o)}}}}t.__esModule=!0;var o=n();o.withExtraArgument=n,t.default=o},WqZW:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r("ks3K"),u=c(r("qCuJ")),l=c(r("VCmz"));function c(e){return e&&e.__esModule?e:{default:e}}(n=r("IDVs").enterModule)&&n(e);var s,a,i=(0,o.createStore)(u.default,(0,o.applyMiddleware)(l.default)),f=i;t.default=f,s=r("IDVs").default,a=r("IDVs").leaveModule,s&&(s.register(i,"store","E:/works/myself/react-demo/src/redux/store.js"),s.register(f,"default","E:/works/myself/react-demo/src/redux/store.js"),a(e))}).call(t,r("S3gy")(e))},"edL+":function(e,t,r){e.exports=function(e){r.e(0).then(function(t){e(r("YKYD"))}.bind(null,r)).catch(r.oe)}},gf5I:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__("2144"),_react2=_interopRequireDefault(_react),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__("IDVs").enterModule,enterModule&&enterModule(module);var Bundle=function(_Component){function Bundle(){var e,t,r;_classCallCheck(this,Bundle);for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];return t=r=_possibleConstructorReturn(this,(e=Bundle.__proto__||Object.getPrototypeOf(Bundle)).call.apply(e,[this].concat(o))),r.state={mod:null},_possibleConstructorReturn(r,t)}return _inherits(Bundle,_Component),_createClass(Bundle,[{key:"componentWillMount",value:function(){this.load(this.props)}},{key:"componentWillReceiveProps",value:function(e){e.load!==this.props.load&&this.load(e)}},{key:"load",value:function(e){var t=this;this.setState({mod:null}),e.load(function(e){t.setState({mod:e.default?e.default:e})})}},{key:"render",value:function(){return this.props.children(this.state.mod)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Bundle}(_react.Component),_default=Bundle,reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__("IDVs").default,leaveModule=__webpack_require__("IDVs").leaveModule,reactHotLoader&&(reactHotLoader.register(Bundle,"Bundle","E:/works/myself/react-demo/src/router/Bundle.js"),reactHotLoader.register(_default,"default","E:/works/myself/react-demo/src/router/Bundle.js"),leaveModule(module))}).call(exports,__webpack_require__("S3gy")(module))},lVK7:function(e,t,r){"use strict";(function(e){var t,n,o,u=f(r("2144")),l=f(r("hoja")),c=f(r("JU1R")),s=r("IDVs"),a=r("nliw"),i=f(r("WqZW"));function f(e){return e&&e.__esModule?e:{default:e}}function d(e){l.default.render(u.default.createElement(s.AppContainer,null,u.default.createElement(a.Provider,{store:i.default},e)),document.getElementById("app"))}(t=r("IDVs").enterModule)&&t(e),d((0,c.default)()),n=r("IDVs").default,o=r("IDVs").leaveModule,n&&(n.register(d,"renderWithHotReload","E:/works/myself/react-demo/src/index.js"),o(e))}).call(t,r("S3gy")(e))},lpFP:function(e,t,r){e.exports=function(e){r.e(2).then(function(t){e(r("609M"))}.bind(null,r)).catch(r.oe)}},oTjF:function(e,t,r){"use strict";(function(e){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.increment=a,t.decrement=i,t.reset=f,(n=r("IDVs").enterModule)&&n(e);var o,u,l=t.INCREMENT="counter/INCREMENT",c=t.DECREMENT="counter/DECREMENT",s=t.RESET="counter/RESET";function a(){return{type:l}}function i(){return{type:c}}function f(){return{type:s}}o=r("IDVs").default,u=r("IDVs").leaveModule,o&&(o.register(l,"INCREMENT","E:/works/myself/react-demo/src/redux/actions/counter.js"),o.register(c,"DECREMENT","E:/works/myself/react-demo/src/redux/actions/counter.js"),o.register(s,"RESET","E:/works/myself/react-demo/src/redux/actions/counter.js"),o.register(a,"increment","E:/works/myself/react-demo/src/redux/actions/counter.js"),o.register(i,"decrement","E:/works/myself/react-demo/src/redux/actions/counter.js"),o.register(f,"reset","E:/works/myself/react-demo/src/redux/actions/counter.js"),u(e))}).call(t,r("S3gy")(e))},oWqY:function(e,t,r){e.exports=function(e){r.e(1).then(function(t){e(r("qLmo"))}.bind(null,r)).catch(r.oe)}},qCuJ:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r("ks3K"),u=c(r("C+gl")),l=c(r("PDYz"));function c(e){return e&&e.__esModule?e:{default:e}}(n=r("IDVs").enterModule)&&n(e);var s,a,i=(0,o.combineReducers)({counter:u.default,userInfo:l.default});t.default=i,s=r("IDVs").default,a=r("IDVs").leaveModule,s&&(s.register(i,"default","E:/works/myself/react-demo/src/redux/reducers.js"),a(e))}).call(t,r("S3gy")(e))},tVN6:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=(n=r("2144"))&&"object"==typeof n&&"default"in n?n.default:n,u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function(e){function t(){return u(this,t),l(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return o.Children.only(this.props.children)},t}(o.Component);t.AppContainer=c,t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){}}},[0]);