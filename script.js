document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // テキストコンテンツの設定
            document.getElementById('user-name').textContent = data.name;
            document.getElementById('user-job').textContent = data.jobTitle;
            document.getElementById('future-vision').textContent = data.futureVision;
            document.getElementById('future-dream').textContent = data.futureDream;
            document.getElementById('study-reason').textContent = data.studyReason;
            document.getElementById('contact-email').href = `mailto:${data.contact.email}`;
            document.getElementById('footer-text').textContent = data.footerText;

            // スキルタグの生成
            const skillsFrontend = document.getElementById('frontend-skills');
            data.skills.frontend.forEach(skill => {
                const tag = document.createElement('span');
                tag.className = 'tech-tag text-white px-3 py-1 rounded-full text-sm font-medium';
                tag.textContent = skill;
                skillsFrontend.appendChild(tag);
            });

            const skillsBackend = document.getElementById('backend-skills');
            data.skills.backend.forEach(skill => {
                const tag = document.createElement('span');
                tag.className = 'tech-tag text-white px-3 py-1 rounded-full text-sm font-medium';
                tag.textContent = skill;
                skillsBackend.appendChild(tag);
            });

            const skillsTools = document.getElementById('tools-skills');
            data.skills.tools.forEach(skill => {
                const tag = document.createElement('span');
                tag.className = 'tech-tag text-white px-3 py-1 rounded-full text-sm font-medium';
                tag.textContent = skill;
                skillsTools.appendChild(tag);
            });

            // ブログリンクの生成
            const blogLinks = document.getElementById('blog-links');
            data.blogs.forEach(blog => {
                const link = document.createElement('a');
                link.href = blog.url;
                link.target = '_blank';
                link.className = `inline-flex items-center px-4 py-2 rounded-lg text-white font-medium transition-colors duration-300 ${blog.class}`;
                link.innerHTML = `${blog.icon}${blog.name}`;
                blogLinks.appendChild(link);
            });

            // 略歴の生成
            const timeline = document.getElementById('timeline');
            data.timeline.forEach(item => {
                const timelineItem = document.createElement('div');
                timelineItem.className = 'timeline-item';
                timelineItem.innerHTML = `
                    <div class="bg-blue-50 rounded-lg p-4">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 class="text-lg font-semibold text-gray-800">${item.title}</h3>
                            <span class="text-blue-600 font-medium">${item.period}</span>
                        </div>
                        <p class="text-gray-600">${item.description}</p>
                    </div>
                `;
                timeline.appendChild(timelineItem);
            });
            
            // SNSリンクの生成
            const socialLinks = document.getElementById('social-links');
            data.socials.forEach(social => {
                const link = document.createElement('a');
                link.href = social.url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.className = `flex items-center text-white px-4 py-2 rounded-lg transition-colors duration-300 ${social.class}`;
                link.innerHTML = `${social.icon} ${social.name}`;
                socialLinks.appendChild(link);
            });
        })
        .catch(error => console.error('データの読み込みに失敗しました', error));
});