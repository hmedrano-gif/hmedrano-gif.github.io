// Contenido del portafolio de Heyder Medrano Olier.
// Fuente: hoja de vida 2025 (F:\HMO\HV) y repositorios públicos verificados el 4-nov-2026.
// Regla: nada que no esté verificado; sin métricas, clientes ni certificaciones inventadas.

export const perfil = {
  nombre: "Heyder Medrano Olier",
  titular: "Ingeniero de Sistemas | Analítica de Datos | Inteligencia Artificial | Desarrollo de Software",
  ciudad: "Cartagena, Colombia",
  url: "https://hmedrano-gif.github.io",
  github: "https://github.com/hmedrano-gif",
  githubProyectos: "https://github.com/hmotecnologico-create",
  propuesta:
    "Diseño soluciones de datos e inteligencia artificial que se pueden verificar: sistemas que procesan grandes volúmenes, agentes que auditan documentos en local y tableros que convierten cifras en decisiones. Y enseño a construirlas.",
  areas: [
    { t: "Analítica y BI", d: "Modelos en estrella, DAX, Power BI y SQL para la toma de decisiones." },
    { t: "Big data y nube", d: "Hadoop, Spark, Kafka y BigQuery: procesamiento distribuido medido en tiempo y costo." },
    { t: "IA y agentes", d: "Sistemas multiagente, RAG y modelos locales que protegen la información sensible." },
    { t: "Software y automatización", d: "Aplicaciones en Python y TypeScript, integración de sistemas y despliegue." },
    { t: "Redes y ciberseguridad", d: "Infraestructura, seguridad en redes y cumplimiento ISO/IEC 27001." },
    { t: "Docencia", d: "Formación universitaria y especializada en datos, IA y tecnología." },
  ],
  sobreMi: [
    "Soy Ingeniero de Sistemas, especialista en Telecomunicaciones y en Seguridad en Redes, con formación avanzada en Big Data, Inteligencia Artificial y Análisis y Visualización de Datos Masivos.",
    "Desde 2004 trabajo entre la ingeniería de sistemas, la docencia (SENA desde 2006, Universidad de Cartagena de 2011 a 2021) y el análisis de datos. Mi trabajo une dos mundos: construyo soluciones técnicas y enseño a otros a construirlas, siempre con evidencia de que el resultado es correcto.",
  ],
  formacion: [
    { titulo: "Máster en Análisis y Visualización de Datos Masivos", lugar: "UNIR (España)", fecha: "2025 – 2026", nota: "Trabajo Fin de Máster: ClinDoc Agent" },
    { titulo: "Especialista en Big Data e Inteligencia Artificial", lugar: "UNIR (España)", fecha: "2024" },
    { titulo: "Especialización en Seguridad en Redes", lugar: "SENA", fecha: "2010" },
    { titulo: "Especialización en Telecomunicaciones", lugar: "UNAB", fecha: "2007" },
    { titulo: "Ingeniería de Sistemas", lugar: "Universidad Tecnológica de Bolívar", fecha: "2006" },
  ],
  // Experiencia: hoja de vida del SENA (APE, F:\HMO\Personal\HV_APE_SENA.pdf, nov-2026) y hoja de vida 2025.
  experiencia: [
    { rol: "Docente de posgrado y educación continua", lugar: "Especialización en Analítica de Datos (CURN) · UNICOLOMBO", fecha: "2026", puntos: ["Tecnologías de Procesamiento de Datos: Hadoop, Spark, Kafka, BigQuery y Power BI con datos reales.", "Power BI aplicado a la gestión pública; diplomado y electivas de análisis de datos."] },
    { rol: "Instructor de informática y telecomunicaciones", lugar: "SENA · centros Náutico Fluvial y Portuario, Industria Petroquímica, Industrial, Comercio y Servicios, y Agroempresarial y Minero", fecha: "2006 – actual", puntos: ["Diseño curricular, comités técnicos y material didáctico; formación presencial y virtual.", "Mentoría del concurso MinTIC Datos al Ecosistema 2026."] },
    { rol: "Docente universitario", lugar: "Universidad Sergio Arboleda (mentor) · Fundación Universitaria Tecnológico Comfenalco", fecha: "2024 – 2025", puntos: [] },
    { rol: "Ingeniero de Sistemas · Proyecto Canal del Dique", lugar: "ALDESARROLLO", fecha: "2023", puntos: ["Tableros en Power BI de indicadores socioeconómicos.", "Procesos ETL con SQL y modelos predictivos en Python (Pandas, Scikit-learn)."] },
    { rol: "Docente de educación superior", lugar: "Universidad de Cartagena", fecha: "2011 – 2021", puntos: ["Veinte semestres de docencia en ingeniería."] },
    { rol: "Ingeniero de Sistemas y tutor virtual", lugar: "Heymolqs · Indumats · SAII Consulting · Colegio San Pedro Claver", fecha: "2014 – 2018", puntos: ["Redes y comunicaciones, soporte de sistemas y tutoría en virtualización."] },
    { rol: "Ingeniero de Sistemas y docente", lugar: "UNAD · Red de Universidades Públicas del Eje Cafetero (Alma Máter)", fecha: "2005 – 2007", puntos: ["Recolección de información estadística asistida por computador."] },
  ],
  certificaciones: [
    { t: "Microsoft Technology Associate: Networking Fundamentals", f: "2019" },
    { t: "Panduit Network Infrastructure (Cisco Systems)", f: "2007" },
    { t: "Diplomado en Comunicaciones y Redes · Universidad Tecnológica de Bolívar", f: "2006" },
    { t: "Diplomado en recolección de información estadística asistida por computador · Alma Máter", f: "2005" },
    { t: "Tutor en ambientes virtuales de aprendizaje: Moodle · SENA", f: "2008" },
    { t: "Herramientas LMS Blackboard · SENA", f: "2019" },
    { t: "Competencia laboral certificada: orientar formación presencial · SENA", f: "" },
  ],
};

