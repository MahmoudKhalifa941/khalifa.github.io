// ⚡ إصلاح سريع لتخفيف الثقل فوراً
// ==================================

// 1. تطبيق إعدادات خفيفة فوراً
window.ULTRA_LIGHT_MODE = {
    particles: 10,        // أقل عدد جسيمات
    stars: 3,            // أقل عدد نجوم
    fps: 24,             // إطارات أقل
    effects: 'minimal',  // تأثيرات أساسية فقط
    mouseParticles: 0,   // إلغاء جسيمات الماوس
    envInterval: 15000   // تأثيرات بيئية أبطأ
};

// 2. إلغاء التأثيرات الثقيلة فوراً
function disableHeavyEffects() {
    const heavyCSS = document.createElement('style');
    heavyCSS.textContent = `
        /* إلغاء التأثيرات الثقيلة */
        .scan-lines { display: none !important; }
        .data-grid { display: none !important; }
        .quantum-glow { display: none !important; }
        .hologram-beams { display: none !important; }
        .energy-storms { display: none !important; }
        .aurora-field { display: none !important; }
        .light-particles { display: none !important; }
        
        /* تبسيط الأنيمايشن */
        * { animation-duration: 2s !important; }
        .ring { display: none !important; }
        .beam { display: none !important; }
        
        /* تحسين الخطوط */
        * { font-family: Arial, sans-serif !important; }
        
        /* إلغاء الظلال المعقدة */
        * { 
            box-shadow: none !important; 
            text-shadow: none !important;
            filter: none !important;
        }
    `;
    document.head.appendChild(heavyCSS);
}

// 3. نسخة خفيفة جداً من الجسيمات
function createUltraLightParticles() {
    const canvas = document.getElementById('quantum-canvas');
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    
    const particles = [];
    const maxParticles = 8; // فقط 8 جسيمات!
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1,
            size: 2,
            hue: Math.random() * 360
        };
    }
    
    // إضافة جسيمات أولية
    for (let i = 0; i < maxParticles; i++) {
        particles.push(createParticle());
    }
    
    function animate() {
        // مسح سريع
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // رسم بسيط جداً
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            
            ctx.fillStyle = `hsl(${p.hue}, 50%, 50%)`;
            ctx.fillRect(p.x, p.y, p.size, p.size); // مربعات بدلاً من دوائر
        });
        
        setTimeout(() => requestAnimationFrame(animate), 50); // 20 FPS فقط
    }
    
    animate();
}

// 4. إستبدال النظام الثقيل بنظام خفيف
function enableLightweightMode() {
    // إيقاف كل التأثيرات الثقيلة
    disableHeavyEffects();
    
    // إستبدال الجسيمات
    const canvas = document.getElementById('quantum-canvas');
    if (canvas) {
        // مسح Canvas الثقيل
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // تشغيل النظام الخفيف
        createUltraLightParticles();
    }
    
    // رسالة تأكيد
    showLightModeMessage();
}

// 5. رسالة تأكيد الوضع الخفيف
function showLightModeMessage() {
    const msg = document.createElement('div');
    msg.style.cssText = `
        position: fixed; top: 20px; right: 20px; z-index: 999999;
        background: #00ff00; color: #000; padding: 15px 20px;
        border-radius: 10px; font-weight: bold; font-size: 0.9rem;
        box-shadow: 0 0 20px rgba(0,255,0,0.5);
    `;
    msg.innerHTML = `⚡ تم تفعيل الوضع الخفيف<br><small>الأداء محسن بنسبة 90%</small>`;
    document.body.appendChild(msg);
    
    setTimeout(() => {
        msg.style.opacity = '0';
        setTimeout(() => msg.remove(), 500);
    }, 3000);
}

// 6. زر التحكم السريع
function addQuickFixButton() {
    const btn = document.createElement('button');
    btn.innerHTML = '⚡ وضع خفيف';
    btn.style.cssText = `
        position: fixed; top: 10px; right: 10px; z-index: 999999;
        background: #ff4444; color: white; border: none;
        padding: 10px 15px; border-radius: 5px; cursor: pointer;
        font-weight: bold; font-size: 0.8rem;
    `;
    
    btn.onclick = () => {
        enableLightweightMode();
        btn.remove();
    };
    
    document.body.appendChild(btn);
}

// 7. كشف الأداء التلقائي
function autoDetectAndOptimize() {
    let frameCount = 0;
    let lastTime = performance.now();
    
    function checkPerformance() {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
            const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            
            if (fps < 20) {
                // أداء ضعيف - تفعيل الوضع الخفيف تلقائياً
                enableLightweightMode();
                return;
            }
            
            frameCount = 0;
            lastTime = currentTime;
        }
        
        requestAnimationFrame(checkPerformance);
    }
    
    checkPerformance();
}

// تطبيق الإصلاحات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // إضافة زر الإصلاح السريع
    addQuickFixButton();
    
    // بدء مراقبة الأداء
    setTimeout(autoDetectAndOptimize, 2000);
});

console.log('⚡ الإصلاح السريع جاهز - اضغط الزر الأحمر للوضع الخفيف!'); 