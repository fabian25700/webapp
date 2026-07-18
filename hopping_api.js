/**
 * Groundhopping WebApp API Backend (GitHub / Extern)
 * Kommuniziert direkt mit dem Google Apps Script Web-App-Interface.
 */

// Deine aktuelle API-URL als feste Datenquelle
const EXTERNAL_API_URL = "https://script.google.com/macros/s/AKfycbyHuDbvlV4OAmqvfXdqTfBQwi_3Lxqc0AW3ng-i_8vJWGFVXKHmnsdk72UcChaXJUV9/exec";

/**
 * Ruft die Daten vom Google Sheet über das Apps Script Interface ab
 * @returns {Promise<Array>} Ein Promise, das das Array mit den Spieldaten zurückgibt
 */
async function getHoppingData() {
  try {
    const response = await fetch(EXTERNAL_API_URL);
    if (!response.ok) {
      throw new Error(`Netzwerk-Fehler beim Abruf: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Falls die API die Daten verschachtelt zurückgibt
    if (data && !Array.isArray(data) && data.data) {
      return data.data;
    }
    
    if (!Array.isArray(data)) {
      return [];
    }
    
    return data;
  } catch (e) {
    console.error("API Fetch Error:", e);
    throw new Error("Fehler beim Abrufen der Groundhopping-Daten: " + e.message);
  }
}

/**
 * Sendet neue oder geänderte Spieldaten an das Google Sheet
 * @param {Object} payload - Die Aktions-Parameter (z.B. { action: "add", data: {...} })
 * @returns {Promise<Object>} Antwort des Google Sheets Backends
 */
async function sendHoppingData(payload) {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(payload)
    };
    
    const response = await fetch(EXTERNAL_API_URL, options);
    if (!response.ok) {
      throw new Error(`Netzwerk-Fehler beim Senden: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (e) {
    console.error("API Send Error:", e);
    throw new Error("Fehler beim Senden an die API: " + e.message);
  }
}
