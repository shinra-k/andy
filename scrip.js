// Générateur de cœurs pour toutes les pages
const heartsContainer = document.querySelector(".hearts");

if (heartsContainer) {
  for (let i = 0; i < 25; i++) {
    let heart = document.createElement("span");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";
    heartsContainer.appendChild(heart);
  }
}

// PAGE 1 : clic sur enveloppe → lettre
function openEnvelope() {
  window.location.href = "page2.html"; // simple redirection
}

// PAGE 2 : retour vers page 1
function goBack() {
  window.location.href = "index.html";
}

// PAGE 2 : typewriter effect
const text = `Coucou Andy,

Bonne fête de la Saint-Valentin à toi ! ❤️
Merci de faire partie de ma vie, même si bon... En tout cas, merci pour tout, pour nos courts moments où nous avons pu nous voir et où l'on s'est amusés.

En tout cas, je t'aime bien ! Même si, parfois, ton comportement me donne envie de te gifler violemment... Tu vois, comme les gens qui se giflent fort là (j'ai oublié le nom de ce sport !). 😂

En tout cas, profite bien de ta journée avec ton gars, même si c'est déjà fini. ✨

Joyeuse Saint-Valentin d’amitié 💕`;

let i = 0;

function typeWriter() {
  const target = document.getElementById("typed-text");
  const paper = document.querySelector(".paper");
  const signature = document.querySelector(".signature");

  if (target && i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 35);
  } else {
    paper.classList.add("glow");
    signature.classList.add("show");
  }
}

// Lancer le typewriter uniquement sur la page 2
if (document.body.classList.contains("page2")) {
  typeWriter();
}
