"use strict";(self.webpackChunkinsta_diagram=self.webpackChunkinsta_diagram||[]).push([[375],{375:(t,e,a)=>{a.d(e,{DA:()=>o,IU:()=>rt,U7:()=>at,U_:()=>it,lC:()=>c,nM:()=>D,on:()=>et});var r=a(7570),i=a(1716),n=a(7046),s=a(3638);function l(t,e){e&&t.attr("style",e)}function d(t){const e=(0,s.Ltv)(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),a=e.append("xhtml:div"),r=t.label,i=t.isNode?"nodeLabel":"edgeLabel",n=a.append("span");return n.html(r),l(n,t.labelStyle),n.attr("class",i),l(a,t.labelStyle),a.style("display","inline-block"),a.style("white-space","nowrap"),a.attr("xmlns","http://www.w3.org/1999/xhtml"),e.node()}(0,n.K2)(l,"applyStyle"),(0,n.K2)(d,"addHtmlLabel");var o=(0,n.K2)(((t,e,a,s)=>{let l=t||"";if("object"===typeof l&&(l=l[0]),(0,n._3)((0,n.D7)().flowchart.htmlLabels)){l=l.replace(/\\n|\n/g,"<br />"),n.Rm.debug("vertexText"+l);return d({isNode:s,label:(0,r.hE)((0,i.Sm)(l)),labelStyle:e.replace("fill:","color:")})}{const t=document.createElementNS("http://www.w3.org/2000/svg","text");t.setAttribute("style",e.replace("color:","fill:"));let r=[];r="string"===typeof l?l.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(l)?l:[];for(const e of r){const r=document.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),r.setAttribute("dy","1em"),r.setAttribute("x","0"),a?r.setAttribute("class","title-row"):r.setAttribute("class","row"),r.textContent=e.trim(),t.appendChild(r)}return t}}),"createLabel"),h=(0,n.K2)((async(t,e,a,l)=>{const d=(0,n.D7)();let h;const c=e.useHtmlLabels||(0,n._3)(d.flowchart.htmlLabels);h=a||"node default";const y=t.insert("g").attr("class",h).attr("id",e.domId||e.id),g=y.insert("g").attr("class","label").attr("style",e.labelStyle);let x;x=void 0===e.labelText?"":"string"===typeof e.labelText?e.labelText:e.labelText[0];const p=g.node();let w;w="markdown"===e.labelType?(0,r.GZ)(g,(0,n.jZ)((0,i.Sm)(x),d),{useHtmlLabels:c,width:e.width||d.flowchart.wrappingWidth,classes:"markdown-node-label"},d):p.appendChild(o((0,n.jZ)((0,i.Sm)(x),d),e.labelStyle,!1,l));let u=w.getBBox();const f=e.padding/2;if((0,n._3)(d.flowchart.htmlLabels)){const t=w.children[0],e=(0,s.Ltv)(w),a=t.getElementsByTagName("img");if(a){const t=""===x.replace(/<img[^>]*>/g,"").trim();await Promise.all([...a].map((e=>new Promise((a=>{function r(){if(e.style.display="flex",e.style.flexDirection="column",t){const t=d.fontSize?d.fontSize:window.getComputedStyle(document.body).fontSize,a=5,r=parseInt(t,10)*a+"px";e.style.minWidth=r,e.style.maxWidth=r}else e.style.width="100%";a(e)}(0,n.K2)(r,"setupImage"),setTimeout((()=>{e.complete&&r()})),e.addEventListener("error",r),e.addEventListener("load",r)})))))}u=t.getBoundingClientRect(),e.attr("width",u.width),e.attr("height",u.height)}return c?g.attr("transform","translate("+-u.width/2+", "+-u.height/2+")"):g.attr("transform","translate(0, "+-u.height/2+")"),e.centerLabel&&g.attr("transform","translate("+-u.width/2+", "+-u.height/2+")"),g.insert("rect",":first-child"),{shapeSvg:y,bbox:u,halfPadding:f,label:g}}),"labelHelper"),c=(0,n.K2)(((t,e)=>{const a=e.node().getBBox();t.width=a.width,t.height=a.height}),"updateNodeBounds");function y(t,e,a,r){return t.insert("polygon",":first-child").attr("points",r.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","label-container").attr("transform","translate("+-e/2+","+a/2+")")}(0,n.K2)(y,"insertPolygonShape");var g=(0,n.K2)((t=>{const e=new Set;for(const a of t)switch(a){case"x":e.add("right"),e.add("left");break;case"y":e.add("up"),e.add("down");break;default:e.add(a)}return e}),"expandAndDeduplicateDirections"),x=(0,n.K2)(((t,e,a)=>{const r=g(t),i=e.height+2*a.padding,n=i/2,s=e.width+2*n+a.padding,l=a.padding/2;return r.has("right")&&r.has("left")&&r.has("up")&&r.has("down")?[{x:0,y:0},{x:n,y:0},{x:s/2,y:2*l},{x:s-n,y:0},{x:s,y:0},{x:s,y:-i/3},{x:s+2*l,y:-i/2},{x:s,y:-2*i/3},{x:s,y:-i},{x:s-n,y:-i},{x:s/2,y:-i-2*l},{x:n,y:-i},{x:0,y:-i},{x:0,y:-2*i/3},{x:-2*l,y:-i/2},{x:0,y:-i/3}]:r.has("right")&&r.has("left")&&r.has("up")?[{x:n,y:0},{x:s-n,y:0},{x:s,y:-i/2},{x:s-n,y:-i},{x:n,y:-i},{x:0,y:-i/2}]:r.has("right")&&r.has("left")&&r.has("down")?[{x:0,y:0},{x:n,y:-i},{x:s-n,y:-i},{x:s,y:0}]:r.has("right")&&r.has("up")&&r.has("down")?[{x:0,y:0},{x:s,y:-n},{x:s,y:-i+n},{x:0,y:-i}]:r.has("left")&&r.has("up")&&r.has("down")?[{x:s,y:0},{x:0,y:-n},{x:0,y:-i+n},{x:s,y:-i}]:r.has("right")&&r.has("left")?[{x:n,y:0},{x:n,y:-l},{x:s-n,y:-l},{x:s-n,y:0},{x:s,y:-i/2},{x:s-n,y:-i},{x:s-n,y:-i+l},{x:n,y:-i+l},{x:n,y:-i},{x:0,y:-i/2}]:r.has("up")&&r.has("down")?[{x:s/2,y:0},{x:0,y:-l},{x:n,y:-l},{x:n,y:-i+l},{x:0,y:-i+l},{x:s/2,y:-i},{x:s,y:-i+l},{x:s-n,y:-i+l},{x:s-n,y:-l},{x:s,y:-l}]:r.has("right")&&r.has("up")?[{x:0,y:0},{x:s,y:-n},{x:0,y:-i}]:r.has("right")&&r.has("down")?[{x:0,y:0},{x:s,y:0},{x:0,y:-i}]:r.has("left")&&r.has("up")?[{x:s,y:0},{x:0,y:-n},{x:s,y:-i}]:r.has("left")&&r.has("down")?[{x:s,y:0},{x:0,y:0},{x:s,y:-i}]:r.has("right")?[{x:n,y:-l},{x:n,y:-l},{x:s-n,y:-l},{x:s-n,y:0},{x:s,y:-i/2},{x:s-n,y:-i},{x:s-n,y:-i+l},{x:n,y:-i+l},{x:n,y:-i+l}]:r.has("left")?[{x:n,y:0},{x:n,y:-l},{x:s-n,y:-l},{x:s-n,y:-i+l},{x:n,y:-i+l},{x:n,y:-i},{x:0,y:-i/2}]:r.has("up")?[{x:n,y:-l},{x:n,y:-i+l},{x:0,y:-i+l},{x:s/2,y:-i},{x:s,y:-i+l},{x:s-n,y:-i+l},{x:s-n,y:-l}]:r.has("down")?[{x:s/2,y:0},{x:0,y:-l},{x:n,y:-l},{x:n,y:-i+l},{x:s-n,y:-i+l},{x:s-n,y:-l},{x:s,y:-l}]:[{x:0,y:0}]}),"getArrowPoints");function p(t,e){return t.intersect(e)}(0,n.K2)(p,"intersectNode");var w=p;function u(t,e,a,r){var i=t.x,n=t.y,s=i-r.x,l=n-r.y,d=Math.sqrt(e*e*l*l+a*a*s*s),o=Math.abs(e*a*s/d);r.x<i&&(o=-o);var h=Math.abs(e*a*l/d);return r.y<n&&(h=-h),{x:i+o,y:n+h}}(0,n.K2)(u,"intersectEllipse");var f=u;function b(t,e,a){return f(t,e,e,a)}(0,n.K2)(b,"intersectCircle");var m=b;function v(t,e,a,r){var i,n,s,l,d,o,h,c,y,g,x,p,w;if(i=e.y-t.y,s=t.x-e.x,d=e.x*t.y-t.x*e.y,y=i*a.x+s*a.y+d,g=i*r.x+s*r.y+d,(0===y||0===g||!S(y,g))&&(n=r.y-a.y,l=a.x-r.x,o=r.x*a.y-a.x*r.y,h=n*t.x+l*t.y+o,c=n*e.x+l*e.y+o,(0===h||0===c||!S(h,c))&&0!==(x=i*l-n*s)))return p=Math.abs(x/2),{x:(w=s*o-l*d)<0?(w-p)/x:(w+p)/x,y:(w=n*d-i*o)<0?(w-p)/x:(w+p)/x}}function S(t,e){return t*e>0}(0,n.K2)(v,"intersectLine"),(0,n.K2)(S,"sameSign");var K=v,L=_;function _(t,e,a){var r=t.x,i=t.y,n=[],s=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY;"function"===typeof e.forEach?e.forEach((function(t){s=Math.min(s,t.x),l=Math.min(l,t.y)})):(s=Math.min(s,e.x),l=Math.min(l,e.y));for(var d=r-t.width/2-s,o=i-t.height/2-l,h=0;h<e.length;h++){var c=e[h],y=e[h<e.length-1?h+1:0],g=K(t,a,{x:d+c.x,y:o+c.y},{x:d+y.x,y:o+y.y});g&&n.push(g)}return n.length?(n.length>1&&n.sort((function(t,e){var r=t.x-a.x,i=t.y-a.y,n=Math.sqrt(r*r+i*i),s=e.x-a.x,l=e.y-a.y,d=Math.sqrt(s*s+l*l);return n<d?-1:n===d?0:1})),n[0]):t}(0,n.K2)(_,"intersectPolygon");var D=(0,n.K2)(((t,e)=>{var a,r,i=t.x,n=t.y,s=e.x-i,l=e.y-n,d=t.width/2,o=t.height/2;return Math.abs(l)*d>Math.abs(s)*o?(l<0&&(o=-o),a=0===l?0:o*s/l,r=o):(s<0&&(d=-d),a=d,r=0===s?0:d*l/s),{x:i+a,y:n+r}}),"intersectRect"),B={node:w,circle:m,ellipse:f,polygon:L,rect:D},C=(0,n.K2)((async(t,e)=>{e.useHtmlLabels||(0,n.D7)().flowchart.htmlLabels||(e.centerLabel=!0);const{shapeSvg:a,bbox:r,halfPadding:i}=await h(t,e,"node "+e.classes,!0);n.Rm.info("Classes = ",e.classes);const s=a.insert("rect",":first-child");return s.attr("rx",e.rx).attr("ry",e.ry).attr("x",-r.width/2-i).attr("y",-r.height/2-i).attr("width",r.width+e.padding).attr("height",r.height+e.padding),c(e,s),e.intersect=function(t){return B.rect(e,t)},a}),"note"),k=(0,n.K2)((t=>t?" "+t:""),"formatClass"),R=(0,n.K2)(((t,e)=>`${e||"node default"}${k(t.classes)} ${k(t.class)}`),"getClassesFromNode"),T=(0,n.K2)((async(t,e)=>{const{shapeSvg:a,bbox:r}=await h(t,e,R(e,void 0),!0),i=r.width+e.padding+(r.height+e.padding),s=[{x:i/2,y:0},{x:i,y:-i/2},{x:i/2,y:-i},{x:0,y:-i/2}];n.Rm.info("Question main (Circle)");const l=y(a,i,i,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return n.Rm.warn("Intersect called"),B.polygon(e,s,t)},a}),"question"),I=(0,n.K2)(((t,e)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),r=[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}];return a.insert("polygon",":first-child").attr("points",r.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),e.width=28,e.height=28,e.intersect=function(t){return B.circle(e,14,t)},a}),"choice"),N=(0,n.K2)((async(t,e)=>{const{shapeSvg:a,bbox:r}=await h(t,e,R(e,void 0),!0),i=r.height+e.padding,n=i/4,s=r.width+2*n+e.padding,l=[{x:n,y:0},{x:s-n,y:0},{x:s,y:-i/2},{x:s-n,y:-i},{x:n,y:-i},{x:0,y:-i/2}],d=y(a,s,i,l);return d.attr("style",e.style),c(e,d),e.intersect=function(t){return B.polygon(e,l,t)},a}),"hexagon"),E=(0,n.K2)((async(t,e)=>{const{shapeSvg:a,bbox:r}=await h(t,e,void 0,!0),i=r.height+2*e.padding,n=i/2,s=r.width+2*n+e.padding,l=x(e.directions,r,e),d=y(a,s,i,l);return d.attr("style",e.style),c(e,d),e.intersect=function(t){return B.polygon(e,l,t)},a}),"block_arrow"),M=(0,n.K2)((async(t,e)=>{const{shapeSvg:a,bbox:r}=await h(t,e,R(e,void 0),!0),i=r.width+e.padding,n=r.height+e.padding,s=[{x:-n/2,y:0},{x:i,y:0},{x:i,y:-n},{x:-n/2,y:-n},{x:0,y:-n/2}];return y(a,i,n,s).attr("style",e.style),e.width=i+n,e.height=n,e.intersect=function(t){return B.polygon(e,s,t)},a}),"rect_left_inv_arrow"),j=(0,n.K2)((async(t,e)=>{const{shapeSvg:a,bbox:r}=await h(t,e,R(e),!0),i=r.width+e.padding,n=r.height+e.padding,s=[{x:-2*n/6,y:0},{x:i-n/6,y:0},{x:i+2*n/6,y:-n},{x:n/6,y:-n}],l=y(a,i,n,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return B.polygon(e,s,t)},a}),"lean_right"),P=(0,n.K2)((async(t,e)=>{const{shapeSvg:a,bbox:r}=await h(t,e,R(e,void 0),!0),i=r.width+e.padding,n=r.height+e.padding,s=[{x:2*n/6,y:0},{x:i+n/6,y:0},{x:i-2*n/6,y:-n},{x:-n/6,y:-n}],l=y(a,i,n,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return B.polygon(e,s,t)},a}),"lean_left"),A=(0,n.K2)((async(t,e)=>{const{shapeSvg:a,bbox:r}=await h(t,e,R(e,void 0),!0),i=r.width+e.padding,n=r.height+e.padding,s=[{x:-2*n/6,y:0},{x:i+2*n/6,y:0},{x:i-n/6,y:-n},{x:n/6,y:-n}],l=y(a,i,n,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return B.polygon(e,s,t)},a}),"trapezoid"),z=(0,n.K2)((async(t,e)=>{const{shapeSvg:a,bbox:r}=await h(t,e,R(e,void 0),!0),i=r.width+e.padding,n=r.height+e.padding,s=[{x:n/6,y:0},{x:i-n/6,y:0},{x:i+2*n/6,y:-n},{x:-2*n/6,y:-n}],l=y(a,i,n,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return B.polygon(e,s,t)},a}),"inv_trapezoid"),q=(0,n.K2)((async(t,e)=>{const{shapeSvg:a,bbox:r}=await h(t,e,R(e,void 0),!0),i=r.width+e.padding,n=r.height+e.padding,s=[{x:0,y:0},{x:i+n/2,y:0},{x:i,y:-n/2},{x:i+n/2,y:-n},{x:0,y:-n}],l=y(a,i,n,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return B.polygon(e,s,t)},a}),"rect_right_inv_arrow"),O=(0,n.K2)((async(t,e)=>{const{shapeSvg:a,bbox:r}=await h(t,e,R(e,void 0),!0),i=r.width+e.padding,n=i/2,s=n/(2.5+i/50),l=r.height+s+e.padding,d="M 0,"+s+" a "+n+","+s+" 0,0,0 "+i+" 0 a "+n+","+s+" 0,0,0 "+-i+" 0 l 0,"+l+" a "+n+","+s+" 0,0,0 "+i+" 0 l 0,"+-l,o=a.attr("label-offset-y",s).insert("path",":first-child").attr("style",e.style).attr("d",d).attr("transform","translate("+-i/2+","+-(l/2+s)+")");return c(e,o),e.intersect=function(t){const a=B.rect(e,t),r=a.x-e.x;if(0!=n&&(Math.abs(r)<e.width/2||Math.abs(r)==e.width/2&&Math.abs(a.y-e.y)>e.height/2-s)){let i=s*s*(1-r*r/(n*n));0!=i&&(i=Math.sqrt(i)),i=s-i,t.y-e.y>0&&(i=-i),a.y+=i}return a},a}),"cylinder"),U=(0,n.K2)((async(t,e)=>{const{shapeSvg:a,bbox:r,halfPadding:i}=await h(t,e,"node "+e.classes+" "+e.class,!0),s=a.insert("rect",":first-child"),l=e.positioned?e.width:r.width+e.padding,d=e.positioned?e.height:r.height+e.padding,o=e.positioned?-l/2:-r.width/2-i,y=e.positioned?-d/2:-r.height/2-i;if(s.attr("class","basic label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",o).attr("y",y).attr("width",l).attr("height",d),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(W(s,e.props.borders,l,d),t.delete("borders")),t.forEach((t=>{n.Rm.warn(`Unknown node property ${t}`)}))}return c(e,s),e.intersect=function(t){return B.rect(e,t)},a}),"rect"),$=(0,n.K2)((async(t,e)=>{const{shapeSvg:a,bbox:r,halfPadding:i}=await h(t,e,"node "+e.classes,!0),s=a.insert("rect",":first-child"),l=e.positioned?e.width:r.width+e.padding,d=e.positioned?e.height:r.height+e.padding,o=e.positioned?-l/2:-r.width/2-i,y=e.positioned?-d/2:-r.height/2-i;if(s.attr("class","basic cluster composite label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",o).attr("y",y).attr("width",l).attr("height",d),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(W(s,e.props.borders,l,d),t.delete("borders")),t.forEach((t=>{n.Rm.warn(`Unknown node property ${t}`)}))}return c(e,s),e.intersect=function(t){return B.rect(e,t)},a}),"composite"),H=(0,n.K2)((async(t,e)=>{const{shapeSvg:a}=await h(t,e,"label",!0);n.Rm.trace("Classes = ",e.class);const r=a.insert("rect",":first-child");if(r.attr("width",0).attr("height",0),a.attr("class","label edgeLabel"),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(W(r,e.props.borders,0,0),t.delete("borders")),t.forEach((t=>{n.Rm.warn(`Unknown node property ${t}`)}))}return c(e,r),e.intersect=function(t){return B.rect(e,t)},a}),"labelRect");function W(t,e,a,r){const i=[],s=(0,n.K2)((t=>{i.push(t,0)}),"addBorder"),l=(0,n.K2)((t=>{i.push(0,t)}),"skipBorder");e.includes("t")?(n.Rm.debug("add top border"),s(a)):l(a),e.includes("r")?(n.Rm.debug("add right border"),s(r)):l(r),e.includes("b")?(n.Rm.debug("add bottom border"),s(a)):l(a),e.includes("l")?(n.Rm.debug("add left border"),s(r)):l(r),t.attr("stroke-dasharray",i.join(" "))}(0,n.K2)(W,"applyNodePropertyBorders");var F=(0,n.K2)(((t,e)=>{let a;a=e.classes?"node "+e.classes:"node default";const r=t.insert("g").attr("class",a).attr("id",e.domId||e.id),i=r.insert("rect",":first-child"),l=r.insert("line"),d=r.insert("g").attr("class","label"),h=e.labelText.flat?e.labelText.flat():e.labelText;let y="";y="object"===typeof h?h[0]:h,n.Rm.info("Label text abc79",y,h,"object"===typeof h);const g=d.node().appendChild(o(y,e.labelStyle,!0,!0));let x={width:0,height:0};if((0,n._3)((0,n.D7)().flowchart.htmlLabels)){const t=g.children[0],e=(0,s.Ltv)(g);x=t.getBoundingClientRect(),e.attr("width",x.width),e.attr("height",x.height)}n.Rm.info("Text 2",h);const p=h.slice(1,h.length);let w=g.getBBox();const u=d.node().appendChild(o(p.join?p.join("<br/>"):p,e.labelStyle,!0,!0));if((0,n._3)((0,n.D7)().flowchart.htmlLabels)){const t=u.children[0],e=(0,s.Ltv)(u);x=t.getBoundingClientRect(),e.attr("width",x.width),e.attr("height",x.height)}const f=e.padding/2;return(0,s.Ltv)(u).attr("transform","translate( "+(x.width>w.width?0:(w.width-x.width)/2)+", "+(w.height+f+5)+")"),(0,s.Ltv)(g).attr("transform","translate( "+(x.width<w.width?0:-(w.width-x.width)/2)+", 0)"),x=d.node().getBBox(),d.attr("transform","translate("+-x.width/2+", "+(-x.height/2-f+3)+")"),i.attr("class","outer title-state").attr("x",-x.width/2-f).attr("y",-x.height/2-f).attr("width",x.width+e.padding).attr("height",x.height+e.padding),l.attr("class","divider").attr("x1",-x.width/2-f).attr("x2",x.width/2+f).attr("y1",-x.height/2-f+w.height+f).attr("y2",-x.height/2-f+w.height+f),c(e,i),e.intersect=function(t){return B.rect(e,t)},r}),"rectWithTitle"),Z=(0,n.K2)((async(t,e)=>{const{shapeSvg:a,bbox:r}=await h(t,e,R(e,void 0),!0),i=r.height+e.padding,n=r.width+i/4+e.padding,s=a.insert("rect",":first-child").attr("style",e.style).attr("rx",i/2).attr("ry",i/2).attr("x",-n/2).attr("y",-i/2).attr("width",n).attr("height",i);return c(e,s),e.intersect=function(t){return B.rect(e,t)},a}),"stadium"),V=(0,n.K2)((async(t,e)=>{const{shapeSvg:a,bbox:r,halfPadding:i}=await h(t,e,R(e,void 0),!0),s=a.insert("circle",":first-child");return s.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",r.width/2+i).attr("width",r.width+e.padding).attr("height",r.height+e.padding),n.Rm.info("Circle main"),c(e,s),e.intersect=function(t){return n.Rm.info("Circle intersect",e,r.width/2+i,t),B.circle(e,r.width/2+i,t)},a}),"circle"),Y=(0,n.K2)((async(t,e)=>{const{shapeSvg:a,bbox:r,halfPadding:i}=await h(t,e,R(e,void 0),!0),s=a.insert("g",":first-child"),l=s.insert("circle"),d=s.insert("circle");return s.attr("class",e.class),l.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",r.width/2+i+5).attr("width",r.width+e.padding+10).attr("height",r.height+e.padding+10),d.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",r.width/2+i).attr("width",r.width+e.padding).attr("height",r.height+e.padding),n.Rm.info("DoubleCircle main"),c(e,l),e.intersect=function(t){return n.Rm.info("DoubleCircle intersect",e,r.width/2+i+5,t),B.circle(e,r.width/2+i+5,t)},a}),"doublecircle"),G=(0,n.K2)((async(t,e)=>{const{shapeSvg:a,bbox:r}=await h(t,e,R(e,void 0),!0),i=r.width+e.padding,n=r.height+e.padding,s=[{x:0,y:0},{x:i,y:0},{x:i,y:-n},{x:0,y:-n},{x:0,y:0},{x:-8,y:0},{x:i+8,y:0},{x:i+8,y:-n},{x:-8,y:-n},{x:-8,y:0}],l=y(a,i,n,s);return l.attr("style",e.style),c(e,l),e.intersect=function(t){return B.polygon(e,s,t)},a}),"subroutine"),J=(0,n.K2)(((t,e)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),r=a.insert("circle",":first-child");return r.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),c(e,r),e.intersect=function(t){return B.circle(e,7,t)},a}),"start"),Q=(0,n.K2)(((t,e,a)=>{const r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id);let i=70,n=10;"LR"===a&&(i=10,n=70);const s=r.append("rect").attr("x",-1*i/2).attr("y",-1*n/2).attr("width",i).attr("height",n).attr("class","fork-join");return c(e,s),e.height=e.height+e.padding/2,e.width=e.width+e.padding/2,e.intersect=function(t){return B.rect(e,t)},r}),"forkJoin"),X={rhombus:T,composite:$,question:T,rect:U,labelRect:H,rectWithTitle:F,choice:I,circle:V,doublecircle:Y,stadium:Z,hexagon:N,block_arrow:E,rect_left_inv_arrow:M,lean_right:j,lean_left:P,trapezoid:A,inv_trapezoid:z,rect_right_inv_arrow:q,cylinder:O,start:J,end:(0,n.K2)(((t,e)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),r=a.insert("circle",":first-child"),i=a.insert("circle",":first-child");return i.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),r.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),c(e,i),e.intersect=function(t){return B.circle(e,7,t)},a}),"end"),note:C,subroutine:G,fork:Q,join:Q,class_box:(0,n.K2)(((t,e)=>{const a=e.padding/2;let r;r=e.classes?"node "+e.classes:"node default";const i=t.insert("g").attr("class",r).attr("id",e.domId||e.id),l=i.insert("rect",":first-child"),d=i.insert("line"),h=i.insert("line");let y=0,g=4;const x=i.insert("g").attr("class","label");let p=0;const w=e.classData.annotations?.[0],u=e.classData.annotations[0]?"\xab"+e.classData.annotations[0]+"\xbb":"",f=x.node().appendChild(o(u,e.labelStyle,!0,!0));let b=f.getBBox();if((0,n._3)((0,n.D7)().flowchart.htmlLabels)){const t=f.children[0],e=(0,s.Ltv)(f);b=t.getBoundingClientRect(),e.attr("width",b.width),e.attr("height",b.height)}e.classData.annotations[0]&&(g+=b.height+4,y+=b.width);let m=e.classData.label;void 0!==e.classData.type&&""!==e.classData.type&&((0,n.D7)().flowchart.htmlLabels?m+="&lt;"+e.classData.type+"&gt;":m+="<"+e.classData.type+">");const v=x.node().appendChild(o(m,e.labelStyle,!0,!0));(0,s.Ltv)(v).attr("class","classTitle");let S=v.getBBox();if((0,n._3)((0,n.D7)().flowchart.htmlLabels)){const t=v.children[0],e=(0,s.Ltv)(v);S=t.getBoundingClientRect(),e.attr("width",S.width),e.attr("height",S.height)}g+=S.height+4,S.width>y&&(y=S.width);const K=[];e.classData.members.forEach((t=>{const a=t.getDisplayDetails();let r=a.displayText;(0,n.D7)().flowchart.htmlLabels&&(r=r.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const i=x.node().appendChild(o(r,a.cssStyle?a.cssStyle:e.labelStyle,!0,!0));let l=i.getBBox();if((0,n._3)((0,n.D7)().flowchart.htmlLabels)){const t=i.children[0],e=(0,s.Ltv)(i);l=t.getBoundingClientRect(),e.attr("width",l.width),e.attr("height",l.height)}l.width>y&&(y=l.width),g+=l.height+4,K.push(i)})),g+=8;const L=[];if(e.classData.methods.forEach((t=>{const a=t.getDisplayDetails();let r=a.displayText;(0,n.D7)().flowchart.htmlLabels&&(r=r.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const i=x.node().appendChild(o(r,a.cssStyle?a.cssStyle:e.labelStyle,!0,!0));let l=i.getBBox();if((0,n._3)((0,n.D7)().flowchart.htmlLabels)){const t=i.children[0],e=(0,s.Ltv)(i);l=t.getBoundingClientRect(),e.attr("width",l.width),e.attr("height",l.height)}l.width>y&&(y=l.width),g+=l.height+4,L.push(i)})),g+=8,w){let t=(y-b.width)/2;(0,s.Ltv)(f).attr("transform","translate( "+(-1*y/2+t)+", "+-1*g/2+")"),p=b.height+4}let _=(y-S.width)/2;return(0,s.Ltv)(v).attr("transform","translate( "+(-1*y/2+_)+", "+(-1*g/2+p)+")"),p+=S.height+4,d.attr("class","divider").attr("x1",-y/2-a).attr("x2",y/2+a).attr("y1",-g/2-a+8+p).attr("y2",-g/2-a+8+p),p+=8,K.forEach((t=>{(0,s.Ltv)(t).attr("transform","translate( "+-y/2+", "+(-1*g/2+p+4)+")");const e=t?.getBBox();p+=(e?.height??0)+4})),p+=8,h.attr("class","divider").attr("x1",-y/2-a).attr("x2",y/2+a).attr("y1",-g/2-a+8+p).attr("y2",-g/2-a+8+p),p+=8,L.forEach((t=>{(0,s.Ltv)(t).attr("transform","translate( "+-y/2+", "+(-1*g/2+p)+")");const e=t?.getBBox();p+=(e?.height??0)+4})),l.attr("style",e.style).attr("class","outer title-state").attr("x",-y/2-a).attr("y",-g/2-a).attr("width",y+e.padding).attr("height",g+e.padding),c(e,l),e.intersect=function(t){return B.rect(e,t)},i}),"class_box")},tt={},et=(0,n.K2)((async(t,e,a)=>{let r,i;if(e.link){let s;"sandbox"===(0,n.D7)().securityLevel?s="_top":e.linkTarget&&(s=e.linkTarget||"_blank"),r=t.insert("svg:a").attr("xlink:href",e.link).attr("target",s),i=await X[e.shape](r,e,a)}else i=await X[e.shape](t,e,a),r=i;return e.tooltip&&i.attr("title",e.tooltip),e.class&&i.attr("class","node default "+e.class),tt[e.id]=r,e.haveCallback&&tt[e.id].attr("class",tt[e.id].attr("class")+" clickable"),r}),"insertNode"),at=(0,n.K2)(((t,e)=>{tt[e.id]=t}),"setNodeElem"),rt=(0,n.K2)((()=>{tt={}}),"clear"),it=(0,n.K2)((t=>{const e=tt[t.id];n.Rm.trace("Transforming node",t.diff,t,"translate("+(t.x-t.width/2-5)+", "+t.width/2+")");const a=t.diff||0;return t.clusterNode?e.attr("transform","translate("+(t.x+a-t.width/2)+", "+(t.y-t.height/2-8)+")"):e.attr("transform","translate("+t.x+", "+t.y+")"),a}),"positionNode")}}]);
//# sourceMappingURL=375.c97046c8.chunk.js.map