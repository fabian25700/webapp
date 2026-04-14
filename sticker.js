const stickerDaten = [
    {
        stadt: "Kopenhagen",
        land: "Dänemark",
        naechte: 4,
        style: {
            width: "120px", 
            height: "110px",
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            background: "linear-gradient(90deg, transparent 30%, #ffffff 30%, #ffffff 40%, transparent 40%), linear-gradient(0deg, transparent 45%, #ffffff 45%, #ffffff 55%, transparent 55%), #C8102E",
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "12px",
            textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
        },
        suffix: " Ø"
    },
    {
        stadt: "New York",
        land: "USA",
        naechte: 4,
        style: {
            width: "115px",
            height: "120px",
            clipPath: "polygon(30% 0%, 40% 5%, 55% 0%, 70% 5%, 85% 15%, 95% 30%, 100% 50%, 95% 70%, 85% 85%, 70% 95%, 50% 100%, 30% 95%, 15% 85%, 5% 70%, 0% 50%, 5% 30%, 15% 15%)",
            background: "linear-gradient(90deg, #002868 0%, #002868 45%, transparent 45%), repeating-linear-gradient(0deg, #BF0A30 0px, #BF0A30 10px, #ffffff 10px, #ffffff 20px)",
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "14px",
            textShadow: "1px 1px 0 #000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
        }
    },
    {
        stadt: "AIDA",
        land: "International",
        naechte: 10,
        style: {
            width: "130px",
            height: "115px",
            clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
            background: "linear-gradient(to top left, #E2001A 0%, #E2001A 25%, transparent 25%), linear-gradient(to bottom, #005DAA 0%, #005DAA 50%, #ffffff 50%, #ffffff 100%)",
            color: "#005DAA",
            fontWeight: "bold",
            fontSize: "16px",
            fontStyle: "italic",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "25px", // Harter Wert statt % für Stabilität
            overflow: "hidden"
        }
    },
    {
        stadt: "DUBAI",
        land: "VAE",
        naechte: 9,
        style: {
            width: "110px",
            height: "135px",
            background: "linear-gradient(to top, #475569 0%, #475569 100%) 20% 0 / 25% 100% no-repeat, #87CEEB",
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
            justifyContent: "flex-end", // Text rechts
            writingMode: "vertical-rl",
            transform: "rotate(0deg)", // Drehung korrigiert
            padding: "8px",
            overflow: "hidden"
        }
    },
    {
        stadt: "Stockholm",
        land: "Schweden",
        naechte: 4,
        style: {
            width: "125px",
            height: "125px",
            background: "#006AA7",
            backgroundImage: `
                linear-gradient(#FECC00, #FECC00),
                linear-gradient(#FECC00, #FECC00),
                linear-gradient(#FECC00, #FECC00),
                linear-gradient(90deg, transparent 30%, #FECC00 30%, #FECC00 40%, transparent 40%),
                linear-gradient(0deg, transparent 45%, #FECC00 45%, #FECC00 55%, transparent 55%)
            `,
            backgroundPosition: "15% 20%, 45% 20%, 30% 35%, 0 0, 0 0",
            backgroundSize: "12px 8px, 12px 8px, 12px 8px, 100% 100%, 100% 100%",
            backgroundRepeat: "no-repeat",
            border: "4px double #FECC00",
            borderRadius: "12px",
            color: "#FECC00",
            fontWeight: "800",
            fontSize: "12px",
            textShadow: "1px 1px 0 #000",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            padding: "10px",
            overflow: "hidden"
        }
    },
    {
        stadt: "Le Morne Brabant",
        land: "Mauritius",
        naechte: 5,
        style: {
            width: "135px",
            height: "120px",
            clipPath: "polygon(5% 100%, 15% 60%, 35% 30%, 50% 15%, 65% 30%, 85% 60%, 100% 100%)", // Weniger spitz
            background: "linear-gradient(180deg, #EA2839 0%, #EA2839 25%, #1A206D 25%, #1A206D 50%, #FFD500 50%, #FFD500 75%, #00A551 75%, #00A551 100%)",
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "10px",
            textShadow: "1px 1px 0 #000",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: "8px",
            overflow: "hidden"
        }
    }
];
