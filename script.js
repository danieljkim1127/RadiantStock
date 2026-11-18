const leaguePlayers = [
  {
    name: `Josh`,
    image: "./images/josh.JPG",
    score: 1.2,
    description: "Has been quiet lately trying to duck the Hwang fade"
  },
  {
    name: `Hwang`,
    image: "./images/hwang.JPG",
    score: 1.6,
    description: "Last seen grinding ranked to reclaim his throne"
  },
  {
    name: `enjae`,
    image: "./images/noahgood.JPG",
    score: 2.4,
    prevScore: 3.8,
    motm: true,
    description: "Finally broke his glass ceiling"
  },
  {
    name: `Robert`,
    image: "./images/robert.JPG",
    score: 2.6,
    description: "Leblanc jumpscares left and right"
  },
  {
    name: `Jared`,
    image: "./images/jared3.jpg",
    score: 3.3,
    description: "Let's see what the new analyst has to say about the new rankings"
  },
  {
    name: `JL`,
    image: "./images/jl.JPG",
    score: 3.8,
    prevScore: 4.1,
    description: "How's the winstreak buddy?"
  },
  {
    name: `Gino`,
    image: "./images/gino.jpg",
    score: 4.0,
    prevScore: 4.3,
    description: "Performed well in an off role"
  },
  {
    name: `Junsoo`,
    image: "./images/junsoo.jpeg",
    score: 4.3,
    prevScore: 5.1,
    description: "Great performance all around"
  },
  {
    name: `Matt`,
    image: "./images/matt.JPG",
    score: 4.4,
    prevScore: 4.5,
    winstreak: 3,
    description: "Unnoteworthy performance, but snagged a couple wins"
  },
  {
    name: `Dank`,
    image: "./images/dank.jpeg",
    score: 5.4,
    prevScore: 4.4,
    description: "Anvil was a little rusty"
  },
  {
    name: `JBL`,
    image: "./images/boomer.jpeg",
    score: 6.4,
    prevScore: 6.5,
    description: "Finally went a regular character and build"
  },
  {
    name: `Caesar`,
    image: "./images/shatzgood.PNG",
    score: 7.1,
    prevScore: 8.3,
    inForm: true,
    description: "High performance and a high winrate"
  },
  {
    name: `Eugene`,
    image: "./images/eugene.JPG",
    score: 7.3,
    description: "Had 0 kills both games"
  },
  {
    name: `Ronen`,
    image: "./images/ron.JPG",
    score: 7.5,
    prevScore: 3.7,
    description: "Man was stat padding"
  },
  {
    name: `Ethan`,
    image: "./images/ethanbad.JPEG",
    score: 8.3,
    prevScore: 8.2,
    description: "Performance suffered due to team diff"
  },
  {
    name: `Dylan`,
    image: "./images/dylan-league.png",
    score: 9.6,
    description: "Was last seen practicing against AI bots"
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
    if (player.inForm) card.classList.add("in-form");
    if (player.motm) card.classList.add("motm");
    if (player.rusty) card.classList.add("rusty");
    if (player.winstreak) card.classList.add("winstreak");

    // Movement since the last update: a lower score is better, so a drop
    // in score (e.g. 3.8 -> 2.4) is a positive/"up" change. Set a player's
    // prevScore to their old score when you update their score, and this
    // computes and displays the diff automatically.
    let changeHtml = "";
    if (player.prevScore != null) {
      const change = Math.round((player.prevScore - player.score) * 10) / 10;
      if (change > 0) {
        changeHtml = `<span class="change up">&#8593; +${change}</span>`;
      } else if (change < 0) {
        changeHtml = `<span class="change down">&#8595; ${change}</span>`;
      }
    }

    // Only one corner tag per card - whichever status is actually driving
    // the card's background/border wins, so the label never mismatches it.
    let statusTag = "";
    if (player.rusty) {
      statusTag = `<span class="status-tag rusty-tag" title="Hasn't played in a while - rank may be inaccurate">Rusty</span>`;
    } else if (player.motm) {
      statusTag = `<span class="status-tag motm-tag" title="Man of the Match - most recent customs">MOTM</span>`;
    } else if (player.inForm) {
      statusTag = `<span class="status-tag in-form-tag" title="In form - on a hot streak">In Form</span>`;
    }

    // Win streak is a separate, stackable chip (not part of the one-tag
    // priority above) - a player can be rusty/motm/in-form AND on a streak
    // at the same time, so it normally sits in its own slot under the main
    // tag. If there's no main tag, it moves up into that top slot instead
    // of leaving it empty.
    const streakTag = player.winstreak
      ? `<span class="status-tag winstreak-tag${statusTag ? "" : " winstreak-solo"}" title="${player.winstreak} game win streak">&#128293; Winstreak ${player.winstreak}</span>`
      : "";

    card.innerHTML = `
      ${statusTag}
      ${streakTag}
      <div class="rank-badge">${player.score}</div>
      <img src="${player.image}" alt="${player.name}" />
      <div class="card-body">
        <h3>${player.name}</h3>
        <p class="score-line"><span class="score">OVR ${ovr}</span></p>
        <p class="description">${player.description}</p>
      </div>
    `;

    // The change indicator sits outside the card, to its left, rather than
    // inside the rank-badge - keeps it visibly separate from the card's own
    // score/OVR instead of reading as part of either number.
    const row = document.createElement("div");
    row.className = "player-row";
    row.innerHTML = `<div class="rank-change">${changeHtml}</div>`;
    row.appendChild(card);

    container.appendChild(row);
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
