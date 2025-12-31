function updateSoftwareImageExtensions(newExtension) {
  const images = document.querySelectorAll('.sw-card img');
  images.forEach(img => {
    const src = img.getAttribute('src');
    if (src.startsWith('assets/images/')) {
      const basePath = src.substring(0, src.lastIndexOf('.'));
      img.setAttribute('src', basePath + '.' + newExtension);
    }
  });
}

function openPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none';
    });
    
    const targetPage = document.getElementById(pageId);
    targetPage.style.display = 'block';
    setTimeout(() => {
        targetPage.classList.add('active');
    }, 10);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateConfigLink() {
    const select = document.getElementById('protocolSelect');
    const display = document.getElementById('configDisplay');
    const text = document.getElementById('configUrlText');

    if (select.value) {
        text.innerText = select.value;
        display.style.display = 'block';
    } else {
        display.style.display = 'none';
    }
}

function copyConfigLink() {
    const text = document.getElementById('configUrlText').innerText;
    const btn = document.querySelector('.copy-btn');
    
    navigator.clipboard.writeText(text).then(() => {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> کپی شد!';
        btn.style.background = 'var(--success-color)';
        
        setTimeout(() => {
            btn.innerHTML = originalHtml;
            btn.style.background = 'var(--brand-color)';
        }, 2000);
    });
}
