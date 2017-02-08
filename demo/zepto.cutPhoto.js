/*! kahn1990_new_book 2016-06-01 */
+function(a){"use strict";var b=function(b,d){function e(){var a=Math.max(j.cutImgWidth/j.width,j.cutImgHeight/j.height);a>1?(j.cropViewInitWidth=j.cropViewWidth=parseInt(Math.floor(j.cutImgWidth/a)),j.cropViewInitHeight=j.cropViewHeight=parseInt(Math.floor(j.cutImgHeight/a))):(j.cropViewInitWidth=j.cropViewWidth=j.cutImgWidth,j.cropViewInitHeight=j.cropViewHeight=j.cutImgHeight),j.cropLeft=parseInt((j.width-j.cropViewWidth)/2),j.cropTop=parseInt((j.height-j.cropViewHeight)/2)}function f(){j.cropViewHeight>j.cropViewWidth?(j.cropViewWidth=parseInt(Math.floor(j.width*(j.cropViewInitWidth/j.height))),j.cropViewHeight=j.height):j.cropViewHeight<j.cropViewWidth?(j.cropViewHeight=parseInt(Math.floor(j.height*(j.cropViewInitHeight/j.width))),j.cropViewWidth=j.width):j.cropViewWidth=j.cropViewHeight=j.height,o.css({width:j.cropViewWidth+"px",height:j.cropViewHeight+"px"})}function g(){j.cropViewHeight>j.cropViewWidth?(j.cropTop=0,j.cropLeft=parseInt(Math.floor((j.width-j.cropViewWidth)/2))):j.cropViewHeight<j.cropViewWidth?(j.cropLeft=0,j.cropTop=parseInt(Math.floor((j.height-j.cropViewHeight)/2))):j.cropLeft=j.cropTop=0,n.css({display:"block",width:j.cropViewWidth+"px",height:j.cropViewHeight+"px",left:j.cropLeft+"px",top:j.cropTop+"px"})}function h(){var a=Math.max(j.cutWidth/j.cropViewWidth,j.cutHeight/j.cropViewHeight);a>1?(j.cutViewWidth=parseInt(Math.floor(j.cutWidth/a)),j.cutViewHeight=parseInt(Math.floor(j.cutHeight/a))):(j.cutViewHeight=j.cutHeight,j.cutViewWidth=j.cutWidth),j.cutMaxWidth=j.cutViewWidth,j.cutMaxHeight=j.cutViewHeight,j.cutLeft=parseInt(Math.floor(j.cropViewWidth-j.cutViewWidth)/2),j.cutTop=parseInt(Math.floor(j.cropViewHeight-j.cutViewHeight)/2),j.cutBoxLimitX1=0,j.cutBoxLimitX2=j.cropViewWidth,j.cutBoxLimitY1=0,j.cutBoxLimitY2=j.cropViewHeight}function i(a){a||(j.cropViewHeight>j.cropViewWidth?(j.cutLeft=0,j.cutViewHeight=j.cutViewWidth=j.cropViewWidth):j.cropViewHeight<j.cropViewWidth?(j.cutTop=0,j.cutViewWidth=j.cutViewHeight=j.cropViewHeight):(j.cutLeft=j.cutTop=0,j.cutViewWidth=j.cutViewHeight=j.cropViewHeight)),p.css({display:"block",width:j.cutViewWidth+"px",height:j.cutViewHeight+"px",left:j.cutLeft+"px",top:j.cutTop+"px"})}var j=c.defaults;a("#"+b.browse_button).bind("change",function(b){var c=new FileReader;a(o).css({width:"",height:""}),c.onload=function(a){document.getElementById(o.attr("id")).src=a.target.result},j.cutImgData=c.readAsDataURL(this.files[0])});var k=a("#"+b.container),l=a("<div />",{id:"wrapper",css:{padding:".5rem"}}),m=a("<div />",{id:"component_node",css:{position:"relative",margin:"0 auto",border:"1px green solid",width:"302px",height:"302px",background:"#eee",overflow:"hidden"}}),n=a("<div />",{id:"cut_wrapper_node",css:{overflow:"hidden",display:"none",position:"absolute",top:"0",left:"0","z-index":"15"}}),o=a("<img />",{id:"img_cut_preview",css:{border:"0"}}).on("load",function(){j.cutImgWidth=document.getElementById(o.attr("id")).width,j.cutImgHeight=document.getElementById(o.attr("id")).height,e(),f(),g(),h(),i(),j.initStatus=!0,j.processInitStatus=!0,j.processPercent=100,j.processPointX=j.processBarWidth,w.css("left",j.processPointX+"px")}),p=a("<div />",{id:"cut_box",css:{position:"absolute",width:"200px",height:"200px",opacity:".5",background:"gray"}}).bind("touchstart",function(a){a.preventDefault()&&a.stopPropagation(),j.moveBeginX1=a.changedTouches[0].pageX,j.moveBeginY1=a.changedTouches[0].pageY}).bind("touchmove",function(a){a.preventDefault()&&a.stopPropagation(),j.moveEndX1=a.changedTouches[0].pageX,j.moveEndY1=a.changedTouches[0].pageY,j.cutLeft+=j.moveEndX1-j.moveBeginX1,j.cutTop+=j.moveEndY1-j.moveBeginY1,j.cutLeft<j.cutBoxLimitX1?j.cutLeft=j.cutBoxLimitX1:j.cutLeft>j.cutBoxLimitX2&&(j.cutLeft=j.cutBoxLimitX2),j.cutLeft+j.cutViewWidth>j.cutBoxLimitX2&&(j.cutLeft=j.cutBoxLimitX2-j.cutViewWidth),j.cutTop<j.cutBoxLimitY1?j.cutTop=j.cutBoxLimitY1:j.cutTop>j.cutBoxLimitY2&&(j.cutTop=j.cutBoxLimitY2),j.cutTop+j.cutViewHeight>j.cutBoxLimitY2&&(j.cutTop=j.cutBoxLimitY2-j.cutViewHeight),i(!0),j.moveBeginX1=j.moveEndX1,j.moveBeginY1=j.moveEndY1}).bind("touchend",function(a){return a.preventDefault()&&a.stopPropagation(),!1}),q=a("<div />",{id:"img_background",css:{position:"relative",width:"100%",height:"100%",background:"url('"+b.filters_background+"')","background-size":"100%","z-index":"10",opacity:".1"}}),r=a("<canvas />",{id:"cropper",css:{display:"none",border:"1px solid red",width:"300px",height:"300px"}}),s=a("<div />",{id:"wrapper_footer",css:{"margin-left":"0",overflow:"hidden"}}),t=a("<span />",{text:"图片裁剪",css:{"font-size":"12px",height:"20px","line-height":"20px","text-align":"center",background:"#F88103",color:"#fff",width:"20%",margin:"0","box-sizing":"border-box","float":"left"}}),u=a("<div />",{css:{background:"#F88103",width:"80%",margin:"0","box-sizing":"border-box","float":"left"}}),v=a("<div />",{id:"process_bar",css:{margin:"0 auto",position:"relative",width:"220px",height:"20px",background:"#e7e7e7","border-radius":"3px",border:"1px solid #f60","-moz-box-shadow":"1px 1px 1px rgba(153,153,153,.15) inset","-webkit-box-shadow":"1px 1px 1px rgba(153,153,153,.15) inset","box-shadow":"1px 1px 1px rgba(153,153,153,.15) inset"}}).bind("touchstart",function(a){return a.preventDefault()&&a.stopPropagation(),j.processInitStatus?(j.processBeginX=a.changedTouches[0].pageX,void(j.processBeginY=a.changedTouches[0].pageY)):!1}).bind("touchmove",function(a){if(a.preventDefault()&&a.stopPropagation(),j.processInitStatus){j.processEndX=a.changedTouches[0].pageX,j.processEndY=a.changedTouches[0].pageY,j.processPercent+=parseInt(100*(j.processEndX-j.processBeginX)/j.processBarWidth),j.processPercent<0?j.processPercent=0:j.processPercent>100&&(j.processPercent=100),j.processPointX=parseInt(j.processBarWidth*(j.processPercent/100)),w.css("left",j.processPointX+"px");var b=parseInt(j.cutMaxWidth*(j.processPercent/100)),c=parseInt(j.cutMaxHeight*(j.processPercent/100));b>j.cutViewWidth?(j.cutLeft=j.cutLeft-parseInt((b-j.cutViewWidth)/2),j.cutTop=j.cutTop-parseInt((c-j.cutViewHeight)/2),j.cutViewWidth=b,j.cutViewHeight=c,i(!0)):b<j.cutViewWidth&&(j.cutLeft=j.cutLeft+parseInt((j.cutViewWidth-b)/2),j.cutTop=j.cutTop+parseInt((j.cutViewHeight-c)/2),j.cutViewWidth=b,j.cutViewHeight=c,i(!0)),j.processBeginX=j.processEndX,j.processBeginY=j.processEndY}}).bind("touchend",function(a){return a.preventDefault()&&a.stopPropagation(),j.processInitStatus?void 0:!1}),w=a("<div />",{id:"process_point",css:{background:"#F88103",width:"18px",height:"18px",position:"absolute","border-radius":"50%",left:"0",top:"0"}});n.append(o,p),m.append(n,q),l.append(m,r),v.append(w),u.append(v),s.append(t,u),k.append(l,s),d(function(){var a=document.createElement("canvas"),b=j.cutImgWidth/j.cropViewWidth,c=j.cutImgHeight/j.cropViewHeight,d=parseInt(b*j.cutLeft),e=parseInt(c*j.cutTop),f=parseInt(b*j.cutViewWidth),g=parseInt(c*j.cutViewHeight);return a.width=j.cutWidth,a.height=j.cutHeight,a.getContext("2d").drawImage(document.getElementById(o.attr("id")),d,e,f,g,0,0,a.width,a.height),a.toDataURL("image/jpeg")},!0)},c={defaults:{width:300,height:300,cutWidth:300,cutHeight:300,cutMinSize:50,cropViewWidth:0,cropViewHeight:0,cropViewInitWidth:0,cropViewInitHeight:0,cropLeft:0,cropTop:0,cutViewWidth:0,cutViewHeight:0,cutMaxWidth:0,cutMaxHeight:0,cutBoxLimitX1:0,cutBoxLimitX2:0,cutBoxLimitY1:0,cutBoxLimitY2:0,cutLeft:0,cutTop:0,initStatus:!1,cutImgWidth:0,cutImgHeight:0,cutImgData:"",processBeginX:0,processBeginY:0,processEndX:0,processEndY:0,processBarWidth:200,processPointX:0,processPointY:0,processPercent:0,processInitStatus:!1}};a.cutPhoto=b}(Zepto);
/*! kahn1990_new_book 最后修改于： 2016-06-01 */