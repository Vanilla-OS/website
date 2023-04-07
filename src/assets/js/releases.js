function getBuilds() {
    fetch('https://api.github.com/repos/vanilla-os/os/actions/artifacts')
        .then(response => response.json())
        .then(data => {
        let builds = document.getElementById('builds_table');
        let html = '';
        data.artifacts.forEach(artifact => {
            html += `<tr>
                        <td>${artifact.name}</td>
                        <td>${new Date(artifact.created_at).toDateString()}</td>
                        <td>${formatBytes(artifact.size_in_bytes)}</td>
                        <td><a href="https://github.com/vanilla-os/os/actions/runs/${artifact.workflow_run.id}">Download</a></td>
                    </tr>`;
        });
        builds.innerHTML = html;
    });
}

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const dm = decimals < 0 ? 0 : decimals;
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    
    return parseFloat((bytes / Math.pow(1024, i)).toFixed(dm)) + ' ' + ['Bytes', 'KB', 'MB', 'GB'][i];
}

getBuilds();
