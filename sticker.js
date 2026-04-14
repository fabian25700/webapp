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
        /* Briefmarken-Hintergrund: Himmelblau mit gezacktem Rand (simuliert durch radial-gradient) */
        backgroundColor: "#87CEEB",
        backgroundImage: `
            radial-gradient(circle, #fff 50%, transparent 55%),
            radial-gradient(circle, #fff 50%, transparent 55%),
            radial-gradient(circle, #fff 50%, transparent 55%),
            radial-gradient(circle, #fff 50%, transparent 55%),
            /* Darstellung des Burj Khalifa (stilisierte Stufenpyramide/Nadel) */
            linear-gradient(90deg, transparent 60%, #475569 60%, #475569 62%, transparent 62%, transparent 64%, #475569 64%, #475569 68%, transparent 68%, transparent 70%, #475569 70%, #475569 72%, transparent 72%),
            linear-gradient(0deg, #64748b 0%, #64748b 40%, #94a3b8 40%, #94a3b8 70%, #cbd5e1 70%, #cbd5e1 90%, transparent 90%)
        `,
        backgroundSize: "20px 20px, 20px 20px, 20px 20px, 20px 20px, 100% 100%, 40px 150px",
        backgroundPosition: "0 -10px, 0 100%, -10px 0, 100% 0, 0 0, 70% 80%",
        backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y, no-repeat, no-repeat",
        
        /* Briefmarken-Form */
        clipPath: "none", 
        borderRadius: "2px",
        border: "12px solid #fff",
        
        color: "#1e293b",
        fontWeight: "bold",
        fontSize: "16px",
        letterSpacing: "2px",
        textShadow: "none",
        
        display: "flex",
        /* Text links senkrecht positionieren */
        alignItems: "center",
        justifyContent: "flex-start",
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        paddingRight: "20px",
        
        filter: "drop-shadow(3px 3px 0px #fff)"
    }
}
    {
    stadt: "Stockholm",
    land: "Schweden",
    naechte: 4,
    style: {
        /* Hintergrund mit gelbem Kreuz und blauem Feld */
        background: `
            linear-gradient(90deg, transparent 25%, #FECC00 25%, #FECC00 35%, transparent 35%),
            linear-gradient(0deg, transparent 45%, #FECC00 45%, #FECC00 55%, transparent 55%),
            #006AA7
        `,
        border: "6px double #FECC00",
        borderRadius: "15px",
        color: "#FECC00",
        fontWeight: "800",
        fontSize: "15px",
        textShadow: "1px 1px 0 #000",
        display: "flex",
        /* Positionierung in der unteren rechten Ecke */
        alignItems: "flex-end",
        justifyContent: "flex-end",
        padding: "15px",
        /* Drei stilisierte Kronen im oberen rechten Feld via ::before (wird hier als Pseudo-Element simuliert) */
        /* Für die Kronen nutzen wir ein zusätzliches Hintergrund-Element (radial-gradients) */
        backgroundImage: `
            radial-gradient(circle at 75% 20%, #FECC00 6px, transparent 7px),
            radial-gradient(circle at 65% 35%, #FECC00 6px, transparent 7px),
            radial-gradient(circle at 85% 35%, #FECC00 6px, transparent 7px),
            linear-gradient(90deg, transparent 25%, #FECC00 25%, #FECC00 35%, transparent 35%),
            linear-gradient(0deg, transparent 45%, #FECC00 45%, #FECC00 55%, transparent 55%)
        `,
        backgroundColor: "#006AA7",
        filter: "drop-shadow(3px 3px 0px #fff)"
    }
}
   {
    stadt: "Le Morne Brabant",
    land: "Mauritius",
    naechte: 5,
    style: {
        background: "linear-gradient(180deg, #EA2839 25%, #1A206D 26%, #1A206D 50%, #FFD500 51%, #FFD500 75%, #00A551 76%)",
        /* polygon geändert, um die Silhouette des Berges Le Morne Brabant nachzubilden */
        clipPath: "polygon(50% 0%, 80% 20%, 100% 100%, 0% 100%, 20% 20%)",
        color: "#ffffff",
        fontWeight: "900",
        fontSize: "12px",
        textShadow: "2px 2px 4px #000",
        display: "flex",
        /* alignItems geändert, um Text unten zu positionieren */
        alignItems: "flex-end",
        justifyContent: "center",
        /* padding hinzugefügt, damit der Text mittig im grünen Streifen sitzt */
        paddingBottom: "10px",
        filter: "drop-shadow(3px 3px 0px #fff)"
    }
}
];
