!function(t){var e={};function a(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a(a.s=0)}([function(t,e,a){a(1),t.exports=a(3)},function(t,e,a){var i=document.getElementById("android-img"),s=document.getElementById("apple-img");function r(){s.style.transform="scale(1.1)",setTimeout((function(){s.style.transform="scale(1)"}),350)}setInterval((function(){i.style.transform="scale(1.1)",setTimeout((function(){i.style.transform="scale(1)"}),350)}),3e3);setTimeout((function(){setInterval(r,3e3)}),100),Vue.component("form-block",a(2).default);new Vue({el:"#app",data:{}});$(document).ready((function(){var t=$(this).scrollTop(),e=t-1,a=!0;t>0&&($("nav.navbar").css("top","-80px"),a=!1),$(window).scroll((function(i){(t=$(this).scrollTop())>e?a&&($("nav.navbar").css("top","-80px"),a=!1):a||($("nav.navbar").css("top","0px"),a=!0),e=t}))}))},function(t,e,a){"use strict";a.r(e);function i(t,e,a,i,s,r,n,o){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=a,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),n?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},l._ssrRegister=c):s&&(c=o?function(){s.call(this,this.$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:l}}var s=i({data:function(){return{placeValue:0,isActive:!1}},props:["placeItemData"],components:{},mounted:function(){this.mount()},methods:{mount:function(){this.placeValue=+this.placeItemData.value,this.placeValue>0&&(this.isActive=!0)},selectTime:function(t){console.log("Время выбрано"),this.$emit("select-time",this.placeItemData)}},filters:{valueFilter:function(t){return 0==+t?"Нет мест":+t>3?"+3":t},timeFilter:function(t){return+t<10?"0"+t:t}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row place-item-block"},[a("div",{staticClass:"col-4 col-sm-6 place-item-time"},[a("p",{staticClass:"item-time"},[t._v(t._s(t._f("timeFilter")(t.placeItemData.hours))+" "),a("span",{staticClass:"time-minutes"},[t._v(t._s(t._f("timeFilter")(t.placeItemData.min)))])])]),t._v(" "),a("div",{staticClass:"col-8 col-sm-6 place-item-value",class:{active:t.isActive}},[a("div",{staticClass:"item-value-container"},[a("span",{staticClass:"item-value"},[t._v(t._s(t._f("valueFilter")(t.placeValue)))]),t._v(" "),t.isActive?a("button",{staticClass:"item-button",attrs:{value:"myValue"},on:{click:function(e){return e.preventDefault(),t.selectTime(e)}}},[t._v("Заказать онлайн")]):t._e()])])])}),[],!1,null,null,null).exports;function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var n=i({data:function(){return{datepickerId:"",day0Date:"",day1Date:"",day2Date:"",isDay0Select:!0,isDay1Select:!1,isDay2Select:!1,dayNameArray:["Вс","Пн","Вт","Ср","Чт","Пт","Сб","Вс","Пн","Вт"],currDate:new Date,startViewDate:new Date,currViewDate:new Date,currViewTime:"",listDateArray:[],isListEmpty:!1,isPreloaderVisible:!0,currPlaceList:[],tempPlaceList:[],currPlaceListKey:"",responceData:[]}},props:{token:{type:String,required:!0},tokenKey:{type:String,required:!0},blockId:{type:String,required:!0},routeId:{type:String,required:!0},cityFrom:{type:String,required:!0},cityTo:{type:String,required:!0}},components:{"place-item":s},filters:{dateFilter:function(t){return t<10?"0"+t:t}},created:function(){this.init()},mounted:function(){this.mount()},methods:{init:function(){this.datepickerId="calendarDatepicker"+this.blockId,this.listDateArray=[],this.listDateArray[0]={year:this.startViewDate.getFullYear(),month:this.startViewDate.getMonth(),date:this.startViewDate.getDate(),day:this.dayNameArray[this.startViewDate.getDay()]},this.startViewDate.setDate(this.startViewDate.getDate()+1),this.listDateArray[1]={year:this.startViewDate.getFullYear(),month:this.startViewDate.getMonth(),date:this.startViewDate.getDate(),day:this.dayNameArray[this.startViewDate.getDay()]},this.startViewDate.setDate(this.startViewDate.getDate()+1),this.listDateArray[2]={year:this.startViewDate.getFullYear(),month:this.startViewDate.getMonth(),date:this.startViewDate.getDate(),day:this.dayNameArray[this.startViewDate.getDay()]},this.startViewDate.setDate(this.startViewDate.getDate()-2),this.day0Date=this.listDateArray[0].date+", Сегодня",this.day1Date=this.listDateArray[1].date,this.day2Date=this.listDateArray[2].date,this.currPlaceListKey=this.currDate.toDateString()},mount:function(){$("#"+this.datepickerId).datepicker({minDate:new Date,maxDate:new Date(+this.currDate.getFullYear(),+this.currDate.getMonth(),14+this.currDate.getDate()),onSelect:this.selectStartViewDay}),this.axiosRequest(this.currDate)},selectStartViewDay:function(t,e,a){this.startViewDate=new Date(e.toDateString()),this.currViewDate=new Date(e.toDateString()),this.listDateArray[0]={year:this.startViewDate.getFullYear(),month:this.startViewDate.getMonth(),date:this.startViewDate.getDate(),day:this.dayNameArray[this.startViewDate.getDay()]},this.startViewDate.setDate(this.startViewDate.getDate()+1),this.listDateArray[1]={year:this.startViewDate.getFullYear(),month:this.startViewDate.getMonth(),date:this.startViewDate.getDate(),day:this.dayNameArray[this.startViewDate.getDay()]},this.startViewDate.setDate(this.startViewDate.getDate()+1),this.listDateArray[2]={year:this.startViewDate.getFullYear(),month:this.startViewDate.getMonth(),date:this.startViewDate.getDate(),day:this.dayNameArray[this.startViewDate.getDay()]},this.startViewDate.setDate(this.startViewDate.getDate()-2),this.listDateArray[0].date==this.currDate.getDate()&&this.listDateArray[0].month==this.currDate.getMonth()?this.day0Date=this.listDateArray[0].date+", Сегодня":(this.currDate.setDate(this.currDate.getDate()+1),this.listDateArray[0].date==this.currDate.getDate()&&this.listDateArray[0].month==this.currDate.getMonth()?this.day0Date=this.listDateArray[0].date+", Завтра":this.day0Date=this.listDateArray[0].date,this.currDate.setDate(this.currDate.getDate()-1)),this.day1Date=this.listDateArray[1].date,this.day2Date=this.listDateArray[2].date,this.isDay0Select=!0,this.isDay1Select=!1,this.isDay2Select=!1,this.axiosRequest(this.currViewDate),a.hide()},changeViewDay:function(t){switch(this.isDay0Select=!1,this.isDay1Select=!1,this.isDay2Select=!1,t){case 0:this.isDay0Select=!0,this.currViewDate=new Date(+this.listDateArray[0].year,+this.listDateArray[0].month,+this.listDateArray[0].date),this.axiosRequest(this.currViewDate);break;case 1:this.isDay1Select=!0,this.currViewDate=new Date(+this.listDateArray[1].year,+this.listDateArray[1].month,+this.listDateArray[1].date),this.axiosRequest(this.currViewDate);break;case 2:this.isDay2Select=!0,this.currViewDate=new Date(+this.listDateArray[2].year,+this.listDateArray[2].month,+this.listDateArray[2].date),this.axiosRequest(this.currViewDate)}},selectTime:function(t){console.log("Подготовка к отправке");var e=document.forms[this.routeId];e.tripId.value=t.tripID,this.tempPlaceList=this.currPlaceList.map((function(t){return t.hours+","+t.min+","+t.tripID+","+t.value})),e.tripList.value=this.tempPlaceList.join(";"),e.date.value=this.currViewDate.getFullYear()+"-"+this.currViewDate.getMonth()+"-"+this.currViewDate.getDate(),+t.hours<10?this.currViewTime="0"+t.hours:this.currViewTime=t.hours,this.currViewTime+=":",+t.min<10?this.currViewTime+="0"+t.min:this.currViewTime+=t.min,e.time.value=this.currViewTime,console.log("Можно отправлять"),e.submit()},axiosRequest:function(t){var e,a=this;this.isPreloaderVisible=!0,axios({method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:(e={},r(e,this.tokenKey,this.token),r(e,"date",t.getDate()+"."+(1+t.getMonth())+"."+t.getFullYear()),r(e,"route",this.routeId),e),url:"/api/trips"}).then(this.parseResponce).finally((function(){return a.isPreloaderVisible=!1}))},parseResponce:function(t){try{this.responceData=JSON.parse(t.data),this.currPlaceList=[],this.responceData.forEach((function(t,e){var a=new Date(t.TripDateUniverse);0==t.SeatsCount&&(t.SeatsCount=17),this.currPlaceList[e]={tripID:t.ID,min:a.getMinutes(),hours:a.getHours(),cityFrom:this.cityFrom,cityTo:this.cityTo,value:t.SeatsCount-t.SeatsBusyCount}}),this),this.currPlaceList=this.currPlaceList.filter((function(t){return t.value>0})),this.currPlaceList.sort((function(t,e){return+t.hours>+e.hours||+t.hours==+e.hours&&+t.min>+e.min?1:-1})),this.currPlaceList.length>0?this.isListEmpty=!1:this.isListEmpty=!0,this.currPlaceListKey=this.currViewDate.toDateString()}catch(t){this.isListEmpty=!0,console.log("Trips Error:"),console.log("Name: "+t.name),console.log("Message: "+t.message)}}},watch:{routeId:function(t,e){this.axiosRequest(this.currViewDate)}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"places-block"},[a("div",{staticClass:"places-control card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-2 places-control-list"},[a("input",{staticClass:"datepicker-here",attrs:{type:"text",id:t.datepickerId,readonly:""}}),t._v(" "),a("label",{attrs:{for:t.datepickerId}},[a("img",{staticClass:"datepicker-icon",attrs:{src:"/img/09.jpg",alt:"Calendar"}})])]),t._v(" "),a("div",{staticClass:"col-6 places-control-list list-item-0",class:{selected:t.isDay0Select},on:{click:function(e){return t.changeViewDay(0)}}},[a("p",{staticClass:"date-text"},[t._v(t._s(t.day0Date))]),t._v(" "),a("p",{staticClass:"day-text"},[t._v(t._s(t.listDateArray[0].day))])]),t._v(" "),a("div",{staticClass:"col-2 places-control-list list-item-1",class:{selected:t.isDay1Select},on:{click:function(e){return t.changeViewDay(1)}}},[a("p",{staticClass:"date-text"},[t._v(t._s(t.day1Date))]),t._v(" "),a("p",{staticClass:"day-text"},[t._v(t._s(t.listDateArray[1].day))])]),t._v(" "),a("div",{staticClass:"col-2 places-control-list list-item-2",class:{selected:t.isDay2Select},on:{click:function(e){return t.changeViewDay(2)}}},[a("p",{staticClass:"date-text"},[t._v(t._s(t.day2Date))]),t._v(" "),a("p",{staticClass:"day-text"},[t._v(t._s(t.listDateArray[2].day))])])])])]),t._v(" "),a("div",{staticClass:"places-list"},[a("h4",[t._v("Список свободных мест "+t._s(t._f("dateFilter")(t.currViewDate.getDate()))+"."+t._s(t._f("dateFilter")(1+t.currViewDate.getMonth()))+"."+t._s(t.currViewDate.getFullYear()))]),t._v(" "),t.isPreloaderVisible?a("div",{staticClass:"preloader"},[t._m(0)]):t._e(),t._v(" "),t.isListEmpty?a("div",{staticClass:"place-list"},[t._m(1)]):a("form",{key:t.routeId,staticClass:"place-list",attrs:{action:"http://online.m10.by/",method:"post",name:t.routeId}},[a("input",{attrs:{type:"hidden",name:t.tokenKey},domProps:{value:t.token}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"routeId"},domProps:{value:t.routeId}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"cityFrom"},domProps:{value:t.cityFrom}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"cityTo"},domProps:{value:t.cityTo}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"date",value:""}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"time",value:""}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"tripList",value:""}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"tripId",value:""}}),t._v(" "),t._l(t.currPlaceList,(function(e){return a("place-item",{key:e.tripID,attrs:{"place-item-data":e},on:{"select-time":t.selectTime}})}))],2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[this._v("Loading...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"place-list-empty"},[this._v("Свободных мест для бронирования онлайн не осталось. Для бронирования места "),e("a",{staticClass:"modal-link",attrs:{"data-toggle":"modal",href:"#phoneCall","aria-expanded":"false","aria-controls":"phoneCall"}},[this._v("позвоните")]),this._v(" нашему оператору, он Вам поможет.")])}],!1,null,null,null).exports;var o=i({data:function(){return{requestString:"",responceData:{},routeList:[],routeSortedList:[],currRouteId:"2a989739-f20c-4f64-b8a3-3c95724133c3",currCityFrom:"Мозырь",currCityTo:"Гомель"}},props:{token:{type:String,required:!0},tokenKey:{type:String,required:!0}},components:{"places-block":n},mounted:function(){var t,e,a;axios({method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:(t={},e=this.tokenKey,a=this.token,e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t),url:"/api/routes"}).then(this.parseRoutes)},methods:{parseRoutes:function(t){try{this.responceData=JSON.parse(t.data),this.responceData.forEach((function(t){this.routeList.push(t)}),this),this.routeList=this.routeList.filter((function(t,e){return!("Киев"==t.CityFrom||"Киев"==t.CityTo)})),this.routeList=this.routeList.sort((function(t,e){return+t.Name>+e.Name?1:-1})),this.routeList.map((function(t){if("Мозырь"==t.CityFrom){this.routeSortedList.push(t);var e=this.routeList.find((function(e){return e.CityFrom==t.CityTo}),this);null!=e&&this.routeSortedList.push(e)}}),this)}catch(t){console.log("Routes Error:"),console.log("Name: "+t.name),console.log("Message: "+t.message)}},changeRoute:function(t){this.currRouteId=t.ID,this.currCityFrom=t.CityFrom,this.currCityTo=t.CityTo}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-block"},[t._m(0),t._v(" "),a("p",{staticClass:"select-route-container"},[t._v("Выберите направление:")]),t._v(" "),a("div",{key:t.routeList.length,staticClass:"row route-list"},t._l(t.routeSortedList,(function(e){return a("div",{staticClass:"col-6 col-md-4"},[a("div",{staticClass:"card route-item",on:{click:function(a){return t.changeRoute(e)}}},[a("div",{staticClass:"card-header"},[t._v("\n                    "+t._s(e.CityFrom)+" - "+t._s(e.CityTo)+"\n                ")]),t._v(" "),a("div",{staticClass:"card-body"},[t._v("\n                    В пути "+t._s(e.DistanceTime)+"\n                ")])])])})),0),t._v(" "),a("p",{staticClass:"section-title"},[t._v(t._s(t.currCityFrom)+" - "+t._s(t.currCityTo))]),t._v(" "),a("places-block",{staticClass:"col-12",attrs:{"city-from":t.currCityFrom,"city-to":t.currCityTo,"block-id":"0","route-id":t.currRouteId,token:t.token,"token-key":t.tokenKey}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"reklama-container"},[e("div",{staticClass:"reklama-item"},[e("a",{attrs:{href:"http://mozyr-kiev-express.by"}},[e("p",{staticClass:"card-header"},[this._v("Новый маршрут!")]),this._v(" "),e("p",{staticClass:"card-body"},[this._v("Мозырь-Киев-Мозырь")])])])])}],!1,null,null,null);e.default=o.exports},function(t,e){}]);