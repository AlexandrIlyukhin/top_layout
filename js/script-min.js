let data={month:null,colorDays:null};const startCalendar=[{id:201802,name:"Февраль",days:[[0,0,0,0,0,0,1],[2,3,4,5,6,7,8],[9,10,11,12,13,14,15],[16,17,18,19,20,21,22],[23,24,25,26,27,28,29],[30,31,0,0,0,0,0]]},{id:201803,name:"Март",days:[[0,0,1,2,3,4,5],[6,7,8,9,10,11,12],[13,14,15,16,17,18,19],[20,21,22,23,24,25,26],[27,28,29,30,31,0,0],[0,0,0,0,0,0,0]]},{id:201804,name:"Апрель",days:[[0,0,0,0,0,1,2],[3,4,5,6,7,8,9],[10,11,12,13,14,15,16],[17,18,19,20,21,22,23],[24,25,26,27,28,29,30],[0,0,0,0,0,0,0]]}],colorDays=[{monthId:201802,day:15,color:"#cccccc"},{monthId:201802,day:15,color:"#cccccc"},{monthId:201802,day:15,color:"#cccccc"}],getData=()=>{data.month=startCalendar},getActualColor=()=>{return{red:"#ff9797",blue:"#97b7ff",yellow:"#fcd116",green:"#39e639",gray:"#9f9f9f"}[$(".select").val()]};function generateUniqId(e){let t;const n=e.toString(36);return t=Math.round(100*Math.random(),0)+n}function saveData(){return!1}function displaySaveUrl(e){if(window.location.href.search("id=")>-1)return;const t=window.location.href+"?id="+e;window.history.replaceState(null,null,t),document.querySelector(".inputtext").innerHTML=t}function saveСhangorg(){displaySaveUrl(generateUniqId(Date.now()))}$(".table-calendar .daymonth").on("click",getActualColor),console.log(getActualColor());const createSingleMonths=(e,t)=>{t.setAttribute("data-month-id",e.id),t.querySelector(".monthname").innerHTML=e.name;let n=t.querySelectorAll(".table-calendar .daymonth"),o=0;for(let t=0;t<e.days.length;t++){const a=e.days[t];for(let e=0;e<a.length;e++)n[o].innerHTML=a[e],o+=1}return t},deleteMonth=e=>{let t=data.month,n=e.target.closest(".table-calendar").dataset.monthId,o=[];t.forEach((e,t)=>{e.id!==parseInt(n)&&o.push(e)}),data.month=o,generateMonths()};function generateMonths(e=data.month){const t=document.querySelector("._calendarhide .table-calendar"),n=document.querySelector(".calendar-list .month-wrapper");document.querySelector(".calendar-list .month-wrapper").innerHTML="",n.innerHTML="",e.forEach((e,o)=>{const a=createSingleMonths(e,t.cloneNode(!0));$(a).find(".fa").on("click",deleteMonth),n.appendChild(a)})}data.month=startCalendar,generateMonths(data.month);const generateMonthsWorkRight=e=>{let t=data.month;const n=document.querySelector(".calendar-list .month-wrapper"),o=document.querySelector("._calendarhide .table-calendar"),a=e.target.closest(".table-calendar").dataset.monthId;t.forEach((e,r)=>{if(e.id===parseInt(a)){const a=e.id.toString(),c=parseInt(a.substr(0,4)),l=parseInt(a.substr(4,5));console.log(c),console.log(l),idR=l<12?l<10?c.toString()+"0"+(l+1).toString():c.toString()+(l+1).toString():(c+1).toString()+"00",t[r].id=parseInt(idR),console.log(t[r].id);const d=createSingleMonths(t[r],o.cloneNode(!0));n.insertAdjacentElement("beforeend",d)}})};document.querySelectorAll(".addright").forEach((e,t)=>{e.addEventListener("click",generateMonthsWorkRight)});const generateMonthsWorkLeft=e=>{let t=data.month;const n=document.querySelector(".calendar-list .month-wrapper"),o=document.querySelector("._calendarhide .table-calendar"),a=e.target.closest(".table-calendar").dataset.monthId;t.forEach((e,r)=>{if(e.id===parseInt(a)){const a=e.id.toString(),c=parseInt(a.substr(0,4)),l=parseInt(a.substr(4,5));console.log(c),console.log(l),idR=l>0?l<10?c.toString()+"0"+(l-1).toString():c.toString()+(l-1).toString():(c-1).toString()+"12",t[r].id=parseInt(idR),console.log(t[r].id);const d=createSingleMonths(t[r],o.cloneNode(!0));n.insertAdjacentElement("afterbegin",d)}})},submitAddMonthSave=()=>{console.log("submitAddMonthSave")};document.querySelectorAll(".addleft").forEach((e,t)=>{e.addEventListener("click",generateMonthsWorkLeft)});const addMonthClick=()=>{popupOpen(".popup-container"),saveСhangorg()},popupOpen=e=>{$(".show").show(800)},closePopup=()=>{$(".show").hide(800)};document.querySelector(".share-project .normal-button").onclick=addMonthClick,$(".popup-container .-exe").on("click",closePopup),$(".share-project .normal-button").on("click",submitAddMonthSave);