const stickerDaten = [
    {
        stadt: "Kopenhagen",
        land: "Dänemark",
        naechte: 4,
        style: {
            // Sechseck
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
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
            padding: "15% 15%", // Platzierung im unteren rechten Quadranten
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.4))",
            overflow: "hidden"
        },
        suffix: " Ø" // Klassisches O mit Strich irgendwo
    },
    {
        stadt: "New York",
        land: "USA",
        naechte: 4,
        style: {
            // Apfel-Form (Big Apple)
            clipPath: "path('M 50 0 C 30 0 10 10 5 30 C 0 50 5 70 20 85 C 35 100 65 100 80 85 C 95 70 100 50 95 30 C 90 10 70 0 50 0 Z')", // Vereinfachte Apfel-Silhouette via Path oder Polygon
            // Alternativ Polygon für bessere Kompatibilität:
            clipPath: "polygon(30% 0%, 40% 5%, 55% 0%, 70% 5%, 85% 15%, 95% 30%, 100% 50%, 95% 70%, 85% 85%, 70% 95%, 50% 100%, 30% 95%, 15% 85%, 5% 70%, 0% 50%, 5% 30%, 15% 15%)",
            background: `
                linear-gradient(90deg, #002868 0%, #002868 38%, transparent 38%),
                repeating-linear-gradient(0deg, #BF0A30 0px, #BF0A30 13px, #ffffff 13px, #ffffff 26px)
            `,
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "18px",
            textShadow: "2px 2px 0 #000, -1px -1px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000", // Maximale Lesbarkeit
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.4))",
            overflow: "hidden"
        }
    },
    {
        stadt: "AIDA",
        land: "International",
        naechte: 10,
        style: {
            // Dynamisches, schräges Parallelogramm (Schiffsrumpf)
            clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
            background: `
                /* Horizontale Teilung: Blau oben, Weiß unten, Rot unten rechts (Kussmund) */
                linear-gradient(to bottom, #005DAA 0%, #005DAA 40%, transparent 40%),
                linear-gradient(to right, #ffffff 0%, #ffffff 75%, #E2001A 75%)
            `,
            color: "#005DAA",
            fontWeight: "bold",
            fontSize: "17px",
            fontStyle: "italic", // Sportlich & maritim
            display: "flex",
            alignItems: "center", // Mittig auf dem weißen Streifen
            justifyContent: "center",
            paddingTop: "20%", // Verschiebung in den weißen Bereich
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.3))",
            overflow: "hidden"
        }
    },
    {
        stadt: "DUBAI",
        land: "VAE",
        naechte: 9,
        style: {
            // Rechteckige Briefmarke mit weißem, gezacktem Rand
            background: `
                /* Burj Khalifa Silhouette rechts (volle Höhe, feine Spitze) */
                linear-gradient(to top, #1e293b 0%, #1e293b 98%, transparent 98%) 85% 0 / 2% 100% no-repeat,
                linear-gradient(to top, #1e293b 0%, #1e293b 70%, transparent 70%) 82% 10% / 8% 90% no-repeat,
                #87CEEB
            `,
            borderRadius: "2px",
            border: "8px solid #ffffff",
            outline: "2px dashed #cccccc", // Simuliert gezackten Rand
            outlineOffset: "-4px",
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "16px",
            textShadow: "1px 1px 0 #003580, -1px -1px 0 #003580, 1px -1px 0 #003580, -1px 1px 0 #003580", // Dunkelblaue Kontur
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            writingMode: "vertical-rl", // Vertikal
            transform: "rotate(180deg)", // D unten, I oben
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
            // Rechteck mit abgerundeten Ecken und gelbem Doppelrahmen
            borderRadius: "14px",
            background: "#006AA7",
            backgroundImage: `
                /* Drei stilisierte gelbe Kronen */
                linear-gradient(#FECC00, #FECC00) 15% 20% / 10px 6px,
                linear-gradient(#FECC00, #FECC00) 35% 20% / 10px 6px,
                linear-gradient(#FECC00, #FECC00) 25% 35% / 10px 6px,
                /* Gelbes schwedisches Kreuz */
                linear-gradient(90deg, transparent 28%, #FECC00 28%, #FECC00 38%, transparent 38%),
                linear-gradient(0deg,  transparent 43%, #FECC00 43%, #FECC00 57%, transparent 57%)
            `,
            backgroundRepeat: "no-repeat",
            border: "6px double #FECC00", // Edler Doppelrahmen
            color: "#FECC00",
            fontWeight: "800",
            fontSize: "14px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end", // Unten rechts bündig
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
            // Gezacktes Polygon (Silhouette des Berges)
            clipPath: "polygon(0% 100%, 10% 80%, 25% 60%, 40% 30%, 50% 10%, 60% 30%, 75% 60%, 90% 80%, 100% 100%)",
            // Vier horizontale Streifen (Landesfarben)
            background: `linear-gradient(180deg, 
                #EA2839 0%, #EA2839 25%, 
                #1A206D 25%, #1A206D 50%, 
                #FFD500 50%, #FFD500 75%, 
                #00A551 75%, #00A551 100%)`,
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "11px",
            textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center", // Ganz unten mittig im grünen Feld
            paddingBottom: "8px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.4))",
            overflow: "hidden"
        }
    }
];
