// 配置图片路径
const background_urls = [
            'https://cloudsource.pages.dev/img/background/02.webp',
            'https://cloudsource.pages.dev/img/background/01.webp',
        ]
const bgUrl = background_urls[Math.floor((Math.random() * background_urls.length))];

// 应用背景到指定元素（根据主题结构可能需要调整选择器）
document.addEventListener('DOMContentLoaded', function() {
    const bgElement = document.getElementById('web_bg'); // Butterfly主题的背景容器
    if (bgElement) {
        bgElement.style.backgroundImage = `url(${bgUrl})`;
    } else {
        document.body.style.backgroundImage = `url(${bgUrl})`;
    }
    console.log("BackGround URL:" + bgUrl);
});

