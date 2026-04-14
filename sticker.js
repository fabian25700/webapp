const stickerDaten = [
    {
        stadt: "Kopenhagen",
        land: "Dänemark",
        naechte: 4,
        style: {
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            background: `
                linear-gradient(90deg, transparent 30%, #ffffff 30%, #ffffff 40%, transparent 40%),
                linear-gradient(0deg,   transparent 45%, #ffffff 45%, #ffffff 55%, transparent 55%),
                #C8102E
            `,
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "12px",
            textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.4))",
            overflow: "hidden"
        },
        suffix: " Ø"
    },
    {
        stadt: "New York",
        land: "USA",
        naechte: 4,
        style: {
            clipPath: "polygon(30% 0%, 40% 5%, 55% 0%, 70% 5%, 85% 15%, 95% 30%, 100% 50%, 95% 70%, 85% 85%, 70% 95%, 50% 100%, 30% 95%, 15% 85%, 5% 70%, 0% 50%, 5% 30%, 15% 15%)",
            background: `
                linear-gradient(90deg, #002868 0%, #002868 38%, transparent 38%),
                repeating-linear-gradient(0deg, #BF0A30 0px, #BF0A30 13px, #ffffff 13px, #ffffff 26px)
            `,
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "15px",
            textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
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
            // Optimierte Schiffsform (Bug rechts spitzer)
            clipPath: "polygon(0% 20%, 85% 20%, 100% 50%, 85% 80%, 0% 80%)",
            background: `
                /* Anker-Symbol auf dem weißen Streifen (Position ca. 75% rechts) */
                radial-gradient(circle at 75% 50%, #005DAA 2px, transparent 2px),
                linear-gradient(to right, #005DAA 0%, #005DAA 55%, #ffffff 55%, #ffffff 85%, #E2001A 85%, #E2001A 100%)
            `,
            color: "#005DAA",
            fontWeight: "bold",
            fontSize: "16px",
            fontStyle: "italic",
            textShadow: "1px 1px 0 rgba(255,255,255,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "15%",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.3))",
            overflow: "hidden"
        }
    },
    {
        stadt: "DUBAI",
        land: "VAE",
        naechte: 9,
        style: {
            background: `
                linear-gradient(to top, transparent 92%, #475569 92%, #475569 100%, transparent 100%),
                linear-gradient(to top, transparent 75%, #475569 75%, #475569 92%, transparent 92%),
                linear-gradient(to top, transparent 30%, #475569 30%, #475569 75%, transparent 75%),
                linear-gradient(to top, #475569 0%, #475569 30%, transparent 30%),
                #87CEEB
            `,
            backgroundSize: "2px 100%, 8px 100%, 18px 100%, 28px 100%, 100% 100%",
            backgroundPosition: "15% 0, 16% 0, 19% 0, 22% 0, 0 0", // Haus nach links verschoben
            backgroundRepeat: "no-repeat",
            borderRadius: "2px",
            border: "8px solid #ffffff",
            outline: "2px dashed #cccccc",
            outlineOffset: "-4px",
            color: "#1e293b",
            fontWeight: "900",
            fontSize: "14px",
            fontFamily: "Georgia, serif",
            textShadow: "1px 1px 0 #003580",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            writingMode: "vertical-rl",
            transform: "rotate(0deg)", // Drehung korrigiert (D oben, Text auf rechter Seite)
            padding: "8px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.3))",
            overflow: "hidden"
        }
    },
    {
        stadt: "Stockholm",
        land: "Schweden",
        naechte: 4,
        style: {
            background: "#006AA7",
            backgroundImage: `
                /* 3 Kronen jetzt sichtbar positioniert */
                linear-gradient(#FECC00, #FECC00) 20% 20% / 10px 6px,
                linear-gradient(#FECC00, #FECC00) 40% 20% / 10px 6px,
                linear-gradient(#FECC00, #FECC00) 30% 35% / 10px 6px,
                /* Gelbes Kreuz analog zu Dänemark */
                linear-gradient(90deg, transparent 30%, #FECC00 30%, #FECC00 40%, transparent 40%),
                linear-gradient(0deg,   transparent 45%, #FECC00 45%, #FECC00 55%, transparent 55%)
            `,
            backgroundRepeat: "no-repeat",
            border: "5px double #FECC00",
            borderRadius: "14px",
            color: "#FECC00",
            fontWeight: "800",
            fontSize: "13px",
            textShadow: "1px 1px 0 #000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.3))",
            overflow: "hidden"
        }
    },
    {
        stadt: "Le Morne Brabant",
        land: "Mauritius",
        naechte: 5,
        style: {
            clipPath: "polygon(5% 100%, 0% 85%, 8% 70%, 15% 55%, 22% 40%, 32% 28%, 42% 18%, 48% 8%, 53% 4%, 58% 8%, 62% 15%, 68% 25%, 75% 38%, 83% 52%, 90% 65%, 96% 78%, 100% 90%, 100% 100%)",
            background: "linear-gradient(180deg, #EA2839 0%, #EA2839 25%, #1A206D 25%, #1A206D 50%, #FFD500 50%, #FFD500 75%, #00A551 75%, #00A551 100%)",
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "11px",
            textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: "12px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.4))",
            overflow: "hidden"
        }
    }
];
