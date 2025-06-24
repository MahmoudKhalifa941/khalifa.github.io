// === وظائف لوحة التحكم في الصوت ===

// إظهار/إخفاء لوحة التحكم في الصوت (تم نقلها من script.js)
function toggleAudioPanel() {
    const audioPanel = document.getElementById('audio-control-panel');
    if (audioPanel) {
        audioPanel.classList.toggle('hidden');
    }
}

// إعداد أحداث لوحة التحكم في الصوت
document.addEventListener('DOMContentLoaded', function() {
    // تأكد من أن العناصر موجودة قبل إضافة المستمعين
    const audioPanel = document.getElementById('audio-control-panel');
    if (!audioPanel) return;

    // زر إغلاق لوحة التحكم
    const closeBtn = document.getElementById('close-audio-panel');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            // playClickSound(); // معطل
            document.getElementById('audio-control-panel').classList.add('hidden');
        });
    }

    // زر كتم الصوت
    const muteBtn = document.getElementById('mute-all-btn');
    if (muteBtn) {
        muteBtn.addEventListener('click', () => {
            // playClickSound(); // معطل
            toggleMute();
            updateMuteButtonText();
        });
    }

    // زر إعادة التعيين
    const resetBtn = document.getElementById('reset-audio-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            // playClickSound(); // معطل
            resetAudioSettings();
        });
    }

    // منزلق الصوت العام
    const masterVolumeSlider = document.getElementById('master-volume');
    if (masterVolumeSlider) {
        masterVolumeSlider.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            setMasterVolume(value / 100);
            updateVolumeDisplay('master-volume-value', value);
        });
    }

    // منزلق الموسيقى الخلفية
    const backgroundVolumeSlider = document.getElementById('background-volume');
    if (backgroundVolumeSlider) {
        backgroundVolumeSlider.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            if (typeof audioSettings !== 'undefined') {
                audioSettings.backgroundMusicVolume = value / 100;
                updateAudioVolumes();
                updateVolumeDisplay('background-volume-value', value);
                saveAudioSettings();
            }
        });
    }

    // منزلق صوت الترحيب
    const welcomeVolumeSlider = document.getElementById('welcome-volume');
    if (welcomeVolumeSlider) {
        welcomeVolumeSlider.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            if (typeof audioSettings !== 'undefined') {
                audioSettings.welcomeSoundVolume = value / 100;
                updateAudioVolumes();
                updateVolumeDisplay('welcome-volume-value', value);
                saveAudioSettings();
            }
        });
    }

    // تحديث القيم الأولية
    updateAllVolumeDisplays();

    // تحديث الواجهة عند التحميل
    setTimeout(() => {
        if (typeof updateAllVolumeDisplays === 'function') {
            updateAllVolumeDisplays();
        }
        if (typeof updateMuteButtonText === 'function') {
            updateMuteButtonText();
        }
    }, 500);
    
    console.log('✅ نظام التحكم في الصوت جاهز للعمل!');
});

// تحديث عرض قيمة الصوت
function updateVolumeDisplay(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = value + '%';
    }
}

// تحديث جميع عروض الصوت
function updateAllVolumeDisplays() {
    if (typeof audioSettings !== 'undefined') {
        updateVolumeDisplay('master-volume-value', Math.round(audioSettings.masterVolume * 100));
        updateVolumeDisplay('background-volume-value', Math.round(audioSettings.backgroundMusicVolume * 100));
        updateVolumeDisplay('welcome-volume-value', Math.round(audioSettings.welcomeSoundVolume * 100));
        
        // تحديث قيم المنزلقات
        const masterSlider = document.getElementById('master-volume');
        if (masterSlider) masterSlider.value = Math.round(audioSettings.masterVolume * 100);
        
        const backgroundSlider = document.getElementById('background-volume');
        if (backgroundSlider) backgroundSlider.value = Math.round(audioSettings.backgroundMusicVolume * 100);
        
        const welcomeSlider = document.getElementById('welcome-volume');
        if (welcomeSlider) welcomeSlider.value = Math.round(audioSettings.welcomeSoundVolume * 100);
    }
}

// تحديث نص زر الكتم
function updateMuteButtonText() {
    const muteBtn = document.getElementById('mute-all-btn');
    if (muteBtn && typeof audioSettings !== 'undefined') {
        if (audioSettings.isMuted) {
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i> إلغاء الكتم';
        } else {
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i> كتم الصوت';
        }
    }
}

// إعادة تعيين إعدادات الصوت
function resetAudioSettings() {
    if (typeof audioSettings !== 'undefined') {
        audioSettings.masterVolume = 0.7;
        audioSettings.backgroundMusicVolume = 0.5;
        audioSettings.welcomeSoundVolume = 0.8;
        audioSettings.isMuted = false;
        
        updateAudioVolumes();
        updateAllVolumeDisplays();
        updateMuteButtonText();
        saveAudioSettings();
    }
}

console.log('🎵 نظام التحكم في الصوت المحدث جاهز!');

// دالة مساعدة للتحقق من توفر الدوال
function checkAudioFunctions() {
    const requiredFunctions = [
        'setMasterVolume',
        'updateAudioVolumes', 
        'saveAudioSettings',
        'toggleMute'
    ];
    
    const missingFunctions = requiredFunctions.filter(func => typeof window[func] !== 'function');
    
    if (missingFunctions.length > 0) {
        console.warn('⚠️ بعض الدوال الصوتية غير متاحة:', missingFunctions);
        return false;
    }
    
    console.log('✅ جميع الدوال الصوتية متاحة');
    return true;
}

// تشغيل التحقق عند التحميل
setTimeout(checkAudioFunctions, 1000); 