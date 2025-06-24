// مصفوفة النصوص المترابطة (كل عنوان مع وصفه)
const randomTextPairs = [
    {
        title: 'لو المدرس بيتقاس بالهيصة، فأنت كنت الصوت العالي',
        description: 'ودانّا لسه فيها صدى صوتك'
    },
    {
        title: 'إنت الوحيد اللي كان بيشرح وهو نايم، والطلبة كانت فاكراك صاحي!',
        description: 'شهادة حق'
    },
    {
        title: 'مشيت وسايبنا للجدول أبو ٢٦ حصة... 😭',
        description: 'بمووووت يا فخري'
    },
    {
        title: 'كنا بنشتغل وانت بتوزّع نُكت... إنت بتمشي ليه؟',
        description: 'خليتنا نشيل الهزار كله! - يا تقل دمك'
    },
    {
        title: 'لو رايح على مدرسة تانية... بلغنا نزوّغ عندك',
        description: 'لو الراتب الجديد أحسن يعني'
    },
    {
        title: 'كل ما الطلبة هتشتكي من حصة...',
        description: 'بنقولهم احمدوا ربنا إن اللي مشي مش لسه هنا! - معلش'
    },
    {
        title: 'وعدنا إنك مش هتنسانا وتفضل تبعتلنا واتس كل يوم!',
        description: 'لو نسيت... هنيجي نزورك في البيت! 😄'
    },
    {
        title: 'كنت بتحل لنا مشاكل الطلبة... مين هيعمل ده دلوقتي؟',
        description: 'هنضطر نروح نتعلم علم نفس بقى!'
    },
    {
        title: 'إنت هتيجي تزورنا ولا هتعمل زي اللي مشوا قبلك وخلاص؟',
        description: 'احنا عايزين ضمان مكتوب ومختوم! 📝'
    },
    {
        title: 'إنت اللي كنت بتعلمنا الغش المحترم في تقارير التفتيش!',
        description: 'هنخلص امتحان بقى... والله كنت أستاذ! 😂'
    },
    {
        title: 'إنت اللي كنت بتعلمنا طريقة تجهيز الامتحانات في 5 دقايق',
        description: 'هنضطر نقعد الليل كله نحضر زي الغلابة 📚'
    },
    {
        title: 'مين هيرد على أولياء الأمور بالطريقة الدبلوماسية بتاعتك؟',
        description: 'هنضطر نتعلم دبلوماسية في كورس مسائي! 🎓'
    },
    {
        title: 'إنت اللي كنت بتقولنا المدير جاي قبل ما يوصل بخمس دقايق!',
        description: 'كان عندك رادار ولا إيه؟ 📡'
    },
    {
        title: 'كنت بتجيب معاك أكل وتوزع علينا... إنت كنت إيه أمنا؟!',
        description: 'هنموت من الجوع بقى... من بعدك؟ 🍎'
    },
    {
        title: 'مين هيقولنا على مواعيد الإجازات قبل ما تتكتب في الجدول؟',
        description: 'كنت عندك مصادر في الوزارة ولا إيه! 📅'
    },
    {
        title: 'كنت بتعرف مين من المدرسين زعلان من مين... إنت كنت المخابرات!',
        description: 'كنت بتقولنا دي مش بتكلم دي من امبارح 🕵️'
    },
    {
        title: 'إنت اللي كنت بتنام في الحصة وتصحى تقول أنا كنت بفكر!',
        description: 'والطلبة تصدق... والله كنت ممثل! 🎭'
    },
    {
        title: 'كنت بتجي متأخر وتقول الزحمة!',
        description: 'إيه الزحمة دي؟ زحمة النوم؟! 😴'
    },
    {
        title: 'مين هيفهمنا قوانين الإدارة الغريبة دي؟',
        description: 'إنت كنت المترجم الرسمي بتاعنا! 📋'
    },
    {
        title: 'إنت اللي كنت بتقول ولا يهمك لكل حاجة... حتى لو المدرسة ولعت!',
        description: 'والله كنت مسترخي أوي... ولا حاجة بتهمك! 😂'
    },
    {
        title: 'كنت بتصحح الامتحان بالمزاج... اللي عجبك ينجح!',
        description: 'نظام عدالة فريد... وشه عجبني، يعدي! ⚖️'
    },
    {
        title: 'هات معاك عقد عمل جديد، وساعتها نفكر نزوّغ',
        description: 'الراتب محتاج ترقية.. إحنا مش جايين نضحّي وبس!'
    },
    {
        title: 'يا بختك بحب الناس ليك',
        description: 'الصور دي هتعيش أكتر منك... متضايقش'
    },
    {
        title: 'مشهد تقول عليه "يا ريت الزمن يرجع"',
        description: 'بس إحنا شكرًا... مش عايزين 😅'
    },
    {
        title: 'اللي يمشي من غير زيادة.. يبقى ناقص عقل',
        description: 'بنستناك في السوق المفتوح يا نجم المعلمين!'
    },
    {
        title: 'تقدير بالفلوس قبل الكلام، ولا لأ؟',
        description: 'الراتب.. احنا عارفين الحكاية'
    },
    {
        title: 'إنت اللي كنت بتقول "الفلوس مش كل حاجة" وإنت مكسر!',
        description: 'وتطلع تدوّر على شغل تاني من ورانا! 💸'
    },
    {
        title: 'كنت بتجي الاجتماع وتقول عايز اروح',
        description: 'وتقعد أول واحد وتتكلم أكتر من الكل! 🗣️'
    },
    {
        title: 'إنت اللي كنت بتعمل شيك وتقول "أنا مختلف"',
        description: 'مختلف إيه؟ كلنا بنشتغل في نفس ال......! 😂'
    },
    {
        title: 'لو كان الشغل حلو... كنت مشيت ليه؟',
        description: 'ده إنت كاشف نفسك! قولنا الحق بقى 🤔'
    },
    {
        title: 'يلا روح... وبطّل تبرر!',
        description: 'إحنا عارفين إنك هتارب بأول فرصة 🏃‍♂️'
    }
];

// نظام منع التكرار
let shuffledTextPairs = [...randomTextPairs]; // نسخة للخلط
let usedTextIndices = []; // فهرس النصوص المستخدمة

// دالة خلط النصوص
function reshuffleTextPairs() {
    shuffledTextPairs = shuffleArray([...randomTextPairs]);
    usedTextIndices = [];
    console.log('تم إعادة خلط النصوص - النصوص جاهزة للاستخدام من جديد');
}

// دالة اختيار نص مترابط بدون تكرار
function getRandomTextPair() {
    // إذا استخدمنا كل النصوص، نخلطهم من جديد
    if (usedTextIndices.length >= shuffledTextPairs.length) {
        reshuffleTextPairs();
    }
    
    // نختار نص لم يتم استخدامه
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * shuffledTextPairs.length);
    } while (usedTextIndices.includes(randomIndex));
    
    // نضيف الفهرس للمستخدمة
    usedTextIndices.push(randomIndex);
    
    return shuffledTextPairs[randomIndex];
}

// دالة إعادة تعيين النصوص (للاستخدام عند الحاجة)
function resetTextRotation() {
    reshuffleTextPairs();
}

// دالة اختيار نص عشوائي
function getRandomText(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// بيانات الصور المحدثة مع الأسماء الجديدة البسيطة
let imagesData = [
    { src: 'pics/1.jpeg', category: 'ceremony' },
    { src: 'pics/2.jpeg', category: 'teachers' },
    { src: 'pics/3.jpeg', category: 'teachers' },
    { src: 'pics/4.jpeg', category: 'ceremony' },
    { src: 'pics/5.jpeg', category: 'ceremony' },
    { src: 'pics/6.jpeg', category: 'teachers' },
    { src: 'pics/7.jpeg', category: 'moments' },
    { src: 'pics/8.jpeg', category: 'teachers' },
    { src: 'pics/9.jpeg', category: 'moments' },
    { src: 'pics/10.jpeg', category: 'teachers' },
    { src: 'pics/11.jpeg', category: 'ceremony' },
    { src: 'pics/12.jpeg', category: 'teachers' },
    { src: 'pics/13.jpeg', category: 'moments' },
    { src: 'pics/14.jpeg', category: 'teachers' },
    { src: 'pics/15.jpeg', category: 'ceremony' },
    { src: 'pics/16.jpeg', category: 'teachers' },
    { src: 'pics/17.jpeg', category: 'ceremony' },
    { src: 'pics/18.jpeg', category: 'teachers' },
    { src: 'pics/19.jpeg', category: 'moments' },
    { src: 'pics/20.jpeg', category: 'ceremony' },
    { src: 'pics/21.jpeg', category: 'moments' },
    { src: 'pics/22.jpeg', category: 'ceremony' },
    { src: 'pics/23.jpeg', category: 'moments' },
    { src: 'pics/24.jpeg', category: 'teachers' },
    { src: 'pics/25.jpeg', category: 'ceremony' },
    { src: 'pics/26.jpeg', category: 'teachers' },
    { src: 'pics/27.jpeg', category: 'moments' },
    { src: 'pics/28.jpeg', category: 'teachers' },
    { src: 'pics/29.jpeg', category: 'moments' },
    { src: 'pics/30.jpeg', category: 'ceremony' },
    { src: 'pics/31.jpeg', category: 'moments' }
];

// دالة خلط الصور عشوائياً
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// تطبيق الترتيب العشوائي على الصور
imagesData = shuffleArray(imagesData);

// المتغيرات العامة
let currentImageIndex = 0;
let isPlaying = false;
let slideshowInterval;
let backgroundMusic;
let welcomeSound;
let slideshowHasRun = false; // متغير لمنع تكرار العرض التقديمي
let welcomeHasPlayed = false; // متغير لتتبع ما إذا كان صوت الترحيب تم تشغيله

// إعدادات الصوت - الموسيقى الخلفية وصوت الترحيب
const audioSettings = {
    masterVolume: 0.7,
    backgroundMusicVolume: 0.5,
    welcomeSoundVolume: 0.8,
    isMuted: false
};

// التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// تهيئة التطبيق
function initializeApp() {
    // خلط النصوص من البداية لمنع التكرار
    reshuffleTextPairs();
    
    // تحميل إعدادات الصوت المحفوظة
    loadAudioSettings();
    
    // إخفاء شاشة التحميل بعد 3 ثوان
    setTimeout(() => {
        hideLoadingScreen();
    }, 3000);
    
    // تهيئة الأصوات
    initializeAudio();
    
    // تحميل الصور
    loadGallery();
    
    // تهيئة الأحداث
    initializeEvents();
    
    // إضافة الجسيمات المتحركة
    createParticles();
    
    // بدء أنيمايشن الخلفية
    startBackgroundAnimation();
}

// إخفاء شاشة التحميل
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    // تشغيل صوت الترحيب بعد ظهور رسالة "جاري تحضير الذكريات الجميلة..."
    setTimeout(() => {
        playWelcomeSound();
    }, 1500); // بعد 1.5 ثانية من بداية التحميل
    
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
        
        // تأثير الدخول للمحتوى
        if (typeof gsap !== 'undefined') {
            gsap.from('.hero-content', {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: "power2.out"
            });
        } else {
            // استخدام CSS animation بديل
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.animation = 'fadeInUp 1s ease-out forwards';
            }
        }
    }, 500);
}

