const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const heartsContainer = document.querySelector(".hearts");

// Klik TAK
yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="
            min-height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            background:linear-gradient(135deg, #ff9a9e, #fad0c4);
            font-family:Arial;
            text-align:center;
            padding:20px;
        ">
            <h1 style="color:#e63946;">
                Iza ❤️<br><br>
                Oficjalnie jesteś moją Walentynką 🥰💖
            </h1>
        </div>
    `;
});

// Uciekanie NIE (od pozycji początkowej)
noBtn.addEventListener("mouseenter", () => {
    const offsetX = (Math.random() - 0.5) * 300;
    const offsetY = (Math.random() - 0.5) * 200;

    noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

// Serduszka
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 4 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 400);
