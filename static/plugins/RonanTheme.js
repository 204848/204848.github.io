// static/plugins/RonanTheme.js
document.addEventListener('DOMContentLoaded', function() {
    const currentUrl = window.location.pathname;
    
    // 添加全局样式
    const style = document.createElement('style');
    style.textContent = `
        html {
            background: url('/background.webp') no-repeat center center fixed;
            background-size: cover;
            filter: blur(0px);
            transition: filter 0.3s ease;
        }
        body {
            background: rgba(237, 239, 233, 0.84);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            overflow: auto;
        }
        .SideNav {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border-radius: 10px;
        }
        .SideNav-item {
            transition: all 0.2s ease;
            border-radius: 8px;
        }
        .SideNav-item:hover {
            background-color: #c3e4e3;
            transform: scale(1.04);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }
        
        /* 主页特定样式 */
        ${currentUrl === '/' ? `
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
        ` : ''}
        
        /* 文章页特定样式 */
        ${currentUrl.includes('/post/') ? `
            .markdown-body img {
                border-radius: 8px;
                border: 1px solid rgba(255, 255, 255, 0.78); 
            }
            .markdown-body .highlight pre, .markdown-body pre {
                background-color: rgba(243, 244, 243, 0.967);
                box-shadow: 0 10px 30px 0 rgba(222, 217, 217, 0.4);
                padding-top: 20px; 
                border-radius: 8px;
            }
        ` : ''}
        
        /* 搜索页特定样式 */
        ${currentUrl.includes('/tag') ? `
            .subnav-search-input {
                border-radius: 2em;
            }
            .SideNav-item:hover {
                transform: scale(1.02);
            }
        ` : ''}
    `;
    document.head.appendChild(style);
});
