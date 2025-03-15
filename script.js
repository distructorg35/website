const categories = ["All", "SEO", "Marketing", "Development", "Design", "AI", "Finance", "Health", "Education", "Gaming", "Travel", "Lifestyle", "Business", "Cryptocurrency", "Science", "Photography"];

const articles = [
    { title: "SEO Strategies", content: "Learn the best SEO tactics.", link: "#", category: "SEO" },
    { title: "Web Development Trends", content: "Improve your coding skills.", link: "#", category: "Development" },
    { title: "AI Trends 2025", content: "Latest in AI and Machine Learning.", link: "#", category: "AI" },
    { title: "Poki Games - Fun Online Games", content: "Explore the best free-to-play online games on Poki.", link: "#", category: "Gaming" }
];

function displayCategories() {
    const categoriesContainer = document.getElementById('categories');
    categoriesContainer.innerHTML = '';
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        categoryDiv.innerText = category;
        categoryDiv.onclick = () => filterArticles(category);
        categoriesContainer.appendChild(categoryDiv);
    });
}

function displayArticles(filteredArticles = articles) {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = '';
    filteredArticles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        articleDiv.dataset.category = article.category;
        articleDiv.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
        articleDiv.onclick = () => window.open(article.link, '_blank');
        articlesContainer.appendChild(articleDiv);
    });
}

function filterArticles(category) {
    const filteredArticles = category === 'All' ? articles : articles.filter(article => article.category === category);
    displayArticles(filteredArticles);
}

function searchArticles(searchTerm) {
    const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()));
    displayArticles(filteredArticles);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function addArticle(title, content, category) {
    articles.push({ title, content, link: "#", category });
    displayArticles(); // Refresh articles
}

// Initial Display
displayCategories();
displayArticles();
// Modes List
const modes = ["light-mode", "dark-mode", "neon-mode"];
let currentModeIndex = 0;

// Function to Toggle Mode
function toggleMode() {
    document.body.classList.remove(modes[currentModeIndex]); // Remove Current Mode
    currentModeIndex = (currentModeIndex + 1) % modes.length; // Switch to Next Mode
    document.body.classList.add(modes[currentModeIndex]); // Apply New Mode
}

// Apply Default Mode (Light Mode)
document.body.classList.add(modes[currentModeIndex]);
