document.addEventListener('DOMContentLoaded', function() {
    // 获取元素
    const textarea = document.querySelector('textarea');
    const sendButton = document.querySelector('.send-button');
    const chatArea = document.querySelector('.chat-area');

    // 自动调整文本框高度
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });

    // 创建消息元素的函数
    function createMessage(text, isUser = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'assistant-message'}`;
        messageDiv.textContent = text;
        chatArea.appendChild(messageDiv);
        // 滚动到底部
        chatArea.scrollTop = chatArea.scrollHeight;
    }

    // 自动回复功能
    function autoReply() {
        setTimeout(() => {
            createMessage("你好", false);
        }, 500); // 500毫秒后回复，模拟真实对话效果
    }

    // 发送消息功能
    function sendMessage() {
        const message = textarea.value.trim();
        if (message) {
            // 创建用户消息
            createMessage(message, true);

            // 清空输入框并重置高度
            textarea.value = '';
            textarea.style.height = 'auto';

            // 触发自动回复
            autoReply();
        }
    }

    // 点击发送按钮
    sendButton.addEventListener('click', sendMessage);

    // 按下回车键发送（Shift+Enter换行）
    textarea.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // 新对话按钮功能
    const newChatButton = document.querySelector('.new-chat');
    newChatButton.addEventListener('click', function() {
        // 清空聊天区域，只保留欢迎消息
        while (chatArea.lastChild && !chatArea.lastChild.classList.contains('welcome-message')) {
            chatArea.removeChild(chatArea.lastChild);
        }
        // 清空输入框
        textarea.value = '';
        textarea.style.height = 'auto';
    });
});
