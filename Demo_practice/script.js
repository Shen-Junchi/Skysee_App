const GlassContainer = document.querySelector('.glass-container');
const GlassContainerButton = document.querySelector('.glass-container button');
const GlassContainerText = document.querySelector('.glass-container h1');
const Replybox = document.querySelector('.reply-box');


GlassContainerButton.addEventListener('click', () => {
    console.log('按钮被点击了！'); // 调试用
    GlassContainer.classList.add('during-talk');
    GlassContainerText.classList.add("hidden");
    GlassContainerButton.classList.add("hidden");
    Replybox.classList.add("during-talk");
});


