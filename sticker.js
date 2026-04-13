const stickerDaten = [
    {
        stadt: "Kopenhagen",
        land: "Dänemark",
        naechte: 4,
        fussball: "Ja ⚽",
        top10: true,
        style: {
            /* Rechteckig mit abgerundeter Ecke - typisch für skandinavische Schilder */
            borderRadius: "5px 40px 5px 5px",
            background: "linear-gradient(135deg, #C8102E 0%, #C8102E 70%, #ffffff 71%, #ffffff 80%, #C8102E 81%)",
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "14px",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(3px 3px 0px #fff) drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
            border: "2px solid #fff"
        }
    },
    {
        stadt: "New York",
        land: "USA",
        naechte: 4,
        fussball: "Nein",
        top10: true,
        style: {
            /* Klassischer Kreis-Sticker */
            borderRadius: "50%",
            background: "#002868",
            border: "4px repeating-linear-gradient(45deg, #bf0a30, #bf0a30 10px, #fff 10px, #fff 20px)",
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(3px 3px 0px #fff) drop-shadow(0 4px 10px rgba(0,0,0,0.4))"
        }
    },
    {
        stadt: "AIDA",
        land: "International",
        naechte: 10,
        fussball: "Nein",
        top10: true,
        style: {
            /* Eine einfache Wellenform (Trapez) */
            clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)",
            background: "linear-gradient(to right, #005DAA 0%, #0091FF 100%)",
            borderBottom: "6px solid #E2001A",
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "18px",
            fontStyle: "italic",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(3px 3px 0px #fff) drop-shadow(0 4px 8px rgba(0,0,0,0.2))"
        }
    },
    {
        stadt: "Dubai",
        land: "VAE",
        naechte: 9,
        fussball: "Ja ⚽",
        top10: true,
        style: {
            /* Dreieckiges Wimpel-Design */
            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
            background: "#00732F",
            borderLeft: "15px solid #FF0000",
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "14px",
            paddingLeft: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            filter: "drop-shadow(3px 3px 0px #fff) drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
        }
    },
    {
        stadt: "Stockholm",
        land: "Schweden",
        naechte: 4,
        fussball: "Ja ⚽",
        top10: true,
        style: {
            /* Abgerundetes Rechteck mit "Crown" Notch oben */
            clipPath: "polygon(0 0, 40% 0, 50% 10%, 60% 0, 100% 0, 100% 100%, 0 100%)",
            background: "#006AA7",
            color: "#FECC00",
            border: "3px solid #FECC00",
            fontWeight: "bold",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(3px 3px 0px #fff) drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
        }
    },
    {
        stadt: "Le Morne",
        land: "Mauritius",
        naechte: 5,
        fussball: "Nein",
        top10: true,
        style: {
            /* Hexagonale Form für den "Fels" Effekt */
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            background: "linear-gradient(180deg, #EA2839 0%, #1A206D 33%, #FFD500 66%, #00A551 100%)",
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            filter: "drop-shadow(3px 3px 0px #fff) drop-shadow(0 4px 8px rgba(0,0,0,0.4))"
        }
    }
];