export type Proyecto = {
  nombre: string;
  categoria: "IA y agentes" | "Datos y big data" | "Docencia" | "Ciberseguridad";
  proposito: string;
  descripcion: string;
  tecnologias: string[];
  estado: string;
  repo: string;
  demo?: string;
  destacado?: boolean;
};

export const proyectos: Proyecto[] = [
  {
    nombre: "ClinDoc Agent",
    categoria: "IA y agentes",
    proposito: "Apoyar la auditoría documental de expedientes de incapacidad temporal sin sacar datos clínicos del equipo.",
    descripcion: "Sistema multiagente 100 % local: ingiere expedientes heterogéneos, verifica identidad y vigencia, y redacta informes trazables con RAG y ciclo de autocorrección.",
    tecnologias: ["Python", "LangGraph", "Qdrant", "Ollama", "Docling", "Pydantic", "Streamlit"],
    estado: "Trabajo Fin de Máster (UNIR), 2026",
    repo: "https://github.com/hmotecnologico-create/Clindoc_agent",
    destacado: true,
  },
  {
    nombre: "Agente de auditoría documental ISO 27001",
    categoria: "Ciberseguridad",
    proposito: "Verificar si un conjunto de documentos corporativos cumple un marco normativo.",
    descripcion: "OCR, búsqueda semántica y un LLM local generan la matriz de cumplimiento con evidencias y recomendaciones para ISO 27001, GDPR o políticas internas.",
    tecnologias: ["TypeScript", "React", "Tesseract.js", "Ollama", "Vite"],
    estado: "Prototipo funcional, 2025",
    repo: "https://github.com/hmotecnologico-create/Agente-de-auditor-a-27001",
    demo: "https://agente-de-auditor-a-27001.vercel.app",
    destacado: true,
  },
  {
    nombre: "HMO Auditor",
    categoria: "Ciberseguridad",
    proposito: "Asistir auditorías de sistemas de gestión con la metodología ISO 19011.",
    descripcion: "Consola en Streamlit con extracción OCR, validación documental, generación de listas de chequeo y análisis semántico con un modelo local.",
    tecnologias: ["Python", "Streamlit", "Ollama", "Tesseract", "pdfplumber"],
    estado: "Prototipo, 2026",
    repo: "https://github.com/hmotecnologico-create/HMO_AUDITOR",
  },
  {
    nombre: "Tecnologías de Procesamiento de Datos",
    categoria: "Docencia",
    proposito: "Enseñar procesamiento distribuido midiendo tiempo, costo y exactitud con datos reales.",
    descripcion: "Seminario con 19,9 millones de viajes de Nueva York: Hadoop, Spark y Kafka en Codespaces, BigQuery en la nube y un tablero en Power BI; las tres tecnologías dan la misma cifra al centavo.",
    tecnologias: ["Hadoop", "Spark", "Kafka", "BigQuery", "Power BI", "Codespaces"],
    estado: "En curso, 2026",
    repo: "https://github.com/hmedrano-gif/CURN",
    demo: "https://hmedrano-gif.github.io/CURN/tpd/",
    destacado: true,
  },
  {
    nombre: "Entorno big data en Codespaces",
    categoria: "Datos y big data",
    proposito: "Que cada estudiante tenga Hadoop, Spark y Kafka listos en minutos, sin instalar nada.",
    descripcion: "Contenedor de desarrollo con un script de preparación que deja el clúster local verificado para los talleres.",
    tecnologias: ["Docker", "Dev Containers", "Hadoop", "Spark", "Kafka", "Bash"],
    estado: "En uso, 2026",
    repo: "https://github.com/hmedrano-gif/tpd-codespace",
  },
  {
    nombre: "Power BI aplicado a la gestión pública",
    categoria: "Docencia",
    proposito: "Formar a servidores públicos para seguir el Plan de Desarrollo con datos abiertos.",
    descripcion: "Tutoriales, diapositivas y archivos .pbix por encuentro: Power Query, modelo de datos, medidas DAX y un tablero con semáforo.",
    tecnologias: ["Power BI", "Power Query", "DAX", "Datos abiertos"],
    estado: "En curso, 2026",
    repo: "https://github.com/hmotecnologico-create/PowerBI-Gestion-Publica-Cartagena",
  },
  {
    nombre: "Materiales de diplomado y electivas de datos",
    categoria: "Docencia",
    proposito: "Practicar calidad de datos, EDA y Power BI con casos empresariales.",
    descripcion: "Cuadernos de laboratorio, datasets limpios y en bruto y guías de Power BI para el diplomado y las electivas.",
    tecnologias: ["Python", "Jupyter", "pandas", "Power BI"],
    estado: "En uso, 2026",
    repo: "https://github.com/hmotecnologico-create/UNICOLOMBO",
  },
];

