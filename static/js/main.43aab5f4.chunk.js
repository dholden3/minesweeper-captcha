(this["webpackJsonpminesweeper-captcha"]=this["webpackJsonpminesweeper-captcha"]||[]).push([[0],{13:function(e,r,t){},8:function(e,r,t){"use strict";t.r(r);var a=t(2),s=t(3),c=t(5),n=t(4),i=t(1),l=t.n(i),u=t(7),d=t.n(u),o=(t(13),t(0)),h=function(e){Object(c.a)(t,e);var r=Object(n.a)(t);function t(){return Object(a.a)(this,t),r.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return Object(o.jsx)("button",{className:this.props.clicked?"clicked":"square",style:{color:this.props.color},onClick:function(){return e.props.onClick()},children:this.props.value})}}]),t}(l.a.Component),j=function(e){Object(c.a)(t,e);var r=Object(n.a)(t);function t(e){var s;return Object(a.a)(this,t),(s=r.call(this,e)).state={squares:["2",null,"1",null,null,null,"3",null,"3",null,null,null,null,"1",null,"1"],clicked:Array(16).fill(!1)},s}return Object(s.a)(t,[{key:"submit",value:function(){var e,r=[!1,!1,!1,!1,!0,!0,!1,!1,!1,!0,!1,!0,!1,!1,!1,!1],t=!0;for(e=0;e<r.length;e++)r[e]!==this.state.clicked[e]&&(t=!1);t?alert("Correct!"):alert("Incorrect!")}},{key:"handleClick",value:function(e){var r=this.state.clicked.slice();r[e]=!r[e],this.setState({clicked:r})}},{key:"renderSquare",value:function(e){var r=this,t="";switch(this.state.squares[e]){case"1":t="#536ad1";break;case"2":t="#358035";break;case"3":t="#c84848";break;default:t="#000000"}return Object(o.jsx)(h,{value:this.state.squares[e],color:t,clicked:this.state.clicked[e],onClick:function(){return r.handleClick(e)}})}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"status",children:"TO PROCEED, CLICK \n ALL THE PICTURES OF MINES"}),Object(o.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2),this.renderSquare(3)]}),Object(o.jsxs)("div",{className:"board-row",children:[this.renderSquare(4),this.renderSquare(5),this.renderSquare(6),this.renderSquare(7)]}),Object(o.jsxs)("div",{className:"board-row",children:[this.renderSquare(8),this.renderSquare(9),this.renderSquare(10),this.renderSquare(11)]}),Object(o.jsxs)("div",{className:"board-row",children:[this.renderSquare(12),this.renderSquare(13),this.renderSquare(14),this.renderSquare(15)]}),Object(o.jsx)("div",{className:"status"}),Object(o.jsx)("button",{className:"submit",onClick:function(){return e.submit()},children:"SUBMIT"}),Object(o.jsx)("br",{}),"Inspired by ",Object(o.jsx)("a",{href:"https://xkcd.com/2496/",children:"this xkcd comic"}),". Code taken from ",Object(o.jsx)("a",{href:"https://reactjs.org/tutorial/tutorial.html",children:"React Tutorial"}),"."]})}}]),t}(l.a.Component),b=function(e){Object(c.a)(t,e);var r=Object(n.a)(t);function t(){return Object(a.a)(this,t),r.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"game",children:Object(o.jsx)("div",{className:"game-board",children:Object(o.jsx)(j,{})})})}}]),t}(l.a.Component);d.a.render(Object(o.jsx)(b,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.43aab5f4.chunk.js.map