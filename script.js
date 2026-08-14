/**
 * Executive CV Controller
 * Handles Multi-Language Switching (EN | IT | TR), Certificate Filtering, PDF Modal Viewer, and Print Export
 */

document.addEventListener('DOMContentLoaded', () => {
    // Current Active Language (Default: 'en')
    let currentLang = localStorage.getItem('serhat_cv_lang') || 'en';

    // UI Elements
    const langBtns = document.querySelectorAll('.lang-btn');
    const filterBtns = document.querySelectorAll('.filter-chip');
    const certCards = document.querySelectorAll('.cert-card-item');
    const modalBackdrop = document.getElementById('certModal');
    const modalIframe = document.getElementById('modalIframe');
    const modalTitle = document.getElementById('modalTitle');
    const modalOpenTab = document.getElementById('modalOpenTab');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const btnPrint = document.getElementById('btnPrintCv');

    // -------------------------------------------------------------
    // 1. Language Switching Logic (EN | IT | TR)
    // -------------------------------------------------------------
    function updateLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('serhat_cv_lang', lang);

        // Update button active state
        langBtns.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Translate elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        document.documentElement.lang = lang;
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            updateLanguage(lang);
        });
    });

    // Initialize Language
    updateLanguage(currentLang);

    // -------------------------------------------------------------
    // 2. Certificate Category Filter
    // -------------------------------------------------------------
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            certCards.forEach(card => {
                const category = card.dataset.category || '';
                if (filter === 'all' || category.includes(filter)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // -------------------------------------------------------------
    // 3. Modal PDF Viewer
    // -------------------------------------------------------------
    window.openCertModal = function(pdfFileName, certTitleKey) {
        const pdfPath = `Certificates/${pdfFileName}`;
        const titleText = (translations[currentLang] && translations[currentLang][certTitleKey]) 
            ? translations[currentLang][certTitleKey] 
            : "Certificate Inspector";
        
        if (modalTitle) modalTitle.textContent = titleText;
        if (modalIframe) modalIframe.src = pdfPath;
        if (modalOpenTab) modalOpenTab.href = pdfPath;

        if (modalBackdrop) {
            modalBackdrop.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    function closeModal() {
        if (modalBackdrop) {
            modalBackdrop.classList.remove('active');
        }
        if (modalIframe) {
            modalIframe.src = '';
        }
        document.body.style.overflow = '';
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
            closeModal();
        }
    });

    // -------------------------------------------------------------
    // 4. Print / Export CV
    // -------------------------------------------------------------
    if (btnPrint) {
        btnPrint.addEventListener('click', (e) => {
            e.preventDefault();
            window.print();
        });
    }
});
