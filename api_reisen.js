// Zentrale Konfiguration deiner Google Sheets API – JETZT AKTUALISIERT
const BASE_API_URL = "https://script.google.com/macros/s/AKfycbD9tGeEBuQg9R9ru2_IhCcEIYT35MWT9oEyfaUFXgjJs_P1pRsvRZKaqUDoNWjLSzJ/exec";

/**
 * Holt alle Daten aus einem bestimmten Tabellenblatt als JSON-Array.
 */
async function fetchDataFromSheet(sheetName) {
    try {
        const urlWithParam = `${BASE_API_URL}?sheet=${encodeURIComponent(sheetName)}`;
        
        const response = await fetch(urlWithParam, {
            method: "GET",
            mode: "cors",
            redirect: "follow"
        });
        
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
 */
async function addDataToSheet(sheetName, dataObject) {
    try {
        const response = await fetch(BASE_API_URL, {
            method: "POST",
            mode: "cors",
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
