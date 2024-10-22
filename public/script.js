const backendurl = "http://localhost:3000/gyumolcs";

function gyumolcsMegjelenites(gyJSON) {
    console.log(gyJSON);
    let belsoHTML = `
    <hr>
        <div id="gyatt1" class="gyatt1">
    `;
    for (let i = 0; i < gyJSON.length; i++) {
        belsoHTML += `
        <div class="kartya">
                <div class="knev">
                    <label for="knev">A gyümölcs neve: ${gyJSON[i].gynev}</label>
                </div>
                <div class="kegysegar">
                    <label for="knev">Az egységára: ${gyJSON[i].gyegysegar}</label>
                </div>
                <div class="kmennyiseg">
                    <label for="knev">A mennyisége: ${gyJSON[i].gymennyiseg} ${gyJSON[i].gymegyseg}</label>
                </div>
        </div>
    `;
    belsoHTML += `
    </div>`;
    document.getElementById("kartyakk").innerHTML = belsoHTML;
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch(backendurl);
    const data = await response.json();
    gyumolcsMegjelenites(data);
});