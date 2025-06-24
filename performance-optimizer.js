// 🚀 محسن الأداء للعرض السينمائي 
// ===================================

// إعدادات الأداء
const PerformanceSettings = {
    // كشف نوع الجهاز
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    
    // إعدادات مختلفة حسب الجهاز
    getOptimalSettings() {
        if (this.isMobile) {
            return {
                particleCount: 20,
                initialParticles: 15,
                starsPerLayer: 8,
                mouseParticles: 1,
                envEffectInterval: 8000,
                randomParticles: 1,
                auroraUpdateInterval: 10000,
                qualityLevel: 'low'
            };
        } else {
            // فحص أداء المعالج
            const performance = this.detectPerformance();
            if (performance === 'high') {
                return {
                    particleCount: 80,
                    initialParticles: 60,
                    starsPerLayer: 25,
                    mouseParticles: 5,
                    envEffectInterval: 3000,
                    randomParticles: 3,
                    auroraUpdateInterval: 4000,
                    qualityLevel: 'high'
                };
            } else {
                return {
                    particleCount: 40,
                    initialParticles: 30,
                    starsPerLayer: 15,
                    mouseParticles: 2,
                    envEffectInterval: 5000,
                    randomParticles: 2,
                    auroraUpdateInterval: 7000,
                    qualityLevel: 'medium'
                };
            }
        }
    },
    
    // كشف أداء الجهاز
    detectPerformance() {
        // فحص ذاكرة المعالج الرسومي
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (!gl) return 'low';
        
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            // فحص أداء كروت الرسوم المختلفة
            if (renderer.includes('NVIDIA') || renderer.includes('AMD') || renderer.includes('Intel Iris')) {
                return 'high';
            }
        }
        
        // فحص عدد النوى
        const cores = navigator.hardwareConcurrency || 2;
        return cores >= 4 ? 'medium' : 'low';
    }
};

// تطبيق التحسينات على العرض السينمائي
function optimizeHollywoodExperience() {
    const settings = PerformanceSettings.getOptimalSettings();
    
    // إنشاء زر التحكم في الجودة
    addQualityControl(settings);
    
    // تحسين إعدادات الجسيمات
    window.OPTIMAL_SETTINGS = settings;
    
    console.log(`🎮 تم تحسين الأداء للجهاز: ${settings.qualityLevel} quality`);
    console.log('⚙️ الإعدادات:', settings);
}

// إضافة زر التحكم في الجودة
function addQualityControl(currentSettings) {
    const controlPanel = document.querySelector('.control-panel');
    if (!controlPanel) return;
    
    const qualityBtn = document.createElement('button');
    qualityBtn.className = 'cosmic-btn quality-control';
    qualityBtn.innerHTML = `
        <div class="btn-core"></div>
        <div class="btn-icon">⚙️</div>
        <div class="btn-label">QUALITY</div>
    `;
    
    let currentQuality = currentSettings.qualityLevel;
    
    qualityBtn.addEventListener('click', () => {
        // تبديل بين مستويات الجودة
        const qualities = ['low', 'medium', 'high'];
        const currentIndex = qualities.indexOf(currentQuality);
        currentQuality = qualities[(currentIndex + 1) % qualities.length];
        
        // تحديث الإعدادات
        updateQualitySettings(currentQuality);
        
        // تحديث النص
        const icon = qualityBtn.querySelector('.btn-icon');
        const label = qualityBtn.querySelector('.btn-label');
        
        switch(currentQuality) {
            case 'low':
                icon.textContent = '🔋';
                label.textContent = 'ECO';
                break;
            case 'medium':
                icon.textContent = '⚙️';
                label.textContent = 'BALANCED';
                break;
            case 'high':
                icon.textContent = '🚀';
                label.textContent = 'ULTRA';
                break;
        }
        
        // صوت تأكيد
        playQualityChangeSound();
        
        // رسالة تأكيد
        showQualityMessage(currentQuality);
    });
    
    controlPanel.appendChild(qualityBtn);
}

// تحديث إعدادات الجودة
function updateQualitySettings(quality) {
    const settings = {
        low: {
            particleCount: 15,
            initialParticles: 10,
            starsPerLayer: 5,
            mouseParticles: 1,
            envEffectInterval: 10000,
            randomParticles: 1,
            auroraUpdateInterval: 15000
        },
        medium: {
            particleCount: 40,
            initialParticles: 30,
            starsPerLayer: 15,
            mouseParticles: 2,
            envEffectInterval: 5000,
            randomParticles: 2,
            auroraUpdateInterval: 7000
        },
        high: {
            particleCount: 100,
            initialParticles: 80,
            starsPerLayer: 35,
            mouseParticles: 6,
            envEffectInterval: 2000,
            randomParticles: 4,
            auroraUpdateInterval: 3000
        }
    };
    
    window.OPTIMAL_SETTINGS = settings[quality];
    console.log(`🎮 تم تغيير الجودة إلى: ${quality}`);
}

// صوت تغيير الجودة
function playQualityChangeSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
        oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    } catch (e) {
        console.log('Quality sound not available');
    }
}

