const stickerDaten = [
    {
        stadt: "Kopenhagen",
        land: "Dänemark",
        naechte: 4,
        style: {
            // Sechseck via clip-path
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            // Dannebrog: Rotes Feld mit weißem Kreuz (vertikaler Balken bei 35%, horizontaler bei 50%)
            background: `
                linear-gradient(90deg, transparent 30%, #ffffff 30%, #ffffff 40%, transparent 40%),
                linear-gradient(0deg,  transparent 45%, #ffffff 45%, #ffffff 55%, transparent 55%),
                #C8102E
            `,
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "12px",
            textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            padding: "14px 10px",
            // Ø als Pseudo-Overlay – wird per position:relative + ::before gemacht,
            // hier als Unicode direkt im Text-Content ergänzt (siehe unten bei textContent)
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.4))"
        },
        // Sonderzeichen das im Sticker-Text ergänzt wird
        suffix: " Ø"
    },
    {
        stadt: "New York",
        land: "USA",
        naechte: 4,
        style: {
            // Apfel-Form via clip-path (Big Apple)
            clipPath: "polygon(30% 0%, 40% 5%, 55% 0%, 70% 5%, 85% 15%, 95% 30%, 100% 50%, 95% 70%, 85% 85%, 70% 95%, 50% 100%, 30% 95%, 15% 85%, 5% 70%, 0% 50%, 5% 30%, 15% 15%)",
            // US-Flagge: blaues Feld oben links + rote/weiße Streifen
            background: `
                linear-gradient(90deg,
                    #002868 0%,   #002868 38%,
                    transparent 38%
                ),
                repeating-linear-gradient(
                    0deg,
                    #BF0A30 0px, #BF0A30 13px,
                    #ffffff 13px, #ffffff 26px
                )
            `,
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "15px",
            textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.4))"
        }
    },
    {
        stadt: "AIDA",
        land: "International",
        naechte: 10,
        style: {
            // Parallelogramm (Schiffsrumpf-Silhouette)
            clipPath: "polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)",
            // Blau oben (60%), Weiß mitte (20%), Rot unten rechts (20%) – Kussmund-Schiffe
            background: `
                linear-gradient(
                    to bottom right,
                    #005DAA 0%,   #005DAA 58%,
                    #ffffff 58%,  #ffffff 78%,
                    #E2001A 78%,  #E2001A 100%
                )
            `,
            color: "#005DAA",
            fontWeight: "bold",
            fontSize: "17px",
            fontStyle: "italic",
            // Text sitzt auf dem weißen Streifen
            textShadow: "1px 1px 0 rgba(255,255,255,0.8), -1px -1px 0 rgba(255,255,255,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "18%",   // nach unten schieben in den weißen Streifen
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.3))"
        }
    },
    {
        stadt: "DUBAI",
        land: "VAE",
        naechte: 9,
        style: {
            // Briefmarken-Rand: weiß mit gezacktem Rand via SVG-ähnlichem repeating-gradient
            background: `
                /* Burj Khalifa Silhouette – rechte Seite, volle Höhe */
                /* Spitze (sehr schmal oben) */
                linear-gradient(to top, transparent 92%, #475569 92%, #475569 100%, transparent 100%),
                /* Oberer Turm-Abschnitt */
                linear-gradient(to top, transparent 75%, #475569 75%, #475569 92%, transparent 92%),
                /* Mittlerer Hauptkörper */
                linear-gradient(to top, transparent 30%, #475569 30%, #475569 75%, transparent 75%),
                /* Breiter Sockel */
                linear-gradient(to top, #475569 0%, #475569 30%, transparent 30%),
                /* Himmel */
                #87CEEB
            `,
            backgroundSize: `
                2px 100%,
                8px 100%,
                18px 100%,
                28px 100%,
                100% 100%
            `,
            backgroundPosition: `
                83% 0,
                82% 0,
                79% 0,
                76% 0,
                0 0
            `,
            backgroundRepeat: "no-repeat",
            // Gezackter Briefmarken-Rand via outline + border-Kombination
            borderRadius: "2px",
            border: "8px solid #ffffff",
            outline: "2px dashed #cccccc",
            outlineOffset: "-4px",
            // Text links, vertikal, D unten I oben
            color: "#1e293b",
            fontWeight: "900",
            fontSize: "14px",
            fontFamily: "Georgia, serif",
            textShadow: "1px 1px 0 #003580, -1px -1px 0 #003580, 1px -1px 0 #003580, -1px 1px 0 #003580",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            padding: "8px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.3))"
        }
    },
    {
        stadt: "Stockholm",
        land: "Schweden",
        naechte: 4,
        style: {
            background: "#006AA7",
            backgroundImage: `
                /* 3 Kronen – oben links, oben rechts, mittig links */
                /* Krone 1: oben links */
                linear-gradient(#FECC00, #FECC00) 15% 15% / 12px 3px,
                linear-gradient(#FECC00, #FECC00) 18% 10% / 2px 7px,
                linear-gradient(#FECC00, #FECC00) 13% 10% / 2px 4px,
                linear-gradient(#FECC00, #FECC00) 23% 10% / 2px 4px,
                /* Krone 2: oben rechts */
                linear-gradient(#FECC00, #FECC00) 65% 15% / 12px 3px,
                linear-gradient(#FECC00, #FECC00) 68% 10% / 2px 7px,
                linear-gradient(#FECC00, #FECC00) 63% 10% / 2px 4px,
                linear-gradient(#FECC00, #FECC00) 73% 10% / 2px 4px,
                /* Krone 3: unten links */
                linear-gradient(#FECC00, #FECC00) 15% 65% / 12px 3px,
                linear-gradient(#FECC00, #FECC00) 18% 60% / 2px 7px,
                linear-gradient(#FECC00, #FECC00) 13% 60% / 2px 4px,
                linear-gradient(#FECC00, #FECC00) 23% 60% / 2px 4px,
                /* Gelbes Kreuz */
                linear-gradient(90deg, transparent 28%, #FECC00 28%, #FECC00 38%, transparent 38%),
                linear-gradient(0deg,  transparent 43%, #FECC00 43%, #FECC00 57%, transparent 57%)
            `,
            backgroundRepeat: "no-repeat",
            border: "5px double #FECC00",
            borderRadius: "14px",
            color: "#FECC00",
            fontWeight: "800",
            fontSize: "13px",
            textShadow: "1px 1px 0 #000",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            padding: "10px 12px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.3))"
        }
    },
    {
        stadt: "Le Morne Brabant",
        land: "Mauritius",
        naechte: 5,
        style: {
            // Berg-Silhouette: breite Basis, Spitze leicht links der Mitte
            clipPath: "polygon(5% 100%, 0% 85%, 8% 70%, 15% 55%, 22% 40%, 32% 28%, 42% 18%, 48% 8%, 53% 4%, 58% 8%, 62% 15%, 68% 25%, 75% 38%, 83% 52%, 90% 65%, 96% 78%, 100% 90%, 100% 100%)",
            // 4 Landesfarben: Rot 25%, Blau 25%, Gelb 25%, Grün 25%
            background: "linear-gradient(180deg, #EA2839 0%, #EA2839 25%, #1A206D 25%, #1A206D 50%, #FFD500 50%, #FFD500 75%, #00A551 75%, #00A551 100%)",
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "11px",
            textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: "8px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.4))"
        }
    }
];
