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
      name: `JW`,
      image: "images/jw.PNG",
      score: 1.5,
      change: -.5,
      description: "Usually frags a lot, great aim, consistent, solid game sense. Great first pick to fill out duelist role. Has not played in a minute due to studying."
    },
    {
      name: `Ethan`,
      image: "images/ethan.jpg",
      score: 1.8,
      change: 0.3,
      description: "Good aim, great game sense, great flex player and can lead shittier teammates. Recently came back to form."
    },
    {
      name: `Hwang`,
      image: "images/hwang.JPG",
      score: 2,
      change: 1,
      description: "Great aim, good game sense, solid duelist. Either stomps or does okay. Needs to grow taller."
    },
    {
      name: `Michael`,
      image: "images/mike.jpeg",
      score: 2.3,
      change: 1,
      description: "Great aim and good game sense, but has not played in awhile. Limited agent pool."
    },
    {
      name: `Dylan`,
      image: "images/dylan.PNG",
      score: 3.1,
      change: -1,
      description: "Very good aim and very consistent. Great pick for duelist that can actually frag."
    },
    {
      name: `Matt`,
      image: "images/matt.JPG",
      score: 4.2,
      change: 0,
      description: "Solid aim, great game sense, and a playmaker, but needs good support to execute. Solid flex player."
    },
    {
      name: `Eugene`,
      image: "images/eugene.JPG",
      score: 4.4,
      change: -.4,
      description: "Good aim. Walmart Dylan. Needs to be arrested."
    },
    {
      name: `Jared`,
      image: "images/jared.JPG",
      score: 4.7,
      change: 0,
      description: "Good player, but definitely barks more than he bites. Lowkey zesty."
    },
    {
      name: `Brian Ju`,
      image: "images/brianju.PNG",
      score: 5.1,
      change: 0,
      description: "All aim no brain. Fills initiator role."
    },
    {
      name: `Schatz "Mr Unclutchable"`,
      image: "images/schatz.PNG",
      score: 6.2,
      change: 0,
      description: "Great sova player. Has recently been doing very well, but probably overvalued at the moment."
    },
    {
      name: `Noah`,
      image: "images/noah.PNG",
      score: 7.6,
      change: 0,
      description: "A true role player. Plays what the team needs and has great communication. A misfortune that his aim is ass."
    },
    {
      name: `JBL`,
      image: "images/boomer.jpeg",
      score: 8.1,
      change: -0.3,
      description: "Plays off meta picks and strats. Lowkey troll."
    },
    {
      name: `Josh`,
      image: "images/josh.JPG",
      score: 9.1,
      change: -0.2,
      description: "I haven't seen this guy play yet but wanted to include him in this list so he doesn't feel left out. Lemme supp you alistar now."
    },
    {
      name: `Ron`,
      image: "images/ron.JPG",
      score: 9.20,
      change: -0.6,
      description: "Used to be good. Used to."
    },
    {
      name: `Dank`,
      image: "images/dank.jpeg",
      score: 9.5,
      change: -0.3,
      description: "Still waiting for viper buffs. Only plays when 10 man needs to be filled."
    },
    {
      name: `Jacob`,
      image: "images/jacob.JPG",
      score: 9.6,
      change: +0.2,
      description: "He posted the black square twice. How good can he be?"
    },
    {
      name: `JL`,
      image: "images/jl.JPG",
      score: 10,
      change: -0.4,
      description: "Recently been given wins as charity due to his brutal loss streak. This guy is straight ass."
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
