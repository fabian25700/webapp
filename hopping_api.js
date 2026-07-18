/**
 * Groundhopping WebApp API Backend
 * Ruft die Daten von der externen Apps Script API ab und reicht sie an das Frontend weiter.
 */

// Die neue API-URL als zentrale Datenquelle
const EXTERNAL_API_URL = "https://script.google.com/macros/s/AKfycbzDJXXO1jN_hQojSJAciBgPJ1WFFO9cXQ3iYvmJ6bKSfMzSRy1wq3Q2u2em1Wz9W-sf/exec";

/**
 * Stellt die HTML-Oberfläche (das Dashboard) bereit
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('hopping')
      .setTitle('Groundhopping Analytics')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Holt die Rohdaten von der externen API und bereitet sie für das Frontend vor
 */
function getHoppingData() {
  try {
    // HTTP-Anfrage an die neue WebApp-API senden
    var response = UrlFetchApp.fetch(EXTERNAL_API_URL);
    var jsonText = response.getContentText();
    
    // Die erhaltenen Daten parsen
    var data = JSON.parse(jsonText);
    
    // Falls die API die Daten in einer verschachtelten Struktur zurückgibt (z.B. { data: [...] })
    if (data && !Array.isArray(data) && data.data) {
      data = data.data;
    }
    
    // Validierung: Falls die Daten leer oder fehlerhaft sind, leeres Array zurückgeben
    if (!Array.isArray(data)) {
      return [];
    }
    
    return data;
  } catch (e) {
    throw new Error("Fehler beim Abrufen der externen API-Daten: " + e.message);
  }
}

/**
 * Sendet neue Spieldaten an die externe API zum Ergänzen oder Überschreiben
 * @param {Object} payload - Das Objekt mit den Parametern (z.B. { action: "add", data: {...} })
 */
function sendHoppingData(payload) {
  try {
    var options = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };
    
    var response = UrlFetchApp.fetch(EXTERNAL_API_URL, options);
    var jsonText = response.getContentText();
    
    return JSON.parse(jsonText);
  } catch (e) {
    throw new Error("Fehler beim Senden der Daten an die API: " + e.message);
  }
}
