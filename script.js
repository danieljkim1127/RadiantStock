const players = {
  league: [
    {
      name: `Hwang`,
      image: "./images/hwang.JPG",
      score: 1,
      change: 0,
      description: "Thanos Incarnate. Everyone has been traumatized by this man at some point. Always ban vayne. Needs to grow taller."
    },
    {
      name: `Josh - Dank's biggest hater`,
      image: "./images/josh.JPG",
      score: 2.2,
      change: 0,
      description: "Consistent high performer, great macro. Enough with the dick riding, lemme supp you alistar now."
    },
    {
      name: `Noah`,
      image: "./images/noah.PNG",
      score: 2.4,
      change: 0,
      description: "Great macro, great leader, but does not carry the presence one would hope for in their carry."
    },
    {
      name: `Croissant`,
      image: "./images/croissant.webp",
      score: 2.6,
      change: 0,
      description: "Can fill many roles well and consistently wins."
    },
    {
      name: `Dank`,
      image: "./images/dank.jpeg",
      score: 3.4,
      change: 0,
      description: "Can fill many roles but has yet to go crazy. Negative outlook on dankstock due to his biggest hater. Currently on fraud watch."
    },
    {
      name: `Gino "Ubuditcher" Kim`,
      image: "./images/gino.jpg",
      score: 3.7,
      change: 0,
      description: "New challenger. Beat hwang, wrecked eugene. Top/Jungle main. GinoCoin to the moon?."
    },
    {
      name: `JL`,
      image: "./images/jl.JPG",
      score: 4.1,
      change: 0,
      description: "A Lee Sin jungle one trick. 'His Lee Sin is not that good' - Josh, Croissant. Consistently loses to Croissant's jungle. "
    },
    {
      name: `Matt`,
      image: "./images/matt.JPG",
      score: 4.7,
      change: 0,
      description: "Solid team player, mainly mid, complains his leblanc always gets banned."
    },
    {
      name: `Jared`,
      image: "./images/jared.JPG",
      score: 4.8,
      change: 0,
      description: "Thinks hes the main character. Ur not that guy pal."
    },
    {
      name: `JBL`,
      image: "./images/boomer.jpeg",
      score: 5.1,
      change: 0,
      description: "Plays off meta picks and strats, but he makes it work. Undeniable pain in the ass."
    },
    {
      name: `Eugene`,
      image: "./images/eugene.JPG",
      score: 6.2,
      change: 0,
      description: "NAs best trundle. Stop jerkin."
    },
    {
      name: `Junsoo "Gubi Goobers" Lee`,
      image: "./images/junsoo.jpeg",
      score: 6.7,
      change: 0,
      description: "Infamous for his baron smite and blaming the sejuani character model. Negatively viewed by many, but highly undervalued."
    },
    {
      name: `Schatz`,
      image: "./images/schatz.PNG",
      score: 7.1,
      change: 0,
      description: "So far only seen in the support role. He's a good boy."
    },
    {
      name: `Ethan`,
      image: "./images/ethan.jpg",
      score: 8.2,
      change: 0,
      description: "New to the game, support main. Stick to support."
    },
    {
      name: `Ron`,
      image: "./images/ron.JPG",
      score: 8.4,
      change: 0,
      description: "Ban Yuumi and Pyke. Tf he gunna do?"
    },
  ],
  valorant: [
    {
      name: `JW`,
      image: "./images/JW.png",
      score: 1.8,
      change: -.1,
      description: "Came to visit me for food"
    },
    {
      name: `Ethan`,
      image: "./images/Ethan.png",
      score: 2.4,
      change: -.5,
      description: "Neon ain't in his bag."
    },
    {
      name: `Michael`,
      image: "./images/michaelk14.png",
      score: 2.5,
      change: 0.8,
      description: "Came to visit me to pose for this picture."
    },
    {
      name: `Dylan`,
      image: "./images/Dylan.png",
      score: 2.7,
      change: -.6,
      description: "Had to change username to escape dwarf lover allegations. Still a dwarf lover."
    },
    {
      name: `Jared`,
      image: "./images/Jared.png",
      score: 3.1,
      change: 0,
      description: "Has not been playing due to job search. Good luck pookie. I'm still waiting for that picture btw."
    },
    {
      name: `Eugene`,
      image: "./images/Eugene.png",
      score: 3.4,
      change: .3,
      description: "Brim lineups has been boosting his performance as well as the knowledge stat."
    },
    {
      name: `Hwang`,
      image: "./images/Hwang.png",
      score: 3.9,
      change: 0.2,
      description: "This guy is jumping up and down because he's finally not a silver card anymore."
    },
    {
      name: `Matt`,
      image: "./images/Matt.png",
      score: 4.8,
      change: -.6,
      description: "Tried to do a shahats sova cosplay. Did not work out too well."
    },
    {
      name: `Brian Ju`,
      image: "./images/Brian.png",
      score: 5.8,
      change: -.6,
      description: "Not being able to play consistently has affected performance."
    },
    {
      name: `Ron`,
      image: "./images/Ronen.png",
      score: 6.3,
      change: .2,
      description: "Is deadlock his only bag?"
    },
    {
      name: `Schatz "Mr Unclutchable"`,
      image: "./images/Shahats.png",
      score: 6.8,
      change: 0,
      description: "Getting ready for the 999 challenge. Nine dudes, nine finishes, nine minutes."
    },
    {
      name: `Noah`,
      image: "./images/Noah.png",
      score: 7.8,
      change: 0,
      description: "Great comms even while not playing."
    },
    {
      name: `Josh`,
      image: "./images/Josh.png",
      score: 8.1,
      change: 0,
      description: "Coming for hwangs number one league spot."
    },
     {
      name: `JBL`,
      image: "./images/Booms.png",
      score: 8.9,
      change: 0.9,
      description: "A certified troll in every game."
    },
    {
      name: `JL`,
      image: "./images/JL.png",
      score: 9.1,
      change: 0,
      description: "Embodiment of a chihuahua."
    },
    {
      name: `Jacob`,
      image: "./images/Jacob.png",
      score: 9.4,
      change: 0,
      description: "MIA"
    },
    {
      name: `Dank`,
      image: "./images/Dank.png",
      score: 9.5,
      change: 0,
      description: "Top 3000 merge tactics player in the world."
    },
    {
      name: `Junsoo`,
      image: "./images/Junsoo.png",
      score: "10.0",
      change: 0,
      description: "I'm keeping his animation up."
    },
  ]
};
// ...rest of your code...

