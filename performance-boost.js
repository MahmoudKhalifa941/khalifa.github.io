// ⚡ محسن الأداء السريع للعرض السينمائي
// ============================================

// كشف تلقائي للجهاز والأداء
const PerformanceBooster = {
    // كشف نوع الجهاز
    device: {
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        isTablet: /iPad|Android/i.test(navigator.userAgent) && window.innerWidth > 768,
        isLowEnd: navigator.hardwareConcurrency < 4 || (navigator.deviceMemory && navigator.deviceMemory < 4),
        cores: navigator.hardwareConcurrency || 2,
        memory: navigator.deviceMemory || 2
    },
    
    // الحصول على الإعدادات المثلى
    getOptimalSettings() {
        const device = this.device;
        
        if (device.isMobile && !device.isTablet) {
            return {
                mode: 'خفيف للهواتف',
                icon: '📱',
                particles: 15,
                stars: 5,
                fps: 30,
                effects: 'minimal',
                mouseParticles: 1,
                envInterval: 10000
            };
        } else if (device.isTablet) {
            return {
                mode: 'متوسط للأجهزة اللوحية',
                icon: '📲',
                particles: 30,
                stars: 10,
                fps: 45,
                effects: 'reduced',
                mouseParticles: 2,
                envInterval: 6000
            };
        } else if (device.isLowEnd) {
            return {
                mode: 'محسن للأجهزة الضعيفة',
                icon: '🔋',
                particles: 25,
                stars: 8,
                fps: 30,
                effects: 'basic',
                mouseParticles: 1,
                envInterval: 8000
            };
        } else {
            return {
                mode: 'أداء عالي',
                icon: '🚀',
                particles: 60,
                stars: 20,
                fps: 60,
                effects: 'full',
                mouseParticles: 3,
                envInterval: 3000
            };
        }
    },
    
    // تطبيق التحسينات
    apply() {
        const settings = this.getOptimalSettings();
        window.PERFORMANCE_MODE = settings;
        
        // عرض مؤشر الأداء
        this.showPerformanceIndicator(settings);
        
        // تحسين CSS للأجهزة الضعيفة
        if (settings.effects === 'minimal') {
            this.disableHeavyEffects();
        }
        
        console.log(`⚡ تم تحسين الأداء: ${settings.mode}`);
        console.log('📊 الإعدادات:', settings);
        
        return settings;
    },
    
    // عرض مؤشر الأداء
    showPerformanceIndicator(settings) {
        const indicator = document.createElement('div');
        indicator.id = 'performance-indicator';
        indicator.style.cssText = `
            position: fixed;
            top: 15px;
            left: 15px;
            background: linear-gradient(45deg, rgba(0,255,100,0.9), rgba(0,200,255,0.9));
            color: #000;
            padding: 10px 15px;
            border-radius: 25px;
            font-family: 'Orbitron', monospace;
            font-size: 0.85rem;
            font-weight: 700;
            z-index: 999999;
            box-shadow: 
                0 0 20px rgba(0,255,100,0.6),
                inset 0 0 20px rgba(255,255,255,0.3);
            text-shadow: 0 0 5px rgba(255,255,255,0.8);
            animation: indicatorPulse 2s ease-in-out infinite alternate;
            cursor: pointer;
        `;
        
        indicator.innerHTML = `
            ${settings.icon} ${settings.mode}<br>
            <span style="font-size: 0.7rem; opacity: 0.8;">${settings.particles} جسيمات • ${settings.fps} إطار/ث</span>
        `;
        
        document.body.appendChild(indicator);
        
        // إضافة تفاعل النقر لتغيير الوضع
        indicator.addEventListener('click', () => {
            this.cyclePerformanceMode();
        });
        
        // إخفاء تلقائي بعد 4 ثوان
        setTimeout(() => {
            indicator.style.animation = 'indicatorFadeOut 1s ease-out forwards';
            setTimeout(() => {
                if (indicator.parentNode) {
                    indicator.remove();
                }
            }, 1000);
        }, 4000);
    },
    
    // تدوير أوضاع الأداء
    cyclePerformanceMode() {
        const modes = [
            { mode: 'وضع الطاقة المنخفضة', icon: '🔋', particles: 10, stars: 3, fps: 24 },
            { mode: 'وضع متوازن', icon: '⚖️', particles: 35, stars: 12, fps: 45 },
            { mode: 'وضع الأداء العالي', icon: '🚀', particles: 80, stars: 30, fps: 60 }
        ];
        
        const currentIndex = modes.findIndex(m => m.mode === window.PERFORMANCE_MODE?.mode) || 0;
        const nextMode = modes[(currentIndex + 1) % modes.length];
        
        window.PERFORMANCE_MODE = nextMode;
        
        // تحديث المؤشر
        const indicator = document.getElementById('performance-indicator');
        if (indicator) {
            indicator.innerHTML = `
                ${nextMode.icon} ${nextMode.mode}<br>
                <span style="font-size: 0.7rem; opacity: 0.8;">${nextMode.particles} جسيمات • ${nextMode.fps} إطار/ث</span>
            `;
            
            // تأثير تأكيد
            indicator.style.transform = 'scale(1.1)';
            setTimeout(() => {
                indicator.style.transform = 'scale(1)';
            }, 200);
        }
        
        // صوت تأكيد
        this.playModeChangeSound();
        
        console.log(`🔄 تم تغيير الوضع إلى: ${nextMode.mode}`);
    },
    
    // إلغاء التأثيرات الثقيلة
    disableHeavyEffects() {
        const style = document.createElement('style');
        style.textContent = `
            .scan-lines { display: none !important; }
            .data-grid { opacity: 0.3 !important; }
            .quantum-glow { opacity: 0.5 !important; }
            .hologram-beams { display: none !important; }
            .energy-storms::before { animation-duration: 40s !important; }
            .aurora-field { opacity: 0.4 !important; }
            .light-particles::after { display: none !important; }
        `;
        document.head.appendChild(style);
    },
    
    // صوت تغيير الوضع
    playModeChangeSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.05);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (e) {
            // تجاهل أخطاء الصوت
        }
    }
};

