// 🎬 العرض السينمائي المذهل - أقوى من PowerPoint! 
// ==========================================

// متغيرات العرض السينمائي
let cinemaInterval;
let quantumParticles = [];
let cinematicAudio;
let isQuantumMode = false;

// بدء العرض السينمائي الهوليوودي 🎭
function startHollywoodSlideshow() {
    if (cinemaInterval) {
        stopCinematicExperience();
        return;
    }
    
    // إطلاق تجربة سينمائية لا تُنسى
    launchCinematicExperience();
}

// إطلاق التجربة السينمائية المذهلة
function launchCinematicExperience() {
    playQuantumSound();
    
    // إنشاء بيئة فضائية ثلاثية الأبعاد
    createQuantumCinemaEnvironment();
    
    // بدء التأثيرات البصرية المتقدمة
    initializeHologramSystem();
    
    // تشغيل النظام الصوتي المتقدم
    activateQuantumAudio();
    
    // عرض مقدمة سينمائية ملحمية
    showEpicIntro().then(() => {
        startImageHologramShow();
    });
}

// إنشاء البيئة الفضائية المتقدمة
function createQuantumCinemaEnvironment() {
    // إخفاء كل المحتوى العادي
    document.body.style.overflow = 'hidden';
    document.body.style.userSelect = 'none';
    
    // إنشاء محرك الواقع الافتراضي
    const quantumScreen = document.createElement('div');
    quantumScreen.id = 'quantum-cinema-screen';
    quantumScreen.innerHTML = `
        <!-- محرك الفضاء الخارجي -->
        <div class="quantum-space">
            <!-- طبقة النجوم والمجرات -->
            <div class="cosmic-layer cosmic-layer-1">
                <div class="galaxy galaxy-1"></div>
                <div class="galaxy galaxy-2"></div>
                <div class="galaxy galaxy-3"></div>
            </div>
            <div class="cosmic-layer cosmic-layer-2">
                <div class="nebula nebula-1"></div>
                <div class="nebula nebula-2"></div>
            </div>
            <div class="cosmic-layer cosmic-layer-3">
                <div class="star-field" id="star-field"></div>
            </div>
            
            <!-- محرك الجسيمات الكمية -->
            <canvas id="quantum-particles" class="quantum-canvas"></canvas>
            
            <!-- منصة العرض الهولوجرامي -->
            <div class="holographic-stage-3d">
                <!-- القاعدة المضيئة -->
                <div class="quantum-platform">
                    <div class="platform-rings">
                        <div class="ring ring-1"></div>
                        <div class="ring ring-2"></div>
                        <div class="ring ring-3"></div>
                        <div class="ring ring-4"></div>
                    </div>
                    <div class="energy-core"></div>
                </div>
                
                <!-- إطار العرض المستقبلي -->
                <div class="hologram-frame">
                    <div class="frame-edges">
                        <div class="edge edge-tl"></div>
                        <div class="edge edge-tr"></div>
                        <div class="edge edge-bl"></div>
                        <div class="edge edge-br"></div>
                    </div>
                    
                    <!-- منطقة الصورة مع تأثيرات الواقع المختلط -->
                    <div class="quantum-image-container">
                        <div class="hologram-projector-beams">
                            <div class="beam beam-1"></div>
                            <div class="beam beam-2"></div>
                            <div class="beam beam-3"></div>
                            <div class="beam beam-4"></div>
                        </div>
                        
                        <div class="image-hologram">
                            <img id="quantum-image" src="" alt="" />
                            <div class="hologram-scan-lines"></div>
                            <div class="quantum-glow"></div>
                            <div class="data-matrix"></div>
                        </div>
                        
                        <!-- تأثيرات الطاقة المحيطة -->
                        <div class="energy-field-container">
                            <div class="energy-wave energy-wave-1"></div>
                            <div class="energy-wave energy-wave-2"></div>
                            <div class="energy-wave energy-wave-3"></div>
                        </div>
                    </div>
                </div>
                
                <!-- لوحة المعلومات المستقبلية -->
                <div class="quantum-info-panel">
                    <div class="panel-background">
                        <div class="circuit-pattern"></div>
                        <div class="data-flow"></div>
                    </div>
                    
                    <div class="info-content">
                        <div class="title-container">
                            <div class="title-glow"></div>
                            <h1 id="quantum-title"></h1>
                            <div class="title-underline"></div>
                        </div>
                        
                        <div class="description-container">
                            <div class="typing-effect">
                                <p id="quantum-description"></p>
                                <span class="cursor">|</span>
                            </div>
                        </div>
                        
                        <div class="quantum-stats">
                            <div class="stat-item">
                                <span class="stat-label">SEQUENCE</span>
                                <span class="stat-value" id="quantum-counter">001</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">TOTAL</span>
                                <span class="stat-value">${String(imagesData.length).padStart(3, '0')}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">STATUS</span>
                                <span class="stat-value status-active">ACTIVE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- شريط التقدم الكمي -->
            <div class="quantum-progress-system">
                <div class="progress-background">
                    <div class="progress-grid"></div>
                </div>
                <div class="progress-bar-quantum" id="quantum-progress">
                    <div class="progress-energy-flow"></div>
                    <div class="progress-particles-trail"></div>
                </div>
                <div class="progress-markers">
                    ${Array.from({length: imagesData.length}, (_, i) => 
                        `<div class="marker marker-${i + 1}" data-index="${i}"></div>`
                    ).join('')}
                </div>
            </div>
            
            <!-- نظام التحكم المتقدم -->
            <div class="quantum-control-panel">
                <div class="control-background">
                    <div class="control-circuits"></div>
                </div>
                
                <div class="control-buttons">
                    <button class="quantum-btn quantum-pause" id="quantum-pause-btn">
                        <div class="btn-background"></div>
                        <div class="btn-icon">⏸</div>
                        <div class="btn-text">PAUSE</div>
                        <div class="btn-energy"></div>
                    </button>
                    
                    <button class="quantum-btn quantum-fullscreen" id="quantum-fullscreen-btn">
                        <div class="btn-background"></div>
                        <div class="btn-icon">⛶</div>
                        <div class="btn-text">IMMERSE</div>
                        <div class="btn-energy"></div>
                    </button>
                    
                    <button class="quantum-btn quantum-next" id="quantum-next-btn">
                        <div class="btn-background"></div>
                        <div class="btn-icon">▶</div>
                        <div class="btn-text">NEXT</div>
                        <div class="btn-energy"></div>
                    </button>
                    
                    <button class="quantum-btn quantum-exit" id="quantum-exit-btn">
                        <div class="btn-background"></div>
                        <div class="btn-icon">✕</div>
                        <div class="btn-text">EXIT</div>
                        <div class="btn-energy"></div>
                    </button>
                </div>
                
                <!-- مؤشرات النظام -->
                <div class="system-indicators">
                    <div class="indicator quantum-active">
                        <div class="indicator-light"></div>
                        <span>QUANTUM ENGINE</span>
                    </div>
                    <div class="indicator hologram-active">
                        <div class="indicator-light"></div>
                        <span>HOLOGRAM SYSTEM</span>
                    </div>
                    <div class="indicator audio-active">
                        <div class="indicator-light"></div>
                        <span>SPATIAL AUDIO</span>
                    </div>
                </div>
            </div>
            
            <!-- تأثيرات البيئة المتقدمة -->
            <div class="environmental-effects">
                <!-- أمطار الضوء -->
                <div class="light-rain" id="light-rain"></div>
                
                <!-- الشفق القطبي -->
                <div class="quantum-aurora">
                    <div class="aurora-band aurora-band-1"></div>
                    <div class="aurora-band aurora-band-2"></div>
                    <div class="aurora-band aurora-band-3"></div>
                </div>
                
                <!-- غبار فضائي -->
                <div class="cosmic-dust" id="cosmic-dust"></div>
                
                <!-- وميض الطاقة -->
                <div class="energy-flashes" id="energy-flashes"></div>
            </div>
            
            <!-- رسائل ديناميكية مع ذكاء اصطناعي -->
            <div class="quantum-messages" id="quantum-messages"></div>
            
            <!-- تأثير الزمكان -->
            <div class="spacetime-distortion">
                <div class="warp-field"></div>
                <div class="time-dilation"></div>
            </div>
        </div>
    `;
    
    // تطبيق الأنماط الفضائية المتقدمة
    quantumScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: 
            radial-gradient(ellipse at 25% 25%, rgba(50, 0, 150, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 75% 75%, rgba(150, 0, 50, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(0, 50, 150, 0.2) 0%, transparent 70%),
            linear-gradient(45deg, #000000 0%, #0a0a0a 50%, #000000 100%);
        z-index: 999999;
        overflow: hidden;
        perspective: 3000px;
        transform-style: preserve-3d;
        cursor: none;
        font-family: 'Orbitron', 'Cairo', sans-serif;
    `;
    
    document.body.appendChild(quantumScreen);
    
    // تفعيل النظم المتقدمة
    setTimeout(() => {
        initializeQuantumParticleEngine();
        createStarField();
        setupAdvancedControls();
        startEnvironmentalEffects();
    }, 100);
}

// تفعيل محرك الجسيمات الكمية
function initializeQuantumParticleEngine() {
    const canvas = document.getElementById('quantum-particles');
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    
    // نظام جسيمات متقدم مع ذكاء اصطناعي
    const particleSystem = {
        particles: [],
        mouseX: canvas.width / 2,
        mouseY: canvas.height / 2,
        time: 0,
        
        // إضافة جسيمة كمية جديدة
        addQuantumParticle(x, y) {
            this.particles.push({
                x: x || Math.random() * canvas.width,
                y: y || Math.random() * canvas.height,
                z: Math.random() * 2000 - 1000,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                vz: (Math.random() - 0.5) * 8,
                size: Math.random() * 4 + 1,
                life: 1.0,
                decay: Math.random() * 0.005 + 0.002,
                color: {
                    h: Math.random() * 360,
                    s: 80 + Math.random() * 20,
                    l: 60 + Math.random() * 30
                },
                type: Math.random() < 0.3 ? 'energy' : 'matter',
                spin: Math.random() * 0.2 - 0.1,
                phase: Math.random() * Math.PI * 2,
                energy: Math.random() * 100 + 50
            });
        },
        
        // تحديث النظام
        update() {
            this.time += 0.016;
            
            // تحديث كل جسيمة
            this.particles.forEach((particle, index) => {
                // حساب التأثيرات الفيزيائية
                const centerX = canvas.width / 2;
                const centerY = canvas.height / 2;
                const distanceToCenter = Math.sqrt(
                    (particle.x - centerX) ** 2 + (particle.y - centerY) ** 2
                );
                
                // جاذبية نحو المركز
                const gravityForce = 100 / (distanceToCenter + 100);
                const angle = Math.atan2(centerY - particle.y, centerX - particle.x);
                particle.vx += Math.cos(angle) * gravityForce * 0.001;
                particle.vy += Math.sin(angle) * gravityForce * 0.001;
                
                // تأثير الماوس
                const mouseDistance = Math.sqrt(
                    (particle.x - this.mouseX) ** 2 + (particle.y - this.mouseY) ** 2
                );
                
                if (mouseDistance < 150) {
                    const repelForce = (150 - mouseDistance) / 150;
                    const repelAngle = Math.atan2(particle.y - this.mouseY, particle.x - this.mouseX);
                    particle.vx += Math.cos(repelAngle) * repelForce * 0.5;
                    particle.vy += Math.sin(repelAngle) * repelForce * 0.5;
                    particle.energy += repelForce * 10;
                }
                
                // حركة مدارية
                particle.phase += particle.spin;
                particle.vx += Math.cos(particle.phase) * 0.1;
                particle.vy += Math.sin(particle.phase) * 0.1;
                
                // تحديث الموضع
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.z += particle.vz;
                
                // حدود الشاشة مع تأثير الاختفاء/الظهور
                if (particle.x < -50) particle.x = canvas.width + 50;
                if (particle.x > canvas.width + 50) particle.x = -50;
                if (particle.y < -50) particle.y = canvas.height + 50;
                if (particle.y > canvas.height + 50) particle.y = -50;
                
                // حدود العمق
                if (particle.z < -1000) particle.z = 1000;
                if (particle.z > 1000) particle.z = -1000;
                
                // تقليل الحياة والطاقة
                particle.life -= particle.decay;
                particle.energy *= 0.998;
                
                // إزالة الجسيمات الميتة
                if (particle.life <= 0) {
                    this.particles.splice(index, 1);
                }
            });
            
            // إضافة جسيمات جديدة
            if (this.particles.length < 300 && Math.random() < 0.1) {
                this.addQuantumParticle();
            }
        },
        
        // رسم النظام
        render() {
            // مسح الشاشة مع تأثير الذيل
            ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // رسم الجسيمات مع تأثيرات متقدمة
            this.particles.forEach(particle => {
                // حساب المنظور ثلاثي الأبعاد
                const perspective = 1000;
                const scale = perspective / (perspective + particle.z);
                const x2d = (particle.x - canvas.width / 2) * scale + canvas.width / 2;
                const y2d = (particle.y - canvas.height / 2) * scale + canvas.height / 2;
                
                if (scale <= 0) return;
                
                const size = particle.size * scale;
                const alpha = particle.life * scale;
                const energy = Math.min(particle.energy / 100, 1);
                
                // تحديد اللون بناءً على الطاقة والنوع
                const hue = particle.color.h + (energy * 60);
                const saturation = particle.color.s + (energy * 20);
                const lightness = particle.color.l + (energy * 20);
                
                if (particle.type === 'energy') {
                    // جسيمات الطاقة مع تأثيرات نجمية
                    const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size * 4);
                    gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`);
                    gradient.addColorStop(0.3, `hsla(${hue}, ${saturation}%, ${lightness * 0.8}%, ${alpha * 0.8})`);
                    gradient.addColorStop(0.7, `hsla(${hue}, ${saturation}%, ${lightness * 0.5}%, ${alpha * 0.4})`);
                    gradient.addColorStop(1, 'transparent');
                    
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(x2d, y2d, size * 4, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // رسم النواة المضيئة
                    ctx.fillStyle = `hsla(${hue}, 100%, 90%, ${alpha})`;
                    ctx.beginPath();
                    ctx.arc(x2d, y2d, size * 0.5, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // خطوط الطاقة المشعة
                    for (let i = 0; i < 4; i++) {
                        const angle = (particle.phase + i * Math.PI / 2);
                        const lineLength = size * 6 * energy;
                        const endX = x2d + Math.cos(angle) * lineLength;
                        const endY = y2d + Math.sin(angle) * lineLength;
                        
                        ctx.strokeStyle = `hsla(${hue}, 80%, 80%, ${alpha * 0.3})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(x2d, y2d);
                        ctx.lineTo(endX, endY);
                        ctx.stroke();
                    }
                } else {
                    // جسيمات المادة مع تأثيرات كمية
                    const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size * 2);
                    gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`);
                    gradient.addColorStop(0.5, `hsla(${hue}, ${saturation}%, ${lightness * 0.7}%, ${alpha * 0.6})`);
                    gradient.addColorStop(1, 'transparent');
                    
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(x2d, y2d, size * 2, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // رسم الحلقة الكمية
                    ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${alpha * 0.8})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.arc(x2d, y2d, size * 3, 0, Math.PI * 2);
                    ctx.stroke();
                }
            });
            
            // رسم خطوط الاتصال بين الجسيمات
            this.particles.forEach((particle1, i) => {
                this.particles.slice(i + 1).forEach(particle2 => {
                    const distance = Math.sqrt(
                        (particle1.x - particle2.x) ** 2 + 
                        (particle1.y - particle2.y) ** 2
                    );
                    
                    if (distance < 100) {
                        const scale1 = 1000 / (1000 + particle1.z);
                        const scale2 = 1000 / (1000 + particle2.z);
                        
                        const x1 = (particle1.x - canvas.width / 2) * scale1 + canvas.width / 2;
                        const y1 = (particle1.y - canvas.height / 2) * scale1 + canvas.height / 2;
                        const x2 = (particle2.x - canvas.width / 2) * scale2 + canvas.width / 2;
                        const y2 = (particle2.y - canvas.height / 2) * scale2 + canvas.height / 2;
                        
                        const opacity = (100 - distance) / 100 * particle1.life * particle2.life * 0.2;
                        
                        ctx.strokeStyle = `rgba(100, 200, 255, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.stroke();
                    }
                });
            });
        }
    };
    
    // تفعيل تتبع الماوس مع تأثيرات متقدمة
    canvas.addEventListener('mousemove', (e) => {
        particleSystem.mouseX = e.clientX;
        particleSystem.mouseY = e.clientY;
        
        // إضافة انفجار طاقة عند حركة الماوس
        if (Math.random() < 0.3) {
            for (let i = 0; i < 5; i++) {
                particleSystem.addQuantumParticle(
                    e.clientX + (Math.random() - 0.5) * 100,
                    e.clientY + (Math.random() - 0.5) * 100
                );
            }
        }
    });
    
    // إضافة جسيمات أولية
    for (let i = 0; i < 150; i++) {
        particleSystem.addQuantumParticle();
    }
    
    // حلقة الرسم الرئيسية
    function quantumLoop() {
        particleSystem.update();
        particleSystem.render();
        requestAnimationFrame(quantumLoop);
    }
    
    quantumLoop();
}

// إنشاء حقل النجوم التفاعلي
function createStarField() {
    const starField = document.getElementById('star-field');
    if (!starField) return;
    
    // إنشاء نجوم ثلاثية الأبعاد
    for (let i = 0; i < 500; i++) {
        const star = document.createElement('div');
        star.className = 'quantum-star';
        
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const z = Math.random() * 1000;
        const twinkleSpeed = Math.random() * 3 + 1;
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: radial-gradient(circle, #ffffff, transparent);
            border-radius: 50%;
            animation: twinkle ${twinkleSpeed}s infinite alternate;
            transform: translateZ(${z}px);
            box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.8);
        `;
        
        starField.appendChild(star);
    }
}

// إعداد التحكم المتقدم
function setupAdvancedControls() {
    const pauseBtn = document.getElementById('quantum-pause-btn');
    const fullscreenBtn = document.getElementById('quantum-fullscreen-btn');
    const nextBtn = document.getElementById('quantum-next-btn');
    const exitBtn = document.getElementById('quantum-exit-btn');
    
    // أصوات كمية للأزرار
    const quantumBeep = () => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    };
    
    pauseBtn?.addEventListener('click', () => {
        quantumBeep();
        // منطق الإيقاف/التشغيل
    });
    
    fullscreenBtn?.addEventListener('click', () => {
        quantumBeep();
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });
    
    nextBtn?.addEventListener('click', () => {
        quantumBeep();
        // الانتقال للصورة التالية فوراً
    });
    
    exitBtn?.addEventListener('click', () => {
        quantumBeep();
        stopCinematicExperience();
    });
}

// بدء التأثيرات البيئية
function startEnvironmentalEffects() {
    // مطر الضوء
    createLightRain();
    
    // الشفق القطبي الكمي
    createQuantumAurora();
    
    // غبار فضائي
    createCosmicDust();
    
    // وميض الطاقة
    createEnergyFlashes();
}

// تشغيل النظام الصوتي المتقدم
function activateQuantumAudio() {
    // إنشاء موسيقى فضائية ديناميكية
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // مولد نغمات فضائية
        const createSpaceAmbience = () => {
            const oscillator1 = audioContext.createOscillator();
            const oscillator2 = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            const filter = audioContext.createBiquadFilter();
            
            oscillator1.type = 'sine';
            oscillator2.type = 'triangle';
            filter.type = 'lowpass';
            filter.frequency.value = 200;
            
            oscillator1.connect(filter);
            oscillator2.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator1.frequency.setValueAtTime(80, audioContext.currentTime);
            oscillator2.frequency.setValueAtTime(120, audioContext.currentTime);
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 2);
            
            oscillator1.start(audioContext.currentTime);
            oscillator2.start(audioContext.currentTime);
            
            // تحديث ديناميكي للترددات
            setInterval(() => {
                const time = audioContext.currentTime;
                oscillator1.frequency.setValueAtTime(
                    80 + Math.sin(time * 0.1) * 20, time
                );
                oscillator2.frequency.setValueAtTime(
                    120 + Math.cos(time * 0.15) * 30, time
                );
            }, 100);
        };
        
        createSpaceAmbience();
    } catch (e) {
        console.log('Audio context not available');
    }
}

// إيقاف التجربة السينمائية
function stopCinematicExperience() {
    const quantumScreen = document.getElementById('quantum-cinema-screen');
    if (quantumScreen) {
        // تأثير إغلاق مذهل
        quantumScreen.style.animation = 'quantumCollapse 1s ease-in forwards';
        
        setTimeout(() => {
            quantumScreen.remove();
            document.body.style.overflow = '';
            document.body.style.userSelect = '';
            
            // إظهار المحتوى العادي مع تأثير رائع
            showMainContent();
        }, 1000);
    }
    
    if (cinemaInterval) {
        clearInterval(cinemaInterval);
        cinemaInterval = null;
    }
}

// استبدال دالة startSlideshow الأصلية
if (typeof startSlideshow === 'function') {
    window.originalStartSlideshow = startSlideshow;
    window.startSlideshow = startHollywoodSlideshow;
}

console.log('🎬 نظام العرض السينمائي المذهل جاهز! 🚀'); 