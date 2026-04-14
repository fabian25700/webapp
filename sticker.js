const stickerDaten = [
    {
        stadt: "Kopenhagen",
        land: "Dänemark",
        naechte: 4,
        style: {
            background: "linear-gradient(135deg, #C8102E 0%, #C8102E 70%, #ffffff 71%, #ffffff 80%, #C8102E 81%)",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 70% 70%, 50% 100%, 0% 100%)",
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "14px",
            textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(3px 3px 0px #fff)"
        }
    },
    {
        stadt: "New York",
        land: "USA",
        naechte: 4,
        style: {
            background: "radial-gradient(circle at 20% 20%, #002868 40%, transparent 41%), repeating-linear-gradient(0deg, #bf0a30, #bf0a30 10px, #fff 10px, #fff 20px)",
            borderRadius: "50%",
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "18px",
            textShadow: "2px 2px 4px #000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(3px 3px 0px #fff)"
        }
    },
    {
        stadt: "AIDA",
        land: "International",
        naechte: 10,
        style: {
            background: "linear-gradient(to bottom, #005DAA 60%, #ffffff 61%, #ffffff 80%, #E2001A 81%)",
            clipPath: "polygon(0 20%, 100% 0, 90% 100%, 10% 100%)",
            color: "#005DAA",
            fontWeight: "bold",
            fontSize: "18px",
            fontStyle: "italic",
            textShadow: "1px 1px 0 #fff, -1px -1px 0 #fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(3px 3px 0px #fff)"
        }
    },
    {
        stadt: "DUBAI",
        land: "VAE",
        naechte: 9,
        style: {
            backgroundColor: "#87CEEB",
            backgroundImage: `
                radial-gradient(circle, #fff 50%, transparent 55%),
                radial-gradient(circle, #fff 50%, transparent 55%),
                radial-gradient(circle, #fff 50%, transparent 55%),
                radial-gradient(circle, #fff 50%, transparent 55%),
                /* Burj Khalifa Silhouette: Spitze + Stufen */
                linear-gradient(to top, #475569 0%, #475569 70%, transparent 70%),
                linear-gradient(to top, transparent 70%, #475569 70%, #475569 95%, transparent 95%)
            `,
            backgroundSize: "20px 20px, 20px 20px, 20px 20px, 20px 20px, 30px 60%, 2px 85%",
            backgroundPosition: "0 -10px, 0 100%, -10px 0, 100% 0, 75% 100%, 79.5% 80%",
            backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y, no-repeat, no-repeat",
            clipPath: "none",
            borderRadius: "2px",
            border: "12px solid #fff",
            color: "#1e293b",
            fontWeight: "900",
            fontSize: "15px",
            fontFamily: "serif",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            /* Text-Orientierung: D oben, I unten */
            writingMode: "vertical-lr",
            paddingLeft: "20px",
            filter: "drop-shadow(3px 3px 0px #fff)"
        }
    },
    {
        stadt: "Stockholm",
        land: "Schweden",
        naechte: 4,
        style: {
            background: "#006AA7",
            backgroundImage: `
                /* Drei Kronen */
                linear-gradient(#FECC00, #FECC00) 75% 15% / 10px 3px, linear-gradient(#FECC00, #FECC00) 75% 12% / 2px 6px,
                linear-gradient(#FECC00, #FECC00) 65% 25% / 10px 3px, linear-gradient(#FECC00, #FECC00) 65% 22% / 2px 6px,
                linear-gradient(#FECC00, #FECC00) 85% 25% / 10px 3px, linear-gradient(#FECC00, #FECC00) 85% 22% / 2px 6px,
                /* Gelbes Kreuz */
                linear-gradient(90deg, transparent 25%, #FECC00 25%, #FECC00 35%, transparent 35%),
                linear-gradient(0deg, transparent 45%, #FECC00 45%, #FECC00 55%, transparent 55%)
            `,
            backgroundRepeat: "no-repeat",
            border: "6px double #FECC00",
            borderRadius: "15px",
            color: "#FECC00",
            fontWeight: "800",
            fontSize: "15px",
            textShadow: "1px 1px 0 #000",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            padding: "15px",
            filter: "drop-shadow(3px 3px 0px #fff)"
        }
    },
    {
        stadt: "Le Morne Brabant",
        land: "Mauritius",
        naechte: 5,
        style: {
            background: "linear-gradient(180deg, #EA2839 25%, #1A206D 26%, #1A206D 50%, #FFD500 51%, #FFD500 75%, #00A551 76%)",
            clipPath: "polygon(50% 0%, 80% 20%, 100% 100%, 0% 100%, 20% 20%)",
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "12px",
            textShadow: "2px 2px 4px #000",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: "10px",
            filter: "drop-shadow(3px 3px 0px #fff)"
        }
    }
];