// تهيئة الأصوات - الموسيقى الخلفية وصوت الترحيب
function initializeAudio() {
    backgroundMusic = document.getElementById('background-music');
    welcomeSound = document.getElementById('welcome-sound');
    
    // تطبيق إعدادات الصوت
    updateAudioVolumes();
    
    // إضافة أحداث الصوت  
    setupAudioEvents();
    
    // تحميل الأصوات مسبقاً
    preloadAudio();
    
    // تشغيل الموسيقى الخلفية تلقائياً بعد تحميلها
    startBackgroundMusicAutomatically();
}

// تحديث مستويات الصوت - الموسيقى الخلفية وصوت الترحيب
function updateAudioVolumes() {
    const masterVol = audioSettings.isMuted ? 0 : audioSettings.masterVolume;
    
    if (backgroundMusic) {
        backgroundMusic.volume = audioSettings.backgroundMusicVolume * masterVol;
    }
    
    if (welcomeSound) {
        welcomeSound.volume = audioSettings.welcomeSoundVolume * masterVol;
    }
}

// إعداد أحداث الصوت - الموسيقى الخلفية وصوت الترحيب
function setupAudioEvents() {
    if (backgroundMusic) {
        backgroundMusic.addEventListener('error', (e) => {
            console.warn('فشل في تحميل الموسيقى الخلفية');
        });
        
        backgroundMusic.addEventListener('canplaythrough', () => {
            console.log('تم تحميل الموسيقى الخلفية بنجاح');
        });
    }
    
    if (welcomeSound) {
        welcomeSound.addEventListener('error', (e) => {
            console.warn('فشل في تحميل صوت الترحيب');
        });
        
        welcomeSound.addEventListener('canplaythrough', () => {
            console.log('تم تحميل صوت الترحيب بنجاح');
        });
        
        welcomeSound.addEventListener('ended', () => {
            console.log('انتهى صوت الترحيب');
        });
    }
}

// تحميل الأصوات مسبقاً - الموسيقى الخلفية وصوت الترحيب
function preloadAudio() {
    if (backgroundMusic) {
        // تحميل مسبق للموسيقى الخلفية
        backgroundMusic.preload = 'auto';
        
        // محاولة تحميل الصوت
        backgroundMusic.load();
    }
    
    if (welcomeSound) {
        // تحميل مسبق لصوت الترحيب
        welcomeSound.preload = 'auto';
        
        // محاولة تحميل الصوت
        welcomeSound.load();
    }
}

// تحميل الجاليري
function loadGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    
    imagesData.forEach((image, index) => {
        const galleryItem = createGalleryItem(image, index);
        galleryGrid.appendChild(galleryItem);
    });
    
    // أنيمايشن دخول العناصر
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.from('.gallery-item', {
            duration: 0.6,
            y: 50,
            opacity: 0,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.gallery-grid',
                start: 'top 80%'
            }
        });
    } else {
        // استخدام Intersection Observer كبديل
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });
        
        setTimeout(() => {
            const galleryItems = document.querySelectorAll('.gallery-item');
            galleryItems.forEach(item => observer.observe(item));
        }, 100);
    }
}

// إنشاء عنصر في الجاليري
function createGalleryItem(imageData, index) {
    const item = document.createElement('div');
    item.className = `gallery-item ${imageData.category}`;
    item.setAttribute('data-category', imageData.category);
    item.setAttribute('data-index', index);
    
    // اختيار نص مترابط عشوائي
    const randomTextPair = getRandomTextPair();
    
    item.innerHTML = `
        <img src="${imageData.src}" alt="${randomTextPair.title}" loading="lazy">
        <div class="gallery-item-overlay">
            <i class="fas fa-search-plus fa-2x"></i>
        </div>
        <div class="gallery-item-info">
            <h3 class="gallery-item-title">${randomTextPair.title}</h3>
            <p class="gallery-item-description">${randomTextPair.description}</p>
        </div>
    `;
    
    // إضافة حدث النقر
    item.addEventListener('click', () => {
        openModal(index);
    });
    
    return item;
}

// تهيئة الأحداث
function initializeEvents() {
    // أزرار التصفية
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterGallery(e.target.getAttribute('data-filter'));
            updateActiveFilter(e.target);
        });
    });
    
    // أزرار التحكم
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeBtn = document.getElementById('volume-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const slideshowBtn = document.getElementById('slideshow-btn');
    
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', toggleMusic);
    }
    
    if (volumeBtn) {
        volumeBtn.addEventListener('click', toggleAudioPanel);
    }
    
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', toggleFullscreen);
    }
    
    if (slideshowBtn) {
        slideshowBtn.addEventListener('click', startSlideshow);
    }
    
    // لوحة التحكم في الصوت ستتم تهيئتها من ملف audio-controls.js
    
    // أحداث المودال
    const modal = document.getElementById('image-modal');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevImage);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextImage);
    }
    
    // إغلاق المودال بالنقر خارجه
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // أحداث لوحة المفاتيح
    document.addEventListener('keydown', handleKeyPress);
    
    // أحداث التمرير
    window.addEventListener('scroll', handleScroll);
}

// تصفية الجاليري
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
            if (typeof gsap !== 'undefined') {
                gsap.from(item, {
                    duration: 0.5,
                    scale: 0.8,
                    opacity: 0,
                    ease: "back.out(1.7)"
                });
            } else {
                // استخدام CSS animation بديل
                item.style.animation = 'scaleIn 0.5s ease-out forwards';
            }
        } else {
            if (typeof gsap !== 'undefined') {
                gsap.to(item, {
                    duration: 0.3,
                    scale: 0.8,
                    opacity: 0,
                    onComplete: () => {
                        item.style.display = 'none';
                    }
                });
            } else {
                // استخدام CSS transition بديل
                item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        }
    });
}

// تحديث الفلتر النشط
function updateActiveFilter(activeBtn) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// فتح المودال
function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    const imageData = imagesData[index];
    
    // اختيار نص مترابط عشوائي
    const randomTextPair = getRandomTextPair();
    
    modalImage.src = imageData.src;
    modalTitle.textContent = randomTextPair.title;
    modalDescription.textContent = randomTextPair.description;
    
    modal.style.display = 'block';
    
    // أنيمايشن فتح المودال
    if (typeof gsap !== 'undefined') {
        gsap.from('.modal-content', {
            duration: 0.5,
            scale: 0.7,
            opacity: 0,
            ease: "back.out(1.7)"
        });
    } else {
        // استخدام CSS animation بديل
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.animation = 'scaleIn 0.5s ease-out forwards';
        }
    }
}

// إغلاق المودال
function closeModal() {
    const modal = document.getElementById('image-modal');
    
    if (typeof gsap !== 'undefined') {
        gsap.to('.modal-content', {
            duration: 0.3,
            scale: 0.7,
            opacity: 0,
            onComplete: () => {
                modal.style.display = 'none';
            }
        });
    } else {
        // استخدام CSS transition بديل
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            modalContent.style.opacity = '0';
            modalContent.style.transform = 'scale(0.7)';
            setTimeout(() => {
                modal.style.display = 'none';
                modalContent.style.opacity = '';
                modalContent.style.transform = '';
            }, 300);
        }
    }
}

// الصورة السابقة
function prevImage() {
    currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : imagesData.length - 1;
    updateModalImage();
}

// الصورة التالية
function nextImage() {
    currentImageIndex = currentImageIndex < imagesData.length - 1 ? currentImageIndex + 1 : 0;
    updateModalImage();
}

// تحديث صورة المودال
function updateModalImage() {
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    const imageData = imagesData[currentImageIndex];
    
    // اختيار نص مترابط عشوائي
    const randomTextPair = getRandomTextPair();
    
    // أنيمايشن تغيير الصورة
    if (typeof gsap !== 'undefined') {
        gsap.to(modalImage, {
            duration: 0.3,
            opacity: 0,
            onComplete: () => {
                modalImage.src = imageData.src;
                modalTitle.textContent = randomTextPair.title;
                modalDescription.textContent = randomTextPair.description;
                
                gsap.to(modalImage, {
                    duration: 0.3,
                    opacity: 1
                });
            }
        });
    } else {
        // استخدام CSS transition بديل
        modalImage.style.transition = 'opacity 0.3s ease';
        modalImage.style.opacity = '0';
        
        setTimeout(() => {
            modalImage.src = imageData.src;
            modalTitle.textContent = randomTextPair.title;
            modalDescription.textContent = randomTextPair.description;
            
            modalImage.style.opacity = '1';
        }, 300);
    }
}

// تشغيل/إيقاف الموسيقى
function toggleMusic() {
    const playPauseBtn = document.getElementById('play-pause-btn');
    const icon = playPauseBtn.querySelector('i');
    
    if (audioSettings.isMuted) {
        // إلغاء الكتم
        toggleMute();
        return;
    }
    
    if (isPlaying) {
        if (backgroundMusic) {
            backgroundMusic.pause();
        }
        icon.className = 'fas fa-play';
        isPlaying = false;
    } else {
        // إذا لم يتم تشغيل صوت الترحيب من قبل، شغله أولاً
        if (!welcomeHasPlayed) {
            welcomeHasPlayed = true;
            playWelcomeSound();
            
            // انتظار انتهاء صوت الترحيب (3 ثوان) ثم تشغيل الموسيقى الخلفية
            setTimeout(() => {
                if (backgroundMusic) {
                    backgroundMusic.play().catch(e => console.log('Audio play failed:', e));
                }
            }, 3000);
        } else {
            // تشغيل الموسيقى الخلفية مباشرة إذا تم تشغيل الترحيب من قبل
            if (backgroundMusic) {
                backgroundMusic.play().catch(e => console.log('Audio play failed:', e));
            }
        }
        
        icon.className = 'fas fa-pause';
        isPlaying = true;
    }
    
    saveAudioSettings();
}

// تشغيل صوت النقر (معطل)
function playClickSound() {
    // تم تعطيل أصوات النقر بناءً على طلب المستخدم
    return;
}

// تشغيل الموسيقى السينمائية
function playCinematicMusic() {
    if (cinematicMusic && !audioSettings.isMuted) {
        // إيقاف الموسيقى العادية
        if (backgroundMusic && !backgroundMusic.paused) {
            backgroundMusic.pause();
        }
        
        cinematicMusic.currentTime = 0;
        cinematicMusic.play().catch(e => console.log('Cinematic music failed:', e));
    }
}

// إيقاف الموسيقى السينمائية
function stopCinematicMusic() {
    if (cinematicMusic) {
        cinematicMusic.pause();
        cinematicMusic.currentTime = 0;
    }
}

// تشغيل صوت الترحيب بعد رسالة التحضير (4 ثوان فقط)
function playWelcomeSound() {
    if (welcomeSound && !audioSettings.isMuted) {
        welcomeSound.volume = audioSettings.welcomeSoundVolume * audioSettings.masterVolume;
        welcomeSound.currentTime = 0; // البدء من البداية
        
        welcomeSound.play().then(() => {
            console.log('بدأ تشغيل صوت الترحيب لمدة 4 ثوان');
            
            // إيقاف الصوت بعد 4 ثوان
            setTimeout(() => {
                if (welcomeSound && !welcomeSound.paused) {
                    welcomeSound.pause();
                    welcomeSound.currentTime = 0;
                    console.log('تم إيقاف صوت الترحيب بعد 4 ثوان');
                }
            }, 3000);
            
        }).catch(e => {
            console.log('Welcome sound play failed:', e);
        });
    }
}

