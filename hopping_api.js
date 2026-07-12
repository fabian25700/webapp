/**
 * Groundhopping WebApp API Backend
 * Ruft die Daten von der externen Apps Script API ab und reicht sie an das Frontend weiter.
 */

// Die von dir bereitgestellte API-URL als Datenquelle
const EXTERNAL_API_URL = "https://script.google.com/macros/s/AKfycbwwOeihv_1ipmX9eSoTFz8DJkh-k-qof91JgTZcMZbrji3Vf8D6AY3mO3a3vn33bANU/exec";

function doGet() {
  return HtmlService.createHtmlOutputFromFile('hopping')
      .setTitle('Groundhopping Analytics')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Holt die Daten von der externen API
 */
function getHoppingData() {
  try {
    // HTTP-Anfrage an die externe API senden
    var response = UrlFetchApp.fetch(EXTERNAL_API_URL);
    var jsonText = response.getContentText();
    
    // Die erhaltenen Daten parsen und direkt an das Frontend zurückgeben
    var data = JSON.parse(jsonText);
    return data;
  } catch (e) {
    throw new Error("Fehler beim Abrufen der externen API-Daten: " + e.message);
  }
}
