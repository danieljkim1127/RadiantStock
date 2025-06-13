const players = {
  league: [
    {
      name: "Coming Soon",
      image: "https://example.com/faker.jpg",
      score: 5318008,
      description: "Coming Soon"
    }
  ],
  valorant: [
    {
      name: `JW`,
      image: "images/Jw.jpg",
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
      name: `Dylan`,
      image: "images/dylan.PNG",
      score: 2.1,
      change: 0,
      description: "Very good aim and very consistent. Great pick for duelist that can actually frag."
    },
    {
      name: `Hwang`,
      image: "images/hwang.JPG",
      score: 3,
      change: 0,
      description: "Great aim, good game sense, solid duelist. Either stomps or does okay. Needs to grow taller."
    },
    {
      name: `Michael`,
      image: "images/mike.jpeg",
      score: 3.3,
      change: 0,
      description: "Great aim and good game sense, but has not played in awhile. Limited agent pool."
    },
    {
      name: `Eugene`,
      image: "images/eugene.JPG",
      score: 4,
      change: 0,
      description: "Good aim. Walmart Dylan. Needs to be arrested."
    },
    {
      name: `Matt`,
      image: "images/matt.JPG",
      score: 4.2,
      change: 0,
      description: "Solid aim, great game sense, and a playmaker, but needs good support to execute. Solid flex player."
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
      score: 7.8,
      change: 0,
      description: "Plays off meta picks and strats. Lowkey troll."
    },
    {
      name: `Ron`,
      image: "images/ron.JPG",
      score: 8.6,
      change: 0,
      description: "Used to be good. Used to."
    },
    {
      name: `Josh`,
      image: "images/josh.JPG",
      score: 8.9,
      change: 0,
      description: "I haven't seen this guy play yet but wanted to include him in this list so he doesn't feel left out. Lemme supp you alistar now."
    },
    {
      name: `Dank`,
      image: "images/dank.jpeg",
      score: 9.2,
      change: 0.3,
      description: "Still waiting for viper buffs. Only plays when 10 man needs to be filled."
    },
    {
      name: `JL`,
      image: "images/jl.JPG",
      score: 9.6,
      change: 0.1,
      description: "Recently been given wins as charity due to his brutal loss streak. This guy is straight ass."
    },
    {
      name: `Jacob`,
      image: "images/jacob.JPG",
      score: 9.8,
      change: -1,
      description: "Thank god he's at least tall. Thank god."
    },
  ]
};

function showCategory(category) {
  const container = document.getElementById("players-container");
  container.innerHTML = ""; // clear previous

  players[category].forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    // Arrow logic
    let changeHtml = "";
    if (player.change > 0) {
      changeHtml = `<span style="color:limegreen;font-weight:bold;">&#8593; +0.3</span>`;
    } else if (player.change < 0) {
      changeHtml = `<span style="color:#ff4d4d;font-weight:bold;">&#8595; -0.3</span>`;
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
