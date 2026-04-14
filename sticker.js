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
        suffix: " Ø" // Klassisches O mit Strich
    },
    {
        stadt: "New York",
        land: "USA",
        naechte: 4,
        style: {
            // Apfel-Form
            clipPath: "polygon(30% 0%, 40% 5%, 55% 0%, 70% 5%, 85% 15%, 95% 30%, 100% 50%, 95% 70%, 85% 85%, 70% 95%, 50% 100%, 30% 95%, 15% 85%, 5% 70%, 0% 50%, 5% 30%, 15% 15%)",
            background: `
                linear-gradient(90deg, #002868 0%, #002868 38%, transparent 38%),
                repeating-linear-gradient(0deg, #BF0A30 0px, #BF0A30 13px, #ffffff 13px, #ffffff 26px)
            `,
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "18px",
            textShadow: "2px 2px 0 #000, -1px -1px 0 #000",
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
            // Schräges Parallelogramm
            clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
            background: `
                /* Dreiteilung: Blau oben, Weiß unten, Rot unten rechts */
                linear-gradient(to bottom, #005DAA 0%, #005DAA 50%, transparent 50%),
                linear-gradient(to right, #ffffff 0%, #ffffff 80%, #E2001A 80%)
            `,
            color: "#005DAA",
            fontWeight: "bold",
            fontSize: "17px",
            fontStyle: "italic", // Sportlich
            display: "flex",
            alignItems: "flex-end", // Text auf dem weißen Streifen (unten)
            justifyContent: "center",
            paddingBottom: "10px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.3))",
            overflow: "hidden"
        }
    },
    {
        stadt: "DUBAI",
        land: "VAE",
        naechte: 9,
        style: {
            // Briefmarke mit gezacktem Rand
            background: `
                /* Burj Khalifa Silhouette rechts (volle Höhe) */
                linear-gradient(to top, #475569 0%, #475569 95%, transparent 95%) 85% 0 / 10% 100% no-repeat,
                linear-gradient(to top, #475569 0%, #475569 70%, transparent 70%) 80% 0 / 20% 100% no-repeat,
                #87CEEB
            `,
            borderRadius: "2px",
            border: "8px solid #ffffff",
            outline: "2px dashed #cccccc",
            outlineOffset: "-4px",
            color: "#1e293b",
            fontWeight: "900",
            fontSize: "16px",
            // Dunkelblaue Kontur
            textShadow: "1px 1px 0 #003580, -1px -1px 0 #003580, 1px -1px 0 #003580, -1px 1px 0 #003580",
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
            // Rechteck mit abgerundeten Ecken
            borderRadius: "14px",
            background: "#006AA7",
            backgroundImage: `
                /* Drei stilisierte Kronen in den blauen Feldern */
                linear-gradient(#FECC00, #FECC00) 10% 15% / 8px 5px,
                linear-gradient(#FECC00, #FECC00) 25% 15% / 8px 5px,
                linear-gradient(#FECC00, #FECC00) 15% 30% / 8px 5px,
                /* Gelbes Kreuz */
                linear-gradient(90deg, transparent 28%, #FECC00 28%, #FECC00 38%, transparent 38%),
                linear-gradient(0deg,  transparent 43%, #FECC00 43%, #FECC00 57%, transparent 57%)
            `,
            backgroundRepeat: "no-repeat",
            border: "5px double #FECC00", // Gelber Doppelrahmen
            color: "#FECC00",
            fontWeight: "800",
            fontSize: "13px",
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
            // Gezacktes Berg-Polygon
            clipPath: "polygon(0% 100%, 15% 70%, 35% 40%, 50% 5%, 65% 40%, 85% 70%, 100% 100%)",
            // Vier Landesfarben horizontal
            background: `linear-gradient(180deg, 
                #EA2839 0%, #EA2839 25%, 
                #1A206D 25%, #1A206D 50%, 
                #FFD500 50%, #FFD500 75%, 
                #00A551 75%, #00A551 100%)`,
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "11px",
            textShadow: "1px 1px 0 #000",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center", // Unten mittig
            paddingBottom: "5px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.4))",
            overflow: "hidden"
        }
    }
];
