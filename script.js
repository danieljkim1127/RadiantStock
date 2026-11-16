const leaguePlayers = [
  {
    name: `jashik22`,
    image: "./images/joshgood.PNG",
    score: 1.2,
    change: 0,
    motm: true,
    description: "Came back to put Hwang in his place"
  },
  {
    name: `Hwang`,
    image: "./images/hwang.JPG",
    score: 1.6,
    change: 0,
    noSheen: true,
    description: "Allegedly 16-0 against Josh."
  },
  {
    name: `Robert`,
    image: "./images/robert.JPG",
    score: 2.6,
    change: 0,
    description: "Leblanc jumpscares left and right"
  },
  {
    name: `Jared`,
    image: "./images/jared3.jpg",
    score: 3.3,
    change: 0,
    description: "The smolder late game did not pay off"
  },
  {
    name: `brown day fan`,
    image: "./images/rongood.jpg",
    score: 3.7,
    change: 0,
    winstreak: true,
    description: "Noah's glass ceiling"
  },
  {
    name: `Noah`,
    image: "./images/Noah.png",
    score: 3.8,
    change: 0,
    description: "Has a hard time converting his lead into a victory"
  },
  {
    name: `JL`,
    image: "./images/jl.JPG",
    score: 4.1,
    change: 0,
    description: "Gnar masterclass. Performed well on an off role"
  },
  {
    name: `Gino`,
    image: "./images/gino.jpg",
    score: 4.3,
    change: 0,
    description: "Performance? Solid. Silver bullet? Gnar"
  },
  {
    name: `Dank`,
    image: "./images/dank.jpeg",
    score: 4.4,
    change: 0,
    description: "The anvil returns"
  },
  {
    name: `Matt`,
    image: "./images/matt.JPG",
    score: 4.5,
    change: 0,
    description: "Some highs and lows in his recent career"
  },
  {
    name: `Junsoo`,
    image: "./images/junsoo.jpeg",
    score: 5.1,
    change: 0,
    description: "Finally broke the curse and won a baron smite"
  },
  {
    name: `JBL`,
    image: "./images/boomer.jpeg",
    score: 6.5,
    change: 0,
    rusty: true,
    description: "Last I heard, still playing off meta picks"
  },
  {
    name: `Eugene`,
    image: "./images/eugene.JPG",
    score: 7.3,
    change: 0,
    description: "Had 0 kills both games"
  },
  {
    name: `Ethan`,
    image: "./images/ethan.jpg",
    score: 8.2,
    change: 0,
    description: "Amumu ban was detrimental to performance"
  },
  {
    name: `Schatz`,
    image: "./images/Schatz.png",
    score: 8.3,
    change: 0,
    description: "Support main, flexible in more ways than one"
  },
  {
    name: `Dylan`,
    image: "./images/dylan-league.png",
    score: 9.6,
    change: 0,
    description: "AI bot cosplay"
  },
];

// Maps a player's raw score (lower = better) onto a 40-100 "OVR" rating
// (higher = better) on a fixed scale: score 1 -> 100, score 10 -> 40.
// Fixed (not relative to the current roster) so a player's OVR doesn't
// shift just because someone else's score changes.
function convertToOvr(score) {
  const ratio = (score - 1) / (10 - 1);
  return Math.round(100 - ratio * 60);
}

function getTier(ovr) {
  if (ovr >= 90) return "white";
  if (ovr >= 80) return "gold";
  if (ovr >= 60) return "silver";
  return "bronze";
}

function renderLeaderboard() {
  const container = document.getElementById("players-container");
  container.innerHTML = "";

  leaguePlayers.forEach(player => {
    const ovr = convertToOvr(player.score);
    const tier = getTier(ovr);

    const card = document.createElement("div");
    card.className = `player-card tier-${tier}`;
    if (player.winstreak) card.classList.add("winstreak");
    if (player.motm) card.classList.add("motm");
    if (player.rusty) card.classList.add("rusty");
    if (player.noSheen) card.classList.add("no-sheen");

    let changeHtml = "";
    if (player.change > 0) {
      changeHtml = `<span class="change up">&#8593; +${player.change}</span>`;
    } else if (player.change < 0) {
      changeHtml = `<span class="change down">&#8595; ${player.change}</span>`;
    }

    // Only one corner tag per card - whichever status is actually driving
    // the card's background/border wins, so the label never mismatches it.
    let statusTag = "";
    if (player.rusty) {
      statusTag = `<span class="status-tag rusty-tag" title="Hasn't played in a while - rank may be inaccurate">Rusty</span>`;
    } else if (player.motm) {
      statusTag = `<span class="status-tag motm-tag" title="Man of the Match - most recent customs">MOTM</span>`;
    } else if (player.winstreak) {
      statusTag = `<span class="status-tag winstreak-tag" title="In form - on a hot streak">In Form</span>`;
    }

    card.innerHTML = `
      ${statusTag}
      <div class="rank-badge">${player.score}</div>
      <img src="${player.image}" alt="${player.name}" />
      <div class="card-body">
        <h3>${player.name}</h3>
        <p class="score-line"><span class="score">OVR ${ovr}</span> ${changeHtml}</p>
        <p class="description">${player.description}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function showValorantDiscontinued() {
  showToast("Valorant rankings have been discontinued.");
}

window.addEventListener("DOMContentLoaded", renderLeaderboard);
