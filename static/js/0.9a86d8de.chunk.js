(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(t,e,a){"use strict";a.r(e);var n=a(2),i=a(3),s=a(5),c=a(4),o=a(6),r=a(0),d=a.n(r),l=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(s.a)(this,Object(c.a)(e).call(this,t))).state={},a.changeBg=function(t,e){!1===a.state.animating?(a.setState({prev:t}),a.state.animating=!0,a.state.canvas.moveSlider(t),setTimeout(function(){if(a.state.animating=!1,a.state.next>-1){var t=a.state.next;a.state.next=-1,a.state.canvas.moveSlider(t),a.changeBg(t)}},2500)):a.state.next=t},a.changeBgInd=function(t){a.setState({nextInd:t,changeTimer:2500})},a.state.images=a.props.carouselImages,a.state.animating=!1,a.state.next=-1,a.state.prev=0,a.state.idle=!1,a}return Object(o.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=new Image;e.src=this.state.images[0],e.onload=function(){var a=new window.CanvasSlideshow({sprites:t.state.images,displacementImage:"/LiquidDistortion-master/img/clouds.jpg",autoPlay:!0,autoPlaySpeed:[10,3],displaceScale:[200,70],fullscreen:!1,containerId:t.props.containerId,stageWidth:e.width,stageHeight:e.height});t.setState({canvas:a})}}},{key:"render",value:function(){var t=this,e=this.props,a=e.id,n=e.image,i=(e.actions,e.index),s=1,c=setInterval(function(){0===(s-=1)&&(clearInterval(c),i===t.state.nextInd&&t.state.canvas.moveSlider(i))},1e3);return d.a.createElement("div",{className:"Carousel-section"},d.a.createElement("div",{id:this.props.containerId}),!("initial"===a)&&d.a.createElement("img",{src:n,key:i,style:{display:"none"},onLoad:function(){return t.changeBgInd(i)},alt:""}))}}]),e}(r.Component);e.default=l}}]);
//# sourceMappingURL=0.9a86d8de.chunk.js.map