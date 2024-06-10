document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".event-form"),t=document.getElementById("eventName"),n=document.getElementById("eventDateTime"),d=document.getElementById("eventLocation"),i=document.getElementById("eventDescription"),m=document.getElementById("addEventBtn"),l=document.getElementById("eventList");m.addEventListener("click",function(){let m=t.value.trim(),a=n.value.trim(),o=d.value.trim(),c=i.value.trim();if(m&&a){let t=document.createElement("div");t.classList.add("event-item"),t.innerHTML=`
                <h2>${m}</h2>
                <p>Date and Time: ${a}</p>
                ${o?`<p>Location: ${o}</p>`:""}
                ${c?`<p>Description: ${c}</p>`:""}
            `,l.appendChild(t),e.reset()}else alert("Please fill out all required fields (Event Name, Date and Time)")})});
//# sourceMappingURL=Event.793923e9.js.map
