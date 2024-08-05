function calculateProfit() {
    // Kullanıcıdan girişleri al
    const cost = parseFloat(document.getElementById('cost').value);
    const profitPercentage = parseFloat(document.getElementById('profit').value);
    
    // Girişlerin geçerli olup olmadığını kontrol et
    if (isNaN(cost) || isNaN(profitPercentage) || cost <= 0 || profitPercentage < 0) {
        alert('Lütfen geçerli bir alış fiyatı ve kar oranı girin.');
        return;
    }

    // Kar oranını hesapla
    const profit = (cost * profitPercentage) / 100;
    const sellingPrice = cost + profit;

    // Sonucu ekranda göster
    document.getElementById('result').innerHTML = `
        <p>Alış Fiyatı: ${cost.toFixed(2)} TL</p>
        <p>Kar: ${profit.toFixed(2)} TL</p>
        <p>Satış Fiyatı: ${sellingPrice.toFixed(2)} TL</p>
    `;
}