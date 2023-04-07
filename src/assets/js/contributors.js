function displayContributors(contributors) {
    const contributorsContainer = document.querySelector("#contributors");
    
    contributors.forEach(contributor => {
        const contributorTemplate = `
            <div class="contributor-item card ${contributor.main_company ? 'main-company' : ''}">
                <div class="contributor-pic" style="background-image: url(https://github.com/${contributor.github_username}.png);" alt="${contributor.github_username} profile picture"></div>
                <div class="contributor-info">
                    <h4>${contributor.name}</h4>
                    <div class="contributor-roles">
                        ${contributor.roles.map(role => `<span class="contributor-role">${role}</span>`).join('')}
                    </div>
                </div>
                <a href="https://github.com/${contributor.github_username}">
                    <ion-icon name="logo-github"></ion-icon>
                </a>
                ${contributor.main_company ? '<a class="contributor-fab" href="https://fabricators.ltd"><img src="assets/images/fabricators-logo.png" alt="Works at fabricators.ltd" title="Works at fabricators.ltd"></a>' : ''}
            </div>
        `;
        contributorsContainer.insertAdjacentHTML("beforeend", contributorTemplate);
    });
}
