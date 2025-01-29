const menuBtn = document.querySelector("#menu-btn"); // اختيار زر القائمة باستخدام الـ id
const menuList = document.querySelector("#menu"); // اختيار القائمة باستخدام الـ id
const menuIcon = document.querySelector(".icon"); // اختيار القائمة باستخدام الـ id

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("hidden"); // تبديل الكلاس hidden على القائمة
});
menuBtn.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-x"); // تبديل الكلاس hidden على القائمة
  menuIcon.classList.toggle("fa-bars"); // تبديل الكلاس hidden على القائمة
});
