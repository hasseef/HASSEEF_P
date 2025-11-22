
function initTabs(){
  const buttons=document.querySelectorAll('.tab-btn[data-target]');
  buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
      const targetId=btn.getAttribute('data-target');
      const container=btn.closest('.main-wrapper')||document;
      container.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      container.querySelectorAll('.tab-content').forEach(sec=>{
        sec.style.display = sec.id===targetId ? 'block' : 'none';
      });
    });
  });
  // activate first tab in each wrapper
  document.querySelectorAll('.main-wrapper').forEach(w=>{
    const first=w.querySelector('.tab-btn[data-target]');
    if(first){ first.click(); }
  });
}
document.addEventListener('DOMContentLoaded',initTabs);
