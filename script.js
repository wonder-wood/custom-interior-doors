(() => {
  const modal = document.getElementById("contactModal");
  if (!modal) return;
  const form = document.getElementById("leadForm");
  const note = document.getElementById("formNote");

  const openModal = (e) => {
    e.preventDefault();
    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
    setTimeout(() => modal.querySelector("input")?.focus(), 40);
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
  };

  document.querySelectorAll(".jstalk").forEach(el => el.addEventListener("click", openModal));
  modal.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  form?.addEventListener("submit", e => {
    e.preventDefault();
    note.textContent = "The form is working visually. Next we’ll connect it to your email.";
    note.style.color = "#c29a34";
  });
})();

// Very subtle page-wide data-thread reveal.
(() => {
  const thread = document.querySelector(".gold-thread");
  if (!thread) return;
  const updateThread = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const p = Math.min(1, Math.max(0, scrollY / max));
    thread.style.setProperty("--scroll-progress", p.toFixed(3));
    thread.style.opacity = String(0.72 + p * 0.28);
  };
  updateThread();
  addEventListener("scroll", updateThread, { passive:true });
})();

(() => {
 const cards=document.querySelectorAll(".interactive-step-disabled");
 const toggle=card=>{const open=card.classList.toggle("is-open");card.setAttribute("aria-expanded",String(open));};
 cards.forEach(card=>{card.addEventListener("click",()=>toggle(card));card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();toggle(card);}});});
 const items=document.querySelectorAll(".reveal-card,.reveal-left");
 if("IntersectionObserver" in window){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in-view");o.unobserve(e.target);}}),{threshold:.12});items.forEach(x=>o.observe(x));}else items.forEach(x=>x.classList.add("in-view"));
})();

(() => {
 const cards=document.querySelectorAll(".flip-step");
 const toggle=card=>{
   const open=card.classList.toggle("is-flipped");
   card.setAttribute("aria-expanded",String(open));
 };
 cards.forEach(card=>{
   card.addEventListener("click",()=>toggle(card));
   card.addEventListener("keydown",e=>{
     if(e.key==="Enter"||e.key===" "){e.preventDefault();toggle(card);}
   });
 });
})();
