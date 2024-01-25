/**
 * Highcharts JS v11.3.0 (2024-01-10)
 *
 * (c) 2009-2024
 *
 * License: www.highcharts.com/license
 */!function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/flowmap",["highcharts"],function(o){return t(o),t.Highcharts=o,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var o=t?t._modules:{};function i(t,o,i,r){t.hasOwnProperty(o)||(t[o]=r.apply(null,i),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:o,module:t[o]}})))}i(o,"Series/FlowMap/FlowMapPoint.js",[o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],function(t,o){var i,r=this&&this.__extends||(i=function(t,o){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])})(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw TypeError("Class extends value "+String(o)+" is not a constructor or null");function r(){this.constructor=t}i(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}),e=t.seriesTypes.mapline.prototype.pointClass,n=o.pick,s=o.isString,a=o.isNumber;return function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return r(o,t),o.prototype.isValid=function(){var t=!!(this.options.to&&this.options.from);return[this.options.to,this.options.from].forEach(function(o){t=!!(t&&o&&(s(o)||a(n(o[0],o.lat))&&a(n(o[1],o.lon))))}),t},o}(e)}),i(o,"Series/FlowMap/FlowMapSeries.js",[o["Series/FlowMap/FlowMapPoint.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],function(t,o,i){var r,e=this&&this.__extends||(r=function(t,o){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])})(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw TypeError("Class extends value "+String(o)+" is not a constructor or null");function i(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}),n=this&&this.__spreadArray||function(t,o,i){if(i||2==arguments.length)for(var r,e=0,n=o.length;e<n;e++)!r&&e in o||(r||(r=Array.prototype.slice.call(o,0,e)),r[e]=o[e]);return t.concat(r||Array.prototype.slice.call(o))},s=o.series.prototype.pointClass,a=o.seriesTypes,p=a.column,h=a.map,l=a.mapline,c=i.addEvent,f=i.arrayMax,u=i.arrayMin,y=i.defined,d=i.extend,g=i.isArray,m=i.merge,v=i.pick,w=i.relativeLength,x=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return e(o,t),o.getLength=function(t,o){return Math.sqrt(t*t+o*o)},o.normalize=function(t,o){var i=this.getLength(t,o);return[t/i,o/i]},o.markerEndPath=function(t,o,i,r){var e=w(r.width||0,this.getLength(o[0]-t[0],o[1]-t[1])),n=r.markerType||"arrow",s=this.normalize(o[0]-t[0],o[1]-t[1]),a=s[0],p=s[1],h=[];if("arrow"===n){var l=t[0],c=t[1];l-=a*e,c-=p*e,h.push(["L",l,c]),h.push(["L",i[0],i[1]]),l=o[0],c=o[1],l+=a*e,c+=p*e,h.push(["L",l,c])}if("mushroom"===n){var f=t[0],u=t[1],y=o[0],d=o[1],g=i[0],m=i[1],v=(y-f)/2+f,x=(d-u)/2+u;f-=a*e,u-=p*e,h.push(["L",f,u]),y+=a*e,d+=p*e,h.push(["Q",(g-v)*2+v,(m-x)*2+x,y,d])}return h},o.prototype.animate=function(t){var o=this.points;t||o.forEach(function(t){if(t.shapeArgs&&g(t.shapeArgs.d)&&t.shapeArgs.d.length){var o=t.shapeArgs.d,i=o[0][1],r=o[0][2];if(i&&r){for(var e=[],s=0;s<o.length;s++){e.push(n([],o[s],!0));for(var a=1;a<o[s].length;a++)e[s][a]=a%2?i:r}t.graphic&&(t.graphic.attr({d:e}),t.graphic.animate({d:o}))}}})},o.prototype.getLinkWidth=function(t){var o=this.options.width,i=t.options.weight||this.options.weight;if(t.options.weight=i,o&&!i)return o;var r=this.smallestWeight,e=this.greatestWeight;if(!y(i)||!r||!e)return 0;var n=this.options.minWidth;return(i-r)*(this.options.maxWidth-n)/(e-r||1)+n},o.prototype.autoCurve=function(t,o,i,r,e,n){var s={x:i-t,y:r-o},a={x:(i-t)/2+t,y:(r-o)/2+o},p={x:a.x-e,y:a.y-n},h=s.x*p.x+s.y*p.y,l=Math.atan2(s.x*p.y-s.y*p.x,h),c=180*l/Math.PI;return c<0&&(c=360+c),-(.7*Math.sin(l=c*Math.PI/180))},o.prototype.pointAttribs=function(t,o){var i=h.prototype.pointAttribs.call(this,t,o);return i.fill=v(t.options.fillColor,t.options.color,"none"===this.options.fillColor?null:this.options.fillColor,this.color),i["fill-opacity"]=v(t.options.fillOpacity,this.options.fillOpacity),i["stroke-width"]=v(t.options.lineWidth,this.options.lineWidth,1),t.options.opacity&&(i.opacity=t.options.opacity),i},o.prototype.translate=function(){var t=this;this.chart.hasRendered&&(this.isDirtyData||!this.hasRendered)&&(this.processData(),this.generatePoints());var o=[],i=0,r=0;this.points.forEach(function(e){var n,a,p=t.chart,h=p.mapView,l=e.options,f=function(){e.series.isDirty=!0},u=function(t){var o=p.get(t);if(o instanceof s&&o.plotX&&o.plotY)return c(o,"update",f),{x:o.plotX,y:o.plotY}},y=function(t){return g(t)?{lon:t[0],lat:t[1]}:t};"string"==typeof l.from?n=u(l.from):"object"==typeof l.from&&h&&(n=h.lonLatToPixels(y(l.from))),"string"==typeof l.to?a=u(l.to):"object"==typeof l.to&&h&&(a=h.lonLatToPixels(y(l.to))),e.fromPos=n,e.toPos=a,n&&a&&(i+=(n.x+a.x)/2,r+=(n.y+a.y)/2),v(e.options.weight,t.options.weight)&&o.push(v(e.options.weight,t.options.weight))}),this.smallestWeight=u(o),this.greatestWeight=f(o),this.centerOfPoints={x:i/this.points.length,y:r/this.points.length},this.points.forEach(function(o){if(!t.getLinkWidth(o)){o.shapeArgs={d:[]};return}o.fromPos&&(o.plotX=o.fromPos.x,o.plotY=o.fromPos.y),o.shapeType="path",o.shapeArgs=t.getPointShapeArgs(o),o.color=v(o.options.color,o.series.color)})},o.prototype.getPointShapeArgs=function(t){var i,r=t.fromPos,e=t.toPos;if(!r||!e)return{};var s=this.getLinkWidth(t)/2,a=t.options,p=m(this.options.markerEnd,a.markerEnd),h=v(a.growTowards,this.options.growTowards),l=r.x||0,c=r.y||0,f=e.x||0,u=e.y||0,d=v(a.curveFactor,this.options.curveFactor),g=p&&p.enabled&&p.height||0;if(y(d)||(d=this.autoCurve(l,c,f,u,this.centerOfPoints.x,this.centerOfPoints.y)),g){g=w(g,4*s);var x=f-l,P=u-c,_=l+(x*=.5),b=c+(P*=.5),O=x,M=_+(x=P)*d,j=b+(P=-O)*d,A=o.normalize(M-f,j-u),C=A[0],L=A[1];C*=g,L*=g,f+=C,u+=L}var E=f-l,S=u-c,W=l+(E*=.5),k=c+(S*=.5),T=E;E=S,S=-T;var F=o.normalize(E,S),z=F[0],D=F[1],H=1+.25*Math.sqrt(d*d);z*=s*H,D*=s*H;var R=W+E*d,Q=k+S*d,X=o.normalize(R-l,Q-c),Y=X[0],q=X[1];T=Y,Y=q,q=-T,Y*=s,q*=s;var I=o.normalize(R-f,Q-u),U=I[0],V=I[1];T=U,U=-V,V=T,U*=s,V*=s,h&&(Y/=s,q/=s,z/=4,D/=4);var G={d:[["M",l-Y,c-q],["Q",R-z,Q-D,f-U,u-V],["L",f+U,u+V],["Q",R+z,Q+D,l+Y,c+q],["Z"]]};if(p&&p.enabled&&G.d){var N=o.markerEndPath([f-U,u-V],[f+U,u+V],[e.x,e.y],p);(i=G.d).splice.apply(i,n([2,0],N,!1))}var Z=t.options.from,B=t.options.to,J=Z.lat,K=Z.lon,$=B.lat,tt=B.lon;return J&&K&&(t.options.from="".concat(+J,", ").concat(+K)),$&&tt&&(t.options.to="".concat(+$,", ").concat(+tt)),G},o.defaultOptions=m(l.defaultOptions,{animation:!0,dataLabels:{enabled:!1},fillOpacity:.5,markerEnd:{enabled:!0,height:"40%",width:"40%",markerType:"arrow"},width:1,maxWidth:25,minWidth:5,lineWidth:void 0,tooltip:{headerFormat:'<span style="font-size: 0.8em">{series.name}</span><br/>',pointFormat:"{point.options.from} → {point.options.to}: <b>{point.options.weight}</b>"}}),o}(l);return d(x.prototype,{pointClass:t,pointArrayMap:["from","to","weight"],drawPoints:p.prototype.drawPoints,useMapGeometry:!0}),o.registerSeriesType("flowmap",x),x}),i(o,"masters/modules/flowmap.src.js",[],function(){})});