(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{259:function(t,e,r){"use strict";r.r(e);r(79),r(23),r(24),r(13),r(64),r(26),r(65);var n=r(48),o=(r(185),r(186),r(35),r(5)),l=r(121),c=r(36);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={middleware:"notAuthenticated",name:"profile",watchQuery:["page","tab","limit","username"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,f,param,d,m,_,h,w,C,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=Number.parseInt(r.page)||1,c=(n-1)*(o=5),f=r.tab||void 0,param={limit:o,offset:c,tab:f},d="favorite"==f?Object(l.getArticles)(v(v({},param),{},{favorited:r.username})):Object(l.getArticles)(v(v({},param),{},{author:r.username})),e.next=9,Object(l.getProfiles)(r.username);case 9:return m=e.sent,_=m.data,e.next=13,d;case 13:return h=e.sent,w=h.data,C=_.profile,y=w.articles,e.abrupt("return",{tab:f,page:n,limit:o,offset:c,profile:C,articles:y});case 18:case"end":return e.stop()}}),e)})))()},data:function(){return{tabs:[{name:"My Articles",id:void 0},{name:"Favorited Articles",id:"favorite"}],disabledFollow:!1}},computed:v(v({},Object(c.b)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)||1},favoriteDisabled:function(){return!this.user}}),created:function(){this.user&&(this.disabledFollow=this.user.username==this.profile.username)},methods:{follow:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.disabledFollow){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,t.disabledFollow=!0,!t.profile.following){e.next=9;break}return e.next=7,Object(l.unFollow)(t.profile.username);case 7:e.next=11;break;case 9:return e.next=11,Object(l.follow)(t.profile.username);case 11:t.profile.following=!t.profile.following,e.next=16;break;case 14:e.prev=14,e.t0=e.catch(2);case 16:return e.prev=16,t.disabledFollow=!1,e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[2,14,16,19]])})))()},pageChange:function(t){this.loadStatus=0,this.$router.replace({name:this.$route.name,query:v(v({},this.$route.query),{},{page:t})})}}},m=r(25),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-page"},[t.profile?r("div",{staticClass:"user-info"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("img",{staticClass:"user-img",attrs:{src:t.profile.image}}),t._v(" "),r("h4",[t._v(t._s(t.profile.username))]),t._v(" "),r("p",[t._v(t._s(t.profile.bio))]),t._v(" "),t.user?r("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{disabled:t.disabledFollow},on:{click:t.follow}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n              "+t._s(t.profile.following?"Unf":"F")+"ollow\n            "+t._s(t.profile.username)+"\n          ")]):r("nuxt-link",{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{"ui-sref":"app.settings",to:"/settings"}},[r("i",{staticClass:"ion-gear-a"}),t._v(" Edit Profile Settings\n          ")])],1)])])]):t._e(),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("div",{staticClass:"articles-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},t._l(t.tabs,(function(e){return r("nuxt-link",{key:e.name,staticClass:"nav-item",attrs:{to:{path:t.$route.path,query:Object.assign({},t.$route.query,{tab:e.id,page:1})}}},[r("span",{staticClass:"nav-link",class:{active:e.id==t.tab}},[t._v("\n                "+t._s(e.name)+"\n              ")])])})),1)]),t._v(" "),t._l(t.articles,(function(e,n){return r("div",{key:n,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{path:"profile",query:{username:e.author.username}}}},[r("img",{attrs:{src:e.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{path:"profile",query:{username:e.author.username}}}},[t._v(t._s(e.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(e.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:e.favorited},attrs:{disabled:t.favoriteDisabled},on:{click:function(r){return t.onFavorite(e)}}},[r("i",{staticClass:"ion-heart"}),t._v("\n              "+t._s(e.favoritesCount)+"\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{path:"article",query:{slug:e.slug}}}},[r("h1",[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.description))]),t._v(" "),r("span",[t._v("Read more...")]),t._v(" "),r("ul",{staticClass:"tag-list"},t._l(e.tagList,(function(e){return r("li",{key:e,staticClass:"tag-default tag-pill tag-outline"},[t._v(t._s(e))])})),0)])],1)})),t._v(" "),r("div",{staticClass:"col-md-3"},[t.totalPage>1?r("el-pagination",{attrs:{"page-size":t.limit,layout:"prev, pager, next",total:t.articlesCount},on:{"current-change":t.pageChange}}):t._e(),t._v(" "),r("nav",[t.totalPage>1?r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{path:t.$route.path,query:Object.assign({},t.$route.query,{page:e})}}},[t._v(t._s(e))])],1)})),0):t._e()])],1)],2)])])])}),[],!1,null,null,null);e.default=component.exports}}]);