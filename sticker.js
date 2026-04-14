const stickerDaten = [
    {
        stadt: "Kopenhagen",
        land: "Dänemark",
        naechte: 4,
        style: {
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            background: `linear-gradient(90deg, transparent 30%, #ffffff 30%, #ffffff 40%, transparent 40%), linear-gradient(0deg, transparent 45%, #ffffff 45%, #ffffff 55%, transparent 55%), #C8102E`,
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
        suffix: " Ø" // Klassisches O mit Strich
    },
    {
        stadt: "New York",
        land: "USA",
        naechte: 4,
        style: {
            clipPath: "polygon(30% 0%, 40% 5%, 55% 0%, 70% 5%, 85% 15%, 95% 30%, 100% 50%, 95% 70%, 85% 85%, 70% 95%, 50% 100%, 30% 95%, 15% 85%, 5% 70%, 0% 50%, 5% 30%, 15% 15%)",
            background: `linear-gradient(90deg, #002868 0%, #002868 38%, transparent 38%), repeating-linear-gradient(0deg, #BF0A30 0px, #BF0A30 13px, #ffffff 13px, #ffffff 26px)`,
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
            clipPath: "polygon(0% 25%, 75% 25%, 100% 50%, 75% 75%, 0% 75%)", // Schiffsrumpf
            background: `
                radial-gradient(circle at 70% 50%, #005DAA 4px, transparent 4.5px), /* Anker Punkt */
                linear-gradient(to bottom, #005DAA 0%, #005DAA 40%, #ffffff 40%, #ffffff 60%, #E2001A 60%, #E2001A 100%)
            `,
            color: "#005DAA",
            fontWeight: "bold",
            fontSize: "16px",
            fontStyle: "italic",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
                linear-gradient(to top, #475569 0%, #475569 100%) 15% 0% / 15% 100% no-repeat, /* Haus links */
                #87CEEB
            `,
            borderRadius: "2px",
            border: "8px solid #ffffff",
            outline: "2px dashed #cccccc",
            outlineOffset: "-4px",
            color: "#1e293b",
            fontWeight: "900",
            fontSize: "14px",
            textShadow: "1px 1px 0 #ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end", // Text nach rechts
            writingMode: "vertical-rl",
            transform: "rotate(0deg)", // 180 Grad Drehung rückgängig gemacht
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
                radial-gradient(#FECC00 2px, transparent 2.5px), /* Krone 1 */
                radial-gradient(#FECC00 2px, transparent 2.5px), /* Krone 2 */
                radial-gradient(#FECC00 2px, transparent 2.5px), /* Krone 3 */
                linear-gradient(90deg, transparent 30%, #FECC00 30%, #FECC00 40%, transparent 40%),
                linear-gradient(0deg, transparent 45%, #FECC00 45%, #FECC00 55%, transparent 55%)
            `,
            backgroundPosition: "15% 15%, 25% 15%, 20% 25%, 0 0, 0 0",
            backgroundSize: "8px 8px, 8px 8px, 8px 8px, 100% 100%, 100% 100%",
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
