(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(3),i=a(5),r=a(4),c=a(6),o=a(0),d=a.n(o),l=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={},a.changeBg=function(e,t){!1===a.state.animating?(a.setState({prev:e}),a.state.animating=!0,a.state.canvas.moveSlider(e),setTimeout(function(){if(a.state.animating=!1,a.state.next>-1){var e=a.state.next;a.state.next=-1,a.state.canvas.moveSlider(e),a.changeBg(e)}},2500)):a.state.next=e},a.changeBgInd=function(e){a.setState({nextInd:e,changeTimer:2500})},a.state.images=a.props.carouselImages,a.state.animating=!1,a.state.next=-1,a.state.prev=0,a.state.idle=!1,a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new Image;t.src=this.state.images[0],t.onload=function(){var a=new window.CanvasSlideshow({sprites:e.state.images,displacementImage:"/travel_store_template/LiquidDistortion-master/img/clouds.jpg",autoPlay:!0,autoPlaySpeed:[10,3],displaceScale:[200,70],fullscreen:!1,containerId:e.props.containerId,stageWidth:t.width,stageHeight:t.height});e.setState({canvas:a})},document.getElementsByClassName("Slides")[0].addEventListener("mouseleave",function(){return e.state.canvas.stopTicker()}),document.getElementsByClassName("Slides")[0].addEventListener("mouseenter",function(){return e.state.canvas.startTicker()})}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.image,s=(t.actions,t.index),i=1,r=setInterval(function(){0===(i-=1)&&(clearInterval(r),s===e.state.nextInd&&e.state.canvas.moveSlider(s))},1e3);return d.a.createElement("div",{className:"Carousel-section"},d.a.createElement("div",{id:this.props.containerId}),!("initial"===a)&&d.a.createElement("img",{src:n,key:s,style:{display:"none"},onLoad:function(){return e.changeBgInd(s)},alt:""}))}}]),t}(o.Component);t.default=l}}]);
//# sourceMappingURL=0.d1aec784.chunk.js.map