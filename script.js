function typeEffect(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener("DOMContentLoaded", function() {
    typeEffect(document.getElementById("typedText"), "Welcome to My Portfolio...", 100);
    typeEffect(document.getElementById("aboutMe"), "My name is Mahdi Torabi and I am studying electrical engineering at Shahid Beheshti Unversity in Tehran. I am a developer of Apple products and a game developer with unreal engine.", 50);
    typeEffect(document.getElementById("interests"), "I enjoy working with AI and playing along with game analysis and discovering the world's latest technologies 🎮🤖", 50);
    typeEffect(document.getElementById("goals"), "Building unique apps & games to make an impact. 🚀", 50);
});