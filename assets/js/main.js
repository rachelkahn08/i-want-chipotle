$('.hamburger-icon').on("click", function() {
	console.log('clickt');
	$('.navigation__links').toggleClass('invisible .from-right');

	var hamburgerBars = document.querySelectorAll(".hamburger-bars--single");

	for (var i = 0; i < hamburgerBars.length; i++) {
		$(hamburgerBars[0]).toggleClass('tilt-positive');
		$(hamburgerBars[1]).toggleClass('disappear');
		$(hamburgerBars[2]).toggleClass('tilt-negative');
	}

	$('.navigation__links').toggleClass('animate-from-right');
	
});

$('.parallax-window').parallax({imageSrc: 'assets/img/burrito.jpg'});

/*!
 * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!function(t,i,e,s){function o(i,e){var h=this;"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this,e)),this.$element=t(i),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var r=(this.position+"").toLowerCase().match(/\S+/g)||[];if(r.length<1&&r.push("center"),1==r.length&&r.push(r[0]),("top"==r[0]||"bottom"==r[0]||"left"==r[1]||"right"==r[1])&&(r=[r[1],r[0]]),this.positionX!=s&&(r[0]=this.positionX.toLowerCase()),this.positionY!=s&&(r[1]=this.positionY.toLowerCase()),h.positionX=r[0],h.positionY=r[1],"left"!=this.positionX&&"right"!=this.positionX&&(this.positionX=isNaN(parseInt(this.positionX))?"center":parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(this.positionY=isNaN(parseInt(this.positionY))?"center":parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/))return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;this.$mirror=t("<div />").prependTo("body");var a=this.$element.find(">.parallax-slider"),n=!1;0==a.length?this.$slider=t("<img />").prependTo(this.$mirror):(this.$slider=a.prependTo(this.$mirror),n=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){h.naturalHeight&&h.naturalWidth||(h.naturalHeight=this.naturalHeight||this.height||1,h.naturalWidth=this.naturalWidth||this.width||1),h.aspectRatio=h.naturalWidth/h.naturalHeight,o.isSetup||o.setup(),o.sliders.push(h),o.isFresh=!1,o.requestRender()}),n||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||a.length>0)&&this.$slider.trigger("load")}function h(s){return this.each(function(){var h=t(this),r="object"==typeof s&&s;this==i||this==e||h.is("body")?o.configure(r):h.data("px.parallax")?"object"==typeof s&&t.extend(h.data("px.parallax"),r):(r=t.extend({},h.data(),r),h.data("px.parallax",new o(this,r))),"string"==typeof s&&("destroy"==s?o.destroy(this):o[s]())})}!function(){for(var t=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!i.requestAnimationFrame;++s)i.requestAnimationFrame=i[e[s]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[s]+"CancelAnimationFrame"]||i[e[s]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e){var s=(new Date).getTime(),o=Math.max(0,16-(s-t)),h=i.setTimeout(function(){e(s+o)},o);return t=s+o,h}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(o.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t=o.winHeight,i=o.docHeight,e=Math.min(this.boxOffsetTop,i-t),s=Math.max(this.boxOffsetTop+this.boxHeight-t,0),h=this.boxHeight+(e-s)*(1-this.speed)|0,r=(this.boxOffsetTop-e)*(1-this.speed)|0;if(h*this.aspectRatio>=this.boxWidth){this.imageWidth=h*this.aspectRatio|0,this.imageHeight=h,this.offsetBaseTop=r;var a=this.imageWidth-this.boxWidth;this.offsetLeft="left"==this.positionX?0:"right"==this.positionX?-a:isNaN(this.positionX)?-a/2|0:Math.max(this.positionX,-a)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var a=this.imageHeight-h;this.offsetBaseTop="top"==this.positionY?r:"bottom"==this.positionY?r-a:isNaN(this.positionY)?r-a/2|0:r+Math.max(this.positionY,-a)}},render:function(){var t=o.scrollTop,i=o.scrollLeft,e=this.overScrollFix?o.overScroll:0,s=t+o.winHeight;this.boxOffsetBottom>t&&this.boxOffsetTop<=s?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-e,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(o,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var s=t(e),h=t(i),r=function(){o.winHeight=h.height(),o.winWidth=h.width(),o.docHeight=s.height(),o.docWidth=s.width()},a=function(){var t=h.scrollTop(),i=o.docHeight-o.winHeight,e=o.docWidth-o.winWidth;o.scrollTop=Math.max(0,Math.min(i,t)),o.scrollLeft=Math.max(0,Math.min(e,h.scrollLeft())),o.overScroll=Math.max(t-i,Math.min(t,0))};h.on("resize.px.parallax load.px.parallax",function(){r(),o.isFresh=!1,o.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){a(),o.requestRender()}),r(),a(),this.isReady=!0}},configure:function(i){"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this.prototype,i))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;this.isBusy||(this.isBusy=!0,i.requestAnimationFrame(function(){t.render(),t.isBusy=!1}))},destroy:function(e){var s,h=t(e).data("px.parallax");for(h.$mirror.remove(),s=0;s<this.sliders.length;s+=1)this.sliders[s]==h&&this.sliders.splice(s,1);t(e).data("px.parallax",!1),0===this.sliders.length&&(t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),this.isReady=!1,o.isSetup=!1)}});var r=t.fn.parallax;t.fn.parallax=h,t.fn.parallax.Constructor=o,t.fn.parallax.noConflict=function(){return t.fn.parallax=r,this},t(e).on("ready.px.parallax.data-api",function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJwYXJhbGxheC5taW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCgnLmhhbWJ1cmdlci1pY29uJykub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0Y29uc29sZS5sb2coJ2NsaWNrdCcpO1xuXHQkKCcubmF2aWdhdGlvbl9fbGlua3MnKS50b2dnbGVDbGFzcygnaW52aXNpYmxlIC5mcm9tLXJpZ2h0Jyk7XG5cblx0dmFyIGhhbWJ1cmdlckJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhhbWJ1cmdlci1iYXJzLS1zaW5nbGVcIik7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBoYW1idXJnZXJCYXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0JChoYW1idXJnZXJCYXJzWzBdKS50b2dnbGVDbGFzcygndGlsdC1wb3NpdGl2ZScpO1xuXHRcdCQoaGFtYnVyZ2VyQmFyc1sxXSkudG9nZ2xlQ2xhc3MoJ2Rpc2FwcGVhcicpO1xuXHRcdCQoaGFtYnVyZ2VyQmFyc1syXSkudG9nZ2xlQ2xhc3MoJ3RpbHQtbmVnYXRpdmUnKTtcblx0fVxuXG5cdCQoJy5uYXZpZ2F0aW9uX19saW5rcycpLnRvZ2dsZUNsYXNzKCdhbmltYXRlLWZyb20tcmlnaHQnKTtcblx0XG59KTtcblxuJCgnLnBhcmFsbGF4LXdpbmRvdycpLnBhcmFsbGF4KHtpbWFnZVNyYzogJ2Fzc2V0cy9pbWcvYnVycml0by5qcGcnfSk7XG4iLCIvKiFcbiAqIHBhcmFsbGF4LmpzIHYxLjQuMiAoaHR0cDovL3BpeGVsY29nLmdpdGh1Yi5pby9wYXJhbGxheC5qcy8pXG4gKiBAY29weXJpZ2h0IDIwMTYgUGl4ZWxDb2csIEluYy5cbiAqIEBsaWNlbnNlIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3BpeGVsY29nL3BhcmFsbGF4LmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKi9cbiFmdW5jdGlvbih0LGksZSxzKXtmdW5jdGlvbiBvKGksZSl7dmFyIGg9dGhpcztcIm9iamVjdFwiPT10eXBlb2YgZSYmKGRlbGV0ZSBlLnJlZnJlc2gsZGVsZXRlIGUucmVuZGVyLHQuZXh0ZW5kKHRoaXMsZSkpLHRoaXMuJGVsZW1lbnQ9dChpKSwhdGhpcy5pbWFnZVNyYyYmdGhpcy4kZWxlbWVudC5pcyhcImltZ1wiKSYmKHRoaXMuaW1hZ2VTcmM9dGhpcy4kZWxlbWVudC5hdHRyKFwic3JjXCIpKTt2YXIgcj0odGhpcy5wb3NpdGlvbitcIlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKC9cXFMrL2cpfHxbXTtpZihyLmxlbmd0aDwxJiZyLnB1c2goXCJjZW50ZXJcIiksMT09ci5sZW5ndGgmJnIucHVzaChyWzBdKSwoXCJ0b3BcIj09clswXXx8XCJib3R0b21cIj09clswXXx8XCJsZWZ0XCI9PXJbMV18fFwicmlnaHRcIj09clsxXSkmJihyPVtyWzFdLHJbMF1dKSx0aGlzLnBvc2l0aW9uWCE9cyYmKHJbMF09dGhpcy5wb3NpdGlvblgudG9Mb3dlckNhc2UoKSksdGhpcy5wb3NpdGlvblkhPXMmJihyWzFdPXRoaXMucG9zaXRpb25ZLnRvTG93ZXJDYXNlKCkpLGgucG9zaXRpb25YPXJbMF0saC5wb3NpdGlvblk9clsxXSxcImxlZnRcIiE9dGhpcy5wb3NpdGlvblgmJlwicmlnaHRcIiE9dGhpcy5wb3NpdGlvblgmJih0aGlzLnBvc2l0aW9uWD1pc05hTihwYXJzZUludCh0aGlzLnBvc2l0aW9uWCkpP1wiY2VudGVyXCI6cGFyc2VJbnQodGhpcy5wb3NpdGlvblgpKSxcInRvcFwiIT10aGlzLnBvc2l0aW9uWSYmXCJib3R0b21cIiE9dGhpcy5wb3NpdGlvblkmJih0aGlzLnBvc2l0aW9uWT1pc05hTihwYXJzZUludCh0aGlzLnBvc2l0aW9uWSkpP1wiY2VudGVyXCI6cGFyc2VJbnQodGhpcy5wb3NpdGlvblkpKSx0aGlzLnBvc2l0aW9uPXRoaXMucG9zaXRpb25YKyhpc05hTih0aGlzLnBvc2l0aW9uWCk/XCJcIjpcInB4XCIpK1wiIFwiK3RoaXMucG9zaXRpb25ZKyhpc05hTih0aGlzLnBvc2l0aW9uWSk/XCJcIjpcInB4XCIpLG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUG9kfGlQaG9uZXxpUGFkKS8pKXJldHVybiB0aGlzLmltYWdlU3JjJiZ0aGlzLmlvc0ZpeCYmIXRoaXMuJGVsZW1lbnQuaXMoXCJpbWdcIikmJnRoaXMuJGVsZW1lbnQuY3NzKHtiYWNrZ3JvdW5kSW1hZ2U6XCJ1cmwoXCIrdGhpcy5pbWFnZVNyYytcIilcIixiYWNrZ3JvdW5kU2l6ZTpcImNvdmVyXCIsYmFja2dyb3VuZFBvc2l0aW9uOnRoaXMucG9zaXRpb259KSx0aGlzO2lmKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhBbmRyb2lkKS8pKXJldHVybiB0aGlzLmltYWdlU3JjJiZ0aGlzLmFuZHJvaWRGaXgmJiF0aGlzLiRlbGVtZW50LmlzKFwiaW1nXCIpJiZ0aGlzLiRlbGVtZW50LmNzcyh7YmFja2dyb3VuZEltYWdlOlwidXJsKFwiK3RoaXMuaW1hZ2VTcmMrXCIpXCIsYmFja2dyb3VuZFNpemU6XCJjb3ZlclwiLGJhY2tncm91bmRQb3NpdGlvbjp0aGlzLnBvc2l0aW9ufSksdGhpczt0aGlzLiRtaXJyb3I9dChcIjxkaXYgLz5cIikucHJlcGVuZFRvKFwiYm9keVwiKTt2YXIgYT10aGlzLiRlbGVtZW50LmZpbmQoXCI+LnBhcmFsbGF4LXNsaWRlclwiKSxuPSExOzA9PWEubGVuZ3RoP3RoaXMuJHNsaWRlcj10KFwiPGltZyAvPlwiKS5wcmVwZW5kVG8odGhpcy4kbWlycm9yKToodGhpcy4kc2xpZGVyPWEucHJlcGVuZFRvKHRoaXMuJG1pcnJvciksbj0hMCksdGhpcy4kbWlycm9yLmFkZENsYXNzKFwicGFyYWxsYXgtbWlycm9yXCIpLmNzcyh7dmlzaWJpbGl0eTpcImhpZGRlblwiLHpJbmRleDp0aGlzLnpJbmRleCxwb3NpdGlvbjpcImZpeGVkXCIsdG9wOjAsbGVmdDowLG92ZXJmbG93OlwiaGlkZGVuXCJ9KSx0aGlzLiRzbGlkZXIuYWRkQ2xhc3MoXCJwYXJhbGxheC1zbGlkZXJcIikub25lKFwibG9hZFwiLGZ1bmN0aW9uKCl7aC5uYXR1cmFsSGVpZ2h0JiZoLm5hdHVyYWxXaWR0aHx8KGgubmF0dXJhbEhlaWdodD10aGlzLm5hdHVyYWxIZWlnaHR8fHRoaXMuaGVpZ2h0fHwxLGgubmF0dXJhbFdpZHRoPXRoaXMubmF0dXJhbFdpZHRofHx0aGlzLndpZHRofHwxKSxoLmFzcGVjdFJhdGlvPWgubmF0dXJhbFdpZHRoL2gubmF0dXJhbEhlaWdodCxvLmlzU2V0dXB8fG8uc2V0dXAoKSxvLnNsaWRlcnMucHVzaChoKSxvLmlzRnJlc2g9ITEsby5yZXF1ZXN0UmVuZGVyKCl9KSxufHwodGhpcy4kc2xpZGVyWzBdLnNyYz10aGlzLmltYWdlU3JjKSwodGhpcy5uYXR1cmFsSGVpZ2h0JiZ0aGlzLm5hdHVyYWxXaWR0aHx8dGhpcy4kc2xpZGVyWzBdLmNvbXBsZXRlfHxhLmxlbmd0aD4wKSYmdGhpcy4kc2xpZGVyLnRyaWdnZXIoXCJsb2FkXCIpfWZ1bmN0aW9uIGgocyl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBoPXQodGhpcykscj1cIm9iamVjdFwiPT10eXBlb2YgcyYmczt0aGlzPT1pfHx0aGlzPT1lfHxoLmlzKFwiYm9keVwiKT9vLmNvbmZpZ3VyZShyKTpoLmRhdGEoXCJweC5wYXJhbGxheFwiKT9cIm9iamVjdFwiPT10eXBlb2YgcyYmdC5leHRlbmQoaC5kYXRhKFwicHgucGFyYWxsYXhcIikscik6KHI9dC5leHRlbmQoe30saC5kYXRhKCksciksaC5kYXRhKFwicHgucGFyYWxsYXhcIixuZXcgbyh0aGlzLHIpKSksXCJzdHJpbmdcIj09dHlwZW9mIHMmJihcImRlc3Ryb3lcIj09cz9vLmRlc3Ryb3kodGhpcyk6b1tzXSgpKX0pfSFmdW5jdGlvbigpe2Zvcih2YXIgdD0wLGU9W1wibXNcIixcIm1velwiLFwid2Via2l0XCIsXCJvXCJdLHM9MDtzPGUubGVuZ3RoJiYhaS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7KytzKWkucmVxdWVzdEFuaW1hdGlvbkZyYW1lPWlbZVtzXStcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXSxpLmNhbmNlbEFuaW1hdGlvbkZyYW1lPWlbZVtzXStcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdfHxpW2Vbc10rXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07aS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fChpLnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbihlKXt2YXIgcz0obmV3IERhdGUpLmdldFRpbWUoKSxvPU1hdGgubWF4KDAsMTYtKHMtdCkpLGg9aS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShzK28pfSxvKTtyZXR1cm4gdD1zK28saH0pLGkuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fChpLmNhbmNlbEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKHQpe2NsZWFyVGltZW91dCh0KX0pfSgpLHQuZXh0ZW5kKG8ucHJvdG90eXBlLHtzcGVlZDouMixibGVlZDowLHpJbmRleDotMTAwLGlvc0ZpeDohMCxhbmRyb2lkRml4OiEwLHBvc2l0aW9uOlwiY2VudGVyXCIsb3ZlclNjcm9sbEZpeDohMSxyZWZyZXNoOmZ1bmN0aW9uKCl7dGhpcy5ib3hXaWR0aD10aGlzLiRlbGVtZW50Lm91dGVyV2lkdGgoKSx0aGlzLmJveEhlaWdodD10aGlzLiRlbGVtZW50Lm91dGVySGVpZ2h0KCkrMip0aGlzLmJsZWVkLHRoaXMuYm94T2Zmc2V0VG9wPXRoaXMuJGVsZW1lbnQub2Zmc2V0KCkudG9wLXRoaXMuYmxlZWQsdGhpcy5ib3hPZmZzZXRMZWZ0PXRoaXMuJGVsZW1lbnQub2Zmc2V0KCkubGVmdCx0aGlzLmJveE9mZnNldEJvdHRvbT10aGlzLmJveE9mZnNldFRvcCt0aGlzLmJveEhlaWdodDt2YXIgdD1vLndpbkhlaWdodCxpPW8uZG9jSGVpZ2h0LGU9TWF0aC5taW4odGhpcy5ib3hPZmZzZXRUb3AsaS10KSxzPU1hdGgubWF4KHRoaXMuYm94T2Zmc2V0VG9wK3RoaXMuYm94SGVpZ2h0LXQsMCksaD10aGlzLmJveEhlaWdodCsoZS1zKSooMS10aGlzLnNwZWVkKXwwLHI9KHRoaXMuYm94T2Zmc2V0VG9wLWUpKigxLXRoaXMuc3BlZWQpfDA7aWYoaCp0aGlzLmFzcGVjdFJhdGlvPj10aGlzLmJveFdpZHRoKXt0aGlzLmltYWdlV2lkdGg9aCp0aGlzLmFzcGVjdFJhdGlvfDAsdGhpcy5pbWFnZUhlaWdodD1oLHRoaXMub2Zmc2V0QmFzZVRvcD1yO3ZhciBhPXRoaXMuaW1hZ2VXaWR0aC10aGlzLmJveFdpZHRoO3RoaXMub2Zmc2V0TGVmdD1cImxlZnRcIj09dGhpcy5wb3NpdGlvblg/MDpcInJpZ2h0XCI9PXRoaXMucG9zaXRpb25YPy1hOmlzTmFOKHRoaXMucG9zaXRpb25YKT8tYS8yfDA6TWF0aC5tYXgodGhpcy5wb3NpdGlvblgsLWEpfWVsc2V7dGhpcy5pbWFnZVdpZHRoPXRoaXMuYm94V2lkdGgsdGhpcy5pbWFnZUhlaWdodD10aGlzLmJveFdpZHRoL3RoaXMuYXNwZWN0UmF0aW98MCx0aGlzLm9mZnNldExlZnQ9MDt2YXIgYT10aGlzLmltYWdlSGVpZ2h0LWg7dGhpcy5vZmZzZXRCYXNlVG9wPVwidG9wXCI9PXRoaXMucG9zaXRpb25ZP3I6XCJib3R0b21cIj09dGhpcy5wb3NpdGlvblk/ci1hOmlzTmFOKHRoaXMucG9zaXRpb25ZKT9yLWEvMnwwOnIrTWF0aC5tYXgodGhpcy5wb3NpdGlvblksLWEpfX0scmVuZGVyOmZ1bmN0aW9uKCl7dmFyIHQ9by5zY3JvbGxUb3AsaT1vLnNjcm9sbExlZnQsZT10aGlzLm92ZXJTY3JvbGxGaXg/by5vdmVyU2Nyb2xsOjAscz10K28ud2luSGVpZ2h0O3RoaXMuYm94T2Zmc2V0Qm90dG9tPnQmJnRoaXMuYm94T2Zmc2V0VG9wPD1zPyh0aGlzLnZpc2liaWxpdHk9XCJ2aXNpYmxlXCIsdGhpcy5taXJyb3JUb3A9dGhpcy5ib3hPZmZzZXRUb3AtdCx0aGlzLm1pcnJvckxlZnQ9dGhpcy5ib3hPZmZzZXRMZWZ0LWksdGhpcy5vZmZzZXRUb3A9dGhpcy5vZmZzZXRCYXNlVG9wLXRoaXMubWlycm9yVG9wKigxLXRoaXMuc3BlZWQpKTp0aGlzLnZpc2liaWxpdHk9XCJoaWRkZW5cIix0aGlzLiRtaXJyb3IuY3NzKHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KVwiLHZpc2liaWxpdHk6dGhpcy52aXNpYmlsaXR5LHRvcDp0aGlzLm1pcnJvclRvcC1lLGxlZnQ6dGhpcy5taXJyb3JMZWZ0LGhlaWdodDp0aGlzLmJveEhlaWdodCx3aWR0aDp0aGlzLmJveFdpZHRofSksdGhpcy4kc2xpZGVyLmNzcyh7dHJhbnNmb3JtOlwidHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweClcIixwb3NpdGlvbjpcImFic29sdXRlXCIsdG9wOnRoaXMub2Zmc2V0VG9wLGxlZnQ6dGhpcy5vZmZzZXRMZWZ0LGhlaWdodDp0aGlzLmltYWdlSGVpZ2h0LHdpZHRoOnRoaXMuaW1hZ2VXaWR0aCxtYXhXaWR0aDpcIm5vbmVcIn0pfX0pLHQuZXh0ZW5kKG8se3Njcm9sbFRvcDowLHNjcm9sbExlZnQ6MCx3aW5IZWlnaHQ6MCx3aW5XaWR0aDowLGRvY0hlaWdodDoxPDwzMCxkb2NXaWR0aDoxPDwzMCxzbGlkZXJzOltdLGlzUmVhZHk6ITEsaXNGcmVzaDohMSxpc0J1c3k6ITEsc2V0dXA6ZnVuY3Rpb24oKXtpZighdGhpcy5pc1JlYWR5KXt2YXIgcz10KGUpLGg9dChpKSxyPWZ1bmN0aW9uKCl7by53aW5IZWlnaHQ9aC5oZWlnaHQoKSxvLndpbldpZHRoPWgud2lkdGgoKSxvLmRvY0hlaWdodD1zLmhlaWdodCgpLG8uZG9jV2lkdGg9cy53aWR0aCgpfSxhPWZ1bmN0aW9uKCl7dmFyIHQ9aC5zY3JvbGxUb3AoKSxpPW8uZG9jSGVpZ2h0LW8ud2luSGVpZ2h0LGU9by5kb2NXaWR0aC1vLndpbldpZHRoO28uc2Nyb2xsVG9wPU1hdGgubWF4KDAsTWF0aC5taW4oaSx0KSksby5zY3JvbGxMZWZ0PU1hdGgubWF4KDAsTWF0aC5taW4oZSxoLnNjcm9sbExlZnQoKSkpLG8ub3ZlclNjcm9sbD1NYXRoLm1heCh0LWksTWF0aC5taW4odCwwKSl9O2gub24oXCJyZXNpemUucHgucGFyYWxsYXggbG9hZC5weC5wYXJhbGxheFwiLGZ1bmN0aW9uKCl7cigpLG8uaXNGcmVzaD0hMSxvLnJlcXVlc3RSZW5kZXIoKX0pLm9uKFwic2Nyb2xsLnB4LnBhcmFsbGF4IGxvYWQucHgucGFyYWxsYXhcIixmdW5jdGlvbigpe2EoKSxvLnJlcXVlc3RSZW5kZXIoKX0pLHIoKSxhKCksdGhpcy5pc1JlYWR5PSEwfX0sY29uZmlndXJlOmZ1bmN0aW9uKGkpe1wib2JqZWN0XCI9PXR5cGVvZiBpJiYoZGVsZXRlIGkucmVmcmVzaCxkZWxldGUgaS5yZW5kZXIsdC5leHRlbmQodGhpcy5wcm90b3R5cGUsaSkpfSxyZWZyZXNoOmZ1bmN0aW9uKCl7dC5lYWNoKHRoaXMuc2xpZGVycyxmdW5jdGlvbigpe3RoaXMucmVmcmVzaCgpfSksdGhpcy5pc0ZyZXNoPSEwfSxyZW5kZXI6ZnVuY3Rpb24oKXt0aGlzLmlzRnJlc2h8fHRoaXMucmVmcmVzaCgpLHQuZWFjaCh0aGlzLnNsaWRlcnMsZnVuY3Rpb24oKXt0aGlzLnJlbmRlcigpfSl9LHJlcXVlc3RSZW5kZXI6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuaXNCdXN5fHwodGhpcy5pc0J1c3k9ITAsaS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LnJlbmRlcigpLHQuaXNCdXN5PSExfSkpfSxkZXN0cm95OmZ1bmN0aW9uKGUpe3ZhciBzLGg9dChlKS5kYXRhKFwicHgucGFyYWxsYXhcIik7Zm9yKGguJG1pcnJvci5yZW1vdmUoKSxzPTA7czx0aGlzLnNsaWRlcnMubGVuZ3RoO3MrPTEpdGhpcy5zbGlkZXJzW3NdPT1oJiZ0aGlzLnNsaWRlcnMuc3BsaWNlKHMsMSk7dChlKS5kYXRhKFwicHgucGFyYWxsYXhcIiwhMSksMD09PXRoaXMuc2xpZGVycy5sZW5ndGgmJih0KGkpLm9mZihcInNjcm9sbC5weC5wYXJhbGxheCByZXNpemUucHgucGFyYWxsYXggbG9hZC5weC5wYXJhbGxheFwiKSx0aGlzLmlzUmVhZHk9ITEsby5pc1NldHVwPSExKX19KTt2YXIgcj10LmZuLnBhcmFsbGF4O3QuZm4ucGFyYWxsYXg9aCx0LmZuLnBhcmFsbGF4LkNvbnN0cnVjdG9yPW8sdC5mbi5wYXJhbGxheC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIHQuZm4ucGFyYWxsYXg9cix0aGlzfSx0KGUpLm9uKFwicmVhZHkucHgucGFyYWxsYXguZGF0YS1hcGlcIixmdW5jdGlvbigpe3QoJ1tkYXRhLXBhcmFsbGF4PVwic2Nyb2xsXCJdJykucGFyYWxsYXgoKX0pfShqUXVlcnksd2luZG93LGRvY3VtZW50KTsiXX0=