// تشغيل الموسيقى الخلفية تلقائياً
function startBackgroundMusicAutomatically() {
    if (backgroundMusic) {
        // محاولة تشغيل الموسيقى تلقائياً بعد تأخير قصير
        setTimeout(() => {
            backgroundMusic.play().then(() => {
                isPlaying = true;
                // تحديث أيقونة زر التشغيل
                const playPauseBtn = document.getElementById('play-pause-btn');
                if (playPauseBtn) {
                    const icon = playPauseBtn.querySelector('i');
                    if (icon) {
                        icon.className = 'fas fa-pause';
                    }
                }
                console.log('تم تشغيل الموسيقى الخلفية تلقائياً');
            }).catch(e => {
                console.log('لا يمكن تشغيل الموسيقى تلقائياً - المتصفح يتطلب تفاعل المستخدم أولاً');
                // الموسيقى ستكون جاهزة للتشغيل عند أول نقرة من المستخدم
            });
        }, 1000);
    }
}

// تشغيل صوت الانتقال (معطل)
function playTransitionSound() {
    // تم تعطيل أصوات الانتقال بناءً على طلب المستخدم
    return;
}

// تغيير مستوى الصوت العام
function setMasterVolume(volume) {
    audioSettings.masterVolume = Math.max(0, Math.min(1, volume));
    updateAudioVolumes();
    saveAudioSettings();
}

// كتم/إلغاء كتم الصوت
function toggleMute() {
    audioSettings.isMuted = !audioSettings.isMuted;
    updateAudioVolumes();
    saveAudioSettings();
    
    // تحديث أيقونة الصوت في الواجهة
    updateAudioIcon();
}

// تحديث أيقونة الصوت
function updateAudioIcon() {
    const playPauseBtn = document.getElementById('play-pause-btn');
    if (playPauseBtn) {
        const icon = playPauseBtn.querySelector('i');
        if (audioSettings.isMuted) {
            icon.className = 'fas fa-volume-mute';
        } else if (isPlaying) {
            icon.className = 'fas fa-pause';
        } else {
            icon.className = 'fas fa-play';
        }
    }
}

// حفظ إعدادات الصوت
function saveAudioSettings() {
    try {
        localStorage.setItem('audioSettings', JSON.stringify(audioSettings));
    } catch (e) {
        console.warn('فشل في حفظ إعدادات الصوت:', e);
    }
}

// تحميل إعدادات الصوت
function loadAudioSettings() {
    try {
        const saved = localStorage.getItem('audioSettings');
        if (saved) {
            const parsed = JSON.parse(saved);
            Object.assign(audioSettings, parsed);
            updateAudioVolumes();
        }
    } catch (e) {
        console.warn('فشل في تحميل إعدادات الصوت:', e);
    }
}

// وضع الشاشة الكاملة
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(e => {
            console.log('Fullscreen failed:', e);
        });
    } else {
        document.exitFullscreen();
    }
}

// بدء العرض التقديمي السينمائي المذهل 🎬
function startSlideshow() {
    // التحقق من عدم تكرار العرض
    if (slideshowHasRun) {
        // تم تعطيل الرسائل العشوائية
        // showRandomEncouragement();
        return;
    }
    
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        stopCinematicShow();
        return;
    }
    
    // تعيين العرض كمكتمل
    slideshowHasRun = true;
    
    // إخفاء المحتوى العادي
    hideMainContentForSlideshow();
    
    // إنشاء حاوي العرض
    createSlideshowContainer();
    
    // بدء العرض التقديمي
    setTimeout(() => {
        startSlideshowSequence();
    }, 1000);
}

// تسلسل العرض التقديمي الجديد بدون تكرار
function startSlideshowSequence() {
    let currentSlide = 0;
    const totalSlides = imagesData.length;
    
    // عرض أول صورة
    showSlideImage(currentSlide);
    
    // إعداد الفترة الزمنية للعرض
    slideshowInterval = setInterval(() => {
        currentSlide++;
        
        if (currentSlide >= totalSlides) {
            // إنهاء العرض وبدء الرسالة الختامية مباشرة
            clearInterval(slideshowInterval);
            slideshowInterval = null;
            
            setTimeout(() => {
                showFinalMessage();
            }, 1000);
            return;
        }
        
        showSlideImage(currentSlide);
    }, 4000); // 4 ثوان لكل صورة
}

// العرض السريع النهائي
function startFinalQuickShow() {
    const slideshowContainer = document.getElementById('slideshow-container');
    
    // إنشاء رسالة الانتهاء
    const finalMessage = document.createElement('div');
    finalMessage.className = 'final-message';
    finalMessage.innerHTML = `
        <h2>والآن... عرض سريع لجميع الذكريات الجميلة</h2>
        
        <div class="countdown">3</div>
    `;
    
    slideshowContainer.innerHTML = '';
    slideshowContainer.appendChild(finalMessage);
    
    // عد تنازلي 3 ثوان
    let countdown = 3;
    const countdownElement = finalMessage.querySelector('.countdown');
    
    const countdownInterval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            
            // بدء العرض السريع
            startQuickSlideshow();
        }
    }, 1000);
}

// العرض السريع للصور
function startQuickSlideshow() {
    const slideshowContainer = document.getElementById('slideshow-container');
    
    // إنشاء حاوي العرض السريع
    slideshowContainer.innerHTML = `
        <div class="quick-slideshow">
            <div class="quick-image-container">
                <img id="quick-image" src="" alt="" />
            </div>
            <div class="quick-info">
                <h3 id="quick-title"></h3>
                <div class="quick-counter">
                    <span id="quick-current">1</span> / <span id="quick-total">${imagesData.length}</span>
                </div>
            </div>
        </div>
    `;
    
    let quickIndex = 0;
    
    // دالة عرض الصورة السريعة
    const showQuickImage = () => {
        const imageData = imagesData[quickIndex];
        const quickImage = document.getElementById('quick-image');
        const quickTitle = document.getElementById('quick-title');
        const quickCurrent = document.getElementById('quick-current');
        
        // اختيار نص مترابط عشوائي
        const randomTextPair = getRandomTextPair();
        
        quickImage.src = imageData.src;
        quickTitle.textContent = randomTextPair.title;
        quickCurrent.textContent = quickIndex + 1;
        
        // تأثير ظهور سريع
        quickImage.style.opacity = '0';
        setTimeout(() => {
            quickImage.style.opacity = '1';
        }, 50);
    };
    
    // بدء العرض السريع
    showQuickImage();
    
    const quickInterval = setInterval(() => {
        quickIndex++;
        
        if (quickIndex >= imagesData.length) {
            clearInterval(quickInterval);
            
            // إظهار الرسالة الختامية
            setTimeout(() => {
                showFinalMessage();
            }, 1000);
            return;
        }
        
        showQuickImage();
    }, 800); // 0.8 ثانية لكل صورة (سريع)
}

// الرسالة الختامية
function showFinalMessage() {
    const slideshowContainer = document.getElementById('slideshow-container');
    
    slideshowContainer.innerHTML = `
        <div class="final-celebration">
            <div class="celebration-content">
                <h1>🌟 شكراً من القلب   🌟</h1>
                <div class="thank-you-message">
                   <p> 🎬 العرض خلص... بس احنا لسه بنرغي<p>
                   <p>شكراً إنك كنت جزء من الحكاية !<p>
                   <h1>🎊 يلا نعمل حفلة وناكل علشان بطني بتصوصو 🎊</h1>
      
                </div>
                <div class="final-hearts">🌟 ❤️ 📖 ❤️ 🌟</div>
                
                <button id="return-home" class="celebration-btn">العودة للذكريات الجميلة</button>
            </div>
            <div class="celebration-particles"></div>
        </div>
    `;
    
    // إضافة حدث العودة للرئيسية
    document.getElementById('return-home').addEventListener('click', () => {
        showMainContent();
        slideshowContainer.remove();
    });
    
    // تأثيرات الاحتفال
    createCelebrationEffects();
}

// تأثيرات الاحتفال
function createCelebrationEffects() {
    const particlesContainer = document.querySelector('.celebration-particles');
    
    // إنشاء جسيمات احتفالية
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'celebration-particle';
        particle.style.cssText = `
            position: absolute;
            width: 10px;
            height: 10px;
            background: ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'][Math.floor(Math.random() * 5)]};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: 100%;
            animation: celebrationFloat ${Math.random() * 3 + 2}s infinite ease-out;
            animation-delay: ${Math.random() * 2}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// بدء العرض السينمائي المذهل
function startCinematicShow() {
    // إخفاء كل شيء وإنشاء بيئة سينمائية
    createCinematicEnvironment();
    
    // تشغيل الموسيقى السينمائية
    startCinematicMusic();
    
    // بدء العرض مع تأثيرات هوليوودية
    let currentSlide = 0;
    
    // مقدمة سينمائية مذهلة
    showCinematicIntro(() => {
        // بدء عرض الصور مع تأثيرات سحرية
        showCinematicSlide(currentSlide);
        currentSlide = (currentSlide + 1) % imagesData.length;
        
        slideshowInterval = setInterval(() => {
            showCinematicSlide(currentSlide);
            currentSlide = (currentSlide + 1) % imagesData.length;
        }, 4000); // 4 ثوان لكل صورة مع التأثيرات
        
        // إنهاء العرض بعد دورتين مع نهاية سينمائية
        setTimeout(() => {
            if (slideshowInterval) {
                clearInterval(slideshowInterval);
                slideshowInterval = null;
                showCinematicOutro(() => {
                    stopCinematicShow();
                });
            }
        }, imagesData.length * 4000 * 2);
    });
}

// إنشاء البيئة السينمائية
function createCinematicEnvironment() {
    // إخفاء كل المحتوى
    const body = document.body;
    body.style.overflow = 'hidden';
    
    // إنشاء شاشة سينمائية بالكامل
    const cinemaScreen = document.createElement('div');
    cinemaScreen.id = 'cinema-screen';
    cinemaScreen.innerHTML = `
        <!-- طبقة السماء مع النجوم المتحركة -->
        <div class="cosmic-background">
            <div class="stars-layer-1"></div>
            <div class="stars-layer-2"></div>
            <div class="stars-layer-3"></div>
            <div class="galaxy-spiral"></div>
        </div>
        
        <!-- طبقة الجسيمات السحرية -->
        <div class="magic-particles">
            <canvas id="particles-canvas"></canvas>
        </div>
        
        <!-- طبقة الإضاءة الديناميكية -->
        <div class="dynamic-lighting">
            <div class="light-beam light-beam-1"></div>
            <div class="light-beam light-beam-2"></div>
            <div class="light-beam light-beam-3"></div>
        </div>
        
        <!-- المنصة الثلاثية الأبعاد للصور -->
        <div class="holographic-stage">
            <div class="stage-platform"></div>
            <div class="hologram-projector"></div>
            
            <!-- منطقة عرض الصورة الرئيسية -->
            <div class="main-image-container">
                <div class="image-frame">
                    <img id="cinema-image" src="" alt="" />
                    <div class="hologram-effect"></div>
                    <div class="energy-field"></div>
                </div>
            </div>
            
            <!-- معلومات الصورة بتأثير هولوجرام -->
            <div class="image-info-panel">
                <div class="info-background"></div>
                <h2 id="cinema-title"></h2>
                <p id="cinema-description"></p>
                <div class="data-stream"></div>
            </div>
            
            <!-- شريط التقدم المستقبلي -->
            <div class="quantum-progress">
                <div class="progress-track"></div>
                <div class="progress-energy" id="quantum-bar"></div>
                <div class="progress-particles"></div>
            </div>
            
            <!-- العداد المجاري -->
            <div class="galaxy-counter">
                <div class="counter-glow"></div>
                <span id="cinema-counter">1</span>
                <span class="counter-separator">●</span>
                <span class="total-count">${imagesData.length}</span>
            </div>
        </div>
        
        <!-- تأثيرات الطقس والبيئة -->
        <div class="environmental-effects">
            <div class="floating-embers"></div>
            <div class="aurora-lights"></div>
            <div class="cosmic-dust"></div>
        </div>
        
        <!-- أزرار التحكم المستقبلية -->
        <div class="quantum-controls">
            <button id="cinema-pause" class="quantum-btn">
                <span class="btn-icon">⏸️</span>
                <span class="btn-glow"></span>
            </button>
            <button id="cinema-fullscreen" class="quantum-btn">
                <span class="btn-icon">🔍</span>
                <span class="btn-glow"></span>
            </button>
            <button id="cinema-exit" class="quantum-btn">
                <span class="btn-icon">✖️</span>
                <span class="btn-glow"></span>
            </button>
        </div>
        
        <!-- رسائل ديناميكية -->
        <div class="floating-messages"></div>
        
        <!-- تأثير الزمكان -->
        <div class="spacetime-warp"></div>
    `;
    
    // تطبيق الأنماط السينمائية
    cinemaScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%);
        z-index: 999999;
        overflow: hidden;
        perspective: 2000px;
        transform-style: preserve-3d;
        cursor: none;
    `;
    
    body.appendChild(cinemaScreen);
    
    // تفعيل النظام ثلاثي الأبعاد
    initializeQuantumPhysics();
    
    // بدء تأثيرات الجسيمات
    startParticleSystem();
    
    // تفعيل الأحداث التفاعلية
    setupCinematicControls();
}

