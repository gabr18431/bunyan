// sliders
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 4000, // تحديد فترة التوقف بين كل انتقال (بالميلي ثانية)
    disableOnInteraction: false, // يمنع تعطيل التمرير التلقائي بمجرد تفاعل المستخدم (افتراضيًا true)
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // تفعيل النقر على ال pagination
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

console.log('tessssssss');