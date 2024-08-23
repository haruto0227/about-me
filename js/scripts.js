document.addEventListener("DOMContentLoaded", function() {


    const mainHeading = document.querySelector('main h1');

    mainHeading.style.opacity = 0;

    setTimeout(() => {

        mainHeading.style.transition = 'opacity 2s';

        mainHeading.style.opacity = 1;

    }, 500);

});
// JavaScriptでインタラクティブな動作を実装する場合に使用
document.addEventListener('DOMContentLoaded', function() {
    console.log("ページが読み込まれました");
    // 追加のJavaScript機能をここに実装できまる。
});

<script src="js/scripts.js"></script>
