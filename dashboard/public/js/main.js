document.addEventListener('DOMContentLoaded',()=>{window.feather?.replace(); document.querySelectorAll('[data-filter]').forEach(input=>input.addEventListener('input',()=>{const q=input.value.toLowerCase(); document.querySelectorAll('.guild-card').forEach(c=>c.style.display=c.textContent.toLowerCase().includes(q)?'':'none')}));}); window.toast=(m)=>alert(m);
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-letter-cascade]').forEach((el)=>{
    const text=el.textContent;
    el.textContent='';
    [...text].forEach((char,index)=>{
      const span=document.createElement('span');
      span.className='cascade-letter';
      span.style.setProperty('--i',index);
      span.textContent=char===' ' ? '\u00A0' : char;
      el.appendChild(span);
    });
  });

  document.querySelectorAll('[data-count-up]').forEach((el)=>{
    const target=Number(el.dataset.countUp || 0);
    const duration=900;
    const start=performance.now();
    const tick=(now)=>{
      const progress=Math.min((now-start)/duration,1);
      el.textContent=Math.round(target*(1-Math.pow(1-progress,3))).toLocaleString();
      if(progress<1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });

  document.querySelectorAll('[data-scroll-target]').forEach((button)=>{
    button.addEventListener('click',()=>document.querySelector(button.dataset.scrollTarget)?.scrollIntoView({behavior:'smooth',block:'start'}));
  });

  document.querySelectorAll('[data-magnetic-dock] a').forEach((item)=>{
    item.addEventListener('mousemove',(event)=>{
      const rect=item.getBoundingClientRect();
      const x=(event.clientX-rect.left-rect.width/2)/rect.width;
      const y=(event.clientY-rect.top-rect.height/2)/rect.height;
      item.style.transform=`translate(${x*10}px, ${y*8}px) scale(1.08)`;
    });
    item.addEventListener('mouseleave',()=>{ item.style.transform=''; });
  });
});
