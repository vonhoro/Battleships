(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),l=a(5),n=a.n(l),i=(a(11),a(2)),o=a(1);var c=function(e){var t,a=e.Squares,s=e.Targets,l=e.Targets,n=e.Targets,i=0,o=function(){};return r.a.createElement("div",{className:e.className,id:e.id,onDrop:function(e){e.preventDefault();var t=e.target.parentElement,a=e.target.parentElement.children,s=parseInt(e.target.classList[1]),r=e.dataTransfer.getData("ship"),l=document.getElementById(r);if(null!==l){l.style.display="block";var n=l.classList[1],i=l.children.length;if("Vertical"===n){if(10*(i-1)+s>99)return void(l.style.display="flex");for(var o=1;o<i;o++)if("Square"!==a[s+10*o].classList[0])return void(l.style.display="flex");for(var c=0;c<i;c++)l.children[0].classList.add(s+10*c),t.replaceChild(l.children[0],a[s+10*c])}else{for(var u=1;u<11;u++)if(s<10*u&&i+s>10*(u-1)+10)return void(l.style.display="flex");for(var d=1;d<i;d++)if("Square"!==a[s+1*d].classList[0])return void(l.style.display="flex");for(var m=0;m<i;m++)l.children[0].classList.add(s+1*m),t.replaceChild(l.children[0],a[s+1*m])}l.style.display="none"}},onDragOver:function(e){e.preventDefault()},draggable:"false"},a.map((function(a,c){return r.a.createElement("div",{className:"Square ".concat(c-100*(e.GameNumber-1)),key:c,onClick:2===e.Player?function(a){return function(a,r){if(e.Play&&!(a.target.classList.length>2)&&0!==s)if(isNaN(r)?(a.target.classList.add("red"),s-=1):a.target.classList.add("blue"),0!==s){var o=a.target.parentElement.previousElementSibling.children;n>l?setTimeout((function(){if(0===t){if(o[i=1].classList.length>2&&(i=10),o[i].classList.length>2)do{i=Math.floor(100*Math.random())}while(o[i].classList.length>2);"Square"===o[i].classList[0]?(o[i].classList.add("blue"),n-=1):(o[i].classList.add("red"),l-=1,n-=1)}else if(9===t){if(o[i=8].classList.length>2&&(i=19),o[i].classList.length>2)do{i=Math.floor(100*Math.random())}while(o[i].classList.length>2);"Square"===o[i].classList[0]?(o[i].classList.add("blue"),n-=1):(o[i].classList.add("red"),l-=1,n-=1)}else if(90===t){if(o[i=80].classList.length>2&&(i=91),o[i].classList.length>2)do{i=Math.floor(100*Math.random())}while(o[i].classList.length>2);"Square"===o[i].classList[0]?(o[i].classList.add("blue"),n-=1):(o[i].classList.add("red"),l-=1,n-=1)}else if(99===t){if(o[i=89].classList.length>2&&(i=98),o[i].classList.length>2)do{i=Math.floor(100*Math.random())}while(o[i].classList.length>2);"Square"===o[i].classList[0]?(o[i].classList.add("blue"),n-=1):(o[i].classList.add("red"),l-=1,n-=1)}else if(t>0&&t<9){if(o[i=t+1].classList.length>2&&(i=t+10),o[i].classList.length>2&&(i=t-1),o[i].classList.length>2)do{i=Math.floor(100*Math.random())}while(o[i].classList.length>2);"Square"===o[i].classList[0]?(o[i].classList.add("blue"),n-=1):(o[i].classList.add("red"),l-=1,n-=1)}else if(t%10===9){if(o[i=t+10].classList.length>2&&(i=t-1),o[i].classList.length>2&&(i=t-10),o[i].classList.length>2)do{i=Math.floor(100*Math.random())}while(o[i].classList.length>2);"Square"===o[i].classList[0]?(o[i].classList.add("blue"),n-=1):(o[i].classList.add("red"),l-=1,n-=1)}else if(t>90&&t<99){if(o[i=t-10].classList.length>2&&(i=t+1),o[i].classList.length>2&&(i=t-1),o[i].classList.length>2)do{i=Math.floor(100*Math.random())}while(o[i].classList.length>2);"Square"===o[i].classList[0]?(o[i].classList.add("blue"),n-=1):(o[i].classList.add("red"),l-=1,n-=1)}else if(t%10===0){if(o[i=t+10].classList.length>2&&(i=t+1),o[i].classList.length>2&&(i=t-10),o[i].classList.length>2)do{i=Math.floor(100*Math.random())}while(o[i].classList.length>2);"Square"===o[i].classList[0]?(o[i].classList.add("blue"),n-=1):(o[i].classList.add("red"),l-=1,n-=1)}else{if(o[i=t+10].classList.length>2&&(i=t+1),o[i].classList.length>2&&(i=t-10),o[i].classList.length>2&&(i=t-1),o[i].classList.length>2)do{i=Math.floor(100*Math.random())}while(o[i].classList.length>2);"Square"===o[i].classList[0]?(o[i].classList.add("blue"),n-=1):(o[i].classList.add("red"),l-=1,n-=1)}0!==l?t=i:document.getElementById("Losing-message").style.display="block"}),500):setTimeout((function(){do{t=Math.floor(100*Math.random())}while(o[t].classList.length>2);"Square"===o[t].classList[0]?o[t].classList.add("blue"):(o[t].classList.add("red"),l-=1),0!==l||(document.getElementById("Losing-message").style.display="block")}),500)}else document.getElementById("Winning-message").style.display="block"}(a,e.Position[c-100*(e.GameNumber-1)])}:o},c-100*(e.GameNumber-1))})))};var u=function(e){var t=e.Ships,a=function(e){var t=e.target;e.dataTransfer.setData("ship",t.id)},s=function(e){e.stopPropagation()};return r.a.createElement("div",{className:"Ships"},t.Structure.map((function(l,n){return r.a.createElement("div",{className:t.Names[n]+"-container  Vertical",id:n,key:n+1,onDragStart:a,onDragOver:s,draggable:e.Drag},l.map((function(e,a){return r.a.createElement("div",{className:t.Names[n],key:a},e)})))})))};var d=function(e,t,a){if(a){var s=Array.from(Array(100)).map((function(e,t){return t+1}));return console.log(s),s}var r,l,n,o=e,c=t.Structure,u=Object(i.a)(c);try{for(u.s();!(n=u.n()).done;){var d=n.value;console.log(d),Math.floor(100*Math.random())>50?function(){var e=void 0,t=void 0,a=void 0,s=function(){t=0,r=Math.floor(10*Math.random()),l=Math.floor(Math.random()*(10-d.length)),e=r+10*l;var s=o.filter((function(e){return isNaN(e)}));0!==s.length&&s.forEach((function(e,t){s[t]=parseInt(e.slice(1))}));var n,c=0,u=Object(i.a)(d);try{for(u.s();!(n=u.n()).done;){n.value;a=s.some((function(t){return t===e+10*c})),c+=1,a&&(t+=1)}}catch(m){u.e(m)}finally{u.f()}};do{s()}while(t>0);var n=0;d.forEach((function(e,t,a){var s=r+10*n+10*l,i=s+1,c="a"+s.toString();o.fill(c,s,i),n+=1}))}():function(){var e=void 0,t=void 0,a=void 0,s=function(){t=0,r=Math.floor(Math.random()*(10-d.length)),l=Math.floor(10*Math.random()),e=r+10*l;var s=o.filter((function(e){return isNaN(e)}));0!==s.length&&s.forEach((function(e,t){s[t]=parseInt(e.slice(1))}));var n,c=0,u=Object(i.a)(d);try{for(u.s();!(n=u.n()).done;){n.value;a=s.some((function(t){return t===e+1*c})),c+=1,a&&(t+=1)}}catch(m){u.e(m)}finally{u.f()}};do{s()}while(t>0);console.log(d);for(var n=0;n<d.length;n+=1){var c="a"+(e+n).toString();o.fill(c,e+n,e+n+1)}}()}}catch(m){u.e(m)}finally{u.f()}return console.log(o),o};var m=function(e,t,a,s){var r=parseInt(e)+parseInt(t)+parseInt(a)+parseInt(s),l=e,n=t,i=a,o=s,c=Array.from(Array(r)).map((function(e){return l>0?(e="Carrier",l-=1):n>0?(e="BattleShip",n-=1):i>0?(e="Submarine",i-=1):o>0&&(e="Destroyer",o-=1),e}));return l=e,n=t,i=a,o=s,{Structure:Array.from(Array(r)).map((function(e){return l>0?(e=["","","","",""],l-=1):n>0?(e=["","","",""],n-=1):i>0?(e=["","",""],i-=1):o>0&&(e=["",""],o-=1),e})),Names:c}};var f=function(){var e,t=Object(s.useState)(1),a=Object(o.a)(t,2),l=a[0],n=a[1],f=Object(s.useState)(Array.from(Array(100)).map((function(e,t){return t+1}))),h=Object(o.a)(f,2),g=h[0],v=h[1],y=Object(s.useState)(Array.from(Array(100)).map((function(e,t){return t+1}))),b=Object(o.a)(y,2),L=b[0],p=b[1],N=Object(s.useState)(100),E=Object(o.a)(N,2),S=E[0],A=E[1],j=Object(s.useState)(0),M=Object(o.a)(j,2),O=M[0],w=M[1],C=Object(s.useState)(0),k=Object(o.a)(C,2),B=k[0],P=k[1],q=Object(s.useState)(0),D=Object(o.a)(q,2),T=D[0],x=D[1],I=Object(s.useState)(0),V=Object(o.a)(I,2),F=V[0],G=V[1],W=Object(s.useState)(m(O,B,T,F)),z=Object(o.a)(W,2),H=z[0],J=z[1],Y=Object(s.useState)(!1),R=Object(o.a)(Y,2),$=R[0],K=R[1],Q=Object(s.useState)(!1),U=Object(o.a)(Q,2),X=U[0],Z=U[1],_=[{Name:"Carriers",Function:function(e){""!==e.target.value&&(e.target.valueAsNumber>4||(w(e.target.valueAsNumber),J(m(e.target.valueAsNumber,B,T,F))))}},{Name:"Battleships",Function:function(e){""!==e.target.value&&(e.target.valueAsNumber>4||(P(e.target.value),J(m(O,e.target.valueAsNumber,T,F))))}},{Name:"Submarines",Function:function(e){""!==e.target.value&&(e.target.valueAsNumber>4||(x(e.target.valueAsNumber),J(m(O,B,e.target.valueAsNumber,F))))}},{Name:"Destroyers",Function:function(e){""!==e.target.value&&(e.target.valueAsNumber>4||(G(e.target.valueAsNumber),J(m(O,B,T,e.target.valueAsNumber))))}}],ee=function(t){n(e=l+1);var a=document.getElementsByClassName("Board-P1")[0];Array.from(document.getElementsByClassName("Board-P1")[0].children).forEach((function(e){a.removeChild(e)}));var s=document.getElementsByClassName("Board-P2")[0];Array.from(document.getElementsByClassName("Board-P2")[0].children).forEach((function(e){s.removeChild(e)})),p(Array.from(Array(100*e)).map((function(e,t){return t+1})));var r=Array.from(Array(100)).map((function(e,t){return t+1}));J(m(0,0,0,0)),v(d(r,H,!0)),K(!1),Z(!1),w(0),P(0),x(0),G(0),document.getElementsByClassName("game-chacarteristics")[0].style.display="block",t.target.parentElement.style.display="none"};return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"Title"}," Enter the name of The city and Click on Search"),r.a.createElement("div",{className:"game-chacarteristics"},_.map((function(e,t){return r.a.createElement("div",{className:"".concat(e.Name,"-number-container"),key:t},r.a.createElement("label",{className:"".concat(e.Name,"-number-label")},"Number of ",e.Name),r.a.createElement("input",{type:"number",defaultValue:"0",min:"0",max:"4",onChange:e.Function}))})),r.a.createElement("button",{type:"button",onClick:function(e){var t=Array.from(e.target.parentElement.children);console.log(t),t.forEach((function(e){e.lastChild.value="0"})),e.target.parentElement.style.display="none",K(!0)}},"Aceept")),r.a.createElement("button",{onClick:function(e){var t=e.target.nextSibling.nextSibling.firstElementChild;if("none / auto auto auto auto"===t.style.gridTemplate){var a,s=Object(i.a)(t.children);try{for(s.s();!(a=s.n()).done;){var r=a.value;r.style.flexDirection="row",r.classList.remove("Vertical"),r.classList.add("Horizontal")}}catch(m){s.e(m)}finally{s.f()}t.style.gridTemplate="auto auto auto auto / none"}else if("auto auto auto auto / none"===t.style.gridTemplate){var l,n=Object(i.a)(t.children);try{for(n.s();!(l=n.n()).done;){var o=l.value;o.style.flexDirection="column",o.classList.add("Vertical"),o.classList.remove("Horizontal")}}catch(m){n.e(m)}finally{n.f()}t.style.gridTemplate="none/ auto auto auto auto"}else{var c,u=Object(i.a)(t.children);try{for(u.s();!(c=u.n()).done;){var d=c.value;d.style.flexDirection="row",d.classList.remove("Vertical"),d.classList.add("Horizontal")}}catch(m){u.e(m)}finally{u.f()}t.style.gridTemplate="auto auto auto auto / none"}}},"Rotate"),r.a.createElement("button",{onClick:function(e){var t,a=e.target.nextSibling.firstElementChild.children,s=Object(i.a)(a);try{for(s.s();!(t=s.n()).done;){if("none"!==t.value.style.display)return}}catch(l){s.e(l)}finally{s.f()}Z(!0),v(d(g,H,!1));var r=g.filter((function(e){return isNaN(e)}));A(r.length)}},"Start game"),r.a.createElement("div",{className:"Boards"},r.a.createElement(u,{Drag:$,Ships:H}),r.a.createElement(c,{Play:!1,Squares:L,className:"Board-P1",Player:1,Position:"",GameNumber:l}),r.a.createElement(c,{Play:X,Squares:L,className:"Board-P2",Player:2,Position:g,Targets:S,GameNumber:l})),r.a.createElement("div",{id:"Winning-message"},r.a.createElement("h1",null,"You Won :)"),r.a.createElement("button",{onClick:ee},"Play Again!")),r.a.createElement("div",{id:"Losing-message"},r.a.createElement("h1",null,"You Lost :( "),r.a.createElement("button",{onClick:ee},"Play Again!")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.658696df.chunk.js.map