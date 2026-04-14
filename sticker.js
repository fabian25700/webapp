const stickerDaten = [
    {
        stadt: "Kopenhagen",
        land: "Dänemark",
        naechte: 4,
        style: {
            // 1. Einheitliche Größe
            width: "250px",
            height: "150px",
            boxSizing: "border-box",
            // Sechseck via clip-path
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            // Dannebrog
            background: `
                linear-gradient(90deg, transparent 30%, #ffffff 30%, #ffffff 40%, transparent 40%),
                linear-gradient(0deg,   transparent 45%, #ffffff 45%, #ffffff 55%, transparent 55%),
                #C8102E
            `,
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "18px",
            textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
            display: "flex",
            // 2. Text zentriert, suffix wird im content übergeben
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.4))",
            overflow: "hidden"
        },
        // Sonderzeichen im Text
        suffix: " Ø"
    },
    {
        stadt: "New York",
        land: "USA",
        naechte: 4,
        style: {
            // 1. Einheitliche Größe
            width: "250px",
            height: "150px",
            boxSizing: "border-box",
            // Apfel-Form
            clipPath: "polygon(30% 0%, 40% 5%, 55% 0%, 70% 5%, 85% 15%, 95% 30%, 100% 50%, 95% 70%, 85% 85%, 70% 95%, 50% 100%, 30% 95%, 15% 85%, 5% 70%, 0% 50%, 5% 30%, 15% 15%)",
            // US-Flagge
            background: `
                linear-gradient(90deg, #002868 0%, #002868 45%, transparent 45%),
                repeating-linear-gradient(0deg, #BF0A30 0px, #BF0A30 13px, #ffffff 13px, #ffffff 26px)
            `,
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "22px",
            textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.4))",
            overflow: "hidden"
        }
    },
    {
        stadt: "AIDA",
        land: "International",
        naechte: 10,
        style: {
            // 1. Einheitliche Größe
            width: "250px",
            height: "150px",
            boxSizing: "border-box",
            // 6. Form: dynamisches, schräges Parallelogramm
            clipPath: "polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)",
            // 6. Design: Blau (oben), Weiß (unten), Rot (unten rechts)
            background: `
                /* Rotes Feld unten rechts */
                linear-gradient(to top left, #E2001A 0%, #E2001A 20%, transparent 20%),
                /* Horizontale Teilung Blau/Weiß */
                linear-gradient(to bottom, #005DAA 0%, #005DAA 50%, #ffffff 50%, #ffffff 100%)
            `,
            // 6. Text: kursiv, blau, mittig auf dem weißen Streifen
            color: "#005DAA",
            fontWeight: "bold",
            fontSize: "24px",
            fontStyle: "italic",
            textShadow: "1px 1px 0 rgba(255,255,255,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "18%", // nach unten schieben in den weißen Streifen
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.3))",
            overflow: "hidden"
        }
    },
    {
        stadt: "DUBAI",
        land: "VAE",
        naechte: 9,
        style: {
            // 1. Einheitliche Größe
            width: "250px",
            height: "150px",
            boxSizing: "border-box",
            // Briefmarken-Rand
            background: `
                /* Burj Khalifa Silhouette – auf die LINKE Seite verschoben */
                linear-gradient(to top, transparent 92%, #475569 92%, #475569 100%, transparent 100%),
                linear-gradient(to top, transparent 75%, #475569 75%, #475569 92%, transparent 92%),
                linear-gradient(to top, transparent 30%, #475569 30%, #475569 75%, transparent 75%),
                linear-gradient(to top, #475569 0%, #475569 30%, transparent 30%),
                /* Himmel */
                #87CEEB
            `,
            backgroundSize: "2px 100%, 8px 100%, 18px 100%, 28px 100%, 100% 100%",
            // Burj Khalifa links (ca. 20% position)
            backgroundPosition: "23% 0, 22% 0, 19% 0, 16% 0, 0 0",
            backgroundRepeat: "no-repeat",
            borderRadius: "2px",
            border: "8px solid #ffffff",
            outline: "2px dashed #cccccc",
            outlineOffset: "-4px",
            // Text-Styling
            color: "#1e293b",
            fontWeight: "900",
            fontSize: "18px",
            fontFamily: "Georgia, serif",
            textShadow: "1px 1px 0 #003580",
            display: "flex",
            alignItems: "flex-start",
            // 4. Text auf der rechten Seite (flex-end)
            justifyContent: "flex-end",
            writingMode: "vertical-rl",
            // Drehung angepasst: D oben, I unten (von oben nach unten lesbar)
            transform: "rotate(0deg)",
            padding: "10px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.3))",
            overflow: "hidden"
        }
    },
    {
        stadt: "Stockholm",
        land: "Schweden",
        naechte: 4,
        style: {
            // 1. Einheitliche Größe
            width: "250px",
            height: "150px",
            boxSizing: "border-box",
            background: "#006AA7",
            // 3. Kreuz und Kronen sichtbar machen (Größe/Position angepasst)
            backgroundImage: `
                /* 3 Kronen – stilisierte Patterns */
                /* Krone 1: oben links */
                linear-gradient(#FECC00, #FECC00) 15% 20% / 15px 10px,
                /* Krone 2: oben rechts */
                linear-gradient(#FECC00, #FECC00) 80% 20% / 15px 10px,
                /* Krone 3: unten links */
                linear-gradient(#FECC00, #FECC00) 15% 75% / 15px 10px,
                /* Gelbes Kreuz */
                linear-gradient(90deg, transparent 28%, #FECC00 28%, #FECC00 38%, transparent 38%),
                linear-gradient(0deg,   transparent 43%, #FECC00 43%, #FECC00 57%, transparent 57%)
            `,
            backgroundRepeat: "no-repeat",
            border: "5px double #FECC00",
            borderRadius: "14px",
            color: "#FECC00",
            fontWeight: "800",
            fontSize: "16px",
            textShadow: "1px 1px 0 #000",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            padding: "12px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.3))",
            overflow: "hidden"
        }
    },
    {
        stadt: "Le Morne Brabant",
        land: "Mauritius",
        naechte: 5,
        style: {
            // 1. Einheitliche Größe
            width: "250px",
            height: "150px",
            boxSizing: "border-box",
            // 5. Berg-Silhouette: oben WENIGER spitz (abgeflacht)
            clipPath: "polygon(5% 100%, 0% 85%, 8% 70%, 15% 55%, 22% 40%, 32% 28%, 42% 18%, 46% 12%, 54% 12%, 58% 18%, 62% 25%, 68% 35%, 75% 48%, 83% 60%, 90% 72%, 96% 85%, 100% 95%, 100% 100%)",
            // 4 Landesfarben
            background: "linear-gradient(180deg, #EA2839 0%, #EA2839 25%, #1A206D 25%, #1A206D 50%, #FFD500 50%, #FFD500 75%, #00A551 75%, #00A551 100%)",
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "14px",
            textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: "10px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.4))",
            overflow: "hidden"
        }
    }
];
