export type ContentSection = {
  body: string;
  points?: string[];
  title: string;
};

export type FaqItem = {
  answer: string;
  question: string;
};

export type ContentPage = {
  cta: string;
  description: string;
  faqs?: FaqItem[];
  h1: string;
  intro: string;
  path: string;
  related: Array<[string, string]>;
  sections: ContentSection[];
  title: string;
};

export const functionPages: Record<string, ContentPage> = {
  "nebenkostenabrechnung": {
    title: "Nebenkostenabrechnung vorbereiten mit Prüfstatus | Mietfolio",
    description:
      "Mietfolio hilft privaten Vermietern bei Nebenkosten, KI-Belegimport, Review-Aufgaben, Zählerständen, CO2-Anteilen, Prüfstatus und PDF-Export.",
    path: "/funktionen/nebenkostenabrechnung",
    h1: "Nebenkostenabrechnung für private Vermieter",
    intro:
      "Mietfolio bündelt Kostenpositionen, Umlagefähigkeit, Zählerstände, CO2-Anteile, Vorauszahlungen, KI-Belegimport und PDF-Ausgabe in einem objektbezogenen Prüffluss. So wird aus verstreuten Belegen eine nachvollziehbare Vorbereitung für die jährliche Nebenkostenabrechnung.",
    cta: "Nebenkosten in Mietfolio vorbereiten",
    sections: [
      {
        title: "Kostenpositionen mit Kontext prüfen",
        body:
          "Grundsteuer, Versicherung, Wasser, Wartung und weitere Betriebskosten werden pro Abrechnungsjahr erfasst. Jede Position bleibt mit Betrag, Kategorie, Umlagefähigkeit, Arbeitskostenanteil, Quelle und Notiz nachvollziehbar.",
        points: ["Jahresbezogene Kostenlisten", "Umlagefähige und nicht umlagefähige Positionen", "Arbeitskostenanteile für spätere Prüfung", "Quellen- und Notizfelder je Position"],
      },
      {
        title: "KI-Importe mit menschlicher Freigabe",
        body:
          "Nebenkostenbelege können importiert und als strukturierte Vorschläge übernommen werden. KI-Positionen tragen Sicherheitswerte, Belegspuren und Review-Hinweise; finale Exporte bleiben blockiert, bis offene Prüfaufgaben bestätigt sind.",
        points: ["PDF-, Tabellen-, JSON- und Bildimport", "KI-Sicherheit, Belegauszüge und Rohdaten", "Review-Aufgaben je importierter Position", "Keine Finalisierung ohne bestätigte Pflichtprüfung"],
      },
      {
        title: "Zählerstände, Verteilung und CO2",
        body:
          "Mietfolio unterstützt bei Zählerwerten, Abrechnungszeitraum, Verteilerschlüsseln, Mieteranteil, Vorauszahlungen und CO2-Aufteilung. Der Abrechnungscheck zeigt Blocker, Warnungen, Berechnungsstand und Regelversionen sichtbar an.",
        points: ["Zählerstand-Historie", "Verteilerschlüssel pro Jahr", "CO2-Stufen und Vermieterabzug", "Jahresvergleich bei mehreren Jahren"],
      },
      {
        title: "Entwurf, Finalisierung und Prüfanhang",
        body:
          "Entwürfe können mit Prüfstatus ausgegeben werden. Das Final-PDF wird erst erstellt, wenn keine harten Fehler offen sind, und enthält einen Prüfanhang mit Berechnungs-, Validierungs- und KI-Audit-Stand.",
        points: ["Entwurfs-PDF mit Wasserzeichen", "Final-PDF nur ohne Blocker", "Prüfanhang und AI-Audit", "Archivfähiger Finalisierungsstand je Jahr"],
      },
    ],
    faqs: [
      {
        question: "Welche Nebenkosten kann ich in Mietfolio vorbereiten?",
        answer:
          "Typische Positionen wie Grundsteuer, Versicherung, Wasser, Abwasser, Wartung, Allgemeinstrom oder Dienstleisterkosten lassen sich pro Jahr strukturiert sammeln und mit Notizen versehen.",
      },
      {
        question: "Ersetzt Mietfolio eine rechtliche Prüfung der Abrechnung?",
        answer:
          "Nein. Mietfolio hilft bei Struktur, Dokumentation und Export. Umlagefähigkeit, Fristen und Sonderfälle sollten bei Bedarf individuell geprüft werden.",
      },
      {
        question: "Was passiert mit KI-importierten Positionen?",
        answer:
          "KI-Positionen werden als Vorschläge mit Sicherheitswert, Belegspur und Prüfstatus gespeichert. Nutzer bestätigen oder korrigieren die Angaben, bevor ein Final-PDF erstellt werden kann.",
      },
    ],
    related: [
      ["Dokumentenverwaltung", "/funktionen/dokumentenverwaltung-vermieter"],
      ["Hinweise und Fristen", "/funktionen/hinweise-fristen"],
      ["Ratgeber Nebenkosten", "/ratgeber/nebenkostenabrechnung-private-vermieter"],
      ["Ratgeber Fristen", "/ratgeber/fristen-erinnerungen-vermieter"],
    ],
  },
  "dokumentenverwaltung-vermieter": {
    title: "Dokumentenverwaltung und Mieterfreigaben | Mietfolio",
    description:
      "Mietfolio organisiert Mietunterlagen, Belege, Kategorien, KI-Vorschläge, Mieterfreigaben, Upload-Prüfung, Vorschau und ZIP-Export.",
    path: "/funktionen/dokumentenverwaltung-vermieter",
    h1: "Dokumentenverwaltung für Vermieter",
    intro:
      "Verträge, Rechnungen, Belege und Protokolle gehören zu jeder Immobilie. Mietfolio legt diese Unterlagen im passenden Objektkontext ab, unterstützt KI-gestützte Sortierung und verbindet das Archiv mit gezielten Mieterfreigaben.",
    cta: "Dokumente in Mietfolio bündeln",
    sections: [
      {
        title: "Unterlagen pro Immobilie ordnen",
        body:
          "Dokumente werden nicht in einem losen Ordner gesammelt, sondern mit Kategorie, Objektbezug, Datum und Notiz gespeichert. Das hilft besonders, wenn mehrere Wohnungen, Jahre und Nachweisarten parallel laufen.",
        points: ["Kategorien für Belege, Verträge und Protokolle", "Objektbezogene Ablage", "Suche, Sortierung und Kategorie-Filter", "Vorschau, Löschung und Sammelaktionen"],
      },
      {
        title: "Upload mit KI-Sortierhilfe",
        body:
          "Für geeignete Dokumente kann Mietfolio strukturierte Informationen auslesen und Vorschläge für Name, Kategorie, Datum und Notiz liefern. Nutzer behalten die Prüfung, können Vorschläge anpassen und eigene Kategorien pflegen.",
        points: ["PDF, JPG, PNG und WEBP", "Kategorie- und Datums-Vorschläge", "Datei-Hash gegen Dubletten", "Eigene Kategorien verwalten"],
      },
      {
        title: "Mieterfreigaben und Prüfeingang",
        body:
          "Aktive Mieterzugänge können gezielt Dokumente sehen. Dateien aus dem Mieterbereich landen zuerst im Prüfeingang und werden erst nach Annahme in die Vermieter-Dokumente übernommen.",
        points: ["Freigabe je Dokument und Mieter", "Signierte Downloads im Mieterbereich", "Mieter-Uploads annehmen oder ablehnen", "Kein direkter Zugriff auf das komplette Archiv"],
      },
      {
        title: "Archiv und Export",
        body:
          "Für Übergaben, Steuerunterlagen oder die eigene Ablage können einzelne Dateien geöffnet und Dokumente gesammelt als ZIP exportiert werden. So bleiben digitale Ablage, Mieterfreigaben und lokale Nachweise verbunden.",
        points: ["Vorschau per signierter URL", "Einzel-Download", "ZIP-Export für alle oder Auswahl", "Sammellöschung für markierte Dokumente"],
      },
    ],
    faqs: [
      {
        question: "Kann ich Dokumente mehreren Immobilien zuordnen?",
        answer:
          "Dokumente werden im aktiven Objektkontext abgelegt. Dadurch bleiben Verträge, Belege und Protokolle pro Immobilie sauber getrennt.",
      },
      {
        question: "Wofür ist der ZIP-Export gedacht?",
        answer:
          "Der ZIP-Export is für lokale Ablage, Übergaben und spätere Nachweise gedacht, wenn Dokumente aus Mietfolio gesammelt exportiert werden sollen.",
      },
      {
        question: "Können Mieter Dokumente sehen oder hochladen?",
        answer:
          "Ja, wenn ein aktiver Mieterzugang vorhanden ist. Vermieter geben Dokumente gezielt frei und prüfen Uploads, bevor sie ins eigene Archiv übernommen werden.",
      },
    ],
    related: [
      ["Nebenkostenabrechnung", "/funktionen/nebenkostenabrechnung"],
      ["Mieterportal", "/funktionen/mieterportal"],
      ["Ratgeber Dokumentfreigaben", "/ratgeber/dokumente-mit-mietern-teilen"],
      ["Datenschutz", "/datenschutz"],
    ],
  },
  "rauchmelder-verwaltung": {
    title: "Rauchmelderwartung mit Mieter-Self-Service | Mietfolio",
    description:
      "Mietfolio unterstützt Vermieter bei Rauchmelder-Inventar, Wartungslogs, Bildern, Mieter-Wartungen, Prüfeingang, Terminen und PDF-Protokollen.",
    path: "/funktionen/rauchmelder-verwaltung",
    h1: "Rauchmelderwartung dokumentieren",
    intro:
      "Rauchmelder sind eine wiederkehrende Pflichtaufgabe. Mietfolio hilft, Geräte, Standorte, Wartungsdaten, Bilder, Mieter-Einreichungen und nächste Prüftermine pro Immobilie nachvollziehbar zu dokumentieren.",
    cta: "Rauchmelder in Mietfolio verwalten",
    sections: [
      {
        title: "Inventar pro Wohnung",
        body:
          "Jeder Rauchmelder kann mit Raum, Seriennummer, Einbau- und Wartungsdaten angelegt werden. Dadurch entsteht ein aktueller Überblick über Bestand, Wartungsstatus und offene Aufgaben.",
        points: ["Gerätedaten und Standort", "Wartungsstatus", "Nächste Prüftermine", "Hinweis auf Austauschbedarf"],
      },
      {
        title: "Wartungslogs, Bilder und Import",
        body:
          "Prüfungen lassen sich mit Datum, Ergebnis, Notiz und Bildbezug festhalten. Bilder können Geräten zugeordnet werden; geeignete Rauchmelderdokumente lassen sich importieren und als Geräte- oder Bilddaten übernehmen.",
        points: ["Bildverwaltung je Gerät", "Nicht zugewiesene Bilder zuordnen", "KI-Import für Rauchmelderdokumente", "Suche, Filter und Statussortierung"],
      },
      {
        title: "Mieter-Wartungen prüfen",
        body:
          "Wenn der Vermieter Self-Service freischaltet, können Mieter Wartungen im Mieterbereich einreichen. Diese Einträge erscheinen zuerst im Prüfeingang und werden erst nach Annahme zur offiziellen Wartungshistorie.",
        points: ["Self-Service pro Mieter aktivierbar", "Prüfeingang im Vermieterbereich", "Annehmen oder ablehnen", "Offizielle Logs erst nach Freigabe"],
      },
      {
        title: "PDF-Protokolle exportieren",
        body:
          "Aus gepflegten Daten werden exportierbare Protokolle für einzelne Geräte oder das gesamte Objekt. Mietfolio bleibt dabei ein Verwaltungswerkzeug und ersetzt keine individuelle rechtliche Bewertung der Pflichten.",
        points: ["Objektbericht", "Geräteprotokoll", "Bildbezug im Export", "Nachvollziehbare Wartungshistorie"],
      },
    ],
    faqs: [
      {
        question: "Welche Rauchmelderdaten kann ich dokumentieren?",
        answer:
          "Mietfolio erfasst Standort, Seriennummer, Einbau- und Wartungsdaten sowie Prüfnotizen und Bilder, damit der Bestand nachvollziehbar bleibt.",
      },
      {
        question: "Sind Rauchmelder-Protokolle als PDF exportierbar?",
        answer:
          "Ja. Gepflegte Rauchmelderdaten und Wartungsinformationen können als Protokoll exportiert und in der eigenen Ablage gespeichert werden.",
      },
      {
        question: "Können Mieter Rauchmelderwartungen einreichen?",
        answer:
          "Ja, wenn der Vermieter diese Self-Service-Funktion für den jeweiligen Mieterzugang aktiviert. Eingereichte Wartungen müssen im Vermieterbereich geprüft werden.",
      },
    ],
    related: [
      ["Dokumentenverwaltung", "/funktionen/dokumentenverwaltung-vermieter"],
      ["Hinweise und Fristen", "/funktionen/hinweise-fristen"],
      ["Mieterportal", "/funktionen/mieterportal"],
      ["Ratgeber Rauchmelderwartung", "/ratgeber/rauchmelderwartung-vermieter"],
    ],
  },
  "mieterkommunikation": {
    title: "Mieterkommunikation und Portal-Nachrichten | Mietfolio",
    description:
      "Mietfolio hilft Vermietern, Gespräche, E-Mails, interne Notizen, Mieterportal-Konversationen und Fristen pro Mieter zu dokumentieren.",
    path: "/funktionen/mieterkommunikation",
    h1: "Mieterkommunikation nachvollziehbar dokumentieren",
    intro:
      "Telefonate, E-Mails, Rückfragen, Mieterportal-Nachrichten und interne Notizen verlieren schnell ihren Kontext. Mietfolio verbindet Mieterkommunikation mit Immobilie, Mieter, Portal-Thread und Frist, damit wichtige Vorgänge auffindbar bleiben.",
    cta: "Kommunikation in Mietfolio bündeln",
    sections: [
      {
        title: "Ein Log für wichtige Vorgänge",
        body:
          "Anrufe, eingehende und ausgehende Nachrichten sowie interne Notizen können als Kommunikationsereignisse gespeichert werden.",
        points: ["Mieterbezug", "Richtung und Kanal", "Datum, Inhalt und Notizen", "Suche und Mieterfilter"],
      },
      {
        title: "Portal-Konversationen beantworten",
        body:
          "Nachrichten aus dem Mieterbereich werden getrennt von internen Logs angezeigt. Vermieter können Threads lesen, beantworten und später nachvollziehen, welche Anfrage zu welchem Mieterzugang gehört.",
        points: ["Echte Mieter-Anfragen", "Thread-Verlauf", "Antwort aus dem Vermieterbereich", "Offene und geschlossene Vorgänge"],
      },
      {
        title: "Fristen und Hinweise anschließen",
        body:
          "Aus Mieterstammdaten, Mietenden und Rauchmelderprotokollen entstehen Hinweise. So bleiben offene Antworten, Vertragsenden oder Wartungstermine sichtbar, statt in Postfächern zu verschwinden.",
        points: ["Manuelle Erinnerungen", "Mietende-Hinweise", "Rauchmelder-Fälligkeiten", "Quellenlinks zurück zum Modul"],
      },
      {
        title: "Für kleine Portfolios gemacht",
        body:
          "Der Fokus liegt auf privaten Vermietern und kleinen Verwaltungen, die keine überladene Enterprise-Software brauchen, aber verlässliche Ordnung suchen.",
      },
    ],
    faqs: [
      {
        question: "Welche Kommunikationsarten kann ich dokumentieren?",
        answer:
          "Anrufe, eingehende oder ausgehende Nachrichten, E-Mail-Verläufe und interne Notizen können mit Mieterbezug und Datum gespeichert werden.",
      },
      {
        question: "Kann ich aus Kommunikation Erinnerungen ableiten?",
        answer:
          "Ja. Offene Vorgänge können mit Hinweisen und Fristen verbunden werden, damit wichtige Rückmeldungen nicht in Postfächern oder Notizen verschwinden.",
      },
      {
        question: "Sind Mieterportal-Nachrichten getrennt von internen Notizen?",
        answer:
          "Ja. Interne Kommunikationslogs bleiben als Vermieter-Historie erhalten, während Mieterportal-Konversationen als echte Threads aus dem Mieterbereich angezeigt und beantwortet werden.",
      },
    ],
    related: [
      ["Mieterportal", "/funktionen/mieterportal"],
      ["Hinweise und Fristen", "/funktionen/hinweise-fristen"],
      ["Nebenkostenabrechnung", "/funktionen/nebenkostenabrechnung"],
      ["Ratgeber Fristen", "/ratgeber/fristen-erinnerungen-vermieter"],
    ],
  },
  "mieterportal": {
    title: "Mieterportal mit Freigaben und Self-Service | Mietfolio",
    description:
      "Mietfolio bietet Vermietern Mieterzugänge, Dokumentfreigaben, Upload-Prüfung, Profiländerungen, Nachrichten und Rauchmelder-Self-Service.",
    path: "/funktionen/mieterportal",
    h1: "Mieterportal mit kontrollierten Freigaben",
    intro:
      "Mietfolio bindet Mieter ein, ohne das Vermieterarchiv komplett zu öffnen. Vermieter steuern Zugänge, Dokumentfreigaben, Uploads, Nachrichten, Profiländerungen und optionale Rauchmelderwartungen pro Mieter.",
    cta: "Mieterportal in Mietfolio vorbereiten",
    sections: [
      {
        title: "Mieterzugänge steuern",
        body:
          "Für hinterlegte Mieter können Zugänge eingeladen, erneut versendet, deaktiviert oder reaktiviert werden. Der Vermieter bleibt Eigentümer der Daten und entscheidet, welche Self-Service-Funktionen aktiv sind.",
        points: ["Einladung je Mieter", "Status für aktiv, eingeladen oder deaktiviert", "Zugang nur mit hinterlegter E-Mail", "Self-Service-Rechte je Mieter"],
      },
      {
        title: "Dokumente gezielt freigeben",
        body:
          "Freigegebene Dokumente erscheinen im Mieterbereich. Uploads von Mietern landen nicht automatisch im Archiv, sondern werden im Vermieterbereich geprüft und erst nach Annahme übernommen.",
        points: ["Freigabe je Dokument und Mieter", "Signierte Downloads", "Upload-Prüfeingang", "Annehmen oder ablehnen"],
      },
      {
        title: "Nachrichten und Profiländerungen",
        body:
          "Mieter können Anfragen stellen und Profiländerungen vorschlagen. Vermieter sehen diese Vorgänge im Nachrichten- und Mieterbereich, beantworten Threads und übernehmen Änderungen nur nach Prüfung.",
        points: ["Portal-Konversationen", "Antworten aus Mietfolio", "Profiländerungen prüfen", "Nachvollziehbarer Verlauf"],
      },
      {
        title: "Rauchmelder-Self-Service",
        body:
          "Optional kann ein Mieter Wartungen zu freigegebenen Rauchmeldern einreichen. Diese Einträge werden erst nach Vermieterprüfung zur offiziellen Wartungshistorie.",
        points: ["Freischaltung je Zugang", "Wartung einreichen", "Prüfeingang im Rauchmeldermodul", "Offizielle Logs nach Annahme"],
      },
    ],
    faqs: [
      {
        question: "Sehen Mieter alle Dokumente einer Immobilie?",
        answer:
          "Nein. Mieter sehen nur Dokumente, die der Vermieter für den jeweiligen aktiven Zugang freigibt.",
      },
      {
        question: "Wer prüft Uploads und Profiländerungen?",
        answer:
          "Uploads, Profiländerungen und Rauchmelderwartungen werden im Vermieterbereich geprüft. Erst nach Annahme werden sie in die jeweilige Vermieteransicht übernommen.",
      },
    ],
    related: [
      ["Dokumentenverwaltung", "/funktionen/dokumentenverwaltung-vermieter"],
      ["Mieterkommunikation", "/funktionen/mieterkommunikation"],
      ["Rauchmelderverwaltung", "/funktionen/rauchmelder-verwaltung"],
      ["Ratgeber Mieterportal", "/ratgeber/mieterportal-private-vermieter"],
    ],
  },
  "hinweise-fristen": {
    title: "Fristen und Erinnerungen für Vermieter | Mietfolio",
    description:
      "Mietfolio bündelt manuelle Erinnerungen, Mietende-Hinweise, Rauchmelder-Fälligkeiten, Prioritäten und Quellenlinks pro Immobilie.",
    path: "/funktionen/hinweise-fristen",
    h1: "Hinweise und Fristen pro Immobilie",
    intro:
      "Mietfolio sammelt offene Aufgaben in einer gemeinsamen Hinweis-Liste: eigene Erinnerungen, abgeleitete Mietvertragsenden und fällige Rauchmelderwartungen bleiben im aktiven Objektkontext sichtbar.",
    cta: "Hinweise in Mietfolio bündeln",
    sections: [
      {
        title: "Manuelle Erinnerungen",
        body:
          "Eigene Aufgaben können mit Titel, Beschreibung, Fälligkeit und Priorität angelegt werden. Erledigte Erinnerungen bleiben optional sichtbar und können wieder geöffnet oder gelöscht werden.",
        points: ["Fälligkeitsdatum", "Priorität niedrig, normal oder hoch", "Erledigt-Status", "Erledigte Einträge anzeigen"],
      },
      {
        title: "Automatische Quellen",
        body:
          "Mietfolio leitet Hinweise aus Daten ab, die bereits in anderen Modulen liegen. Mietende und Rauchmeldertermine erscheinen automatisch, wenn sie bald relevant werden, fehlen oder überfällig sind.",
        points: ["Mietende bis 90 Tage", "Rauchmelder bis 60 Tage", "Fehlende Prüftermine", "Überfällige Wartungen"],
      },
      {
        title: "Direkt zur Ursache",
        body:
          "Abgeleitete Hinweise verlinken zurück zur passenden Quelle, etwa zum Mieter- oder Rauchmelderbereich. Dadurch bleibt die Liste ein Arbeitsvorrat statt nur eine passive Anzeige.",
        points: ["Quelle öffnen", "Priorisierte Liste", "Offene Hinweise zählen", "Hohe Priorität hervorheben"],
      },
    ],
    faqs: [
      {
        question: "Welche Hinweise entstehen automatisch?",
        answer:
          "Mietfolio erzeugt Hinweise für bald endende oder bereits beendete Mietverhältnisse sowie für Rauchmelder ohne nächsten Prüftermin oder mit naher beziehungsweise überfälliger Wartung.",
      },
      {
        question: "Kann ich eigene Erinnerungen anlegen?",
        answer:
          "Ja. Manuelle Erinnerungen können mit Beschreibung, Fälligkeitsdatum und Priorität gespeichert und später als erledigt markiert werden.",
      },
    ],
    related: [
      ["Mieterportal", "/funktionen/mieterportal"],
      ["Rauchmelderverwaltung", "/funktionen/rauchmelder-verwaltung"],
      ["Mieterkommunikation", "/funktionen/mieterkommunikation"],
      ["Ratgeber Fristen", "/ratgeber/fristen-erinnerungen-vermieter"],
    ],
  },
  "immobilienverwaltung": {
    title: "Immobilienverwaltung und Objektkontext | Mietfolio",
    description:
      "Mietfolio verwaltet mehrere Immobilien mit aktivem Objektkontext, Stammdaten, Eigentümerdaten, Wohnfläche, Bundesland und Datenexport.",
    path: "/funktionen/immobilienverwaltung",
    h1: "Immobilienverwaltung mit aktivem Objektkontext",
    intro:
      "Mietfolio arbeitet objektbezogen. Die aktive Immobilie steuert Nebenkosten, Dokumente, Mieter, Nachrichten, Hinweise und Rauchmelder, damit Daten bei mehreren Objekten sauber getrennt bleiben.",
    cta: "Immobilien in Mietfolio verwalten",
    sections: [
      {
        title: "Mehrere Objekte anlegen",
        body:
          "Immobilien werden mit Name, Adresse, Wohnfläche, Bundesland, Eigentümerdaten, Mieteradresse und internen Notizen gespeichert. Neue Objekte stehen sofort in der gesamten App zur Verfügung.",
        points: ["Adresse und Wohnfläche", "Bundesland", "Eigentümer- und Mieteradresse", "Interne Notizen"],
      },
      {
        title: "Aktive Immobilie wechseln",
        body:
          "Der aktive Objektkontext wird zentral genutzt und lokal gemerkt. So greifen Nebenkosten, Dokumente, Mieter, Nachrichten, Hinweise, Mieterportal-Freigaben und Rauchmelder auf das richtige Objekt zu.",
        points: ["Objektwechsel in Navigation und Einstellungen", "Daten pro Immobilie getrennt", "Kontext für alle Produktbereiche", "Onboarding für das erste Objekt"],
      },
      {
        title: "Konto, Sicherheit und Datenexport",
        body:
          "In den Einstellungen können Stammdaten gepflegt, Passwörter geändert und Daten als JSON oder CSV exportiert werden. Die Kontolöschung läuft über eine serverseitige Edge Function.",
        points: ["Passwort ändern", "JSON- und CSV-Datenexport", "DSGVO-Datenübertragbarkeit", "Konto und Speicherdaten löschen"],
      },
    ],
    faqs: [
      {
        question: "Warum ist der aktive Objektkontext wichtig?",
        answer:
          "Er sorgt dafür, dass Nebenkosten, Dokumente, Mieter, Nachrichten, Hinweise und Rauchmelder immer zur ausgewählten Immobilie gehören.",
      },
      {
        question: "Kann ich meine Daten exportieren?",
        answer:
          "Ja. In den Einstellungen gibt es strukturierte Datenexporte als JSON und CSV für die in Mietfolio gespeicherten Vermieterdaten.",
      },
    ],
    related: [
      ["Nebenkostenabrechnung", "/funktionen/nebenkostenabrechnung"],
      ["Dokumentenverwaltung", "/funktionen/dokumentenverwaltung-vermieter"],
      ["Mieterportal", "/funktionen/mieterportal"],
      ["Datenschutz", "/datenschutz"],
    ],
  },
};

