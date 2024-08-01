// Function to fetch a random Pokémon card from the API
async function fetchPokemonCard() {
    const response = await fetch('https://api.pokemontcg.io/v2/cards?q=set.id:base1');
    const data = await response.json();
    const cards = data.data;
    
    // Select a random card from the fetched cards
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    
    return randomCard;
}

// Function to display the Pokémon card on the web page
async function displayPokemonCard() {
    const card = await fetchPokemonCard();
    
    const cardContainer = document.getElementById('card-container');
    console.log(card); // Debugging: Check the card object structure
    
    cardContainer.innerHTML = `
        <div class="card">
            <h2>${card.name}</h2>
            <img src="${card.images.large}" alt="${card.name}">
            <p>HP: ${card.hp || 'N/A'}</p>
            <p>Type: ${card.types ? card.types.join(', ') : 'Unknown'}</p>
        </div>
    `;

    changeBackgroundColor(); // Change the background color on each click
}

// Function to change the background color randomly
function changeBackgroundColor() {
    const colors = ['#e0f7fa', '#ffe0b2', '#dcedc8', '#f8bbd0', '#bbdefb', '#fff9c4', '#c8e6c9', '#ffccbc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Event listener for the "Generate Pokémon Card" button
document.getElementById('generate-btn').addEventListener('click', displayPokemonCard);

// Initial card display
displayPokemonCard();
