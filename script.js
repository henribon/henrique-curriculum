// ==========================================
// HENRIQUE BON - INDUSTRIAL RESUME
// GitHub Integration Script
// ==========================================

const GITHUB_USERNAME = 'henribon';
const GITHUB_API = 'https://api.github.com';

// Language colors (matching GitHub's color scheme)
const LANGUAGE_COLORS = {
    'JavaScript': '#f1e05a',
    'TypeScript': '#3178c6',
    'Python': '#3572A5',
    'Java': '#b07219',
    'Go': '#00ADD8',
    'Rust': '#dea584',
    'C': '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    'Ruby': '#701516',
    'PHP': '#4F5D95',
    'Swift': '#F05138',
    'Kotlin': '#A97BFF',
    'Dart': '#00B4AB',
    'Shell': '#89e051',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Vue': '#41b883',
    'React': '#61dafb',
};

// ==========================================
// FETCH USER REPOSITORIES
// ==========================================

async function fetchRepositories() {
    const container = document.getElementById('repos-container');

    try {
        const response = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);

        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }

        const repos = await response.json();

        // Filter out forks and sort by stars
        const publicRepos = repos
            .filter(repo => !repo.fork && !repo.private)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6); // Show top 6 repos

        if (publicRepos.length === 0) {
            container.innerHTML = `
                <div class="error-state">
                    <p>Nenhum repositório público encontrado.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = publicRepos.map(repo => createRepoCard(repo)).join('');

    } catch (error) {
        console.error('Error fetching repositories:', error);
        container.innerHTML = `
            <div class="error-state">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Erro ao carregar repositórios. Por favor, tente novamente mais tarde.</p>
            </div>
        `;
    }
}

// ==========================================
// CREATE REPOSITORY CARD
// ==========================================

function createRepoCard(repo) {
    const languageColor = LANGUAGE_COLORS[repo.language] || '#cccccc';
    const description = repo.description || 'Sem descrição disponível';

    return `
        <div class="repo-card">
            <div class="repo-header">
                <i class="fab fa-github"></i>
                <div>
                    <h3 class="repo-title">${repo.name}</h3>
                </div>
            </div>
            <p class="repo-description">${description}</p>
            <div class="repo-footer">
                <div class="repo-stats">
                    <span class="repo-stat">
                        <i class="fas fa-star"></i>
                        ${repo.stargazers_count}
                    </span>
                    <span class="repo-stat">
                        <i class="fas fa-code-branch"></i>
                        ${repo.forks_count}
                    </span>
                </div>
                ${repo.language ? `
                    <div class="repo-language">
                        <span class="language-dot" style="background: ${languageColor}"></span>
                        <span>${repo.language}</span>
                    </div>
                ` : ''}
            </div>
            <a href="${repo.html_url}" target="_blank" class="repo-link" style="display: block; margin-top: 1rem;">
                <i class="fas fa-external-link-alt"></i> Ver repositório
            </a>
        </div>
    `;
}

// ==========================================
// FETCH SPRING CONTRIBUTIONS
// ==========================================

async function fetchSpringContributions() {
    const container = document.getElementById('spring-contributions');

    try {
        // Search for issues and PRs created by the user in Spring repos
        const searchQuery = `author:${GITHUB_USERNAME} org:spring-projects type:pr`;
        const response = await fetch(`${GITHUB_API}/search/issues?q=${encodeURIComponent(searchQuery)}&sort=created&order=desc&per_page=10`);

        if (!response.ok) {
            throw new Error('Failed to fetch Spring contributions');
        }

        const data = await response.json();

        if (data.total_count === 0) {
            // If no PRs found, try searching for issues
            const issuesQuery = `author:${GITHUB_USERNAME} org:spring-projects type:issue`;
            const issuesResponse = await fetch(`${GITHUB_API}/search/issues?q=${encodeURIComponent(issuesQuery)}&sort=created&order=desc&per_page=10`);

            if (issuesResponse.ok) {
                const issuesData = await issuesResponse.json();

                if (issuesData.total_count > 0) {
                    container.innerHTML = issuesData.items.map(item => createContributionCard(item)).join('');
                    return;
                }
            }

            // If still no contributions, show message
            container.innerHTML = `
                <div class="contribution-item">
                    <p class="contribution-title">Contribuições em andamento</p>
                    <p style="color: var(--text-secondary); margin-top: 0.5rem;">
                        Explorando oportunidades de contribuição para o ecossistema Spring Framework.
                    </p>
                    <p style="color: var(--text-secondary); margin-top: 1rem; font-size: 0.9rem;">
                        <i class="fab fa-github"></i> Perfil GitHub:
                        <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" style="color: #6db33f; text-decoration: none;">
                            @${GITHUB_USERNAME}
                        </a>
                    </p>
                </div>
            `;
            return;
        }

        container.innerHTML = data.items.map(item => createContributionCard(item)).join('');

    } catch (error) {
        console.error('Error fetching Spring contributions:', error);
        container.innerHTML = `
            <div class="error-state">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Erro ao carregar contribuições. Por favor, tente novamente mais tarde.</p>
            </div>
        `;
    }
}

// ==========================================
// CREATE CONTRIBUTION CARD
// ==========================================

function createContributionCard(item) {
    const isPR = item.pull_request !== undefined;
    const repoName = item.repository_url.split('/').slice(-2).join('/');
    const state = item.state;
    const stateColor = state === 'open' ? '#6db33f' : state === 'closed' && isPR ? '#8b4ccc' : '#6e7681';
    const stateIcon = state === 'open' ? 'fa-circle-dot' : 'fa-check-circle';

    const createdDate = new Date(item.created_at).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return `
        <div class="contribution-item">
            <div class="contribution-title">
                ${isPR ? '<i class="fas fa-code-branch"></i>' : '<i class="fas fa-exclamation-circle"></i>'}
                ${item.title}
            </div>
            <div class="contribution-repo">
                <i class="fab fa-github"></i> ${repoName}
            </div>
            <div class="contribution-meta">
                <span style="color: ${stateColor};">
                    <i class="fas ${stateIcon}"></i> ${state === 'open' ? 'Aberto' : 'Fechado'}
                </span>
                <span>
                    <i class="fas fa-calendar"></i> ${createdDate}
                </span>
                ${item.comments > 0 ? `
                    <span>
                        <i class="fas fa-comment"></i> ${item.comments} comentário(s)
                    </span>
                ` : ''}
            </div>
            <a href="${item.html_url}" target="_blank" class="contribution-link">
                <i class="fas fa-external-link-alt"></i> Ver ${isPR ? 'Pull Request' : 'Issue'}
            </a>
        </div>
    `;
}

// ==========================================
// INITIALIZE ON PAGE LOAD
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🔧 Industrial Resume - Initializing...');

    // Fetch repositories
    fetchRepositories();

    // Fetch Spring contributions
    fetchSpringContributions();

    console.log('✅ Industrial Resume - Ready!');
});

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
