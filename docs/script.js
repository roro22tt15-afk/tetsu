// 1. منع النقر بزر الماوس الأيمن (Right Click) في كامل الموقع
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 2. منع اختصارات لوحة المفاتيح الخاصة بالمطورين (DevTools) ونسخ الكود
document.onkeydown = function(e) {
    // منع F12
    if (e.keyCode === 123) {
        return false;
    }
    
    // منع Ctrl+Shift+I و Ctrl+Shift+J (فحص العناصر)
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 'I'.charCodeAt(0) || e.keyCode === 'J'.charCodeAt(0))) {
        return false;
    }
    
    // منع Ctrl+U (عرض مصدر الصفحة)
    if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
        return false;
    }

    // منع Ctrl+S (حفظ الصفحة)
    if (e.ctrlKey && e.keyCode === 'S'.charCodeAt(0)) {
        return false;
    }
};

// 3. منع سحب وإفلات العناصر (Drag and Drop) للصور والفيديوهات
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});

// 4. منع تحديد النصوص (إجراء إضافي للحماية)
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// ========================================================
// 5. تفعيل الصوت وكتمه عند النقر على الفيديوهات
// ========================================================

// جلب جميع عناصر الأعمال
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    const video = item.querySelector('.ugc-video');
    const protectionLayer = item.querySelector('.protection-layer');

    if(video && protectionLayer) {
        // تغيير شكل مؤشر الماوس ليظهر كإصبع النقر
        protectionLayer.style.cursor = 'pointer';

        // عند النقر على طبقة الحماية
        protectionLayer.addEventListener('click', () => {
            // عكس حالة كتم الصوت (إذا كان مكتوماً يشتغل، وإذا كان يعمل يُكتم)
            if(video.muted) {
                video.muted = false;
            } else {
                video.muted = true;
            }
        });
    }
});