// تفعيل فيزياء الكم والجسيمات
function initializeQuantumPhysics() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    
    // إنشاء جسيمات ثلاثية الأبعاد
    const particles = [];
    const particleCount = 200;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * 1000,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            vz: (Math.random() - 0.5) * 5,
            size: Math.random() * 3 + 1,
            color: `hsl(${Math.random() * 360}, 80%, 60%)`,
            life: Math.random() * 100,
            decay: Math.random() * 0.02 + 0.005
        });
    }
    
    // تأثير التفاعل مع الماوس
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    
    canvas.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // إضافة انفجار جسيمات عند حركة الماوس
        for (let i = 0; i < 10; i++) {
            particles.push({
                x: mouseX + (Math.random() - 0.5) * 50,
                y: mouseY + (Math.random() - 0.5) * 50,
                z: Math.random() * 200,
                vx: (Math.random() - 0.5) * 10,
                vy: (Math.random() - 0.5) * 10,
                vz: (Math.random() - 0.5) * 10,
                size: Math.random() * 5 + 2,
                color: `hsl(${45 + Math.random() * 60}, 100%, 70%)`,
                life: 100,
                decay: 0.02
            });
        }
    });
    
    // حلقة الرسم المتقدمة
    function renderQuantumField() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // رسم الجسيمات مع تأثيرات ثلاثية الأبعاد
        particles.forEach((particle, index) => {
            // حساب المنظور ثلاثي الأبعاد
            const scale = 200 / (200 + particle.z);
            const x2d = (particle.x - canvas.width / 2) * scale + canvas.width / 2;
            const y2d = (particle.y - canvas.height / 2) * scale + canvas.height / 2;
            
            // تأثير الجاذبية نحو الماوس
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                particle.vx += dx * force * 0.001;
                particle.vy += dy * force * 0.001;
            }
            
            // تحديث الموضع
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.z += particle.vz;
            
            // إعادة تدوير الجسيمات
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            if (particle.z < 0 || particle.z > 1000) particle.vz *= -1;
            
            // تقليل الحياة
            particle.life -= particle.decay;
            
            if (particle.life <= 0) {
                particles.splice(index, 1);
                return;
            }
            
            // رسم الجسيمة مع تأثيرات متقدمة
            const alpha = particle.life / 100;
            const size = particle.size * scale;
            
            // رسم هالة مضيئة
            const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size * 3);
            gradient.addColorStop(0, particle.color.replace(')', `, ${alpha})`).replace('hsl', 'hsla'));
            gradient.addColorStop(0.5, particle.color.replace(')', `, ${alpha * 0.5})`).replace('hsl', 'hsla'));
            gradient.addColorStop(1, 'transparent');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x2d, y2d, size * 3, 0, Math.PI * 2);
            ctx.fill();
            
            // رسم النواة
            ctx.fillStyle = particle.color.replace(')', `, ${alpha})`).replace('hsl', 'hsla');
            ctx.beginPath();
            ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
            ctx.fill();
            
            // رسم خطوط الطاقة بين الجسيمات القريبة
            particles.forEach(otherParticle => {
                const dx2 = particle.x - otherParticle.x;
                const dy2 = particle.y - otherParticle.y;
                const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                
                if (distance2 < 80 && distance2 > 0) {
                    const opacity = (80 - distance2) / 80 * alpha * 0.3;
                    const otherScale = 200 / (200 + otherParticle.z);
                    const otherX2d = (otherParticle.x - canvas.width / 2) * otherScale + canvas.width / 2;
                    const otherY2d = (otherParticle.y - canvas.height / 2) * otherScale + canvas.height / 2;
                    
                    ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(x2d, y2d);
                    ctx.lineTo(otherX2d, otherY2d);
                    ctx.stroke();
                }
            });
        });
        
        // إضافة جسيمات جديدة باستمرار
        if (particles.length < particleCount && Math.random() < 0.1) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * 1000,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                vz: (Math.random() - 0.5) * 5,
                size: Math.random() * 3 + 1,
                color: `hsl(${Math.random() * 360}, 80%, 60%)`,
                life: Math.random() * 100,
                decay: Math.random() * 0.02 + 0.005
            });
        }
        
        requestAnimationFrame(renderQuantumField);
    }
    
    renderQuantumField();
}

// بدء نظام الجسيمات المتقدم
function startParticleSystem() {
    // إضافة جسيمات عائمة في الخلفية
    const particleContainer = document.querySelector('.magic-particles');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: radial-gradient(circle, #fff, transparent);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 20 + 10}s infinite linear;
            opacity: ${Math.random() * 0.8 + 0.2};
        `;
        particleContainer.appendChild(particle);
    }
}

// إعداد التحكم السينمائي
function setupCinematicControls() {
    const pauseBtn = document.getElementById('cinema-pause');
    const fullscreenBtn = document.getElementById('cinema-fullscreen');
    const exitBtn = document.getElementById('cinema-exit');
    
    pauseBtn?.addEventListener('click', () => {
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
            slideshowInterval = null;
            pauseBtn.innerHTML = '<span class="btn-icon">▶️</span><span class="btn-glow"></span>';
        } else {
            // استئناف العرض
            pauseBtn.innerHTML = '<span class="btn-icon">⏸️</span><span class="btn-glow"></span>';
        }
        playQuantumSound();
    });
    
    fullscreenBtn?.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        playQuantumSound();
    });
    
    exitBtn?.addEventListener('click', () => {
        stopCinematicShow();
        playQuantumSound();
    });
}

// إخفاء المحتوى العادي للعرض التقديمي
function hideMainContentForSlideshow() {
    const heroContent = document.querySelector('.hero-content');
    const gallerySection = document.querySelector('.gallery-section');
    const messagesSection = document.querySelector('.messages-section');
    const footer = document.querySelector('.footer');
    
    if (typeof gsap !== 'undefined') {
        gsap.to([gallerySection, messagesSection, footer], {
            duration: 0.5,
            opacity: 0,
            y: 50,
            ease: "power2.out",
            onComplete: () => {
                gallerySection.style.display = 'none';
                messagesSection.style.display = 'none';
                footer.style.display = 'none';
            }
        });
        
        gsap.to(heroContent, {
            duration: 0.5,
            opacity: 0,
            scale: 0.8,
            ease: "power2.out"
        });
    } else {
        // استخدام CSS transitions
        [gallerySection, messagesSection, footer].forEach(section => {
            section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            setTimeout(() => {
                section.style.display = 'none';
            }, 500);
        });
        
        heroContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'scale(0.8)';
    }
}

// إنشاء حاوي العرض التقديمي
function createSlideshowContainer() {
    // إزالة الحاوي القديم إن وجد
    const existingContainer = document.getElementById('slideshow-container');
    if (existingContainer) {
        existingContainer.remove();
    }
    
    const heroSection = document.querySelector('.hero-section');
    const slideshowContainer = document.createElement('div');
    slideshowContainer.id = 'slideshow-container';
    slideshowContainer.innerHTML = `
        <div class="slideshow-content">
            <div class="slideshow-image-container">
                <img id="slideshow-image" src="" alt="" />
                <div class="slideshow-overlay">
                    <h2 id="slideshow-title"></h2>
                    <p id="slideshow-description"></p>
                </div>
            </div>
            <div class="slideshow-progress">
                <div class="progress-bar"></div>
            </div>
            <div class="slideshow-counter">
                <span id="current-slide">1</span> / <span id="total-slides">${imagesData.length}</span>
            </div>
        </div>
    `;
    
    // إضافة الأنماط
    slideshowContainer.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        max-width: 800px;
        opacity: 0;
        z-index: 10;
    `;
    
    heroSection.appendChild(slideshowContainer);
    
    // أنيمايشن الدخول المتقدم
    setTimeout(() => {
        slideshowContainer.classList.add('grand-entrance');
        if (typeof gsap !== 'undefined') {
            gsap.to(slideshowContainer, {
                duration: 1.5,
                opacity: 1,
                scale: 1,
                rotationY: 0,
                rotationX: 0,
                ease: "back.out(1.7)"
            });
        } else {
            slideshowContainer.style.opacity = '1';
        }
    }, 200);
}

// عرض صورة في العرض التقديمي
function showSlideImage(index) {
    const imageData = imagesData[index];
    const slideshowImage = document.getElementById('slideshow-image');
    const slideshowTitle = document.getElementById('slideshow-title');
    const slideshowDescription = document.getElementById('slideshow-description');
    const currentSlideSpan = document.getElementById('current-slide');
    const progressBar = document.querySelector('.progress-bar');
    
    if (!slideshowImage) return;
    
    // اختيار نص مترابط عشوائي
    const randomTextPair = getRandomTextPair();
    
    // تم إزالة صوت التبديل
    
    // تحديث شريط التقدم مع أنيمايشن
    const progress = ((index + 1) / imagesData.length) * 100;
    if (progressBar) {
        if (typeof gsap !== 'undefined') {
            gsap.to(progressBar, {
                duration: 0.8,
                width: progress + '%',
                ease: "power2.out"
            });
        } else {
            progressBar.style.transition = 'width 0.8s ease';
            progressBar.style.width = progress + '%';
        }
    }
    
    // تحديث العداد مع أنيمايشن
    if (currentSlideSpan) {
        if (typeof gsap !== 'undefined') {
            gsap.to(currentSlideSpan, {
                duration: 0.3,
                scale: 1.3,
                ease: "back.out(1.7)",
                onComplete: () => {
                    currentSlideSpan.textContent = index + 1;
                    gsap.to(currentSlideSpan, {
                        duration: 0.3,
                        scale: 1,
                        ease: "back.out(1.7)"
                    });
                }
            });
        } else {
            currentSlideSpan.style.transition = 'transform 0.3s ease';
            currentSlideSpan.style.transform = 'scale(1.3)';
            setTimeout(() => {
                currentSlideSpan.textContent = index + 1;
                currentSlideSpan.style.transform = 'scale(1)';
            }, 150);
        }
    }
    
    // إضافة تأثير تشويق بين الصور
    addSlideshowExcitement();
    
    // أنيمايشن تغيير الصورة المتقدم
    if (typeof gsap !== 'undefined') {
        gsap.to(slideshowImage, {
            duration: 0.6,
            opacity: 0,
            scale: 1.1,
            rotationY: 15,
            ease: "power2.out",
            onComplete: () => {
                slideshowImage.src = imageData.src;
                slideshowTitle.textContent = randomTextPair.title;
                slideshowDescription.textContent = randomTextPair.description;
                
                gsap.fromTo(slideshowImage, 
                    { opacity: 0, scale: 0.8, rotationY: -15 },
                    { duration: 1.2, opacity: 1, scale: 1, rotationY: 0, ease: "back.out(1.7)" }
                );
                
                gsap.fromTo([slideshowTitle, slideshowDescription],
                    { opacity: 0, y: 50, rotationX: 90 },
                    { duration: 1, opacity: 1, y: 0, rotationX: 0, stagger: 0.3, ease: "back.out(1.7)" }
                );
                
                // إضافة تأثير بريق للصورة
                addImageSparkle(slideshowImage);
            }
        });
    } else {
        // استخدام transitions محسنة
        slideshowImage.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        slideshowImage.style.opacity = '0';
        slideshowImage.style.transform = 'scale(1.1) rotateY(15deg)';
        
        setTimeout(() => {
            slideshowImage.src = imageData.src;
            slideshowTitle.textContent = randomTextPair.title;
            slideshowDescription.textContent = randomTextPair.description;
            
            slideshowImage.style.opacity = '1';
            slideshowImage.style.transform = 'scale(1) rotateY(0deg)';
            
            [slideshowTitle, slideshowDescription].forEach((el, i) => {
                el.style.transition = 'opacity 1s ease, transform 1s ease';
                el.style.opacity = '0';
                el.style.transform = 'translateY(50px) rotateX(90deg)';
                
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0) rotateX(0deg)';
                }, i * 300);
            });
        }, 600);
    }
    
    // تم تعطيل رسائل التشجيع للعرض التقديمي
    // if (Math.random() < 0.3) { // 30% احتمال
    //     showSlideshowEncouragement();
    // }
}

