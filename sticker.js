const stickerDaten = [
    {
        stadt: "Kopenhagen",
        land: "Dänemark",
        naechte: 4,
        style: {
            width: "125px",
            height: "110px",
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
            filter: "drop-shadow(2px 2px 0px rgba(0,0,0,0.4))",
            overflow: "hidden"
        },
        suffix: " Ø"
    },
    {
        stadt: "New York",
        land: "USA",
        naechte: 4,
        style: {
            width: "110px",
            height: "120px",
            clipPath: "polygon(30% 0%, 40% 5%, 55% 0%, 70% 5%, 85% 15%, 95% 30%, 100% 50%, 95% 70%, 85% 85%, 70% 95%, 50% 100%, 30% 95%, 15% 85%, 5% 70%, 0% 50%, 5% 30%, 15% 15%)",
            background: `
                linear-gradient(90deg, #002868 0%, #002868 45%, transparent 45%),
                repeating-linear-gradient(0deg, #BF0A30 0px, #BF0A30 10px, #ffffff 10px, #ffffff 20px)
            `,
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "14px",
            textShadow: "1px 1px 0 #000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(2px 2px 0px rgba(0,0,0,0.4))",
            overflow: "hidden"
        }
    },
    {
        stadt: "AIDA",
        land: "International",
        naechte: 10,
        style: {
            width: "140px",
            height: "100px",
            clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
            background: `
                linear-gradient(to bottom, #005DAA 0%, #005DAA 50%, #ffffff 50%, #ffffff 100%),
                linear-gradient(to right, transparent 75%, #E2001A 75%)
            `,
            // Das Rot wird hier überlagert für den Kussmund-Effekt rechts
            backgroundImage: `linear-gradient(to right, transparent 75%, #E2001A 75%), linear-gradient(to bottom, #005DAA 0%, #005DAA 50%, #ffffff 50%, #ffffff 100%)`,
            color: "#005DAA",
            fontWeight: "bold",
            fontSize: "16px",
            fontStyle: "italic",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "20px",
            filter: "drop-shadow(2px 2px 0px rgba(0,0,0,0.3))",
            overflow: "hidden"
        }
    },
    {
        stadt: "DUBAI",
        land: "VAE",
        naechte: 9,
        style: {
            width: "105px",
            height: "140px",
            background: `
                /* 1. Burj Khalifa Architektur zurückgesetzt (4 Segmente) */
                linear-gradient(to top, transparent 92%, #475569 92%, #475569 100%, transparent 100%),
                linear-gradient(to top, transparent 75%, #475569 75%, #475569 92%, transparent 92%),
                linear-gradient(to top, transparent 30%, #475569 30%, #475569 75%, transparent 75%),
                linear-gradient(to top, #475569 0%, #475569 30%, transparent 30%),
                #87CEEB
            `,
            backgroundSize: "2px 100%, 8px 100%, 16px 100%, 24px 100%, 100% 100%",
            backgroundPosition: "80% 0, 79% 0, 77% 0, 75% 0, 0 0",
            backgroundRepeat: "no-repeat",
            borderRadius: "2px",
            border: "6px solid #ffffff",
            outline: "2px dashed #cccccc",
            outlineOffset: "-4px",
            color: "#1e293b",
            fontWeight: "900",
            fontSize: "14px",
            fontFamily: "Georgia, serif",
            textShadow: "1px 1px 0 #003580",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start", // Text links vom Haus
            writingMode: "vertical-rl",
            transform: "rotate(180deg)", // D unten, I oben
            padding: "10px",
            filter: "drop-shadow(2px 2px 0px rgba(0,0,0,0.3))",
            overflow: "hidden"
        }
    },
    {
        stadt: "Stockholm",
        land: "Schweden",
        naechte: 4,
        style: {
            width: "130px",
            height: "115px",
            background: "#006AA7",
            // 2. Kronen-Shapes via schärfere Radial-Gradients (3 Punkte pro Krone angedeutet)
            backgroundImage: `
                radial-gradient(circle, #FECC00 2px, transparent 3px), radial-gradient(circle, #FECC00 2px, transparent 3px), radial-gradient(circle, #FECC00 2px, transparent 3px),
                linear-gradient(90deg, transparent 30%, #FECC00 30%, #FECC00 40%, transparent 40%),
                linear-gradient(0deg,  transparent 45%, #FECC00 45%, #FECC00 55%, transparent 55%)
            `,
            backgroundPosition: "10% 15%, 20% 15%, 15% 25%, 0 0, 0 0",
            backgroundSize: "8px 8px, 8px 8px, 8px 8px, 100% 100%, 100% 100%",
            backgroundRepeat: "no-repeat",
            border: "4px double #FECC00",
            borderRadius: "10px",
            color: "#FECC00",
            fontWeight: "800",
            fontSize: "12px",
            textShadow: "1px 1px 0 #000",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            padding: "8px",
            filter: "drop-shadow(2px 2px 0px rgba(0,0,0,0.3))",
            overflow: "hidden"
        }
    },
    {
        stadt: "Le Morne Brabant",
        land: "Mauritius",
        naechte: 5,
        style: {
            width: "130px",
            height: "120px",
            clipPath: "polygon(5% 100%, 15% 55%, 35% 25%, 50% 15%, 65% 25%, 85% 55%, 100% 100%)",
            // 3. Mehr Rot-Anteil (30% statt 25%)
            background: "linear-gradient(180deg, #EA2839 0%, #EA2839 30%, #1A206D 30%, #1A206D 53%, #FFD500 53%, #FFD500 76%, #00A551 76%, #00A551 100%)",
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "10px",
            textShadow: "1px 1px 0 #000",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: "10px",
            filter: "drop-shadow(2px 2px 0px rgba(0,0,0,0.4))",
            overflow: "hidden"
        }
    }
];
