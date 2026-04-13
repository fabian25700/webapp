const stickerDaten = [
    {
        stadt: "Kopenhagen",
        land: "Dänemark",
        naechte: 4,
        fussball: "Ja ⚽",
        top10: true,
        style: {
            /* DETAIL: Die ikonische Kleine Meerjungfrau Silhouette sitzt auf einem grauen Stein vor der Dannebrog-Flagge.
               Der Text sitzt im klaren, roten Bereich oben. */
            background: `
                /* Meerjungfrau Silhouette (schwarz, unten rechts) */
                radial-gradient(circle at 75% 85%, #000 0%, #000 15%, transparent 16%),
                radial-gradient(circle at 70% 75%, #000 0%, #000 10%, transparent 11%),
                /* Der Stein (Grau, unten) */
                linear-gradient(to top, #7f8c8d 0%, #7f8c8d 30%, transparent 31%),
                /* Dänemark-Flagge (Dannebrog) Kreuz */
                linear-gradient(90deg, transparent 20%, #fff 20%, #fff 25%, transparent 25%),
                linear-gradient(0deg, transparent 45%, #fff 45%, #fff 55%, transparent 55%),
                /* Grundfarbe Rot */
                #C8102E
            `,
            clipPath: "polygon(0% 15%, 15% 15%, 20% 0%, 35% 15%, 60% 15%, 70% 30%, 80% 45%, 90% 65%, 100% 85%, 100% 100%, 0% 100%)", // Wellen-Form
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "12px",
            /* KORREKTUR FÜR LESBARKEIT: Schwarzer Rand um weissen Text */
            textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
            border: "1px solid rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "20px 10px",
            filter: "drop-shadow(3px 3px 0px #fff) drop-shadow(-3px -3px 0px #fff)"
        }
    },
    {
        stadt: "New York",
        land: "USA",
        naechte: 4,
        fussball: "Nein",
        top10: true,
        style: {
            /* DETAIL: Der "Big Apple" mit USA-Flagge und detailreicherer Skyline Silhouette (Freiheitsstatue & Empire State Building). */
            background: `
                /* Skyline Silhouette (Empire State & Statue of Liberty) */
                linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 25%, transparent 30%),
                /* US-Flagge: Blaues Feld mit Sternen (Punkte) */
                radial-gradient(circle at 10% 10%, #fff 0%, #fff 2%, transparent 3%),
                radial-gradient(circle at 20% 20%, #fff 0%, #fff 2%, transparent 3%),
                radial-gradient(circle at 10% 30%, #fff 0%, #fff 2%, transparent 3%),
                radial-gradient(circle at 20% 40%, #fff 0%, #fff 2%, transparent 3%),
                linear-gradient(90deg, #002868 40%, transparent 40%),
                /* US-Flagge: Rote Streifen */
                repeating-linear-gradient(0deg, #bf0a30, #bf0a30 14.28px, #fff 14.28px, #fff 28.56px),
                /* Grundfarbe */
                #fff
            `,
            clipPath: "polygon(50% 0%, 65% 5%, 85% 15%, 83% 25%, 95% 35%, 100% 50%, 95% 75%, 85% 90%, 50% 100%, 15% 90%, 5% 75%, 0% 50%, 5% 35%, 15% 15%, 35% 5%)",
            color: "#ffffff",
            fontWeight: "900",
            fontSize: "14px",
            /* KORREKTUR FÜR LESBARKEIT: Dunkelblauer Rand um weissen Text */
            textShadow: "2px 2px 0 #002868, 3px 3px 0 rgba(0,0,0,0.3)",
            letterSpacing: "1px",
            textTransform: "uppercase",
            border: "1px solid rgba(0,0,0,0.2)",
            filter: "drop-shadow(3px 3px 0px #fff) drop-shadow(-3px -3px 0px #fff)"
        }
    },
    {
        stadt: "AIDA",
        land: "International",
        naechte: 10,
        fussball: "Nein",
        top10: true,
        style: {
            /* DETAIL: Der Bug eines AIDA-Schiffes mit dem ikonischen Kussmund und dem Auge vor den Firmenfarben.
               Der Text ist oben im klaren, blauen Bereich. */
            background: `
                /* Das blaue Auge (oben links) */
                radial-gradient(circle at 20% 25%, #fff 0%, #fff 8%, #005DAA 9%, #005DAA 15%, #fff 16%, #fff 20%, transparent 21%),
                /* Die roten Kussmund-Lippen (unten mittig) */
                radial-gradient(ellipse at 50% 85%, #E2001A 0%, #E2001A 25%, transparent 26%),
                radial-gradient(ellipse at 40% 75%, #E2001A 0%, #E2001A 15%, transparent 16%),
                radial-gradient(ellipse at 60% 75%, #E2001A 0%, #E2001A 15%, transparent 16%),
                /* Streifen (Blau & Weiß) */
                linear-gradient(180deg, #005DAA 50%, #fff 50%)
            `,
            clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)", // Schiffsbug-Form
            color: "#E2001A", // Rot auf weissem Grund (unten) oder blauem Grund (oben, mit Schatten)
            fontStyle: "italic",
            fontWeight: "bold",
            fontSize: "16px",
            padding: "15px 5px",
            border: "2px solid #005DAA",
            /* KORREKTUR FÜR LESBARKEIT: Weißer Rand um roten Text */
            textShadow: "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start"
        }
    },
    {
        stadt: "Dubai",
        land: "VAE",
        naechte: 9,
        fussball: "Ja ⚽",
        top10: true,
        style: {
            /* DETAIL: Die Silhouette des Burj Al Arab ("Segel-Hotel") vor der VAE-Flagge.
               Der Text sitzt im klaren, grünen Bereich oben. */
            background: `
                /* Der schwarze Balken der Flagge (unten) */
                linear-gradient(to bottom, transparent 66%, #000 66%),
                /* Burj Al Arab Silhouette (weiß, mittig, von unten kommend) */
                linear-gradient(to top, #fff 0%, #fff 50%, transparent 55%),
                /* Das Segel-Profil ( clip-path des Inhalts) */
                linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.4) 45%, transparent 50%),
                /* Flaggenfarben (Rot links, Grün rechts oben) */
                linear-gradient(to right, #FF0000 25%, #00732F 25%)
            `,
            clipPath: "polygon(50% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)", // Segel-Form
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "12px",
            padding: "10px 5px",
            border: "1px solid rgba(0,0,0,0.2)",
            /* KORREKTUR FÜR LESBARKEIT: Schwarzer Rand um weissen Text */
            textShadow: "1px 1px 2px #000, -1px -1px 1px #000",
            filter: "drop-shadow(3px 3px 0px #fff) drop-shadow(-3px -3px 0px #fff)"
        }
    },
    {
        stadt: "Stockholm",
        land: "Schweden",
        naechte: 4,
        fussball: "Ja ⚽",
        top10: true,
        style: {
            /* DETAIL: Das ikonische gelbe Kreuz auf blauem Grund, kombiniert mit der Silhouette des Rathauses (Stadshuset) und seinen drei Kronen. */
            background: `
                /* Vertikale gelbe Linie */
                linear-gradient(90deg, transparent 30%, #FECC00 30%, #FECC00 40%, transparent 40%),
                /* Horizontale gelbe Linie */
                linear-gradient(0deg, transparent 45%, #FECC00 45%, #FECC00 55%, transparent 55%),
                /* Rathaus Silhouette (schwarz, unten rechts) */
                linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 30%, transparent 31%),
                /* Drei Kronen Symbol (vereinfacht, gelb, oben links) */
                radial-gradient(circle at 15% 15%, #FECC00 0%, #FECC00 5%, transparent 6%),
                radial-gradient(circle at 20% 25%, #FECC00 0%, #FECC00 5%, transparent 6%),
                radial-gradient(circle at 10% 25%, #FECC00 0%, #FECC00 5%, transparent 6%),
                /* Grundfarbe Blau */
                #006AA7
            `,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)", // Wappen-Form
            color: "#FECC00",
            fontWeight: "bold",
            fontSize: "13px",
            border: "4px solid #FECC00",
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)", // Tiefenwirkung
            /* KORREKTUR FÜR LESBARKEIT: Dunkelblauer Rand um gelben Text */
            textShadow: "1px 1px 2px #006AA7, -1px -1px 1px #006AA7",
            filter: "drop-shadow(3px 3px 0px #fff) drop-shadow(-3px -3px 0px #fff)"
        }
    },
    {
        stadt: "Le Morne",
        land: "Mauritius",
        naechte: 5,
        fussball: "Nein",
        top10: true,
        style: {
            /* DETAIL: Die Silhouette des Berges Le Morne Brabant vor der vierfarbigen Nationalflagge. */
            background: `
                /* Berg Silhouette (dunkel, unten) */
                linear-gradient(to top, #2c3e50 0%, #2c3e50 40%, transparent 45%),
                /* Streifen der Flagge (Rot, Blau, Gelb, Grün) */
                linear-gradient(180deg, #EA2839 25%, #1A206D 25%, #1A206D 50%, #FFD500 50%, #FFD500 75%, #00A551 75%)
            `,
            clipPath: "polygon(0% 100%, 20% 80%, 40% 20%, 60% 0%, 80% 20%, 100% 100%)", // Berg-Silhouette
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "11px",
            padding: "15px 5px",
            border: "1px solid rgba(0,0,0,0.2)",
            /* KORREKTUR FÜR LESBARKEIT: Schwarzer Rand um weissen Text */
            textShadow: "1px 1px 2px #000, -1px -1px 1px #000",
            letterSpacing: "0.5px",
            filter: "drop-shadow(3px 3px 0px #fff) drop-shadow(-3px -3px 0px #fff)"
        }
    }
];
