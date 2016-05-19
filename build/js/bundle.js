webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(32);
	var react_redux_1 = __webpack_require__(167);
	var App_1 = __webpack_require__(189);
	var store_1 = __webpack_require__(201);
	var store = store_1.default();
	ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store}, React.createElement(App_1.TodoApp, null)), document.getElementById('root'));


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var react_redux_1 = __webpack_require__(167);
	var todos_1 = __webpack_require__(190);
	var AddTodo_1 = __webpack_require__(191);
	var TodoList_1 = __webpack_require__(192);
	var Footer_1 = __webpack_require__(194);
	var Immutable = __webpack_require__(196);
	var filters = __webpack_require__(195);
	__webpack_require__(197);
	var App = (function (_super) {
	    __extends(App, _super);
	    function App() {
	        _super.apply(this, arguments);
	    }
	    App.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", {className: "container"}, React.createElement(AddTodo_1.default, {onAddClick: function (text) {
	            _this.props.dispatch(todos_1.addTodo(text));
	        }}), React.createElement(TodoList_1.TodoList, {todos: this.props.visibleTodos, onTodoClick: function (index) {
	            _this.props.dispatch(todos_1.completeTodo(index));
	        }}), React.createElement(Footer_1.default, {filter: this.props.visibilityFilter, onFilterChange: function (nextFilter) {
	            _this.props.dispatch(todos_1.setVisibilityFilter(nextFilter));
	        }})));
	    };
	    return App;
	}(React.Component));
	exports.App = App;
	var AppState = (function () {
	    function AppState() {
	        this.visibilityFilter = Immutable.Map();
	        this.visibilityFilter.set('filter', filters.SHOW_ALL);
	        this.todos = Immutable.List();
	    }
	    return AppState;
	}());
	exports.AppState = AppState;
	function selectTodos(todos, filter) {
	    switch (filter) {
	        case filters.SHOW_ALL:
	            return todos;
	        case filters.SHOW_COMPLETED:
	            return todos.filter(function (todo) { return todo.completed; }).toList();
	        case filters.SHOW_ACTIVE:
	            return todos.filter(function (todo) { return !todo.completed; }).toList();
	    }
	}
	function mapState2Props(state) {
	    return {
	        visibleTodos: selectTodos(state.todos, state.visibilityFilter.get('filter')),
	        visibilityFilter: state.visibilityFilter.get('filter')
	    };
	}
	exports.TodoApp = react_redux_1.connect(mapState2Props)(App);


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";
	exports.ADD_TODO = 'ADD_TODO';
	exports.COMPLETE_TODO = 'COMPLETE_TODO';
	exports.SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
	function makeSimpleActionCreator(type) {
	    var argsNames = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        argsNames[_i - 1] = arguments[_i];
	    }
	    return function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        var action = { type: type };
	        argsNames.forEach(function (arg, index) {
	            action[argsNames[index]] = args[index];
	        });
	        return action;
	    };
	}
	function addTodo(text) {
	    return function (dispatch, getState) {
	        dispatch(makeSimpleActionCreator(exports.ADD_TODO, 'text')(text));
	    };
	}
	exports.addTodo = addTodo;
	function completeTodo(index) {
	    return function (dispatch, getState) {
	        dispatch(makeSimpleActionCreator(exports.COMPLETE_TODO, 'index')(index));
	    };
	}
	exports.completeTodo = completeTodo;
	function setVisibilityFilter(filter) {
	    return function (dispatch, getState) {
	        dispatch(makeSimpleActionCreator(exports.SET_VISIBILITY_FILTER, 'filter')(filter));
	    };
	}
	exports.setVisibilityFilter = setVisibilityFilter;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "todos.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var AddTodo = (function (_super) {
	    __extends(AddTodo, _super);
	    function AddTodo() {
	        _super.call(this);
	        this.handleClick = this.handleClick.bind(this);
	    }
	    AddTodo.prototype.handleClick = function (e) {
	        var node = this.refs['input'];
	        var text = node.value.trim();
	        this.props.onAddClick(text);
	        node.nodeValue = '';
	    };
	    AddTodo.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement("input", {type: "text", ref: "input"}), React.createElement("button", {onClick: this.handleClick}, "Add")));
	    };
	    return AddTodo;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AddTodo;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Todo_1 = __webpack_require__(193);
	var TodoList = (function (_super) {
	    __extends(TodoList, _super);
	    function TodoList() {
	        _super.apply(this, arguments);
	    }
	    TodoList.prototype.render = function () {
	        var _this = this;
	        var todosNode = this.props.todos.map(function (todo, index) {
	            return (React.createElement(Todo_1.default, {key: index, onClick: function () { return _this.props.onTodoClick(index); }, text: todo.text, completed: todo.completed}));
	        });
	        return (React.createElement("ul", null, todosNode));
	    };
	    return TodoList;
	}(React.Component));
	exports.TodoList = TodoList;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Todo = (function (_super) {
	    __extends(Todo, _super);
	    function Todo() {
	        _super.apply(this, arguments);
	    }
	    Todo.prototype.render = function () {
	        return (React.createElement("li", {onClick: this.props.onClick, style: {
	            textDecoration: this.props.completed ? 'line-through' : 'none',
	            cursor: this.props.completed ? 'default' : 'pointer'
	        }}, this.props.text));
	    };
	    return Todo;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Todo;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var filters = __webpack_require__(195);
	var FILTER_TITLE = (_a = {},
	    _a[filters.SHOW_ALL] = 'All',
	    _a[filters.SHOW_COMPLETED] = 'Completed',
	    _a[filters.SHOW_ACTIVE] = 'Active',
	    _a
	);
	var Footer = (function (_super) {
	    __extends(Footer, _super);
	    function Footer() {
	        _super.call(this);
	        this.renderFilter = this.renderFilter.bind(this);
	    }
	    Footer.prototype.renderFilter = function (filter, name) {
	        var _this = this;
	        if (filter === this.props.filter) {
	            return (React.createElement("span", null, name));
	        }
	        return (React.createElement("a", {href: "#", onClick: function (e) {
	            e.preventDefault();
	            _this.props.onFilterChange(filter);
	        }}, name));
	    };
	    Footer.prototype.render = function () {
	        return (React.createElement("p", null, "Show:", '', this.renderFilter(filters.SHOW_ALL, FILTER_TITLE[filters.SHOW_ALL]), ', ', this.renderFilter(filters.SHOW_COMPLETED, FILTER_TITLE[filters.SHOW_COMPLETED]), ', ', this.renderFilter(filters.SHOW_ACTIVE, FILTER_TITLE[filters.SHOW_ACTIVE]), "."));
	    };
	    Footer.propType = {
	        filter: React.PropTypes.oneOf([
	            filters.SHOW_ALL,
	            filters.SHOW_COMPLETED,
	            filters.SHOW_ACTIVE
	        ]).isRequired
	    };
	    return Footer;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Footer;
	var _a;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";
	exports.SHOW_ALL = 'SHOW_ALL';
	exports.SHOW_COMPLETED = 'SHOW_COMPLETED';
	exports.SHOW_ACTIVE = 'SHOW_ACTIVE';


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "filters.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(198);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(200)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(199)();
	// imports


	// module
	exports.push([module.id, ".container {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}", ""]);

	// exports


/***/ },

/***/ 199:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";
	var redux_1 = __webpack_require__(174);
	var middlewares_1 = __webpack_require__(203);
	var reducers_1 = __webpack_require__(206);
	function configure(initialState) {
	    var store = (redux_1.applyMiddleware(middlewares_1.logger, middlewares_1.thunk)(redux_1.createStore))(reducers_1.default);
	    if (module['hot']) {
	        module['hot'].accept('../reducers', function () {
	            var nextReducer = __webpack_require__(206);
	            store.replaceReducer(nextReducer);
	        });
	    }
	    return store;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = configure;
	;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(202)(module)))

/***/ },

/***/ 202:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";
	var logger_1 = __webpack_require__(204);
	exports.logger = logger_1.default;
	var redux_thunk_1 = __webpack_require__(205);
	exports.thunk = redux_thunk_1.default;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";
	var logger = function (store) { return function (next) { return function (action) {
	    if (action.type) {
	        console.group(action.type);
	        console.info('dispatching', action);
	        console.log('prev state', store.getState());
	    }
	    var result = next(action);
	    if (action.type) {
	        console.log('next state', store.getState());
	        console.groupEnd();
	    }
	    return result;
	}; }; };
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = logger;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "logger.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";
	var redux_1 = __webpack_require__(174);
	var todos_1 = __webpack_require__(207);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = redux_1.combineReducers({
	    visibilityFilter: todos_1.visibilityFilter,
	    todos: todos_1.todos
	});


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";
	var filters = __webpack_require__(195);
	var todos_1 = __webpack_require__(190);
	var Immutable = __webpack_require__(196);
	exports.visibilityFilter = function (state, action) {
	    if (state === void 0) { state = (Immutable.fromJS({ 'filter': filters.SHOW_ALL })); }
	    switch (action.type) {
	        case todos_1.SET_VISIBILITY_FILTER:
	            return state.set('filter', action.filter);
	        default:
	            return state;
	    }
	};
	exports.todos = function (state, action) {
	    if (state === void 0) { state = (Immutable.List()); }
	    switch (action.type) {
	        case todos_1.ADD_TODO:
	            return state.push({ text: action.text, completed: false });
	        case todos_1.COMPLETE_TODO:
	            var toCompletedTodo = state.get(action.index);
	            var restTodos = state.splice(action.index, 1);
	            toCompletedTodo.completed = true;
	            return restTodos.toList().insert(action.index, toCompletedTodo);
	        default:
	            return state;
	    }
	};


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\project\\react-typescript-example\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "todos.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});