// إضافة تأثير تشويق للعرض التقديمي
function addSlideshowExcitement() {
    const container = document.getElementById('slideshow-container');
    if (!container) return;
    
    if (typeof gsap !== 'undefined') {
        gsap.to(container, {
            duration: 0.1,
            x: 5,
            yoyo: true,
            repeat: 3,
            ease: "power2.inOut"
        });
    } else {
        let shakeCount = 0;
        const shake = () => {
            if (shakeCount < 6) {
                container.style.transform = `translate(-50%, -50%) translateX(${shakeCount % 2 === 0 ? '5px' : '-5px'})`;
                shakeCount++;
                setTimeout(shake, 50);
            } else {
                container.style.transform = 'translate(-50%, -50%)';
            }
        };
        shake();
    }
}

// إضافة تأثير بريق للصورة
function addImageSparkle(image) {
    const sparkles = [];
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.cssText = `
            position: absolute;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            font-size: ${Math.random() * 20 + 10}px;
            z-index: 1000;
            pointer-events: none;
            animation: sparkleAnimation 2s ease-out forwards;
        `;
        
        image.parentElement.appendChild(sparkle);
        sparkles.push(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }
}

// رسائل تشجيع خاصة بالعرض التقديمي - تم التعطيل
const slideshowEncouragements = [];

function showSlideshowEncouragement() {
    // تم تعطيل رسائل التشجيع في العرض التقديمي
    return;
}

// إظهار المحتوى العادي مرة أخرى
function showMainContent() {
    const heroContent = document.querySelector('.hero-content');
    const gallerySection = document.querySelector('.gallery-section');
    const messagesSection = document.querySelector('.messages-section');
    const footer = document.querySelector('.footer');
    const slideshowContainer = document.getElementById('slideshow-container');
    
    // إزالة حاوي العرض التقديمي
    if (slideshowContainer) {
        if (typeof gsap !== 'undefined') {
            gsap.to(slideshowContainer, {
                duration: 0.5,
                opacity: 0,
                scale: 0.8,
                ease: "power2.out",
                onComplete: () => {
                    slideshowContainer.remove();
                }
            });
        } else {
            slideshowContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            slideshowContainer.style.opacity = '0';
            slideshowContainer.style.transform = 'translate(-50%, -50%) scale(0.8)';
            setTimeout(() => {
                slideshowContainer.remove();
            }, 500);
        }
    }
    
    // إظهار المحتوى العادي
    setTimeout(() => {
        [gallerySection, messagesSection, footer].forEach(section => {
            section.style.display = 'block';
        });
        
        if (typeof gsap !== 'undefined') {
            gsap.to(heroContent, {
                duration: 0.8,
                opacity: 1,
                scale: 1,
                ease: "back.out(1.7)"
            });
            
            gsap.to([gallerySection, messagesSection, footer], {
                duration: 0.8,
                opacity: 1,
                y: 0,
                stagger: 0.2,
                ease: "power2.out"
            });
        } else {
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'scale(1)';
            
            [gallerySection, messagesSection, footer].forEach((section, i) => {
                section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                setTimeout(() => {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, i * 200);
            });
        }
    }, 600);
}

// معالجة أحداث لوحة المفاتيح
function handleKeyPress(e) {
    const modal = document.getElementById('image-modal');
    
    if (modal.style.display === 'block') {
        switch(e.key) {
            case 'Escape':
                closeModal();
                break;
            case 'ArrowLeft':
                nextImage();
                break;
            case 'ArrowRight':
                prevImage();
                break;
        }
    }
    
    // اختصارات عامة
    switch(e.key) {
        case ' ':
            e.preventDefault();
            toggleMusic();
            break;
        case 'f':
        case 'F':
            toggleFullscreen();
            break;
        case 's':
        case 'S':
            startSlideshow();
            break;
    }
}

// معالجة التمرير
function handleScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255,255,255,0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0,0,0,0.15)';
    } else {
        navbar.style.background = 'rgba(255,255,255,0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
}

// إنشاء الجسيمات المتحركة
function createParticles() {
    const particlesContainer = document.querySelector('.particles-bg');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'sparkle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// بدء أنيمايشن الخلفية
function startBackgroundAnimation() {
    if (typeof gsap !== 'undefined') {
        // أنيمايشن العناوين
        gsap.from('.hero-title .title-line', {
            duration: 1,
            x: -100,
            opacity: 0,
            stagger: 0.3,
            ease: "power3.out"
        });
        
        // أنيمايشن الزخارف
        gsap.from('.decoration-item', {
            duration: 0.8,
            scale: 0,
            rotation: 180,
            stagger: 0.2,
            ease: "back.out(1.7)"
        });
        
        // أنيمايشن بطاقات الرسائل
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.from('.message-card', {
                duration: 0.8,
                y: 100,
                opacity: 0,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.messages-section',
                    start: 'top 80%'
                }
            });
        } else {
            gsap.from('.message-card', {
                duration: 0.8,
                y: 100,
                opacity: 0,
                stagger: 0.2,
                ease: "power2.out"
            });
        }
    } else {
        // استخدام CSS animations بديل
        setTimeout(() => {
            const titleLines = document.querySelectorAll('.hero-title .title-line');
            titleLines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.animation = 'fadeInLeft 1s ease-out forwards';
                }, index * 300);
            });
            
            const decorationItems = document.querySelectorAll('.decoration-item');
            decorationItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.animation = 'scaleIn 0.8s ease-out forwards';
                }, index * 200);
            });
        }, 500);
        
        // أنيمايشن بطاقات الرسائل مع Intersection Observer
        const messageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                    }, index * 200);
                }
            });
        }, { threshold: 0.1 });
        
        setTimeout(() => {
            const messageCards = document.querySelectorAll('.message-card');
            messageCards.forEach(card => messageObserver.observe(card));
        }, 100);
    }
}

// أنيمايشن التحويل السلس بين الأقسام
function smoothSectionTransition() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        gsap.from(section, {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                once: true
            }
        });
    });
}

// تأثيرات التفاعل مع الماوس
function addMouseEffects() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(item, {
                    duration: 0.3,
                    y: -10,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    ease: "power2.out"
                });
            } else {
                // استخدام CSS transition بديل
                item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
                item.style.transform = 'translateY(-10px)';
                item.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(item, {
                    duration: 0.3,
                    y: 0,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    ease: "power2.out"
                });
            } else {
                // استخدام CSS transition بديل
                item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
                item.style.transform = 'translateY(0)';
                item.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }
        });
    });
}

// تهيئة مكتبة GSAP (إذا كانت متوفرة)
if (typeof gsap !== 'undefined') {
    // تسجيل إضافة ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }
    
    // بدء الأنيمايشن بعد تحميل الصفحة
    window.addEventListener('load', () => {
        smoothSectionTransition();
        addMouseEffects();
    });
} else {
    // استخدام أنيمايشن CSS البديل في حالة عدم توفر GSAP
    console.log('GSAP not available, using CSS animations');
    window.addEventListener('load', () => {
        addCSSAnimations();
        addMouseEffects();
    });
}

// أنيمايشن CSS البديل
function addCSSAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        .fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .fade-in-left {
            animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .scale-in {
            animation: scaleIn 0.5s ease-out forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes scaleIn {
            from {
                opacity: 0;
                transform: scale(0.8);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);
    
    // إضافة الفئات للعناصر
    setTimeout(() => {
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('fade-in-up');
            }, index * 100);
        });
        
        const messageCards = document.querySelectorAll('.message-card');
        messageCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('scale-in');
            }, index * 200);
        });
    }, 1000);
}

// تم إزالة تأثيرات النقر الصوتية
// document.addEventListener('click', (e) => {
//     if (e.target.matches('button, .gallery-item, .nav-btn, .filter-btn')) {
//         playClickSound();
//     }
// });

// حفظ تفضيلات المستخدم
function saveUserPreferences() {
    const preferences = {
        musicEnabled: isPlaying,
        lastVisited: Date.now()
    };
    
    localStorage.setItem('audioSettings', JSON.stringify(preferences));
}

