
 const data = [
    { title: 'Introduction to HTML', url: '/html-intro', content: 'Learn the complete HTML...' },
    { title: 'JavaScript Basics', url: '/js-basics', content: 'Understand the fundamentals of JavaScript...' },
    { title: 'CSS', url: '/css-styling', content: 'Explore how to style web pages with CSS...' },
    { title: 'courses', url: '/courses.html', content: 'Explore how to style web pages with CSS...' },
    { title: 'problems', url: '/problems.html', content: 'Explore how to style web pages with CSS...' },
    { title: 'array prolems', url: '/array.html', content: 'Explore how to style web pages with CSS...' },
    { title: 'string problems', url: '/courses.html', content: 'Explore how to style web pages with CSS...' },
    { title: 'course', url: '/courses.html', content: 'Explore how to style web pages with CSS...' },
    { title: 'courses', url: '/courses.html', content: 'Explore how to style web pages with CSS...' },
    { title: 'master Dsa', url: '/courses.html', content: 'master the dsa with me' },


];
let input1 = document.querySelector('.results')
input1.onclick = function(){
    input1.classList.toggle('active')
}

function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    
    if (query.length < 2) {
        return; 
    }

    const results = data
        .filter(item => item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query))
        .map(item => `
            <div class="result-item">
                <a href="${item.url}">${item.title}</a>
                <p>${item.content.substring(0, 100)}...</p>
            </div>
        `)
        .join('');

    resultsDiv.innerHTML = results || 'No results found.';
}