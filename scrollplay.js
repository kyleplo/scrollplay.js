function Scroll(sel){this.target = sel;this.events = [];this.on = function (evt,han){
this.events.push({evt: evt, han: han});
if(evt === "scroll"){this.target.addEventListener("scroll",function (e){
han(e,this)
});}else if(evt === "top"){
this.target.addEventListener("scroll",function (e){
if(this.target.scrollTop < 2){han(e,this)}
});
}else if(evt === "gone"){
this.target.addEventListener("scroll",function (e){
if(this.target.scrollTop > screen.availHeight){han(e,this)}
});
}
return this;
};
this.scroll = function (yes){if(yes){this.target.style.position = "fixed";this.target.style.top = "0px";this.target.style.left = "0px";}else{this.target.style.position = "unset"};return this};
this.forceScroll = function (){this.target.style.overflowY = "scroll";return this};
this.forceScrollSide = function (){this.target.style.overflowX = "scroll";return this};
this.addScroll = function (x){var b = "";for(var i = 0;i < x;i++){b += "<br>"};this.target.innerHTML += b;return this}
};
function scroll(sel){
if(typeof sel === "string"){
return new Scroll(document.querySelector(sel));
}else{
return new Scroll(sel)}
};
