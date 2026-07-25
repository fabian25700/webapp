/**
 * Kegel API Modul
 * Greift auf die Google Apps Script WebApp zu und berechnet Statistiken.
 */

const KEGEL_API_URL = "https://script.google.com/macros/s/AKfycbyFqMtch5u80UgCrRsT_m3jiKxE4xPVWgjz2Bslty9atN6zhuk_3kRJhXH8zp3SLnFx/exec";

/**
 * Lädt die Rohdaten aus dem Google Sheet
 * @returns {Promise<Object>}
 */
async function fetchKegelData() {
    try {
        const response = await fetch(KEGEL_API_URL);
        if (!response.ok) {
            throw new Error(`Fehler beim Laden der Daten: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Kegel API Fehler:", error);
        throw error;
    }
}

/**
 * Verarbeitet die Daten und liefert aufbereitete Statistiken für alle Kegler.
 * @returns {Promise<Array<Object>>}
 */
async function getKegelStats() {
    const data = await fetchKegelData();
    const { players, rows } = data;

    // Initialisiere Statistik-Objekt für jeden Spieler
    const statsMap = {};
    players.forEach(player => {
        statsMap[player] = {
            name: player,
            totalKallen: 0,
            totalParticipations: 0,
            avgKallen: 0,
            totalKings: 0
        };
    });

    // Zeilen auswerten
    rows.forEach(row => {
        // Kallen & Teilnahmen
        row.values.forEach((value, index) => {
            const playerName = players[index];
            if (value !== null && value !== undefined && !isNaN(value)) {
                statsMap[playerName].totalKallen += value;
                statsMap[playerName].totalParticipations += 1;
            }
        });

        // Kallenkönig auswerten
        if (row.king) {
            const kingName = row.king.trim();
            if (statsMap[kingName]) {
                statsMap[kingName].totalKings += 1;
            }
        }
    });

    // Durchschnitte berechnen und Array formatieren
    const statsArray = Object.values(statsMap).map(player => {
        const avg = player.totalParticipations > 0 
            ? (player.totalKallen / player.totalParticipations).toFixed(1) 
            : 0;
        
        return {
            ...player,
            avgKallen: parseFloat(avg)
        };
    });

    // Absteigend nach Gesamtkallen sortieren
    return statsArray.sort((a, b) => b.totalKallen - a.totalKallen);
}
