(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-614ec30b"],{a09f:function(t,e,n){"use strict";n.r(e);n("b0c0");var a=n("7a23"),i=function(t){return Object(a["v"])("data-v-8b62ff54"),t=t(),Object(a["t"])(),t},c={class:"cotain w-100"},o={class:"nav justify-content-end display-switch me-5"},s={class:"nav-item"},l=i((function(){return Object(a["g"])("i",{class:"fa-solid fa-table-cells-large"},null,-1)})),r=[l],b={class:"nav-item"},d=i((function(){return Object(a["g"])("i",{class:"fas fa-bars list-view"},null,-1)})),u=[d],f={class:"container-fluid people-cards mt-2"},j={key:0,class:"list-group list-group-horizontal-xl list-group-flush d-flex flex-column align-items-center"},O={class:"row align-items-center"},v={class:"col"},g={class:"col-md-auto"},m=["onClick"],p=["onClick"],h=i((function(){return Object(a["g"])("i",{class:"fa-solid fa-heart",style:{"user-select":"auto"}},null,-1)})),y=[h],C={key:1,class:"cards d-flex flex-wrap justify-content-center"},k=["src"],w={class:"card-title text-center mt-2"},D=i((function(){return Object(a["g"])("hr",null,null,-1)})),B={class:"card-body d-flex justify-content-around"},I=["onClick"],x=["onClick"],A=i((function(){return Object(a["g"])("i",{class:"far fa-heart fa-lg"},null,-1)})),M=[A],F=["onClick"],T=i((function(){return Object(a["g"])("i",{class:"fa-solid fa-heart"},null,-1)})),J=[T],N={class:"modal fade",id:"personInfoModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},S={class:"modal-dialog"},Y={key:0,class:"modal-content"},L={class:"modal-header"},_={class:"modal-title",id:"modal-name"},z=i((function(){return Object(a["g"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)})),E={class:"modal-body",id:"info-modal-body"},H={class:"row"},G={class:"col-sm-8"},P={class:"col-sm-4"},R=["src"],W=i((function(){return Object(a["g"])("div",{class:"modal-footer"},[Object(a["g"])("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"}," Close ")],-1)}));function X(t,e,n,i,l,d){var h=Object(a["z"])("Navbar");return Object(a["s"])(),Object(a["f"])("div",c,[Object(a["i"])(h),Object(a["g"])("ul",o,[Object(a["g"])("li",s,[Object(a["g"])("a",{class:Object(a["o"])(["nav-link card-view active",{state:!l.isCard}]),id:"card-icon",href:"#",onClick:e[0]||(e[0]=Object(a["H"])((function(t){return d.openCard()}),["stop","prevent"]))},r,2)]),Object(a["g"])("li",b,[Object(a["g"])("a",{class:Object(a["o"])(["nav-link list-view",{state:l.isCard}]),id:"list-icon",href:"#",onClick:e[1]||(e[1]=Object(a["H"])((function(t){return d.openList()}),["stop","prevent"]))},u,2)])]),Object(a["g"])("div",f,[l.isCard?Object(a["e"])("",!0):(Object(a["s"])(),Object(a["f"])("div",j,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(l.favoriteArr,(function(t){return Object(a["s"])(),Object(a["f"])("li",{class:"list-group-item",key:t.newId},[Object(a["g"])("div",O,[Object(a["g"])("div",v,[Object(a["g"])("h5",null,Object(a["B"])(t.name.title)+". "+Object(a["B"])(t.name.first)+" "+Object(a["B"])(t.name.last),1)]),Object(a["g"])("div",g,[Object(a["g"])("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#personInfoModal",onClick:function(e){return d.openDetail(t.newId)}}," More Info ",8,m)]),t.isFavorite?(Object(a["s"])(),Object(a["f"])("div",{key:0,class:"col col-auto",onClick:function(e){return d.removeFavorite(t.login.md5)}},y,8,p)):Object(a["e"])("",!0)])])})),128))])),l.isCard?(Object(a["s"])(),Object(a["f"])("div",C,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(l.favoriteArr,(function(e){return Object(a["s"])(),Object(a["f"])("div",{class:"card p-3 m-1",style:{width:"15rem"},key:e.newId},[Object(a["g"])("img",{src:e.picture.large,class:"rounded-circle"},null,8,k),Object(a["g"])("h3",w,Object(a["B"])(e.name.first),1),D,Object(a["g"])("div",B,[Object(a["g"])("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#personInfoModal",onClick:function(t){return d.openDetail(e.newId)}}," More Info ",8,I),e.isFavorite?Object(a["e"])("",!0):(Object(a["s"])(),Object(a["f"])("button",{key:0,type:"button",class:"btn btn-favorite btn-primary",onClick:function(n){return t.addFavorite(e.login.md5)}},M,8,x)),e.isFavorite?(Object(a["s"])(),Object(a["f"])("button",{key:1,type:"button",class:"btn btn-favorite btn-primary",onClick:function(t){return d.removeFavorite(e.login.md5)}},J,8,F)):Object(a["e"])("",!0)])])})),128))])):Object(a["e"])("",!0),Object(a["g"])("div",N,[Object(a["g"])("div",S,[l.personDetail?(Object(a["s"])(),Object(a["f"])("div",Y,[Object(a["g"])("div",L,[Object(a["g"])("h5",_,Object(a["B"])(l.personDetail.name.first)+" "+Object(a["B"])(l.personDetail.name.last),1),z]),Object(a["g"])("div",E,[Object(a["g"])("div",H,[Object(a["g"])("div",G,[Object(a["g"])("div",null,"Email: "+Object(a["B"])(l.personDetail.email),1),Object(a["g"])("div",null,"Gender: "+Object(a["B"])(l.personDetail.gender),1),Object(a["g"])("div",null,"Age: "+Object(a["B"])(l.personDetail.dob.age),1),Object(a["g"])("div",null,"Region: "+Object(a["B"])(l.personDetail.location.country),1),Object(a["g"])("div",null,"Phone: "+Object(a["B"])(l.personDetail.phone),1),Object(a["g"])("div",null,"Birthday: "+Object(a["B"])(d.dateTime(l.personDetail.dob.date)),1),Object(a["g"])("div",null," Created_at: "+Object(a["B"])(d.dateTime(l.personDetail.registered.date)),1)]),Object(a["g"])("div",P,[Object(a["g"])("img",{src:l.personDetail.picture.large,id:"modal-avatar",alt:""},null,8,R)])])]),W])):Object(a["e"])("",!0)])])])])}n("7db0"),n("d3b7"),n("c740"),n("159b"),n("a434"),n("e9c4");var q=n("f40f"),K=n("c1df"),Q=n.n(K),U=n("d178"),V={name:"favorite",components:{Navbar:U["a"]},data:function(){return{personDetail:null,isCard:!0,favoriteArr:JSON.parse(localStorage.getItem("favoriteData"))||[]}},created:function(){var t=this;setTimeout((function(){t.moviefunction()}),500)},watch:{isCard:function(){var t=this;setTimeout((function(){t.moviefunction()}),500)}},methods:{moviefunction:function(){new q["a"](".people-cards",{mouseWheel:!0,disableMouse:!1,disableTouch:!1,scrollX:!0,click:!0})},openDetail:function(t){this.personDetail=this.favoriteArr.find((function(e){return e.newId===t}))},dateTime:function(t){return Q()(t).format("YYYY-MM-DD")},openList:function(){this.isCard&&(this.isCard=!this.isCard)},openCard:function(){this.isCard||(this.isCard=!this.isCard)},removeFavorite:function(t){var e=this,n=this.favoriteArr.findIndex((function(e){return e.login.md5===t}));this.favoriteArr.forEach((function(a){a.login.md5===t&&(a.isFavorite=!1,e.favoriteArr.splice(n,1),localStorage.setItem("favoriteData",JSON.stringify(e.favoriteArr)))}))}}},Z=(n("fa09"),n("6b0d")),$=n.n(Z);const tt=$()(V,[["render",X],["__scopeId","data-v-8b62ff54"]]);e["default"]=tt},c59e:function(t,e,n){},fa09:function(t,e,n){"use strict";n("c59e")}}]);
//# sourceMappingURL=chunk-614ec30b.aa679164.js.map