function showCategory(category) {
  const container = document.getElementById("players-container");
  container.innerHTML = ""; // clear previous

  // Show MVP button only for valorant
  const mvpBtnContainer = document.getElementById('vs-btn-container');
  if (mvpBtnContainer) {
    mvpBtnContainer.style.display = (category === 'valorant') ? 'block' : 'none';
  }

  players[category].forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    // Dynamic arrow and color logic
    let changeHtml = "";
    if (player.change > 0) {
      changeHtml = `<span style="color:limegreen;font-weight:bold;">&#8593; +${player.change}</span>`;
    } else if (player.change < 0) {
      changeHtml = `<span style="color:#ff4d4d;font-weight:bold;">&#8595; ${player.change}</span>`;
    }

    card.innerHTML = `
      <img src="${player.image}" alt="${player.name}" />
      <div>
        <h3>${player.name}</h3>
        <p><strong>Ranking:</strong> ${player.score} ${changeHtml}</p>
        <p>${player.description}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

function showCutscene(callback, videoSrc) {
  const overlay = document.getElementById("cutscene-overlay");
  const video = document.getElementById("cutscene-video");
  overlay.style.display = "flex";
  overlay.style.opacity = "1";
  if (videoSrc) {
    video.src = videoSrc;
  } else {
    video.src = "./videos/0713.mp4"; // default
  }
  video.currentTime = 0;
  video.play();

  // Prevent user interaction
  overlay.onmousedown = overlay.onmouseup = overlay.onclick = (e) => e.stopPropagation();

  // Remove any previous event listener to avoid stacking
  video.onended = null;

  video.onended = () => {
    overlay.style.opacity = "0";
    setTimeout(() => {
      video.pause();
      overlay.style.display = "none";
      if (callback) callback();
    }, 500); // Wait for the fade-out transition
  };
}

function showMotmBox(show) {
  const motmBox = document.querySelector('.motm-box');
  if (motmBox) {
    if (show) {
      motmBox.style.display = 'flex';
      setTimeout(() => motmBox.classList.add('show'), 10);
    } else {
      motmBox.classList.remove('show');
      setTimeout(() => motmBox.style.display = 'none', 400);
    }
  }
}

function showBannedBtn(show) {
  const btn = document.getElementById('banned-btn-container');
  if (btn) btn.style.display = show ? 'block' : 'none';
}

function showBannedBox(show) {
  const bannedBox = document.querySelector('.banned-box');
  if (bannedBox) {
    if (show) {
      bannedBox.style.display = 'flex';
      setTimeout(() => bannedBox.classList.add('show'), 10);
    } else {
      bannedBox.classList.remove('show');
      setTimeout(() => bannedBox.style.display = 'none', 400);
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const vsBtn = document.getElementById('vs-btn');
  if (vsBtn) {
    vsBtn.onclick = () => {
      showCutscene(() => {
        showVsBox(true);
      }, "./videos/dylanvmike.mp4");
    };
  }
});

function showVsBox(show) {
  const vsBox = document.querySelector('.vs-box');
  const vsTitle = document.getElementById('vs-title');
  if (vsBox && vsTitle) {
    if (show) {
      vsTitle.style.display = 'block';
      vsBox.style.display = 'flex';
      setTimeout(() => vsBox.classList.add('show'), 10);
    } else {
      vsBox.classList.remove('show');
      setTimeout(() => {
        vsBox.style.display = 'none';
        vsTitle.style.display = 'none';
      }, 400);
    }
  }
}
