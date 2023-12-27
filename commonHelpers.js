import{i as n,S as c}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const f=document.querySelector("form"),i=document.querySelector(".gallery");f.addEventListener("submit",d);function d(o){o.preventDefault(),i.innerHTML="";const s=o.currentTarget.elements.name.value;i.insertAdjacentHTML("afterend",'<span class="loader"></span>'),u(s).then(r=>{if(r.hits.length===0)document.querySelector(".loader").remove(),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#ffffff",titleColor:"#ffffff",iconColor:"#ffffff",backgroundColor:"#B51B1B"});else return g(r.hits)}).catch(r=>console.log(r))}function u(o){return fetch(`https://pixabay.com/api/?key=41437501-0a58a7d6f9b55a91ef815cfe0&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=200`).then(l=>{if(!l.ok)throw new Error(l.statusText);return l.json()})}function g(o){document.querySelector(".loader").remove();const r=o.reduce((t,e)=>t+`
      <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.previewURL}"
              alt="${e.tags}"
               width="360" 
               height="200"
              ;
            />
            <div class="gallery-info">
              <div class="gallery-box">
                <h3 class="gallery-title">likes</h3>
                <p class="gallery-text">${e.likes}</p>
                <!--hit.likes -->
              </div>
              <div class="gallery-box">
                <h3 class="gallery-title">views</h3>
                <p class="gallery-text">${e.views}</p>
              </div>
              <div class="gallery-box">
                <h3 class="gallery-title">comments</h3>
                <p class="gallery-text">${e.comments}</p>
              </div>
              <div class="gallery-box">
                <h3 class="gallery-title">downloads</h3>
                <p class="gallery-text">${e.downloads}</p>
              </div>
            </div>
         </a>
       </li>`,"");i.innerHTML=r,new c(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
