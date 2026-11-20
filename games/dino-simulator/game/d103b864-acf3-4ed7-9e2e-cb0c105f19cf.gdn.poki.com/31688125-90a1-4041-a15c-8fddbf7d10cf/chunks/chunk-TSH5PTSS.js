import{b as Au}from"./chunk-MR2SPORM.js";var md=0,Yc=1,gd=2;var mr=1,_d=2,xs=3,kn=0,kt=1,bn=2,wn=0,Ai=1,Jc=2,$c=3,Zc=4,xd=5,Kn=100,yd=101,vd=102,Sd=103,Md=104,bd=200,wd=201,Ad=202,Td=203,ya=204,va=205,Ed=206,Cd=207,Rd=208,Id=209,Pd=210,Ld=211,Dd=212,Nd=213,Ud=214,Za=0,Ka=1,ja=2,Ti=3,Qa=4,eo=5,to=6,no=7,io=0,Fd=1,Od=2,fn=0,Kc=1,jc=2,Qc=3,eh=4,th=5,nh=6,ih=7,ec="attached",Bd="detached",sh=300,ni=301,Ui=302,so=303,ro=304,gr=306,Sa=1e3,yn=1001,Ma=1002,Mt=1003,kd=1004;var _r=1005;var At=1006,ao=1007;var ii=1008;var qt=1009,rh=1010,ah=1011,ys=1012,oo=1013,an=1014,Ot=1015,An=1016,lo=1017,co=1018,vs=1020,oh=35902,lh=35899,ch=1021,hh=1022,Bt=1023,Sn=1026,si=1027,ho=1028,xr=1029,Fi=1030,uo=1031;var fo=1033,yr=33776,vr=33777,Sr=33778,Mr=33779,po=35840,mo=35841,go=35842,_o=35843,xo=36196,yo=37492,vo=37496,So=37488,Mo=37489,bo=37490,wo=37491,Ao=37808,To=37809,Eo=37810,Co=37811,Ro=37812,Io=37813,Po=37814,Lo=37815,Do=37816,No=37817,Uo=37818,Fo=37819,Oo=37820,Bo=37821,ko=36492,zo=36494,Vo=36495,Go=36283,Ho=36284,Wo=36285,Xo=36286,zd=2200,Vd=2201,Gd=2202,Ws=2300,ba=2301,xa=2302,Si=2400,Mi=2401,Xs=2402,qo=2500,uh=2501,rm=0,am=1,om=2,Hd=3200;var Yo=0,Wd=1,Gn="",Kt="srgb",Ei="srgb-linear",qs="linear",Ye="srgb";var vi=7680;var tc=519,Xd=512,qd=513,Yd=514,Jo=515,Jd=516,$d=517,$o=518,Zd=519,wa=35044,lm=35048;var dh="300 es",nn=2e3,Ys=2001;function fh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Kd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jd(){let i=cs("canvas");return i.style.display="block",i}var Tu={},hs=null;function Js(...i){let e="THREE."+i.shift();hs?hs("log",e,...i):console.log(e,...i)}function Me(...i){let e="THREE."+i.shift();hs?hs("warn",e,...i):console.warn(e,...i)}function Te(...i){let e="THREE."+i.shift();hs?hs("error",e,...i):console.error(e,...i)}function us(...i){let e=i.join(" ");e in Tu||(Tu[e]=!0,Me(...i))}function Qd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eu=1234567,Gs=Math.PI/180,Ci=180/Math.PI;function dn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function ph(i,e){return(i%e+e)%e}function cm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function hm(i,e,t){return i!==e?(t-i)/(e-i):0}function Hs(i,e,t){return(1-t)*i+t*e}function um(i,e,t,n){return Hs(i,e,1-Math.exp(-t*n))}function dm(i,e=1){return e-Math.abs(ph(i,e*2)-e)}function fm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gm(i,e){return i+Math.random()*(e-i)}function _m(i){return i*(.5-Math.random())}function xm(i){i!==void 0&&(Eu=i);let e=Eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ym(i){return i*Gs}function vm(i){return i*Ci}function Sm(i){return(i&i-1)===0&&i!==0}function Mm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wm(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Am={DEG2RAD:Gs,RAD2DEG:Ci,generateUUID:dn,clamp:ke,euclideanModulo:ph,mapLinear:cm,inverseLerp:hm,lerp:Hs,damp:um,pingpong:dm,smoothstep:fm,smootherstep:pm,randInt:mm,randFloat:gm,randFloatSpread:_m,seededRandom:xm,degToRad:ym,radToDeg:vm,isPowerOfTwo:Sm,ceilPowerOfTwo:Mm,floorPowerOfTwo:bm,setQuaternionFromProperEuler:wm,normalize:Ke,denormalize:un},Ie=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let w=Math.acos(m),S=Math.sin(w);p=Math.sin(p*w)/S,o=Math.sin(o*w)/S,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+x*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+x*o;let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ml.copy(this).projectOnVector(e),this.sub(Ml)}reflect(e){return this.sub(Ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ml=new I,Cu=new Wt,Le=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],w=s[1],S=s[4],M=s[7],T=s[2],E=s[5],C=s[8];return r[0]=a*x+o*w+l*T,r[3]=a*m+o*S+l*E,r[6]=a*p+o*M+l*C,r[1]=c*x+h*w+u*T,r[4]=c*m+h*S+u*E,r[7]=c*p+h*M+u*C,r[2]=d*x+f*w+g*T,r[5]=d*m+f*S+g*E,r[8]=d*p+f*M+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(bl.makeScale(e,t)),this}rotate(e){return this.premultiply(bl.makeRotation(-e)),this}translate(e,t){return this.premultiply(bl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bl=new Le,Ru=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tm(){let i={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ye&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ye&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ei]:{primaries:e,whitePoint:n,transfer:qs,toXYZ:Ru,fromXYZ:Iu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:Ye,toXYZ:Ru,fromXYZ:Iu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),i}var Ge=Tm();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Wi,Aa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wi===void 0&&(Wi=cs("canvas")),Wi.width=e.width,Wi.height=e.height;let s=Wi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Em=0,ds=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=dn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wl(s[a].image)):r.push(wl(s[a]))}else r=wl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function wl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Aa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}var Cm=0,Al=new I,Lt=class i extends Mn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=yn,s=yn,r=At,a=ii,o=Bt,l=qt,c=i.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=dn(),this.name="",this.source=new ds(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Al).x}get height(){return this.source.getSize(Al).y}get depth(){return this.source.getSize(Al).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Me(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Me(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sa:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sa:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=sh;Lt.DEFAULT_ANISOTROPY=1;var at=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(f+1)/2,T=(p+1)/2,E=(h+d)/4,C=(u+x)/4,U=(g+m)/4;return S>M&&S>T?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=C/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=U/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=U/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-x)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ta=class extends Mn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Lt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ds(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends Ta{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$s=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ea=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ft=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox)),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),Gr.subVectors(this.max,Is),Xi.subVectors(e.a,Is),qi.subVectors(e.b,Is),Yi.subVectors(e.c,Is),Xn.subVectors(qi,Xi),qn.subVectors(Yi,qi),pi.subVectors(Xi,Yi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-pi.z,pi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,pi.z,0,-pi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-pi.y,pi.x,0];return!Tl(t,Xi,qi,Yi,Gr)||(t=[1,0,0,0,1,0,0,0,1],!Tl(t,Xi,qi,Yi,Gr))?!1:(Hr.crossVectors(Xn,qn),t=[Hr.x,Hr.y,Hr.z],Tl(t,Xi,qi,Yi,Gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},In=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,Vr=new Ft,Xi=new I,qi=new I,Yi=new I,Xn=new I,qn=new I,pi=new I,Is=new I,Gr=new I,Hr=new I,mi=new I;function Tl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mi.fromArray(i,r);let o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Rm=new Ft,Ps=new I,El=new I,Pt=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Rm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);let t=Ps.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(El.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(El)),this.expandByPoint(Ps.copy(e.center).sub(El))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Pn=new I,Cl=new I,Wr=new I,Yn=new I,Rl=new I,Xr=new I,Il=new I,jn=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Cl.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Cl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Wr),o=Yn.dot(this.direction),l=-Yn.dot(Wr),c=Yn.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Cl).addScaledVector(Wr,d),f}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);let n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,s,r){Rl.subVectors(t,e),Xr.subVectors(n,e),Il.crossVectors(Rl,Xr);let a=this.direction.dot(Il),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,e);let l=o*this.direction.dot(Xr.crossVectors(Yn,Xr));if(l<0)return null;let c=o*this.direction.dot(Rl.cross(Yn));if(c<0||l+c>a)return null;let h=-o*Yn.dot(Il);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),a=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Im,e,Pm)}lookAt(e,t,n){let s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Jn.crossVectors(n,$t),Jn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Jn.crossVectors(n,$t)),Jn.normalize(),qr.crossVectors($t,Jn),s[0]=Jn.x,s[4]=qr.x,s[8]=$t.x,s[1]=Jn.y,s[5]=qr.y,s[9]=$t.y,s[2]=Jn.z,s[6]=qr.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],w=n[3],S=n[7],M=n[11],T=n[15],E=s[0],C=s[4],U=s[8],y=s[12],b=s[1],L=s[5],B=s[9],O=s[13],G=s[2],q=s[6],V=s[10],W=s[14],Z=s[3],he=s[7],ae=s[11],ue=s[15];return r[0]=a*E+o*b+l*G+c*Z,r[4]=a*C+o*L+l*q+c*he,r[8]=a*U+o*B+l*V+c*ae,r[12]=a*y+o*O+l*W+c*ue,r[1]=h*E+u*b+d*G+f*Z,r[5]=h*C+u*L+d*q+f*he,r[9]=h*U+u*B+d*V+f*ae,r[13]=h*y+u*O+d*W+f*ue,r[2]=g*E+x*b+m*G+p*Z,r[6]=g*C+x*L+m*q+p*he,r[10]=g*U+x*B+m*V+p*ae,r[14]=g*y+x*O+m*W+p*ue,r[3]=w*E+S*b+M*G+T*Z,r[7]=w*C+S*L+M*q+T*he,r[11]=w*U+S*B+M*V+T*ae,r[15]=w*y+S*O+M*W+T*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],w=l*f-c*d,S=o*f-c*u,M=o*d-l*u,T=a*f-c*h,E=a*d-l*h,C=a*u-o*h;return t*(x*w-m*S+p*M)-n*(g*w-m*T+p*E)+s*(g*S-x*T+p*C)-r*(g*M-x*E+m*C)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],w=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,S=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,M=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,T=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,E=t*w+n*S+s*M+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/E;return e[0]=w*C,e[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*C,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*C,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*C,e[4]=S*C,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*C,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*C,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*C,e[8]=M*C,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*C,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*p+t*o*p)*C,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*C,e[12]=T*C,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*C,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*m-t*o*m)*C,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,w=l*c,S=l*h,M=l*u,T=n.x,E=n.y,C=n.z;return s[0]=(1-(x+p))*T,s[1]=(f+M)*T,s[2]=(g-S)*T,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(d+p))*E,s[6]=(m+w)*E,s[7]=0,s[8]=(g+S)*C,s[9]=(m-w)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Ji.set(s[0],s[1],s[2]).length(),a=Ji.set(s[4],s[5],s[6]).length(),o=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),cn.copy(this);let c=1/r,h=1/a,u=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=nn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===nn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ys)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=nn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===nn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ys)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ji=new I,cn=new Ne,Im=new I(0,0,0),Pm=new I(1,1,1),Jn=new I,qr=new I,$t=new I,Pu=new Ne,Lu=new Wt,sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lu.setFromEuler(this),this.setFromQuaternion(Lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var fs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Lm=0,Du=new I,$i=new Wt,Ln=new Ne,Yr=new I,Ls=new I,Dm=new I,Nm=new Wt,Nu=new I(1,0,0),Uu=new I(0,1,0),Fu=new I(0,0,1),Ou={type:"added"},Um={type:"removed"},Zi={type:"childadded",child:null},Pl={type:"childremoved",child:null},dt=class i extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new sn,n=new Wt,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Le}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Nu,e)}rotateY(e){return this.rotateOnAxis(Uu,e)}rotateZ(e){return this.rotateOnAxis(Fu,e)}translateOnAxis(e,t){return Du.copy(e).applyQuaternion(this.quaternion),this.position.add(Du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nu,e)}translateY(e){return this.translateOnAxis(Uu,e)}translateZ(e){return this.translateOnAxis(Fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yr.copy(e):Yr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Ls,Yr,this.up):Ln.lookAt(Yr,Ls,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Ln),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Te("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ou),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):Te("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Um),Pl.child=e,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ou),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,Dm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Nm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};dt.DEFAULT_UP=new I(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new I,Dn=new I,Ll=new I,Nn=new I,Ki=new I,ji=new I,Bu=new I,Dl=new I,Nl=new I,Ul=new I,Fl=new at,Ol=new at,Bl=new at,Fn=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hn.subVectors(e,t),s.cross(hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hn.subVectors(s,t),Dn.subVectors(n,t),Ll.subVectors(e,t);let a=hn.dot(hn),o=hn.dot(Dn),l=hn.dot(Ll),c=Dn.dot(Dn),h=Dn.dot(Ll),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Fl.setScalar(0),Ol.setScalar(0),Bl.setScalar(0),Fl.fromBufferAttribute(e,t),Ol.fromBufferAttribute(e,n),Bl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Fl,r.x),a.addScaledVector(Ol,r.y),a.addScaledVector(Bl,r.z),a}static isFrontFacing(e,t,n,s){return hn.subVectors(n,t),Dn.subVectors(e,t),hn.cross(Dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),hn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ki.subVectors(s,n),ji.subVectors(r,n),Dl.subVectors(e,n);let l=Ki.dot(Dl),c=ji.dot(Dl);if(l<=0&&c<=0)return t.copy(n);Nl.subVectors(e,s);let h=Ki.dot(Nl),u=ji.dot(Nl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ki,a);Ul.subVectors(e,r);let f=Ki.dot(Ul),g=ji.dot(Ul);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ji,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Bu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Bu,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(Ki,a).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function kl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ge.workingColorSpace){if(e=ph(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=kl(a,r,e+1/3),this.g=kl(a,r,e),this.b=kl(a,r,e-1/3)}return Ge.colorSpaceToWorking(this,s),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&Me("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Me("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=ef[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Ge.workingToColorSpace(Ct.copy(this),e),Math.round(ke(Ct.r*255,0,255))*65536+Math.round(ke(Ct.g*255,0,255))*256+Math.round(ke(Ct.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(Ct.copy(this),t);let n=Ct.r,s=Ct.g,r=Ct.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Kt){Ge.workingToColorSpace(Ct.copy(this),e);let t=Ct.r,n=Ct.g,s=Ct.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Jr);let n=Hs($n.h,Jr.h,t),s=Hs($n.s,Jr.s,t),r=Hs($n.l,Jr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new Pe;Pe.NAMES=ef;var Fm=0,rn=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=Ai,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ya,this.blendDst=va,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Me(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Me(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ya&&(n.blendSrc=this.blendSrc),this.blendDst!==va&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zs=class extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var gt=new I,$r=new Ie,Om=0,wt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Om++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wa,this.updateRanges=[],this.gpuType=Ot,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wa&&(e.usage=this.usage),e}};var Ks=class extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var js=class extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var rt=class extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Bm=0,tn=new Ne,zl=new dt,Qi=new I,Zt=new Ft,Ds=new Ft,St=new I,_t=class i extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fh(e)?js:Ks)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return zl.lookAt(e),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Zt.min,Ds.min),Zt.expandByPoint(St),St.addVectors(Zt.max,Ds.max),Zt.expandByPoint(St)):(Zt.expandByPoint(Ds.min),Zt.expandByPoint(Ds.max))}Zt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)St.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(e,c),St.add(Qi)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new I,l[U]=new I;let c=new I,h=new I,u=new I,d=new Ie,f=new Ie,g=new Ie,x=new I,m=new I;function p(U,y,b){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[U].add(x),o[y].add(x),o[b].add(x),l[U].add(m),l[y].add(m),l[b].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let U=0,y=w.length;U<y;++U){let b=w[U],L=b.start,B=b.count;for(let O=L,G=L+B;O<G;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let S=new I,M=new I,T=new I,E=new I;function C(U){T.fromBufferAttribute(s,U),E.copy(T);let y=o[U];S.copy(y),S.sub(T.multiplyScalar(T.dot(y))).normalize(),M.crossVectors(E,y);let L=M.dot(l[U])<0?-1:1;a.setXYZW(U,S.x,S.y,S.z,L)}for(let U=0,y=w.length;U<y;++U){let b=w[U],L=b.start,B=b.count;for(let O=L,G=L+B;O<G;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new wt(d,h,u)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ku=new Ne,gi=new jn,Zr=new Pt,zu=new I,Kr=new I,jr=new I,Qr=new I,Vl=new I,ea=new I,Vu=new I,ta=new I,Tt=class extends dt{constructor(e=new _t,t=new Zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Vl.fromBufferAttribute(u,e),a?ea.addScaledVector(Vl,h):ea.addScaledVector(Vl.sub(t),h))}t.add(ea)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(Zr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Zr,zu)===null||gi.origin.distanceToSquared(zu)>(e.far-e.near)**2))&&(ku.copy(r).invert(),gi.copy(e.ray).applyMatrix4(ku),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=w,T=S;M<T;M+=3){let E=o.getX(M),C=o.getX(M+1),U=o.getX(M+2);s=na(this,p,e,n,c,h,u,E,C,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let w=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);s=na(this,a,e,n,c,h,u,w,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=w,T=S;M<T;M+=3){let E=M,C=M+1,U=M+2;s=na(this,p,e,n,c,h,u,E,C,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let w=m,S=m+1,M=m+2;s=na(this,a,e,n,c,h,u,w,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function km(i,e,t,n,s,r,a,o){let l;if(e.side===kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===kn,o),l===null)return null;ta.copy(o),ta.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ta);return c<t.near||c>t.far?null:{distance:c,point:ta.clone(),object:i}}function na(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Kr),i.getVertexPosition(l,jr),i.getVertexPosition(c,Qr);let h=km(i,e,t,n,Kr,jr,Qr,Vu);if(h){let u=new I;Fn.getBarycoord(Vu,Kr,jr,Qr,u),s&&(h.uv=Fn.getInterpolatedAttribute(s,o,l,c,u,new Ie)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,o,l,c,u,new Ie)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};Fn.getNormal(Kr,jr,Qr,d.normal),h.face=d,h.barycoord=u}return h}var ps=class i extends _t{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function g(x,m,p,w,S,M,T,E,C,U,y){let b=M/C,L=T/U,B=M/2,O=T/2,G=E/2,q=C+1,V=U+1,W=0,Z=0,he=new I;for(let ae=0;ae<V;ae++){let ue=ae*L-O;for(let ze=0;ze<q;ze++){let Fe=ze*b-B;he[x]=Fe*w,he[m]=ue*S,he[p]=G,c.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[p]=E>0?1:-1,h.push(he.x,he.y,he.z),u.push(ze/C),u.push(1-ae/U),W+=1}}for(let ae=0;ae<U;ae++)for(let ue=0;ue<C;ue++){let ze=d+ue+q*ae,Fe=d+ue+q*(ae+1),lt=d+(ue+1)+q*(ae+1),ot=d+(ue+1)+q*ae;l.push(ze,Fe,ot),l.push(Fe,lt,ot),Z+=6}o.addGroup(f,Z,y),f+=Z,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Oi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Dt(i){let e={};for(let t=0;t<i.length;t++){let n=Oi(i[t]);for(let s in n)e[s]=n[s]}return e}function zm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var tf={clone:Oi,merge:Dt},Vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qt=class extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vm,this.fragmentShader=Gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=zm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Qs=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zn=new I,Gu=new Ie,Hu=new Ie,It=class extends Qs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ci*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ci*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,Gu,Hu),t.subVectors(Hu,Gu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},es=-90,ts=1,Ca=class extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new It(es,ts,e,t);s.layers=this.layers,this.add(s);let r=new It(es,ts,e,t);r.layers=this.layers,this.add(r);let a=new It(es,ts,e,t);a.layers=this.layers,this.add(a);let o=new It(es,ts,e,t);o.layers=this.layers,this.add(o);let l=new It(es,ts,e,t);l.layers=this.layers,this.add(l);let c=new It(es,ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},er=class extends Lt{constructor(e=[],t=ni,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},tr=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new er(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ps(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:wn});r.uniforms.tEquirect.value=t;let a=new Tt(s,r),o=t.minFilter;return t.minFilter===ii&&(t.minFilter=At),new Ca(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},bi=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hm={type:"move"},ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var nc=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ic=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},nr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wa,this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ut=new I,ir=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Js("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Js("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ra=class extends rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ns,Ns=new I,is=new I,ss=new I,rs=new Ie,Us=new Ie,nf=new Ne,ia=new I,Fs=new I,sa=new I,Wu=new Ie,Gl=new Ie,Xu=new Ie,sc=class extends dt{constructor(e=new Ra){if(super(),this.isSprite=!0,this.type="Sprite",ns===void 0){ns=new _t;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nr(t,5);ns.setIndex([0,1,2,0,2,3]),ns.setAttribute("position",new ir(n,3,0,!1)),ns.setAttribute("uv",new ir(n,2,3,!1))}this.geometry=ns,this.material=e,this.center=new Ie(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Te('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),is.setFromMatrixScale(this.matrixWorld),nf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&is.multiplyScalar(-ss.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ra(ia.set(-.5,-.5,0),ss,a,is,s,r),ra(Fs.set(.5,-.5,0),ss,a,is,s,r),ra(sa.set(.5,.5,0),ss,a,is,s,r),Wu.set(0,0),Gl.set(1,0),Xu.set(1,1);let o=e.ray.intersectTriangle(ia,Fs,sa,!1,Ns);if(o===null&&(ra(Fs.set(-.5,.5,0),ss,a,is,s,r),Gl.set(0,1),o=e.ray.intersectTriangle(ia,sa,Fs,!1,Ns),o===null))return;let l=e.ray.origin.distanceTo(Ns);l<e.near||l>e.far||t.push({distance:l,point:Ns.clone(),uv:Fn.getInterpolation(Ns,ia,Fs,sa,Wu,Gl,Xu,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ra(i,e,t,n,s,r){rs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Us.x=r*rs.x-s*rs.y,Us.y=s*rs.x+r*rs.y):Us.copy(rs),i.copy(e),i.x+=Us.x,i.y+=Us.y,i.applyMatrix4(nf)}var qu=new I,Yu=new at,Ju=new at,Wm=new I,$u=new Ne,aa=new I,Hl=new Pt,Zu=new Ne,Wl=new jn,rc=class extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ec,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ft),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,aa),this.boundingBox.expandByPoint(aa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,aa),this.boundingSphere.expandByPoint(aa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hl.copy(this.boundingSphere),Hl.applyMatrix4(s),e.ray.intersectsSphere(Hl)!==!1&&(Zu.copy(s).invert(),Wl.copy(e.ray).applyMatrix4(Zu),!(this.boundingBox!==null&&Wl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ec?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Me("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Yu.fromBufferAttribute(s.attributes.skinIndex,e),Ju.fromBufferAttribute(s.attributes.skinWeight,e),qu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Ju.getComponent(r);if(a!==0){let o=Yu.getComponent(r);$u.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Wm.copy(qu).applyMatrix4($u),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ia=class extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Bn=class extends Lt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Mt,h=Mt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ku=new Ne,Xm=new Ne,ac=class i{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Me("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Xm;Ku.multiplyMatrices(o,t[r]),Ku.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Bn(t,e,e,Bt,Ot);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Me("Skeleton: No bone found with UUID:",r),a=new Ia),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},sr=class extends wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},as=new Ne,ju=new Ne,oa=[],Qu=new Ft,qm=new Ne,Os=new Tt,Bs=new Pt,oc=class extends Tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ft),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),Qu.copy(e.boundingBox).applyMatrix4(as),this.boundingBox.union(Qu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),Bs.copy(e.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),e.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),ju.multiplyMatrices(n,as),Os.matrixWorld=ju,Os.raycast(e,oa);for(let a=0,o=oa.length;a<o;a++){let l=oa[a];l.instanceId=r,l.object=this,t.push(l)}oa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bn(new Float32Array(s*this.count),s,this.count,ho,Ot));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xl=new I,Ym=new I,Jm=new Le,xn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Xl.subVectors(n,t).cross(Ym.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Xl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jm.getNormalMatrix(e),s=this.coplanarPoint(Xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new Pt,$m=new Ie(.5,.5),la=new I,Qn=class{constructor(e=new xn,t=new xn,n=new xn,s=new xn,r=new xn,a=new xn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],w=r[12],S=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,p-g,T-w).normalize(),s[1].setComponents(c+a,f+h,p+g,T+w).normalize(),s[2].setComponents(c+o,f+u,p+x,T+S).normalize(),s[3].setComponents(c-o,f-u,p-x,T-S).normalize(),n)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,f-d,p-m,T-M).normalize();else if(s[4].setComponents(c-l,f-d,p-m,T-M).normalize(),t===nn)s[5].setComponents(c+l,f+d,p+m,T+M).normalize();else if(t===Ys)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);let t=$m.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(la.x=s.normal.x>0?e.max.x:e.min.x,la.y=s.normal.y>0?e.max.y:e.min.y,la.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},gn=new Ne,_n=new Qn,Pa=class i{constructor(){this.coordinateSystem=nn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let s=t.cameras[n];if(gn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),_n.setFromProjectionMatrix(gn,s.coordinateSystem,s.reversedDepth),_n.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let s=t.cameras[n];if(gn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),_n.setFromProjectionMatrix(gn,s.coordinateSystem,s.reversedDepth),_n.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let s=t.cameras[n];if(gn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),_n.setFromProjectionMatrix(gn,s.coordinateSystem,s.reversedDepth),_n.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let s=t.cameras[n];if(gn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),_n.setFromProjectionMatrix(gn,s.coordinateSystem,s.reversedDepth),_n.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let s=t.cameras[n];if(gn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),_n.setFromProjectionMatrix(gn,s.coordinateSystem,s.reversedDepth),_n.containsPoint(e))return!0}return!1}clone(){return new i}};function ql(i,e){return i-e}function Zm(i,e){return i.z-e.z}function Km(i,e){return e.z-i.z}var lc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=s}reset(){this.list.length=0,this.index=0}},Ht=new Ne,jm=new Pe(1,1,1),ed=new Qn,Qm=new Pa,ca=new Ft,xi=new Pt,ks=new I,td=new I,eg=new I,Yl=new lc,Rt=new Tt,ha=[];function tg(i,e,t=0){let n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){let s=i.count;for(let r=0;r<s;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,i.getComponent(r,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function yi(i,e){if(i.constructor!==e.constructor){let t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{let t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}var cc=class extends Tt{constructor(e,t,n=t*2,s){super(new _t,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new Bn(t,e,e,Bt,Ot);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new Bn(t,e,e,xr,an);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new Bn(t,e,e,Bt,Ot);n.colorSpace=Ge.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),u=new wt(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new wt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Ht),this.getBoundingBoxAt(r,ca).applyMatrix4(Ht),e.union(ca)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pt);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Ht),this.getBoundingSphereAt(r,xi).applyMatrix4(Ht),e.union(xi)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(ql),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;Ht.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;let a=this._colorsTexture;return a&&(jm.toArray(a.image.data,s*4),a.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let a=e.getIndex();if(a!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?a.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(ql),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(s&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(let h in n.attributes){let u=t.getAttribute(h),d=n.getAttribute(h);tg(u,d,l);let f=u.itemSize;for(let g=u.count,x=c;g<x;g++){let m=l+g;for(let p=0;p<f;p++)d.setComponent(m,p,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(s){let h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<a.count;d++)r.setX(h+d,l+a.getX(d));for(let d=a.count,f=u;d<f;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=s?o.indexStart:o.vertexStart,o.count=s?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].active&&n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,s=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){let l=s[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=r.index,g=f.array,x=e-u;for(let m=h;m<h+d;m++)g[m]=g[m]+x;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){let{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(let f in d){let g=d[f],{array:x,itemSize:m}=g;x.copyWithin(e*m,h*m,(h+u)*m),g.addUpdateRange(e*m,u*m),g.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){let r=new Ft,a=n.index,o=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(ks.fromBufferAttribute(o,h))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){let r=new Pt;this.getBoundingBoxAt(e,ca),ca.getCenter(r.center);let a=n.index,o=n.attributes.position,l=0;for(let c=s.start,h=s.start+s.count;c<h;c++){let u=c;a&&(u=a.getX(u)),ks.fromBufferAttribute(o,u),l=Math.max(l,r.center.distanceToSquared(ks))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,s=this._matricesTexture.image.data;return t.toArray(s,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(ql);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let s=new Int32Array(e),r=new Int32Array(e);yi(this._multiDrawCounts,s),yi(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;let a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),yi(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),yi(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),yi(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new _t,this._initializeGeometry(r));let a=this.geometry;r.index&&yi(r.index.array,a.index.array);for(let o in r.attributes)yi(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){let n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,a=this.geometry;Rt.material=this.material,Rt.geometry.index=a.index,Rt.geometry.attributes=a.attributes,Rt.geometry.boundingBox===null&&(Rt.geometry.boundingBox=new Ft),Rt.geometry.boundingSphere===null&&(Rt.geometry.boundingSphere=new Pt);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;let c=n[o].geometryIndex,h=s[c];Rt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Rt.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Rt.geometry.boundingBox),this.getBoundingSphereAt(c,Rt.geometry.boundingSphere),Rt.raycast(e,ha);for(let u=0,d=ha.length;u<d;u++){let f=ha[u];f.object=this,f.batchId=o,t.push(f)}ha.length=0}Rt.material=null,Rt.geometry.index=null,Rt.geometry.attributes={},Rt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=s.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,g=f.image.data,x=n.isArrayCamera?Qm:ed;d&&!n.isArrayCamera&&(Ht.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),ed.setFromProjectionMatrix(Ht,n.coordinateSystem,n.reversedDepth));let m=0;if(this.sortObjects){Ht.copy(this.matrixWorld).invert(),ks.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Ht),td.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Ht);for(let S=0,M=l.length;S<M;S++)if(l[S].visible&&l[S].active){let T=l[S].geometryIndex;this.getMatrixAt(S,Ht),this.getBoundingSphereAt(T,xi).applyMatrix4(Ht);let E=!1;if(d&&(E=!x.intersectsSphere(xi,n)),!E){let C=u[T],U=eg.subVectors(xi.center,ks).dot(td);Yl.push(C.start,C.count,U,S)}}let p=Yl.list,w=this.customSort;w===null?p.sort(r.transparent?Km:Zm):w.call(this,p,n);for(let S=0,M=p.length;S<M;S++){let T=p[S];c[m]=T.start*o,h[m]=T.count,g[m]=T.index,m++}Yl.reset()}else for(let p=0,w=l.length;p<w;p++)if(l[p].visible&&l[p].active){let S=l[p].geometryIndex,M=!1;if(d&&(this.getMatrixAt(p,Ht),this.getBoundingSphereAt(S,xi).applyMatrix4(Ht),M=!x.intersectsSphere(xi,n)),!M){let T=u[S];c[m]=T.start*o,h[m]=T.count,g[m]=p,m++}}f.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,a){this.onBeforeRender(e,null,s,r,a)}},La=class extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Da=new I,Na=new I,nd=new Ne,zs=new jn,ua=new Pt,Jl=new I,id=new I,rr=class extends dt{constructor(e=new _t,t=new La){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Da.fromBufferAttribute(t,s-1),Na.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Da.distanceTo(Na);e.setAttribute("lineDistance",new rt(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,e.ray.intersectsSphere(ua)===!1)return;nd.copy(s).invert(),zs.copy(e.ray).applyMatrix4(nd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),w=h.getX(x+1),S=da(this,e,zs,l,p,w,x);S&&t.push(S)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=da(this,e,zs,l,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=da(this,e,zs,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=da(this,e,zs,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function da(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Da.fromBufferAttribute(o,s),Na.fromBufferAttribute(o,r),t.distanceSqToSegment(Da,Na,Jl,id)>n)return;Jl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Jl);if(!(c<e.near||c>e.far))return{distance:c,point:id.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var sd=new I,rd=new I,hc=class extends rr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)sd.fromBufferAttribute(t,s),rd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+sd.distanceTo(rd);e.setAttribute("lineDistance",new rt(n,1))}else Me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},uc=class extends rr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ua=class extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ad=new Ne,dc=new jn,fa=new Pt,pa=new I,fc=class extends dt{constructor(e=new _t,t=new Ua){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,e.ray.intersectsSphere(fa)===!1)return;ad.copy(s).invert(),dc.copy(e.ray).applyMatrix4(ad);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);pa.fromBufferAttribute(u,m),od(pa,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)pa.fromBufferAttribute(u,g),od(pa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function od(i,e,t,n,s,r,a){let o=dc.distanceSqToPoint(i);if(o<t){let l=new I;dc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var pc=class extends Lt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ei=class extends Lt{constructor(e,t,n=an,s,r,a,o=Mt,l=Mt,c,h=Sn,u=1){if(h!==Sn&&h!==si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ds(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fa=class extends ei{constructor(e,t=an,n=ni,s,r,a=Mt,o=Mt,l,c=Sn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ar=class extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var mc=class i extends _t{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new I,h=new Ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},gc=class i extends _t{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;w(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(f,2));function w(){let M=new I,T=new I,E=0,C=(t-e)/n;for(let U=0;U<=r;U++){let y=[],b=U/r,L=b*(t-e)+e;for(let B=0;B<=s;B++){let O=B/s,G=O*l+o,q=Math.sin(G),V=Math.cos(G);T.x=L*q,T.y=-b*n+m,T.z=L*V,u.push(T.x,T.y,T.z),M.set(q,C,V).normalize(),d.push(M.x,M.y,M.z),f.push(O,1-b),y.push(g++)}x.push(y)}for(let U=0;U<s;U++)for(let y=0;y<r;y++){let b=x[y][U],L=x[y+1][U],B=x[y+1][U+1],O=x[y][U+1];(e>0||y!==0)&&(h.push(b,L,O),E+=3),(t>0||y!==r-1)&&(h.push(L,B,O),E+=3)}c.addGroup(p,E,0),p+=E}function S(M){let T=g,E=new Ie,C=new I,U=0,y=M===!0?e:t,b=M===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;let L=g;for(let B=0;B<=s;B++){let G=B/s*l+o,q=Math.cos(G),V=Math.sin(G);C.x=y*V,C.y=m*b,C.z=y*q,u.push(C.x,C.y,C.z),d.push(0,b,0),E.x=q*.5+.5,E.y=V*.5*b+.5,f.push(E.x,E.y),g++}for(let B=0;B<s;B++){let O=T+B,G=L+B;M===!0?h.push(G,G+1,O):h.push(G+1,G,O),U+=3}c.addGroup(p,U,M===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Oa=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Me("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ie:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new Ne;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ke(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function gh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ma=new I,$l=new gh,Zl=new gh,Kl=new gh,_c=class extends Oa{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ma.subVectors(s[0],s[1]).add(s[0]),c=ma);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ma.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ma),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),$l.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Zl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Kl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&($l.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Zl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Kl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set($l.calc(l),Zl.calc(l),Kl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ng(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=sf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=og(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return or(r,a,t,o,l,c,0),a}function sf(i,e,t,n,s){let r;if(s===xg(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=ld(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=ld(a/n|0,i[a],i[a+1],r);return r&&gs(r,r.next)&&(cr(r),r=r.next),r}function Ri(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(gs(t,t.next)||ct(t.prev,t,t.next)===0)){if(cr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function or(i,e,t,n,s,r,a){if(!i)return;!a&&r&&dg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?sg(i,n,s,r):ig(i)){e.push(l.i,i.i,c.i),cr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=rg(Ri(i),e),or(i,e,t,n,s,r,2)):a===2&&ag(i,e,t,n,s,r):or(Ri(i),e,t,n,s,r,1);break}}}function ig(i){let e=i.prev,t=i,n=i.next;if(ct(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Vs(s,o,r,l,a,c,g.x,g.y)&&ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(ct(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),x=Math.max(o,l,c),m=Math.max(h,u,d),p=xc(f,g,e,t,n),w=xc(x,m,e,t,n),S=i.prevZ,M=i.nextZ;for(;S&&S.z>=p&&M&&M.z<=w;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Vs(o,h,l,u,c,d,S.x,S.y)&&ct(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Vs(o,h,l,u,c,d,M.x,M.y)&&ct(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Vs(o,h,l,u,c,d,S.x,S.y)&&ct(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=w;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Vs(o,h,l,u,c,d,M.x,M.y)&&ct(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function rg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!gs(n,s)&&af(n,t,t.next,s)&&lr(n,s)&&lr(s,n)&&(e.push(n.i,t.i,s.i),cr(t),cr(t.next),t=i=s),t=t.next}while(t!==i);return Ri(t)}function ag(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&mg(a,o)){let l=of(a,o);a=Ri(a,a.next),l=Ri(l,l.next),or(a,e,t,n,s,r,0),or(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function og(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=sf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pg(c))}s.sort(lg);for(let r=0;r<s.length;r++)t=cg(s[r],t);return t}function lg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function cg(i,e){let t=hg(i,e);if(!t)return e;let n=of(t,i);return Ri(n,n.next),Ri(t,t.next)}function hg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(gs(i,t))return t;do{if(gs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&rf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);lr(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&ug(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function ug(i,e){return ct(i.prev,i,e.prev)<0&&ct(e.next,i,i.next)<0}function dg(i,e,t,n){let s=i;do s.z===0&&(s.z=xc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fg(s)}function fg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function xc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function pg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Vs(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&rf(i,e,t,n,s,r,a,o)}function mg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!gg(i,e)&&(lr(i,e)&&lr(e,i)&&_g(i,e)&&(ct(i.prev,i,e.prev)||ct(i,e.prev,e))||gs(i,e)&&ct(i.prev,i,i.next)>0&&ct(e.prev,e,e.next)>0)}function ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function gs(i,e){return i.x===e.x&&i.y===e.y}function af(i,e,t,n){let s=_a(ct(i,e,t)),r=_a(ct(i,e,n)),a=_a(ct(t,n,i)),o=_a(ct(t,n,e));return!!(s!==r&&a!==o||s===0&&ga(i,t,e)||r===0&&ga(i,n,e)||a===0&&ga(t,i,n)||o===0&&ga(t,e,n))}function ga(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _a(i){return i>0?1:i<0?-1:0}function gg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&af(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function lr(i,e){return ct(i.prev,i,i.next)<0?ct(i,e,i.next)>=0&&ct(i,i.prev,e)>=0:ct(i,e,i.prev)<0||ct(i,i.next,e)<0}function _g(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function of(i,e){let t=yc(i.i,i.x,i.y),n=yc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ld(i,e,t,n){let s=yc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function cr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xg(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var vc=class{static triangulate(e,t,n=2){return ng(e,t,n)}},Sc=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];cd(e),hd(n,e);let a=e.length;t.forEach(cd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,hd(n,t[l]);let o=vc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function cd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function hd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var hr=class i extends _t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let w=p*d-a;for(let S=0;S<c;S++){let M=S*u-r;g.push(M,-w,0),x.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let S=w+c*p,M=w+c*(p+1),T=w+1+c*(p+1),E=w+1+c*p;f.push(S,M,E),f.push(M,T,E)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Mc=class i extends _t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let w=[],S=p/n,M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let T=0;T<=t;T++){let E=T/t;u.x=-e*Math.cos(s+E*r)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(s+E*r)*Math.sin(a+S*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(E+M,1-S),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){let S=h[p][w+1],M=h[p][w],T=h[p+1][w],E=h[p+1][w+1];(p!==0||a>0)&&f.push(S,M,E),(p!==n-1||l<Math.PI)&&f.push(M,T,E)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bc=class i extends _t{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;a.push(x,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ba=class extends Qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ka=class extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wc=class extends ka{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ac=class extends rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},za=class extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Va=class extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function wi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function lf(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Tc(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function _h(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function yg(i,e,t,n,s=30){let r=i.clone();r.name=e;let a=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){let g=c.times[f]*s;if(!(g<t||g>=n)){u.push(c.times[f]);for(let x=0;x<h;++x)d.push(c.values[f*h+x])}}u.length!==0&&(c.times=wi(u,c.times.constructor),c.values=wi(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function vg(i,e=0,t=i,n=30){n<=0&&(n=30);let s=t.tracks.length,r=e/n;for(let a=0;a<s;++a){let o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=i.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let g=o.times.length-1,x;if(r<=o.times[0]){let p=h,w=u-h;x=o.values.slice(p,w)}else if(r>=o.times[g]){let p=g*u+h,w=p+u-h;x=o.values.slice(p,w)}else{let p=o.createInterpolant(),w=h,S=u-h;p.evaluate(r),x=p.resultBuffer.slice(w,S)}l==="quaternion"&&new Wt().fromArray(x).normalize().conjugate().toArray(x);let m=c.times.length;for(let p=0;p<m;++p){let w=p*f+d;if(l==="quaternion")Wt.multiplyQuaternionsFlat(c.values,w,x,0,c.values,w);else{let S=f-d*2;for(let M=0;M<S;++M)c.values[w+M]-=x[M]}}}return i.blendMode=uh,i}var Ec=class{static convertArray(e,t){return wi(e,t)}static isTypedArray(e){return Kd(e)}static getKeyframeOrder(e){return lf(e)}static sortedArray(e,t,n){return Tc(e,t,n)}static flattenJSON(e,t,n,s){_h(e,t,n,s)}static subclip(e,t,n,s,r=30){return yg(e,t,n,s,r)}static makeClipAdditive(e,t=0,n=e,s=30){return vg(e,t,n,s)}},Ii=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ga=class extends Ii{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Si,endingEnd:Si}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mi:r=e,o=2*t-n;break;case Xs:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mi:a=e,l=2*n-t;break;case Xs:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,w=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+w*a[c+T]+S*a[l+T]+M*a[u+T];return r}},ur=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Ha=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wi(t,this.TimeBufferType),this.values=wi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wi(e.times,Array),values:wi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ur(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ga(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ws:t=this.InterpolantFactoryMethodDiscrete;break;case ba:t=this.InterpolantFactoryMethodLinear;break;case xa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Me("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return ba;case this.InterpolantFactoryMethodSmooth:return xa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Te("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Te("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Te("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Te("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Kd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Te("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Xt.prototype.ValueTypeName="";Xt.prototype.TimeBufferType=Float32Array;Xt.prototype.ValueBufferType=Float32Array;Xt.prototype.DefaultInterpolation=ba;var zn=class extends Xt{constructor(e,t,n){super(e,t,n)}};zn.prototype.ValueTypeName="bool";zn.prototype.ValueBufferType=Array;zn.prototype.DefaultInterpolation=Ws;zn.prototype.InterpolantFactoryMethodLinear=void 0;zn.prototype.InterpolantFactoryMethodSmooth=void 0;var dr=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}};dr.prototype.ValueTypeName="color";var Pi=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}};Pi.prototype.ValueTypeName="number";var Wa=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Wt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Li=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Wa(this.times,this.values,this.getValueSize(),e)}};Li.prototype.ValueTypeName="quaternion";Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Vn=class extends Xt{constructor(e,t,n){super(e,t,n)}};Vn.prototype.ValueTypeName="string";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=Ws;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}};Di.prototype.ValueTypeName="vector";var fr=class{constructor(e="",t=-1,n=[],s=qo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=dn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Mg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Xt.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=lf(l);l=Tc(l,1,h),c=Tc(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Pi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(Me("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Te("AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];_h(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let w=0;w!==d[g].morphTargets.length;++w){let S=d[g];m.push(S.time),p.push(S.morphTarget===x?1:0)}s.push(new Pi(".morphTargetInfluence["+x+"]",m,p))}l=f.length*a}else{let f=".bones["+t[u].name+"]";n(Di,f+".position",d,"pos",s),n(Li,f+".quaternion",d,"rot",s),n(Di,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Sg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pi;case"vector":case"vector2":case"vector3":case"vector4":return Di;case"color":return dr;case"quaternion":return Li;case"bool":case"boolean":return zn;case"string":return Vn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Mg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Sg(i.type);if(i.times===void 0){let t=[],n=[];_h(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var vn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Xa=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},br=new Xa,ti=class{constructor(e){this.manager=e!==void 0?e:br,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var Un={},Cc=class extends Error{constructor(e,t){super(e),this.response=t}},Rc=class extends ti{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=vn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Un[e]!==void 0){Un[e].push({onLoad:t,onProgress:n,onError:s});return}Un[e]=[],Un[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Me("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Un[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){w();function w(){u.read().then(({done:S,value:M})=>{if(S)p.close();else{x+=M.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let E=0,C=h.length;E<C;E++){let U=h[E];U.onProgress&&U.onProgress(T)}p.enqueue(M),w()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Cc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{vn.add(`file:${e}`,c);let h=Un[e];delete Un[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Un[e];if(h===void 0)throw this.manager.itemError(e),c;delete Un[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var os=new WeakMap,qa=class extends ti{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=vn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=os.get(a);u===void 0&&(u=[],os.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=cs("img");function l(){h(),t&&t(this);let u=os.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}os.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),vn.remove(`image:${e}`);let d=os.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}os.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),vn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Ic=class extends ti{constructor(e){super(e)}load(e,t,n,s){let r=new Lt,a=new qa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ni=class extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var jl=new Ne,ud=new I,dd=new I,pr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qn,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pc=class extends pr{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ci*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Lc=class extends Ni{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Pc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Dc=class extends pr{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0}},Nc=class extends Ni{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},_s=class extends Qs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Uc=class extends pr{constructor(){super(new _s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fc=class extends Ni{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Uc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Oc=class extends Ni{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Bc=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},kc=class extends _t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Ql=new WeakMap,zc=class extends ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Me("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Me("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=vn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(Ql.has(a)===!0)s&&s(Ql.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return vn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ql.set(l,c),vn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});vn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ya=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Vc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Ja=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){Wt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;Wt.multiplyQuaternionsFlat(e,a,e,t,e,n),Wt.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},xh="\\[\\]\\.:\\/",bg=new RegExp("["+xh+"]","g"),yh="[^"+xh+"]",wg="[^"+xh.replace("\\.","")+"]",Ag=/((?:WC+[\/:])*)/.source.replace("WC",yh),Tg=/(WCOD+)?/.source.replace("WCOD",wg),Eg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yh),Cg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yh),Rg=new RegExp("^"+Ag+Tg+Eg+Cg+"$"),Ig=["material","materials","bones","map"],Gc=class{constructor(e,t,n){let s=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},st=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bg,"")}static parseTrackName(e){let t=Rg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ig.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Te("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Te("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Te("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Te("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Te("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Te("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};st.Composite=Gc;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $a=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Si,endingEnd:Si};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Vd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case uh:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case qo:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===Gd;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===zd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Mi,s.endingEnd=Mi):(e?s.endingStart=this.zeroSlopeAtStart?Mi:Si:s.endingStart=Xs,t?s.endingEnd=this.zeroSlopeAtEnd?Mi:Si:s.endingEnd=Xs)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},Pg=new Float32Array(1),Hc=class extends Mn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;g=new Ja(st.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ur(new Float32Array(2),new Float32Array(2),1,Pg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?fr.findByName(s,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=qo),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new $a(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?fr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Wc=class extends nr{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var fd=new Ne,Xc=class{constructor(e,t,n=0,s=1/0){this.ray=new jn(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Te("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fd),this}intersectObject(e,t=!0,n=[]){return qc(e,this,n,t),n.sort(pd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)qc(e[s],this,n,t);return n.sort(pd),n}};function pd(i,e){return i.distance-e.distance}function qc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)qc(r[a],e,t,!0)}}function vh(i,e,t,n){let s=Lg(n);switch(t){case ch:return i*e;case ho:return i*e/s.components*s.byteLength;case xr:return i*e/s.components*s.byteLength;case Fi:return i*e*2/s.components*s.byteLength;case uo:return i*e*2/s.components*s.byteLength;case hh:return i*e*3/s.components*s.byteLength;case Bt:return i*e*4/s.components*s.byteLength;case fo:return i*e*4/s.components*s.byteLength;case yr:case vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sr:case Mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mo:case _o:return Math.max(i,16)*Math.max(e,8)/4;case po:case go:return Math.max(i,8)*Math.max(e,8)/2;case xo:case yo:case So:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vo:case bo:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ko:case zo:case Vo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Go:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lg(i){switch(i){case qt:case rh:return{byteLength:1,components:1};case ys:case ah:case An:return{byteLength:2,components:1};case lo:case co:return{byteLength:2,components:4};case an:case oo:case Ot:return{byteLength:4,components:1};case oh:case lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function Lf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ng(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$g=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,s_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,r_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,a_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,o_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u_="gl_FragColor = linearToOutputTexel( gl_FragColor );",d_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,p_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,m_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,g_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,__=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,x_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,b_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,E_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,C_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,D_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,U_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,K_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Q_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,s0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,h0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,x0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,y0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,M0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,w0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,C0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,D0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,N0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,V0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,G0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,H0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Q0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ix=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ux=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Ug,alphahash_pars_fragment:Fg,alphamap_fragment:Og,alphamap_pars_fragment:Bg,alphatest_fragment:kg,alphatest_pars_fragment:zg,aomap_fragment:Vg,aomap_pars_fragment:Gg,batching_pars_vertex:Hg,batching_vertex:Wg,begin_vertex:Xg,beginnormal_vertex:qg,bsdfs:Yg,iridescence_fragment:Jg,bumpmap_pars_fragment:$g,clipping_planes_fragment:Zg,clipping_planes_pars_fragment:Kg,clipping_planes_pars_vertex:jg,clipping_planes_vertex:Qg,color_fragment:e_,color_pars_fragment:t_,color_pars_vertex:n_,color_vertex:i_,common:s_,cube_uv_reflection_fragment:r_,defaultnormal_vertex:a_,displacementmap_pars_vertex:o_,displacementmap_vertex:l_,emissivemap_fragment:c_,emissivemap_pars_fragment:h_,colorspace_fragment:u_,colorspace_pars_fragment:d_,envmap_fragment:f_,envmap_common_pars_fragment:p_,envmap_pars_fragment:m_,envmap_pars_vertex:g_,envmap_physical_pars_fragment:E_,envmap_vertex:__,fog_vertex:x_,fog_pars_vertex:y_,fog_fragment:v_,fog_pars_fragment:S_,gradientmap_pars_fragment:M_,lightmap_pars_fragment:b_,lights_lambert_fragment:w_,lights_lambert_pars_fragment:A_,lights_pars_begin:T_,lights_toon_fragment:C_,lights_toon_pars_fragment:R_,lights_phong_fragment:I_,lights_phong_pars_fragment:P_,lights_physical_fragment:L_,lights_physical_pars_fragment:D_,lights_fragment_begin:N_,lights_fragment_maps:U_,lights_fragment_end:F_,logdepthbuf_fragment:O_,logdepthbuf_pars_fragment:B_,logdepthbuf_pars_vertex:k_,logdepthbuf_vertex:z_,map_fragment:V_,map_pars_fragment:G_,map_particle_fragment:H_,map_particle_pars_fragment:W_,metalnessmap_fragment:X_,metalnessmap_pars_fragment:q_,morphinstance_vertex:Y_,morphcolor_vertex:J_,morphnormal_vertex:$_,morphtarget_pars_vertex:Z_,morphtarget_vertex:K_,normal_fragment_begin:j_,normal_fragment_maps:Q_,normal_pars_fragment:e0,normal_pars_vertex:t0,normal_vertex:n0,normalmap_pars_fragment:i0,clearcoat_normal_fragment_begin:s0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:a0,iridescence_pars_fragment:o0,opaque_fragment:l0,packing:c0,premultiplied_alpha_fragment:h0,project_vertex:u0,dithering_fragment:d0,dithering_pars_fragment:f0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:_0,shadowmap_vertex:x0,shadowmask_pars_fragment:y0,skinbase_vertex:v0,skinning_pars_vertex:S0,skinning_vertex:M0,skinnormal_vertex:b0,specularmap_fragment:w0,specularmap_pars_fragment:A0,tonemapping_fragment:T0,tonemapping_pars_fragment:E0,transmission_fragment:C0,transmission_pars_fragment:R0,uv_pars_fragment:I0,uv_pars_vertex:P0,uv_vertex:L0,worldpos_vertex:D0,background_vert:N0,background_frag:U0,backgroundCube_vert:F0,backgroundCube_frag:O0,cube_vert:B0,cube_frag:k0,depth_vert:z0,depth_frag:V0,distance_vert:G0,distance_frag:H0,equirect_vert:W0,equirect_frag:X0,linedashed_vert:q0,linedashed_frag:Y0,meshbasic_vert:J0,meshbasic_frag:$0,meshlambert_vert:Z0,meshlambert_frag:K0,meshmatcap_vert:j0,meshmatcap_frag:Q0,meshnormal_vert:ex,meshnormal_frag:tx,meshphong_vert:nx,meshphong_frag:ix,meshphysical_vert:sx,meshphysical_frag:rx,meshtoon_vert:ax,meshtoon_frag:ox,points_vert:lx,points_frag:cx,shadow_vert:hx,shadow_frag:ux,sprite_vert:dx,sprite_frag:fx},oe={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},En={basic:{uniforms:Dt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Dt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Dt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Dt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Dt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Dt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Dt([oe.points,oe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Dt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Dt([oe.common,oe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Dt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Dt([oe.sprite,oe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Dt([oe.common,oe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Dt([oe.lights,oe.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};En.physical={uniforms:Dt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var Zo={r:0,b:0,g:0},Bi=new sn,px=new Ne;function mx(i,e,t,n,s,r,a){let o=new Pe(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function x(S){let M=!1,T=g(S);T===null?p(o,l):T&&T.isColor&&(p(T,1),M=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,M){let T=g(M);T&&(T.isCubeTexture||T.mapping===gr)?(h===void 0&&(h=new Tt(new ps(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:Oi(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Bi.copy(M.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(px.makeRotationFromEuler(Bi)),h.material.toneMapped=Ge.getTransfer(T.colorSpace)!==Ye,(u!==T||d!==T.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Tt(new hr(2,2),new Qt({name:"BackgroundMaterial",uniforms:Oi(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(T.colorSpace)!==Ye,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,M){S.getRGB(Zo,mh(i)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,M,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:x,addToRenderList:m,dispose:w}}function gx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(b,L,B,O,G){let q=!1,V=u(O,B,L);r!==V&&(r=V,c(r.object)),q=f(b,O,B,G),q&&g(b,O,B,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(b,L,B,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,L,B){let O=B.wireframe===!0,G=n[b.id];G===void 0&&(G={},n[b.id]=G);let q=G[L.id];q===void 0&&(q={},G[L.id]=q);let V=q[O];return V===void 0&&(V=d(l()),q[O]=V),V}function d(b){let L=[],B=[],O=[];for(let G=0;G<t;G++)L[G]=0,B[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:O,object:b,attributes:{},index:null}}function f(b,L,B,O){let G=r.attributes,q=L.attributes,V=0,W=B.getAttributes();for(let Z in W)if(W[Z].location>=0){let ae=G[Z],ue=q[Z];if(ue===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ae===void 0||ae.attribute!==ue||ue&&ae.data!==ue.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function g(b,L,B,O){let G={},q=L.attributes,V=0,W=B.getAttributes();for(let Z in W)if(W[Z].location>=0){let ae=q[Z];ae===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor));let ue={};ue.attribute=ae,ae&&ae.data&&(ue.data=ae.data),G[Z]=ue,V++}r.attributes=G,r.attributesNum=V,r.index=O}function x(){let b=r.newAttributes;for(let L=0,B=b.length;L<B;L++)b[L]=0}function m(b){p(b,0)}function p(b,L){let B=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;B[b]=1,O[b]===0&&(i.enableVertexAttribArray(b),O[b]=1),G[b]!==L&&(i.vertexAttribDivisor(b,L),G[b]=L)}function w(){let b=r.newAttributes,L=r.enabledAttributes;for(let B=0,O=L.length;B<O;B++)L[B]!==b[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function S(b,L,B,O,G,q,V){V===!0?i.vertexAttribIPointer(b,L,B,G,q):i.vertexAttribPointer(b,L,B,O,G,q)}function M(b,L,B,O){x();let G=O.attributes,q=B.getAttributes(),V=L.defaultAttributeValues;for(let W in q){let Z=q[W];if(Z.location>=0){let he=G[W];if(he===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(he=b.instanceColor)),he!==void 0){let ae=he.normalized,ue=he.itemSize,ze=e.get(he);if(ze===void 0)continue;let Fe=ze.buffer,lt=ze.type,ot=ze.bytesPerElement,Y=lt===i.INT||lt===i.UNSIGNED_INT||he.gpuType===oo;if(he.isInterleavedBufferAttribute){let K=he.data,pe=K.stride,De=he.offset;if(K.isInstancedInterleavedBuffer){for(let _e=0;_e<Z.locationSize;_e++)p(Z.location+_e,K.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let _e=0;_e<Z.locationSize;_e++)m(Z.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let _e=0;_e<Z.locationSize;_e++)S(Z.location+_e,ue/Z.locationSize,lt,ae,pe*ot,(De+ue/Z.locationSize*_e)*ot,Y)}else{if(he.isInstancedBufferAttribute){for(let K=0;K<Z.locationSize;K++)p(Z.location+K,he.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let K=0;K<Z.locationSize;K++)m(Z.location+K);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let K=0;K<Z.locationSize;K++)S(Z.location+K,ue/Z.locationSize,lt,ae,ue*ot,ue/Z.locationSize*K*ot,Y)}}else if(V!==void 0){let ae=V[W];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(Z.location,ae);break;case 3:i.vertexAttrib3fv(Z.location,ae);break;case 4:i.vertexAttrib4fv(Z.location,ae);break;default:i.vertexAttrib1fv(Z.location,ae)}}}}w()}function T(){U();for(let b in n){let L=n[b];for(let B in L){let O=L[B];for(let G in O)h(O[G].object),delete O[G];delete L[B]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let L=n[b.id];for(let B in L){let O=L[B];for(let G in O)h(O[G].object),delete O[G];delete L[B]}delete n[b.id]}function C(b){for(let L in n){let B=n[L];if(B[b.id]===void 0)continue;let O=B[b.id];for(let G in O)h(O[G].object),delete O[G];delete B[b.id]}}function U(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function _x(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function xx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Bt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let U=C===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==qt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ot&&!U)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Me("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:M,maxSamples:T,samples:E}}function yx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new xn,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let w=r?0:n,S=w*4,M=p.clippingState||null;l.value=M,M=h(g,d,S,f);for(let T=0;T!==S;++T)M[T]=t[T];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=f;S!==x;++S,M+=4)a.copy(u[S]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function vx(i){let e=new WeakMap;function t(a,o){return o===so?a.mapping=ni:o===ro&&(a.mapping=Ui),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===so||o===ro)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new tr(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ri=4,cf=[.125,.215,.35,.446,.526,.582],zi=20,Sx=256,wr=new _s,hf=new Pe,Sh=null,Mh=0,bh=0,wh=!1,Mx=new I,jo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Mx}=r;Sh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,Mh,bh),this._renderer.xr.enabled=wh,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ni||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:An,format:Bt,colorSpace:Ei,depthBuffer:!1},s=uf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=bx(r)),this._blurMaterial=Ax(r,e,t),this._ggxMaterial=wx(r,e,t)}return s}_compileMaterial(e){let t=new Tt(new _t,e);this._renderer.compile(t,wr)}_sceneToCubeUV(e,t,n,s,r){let l=new It(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(hf),u.toneMapping=fn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tt(new ps,new Zs({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,p=!0):(m.color.copy(hf),p=!0);for(let S=0;S<6;S++){let M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let T=this._cubeSize;Ss(s,M*T,S>2?T:0,T,T),u.setRenderTarget(s),p&&u.render(x,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ni||e.mapping===Ui;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=df());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ss(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,wr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-ri?n-g+ri:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Ss(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,wr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ss(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(o,wr)}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Te("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=c;let d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):zi;m>zi&&Me(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);let p=[],w=0;for(let C=0;C<zi;++C){let U=C/x,y=Math.exp(-U*U/2);p.push(y),C===0?w+=y:C<m&&(w+=2*y)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let M=this._sizeLods[s],T=3*M*(s>S-ri?s-S+ri:0),E=4*(this._cubeSize-M);Ss(t,T,E,3*M,2*M),l.setRenderTarget(t),l.render(u,wr)}};function bx(i){let e=[],t=[],n=[],s=i,r=i-ri+1+cf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ri?l=cf[a-i+ri-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*f),S=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let E=0;E<f;E++){let C=E%3*2/3-1,U=E>2?0:-1,y=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];w.set(y,x*g*E),S.set(d,m*g*E);let b=[E,E,E,E,E,E];M.set(b,p*g*E)}let T=new _t;T.setAttribute("position",new wt(w,x)),T.setAttribute("uv",new wt(S,m)),T.setAttribute("faceIndex",new wt(M,p)),n.push(new Tt(T,null)),s>ri&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function uf(i,e,t){let n=new jt(i,e,t);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function wx(i,e,t){return new Qt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ax(i,e,t){let n=new Float32Array(zi),s=new I(0,1,0);return new Qt({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function df(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function ff(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===so||l===ro,h=l===ni||l===Ui;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new jo(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new jo(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ex(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&us("WebGLRenderer: "+n+" extension not supported."),s}}}function Cx(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let w=f.array;x=f.version;for(let S=0,M=w.length;S<M;S+=3){let T=w[S+0],E=w[S+1],C=w[S+2];d.push(T,E,E,C,C,T)}}else if(g!==void 0){let w=g.array;x=g.version;for(let S=0,M=w.length/3-1;S<M;S+=3){let T=S+0,E=S+1,C=S+2;d.push(T,E,E,C,C,T)}}else return;let m=new(fh(d)?js:Ks)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Rx(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*x[w];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ix(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Te("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Px(i,e,t){let n=new WeakMap,s=new at;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let y=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let M=o.attributes.position.count*S,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*T*4*u),C=new $s(E,M,T,u);C.type=Ot,C.needsUpdate=!0;let U=S*4;for(let b=0;b<u;b++){let L=m[b],B=p[b],O=w[b],G=M*T*4*b;for(let q=0;q<L.count;q++){let V=q*U;f===!0&&(s.fromBufferAttribute(L,q),E[G+V+0]=s.x,E[G+V+1]=s.y,E[G+V+2]=s.z,E[G+V+3]=0),g===!0&&(s.fromBufferAttribute(B,q),E[G+V+4]=s.x,E[G+V+5]=s.y,E[G+V+6]=s.z,E[G+V+7]=0),x===!0&&(s.fromBufferAttribute(O,q),E[G+V+8]=s.x,E[G+V+9]=s.y,E[G+V+10]=s.z,E[G+V+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new Ie(M,T)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Lx(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Dx={[Kc]:"LINEAR_TONE_MAPPING",[jc]:"REINHARD_TONE_MAPPING",[Qc]:"CINEON_TONE_MAPPING",[eh]:"ACES_FILMIC_TONE_MAPPING",[nh]:"AGX_TONE_MAPPING",[ih]:"NEUTRAL_TONE_MAPPING",[th]:"CUSTOM_TONE_MAPPING"};function Nx(i,e,t,n,s){let r=new jt(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new jt(e,t,{type:An,depthBuffer:!1,stencilBuffer:!1}),o=new _t;o.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new rt([0,2,0,0,2,0],2));let l=new Ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Tt(o,l),h=new _s(-1,1,1,-1,0,1),u=null,d=null,f=!1,g,x=null,m=[],p=!1;this.setSize=function(w,S){r.setSize(w,S),a.setSize(w,S);for(let M=0;M<m.length;M++){let T=m[M];T.setSize&&T.setSize(w,S)}},this.setEffects=function(w){m=w,p=m.length>0&&m[0].isRenderPass===!0;let S=r.width,M=r.height;for(let T=0;T<m.length;T++){let E=m[T];E.setSize&&E.setSize(S,M)}},this.begin=function(w,S){if(f||w.toneMapping===fn&&m.length===0)return!1;if(x=S,S!==null){let M=S.width,T=S.height;(r.width!==M||r.height!==T)&&this.setSize(M,T)}return p===!1&&w.setRenderTarget(r),g=w.toneMapping,w.toneMapping=fn,!0},this.hasRenderPass=function(){return p},this.end=function(w,S){w.toneMapping=g,f=!0;let M=r,T=a;for(let E=0;E<m.length;E++){let C=m[E];if(C.enabled!==!1&&(C.render(w,T,M,S),C.needsSwap!==!1)){let U=M;M=T,T=U}}if(u!==w.outputColorSpace||d!==w.toneMapping){u=w.outputColorSpace,d=w.toneMapping,l.defines={},Ge.getTransfer(u)===Ye&&(l.defines.SRGB_TRANSFER="");let E=Dx[d];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,w.setRenderTarget(x),w.render(c,h),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Df=new Lt,Eh=new ei(1,1),Nf=new $s,Uf=new Ea,Ff=new er,pf=[],mf=[],gf=new Float32Array(16),_f=new Float32Array(9),xf=new Float32Array(4);function bs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pf[s];if(r===void 0&&(r=new Float32Array(s),pf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function el(i,e){let t=mf[e];t===void 0&&(t=new Int32Array(e),mf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ux(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function Ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function Bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function kx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;xf.set(n),i.uniformMatrix2fv(this.addr,!1,xf),yt(t,n)}}function zx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;_f.set(n),i.uniformMatrix3fv(this.addr,!1,_f),yt(t,n)}}function Vx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;gf.set(n),i.uniformMatrix4fv(this.addr,!1,gf),yt(t,n)}}function Gx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function qx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function $x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function Zx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Eh.compareFunction=t.isReversedDepthBuffer()?$o:Jo,r=Eh):r=Df,t.setTexture2D(e||r,s)}function Kx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Uf,s)}function jx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ff,s)}function Qx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Nf,s)}function ey(i){switch(i){case 5126:return Ux;case 35664:return Fx;case 35665:return Ox;case 35666:return Bx;case 35674:return kx;case 35675:return zx;case 35676:return Vx;case 5124:case 35670:return Gx;case 35667:case 35671:return Hx;case 35668:case 35672:return Wx;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return Yx;case 36295:return Jx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return Qx}}function ty(i,e){i.uniform1fv(this.addr,e)}function ny(i,e){let t=bs(e,this.size,2);i.uniform2fv(this.addr,t)}function iy(i,e){let t=bs(e,this.size,3);i.uniform3fv(this.addr,t)}function sy(i,e){let t=bs(e,this.size,4);i.uniform4fv(this.addr,t)}function ry(i,e){let t=bs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ay(i,e){let t=bs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function oy(i,e){let t=bs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ly(i,e){i.uniform1iv(this.addr,e)}function cy(i,e){i.uniform2iv(this.addr,e)}function hy(i,e){i.uniform3iv(this.addr,e)}function uy(i,e){i.uniform4iv(this.addr,e)}function dy(i,e){i.uniform1uiv(this.addr,e)}function fy(i,e){i.uniform2uiv(this.addr,e)}function py(i,e){i.uniform3uiv(this.addr,e)}function my(i,e){i.uniform4uiv(this.addr,e)}function gy(i,e,t){let n=this.cache,s=e.length,r=el(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Eh:a=Df;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function _y(i,e,t){let n=this.cache,s=e.length,r=el(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Uf,r[a])}function xy(i,e,t){let n=this.cache,s=e.length,r=el(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ff,r[a])}function yy(i,e,t){let n=this.cache,s=e.length,r=el(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Nf,r[a])}function vy(i){switch(i){case 5126:return ty;case 35664:return ny;case 35665:return iy;case 35666:return sy;case 35674:return ry;case 35675:return ay;case 35676:return oy;case 5124:case 35670:return ly;case 35667:case 35671:return cy;case 35668:case 35672:return hy;case 35669:case 35673:return uy;case 5125:return dy;case 36294:return fy;case 36295:return py;case 36296:return my;case 35678:case 36198:case 36298:case 36306:case 35682:return gy;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return yy}}var Ch=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ey(t.type)}},Rh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vy(t.type)}},Ih=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ah=/(\w+)(\])?(\[|\.)?/g;function yf(i,e){i.seq.push(e),i.map[e.id]=e}function Sy(i,e,t){let n=i.name,s=n.length;for(Ah.lastIndex=0;;){let r=Ah.exec(n),a=Ah.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){yf(t,c===void 0?new Ch(o,i,e):new Rh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Ih(o),yf(t,u)),t=u}}}var Ms=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Sy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function vf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var My=37297,by=0;function wy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Sf=new Le;function Ay(i){Ge._getMatrix(Sf,Ge.workingColorSpace,i);let e=`mat3( ${Sf.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case qs:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Mf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+wy(i.getShaderSource(e),o)}else return r}function Ty(i,e){let t=Ay(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ey={[Kc]:"Linear",[jc]:"Reinhard",[Qc]:"Cineon",[eh]:"ACESFilmic",[nh]:"AgX",[ih]:"Neutral",[th]:"Custom"};function Cy(i,e){let t=Ey[e];return t===void 0?(Me("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ko=new I;function Ry(){Ge.getLuminanceCoefficients(Ko);let i=Ko.x.toFixed(4),e=Ko.y.toFixed(4),t=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function Py(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ly(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Tr(i){return i!==""}function bf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(i){return i.replace(Dy,Uy)}var Ny=new Map;function Uy(i,e){let t=Ue[e];if(t===void 0){let n=Ny.get(e);if(n!==void 0)t=Ue[n],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ph(t)}var Fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Af(i){return i.replace(Fy,Oy)}function Oy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var By={[mr]:"SHADOWMAP_TYPE_PCF",[xs]:"SHADOWMAP_TYPE_VSM"};function ky(i){return By[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var zy={[ni]:"ENVMAP_TYPE_CUBE",[Ui]:"ENVMAP_TYPE_CUBE",[gr]:"ENVMAP_TYPE_CUBE_UV"};function Vy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":zy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Gy={[Ui]:"ENVMAP_MODE_REFRACTION"};function Hy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Gy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Wy={[io]:"ENVMAP_BLENDING_MULTIPLY",[Fd]:"ENVMAP_BLENDING_MIX",[Od]:"ENVMAP_BLENDING_ADD"};function Xy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Wy[i.combine]||"ENVMAP_BLENDING_NONE"}function qy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Yy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=ky(t),c=Vy(t),h=Hy(t),u=Xy(t),d=qy(t),f=Iy(t),g=Py(r),x=s.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Tr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Tr).join(`
`),p.length>0&&(p+=`
`)):(m=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),p=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==fn?Cy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Ty("linearToOutputTexel",t.outputColorSpace),Ry(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),a=Ph(a),a=bf(a,t),a=wf(a,t),o=Ph(o),o=bf(o,t),o=wf(o,t),a=Af(a),o=Af(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=w+m+a,M=w+p+o,T=vf(s,s.VERTEX_SHADER,S),E=vf(s,s.FRAGMENT_SHADER,M);s.attachShader(x,T),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(L){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(T)||"",G=s.getShaderInfoLog(E)||"",q=B.trim(),V=O.trim(),W=G.trim(),Z=!0,he=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,E);else{let ae=Mf(s,T,"vertex"),ue=Mf(s,E,"fragment");Te("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+ae+`
`+ue)}else q!==""?Me("WebGLProgram: Program Info Log:",q):(V===""||W==="")&&(he=!1);he&&(L.diagnostics={runnable:Z,programLog:q,vertexShader:{log:V,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(T),s.deleteShader(E),U=new Ms(s,x),y=Ly(s,x)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,My)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=by++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}var Jy=0,Lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dh(e),t.set(e,n)),n}},Dh=class{constructor(e){this.id=Jy++,this.code=e,this.usedTimes=0}};function $y(i,e,t,n,s,r,a){let o=new fs,l=new Lh,c=new Set,h=[],u=new Map,d=s.logarithmicDepthBuffer,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,b,L,B,O){let G=B.fog,q=O.geometry,V=y.isMeshStandardMaterial?B.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),Z=W&&W.mapping===gr?W.image.height:null,he=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&Me("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ue=ae!==void 0?ae.length:0,ze=0;q.morphAttributes.position!==void 0&&(ze=1),q.morphAttributes.normal!==void 0&&(ze=2),q.morphAttributes.color!==void 0&&(ze=3);let Fe,lt,ot,Y;if(he){let $e=En[he];Fe=$e.vertexShader,lt=$e.fragmentShader}else Fe=y.vertexShader,lt=y.fragmentShader,l.update(y),ot=l.getVertexShaderID(y),Y=l.getFragmentShaderID(y);let K=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),De=O.isInstancedMesh===!0,_e=O.isBatchedMesh===!0,We=!!y.map,vt=!!y.matcap,He=!!W,Je=!!y.aoMap,Qe=!!y.lightMap,Oe=!!y.bumpMap,pt=!!y.normalMap,R=!!y.displacementMap,mt=!!y.emissiveMap,qe=!!y.metalnessMap,tt=!!y.roughnessMap,ye=y.anisotropy>0,A=y.clearcoat>0,_=y.dispersion>0,D=y.iridescence>0,X=y.sheen>0,$=y.transmission>0,H=ye&&!!y.anisotropyMap,Se=A&&!!y.clearcoatMap,ne=A&&!!y.clearcoatNormalMap,xe=A&&!!y.clearcoatRoughnessMap,Ce=D&&!!y.iridescenceMap,Q=D&&!!y.iridescenceThicknessMap,se=X&&!!y.sheenColorMap,ge=X&&!!y.sheenRoughnessMap,ve=!!y.specularMap,ie=!!y.specularColorMap,Be=!!y.specularIntensityMap,P=$&&!!y.transmissionMap,ce=$&&!!y.thicknessMap,ee=!!y.gradientMap,de=!!y.alphaMap,j=y.alphaTest>0,J=!!y.alphaHash,te=!!y.extensions,Re=fn;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Re=i.toneMapping);let nt={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:Fe,fragmentShader:lt,defines:y.defines,customVertexShaderID:ot,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:_e,batchingColor:_e&&O._colorsTexture!==null,instancing:De,instancingColor:De&&O.instanceColor!==null,instancingMorph:De&&O.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ei,alphaToCoverage:!!y.alphaToCoverage,map:We,matcap:vt,envMap:He,envMapMode:He&&W.mapping,envMapCubeUVHeight:Z,aoMap:Je,lightMap:Qe,bumpMap:Oe,normalMap:pt,displacementMap:R,emissiveMap:mt,normalMapObjectSpace:pt&&y.normalMapType===Wd,normalMapTangentSpace:pt&&y.normalMapType===Yo,metalnessMap:qe,roughnessMap:tt,anisotropy:ye,anisotropyMap:H,clearcoat:A,clearcoatMap:Se,clearcoatNormalMap:ne,clearcoatRoughnessMap:xe,dispersion:_,iridescence:D,iridescenceMap:Ce,iridescenceThicknessMap:Q,sheen:X,sheenColorMap:se,sheenRoughnessMap:ge,specularMap:ve,specularColorMap:ie,specularIntensityMap:Be,transmission:$,transmissionMap:P,thicknessMap:ce,gradientMap:ee,opaque:y.transparent===!1&&y.blending===Ai&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:j,alphaHash:J,combine:y.combine,mapUv:We&&x(y.map.channel),aoMapUv:Je&&x(y.aoMap.channel),lightMapUv:Qe&&x(y.lightMap.channel),bumpMapUv:Oe&&x(y.bumpMap.channel),normalMapUv:pt&&x(y.normalMap.channel),displacementMapUv:R&&x(y.displacementMap.channel),emissiveMapUv:mt&&x(y.emissiveMap.channel),metalnessMapUv:qe&&x(y.metalnessMap.channel),roughnessMapUv:tt&&x(y.roughnessMap.channel),anisotropyMapUv:H&&x(y.anisotropyMap.channel),clearcoatMapUv:Se&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:se&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(y.sheenRoughnessMap.channel),specularMapUv:ve&&x(y.specularMap.channel),specularColorMapUv:ie&&x(y.specularColorMap.channel),specularIntensityMapUv:Be&&x(y.specularIntensityMap.channel),transmissionMapUv:P&&x(y.transmissionMap.channel),thicknessMapUv:ce&&x(y.thicknessMap.channel),alphaMapUv:de&&x(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(pt||ye),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(We||de),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ze,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:We&&y.map.isVideoTexture===!0&&Ge.getTransfer(y.map.colorSpace)===Ye,decodeVideoTextureEmissive:mt&&y.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(y.emissiveMap.colorSpace)===Ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bn,flipSided:y.side===kt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:te&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&y.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function p(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)b.push(L),b.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(w(b,y),S(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function w(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function S(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){let b=g[y.type],L;if(b){let B=En[b];L=tf.clone(B.uniforms)}else L=y.uniforms;return L}function T(y,b){let L=u.get(b);return L!==void 0?++L.usedTimes:(L=new Yy(i,b,y,r),h.push(L),u.set(b,L)),L}function E(y){if(--y.usedTimes===0){let b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),u.delete(y.cacheKey),y.destroy()}}function C(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:T,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:U}}function Zy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ky(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ef(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Ky),n.length>1&&n.sort(d||Ef),s.length>1&&s.sort(d||Ef)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function jy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Cf,i.set(n,[a])):s>=r.length?(a=new Cf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Pe};break;case"SpotLight":t={position:new I,direction:new I,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function ev(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var tv=0;function nv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function iv(i){let e=new Qy,t=ev(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Ne,a=new Ne;function o(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,w=0,S=0,M=0,T=0,E=0,C=0;c.sort(nv);for(let y=0,b=c.length;y<b;y++){let L=c[y],B=L.color,O=L.intensity,G=L.distance,q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Fi?q=L.shadow.map.texture:q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=B.r*O,u+=B.g*O,d+=B.b*O;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],O);C++}else if(L.isDirectionalLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let W=L.shadow,Z=t.get(L);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=L.shadow.matrix,w++}n.directional[f]=V,f++}else if(L.isSpotLight){let V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(B).multiplyScalar(O),V.distance=G,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[x]=V;let W=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,W.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[x]=W.matrix,L.castShadow){let Z=t.get(L);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,n.spotShadow[x]=Z,n.spotShadowMap[x]=q,M++}x++}else if(L.isRectAreaLight){let V=e.get(L);V.color.copy(B).multiplyScalar(O),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=V,m++}else if(L.isPointLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){let W=L.shadow,Z=t.get(L);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=V,g++}else if(L.isHemisphereLight){let V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(O),V.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==w||U.numPointShadows!==S||U.numSpotShadows!==M||U.numSpotMaps!==T||U.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,U.directionalLength=f,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=w,U.numPointShadows=S,U.numSpotShadows=M,U.numSpotMaps=T,U.numLightProbes=C,n.version=tv++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let S=c[p];if(S.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(S.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Rf(i){let e=new iv(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function sv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Rf(i),e.set(s,[o])):r>=a.length?(o=new Rf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ov=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],lv=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],If=new Ne,Ar=new I,Th=new I;function cv(i,e,t){let n=new Qn,s=new Ie,r=new Ie,a=new at,o=new za,l=new Va,c={},h=t.maxTextureSize,u={[kn]:kt,[kt]:kn,[bn]:bn},d=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:rv,fragmentShader:av}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new _t;g.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Tt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let p=this.type;this.render=function(E,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;E.type===_d&&(Me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=mr);let y=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(wn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let O=p!==this.type;O&&C.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(q=>q.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,q=E.length;G<q;G++){let V=E[G],W=V.shadow;if(W===void 0){Me("WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let Z=W.getFrameExtents();if(s.multiply(Z),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,W.mapSize.y=r.y)),W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===xs){if(V.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new jt(s.x,s.y,{format:Fi,type:An,minFilter:At,magFilter:At,generateMipmaps:!1}),W.map.texture.name=V.name+".shadowMap",W.map.depthTexture=new ei(s.x,s.y,Ot),W.map.depthTexture.name=V.name+".shadowMapDepth",W.map.depthTexture.format=Sn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Mt,W.map.depthTexture.magFilter=Mt}else{V.isPointLight?(W.map=new tr(s.x),W.map.depthTexture=new Fa(s.x,an)):(W.map=new jt(s.x,s.y),W.map.depthTexture=new ei(s.x,s.y,an)),W.map.depthTexture.name=V.name+".shadowMap",W.map.depthTexture.format=Sn;let ae=i.state.buffers.depth.getReversed();this.type===mr?(W.map.depthTexture.compareFunction=ae?$o:Jo,W.map.depthTexture.minFilter=At,W.map.depthTexture.magFilter=At):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Mt,W.map.depthTexture.magFilter=Mt)}W.camera.updateProjectionMatrix()}let he=W.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<he;ae++){if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(W.map),i.clear());let ue=W.getViewport(ae);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),B.viewport(a)}if(V.isPointLight){let ue=W.camera,ze=W.matrix,Fe=V.distance||ue.far;Fe!==ue.far&&(ue.far=Fe,ue.updateProjectionMatrix()),Ar.setFromMatrixPosition(V.matrixWorld),ue.position.copy(Ar),Th.copy(ue.position),Th.add(ov[ae]),ue.up.copy(lv[ae]),ue.lookAt(Th),ue.updateMatrixWorld(),ze.makeTranslation(-Ar.x,-Ar.y,-Ar.z),If.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),W._frustum.setFromProjectionMatrix(If,ue.coordinateSystem,ue.reversedDepth)}else W.updateMatrices(V);n=W.getFrustum(),M(C,U,W.camera,V,this.type)}W.isPointLightShadow!==!0&&this.type===xs&&w(W,U),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,b,L)};function w(E,C){let U=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new jt(s.x,s.y,{format:Fi,type:An})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,U,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,U,f,x,null)}function S(E,C,U,y){let b=null,L=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)b=L;else if(b=U.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let B=b.uuid,O=C.uuid,G=c[B];G===void 0&&(G={},c[B]=G);let q=G[O];q===void 0&&(q=b.clone(),G[O]=q,C.addEventListener("dispose",T)),b=q}if(b.visible=C.visible,b.wireframe=C.wireframe,y===xs?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=i.properties.get(b);B.light=U}return b}function M(E,C,U,y,b){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===xs)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);let O=e.update(E),G=E.material;if(Array.isArray(G)){let q=O.groups;for(let V=0,W=q.length;V<W;V++){let Z=q[V],he=G[Z.materialIndex];if(he&&he.visible){let ae=S(E,he,y,b);E.onBeforeShadow(i,E,C,U,O,ae,Z),i.renderBufferDirect(U,null,O,ae,E,Z),E.onAfterShadow(i,E,C,U,O,ae,Z)}}}else if(G.visible){let q=S(E,G,y,b);E.onBeforeShadow(i,E,C,U,O,q,null),i.renderBufferDirect(U,null,O,q,E,null),E.onAfterShadow(i,E,C,U,O,q,null)}}let B=E.children;for(let O=0,G=B.length;O<G;O++)M(B[O],C,U,y,b)}function T(E){E.target.removeEventListener("dispose",T);for(let U in c){let y=c[U],b=E.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}var hv={[Za]:Ka,[ja]:to,[Qa]:no,[Ti]:eo,[Ka]:Za,[to]:ja,[no]:Qa,[eo]:Ti};function uv(i,e){function t(){let P=!1,ce=new at,ee=null,de=new at(0,0,0,0);return{setMask:function(j){ee!==j&&!P&&(i.colorMask(j,j,j,j),ee=j)},setLocked:function(j){P=j},setClear:function(j,J,te,Re,nt){nt===!0&&(j*=Re,J*=Re,te*=Re),ce.set(j,J,te,Re),de.equals(ce)===!1&&(i.clearColor(j,J,te,Re),de.copy(ce))},reset:function(){P=!1,ee=null,de.set(-1,0,0,0)}}}function n(){let P=!1,ce=!1,ee=null,de=null,j=null;return{setReversed:function(J){if(ce!==J){let te=e.get("EXT_clip_control");J?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT),ce=J;let Re=j;j=null,this.setClear(Re)}},getReversed:function(){return ce},setTest:function(J){J?K(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(J){ee!==J&&!P&&(i.depthMask(J),ee=J)},setFunc:function(J){if(ce&&(J=hv[J]),de!==J){switch(J){case Za:i.depthFunc(i.NEVER);break;case Ka:i.depthFunc(i.ALWAYS);break;case ja:i.depthFunc(i.LESS);break;case Ti:i.depthFunc(i.LEQUAL);break;case Qa:i.depthFunc(i.EQUAL);break;case eo:i.depthFunc(i.GEQUAL);break;case to:i.depthFunc(i.GREATER);break;case no:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=J}},setLocked:function(J){P=J},setClear:function(J){j!==J&&(ce&&(J=1-J),i.clearDepth(J),j=J)},reset:function(){P=!1,ee=null,de=null,j=null,ce=!1}}}function s(){let P=!1,ce=null,ee=null,de=null,j=null,J=null,te=null,Re=null,nt=null;return{setTest:function($e){P||($e?K(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function($e){ce!==$e&&!P&&(i.stencilMask($e),ce=$e)},setFunc:function($e,mn,Rn){(ee!==$e||de!==mn||j!==Rn)&&(i.stencilFunc($e,mn,Rn),ee=$e,de=mn,j=Rn)},setOp:function($e,mn,Rn){(J!==$e||te!==mn||Re!==Rn)&&(i.stencilOp($e,mn,Rn),J=$e,te=mn,Re=Rn)},setLocked:function($e){P=$e},setClear:function($e){nt!==$e&&(i.clearStencil($e),nt=$e)},reset:function(){P=!1,ce=null,ee=null,de=null,j=null,J=null,te=null,Re=null,nt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,S=null,M=null,T=null,E=null,C=new Pe(0,0,0),U=0,y=!1,b=null,L=null,B=null,O=null,G=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,W=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),V=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),V=W>=2);let he=null,ae={},ue=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),Fe=new at().fromArray(ue),lt=new at().fromArray(ze);function ot(P,ce,ee,de){let j=new Uint8Array(4),J=i.createTexture();i.bindTexture(P,J),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let te=0;te<ee;te++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,j):i.texImage2D(ce+te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,j);return J}let Y={};Y[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Ti),Oe(!1),pt(Yc),K(i.CULL_FACE),Je(wn);function K(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function pe(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function De(P,ce){return u[P]!==ce?(i.bindFramebuffer(P,ce),u[P]=ce,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ce),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function _e(P,ce){let ee=f,de=!1;if(P){ee=d.get(ce),ee===void 0&&(ee=[],d.set(ce,ee));let j=P.textures;if(ee.length!==j.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let J=0,te=j.length;J<te;J++)ee[J]=i.COLOR_ATTACHMENT0+J;ee.length=j.length,de=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,de=!0);de&&i.drawBuffers(ee)}function We(P){return g!==P?(i.useProgram(P),g=P,!0):!1}let vt={[Kn]:i.FUNC_ADD,[yd]:i.FUNC_SUBTRACT,[vd]:i.FUNC_REVERSE_SUBTRACT};vt[Sd]=i.MIN,vt[Md]=i.MAX;let He={[bd]:i.ZERO,[wd]:i.ONE,[Ad]:i.SRC_COLOR,[ya]:i.SRC_ALPHA,[Pd]:i.SRC_ALPHA_SATURATE,[Rd]:i.DST_COLOR,[Ed]:i.DST_ALPHA,[Td]:i.ONE_MINUS_SRC_COLOR,[va]:i.ONE_MINUS_SRC_ALPHA,[Id]:i.ONE_MINUS_DST_COLOR,[Cd]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Dd]:i.ONE_MINUS_CONSTANT_COLOR,[Nd]:i.CONSTANT_ALPHA,[Ud]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(P,ce,ee,de,j,J,te,Re,nt,$e){if(P===wn){x===!0&&(pe(i.BLEND),x=!1);return}if(x===!1&&(K(i.BLEND),x=!0),P!==xd){if(P!==m||$e!==y){if((p!==Kn||M!==Kn)&&(i.blendEquation(i.FUNC_ADD),p=Kn,M=Kn),$e)switch(P){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jc:i.blendFunc(i.ONE,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Te("WebGLState: Invalid blending: ",P);break}else switch(P){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $c:Te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zc:Te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Te("WebGLState: Invalid blending: ",P);break}w=null,S=null,T=null,E=null,C.set(0,0,0),U=0,m=P,y=$e}return}j=j||ce,J=J||ee,te=te||de,(ce!==p||j!==M)&&(i.blendEquationSeparate(vt[ce],vt[j]),p=ce,M=j),(ee!==w||de!==S||J!==T||te!==E)&&(i.blendFuncSeparate(He[ee],He[de],He[J],He[te]),w=ee,S=de,T=J,E=te),(Re.equals(C)===!1||nt!==U)&&(i.blendColor(Re.r,Re.g,Re.b,nt),C.copy(Re),U=nt),m=P,y=!1}function Qe(P,ce){P.side===bn?pe(i.CULL_FACE):K(i.CULL_FACE);let ee=P.side===kt;ce&&(ee=!ee),Oe(ee),P.blending===Ai&&P.transparent===!1?Je(wn):Je(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let de=P.stencilWrite;o.setTest(de),de&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),mt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(P){b!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),b=P)}function pt(P){P!==md?(K(i.CULL_FACE),P!==L&&(P===Yc?i.cullFace(i.BACK):P===gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),L=P}function R(P){P!==B&&(V&&i.lineWidth(P),B=P)}function mt(P,ce,ee){P?(K(i.POLYGON_OFFSET_FILL),(O!==ce||G!==ee)&&(i.polygonOffset(ce,ee),O=ce,G=ee)):pe(i.POLYGON_OFFSET_FILL)}function qe(P){P?K(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function tt(P){P===void 0&&(P=i.TEXTURE0+q-1),he!==P&&(i.activeTexture(P),he=P)}function ye(P,ce,ee){ee===void 0&&(he===null?ee=i.TEXTURE0+q-1:ee=he);let de=ae[ee];de===void 0&&(de={type:void 0,texture:void 0},ae[ee]=de),(de.type!==P||de.texture!==ce)&&(he!==ee&&(i.activeTexture(ee),he=ee),i.bindTexture(P,ce||Y[P]),de.type=P,de.texture=ce)}function A(){let P=ae[he];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(P){Te("WebGLState:",P)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(P){Te("WebGLState:",P)}}function X(){try{i.texSubImage2D(...arguments)}catch(P){Te("WebGLState:",P)}}function $(){try{i.texSubImage3D(...arguments)}catch(P){Te("WebGLState:",P)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Te("WebGLState:",P)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Te("WebGLState:",P)}}function ne(){try{i.texStorage2D(...arguments)}catch(P){Te("WebGLState:",P)}}function xe(){try{i.texStorage3D(...arguments)}catch(P){Te("WebGLState:",P)}}function Ce(){try{i.texImage2D(...arguments)}catch(P){Te("WebGLState:",P)}}function Q(){try{i.texImage3D(...arguments)}catch(P){Te("WebGLState:",P)}}function se(P){Fe.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Fe.copy(P))}function ge(P){lt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),lt.copy(P))}function ve(P,ce){let ee=c.get(ce);ee===void 0&&(ee=new WeakMap,c.set(ce,ee));let de=ee.get(P);de===void 0&&(de=i.getUniformBlockIndex(ce,P.name),ee.set(P,de))}function ie(P,ce){let de=c.get(ce).get(P);l.get(ce)!==de&&(i.uniformBlockBinding(ce,de,P.__bindingPointIndex),l.set(ce,de))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},he=null,ae={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,S=null,M=null,T=null,E=null,C=new Pe(0,0,0),U=0,y=!1,b=null,L=null,B=null,O=null,G=null,Fe.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:pe,bindFramebuffer:De,drawBuffers:_e,useProgram:We,setBlending:Je,setMaterial:Qe,setFlipSided:Oe,setCullFace:pt,setLineWidth:R,setPolygonOffset:mt,setScissorTest:qe,activeTexture:tt,bindTexture:ye,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:D,texImage2D:Ce,texImage3D:Q,updateUBOMapping:ve,uniformBlockBinding:ie,texStorage2D:ne,texStorage3D:xe,texSubImage2D:X,texSubImage3D:$,compressedTexSubImage2D:H,compressedTexSubImage3D:Se,scissor:se,viewport:ge,reset:Be}}function dv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return f?new OffscreenCanvas(A,_):cs("canvas")}function x(A,_,D){let X=1,$=ye(A);if(($.width>D||$.height>D)&&(X=D/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let H=Math.floor(X*$.width),Se=Math.floor(X*$.height);u===void 0&&(u=g(H,Se));let ne=_?g(H,Se):u;return ne.width=H,ne.height=Se,ne.getContext("2d").drawImage(A,0,0,H,Se),Me("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+H+"x"+Se+")."),ne}else return"data"in A&&Me("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,_,D,X,$=!1){if(A!==null){if(i[A]!==void 0)return i[A];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let H=_;if(_===i.RED&&(D===i.FLOAT&&(H=i.R32F),D===i.HALF_FLOAT&&(H=i.R16F),D===i.UNSIGNED_BYTE&&(H=i.R8)),_===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.R8UI),D===i.UNSIGNED_SHORT&&(H=i.R16UI),D===i.UNSIGNED_INT&&(H=i.R32UI),D===i.BYTE&&(H=i.R8I),D===i.SHORT&&(H=i.R16I),D===i.INT&&(H=i.R32I)),_===i.RG&&(D===i.FLOAT&&(H=i.RG32F),D===i.HALF_FLOAT&&(H=i.RG16F),D===i.UNSIGNED_BYTE&&(H=i.RG8)),_===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.RG8UI),D===i.UNSIGNED_SHORT&&(H=i.RG16UI),D===i.UNSIGNED_INT&&(H=i.RG32UI),D===i.BYTE&&(H=i.RG8I),D===i.SHORT&&(H=i.RG16I),D===i.INT&&(H=i.RG32I)),_===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.RGB8UI),D===i.UNSIGNED_SHORT&&(H=i.RGB16UI),D===i.UNSIGNED_INT&&(H=i.RGB32UI),D===i.BYTE&&(H=i.RGB8I),D===i.SHORT&&(H=i.RGB16I),D===i.INT&&(H=i.RGB32I)),_===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),D===i.UNSIGNED_INT&&(H=i.RGBA32UI),D===i.BYTE&&(H=i.RGBA8I),D===i.SHORT&&(H=i.RGBA16I),D===i.INT&&(H=i.RGBA32I)),_===i.RGB&&(D===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(H=i.R11F_G11F_B10F)),_===i.RGBA){let Se=$?qs:Ge.getTransfer(X);D===i.FLOAT&&(H=i.RGBA32F),D===i.HALF_FLOAT&&(H=i.RGBA16F),D===i.UNSIGNED_BYTE&&(H=Se===Ye?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function M(A,_){let D;return A?_===null||_===an||_===vs?D=i.DEPTH24_STENCIL8:_===Ot?D=i.DEPTH32F_STENCIL8:_===ys&&(D=i.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===an||_===vs?D=i.DEPTH_COMPONENT24:_===Ot?D=i.DEPTH_COMPONENT32F:_===ys&&(D=i.DEPTH_COMPONENT16),D}function T(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Mt&&A.minFilter!==At?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function E(A){let _=A.target;_.removeEventListener("dispose",E),U(_),_.isVideoTexture&&h.delete(_)}function C(A){let _=A.target;_.removeEventListener("dispose",C),b(_)}function U(A){let _=n.get(A);if(_.__webglInit===void 0)return;let D=A.source,X=d.get(D);if(X){let $=X[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&y(A),Object.keys(X).length===0&&d.delete(D)}n.remove(A)}function y(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let D=A.source,X=d.get(D);delete X[_.__cacheKey],a.memory.textures--}function b(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let $=0;$<_.__webglFramebuffer[X].length;$++)i.deleteFramebuffer(_.__webglFramebuffer[X][$]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let D=A.textures;for(let X=0,$=D.length;X<$;X++){let H=n.get(D[X]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(D[X])}n.remove(A)}let L=0;function B(){L=0}function O(){let A=L;return A>=s.maxTextures&&Me("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function G(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function q(A,_){let D=n.get(A);if(A.isVideoTexture&&qe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&D.__version!==A.version){let X=A.image;if(X===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(D,A,_);return}}else A.isExternalTexture&&(D.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+_)}function V(A,_){let D=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){Y(D,A,_);return}else A.isExternalTexture&&(D.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+_)}function W(A,_){let D=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){Y(D,A,_);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+_)}function Z(A,_){let D=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&D.__version!==A.version){K(D,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+_)}let he={[Sa]:i.REPEAT,[yn]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},ae={[Mt]:i.NEAREST,[kd]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[At]:i.LINEAR,[ao]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},ue={[Xd]:i.NEVER,[Zd]:i.ALWAYS,[qd]:i.LESS,[Jo]:i.LEQUAL,[Yd]:i.EQUAL,[$o]:i.GEQUAL,[Jd]:i.GREATER,[$d]:i.NOTEQUAL};function ze(A,_){if(_.type===Ot&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===At||_.magFilter===ao||_.magFilter===_r||_.magFilter===ii||_.minFilter===At||_.minFilter===ao||_.minFilter===_r||_.minFilter===ii)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,he[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,he[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,he[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ae[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ae[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ue[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Mt||_.minFilter!==_r&&_.minFilter!==ii||_.type===Ot&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Fe(A,_){let D=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",E));let X=_.source,$=d.get(X);$===void 0&&($={},d.set(X,$));let H=G(_);if(H!==A.__cacheKey){$[H]===void 0&&($[H]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),$[H].usedTimes++;let Se=$[A.__cacheKey];Se!==void 0&&($[A.__cacheKey].usedTimes--,Se.usedTimes===0&&y(_)),A.__cacheKey=H,A.__webglTexture=$[H].texture}return D}function lt(A,_,D){return Math.floor(Math.floor(A/D)/_)}function ot(A,_,D,X){let H=A.updateRanges;if(H.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,D,X,_.data);else{H.sort((Q,se)=>Q.start-se.start);let Se=0;for(let Q=1;Q<H.length;Q++){let se=H[Se],ge=H[Q],ve=se.start+se.count,ie=lt(ge.start,_.width,4),Be=lt(se.start,_.width,4);ge.start<=ve+1&&ie===Be&&lt(ge.start+ge.count-1,_.width,4)===ie?se.count=Math.max(se.count,ge.start+ge.count-se.start):(++Se,H[Se]=ge)}H.length=Se+1;let ne=i.getParameter(i.UNPACK_ROW_LENGTH),xe=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Q=0,se=H.length;Q<se;Q++){let ge=H[Q],ve=Math.floor(ge.start/4),ie=Math.ceil(ge.count/4),Be=ve%_.width,P=Math.floor(ve/_.width),ce=ie,ee=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Be,P,ce,ee,D,X,_.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ne),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function Y(A,_,D){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);let $=Fe(A,_),H=_.source;t.bindTexture(X,A.__webglTexture,i.TEXTURE0+D);let Se=n.get(H);if(H.version!==Se.__version||$===!0){t.activeTexture(i.TEXTURE0+D);let ne=Ge.getPrimaries(Ge.workingColorSpace),xe=_.colorSpace===Gn?null:Ge.getPrimaries(_.colorSpace),Ce=_.colorSpace===Gn||ne===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Q=x(_.image,!1,s.maxTextureSize);Q=tt(_,Q);let se=r.convert(_.format,_.colorSpace),ge=r.convert(_.type),ve=S(_.internalFormat,se,ge,_.colorSpace,_.isVideoTexture);ze(X,_);let ie,Be=_.mipmaps,P=_.isVideoTexture!==!0,ce=Se.__version===void 0||$===!0,ee=H.dataReady,de=T(_,Q);if(_.isDepthTexture)ve=M(_.format===si,_.type),ce&&(P?t.texStorage2D(i.TEXTURE_2D,1,ve,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,ve,Q.width,Q.height,0,se,ge,null));else if(_.isDataTexture)if(Be.length>0){P&&ce&&t.texStorage2D(i.TEXTURE_2D,de,ve,Be[0].width,Be[0].height);for(let j=0,J=Be.length;j<J;j++)ie=Be[j],P?ee&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ie.width,ie.height,se,ge,ie.data):t.texImage2D(i.TEXTURE_2D,j,ve,ie.width,ie.height,0,se,ge,ie.data);_.generateMipmaps=!1}else P?(ce&&t.texStorage2D(i.TEXTURE_2D,de,ve,Q.width,Q.height),ee&&ot(_,Q,se,ge)):t.texImage2D(i.TEXTURE_2D,0,ve,Q.width,Q.height,0,se,ge,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){P&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ve,Be[0].width,Be[0].height,Q.depth);for(let j=0,J=Be.length;j<J;j++)if(ie=Be[j],_.format!==Bt)if(se!==null)if(P){if(ee)if(_.layerUpdates.size>0){let te=vh(ie.width,ie.height,_.format,_.type);for(let Re of _.layerUpdates){let nt=ie.data.subarray(Re*te/ie.data.BYTES_PER_ELEMENT,(Re+1)*te/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Re,ie.width,ie.height,1,se,nt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ie.width,ie.height,Q.depth,se,ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ve,ie.width,ie.height,Q.depth,0,ie.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ie.width,ie.height,Q.depth,se,ge,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,ve,ie.width,ie.height,Q.depth,0,se,ge,ie.data)}else{P&&ce&&t.texStorage2D(i.TEXTURE_2D,de,ve,Be[0].width,Be[0].height);for(let j=0,J=Be.length;j<J;j++)ie=Be[j],_.format!==Bt?se!==null?P?ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,ie.width,ie.height,se,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,j,ve,ie.width,ie.height,0,ie.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ee&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ie.width,ie.height,se,ge,ie.data):t.texImage2D(i.TEXTURE_2D,j,ve,ie.width,ie.height,0,se,ge,ie.data)}else if(_.isDataArrayTexture)if(P){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ve,Q.width,Q.height,Q.depth),ee)if(_.layerUpdates.size>0){let j=vh(Q.width,Q.height,_.format,_.type);for(let J of _.layerUpdates){let te=Q.data.subarray(J*j/Q.data.BYTES_PER_ELEMENT,(J+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,Q.width,Q.height,1,se,ge,te)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,se,ge,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,Q.width,Q.height,Q.depth,0,se,ge,Q.data);else if(_.isData3DTexture)P?(ce&&t.texStorage3D(i.TEXTURE_3D,de,ve,Q.width,Q.height,Q.depth),ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,se,ge,Q.data)):t.texImage3D(i.TEXTURE_3D,0,ve,Q.width,Q.height,Q.depth,0,se,ge,Q.data);else if(_.isFramebufferTexture){if(ce)if(P)t.texStorage2D(i.TEXTURE_2D,de,ve,Q.width,Q.height);else{let j=Q.width,J=Q.height;for(let te=0;te<de;te++)t.texImage2D(i.TEXTURE_2D,te,ve,j,J,0,se,ge,null),j>>=1,J>>=1}}else if(Be.length>0){if(P&&ce){let j=ye(Be[0]);t.texStorage2D(i.TEXTURE_2D,de,ve,j.width,j.height)}for(let j=0,J=Be.length;j<J;j++)ie=Be[j],P?ee&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,se,ge,ie):t.texImage2D(i.TEXTURE_2D,j,ve,se,ge,ie);_.generateMipmaps=!1}else if(P){if(ce){let j=ye(Q);t.texStorage2D(i.TEXTURE_2D,de,ve,j.width,j.height)}ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,ge,Q)}else t.texImage2D(i.TEXTURE_2D,0,ve,se,ge,Q);m(_)&&p(X),Se.__version=H.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function K(A,_,D){if(_.image.length!==6)return;let X=Fe(A,_),$=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+D);let H=n.get($);if($.version!==H.__version||X===!0){t.activeTexture(i.TEXTURE0+D);let Se=Ge.getPrimaries(Ge.workingColorSpace),ne=_.colorSpace===Gn?null:Ge.getPrimaries(_.colorSpace),xe=_.colorSpace===Gn||Se===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Ce=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,se=[];for(let J=0;J<6;J++)!Ce&&!Q?se[J]=x(_.image[J],!0,s.maxCubemapSize):se[J]=Q?_.image[J].image:_.image[J],se[J]=tt(_,se[J]);let ge=se[0],ve=r.convert(_.format,_.colorSpace),ie=r.convert(_.type),Be=S(_.internalFormat,ve,ie,_.colorSpace),P=_.isVideoTexture!==!0,ce=H.__version===void 0||X===!0,ee=$.dataReady,de=T(_,ge);ze(i.TEXTURE_CUBE_MAP,_);let j;if(Ce){P&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Be,ge.width,ge.height);for(let J=0;J<6;J++){j=se[J].mipmaps;for(let te=0;te<j.length;te++){let Re=j[te];_.format!==Bt?ve!==null?P?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te,0,0,Re.width,Re.height,ve,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te,Be,Re.width,Re.height,0,Re.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te,0,0,Re.width,Re.height,ve,ie,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te,Be,Re.width,Re.height,0,ve,ie,Re.data)}}}else{if(j=_.mipmaps,P&&ce){j.length>0&&de++;let J=ye(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Be,J.width,J.height)}for(let J=0;J<6;J++)if(Q){P?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,se[J].width,se[J].height,ve,ie,se[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,se[J].width,se[J].height,0,ve,ie,se[J].data);for(let te=0;te<j.length;te++){let nt=j[te].image[J].image;P?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te+1,0,0,nt.width,nt.height,ve,ie,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te+1,Be,nt.width,nt.height,0,ve,ie,nt.data)}}else{P?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve,ie,se[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,ve,ie,se[J]);for(let te=0;te<j.length;te++){let Re=j[te];P?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te+1,0,0,ve,ie,Re.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te+1,Be,ve,ie,Re.image[J])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),H.__version=$.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function pe(A,_,D,X,$,H){let Se=r.convert(D.format,D.colorSpace),ne=r.convert(D.type),xe=S(D.internalFormat,Se,ne,D.colorSpace),Ce=n.get(_),Q=n.get(D);if(Q.__renderTarget=_,!Ce.__hasExternalTextures){let se=Math.max(1,_.width>>H),ge=Math.max(1,_.height>>H);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,H,xe,se,ge,_.depth,0,Se,ne,null):t.texImage2D($,H,xe,se,ge,0,Se,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),mt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,$,Q.__webglTexture,0,R(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,$,Q.__webglTexture,H),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(A,_,D){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let X=_.depthTexture,$=X&&X.isDepthTexture?X.type:null,H=M(_.stencilBuffer,$),Se=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(_),H,_.width,_.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(_),H,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,H,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,A)}else{let X=_.textures;for(let $=0;$<X.length;$++){let H=X[$],Se=r.convert(H.format,H.colorSpace),ne=r.convert(H.type),xe=S(H.internalFormat,Se,ne,H.colorSpace);mt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(_),xe,_.width,_.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(_),xe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,xe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(A,_,D){let X=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(_.depthTexture);if($.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,_.depthTexture.addEventListener("dispose",E)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ze(i.TEXTURE_CUBE_MAP,_.depthTexture);let Ce=r.convert(_.depthTexture.format),Q=r.convert(_.depthTexture.type),se;_.depthTexture.format===Sn?se=i.DEPTH_COMPONENT24:_.depthTexture.format===si&&(se=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,se,_.width,_.height,0,Ce,Q,null)}}else q(_.depthTexture,0);let H=$.__webglTexture,Se=R(_),ne=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,xe=_.depthTexture.format===si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Sn)mt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,ne,H,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,xe,ne,H,0);else if(_.depthTexture.format===si)mt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,ne,H,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,xe,ne,H,0);else throw new Error("Unknown depthTexture format")}function We(A){let _=n.get(A),D=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let X=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){let $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=X}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(D)for(let X=0;X<6;X++)_e(_.__webglFramebuffer[X],A,X);else{let X=A.texture.mipmaps;X&&X.length>0?_e(_.__webglFramebuffer[0],A,0):_e(_.__webglFramebuffer,A,0)}else if(D){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),De(_.__webglDepthbuffer[X],A,!1);else{let $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,H)}}else{let X=A.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),De(_.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,H)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(A,_,D){let X=n.get(A);_!==void 0&&pe(X.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&We(A)}function He(A){let _=A.texture,D=n.get(A),X=n.get(_);A.addEventListener("dispose",C);let $=A.textures,H=A.isWebGLCubeRenderTarget===!0,Se=$.length>1;if(Se||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,a.memory.textures++),H){D.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[ne]=[];for(let xe=0;xe<_.mipmaps.length;xe++)D.__webglFramebuffer[ne][xe]=i.createFramebuffer()}else D.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let ne=0;ne<_.mipmaps.length;ne++)D.__webglFramebuffer[ne]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ne=0,xe=$.length;ne<xe;ne++){let Ce=n.get($[ne]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&mt(A)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ne=0;ne<$.length;ne++){let xe=$[ne];D.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[ne]);let Ce=r.convert(xe.format,xe.colorSpace),Q=r.convert(xe.type),se=S(xe.internalFormat,Ce,Q,xe.colorSpace,A.isXRRenderTarget===!0),ge=R(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,se,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,D.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),De(D.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),ze(i.TEXTURE_CUBE_MAP,_);for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)pe(D.__webglFramebuffer[ne][xe],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe);else pe(D.__webglFramebuffer[ne],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ne=0,xe=$.length;ne<xe;ne++){let Ce=$[ne],Q=n.get(Ce),se=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(se=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,Q.__webglTexture),ze(se,Ce),pe(D.__webglFramebuffer,A,Ce,i.COLOR_ATTACHMENT0+ne,se,0),m(Ce)&&p(se)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,X.__webglTexture),ze(ne,_),_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)pe(D.__webglFramebuffer[xe],A,_,i.COLOR_ATTACHMENT0,ne,xe);else pe(D.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,ne,0);m(_)&&p(ne),t.unbindTexture()}A.depthBuffer&&We(A)}function Je(A){let _=A.textures;for(let D=0,X=_.length;D<X;D++){let $=_[D];if(m($)){let H=w(A),Se=n.get($).__webglTexture;t.bindTexture(H,Se),p(H),t.unbindTexture()}}}let Qe=[],Oe=[];function pt(A){if(A.samples>0){if(mt(A)===!1){let _=A.textures,D=A.width,X=A.height,$=i.COLOR_BUFFER_BIT,H=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(A),ne=_.length>1;if(ne)for(let Ce=0;Ce<_.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let xe=A.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ce=0;Ce<_.length;Ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Ce]);let Q=n.get(_[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,D,X,0,0,D,X,$,i.NEAREST),l===!0&&(Qe.length=0,Oe.length=0,Qe.push(i.COLOR_ATTACHMENT0+Ce),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Qe.push(H),Oe.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let Ce=0;Ce<_.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Ce]);let Q=n.get(_[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function R(A){return Math.min(s.maxSamples,A.samples)}function mt(A){let _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function qe(A){let _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function tt(A,_){let D=A.colorSpace,X=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||D!==Ei&&D!==Gn&&(Ge.getTransfer(D)===Ye?(X!==Bt||$!==qt)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Te("WebGLTextures: Unsupported texture color space:",D)),_}function ye(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=vt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function fv(i,e){function t(n,s=Gn){let r,a=Ge.getTransfer(s);if(n===qt)return i.UNSIGNED_BYTE;if(n===lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===rh)return i.BYTE;if(n===ah)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===oo)return i.INT;if(n===an)return i.UNSIGNED_INT;if(n===Ot)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===ch)return i.ALPHA;if(n===hh)return i.RGB;if(n===Bt)return i.RGBA;if(n===Sn)return i.DEPTH_COMPONENT;if(n===si)return i.DEPTH_STENCIL;if(n===ho)return i.RED;if(n===xr)return i.RED_INTEGER;if(n===Fi)return i.RG;if(n===uo)return i.RG_INTEGER;if(n===fo)return i.RGBA_INTEGER;if(n===yr||n===vr||n===Sr||n===Mr)if(a===Ye)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===po||n===mo||n===go||n===_o)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xo||n===yo||n===vo||n===So||n===Mo||n===bo||n===wo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xo||n===yo)return a===Ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vo)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===So)return r.COMPRESSED_R11_EAC;if(n===Mo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===bo)return r.COMPRESSED_RG11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ao||n===To||n===Eo||n===Co||n===Ro||n===Io||n===Po||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===To)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eo)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Io)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Po)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===No)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uo)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fo)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return a===Ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===zo||n===Vo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ko)return a===Ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Go||n===Ho||n===Wo||n===Xo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ar(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qt({vertexShader:pv,fragmentShader:mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new hr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uh=class extends Mn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new Nh,p={},w=t.getContextAttributes(),S=null,M=null,T=[],E=[],C=new Ie,U=null,y=new It;y.viewport=new at;let b=new It;b.viewport=new at;let L=[y,b],B=new Ya,O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=T[Y];return K===void 0&&(K=new ms,T[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=T[Y];return K===void 0&&(K=new ms,T[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=T[Y];return K===void 0&&(K=new ms,T[Y]=K),K.getHandSpace()};function q(Y){let K=E.indexOf(Y.inputSource);if(K===-1)return;let pe=T[K];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,c||a),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",W);for(let Y=0;Y<T.length;Y++){let K=E[Y];K!==null&&(E[Y]=null,T[Y].disconnect(K))}O=null,G=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(S),f=null,d=null,u=null,s=null,M=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",V),s.addEventListener("inputsourceschange",W),w.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,De=null,_e=null;w.depth&&(_e=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=w.stencil?si:Sn,De=w.stencil?vs:an);let We={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(We),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new jt(d.textureWidth,d.textureHeight,{format:Bt,type:qt,depthTexture:new ei(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let pe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new jt(f.framebufferWidth,f.framebufferHeight,{format:Bt,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(Y){for(let K=0;K<Y.removed.length;K++){let pe=Y.removed[K],De=E.indexOf(pe);De>=0&&(E[De]=null,T[De].disconnect(pe))}for(let K=0;K<Y.added.length;K++){let pe=Y.added[K],De=E.indexOf(pe);if(De===-1){for(let We=0;We<T.length;We++)if(We>=E.length){E.push(pe),De=We;break}else if(E[We]===null){E[We]=pe,De=We;break}if(De===-1)break}let _e=T[De];_e&&_e.connect(pe)}}let Z=new I,he=new I;function ae(Y,K,pe){Z.setFromMatrixPosition(K.matrixWorld),he.setFromMatrixPosition(pe.matrixWorld);let De=Z.distanceTo(he),_e=K.projectionMatrix.elements,We=pe.projectionMatrix.elements,vt=_e[14]/(_e[10]-1),He=_e[14]/(_e[10]+1),Je=(_e[9]+1)/_e[5],Qe=(_e[9]-1)/_e[5],Oe=(_e[8]-1)/_e[0],pt=(We[8]+1)/We[0],R=vt*Oe,mt=vt*pt,qe=De/(-Oe+pt),tt=qe*-Oe;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(tt),Y.translateZ(qe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_e[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let ye=vt+qe,A=He+qe,_=R-tt,D=mt+(De-tt),X=Je*He/A*ye,$=Qe*He/A*ye;Y.projectionMatrix.makePerspective(_,D,X,$,ye,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ue(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let K=Y.near,pe=Y.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),B.near=b.near=y.near=K,B.far=b.far=y.far=pe,(O!==B.near||G!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),O=B.near,G=B.far),B.layers.mask=Y.layers.mask|6,y.layers.mask=B.layers.mask&3,b.layers.mask=B.layers.mask&5;let De=Y.parent,_e=B.cameras;ue(B,De);for(let We=0;We<_e.length;We++)ue(_e[We],De);_e.length===2?ae(B,y,b):B.projectionMatrix.copy(y.projectionMatrix),ze(Y,B,De)};function ze(Y,K,pe){pe===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ci*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Y){return p[Y]};let Fe=null;function lt(Y,K){if(h=K.getViewerPose(c||a),g=K,h!==null){let pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let De=!1;pe.length!==B.cameras.length&&(B.cameras.length=0,De=!0);for(let He=0;He<pe.length;He++){let Je=pe[He],Qe=null;if(f!==null)Qe=f.getViewport(Je);else{let pt=u.getViewSubImage(d,Je);Qe=pt.viewport,He===0&&(e.setRenderTargetTextures(M,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(M))}let Oe=L[He];Oe===void 0&&(Oe=new It,Oe.layers.enable(He),Oe.viewport=new at,L[He]=Oe),Oe.matrix.fromArray(Je.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Je.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),He===0&&(B.matrix.copy(Oe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),De===!0&&B.cameras.push(Oe)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let He=u.getDepthInformation(pe[0]);He&&He.isValid&&He.texture&&m.init(He,s.renderState)}if(_e&&_e.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let He=0;He<pe.length;He++){let Je=pe[He].camera;if(Je){let Qe=p[Je];Qe||(Qe=new ar,p[Je]=Qe);let Oe=u.getCameraImage(Je);Qe.sourceTexture=Oe}}}}for(let pe=0;pe<T.length;pe++){let De=E[pe],_e=T[pe];De!==null&&_e!==void 0&&_e.update(De,K,c||a)}Fe&&Fe(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let ot=new Lf;ot.setAnimationLoop(lt),this.setAnimationLoop=function(Y){Fe=Y},this.dispose=function(){}}},ki=new sn,gv=new Ne;function _v(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),S=w.envMap,M=w.envMapRotation;S&&(m.envMap.value=S,ki.copy(M),ki.x*=-1,ki.y*=-1,ki.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(gv.makeRotationFromEuler(ki)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){let M=S.program;n.uniformBlockBinding(w,M)}function c(w,S){let M=s[w.id];M===void 0&&(g(w),M=h(w),s[w.id]=M,w.addEventListener("dispose",m));let T=S.program;n.updateUBOMapping(w,T);let E=e.render.frame;r[w.id]!==E&&(d(w),r[w.id]=E)}function h(w){let S=u();w.__bindingPointIndex=S;let M=i.createBuffer(),T=w.__size,E=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return Te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let S=s[w.id],M=w.uniforms,T=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,C=M.length;E<C;E++){let U=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,b=U.length;y<b;y++){let L=U[y];if(f(L,E,y,T)===!0){let B=L.__offset,O=Array.isArray(L.value)?L.value:[L.value],G=0;for(let q=0;q<O.length;q++){let V=O[q],W=x(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,B+G,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,G),G+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,S,M,T){let E=w.value,C=S+"_"+M;if(T[C]===void 0)return typeof E=="number"||typeof E=="boolean"?T[C]=E:T[C]=E.clone(),!0;{let U=T[C];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return T[C]=E,!0}else if(U.equals(E)===!1)return U.copy(E),!0}return!1}function g(w){let S=w.uniforms,M=0,T=16;for(let C=0,U=S.length;C<U;C++){let y=Array.isArray(S[C])?S[C]:[S[C]];for(let b=0,L=y.length;b<L;b++){let B=y[b],O=Array.isArray(B.value)?B.value:[B.value];for(let G=0,q=O.length;G<q;G++){let V=O[G],W=x(V),Z=M%T,he=Z%W.boundary,ae=Z+he;M+=he,ae!==0&&T-ae<W.storage&&(M+=T-ae),B.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=W.storage}}}let E=M%T;return E>0&&(M+=T-E),w.__size=M,w.__cache={},this}function x(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Me("WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){let S=w.target;S.removeEventListener("dispose",m);let M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var yv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Tn=null;function vv(){return Tn===null&&(Tn=new Bn(yv,16,16,Fi,An),Tn.name="DFG_LUT",Tn.minFilter=At,Tn.magFilter=At,Tn.wrapS=yn,Tn.wrapT=yn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}var Pf=class{constructor(e={}){let{canvas:t=jd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=qt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=f,m=new Set([fo,uo,xr]),p=new Set([qt,an,ys,vs,lo,co]),w=new Uint32Array(4),S=new Int32Array(4),M=null,T=null,E=[],C=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,b=!1;this._outputColorSpace=Kt;let L=0,B=0,O=null,G=-1,q=null,V=new at,W=new at,Z=null,he=new Pe(0),ae=0,ue=t.width,ze=t.height,Fe=1,lt=null,ot=null,Y=new at(0,0,ue,ze),K=new at(0,0,ue,ze),pe=!1,De=new Qn,_e=!1,We=!1,vt=new Ne,He=new I,Je=new at,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function pt(){return O===null?Fe:1}let R=n;function mt(v,N){return t.getContext(v,N)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",$e,!1),R===null){let N="webgl2";if(R=mt(N,v),R===null)throw mt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw Te("WebGLRenderer: "+v.message),v}let qe,tt,ye,A,_,D,X,$,H,Se,ne,xe,Ce,Q,se,ge,ve,ie,Be,P,ce,ee,de,j;function J(){qe=new Ex(R),qe.init(),ee=new fv(R,qe),tt=new xx(R,qe,e,ee),ye=new uv(R,qe),tt.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),A=new Ix(R),_=new Zy,D=new dv(R,qe,ye,_,tt,ee,A),X=new vx(y),$=new Tx(y),H=new Ng(R),de=new gx(R,H),Se=new Cx(R,H,A,de),ne=new Lx(R,Se,H,A),Be=new Px(R,tt,D),ge=new yx(_),xe=new $y(y,X,$,qe,tt,de,ge),Ce=new _v(y,_),Q=new jy,se=new sv(qe),ie=new mx(y,X,$,ye,ne,g,l),ve=new cv(y,ne,tt),j=new xv(R,A,tt,ye),P=new _x(R,qe,A),ce=new Rx(R,qe,A),A.programs=xe.programs,y.capabilities=tt,y.extensions=qe,y.properties=_,y.renderLists=Q,y.shadowMap=ve,y.state=ye,y.info=A}J(),x!==qt&&(U=new Nx(x,t.width,t.height,s,r));let te=new Uh(y,R);this.xr=te,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let v=qe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=qe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(v){v!==void 0&&(Fe=v,this.setSize(ue,ze,!1))},this.getSize=function(v){return v.set(ue,ze)},this.setSize=function(v,N,z=!0){if(te.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=v,ze=N,t.width=Math.floor(v*Fe),t.height=Math.floor(N*Fe),z===!0&&(t.style.width=v+"px",t.style.height=N+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(ue*Fe,ze*Fe).floor()},this.setDrawingBufferSize=function(v,N,z){ue=v,ze=N,Fe=z,t.width=Math.floor(v*z),t.height=Math.floor(N*z),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(x===qt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(V)},this.getViewport=function(v){return v.copy(Y)},this.setViewport=function(v,N,z,k){v.isVector4?Y.set(v.x,v.y,v.z,v.w):Y.set(v,N,z,k),ye.viewport(V.copy(Y).multiplyScalar(Fe).round())},this.getScissor=function(v){return v.copy(K)},this.setScissor=function(v,N,z,k){v.isVector4?K.set(v.x,v.y,v.z,v.w):K.set(v,N,z,k),ye.scissor(W.copy(K).multiplyScalar(Fe).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(v){ye.setScissorTest(pe=v)},this.setOpaqueSort=function(v){lt=v},this.setTransparentSort=function(v){ot=v},this.getClearColor=function(v){return v.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,z=!0){let k=0;if(v){let F=!1;if(O!==null){let re=O.texture.format;F=m.has(re)}if(F){let re=O.texture.type,fe=p.has(re),le=ie.getClearColor(),me=ie.getClearAlpha(),be=le.r,Ee=le.g,we=le.b;fe?(w[0]=be,w[1]=Ee,w[2]=we,w[3]=me,R.clearBufferuiv(R.COLOR,0,w)):(S[0]=be,S[1]=Ee,S[2]=we,S[3]=me,R.clearBufferiv(R.COLOR,0,S))}else k|=R.COLOR_BUFFER_BIT}N&&(k|=R.DEPTH_BUFFER_BIT),z&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",$e,!1),ie.dispose(),Q.dispose(),se.dispose(),_.dispose(),X.dispose(),$.dispose(),ne.dispose(),de.dispose(),j.dispose(),xe.dispose(),te.dispose(),te.removeEventListener("sessionstart",xu),te.removeEventListener("sessionend",yu),di.stop()};function Re(v){v.preventDefault(),Js("WebGLRenderer: Context Lost."),b=!0}function nt(){Js("WebGLRenderer: Context Restored."),b=!1;let v=A.autoReset,N=ve.enabled,z=ve.autoUpdate,k=ve.needsUpdate,F=ve.type;J(),A.autoReset=v,ve.enabled=N,ve.autoUpdate=z,ve.needsUpdate=k,ve.type=F}function $e(v){Te("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function mn(v){let N=v.target;N.removeEventListener("dispose",mn),Rn(N)}function Rn(v){Kp(v),_.remove(v)}function Kp(v){let N=_.get(v).programs;N!==void 0&&(N.forEach(function(z){xe.releaseProgram(z)}),v.isShaderMaterial&&xe.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,z,k,F,re){N===null&&(N=Qe);let fe=F.isMesh&&F.matrixWorld.determinant()<0,le=Qp(v,N,z,k,F);ye.setMaterial(k,fe);let me=z.index,be=1;if(k.wireframe===!0){if(me=Se.getWireframeAttribute(z),me===void 0)return;be=2}let Ee=z.drawRange,we=z.attributes.position,Ve=Ee.start*be,je=(Ee.start+Ee.count)*be;re!==null&&(Ve=Math.max(Ve,re.start*be),je=Math.min(je,(re.start+re.count)*be)),me!==null?(Ve=Math.max(Ve,0),je=Math.min(je,me.count)):we!=null&&(Ve=Math.max(Ve,0),je=Math.min(je,we.count));let ht=je-Ve;if(ht<0||ht===1/0)return;de.setup(F,k,le,z,me);let ut,et=P;if(me!==null&&(ut=H.get(me),et=ce,et.setIndex(ut)),F.isMesh)k.wireframe===!0?(ye.setLineWidth(k.wireframeLinewidth*pt()),et.setMode(R.LINES)):et.setMode(R.TRIANGLES);else if(F.isLine){let Ae=k.linewidth;Ae===void 0&&(Ae=1),ye.setLineWidth(Ae*pt()),F.isLineSegments?et.setMode(R.LINES):F.isLineLoop?et.setMode(R.LINE_LOOP):et.setMode(R.LINE_STRIP)}else F.isPoints?et.setMode(R.POINTS):F.isSprite&&et.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)us("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))et.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ae=F._multiDrawStarts,Ze=F._multiDrawCounts,Xe=F._multiDrawCount,Yt=me?H.get(me).bytesPerElement:1,Hi=_.get(k).currentProgram.getUniforms();for(let Jt=0;Jt<Xe;Jt++)Hi.setValue(R,"_gl_DrawID",Jt),et.render(Ae[Jt]/Yt,Ze[Jt])}else if(F.isInstancedMesh)et.renderInstances(Ve,ht,F.count);else if(z.isInstancedBufferGeometry){let Ae=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ze=Math.min(z.instanceCount,Ae);et.renderInstances(Ve,ht,Ze)}else et.render(Ve,ht)};function _u(v,N,z){v.transparent===!0&&v.side===bn&&v.forceSinglePass===!1?(v.side=kt,v.needsUpdate=!0,zr(v,N,z),v.side=kn,v.needsUpdate=!0,zr(v,N,z),v.side=bn):zr(v,N,z)}this.compile=function(v,N,z=null){z===null&&(z=v),T=se.get(z),T.init(N),C.push(T),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),v!==z&&v.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),T.setupLights();let k=new Set;return v.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let re=F.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){let le=re[fe];_u(le,z,F),k.add(le)}else _u(re,z,F),k.add(re)}),T=C.pop(),k},this.compileAsync=function(v,N,z=null){let k=this.compile(v,N,z);return new Promise(F=>{function re(){if(k.forEach(function(fe){_.get(fe).currentProgram.isReady()&&k.delete(fe)}),k.size===0){F(v);return}setTimeout(re,10)}qe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let yl=null;function jp(v){yl&&yl(v)}function xu(){di.stop()}function yu(){di.start()}let di=new Lf;di.setAnimationLoop(jp),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(v){yl=v,te.setAnimationLoop(v),v===null?di.stop():di.start()},te.addEventListener("sessionstart",xu),te.addEventListener("sessionend",yu),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){Te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;let z=te.enabled===!0&&te.isPresenting===!0,k=U!==null&&(O===null||z)&&U.begin(y,O);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(N),N=te.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,N,O),T=se.get(v,C.length),T.init(N),C.push(T),vt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),De.setFromProjectionMatrix(vt,nn,N.reversedDepth),We=this.localClippingEnabled,_e=ge.init(this.clippingPlanes,We),M=Q.get(v,E.length),M.init(),E.push(M),te.enabled===!0&&te.isPresenting===!0){let fe=y.xr.getDepthSensingMesh();fe!==null&&vl(fe,N,-1/0,y.sortObjects)}vl(v,N,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(lt,ot),Oe=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Oe&&ie.addToRenderList(M,v),this.info.render.frame++,_e===!0&&ge.beginShadows();let F=T.state.shadowsArray;if(ve.render(F,v,N),_e===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&U.hasRenderPass())===!1){let fe=M.opaque,le=M.transmissive;if(T.setupLights(),N.isArrayCamera){let me=N.cameras;if(le.length>0)for(let be=0,Ee=me.length;be<Ee;be++){let we=me[be];Su(fe,le,v,we)}Oe&&ie.render(v);for(let be=0,Ee=me.length;be<Ee;be++){let we=me[be];vu(M,v,we,we.viewport)}}else le.length>0&&Su(fe,le,v,N),Oe&&ie.render(v),vu(M,v,N)}O!==null&&B===0&&(D.updateMultisampleRenderTarget(O),D.updateRenderTargetMipmap(O)),k&&U.end(y),v.isScene===!0&&v.onAfterRender(y,v,N),de.resetDefaultState(),G=-1,q=null,C.pop(),C.length>0?(T=C[C.length-1],_e===!0&&ge.setGlobalState(y.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?M=E[E.length-1]:M=null};function vl(v,N,z,k){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||De.intersectsSprite(v)){k&&Je.setFromMatrixPosition(v.matrixWorld).applyMatrix4(vt);let fe=ne.update(v),le=v.material;le.visible&&M.push(v,fe,le,z,Je.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||De.intersectsObject(v))){let fe=ne.update(v),le=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Je.copy(v.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Je.copy(fe.boundingSphere.center)),Je.applyMatrix4(v.matrixWorld).applyMatrix4(vt)),Array.isArray(le)){let me=fe.groups;for(let be=0,Ee=me.length;be<Ee;be++){let we=me[be],Ve=le[we.materialIndex];Ve&&Ve.visible&&M.push(v,fe,Ve,z,Je.z,we)}}else le.visible&&M.push(v,fe,le,z,Je.z,null)}}let re=v.children;for(let fe=0,le=re.length;fe<le;fe++)vl(re[fe],N,z,k)}function vu(v,N,z,k){let{opaque:F,transmissive:re,transparent:fe}=v;T.setupLightsView(z),_e===!0&&ge.setGlobalState(y.clippingPlanes,z),k&&ye.viewport(V.copy(k)),F.length>0&&kr(F,N,z),re.length>0&&kr(re,N,z),fe.length>0&&kr(fe,N,z),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Su(v,N,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let Ve=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new jt(1,1,{generateMipmaps:!0,type:Ve?An:qt,minFilter:ii,samples:tt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}let re=T.state.transmissionRenderTarget[k.id],fe=k.viewport||V;re.setSize(fe.z*y.transmissionResolutionScale,fe.w*y.transmissionResolutionScale);let le=y.getRenderTarget(),me=y.getActiveCubeFace(),be=y.getActiveMipmapLevel();y.setRenderTarget(re),y.getClearColor(he),ae=y.getClearAlpha(),ae<1&&y.setClearColor(16777215,.5),y.clear(),Oe&&ie.render(z);let Ee=y.toneMapping;y.toneMapping=fn;let we=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),_e===!0&&ge.setGlobalState(y.clippingPlanes,k),kr(v,z,k),D.updateMultisampleRenderTarget(re),D.updateRenderTargetMipmap(re),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let je=0,ht=N.length;je<ht;je++){let ut=N[je],{object:et,geometry:Ae,material:Ze,group:Xe}=ut;if(Ze.side===bn&&et.layers.test(k.layers)){let Yt=Ze.side;Ze.side=kt,Ze.needsUpdate=!0,Mu(et,z,k,Ae,Ze,Xe),Ze.side=Yt,Ze.needsUpdate=!0,Ve=!0}}Ve===!0&&(D.updateMultisampleRenderTarget(re),D.updateRenderTargetMipmap(re))}y.setRenderTarget(le,me,be),y.setClearColor(he,ae),we!==void 0&&(k.viewport=we),y.toneMapping=Ee}function kr(v,N,z){let k=N.isScene===!0?N.overrideMaterial:null;for(let F=0,re=v.length;F<re;F++){let fe=v[F],{object:le,geometry:me,group:be}=fe,Ee=fe.material;Ee.allowOverride===!0&&k!==null&&(Ee=k),le.layers.test(z.layers)&&Mu(le,N,z,me,Ee,be)}}function Mu(v,N,z,k,F,re){v.onBeforeRender(y,N,z,k,F,re),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),F.onBeforeRender(y,N,z,k,v,re),F.transparent===!0&&F.side===bn&&F.forceSinglePass===!1?(F.side=kt,F.needsUpdate=!0,y.renderBufferDirect(z,N,k,F,v,re),F.side=kn,F.needsUpdate=!0,y.renderBufferDirect(z,N,k,F,v,re),F.side=bn):y.renderBufferDirect(z,N,k,F,v,re),v.onAfterRender(y,N,z,k,F,re)}function zr(v,N,z){N.isScene!==!0&&(N=Qe);let k=_.get(v),F=T.state.lights,re=T.state.shadowsArray,fe=F.state.version,le=xe.getParameters(v,F.state,re,N,z),me=xe.getProgramCacheKey(le),be=k.programs;k.environment=v.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(v.isMeshStandardMaterial?$:X).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,be===void 0&&(v.addEventListener("dispose",mn),be=new Map,k.programs=be);let Ee=be.get(me);if(Ee!==void 0){if(k.currentProgram===Ee&&k.lightsStateVersion===fe)return wu(v,le),Ee}else le.uniforms=xe.getUniforms(v),v.onBeforeCompile(le,y),Ee=xe.acquireProgram(le,me),be.set(me,Ee),k.uniforms=le.uniforms;let we=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(we.clippingPlanes=ge.uniform),wu(v,le),k.needsLights=tm(v),k.lightsStateVersion=fe,k.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Ee,k.uniformsList=null,Ee}function bu(v){if(v.uniformsList===null){let N=v.currentProgram.getUniforms();v.uniformsList=Ms.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function wu(v,N){let z=_.get(v);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Qp(v,N,z,k,F){N.isScene!==!0&&(N=Qe),D.resetTextureUnits();let re=N.fog,fe=k.isMeshStandardMaterial?N.environment:null,le=O===null?y.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ei,me=(k.isMeshStandardMaterial?$:X).get(k.envMap||fe),be=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ee=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),we=!!z.morphAttributes.position,Ve=!!z.morphAttributes.normal,je=!!z.morphAttributes.color,ht=fn;k.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ht=y.toneMapping);let ut=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,et=ut!==void 0?ut.length:0,Ae=_.get(k),Ze=T.state.lights;if(_e===!0&&(We===!0||v!==q)){let Nt=v===q&&k.id===G;ge.setState(k,v,Nt)}let Xe=!1;k.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ze.state.version||Ae.outputColorSpace!==le||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==me||k.fog===!0&&Ae.fog!==re||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ge.numPlanes||Ae.numIntersection!==ge.numIntersection)||Ae.vertexAlphas!==be||Ae.vertexTangents!==Ee||Ae.morphTargets!==we||Ae.morphNormals!==Ve||Ae.morphColors!==je||Ae.toneMapping!==ht||Ae.morphTargetsCount!==et)&&(Xe=!0):(Xe=!0,Ae.__version=k.version);let Yt=Ae.currentProgram;Xe===!0&&(Yt=zr(k,N,F));let Hi=!1,Jt=!1,Rs=!1,it=Yt.getUniforms(),Vt=Ae.uniforms;if(ye.useProgram(Yt.program)&&(Hi=!0,Jt=!0,Rs=!0),k.id!==G&&(G=k.id,Jt=!0),Hi||q!==v){ye.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),it.setValue(R,"projectionMatrix",v.projectionMatrix),it.setValue(R,"viewMatrix",v.matrixWorldInverse);let Gt=it.map.cameraPosition;Gt!==void 0&&Gt.setValue(R,He.setFromMatrixPosition(v.matrixWorld)),tt.logarithmicDepthBuffer&&it.setValue(R,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&it.setValue(R,"isOrthographic",v.isOrthographicCamera===!0),q!==v&&(q=v,Jt=!0,Rs=!0)}if(Ae.needsLights&&(Ze.state.directionalShadowMap.length>0&&it.setValue(R,"directionalShadowMap",Ze.state.directionalShadowMap,D),Ze.state.spotShadowMap.length>0&&it.setValue(R,"spotShadowMap",Ze.state.spotShadowMap,D),Ze.state.pointShadowMap.length>0&&it.setValue(R,"pointShadowMap",Ze.state.pointShadowMap,D)),F.isSkinnedMesh){it.setOptional(R,F,"bindMatrix"),it.setOptional(R,F,"bindMatrixInverse");let Nt=F.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),it.setValue(R,"boneTexture",Nt.boneTexture,D))}F.isBatchedMesh&&(it.setOptional(R,F,"batchingTexture"),it.setValue(R,"batchingTexture",F._matricesTexture,D),it.setOptional(R,F,"batchingIdTexture"),it.setValue(R,"batchingIdTexture",F._indirectTexture,D),it.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&it.setValue(R,"batchingColorTexture",F._colorsTexture,D));let en=z.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Be.update(F,z,Yt),(Jt||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,it.setValue(R,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Vt.envMap.value=me,Vt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Vt.envMapIntensity.value=N.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=vv()),Jt&&(it.setValue(R,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&em(Vt,Rs),re&&k.fog===!0&&Ce.refreshFogUniforms(Vt,re),Ce.refreshMaterialUniforms(Vt,k,Fe,ze,T.state.transmissionRenderTarget[v.id]),Ms.upload(R,bu(Ae),Vt,D)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ms.upload(R,bu(Ae),Vt,D),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&it.setValue(R,"center",F.center),it.setValue(R,"modelViewMatrix",F.modelViewMatrix),it.setValue(R,"normalMatrix",F.normalMatrix),it.setValue(R,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Nt=k.uniformsGroups;for(let Gt=0,Sl=Nt.length;Gt<Sl;Gt++){let fi=Nt[Gt];j.update(fi,Yt),j.bind(fi,Yt)}}return Yt}function em(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function tm(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(v,N,z){let k=_.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),_.get(v.texture).__webglTexture=N,_.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){let z=_.get(v);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};let nm=R.createFramebuffer();this.setRenderTarget=function(v,N=0,z=0){O=v,L=N,B=z;let k=null,F=!1,re=!1;if(v){let le=_.get(v);if(le.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(R.FRAMEBUFFER,le.__webglFramebuffer),V.copy(v.viewport),W.copy(v.scissor),Z=v.scissorTest,ye.viewport(V),ye.scissor(W),ye.setScissorTest(Z),G=-1;return}else if(le.__webglFramebuffer===void 0)D.setupRenderTarget(v);else if(le.__hasExternalTextures)D.rebindTextures(v,_.get(v.texture).__webglTexture,_.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ee=v.depthTexture;if(le.__boundDepthTexture!==Ee){if(Ee!==null&&_.has(Ee)&&(v.width!==Ee.image.width||v.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(v)}}let me=v.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(re=!0);let be=_.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(be[N])?k=be[N][z]:k=be[N],F=!0):v.samples>0&&D.useMultisampledRTT(v)===!1?k=_.get(v).__webglMultisampledFramebuffer:Array.isArray(be)?k=be[z]:k=be,V.copy(v.viewport),W.copy(v.scissor),Z=v.scissorTest}else V.copy(Y).multiplyScalar(Fe).floor(),W.copy(K).multiplyScalar(Fe).floor(),Z=pe;if(z!==0&&(k=nm),ye.bindFramebuffer(R.FRAMEBUFFER,k)&&ye.drawBuffers(v,k),ye.viewport(V),ye.scissor(W),ye.setScissorTest(Z),F){let le=_.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,le.__webglTexture,z)}else if(re){let le=N;for(let me=0;me<v.textures.length;me++){let be=_.get(v.textures[me]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+me,be.__webglTexture,z,le)}}else if(v!==null&&z!==0){let le=_.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,le.__webglTexture,z)}G=-1},this.readRenderTargetPixels=function(v,N,z,k,F,re,fe,le=0){if(!(v&&v.isWebGLRenderTarget)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=_.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){ye.bindFramebuffer(R.FRAMEBUFFER,me);try{let be=v.textures[le],Ee=be.format,we=be.type;if(!tt.textureFormatReadable(Ee)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(we)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-k&&z>=0&&z<=v.height-F&&(v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+le),R.readPixels(N,z,k,F,ee.convert(Ee),ee.convert(we),re))}finally{let be=O!==null?_.get(O).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(v,N,z,k,F,re,fe,le=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=_.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(N>=0&&N<=v.width-k&&z>=0&&z<=v.height-F){ye.bindFramebuffer(R.FRAMEBUFFER,me);let be=v.textures[le],Ee=be.format,we=be.type;if(!tt.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ve=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ve),R.bufferData(R.PIXEL_PACK_BUFFER,re.byteLength,R.STREAM_READ),v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+le),R.readPixels(N,z,k,F,ee.convert(Ee),ee.convert(we),0);let je=O!==null?_.get(O).__webglFramebuffer:null;ye.bindFramebuffer(R.FRAMEBUFFER,je);let ht=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Qd(R,ht,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ve),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,re),R.deleteBuffer(Ve),R.deleteSync(ht),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,z=0){let k=Math.pow(2,-z),F=Math.floor(v.image.width*k),re=Math.floor(v.image.height*k),fe=N!==null?N.x:0,le=N!==null?N.y:0;D.setTexture2D(v,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,fe,le,F,re),ye.unbindTexture()};let im=R.createFramebuffer(),sm=R.createFramebuffer();this.copyTextureToTexture=function(v,N,z=null,k=null,F=0,re=null){re===null&&(F!==0?(us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=F,F=0):re=0);let fe,le,me,be,Ee,we,Ve,je,ht,ut=v.isCompressedTexture?v.mipmaps[re]:v.image;if(z!==null)fe=z.max.x-z.min.x,le=z.max.y-z.min.y,me=z.isBox3?z.max.z-z.min.z:1,be=z.min.x,Ee=z.min.y,we=z.isBox3?z.min.z:0;else{let en=Math.pow(2,-F);fe=Math.floor(ut.width*en),le=Math.floor(ut.height*en),v.isDataArrayTexture?me=ut.depth:v.isData3DTexture?me=Math.floor(ut.depth*en):me=1,be=0,Ee=0,we=0}k!==null?(Ve=k.x,je=k.y,ht=k.z):(Ve=0,je=0,ht=0);let et=ee.convert(N.format),Ae=ee.convert(N.type),Ze;N.isData3DTexture?(D.setTexture3D(N,0),Ze=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(D.setTexture2DArray(N,0),Ze=R.TEXTURE_2D_ARRAY):(D.setTexture2D(N,0),Ze=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);let Xe=R.getParameter(R.UNPACK_ROW_LENGTH),Yt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Hi=R.getParameter(R.UNPACK_SKIP_PIXELS),Jt=R.getParameter(R.UNPACK_SKIP_ROWS),Rs=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ut.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ut.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,be),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ee),R.pixelStorei(R.UNPACK_SKIP_IMAGES,we);let it=v.isDataArrayTexture||v.isData3DTexture,Vt=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){let en=_.get(v),Nt=_.get(N),Gt=_.get(en.__renderTarget),Sl=_.get(Nt.__renderTarget);ye.bindFramebuffer(R.READ_FRAMEBUFFER,Gt.__webglFramebuffer),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,Sl.__webglFramebuffer);for(let fi=0;fi<me;fi++)it&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_.get(v).__webglTexture,F,we+fi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_.get(N).__webglTexture,re,ht+fi)),R.blitFramebuffer(be,Ee,fe,le,Ve,je,fe,le,R.DEPTH_BUFFER_BIT,R.NEAREST);ye.bindFramebuffer(R.READ_FRAMEBUFFER,null),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(F!==0||v.isRenderTargetTexture||_.has(v)){let en=_.get(v),Nt=_.get(N);ye.bindFramebuffer(R.READ_FRAMEBUFFER,im),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,sm);for(let Gt=0;Gt<me;Gt++)it?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,en.__webglTexture,F,we+Gt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,en.__webglTexture,F),Vt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Nt.__webglTexture,re,ht+Gt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Nt.__webglTexture,re),F!==0?R.blitFramebuffer(be,Ee,fe,le,Ve,je,fe,le,R.COLOR_BUFFER_BIT,R.NEAREST):Vt?R.copyTexSubImage3D(Ze,re,Ve,je,ht+Gt,be,Ee,fe,le):R.copyTexSubImage2D(Ze,re,Ve,je,be,Ee,fe,le);ye.bindFramebuffer(R.READ_FRAMEBUFFER,null),ye.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Vt?v.isDataTexture||v.isData3DTexture?R.texSubImage3D(Ze,re,Ve,je,ht,fe,le,me,et,Ae,ut.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(Ze,re,Ve,je,ht,fe,le,me,et,ut.data):R.texSubImage3D(Ze,re,Ve,je,ht,fe,le,me,et,Ae,ut):v.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,re,Ve,je,fe,le,et,Ae,ut.data):v.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,re,Ve,je,ut.width,ut.height,et,ut.data):R.texSubImage2D(R.TEXTURE_2D,re,Ve,je,fe,le,et,Ae,ut);R.pixelStorei(R.UNPACK_ROW_LENGTH,Xe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Yt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Hi),R.pixelStorei(R.UNPACK_SKIP_ROWS,Jt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Rs),re===0&&N.generateMipmaps&&R.generateMipmap(Ze),ye.unbindTexture()},this.initRenderTarget=function(v){_.get(v).__webglFramebuffer===void 0&&D.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?D.setTextureCube(v,0):v.isData3DTexture?D.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?D.setTexture2DArray(v,0):D.setTexture2D(v,0),ye.unbindTexture()},this.resetState=function(){L=0,B=0,O=null,ye.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};var Sv=new Set([429,500,502,503,504]),Mv=[300,900,2e3,4e3,8e3],bv=.25;function Fh(i,e){let t=typeof i=="string"?i:i instanceof URL?i.href:i?.url;if(!t||/^(data|blob):/i.test(t))return i;let n=new URL(t,typeof location<"u"?location.href:"http://localhost/");return n.searchParams.set("retry",String(e)),typeof Request<"u"&&i instanceof Request?new Request(n.href,i):n.href}function wv(i,{delays:e=Mv,wait:t=s=>new Promise(r=>setTimeout(r,s)),random:n=Math.random}={}){return async(s,r)=>{if((r?.method??s?.method??"GET").toUpperCase()!=="GET")return i(s,r);for(let o=0;;o++){let l=null,c=null;try{if(l=await i(o?Fh(s,o):s,r),!Sv.has(l.status))return l}catch(u){c=u}let h=(r?.signal??s?.signal)?.aborted;if(o>=e.length||h){if(c)throw c;return l}await t(e[o]*(1+bv*(n()*2-1)))}}}function Of(){if(typeof window>"u"||typeof window.fetch!="function"||window.fetch.retrying)return;let i=wv(window.fetch.bind(window)),e=s=>{try{return new URL(s?.url??s,location.href).origin===location.origin}catch{return!1}},t=window.fetch.bind(window),n=(s,r)=>t(s,r).catch(a=>{throw a&&typeof a=="object"&&(a.thirdParty=!0),a});window.fetch=Object.assign((s,r)=>e(s)?i(s,r):n(s,r),{retrying:!0})}var dw="nocache";function Cr(i){return typeof window<"u"&&window.__NOCACHE_URL?.(i)||i}br.setURLModifier(Cr);Of();var Vi=0,Oh=[],Bh=[],Er=br,{itemStart:Av,itemEnd:Tv}=Er;Er.itemStart=i=>{Vi++,Av.call(Er,i)};Er.itemEnd=i=>{Vi=Math.max(0,Vi-1),Tv.call(Er,i);for(let e of Bh)e();if(Vi===0){let e=Oh;Oh=[],Bh=[];for(let t of e)t()}};function fw(i=null){if(Vi===0)return Promise.resolve();let e=Vi;return i&&Bh.push(()=>i(Math.min(1,(e-Vi)/e))),new Promise(t=>Oh.push(t))}function pw(){document.getElementById("initial-loading")?.remove()}var kh=class{constructor(){this.entries=new Map,this.shared=new Map}get(e,t,n){let s=`${e}:${t}`;return this.shared.has(s)||this.shared.set(s,n()),this.shared.get(s)}load(e,t,n){let s=`${e}:${t}`;if(this.entries.has(s))return this.entries.get(s);let r=Promise.resolve().then(n);return this.entries.set(s,r),r.catch(()=>{this.entries.get(s)===r&&this.entries.delete(s)}),r}},kf=new kh;function zf(i){return globalThis.document?.baseURI?new URL(i,document.baseURI).href:i.replace(/^\.\//,"")}async function Vf(i){let e=await fetch(Cr(i));if(!e.ok)throw new Error(`${i}: HTTP ${e.status}`);return e}var _w=i=>kf.load("json",zf(i),async()=>(await Vf(i)).json()),Gf=i=>kf.load("bytes",zf(i),async()=>(await Vf(i)).arrayBuffer());function Bf(i){return Array.isArray(i)?i.map(Bf):i&&typeof i=="object"?Object.fromEntries(Object.entries(i).map(([e,t])=>[e,Bf(t)])):i}var Hf={};var tl=["trike","trex","ankylo","iguano","spino","stego","raptor","pteranodon","compy"],Xf=["brachio"],Ev=["trex","triceratops","ankylo","iguano","compy","parasaurus","nodosaurus","proto","pachy","diplo","titano","cerato","raptor","agroraptor","galli","hypsi","pteranodon","alcione","deinosuchus","dimetrodon","dunkleo","tortoise","salamander"],qf="d103b864-acf3-4ed7-9e2e-cb0c105f19cf",Yf="dino-simulator",Mw={background:"rgb(25, 70, 56)",summary:"rgb(18, 38, 18)",dialog:"rgb(25, 70, 56)",scrollbar:{track:"rgba(255, 255, 255, 0.14)",thumb:"rgb(18, 52, 38)",thumbHeld:"rgb(10, 34, 25)"},labels:{title:"#ffeb66",reward:"#ffe36e",offer:"#ffe14d"}};function Cv(i){let e=typeof document<"u"?new URL(i,document.baseURI):new URL(`../../${i}`,import.meta.url);return typeof window<"u"&&window.__NOCACHE_URL?.(e.href)||e.href}async function Jf(i){let e=Hf[i];if(e)return e;let t=Cv(i);for(let n=0;;n++)try{return await(n?import(Fh(t,n)):import(t))}catch(s){if(n>=Wf.length)throw s;await new Promise(r=>setTimeout(r,Wf[n]))}}var Wf=[500,2e3,5e3];function bw(){return tl}var zh=null;function ww(i){return Xf.includes(i)?(zh=i,!0):!1}function $f(){return zh?[...tl,zh]:tl}function Aw(){return[...new Set([...tl,...Xf])]}function Tw(){return Ev}var nl=new Map,Rv=i=>`${i}/dinoCode.js`;async function Rw(i=$f()){if(!i)throw new Error("loadDinoCode: no dinosaurs to load");return await Promise.all(i.map(async e=>{let t=await Jf(Rv(e));nl.set(e,t.default)})),nl}function ai(i){let e=nl.get(i);if(!e)throw new Error(`no dinoCode for "${i}" -- ${i}/dinoCode.js did not load`);return e}function Zf(i){return nl.has(i)}function Vh(i,e,t){return Math.min(t,Math.max(e,i))}function Gh(i,e,t){return i+(e-i)*t}function Pw(i,e,t){return Math.abs(e-i)<=t?e:i+Math.sign(e-i)*t}function ws(i,e,t,n,s){let r=Math.min(Math.max((i-e)/(t-e),0),1);return n+(s-n)*r}function Lw(i,e,t){return t>0?t>=1?1:i+(e-i)*t:0}function Dw(i,e){return i+Math.random()*(e-i)}function Nw(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,e|1);return t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Uw(i){return i[Math.floor(Math.random()*i.length)]}function Fw(i){let e=[...i];for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function Ow(i,e=2){let t=Vh(i,0,1);return t<.5?.5*Math.pow(2*t,e):1-.5*Math.pow(2-2*t,e)}function Iv(i,e=1,t=.3){let n=Vh(i,0,1);if(n===0||n===1)return n;let s=t||1e-4;return Math.pow(2,-10*n)*Math.sin((n-s/4)*(2*Math.PI)/s)*e+1}var Bw={linear:i=>i,quadIn:i=>i*i,quadOut:i=>i*(2-i),quadInOut:i=>i<.5?2*i*i:-1+(4-2*i)*i,cubicIn:i=>i*i*i,cubicOut:i=>1+--i*i*i,cubicInOut:i=>i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1,sineOut:i=>Math.sin(i*Math.PI/2),sineInOut:i=>-(Math.cos(Math.PI*i)-1)/2,backOut:i=>1+(1.70158+1)*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),backIn:i=>(1.70158+1)*i*i*i-1.70158*i*i,elasticOut:Iv,bounceOut:i=>i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375};function Kf(i,e=-Math.PI,t=Math.PI){if(!Number.isFinite(i))return e;let n=t-e;if(!(Number.isFinite(n)&&n>0))return e;let s=i;for(;s<e;)s+=n;for(;s>t;)s-=n;return s}function jf(i,e){return Kf(e-i)}function kw(i,e){return i+Kf(e-i)}function zw(i,e,t){return i+jf(i,e)*Math.min(t,1)}function Vw(i){return Math.atan2(2*(i.w*i.y+i.x*i.z),1-2*(i.x*i.x+i.y*i.y))}function Gw(i,e,t){let n=jf(i,e);return i+Math.sign(n)*Math.min(Math.abs(n),t)}function Hw(i,e,t,n=null){let s=i.x+(n?.left??0),r=i.y+(n?.top??0),a=i.x+i.width-(n?.right??0),o=i.y+i.height-(n?.bottom??0);return e>=s&&e<=a&&t>=r&&t<=o}function Ww(i,e){let t=i.x-e.x,n=i.y-e.y,s=i.z-e.z;return t*t+n*n+s*s}function Xw(i,e,t,n){let s=(c,h,u,d,f,g)=>(u-c)*(g-h)-(d-h)*(f-c),r=s(t.x,t.z,n.x,n.z,i.x,i.z),a=s(t.x,t.z,n.x,n.z,e.x,e.z),o=s(i.x,i.z,e.x,e.z,t.x,t.z),l=s(i.x,i.z,e.x,e.z,n.x,n.z);return r>0!=a>0&&o>0!=l>0}function qw(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],s=i[(t+1)%i.length];e+=n.x*s.z-s.x*n.z}return e/2}function Yw(i,e){let t=!1;for(let n=0,s=e.length-1;n<e.length;s=n++){let r=e[n],a=e[s];r.z>i.z!=a.z>i.z&&i.x<r.x+(a.x-r.x)*(i.z-r.z)/(a.z-r.z)&&(t=!t)}return t}function Jw(i,e,t){let n=t.x-e.x,s=t.z-e.z,r=n*n+s*s,a=r>0?Vh(((i.x-e.x)*n+(i.z-e.z)*s)/r,0,1):0;return{x:e.x+n*a,z:e.z+s*a}}function $w(i,e){return i.map((t,n)=>{let s=i[(n+i.length-1)%i.length],r=i[(n+1)%i.length],a=Math.hypot(t.x-s.x,t.z-s.z),o=Math.hypot(r.x-t.x,r.z-t.z);if(a<1e-9||o<1e-9)return{...t};let l=-(t.z-s.z)/a,c=(t.x-s.x)/a,h=-(r.z-t.z)/o,u=(r.x-t.x)/o,d=Math.max(.5,1+l*h+c*u);return{x:t.x+(l+h)*e[n]/d,z:t.z+(c+u)*e[n]/d}})}function Zw(i,e,t=2){if(i.length<3)return i.map(c=>({x:c.x,z:c.z}));let n=i.map((c,h)=>{let u=i[(h+1)%i.length];return Math.hypot(u.x-c.x,u.z-c.z)}),s=n.reduce((c,h)=>c+h,0);if(s<1e-9)return i.map(c=>({x:c.x,z:c.z}));let r=Math.max(8,Math.ceil(s/Math.max(e,.001))),a=[],o=0,l=0;for(let c=0;c<r;c++){let h=c*s/r;for(;o<i.length-1&&l+n[o]<h;)l+=n[o++];let u=i[o],d=i[(o+1)%i.length],f=n[o]>1e-9?(h-l)/n[o]:0;a.push({x:u.x+(d.x-u.x)*f,z:u.z+(d.z-u.z)*f})}for(let c=0;c<t;c++)a=a.map((h,u)=>{let d=a[(u+a.length-1)%a.length],f=a[(u+1)%a.length];return{x:(d.x+2*h.x+f.x)/4,z:(d.z+2*h.z+f.z)/4}});for(let c=0;c<2;c++){let h=[];for(let u=0;u<a.length;u++){let d=a[u],f=a[(u+1)%a.length];h.push({x:d.x*.75+f.x*.25,z:d.z*.75+f.z*.25},{x:d.x*.25+f.x*.75,z:d.z*.25+f.z*.75})}a=h}return a}function Kw(i,e,t,n,s,r,a,o,l){let c=null,h=(x,m,p)=>{x<0||x>1||t*m+n*p>=-1e-9||c&&x>=c.t||(c={t:x,nx:m,nz:p})},u=o-r,d=l-a,f=Math.hypot(u,d);if(f>1e-9){let x=u/f,m=d/f,p=-m,w=x,S=(i-r)*p+(e-a)*w,M=t*p+n*w;for(let T of[-1,1]){if(M*T>=-1e-9)continue;let E=Math.max(0,(T*s-S)/M),C=(i+t*E-r)*x+(e+n*E-a)*m;S*T>=-1e-9&&C>=0&&C<=f&&h(E,p*T,w*T)}}let g=t*t+n*n;if(g>1e-12)for(let[x,m]of[[r,a],[o,l]]){let p=i-x,w=e-m,S=p*t+w*n,M=p*p+w*w-s*s,T=S*S-g*M;if(T<0)continue;let E=M<=0?0:(-S-Math.sqrt(T))/g,C=p+t*E,U=w+n*E,y=Math.hypot(C,U);y>1e-9&&h(E,C/y,U/y)}return c}function jw(i,e,t,n){let s=e.x-i.x,r=e.y-i.y,a=e.z-i.z,o=n.x-t.x,l=n.y-t.y,c=n.z-t.z,h=i.x-t.x,u=i.y-t.y,d=i.z-t.z,f=s*s+r*r+a*a,g=s*o+r*l+a*c,x=o*o+l*l+c*c,m=s*h+r*u+a*d,p=o*h+l*u+c*d,w=f*x-g*g,S=0,M=0;w>1e-8&&(S=Math.max(0,Math.min(1,(g*p-x*m)/w))),M=x>1e-8?Math.max(0,Math.min(1,(g*S+p)/x)):0,f>1e-8&&(S=Math.max(0,Math.min(1,(g*M-m)/f)));let T=h+s*S-o*M,E=u+r*S-l*M,C=d+a*S-c*M;return T*T+E*E+C*C}function Qw(i,e){return(i%e+e)%e}function eA(i,e,t,n){let s=e-i.x,r=n-i.z;if(Math.abs(t-i.y)>i.height/2)return!1;let a=Math.cos(i.yaw??0),o=Math.sin(i.yaw??0);return Math.abs(a*s-o*r)<=i.width/2&&Math.abs(o*s+a*r)<=i.depth/2}function tA(i,e,t){let n=Math.hypot(i,e);if(!Number.isFinite(n)||n<=t)return{x:0,y:0};let s=Math.min(1,(n-t)/(1-t))/n;return{x:i*s,y:e*s}}function nA(i,e=1){if(!i)return 0;let t=10**(Math.floor(Math.log10(Math.abs(i)))-e+1);return Math.round(i/t)*t}function iA(i,e,t){let n=(i.x-t.position.x)*t.normal.x+(i.z-t.position.z)*t.normal.z,s=(e.x-t.position.x)*t.normal.x+(e.z-t.position.z)*t.normal.z;if(Math.sign(n)===Math.sign(s)||Math.abs(s-n)<1e-8)return!1;let r=-n/(s-n),a=i.x+(e.x-i.x)*r-t.position.x,o=i.y+(e.y-i.y)*r-t.position.y,l=i.z+(e.z-i.z)*r-t.position.z;return a*a+o*o+l*l<=t.radius*t.radius}var Qf={bundledAssets:!1,applicationActive:!0,maxPixelRatio:2,maxRenderPixels:1/0,fullResolutionUi:!1};var Rr=(i,e,t)=>Number.isFinite(i+e+t),ep=1e-6,il=["pointerdown","pointerup","keydown","touchstart","touchend","click"],Pv=24,Lv=2,Dv=.08,Nv=60,tp=.02,Uv=10,Fv=.55,Ov=1.6,Bv=900,np=2e4,ip=.35,sp=.3,Hh=400,Wh=(i,e)=>Promise.race([i,new Promise(t=>setTimeout(t,e))]),Xh=class{constructor(){this.context=null,this.masterGain=null,this.sfxGain=null,this.ambientGain=null,this.limiter=null,this.outputGain=null,this.sfxEnabled=!0,this.ambientEnabled=!0,this.muted=!1,this._loadingReasons=new Set,this._buffers=new Map,this._bufferBytes=new Map,this._failedPaths=new Set,this._active=0,this._voices=[],this._denied=0,this._lastUsed=new Map,this._keepResident=()=>!1,this._evicted=0,this._nextSweep=0,this._streams=new Set,this._inCave=!1,this._emitters=new Set,this._runningWaiters=[],this._unlockBound=null,this._resumeAttempts=0,this._forward=new I,this._listenerPosition=new I,this._listenerWritten=new I(NaN,NaN,NaN),this._forwardWritten=new I(NaN,NaN,NaN),this._gameplayFocus=new I,this._hasGameplayFocus=!1}_ensureContext(){if(this.context)return this.context;let e=globalThis.AudioContext??globalThis.webkitAudioContext;return e?(this.context=new e,this.masterGain=this.context.createGain(),this.limiter=this.context.createDynamicsCompressor(),this.limiter.threshold.value=-3,this.limiter.knee.value=0,this.limiter.ratio.value=20,this.limiter.attack.value=.003,this.limiter.release.value=.18,this.outputGain=this.context.createGain(),this.outputGain.gain.value=.85,this.masterGain.connect(this.limiter),this.limiter.connect(this.outputGain),this.outputGain.connect(this.context.destination),this.sfxGain=this.context.createGain(),this.sfxGain.connect(this.masterGain),this.ambientGain=this.context.createGain(),this.ambientFilter=this.context.createBiquadFilter(),this.ambientFilter.type="lowpass",this.ambientFilter.frequency.value=np,this.ambientGain.connect(this.ambientFilter),this.ambientFilter.connect(this.masterGain),this.reverbSend=this.context.createGain(),this.reverbSend.gain.value=0,this.reverb=this.context.createConvolver(),this.sfxGain.connect(this.reverbSend),this.reverbSend.connect(this.reverb),this.reverb.connect(this.masterGain),this._applyGains(),this.context.addEventListener("statechange",()=>{let t=this._contextState;this._syncContextState(),t!==this.context.state&&!this.muted&&!this._resumeAttempts&&(this.context.state==="suspended"||this.context.state==="interrupted")&&this.resume()}),this._syncContextState(),this.context):null}bindPageLifecycle(e,t){let n=r=>{!e.hidden&&il.includes(r?.type)&&(this.sfxEnabled||this.ambientEnabled)&&this._ensureContext();let a=this.muted;this.setMuted(e.hidden,"focus"),!e.hidden&&a===this.muted&&this.resume()},s=()=>this.setMuted(!0,"focus");e.addEventListener("visibilitychange",n),t.addEventListener("focus",n),t.addEventListener("pageshow",n),t.addEventListener("blur",s),t.addEventListener("pagehide",s);for(let r of il)t.addEventListener(r,n,{passive:!0,capture:!0});this.setMuted(e.hidden||!e.hasFocus(),"focus")}_armUnlock(){if(!this._unlockBound){this._unlockBound=()=>this.resume();for(let e of il)window.addEventListener(e,this._unlockBound,{passive:!0,capture:!0})}}async resume(){let e=this.context;if(e&&(this._syncContextState(),!(this.muted||e.state==="closed"))){for(let t of this._streams)t.play();if(e.state!=="running"&&globalThis.navigator?.userActivation?.hasBeenActive!==!1){this._resumeAttempts++;try{if(await Wh(e.resume(),Hh),e.state==="interrupted"&&(await Wh(e.suspend(),Hh),await Wh(e.resume(),Hh)),!this.muted)for(let t of this._streams)t.play()}catch{}finally{this._resumeAttempts--,this._syncContextState()}}}}_syncContextState(){let e=this.context;if(this._contextState=e.state,e.state==="running"){this._removeUnlock();let t=this._runningWaiters.splice(0);for(let n of t)n(!0)}else if(e.state==="closed"){this._removeUnlock();for(let t of this._runningWaiters.splice(0))t(!1)}else this._armUnlock()}_waitForRunning(){let e=this.context;return!e||e.state==="running"?Promise.resolve(!0):e.state==="closed"?Promise.resolve(!1):new Promise(t=>this._runningWaiters.push(t))}_removeUnlock(){if(this._unlockBound){for(let e of il)window.removeEventListener(e,this._unlockBound,!0);this._unlockBound=null}}setSfxEnabled(e){this.sfxEnabled=e,this._applyGains()}setAmbient(e){this.ambientEnabled=e,this._applyGains()}setGameplayFocus(e){!e||!Rr(e.x,e.y,e.z)||(this._gameplayFocus.set(e.x,e.y,e.z),this._hasGameplayFocus=!0)}setMuted(e,t="default"){let n=this.muted;if(this._muteReasons??(this._muteReasons=new Set),e?this._muteReasons.add(t):this._muteReasons.delete(t),this.muted=this._muteReasons.size>0,this._applyGains(),this.muted!==n)for(let s of this._streams)s.setPaused(this.muted);n&&!this.muted&&this.resume()}setLoading(e,t="run"){e?this._loadingReasons.add(t):this._loadingReasons.delete(t),this._applyGains()}_applyGains(){if(!this.masterGain)return;let e=this.muted||this._loadingReasons.size>0;this.masterGain.gain.value=e?0:1,this.sfxGain.gain.value=this.sfxEnabled?1:0;let t=this.ambientEnabled?1:0,n=this.ambientGain.gain,s=this.context.currentTime;Number.isFinite(s)?this._silent&&!e&&t?(n.cancelScheduledValues(s),n.setValueAtTime(0,s),n.linearRampToValueAtTime(1,s+sp)):t!==this._ambientTarget&&(n.cancelScheduledValues(s),n.setValueAtTime(t,s)):n.value=t,this._ambientTarget=t,this._silent=e}async _buffer(e){if(this._lastUsed.set(e,performance.now()),!this._buffers.has(e)){let t=this._ensureContext();this._buffers.set(e,Gf(e).then(n=>t.decodeAudioData(n.slice(0))).then(n=>(this._bufferBytes.set(e,n.length*n.numberOfChannels*4),n)).catch(n=>(this._failedPaths.add(e),console.warn(`could not load sound ${e}:`,n),null)))}return this._buffers.get(e)}preload(e){this.muted||this._buffer(e)}async playOnce(e,{volume:t=1,loop:n=!1,playbackRate:s=1,bus:r="sfx"}={}){if(r!=="ambient"&&!this.sfxEnabled||this.muted)return null;let a=this._ensureContext();if(!a||!n&&a.state!=="running")return null;let o=r==="ambient"?this.ambientGain:this.sfxGain,l=await this._buffer(e);if(!l)return null;if(n){if(!await this._waitForRunning())return null}else if(a.state!=="running")return null;if(r!=="ambient"&&!this.sfxEnabled||this.muted||!n&&!this._admit(e,0,null))return null;let c=a.createBufferSource();c.buffer=l,c.loop=n,c.playbackRate.value=s;let h=a.createGain();return h.gain.value=t,c.connect(h),h.connect(o),c.start(),this._track(c,n?null:{path:e,distance:0,position:null}),{source:c,gain:h,stop:()=>c.stop()}}_track(e,t=null){this._active++;let n=t&&{source:e,path:t.path,distance:t.distance,at:this.context.currentTime,x:t.position?.x,y:t.position?.y,z:t.position?.z};n&&this._voices.push(n),e.addEventListener("ended",()=>{if(this._active--,!n)return;let s=this._voices.indexOf(n);s>=0&&this._voices.splice(s,1)})}_admit(e,t,n){let s=this.context.currentTime;for(let a of this._voices){if(a.path!==e||s-a.at>Dv)continue;if(!n||a.x===void 0||Math.hypot(n.x-a.x,n.y-a.y,n.z-a.z)<Lv)return this._denied++,!1}if(this._voices.length<Pv)return!0;let r=null;for(let a of this._voices)(!r||a.distance>r.distance)&&(r=a);if(t>=r.distance)return this._denied++,!1;this._voices.splice(this._voices.indexOf(r),1);try{r.source.stop()}catch{}return!0}setCave(e){if(e===this._inCave||!this.context)return;this._inCave=e,e&&!this.reverb.buffer&&(this.reverb.buffer=this._caveImpulse());let t=this.context.currentTime;this.reverbSend.gain.setTargetAtTime(e?Fv:0,t,ip/3),this.ambientFilter.frequency.setTargetAtTime(e?Bv:np,t,ip/3)}_caveImpulse(){let e=this.context.sampleRate,t=Math.round(e*Ov),n=this.context.createBuffer(2,t,e);for(let s=0;s<2;s++){let r=n.getChannelData(s),a=0;for(let o=0;o<t;o++){let l=o/t,c=.2+.75*l;a=a*c+(Math.random()*2-1)*(1-c),r[o]=a*Math.pow(1-l,3)*2.2}}return n}keepResident(e){this._keepResident=e}_sweep(e){if(!(e<this._nextSweep)){this._nextSweep=e+Uv*1e3;for(let[t,n]of this._lastUsed)e-n<Nv*1e3||this._keepResident(t)||[...this._streams].some(s=>s.seamless&&s.path===t)||(this._lastUsed.delete(t),this._buffers.delete(t),this._bufferBytes.delete(t)&&this._evicted++)}}playStream(e,{volume:t=1,bus:n="ambient",seamless:s=!1}={}){let r=this._ensureContext();if(!r)return null;let a=r.createGain();a.gain.value=t,a.connect(n==="ambient"?this.ambientGain:this.sfxGain);let o=this._stream(e,a,{seamless:s});return{gain:a,stop:()=>o.stop()}}_stream(e,t,{seamless:n=!1}={}){if(n)return this._bufferLoop(e,t);let s=new Audio(Cr(e));s.loop=!0,s.preload="auto";let r=this.context.createMediaElementSource(s);r.connect(t);let a=()=>{s.paused&&s.play().catch(()=>{})},o={path:e,play:a,setPaused:l=>{l?s.pause():a()},stop:()=>{s.pause(),s.removeAttribute("src"),s.load(),r.disconnect(),this._streams.delete(o)}};return this._streams.add(o),this.muted||this._waitForRunning().then(l=>{l&&this._streams.has(o)&&!this.muted&&a()}),o}_bufferLoop(e,t){let n=this.context,s=null,r=null,a=0,o=0,l=!1,c=this.muted,h=null,u=()=>{r&&(a=(a+n.currentTime-o)%s.duration,r.stop(),r.disconnect(),r=null)},d=()=>{l||c||this.muted||r||!s||n.state!=="running"||(r=n.createBufferSource(),r.buffer=s,r.loop=!0,o=n.currentTime,h||(h=n.createGain(),h.gain.setValueAtTime(0,o),h.gain.linearRampToValueAtTime(1,o+sp),h.connect(t)),r.connect(h),r.start(0,a),this._track(r))},f={path:e,seamless:!0,play:d,setPaused:g=>{c=g,g?u():d()},stop:()=>{l||(l=!0,u(),h?.disconnect(),s=null,this._streams.delete(f))}};return this._streams.add(f),Promise.all([this._buffer(e),this._waitForRunning()]).then(([g,x])=>{l||(s=g,x&&d())}),f}stats(){let e=this.context,t=[...this._bufferBytes.entries()].sort((n,s)=>s[1]-n[1]);return{state:e?.state??"none",muted:[...this._muteReasons??[]],sfx:this.sfxEnabled,ambient:this.ambientEnabled,gains:e?[this.masterGain,this.sfxGain,this.ambientGain].map(n=>n.gain.value):[],sampleRate:e?.sampleRate??0,latency:[e?.baseLatency??0,e?.outputLatency??0],buffers:t.length,bytes:t.reduce((n,[,s])=>n+s,0),biggest:t.slice(0,3),failed:[...this._failedPaths],active:this._active,voices:this._voices.length,denied:this._denied,evicted:this._evicted,streams:this._streams.size,cave:this._inCave,emitters:this._emitters.size}}static dbToGain(e){return Math.pow(10,e/20)}createEmitter({maxDistance:e=20,unitSize:t=1,bus:n="sfx"}={}){let s=new qh(this,{maxDistance:e,unitSize:t,bus:n});return this._emitters.add(s),s}removeEmitter(e){e._disconnect(),this._emitters.delete(e)}async playAt(e,t,n={}){if(!this.sfxEnabled||this.muted||!Rr(t.x,t.y,t.z)||!this._ensureContext())return null;let{matchGameplayFocus:s=null,...r}=n,a=this.createEmitter(r);a.setPosition(t.x,t.y,t.z);let o=r.volume??1;if(s&&this._hasGameplayFocus){let c=Math.max(1,this._listenerPosition.distanceTo(this._gameplayFocus)),h=Math.max(1,this._listenerPosition.distanceTo(t)),u=s.radius??8;t.distanceTo(this._gameplayFocus)<=u&&(o=(s.targetGain??o)*h/c)}let l=await a.play(e,{...r,volume:o,onEnded:()=>this.removeEmitter(a)});return l||this.removeEmitter(a),l}updateListener(e){let t=this.context;if(!t)return;this._sweep(performance.now());let n=e.position;if(!Rr(n.x,n.y,n.z))return;this._listenerPosition.copy(n),e.getWorldDirection(this._forward);let s=this._forward;if(!Rr(s.x,s.y,s.z))return;let r=!(this._listenerWritten.distanceToSquared(n)<ep),a=!(this._forwardWritten.distanceToSquared(s)<ep);if(!r&&!a)return;let o=t.listener;o.positionX?(r&&(o.positionX.value=n.x,o.positionY.value=n.y,o.positionZ.value=n.z),a&&(o.forwardX.value=s.x,o.forwardY.value=s.y,o.forwardZ.value=s.z),this._forwardWritten.x!==this._forwardWritten.x&&(o.upX.value=0,o.upY.value=1,o.upZ.value=0)):(r&&o.setPosition(n.x,n.y,n.z),a&&o.setOrientation(s.x,s.y,s.z,0,1,0)),r&&this._listenerWritten.copy(n),a&&this._forwardWritten.copy(s)}},qh=class{constructor(e,{maxDistance:t,unitSize:n,bus:s="sfx"}){this.world=e,this.bus=s;let r=e._ensureContext();this.panner=r.createPanner(),this.panner.panningModel="equalpower",this.panner.distanceModel="inverse",this.panner.refDistance=n,this.panner.maxDistance=t,this.panner.rolloffFactor=1,this.gain=r.createGain(),this.panner.connect(this.gain),this.gain.connect(s==="ambient"?e.ambientGain:e.sfxGain),this._source=null,this._stream=null,this.position=null}setPosition(e,t,n){if(!Rr(e,t,n))return;this.position?this.position.set(e,t,n):this.position=new I(e,t,n);let s=this.panner;s.positionX?(s.positionX.value=e,s.positionY.value=t,s.positionZ.value=n):s.setPosition(e,t,n)}follow(e){return this._follow=e,this}updateFollow(){if(this._follow){let e=this._follow.position;this.setPosition(e.x,e.y,e.z)}}async play(e,{volume:t=1,loop:n=!1,playbackRate:s=1,onEnded:r=null,scheduleWhenMuted:a=!1}={}){let o=()=>(this.bus!=="ambient"&&!this.world.sfxEnabled||this.world.muted)&&!a;if(o())return null;let l=await this.world._buffer(e);if(!l||!await this.world._waitForRunning()||o())return null;let c=this.position?this.position.distanceTo(this.world._listenerPosition):0;if(!n&&!this.world._admit(e,c,this.position))return null;this.stop();let h=this.world.context.createBufferSource();h.buffer=l,h.loop=n,h.playbackRate.value=s;let u=this.world.context.createGain();return h.connect(u),u.connect(this.panner),h.addEventListener("ended",()=>u.disconnect()),this.gain.gain.value=t,r&&(h.onended=r),h.start(),this.world._track(h,n?null:{path:e,distance:c,position:this.position}),this._source=h,this._voice=u,{source:h,stop:()=>h.stop(),fadeOut:(d=.12)=>{let f=this.world.context.currentTime,g=f+Math.max(.01,d);this.gain.gain.cancelScheduledValues(f),this.gain.gain.setValueAtTime(this.gain.gain.value,f),this.gain.gain.linearRampToValueAtTime(0,g);try{h.stop(g)}catch{}}}}stream(e,{volume:t=1,seamless:n=!1}={}){return this.stop(),this.gain.gain.value=t,this._stream=this.world._stream(e,this.panner,{seamless:n}),this._stream}get playing(){return this._source!==null||this._stream!==null}stop(){if(this._stream&&(this._stream.stop(),this._stream=null),this._source){this._source.onended=null;let e=this.world.context.currentTime,t=this._voice.gain;try{t.setValueAtTime(t.value,e),t.linearRampToValueAtTime(0,e+tp),this._source.stop(e+tp)}catch{try{this._source.stop()}catch{}}this._source=null,this._voice=null}}_disconnect(){this.stop(),this.panner.disconnect(),this.gain.disconnect()}},cA=()=>({gain:.88+Math.random()*.24,pitch:.93+Math.random()*.14}),Yh=new Xh;var kv=["mibbon.com"],rp=["localhost","127.0.0.1","::1","[::1]",""];function uA(i){return typeof i=="string"&&rp.includes(i)}function sl(i){return typeof i!="string"?!1:rp.includes(i)?!0:kv.some(e=>i===e||i.endsWith(`.${e}`))}var bt=i=>`dino.${i}`;var Jh="emoji:\u{1F6E0}\uFE0F";var pA=["body","belly","pattern","eyes","horns"];var mA={expire:90,biteMax:100,value(i){return Math.round(5+95*Math.max(0,Math.min(1,Number(i)||0)))}};var zv=1280,Vv=720;function yA(i,e,t=zv,n=Vv){if(!(i>0)||!(e>0))return{width:t,height:n,scale:1};let s=t/n,r=i/e,a,o;Math.abs(s-r)<1e-6?(a=t,o=n):s<r?(a=Math.floor(n*r),o=n):(a=t,o=Math.floor(t/r));let l=s<r?e/o:i/a;return{width:a,height:o,scale:l}}function vA(i,e){if(!(e>0)||!Number.isFinite(e))return i;let t=r=>Math.round(r*e)/e,n=t(i.x),s=t(i.y);return{x:n,y:s,width:t(i.x+i.width)-n,height:t(i.y+i.height)-s}}function SA(i=1,e=typeof document<"u"?document:null){let t={left:0,top:0,right:0,bottom:0};if(!e||!e.body)return t;let n=e.createElement("div");n.style.cssText=["position:fixed","visibility:hidden","pointer-events:none","top:0","left:0","padding-left:env(safe-area-inset-left,0px)","padding-top:env(safe-area-inset-top,0px)","padding-right:env(safe-area-inset-right,0px)","padding-bottom:env(safe-area-inset-bottom,0px)"].join(";"),e.body.appendChild(n);let s=getComputedStyle(n),r=o=>{let l=parseFloat(o);return Number.isFinite(l)?l/i:0},a={left:r(s.paddingLeft),top:r(s.paddingTop),right:r(s.paddingRight),bottom:r(s.paddingBottom)};return n.remove(),a}var ap={aspect:1206/1941,height:138/1941,top:72/1941},op={aspect:2250/800,height:138/800,top:72/800},Gv=186/138;function $h(i,e){let t=i/Math.max(1,e),n=r=>ws(t,ap.aspect,op.aspect,ap[r],op[r]),s=n("height")*e;return{left:0,top:n("top")*e,width:s*Gv,height:s}}function MA(i){let e=Hv(i);return e.top+e.height}function rl(){return cp()}function Hv(i){if(!rl())return{left:0,top:0,width:0,height:0};let e=i.scale>0?i.scale:1,t=$h(i.width*e,i.height*e);return{left:t.left/e,top:t.top/e,width:t.width/e,height:t.height/e}}var lp={width:80,height:80};function bA(i){if(!rl())return{width:0,height:0};let e=i.scale>0?i.scale:1;return{width:lp.width/e,height:lp.height/e}}function hp(i,e,t){let n=[i,e,t].map(String),s=0,r=n.map(a=>a.replace(/[^A-Za-z0-9 _:.+|\-]/g,"_").replace(/\d+/g,o=>++s>2?"n":o));for(let a=0;a<2;a++)r[a]||(r[a]="none");return{original:n,event:r,repaired:r.some((a,o)=>a!==n[o])}}function up(i,e,t){if(!e||!i.repaired)return;let n=`Original: ${JSON.stringify(i.original)}
Sent: ${JSON.stringify(i.event)}`,s=new Error(`Poki event repaired
${n}`);try{t?.("Poki event repaired",n,s.stack)}catch{}}function dp(i){let e=0;return(t,n)=>{if(!(!t||!n||e>=4)){e++;try{i(`https://leveldata.poki.io/${t}`,n)}catch{}}}}var Wv=dp((i,e)=>navigator.sendBeacon(i,e)),Xv=1e4,Hn=()=>typeof window<"u"?window.PokiSDK:void 0;function As(i,...e){let t=Hn();if(!(!t||typeof t[i]!="function"))try{return t[i](...e)}catch(n){console.warn(`PokiSDK.${i} failed:`,n);return}}var Ts=!1,ll=!1,_p="",xp=0,yp=bt("ad_seconds"),qv=12;function vp(){try{return JSON.parse(localStorage.getItem(yp))??{}}catch{return{}}}function Yv(i,e){try{let t=vp();t[i]=[...t[i]??[],Math.round(e*10)/10].slice(-qv),localStorage.setItem(yp,JSON.stringify(t))}catch{}}var Ir=new Set,al=!1,fp=[],Zh=!1,Cn={start:"start",complete:"complete",fail:"fail",visible:"visible",interact:"interact",earned:"earned",spent:"spent"},Pr=[];function Sp(){if(Ts||Pr.length===0)return;let i=Hn();for(let[e,t,n]of Pr)!i||typeof i.measure!="function"?console.log(`[POKI] measure: [${e}] ${t} => ${n}`):As("measure",e,t,n);Pr.length=0}function oi(){return typeof location>"u"?!1:sl(location.hostname)}var Jv=i=>new Promise(e=>setTimeout(e,i)),Mp=null;function $v(){if(document.getElementById("poki-back-preview"))return;let i=document.createElement("img");i.id="poki-back-preview",i.src="icons/poki_back_preview.png",i.alt="",i.style.cssText="position:fixed;left:0;z-index:9998;pointer-events:none;filter:drop-shadow(0 2px 6px rgba(0,0,0,0.18))";let e=()=>{let t=$h(window.innerWidth,window.innerHeight);i.style.opacity=rl()?"1":".15",i.style.top=`${t.top}px`,i.style.width=`${t.width}px`,i.style.height=`${t.height}px`};e(),Mp=e,window.addEventListener("resize",e),document.body.appendChild(i)}var OA=()=>Mp?.(),pp="rgba(255, 0, 255, 0.85)",bp=`linear-gradient(${pp}, ${pp})`,Zv=`FAKE REWARDED BREAK
Grant the reward?`,Kv=`REQUIRED
AD`;async function jv(i,e=null){if(zt.debug.visualize_ads===!1)return console.log(`[POKI] ${i} (not visualized, auto-success)`),!0;console.log(`[POKI] ${i}`);let t=document.createElement("div");t.style.cssText=`position:fixed;inset:0;background:${bp};z-index:128;padding:24px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px`,document.body.appendChild(t);try{if(i!=="rewardedBreak"){t.style.pointerEvents="none";let r=document.createElement("div");return r.textContent="AD",r.style.cssText="color:white;font:900 28vmin 'SN Pro',Arial,sans-serif;line-height:1;letter-spacing:0.06em;text-shadow:0 4px 16px rgba(0,0,0,0.45)",t.appendChild(r),await Jv(zt.debug.test_long_ads?1e4:250),!0}let n=document.createElement("div");n.textContent=e?Kv:Zv,n.style.cssText="color:white;font:700 22px 'SN Pro',Arial,sans-serif;text-shadow:0 2px 4px rgba(0,0,0,0.6);text-align:center;white-space:pre-line;max-width:min(90vw,520px)",t.appendChild(n);let s=(r,a,o,l)=>{let c=document.createElement("button");return c.textContent=r,c.style.cssText="font:700 24px 'SN Pro',Arial,sans-serif;padding:14px 48px;border:none;border-radius:12px;cursor:pointer;background:"+a+";color:white",c.addEventListener("click",()=>l(o)),c};return await new Promise(r=>{t.appendChild(s("Cancel","#59606b","cancel",r));let a=document.createElement("div");a.style.cssText="display:flex;gap:24px",a.append(s("No","#a12626",!1,r),s("Yes","#2b8a3e",!0,r)),t.appendChild(a)})}finally{t.remove()}}var wp="dino.dev_fake_user";function Ap(){try{let i=localStorage.getItem(wp);return i?Object.assign(JSON.parse(i),{profilePictureUrl:Jh}):null}catch{return null}}async function Qv(){console.log("[POKI] login");let i=document.createElement("div");i.style.cssText=`position:fixed;inset:0;background:${bp};z-index:128;padding:24px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:20px;overflow:auto;color-scheme:light dark;forced-color-adjust:none`,document.body.appendChild(i);try{let e=document.createElement("div");e.textContent=`FAKE POKI LOGIN
What is your username?`,e.style.cssText="color:white;font:700 22px 'SN Pro',Arial,sans-serif;text-shadow:0 2px 4px rgba(0,0,0,0.6);text-align:center;white-space:pre-line;max-width:min(90vw,520px)",i.appendChild(e);let t=document.createElement("input");t.type="text",t.maxLength=32,t.autocomplete="off",t.value=Ap()?.username??"Dev Rex",t.style.cssText="font:700 24px 'SN Pro',Arial,sans-serif;padding:12px 18px;border:2px solid white;border-radius:12px;background:#ffffff;color:#111111;text-align:center;outline:none;width:min(80vw,360px);color-scheme:light dark;forced-color-adjust:none;filter:none !important",i.appendChild(t);let n=document.createElement("div");return n.style.cssText="display:flex;gap:24px",i.appendChild(n),await new Promise(s=>{let r=a=>s(a&&t.value.trim().slice(0,32)||null);for(let[a,o]of[["Cancel",!1],["Log in",!0]]){let l=document.createElement("button");l.textContent=a,l.style.cssText="font:700 24px 'SN Pro',Arial,sans-serif;padding:14px 48px;border:none;border-radius:12px;cursor:pointer;background:"+(o?"#2b8a3e":"#a12626")+";color:white",l.addEventListener("click",()=>r(o)),n.appendChild(l)}t.addEventListener("keydown",a=>{a.key==="Enter"&&r(!0)}),t.focus(),t.select()})}finally{i.remove()}}var jh="ad",eS="start",tS="success",nS="unavailable",ol=1e3,mp="unavailable";async function Kh(i,e,t="",n="",s="",r=null){if(Ts)return e;let a=oi(),o=Hn(),l=o&&typeof o[i]=="function";if(!a&&!l)return t&&gp(t),r?mp:e;let c=performance.now();t&&ft.measure(jh,t,eS),n&&ft.measure(Lr,n,Cn.start);let h=!1,u=()=>{document.hidden&&ft.measure(Lr,`${n}_hidden`,Cn.interact)};n&&document.addEventListener("visibilitychange",u),Ts=!0,_p=i,xp=c,Yh.setMuted(!0,"ad"),ft.onAdBusyChanged?.(!0);let d=e,f=!1,g=!1,x=r?.onShowing?setTimeout(r.onShowing,ol):0;try{if(a){ll=!0;let p=await jv(i,r);f=p==="cancel",d=f?!1:p}else{let p=()=>{h=!0,ll=!0};d=await(s?o[i]({size:s,onStart:p}):o[i](p))}}catch{g=!0,d=e}finally{clearTimeout(x),n&&document.removeEventListener("visibilitychange",u),Ts=!1,ll=!1,Yh.setMuted(!1,"ad"),ft.onAdBusyChanged?.(!1),Sp()}t&&d===!0?ft.measure(jh,t,tS):t&&(g||!(a?f:performance.now()-c>=ol))&&(gp(t),r&&(d=mp));let m=(performance.now()-c)/1e3;return(h||m*1e3>=ol)&&Yv(i,m),n&&(h||(h=a?d!==!1:performance.now()-c>=ol),ft.measure(Lr,n,h?Cn.complete:Cn.fail),h&&sS(n)),d}var Lr="interstitial",iS=1e4;function sS(i){let e=`${i}_after`;ft.measure(Lr,e,Cn.start);let t=0,n=()=>{document.hidden&&s(Cn.fail)},s=r=>{clearTimeout(t),document.removeEventListener("visibilitychange",n),ft.measure(Lr,e,r)};document.addEventListener("visibilitychange",n),t=setTimeout(()=>s(Cn.complete),iS)}function gp(i){ft.measure(jh,i,nS)}var ft={onAdBusyChanged:null,async init(){oi()&&$v();let i=Hn();if(!i)return console.warn("PokiSDK not loaded; continuing without it"),!1;try{let e=i.init();if(!oi())return await e,!0;let t=0,n=await Promise.race([e.then(()=>!0),new Promise(s=>{t=setTimeout(()=>s(!1),Xv)})]);return clearTimeout(t),n||console.warn("PokiSDK.init did not settle in time; continuing without it"),n}catch(e){return console.warn("PokiSDK.init failed; continuing without it:",e),!1}},gameLoadingFinished(){Zh||(Zh=!0,As("gameLoadingFinished"),this.beacon())},beacon(){Qf.bundledAssets||Wv(Yf,qf)},get isLoadingFinished(){return Zh},gameplayStart(){if(!al){al=!0,As("gameplayStart");for(let i of fp)i()}},onGameplayStart(i){fp.push(i)},gameplayStop(){al&&(al=!1,As("gameplayStop"))},get isAdBusy(){return Ts},get isAdShowing(){return ll},get adSecondsLeft(){let i=Ts?vp()[_p]:null;if(!i?.length)return 0;let e=[...i].sort((t,n)=>t-n);return Math.max(0,e[Math.floor((e.length-1)/4)]-(performance.now()-xp)/1e3)},rewardedBreak(i,e=""){if(!i||typeof i!="string")throw new Error("poki.rewardedBreak needs a placement name");return Kh("rewardedBreak",!1,i,"",e)},async requiredBreak(i,e="",t=null){if(!i||typeof i!="string")throw new Error("poki.requiredBreak needs a placement name");return Kh("rewardedBreak",!1,i,"",e,{onShowing:t})},shouldSkipCommercialBreak:null,commercialBreak(i="",{overScreens:e=!1}={}){if(!(e&&!zt.debug.ads_on_leaving_gameplay)){if(Ir.size){console.log(`[POKI] commercialBreak held back: ${[...Ir].map(t=>t.reason).join(", ")}`);return}if(!(!e&&ft.shouldSkipCommercialBreak?.()))return Kh("commercialBreak",void 0,"",i)}},holdBreaks(i){if(!i)throw new Error("poki.holdBreaks needs a reason");let e={reason:i};return Ir.add(e),()=>{Ir.delete(e)}},get breakHolds(){return[...Ir].map(i=>i.reason)},captureError:i=>As("captureError",i),measure(i,e,t){let n=hp(i,e,t);up(n,oi(),typeof window<"u"?window.__showBootError:null),Pr.push(n.event),Sp()},get pendingMeasures(){return Pr.length},async shareableURL(i){let e=Hn();if(oi()||!e||typeof e.shareableURL!="function")return null;try{let t=await e.shareableURL(i);return typeof t=="string"&&t?t:null}catch(t){return console.warn("PokiSDK.shareableURL failed:",t),null}},urlParam(i){let e=Hn();if(e&&typeof e.getURLParam=="function")try{let t=e.getURLParam(i);if(t)return String(t)}catch(t){console.warn("PokiSDK.getURLParam failed:",t)}return typeof location>"u"?"":new URLSearchParams(location.search).get(i)||""},get canLogin(){return oi()||typeof Hn()?.login=="function"},async user(){if(oi())return Ap();let i=Hn();if(!i||typeof i.getUser!="function")return null;try{return await i.getUser()||null}catch{return null}},async login(){if(oi()){let e=await Qv();if(!e)return null;let t={username:e,profilePictureUrl:Jh};try{localStorage.setItem(wp,JSON.stringify(t))}catch{}return t}let i=Hn();if(!i||typeof i.login!="function")return null;zt.poki_login=!0,zt.save();try{return await i.login()||null}catch{return null}},getLanguage(){let i=As("getLanguage");return typeof i=="string"?i:""}};var cl=3,Tp=5,rS=.2;function VA(i,e){return Gh(rS,1,e)*aS(i,e)*(i.sizeMultiplier??1)}function aS(i,e){return Gh(i?.juvenileSizeMultiplier??1,1,Math.min(1,e*cl))}var Es=0,eu=.35,Ep=.5,tu=.75,Qh={JUVENILE:0,TEEN:1,ADULT:2};function GA(i,e,t,n=oS(t)){let s=i.voiceStageOverrides?.[n]?.[e]?.playbackRate;if(s!==void 0)return s;let r=i.voiceJuvenilePitch?.[e];return r===void 0?1:ws(t,0,1,r,1)}function oS(i){return i>=1?"adult":i>=.25?"teen":"juvenile"}function HA(i,e,t){return i.voiceStageOverrides?.[t]?.[e]?.clip??i.voiceClips?.[e]??`${e}_${t}`}function WA(i,e,t){t=t.replace(/\.ogg$/,"");let n=e.sharedAudio?.[t];return n?`audio/dino/${n}.ogg`:`${i}/audio/${t}.ogg`}var lS={walkSpeed:6,runSpeed:6,swimDepthJuvenile:-.2,swimDepthTeen:-.6,swimDepthAdult:-1,acceleration:4,friction:15,rotationSpeed:4,runThresholdPercent:.75,maxHealth:5,attackDamage:1,eatDamage:1,consumeValue:10,waterValue:1,isFoodType:0,eatsFoodType:0},cS={NONE:0,VEG:1,MEAT:2},hS=(i,e)=>(i&e)!==0,XA=i=>ai(i).glb,qA=i=>{let e=ai(i);return e.modelFile?`${i}/${e.modelFile}`:`npc/${e.glb}/${e.glb}.glb`},YA=i=>(Zf(i)?ai(i).uiArtFrom:null)??i,JA=i=>ai(i).protectTexture,uS={eat:i=>hS(dS(i).eatsFoodType,cS.MEAT)?"meat":null};function $A(i,e){let t=null;try{let n=ai(e)?.[`${i}IconFile`];if(n)return`${e}/ui/${n}.webp`;t=ai(e)?.[`${i}Icon`]??uS[i]?.(e)??null}catch{}return`textures/ui/actions/${i}${t?`_${t}`:""}.webp`}function dS(i){return{...lS,...ai(i).stats}}function ZA(i){let e=Tp*(cl-1);return Math.floor(i*e)/e}function KA(i){return Math.floor(i*Tp*(cl-1))<=1}function jA(i){let e=1/cl;return i<e*1?Qh.JUVENILE:i<e*2?Qh.TEEN:Qh.ADULT}function QA(i,e){return e<=.5?ws(e,0,.5,i.swimDepthJuvenile,i.swimDepthTeen):ws(e,.5,1,i.swimDepthTeen,i.swimDepthAdult)}var iu={returning_update_seen:"rn",egg_fix_seen:"ef",photo_update_seen:"pm",future_dinos_shown:"fs",future_dino_vote:"fv",future_biomes_shown:"fu",future_biome_vote:"fy",dino_type:"dt",last_played_dino:"lp",growth:"g",grown_up:"gu",half_grown:"hg",mp_unlocked:"mu",first_baby_hatched:"fb",mp_intro_seconds:"mn",mp_portal_entered:"mo",mp_play_seconds:"ms",special_missions:"sm",race_best_times:"rb",race_stats:"rs",powerups_bought:"pb",achievements:"ac",dinos_played:"dp",catalog_seen:"cs",photographed:"pg",photo_snapped:"ps",photo_mode_opened:"po",photo_mode_hint:"pt",photo_hint_at:"pw",photo_tab:"pz",photo_catalog_lesson:"pk",photo_retake_hint:"pe",ingame_play_seconds:"ip",first_saved:"fw",first_dino_started:"fd",map_opened:"mq",touched:"t",prestige:"pr",dead:"de",health:"h",water:"w",food:"f",energy:"e",egg:"eg",brood:"br",baby_skeletons:"bk",life:"li",brood_looks:"bl",cubs:"cb",dino_name:"dn",saved_at:"sa",selected_styles:"ss",bought_styles:"bs",coins:"c",missions:"mi",visits:"vi",visit_days:"vd",last_visit_day:"lv",versions_played:"vp",news_seen:"nw",mission_cycle:"mc",missions_finished:"mf",powerups:"pu",ambient:"am",sfx:"sf",gore:"go",cub_names:"cn",high_quality:"hq",high_quality_manually_toggled:"hm",view_distance_locked:"vl",capture_mouse_cursor:"cm",touch_controls:"tc",quality:"ql",drain_warning:"dw",salt_water_seen:"sw",survival_hint_carn:"svc",survival_hint_herb:"svb",eog_shown:"eo",egg_shown:"ex",area_gateway_unlocked:"ag",area_gateways_unlocked:"ax",rocks_broken:"rk",gate_chains:"gc",gate_chain_hold:"gh",missions_hint:"mh",powerup_hint:"ph",run_chase_hint:"rc",run_unrun_hint:"ru",ever_ran:"er",first_achievement_hint:"fa",jump_hint:"jh",lava_jump_hint:"lj",customize_lesson:"cu",carnivore_food_hint_count:"cf",language:"la",azerty:"az",player_id:"pi",mp_show_name:"sn",name_parts:"np",recent_emotes:"re",last_room:"lr",poki_login:"lg",name_own:"no",day_hour:"dh",weather:"wt",world_progress:"wp",dino_runs:"dr",coin_actions:"ca",loading_tips:"lt",gifts_used:"gx"},hl=Object.fromEntries(Object.entries(iu).map(([i,e])=>[e,i])),nu=/^(.*#)(\d+)$/;function Cp(i){if(!Array.isArray(i)||i.length<2)return i;let e=nu.exec(i[0])?.[1];return e===void 0||!i.every(t=>nu.exec(t)?.[1]===e)?i:{p:e,n:i.map(t=>+nu.exec(t)[2])}}var Rp=i=>i?.p===void 0?i:i.n.map(e=>i.p+e),Cs=(i,e)=>i&&typeof i=="object"?Object.fromEntries(Object.entries(i).map(([t,n])=>[t,e(n)])):i,Ip={completed:"c"},Pp=(i,e)=>Object.fromEntries(Object.entries(i).map(([t,n])=>[e[t]??t,n])),fS=i=>Object.fromEntries(Object.entries(i).map(([e,t])=>[t,e])),ul={missions:{pack:i=>Cs(i,e=>e?.completed===!0&&Object.keys(e).length===1?1:Pp(e??{},Ip)),unpack:i=>Cs(i,e=>e===1?{completed:!0}:Pp(e,fS(Ip)))},touched:{pack:i=>Cs(i,Cp),unpack:i=>Cs(i,Rp)},special_missions:{pack:i=>Cs(i,e=>{let t={};return e.started&&(t.s=1),e.unlocked&&(t.u=1),e.bestTimeMs!=null&&(t.r=e.bestTimeMs),e.losses&&(t.l=Math.round(e.losses*1e3)/1e3),e.flightLesson&&(t.f=1),t.c=Cp(e.collected),t}),unpack:i=>Cs(i,e=>({started:e.s===1,collected:Rp(e.c),unlocked:e.u===1,...e.r!=null?{bestTimeMs:e.r}:{},...e.l?{losses:e.l}:{},...e.f===1?{flightLesson:!0}:{}}))}},Lp=i=>typeof i=="number"?Math.round(i*1e4)/1e4:i;function su(i,e,t=""){let n=t?{v:1,b:t}:{v:1};for(let[s,r]of Object.entries(iu)){if(!(s in i))continue;let a=s==="brood"?i.brood.map(Lp):ul[s]?ul[s].pack(i[s]):Lp(i[s]);JSON.stringify(a)!==e[s]&&(n[r]=a)}return n}function ru(i){try{return JSON.parse(i)?.v>1}catch{return!1}}var Dp=i=>Object.fromEntries(Object.entries(i).map(([e,t])=>[e,JSON.stringify(t)]));function Gi(i,e){if(i?.v!==1)return i;let t={};for(let n of Object.keys(iu))t[n]=e[n];for(let[n,s]of Object.entries(i))n in hl&&(t[hl[n]]=ul[hl[n]]?ul[hl[n]].unpack(s):s);return t}var au=typeof location>"u"?!1:sl(location.hostname),on="pack_a",Wn=bt(on),Np=bt("save"),dl=bt("debug"),Up=bt("godot_probe"),pS=4e3,Or=i=>bt(`${on}.backup.${i}`),Yp=10,mS=bt(`${on}.unreadable`),ou=bt(`${on}.saved_in_tab`),lu=`poki_ignore_${bt(`${on}.local`)}`,oT=["blocked","write","readback","lost"],ui=.75,fl=.5,lT=.15,pn=()=>({returning_update_seen:!0,egg_fix_seen:!0,photo_update_seen:!1,future_dinos_shown:!1,future_dino_vote:"",future_biomes_shown:!1,future_biome_vote:"",dino_type:"",last_played_dino:"",growth:0,grown_up:!1,half_grown:!1,mp_unlocked:!1,first_baby_hatched:!1,mp_intro_seconds:0,mp_portal_entered:!1,mp_play_seconds:0,special_missions:{},world_progress:{},dino_runs:null,race_best_times:{},race_stats:{},powerups_bought:{},achievements:{},dinos_played:[],catalog_seen:[],photographed:[],photo_snapped:!1,photo_mode_opened:!1,photo_tab:!1,photo_catalog_lesson:!1,photo_retake_hint:!1,ingame_play_seconds:0,first_saved:0,photo_hint_at:300,map_opened:!1,first_dino_started:!1,touched:{},prestige:0,dead:!1,health:ui,water:ui,food:ui,energy:ui,egg:0,brood:[],baby_skeletons:[],life:"",brood_looks:[],cubs:null,dino_name:"",saved_at:0,selected_styles:{},bought_styles:{},coins:0,coin_actions:{sequence:0,pending:null},missions:{},visits:0,visit_days:0,last_visit_day:"",versions_played:[],news_seen:[],mission_cycle:0,missions_finished:0,powerups:{},ambient:!0,sfx:!0,gore:!0,cub_names:!0,high_quality:!0,high_quality_manually_toggled:!1,view_distance_locked:null,capture_mouse_cursor:!1,touch_controls:null,quality:null,drain_warning:!1,salt_water_seen:!1,survival_hint_carn:!1,survival_hint_herb:!1,eog_shown:!1,egg_shown:!1,area_gateway_unlocked:!1,area_gateways_unlocked:{},gate_chains:{},gate_chain_hold:0,rocks_broken:{},missions_hint:!1,powerup_hint:!1,photo_mode_hint:!1,run_chase_hint:!1,run_unrun_hint:!1,ever_ran:!1,first_achievement_hint:!1,jump_hint:!1,lava_jump_hint:!1,customize_lesson:!1,carnivore_food_hint_count:0,language:"",azerty:!1,player_id:"",mp_show_name:!1,name_parts:null,name_own:!1,poki_login:!1,recent_emotes:[],last_room:null,day_hour:null,weather:null,loading_tips:null,gifts_used:[]}),Fp=Object.keys(pn()),Jp=Dp(pn()),gS=i=>Gi(JSON.parse(i),pn());function _S(){return typeof document>"u"?"":document.querySelector('meta[name="build-version"]')?.getAttribute("content")?.trim()??""}var xl=i=>parseInt(i.split(".")[1],10)||0;function du(){let[i,e]=Or("\0").split("\0"),t=[];for(let n=0;n<localStorage.length;n++){let s=localStorage.key(n);s.startsWith(i)&&s.endsWith(e)&&t.push(s.slice(i.length,s.length-e.length))}return t.sort((n,s)=>xl(n)-xl(s))}function xS(i,e){try{localStorage.setItem(Or(i),e);let t=du();for(let n of t.slice(0,Math.max(0,t.length-Yp)))localStorage.removeItem(Or(n))}catch{}}var cu=bt(`${on}.runs`),li=1,ci=i=>bt(`${on}.run.${i}`),pl=bt(`${on}.runs.lost`);function Op(){let[i,e]=ci("\0").split("\0"),t=[];for(let n=0;n<localStorage.length;n++){let s=localStorage.key(n);s.startsWith(i)&&s.endsWith(e)&&t.push(s.slice(i.length,s.length-e.length))}return t}var Br=i=>bt(`${on}.runs.backup.${i}`),yS=bt(`${on}.runs.unreadable`),Bp=10,kp=i=>bt(`${on}.face.${i}`),Ur=["life","dead","growth","brood","brood_looks","cubs","dino_name","baby_skeletons","egg","missions","mission_cycle","missions_finished","powerups","health","water","food","energy"],zp=["mission_arrow","double_coins"],hi=i=>su(i,Jp);function Dr(i){let e=Gi(i,pn()),t=Object.fromEntries(Ur.map(s=>[s,e[s]])),n=_l(t);return{...t,...$p(n.cubs),cubs:n.cubs,dino_name:n.dino_name}}var $p=i=>({brood:i.map(e=>e.g),brood_looks:i.map(e=>e.s?{s:e.s,m:e.m??""}:null)}),Vp=JSON.stringify(hi(Object.fromEntries(Ur.map(i=>[i,i==="cubs"?[]:pn()[i]]))));function vS(i,e){return(i.ingame_play_seconds??0)>=(e.ingame_play_seconds??0)}var Gp=i=>[i.dead?0:1,i.growth??0,(i.cubs??i.brood)?.length??0,i.mission_cycle??0,i.missions_finished??0,i.egg??0];function ml(i,e){let t=Gp(i),n=Gp(e);for(let s=0;s<t.length;s++)if(t[s]!==n[s])return t[s]>n[s];return!1}function fu(){let[i,e]=Br("\0").split("\0"),t=[];for(let n=0;n<localStorage.length;n++){let s=localStorage.key(n);s.startsWith(i)&&s.endsWith(e)&&t.push(s.slice(i.length,s.length-e.length))}return t.sort((n,s)=>xl(n)-xl(s))}function SS(i,e){try{localStorage.setItem(Br(i),e);let t=fu();for(let n of t.slice(0,Math.max(0,t.length-Yp)))localStorage.removeItem(Br(n))}catch{}}var MS=Object.freeze({shadow_strength:.6,sun_brightness:1.25,ambient_brightness:1}),hu={use_atlas:!1,skip_egg_click:!1,isle_map:!1,skip_wake:!1,walk_speed:1,ignore_energy:!1,touch_log:!1,no_food:!1,ignore_damage:!1,one_shot_npcs:!1,peaceful:!1,infanticide:!1,save_position:!1,saved_position:null,view_extra:0,hide_ui:!1,test_long_ads:!1,visualize_ads:!0,ads_on_leaving_gameplay:!1,force_ui:"",fps:au,hud:!0,open_sections:null,show_aspect:!1,show_player_pos:!1,show_day_clock:au,show_version:au,gfx_stats:!1,draw_calls:!1,copy_dump:!0,load_trace:!1,prime_picker_dinos:!0,parallel_compile:!1,storm_amount:null,gust:null,sendoff:!1,terrain_noise:"smooth",terrain_noise_tile:12,chain_limit_fade:!1,slowdown_icon:!1,connection_notice:!1,not_saving:!1,mp_client_indicators:!0,mp_hide_peer_names:!1,show_triggers:!1,show_collision:!1,show_nav:!1,show_paths:!1,render_scale:1,day_cycle_speed:1,day_cycle_locked:!1,day_cycle_hour:null,weather_type:"auto",shadow_quality:null,...MS};function cp(){return zt.debug.force_ui==="touch"?!0:zt.debug.force_ui==="desktop"?!1:zt.touch_controls?!0:typeof window>"u"?!1:(navigator.maxTouchPoints??0)>0||"ontouchstart"in window}function cT(){return zt.touch_controls==="offer"&&!zt.debug.force_ui}var bS=1,Hp=()=>(typeof performance>"u"?Date.now():performance.now())/1e3,pu=class{constructor(){Au(this,"powerupGrants",{});Object.assign(this,pn()),this.cubs=[],this.debug={...hu},this._savedAt=null,this._dirty=!1,this._urgent=!1,this._held=!1,this._watching=!1,this._build="",this.returningPlayer=!1,this.foundNoSave=!1,this.saveTroubles=[],this.onSaveTrouble=null,this.notSaving=!1,this.behindStored=!1,this._blockedAtLoad=!1,this._dropped=new Set,this._freeing=null,this._noPhotos=!1,this._runs=null,this._runsBroken=!1,this._savedRunsText="",this._savedRunTexts={},this._legacyRuns=!1,this.resumedRun=null,this.onPark=null}get babies(){return this.cubs.length}addBaby(e=Es){this.mintLife(),this.cubs.push(gu({g:e}))}removeBaby(e=Es,t=-1){if(!this.cubs.length)return;let n=this.cubs[t]?t:this.cubs.findIndex(s=>s.g===gl(e));this.cubs.splice(n>=0?n:this.cubs.length-1,1)}regrowBaby(e,t,n=-1){let s=this.cubs[n]?n:this.cubs.findIndex(r=>r.g===gl(e));s>=0&&(this.cubs[s].g=gl(t))}mintLife(){this.life||(this.life=Math.random().toString(36).slice(2,10))}_syncBrood(){Object.assign(this,$p(this.cubs))}get perDino(){return!0}_trouble(e,t=null){if(this.saveTroubles.some(s=>s.kind===e))return;let n={kind:e,error:t?t.name||"Error":"",message:t?String(t.message??t):""};this.saveTroubles.push(n),this.onSaveTrouble?.(n)}async load(e=_S()){var r,a;this._build=e;let t=!1,n=null;if(this.progressStorage)n=this.progressStorage.load();else try{n=localStorage.getItem(Wn),this._loadedText=n,n||(n=localStorage.getItem(Np),n&&(t=!0,console.info("Adopted an existing save from before this build")))}catch(o){this._storageBroken=!0,this._blockedAtLoad=!0,this.notSaving=!0,this._trouble("blocked",o)}n&&ru(n)&&(console.warn("The save is from a newer build; playing without saving over it"),this._storageBroken=!0,this._trouble("newer"),n=null);let s=!!this.progressStorage;if(!this.progressStorage)try{s=localStorage.getItem(Up)!==null}catch{}if(!this._storageBroken&&!s&&(!n||!qp(n))){let o=await Promise.race([RS().then(l=>({settled:!0,found:l})).catch(()=>({settled:!1})),new Promise(l=>setTimeout(()=>l({settled:!1}),pS))]);if(o.settled)try{localStorage.setItem(Up,o.found?"adopted":"none")}catch{}o.found&&(n=o.found,t=!0,console.info("Adopted an existing save from a Godot build. Wow! Early adopter!"))}if(!this.progressStorage&&!this._storageBroken&&(n=this._pickCopy(n)),n)try{let o=JSON.parse(n),l=Gi(o,pn()),c=o?.b??l.versions_played?.[l.versions_played.length-1];!this.progressStorage&&e&&c&&c!==e&&xS(c,n),this.returningPlayer=!0,this.returning_update_seen=l.returning_update_seen??!1,this.egg_fix_seen=l.egg_fix_seen??!1;for(let u of Object.keys(pn()))u in l&&(this[u]=l[u]);let h=_l(l);this.cubs=h.cubs,this.dino_name=h.dino_name,h.rebuilt&&(this.cubs.length||this.dino_name)&&(t=!0),(this.cubs.length||this.dino_name)&&!this.life&&(this.mintLife(),t=!0),this._otherCopy&&uu(this,{...this._otherCopy,..._l(this._otherCopy)})&&(ft.measure("save","names_salvaged","save"),t=!0),this._otherCopy=null,"first_dino_started"in l||(this.first_dino_started=qp(n)),!("grown_up"in l)&&((l.growth??0)>=1||Fr(l)>0||(l.egg??0)>0)&&(this.grown_up=!0),"half_grown"in l||(this.half_grown=(l.growth??0)>=wS||this.grown_up===!0||Fr(l)>0||(l.egg??0)>0),"first_baby_hatched"in l||(this.first_baby_hatched=Fr(l)>0||(l.achievements?.counts?.hatch_egg??0)>0||l.mp_unlocked===!0)}catch(o){if(this.progressStorage)throw o;try{localStorage.setItem(mS,n)}catch{}this._trouble("unreadable",o)}if(!n&&!this._storageBroken){this.foundNoSave=!0;try{sessionStorage.getItem(ou)&&this._trouble("lost")}catch{}}if(this.returningPlayer?!this.photo_update_seen&&!this.photo_tab&&(this.grown_up||this.growth>=.5)&&(this.photo_tab=!0,this.photo_hint_at=this.ingame_play_seconds+AS):this.photo_update_seen=!0,(this.photo_snapped||this.photo_mode_opened)&&(this.photo_tab=!0),(this.photographed.length||this.catalog_seen.length)&&(this.photo_catalog_lesson=!0),!this._storageBroken)try{let o=JSON.parse(localStorage.getItem(dl))??{};for(let l of Object.keys(this.debug))l in o&&(this.debug[l]=o[l])}catch{}for(let o of["dino_type","last_played_dino"])this[o]==="compi"&&(this[o]="compy");if(Array.isArray(this.dinos_played)&&(this.dinos_played=this.dinos_played.map(o=>o==="compi"?"compy":o)),this.missions&&typeof this.missions=="object")for(let o of Object.keys(this.missions))o.startsWith("compi_")&&((r=this.missions)[a=`compy_${o.slice(6)}`]??(r[a]=this.missions[o]),delete this.missions[o]);for(let o of[this.selected_styles,this.bought_styles])o?.compi&&!o.compy&&(o.compy=o.compi),o&&delete o.compi;!this.last_played_dino&&this.dino_type&&(this.last_played_dino=this.dino_type),this.perDino&&this._ensureRuns(!0),this.dead&&this.resetOnDie(""),t&&this.save()}clearPlayerData(){if(this.progressStorage)throw new Error("Native coin storage cannot be cleared by the web debug menu. Use a separate test profile.");this._cleared=!0;try{for(let s of[Wn,lu,Zp,Np,cu,pl,...Op().map(ci),...du().map(Or),...fu().map(Br)])localStorage.removeItem(s);let[e,t]=kp("\0").split("\0"),n=[];for(let s=0;s<localStorage.length;s++){let r=localStorage.key(s);r.startsWith(e)&&r.endsWith(t)&&n.push(r)}for(let s of n)localStorage.removeItem(s);sessionStorage.removeItem(ou)}catch{}}resetDebugSettings(){Object.assign(this.debug,hu),this._savedDebugText="";try{localStorage.removeItem(dl)}catch{}}save({strict:e=!1}={}){if(!this._saveBatch){if(e&&this.progressStorage?.asynchronous)throw new Error("Synchronous transactions require synchronous storage");if(e&&(this._storageBroken||this._cleared||this._held))throw new Error("Progress cannot be saved");if(this._held){this._dirty=!0,this._urgent=!0;return}if(!this._storageBroken)try{if(!this._cleared){this.first_saved||(this.first_saved=Date.now()),this.perDino&&this.progressStorage&&this._saveRuns(),this._syncBrood();let t=()=>{let s={};for(let r of Fp)s[r]=this[r];return JSON.stringify(this.progressStorage?s:su(s,Jp,this._build))},n=t();if(n!==(this._queuedText??this._savedText??this._loadedText)&&(this.saved_at=Date.now(),n=t()),n!==(this._queuedText??this._savedText))if(this.progressStorage?.asynchronous)this._queuedText=n,this._pendingSave=this.progressStorage.save(n).then(()=>{this._savedText=n},s=>{this._saveError=s,this._storageBroken=!0});else{if(this.progressStorage)this.progressStorage.save(n);else{if(this._behindStored()){if(this.behindStored=!0,this.notSaving=!0,this._dirty=!0,this._trouble("behind"),e)throw new Error("Progress cannot be saved");return}localStorage.setItem(Wn,n),(!this._verified||this.notSaving)&&this._verifyWrite(n)}this._savedText=n}this.progressStorage||(this.perDino&&this._saveRuns(),this._writeMirror(this._savedText))}e||this._saveDebugFlags()}catch(t){if(!this.progressStorage&&!e&&t?.name==="QuotaExceededError"){let n=this._spareKeys();if(n.length){ft.measure("save",n[0].includes(".face.")?"quota_faces":"quota_backups",String(n.length));for(let s of n){this._dropped.add(s);try{localStorage.removeItem(s)}catch{}}return this.save()}if(this._dropPhoto()){this._dirty=!0;return}}if(this._saveError=t,this.progressStorage||e?this._storageBroken=!0:this.notSaving=!0,this._dirty=!0,this._trouble("write",t),e)throw t}}}_writeMirror(e){if(!e)return;let t=`{"at":${this.saved_at||0},"save":${e},"runs":${JSON.stringify(this.perDino?this._mirrorRuns??{}:{})}}`;if(t!==this._mirrorText)try{localStorage.setItem(lu,t),this._mirrorText=t}catch(n){this._mirrorFailed||ft.measure("save","mirror_write",n?.name||"Error"),this._mirrorFailed=!0}}_pickCopy(e){this._otherCopy=null;let t=null;try{t=JSON.parse(localStorage.getItem(lu))}catch{}if(!t||typeof t!="object"||!t.save||typeof t.save!="object")return e;let n=JSON.stringify(t.save),s=Wp(n);if(!s)return e;let r=Wp(e),a=!r||Xp(s,r),o=e;if(a&&n!==e){o=n,ft.measure("save","restored_local",r?"behind":e?"empty":"missing");try{localStorage.setItem(Wn,o)}catch{}this._loadedText=o,this._otherCopy=r}else this._otherCopy=s;return this.perDino&&this._restoreRuns(t.runs,a||!Xp(r,s)),o}_restoreRuns(e,t){if(!(!e||typeof e!="object"))for(let[n,s]of Object.entries(e)){let r;try{r=Dr(s)}catch{continue}let a=null;try{a=JSON.parse(localStorage.getItem(ci(n)))}catch{}if(a&&!(a.v<=li))continue;let o=null;try{o=a?.run?Dr(a.run):null}catch{}let l=c=>{try{localStorage.setItem(ci(n),JSON.stringify({v:li,b:this._build,run:hi(c)}))}catch{}};if(!o||ml(r,o)){if(!t||r.dead)continue;o&&uu(r,o),l(r),ft.measure("save","restored_local_run",n)}else uu(o,r)&&(l(o),ft.measure("save","names_salvaged",n))}}_spareKeys(){try{let[e]=kp("\0").split("\0"),t=[];for(let s=0;s<localStorage.length;s++){let r=localStorage.key(s);r.startsWith(e)&&t.push(r)}let n=[...du().map(Or),...fu().map(Br)].filter(s=>!this._dropped.has(s));return n.length?n:t.filter(s=>!this._dropped.has(s))}catch{return[]}}_dropPhoto(){return this._freeing?!0:this._noPhotos?!1:(this._freeing=import("./photos-VXAKA5GR.js").then(({dropOldestPhoto:e})=>e()).catch(()=>!1).then(e=>{this._freeing=null,e?ft.measure("save","quota_photo",String(this._photosDropped=(this._photosDropped??0)+1)):this._noPhotos=!0,this._dirty=!0,this.flush()}),!0)}_behindStored(){if(this.behindStored)return!0;let e=localStorage.getItem(Wn);if(!e||e===this._savedText||e===this._loadedText)return!1;try{return!vS(this,Gi(JSON.parse(e),pn()))}catch{return!1}}keepThisSave(){if(this.behindStored){this.behindStored=!1;try{this._loadedText=localStorage.getItem(Wn)}catch{}this.perDino&&this._mergeStoredRuns(),this.retrySave()}}_mergeStoredRuns(){let e=this._ensureRuns(),t;try{t=this._readRunKeys()}catch{return}if(t)for(let{type:n,packed:s}of t.runs){if(n===this.dino_type)continue;let r;try{r=Dr(s)}catch{continue}let a=e.parked[n];if(!a){r.dead||(e.parked[n]=r);continue}ml(r,a)&&(this._keepLost(n,a),e.parked[n]=r)}}storedSave(){try{let e=localStorage.getItem(Wn);return e?Gi(JSON.parse(e),pn()):null}catch{return null}}lifeOf(e,t=null){if(!t)return e===this.dino_type?this._runOf():this._ensureRuns().parked[e]??null;if(t.dino_type===e)return Object.fromEntries(Ur.map(n=>[n,t[n]]));try{let n=JSON.parse(localStorage.getItem(ci(e)));return n?.run?Dr(n.run):null}catch{return null}}retrySave(){if(this.progressStorage||this._cleared||this._held)return!this.notSaving;if(this.debug.not_saving)return!1;if(this._blockedAtLoad){try{localStorage.getItem(Wn)}catch{return!1}this._blockedAtLoad=!1,this._storageBroken=!1}return this._savedText=null,this._dirty=!0,this.flush(),!this.notSaving}async saveDurably(){if(this._held||this._cleared||this._saveBatch)throw new Error("Progress writes are held");this.save();let e;do e=this._pendingSave,await e;while(e!==this._pendingSave);if(this._storageBroken)throw this._saveError??new Error("Progress cannot be saved")}atomicSave(e){if(this.progressStorage?.asynchronous)throw new Error("Synchronous transactions require synchronous storage");if(this._saveBatch)throw new Error("Nested save transaction");if(this._storageBroken||this._cleared||this._held)throw new Error("Progress cannot be saved");let t=JSON.parse(JSON.stringify(Object.fromEntries(Fp.map(a=>[a,this[a]])))),n=this.flying_coins,s=this.displayCoins,r;this._saveBatch=!0;try{if(r=e(),r?.then)throw new Error("Save transaction must be synchronous");this.flying_coins=Math.min(this.flying_coins??0,this.coins),this._saveBatch=!1,this.save({strict:!0})}catch(a){throw this._saveBatch=!1,Object.assign(this,t),this.flying_coins=n,a}if(s!==this.displayCoins)for(let a of this._coinListeners??[])a(this.displayCoins,s);return r}_verifyWrite(e){this._verified=!0,this.notSaving=localStorage.getItem(Wn)!==e,this.notSaving&&this._trouble("readback");try{sessionStorage.setItem(ou,"1")}catch{}}_saveDebugFlags(){let e={};for(let[n,s]of Object.entries(hu))this.debug[n]!==s&&(e[n]=this.debug[n]);let t=Object.keys(e).length===0?"":JSON.stringify(e);t!==this._savedDebugText&&(this._savedDebugText=t,t===""?localStorage.removeItem(dl):localStorage.setItem(dl,t))}requestSave(){this._dirty=!0}saveNow(){this._dirty=!0,this._urgent=!0}update(){if(!this._dirty)return;let e=Hp();this._savedAt===null&&(this._savedAt=e),!(!this._urgent&&e-this._savedAt<bS)&&this.flush()}flush(){!this._dirty||this._held||(this._savedAt=Hp(),this._dirty=!1,this._urgent=!1,this.save())}holdWrites(e){this._held=e,e||this.flush()}watchPage(){this._watching||typeof document>"u"||(this._watching=!0,document.addEventListener("visibilitychange",()=>{document.hidden&&this.flush()}),typeof window<"u"&&window.addEventListener("pagehide",()=>this.flush()))}clearSavedPosition(){this.debug.saved_position=null}resetOnDie(e){this._resetRun(e),this.save()}_resetRun(e){this.clearSavedPosition(),this.resumedRun=null,this.life="",this.dead=!1,this.growth=0,this.brood=[],this.brood_looks=[],this.cubs=[],this.dino_name="",this.baby_skeletons=[],this.egg=0,this.missions={},this.mission_cycle=0,this.missions_finished=0;let t={};for(let n of["mission_arrow","double_coins"])this.powerups[n]&&(t[n]=this.powerups[n]);this.powerups=t,this.health=ui,this.food=ui,this.water=ui,this.energy=ui,this.dino_type=e,e&&(this.last_played_dino=e)}restartAs(e,{fresh:t=!1}={}){if(!this.perDino||e===this.dino_type)return this.resetOnDie(e);this._park(),this._resetRun(e),t?this.dropParked(e):this._takeParked(e),this.save()}pickDino(e,{fresh:t=!1}={}){this.resumedRun=null,t?this.dropParked(e):this.perDino&&this._takeParked(e),this.dino_type=e,this.last_played_dino=e,this.save()}parkRun(){this.perDino&&(this._park(),this._resetRun(""),this.save())}hasParked(e){return this.perDino&&e!==this.dino_type&&!!this._ensureRuns().parked[e]}parkedGrowth(e){return this._ensureRuns().parked[e]?.growth??null}parkedLives(){return Object.values(this._ensureRuns().parked).map(e=>e.life).filter(Boolean)}parkedTypes(){return this.perDino?Object.keys(this._ensureRuns().parked).filter(e=>e!==this.dino_type):[]}dropParked(e){this.perDino&&delete this._ensureRuns().parked[e]}_runOf(){this._syncBrood();let e={};for(let t of Ur)e[t]=this[t]===void 0?void 0:JSON.parse(JSON.stringify(this[t]));for(let t of zp)delete e.powerups?.[t];return e}_applyRun(e){let t={};for(let s of zp)this.powerups?.[s]&&(t[s]=this.powerups[s]);for(let s of Ur)e[s]!==void 0&&(this[s]=JSON.parse(JSON.stringify(e[s])));let n=_l(e);this.cubs=n.cubs,this.dino_name=n.dino_name,this.powerups={...this.powerups??{},...t}}_keepLost(e,t,n=this._build){let s=JSON.stringify(hi(t));if(s===Vp)return;let r=this._ensureRuns();r.lost.push({type:e,run:JSON.parse(s),b:n}),r.lost.splice(0,Math.max(0,r.lost.length-Bp))}_park(){let e=this._ensureRuns();if(!this.dino_type||this.dead)return;let t=this._runOf();JSON.stringify(hi(t))!==Vp&&(e.parked[this.dino_type]&&this._keepLost(this.dino_type,e.parked[this.dino_type]),e.parked[this.dino_type]=t,this.onPark?.(this.dino_type))}_takeParked(e){let t=this._ensureRuns(),n=t.parked[e];n&&(this._keepLost(this.dino_type||e,this._runOf()),delete t.parked[e],this._applyRun(n),this.resumedRun=e,this.news_seen.includes("saves")||this.news_seen.push("saves"))}_ensureRuns(e=!1){if(this._runs)return this._runs;let t=this._runs={parked:{},lost:[]};if(this._storageBroken)return t;let n;try{n=this.progressStorage?this._readNativeRuns():this._readRunKeys()}catch{return this._runsBroken=!0,t}if(!n)return t;t.lost=n.lost;for(let{type:s,packed:r,b:a}of n.runs){let o;try{o=Dr(r)}catch{t.lost.push({type:s,run:r,b:a});continue}if(s!==this.dino_type){if(o.dead)continue;if(t.parked[s]){let[c,h]=ml(o,t.parked[s])?[o,t.parked[s]]:[t.parked[s],o];t.parked[s]=c,this._keepLost(s,h,a)}else t.parked[s]=o;continue}let l=this._runOf();JSON.stringify(hi(o))!==JSON.stringify(hi(l))&&(e&&ml(o,l)?(this._keepLost(s,l),this._applyRun(o)):this._keepLost(s,o,a))}return t.lost.splice(0,Math.max(0,t.lost.length-Bp)),t}_readNativeRuns(){let e=this.dino_runs;if(!e)return null;if(!(e.v<=li))throw new Error("newer runs");return this._savedRunsText=JSON.stringify(e),{lost:Array.isArray(e.lost)?e.lost:[],runs:Object.entries(e.runs??{}).map(([t,n])=>({type:t,packed:n,b:e.b}))}}_readRunKeys(){let e={lost:[],runs:[]},t=o=>{try{let l=JSON.parse(o);if(l&&typeof l=="object")return l}catch{}try{localStorage.setItem(yS,o)}catch{this._runsBroken=!0}return null},n=new Set,s=localStorage.getItem(cu);if(s){let o=t(s);if(o&&!(o.v<=li))throw new Error("newer runs");if(this._legacyRuns=!0,o){Array.isArray(o.lost)&&e.lost.push(...o.lost);for(let[l,c]of Object.entries(o.runs??{}))e.runs.push({type:l,packed:c,b:o.b});o.b&&n.add(o.b)}}for(let o of Op()){let l=localStorage.getItem(ci(o));this._savedRunTexts[o]="";let c=l&&t(l);if(c){if(!(c.v<=li))throw new Error("newer runs");this._savedRunTexts[o]=l,e.runs.push({type:o,packed:c.run,b:c.b}),c.b&&n.add(c.b)}}let r=localStorage.getItem(pl);if(r){let o=t(r);Array.isArray(o)&&e.lost.push(...o),this._savedLostText=r}if(!e.runs.length&&!e.lost.length&&!s)return null;let a=[...n].find(o=>this._build&&o!==this._build);return a&&SS(a,JSON.stringify({v:li,b:a,lost:e.lost,runs:Object.fromEntries(e.runs.map(({type:o,packed:l})=>[o,l]))})),e}_saveRuns(){let e=this._ensureRuns();if(this._runsBroken)return;this.dino_type&&e.parked[this.dino_type]&&(this._keepLost(this.dino_type,e.parked[this.dino_type]),delete e.parked[this.dino_type]);let t={};for(let[s,r]of Object.entries(e.parked))t[s]=hi(r);if(this.dino_type&&(t[this.dino_type]=hi(this._runOf())),this._mirrorRuns=t,this.progressStorage){let s={v:li,b:this._build,active:this.dino_type,runs:t};e.lost.length&&(s.lost=e.lost);let r=JSON.stringify(s);if(r===this._savedRunsText)return;this.dino_runs=s,this._savedRunsText=r;return}for(let[s,r]of Object.entries(t)){let a=JSON.stringify({v:li,b:this._build,run:r});a!==this._savedRunTexts[s]&&(localStorage.setItem(ci(s),a),this._savedRunTexts[s]=a)}for(let s of Object.keys(this._savedRunTexts))s in t||(localStorage.removeItem(ci(s)),delete this._savedRunTexts[s]);let n=e.lost.length?JSON.stringify(e.lost):null;n!==(this._savedLostText??null)&&(n?localStorage.setItem(pl,n):localStorage.removeItem(pl),this._savedLostText=n),this._legacyRuns&&(localStorage.removeItem(cu),this._legacyRuns=!1)}revive(){this.health=fl,this.food=fl,this.water=fl,this.energy=fl,this.dead=!1,this.save()}get displayCoins(){return this.coins-(this.flying_coins??0)}onCoinsChanged(e){return(this._coinListeners??(this._coinListeners=new Set)).add(e),()=>this._coinListeners.delete(e)}_setCoins(e){let t=this.displayCoins;if(this.coins=e,!this._saveBatch)for(let n of this._coinListeners??[])n(this.displayCoins,t);this.save()}setCoins(e){this._setCoins(e)}addCoins(e,{flying:t=!1,source:n="",report:s=!0}={}){s&&n&&ft.measure("coins",n,Cn.earned),t&&(this.flying_coins=(this.flying_coins??0)+e),this._setCoins(this.coins+e)}coinMultiplier(){return this.hasPowerup("double_coins")?this.getPowerupStrength("double_coins"):1}payCoins(e,t=""){t&&ft.measure("coins",t,Cn.spent),this._setCoins(this.coins-e)}flyingCoinArrives(e=1){let t=this.displayCoins;this.flying_coins=(this.flying_coins??0)-e;for(let n of this._coinListeners??[])n(this.displayCoins,t)}hasPowerup(e){return!!this.powerups[e]?.length}givePowerup(e,t,n,{aura:s=!1,eggs:r=null,target:a=null,achievement:o=null,challenge:l=null}={}){this.powerups[e]||(this.powerups[e]=[]);let c={timer:t,strength:n,aura:s};r&&(c.eggs=r),o&&(c.achievement=o),l&&(c.challenge=l),a&&(c.target=a),this.powerups[e].push(c),this.powerups[e].sort((h,u)=>u.strength-h.strength),this.powerupGrants[e]=(this.powerupGrants[e]??0)+1,this.save()}buyPowerup(e,t,n,s){this.powerups_bought={...this.powerups_bought,[e]:!0},this.givePowerup(e,t,n,s)}powerupHasAura(e){return!!this.powerups[e]?.some(t=>t.aura)}getPowerupStrength(e){return this.powerups[e]?.[0]?.strength??1}getPowerupDuration(e){return(this.powerups[e]??[]).reduce((t,n)=>t+n.timer,0)}updatePowerups(e){for(let t of Object.keys(this.powerups)){let n=this.powerups[t];if(!n?.length){delete this.powerups[t];continue}n[0].timer-=e,n[0].timer<=0&&(n.shift(),n.length===0&&delete this.powerups[t])}}getSelectedStyleId(e,t){return this.selected_styles?.[e]?.[t]??""}getSelectedStyle(e,t){return this.getSelectedStyleId(e,t)}setSelectedStyle(e,t,n){if(this.selected_styles[e]||(this.selected_styles[e]={}),this.selected_styles[e][t]!==n){this.selected_styles[e][t]=n,this.save();for(let s of this._styleListeners??[])s(e,t)}}onStyleChanged(e){return(this._styleListeners??(this._styleListeners=new Set)).add(e),()=>this._styleListeners.delete(e)}isStyleBought(e,t,n){let s=this.bought_styles?.[e]?.[t];return Array.isArray(s)&&s.includes(n)}markStyleBought(e,t,n){this.isStyleBought(e,t,n)||(this.bought_styles[e]||(this.bought_styles[e]={}),Array.isArray(this.bought_styles[e][t])||(this.bought_styles[e][t]=[]),this.bought_styles[e][t].push(n),this.save())}isStyleAvailable(e,t,n){return(n?.cost??0)<=0?!0:this.isStyleBought(e,t,n.id)}};function hT(){return zt.first_baby_hatched===!0||zt.mp_unlocked===!0}var wS=.5,AS=300;function Fr(i){if(Array.isArray(i?.cubs))return i.cubs.length;if(Array.isArray(i?.brood))return i.brood.length;let e=Number(i?.babies);return Number.isFinite(e)&&e>0?Math.floor(e):0}function uT(){return zt.debug.sendoff?tu:eu}function dT(){return zt.debug.sendoff?Ep:eu}function TS(i){let e=Number(i);return Number.isFinite(e)?Math.min(tu,Math.max(Es,e)):Es}var gl=i=>Math.round(TS(i)*1e4)/1e4;function gu(i){let e=i&&typeof i=="object"?i:{g:i},t={g:gl(e.g)};return typeof e.n=="string"&&e.n&&(t.n=e.n,typeof e.l=="string"&&e.l&&(t.l=e.l)),e.s&&typeof e.s=="object"&&!Array.isArray(e.s)&&(t.s=e.s),typeof e.m=="string"&&e.m&&(t.m=e.m),t}var mu=i=>i&&typeof i=="object"&&typeof i.n=="string"&&i.n?typeof i.l=="string"&&i.l?{n:i.n,l:i.l}:{n:i.n}:"",Zp=`poki_ignore_${bt(`${on}.names`)}`,Nr=null;function ES(){if(Nr)return Nr;Nr={};try{let i=JSON.parse(localStorage.getItem(Zp)||"{}");i&&typeof i=="object"&&(Nr=i)}catch{}return Nr}function Wp(i){if(!i)return null;try{let e=JSON.parse(i);if(!e||typeof e!="object"||Array.isArray(e)||ru(i))return null;let t=Gi(e,pn());return!t||typeof t!="object"?null:(t.ingame_play_seconds??0)>0||(t.first_saved??0)>0||!!t.dino_type||(t.coins??0)>0?t:null}catch{return null}}function Xp(i,e){let t=Number(i.ingame_play_seconds)||0,n=Number(e.ingame_play_seconds)||0;return t!==n?t>n:(Number(i.saved_at)||0)>(Number(e.saved_at)||0)}function uu(i,e){if(!i.life||i.life!==e?.life)return!1;let t=!1;!i.dino_name&&e.dino_name&&(i.dino_name=e.dino_name,t=!0);let n=Array.isArray(e.cubs)?e.cubs:[];return(i.cubs??[]).forEach((s,r)=>{let a=n[r];a&&(a.n&&!s.n&&(s.n=a.n,a.l&&(s.l=a.l),t=!0),a.s&&!s.s&&(s.s=a.s,a.m&&(s.m=a.m),t=!0))}),t}function CS(i){let e=i.life&&ES()[i.life]||{},t=Array.isArray(e.babies)?e.babies:[],n=Array.isArray(i.brood_looks)?i.brood_looks:[];return{cubs:(Array.isArray(i.brood)?i.brood:Array.from({length:Fr(i)},()=>Es)).map((r,a)=>gu({g:r,n:t[a]?.name,l:t[a]?.lang,s:n[a]?.s,m:n[a]?.m})),dino_name:e.name?mu({n:e.name,l:e.lang}):""}}function _l(i){if(Array.isArray(i.cubs))return{cubs:i.cubs.map(gu),dino_name:mu(i.dino_name),rebuilt:!1};let e=CS(i);return{...e,dino_name:mu(i.dino_name)||e.dino_name,rebuilt:!0}}function qp(i){try{let e=gS(i);return(e.coins??0)>0||(e.growth??0)>0||Fr(e)>0?!0:Object.values(e.bought_styles??{}).some(t=>Object.values(t??{}).some(n=>(n?.length??0)>0))}catch{return!1}}function RS(){return new Promise((i,e)=>{if(typeof indexedDB>"u")return i(null);let t=indexedDB.open("/userfs"),n=!0;t.onupgradeneeded=()=>{n=!1,t.transaction.abort()},t.onerror=()=>i(null),t.onsuccess=()=>{let s=t.result;if(!n||!s.objectStoreNames.contains("FILE_DATA"))return s.close(),i(null);try{let o=s.transaction("FILE_DATA","readonly").objectStore("FILE_DATA").openCursor();o.onerror=()=>{s.close(),i(null)},o.onsuccess=()=>{let l=o.result;if(!l)return s.close(),i(null);if(String(l.key).endsWith("global_settings.json")){let c=l.value?.contents;s.close(),i(c?new TextDecoder().decode(c):null);return}l.continue()}}catch(r){s.close(),e(r)}}})}var zt=new pu;export{Qf as a,mr as b,kn as c,kt as d,bn as e,Ai as f,Jc as g,xd as h,Kn as i,wd as j,Td as k,fn as l,Qc as m,Sa as n,yn as o,Ma as p,Mt as q,kd as r,_r as s,At as t,ao as u,ii as v,an as w,Ot as x,Bt as y,ho as z,zd as A,Vd as B,Ws as C,ba as D,uh as E,rm as F,am as G,om as H,Kt as I,Ei as J,lm as K,Am as L,Ie as M,Wt as N,I as O,Ge as P,Lt as Q,at as R,jt as S,Ft as T,Pt as U,Ne as V,sn as W,dt as X,Pe as Y,rn as Z,Zs as _,wt as $,rt as aa,_t as ba,Tt as ca,ps as da,tf as ea,Qt as fa,Qs as ga,It as ha,er as ia,bi as ja,nc as ka,ic as la,nr as ma,ir as na,Ra as oa,sc as pa,rc as qa,Ia as ra,Bn as sa,ac as ta,sr as ua,oc as va,Qn as wa,cc as xa,La as ya,rr as za,hc as Aa,uc as Ba,Ua as Ca,fc as Da,pc as Ea,ei as Fa,mc as Ga,gc as Ha,_c as Ia,Sc as Ja,hr as Ka,Mc as La,bc as Ma,ka as Na,wc as Oa,Ac as Pa,za as Qa,Ec as Ra,Ii as Sa,Pi as Ta,Li as Ua,Di as Va,fr as Wa,br as Xa,ti as Ya,Rc as Za,qa as _a,Ic as $a,Lc as ab,Nc as bb,_s as cb,Fc as db,Oc as eb,Bc as fb,kc as gb,zc as hb,Vc as ib,st as jb,Hc as kb,Wc as lb,Xc as mb,Ue as nb,oe as ob,Pf as pb,Fh as qb,dw as rb,Cr as sb,fw as tb,pw as ub,kf as vb,zf as wb,_w as xb,Gf as yb,Bf as zb,Pv as Ab,Xh as Bb,cA as Cb,Yh as Db,kv as Eb,uA as Fb,sl as Gb,bt as Hb,Hf as Ib,qf as Jb,Mw as Kb,Jf as Lb,bw as Mb,ww as Nb,$f as Ob,Aw as Pb,Tw as Qb,Rw as Rb,ai as Sb,Zf as Tb,Vh as Ub,Gh as Vb,Pw as Wb,ws as Xb,Lw as Yb,Dw as Zb,Nw as _b,Uw as $b,Fw as ac,Ow as bc,Bw as cc,jf as dc,kw as ec,zw as fc,Vw as gc,Gw as hc,Hw as ic,Ww as jc,Xw as kc,qw as lc,Yw as mc,Jw as nc,$w as oc,Zw as pc,Kw as qc,jw as rc,Qw as sc,eA as tc,tA as uc,nA as vc,iA as wc,cl as xc,rS as yc,VA as zc,aS as Ac,Es as Bc,Qh as Cc,GA as Dc,oS as Ec,HA as Fc,WA as Gc,cS as Hc,hS as Ic,XA as Jc,qA as Kc,YA as Lc,JA as Mc,$A as Nc,dS as Oc,ZA as Pc,KA as Qc,jA as Rc,QA as Sc,Wn as Tc,oT as Uc,lT as Vc,_S as Wc,kp as Xc,cp as Yc,cT as Zc,hT as _c,wS as $c,AS as ad,uT as bd,dT as cd,zt as dd,Jh as ed,pA as fd,mA as gd,zv as hd,Vv as id,yA as jd,vA as kd,SA as ld,MA as md,Hv as nd,bA as od,Cn as pd,oi as qd,OA as rd,mp as sd,ft as td};
