/**
 * Executive Resume Internationalization Dictionary (EN, IT, TR)
 * Primary Language: English (B1/B2 Level)
 */

const translations = {
    en: {
        // Nav & Controls
        nav_profile: "Profile",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_education: "Education",
        nav_skills: "Skills",
        nav_certificates: "Certificates",
        btn_print_cv: "Print / Save PDF CV",
        btn_close: "Close",
        btn_view_pdf: "View PDF Certificate",
        btn_open_new_tab: "Open in New Tab",

        // Header & Name
        name: "SERHAT KABAİŞ",
        title: "K-12 Educator & Educational Technology Specialist",
        tagline: "Reducing teacher workload with AI to unlock quality time for every student.",

        // Sidebar Labels
        sb_contact: "CONTACT DETAILS",
        sb_location: "Çanakkale / Turkey",
        sb_email: "Email",
        sb_phone: "Phone",
        sb_website: "Website",
        sb_linkedin: "LinkedIn",

        sb_skills: "CORE COMPETENCIES",
        skill_1: "AI Integration & LLM Agents",
        skill_2: "EdTech & LMS Platforms",
        skill_3: "Arduino & Physical Computing",
        skill_4: "TÜBİTAK, eTwinning & Teknofest",

        sb_languages: "LANGUAGES & COMMUNICATION",
        lang_direct_label: "Direct Communication:",
        lang_direct_val: "English, Turkish, French, Kurdish",
        lang_ai_label: "AI-Assisted Communication:",
        lang_ai_val: "Almost all global languages (via LLM Translation Agents)",

        sb_highlights: "KEY HIGHLIGHTS",
        hl_1: "22+ Years of K-12 Teaching Experience",
        hl_2: "EdTech Specialist",
        hl_3: "Educational Content Production",
        hl_4: "Integrating AI Tools into Education",
        hl_5: "Video, Graphic & Audio Production",
        hl_6: "Co-Founder, İda Kaşifleri Tech & Nature Workshop",
        hl_7: "Coordinator for Various Educational Projects",

        // Section Headings
        sec_profile: "PROFILE & SUMMARY",
        sec_experience: "PROFESSIONAL EXPERIENCE",
        sec_projects: "FEATURED PROJECTS & INNOVATIONS",
        sec_education: "EDUCATION & ACADEMIC RESEARCH",
        sec_certificates: "VERIFIED CERTIFICATES & CREDENTIALS",

        // Profile Text
        profile_p1: "Innovative educator with over 22 years of K-12 classroom teaching experience. Specialized in integrating Educational Technology (EdTech), Artificial Intelligence (AI), and physical programming tools into the curriculum to boost student engagement and project-based learning.",
        profile_p2: "Currently a Master's student in Educational Technology (EdTech), conducting research on digital anthropology, digital ethnography, and the transformative role of AI in learning environments. Active as a coordinator and AI trainer in national and international initiatives, including TÜBİTAK and eTwinning projects.",

        // Experience
        exp1_role: "K-12 Educator",
        exp1_org: "Ministry of National Education (MEB)",
        exp1_date: "Starting Year – Present (22+ Years)",
        exp1_desc: "Implementing innovative, student-centered teaching methodologies across K-12 levels. Integrating AI tools and digital platforms into daily lesson plans to create interactive, future-ready learning environments.",

        exp3_role: "Founder & Club Coordinator",
        exp3_org: "İda Kaşifleri (Ida Explorers - Nature, Science & Tech Club)",
        exp3_date: "Starting Year – Present",
        exp3_desc: "Designing hands-on science, technology, and nature workshops for children. Developing practical hardware and software projects with students to foster maker culture and creative problem-solving.",

        // Projects
        proj1_title: "TÜBİTAK 4009 Village Science Fair (Assos / Gülpınar)",
        proj1_role: "Project Coordinator & Organizer",
        proj1_date: "September 2026",
        proj1_desc: "Organized and executed a rural science festival under TÜBİTAK 4009, bringing science, technology, and interactive experiments to children in the Assos / Gülpınar region.",

        proj2_title: "Virtual Pedal (Sanal Pedal - Teknofest VR/Arduino)",
        proj2_role: "Lead Mentor & Team Project",
        proj2_date: "Teknofest Project",
        proj2_desc: "Designed and developed an Arduino-based Virtual Reality (VR) exercise and cycling game in collaboration with student members of Ida Explorers.",

        proj3_title: "Fly Fly Butterfly (eTwinning International Project)",
        proj3_role: "Founder & Technological Coordinator",
        proj3_date: "International Collaboration",
        proj3_desc: "Founded and managed an international school collaboration project, overseeing the digital infrastructure and interactive cross-cultural learning activities.",

        proj4_title: "EduManu (edumanu.com)",
        proj4_role: "Co-Founder & Instructional Designer",
        proj4_date: "Active EdTech Platform",
        proj4_desc: "Developing innovative instructional design materials, educational technology guides, and AI integration resources for teachers and learners worldwide.",

        proj5_title: "AI Mosaic (European Quality Label eTwinning Project)",
        proj5_role: "Project Founder & AI Technology Coordinator",
        proj5_desc: "Award-winning international eTwinning project combining primary arts education with generative AI tools (ElevenLabs, HeyGen, Google Veo). Digitally resurrected historical figures like Aristotle using AI avatars to enhance cultural heritage awareness.",

        // Education
        edu1_degree: "Master of Science (M.Sc.) Student in Educational Technology (EdTech)",
        edu1_inst: "Graduate School of Educational Sciences",
        edu1_status: "Ongoing",
        edu1_desc: "Focus Areas: Digital Anthropology, Digital Ethnography, AI tools in educational workflows, and instructional design.",

        edu2_degree: "Bachelor of Arts (B.A.) Degree",
        edu2_inst: "Faculty of Education",
        edu2_status: "Graduated",
        edu2_desc: "Focus Areas: Pedagogy, communicative learning methodologies, and curriculum development.",

        // Certificates & Filter Buttons
        cert_filter_all: "All Certificates (14)",
        cert_filter_ai: "AI & Digital Skills",
        cert_filter_google: "Google Certified",
        cert_filter_eu: "EU & International",

        cert_1: "AI Mosaic - European Quality Label",
        cert_1_org: "eTwinning / European Schoolnet",
        cert_2: "AI Mosaic - National Quality Label",
        cert_2_org: "MEB / eTwinning Turkey",
        cert_3: "Educators' Digital Competencies Certificate",
        cert_3_org: "European Digital Framework (DigCompEdu)",
        cert_4: "Erasmus+ Prague Mobility & Training Certificate",
        cert_4_org: "Erasmus+ Program (Czech Republic)",
        cert_5: "Google Gemini Certified Educator",
        cert_5_org: "Google for Education",
        cert_6: "Google Certified Educator - Level 1",
        cert_6_org: "Google for Education",
        cert_7: "Google Certified Educator - Level 2",
        cert_7_org: "Google for Education",
        cert_8: "MEB AI in Education Course Certificate",
        cert_8_org: "Ministry of National Education",
        cert_9: "European Schoolnet Academy Master MOOC Certificates",
        cert_9_org: "European Schoolnet Academy",
        cert_10: "SELFIEforTEACHERS Digital Competence Certificate",
        cert_10_org: "European Commission",
        cert_11: "Türkiye Yüzyılı Maarif Modeli eTwinning Workshop",
        cert_11_org: "MEB Marmara Region Workshop",
        cert_12: "AI Ethics in Education Certificate",
        cert_12_org: "Ministry of National Education",
        cert_13: "Canva Digital Educator Certificate",
        cert_13_org: "Canva for Education",
        cert_14: "AI in the Classroom Specialist Certificate",
        cert_14_org: "International EdTech Association",

        // Footer
        footer_text: "Serhat KABAİŞ — K-12 Educator, EdTech Specialist & Co-Founder of edumanu.com."
    },

    it: {
        // Nav & Controls
        nav_profile: "Profilo",
        nav_experience: "Esperienza",
        nav_projects: "Progetti",
        nav_education: "Formazione",
        nav_skills: "Competenze",
        nav_certificates: "Certificati",
        btn_print_cv: "Stampa / Scarica CV PDF",
        btn_close: "Chiudi",
        btn_view_pdf: "Visualizza PDF",
        btn_open_new_tab: "Apri in Nuova Scheda",

        // Header & Name
        name: "SERHAT KABAİŞ",
        title: "Educatore K-12 & Specialista in Tecnologie Educative",
        tagline: "Ridurre il carico docente con l'IA, liberare tempo di qualità per ogni studente.",

        // Sidebar Labels
        sb_contact: "DATI DI CONTATTO",
        sb_location: "Çanakkale / Turchia",
        sb_email: "Email",
        sb_phone: "Telefono",
        sb_website: "Sito Web",
        sb_linkedin: "LinkedIn",

        sb_skills: "COMPETENZE CHIAVE",
        skill_1: "Integrazione IA & Agenti LLM",
        skill_2: "Piattaforme EdTech & LMS",
        skill_3: "Arduino & Programmazione Fisica",
        skill_4: "Progetti TÜBİTAK, eTwinning & Teknofest",

        sb_languages: "LINGUE E COMUNICAZIONE",
        lang_direct_label: "Comunicazione Diretta:",
        lang_direct_val: "Inglese, Turco, Francese, Curdo",
        lang_ai_label: "Comunicazione Assistita da IA:",
        lang_ai_val: "Quasi tutte le lingue del mondo (tramite agenti LLM)",

        sb_highlights: "PUNTI DI FORZA",
        hl_1: "Oltre 22 Anni di Esperienza K-12",
        hl_2: "Specialista EdTech",
        hl_3: "Produzione di Contenuti Educativi",
        hl_4: "Integrazione degli Strumenti IA nell'Educazione",
        hl_5: "Produzione Video, Grafica e Audio",
        hl_6: "Cofondatore, İda Kaşifleri Laboratorio di Tecnologia e Natura",
        hl_7: "Coordinatore di Vari Progetti Educativi",

        // Section Headings
        sec_profile: "PROFILO & SINTESI PROFESSIONALE",
        sec_experience: "ESPERIENZA PROFESSIONALE",
        sec_projects: "PROGETTI ED INIZIATIVE CHIAVE",
        sec_education: "FORMAZIONE & RICERCA ACCADEMICA",
        sec_certificates: "CERTIFICATI & QUALIFICHE VERIFICATE",

        // Profile Text
        profile_p1: "Educatore innovativo con oltre 22 anni di esperienza pratica in classe a livello K-12. Specializzato nell'integrazione di Tecnologie Educative (EdTech), Intelligenza Artificiale (IA) e strumenti di programmazione fisica nel curriculum.",
        profile_p2: "Attualmente studente di Laurea Magistrale in Tecnologie Educative (EdTech), svolge ricerche su antropologia digitale, etnografia digitale e sull'impatto dell'IA nell'educazione. Coordinatore di progetti e formatore IA in iniziative nazionali e internazionali tra cui TÜBİTAK ed eTwinning.",

        // Experience
        exp1_role: "Educatore K-12",
        exp1_org: "Ministero dell'Istruzione Nazionale (MEB)",
        exp1_date: "Inizio – In corso (22+ Anni)",
        exp1_desc: "Applicazione di metodologie innovative e centrate sullo studente nei livelli K-12. Integrazione di strumenti IA e piattaforme digitali nei piani di lezione giornalieri.",

        exp3_role: "Fondatore & Coordinatore del Club",
        exp3_org: "İda Kaşifleri (Esploratori dell'Ida - Club Natura, Scienza e Tecnologia)",
        exp3_date: "Inizio – In corso",
        exp3_desc: "Progettazione di workshop di scienza, tecnologia e natura per ragazzi. Sviluppo di progetti hardware e software con gli studenti.",

        // Projects
        proj1_title: "Fiera della Scienza del Villaggio TÜBİTAK 4009 (Assos / Gülpınar)",
        proj1_role: "Coordinatore & Organizzatore del Progetto",
        proj1_date: "Settembre 2026",
        proj1_desc: "Organizzazione e realizzazione di un festival scientifico rurale per portare scienza, tecnologia ed esperimenti interattivi ai bambini della regione Assos / Gülpınar.",

        proj2_title: "Pedale Virtuale (Sanal Pedal - Progetto Teknofest VR/Arduino)",
        proj2_role: "Mentore Principale del Progetto",
        proj2_date: "Progetto Teknofest",
        proj2_desc: "Sviluppo di un gioco di esercizi in bicicletta con Realtà Virtuale (VR) basato su Arduino in collaborazione con gli studenti del club İda Kaşifleri.",

        proj3_title: "Fly Fly Butterfly (Progetto Internazionale eTwinning)",
        proj3_role: "Fondatore & Coordinatore Tecnologico",
        proj3_date: "Collaborazione Internazionale",
        proj3_desc: "Fondazione e gestione di un progetto di collaborazione tra scuole internazionali, curando l'infrastruttura digitale e le activities interculturali.",

        proj4_title: "EduManu (edumanu.com)",
        proj4_role: "Cofondatore & Instructional Designer",
        proj4_date: "Piattaforma EdTech Attiva",
        proj4_desc: "Sviluppo di materiali didattici innovativi, guide per le tecnologie educative e risorse per l'integrazione dell'IA dedicate a docenti e studenti.",

        proj5_title: "AI Mosaic (Progetto eTwinning con Certificato di Qualità Europeo)",
        proj5_role: "Fondatore del Progetto & Coordinatore Tecnologie IA",
        proj5_desc: "Progetto eTwinning internazionale pluri-premiato che unisce l'educazione artistica con strumenti di IA generativa (ElevenLabs, HeyGen, Google Veo) per far rivivere figure storiche come Aristotele tramite avatar digitali.",

        // Education
        edu1_degree: "Studente di Laurea Magistrale in Tecnologie Educative (EdTech)",
        edu1_inst: "Scuola di Scienze dell'Educazione",
        edu1_status: "In corso",
        edu1_desc: "Aree di ricerca: Antropologia digitale, etnografia digitale, strumenti IA e progettazione didattica.",

        edu2_degree: "Laurea",
        edu2_inst: "Facoltà di Scienze della Formazione",
        edu2_status: "Completata",
        edu2_desc: "Aree di studio: Pedagogia, metodologie di apprendimento comunicativo e sviluppo del curriculum.",

        // Certificates
        cert_filter_all: "Tutti i Certificati (14)",
        cert_filter_ai: "IA & Digitale",
        cert_filter_google: "Certificati Google",
        cert_filter_eu: "UE & Internazionali",

        cert_1: "AI Mosaic - Certificato di Qualità Europeo",
        cert_1_org: "eTwinning / European Schoolnet",
        cert_2: "AI Mosaic - Certificato di Qualità Nazionale",
        cert_2_org: "MEB / eTwinning Turchia",
        cert_3: "Certificato delle Competenze Digitali dei Docenti",
        cert_3_org: "Quadro Digitale Europeo (DigCompEdu)",
        cert_4: "Certificato di Mobilità e Formazione Erasmus+ Praga",
        cert_4_org: "Programma Erasmus+ (Repubblica Ceca)",
        cert_5: "Google Gemini Certified Educator",
        cert_5_org: "Google for Education",
        cert_6: "Google Certified Educator - Livello 1",
        cert_6_org: "Google for Education",
        cert_7: "Google Certified Educator - Livello 2",
        cert_7_org: "Google for Education",
        cert_8: "Corso MEB sull'Uso dell'IA nell'Educazione",
        cert_8_org: "Ministero dell'Istruzione Nazionale",
        cert_9: "Certificati Master MOOC European Schoolnet Academy",
        cert_9_org: "European Schoolnet Academy",
        cert_10: "Certificato di Competenza Digitale SELFIEforTEACHERS",
        cert_10_org: "Commissione Europea",
        cert_11: "Workshop Regionale eTwinning Modello Maarif",
        cert_11_org: "Workshop Regionale MEB Marmara",
        cert_12: "Certificato di Etica dell'IA nell'Educazione",
        cert_12_org: "Ministero dell'Istruzione Nazionale",
        cert_13: "Certificato Educatore Digitale Canva",
        cert_13_org: "Canva for Education",
        cert_14: "Specialista IA in Classe",
        cert_14_org: "Associazione Internazionale EdTech",

        // Footer
        footer_text: "Serhat KABAİŞ — Educatore K-12, Specialista EdTech & Cofondatore di edumanu.com."
    },

    tr: {
        // Nav & Controls
        nav_profile: "Profil",
        nav_experience: "Deneyim",
        nav_projects: "Projeler",
        nav_education: "Eğitim",
        nav_skills: "Yetkinlikler",
        nav_certificates: "Sertifikalar",
        btn_print_cv: "CV Yazdır / PDF İndir",
        btn_close: "Kapat",
        btn_view_pdf: "PDF Sertifikayı Gör",
        btn_open_new_tab: "Yeni Sekmede Aç",

        // Header & Name
        name: "SERHAT KABAİŞ",
        title: "K-12 Eğitmeni & Eğitim Teknolojileri Uzmanı",
        tagline: "AI ile öğretmen iş yükünü azaltmak, her öğrenciye nitelikli zaman kazandırmak.",

        // Sidebar Labels
        sb_contact: "İLETİŞİM BİLGİLERİ",
        sb_location: "Çanakkale / Türkiye",
        sb_email: "E-posta",
        sb_phone: "Telefon",
        sb_website: "Web Sitesi",
        sb_linkedin: "LinkedIn",

        sb_skills: "TEMEL YETKİNLİKLER",
        skill_1: "AI Entegrasyonu & LLM Ajanları",
        skill_2: "EdTech & ÖYS Platformları",
        skill_3: "Arduino & Fiziksel Programlama",
        skill_4: "TÜBİTAK, eTwinning & Teknofest",

        sb_languages: "DİLLER VE İLETİŞİM",
        lang_direct_label: "Doğrudan İletişim:",
        lang_direct_val: "İngilizce, Türkçe, Fransızca, Kürtçe",
        lang_ai_label: "Yapay Zeka Destekli İletişim:",
        lang_ai_val: "Neredeyse tüm dünya dilleri (LLM Çeviri Ajanları ile)",

        sb_highlights: "ÖNE ÇIKANLAR",
        hl_1: "22 yıldan fazla K-12 tecrübesi",
        hl_2: "EdTech Uzmanı",
        hl_3: "Eğitim içerikleri üretimi",
        hl_4: "Eğitimde yapay zeka entegrasyonu",
        hl_5: "Video, grafik ve ses prodüksiyonu",
        hl_6: "Co-founder İda Kaşifleri Teknoloji ve Doğa Atölyesi",
        hl_7: "Çeşitli eğitim projeleri koordinatörü",

        // Section Headings
        sec_profile: "PROFESYONEL ÖZET",
        sec_experience: "MESLEKİ DENEYİM",
        sec_projects: "ÖNE ÇIKAN PROJELER VE BAŞARILAR",
        sec_education: "EĞİTİM & AKADEMİK ARAŞTIRMALAR",
        sec_certificates: "ONAYLI SERTİFİKALAR VE YETKİNLİK BELGELERİ",

        // Profile Text
        profile_p1: "22 yılı aşkın K-12 sınıf içi tecrübesine sahip, yenilikçi ve araştırmacı eğitmen. Eğitim teknolojileri (EdTech), yapay zeka (AI) ve fiziksel programlama araçlarını müfredata entegre ederek öğrenci katılımını ve proje odaklı öğrenmeyi artırma konusunda uzmanlaşmıştır.",
        profile_p2: "EdTech alanında Yüksek Lisans öğrencisi olarak dijital antropoloji, dijital etnografya ve yapay zeka araçlarının eğitimdeki dönüştürücü rolü üzerine çalışmalar yürütmektedir. TÜBİTAK ve eTwinning gibi ulusal ve uluslararası eğitim projelerinde koordinatör ve yapay zeka eğitmeni olarak görev almaktadır.",

        // Experience
        exp1_role: "K-12 Eğitmeni",
        exp1_org: "Milli Eğitim Bakanlığı (MEB)",
        exp1_date: "Başlangıç Yılı – Devam Ediyor (22+ Yıl)",
        exp1_desc: "K-12 kademesinde 22 yılı aşkın süredir yenilikçi ve öğrenci merkezli eğitim metodolojileri uygulamak. Yapay zeka araçlarını ve dijital platformları ders planlarına entegre ederek interaktif bir öğrenme ortamı sunmak.",

        exp3_role: "Kulüp Koordinatörü & Kurucu",
        exp3_org: "İda Kaşifleri (Doğa, Bilim ve Teknoloji Kulübü)",
        exp3_date: "Başlangıç Yılı – Devam Ediyor",
        exp3_desc: "Çocuklara yönelik bilim, teknoloji ve doğa odaklı atölyeler ve projeler tasarlamak. Öğrencilerle birlikte uygulamalı donanım ve yazılım projeleri geliştirerek maker kültürünü yaygınlaştırmak.",

        // Projects
        proj1_title: "TÜBİTAK 4009 Köy Bilim Şenliği (Assos / Gülpınar)",
        proj1_role: "Proje Yürütücüsü ve Organizatörü",
        proj1_date: "Eylül 2026",
        proj1_desc: "TÜBİTAK 4009 kapsamında Assos / Gülpınar bölgesindeki çocukları bilim, teknoloji ve uygulamalı deneylerle buluşturan bilim şenliği yürütücülüğü.",

        proj2_title: "Sanal Pedal (Teknofest VR/Arduino Projesi)",
        proj2_role: "Ekip Danışmanı & Proje Lideri",
        proj2_date: "Teknofest Projesi",
        proj2_desc: "İda Kaşifleri ekibi ile birlikte, Arduino tabanlı bir VR (Sanal Gerçeklik) egzersiz ve bisiklet oyununun tasarlanması ve geliştirilmesi.",

        proj3_title: "Fly Fly Butterfly (eTwinning Uluslararası Projesi)",
        proj3_role: "Kurucu & Teknoloji Koordinatörü",
        proj3_date: "Uluslararası Okul İşbirliği",
        proj3_desc: "Uluslararası okul işbirliklerini barındıran projenin kuruculuğu/koordinatörlüğü ve teknolojik altyapısının yönetimi.",

        proj4_title: "EduManu (edumanu.com)",
        proj4_role: "Kurucu Ortak & Öğretim Tasarımcısı",
        proj4_date: "Aktif EdTech Platformu",
        proj4_desc: "Eğitmenler ve öğrenciler için yenilikçi öğretim tasarımı materyalleri, eğitim teknolojisi rehberleri ve yapay zeka entegrasyon kaynakları geliştirme.",

        proj5_title: "AI Mosaic (Avrupa Kalite Etiketli eTwinning Projesi)",
        proj5_role: "Proje Kurucusu & AI Teknolojileri Koordinatörü",
        proj5_desc: "İlkokul düzeyinde sanat ile üretken yapay zeka araçlarını (ElevenLabs, HeyGen, Google Veo) birleştiren; Aristo gibi tarihi figürleri dijital avatarlarla canlandırıp kültürel mirası işleyen, Avrupa Kalite Etiketli uluslararası eTwinning projesi.",

        // Education
        edu1_degree: "EdTech (Eğitim Teknolojileri) Yüksek Lisans Öğrencisi",
        edu1_inst: "Eğitim Bilimleri Enstitüsü",
        edu1_status: "Devam Ediyor",
        edu1_desc: "Odak Alanları: Dijital Antropoloji, Dijital Etnografya, Yapay Zeka Araçlarının Eğitimdeki Rolü ve Öğretim Tasarımı.",

        edu2_degree: "Lisans Mezuniyeti",
        edu2_inst: "Eğitim Fakültesi",
        edu2_status: "Mezun",
        edu2_desc: "Odak Alanları: Pedagoji, İletişimsel Öğrenme Metodolojileri ve Müfredat Geliştirme.",

        // Certificates
        cert_filter_all: "Tüm Sertifikalar (14)",
        cert_filter_ai: "Yapay Zeka & Dijital",
        cert_filter_google: "Google Sertifikaları",
        cert_filter_eu: "AB & Uluslararası",

        cert_1: "AI Mosaic - Avrupa Kalite Etiketi",
        cert_1_org: "eTwinning / European Schoolnet",
        cert_2: "AI Mosaic - Ulusal Kalite Etiketi",
        cert_2_org: "MEB / eTwinning Türkiye",
        cert_3: "Eğitmenlerin Dijital Yetkinlikleri Sertifikası",
        cert_3_org: "Avrupa Dijital Çerçevesi (DigCompEdu)",
        cert_4: "Erasmus+ Prag Hareketlilik ve Eğitim Sertifikası",
        cert_4_org: "Erasmus+ Programı (Çek Cumhuriyeti)",
        cert_5: "Google Gemini Onaylı Eğitmen",
        cert_5_org: "Google for Education",
        cert_6: "Google Sertifikalı Eğitmen - Seviye 1",
        cert_6_org: "Google for Education",
        cert_7: "Google Sertifikalı Eğitmen - Seviye 2",
        cert_7_org: "Google for Education",
        cert_8: "MEB Eğitimde Yapay Zeka Kullanımı Kurs Sertifikası",
        cert_8_org: "Ministry of National Education",
        cert_9: "European Schoolnet Academy Master MOOC Sertifikaları",
        cert_9_org: "European Schoolnet Academy",
        cert_10: "SELFIEforTEACHERS Dijital Yetkinlik Sertifikası",
        cert_10_org: "Avrupa Komisyonu",
        cert_11: "Türkiye Yüzyılı Maarif Modeli eTwinning Çalıştayı",
        cert_11_org: "MEB Marmara Region Workshop",
        cert_12: "Eğitimde Yapay Zeka Etiği Sertifikası",
        cert_12_org: "Milli Eğitim Bakanlığı",
        cert_13: "Canva Dijital Öğretmen Sertifikası",
        cert_13_org: "Canva for Education",
        cert_14: "Sınıfta Yapay Zeka Kullanımı Uzmanlık Sertifikası",
        cert_14_org: "Uluslararası EdTech Derneği",

        // Footer
        footer_text: "Serhat KABAİŞ — K-12 Eğitmeni, EdTech Uzmanı & edumanu.com Kurucu Ortağı."
    }
};
