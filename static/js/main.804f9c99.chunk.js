(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),r=n.n(s),i=n(4),o=n(5),c=n(7),a=n(6),h=n(1),l=n.n(h),d=n(0),u=function(e){var t=e.goodsList;return Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)("li",{children:e},e)}))})},b=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={goods:b,isListOpened:!1,isReversed:!1,isSortedByLength:!1,isSortedByAlphabet:!1,minWordsLength:1},e.listOpener=function(){e.setState({isListOpened:!0})},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortByAphabet=function(){e.setState({isSortedByAlphabet:!0,isReversed:!1,isSortedByLength:!1})},e.sortByLength=function(){e.setState({isSortedByLength:!0,isSortedByAlphabet:!1,isReversed:!1})},e.reset=function(){e.setState({isReversed:!1,isSortedByLength:!1,isSortedByAlphabet:!1,minWordsLength:1})},e.setLength=function(t){e.setState({minWordsLength:Number(t.target.value)})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.goods,n=e.isListOpened,s=e.isReversed,r=e.isSortedByLength,i=e.isSortedByAlphabet,o=e.minWordsLength,c=t.filter((function(e){return e.length>=o}));return r&&c.sort((function(e,t){return e.length-t.length})),i&&c.sort((function(e,t){return e.localeCompare(t)})),s&&c.reverse(),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Goods"}),!n&&Object(d.jsx)("button",{type:"button",onClick:this.listOpener,children:"Start"}),n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{onClick:this.reverse,type:"button",children:"reverse"}),Object(d.jsx)("button",{onClick:this.sortByLength,type:"button",children:"Sort by length"}),Object(d.jsx)("button",{onClick:this.sortByAphabet,type:"button",children:"Sort by alphabet"}),Object(d.jsx)("button",{onClick:this.reset,type:"button",children:"Reset"}),Object(d.jsx)(u,{goodsList:c}),Object(d.jsx)("select",{name:"select",onChange:this.setLength,value:o,children:[1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))})]})]})}}]),n}(l.a.Component),j=p;r.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.804f9c99.chunk.js.map