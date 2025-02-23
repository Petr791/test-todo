const t=document.querySelector(".js-todos"),e=document.querySelector(".js-input"),o=document.querySelector(".js-btn");let n=[];function d(){console.log(n);let e="";n.forEach(t=>{t.done||(e+=`
		  <li><p class='todo-item'>${t.text}</p>
			<button data-id='${t.id}'>\u{421}\u{434}\u{435}\u{43B}\u{430}\u{43D}\u{43E}</button>
		  </li>
			`)}),t.innerHTML=e}o.addEventListener("click",()=>{(function(t){let e={text:t,done:!1,id:`${Math.random()}`};n.push(e)})(e.value),d()}),t.addEventListener("click",t=>{var e;"BUTTON"===t.target.tagName&&(e=t.target.dataset.id,n.forEach(t=>{t.id===e&&(t.done=!0)}),d())}),d();