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
      name: `Ethan`,
      image: "images/ethan.jpg",
      score: 1.4,
      change: 0.9,
      description: "Matt analytics shows he has great stats and an extremely high winrate. On top of making shitters play better and a large agent pool, he is probably the right choice for first pick."
    },
    {
      name: `JW`,
      image: "images/jw.PNG",
      score: 1.6,
      change: 1.1,
      description: "Rusty off, busty on. Everyone can't stop looking when he flashes. Finally coming back to form."
    },
    {
      name: `Dylan`,
      image: "images/dylan.PNG",
      score: 2.1,
      change: -.5,
      description: "Also has an extremely high winrate, but has not been playing as much. The one game he did play did not perform up to expectations."
    },
    {
      name: `Eugene`,
      image: "images/eugene.JPG",
      score: 2.4,
      change: -.3,
      description: "Has been performing extremely well and consistently. Might even be underrated at this rating."
    },
    {
      name: `Michael`,
      image: "images/mike.jpeg",
      score: 3.3,
      change: 0,
      description: "Has this guy been playing? I would still like to see a Mike v Dylan best of 3 match. One game aint enuff to settle the beef."
    },
    {
      name: `Hwang`,
      image: "images/hwang.JPG",
      score: 4.5,
      change: -1,
      description: "I swear this guy is gettin worse. It's been ages since I've seen a good game outta him. Does he have trouble reaching the keyboard?"
    },
    {
      name: `Jared`,
      image: "images/jared.JPG",
      score: 4.7,
      change: 0,
      description: "Finally came back home with a vengeance but did not do well the one game he played. Most likely underrated for current rating."
    },
    {
      name: `Brian Ju`,
      image: "images/brianju.PNG",
      score: 5.1,
      change: -0.2,
      description: "Has not been fragging as much as he should."
    },
    {
      name: `Matt`,
      image: "images/matt.JPG",
      score: 5.5,
      change: -1.4,
      description: "His own anayltics reveal that he has good stats, but an abysmal winrate. Undervalued at this rating, but expected to go up once winrate starts to improve."
    },
    {
      name: `Noah`,
      image: "images/noah.PNG",
      score: 6.5,
      change: 1,
      description: "His stats are horrible but Mattalytics shows he has a very high winrate, probably due to him knowing he's a role player."
    },
    {
      name: `Schatz "Mr Unclutchable"`,
      image: "images/schatz.PNG",
      score: 7.1,
      change: -1,
      description: "His good performance end runs here (is that last part a tiktok reference?)."
    },
    {
      name: `Ron`,
      image: "images/ron.JPG",
      score: 7.6,
      change: 1,
      description: "Seems to be improving. Recently ragebaited matt with his genius first round clove strat."
    },
    {
      name: `Josh`,
      image: "images/josh.JPG",
      score: 9.1,
      change: 0,
      description: "Still waiting for the day he will lemme supp him alistar."
    },
    {
      name: `Jacob`,
      image: "images/jacob.JPG",
      score: 9.4,
      change: 0,
      description: "Currently in his 6 week training for work. Needs to start getting his priorities straight and get in a 6 week training for val instead."
    },
    {
      name: `Dank`,
      image: "images/dank.jpeg",
      score: 9.5,
      change: 0,
      description: "Finally back from swiss. No one asked for anything."
    },
    {
      name: `JL`,
      image: "images/jl.JPG",
      score: 9.6,
      change: 0.4,
      description: "Has this guy ever heard of the range?"
    },
    {
      name: `JBL`,
      image: "images/boomer.jpeg",
      score: 9.8,
      change: -1.4,
      description: "Mattalytics suggests that his seemingly troll gamestyle is just troll."
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
