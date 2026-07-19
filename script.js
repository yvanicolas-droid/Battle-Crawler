document.addEventListener("DOMContentLoaded", () => {

  const liste = document.getElementById("liste-creatures");

  if (!liste || typeof creatures === "undefined") return;

  creatures.forEach(creature => {

    const carte = document.createElement("div");
    carte.className = "card";

    carte.innerHTML = `
      <h2>${creature.nom}</h2>
      <p><strong>ID :</strong> ${creature.id}</p>
      <p><strong>Élément :</strong> ${creature.element}</p>
      <p><strong>Biome :</strong> ${creature.biome}</p>
      <p><strong>Puissance :</strong> ${creature.puissance}</p>
      <p>${creature.description}</p>
    `;

    liste.appendChild(carte);

  });

});