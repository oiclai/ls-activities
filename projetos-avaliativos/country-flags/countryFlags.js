const countries = await fetch('https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/countries.json').then(res => res.json());
const files = await fetch('https://api.github.com/repos/hampusborgos/country-flags/contents/svg').then(res => res.json());

  const flagsContainer = document.getElementById('flags');

  files
    .filter(file => file.name.endsWith('.svg'))
    .forEach(file => {
      const countryCode = file.name.replace('.svg', '').toUpperCase();
      flagsContainer.innerHTML += `
        <div class="country">
          <div><img src="${file.download_url}" alt="Bandeira de ${countries[countryCode]}"></div>
          <p>${countries[countryCode]}</p>
        </div>
      `;
    });
