(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1),l=n.n(r);n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(2),i=n(3),s=n(5),u=n(4),d=n(6),m=(n(15),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={status:0,completed:!1},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=window.performance.timing,n=-(t.loadEventEnd-t.navigationStart),a=100*parseInt(n/1e3%60),o=Math.abs(Math.floor(a/100)),r=0,l=setInterval(function(){r+=1,e.setState({status:r}),100==r&&(clearInterval(l),e.setState({completed:!0}))},o)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,!this.state.completed&&o.a.createElement("div",{className:"Loader"},o.a.createElement("p",null,this.state.status,"%")),this.props.children)}}]),t}(a.Component)),h=o.a.lazy(function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,45))}),p=o.a.createElement("div",{style:{color:"gray"}},"Loading ...");l.a.render(o.a.createElement("div",null,o.a.createElement(m,null,o.a.createElement(o.a.Suspense,{fallback:p},o.a.createElement(h,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(16)}},[[9,2,4]]]);
//# sourceMappingURL=main.79e86973.chunk.js.map