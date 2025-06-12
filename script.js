const players = {
  league: [
    {
      name: "Faker",
      image: "https://example.com/faker.jpg",
      score: 98,
      description: "Legendary midlaner with unmatched consistency."
    },
    {
      name: "Chovy",
      image: "https://example.com/chovy.jpg",
      score: 95,
      description: "Mechanical god and macro genius."
    }
  ],
  valorant: [
    {
      name: "TenZ",
      image: "https://example.com/tenz.jpg",
      score: 97,
      description: "Insane aim and fluid movement."
    },
    {
      name: "Derke",
      image: "https://example.com/derke.jpg",
      score: 94,
      description: "Aggressive entry with big impact rounds."
    }
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
