const stickerDaten = [
    {
        stadt: "Kopenhagen",
        land: "Dänemark",
        naechte: 4,
        fussball: "Ja ⚽",
        notiz: "Papas 60. Geburtstag",
        top10: true,
        style: {
            /* NEUES DESIGN: Die Form der weltberühmten "Kleinen Meerjungfrau" auf ihrem Stein.
               Der Text sitzt im klaren, roten Bereich, die Figur ist eine Silhouette am Rand. */
            background: `
                /* Weisses Kreuz-Linien des Dannebrog (nach links verschoben) */
                linear-gradient(90deg, transparent 15%, #fff 15%, #fff 20%, transparent 20%),
                linear-gradient(0deg, transparent 45%, #fff 45%, #fff 55%, transparent 55%),
                /* Die Kleine Meerjungfrau Silhouette (schwarz, unten rechts) */
                radial-gradient(circle at 75% 85%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 15%, transparent 16%),
                radial-gradient(circle at 70% 75%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 10%, transparent 11%),
                /* Grundfarbe Rot */
                #C8102E
            `,
            /* Meerjungfrau-auf-Stein Silhouette */
            clipPath: "polygon(0% 15%, 15% 15%, 20% 0%, 35% 15%, 60% 15%, 70% 30%, 80% 45%, 90% 65%, 100% 85%, 100% 100%, 0% 100%)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "12px", // Etwas größer für bessere Lesbarkeit
            fontFamily: "Helvetica Neue, sans-serif",
            /* KORREKTUR: Drop-shadow statt Border für clipPath */
            filter: "drop-shadow(2px 2px 0px #fff) drop-shadow(-2px -2px 0px #fff) drop-shadow(2px -2px 0px #fff) drop-shadow(-2px 2px 0px #fff)",
            display: "flex",
            alignItems: "flex-start", // Text oben links positionieren
            justify-content: "flex-start",
            padding: "25px 15px", // Mehr Padding für Text-Freiraum
            textShadow: "1px 1px 3px rgba(0,0,0,0.6)"
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
            /* DESIGN: Bleibt unverändert perfekt. Die "Big Apple" Form mit integrierter USA-Flagge und Freiheitsstatue Skyline. */
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
            fontFamily: "Arial Black, Gadget, sans-serif", // Blockige US-Typo
            filter: "drop-shadow(3px 3px 0px #fff) drop-shadow(-3px -3px 0px #fff) drop-shadow(3px -3px 0px #fff) drop-shadow(-3px 3px 0px #fff)",
            letterSpacing: "1px",
            textShadow: "2px 2px 0 #002868, 3px 3px 0 rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justify-content: "center",
            padding: "10px"
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
            /* NEUES DESIGN: Ein stilisierter Schiffsbug, der den ikonischen AIDA-Kussmund und das Auge integriert.
               Klarer Text-Bereich im oberen, blauen Teil. */
            background: `
                /* Das blaue Auge (oben links, im Text-Bereich) */
                radial-gradient(circle at 20% 20%, #fff 0%, #fff 6%, #005DAA 7%, #005DAA 12%, #fff 13%, #fff 16%, transparent 17%),
                /* Die roten Kussmund-Lippen (unten mittig, auf weißem Grund) */
                radial-gradient(ellipse at 50% 85%, #E2001A 0%, #E2001A 25%, transparent 26%),
                radial-gradient(ellipse at 40% 75%, #E2001A 0%, #E2001A 15%, transparent 16%),
                radial-gradient(ellipse at 60% 75%, #E2001A 0%, #E2001A 15%, transparent 16%),
                /* Streifen-Hintergrund (Blau oben für Text, Weiß unten für Mund) */
                linear-gradient(180deg, #005DAA 50%, #fff 50%)
            `,
            clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)", // Trapez-Form (Schiffsbug-Frontal)
            color: "#fff", // Weißer Text auf blauem Grund
            fontStyle: "italic",
            fontWeight: "bold",
            fontSize: "16px",
            fontFamily: "Trebuchet MS, sans-serif", // Maritime Typo
            padding: "15px 10px", // Padding für Text-Freiraum oben
            filter: "drop-shadow(3px 3px 0px #fff) drop-shadow(-3px -3px 0px #fff) drop-shadow(3px -3px 0px #fff) drop-shadow(-3px 3px 0px #fff)",
            textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "flex-start",
            justify-content: "flex-start"
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
            /* DESIGN: Bleibt unverändert perfekt. Die Silhouette des Burj Al Arab vor der VAE-Flagge. */
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
            fontFamily: "Futura, sans-serif", // Moderne, klare Typo
            padding: "10px 5px",
            filter: "drop-shadow(2px 2px 0px #fff) drop-shadow(-2px -2px 0px #fff) drop-shadow(2px -2px 0px #fff) drop-shadow(-2px 2px 0px #fff)",
            textShadow: "1px 1px 2px #000",
            display: "flex",
            alignItems: "center",
            justify-content: "center"
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
            /* NEUES DESIGN: Die Form der drei Kronen (Tre Kronor) aus dem schwedischen Wappen.
               Text sitzt im klaren, blauen Bereich, die Kronen sind Silhouetten am Rand. */
            background: `
                /* Vertikale gelbe Linie (Dicke reduziert, nach links verschoben) */
                linear-gradient(90deg, transparent 15%, #FECC00 15%, #FECC00 20%, transparent 20%),
                /* Horizontale gelbe Linie */
                linear-gradient(0deg, transparent 45%, #FECC00 45%, #FECC00 55%, transparent 55%),
                /* Drei Kronen Symbol (stilisierte Silhouetten, unten rechts) */
                radial-gradient(circle at 75% 75%, #FECC00 0%, #FECC00 6%, transparent 7%),
                radial-gradient(circle at 80% 85%, #FECC00 0%, #FECC00 6%, transparent 7%),
                radial-gradient(circle at 70% 85%, #FECC00 0%, #FECC00 6%, transparent 7%),
                /* Grundfarbe Blau */
                #006AA7
            `,
            /* Drei Kronen Silhouette (Die-Cut Form) */
            clipPath: "polygon(0% 20%, 20% 20%, 25% 0%, 40% 20%, 60% 20%, 65% 0%, 80% 20%, 100% 20%, 100% 100%, 0% 100%)",
            color: "#FECC00",
            fontWeight: "bold",
            fontSize: "12px", // Größer für bessere Lesbarkeit
            fontFamily: "Optima, sans-serif", // Elegante skandinavische Typo
            border: "2px solid #FECC00", /* Border funktioniert hier, da clipPath die Form nicht schneidet */
            filter: "drop-shadow(2px 2px 0px #fff) drop-shadow(-2px -2px 0px #fff) drop-shadow(2px -2px 0px #fff) drop-shadow(-2px 2px 0px #fff)",
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "flex-start", // Text oben links
            justify-content: "flex-start",
            padding: "20px 15px",
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
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
            /* NEUES DESIGN: Ein stilisierter Dodo (Nationalvogel) vor dem Berg Le Morne Brabant.
               Text sitzt im klaren, roten Bereich oben. */
            background: `
                /* Berg Silhouette (dunkelgrün, unten) */
                linear-gradient(to top, #00A551 0%, #00A551 30%, transparent 35%),
                /* Dodo Silhouette (schwarz, unten rechts) */
                radial-gradient(circle at 75% 75%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 15%, transparent 16%),
                radial-gradient(circle at 65% 70%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 10%, transparent 11%),
                /* Streifen der Flagge (Rot, Blau, Gelb, Grün) - Nach oben geschoben */
                linear-gradient(180deg, #EA2839 25%, #1A206D 25%, #1A206D 50%, #FFD500 50%, #FFD500 75%, transparent 75%)
            `,
            clipPath: "polygon(50% 0%, 100% 30%, 100% 100%, 0 100%, 0 30%)", // Berg-Silhouette
            color: "#fff",
            fontWeight: "bold",
            fontSize: "12px", // Größer für bessere Lesbarkeit
            fontFamily: "Gill Sans, sans-serif", // Exotische, klare Typo
            padding: "20px 15px", // Mehr Padding oben für Text
            filter: "drop-shadow(2px 2px 0px #fff) drop-shadow(-2px -2px 0px #fff) drop-shadow(2px -2px 0px #fff) drop-shadow(-2px 2px 0px #fff)",
            textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
            letterSpacing: "0.5px",
            display: "flex",
            alignItems: "flex-start", // Text oben links
            justify-content: "flex-start"
        }
    }
];
