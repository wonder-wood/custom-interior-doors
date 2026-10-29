document.getElementById("menu").onclick=()=>{let n=document.querySelector("nav");n.style.display=n.style.display==="grid"?"none":"grid";n.style.position="absolute";n.style.top="62px";n.style.left="0";n.style.right="0";n.style.padding="20px";n.style.background="#f8f3eb";n.style.gap="16px"};
document.querySelectorAll(".variants button").forEach(b=>b.onclick=()=>{tryImg.src=b.dataset.img;document.querySelectorAll(".variants button").forEach(x=>x.classList.remove("on"));b.classList.add("on")});
let sides={hall:"assets/taupe.png",room:"assets/white.png"};document.querySelectorAll(".sides button").forEach(b=>b.onclick=()=>{sideImg.src=sides[b.dataset.side];document.querySelectorAll(".sides button").forEach(x=>x.classList.remove("on"));b.classList.add("on")});
let fs=["hero-phone.png","wood.png","taupe.png","olive.png","graphite.png","white.png","detail1.jpg","detail2.jpg","detail3.jpg","wood.png","olive.png","taupe.png","detail2.jpg","graphite.png","white.png","detail1.jpg","hero-fold.png","hero-desktop.png"];let g=document.getElementById("galleryTrack");fs.forEach((f,i)=>{let x=document.createElement("img");x.src="assets/"+f;x.alt="Gallery image "+(i+1);g.appendChild(x)});
document.getElementById("form").onsubmit=e=>{e.preventDefault();document.getElementById("status").textContent="Form UI ready. Submission service will be connected before launch."};
let q=document.getElementById("quote"),s=document.querySelector(".sticky");new IntersectionObserver(es=>es.forEach(e=>s.classList.toggle("hide",e.isIntersecting)),{threshold:.15}).observe(q);
const doorDesigns = [
  "carousel/navy-gold.png",
  "carousel/natural-wood.png",
  "carousel/white-circle.png",
  "carousel/olive-medallion.png",
  "carousel/ivory-silver.png",
  "carousel/navy-circle.png",
  "carousel/taupe-oval-fixed.png",
  "carousel/olive-circle.png",
  "carousel/white-oval.jpg",
  "carousel/taupe-gold.png"
];const dc=document.getElementById("doorCarousel");if(dc){const all=[...doorDesigns,...doorDesigns,...doorDesigns];all.forEach((f,i)=>{let d=document.createElement("div");d.className="door-card";let im=document.createElement("img");im.src="assets/"+f;im.alt="Custom interior door design "+(i%doorDesigns.length+1);d.appendChild(im);dc.appendChild(d)});let cards=()=>[...dc.children],step=()=>cards()[1].offsetLeft-cards()[0].offsetLeft,mid=()=>cards()[doorDesigns.length].offsetLeft;requestAnimationFrame(()=>dc.scrollLeft=mid());dc.addEventListener("scroll",()=>{let w=step()*doorDesigns.length,m=mid();if(dc.scrollLeft<m-w*.55)dc.scrollLeft+=w;else if(dc.scrollLeft>m+w*.55)dc.scrollLeft-=w},{passive:true});let move=x=>dc.scrollBy({left:x*step(),behavior:"smooth"});document.querySelector(".door-prev")?.addEventListener("click",()=>move(-1));document.querySelector(".door-next")?.addEventListener("click",()=>move(1));let down=false,x0=0,s0=0;dc.addEventListener("pointerdown",e=>{if(innerWidth>=1000){down=true;x0=e.clientX;s0=dc.scrollLeft;dc.setPointerCapture(e.pointerId)}});dc.addEventListener("pointermove",e=>{if(down)dc.scrollLeft=s0-(e.clientX-x0)});["pointerup","pointercancel","pointerleave"].forEach(ev=>dc.addEventListener(ev,()=>down=false))}