// تحميل تفضيلات المستخدم
function loadUserPreferences() {
    const saved = localStorage.getItem('audioSettings');
    if (saved) {
        const preferences = JSON.parse(saved);
        if (preferences.musicEnabled && backgroundMusic) {
            // تشغيل الموسيقى تلقائياً إذا كانت مفعلة سابقاً
            setTimeout(() => {
                toggleMusic();
            }, 1000);
        }
    }
}

// حفظ التفضيلات عند إغلاق الصفحة
window.addEventListener('beforeunload', saveUserPreferences);

// تحميل التفضيلات عند بدء التطبيق
window.addEventListener('load', loadUserPreferences);

// رسائل التشجيع العشوائية - تم التعطيل
const encouragementMessages = [];

// عرض رسالة تشجيع عشوائية - تم التعطيل
function showRandomEncouragement() {
    // تم تعطيل الرسائل العشوائية
    return;
}

// تم إزالة تكرار الرسائل العشوائية
// setInterval(showRandomEncouragement, 30000);

// إضافة لمسة سحرية للموقع
function addMagicalTouch() {
    // إضافة تأثير النجوم المتساقطة
    setInterval(() => {
        createFallingStar();
    }, 5000);
}

// إنشاء نجمة متساقطة
function createFallingStar() {
    const star = document.createElement('div');
    star.innerHTML = '⭐';
    star.style.cssText = `
        position: fixed;
        top: -50px;
        left: ${Math.random() * window.innerWidth}px;
        font-size: 20px;
        z-index: 1;
        pointer-events: none;
        animation: fallingStar 3s linear forwards;
    `;
    
    document.body.appendChild(star);
    
    setTimeout(() => {
        star.remove();
    }, 3000);
}

// CSS للنجوم المتساقطة
const style = document.createElement('style');
style.textContent = `
    @keyframes fallingStar {
        to {
            transform: translateY(${window.innerHeight + 100}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// بدء اللمسة السحرية
window.addEventListener('load', addMagicalTouch);

console.log('🎉 مرحباً بكم في موقع توديع المعلمين المتميزين! 🎉');

// 🎬 العرض السينمائي المذهل - أقوى من PowerPoint! 
// ==========================================

// استبدال دالة العرض التقديمي بنسخة هوليوودية
const originalStartSlideshow = startSlideshow;
startSlideshow = function() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        destroyHollywoodExperience();
        return;
    }
    
    // إطلاق تجربة هوليوودية لا تُنسى! 🎭
    launchHollywoodExperience();
};

// إطلاق التجربة السينمائية الملحمية
function launchHollywoodExperience() {
    // إنشاء عالم افتراضي ثلاثي الأبعاد
    createHollywoodEnvironment();
    
    // تفعيل المحرك الفيزيائي المتقدم (سيتم تشغيله مع createQuantumField)
    // initializeQuantumPhysics();
    
    // بدء العرض السينمائي
    startCinematicPresentation();
}

// إنشاء البيئة السينمائية المتطورة
function createHollywoodEnvironment() {
    document.body.style.overflow = 'hidden';
    
    const hollywoodStage = document.createElement('div');
    hollywoodStage.id = 'hollywood-stage';
    hollywoodStage.innerHTML = `
        <!-- محرك الفضاء الخارجي -->
        <div class="space-engine">
            <!-- طبقة النجوم المتحركة -->
            <div class="star-layers">
                <div class="star-layer layer-1"></div>
                <div class="star-layer layer-2"></div>
                <div class="star-layer layer-3"></div>
            </div>
            
            <!-- الجسيمات الكمية -->
            <canvas id="quantum-canvas" class="quantum-field"></canvas>
            
            <!-- منصة العرض الهولوجرامي -->
            <div class="hologram-theater">
                <!-- القاعدة المضيئة -->
                <div class="energy-platform">
                    <div class="platform-core"></div>
                    <div class="energy-rings">
                        <div class="ring ring-1"></div>
                        <div class="ring ring-2"></div>
                        <div class="ring ring-3"></div>
                    </div>
                </div>
                
                <!-- إطار العرض المستقبلي -->
                <div class="holographic-frame">
                    <div class="frame-corners">
                        <div class="corner corner-tl"></div>
                        <div class="corner corner-tr"></div>
                        <div class="corner corner-bl"></div>
                        <div class="corner corner-br"></div>
                    </div>
                    
                    <!-- منطقة الصورة الرئيسية -->
                    <div class="main-display">
                        <div class="hologram-beams">
                            <div class="beam beam-1"></div>
                            <div class="beam beam-2"></div>
                            <div class="beam beam-3"></div>
                            <div class="beam beam-4"></div>
                        </div>
                        
                        <div class="image-hologram">
                            <img id="hollywood-image" src="" alt="" />
                            <div class="scan-lines"></div>
                            <div class="quantum-glow"></div>
                            <div class="data-grid"></div>
                        </div>
                    </div>
                </div>
                
                <!-- لوحة المعلومات التفاعلية -->
                <div class="info-terminal">
                    <div class="terminal-screen">
                        <div class="screen-glow"></div>
                        <div class="data-stream"></div>
                        
                        <div class="title-display">
                            <h1 id="hollywood-title"></h1>
                            <div class="title-effects"></div>
                        </div>
                        
                        <div class="description-display">
                            <p id="hollywood-description"></p>
                            <div class="typing-cursor">|</div>
                        </div>
                        
                        <div class="stats-panel">
                            <div class="stat">
                                <span class="label">FRAME</span>
                                <span class="value" id="frame-counter">001</span>
                            </div>
                            <div class="stat">
                                <span class="label">TOTAL</span>
                                <span class="value">${String(imagesData.length).padStart(3, '0')}</span>
                            </div>
                            <div class="stat">
                                <span class="label">STATUS</span>
                                <span class="value status-live">LIVE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- شريط التقدم الكوني -->
            <div class="cosmic-progress">
                <div class="progress-container">
                    <div class="progress-background"></div>
                    <div class="progress-energy" id="cosmic-bar"></div>
                    <div class="progress-spark"></div>
                </div>
                <div class="progress-nodes">
                    ${Array.from({length: imagesData.length}, (_, i) => 
                        `<div class="node" data-index="${i}"></div>`
                    ).join('')}
                </div>
            </div>
            
            <!-- أزرار التحكم المستقبلية -->
            <div class="control-panel">
                <button class="cosmic-btn" id="cosmic-pause">
                    <div class="btn-core"></div>
                    <div class="btn-icon">⏸</div>
                    <div class="btn-label">PAUSE</div>
                </button>
                
                <button class="cosmic-btn" id="cosmic-fullscreen">
                    <div class="btn-core"></div>
                    <div class="btn-icon">⛶</div>
                    <div class="btn-label">IMMERSE</div>
                </button>
                
                <button class="cosmic-btn" id="cosmic-next">
                    <div class="btn-core"></div>
                    <div class="btn-icon">▶</div>
                    <div class="btn-label">NEXT</div>
                </button>
                
                <button class="cosmic-btn" id="cosmic-exit">
                    <div class="btn-core"></div>
                    <div class="btn-icon">✕</div>
                    <div class="btn-label">EXIT</div>
                </button>
            </div>
            
            <!-- تأثيرات البيئة المتقدمة -->
            <div class="environmental-fx">
                <div class="aurora-field"></div>
                <div class="energy-storms"></div>
                <div class="light-particles"></div>
            </div>
            
            <!-- رسائل ديناميكية -->
            <div class="dynamic-messages" id="cosmic-messages"></div>
        </div>
    `;
    
    hollywoodStage.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: 
            radial-gradient(ellipse at 20% 30%, rgba(100, 0, 200, 0.4) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 70%, rgba(200, 0, 100, 0.4) 0%, transparent 60%),
            linear-gradient(135deg, #000000 0%, #0d1421 50%, #000000 100%);
        z-index: 999999;
        overflow: hidden;
        perspective: 4000px;
        transform-style: preserve-3d;
        font-family: 'Orbitron', monospace;
        cursor: none;
    `;
    
    document.body.appendChild(hollywoodStage);
    
    // تفعيل الأنظمة المتقدمة
    setTimeout(() => {
        createQuantumField();
        createStarLayers();
        setupCosmicControls();
        startEnvironmentalFX();
        showOpeningSequence();
    }, 100);
}

