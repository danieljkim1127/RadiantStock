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
      name: "JW",
      image: "images/Jw.jpg",
      score: 1,
      description: "Usually frags a lot, great aim, consistent, solid game sense. Great first pick to fill out duelist role. No dick riding."
    },
    {
      name: "Dylan",
      image: "images/dylan.PNG",
      score: 2,
      description: "Very good aim and very consistent. Great pick for duelist that can actually frag."
    },
    {
      name: "Ethan",
      image: "images/ethan.jpg",
      score: 2.2,
      description: "Good aim, great game sense, great flex player and can lead shittier teammates, but recently has not been fragging up to expectations."
    },
    {
      name: "Hwang",
      image: "images/hwang.JPG",
      score: 3,
      description: "Great aim, good game sense, solid duelist. Either stomps or does okay."
    },
    {
      name: "Michael",
      image: "images/mike.jpeg",
      score: 3.3,
      description: "Great aim and good game sense, but has not played in awhile. Limited agent pool."
    },
    {
      name: "Eugene",
      image: "images/eugene.JPG",
      score: 4,
      description: "Good aim. Walmart Dylan."
    },
    {
      name: "Matt",
      image: "images/matt.JPG",
      score: 4.2,
      description: "Solid aim, great game sense, and a playmaker, but needs good support to execute. Solid flex player."
    },
    {
      name: "Jared",
      image: "images/jared.JPG",
      score: 4.7,
      description: "Good player, but definitely barks more than he bites. Lowkey zesty."
    },
    {
      name: "Brian Ju",
      image: "images/brianju.PNG",
      score: 5.1,
      description: "All aim no brain. Fills initiator role."
    },
    {
      name: "Schatz",
      image: "images/schatz.PNG",
      score: 6.2,
      description: "Great sova player. Has recently been doing very well, but probably overvalued at the moment."
    },
    {
      name: "Noah",
      image: "images/noah.PNG",
      score: 7.6,
      description: "A true role player. Plays what the team needs and has great communication. A misfortune that his aim is ass."
    },
    {
      name: "JBL",
      image: "images/boomer.jpeg",
      score: 7.8,
      description: "Plays off meta picks and strats. Lowkey troll."
    },
    {
      name: "Ron",
      image: "images/ron.JPG",
      score: 8.6,
      description: "Used to be good. Used to."
    },
    {
      name: "Jacob",
      image: "images/jacob.JPG",
      score: 8.8,
      description: "I aint never seen this guy play but everyone talks like he's ass."
    },
    {
      name: "Dank",
      image: "images/dank.jpeg",
      score: 9.5,
      description: "Still waiting for viper buffs. Only plays when 10 man needs to be filled."
    },
    {
      name: "JL",
      image: "images/jl.JPG",
      score: 9.8,
      description: "Recently been given wins as charity due to his brutal loss streak. This guy is straight ass."
    },
    {
      name: "Josh",
      image: "images/josh.JPG",
      score: null,
      description: "I haven't seen this guy play yet but wanted to include him in this list so he doesn't feel left out. Lemme supp you alistar now."
    },
  ]
};

function showCategory(category) {
  const container = document.getElementById("players-container");
  container.innerHTML = ""; // clear previous

  players[category].forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    card.innerHTML = `
      <img src="${player.image}" alt="${player.name}" />
      <div>
        <h3>${player.name}</h3>
        <p><strong>Ranking:</strong> ${player.score}</p>
        <p>${player.description}</p>
      </div>
    `;

    container.appendChild(card);
  });
}
