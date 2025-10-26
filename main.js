class YogaCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const image = document.createElement('img');
    image.setAttribute('src', this.getAttribute('image'));
    image.setAttribute('alt', this.getAttribute('title'));

    const title = document.createElement('h3');
    title.textContent = this.getAttribute('title');

    const style = document.createElement('style');
    style.textContent = `
      .card {
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        text-align: center;
        padding: 20px;
        display: flex;
        flex-direction: column;
      }
      .card img {
        width: 100%;
        height: 200px; /* Adjust as needed */
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 15px;
      }
    `;

    shadow.appendChild(style);
    card.appendChild(image);
    card.appendChild(title);
    shadow.appendChild(card);
  }
}

customElements.define('yoga-card', YogaCard);