// إنشاء الحقل الكمي للجسيمات
function createQuantumField() {
    const canvas = document.getElementById('quantum-canvas');
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    
    const quantumSystem = {
        particles: [],
        mouseX: canvas.width / 2,
        mouseY: canvas.height / 2,
        time: 0,
        
        createParticle(x, y) {
            return {
                x: x || Math.random() * canvas.width,
                y: y || Math.random() * canvas.height,
                z: Math.random() * 2000 - 1000,
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3,
                vz: (Math.random() - 0.5) * 6,
                size: Math.random() * 5 + 1,
                life: 1.0,
                decay: Math.random() * 0.003 + 0.001,
                hue: Math.random() * 360,
                energy: Math.random() * 100 + 50,
                spin: Math.random() * 0.1 - 0.05,
                phase: Math.random() * Math.PI * 2
            };
        },
        
        update() {
            this.time += 0.016;
            
            this.particles.forEach((p, i) => {
                // فيزياء متقدمة
                const centerForce = 150 / (Math.sqrt((p.x - canvas.width/2)**2 + (p.y - canvas.height/2)**2) + 150);
                const centerAngle = Math.atan2(canvas.height/2 - p.y, canvas.width/2 - p.x);
                
                p.vx += Math.cos(centerAngle) * centerForce * 0.0005;
                p.vy += Math.sin(centerAngle) * centerForce * 0.0005;
                
                // تأثير الماوس
                const mouseDist = Math.sqrt((p.x - this.mouseX)**2 + (p.y - this.mouseY)**2);
                if (mouseDist < 200) {
                    const mouseForce = (200 - mouseDist) / 200;
                    const mouseAngle = Math.atan2(p.y - this.mouseY, p.x - this.mouseX);
                    p.vx += Math.cos(mouseAngle) * mouseForce * 0.3;
                    p.vy += Math.sin(mouseAngle) * mouseForce * 0.3;
                    p.energy += mouseForce * 20;
                }
                
                // حركة مدارية
                p.phase += p.spin;
                p.vx += Math.cos(p.phase + this.time) * 0.05;
                p.vy += Math.sin(p.phase + this.time) * 0.05;
                
                // تحديث الموضع
                p.x += p.vx;
                p.y += p.vy;
                p.z += p.vz;
                
                // حدود الشاشة
                if (p.x < 0 || p.x > canvas.width) p.vx *= -0.8;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -0.8;
                if (p.z < -1000 || p.z > 1000) p.vz *= -0.8;
                
                // تقليل الحياة
                p.life -= p.decay;
                p.energy *= 0.999;
                
                if (p.life <= 0) {
                    this.particles.splice(i, 1);
                }
            });
            
                         // إضافة جسيمات جديدة (محسن للأداء)
             while (this.particles.length < 50) {
                 this.particles.push(this.createParticle());
             }
        },
        
        render() {
            // مسح مع تأثير الذيل
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // رسم الجسيمات مع تأثيرات سينمائية
            this.particles.forEach(p => {
                const perspective = 1500;
                const scale = perspective / (perspective + p.z);
                const x2d = (p.x - canvas.width/2) * scale + canvas.width/2;
                const y2d = (p.y - canvas.height/2) * scale + canvas.height/2;
                
                if (scale <= 0) return;
                
                const size = p.size * scale;
                const alpha = p.life * scale;
                const energy = Math.min(p.energy / 100, 1);
                
                // هالة مضيئة متعددة الطبقات
                for (let layer = 0; layer < 3; layer++) {
                    const layerSize = size * (4 - layer);
                    const layerAlpha = alpha * (0.3 - layer * 0.1);
                    
                    const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, layerSize);
                    gradient.addColorStop(0, `hsla(${p.hue + energy * 60}, 100%, 70%, ${layerAlpha})`);
                    gradient.addColorStop(0.5, `hsla(${p.hue + energy * 60}, 80%, 50%, ${layerAlpha * 0.6})`);
                    gradient.addColorStop(1, 'transparent');
                    
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(x2d, y2d, layerSize, 0, Math.PI * 2);
                    ctx.fill();
                }
                
                // النواة المضيئة
                ctx.fillStyle = `hsla(${p.hue}, 100%, 90%, ${alpha})`;
                ctx.beginPath();
                ctx.arc(x2d, y2d, size * 0.3, 0, Math.PI * 2);
                ctx.fill();
                
                // خطوط الطاقة المشعة
                const rays = 6;
                for (let r = 0; r < rays; r++) {
                    const angle = (p.phase + r * Math.PI * 2 / rays);
                    const rayLength = size * 8 * energy;
                    const endX = x2d + Math.cos(angle) * rayLength;
                    const endY = y2d + Math.sin(angle) * rayLength;
                    
                    const rayGradient = ctx.createLinearGradient(x2d, y2d, endX, endY);
                    rayGradient.addColorStop(0, `hsla(${p.hue}, 80%, 80%, ${alpha * 0.8})`);
                    rayGradient.addColorStop(1, 'transparent');
                    
                    ctx.strokeStyle = rayGradient;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(x2d, y2d);
                    ctx.lineTo(endX, endY);
                    ctx.stroke();
                }
            });
            
            // شبكة اتصال بين الجسيمات
            this.particles.forEach((p1, i) => {
                this.particles.slice(i + 1, i + 6).forEach(p2 => {
                    const dist = Math.sqrt((p1.x - p2.x)**2 + (p1.y - p2.y)**2);
                    if (dist < 120) {
                        const scale1 = 1500 / (1500 + p1.z);
                        const scale2 = 1500 / (1500 + p2.z);
                        
                        const x1 = (p1.x - canvas.width/2) * scale1 + canvas.width/2;
                        const y1 = (p1.y - canvas.height/2) * scale1 + canvas.height/2;
                        const x2 = (p2.x - canvas.width/2) * scale2 + canvas.width/2;
                        const y2 = (p2.y - canvas.height/2) * scale2 + canvas.height/2;
                        
                        const opacity = (120 - dist) / 120 * p1.life * p2.life * 0.3;
                        
                        ctx.strokeStyle = `rgba(0, 200, 255, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.stroke();
                    }
                });
            });
        }
    };
    
    // تفعيل تتبع الماوس
    canvas.addEventListener('mousemove', (e) => {
        quantumSystem.mouseX = e.clientX;
        quantumSystem.mouseY = e.clientY;
        
                 // إضافة انفجار جسيمات (محسن للأداء)
         for (let i = 0; i < 3; i++) {
            quantumSystem.particles.push(quantumSystem.createParticle(
                e.clientX + (Math.random() - 0.5) * 150,
                e.clientY + (Math.random() - 0.5) * 150
            ));
        }
    });
    
         // إضافة جسيمات أولية (محسن للأداء)
     for (let i = 0; i < 40; i++) {
         quantumSystem.particles.push(quantumSystem.createParticle());
     }
    
    // حلقة الرسم
    function quantumLoop() {
        quantumSystem.update();
        quantumSystem.render();
        requestAnimationFrame(quantumLoop);
    }
    quantumLoop();
}

// بدء العرض السينمائي الفعلي
function startCinematicPresentation() {
    let currentFrame = 0;
    
    // عرض الصورة الأولى مع تأثيرات مذهلة
    showCinematicFrame(currentFrame);
    
    // بدء العرض التلقائي
    slideshowInterval = setInterval(() => {
        currentFrame = (currentFrame + 1) % imagesData.length;
        showCinematicFrame(currentFrame);
    }, 4000);
    
    // إنهاء العرض بعد دورتين
    setTimeout(() => {
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
            slideshowInterval = null;
            showClosingSequence();
        }
    }, imagesData.length * 4000 * 2);
}

// عرض إطار سينمائي مع تأثيرات هوليوودية
function showCinematicFrame(index) {
    const imageData = imagesData[index];
    const image = document.getElementById('hollywood-image');
    const title = document.getElementById('hollywood-title');
    const description = document.getElementById('hollywood-description');
    const counter = document.getElementById('frame-counter');
    const progressBar = document.getElementById('cosmic-bar');
    
    if (!image) return;
    
    // تأثير صوتي كوني
    playCosmicSound();
    
    // تحديث شريط التقدم مع تأثيرات
    const progress = ((index + 1) / imagesData.length) * 100;
    if (progressBar) {
        progressBar.style.width = progress + '%';
                 progressBar.style.boxShadow = `0 0 20px hsla(${index * 30}, 100%, 60%, 0.8)`;
    }
    
    // تحديث العداد مع أنيمايشن
    if (counter) {
        counter.style.transform = 'scale(1.3) rotateY(360deg)';
        setTimeout(() => {
            counter.textContent = String(index + 1).padStart(3, '0');
            counter.style.transform = 'scale(1) rotateY(0deg)';
        }, 200);
    }
    
    // تأثير انتقال سينمائي للصورة
    if (typeof gsap !== 'undefined') {
        gsap.to(image, {
            duration: 0.8,
            opacity: 0,
            scale: 0.7,
            rotationY: 90,
            filter: 'blur(20px)',
            ease: "power3.out",
            onComplete: () => {
                image.src = imageData.src;
                
                gsap.fromTo(image, 
                    { 
                        opacity: 0, 
                        scale: 1.3, 
                        rotationY: -90,
                        filter: 'blur(20px) brightness(2)'
                    },
                    { 
                        duration: 1.5, 
                        opacity: 1, 
                        scale: 1, 
                        rotationY: 0,
                        filter: 'blur(0px) brightness(1)',
                        ease: "back.out(1.7)"
                    }
                );
                
                // تأثير الكتابة الآلية للنصوص مع النصوص المترابطة
                const randomTextPair = getRandomTextPair();
                typewriterEffect(title, randomTextPair.title, 50);
                setTimeout(() => {
                    typewriterEffect(description, randomTextPair.description, 30);
                }, 800);
                
                // إضافة تأثيرات بيئية
                createFrameEffects();
            }
        });
    } else {
        // نسخة CSS fallback
        image.style.transition = 'all 0.8s ease';
        image.style.opacity = '0';
        image.style.transform = 'scale(0.7) rotateY(90deg)';
        image.style.filter = 'blur(20px)';
        
        setTimeout(() => {
            image.src = imageData.src;
            image.style.opacity = '1';
            image.style.transform = 'scale(1) rotateY(0deg)';
            image.style.filter = 'blur(0px)';
            
            // النصوص المترابطة
            const randomTextPair = getRandomTextPair();
            typewriterEffect(title, randomTextPair.title, 50);
            setTimeout(() => {
                typewriterEffect(description, randomTextPair.description, 30);
            }, 800);
        }, 800);
    }
    
    // رسالة تشجيع كونية
    if (Math.random() < 0.4) {
        showCosmicMessage();
    }
}

// تأثير الكتابة الآلية
function typewriterEffect(element, text, speed) {
    if (!element) return;
    
    element.textContent = '';
    let i = 0;
    
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, speed);
}

// تشغيل صوت كوني
function playCosmicSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();
        
        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.3);
        oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.6);
        
        filter.type = 'lowpass';
        filter.frequency.value = 1000;
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.6);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.6);
    } catch (e) {
        console.log('Cosmic audio not available');
    }
}

// إنشاء تأثيرات الإطار
function createFrameEffects() {
    const container = document.querySelector('.hologram-theater');
    if (!container) return;
    
    // إضافة وميض طاقة
    for (let i = 0; i < 10; i++) {
        const flash = document.createElement('div');
                 flash.style.cssText = `
             position: absolute;
             width: ${Math.random() * 20 + 5}px;
             height: ${Math.random() * 20 + 5}px;
             background: radial-gradient(circle, #fff, transparent);
             border-radius: 50%;
             left: ${Math.random() * 100}%;
             top: ${Math.random() * 100}%;
             animation: flashEffect 1s ease-out forwards;
             pointer-events: none;
         `;
        
        container.appendChild(flash);
        
        setTimeout(() => {
            flash.remove();
        }, 1000);
    }
}

// عرض رسالة كونية
function showCosmicMessage() {
    const messages = [
       
        "لحظات لا تنسى..  حاول تمسحها من دماغك! 🌌",
    ];
    
    const message = messages[Math.floor(Math.random() * messages.length)];
    const messageEl = document.createElement('div');
    
         messageEl.style.cssText = `
         position: fixed;
         top: 15%;
         left: 50%;
         transform: translateX(-50%) translateY(-100%);
         background: linear-gradient(45deg, 
             rgba(0, 255, 255, 0.9), 
             rgba(255, 0, 255, 0.9),
             rgba(255, 255, 0, 0.9)
         );
         color: #000;
         padding: 15px 30px;
         border-radius: 50px;
         font-size: 18px;
         font-weight: 700;
         box-shadow: 
             0 0 30px rgba(255, 255, 255, 0.5),
             inset 0 0 30px rgba(255, 255, 255, 0.2);
         z-index: 1000000;
         transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
         text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
     `;
    
    messageEl.textContent = message;
    document.body.appendChild(messageEl);
    
    // أنيمايشن الدخول
    setTimeout(() => {
        messageEl.style.transform = 'translateX(-50%) translateY(0)';
    }, 100);
    
    // أنيمايشن الخروج
    setTimeout(() => {
        messageEl.style.transform = 'translateX(-50%) translateY(-100%)';
        setTimeout(() => {
            messageEl.remove();
        }, 500);
    }, 3000);
}

// إنهاء التجربة السينمائية
function destroyHollywoodExperience() {
    const stage = document.getElementById('hollywood-stage');
    if (stage) {
        stage.style.animation = 'cosmicCollapse 1.5s ease-in forwards';
        
        setTimeout(() => {
            stage.remove();
            document.body.style.overflow = '';
            showMainContent();
        }, 1500);
    }
    
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
}

// إضافة الوظائف المفقودة للعرض السينمائي

// إنشاء طبقات النجوم
function createStarLayers() {
    const layers = document.querySelectorAll('.star-layer');
    layers.forEach(layer => {
                 // إضافة نجوم إضافية (محسن للأداء)
         for (let i = 0; i < 15; i++) {
            const star = document.createElement('div');
            star.className = 'quantum-star';
            const size = Math.random() * 2 + 1;
            star.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                background: #fff;
                border-radius: 50%;
                box-shadow: 0 0 ${size * 2}px rgba(255,255,255,0.8);
                animation: twinkle ${Math.random() * 3 + 2}s infinite alternate;
            `;
            layer.appendChild(star);
        }
    });
}

// إعداد التحكم الكوني
function setupCosmicControls() {
    const pauseBtn = document.getElementById('cosmic-pause');
    const fullscreenBtn = document.getElementById('cosmic-fullscreen');
    const nextBtn = document.getElementById('cosmic-next');
    const exitBtn = document.getElementById('cosmic-exit');
    
    // تأثير صوتي للأزرار
    const cosmicBeep = () => {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (e) {
            console.log('Audio not available');
        }
    };
    
    pauseBtn?.addEventListener('click', () => {
        cosmicBeep();
        if (slideshowInterval) {
            clearInterval(slideshowInterval);
            slideshowInterval = null;
        }
    });
    
    fullscreenBtn?.addEventListener('click', () => {
        cosmicBeep();
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });
    
    nextBtn?.addEventListener('click', () => {
        cosmicBeep();
        // التقديم السريع للصورة التالية
    });
    
    exitBtn?.addEventListener('click', () => {
        cosmicBeep();
        destroyHollywoodExperience();
    });
}

// بدء التأثيرات البيئية
function startEnvironmentalFX() {
    // تأثيرات الشفق القطبي
    const auroraField = document.querySelector('.aurora-field');
    if (auroraField) {
                 setInterval(() => {
             auroraField.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
         }, 6000);
    }
    
    // تأثيرات العواصف الطاقية
    const stormElements = document.querySelectorAll('.energy-storms::before');
    
         // إضافة جسيمات ضوئية عشوائية (محسن للأداء)
     setInterval(() => {
         addRandomLightParticles();
     }, 4000);
}

// إضافة جسيمات ضوئية عشوائية
function addRandomLightParticles() {
         const container = document.querySelector('.environmental-fx');
     if (!container) return;
     
     for (let i = 0; i < 2; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: radial-gradient(circle, rgba(255,255,255,0.8), transparent);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatAway 4s ease-out forwards;
            pointer-events: none;
        `;
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 4000);
    }
}

// عرض التسلسل الافتتاحي
function showOpeningSequence() {
    const stage = document.getElementById('hollywood-stage');
    if (!stage) return;
    
    // تأثير دخول مذهل
    if (typeof gsap !== 'undefined') {
        gsap.from('.hologram-theater', {
            duration: 2,
            y: 100,
            opacity: 0,
            scale: 0.5,
            rotationX: -90,
            ease: "back.out(1.7)"
        });
        
        gsap.from('.energy-platform', {
            duration: 1.5,
            delay: 0.5,
            scale: 0,
            opacity: 0,
            ease: "bounce.out"
        });
        
        gsap.from('.control-panel', {
            duration: 1,
            delay: 1,
            x: 100,
            opacity: 0,
            stagger: 0.1,
            ease: "power2.out"
        });
    }
    
    // رسالة ترحيب كونية
    setTimeout(() => {
        showCosmicWelcomeMessage();
    }, 2000);
}

// عرض رسالة ترحيب كونية
function showCosmicWelcomeMessage() {
    const welcomeMsg = document.createElement('div');
    welcomeMsg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, 
            rgba(0, 255, 255, 0.9), 
            rgba(255, 0, 255, 0.9),
            rgba(255, 255, 0, 0.9)
        );
        color: #000;
        padding: 30px 50px;
        border-radius: 25px;
        font-family: 'Orbitron', monospace;
        font-size: 2rem;
        font-weight: 900;
        text-align: center;
        z-index: 1000001;
        box-shadow: 
            0 0 50px rgba(255, 255, 255, 0.8),
            inset 0 0 50px rgba(255, 255, 255, 0.3);
        animation: welcomeEntrance 3s ease-out forwards;
        text-shadow: 0 0 20px rgba(255, 255, 255, 1);
    `;
    
    welcomeMsg.innerHTML = `
        <div style="margin-bottom: 15px;">🎬مع السلامة 🎬</div>    `;
    
    document.body.appendChild(welcomeMsg);
    
    setTimeout(() => {
        welcomeMsg.style.animation = 'welcomeExit 1s ease-in forwards';
        setTimeout(() => {
            welcomeMsg.remove();
        }, 1000);
    }, 3000);
}

// عرض التسلسل الختامي
function showClosingSequence() {
    const stage = document.getElementById('hollywood-stage');
    if (!stage) return;
    
    // رسالة وداع ملحمية
    const farewellMsg = document.createElement('div');
    farewellMsg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, 
            rgba(255, 0, 100, 0.9), 
            rgba(100, 0, 255, 0.9),
            rgba(0, 255, 200, 0.9)
        );
        color: #fff;
        padding: 40px 60px;
        border-radius: 30px;
        font-family: 'Orbitron', monospace;
        font-size: 1.8rem;
        font-weight: 700;
        text-align: center;
        z-index: 1000001;
        box-shadow: 
            0 0 60px rgba(255, 255, 255, 0.9),
            inset 0 0 60px rgba(255, 255, 255, 0.4);
        text-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
    `;
    
    farewellMsg.innerHTML = `
        <div style="margin-bottom: 20px;">✨ شكراً لكم ✨</div>
        `;
    
    document.body.appendChild(farewellMsg);
    
    // تأثيرات صوتية ختامية
    playFinalFanfare();
    
    setTimeout(() => {
        farewellMsg.style.animation = 'cosmicCollapse 2s ease-in forwards';
        setTimeout(() => {
            farewellMsg.remove();
            destroyHollywoodExperience();
        }, 2000);
    }, 4000);
}

// تشغيل الموسيقى الختامية
function playFinalFanfare() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // سلسلة نغمات ختامية ملحمية
        const notes = [440, 523, 659, 784, 880, 1047];
        let delay = 0;
        
        notes.forEach((frequency, index) => {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.8);
            }, delay);
            
            delay += 200;
        });
    } catch (e) {
        console.log('Final fanfare audio not available');
    }
}

// إضافة أنماط CSS للأنيميشن
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes twinkle {
        0% { opacity: 0.3; transform: scale(0.8); }
        100% { opacity: 1; transform: scale(1.2); }
    }
    
    @keyframes floatAway {
        0% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
        }
        100% { 
            opacity: 0; 
            transform: translateY(-200px) scale(0.3); 
        }
    }
    
    @keyframes welcomeEntrance {
        0% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(0.1) rotate(360deg); 
            filter: blur(20px);
        }
        50% { 
            transform: translate(-50%, -50%) scale(1.1) rotate(0deg); 
            filter: blur(5px);
        }
        100% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1) rotate(0deg); 
            filter: blur(0px);
        }
    }
    
    @keyframes welcomeExit {
        0% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1); 
        }
        100% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(0.1) rotate(-360deg); 
            filter: blur(20px);
        }
    }
`;
document.head.appendChild(additionalStyles);

// 🚀 محسن الأداء الذكي
const SmartOptimizer = {
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isLowEnd: navigator.hardwareConcurrency < 4,
    
    getSettings() {
        if (this.isMobile || this.isLowEnd) {
            return { particles: 25, stars: 8, quality: 'خفيف وسريع ⚡' };
        }
        return { particles: 60, stars: 20, quality: 'جودة عالية 🚀' };
    },
    
    optimize() {
        const settings = this.getSettings();
        window.FAST_MODE = settings;
        
        // عرض مؤشر الأداء
        const indicator = document.createElement('div');
        indicator.style.cssText = `
            position: fixed; top: 10px; left: 10px; z-index: 999999;
            background: rgba(0,255,0,0.8); color: #000; padding: 8px 15px;
            border-radius: 20px; font-family: 'Orbitron', monospace; font-size: 0.8rem;
            font-weight: 700; box-shadow: 0 0 15px rgba(0,255,0,0.5);
        `;
        indicator.textContent = `📊 ${settings.quality}`;
        document.body.appendChild(indicator);
        
        setTimeout(() => {
            indicator.style.opacity = '0';
            setTimeout(() => indicator.remove(), 500);
        }, 3000);
    }
};

// تطبيق التحسينات عند البدء
SmartOptimizer.optimize();

// تحديث الدوال لاستخدام الإعدادات المحسنة
const originalCreateQuantumField = createQuantumField;
createQuantumField = function() {
    const canvas = document.getElementById('quantum-canvas');
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    
    // إعدادات محسنة
    const maxParticles = window.FAST_MODE?.particles || 60;
    
    const quantumSystem = {
        particles: [],
        mouseX: canvas.width / 2,
        mouseY: canvas.height / 2,
        
        createParticle(x, y) {
            return {
                x: x || Math.random() * canvas.width,
                y: y || Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 3 + 1,
                life: 1.0,
                decay: Math.random() * 0.01 + 0.005,
                hue: Math.random() * 360
            };
        },
        
        update() {
            this.particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= p.decay;
                
                if (p.x < 0 || p.x > canvas.width) p.vx *= -0.8;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -0.8;
                
                if (p.life <= 0) {
                    this.particles.splice(i, 1);
                }
            });
            
            while (this.particles.length < maxParticles) {
                this.particles.push(this.createParticle());
            }
        },
        
        render() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            this.particles.forEach(p => {
                const alpha = p.life * 0.8;
                
                // رسم مبسط للأداء
                ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${alpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });
        }
    };
    
    // إضافة جسيمات أولية محسنة
    for (let i = 0; i < Math.min(30, maxParticles); i++) {
        quantumSystem.particles.push(quantumSystem.createParticle());
    }
    
    // تفعيل الماوس مع تحسين
    canvas.addEventListener('mousemove', (e) => {
        quantumSystem.mouseX = e.clientX;
        quantumSystem.mouseY = e.clientY;
        
        if (Math.random() < 0.2) {
            quantumSystem.particles.push(quantumSystem.createParticle(e.clientX, e.clientY));
        }
    });
    
    // حلقة رسم محسنة
    function fastLoop() {
        quantumSystem.update();
        quantumSystem.render();
        requestAnimationFrame(fastLoop);
    }
    fastLoop();
};

// تحسين النجوم
const originalCreateStarLayers = createStarLayers;
createStarLayers = function() {
    const layers = document.querySelectorAll('.star-layer');
    const maxStars = window.FAST_MODE?.stars || 20;
    
    layers.forEach(layer => {
        for (let i = 0; i < maxStars; i++) {
            const star = document.createElement('div');
            star.style.cssText = `
                position: absolute; width: 2px; height: 2px;
                left: ${Math.random() * 100}%; top: ${Math.random() * 100}%;
                background: #fff; border-radius: 50%;
                animation: twinkle ${Math.random() * 3 + 2}s infinite alternate;
            `;
            layer.appendChild(star);
        }
    });
};

console.log('🎬 نظام العرض السينمائي المحسن جاهز! ⚡');
console.log(`📊 الأداء: ${window.FAST_MODE?.quality || 'متوازن'}`);

// === جميع دوال التحكم في الصوت تم نقلها إلى ملف audio-controls.js ===

console.log('🎵 تم تحميل script.js بنجاح!');
 
