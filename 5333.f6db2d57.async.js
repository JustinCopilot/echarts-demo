"use strict";(self.webpackChunkecharts_demos=self.webpackChunkecharts_demos||[]).push([[5333],{15333:function(w,X,n){n.d(X,{RD:function(){return yn.Z},TA:function(){return H.Z},tF:function(){return T.Z},Ir:function(){return R.Z},aV:function(){return N.Z},Hn:function(){return A.Z},Hr:function(){return u.Hr},wJ:function(){return G.Z},$_:function(){return J},$j:function(){return u.$j},Ok:function(){return u.Ok},HO:function(){return u.HO},eU:function(){return u.eU},zP:function(){return u.zP},B9:function(){return u.B9},OB:function(){return xn.Z},Zy:function(){return Cn},tv:function(){return Tn},Sp:function(){return Sn},Zr:function(){return Zn},WU:function(){return B},wL:function(){return u.wL},JE:function(){return u.JE},rp:function(){return u.rp},FU:function(){return u.FU},Q:function(){return p},_y:function(){return M},S1:function(){return u.S1},z$:function(){return Ln.RV},pI:function(){return W},Rx:function(){return O},Nu:function(){return Z.Z},pQ:function(){return Z.Z},zl:function(){return u.zl},RS:function(){return u.RS},qR:function(){return u.qR},yn:function(){return u.yn},I2:function(){return u.I2},je:function(){return u.je},sq:function(){return u.sq},Br:function(){return u.Br},ds:function(){return u.ds},Pu:function(){return u.Pu},aW:function(){return u.aW},rV:function(){return u.OB},YK:function(){return u.YK},Og:function(){return u.Og},jQ:function(){return u.jQ},g2:function(){return m.g2},P2:function(){return E.P2},XV:function(){return C},D$:function(){return S.D},D5:function(){return j},xr:function(){return y},i8:function(){return u.i8},gf:function(){return g},x_:function(){return K}});var M={};n.r(M),n.d(M,{createDimensions:function(){return r.q},createList:function(){return e},createScale:function(){return v},createSymbol:function(){return t.th},createTextStyle:function(){return s},dataStack:function(){return o},enableHoverEmphasis:function(){return f.vF},getECData:function(){return i.A},getLayoutRect:function(){return Q.ME},mixinAxisModelCommonMethods:function(){return d}});var O={};n.r(O),n.d(O,{MAX_SAFE_INTEGER:function(){return l.YM},asc:function(){return l.dt},getPercentWithPrecision:function(){return l.eJ},getPixelPrecision:function(){return l.M9},getPrecision:function(){return l.p8},getPrecisionSafe:function(){return l.ZB},isNumeric:function(){return l.kE},isRadianAroundZero:function(){return l.mW},linearMap:function(){return l.NU},nice:function(){return l.kx},numericToNumber:function(){return l.FK},parseDate:function(){return l.sG},quantile:function(){return l.VR},quantity:function(){return l.Xd},quantityExponent:function(){return l.xW},reformIntervals:function(){return l.nR},remRadian:function(){return l.wW},round:function(){return l.NM}});var C={};n.r(C),n.d(C,{format:function(){return P.WU},parse:function(){return l.sG}});var p={};n.r(p),n.d(p,{Arc:function(){return sn.Z},BezierCurve:function(){return un.Z},BoundingRect:function(){return dn.Z},Circle:function(){return q.Z},CompoundPath:function(){return cn.Z},Ellipse:function(){return _.Z},Group:function(){return b.Z},Image:function(){return k.ZP},IncrementalDisplayable:function(){return fn.Z},Line:function(){return on.Z},LinearGradient:function(){return ln.Z},Polygon:function(){return rn.Z},Polyline:function(){return en.Z},RadialGradient:function(){return vn.Z},Rect:function(){return an.Z},Ring:function(){return tn.Z},Sector:function(){return nn.C},Text:function(){return U.ZP},clipPointsByRect:function(){return L.clipPointsByRect},clipRectByRect:function(){return L.clipRectByRect},createIcon:function(){return L.createIcon},extendPath:function(){return L.extendPath},extendShape:function(){return L.extendShape},getShapeClass:function(){return L.getShapeClass},getTransform:function(){return L.getTransform},initProps:function(){return I.KZ},makeImage:function(){return L.makeImage},makePath:function(){return L.makePath},mergePath:function(){return L.mergePath},registerShape:function(){return L.registerShape},resizePath:function(){return L.resizePath},updateProps:function(){return I.D}});var B={};n.r(B),n.d(B,{addCommas:function(){return D.OD},capitalFirst:function(){return D.ew},encodeHTML:function(){return gn.F1},formatTime:function(){return D.mr},formatTpl:function(){return D.kF},getTextRect:function(){return mn},getTooltipMarker:function(){return D.A0},normalizeCssArray:function(){return D.MY},toCamelCase:function(){return D.zW},truncateText:function(){return hn.aF}});var j={};n.r(j),n.d(j,{bind:function(){return g.bind},clone:function(){return g.clone},curry:function(){return g.curry},defaults:function(){return g.defaults},each:function(){return g.each},extend:function(){return g.extend},filter:function(){return g.filter},indexOf:function(){return g.indexOf},inherits:function(){return g.inherits},isArray:function(){return g.isArray},isFunction:function(){return g.isFunction},isObject:function(){return g.isObject},isString:function(){return g.isString},map:function(){return g.map},merge:function(){return g.merge},reduce:function(){return g.reduce}});var u=n(30454),T=n(98071),R=n(33166),G=n(93321),H=n(75797),N=n(5101),K=n(56641),W=n(32892),y=n(45280),g=n(33051),J=n(21092),E=n(270),Y=n(63243),V=n(34093),$=n(16650),A=n(12312),Q=n(76172),c=n(99936),i=n(30106),a=n(36006),r=n(55623),t=n(41525),f=n(26357);function e(x){return(0,Y.Z)(null,x)}var o={isDimensionStacked:c.M,enableDataStack:c.BM,getStackedDimension:c.IR};function v(x,h){var z=h;h instanceof A.Z||(z=new A.Z(h));var F=V.aG(z);return F.setExtent(x[0],x[1]),V.Jk(F,z),F}function d(x){g.mixin(x,$.W)}function s(x,h){return h=h||{},(0,a.Lr)(x,null,null,h.state!=="normal")}var S=n(68023),m=n(23132),Z=n(76672),l=n(85669),P=n(15015),L=n(51177),I=n(44292),b=n(38154),k=n(44535),U=n(96498),q=n(69538),_=n(92797),nn=n(97782),tn=n(85795),rn=n(95094),en=n(62514),an=n(25293),on=n(22095),un=n(54174),sn=n(14826),fn=n(91754),cn=n(52776),ln=n(74438),vn=n(36369),dn=n(60479),D=n(78988),gn=n(84602),hn=n(66918);function mn(x,h,z,F,Rn,Mn,pn,An){var Dn=new U.ZP({style:{text:x,font:h,align:z,verticalAlign:F,padding:Rn,rich:Mn,overflow:pn?"truncate":null,lineHeight:An}});return Dn.getBoundingRect()}var xn=n(66387),yn=n(99712),Ln=n(97772);function Tn(x){var h=T.Z.extend(x);return T.Z.registerClass(h),h}function Sn(x){var h=R.Z.extend(x);return R.Z.registerClass(h),h}function Zn(x){var h=G.Z.extend(x);return G.Z.registerClass(h),h}function Cn(x){var h=H.Z.extend(x);return H.Z.registerClass(h),h}var Pn=n(6378);(0,S.D)(Pn.T)},6378:function(w,X,n){n.d(X,{T:function(){return Q}});var M=n(32234),O=n(60479),C=n(44292),p=n(30106),B=n(85669),j=n(87411),u=n(87377),T=n(33051),R=n(54162),G=n(36006),H=n(3266);function N(c){if(c){for(var i=[],a=0;a<c.length;a++)i.push(c[a].slice());return i}}function K(c,i){var a=c.label,r=i&&i.getTextGuideLine();return{dataIndex:c.dataIndex,dataType:c.dataType,seriesIndex:c.seriesModel.seriesIndex,text:c.label.style.text,rect:c.hostRect,labelRect:c.rect,align:a.style.align,verticalAlign:a.style.verticalAlign,labelLinePoints:N(r&&r.shape.points)}}var W=["align","verticalAlign","width","height","fontSize"],y=new j.ZP,g=(0,M.Yf)(),J=(0,M.Yf)();function E(c,i,a){for(var r=0;r<a.length;r++){var t=a[r];i[t]!=null&&(c[t]=i[t])}}var Y=["x","y","rotation"],V=function(){function c(){this._labelList=[],this._chartViewList=[]}return c.prototype.clearLabels=function(){this._labelList=[],this._chartViewList=[]},c.prototype._addLabel=function(i,a,r,t,f){var e=t.style,o=t.__hostTarget,v=o.textConfig||{},d=t.getComputedTransform(),s=t.getBoundingRect().plain();O.Z.applyTransform(s,s,d),d?y.setLocalTransform(d):(y.x=y.y=y.rotation=y.originX=y.originY=0,y.scaleX=y.scaleY=1),y.rotation=(0,H.m)(y.rotation);var S=t.__hostTarget,m;if(S){m=S.getBoundingRect().plain();var Z=S.getComputedTransform();O.Z.applyTransform(m,m,Z)}var l=m&&S.getTextGuideLine();this._labelList.push({label:t,labelLine:l,seriesModel:r,dataIndex:i,dataType:a,layoutOption:f,computedLayoutOption:null,rect:s,hostRect:m,priority:m?m.width*m.height:0,defaultAttr:{ignore:t.ignore,labelGuideIgnore:l&&l.ignore,x:y.x,y:y.y,scaleX:y.scaleX,scaleY:y.scaleY,rotation:y.rotation,style:{x:e.x,y:e.y,align:e.align,verticalAlign:e.verticalAlign,width:e.width,height:e.height,fontSize:e.fontSize},cursor:t.cursor,attachedPos:v.position,attachedRot:v.rotation}})},c.prototype.addLabelsOfSeries=function(i){var a=this;this._chartViewList.push(i);var r=i.__model,t=r.get("labelLayout");((0,T.isFunction)(t)||(0,T.keys)(t).length)&&i.group.traverse(function(f){if(f.ignore)return!0;var e=f.getTextContent(),o=(0,p.A)(f);e&&!e.disableLabelLayout&&a._addLabel(o.dataIndex,o.dataType,r,e,t)})},c.prototype.updateLayoutConfig=function(i){var a=i.getWidth(),r=i.getHeight();function t(k,U){return function(){(0,u.d)(k,U)}}for(var f=0;f<this._labelList.length;f++){var e=this._labelList[f],o=e.label,v=o.__hostTarget,d=e.defaultAttr,s=void 0;(0,T.isFunction)(e.layoutOption)?s=e.layoutOption(K(e,v)):s=e.layoutOption,s=s||{},e.computedLayoutOption=s;var S=Math.PI/180;v&&v.setTextConfig({local:!1,position:s.x!=null||s.y!=null?null:d.attachedPos,rotation:s.rotate!=null?s.rotate*S:d.attachedRot,offset:[s.dx||0,s.dy||0]});var m=!1;if(s.x!=null?(o.x=(0,B.GM)(s.x,a),o.setStyle("x",0),m=!0):(o.x=d.x,o.setStyle("x",d.style.x)),s.y!=null?(o.y=(0,B.GM)(s.y,r),o.setStyle("y",0),m=!0):(o.y=d.y,o.setStyle("y",d.style.y)),s.labelLinePoints){var Z=v.getTextGuideLine();Z&&(Z.setShape({points:s.labelLinePoints}),m=!1)}var l=g(o);l.needsUpdateLabelLine=m,o.rotation=s.rotate!=null?s.rotate*S:d.rotation,o.scaleX=d.scaleX,o.scaleY=d.scaleY;for(var P=0;P<W.length;P++){var L=W[P];o.setStyle(L,s[L]!=null?s[L]:d.style[L])}if(s.draggable){if(o.draggable=!0,o.cursor="move",v){var I=e.seriesModel;if(e.dataIndex!=null){var b=e.seriesModel.getData(e.dataType);I=b.getItemModel(e.dataIndex)}o.on("drag",t(v,I.getModel("labelLine")))}}else o.off("drag"),o.cursor=d.cursor}},c.prototype.layout=function(i){var a=i.getWidth(),r=i.getHeight(),t=(0,R.VT)(this._labelList),f=(0,T.filter)(t,function(v){return v.layoutOption.moveOverlap==="shiftX"}),e=(0,T.filter)(t,function(v){return v.layoutOption.moveOverlap==="shiftY"});(0,R.WE)(f,0,a),(0,R.GI)(e,0,r);var o=(0,T.filter)(t,function(v){return v.layoutOption.hideOverlap});(0,R.yl)(o)},c.prototype.processLabelsOverall=function(){var i=this;(0,T.each)(this._chartViewList,function(a){var r=a.__model,t=a.ignoreLabelLineUpdate,f=r.isAnimationEnabled();a.group.traverse(function(e){if(e.ignore&&!e.forceLabelAnimation)return!0;var o=!t,v=e.getTextContent();!o&&v&&(o=g(v).needsUpdateLabelLine),o&&i._updateLabelLine(e,r),f&&i._animateLabels(e,r)})})},c.prototype._updateLabelLine=function(i,a){var r=i.getTextContent(),t=(0,p.A)(i),f=t.dataIndex;if(r&&f!=null){var e=a.getData(t.dataType),o=e.getItemModel(f),v={},d=e.getItemVisual(f,"style");if(d){var s=e.getVisual("drawType");v.stroke=d[s]}var S=o.getModel("labelLine");(0,u.Iu)(i,(0,u.$x)(o),v),(0,u.d)(i,S)}},c.prototype._animateLabels=function(i,a){var r=i.getTextContent(),t=i.getTextGuideLine();if(r&&(i.forceLabelAnimation||!r.ignore&&!r.invisible&&!i.disableLabelAnimation&&!(0,C.eq)(i))){var f=g(r),e=f.oldLayout,o=(0,p.A)(i),v=o.dataIndex,d={x:r.x,y:r.y,rotation:r.rotation},s=a.getData(o.dataType);if(e){r.attr(e);var m=i.prevStates;m&&((0,T.indexOf)(m,"select")>=0&&r.attr(f.oldLayoutSelect),(0,T.indexOf)(m,"emphasis")>=0&&r.attr(f.oldLayoutEmphasis)),(0,C.D)(r,d,a,v)}else if(r.attr(d),!(0,G.qA)(r).valueAnimation){var S=(0,T.retrieve2)(r.style.opacity,1);r.style.opacity=0,(0,C.KZ)(r,{style:{opacity:S}},a,v)}if(f.oldLayout=d,r.states.select){var Z=f.oldLayoutSelect={};E(Z,d,Y),E(Z,r.states.select,Y)}if(r.states.emphasis){var l=f.oldLayoutEmphasis={};E(l,d,Y),E(l,r.states.emphasis,Y)}(0,G.tD)(r,v,s,a,a)}if(t&&!t.ignore&&!t.invisible){var f=J(t),e=f.oldLayout,P={points:t.shape.points};e?(t.attr({shape:e}),(0,C.D)(t,{shape:P},a)):(t.setShape(P),t.style.strokePercent=0,(0,C.KZ)(t,{style:{strokePercent:1}},a)),f.oldLayout=P}},c}(),$=V,A=(0,M.Yf)();function Q(c){c.registerUpdateLifecycle("series:beforeupdate",function(i,a,r){var t=A(a).labelManager;t||(t=A(a).labelManager=new $),t.clearLabels()}),c.registerUpdateLifecycle("series:layoutlabels",function(i,a,r){var t=A(a).labelManager;r.updatedSeries.forEach(function(f){t.addLabelsOfSeries(a.getViewOfSeriesModel(f))}),t.updateLayoutConfig(a),t.layout(a),t.processLabelsOverall()})}}}]);