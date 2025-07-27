// static/plugins/RonanTheme.js
document.addEventListener('DOMContentLoaded', function() {    
    const currentUrl = window.location.pathname;
    
    // 通用模糊样式
    const blurStyle = `
        html { background: url('https://blog.freetop.cn/background.webp') no-repeat center center fixed; }
        body { 
            background: rgba(237, 239, 233, 0.84); 
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        .SideNav { background: rgba(255, 255, 255, 0.6); }
    `;
    
    // 不同页面的特定样式
    const pageStyles = {
        '/': `
            .SideNav-item:hover {
                background-color: #c3e4e3;
                transform: scale(1.04);
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
            }
        `,
        '/tag': `
            .SideNav-item:hover {
                transform: scale(1.02);
                background-color: #c3e4e3;
            }
            .subnav-search-input { border-radius: 2em; }
        `,
        '/post/': `
            .markdown-body img { border-radius: 8px; }
            .markdown-body pre { background: rgba(243, 244, 243, 0.967); }
        `
    };

    // 应用样式
    const style = document.createElement("style");
    style.innerHTML = blurStyle + (pageStyles[currentUrl] || '');
    document.head.appendChild(style);
});
