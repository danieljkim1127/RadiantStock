const players = {
  league: [
    {
      name: `Hwang`,
      image: "images/hwang.JPG",
      score: 1,
      change: 0,
      description: "Thanos Incarnate. Everyone has been traumatized by this man at some point. Always ban vayne. Needs to grow taller."
    },
    {
      name: `Josh - Dank's biggest hater`,
      image: "images/josh.JPG",
      score: 2.2,
      change: 0,
      description: "Consistent high performer, great macro. Enough with the dick riding, lemme supp you alistar now."
    },
    {
      name: `Noah`,
      image: "images/noah.PNG",
      score: 2.4,
      change: 0,
      description: "Great macro, great leader, but does not carry the presence one would hope for in their carry."
    },
    {
      name: `Croissant`,
      image: "images/croissant.webp",
      score: 2.6,
      change: 0,
      description: "Can fill many roles well and consistently wins."
    },
    {
      name: `Dank`,
      image: "images/dank.jpeg",
      score: 3.4,
      change: 0,
      description: "Can fill many roles but has yet to go crazy. Negative outlook on dankstock due to his biggest hater. Currently on fraud watch."
    },
    {
      name: `Gino "Ubuditcher" Kim`,
      image: "images/gino.jpg",
      score: 3.7,
      change: 0,
      description: "New challenger. Beat hwang, wrecked eugene. Top/Jungle main. GinoCoin to the moon?."
    },
    {
      name: `JL`,
      image: "images/jl.JPG",
      score: 4.1,
      change: 0,
      description: "A Lee Sin jungle one trick. 'His Lee Sin is not that good' - Josh, Croissant. Consistently loses to Croissant's jungle. "
    },
    {
      name: `Matt`,
      image: "images/matt.JPG",
      score: 4.7,
      change: 0,
      description: "Solid team player, mainly mid, complains his leblanc always gets banned."
    },
    {
      name: `Jared`,
      image: "images/jared.JPG",
      score: 4.8,
      change: 0,
      description: "Thinks hes the main character. Ur not that guy pal."
    },
    {
      name: `JBL`,
      image: "images/boomer.jpeg",
      score: 5.1,
      change: 0,
      description: "Plays off meta picks and strats, but he makes it work. Undeniable pain in the ass."
    },
    {
      name: `Eugene`,
      image: "images/eugene.JPG",
      score: 6.2,
      change: 0,
      description: "NAs best trundle. Stop jerkin."
    },
    {
      name: `Junsoo "Gubi Goobers" Lee`,
      image: "images/junsoo.jpeg",
      score: 6.7,
      change: 0,
      description: "Infamous for his baron smite and blaming the sejuani character model. Negatively viewed by many, but highly undervalued."
    },
    {
      name: `Schatz`,
      image: "images/schatz.PNG",
      score: 7.1,
      change: 0,
      description: "So far only seen in the support role. He's a good boy."
    },
    {
      name: `Ethan`,
      image: "images/ethan.jpg",
      score: 8.2,
      change: 0,
      description: "New to the game, support main. Stick to support."
    },
    {
      name: `Ron`,
      image: "images/ron.JPG",
      score: 8.4,
      change: 0,
      description: "Ban Yuumi and Pyke. Tf he gunna do?"
    },
  ],
  valorant: [
    {
      name: `?`,
      image: "images/junsooblack.png",
      score: "?",
      change: 0,
      description: "???"
    },
    {
      name: `Ethan`,
      image: "images/ethan.jpg",
      score: 1.4,
      change: 0,
      description: "Did not play but still is current best pick."
    },
    {
      name: `JW`,
      image: "images/jw.PNG",
      score: 1.7,
      change: -.1,
      description: "Did not play up to standards."
    },
    {
      name: `Dylan`,
      image: "images/dylan.PNG",
      score: 2.1,
      change: 0,
      description: "Came on to play but everyone left."
    },
    {
      name: `Eugene`,
      image: "images/eugene.JPG",
      score: 2.5,
      change: -0.1,
      description: "Solid performance but got placed plat 2."
    },
    {
      name: `Michael`,
      image: "images/mike.jpeg",
      score: 3.4,
      change: -.1,
      description: "More worried about pranking than his upcoming legacy match with dylan."
    },
    {
      name: `Jared`,
      image: "images/jared.JPG",
      score: 3.7,
      change: 1,
      description: "A crazy performance outta him and almost had three aces. Definitely underrated at this ranking, but would like to see more games like this before moving him up."
    },
    {
      name: `Hwang`,
      image: "images/hwang.JPG",
      score: 4.5,
      change: 0,
      description: "He did alright."
    },
    {
      name: `Brian Ju`,
      image: "images/brianju.PNG",
      score: 5.2,
      change: -0.1,
      description: "Busy moving and taking pictures of lebron james"
    },
    {
      name: `Matt`,
      image: "images/matt.JPG",
      score: 5.4,
      change: .1,
      description: "Finally got a win. Still underrated but would like to see more wins before moving him up."
    },
    {
      name: `Noah`,
      image: "images/noah.PNG",
      score: 6.7,
      change: -.2,
      description: "Only redeeming factor besides coms and being a role player is his winrate. And he lost most recently."
    },
    {
      name: `Ron`,
      image: "images/ron.JPG",
      score: 6.9,
      change: 1.3,
      description: "Has been consitently performing well. If this continues he will ikely be moved further up."
    },
    {
      name: `Schatz "Mr Unclutchable"`,
      image: "images/schatz.PNG",
      score: 7.6,
      change: 0,
      description: "His good performance end runs here (is that last part a tiktok reference?)."
    },
    {
      name: `JL`,
      image: "images/jl.JPG",
      score: 7.8,
      change: 1.8,
      description: "Performance of a lifetime. Would like to see more games like this before justifying moving him up further. Might be a one time thing."
    },
    {
      name: `Josh`,
      image: "images/josh.JPG",
      score: 9.1,
      change: 0,
      description: "Busy setting up dinner, poker, and a night out with the boys. Definitely still has the capacity to let me supp him alistar."
    },
    {
      name: `Jacob`,
      image: "images/jacob.JPG",
      score: 9.4,
      change: 0,
      description: "Currently in his 6 week training for work. Needs to start getting his priorities straight and get in a 6 week training for val instead."
    },
    {
      name: `JBL`,
      image: "images/boomer.jpeg",
      score: 9.8,
      change: 0,
      description: "Mattalytics suggests that his seemingly troll gamestyle is just troll."
    },
    {
      name: `Dank`,
      image: "images/dank.jpeg",
      score: 9.9,
      change: -.4,
      description: "Did not play well do to being sick. Gimme another chance pls"
    },
  ]
};

function showCategory(category) {
  const container = document.getElementById("players-container");
  container.innerHTML = ""; // clear previous

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

function showCutscene(callback) {
  const overlay = document.getElementById("cutscene-overlay");
  const video = document.getElementById("cutscene-video");
  overlay.style.display = "flex";
  overlay.style.opacity = "1";
  video.currentTime = 0;
  video.play();
  // Prevent user interaction
  overlay.onmousedown = overlay.onmouseup = overlay.onclick = (e) => e.stopPropagation();
  setTimeout(() => {
    overlay.style.opacity = "0";
    setTimeout(() => {
      video.pause();
      overlay.style.display = "none";
      if (callback) callback();
    }, 500); // Wait for the fade-out transition
  }, 4000); // 4 seconds
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