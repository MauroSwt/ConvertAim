const multipliers = {
  valorant: {
    cs2: 3.18,
    fortnite: 10.23,
    minecraft: 0.07,
    paladins: 5.33
  },
  cs2: {
    valorant: 1 / 3.18,
    fortnite: 10.23 / 3.18,
    minecraft: 0.07 / 3.18,
    paladins: 5.33 / 3.18
  },
  fortnite: {
    valorant: 1 / 10.23,
    cs2: 3.18 / 10.23,
    minecraft: 0.07 / 10.23,
    paladins: 5.33 / 10.23
  },
  minecraft: {
    valorant: 1 / 0.07,
    cs2: 3.18 / 0.07,
    fortnite: 10.23 / 0.07,
    paladins: 5.33 / 0.07
  },
  paladins: {
    valorant: 1 / 5.33,
    cs2: 3.18 / 5.33,
    fortnite: 10.23 / 5.33,
    minecraft: 0.07 / 5.33
  }
};

function convertSensitivity() {
  const game = document.getElementById("game").value;
  const sens = parseFloat(document.getElementById("sensitivity").value);
  const resultsDiv = document.getElementById("results");

  if (isNaN(sens)) {
    resultsDiv.innerHTML = "<p>Por favor, insira uma sensibilidade válida.</p>";
    return;
  }

  const conversions = multipliers[game];
  let html = "<h3>Sensibilidade convertida:</h3><ul>";

  for (let [targetGame, multiplier] of Object.entries(conversions)) {
    const converted = (sens * multiplier).toFixed(4);
    html += `<li><strong>${targetGame.toUpperCase()}</strong>: ${converted}</li>`;
  }

  html += "</ul>";
  resultsDiv.innerHTML = html;
}