// رسالة تأكيد تغيير الجودة
function showQualityMessage(quality) {
    const messages = {
        low: { text: '🔋 وضع توفير الطاقة', desc: 'أداء محسن للأجهزة الضعيفة' },
        medium: { text: '⚙️ وضع متوازن', desc: 'أداء وجودة متوازنان' },
        high: { text: '🚀 وضع فائق الجودة', desc: 'أقصى جودة بصرية ممكنة' }
    };
    
    const msg = messages[quality];
    const messageEl = document.createElement('div');
    
    messageEl.style.cssText = `
        position: fixed;
        top: 20%;
        right: 20px;
        background: linear-gradient(45deg, 
            rgba(0, 100, 255, 0.9), 
            rgba(100, 0, 255, 0.9)
        );
        color: #fff;
        padding: 20px 25px;
        border-radius: 15px;
        font-family: 'Orbitron', monospace;
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
        z-index: 1000001;
        box-shadow: 
            0 0 30px rgba(255, 255, 255, 0.6),
            inset 0 0 30px rgba(255, 255, 255, 0.2);
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
        transform: translateX(100%);
        transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    `;
    
    messageEl.innerHTML = `
        <div style="margin-bottom: 8px;">${msg.text}</div>
        <div style="font-size: 0.8rem; opacity: 0.9;">${msg.desc}</div>
    `;
    
    document.body.appendChild(messageEl);
    
    // أنيميشن الدخول
    setTimeout(() => {
        messageEl.style.transform = 'translateX(0)';
    }, 100);
    
    // أنيميشن الخروج
    setTimeout(() => {
        messageEl.style.transform = 'translateX(100%)';
        setTimeout(() => {
            messageEl.remove();
        }, 500);
    }, 3000);
}

// تحسين أداء Canvas
function optimizeCanvasPerformance() {
    const canvas = document.getElementById('quantum-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // تحسين إعدادات Canvas للأداء
    ctx.imageSmoothingEnabled = false;
    
    // استخدام OffscreenCanvas إذا كان متاحاً
    if (typeof OffscreenCanvas !== 'undefined') {
        const offscreen = new OffscreenCanvas(canvas.width, canvas.height);
        const offCtx = offscreen.getContext('2d');
        
        // استخدام الـ offscreen context للرسم المعقد
        window.offscreenCtx = offCtx;
    }
}

// فحص FPS وتحسين تلقائي
function startPerformanceMonitoring() {
    let lastTime = performance.now();
    let frameCount = 0;
    let fps = 60;
    
    function measureFPS() {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;
            
            // تحسين تلقائي بناءً على FPS
            if (fps < 30 && window.OPTIMAL_SETTINGS) {
                autoOptimizeForLowFPS();
            }
        }
        
        requestAnimationFrame(measureFPS);
    }
    
    measureFPS();
}

// تحسين تلقائي عند انخفاض FPS
function autoOptimizeForLowFPS() {
    if (!window.hasAutoOptimized) {
        console.log('🔧 تحسين تلقائي: تم اكتشاف أداء منخفض');
        
        // تقليل عدد الجسيمات تلقائياً
        if (window.OPTIMAL_SETTINGS) {
            window.OPTIMAL_SETTINGS.particleCount = Math.max(10, window.OPTIMAL_SETTINGS.particleCount * 0.5);
            window.OPTIMAL_SETTINGS.mouseParticles = Math.max(1, Math.floor(window.OPTIMAL_SETTINGS.mouseParticles * 0.5));
        }
        
        // إخفاء بعض التأثيرات الثقيلة
        const heavyEffects = document.querySelectorAll('.scan-lines, .data-grid');
        heavyEffects.forEach(effect => {
            effect.style.opacity = '0.3';
        });
        
        window.hasAutoOptimized = true;
        
        // رسالة إعلام
        showOptimizationMessage();
    }
}

// رسالة التحسين التلقائي
function showOptimizationMessage() {
    const messageEl = document.createElement('div');
    
    messageEl.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(45deg, 
            rgba(255, 150, 0, 0.9), 
            rgba(255, 100, 0, 0.9)
        );
        color: #fff;
        padding: 15px 25px;
        border-radius: 10px;
        font-family: 'Orbitron', monospace;
        font-size: 0.9rem;
        font-weight: 600;
        text-align: center;
        z-index: 1000001;
        box-shadow: 0 0 20px rgba(255, 150, 0, 0.6);
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
    `;
    
    messageEl.innerHTML = `
        ⚡ تم تحسين الأداء تلقائياً للحصول على تجربة أفضل
    `;
    
    document.body.appendChild(messageEl);
    
    setTimeout(() => {
        messageEl.style.opacity = '0';
        messageEl.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => {
            messageEl.remove();
        }, 500);
    }, 4000);
}

// تصدير التحسينات
window.PerformanceOptimizer = {
    optimize: optimizeHollywoodExperience,
    monitor: startPerformanceMonitoring,
    canvas: optimizeCanvasPerformance
};

console.log('🚀 محسن الأداء جاهز!'); 