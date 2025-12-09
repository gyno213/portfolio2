import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { CaseStudy } from "./components/CaseStudy";
import { ProjectPreviewCard } from "./components/ProjectPreviewCard";
import { WorkInProgressCard } from "./components/WorkInProgressCard";
import { SkillBadge } from "./components/SkillBadge";
import { NavigationBar } from "./components/NavigationBar";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  Mail,
  Phone,
  Instagram,
  Figma,
  Palette,
  Layout,
  Code,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

export default function App() {
  const [language, setLanguage] = useState<"en" | "de">("en");

  // Helper function to get correct image path for GitHub Pages
  const getImagePath = (path: string) => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // Use import.meta.env.BASE_URL which Vite provides (includes trailing slash)
    // @ts-ignore - BASE_URL is provided by Vite
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  const translations = {
    en: {
      hero: {
        name: "Trang Anh Nguyen",
        title: "Interaction Design Student",
        statement: '"Design is the bridge between human needs and technological possibilities."',
        buttonViewWork: "View My Work",
        buttonContact: "Get in Touch",
      },
      about: {
        title: "About Me",
        intro: "Hello! I'm Trang Anh, a passionate interaction design student dedicated to creating meaningful digital experiences that put users first.",
        education: "Education & Background",
        educationText: "Currently pursuing a Bachelor's degree in Interaction Design at Design University. My journey combines creative thinking with technical skills to solve real-world problems through design.",
        skills: "Core Competencies",
        skillsList: ["UX Research", "UI Design", "Prototyping", "Interaction Design", "User Testing"],
        tools: "Tools & Technologies",
        toolsList: ["Figma", "Adobe", "HTML/CSS", "P5js"],
        interests: "Interests & Focus Areas",
        interestsList: ["User-Centered Design", "Accessibility", "Design Systems", "Mobile UX", "Data Visualization"],
      },
      projects: {
        title: "Selected Case Studies",
        subtitle: "Deep dives into my design process and problem-solving approach",
        readMore: "Read Case Study",
        closeCase: "Close Case Study",
        healthHub: {
          title: "Wattpad App - Redesign & UX",
          preview: "Redesign of the Wattpad app to improve usability and interaction. Based on user research, I created a new interface with optimized features for an intuitive reading experience.",
          context: "I selected an existing app, identified user problems, and explored improvement opportunities through user research.",
          research: "I conducted an online survey among Wattpad users to learn about their usage habits, average reading duration, missing features, and general wishes. The results showed that communication and interaction within the app are severely limited and the filter system for stories works imprecisely. Based on these findings, I focused on redesigning the interface and optimizing the filter and community functions to improve the user experience.",
          methods: ["Crazy 8", "Competitive Analysis", "Personas", "Journey Mapping", "Usability Testing", "Survey", "Value Mapping"],
          results: "The redesigned home screen shows all important information about stories at a glance. Below the main area, personalized suggestions appear based on individual preferences, plus new, less known authors called \"New Gems\" to help them get discovered. The filter function improved significantly through clear tags, and a search AI helps users find content. I also introduced a new \"Community\" feature to strengthen exchange between readers and between readers and authors.",
          reflection: "This project taught me to balance feature richness with simplicity. The biggest challenge was designing for different user motivations. Some wanted detailed data, others preferred a simpler approach. I learned to create flexible systems that adapt to individual user needs. If I were to do this again, I would explore more social features to leverage community support.",
          role: "User Research, Prototyping New Features",
          technologies: ["Figma", "User Research", "Mobile UX", "Usability"],
        },
        ecoShop: {
          title: "AR Baking Partner: Remy",
          preview: "Remy is an AR baking partner that guides users step-by-step through baking. Through camera recognition and voice interaction, it provides tips, warnings, and assistance to make baking intuitive and safe.",
          context: "In the Invention Design course, our task was to develop a future-oriented prototype that creatively and functionally solves an everyday problem and makes the idea tangible.",
          research: "I interviewed people who bake regularly to identify their pain points. I decided to focus on baking beginners, knowing the difficulties from my own experience. Many motivated beginners want to bake but feel uncertain, even with recipes. To better understand the needs, I baked myself to capture the necessary steps for beginners and find out which features help or hinder. After developing initial solution ideas, I tested them practically while baking to ensure they actually work.",
          methods: ["Crazy 8", "Competitive Analysis", "Survey", "Interview", "Prototyping", "User Testing", "Usability Testing"],
          results: "Remy works with an AR headset while baking. When the app starts, a home page shows recipe suggestions and saved recipes. Control uses eye-tracking, with selection confirmed by pinching three fingers together, similar to Apple Vision Pro. After selecting a recipe, an ingredient check begins. All available ingredients are placed on the table, and Remy scans them to ensure everything is ready. If ingredients are missing, the app suggests replacement options. The baking process starts step by step, with explanatory videos and images. Users can also call Remy like a voice assistant to ask questions and get support.",
          reflection: "This project taught me about new technical tools and how to use them as helpful support in everyday life. Working with AR technologies was particularly exciting, as I engaged with them intensively for the first time and gained practical experience. I learned about new technologies and their future potential and tried out many ideas directly to see how they work in practice. I also learned how to conduct user interviews, even when users haven't used the technology before.",
          role: "User Research, Pain Points, Technical Tools, Prototyping",
          technologies: ["AR", "User-Centered Design", "Voice Interaction", "Computer Vision"],
        },
        taskFlow: {
          title: "The Melody Circle",
          preview: "The Melody Circle is a newly developed musical instrument that connects sound and learning by teaching music theory visually and playfully. It aims to make it easier to get started with musical fundamentals and make complex content intuitively accessible.",
          context: "As part of the project, we were to invent a completely new musical instrument that doesn't exist in this form yet, and develop a matching interactive interface for it. The goal was to rethink sound, form, and interaction and create an instrument through design that makes musical concepts accessible in an innovative way.",
          research: "The first idea was to visualize music with colors and circles on paper and convert it into sounds using a photo sensor. Due to technical limitations, I abandoned this approach and shifted focus toward teaching music theory. To improve the interface's comprehensibility, I conducted several user tests. The feedback showed that immovable elements needed clearer marking, reference points for placing notes were necessary, the active tone should be visually highlighted, and the delete button required a clearer design.",
          methods: ["Crazy 8", "Competitive Analysis", "Survey", "Competitor Analysis", "Prototyping", "User Testing", "Usability Testing"],
          results: "The Melody Circle enables a visual and auditory understanding of the scale from C to B. The pitch is coded by its own color, while different note lengths are represented by differently sized circles. In the center is a circle of seven rings that symbolizes a staff. Users can drag and drop note values into this area. A circularly moving pointer plays the placed tones at their respective positions. Additionally, different instruments can be selected and rhythmic structures such as the quarter beat are clearly visualized.",
          reflection: "This project showed me how complex musical concepts can be made accessible through visual design. The biggest challenge was finding the balance between simplicity and functionality. Through user testing, I learned how important clear visual hierarchies and intuitive interactions are. Particularly exciting was working with physical and digital elements that together create a new learning experience.",
          role: "User Research, Prototyping, Testing",
          technologies: ["Music", "Education Design", "Coding", "Sound Design"],
        },
        learnGrow: {
          title: "The Quaternary",
          preview: "The Quaternary is an interactive exhibition that immerses visitors in the Quaternary period. Users can discover the fascinating animals of this era and learn playfully about the stories of the species through interactive elements.",
          context: "Development of an interactive application for museums that playfully, immersively, and easily conveys complex information about the Quaternary period.",
          research: "I analyzed the provided information and created a mind map to get an overview of the era. I developed a timeline of the Quaternary period and arranged the animals according to their lifetime to understand connections and extinction events due to climate changes. I also defined the target audience and determined what goals to achieve with the interactive application. To fully develop the concept, I conducted further research on Mammuthus and the living conditions of the time. Initial prototype tests helped verify the feasibility and logic of the interaction system and identify challenges early on.",
          methods: ["Crazy 8", "Mind Map", "User Research", "Journey Mapping", "Prototyping", "Usability Testing"],
          results: "The Quaternary is an interactive exhibition that immerses visitors in the Quaternary period. On a round table, users select animals or historical events by placing figures on scanners. The movement of the figures is detected via a zigzag pattern on coded discs and an Arduino encoder, which allows the application to identify the animals and evaluate rotation directions. A projector displays content on the table surface. When an animal is activated, an info box appears with additional information and visual overlays, such as the bone structure of a mammoth or highlights of certain body parts. Users navigate from point to point by rotating the figures, with interactive elements, color markings, and audio navigation supporting playful learning.",
          reflection: "This project showed how storytelling, design, and technology can combine to make complex content understandable and exciting. Particularly valuable was linking physical interactions with digital information, including Arduino coding and motion detection. I learned how important early prototype tests are to optimize user guidance and how to design interaction and information elements to be intuitive, immersive, and playful. I also gained insights into planning interactive exhibition concepts, from information structure to technical implementation.",
          role: "User Research, Prototyping, Testing",
          technologies: ["Figma", "Exhibition", "Physical Computing", "Immersive Learning"],
        },
      },
      wip: {
        title: "Work in Progress",
        subtitle: "Projects in Development",
        inProgress: "In Progress",
        expectedCompletion: "Expected Completion",
        progressLabel: "Progress",
        taskLabel: "Task",
        initialIdeasLabel: "Initial Ideas",
        project1: {
          title: "Spider Exhibit",
          description: "We are developing an interactive exhibit about spiders with a focus on their venom. Visitors should playfully discover how diverse and fascinating spider venoms really are.",
          technologies: ["Exhibition", "Immersive Experience", "Projection Mapping", "Biology"],
          expectedCompletion: "Expected Completion: Feb. 2026",
          progress: 40,
          task: "Develop an interactive exhibit that gives visitors an exciting and understandable insight into the world of spiders.",
          initialIdeas: "Our first idea focuses on spider venoms: A projector projects the effects of different spider species onto visitors' hands and playfully explains how the respective venoms affect the body.",
        },
        project2: {
          title: "Bullying Prevention for Elementary School Students",
          description: "We are developing an iPad app that supports teachers in preventing bullying and sensitizing children in an age-appropriate way.",
          technologies: ["Figma", "UX Design", "iPad / Mobile App", "Educational Design"],
          expectedCompletion: "Expected Completion: Feb 2026",
          progress: 50,
          task: "Develop a digital solution that addresses a societal problem, in our case the prevention of bullying in elementary school.",
          initialIdeas: "Our first idea was an iPad app that supports teachers with bullying problems. It should contain explanatory videos, multiple-choice tasks, gamification elements, and a mood tracker to playfully introduce children to the topic while providing teachers with practical tools for prevention and intervention.",
        },
      },
      contact: {
        title: "Contact",
        subtitle: "I'm looking forward to internship opportunities, creative projects, and exchanging ideas about design solutions for real users.",
        email: "Email",
        phone: "Phone",
        social: "Find me on",
      },
      footer: {
        rights: "All rights reserved.",
        designed: "Designed & built with care",
      },
    },
    de: {
      hero: {
        name: "Trang Anh Nguyen",
        title: "Interaktionsgestaltung Studentin",
        statement: '"Design ist die Brücke zwischen menschlichen Bedürfnissen und technologischen Möglichkeiten."',
        buttonViewWork: "Meine Arbeiten",
        buttonContact: "Kontakt aufnehmen",
      },
      about: {
        title: "Über mich",
        intro: "Hallo, ich bin Trang Anh. Ich gerstalte gerne digitale Erlebnisse die Spaß machen, Sinn ergeben und den Nutzer in den Mittelpunkt stellen.",
        education: "Ausbildung & Hintergrund",
        educationText: "Ich studiere Interaktionsgestaltung im 4. Semester an der HfG Schwäbisch Gmünd. Dabei verbinde ich kreatives Denken mit technischem Know-how, um echte Probleme mit Design zu lösen.",
        skills: "Kernkompetenzen",
        skillsList: ["UX Research", "UI Design", "Prototyping", "Interaktionsgestaltung", "User Testing"],
        tools: "Tools & Technologien",
        toolsList: ["Figma", "Adobe", "HTML/CSS", "P5js"],
        interests: "Interessen & Schwerpunkte",
        interestsList: ["Nutzer im Fokus ", "UX/UI", "Design Systeme", "Interaktive Systeme "],
      },
      projects: {
        title: "Ausgewählte Arbeiten",
        subtitle: "Einblicke in meinen Designprozess und meine Herangehensweise an Probleme",
        readMore: "Mehr erfahren",
        closeCase: "Schließen",
        healthHub: {
          title: "Wattpad App - Redesign & UX",
          preview: "Redesign der Wattpad-App zur Verbesserung von Nutzerfreundlichkeit und Interaktion. Basierend auf User Research entstand ein neues Interface mit optimierten Features für ein intuitives Leseerlebnis.",
          context: "Ich habe eine bestehende App ausgewählt, Nutzerprobleme identifiziert und Verbesserungspotenziale durch User Research herausgearbeitet.",
          research: "Ich habe eine Online-Umfrage unter Wattpad-Nutzer:innen durchgeführt, um mehr über ihre Nutzungsgewohnheiten, die durchschnittliche Lesedauer, fehlende Funktionen und allgemeine Wünsche zu erfahren. Die Ergebnisse zeigten, dass die Kommunikation und Interaktion innerhalb der App stark eingeschränkt ist und das Filtersystem für Geschichten unpräzise arbeitet. Auf Grundlage dieser Erkenntnisse konzentrierte ich mich auf ein Redesign des Interfaces sowie auf die Optimierung der Filter- und Community-Funktionen, um das Nutzererlebnis zu verbessern.",
          methods: ["Crazy 8", "Wettbewerbsanalyse", "Personas", "Journey Mapping", "Usability Testing", "Umfrage", "Value Mapping"],
          results: "Das Ergebnis ist ein komplett überarbeiteter Homescreen, auf dem Nutzer:innen auf einen Blick alle wichtigen Informationen zu ihren Geschichten erhalten. Unterhalb des Hauptbereichs werden personalisierte Vorschläge angezeigt, basierend auf den individuellen Vorlieben, sowie neue, weniger bekannte Autoren (\"New Gems\"), um deren Entdeckung zu fördern. Die Filterfunktion wurde durch eindeutige Tags deutlich verbessert, und eine Such-AI unterstützt die Nutzer:innen bei der gezielten Suche nach Inhalten. Zusätzlich habe ich die neue Funktion \"Community\" eingeführt, um den Austausch zwischen Leser:innen sowie zwischen Leser:innen und Autor:innen zu stärken.",
          reflection: "Dieses Projekt lehrte mich, Funktionsreichtum mit Einfachheit zu balancieren. Die größte Herausforderung war das Design für unterschiedliche Nutzermotivationen. Einige wollten detaillierte Daten, andere einen einfacheren Ansatz. Ich lernte, flexible Systeme zu schaffen, die sich an individuelle Nutzerbedürfnisse anpassen. Bei einer Wiederholung würde ich mehr soziale Funktionen erkunden, um Community-Support zu nutzen.",
          role: "User Research, Prototyping neuer Features",
          technologies: ["Figma", "User Research", "Mobile UX", "Usability Testing"],
        },
        ecoShop: {
          title: "AR-Backpartner: Remy",
          preview: "Remy ist ein AR-Backpartner, der Nutzer:innen Schritt für Schritt beim Backen begleitet. Durch Kameraerkennung und Sprachinteraktion gibt er Tipps, Warnungen und Hilfestellungen, um das Backen intuitiv und sicher zu machen.",
          context: "Im Kurs Invention Design bestand unsere Aufgabe darin, einen zukunftsgerichteten Prototypen zu entwickeln, der ein alltägliches Problem kreativ und funktional löst und die Idee erlebbar macht.",
          research: "Ich habe Personen interviewt, die regelmäßig backen, um ihre Pain Points zu identifizieren. Ich entschied mich, den Fokus auf Backanfänger zu legen, da ich aus eigener Erfahrung die Schwierigkeiten kannte und beobachtete, dass viele motivierte Anfänger:innen zwar backen wollen, aber häufig unsicher sind, obwohl sie Rezepte haben. Um die Bedürfnisse besser zu verstehen, habe ich selbst gebacken, um die notwendigen Schritte für Anfänger zu erfassen und herauszufinden, welche Features beim Backen hilfreich oder eher hinderlich sind. Nachdem erste Lösungsideen entwickelt waren, habe ich diese erneut getestet, indem ich sie praktisch beim Backen ausprobierte, um sicherzustellen, dass sie tatsächlich funktionieren.",
          methods: ["Crazy 8", "Wettbewerbsanalyse", "Umfrage", " Interview", "Prototyping", "Usertesting", "Usability Testing"],
          results: "Remy wird beim Backen mit einer AR-Brille verwendet. Beim Start der App öffnet sich eine Home-Seite, die Rezeptvorschläge sowie gespeicherte Rezepte anzeigt. Die Steuerung erfolgt über Eye-Tracking, wobei die Auswahl durch das Zusammenkneifen von drei Fingern bestätigt wird, ähnlich wie bei Apple Vision Pro. Nach der Auswahl eines Rezepts beginnt zunächst ein Zutaten-Check. Alle vorhandenen Zutaten werden auf den Tisch gelegt, und Remy scannt sie, um sicherzustellen, dass alles bereit ist. Fehlen Zutaten, kann die App mögliche Ersatzoptionen vorschlagen. Anschließend startet der Backprozess Schritt für Schritt, begleitet von erklärenden Videos und Bildern. Nutzer:innen können Remy außerdem wie einen Sprachassistenten aufrufen, um Fragen zu stellen und Unterstützung zu erhalten.",
          reflection: "Durch dieses Projekt habe ich viel über neue technische Tools gelernt und erfahren, wie man diese im Alltag als hilfreiche Unterstützung einsetzen kann. Besonders spannend war die Arbeit mit AR-Technologien, mit denen ich mich zum ersten Mal intensiv auseinandergesetzt und praktische Erfahrungen gesammelt habe. Außerdem habe ich neue Technologien und deren zukünftiges Potenzial kennengelernt und konnte viele Ideen direkt im Projekt ausprobieren, um zu sehen, wie sie in der Praxis funktionieren. Zusätzlich habe ich viel darüber gelernt, wie man User Interviews durchführt, selbst wenn die Nutzer:innen die Technologie noch nicht zuvor verwendet haben.",
          role: "User Research, Pain Points, Technische Tools, Prototyping ",
          technologies: ["AR", "Nutzerzentriertes Design", "Sprachinteraktion", "Computer Vision"],
        },
        taskFlow: {
          title: "Der Melodiekreis",
          preview: "Der Melodiekreis ist ein neu entwickeltes Musikinstrument, das Klang und Lernen verbindet, indem es Musiktheorie visuell und spielerisch vermittelt. Es soll den Einstieg in musikalische Grundlagen erleichtern und komplexe Inhalte intuitiv erfahrbar machen.",
          context: "Im Rahmen des Projekts sollten wir ein völlig neues Musikinstrument erfinden, das es in dieser Form noch nicht gibt, und dazu ein passendes interaktives Interface entwickeln. Ziel war es, Klang, Form und Interaktion neu zu denken und durch Gestaltung ein Instrument zu schaffen, das musikalische Konzepte auf innovative Weise erfahrbar macht.",
          research: "Die erste Idee war, Musik mit Farben und Kreisen auf Papier zu visualisieren und mithilfe eines Fotosensors in Töne umzuwandeln. Aufgrund technischer Grenzen wurde dieser Ansatz verworfen, wodurch der Fokus stärker auf die Vermittlung von Musiktheorie gelegt wurde. Um die Verständlichkeit des Interfaces zu verbessern, habe ich mehrere Nutzertests durchgeführt. Das Feedback zeigte, dass unbewegliche Elemente klarer markiert werden mussten, Referenzpunkte für das Ablegen der Noten nötig waren, der aktive Ton visuell hervorgehoben werden sollte und der Löschbutton eine deutlichere Gestaltung erforderte.",
          methods: ["Crazy 8", "Wettbewerbsanalyse", "Umfrage", "Competitor Analysis", "Prototyping", "Usertesting", "Usability Testing"],
          results: "Der Melodiekreis ermöglicht ein visuelles und auditives Verständnis der Tonleiter von C bis H. Die Tonhöhe ist durch eine eigene Farbe codiert, während verschiedene Notenlängen durch unterschiedlich große Kreise dargestellt werden. Im Zentrum befindet sich ein Kreis aus sieben Ringen, der eine Notenzeile symbolisiert. Nutzer:innen können Notenwerte per Drag and Drop in diesen Bereich ziehen. Ein sich kreisförmig bewegender Zeiger spielt die platzierten Töne an ihrer jeweiligen Position ab. Zusätzlich lassen sich verschiedene Instrumente auswählen und rhythmische Strukturen wie der Vierteltakt werden klar visualisiert.",
          reflection: "Dieses Projekt hat mir gezeigt, wie man komplexe musikalische Konzepte durch visuelles Design zugänglich machen kann. Die größte Herausforderung war, die Balance zwischen Einfachheit und Funktionalität zu finden. Durch die Nutzertests lernte ich, wie wichtig klare visuelle Hierarchien und intuitive Interaktionen sind. Besonders spannend war die Arbeit mit physischen und digitalen Elementen, die zusammen ein neues Lernerlebnis schaffen.",
          role: "User Research, Prototyping, Testing",
          technologies: ["Musik", "Bildungsdesign", "Programmierung", "Tondesign"],
        },
        learnGrow: {
          title: "Das Quatär",
          preview: "Quatär ist eine interaktive Ausstellung, die Besucher:innen in das Quartär eintauchen lässt. Nutzer:innen können die faszinierenden Tiere dieser Epoche entdecken und lernen spielerisch durch interaktive Elemente die Geschichten der Arten kennen.",
          context: "Entwicklung einer interaktiven Anwendung für Museen, die komplexe Informationen zur Epoche des Quaternary spielerisch, immersiv und leicht verständlich vermittelt.",
          research: "Ich habe die bereitgestellten Informationen analysiert und eine Mind Map erstellt, um einen Überblick über die Epoche zu erhalten. Ich entwickelte eine Zeitleiste der Quaternary-Periode und ordnete die Tiere nach ihrer Lebenszeit, um Zusammenhänge und Aussterbeereignisse durch Klimaveränderungen zu verstehen. Zusätzlich definierte ich die Zielgruppe und legte fest, welche Ziele ich mit der interaktiven Anwendung erreichen wollte. Um das Konzept vollständig zu entwickeln, führte ich weiterführende Recherchen durch, beispielsweise zu Mammuthus und den Lebensbedingungen der Zeit. Erste Prototypentests halfen mir, die Machbarkeit und Logik des Interaktionssystems zu überprüfen und Herausforderungen frühzeitig zu erkennen.",
          methods: ["Crazy 8", "Mind Map", "User Research", "Journey Mapping", "Prototyping", "Usability Testing"],
          results: "Das Quatär ist eine interaktive Ausstellung, die Besucher:innen in die Epoche des Quaternary eintauchen lässt. Auf einem runden Tisch können Nutzer:innen Tiere oder historische Ereignisse auswählen, indem sie Figuren auf Scanner platzieren. Die Bewegung der Figuren wird über ein Zigzag-Muster auf codierten Scheiben sowie einen Arduino-Encoder erkannt, wodurch die Anwendung die Tiere identifiziert und Drehrichtungen auswertet. Ein Projektor zeigt die Inhalte auf der Tischoberfläche an: Wenn ein Tier aktiv wird, erscheint eine Info-Box mit Zusatzinformationen und visuellen Overlays, wie z. B. die Knochenstruktur eines Mammuts oder Highlights bestimmter Körperteile. Nutzer:innen können durch Drehen der Figuren von Punkt zu Punkt navigieren, wobei interaktive Elemente, farbliche Markierungen und Audio-Navigation das spielerische Lernen unterstützen.",
          reflection: "Das Projekt zeigte, wie Storytelling, Design und Technologie kombiniert werden können, um komplexe Inhalte verständlich und spannend zu machen. Besonders wertvoll war die Erfahrung, physische Interaktionen mit digitalen Informationen zu verknüpfen, inklusive der Umsetzung von Arduino-Codierung und Bewegungserkennung. Ich habe gelernt, wie wichtig frühe Prototypentests sind, um die Nutzerführung zu optimieren, und wie man Interaktion und Informationselemente so gestaltet, dass sie intuitiv, immersiv und gleichzeitig spielerisch sind. Zudem habe ich Einblicke in die Planung interaktiver Ausstellungskonzepte gewonnen, von der Informationsstruktur bis zur technischen Umsetzung.",
          role: "User Research, Prototyping, Testing, Programming",
          technologies: ["Figma", "Ausstellung", "Physical Computing", "Immersives Lernen"],
        },
      },
      wip: {
        title: "Laufende Projekte",
        subtitle: "Projekte in der Entwicklung",
        inProgress: "In Arbeit",
        expectedCompletion: "Voraussichtliche Fertigstellung",
        progressLabel: "Fortschritt",
        taskLabel: "Aufgabe",
        initialIdeasLabel: "Erste Ideen",
        project1: {
          title: "Spinnen Exponat",
          description: "Wir entwickeln ein interaktives Exponat über Spinnen mit Fokus auf ihr Gift. Besucher*innen sollen spielerisch entdecken, wie vielfältig und faszinierend Spinnengifte wirklich sind.",
          technologies: ["Ausstellung", "Immersive Experience", "Projection Mapping", "Biologie"],
          expectedCompletion: "Voraussichtliche Fertigstellung: Feb. 2026",
          progress: 40,
          task: "Ein interaktives Exponat entwickeln, das Besucher*innen einen spannenden und verständlichen Einblick in die Welt der Spinnen bietet.",
          initialIdeas: "Unsere erste Idee konzentriert sich auf Spinnengifte: Ein Beamer projiziert die Wirkung verschiedener Spinnenarten auf die Hand der Besucher*innen und erklärt spielerisch, wie sich die jeweiligen Gifte im Körper auswirken.",
        },
        project2: {
          title: "Mobbing-Prävention für Grundschüler",
          description: "Wir entwickeln eine iPad-App, die Lehrkräfte unterstützt, Mobbing vorzubeugen und Kinder altersgerecht zu sensibilisieren.",
          technologies: ["Figma", "UX Design", "iPad / Mobile App", "Bildungsdesign"],
          expectedCompletion: "Voraussichtliche Fertigstellung: Feb 2026",
          progress: 50,
          task: "Eine digitale Lösung entwickeln, die ein gesellschaftliches Problem adressiert, in unserem Fall die Prävention von Mobbing in der Grundschule.",
          initialIdeas: "Unsere erste Idee war eine iPad-App, die Lehrkräfte bei Mobbingproblemen unterstützt. Sie sollte Erklärvideos, Multiple-Choice-Aufgaben, Gamification-Elemente und einen Moodtracker enthalten, um Kinder spielerisch an das Thema heranzuführen und Lehrkräften gleichzeitig praktische Werkzeuge zur Prävention und Intervention zu bieten.",
        },
      },
      contact: {
        title: "Kontakt",
        subtitle: "Ich freue mich über Praxissemestermöglichkeiten, kreative Projekte und den Austausch über Designlösungen für echte Nutzer:innen.",
        email: "E-Mail",
        phone: "Telefon",
        social: "Finde mich auf",
      },
      footer: {
        rights: "Alle Rechte vorbehalten.",
        designed: "Mit Sorgfalt entworfen & gebaut",
      },
    },
  };

  const t = translations[language];

  // Icon mapping for skills and tools
  const iconMap: Record<string, LucideIcon> = {
    "UX Research": Users,
    "UI Design": Palette,
    "Prototyping": Layout,
    "Interaction Design": Figma,
    "Interaktionsgestaltung": Figma,
    "User Testing": Users,
    "Figma": Figma,
    "Adobe": Palette,
    "HTML/CSS": Code,
    "P5js": Code,
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <NavigationBar language={language} onLanguageChange={setLanguage} />

      {/* Hero Section - Header with Name & Design Statement */}
      <section className="relative min-h-[90vh] flex items-center px-6 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating geometric shapes */}
          <div className="absolute top-32 left-[5%] w-64 h-64 rounded-full opacity-20 animate-float" style={{ backgroundColor: '#CADCFC', animationDuration: '6s' }} />
          <div className="absolute top-40 w-32 h-32 rotate-45 opacity-15 animate-float" style={{ backgroundColor: '#00246B', animationDuration: '8s', animationDelay: '1s', right: 'calc(15% + 60px)' }} />
          <div className="absolute bottom-32 left-[20%] w-48 h-48 rounded-full opacity-10 animate-float" style={{ backgroundColor: '#4A90E2', animationDuration: '7s', animationDelay: '2s' }} />
          
          {/* Animated lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#00246B" strokeWidth="2" className="animate-dash" />
            <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#CADCFC" strokeWidth="3" className="animate-dash" style={{ animationDelay: '1.5s' }} />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="leading-none tracking-tight">
                <span className="block text-6xl md:text-7xl lg:text-8xl mb-2 animate-slideInLeft" style={{ color: '#00246B', animationDelay: '0.2s' }}>
                  {t.hero.name.split(' ').slice(0, -1).join(' ')}
                </span>
                <span className="block text-6xl md:text-7xl lg:text-8xl mb-4 animate-slideInLeft" style={{ color: '#4A90E2', animationDelay: '0.4s' }}>
                  {t.hero.name.split(' ').slice(-1)[0]}
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral-700 animate-slideInLeft" style={{ animationDelay: '0.6s' }}>
                {t.hero.title}
              </h2>
            </div>

            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-xl italic animate-slideInLeft border-l-4 pl-6 py-2" style={{ borderColor: '#CADCFC', animationDelay: '0.8s' }}>
              {t.hero.statement}
            </p>

            <div className="flex flex-wrap gap-4 animate-slideInLeft" style={{ animationDelay: '1s' }}>
              <Button 
                variant="outline"
                className="px-6 py-4 h-auto border-2 transition-all"
                style={{ borderColor: '#00246B', color: '#00246B', backgroundColor: 'transparent' }}
                onClick={() => scrollToSection('projects')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #00246B, #4A90E2)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#00246B';
                  e.currentTarget.style.borderColor = '#00246B';
                }}
              >
                {t.hero.buttonViewWork}
              </Button>
              <Button 
                variant="outline"
                className="px-6 py-4 h-auto border-2 transition-all"
                style={{ borderColor: '#00246B', color: '#00246B', backgroundColor: 'transparent' }}
                onClick={() => scrollToSection('contact')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #00246B, #4A90E2)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#00246B';
                  e.currentTarget.style.borderColor = '#00246B';
                }}
              >
                {t.hero.buttonContact}
              </Button>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="relative lg:block hidden animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <div className="relative w-full h-[600px]">
              {/* Main circle with rotating border */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-96 h-96 animate-spin-slow">
                  <div className="absolute inset-0 rounded-full border-4 border-dashed opacity-20" style={{ borderColor: '#00246B' }} />
                  <div className="absolute inset-8 rounded-full border-4 border-dashed opacity-30" style={{ borderColor: '#CADCFC' }} />
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute top-12 right-0 w-32 h-32 rounded-2xl shadow-xl flex items-center justify-center animate-float" style={{ backgroundColor: '#00246B', animationDuration: '4s' }}>
                <Palette className="w-16 h-16 text-white" />
              </div>
              
              <div className="absolute bottom-8 left-8 w-36 h-36 rounded-2xl shadow-xl flex items-center justify-center animate-float" style={{ backgroundColor: '#CADCFC', animationDuration: '5s', animationDelay: '1s' }}>
                <Layout className="w-20 h-20" style={{ color: '#00246B' }} />
              </div>
              
              <div className="absolute top-32 left-16 w-28 h-28 rounded-2xl shadow-xl flex items-center justify-center animate-float" style={{ backgroundColor: '#4A90E2', animationDuration: '4.5s', animationDelay: '0.5s' }}>
                <Figma className="w-14 h-14 text-white" />
              </div>
              
              <div className="absolute bottom-0 right-20 w-24 h-24 rounded-full shadow-xl flex items-center justify-center animate-float" style={{ backgroundColor: '#CADCFC', animationDuration: '6s', animationDelay: '2s' }}>
                <Users className="w-12 h-12" style={{ color: '#00246B' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center pt-2" style={{ borderColor: '#00246B' }}>
            <div className="w-1 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#00246B' }} />
          </div>
        </div>
      </section>

      {/* About Me Section - Portrait & Info */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-5xl md:text-6xl" style={{ color: '#00246B' }}>{t.about.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Portrait */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 shadow-xl bg-white" style={{ borderColor: '#CADCFC' }}>
                <ImageWithFallback
                  src={getImagePath("/images/meinbild.png")}
                  alt="Portrait of Trang Anh Nguyen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <p className="text-neutral-700 text-xl leading-relaxed">
                {t.about.intro}
              </p>

              <div>
                <h3 className="mb-3 text-2xl" style={{ color: '#00246B' }}>
                  {t.about.education}
                </h3>
                <p className="text-neutral-700 text-lg leading-relaxed">
                  {t.about.educationText}
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl" style={{ color: '#00246B' }}>
                  {t.about.skills}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {t.about.skillsList.map((skill) => {
                    const Icon = iconMap[skill] || Users;
                    return <SkillBadge key={skill} name={skill} icon={Icon as LucideIcon} />;
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-2xl mb-4" style={{ color: '#00246B' }}>{t.about.tools}</h3>
                <div className="flex flex-wrap gap-3">
                  {t.about.toolsList.map((tool) => {
                    const Icon = iconMap[tool] || Code;
                    return <SkillBadge key={tool} name={tool} icon={Icon as LucideIcon} />;
                  })}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-2xl" style={{ color: '#00246B' }}>{t.about.interests}</h3>
                <ul className="space-y-2">
                  {t.about.interestsList.map((interest) => (
                    <li key={interest} className="text-neutral-700 text-lg flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00246B' }} />
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-5xl md:text-6xl" style={{ color: '#00246B' }}>{t.projects.title}</h2>
            <p className="text-[rgb(115,115,115)] text-xl max-w-3xl mx-auto">{t.projects.subtitle}</p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ProjectPreviewCard
              title={t.projects.healthHub.title}
              role={t.projects.healthHub.role}
              preview={t.projects.healthHub.preview}
              imageUrl={getImagePath("/images/wattpad/titelbildwattpad.png")}
              technologies={t.projects.healthHub.technologies}
              onReadMore={() => setSelectedProject("healthHub")}
              readMoreText={t.projects.readMore}
            />
            <ProjectPreviewCard
              title={t.projects.ecoShop.title}
              role={t.projects.ecoShop.role}
              preview={t.projects.ecoShop.preview}
              imageUrl={getImagePath("/images/remy/remytitel.jpg")}
              technologies={t.projects.ecoShop.technologies}
              onReadMore={() => setSelectedProject("ecoShop")}
              readMoreText={t.projects.readMore}
            />
            <ProjectPreviewCard
              title={t.projects.taskFlow.title}
              role={t.projects.taskFlow.role}
              preview={t.projects.taskFlow.preview}
              imageUrl={getImagePath("/images/melodiekreis/melodietitel.png")}
              technologies={t.projects.taskFlow.technologies}
              onReadMore={() => setSelectedProject("taskFlow")}
              readMoreText={t.projects.readMore}
            />
            <ProjectPreviewCard
              title={t.projects.learnGrow.title}
              role={t.projects.learnGrow.role}
              preview={t.projects.learnGrow.preview}
              imageUrl={getImagePath("/images/quataer/quataertitel.png")}
              technologies={t.projects.learnGrow.technologies}
              onReadMore={() => setSelectedProject("learnGrow")}
              readMoreText={t.projects.readMore}
            />
          </div>

          {/* Full Case Study Modal/Overlay */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
              <div className="min-h-screen px-4 py-8">
                <div className="max-w-6xl mx-auto relative">
                  <Button
                    onClick={() => setSelectedProject(null)}
                    className="sticky top-4 left-full mb-4 bg-white text-neutral-900 hover:bg-neutral-100 shadow-lg z-10"
                    size="lg"
                  >
                    <X className="mr-2 h-5 w-5" />
                    {t.projects.closeCase}
                  </Button>
                  
                  {selectedProject === "healthHub" && (
                    <CaseStudy
                      title={t.projects.healthHub.title}
                      context={t.projects.healthHub.context}
                      research={t.projects.healthHub.research}
                      methods={t.projects.healthHub.methods}
                      processImages={[
                        "/images/wattpad/prozess1.jpeg",
                        "/images/wattpad/prozess2.jpeg",
                        "/images/wattpad/prozess3.jpeg",
                        "/images/wattpad/prozess4.jpeg",
                        "/images/wattpad/prozess5.jpeg",
                        "/images/wattpad/prozess6.jpeg",
                        "/images/wattpad/prozess7.jpeg",
                        "/images/wattpad/prozess8.jpeg",
                        "/images/wattpad/prozess9.jpeg",
                        "/images/wattpad/prozess10.jpeg",
                        "/images/wattpad/prozess11.jpeg",
                        "/images/wattpad/prozess12.jpeg",
                      ].map(getImagePath)}
                      finalImages={[
                        "/images/wattpad/ergebnis1.jpeg",
                        "/images/wattpad/ergebnis2.jpeg",
                        "/images/wattpad/ergebnis3.jpeg",
                        "/images/wattpad/ergebnis5.jpeg",
                        "/images/wattpad/ergebnis6.jpeg",
                        "/images/wattpad/ergebnis7.jpeg",
                      ].map(getImagePath)}
                      videos={["https://www.youtube.com/watch?v=hPfvFZl_5PY"]}
                      results={t.projects.healthHub.results}
                      reflection={t.projects.healthHub.reflection}
                      role={t.projects.healthHub.role}
                      technologies={t.projects.healthHub.technologies}
                      language={language}
                    />
                  )}
                  
                  {selectedProject === "ecoShop" && (
                    <CaseStudy
                      title={t.projects.ecoShop.title}
                      context={t.projects.ecoShop.context}
                      research={t.projects.ecoShop.research}
                      methods={t.projects.ecoShop.methods}
                      processImages={[
                        "/images/remy/rp1.png",
                        "/images/remy/rp2.png",
                        "/images/remy/rp3.jpeg",
                        "/images/remy/rp4.png",
                      ].map(getImagePath)}
                      finalImages={[
                        "/images/remy/re1.jpeg",
                        "/images/remy/re2.jpeg",
                        "/images/remy/re3.jpeg",
                        "/images/remy/re4.jpeg",
                        "/images/remy/re5.jpeg",
                        "/images/remy/re6.jpeg",
                        "/images/remy/re7.jpeg",
                        "/images/remy/re8.jpeg",
                      ].map(getImagePath)}
                      videos={["https://www.youtube.com/watch?v=MFNPUndDFcU"]}
                      results={t.projects.ecoShop.results}
                      reflection={t.projects.ecoShop.reflection}
                      role={t.projects.ecoShop.role}
                      technologies={t.projects.ecoShop.technologies}
                      language={language}
                    />
                  )}
                  
                  {selectedProject === "taskFlow" && (
                    <CaseStudy
                      title={t.projects.taskFlow.title}
                      context={t.projects.taskFlow.context}
                      research={t.projects.taskFlow.research}
                      methods={t.projects.taskFlow.methods}
                      processImages={[
                        "/images/melodiekreis/mp1.png",
                        "/images/melodiekreis/mp2.jpeg",
                        "/images/melodiekreis/mp3.jpeg",
                        "/images/melodiekreis/mp4.png",
                        "/images/melodiekreis/mp5.png",
                        "/images/melodiekreis/mp6.png",
                        "/images/melodiekreis/mp7.png",
                        "/images/melodiekreis/mp8.png",
                        "/images/melodiekreis/mp9.png",
                        "/images/melodiekreis/mp10.png",
                      ].map(getImagePath)}
                      finalImages={[
                        "/images/melodiekreis/me1.png",
                        "/images/melodiekreis/me2.png",
                      ].map(getImagePath)}
                      results={t.projects.taskFlow.results}
                      reflection={t.projects.taskFlow.reflection}
                      role={t.projects.taskFlow.role}
                      technologies={t.projects.taskFlow.technologies}
                      language={language}
                    />
                  )}
                  
                  {selectedProject === "learnGrow" && (
                    <CaseStudy
                      title={t.projects.learnGrow.title}
                      context={t.projects.learnGrow.context}
                      research={t.projects.learnGrow.research}
                      methods={t.projects.learnGrow.methods}
                      processImages={[
                        "/images/quataer/qp1.png",
                        "/images/quataer/qp2.jpeg",
                        "/images/quataer/qp3.jpeg",
                        "/images/quataer/qp4.jpeg",
                        "/images/quataer/qp5.png",
                        "/images/quataer/qp6.png",
                        "/images/quataer/qp7.png",
                        "/images/quataer/qp8.png",
                        "/images/quataer/qp9.png",
                        "/images/quataer/qp10.png",
                        "/images/quataer/qp11.jpeg",
                        "/images/quataer/qp12.png",
                      ].map(getImagePath)}
                      finalImages={[
                        "/images/quataer/qe1.png",
                        "/images/quataer/qe2.png",
                        "/images/quataer/qe3.png",
                        "/images/quataer/qe4.png",
                        "/images/quataer/qe5.png",
                        "/images/quataer/qe6.png",
                      ].map(getImagePath)}
                      videos={["https://www.youtube.com/watch?v=xtrcQ4XqOFI"]}
                      results={t.projects.learnGrow.results}
                      reflection={t.projects.learnGrow.reflection}
                      role={t.projects.learnGrow.role}
                      technologies={t.projects.learnGrow.technologies}
                      language={language}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Work in Progress Section */}
      <section id="work-in-progress" className="py-12 px-6 bg-gradient-to-br from-orange-50/20 via-white to-teal-50/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="mb-4 text-5xl md:text-6xl" style={{ color: '#00246B' }}>{t.wip.title}</h2>
            <p className="text-neutral-500 text-base max-w-2xl mx-auto text-[20px]">{t.wip.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <WorkInProgressCard
              title={t.wip.project1.title}
              description={t.wip.project1.description}
              imageUrl={getImagePath("/images/expnate.png")}
              technologies={t.wip.project1.technologies}
              expectedCompletion={t.wip.project1.expectedCompletion}
              progress={t.wip.project1.progress}
              statusLabel={t.wip.inProgress}
              progressLabel={t.wip.progressLabel}
              taskLabel={t.wip.taskLabel}
              initialIdeasLabel={t.wip.initialIdeasLabel}
              task={t.wip.project1.task}
              initialIdeas={t.wip.project1.initialIdeas}
            />
            <WorkInProgressCard
              title={t.wip.project2.title}
              description={t.wip.project2.description}
              imageUrl={getImagePath("/images/mobbing.png")}
              technologies={t.wip.project2.technologies}
              expectedCompletion={t.wip.project2.expectedCompletion}
              progress={t.wip.project2.progress}
              statusLabel={t.wip.inProgress}
              progressLabel={t.wip.progressLabel}
              taskLabel={t.wip.taskLabel}
              initialIdeasLabel={t.wip.initialIdeasLabel}
              task={t.wip.project2.task}
              initialIdeas={t.wip.project2.initialIdeas}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-5xl md:text-6xl" style={{ color: '#00246B' }}>{t.contact.title}</h2>
            <p className="text-[rgb(115,115,115)] text-xl max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Kontakt Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Email Card */}
              <a 
                href="mailto:trang-anh.nguyen@hfg-gmuend.de" 
                className="p-8 rounded-3xl border border-neutral-200 hover:shadow-lg transition-all duration-300 group"
                style={{ background: 'linear-gradient(to br, white, #CADCFC15)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: '#CADCFC' }}>
                    <Mail className="h-8 w-8" style={{ color: '#00246B' }} />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">{t.contact.email}</p>
                    <p className="text-neutral-700 group-hover:text-[#00246B] transition-colors">trang-anh.nguyen@hfg-gmuend.de</p>
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a 
                href="tel:+491621554894" 
                className="p-8 rounded-3xl border border-neutral-200 hover:shadow-lg transition-all duration-300 group"
                style={{ background: 'linear-gradient(to br, white, #CADCFC15)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: '#CADCFC' }}>
                    <Phone className="h-8 w-8" style={{ color: '#00246B' }} />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">{t.contact.phone}</p>
                    <p className="text-neutral-700 group-hover:text-[#00246B] transition-colors">+49 162 155 4894</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Social Media */}
            <div className="p-8 rounded-3xl border border-neutral-200 text-center" style={{ background: 'linear-gradient(to br, white, #CADCFC15)' }}>
              <h3 className="mb-6 text-2xl" style={{ color: '#00246B' }}>{t.contact.social}</h3>
              <div className="flex justify-center gap-6">
                <a 
                  href="https://www.instagram.com/trg_anhngn/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 group-hover:scale-110 transition-all" style={{ borderColor: '#CADCFC', backgroundColor: 'white' }}>
                    <Instagram className="h-8 w-8" style={{ color: '#00246B' }} />
                  </div>
                  <span className="text-sm text-neutral-600 group-hover:text-[#00246B] transition-colors">Instagram</span>
                </a>

                <a 
                  href="https://www.facebook.com/tranganhnguyen213/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 group-hover:scale-110 transition-all" style={{ borderColor: '#CADCFC', backgroundColor: 'white' }}>
                    <svg className="h-8 w-8" style={{ color: '#00246B' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600 group-hover:text-[#00246B] transition-colors">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-neutral-900 text-neutral-300">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">
            © 2025 Trang Anh Nguyen. {t.footer.rights}
          </p>
          <p className="text-neutral-500 text-sm">
            {t.footer.designed}
          </p>
        </div>
      </footer>
    </div>
  );
}