export const tecnologias = [
  { grupo: "Datos y BI", items: ["Python", "pandas", "NumPy", "scikit-learn", "SQL", "Power BI", "DAX", "Power Query", "Tableau", "Looker Studio"] },
  { grupo: "Big data y nube", items: ["Hadoop", "Spark", "Kafka", "BigQuery", "Google Cloud", "Azure", "Docker", "GitHub Codespaces"] },
  { grupo: "IA", items: ["LangGraph", "RAG", "Qdrant", "Ollama", "sentence-transformers", "Gemini", "Streamlit"] },
  { grupo: "Software", items: ["TypeScript", "React", "Astro", "Django", "Git", "GitHub Actions", "n8n"] },
  { grupo: "Bases de datos", items: ["SQL Server", "MySQL", "PostgreSQL"] },
  { grupo: "Redes y seguridad", items: ["Cisco", "Seguridad en redes", "ISO/IEC 27001", "Panduit"] },
  { grupo: "Docencia digital", items: ["Moodle", "Blackboard", "Google Classroom"] },
];

export const docencia = [
  { curso: "Tecnologías de Procesamiento de Datos", programa: "Especialización en Analítica de Datos", contexto: "Corporación Universitaria Rafael Núñez (CURN)", fecha: "2026", enlace: "https://hmedrano-gif.github.io/CURN/tpd/" },
  { curso: "Power BI aplicado a la gestión pública", programa: "Plan Institucional de Capacitación · Alcaldía de Cartagena", contexto: "UNICOLOMBO", fecha: "2026", enlace: "https://github.com/hmotecnologico-create/PowerBI-Gestion-Publica-Cartagena" },
  { curso: "Diplomado y electivas en análisis de datos", programa: "Python y Power BI", contexto: "UNICOLOMBO", fecha: "2026", enlace: "https://github.com/hmotecnologico-create/UNICOLOMBO" },
  { curso: "Mentoría Datos al Ecosistema 2026", programa: "Concurso MinTIC · proyectos con datos abiertos e IA", contexto: "SENA", fecha: "2026" },
  { curso: "Formación profesional en tecnología", programa: "Programas técnicos y tecnológicos", contexto: "SENA", fecha: "2022 – actual" },
];

export const investigacion = [
  { titulo: "ClinDoc Agent", tipo: "Trabajo Fin de Máster · UNIR", texto: "Arquitectura multiagente local con autocorrección para auditoría documental clínica; evaluada con benchmarks reproducibles de ingesta, recuperación y redacción.", enlace: "https://github.com/hmotecnologico-create/Clindoc_agent" },
  { titulo: "Auditoría normativa con LLM locales", tipo: "Prototipos", texto: "Dos enfoques para verificar cumplimiento (ISO 27001 e ISO 19011) sin enviar documentos a servicios externos.", enlace: "https://github.com/hmotecnologico-create/Agente-de-auditor-a-27001" },
  { titulo: "Comparación medida de tecnologías de procesamiento", tipo: "Innovación docente", texto: "El mismo cálculo en Hadoop, Spark y BigQuery con cifras idénticas, para decidir por tiempo y costo y no por moda.", enlace: "https://hmedrano-gif.github.io/CURN/tpd/" },
];
