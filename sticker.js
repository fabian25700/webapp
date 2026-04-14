const stickerDaten = [
    {
        stadt: "Kopenhagen",
        land: "Dänemark",
        naechte: 4,
        style: {
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
            alignItems: "center",
            justifyContent: "center",
            padding: "14px 10px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.4))",
            overflow: "hidden" // 1. Kein Text außerhalb
        },
        suffix: " Ø" // 4. Klassisches O mit Strich
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
            overflow: "hidden" // 1. Kein Text außerhalb
        }
    },
    {
        stadt: "AIDA",
        land: "International",
        naechte: 10,
        style: {
            // 2. Form Kreuzfahrtschiff (Bug vorne spitz, hinten gerade)
            clipPath: "polygon(0% 20%, 80% 20%, 100% 50%, 80% 80%, 0% 80%)", 
            background: `
                /* 2. Anker auf dem weißen Bereich */
                radial-gradient(circle at 85% 50%, #005DAA 2px, transparent 2.5px),
                linear-gradient(to bottom, #005DAA 0%, #005DAA 45%, #ffffff 45%, #ffffff 55%, #E2001A 55%, #E2001A 100%)
            `,
            color: "#005DAA",
            fontWeight: "bold",
            fontSize: "17px",
            fontStyle: "italic",
            textShadow: "1px 1px 0 rgba(255,255,255,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.3))",
            overflow: "hidden" // 1. Kein Text außerhalb
        }
    },
    {
        stadt: "DUBAI",
        land: "VAE",
        naechte: 9,
        style: {
            background: `
                /* Burj Khalifa links positioniert */
                linear-gradient(to top, #475569 0%, #475569 100%) 15% 0% / 20% 100% no-repeat,
                #87CEEB
            `,
            borderRadius: "2px",
            border: "8px solid #ffffff",
            outline: "2px dashed #cccccc",
            outlineOffset: "-4px",
            color: "#1e293b",
            fontWeight: "900",
            fontSize: "14px",
            fontFamily: "Georgia, serif",
            textShadow: "1px 1px 0 #ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end", // 5. Text auf die andere Seite (rechts)
            writingMode: "vertical-rl",
            transform: "rotate(0deg)", // 5. Um 180 Grad gedreht (von 180 auf 0)
            padding: "8px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.3))",
            overflow: "hidden" // 1. Kein Text außerhalb
        }
    },
    {
        stadt: "Stockholm",
        land: "Schweden",
        naechte: 4,
        style: {
            background: "#006AA7",
            backgroundImage: `
                /* 3. Drei gelbe Kronen (sichtbar oben links) */
                linear-gradient(#FECC00, #FECC00) 10% 10% / 8px 5px,
                linear-gradient(#FECC00, #FECC00) 25% 10% / 8px 5px,
                linear-gradient(#FECC00, #FECC00) 17.5% 25% / 8px 5px,
                /* 3. Gelbes Kreuz analog zu Dänemark */
                linear-gradient(90deg, transparent 30%, #FECC00 30%, #FECC00 40%, transparent 40%),
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
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 12px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.3))",
            overflow: "hidden" // 1. Kein Text außerhalb
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
            paddingBottom: "8px",
            filter: "drop-shadow(3px 3px 0px rgba(0,0,0,0.4))",
            overflow: "hidden" // 1. Kein Text außerhalb
        }
    }
];
