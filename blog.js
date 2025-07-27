// Blog functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeBlogFunctionality();
});

function initializeBlogFunctionality() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-input');
    const articlesGrid = document.getElementById('articles-grid');
    const loadMoreBtn = document.querySelector('.load-more-btn');
    const newsletterForm = document.querySelector('.newsletter-form');

    let currentFilter = 'all';
    let currentSearchTerm = '';
    let visibleArticles = 9; // Show 9 articles initially
    
    // Initialize
    showArticles();
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            currentFilter = this.getAttribute('data-filter');
            visibleArticles = 9; // Reset visible count
            showArticles();
            
            // Smooth scroll to articles
            articlesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Search functionality
    searchInput.addEventListener('input', debounce(function() {
        currentSearchTerm = this.value.toLowerCase().trim();
        visibleArticles = 9; // Reset visible count
        showArticles();
    }, 300));

    // Load more functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            visibleArticles += 6; // Load 6 more articles
            showArticles();
            
            // Animate the button
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (validateEmail(email)) {
                // Simulate newsletter signup
                showNotification('Thank you for subscribing to our newsletter!', 'success');
                this.reset();
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }

    function showArticles() {
        const articles = document.querySelectorAll('.article-card');
        let visibleCount = 0;
        let matchingCount = 0;

        articles.forEach(article => {
            const categories = article.getAttribute('data-category').toLowerCase();
            const title = article.querySelector('h3').textContent.toLowerCase();
            const content = article.querySelector('p').textContent.toLowerCase();
            
            // Check filter match
            const filterMatch = currentFilter === 'all' || categories.includes(currentFilter);
            
            // Check search match
            const searchMatch = currentSearchTerm === '' || 
                                title.includes(currentSearchTerm) || 
                                content.includes(currentSearchTerm) ||
                                categories.includes(currentSearchTerm);
            
            if (filterMatch && searchMatch) {
                matchingCount++;
                if (visibleCount < visibleArticles) {
                    article.classList.remove('hidden');
                    article.style.animation = `fadeInUp 0.6s ease forwards ${visibleCount * 0.1}s`;
                    visibleCount++;
                } else {
                    article.classList.add('hidden');
                }
            } else {
                article.classList.add('hidden');
            }
        });

        // Update load more button
        updateLoadMoreButton(matchingCount, visibleCount);
        
        // Show no results message if needed
        showNoResultsMessage(matchingCount);
    }

    function updateLoadMoreButton(totalMatching, currentlyVisible) {
        if (loadMoreBtn) {
            if (totalMatching > currentlyVisible) {
                loadMoreBtn.style.display = 'inline-flex';
                loadMoreBtn.innerHTML = `
                    <i class="fas fa-plus"></i> 
                    Load More Articles (${totalMatching - currentlyVisible} remaining)
                `;
            } else {
                loadMoreBtn.style.display = 'none';
            }
        }
    }

    function showNoResultsMessage(matchingCount) {
        // Remove existing no results message
        const existingMessage = document.querySelector('.no-results');
        if (existingMessage) {
            existingMessage.remove();
        }

        if (matchingCount === 0) {
            const noResultsHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No articles found</h3>
                    <p>Try adjusting your search terms or filters</p>
                </div>
            `;
            articlesGrid.insertAdjacentHTML('afterend', noResultsHTML);
        }
    }
}

// CSS Animation keyframes (add to your CSS file)
const animationCSS = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

// Inject animation CSS
if (!document.querySelector('#blog-animations')) {
    const style = document.createElement('style');
    style.id = 'blog-animations';
    style.textContent = animationCSS;
    document.head.appendChild(style);
}

// Additional blog-specific functions
function getRelatedArticles(currentCategory, limit = 3) {
    const articles = document.querySelectorAll('.article-card');
    const related = [];
    
    articles.forEach(article => {
        const categories = article.getAttribute('data-category').toLowerCase();
        if (categories.includes(currentCategory.toLowerCase()) && related.length < limit) {
            related.push({
                title: article.querySelector('h3').textContent,
                link: article.querySelector('.read-more').href,
                image: article.querySelector('img').src,
                category: article.querySelector('.article-category').textContent
            });
        }
    });
    
    return related;
}

function shareArticle(title, url) {
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback to copying URL to clipboard
        navigator.clipboard.writeText(url).then(() => {
            showNotification('Article URL copied to clipboard!', 'success');
        }).catch(err => {
            console.log('Error copying to clipboard:', err);
            showNotification('Unable to copy URL. Please copy manually.', 'error');
        });
    }
}

function trackArticleView(articleId, title) {
    // Simulate article view tracking
    const viewData = {
        articleId: articleId,
        title: title,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
    };
    
    // In a real application, this would send data to analytics
    console.log('Article view tracked:', viewData);
    
    // Store in localStorage for demo purposes
    const views = getFromLocalStorage('articleViews') || [];
    views.push(viewData);
    saveToLocalStorage('articleViews', views.slice(-50)); // Keep last 50 views
}

function getPopularArticles(limit = 5) {
    // Simulate getting popular articles based on view data
    const views = getFromLocalStorage('articleViews') || [];
    const articleCounts = {};
    
    views.forEach(view => {
        articleCounts[view.articleId] = (articleCounts[view.articleId] || 0) + 1;
    });
    
    // Sort by view count and return top articles
    return Object.entries(articleCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, limit)
        .map(([articleId, count]) => ({ articleId, views: count }));
}

function initializeReadingProgress() {
    // Add reading progress bar for individual articles
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="progress-fill"></div>';
    
    // CSS for reading progress
    const progressCSS = `
        .reading-progress {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            height: 3px;
            background: rgba(163, 196, 188, 0.2);
            z-index: 999;
        }
        
        .progress-fill {
            height: 100%;
            background: var(--primary-color);
            width: 0%;
            transition: width 0.2s ease;
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = progressCSS;
    document.head.appendChild(style);
    document.body.appendChild(progressBar);
    
    // Update progress on scroll
    window.addEventListener('scroll', debounce(() => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        progressBar.querySelector('.progress-fill').style.width = scrolled + '%';
    }, 10));
}

// Initialize reading progress for article pages
if (window.location.pathname.includes('article') || document.querySelector('.article-full')) {
    initializeReadingProgress();
}

// Export functions for use in other scripts
window.blogFunctions = {
    getRelatedArticles,
    shareArticle,
    trackArticleView,
    getPopularArticles
};