// static/plugins/RonanTheme.js
document.addEventListener('DOMContentLoaded', function() {
    // 设置背景图片
    document.body.style.background = "url('/static/infinity-1886172.webp') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    
    // 高斯模糊效果
    const contentElements = document.querySelectorAll('#header, #content, #footer');
    contentElements.forEach(el => {
        el.style.backdropFilter = "blur(10px)";
        el.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        el.style.borderRadius = "10px";
        el.style.padding = "20px";
        el.style.marginBottom = "20px";
    });
    
    // 悬停动效
    const navItems = document.querySelectorAll('.SideNav-item');
    navItems.forEach(item => {
        item.style.transition = "all 0.3s ease";
        
        item.addEventListener('mouseenter', function() {
            this.style.transform = "translateY(-5px)";
            this.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
            this.style.backgroundColor = "#f0f8ff";
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = "none";
            this.style.boxShadow = "none";
            this.style.backgroundColor = "";
        });
    });
    
    // 标签悬停效果
    const labels = document.querySelectorAll('.Label');
    labels.forEach(label => {
        label.style.transition = "all 0.2s ease";
        
        label.addEventListener('mouseenter', function() {
            this.style.transform = "scale(1.1)";
            this.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
        });
        
        label.addEventListener('mouseleave', function() {
            this.style.transform = "none";
            this.style.boxShadow = "none";
        });
    });
});
