// ملف النصوص الشامل - يمكنك تعديل أي نص هنا بسهولة
const SITE_TEXTS = {
    // === نصوص صفحة HTML الرئيسية ===
    pageTitle: "قياس",
    
    // شاشة التحميل
    loading: {
        title: "QIASS",
subtitle: "استنى علينا يا نجم... بنجمّع شوية لقطات 😎"
    },
    
    // شريط التنقل
    navigation: {
        logo: "QIASS"
    },
    
    // القسم الرئيسي
    hero: {
        title1: "",
        title2: "يا جدعان هو ازاي تمشوا كدا؟",
        subtitle:  " 😅 وسايبينّا نتهزّق لوحدنا؟!",
    },
    
    // قسم الجاليري
    gallery: {
        title: "ذكريات لا تُنسى",
        filters: {
            all: "جميع الصور",
            ceremony: "الحفل",
            teachers: "المعلمين",
            moments: "لحظات مميزة"
        }
    },
    
    // قسم الرسائل
    messages: {
        title: "كلمات شكر وتقدير",
        cards: [
            {
                text: "لو المدرس بيتقاس بالهيصة، فأنت كنت الصوت العالي",
                author: "ودانّا لسه فيها صدى صوتك"
            },
            {
                 text: "إنت الوحيد اللي كان بيشرح وهو نايم، والطلبة كانت فاكراك صاحي!",
                author: "شهادة حق "
            },
            {
                text: "مشيت وسايبنا للجدول أبو ٢٦ حصة... 😭",
                author: "بمووووت يا فخري"
            },
            {
                text: "كنا بنشتغل وانت بتوزّع نُكت... إنت بتمشي ليه؟ خليتنا نشيل الهزار كله!",
                author: "يا تقل دمك"
            },
            {
                title: "لو رايح على مدرسة تانية... بلغنا نزوّغ عندك",
                author: "لو الراتب الجديد أحسن يعني"
            },
            {
                text:"كل ما الطلبة هتشتكي من حصة... بنقولهم احمدوا ربنا إن اللي مشي مش لسه هنا!",
                  author: "معلش"
            }
        ]
    },
    
    // التذييل
    footer: {
        title: "",
        subtitle: "",
        loveMessage: "",
        copyright: ""
    },
    
    // === نصوص العرض التقديمي ===
    slideshow: {
        finalMessage: {
            title: "🎬 العرض خلص... بس احنا لسه بنرغي",
            subtitle: "شكراً إنك كنت جزء من الحكاية، وجزء من الضحك!"
        },
        celebration: {
            title: "🎊 يلا نعمل حفلة وناكل علشان بطني بتصوصو 🎊",
            messages: [
                "لقد شاهدتم جميع الصور الرائعة!",
                "شكراً لكم على سنوات العطاء والتفاني",
                "أنتم فخر لكل طالب تعلم على أيديكم"
            ]
        }
    },
    
    // === رسائل التشجيع ===
    encouragement: [
        "🌟  ",
        "✨  ",
        "🎉  "
    ]
};

// دالة للحصول على النص
function getText(path) {
    const keys = path.split('.');
    let result = SITE_TEXTS;
    
    for (const key of keys) {
        if (result && typeof result === 'object' && key in result) {
            result = result[key];
        } else {
            console.warn("النص غير موجود: " + path);
            return path;
        }
    }
    return result;
}

function applyTextsToHTML() {
    try {
        if (document.title) document.title = getText('pageTitle');
        
        const loadingTitle = document.querySelector('.loading-title');
        if (loadingTitle) loadingTitle.textContent = getText('loading.title');
        
        const loadingText = document.querySelector('.loading-text');
        if (loadingText) loadingText.textContent = getText('loading.subtitle');
        
        const navLogo = document.querySelector('.nav-logo span');
        if (navLogo) navLogo.textContent = getText('navigation.logo');
        
        const titleLines = document.querySelectorAll('.hero-title .title-line');
        if (titleLines[0]) titleLines[0].textContent = getText('hero.title1');
        if (titleLines[1]) titleLines[1].textContent = getText('hero.title2');
        
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) heroSubtitle.textContent = getText('hero.subtitle');
        
        const galleryTitle = document.querySelector('.gallery-section .section-title');
        if (galleryTitle) {
            galleryTitle.innerHTML = '<i class="fas fa-camera"></i>' + getText('gallery.title');
        }
        
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            const filter = btn.getAttribute('data-filter');
            if (filter && getText('gallery.filters.' + filter)) {
                const icon = btn.querySelector('i');
                const iconClass = icon ? icon.outerHTML : '';
                btn.innerHTML = iconClass + getText('gallery.filters.' + filter);
            }
        });
        
        const messagesTitle = document.querySelector('.messages-section .section-title');
        if (messagesTitle) {
            messagesTitle.innerHTML = '<i class="fas fa-envelope-heart"></i>' + getText('messages.title');
        }
        
        const messageCards = document.querySelectorAll('.message-card');
        const messagesData = getText('messages.cards');
        messageCards.forEach((card, index) => {
            if (messagesData[index]) {
                const textElement = card.querySelector('.message-text');
                const authorElement = card.querySelector('.message-author');
                if (textElement) textElement.textContent = '"' + messagesData[index].text + '"';
                if (authorElement) authorElement.textContent = messagesData[index].author;
            }
        });
        
        const footerTitle = document.querySelector('.footer-section h3');
        if (footerTitle) {
            footerTitle.innerHTML = '<i class="fas fa-graduation-cap"></i>' + getText('footer.title');
        }
        
        const footerSubtitle = document.querySelector('.footer-section p');
        if (footerSubtitle) footerSubtitle.textContent = getText('footer.subtitle');
        
        const loveMessage = document.querySelector('.social-link span');
        if (loveMessage) loveMessage.textContent = getText('footer.loveMessage');
        
        const copyright = document.querySelector('.footer-bottom p');
        if (copyright) copyright.textContent = getText('footer.copyright');
        
        console.log('تم تطبيق جميع النصوص من ملف texts.js');
    } catch (error) {
        console.warn('خطأ في تطبيق النصوص:', error);
    }
}

// تطبيق النصوص عند تحميل الصفحة
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyTextsToHTML);
    } else {
        applyTextsToHTML();
    }
}

console.log('📝 ملف النصوص الشامل تم تحميله بنجاح!');