// إنشاء نسخة محسنة من createQuantumField
function createOptimizedQuantumField() {
    const canvas = document.getElementById('quantum-canvas');
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    
    // إعدادات محسنة
    const settings = window.PERFORMANCE_MODE || PerformanceBooster.getOptimalSettings();
    
    const quantumSystem = {
        particles: [],
        mouseX: canvas.width / 2,
        mouseY: canvas.height / 2,
        frameCount: 0,
        
        createParticle(x, y) {
            return {
                x: x || Math.random() * canvas.width,
                y: y || Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 3 + 1,
                life: 1.0,
                decay: Math.random() * 0.01 + 0.005,
                hue: Math.random() * 360,
                alpha: Math.random() * 0.5 + 0.5
            };
        },
        
        update() {
            this.frameCount++;
            
            // تحديث محسن - تخطي إطارات للأجهزة الضعيفة
            const skipFrames = settings.fps < 60 ? 2 : 1;
            if (this.frameCount % skipFrames !== 0) return;
            
            this.particles.forEach((p, i) => {
                // فيزياء مبسطة
                p.x += p.vx;
                p.y += p.vy;
                p.life -= p.decay;
                
                // حدود بسيطة
                if (p.x < 0 || p.x > canvas.width) p.vx *= -0.8;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -0.8;
                
                // إزالة الجسيمات الميتة
                if (p.life <= 0) {
                    this.particles.splice(i, 1);
                }
            });
            
            // إضافة جسيمات جديدة
            while (this.particles.length < settings.particles) {
                this.particles.push(this.createParticle());
            }
        },
        
        render() {
            // مسح محسن
            const clearAlpha = settings.effects === 'minimal' ? 0.2 : 0.1;
            ctx.fillStyle = `rgba(0, 0, 0, ${clearAlpha})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // رسم الجسيمات بطريقة محسنة
            this.particles.forEach(p => {
                const alpha = p.life * p.alpha;
                
                if (settings.effects === 'minimal') {
                    // رسم أساسي
                    ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${alpha})`;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    // رسم مع تأثيرات
                    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
                    gradient.addColorStop(0, `hsla(${p.hue}, 80%, 70%, ${alpha})`);
                    gradient.addColorStop(1, 'transparent');
                    
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
                    ctx.fill();
                }
            });
        }
    };
    
    // إضافة جسيمات أولية
    for (let i = 0; i < Math.min(settings.particles, 30); i++) {
        quantumSystem.particles.push(quantumSystem.createParticle());
    }
    
    // تفاعل الماوس محسن
    canvas.addEventListener('mousemove', (e) => {
        quantumSystem.mouseX = e.clientX;
        quantumSystem.mouseY = e.clientY;
        
        // إضافة جسيمات أقل عند حركة الماوس
        if (Math.random() < 0.3) {
            for (let i = 0; i < settings.mouseParticles; i++) {
                quantumSystem.particles.push(quantumSystem.createParticle(
                    e.clientX + (Math.random() - 0.5) * 100,
                    e.clientY + (Math.random() - 0.5) * 100
                ));
            }
        }
    });
    
    // حلقة الرسم المحسنة
    let lastTime = 0;
    const targetInterval = 1000 / settings.fps;
    
    function optimizedLoop(currentTime) {
        if (currentTime - lastTime >= targetInterval) {
            quantumSystem.update();
            quantumSystem.render();
            lastTime = currentTime;
        }
        requestAnimationFrame(optimizedLoop);
    }
    
    optimizedLoop(0);
}

