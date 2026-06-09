document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("landingIntro");
    if (!el) return;

    const txt = "Hi, I'm Jonathan.";
    let i = 0;

    function typeWriter() {
        if (i < txt.length) {
            el.textContent += txt[i++];
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
});