export const guidePages: Record<string, ContentPage> = {
  "mieterportal-private-vermieter": {
    title: "Mieterportal für private Vermieter einrichten | Mietfolio",
    description:
      "Ratgeber für private Vermieter: Mieterportal, Dokumentfreigaben, Upload-Prüfung, Profiländerungen, Nachrichten und Rauchmelder-Self-Service sinnvoll vorbereiten.",
    path: "/ratgeber/mieterportal-private-vermieter",
    h1: "Mieterportal für private Vermieter vorbereiten",
    intro:
      "Ein Mieterportal ist nur hilfreich, wenn Freigaben, Uploads und Nachrichten kontrolliert bleiben. Dieser Ratgeber zeigt, wie private Vermieter Mieterzugänge strukturiert vorbereiten und welche Mietfolio-Funktionen dabei zusammenspielen.",
    cta: "Mieterportal in Mietfolio vorbereiten",
    sections: [
      {
        title: "1. Mieterzugang bewusst freischalten",
        body:
          "Nicht jeder Mieter braucht sofort alle Self-Service-Funktionen. Starten Sie mit einem aktiven Mieterprofil, einer hinterlegten E-Mail-Adresse und einem klaren Status für Einladung, Aktivierung oder Deaktivierung.",
        points: ["Zugang je Mieter einladen", "Einladungen erneut versenden", "Zugänge deaktivieren oder reaktivieren", "Self-Service-Rechte einzeln steuern"],
      },
      {
        title: "2. Dokumente gezielt statt pauschal teilen",
        body:
          "Freigaben sollten sich auf konkrete Dokumente beziehen: etwa Abrechnungsunterlagen, Protokolle oder relevante Nachweise. So bleibt das Vermieterarchiv geschützt, während Mieter nur die vorgesehenen Dateien sehen.",
        points: ["Freigabe je Dokument und Zugang", "Signierte Downloads", "Keine komplette Archivöffnung", "Verbindung zur Dokumentenverwaltung"],
      },
      {
        title: "3. Uploads und Profiländerungen prüfen",
        body:
          "Mieter-Uploads und vorgeschlagene Profiländerungen sollten nie ungeprüft in Stammdaten oder Archiv wandern. In Mietfolio landen sie zuerst im Prüfeingang und werden erst nach Annahme übernommen.",
        points: ["Upload-Prüfeingang", "Annehmen oder ablehnen", "Profiländerungen kontrollieren", "Nachvollziehbarer Verlauf"],
      },
      {
        title: "4. Nachrichten und Rauchmelder-Self-Service anbinden",
        body:
          "Portal-Nachrichten, interne Kommunikationslogs und optionale Rauchmelderwartungen ergänzen das Portal. Entscheidend ist, dass Vermieter Antworten, Wartungseinreichungen und Freigaben im Objektkontext behalten.",
        points: ["Portal-Konversationen beantworten", "Rauchmelderwartung optional freischalten", "Prüfeingang für Mieterwartungen", "Quellen zurück zum passenden Modul"],
      },
    ],
    faqs: [
      {
        question: "Sollte jeder Mieter alle Self-Service-Funktionen bekommen?",
        answer:
          "Nein. Sinnvoll ist eine schrittweise Freischaltung je Mieterzugang, zum Beispiel zuerst Dokumente und Nachrichten, später optional Rauchmelderwartungen.",
      },
      {
        question: "Sind Mieter-Uploads automatisch Teil meines Archivs?",
        answer:
          "Nein. In Mietfolio werden Uploads zuerst geprüft. Erst nach Annahme werden sie in die Vermieter-Dokumente übernommen.",
      },
      {
        question: "Kann ich einen Mieterzugang wieder deaktivieren?",
        answer:
          "Ja. Zugänge können deaktiviert und bei Bedarf reaktiviert werden, damit Freigaben nicht dauerhaft unkontrolliert offen bleiben.",
      },
    ],
    related: [
      ["Mieterportal", "/funktionen/mieterportal"],
      ["Dokumentenverwaltung", "/funktionen/dokumentenverwaltung-vermieter"],
      ["Mieterkommunikation", "/funktionen/mieterkommunikation"],
      ["Rauchmelderverwaltung", "/funktionen/rauchmelder-verwaltung"],
    ],
  },
  "dokumente-mit-mietern-teilen": {
    title: "Dokumente mit Mietern teilen: Ratgeber | Mietfolio",
    description:
      "Ratgeber für Vermieter: Dokumente strukturiert ablegen, gezielt für Mieter freigeben, Uploads prüfen und Nachweise per ZIP exportieren.",
    path: "/ratgeber/dokumente-mit-mietern-teilen",
    h1: "Dokumente mit Mietern teilen, ohne das Archiv zu öffnen",
    intro:
      "Mieter benötigen manchmal Unterlagen, aber nicht den kompletten Dokumentenbestand. Dieser Ratgeber erklärt, wie Vermieter Dokumente objektbezogen sortieren, gezielt freigeben und Uploads kontrolliert prüfen.",
    cta: "Dokumente in Mietfolio bündeln",
    sections: [
      {
        title: "1. Dokumente zuerst sauber kategorisieren",
        body:
          "Vor jeder Freigabe sollte klar sein, zu welchem Objekt, welcher Kategorie und welchem Vorgang ein Dokument gehört. Kategorien, Datum, Notiz und Vorschau helfen, später nicht aus Versehen falsche Unterlagen zu teilen.",
        points: ["Objektbezogene Ablage", "Kategorien und eigene Kategoriepflege", "Vorschau vor Freigabe", "Dublettenhinweise per Datei-Hash"],
      },
      {
        title: "2. Freigabe je Dokument und Mieter",
        body:
          "Eine gute Dokumentfreigabe ist eng begrenzt. In Mietfolio wird nicht ein gesamter Ordner geöffnet, sondern ein konkretes Dokument für einen konkreten aktiven Mieterzugang freigegeben.",
        points: ["Freigabe je Mieterzugang", "Signierte Downloads", "Kein Gesamtarchiv-Zugriff", "Verbindung zum Mieterportal"],
      },
      {
        title: "3. Mieter-Uploads nicht automatisch übernehmen",
        body:
          "Mieter können Unterlagen bereitstellen, aber die Vermieterablage sollte kontrolliert bleiben. Uploads landen daher im Prüfeingang und werden erst nach Annahme ins Archiv übernommen.",
        points: ["Upload-Prüfung", "Annehmen oder ablehnen", "Übernahme als Dokument", "Nachvollziehbarer Status"],
      },
      {
        title: "4. Nachweise exportieren",
        body:
          "Für Steuerunterlagen, Übergaben oder Rückfragen bleiben Exporte wichtig. ZIP-Downloads verbinden die strukturierte App-Ablage mit der lokalen Archivierung.",
        points: ["Einzeldownload", "ZIP-Export für Auswahl oder Archiv", "Sammelaktionen", "Lokale Nachweise behalten"],
      },
    ],
    faqs: [
      {
        question: "Sehen Mieter automatisch alle Dokumente?",
        answer:
          "Nein. Sichtbar sind nur Dokumente, die für den jeweiligen aktiven Mieterzugang freigegeben wurden.",
      },
      {
        question: "Kann ein Upload sofort in meine Dokumentenverwaltung gelangen?",
        answer:
          "Nein. Uploads werden zuerst geprüft und erst nach Annahme als Vermieter-Dokument übernommen.",
      },
    ],
    related: [
      ["Dokumentenverwaltung", "/funktionen/dokumentenverwaltung-vermieter"],
      ["Mieterportal", "/funktionen/mieterportal"],
      ["Datenschutz", "/datenschutz"],
    ],
  },
  "rauchmelderwartung-vermieter": {
    title: "Rauchmelderwartung dokumentieren: Ratgeber | Mietfolio",
    description:
      "Ratgeber für Vermieter: Rauchmelder-Inventar, Wartungslogs, Bilder, Mieterwartungen, Prüfeingang, Fristen und PDF-Protokolle strukturiert dokumentieren.",
    path: "/ratgeber/rauchmelderwartung-vermieter",
    h1: "Rauchmelderwartung strukturiert dokumentieren",
    intro:
      "Rauchmelderwartung lebt von nachvollziehbaren Daten: Geräte, Räume, Wartungsdaten, Bilder und nächste Prüftermine. Mietfolio hilft, diese Informationen pro Immobilie zu bündeln und Mieterwartungen kontrolliert zu prüfen.",
    cta: "Rauchmelder in Mietfolio verwalten",
    sections: [
      {
        title: "1. Inventar pro Raum aufbauen",
        body:
          "Ein belastbarer Überblick beginnt mit Gerätedaten: Raum, Seriennummer, Einbaudatum, letzter Wartung und nächstem Prüftermin. So lassen sich offene Aufgaben schneller erkennen.",
        points: ["Gerät und Raum", "Seriennummer und Einbau", "Letzte und nächste Wartung", "Status je Rauchmelder"],
      },
      {
        title: "2. Wartungen mit Bildbezug festhalten",
        body:
          "Wartungslogs sollten Datum, Ergebnis, Notiz und optional Bilder enthalten. Bilder können Geräten zugeordnet werden, damit spätere Protokolle nicht nur aus Text bestehen.",
        points: ["Wartungslog je Gerät", "Bildzuordnung", "Nicht zugewiesene Bilder prüfen", "PDF-Protokolle mit Bildbezug"],
      },
      {
        title: "3. Mieterwartungen nur nach Prüfung übernehmen",
        body:
          "Wenn Self-Service aktiv ist, können Mieter Wartungen einreichen. Diese Einträge bleiben zunächst Vorschläge und werden erst nach Vermieterannahme Teil der offiziellen Wartungshistorie.",
        points: ["Self-Service je Mieter", "Prüfeingang", "Annehmen oder ablehnen", "Offizielle Logs nach Annahme"],
      },
      {
        title: "4. Fristen sichtbar halten",
        body:
          "Fehlende, nahe oder überfällige Prüftermine sollten nicht in Gerätelisten verschwinden. Mietfolio erzeugt Hinweise, damit Wartungen im Arbeitsvorrat sichtbar bleiben.",
        points: ["Rauchmelder-Hinweise", "Überfällige Wartungen", "Quellenlink zum Gerät", "Objektbezogener Arbeitsvorrat"],
      },
    ],
    faqs: [
      {
        question: "Kann Mietfolio rechtliche Pflichten zur Rauchmelderwartung bewerten?",
        answer:
          "Nein. Mietfolio unterstützt Dokumentation, Fristen und Exporte, ersetzt aber keine individuelle rechtliche Bewertung.",
      },
      {
        question: "Wie werden Mieterwartungen übernommen?",
        answer:
          "Mieterwartungen werden im Prüfeingang geprüft und erst nach Annahme als offizieller Wartungslog gespeichert.",
      },
    ],
    related: [
      ["Rauchmelderverwaltung", "/funktionen/rauchmelder-verwaltung"],
      ["Hinweise und Fristen", "/funktionen/hinweise-fristen"],
      ["Mieterportal", "/funktionen/mieterportal"],
    ],
  },
  "fristen-erinnerungen-vermieter": {
    title: "Fristen und Erinnerungen für Vermieter organisieren | Mietfolio",
    description:
      "Ratgeber für private Vermieter: manuelle Erinnerungen, Mietende-Hinweise, Rauchmelder-Fälligkeiten und Quellenlinks im Objektkontext organisieren.",
    path: "/ratgeber/fristen-erinnerungen-vermieter",
    h1: "Fristen und Erinnerungen für Vermieter organisieren",
    intro:
      "Viele Vermieteraufgaben scheitern nicht an fehlenden Daten, sondern daran, dass Fristen in E-Mails, Kalendern oder Notizen verteilt sind. Dieser Ratgeber zeigt, wie Mietfolio Hinweise aus vorhandenen Modulen bündelt.",
    cta: "Hinweise in Mietfolio bündeln",
    sections: [
      {
        title: "1. Eigene Erinnerungen erfassen",
        body:
          "Manuelle Hinweise eignen sich für Rückfragen, Prüfungen, Absprachen oder vorbereitende Aufgaben. Titel, Beschreibung, Fälligkeit und Priorität machen daraus einen echten Arbeitsvorrat.",
        points: ["Titel und Beschreibung", "Fälligkeitsdatum", "Priorität", "Erledigt-Status"],
      },
      {
        title: "2. Automatische Hinweise nutzen",
        body:
          "Mietfolio kann Hinweise aus gespeicherten Daten ableiten, etwa aus Mietvertragsenden oder Rauchmelderterminen. Dadurch muss nicht jede Frist doppelt gepflegt werden.",
        points: ["Mietende-Hinweise", "Rauchmelder-Fälligkeiten", "Fehlende Prüftermine", "Überfällige Wartungen"],
      },
      {
        title: "3. Quelle statt lose Notiz",
        body:
          "Ein Hinweis ist besonders hilfreich, wenn er zurück zur Ursache führt. Quellenlinks verbinden den Arbeitsvorrat mit Mieter-, Rauchmelder- oder Kommunikationsdaten.",
        points: ["Quelle öffnen", "Objektkontext behalten", "Passendes Modul direkt erreichen", "Weniger Suchaufwand"],
      },
      {
        title: "4. Hinweise mit Kommunikation verbinden",
        body:
          "Offene Nachrichten, Rückfragen und Fristen gehören zusammen. Mietfolio hält Portal-Konversationen, interne Logs und Aufgaben nebeneinander sichtbar.",
        points: ["Mieterkommunikation dokumentieren", "Portal-Threads beantworten", "Rückfragen nachhalten", "Aufgaben priorisieren"],
      },
    ],
    faqs: [
      {
        question: "Welche automatischen Hinweise gibt es?",
        answer:
          "Mietfolio erzeugt Hinweise für bald endende oder beendete Mietverhältnisse sowie für Rauchmelder ohne nächsten Prüftermin, mit naher Fälligkeit oder überfälliger Wartung.",
      },
      {
        question: "Kann ich erledigte Hinweise wiederfinden?",
        answer:
          "Ja. Erledigte Erinnerungen können optional sichtbar bleiben und bei Bedarf wieder geöffnet werden.",
      },
    ],
    related: [
      ["Hinweise und Fristen", "/funktionen/hinweise-fristen"],
      ["Mieterkommunikation", "/funktionen/mieterkommunikation"],
      ["Rauchmelderverwaltung", "/funktionen/rauchmelder-verwaltung"],
    ],
  },
  "nebenkostenabrechnung-private-vermieter": {
    title: "Nebenkostenabrechnung vorbereiten: Ratgeber | Mietfolio",
    description:
      "Ratgeber für private Vermieter: Belege, KI-Vorschläge, Review-Aufgaben, Zählerstände, Kostenpositionen, CO2-Anteile und Exporte strukturieren.",
    path: "/ratgeber/nebenkostenabrechnung-private-vermieter",
    h1: "Nebenkostenabrechnung vorbereiten: strukturierter Ratgeber",
    intro:
      "Eine gute Nebenkostenabrechnung beginnt nicht beim PDF, sondern bei sauber gesammelten Daten. Dieser Ratgeber zeigt, welche Unterlagen private Vermieter früh sortieren sollten und wie Mietfolio bei Belegen, Review-Aufgaben, Zählerständen und Exporten unterstützt.",
    cta: "Mit Mietfolio strukturieren",
    sections: [
      {
        title: "1. Abrechnungsjahr und Objekt festlegen",
        body:
          "Starten Sie mit dem richtigen Jahr und dem passenden Objekt. Bei mehreren Wohnungen ist der Objektkontext entscheidend, damit Belege, Mieter und Zählerwerte nicht vermischt werden.",
      },
      {
        title: "2. Kostenpositionen und Belege vollständig sammeln",
        body:
          "Typische Positionen sind Grundsteuer, Versicherung, Wasser, Abwasser, Wartung, Allgemeinstrom oder Dienstleisterkosten. Jede Position sollte mit Betrag, Datum, Kategorie, Quelle, Beleg und Prüfnotiz nachvollziehbar bleiben.",
        points: ["Betrag und Kategorie", "Quelle oder Beleglink", "Arbeitskostenanteile", "Notizen für spätere Rückfragen"],
      },
      {
        title: "3. KI-Vorschläge und Verteilung prüfen",
        body:
          "Importierte Positionen und KI-Vorschläge sind Arbeitsmaterial, keine automatische Finalisierung. Prüfen Sie Belegauszüge, Sicherheitswerte, Umlagefähigkeit, Zählerstände, Verteilmaßstab, Vorauszahlungen und CO2-Aufteilung.",
        points: ["Review-Aufgaben bestätigen", "Zählerstände prüfen", "Verteilerschlüssel kontrollieren", "CO2-Anteile nachvollziehen"],
      },
      {
        title: "4. Nachweise exportieren und archivieren",
        body:
          "PDF- und ZIP-Exporte erleichtern die eigene Ablage und spätere Rückfragen. Besonders hilfreich ist, wenn Dokumente, Kommunikation, Hinweise und Finalisierungsstand bereits im gleichen System liegen.",
        points: ["Entwurfs-PDF", "Final-PDF mit Prüfanhang", "Dokumente als ZIP exportieren", "Kommunikation und Hinweise auffindbar halten"],
      },
    ],
    faqs: [
      {
        question: "Wann sollte ich mit der Vorbereitung der Nebenkostenabrechnung beginnen?",
        answer:
          "Am besten laufend im Abrechnungsjahr. Wenn Belege, Zählerstände und Notizen direkt objektbezogen abgelegt werden, ist der Jahresabschluss deutlich leichter.",
      },
      {
        question: "Welche Unterlagen sollte ich vor dem Export prüfen?",
        answer:
          "Prüfen Sie Kostenbelege, Zählerstände, Umlageschlüssel, Mieterdaten, Vorauszahlungen und alle Sonderfälle, bevor Sie Unterlagen exportieren oder weitergeben.",
      },
    ],
    related: [
      ["Nebenkosten-Funktion", "/funktionen/nebenkostenabrechnung"],
      ["Dokumentenverwaltung", "/funktionen/dokumentenverwaltung-vermieter"],
      ["Ratgeber Dokumentfreigaben", "/ratgeber/dokumente-mit-mietern-teilen"],
      ["Ratgeber Fristen", "/ratgeber/fristen-erinnerungen-vermieter"],
    ],
  },
};