// استبدال الدالة الأصلية
if (typeof createQuantumField !== 'undefined') {
    window.originalCreateQuantumField = createQuantumField;
    window.createQuantumField = createOptimizedQuantumField;
}

// تحسين إنشاء النجوم
function createOptimizedStarLayers() {
    const layers = document.querySelectorAll('.star-layer');
    const settings = window.PERFORMANCE_MODE || PerformanceBooster.getOptimalSettings();
    
    layers.forEach(layer => {
        for (let i = 0; i < settings.stars; i++) {
            const star = document.createElement('div');
            star.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                background: #fff;
                border-radius: 50%;
                opacity: ${Math.random() * 0.8 + 0.2};
                animation: twinkle ${Math.random() * 4 + 3}s infinite alternate;
            `;
            layer.appendChild(star);
        }
    });
}

// استبدال الدالة الأصلية
if (typeof createStarLayers !== 'undefined') {
    window.originalCreateStarLayers = createStarLayers;
    window.createStarLayers = createOptimizedStarLayers;
}

// إضافة أنماط CSS محسنة
const optimizedCSS = document.createElement('style');
optimizedCSS.textContent = `
    @keyframes indicatorPulse {
        0% { transform: scale(1); box-shadow: 0 0 20px rgba(0,255,100,0.6); }
        100% { transform: scale(1.05); box-shadow: 0 0 30px rgba(0,255,100,0.8); }
    }
    
    @keyframes indicatorFadeOut {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0.8) translateY(-10px); }
    }
    
    #performance-indicator {
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    
    #performance-indicator:hover {
        transform: scale(1.1) !important;
        box-shadow: 0 0 35px rgba(0,255,100,0.9) !important;
    }
`;
document.head.appendChild(optimizedCSS);

// تطبيق التحسينات تلقائياً
document.addEventListener('DOMContentLoaded', () => {
    PerformanceBooster.apply();
});

// تصدير للاستخدام العالمي
window.PerformanceBooster = PerformanceBooster;

console.log('⚡ محسن الأداء جاهز للتشغيل!'); 