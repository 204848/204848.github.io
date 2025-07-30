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

    // 应用主题相关样式
    function applyThemeStyles() {
        const isDark = document.documentElement.getAttribute('data-color-mode') === 'dark';
        const themeStyleId = 'ronan-theme-styles';
        let themeStyle = document.getElementById(themeStyleId);
        
        if (!themeStyle) {
            themeStyle = document.createElement('style');
            themeStyle.id = themeStyleId;
            document.head.appendChild(themeStyle);
        }

        // 基础背景设置
        const backgroundUrl = 'https://blog.freeblock.cn/background.webp';
        
        themeStyle.innerHTML = `
        html {
            background: url('${backgroundUrl}') no-repeat center center fixed;
            background-size: cover;
        }

        body {
            background: ${isDark ? 'rgba(35, 39, 47, 0.84)' : 'rgba(237, 239, 233, 0.84)'} !important;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        /* 深色模式特殊处理 */
        ${isDark ? `
        body {
            color: #e6edf3 !important;
        }
        
        a {
            color: #58a6ff !important;
        }
        
        a:hover {
            color: #79c0ff !important;
        }
        
        .SideNav {
            background: rgba(22, 27, 34, 0.8) !important;
        }
        
        .SideNav-item:hover {
            background-color: #30363d !important;
        }
        
        .markdown-body {
            color: #e6edf3 !important;
            background: rgba(22, 27, 34, 0.8) !important;
        }
        
        .markdown-body h1,
        .markdown-body h2,
        .markdown-body h3,
        .markdown-body h4,
        .markdown-body h5,
        .markdown-body h6 {
            color: #e6edf3 !important;
        }
        
        .markdown-body code,
        .markdown-body tt {
            background-color: #30363d !important;
            color: #e6edf3 !important;
        }
        
        .markdown-body pre {
            background-color: rgba(22, 27, 34, 0.9) !important;
            color: #e6edf3 !important;
            border: 1px solid #30363d !important;
        }
        
        .Label {
            color: #e6edf3 !important;
        }
        
        .subnav-search-input {
            background-color: #0d1117 !important;
            border-color: #30363d !important;
            color: #e6edf3 !important;
        }
        
        .pagination a,
        .pagination span,
        .pagination em {
            background-color: #0d1117 !important;
            border-color: #30363d !important;
            color: #e6edf3 !important;
        }
        ` : `
        .SideNav {
            background: rgba(255, 255, 255, 0.6) !important;
        }
        
        .SideNav-item:hover {
            background-color: #c3e4e3 !important;
        }
        
        .markdown-body code,
        .markdown-body tt {
            background-color: #c9daf8 !important;
        }
        
        .markdown-body pre {
            background-color: rgba(243, 244, 243, 0.967) !important;
            color: #000000 !important;
        }
        `}
        `;
    }

    // 应用初始主题样式
    applyThemeStyles();

    // 主页主题------------------------------------------------------------------------------
    
    if (currentUrl == '/' || currentUrl.includes('/index.html') || currentUrl.includes('/page')) {
        console.log('应用主页主题');
        let style = document.createElement("style");
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

        /* 主体布局 */
        body {
            min-width: 200px;
            max-width: 885px;
            margin: 30px auto;
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            overflow: auto;
        }

        /* 主页博客列表圆角边框 */
        .SideNav {
            border-radius: 10px;
            min-width: unset;
        }

        /* 鼠标放到博客标题后会高亮 */
        .SideNav-item {
            transition: 0.1s;
        }

        /* 分页条 */
        .pagination a:hover, .pagination a:focus, .pagination span:hover, .pagination span:focus, .pagination em:hover, .pagination em:focus {
            border-color: rebeccapurple;
        }
        `;
        document.head.appendChild(style);

        // 添加主题信息到页脚
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


    //文章页主题------------------------------------------------------------------------------
    
    else if (currentUrl.includes('/post/') || currentUrl.includes('/link.html') || currentUrl.includes('/about.html')) {
        console.log('文章页主题');

        let style = document.createElement("style");
        style.innerHTML = `
        /* 主体布局 */
        body {
            min-width: 200px;
            max-width: 885px;
            margin: 30px auto;
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            overflow: auto;
        }

        /* markdown内容 */
        /* 图片圆角 */
        .markdown-body img {
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.78); 
        }
        
        /* notice、caution、warning等提示信息的圆角 */
        .markdown-alert {
            border-radius: 8px;
        }
        
        /* 代码块 */
        .markdown-body .highlight pre, .markdown-body pre {
            box-shadow: 0 10px 30px 0 rgba(222, 217, 217, 0.4);
            padding-top: 20px; 
            border-radius: 8px;
        }

        /* 行内代码 */
        .markdown-body code, .markdown-body tt {
            padding: 2px 4px;
            border-radius: 4px;
        }
        
        /* 标题橙色包裹 */
        .markdown-body h1{
            display: inline-block;
            font-size: 1.3rem;
            font-weight: bold;
            background: rgb(239, 112, 96);
            color: #ffffff;
            padding: 3px 10px 1px;
            border-top-right-radius: 8px;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            margin-right: 2px;
            margin-top: 1.8rem; 
        }   
        `;
        document.head.appendChild(style);
        
        // 添加主题信息到页脚
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
        let style = document.createElement("style");
        style.innerHTML = `
        /* 主体布局 */
        body {
            min-width: 200px;
            max-width: 885px;
            margin: 30px auto;
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.25;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            overflow: auto;
        }
        
        .SideNav {
            border-radius: 10px;
            min-width: unset;
        }
        
        .SideNav-item {
            transition: 0.1s;
        }
        
        .subnav-search-input {
            border-radius: 2em;
            float: unset !important;
        }
        
        .subnav-search-icon {
            top: 9px;
        }
        
        button.btn.float-left {
            display: none;
        }
        
        .subnav-search {
            width: unset; 
            height: 36px;
        }
        `;
        document.head.appendChild(style);
        
        // 搜索框回车触发
        let input = document.getElementsByClassName("form-control subnav-search-input float-left")[0];
        let button = document.getElementsByClassName("btn float-left")[0];
        if (input && button) {
            input.addEventListener("keyup", function(event) {
                event.preventDefault();
                if (event.keyCode === 13) {
                    button.click();
                }
            });
        }

        // 添加主题信息到页脚
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
