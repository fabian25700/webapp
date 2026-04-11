const stickerDaten = [
    {
        stadt: "Kopenhagen",
        land: "Dänemark",
        naechte: 4,
        fussball: "Ja ⚽",
        notiz: "Papas 60. Geburtstag",
        top10: true,
        style: {
            background: `
                linear-gradient(90deg, transparent 20%, #fff 20%, #fff 25%, transparent 25%),
                linear-gradient(0deg, transparent 45%, #fff 45%, #fff 55%, transparent 55%),
                radial-gradient(circle at 70% 80%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 15%, transparent 16%),
                radial-gradient(circle at 65% 70%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 10%, transparent 11%),
                #C8102E
            `,
            clipPath: "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "10px",
            /* KORREKTUR: Drop-shadow statt Border, damit der Rand trotz clipPath sichtbar bleibt */
            filter: "drop-shadow(2px 2px 0px #fff) drop-shadow(-2px -2px 0px #fff) drop-shadow(2px -2px 0px #fff) drop-shadow(-2px 2px 0px #fff)",
            display: "flex",
            alignItems: "flex-start",
            padding: "15px 5px",
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
        }
    },
    {
        stadt: "New York",
        land: "USA",
        naechte: 4,
        fussball: "Nein",
        notiz: "Januar Trip 2024",
        top10: true,
        style: {
            background: `
                linear-gradient(90deg, #002868 45%, transparent 45%),
                repeating-linear-gradient(0deg, #bf0a30, #bf0a30 14.28px, #fff 14.28px, #fff 28.56px),
                linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 30%, transparent 35%),
                #fff
            `,
            clipPath: "polygon(50% 0%, 65% 5%, 85% 15%, 83% 25%, 95% 35%, 100% 50%, 95% 75%, 85% 90%, 50% 100%, 15% 90%, 5% 75%, 0% 50%, 5% 35%, 15% 15%, 35% 5%)",
            color: "#fff",
            fontWeight: "900",
            fontSize: "14px",
            filter: "drop-shadow(3px 3px 0px #fff) drop-shadow(-3px -3px 0px #fff) drop-shadow(3px -3px 0px #fff) drop-shadow(-3px 3px 0px #fff)",
            letterSpacing: "1px",
            textShadow: "2px 2px 0 #002868"
        }
    },
    {
        stadt: "AIDA",
        land: "International",
        naechte: 10,
        fussball: "Nein",
        notiz: "Kreuzfahrt Highlights",
        top10: true,
        style: {
            background: `
                radial-gradient(circle at 20% 25%, #fff 0%, #fff 8%, #005DAA 9%, #005DAA 15%, #fff 16%, #fff 20%, transparent 21%),
                radial-gradient(ellipse at 50% 85%, #E2001A 0%, #E2001A 25%, transparent 26%),
                radial-gradient(ellipse at 40% 75%, #E2001A 0%, #E2001A 15%, transparent 16%),
                radial-gradient(ellipse at 60% 75%, #E2001A 0%, #E2001A 15%, transparent 16%),
                linear-gradient(180deg, #005DAA 40%, #fff 40%)
            `,
            clipPath: "polygon(0 0, 100% 0, 100% 60%, 50% 100%, 0 60%)",
            color: "#E2001A",
            fontStyle: "italic",
            fontWeight: "bold",
            fontSize: "16px",
            padding: "20px 5px",
            filter: "drop-shadow(3px 0px 0px #005DAA) drop-shadow(-3px 0px 0px #005DAA) drop-shadow(0px 3px 0px #005DAA) drop-shadow(0px -3px 0px #005DAA)",
            textShadow: "1px 1px 0 #fff, -1px -1px 0 #fff"
        }
    },
    {
        stadt: "Dubai",
        land: "VAE",
        naechte: 9,
        fussball: "Ja ⚽",
        notiz: "Wüsten-Metropole",
        top10: true,
        style: {
            background: `
                linear-gradient(to bottom, transparent 66%, #000 66%),
                linear-gradient(to top, #fff 0%, #fff 50%, transparent 55%),
                linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.4) 45%, transparent 50%),
                linear-gradient(to right, #FF0000 25%, #00732F 25%)
            `,
            clipPath: "polygon(50% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "12px",
            padding: "10px 5px",
            filter: "drop-shadow(2px 2px 0px #fff) drop-shadow(-2px -2px 0px #fff)",
            textShadow: "1px 1px 2px #000"
        }
    },
    {
        stadt: "Stockholm",
        land: "Schweden",
        naechte: 4,
        fussball: "Ja ⚽",
        notiz: "Skandinavisches Design",
        top10: true,
        style: {
            background: `
                linear-gradient(90deg, transparent 30%, #FECC00 30%, #FECC00 40%, transparent 40%),
                linear-gradient(0deg, transparent 45%, #FECC00 45%, #FECC00 55%, transparent 55%),
                linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 30%, transparent 31%),
                radial-gradient(circle at 15% 15%, #FECC00 0%, #FECC00 5%, transparent 6%),
                radial-gradient(circle at 20% 25%, #FECC00 0%, #FECC00 5%, transparent 6%),
                radial-gradient(circle at 10% 25%, #FECC00 0%, #FECC00 5%, transparent 6%),
                #006AA7
            `,
            borderRadius: "5px",
            color: "#FECC00",
            fontWeight: "bold",
            fontSize: "10px",
            border: "4px solid #FECC00", /* Border funktioniert hier, da kein clipPath genutzt wird */
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "flex-start",
            padding: "12px 5px"
        }
    },
    {
        stadt: "Le Morne",
        land: "Mauritius",
        naechte: 5,
        fussball: "Nein",
        notiz: "Wandern am Berg",
        top10: true,
        style: {
            background: `
                linear-gradient(to top, #2c3e50 0%, #2c3e50 40%, transparent 45%),
                linear-gradient(180deg, #EA2839 25%, #1A206D 25%, #1A206D 50%, #FFD500 50%, #FFD500 75%, #00A551 75%)
            `,
            clipPath: "polygon(50% 0%, 100% 30%, 100% 100%, 0 100%, 0 30%)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "11px",
            padding: "15px 5px",
            filter: "drop-shadow(2px 2px 0px #fff) drop-shadow(-2px -2px 0px #fff)",
            textShadow: "1px 1px 2px #000"
        }
    }
];
