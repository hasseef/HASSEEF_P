
function initTabs(){
  document.querySelectorAll('.sidebar').forEach(sidebar => {
    const buttons = sidebar.querySelectorAll('.tab-btn[data-target]');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const shell = sidebar.closest('.main-wrapper') || document;
        shell.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        shell.querySelectorAll('.tab-content').forEach(sec => {
          sec.style.display = (sec.id === targetId ? 'block' : 'none');
        });
      });
    });
    const first = buttons[0];
    if(first){ first.click(); }
  });
}
document.addEventListener('DOMContentLoaded', initTabs);
