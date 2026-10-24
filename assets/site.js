const toc = document.querySelector('.article-toc');
toc?.addEventListener('click', event => {
  if (event.target.closest('a[href^="#"]')) toc.open = false;
});

// Show the scroll affordance only when a table is wider than its container.
document.querySelectorAll('.table-scroll').forEach((container, index) => {
  const hint = document.createElement('p');
  hint.className = 'table-hint';
  hint.id = `table-hint-${index}`;
  hint.textContent = '표를 좌우로 스크롤하면 나머지 내용을 볼 수 있습니다. ↔';
  hint.hidden = true;
  container.before(hint);
  const updateHint = () => {
    const overflows = container.scrollWidth > container.clientWidth + 1;
    hint.hidden = !overflows;
    if (overflows) container.setAttribute('aria-describedby', hint.id);
    else container.removeAttribute('aria-describedby');
  };
  const observer = new ResizeObserver(updateHint);
  observer.observe(container);
  observer.observe(container.querySelector('table'));
});
