
function zamenitObrazek() {
    // Najdeme obrázek a vstupní pole
    let obrazek = document.getElementById('mojeFoto');
    let novyOdkaz = document.getElementById('novyOdkaz').value;
    let nazevObrazku = document.getElementById('nazevObrazku').value;
    
    // Ověříme, zda bylo zadáno URL
    if (novyOdkaz && nazevObrazku) {
        // Změníme src obrázku na nový odkaz
        obrazek.src = novyOdkaz;

        // Přidáme nový název do seznamu
        let seznam = document.getElementById('seznamNazvu');
        let novaPolozka = document.createElement('li');
        novaPolozka.textContent = nazevObrazku;
        seznam.appendChild(novaPolozka);

        // Vyprázdníme pole pro zadání URL a názvu pro další obrázek
        document.getElementById('novyOdkaz').value = '';
        document.getElementById('nazevObrazku').value = '';
    } else {
        // Pokud chybí URL nebo název, upozorníme uživatele
        alert('Prosím, zadejte platný odkaz na obrázek a jeho název.');
    }
}

g


