let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

let btnDownload = document.getElementById("btnDownload");

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        
        imgBox.classList.add("show-img");
        document.getElementById("btnDownload").style.display = "flex";
        
        const a = document.createElement("a");
        a.href = `${qrImage.src}`;
        a.download = `.png`;
        
        /* a.download = `${imgQ}.jpg`; */

        btnDownload.addEventListener("click", () => {
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });

    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}

/* https://www.linkedin.com/in/nathanvgarrett/ */

/* imgBox.innerHTML = `
        <div id="btnDownload" href="${imgBox}" download>
            <button id="downloadImg">Download Image</button>
        </div>`;  */
