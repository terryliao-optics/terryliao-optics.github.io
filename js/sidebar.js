/* sidebar.js — 统一侧边栏，所有页面引入此文件即可 */
(function () {
    const currentPath = window.location.pathname;

    const sidebarHTML = `
    <a class="site-logo" href="/index.html">Terry Liao</a>
    <nav>
        <div class="nav-section">
            <a class="nav-main-link" href="/pages/profile.html">个人简介</a>
        </div>
        <div class="nav-section">
            <a class="nav-main-link" href="/pages/family.html">家庭时光</a>
        </div>
        <div class="nav-section nav-toggle-section" id="wanxiang-section">
            <span class="nav-main-link nav-toggle">万象天地</span>
            <ul class="nav-sub">
                <li><a href="/hobbies/football.html">足球</a></li>
                <li><a href="/hobbies/pingpong.html">乒乓球</a></li>
                <li><a href="/hobbies/music.html">音乐</a></li>
                <li><a href="/hobbies/social.html">社科</a></li>
            </ul>
        </div>
        <div class="nav-section nav-toggle-section" id="shenjing-section">
            <span class="nav-main-link nav-toggle">神经漫游</span>
            <ul class="nav-sub">
                <li><a href="/hobbies/optics.html">光学</a></li>
                <li><a href="/hobbies/math.html">数学</a></li>
                <li><a href="/hobbies/literature.html">文学</a></li>
            </ul>
        </div>
    </nav>`;

    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.innerHTML = sidebarHTML;

        // Accordion toggle
        sidebar.querySelectorAll('.nav-toggle-section').forEach(section => {
            const toggle = section.querySelector('.nav-toggle');
            toggle.addEventListener('click', () => {
                // close others
                sidebar.querySelectorAll('.nav-toggle-section').forEach(s => {
                    if (s !== section) s.classList.remove('open');
                });
                section.classList.toggle('open');
            });
        });

        // Auto-open active section based on current URL
        if (currentPath.includes('football') || currentPath.includes('pingpong') ||
            currentPath.includes('music') || currentPath.includes('social')) {
            document.getElementById('wanxiang-section').classList.add('open');
        }
        if (currentPath.includes('optics') || currentPath.includes('math') ||
            currentPath.includes('literature')) {
            document.getElementById('shenjing-section').classList.add('open');
        }

        // Mark active links
        sidebar.querySelectorAll('a').forEach(a => {
            if (a.getAttribute('href') && currentPath.endsWith(a.getAttribute('href').replace(/^\//, ''))) {
                a.classList.add('active');
            }
        });
    }
})();
