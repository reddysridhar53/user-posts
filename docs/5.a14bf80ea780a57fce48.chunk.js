(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0b8eb3e35929778b339a":function(e,t,n){"use strict";n.r(t);var o=n("8af190b70a6bc55c6f1b"),r=n.n(o),i=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),a=n("0d7f0986bcd2f33d8a2a"),s=n("a28fc3c963a1d4d1a2e5"),c=n("ab4cb61bcb2dc161defb"),d=n("331f86f8774175b2781f"),l=n.n(d),u=n("adc20f99e57c573c589c"),p=n("d95b0cf107403b178365"),f=n("54f683fcda7806277002"),m="GET_POSTS",b="GET_POSTS_SUCCESS",h="GET_POSTS_ERROR",y="FIND_USERS",g="FIND_USERS_SUCCESS",v="FIND_USERS_ERROR",w="FIND_POSTS",S="FIND_POSTS_SUCCESS",x="FIND_POSTS_ERROR",C=Object(f.fromJS)({findingUsers:!1,findingPosts:!1,loadingPosts:!1,posts:[],users:[],postsFound:[]});var P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return e.set("loadingPosts",!0);case h:return e.set("loadingPosts",!1);case b:return e.set("loadingPosts",!1).set("posts",Object(f.fromJS)(t.payload));case y:return e.set("findingUsers",!0);case v:return e.set("findingUsers",!1);case g:return e.set("findingUsers",!1).set("users",Object(f.fromJS)(t.payload));case w:return e.set("findingPosts",!0);case x:return e.set("findingPosts",!1);case S:return e.set("findingPosts",!1).set("postsFound",Object(f.fromJS)(t.payload));default:return e}},_=function(e){return e.get("homePage",C)},O=n("6c68d13fe9e3e77d8fc4"),j=n("74c8eb96ab0c694f20d1");function k(e){return{type:h,payload:e}}function E(e){return{type:v,payload:e}}function I(e){return{type:x,payload:e}}var T=regeneratorRuntime.mark(F),U=regeneratorRuntime.mark(L),N=regeneratorRuntime.mark(q),R=regeneratorRuntime.mark(z);function F(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(O.b)(j.f);case 3:return e=t.sent,t.next=6,Object(O.c)({type:b,payload:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(O.c)(k(t.t0));case 12:case"end":return t.stop()}},T,this,[[0,8]])}function L(e){var t,n;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,o.prev=1,o.next=4,Object(O.b)(j.c,t);case 4:return n=o.sent,o.next=7,Object(O.c)({type:g,payload:n});case 7:o.next=13;break;case 9:return o.prev=9,o.t0=o.catch(1),o.next=13,Object(O.c)(E(o.t0));case 13:case"end":return o.stop()}},U,this,[[1,9]])}function q(e){var t,n;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,o.prev=1,o.next=4,Object(O.b)(j.a,t);case 4:return n=o.sent,o.next=7,Object(O.c)({type:S,payload:n});case 7:o.next=13;break;case 9:return o.prev=9,o.t0=o.catch(1),o.next=13,Object(O.c)(I(o.t0));case 13:case"end":return o.stop()}},N,this,[[1,9]])}function z(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([Object(O.e)(m,F),Object(O.e)(y,L),Object(O.e)(w,q)]);case 2:case"end":return e.stop()}},R,this)}var D,J=n("f3e27fd1cdba8fb4b92c"),H=n("0b3cb19af78752326f59"),G=n("e95a63b25fb92ed15721"),A=H.c.section.withConfig({displayName:"styledElements__HomePageWrapper",componentId:"no79b7-0"})(["display:flex;flex-direction:column;flex:1;width:100%;max-width:964px;margin:0 auto;"]),W=H.c.h1.withConfig({displayName:"styledElements__PageTitle",componentId:"no79b7-1"})(["font-size:2.5em;font-weight:500;color:rgba(0,0,0,0.8);"]),$=H.c.div.withConfig({displayName:"styledElements__InputContainer",componentId:"no79b7-2"})(["padding:2em 1em;position:relative;"]),Q=H.c.div.withConfig({displayName:"styledElements__UsersContainer",componentId:"no79b7-3"})(["position:absolute;z-index:2;background:#fff;border-radius:0.5em;min-height:10em;max-height:20em;box-shadow:0px 4px 4px 0px rgba(0,0,0,0.1);width:calc(100% - 2em);left:1em;top:8.1em;transition:250ms all ease-in;transform:translateY(10%);overflow:hidden;overflow-y:auto;",";"],function(e){return e.visible&&Object(H.b)(["height:auto;transform:translateY(0%);"])}),Y=H.c.div.withConfig({displayName:"styledElements__LoaderWrapper",componentId:"no79b7-4"})(["position:absolute;width:100%;height:100%;font-size:1.5em;display:flex;align-items:center;justify-content:center;"]),M=H.c.input.withConfig({displayName:"styledElements__TextInput",componentId:"no79b7-5"})(["background:#fff;color:rgba(0,0,0,0.8);padding:0 1em;width:100%;height:4em;border:0;font-size:1.5em;border-radius:4px;outline:none;box-shadow:0px 4px 4px 0px rgba(0,0,0,0.1);::placeholder{color:rgba(0,0,0,0.4);}"]),B=H.c.div.withConfig({displayName:"styledElements__PostsContainer",componentId:"no79b7-6"})(["display:flex;flex-direction:column;flex:1;padding:0 10px;"]),K=H.c.div.withConfig({displayName:"styledElements__PostsContent",componentId:"no79b7-7"})(["display:flex;align-items:center;flex-wrap:wrap;"]),V=H.c.div.withConfig({displayName:"styledElements__PostCard",componentId:"no79b7-8"})(["width:33.3%;padding:1em;display:flex;flex:1 0 33.3%;&:nth-child(3n + 1){padding-left:0;}@media only screen and (max-width:964px) and (min-width:424px){width:50%;flex:1 0 50%;}@media only screen and (max-width:424px){width:100%;padding:1em 0;flex:1 0 100%;}"]),X=H.c.div.withConfig({displayName:"styledElements__PostItem",componentId:"no79b7-9"})(["border-radius:0.5em;padding:1em;display:flex;background:#fff;flex-direction:column;transition:250ms all ease-in;box-shadow:2px 4px 4px 0px rgba(0,0,0,0.1);&:hover{box-shadow:4px 8px 8px 0px rgba(0,0,0,0.1);transform:scale(1.05,1.05);cursor:pointer;}"]),Z=H.c.div.withConfig({displayName:"styledElements__PostTitle",componentId:"no79b7-10"})(["color:rgba(0,0,0,0.65);font-weight:500;font-size:2em;line-height:1.2;margin-bottom:1em;text-decoration:none;transition:250ms all ease-in;&:hover{color:rgba(0,0,0,0.9);}"]),ee=H.c.div.withConfig({displayName:"styledElements__PostActionWrapper",componentId:"no79b7-11"})(["display:flex;align-items:center;justify-content:space-between;"]),te=H.c.div.withConfig({displayName:"styledElements__PostComment",componentId:"no79b7-12"})(["font-size:1.4em;color:rgba(0,0,0,0.6);"]),ne=Object(H.c)(G.Link).withConfig({displayName:"styledElements__PostUserName",componentId:"no79b7-13"})(["color:rgb(83,77,253);font-weight:500;font-size:1.6em;transition:250ms all ease-in;text-decoration:none;&:hover{color:rgb(162,103,214);}"]),oe=Object(H.c)(G.Link).withConfig({displayName:"styledElements__UserLink",componentId:"no79b7-14"})(["padding:1em;display:flex;align-items:left;cursor:pointer;font-size:1.8em;text-trasnform:capitalize;color:rgb(162,103,214);&:hover{color:rgb(83,77,253);background:#f5f5f5;}"]),re=H.c.div.withConfig({displayName:"styledElements__SearchComponentWrapper",componentId:"no79b7-15"})(["display:flex;padding:2em 1em 0;align-items:center;justify-content:flex-start;"]),ie=H.c.div.withConfig({displayName:"styledElements__SearchTypeHeader",componentId:"no79b7-16"})(["font-size:2em;color:rgba(0,0,0,0.75);margin-right:2em;"]),ae=H.c.div.withConfig({displayName:"styledElements__SearchComponent",componentId:"no79b7-17"})(["font-size:1.5em;color:rgba(0,0,0,0.6);transition:250ms all ease-in;padding:0.5em 1em;cursor:pointer;font-weight:500;border-bottom:2px solid transparent;",";"],function(e){return e.active&&Object(H.b)(["color:rgba(0,0,0,1);border-bottom:2px solid #009688;"])});function se(e,t,n,o){D||(D="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:D,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var ce,de=function(e){var t=e.title,n=e.postId,o=e.name,r=e.userId,i=e.commentsString,a=e.onPostClick;return se(V,{onClick:function(){a&&a(n)}},void 0,se(X,{to:"/posts/".concat(n)},void 0,se(Z,{},void 0,t),se(ee,{},void 0,se(te,{},void 0,i),se(ne,{to:"/users/".concat(r),onClick:function(e){e.stopPropagation()}},void 0,o))))};function le(e){return(le="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ue(e,t,n,o){ce||(ce="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:ce,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function pe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function fe(e){return(fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function be(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"HomePage",function(){return Ce});var ye=ue(J.a,{}),ge=ue(Y,{},void 0,ue(J.a,{mini:!0})),ve=ue(Y,{},void 0,ue(J.a,{mini:!0})),we=ue(a.Helmet,{},void 0,ue("title",{},void 0,"Huddl Home Page - Sample posts(Frontend Task)"),ue("meta",{name:"description",content:"Sample Posts List"})),Se=ue(ie,{},void 0,"Search: "),xe=ue(W,{},void 0,"Posts"),Ce=function(e){function t(e){var n,i,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,a=fe(t).call(this,e),n=!a||"object"!==le(a)&&"function"!==typeof a?be(i):a,he(be(be(n)),"state",{query:"",showUserListContainer:"",activeSearchType:"posts"}),he(be(be(n)),"handleSearchQueryChange",function(e){var t=e.currentTarget.value;n.setState({showUserListContainer:!0}),t&&(n.setState({query:t}),n.debounceSearch())}),he(be(be(n)),"handleSearchType",function(e){n.setState({activeSearchType:e.target.getAttribute("name")})}),he(be(be(n)),"handleOutSideClick",function(e){e.target&&n.userListContainer&&n.userListContainer.current&&!n.userListContainer.current.contains(e.target)&&n.state.showUserListContainer&&n.setState({showUserListContainer:!1})}),he(be(be(n)),"handlePostClick",function(e){n.props.history.push("/posts/".concat(e))}),he(be(be(n)),"debounceSearch",function(){var e=n.props,t=e.onFindUsers,o=e.onFindPosts,r=n.state,i=r.activeSearchType,a=r.query;"posts"===i?o(a):t(a)}),he(be(be(n)),"searchPosts",function(){}),he(be(be(n)),"getSearchType",function(){var e=n.props,t=e.users,r=e.postsFound;return"posts"===n.state.activeSearchType?ue(o.Fragment,{},void 0,ue(M,{onChange:n.handleSearchQueryChange,placeholder:"Search for posts"}),n.state.showUserListContainer?ue(Q,{visible:!!r.length||n.state.showUserListContainer},void 0,n.renderPostsData()):null):ue(o.Fragment,{},void 0,ue(M,{onChange:n.handleSearchQueryChange,placeholder:"Search for users"}),n.state.showUserListContainer?ue(Q,{visible:!!t.length||n.state.showUserListContainer},void 0,n.renderUsers()):null)}),he(be(be(n)),"renderPosts",function(){var e=n.props,t=e.posts;return e.loadingPosts?ye:t.map(function(e){var t=e.id,o=e.title,r=e.commentIds,i=void 0===r?[]:r,a=e.user,s=a.name,c=a.id,d=i.length,l=0===d?"No Comments":d>1?"".concat(d," Comments"):"1 Comment";return ue(de,{title:o,postId:t,name:s,userId:c,onPostClick:n.handlePostClick,commentsString:l},t)})}),he(be(be(n)),"renderPostsData",function(){var e=n.props,t=e.postsFound,o=e.findingPosts;return o?ge:o||!n.state.query||t.length?t.map(function(e){var t=e.id,o=e.title;return ue(oe,{to:"/posts/".concat(t,"?query=").concat(n.state.query)},t,o)}):ue(Y,{},void 0,"No Posts found with query ".concat(n.state.query))}),he(be(be(n)),"renderUsers",function(){var e=n.props,t=e.users,o=e.findingUsers;return o?ve:o||!n.state.query||t.length?t.map(function(e){var t=e.id,n=e.name;return ue(oe,{to:"/users/".concat(t)},t,n)}):ue(Y,{},void 0,"No Users found with query ".concat(n.state.query))}),n.debounceSearch=l()(n.debounceSearch,500),n.userListContainer=r.a.createRef(),document.addEventListener("click",n.handleOutSideClick,!1),n.searchTypes=[{label:"Posts",name:"posts"},{label:"Users",name:"users"}],n}var n,i,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(t,o["PureComponent"]),n=t,(i=[{key:"debouncedSearch",value:function(e,t){return function(){var n=this,o=arguments,r=!t&&!i;clearTimeout(i);var i=setTimeout(function(){i=null,t||e.apply(n,o)},t);r&&e.apply(n,o)}}},{key:"componentDidMount",value:function(){this.props.onGetPosts()}},{key:"render",value:function(){var e=this;this.props.users;return ue(A,{},void 0,we,ue(re,{},void 0,Se,this.searchTypes.map(function(t){return ue(ae,{onClick:e.handleSearchType,name:t.name,active:t.name===e.state.activeSearchType},t.name,t.label)})),r.a.createElement($,{ref:this.userListContainer},this.getSearchType()),ue(B,{},void 0,xe,ue(K,{},void 0,this.renderPosts())))}}])&&pe(n.prototype,i),a&&pe(n,a),t}(),Pe=Object(s.b)({posts:Object(s.a)(_,function(e){return e.get("posts").toJS()}),postsFound:Object(s.a)(_,function(e){return e.get("postsFound").toJS()}),findingPosts:Object(s.a)(_,function(e){return e.get("findingPosts")}),users:Object(s.a)(_,function(e){return e.get("users").toJS()}),loadingPosts:Object(s.a)(_,function(e){return e.get("loadingPosts")}),findingUsers:Object(s.a)(_,function(e){return e.get("findingUsers")})}),_e=Object(i.connect)(Pe,function(e){return{onGetPosts:function(){return e({type:m})},onFindUsers:function(t){return e({type:y,payload:t})},onFindPosts:function(t){return e({type:w,payload:t})}}}),Oe=Object(p.a)({key:"homePage",reducer:P}),je=Object(u.a)({key:"homePage",saga:z});t.default=Object(c.compose)(Oe,je,_e)(Ce)}}]);