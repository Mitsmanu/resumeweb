function main () {
    const titletab = document.getElementById("title-tab");
    const logotab = document.getElementById("logo-tab");
    const urltab = document.getElementById("url-tab");

    for (let project of projects) {
        titletab.innerHTML = titletab.innerHTML + `
            <th class="center"><a href="${project.url}" rel="nofollow"><strong>${project.title}</strong></a></th>
        `;

        logotab.innerHTML = logotab.innerHTML + `
            <td class="center"><a target="_blank" rel="noopener noreferrer" href="${project.logo}"><img class="center" src="${project.logo}" height="100px" style="max-width:100%;"></a></td>
        `

        urltab.innerHTML = urltab.innerHTML + `
            <td class="center"><a href="${project.url}" rel="nofollow"><code>${project.url_title}</code></a></td>
        `
    }
}

window.addEventListener("load", main);