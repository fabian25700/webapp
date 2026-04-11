const stickerDaten = [
    {
        stadt: "Kopenhagen",
        land: "Dänemark",
        naechte: 4,
        fussball: "Ja ⚽",
        notiz: "Papas 60. Geburtstag",
        top10: true,
        style: {
            /* DESIGN: Die "Kleine Meerjungfrau" Silhouette vor der dänischen Flagge (Dannebrog).
               Die Form ist wellenartig (Die-Cut). */
            background: `
                /* Weisse Kreuz-Linien des Dannebrog */
                linear-gradient(90deg, transparent 20%, #fff 20%, #fff 25%, transparent 25%),
                linear-gradient(0deg, transparent 45%, #fff 45%, #fff 55%, transparent 55%),
                /* Die Kleine Meerjungfrau Silhouette (schwarz, unten rechts) */
                radial-gradient(circle at 70% 80%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 15%, transparent 16%),
                radial-gradient(circle at 65% 70%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 10%, transparent 11%),
                /* Grundfarbe Rot */
                #C8102E
            `,
            clipPath: "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)", // Wellen-Form
            color: "#fff",
            fontWeight: "bold",
            fontSize: "10px",
            border: "1px solid rgba(0,0,0,0.2)",
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
            /* DESIGN: Die "Big Apple" Form mit integrierter USA-Flagge und Freiheitsstatue Skyline.
               Fotorealistischer Die-Cut Rand durch reisekoffer.html. */
            background: `
                /* Blaues Feld oben links */
                linear-gradient(90deg, #002868 45%, transparent 45%),
                /* Rote & Weisse Streifen */
                repeating-linear-gradient(0deg, #bf0a30, #bf0a30 14.28px, #fff 14.28px, #fff 28.56px),
                /* Freiheitsstatue & Skyline Silhouette (von unten kommend) */
                linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 30%, transparent 35%),
                /* Grundfarbe (wird durch Streifen überdeckt, aber wichtig) */
                #fff
            `,
            /* Apfel-Silhouette mit Stiel-Ansatz */
            clipPath: "polygon(50% 0%, 65% 5%, 85% 15%, 83% 25%, 95% 35%, 100% 50%, 95% 75%, 85% 90%, 50% 100%, 15% 90%, 5% 75%, 0% 50%, 5% 35%, 15% 15%, 35% 5%)",
            color: "#fff",
            fontWeight: "900",
            fontSize: "14px",
            border: "1px solid rgba(0,0,0,0.2)",
            letterSpacing: "1px",
            textShadow: "2px 2px 0 #002868, 3px 3px 0 rgba(0,0,0,0.3)"
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
            /* DESIGN: Der ikonische AIDA-Kussmund und das Auge vor den Firmenfarben.
               Die Form ist ein Schiffsbug/Welle. */
            background: `
                /* Das blaue Auge (oben links) */
                radial-gradient(circle at 20% 25%, #fff 0%, #fff 8%, #005DAA 9%, #005DAA 15%, #fff 16%, #fff 20%, transparent 21%),
                /* Die roten Kussmund-Lippen (unten mittig) */
                radial-gradient(ellipse at 50% 85%, #E2001A 0%, #E2001A 25%, transparent 26%),
                radial-gradient(ellipse at 40% 75%, #E2001A 0%, #E2001A 15%, transparent 16%),
                radial-gradient(ellipse at 60% 75%, #E2001A 0%, #E2001A 15%, transparent 16%),
                /* Streifen (Blau & Weiß) */
                linear-gradient(180deg, #005DAA 40%, #fff 40%)
            `,
            clipPath: "polygon(0 0, 100% 0, 100% 60%, 50% 100%, 0 60%)", // Schiffsbug-Form
            color: "#E2001A",
            fontStyle: "italic",
            fontWeight: "bold",
            fontSize: "16px",
            padding: "20px 5px",
            border: "2px solid #005DAA",
            textShadow: "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff" // Weißer Rand um roten Text
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
            /* DESIGN: Die Silhouette des Burj Al Arab ("Segel-Hotel") vor der VAE-Flagge.
               Die Form ist ein spitzer Diamant/Segel. */
            background: `
                /* Der schwarze Text-Balken der Flagge (unten) */
                linear-gradient(to bottom, transparent 66%, #000 66%),
                /* Burj Al Arab Silhouette (weiß, mittig, von unten kommend) */
                linear-gradient(to top, #fff 0%, #fff 50%, transparent 55%),
                /* Das Segel-Profil ( clip-path des Inhalts) */
                linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.4) 45%, transparent 50%),
                /* Flaggenfarben (Rot links, Grün rechts oben) */
                linear-gradient(to right, #FF0000 25%, #00732F 25%)
            `,
            clipPath: "polygon(50% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)", // Diamant/Segel-Form
            color: "#fff",
            fontWeight: "bold",
            fontSize: "12px",
            padding: "10px 5px",
            border: "1px solid rgba(0,0,0,0.2)",
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
            /* DESIGN: Das ikonische gelbe Kreuz auf blauem Grund, kombiniert mit der Silhouette des Rathauses (Stadshuset) und seinen drei Kronen.
               Form: Klassisches Rechteck mit abgerundeten Ecken (Gepäckanhänger-Optik). */
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
            borderRadius: "5px",
            color: "#FECC00",
            fontWeight: "bold",
            fontSize: "10px",
            border: "4px solid #FECC00",
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)", // Tiefenwirkung
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
            /* DESIGN: Die Silhouette des Berges Le Morne Brabant vor der vierfarbigen Nationalflagge.
               Die Form ist die Silhouette des Berges selbst (Semi-Circular oben). */
            background: `
                /* Berg Silhouette (dunkel, unten) */
                linear-gradient(to top, #2c3e50 0%, #2c3e50 40%, transparent 45%),
                /* Streifen der Flagge (Rot, Blau, Gelb, Grün) */
                linear-gradient(180deg, #EA2839 25%, #1A206D 25%, #1A206D 50%, #FFD500 50%, #FFD500 75%, #00A551 75%)
            `,
            clipPath: "polygon(50% 0%, 100% 30%, 100% 100%, 0 100%, 0 30%)", // Berg-Silhouette
            color: "#fff",
            fontWeight: "bold",
            fontSize: "11px",
            padding: "15px 5px",
            border: "1px solid rgba(0,0,0,0.2)",
            textShadow: "1px 1px 2px #000",
            letterSpacing: "0.5px"
        }
    }
];
