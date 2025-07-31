document.addEventListener('DOMContentLoaded', function() {    
    let currentUrl = window.location.pathname;

    // 监听主题变化
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-color-mode') {
                applyThemeStyles();
            }
        });
    });
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-color-mode']
    });

    function applyThemeStyles() {
        const currentTheme = document.documentElement.getAttribute('data-color-mode');
        let bgColor, bgOpacity, navBg, codeBg, codeColor, alertBg;
        
        if (currentTheme === 'dark') {
            bgColor = '30, 30, 30'; // 深灰色背景
            bgOpacity = '0.9';
            navBg = 'rgba(50, 50, 50, 0.7)';
            codeBg = 'rgba(40, 40, 40, 0.9)';
            codeColor = 'rgb(220, 220, 220)';
            alertBg = 'rgba(60, 60, 60, 0.8)';
        } else {
            bgColor = '237, 239, 233';
            bgOpacity = '0.84';
            navBg = 'rgba(255, 255, 255, 0.6)';
            codeBg = 'rgba(243, 244, 243, 0.967)';
            codeColor = 'rgb(0, 0, 0)';
            alertBg = 'rgba(255, 255, 255, 0.8)';
        }

        // 移除已存在的主题样式
        const existingStyle = document.getElementById('ronan-theme-style');
        if (existingStyle) {
            existingStyle.remove();
        }

        let style = document.createElement("style");
        style.id = 'ronan-theme-style';
        style.innerHTML = `
        .blogTitle {
            display: unset;
        }

        #header {
            height: 300px;
        }

        #header h1 {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .avatar {
            width: 200px;
            height: 200px;
        }

        #header h1 a {
            margin-top: 30px;
            font-family: fantasy;
            margin-left: unset;
        }

        html {    
            background: url('https://blog.freeblock.cn/background.webp') no-repeat center center fixed;
            background-size: cover;
        }

        /* 主体布局 */
        body {
            min-width: 200px;
            max-width: 885px;
            margin: 30px auto;
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            background: rgba(${bgColor}, ${bgOpacity}); 
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            overflow: auto;
            color: ${currentTheme === 'dark' ? '#e0e0e0' : '#000'};
        }

        /* 主页博客列表圆角边框 */
        .SideNav {
            background: ${navBg};
            border-radius: 10px;
            min-width: unset;
        }

        .SideNav-item:hover {
            background-color: ${currentTheme === 'dark' ? '#4a5a59' : '#c3e4e3'};
            border-radius: 10px;
            transform: scale(1.04);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }

        .SideNav-item {
            transition: 0.1s;
            color: ${currentTheme === 'dark' ? '#e0e0e0' : '#000'};
        }

        .pagination a:hover, .pagination a:focus, .pagination span:hover, .pagination span:focus, .pagination em:hover, .pagination em:focus {
            border-color: rebeccapurple;
        }

        /* 文章页特殊样式 */
        .markdown-body img {
            border-radius: 8px;
            border: 1px solid ${currentTheme === 'dark' ? 'rgba(80, 80, 80, 0.78)' : 'rgba(255, 255, 255, 0.78)'}; 
        }
        
        .markdown-body .highlight pre, .markdown-body pre {
            color: ${codeColor};
            background-color: ${codeBg};
            box-shadow: 0 10px 30px 0 ${currentTheme === 'dark' ? 'rgba(20, 20, 20, 0.6)' : 'rgba(222, 217, 217, 0.4)'};
            padding-top: 20px; 
            border-radius: 8px;
        }

        .markdown-body code, .markdown-body tt {
            background-color: ${currentTheme === 'dark' ? '#5a7a9a' : '#c9daf8'};
            color: ${currentTheme === 'dark' ? '#ffffff' : '#000000'};
        }
        
        .markdown-body h1{
            display: inline-block;
            font-size: 1.3rem;
            font-weight: bold;
            background: ${currentTheme === 'dark' ? 'rgb(180, 80, 60)' : 'rgb(239, 112, 96)'};
            color: #ffffff;
            padding: 3px 10px 1px;
            border-top-right-radius: 8px;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            margin-right: 2px;
            margin-top: 1.8rem; 
        }

        .markdown-alert {
            border-radius: 8px;
            background: ${alertBg};
            color: ${currentTheme === 'dark' ? '#e0e0e0' : '#000'};
        }

        /* 搜索页样式 */
        .subnav-search-input {
            border-radius: 2em;
            float: unset !important;
            background-color: ${currentTheme === 'dark' ? '#333' : '#fff'};
            color: ${currentTheme === 'dark' ? '#e0e0e0' : '#000'};
            border: 1px solid ${currentTheme === 'dark' ? '#555' : '#ddd'};
        }
        
        .subnav-search-icon {
            top: 9px;
            color: ${currentTheme === 'dark' ? '#aaa' : '#666'};
        }
        
        button.btn.float-left {
            display: none;
        }
        
        .subnav-search {
            width: unset; 
            height: 36px;
        }

        a {
            color: ${currentTheme === 'dark' ? '#4da6ff' : '#0366d6'};
        }

        a:hover {
            color: ${currentTheme === 'dark' ? '#66b3ff' : '#0577ff'};
        }

        .Label {
            color: ${currentTheme === 'dark' ? '#000' : '#fff'} !important;
        }

        .Label a {
            color: ${currentTheme === 'dark' ? '#000' : '#fff'} !important;
        }
        `;
        document.head.appendChild(style);
    }

    // 初始应用主题样式
    applyThemeStyles();

    // 主页主题------------------------------------------------------------------------------
    
    if (currentUrl == '/' || currentUrl.includes('/index.html') || currentUrl.includes('/page')) {
        console.log('应用主页主题');

        // 添加新页脚信息
        let footer = document.getElementById('footer');
        if (footer) {
            let themeInfo = document.createElement('div');
            themeInfo.className = 'theme-info';
            themeInfo.style.textAlign = 'center';
            themeInfo.style.marginTop = '20px';
            themeInfo.style.fontSize = 'small';
            themeInfo.style.color = '#666';
            themeInfo.innerHTML = '此主题来自 <a href="https://github.com/cao-gift/cao-gift.github.io/tree/main" target="_blank">cao-gift</a> 仓库';
            footer.appendChild(themeInfo);
        }
    }


    // 文章页主题------------------------------------------------------------------------------
    
    else if (currentUrl.includes('/post/') || currentUrl.includes('/link.html') || currentUrl.includes('/about.html')) {
        console.log('文章页主题');

        // 添加新页脚信息
        let footer = document.getElementById('footer');
        if (footer) {
            let themeInfo = document.createElement('div');
            themeInfo.className = 'theme-info';
            themeInfo.style.textAlign = 'center';
            themeInfo.style.marginTop = '20px';
            themeInfo.style.fontSize = 'small';
            themeInfo.style.color = '#666';
            themeInfo.innerHTML = '此主题来自 <a href="https://github.com/cao-gift/cao-gift.github.io/tree/main" target="_blank">cao-gift</a> 仓库';
            footer.appendChild(themeInfo);
        }
    } 


    // 搜索页主题--------------------------------------------------------------------
    
    else if (currentUrl.includes('/tag')) {
        console.log('应用搜索页主题');

        // 搜索框回车触发
        let input = document.querySelector(".form-control.subnav-search-input.float-left");
        let button = document.querySelector(".btn.float-left");
        if (input && button) {
            input.addEventListener("keyup", function(event) {
                event.preventDefault();
                if (event.key === "Enter") {
                    button.click();
                }
            });
        }

        // 添加新页脚信息
        let footer = document.getElementById('footer');
        if (footer) {
            let themeInfo = document.createElement('div');
            themeInfo.className = 'theme-info';
            themeInfo.style.textAlign = 'center';
            themeInfo.style.marginTop = '20px';
            themeInfo.style.fontSize = 'small';
            themeInfo.style.color = '#666';
            themeInfo.innerHTML = '此主题来自 <a href="https://github.com/cao-gift/cao-gift.github.io/tree/main" target="_blank">cao-gift</a> 仓库';
            footer.appendChild(themeInfo);
        }
    }
});
