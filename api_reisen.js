// Zentrale Konfiguration deiner Google Sheets API
const BASE_API_URL = "https://script.google.com/macros/s/AKfycbxROtN2Yjvta65xVCEoGRccBZzBWd2wadGdEsMpY6juBAWoVb9-C3ARaFX3S1vQeFRc/exec";

/**
 * Holt alle Daten aus einem bestimmten Tabellenblatt als JSON-Array.
 * @param {string} sheetName - Der exakte Name des Tabellenblatts (z.B. "Länder", "Joggen")
 * @returns {Promise<Array>} Ein Array aus Objekten, bei dem die Keys den Spaltennamen entsprechen.
 */
async function fetchDataFromSheet(sheetName) {
    try {
        const response = await fetch(`${BASE_API_URL}?sheet=${encodeURIComponent(sheetName)}`);
        if (!response.ok) {
            throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Fehler beim Laden des Blatts "${sheetName}":`, error);
        return [];
    }
}

/**
 * Fügt eine neue Zeile in ein bestimmtes Tabellenblatt ein.
 * @param {string} sheetName - Der exakte Name des Tabellenblatts (z.B. "Joggen")
 * @param {Object} dataObject - Ein Objekt mit den Daten, z.B. { "Datum": "2026-07-07", "km": 5 }
 * @returns {Promise<Object>} Das Ergebnis der API mit { success: true } oder einer Fehlermeldung.
 */
async function addDataToSheet(sheetName, dataObject) {
    try {
        const response = await fetch(BASE_API_URL, {
            method: "POST",
            redirect: "follow",
            body: JSON.stringify({
                sheet: sheetName,
                data: dataObject
            })
        });
        if (!response.ok) {
            throw new Error(`HTTP-Fehler! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Fehler beim Schreiben in das Blatt "${sheetName}":`, error);
        return { success: false, error: error.toString() };
    }
}
