// ─── Clinic Info ───────────────────────────────────────────────
export const CLINIC = {
  name: 'Al-Hamd Rheumatology & Polyclinic',
  tagline: 'Your Health, Our Priority',
  address: 'Ground Floor, Baab e Siddiq, Plot No. 38/3, Near Ali Masjid, BMCHS, Bahadurabad, Karachi',
  phone1: '+9221-34852413',
  phone2: '+92302-2425855',
  whatsapp: '923272937991',
  whatsapp_display: '+92327-2937991',
  timings: ['Mon – Sat', '11:00 AM – 8:00 PM'],
  facebook_url: 'https://www.facebook.com/AlHamdClinicKarachi/',
  instagram_url: 'https://www.instagram.com/alhamdclinic/',
  google_maps_url: 'https://maps.app.goo.gl/L2xQmUZDynb29LP97',
  about:
    'Al-Hamd Rheumatology & Polyclinic is a leading multi-specialty healthcare facility located in Bahadurabad, Karachi. We are dedicated to providing compassionate, high-quality healthcare to our community with a team of experienced specialists across multiple disciplines including Rheumatology, Neurology, Endocrinology, Dermatology, Pediatrics, Physiotherapy, and more.',
  mission:
    'To deliver expert medical care with compassion, integrity, and excellence — making quality healthcare accessible to all.',
}

// ─── Doctors ───────────────────────────────────────────────────
export interface Doctor {
  id: string
  name: string
  photo: string
  specialization: string
  qualification: string
  experience: string
  clinic_days: string
  timing: string
  bio: string
  appointment: string
  phone: string
  whatsapp: string
}

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Tahira Perveen',
    photo: '/uploads/doctors/dr-tahira-perveen.jpg',
    specialization: 'Adult & Paeds Rheumatologist',
    qualification: 'MBBS, FCPS (MED), FACR',
    experience: '15+ years',
    clinic_days: 'Tuesday, Thursday & Saturday',
    timing: '4:30 PM – 6:30 PM',
    appointment: 'Walk-ins & Appointments',
    bio:
      'Dr. Tahira Perveen is an Assistant Professor and Head of the Department of Rheumatology at Liaquat National Hospital & Medical College. She is a highly qualified Adult & Paediatric Rheumatologist with extensive experience in managing complex rheumatic diseases in both adults and children.',
    phone: '+92 302 242 585 5',
    whatsapp: '923022425855',
  },
  {
    id: '2',
    name: 'Dr. Farah Deeba',
    photo: '/uploads/doctors/dr-farah-deeba.jpg',
    specialization: 'Consultant Physiotherapist',
    qualification: 'DPT, MSPT',
    experience: '10+ years',
    clinic_days: 'Daily (Monday – Saturday)',
    timing: '4:00 PM – 7:00 PM',
    appointment: 'Walk-ins & Appointments',
    bio:
      'Dr. Farah Deeba is a dedicated Consultant Physiotherapist with extensive expertise in rehabilitation, musculoskeletal conditions, and post-surgical recovery. She provides comprehensive physiotherapy services including manual therapy, exercise programs, and pain management.',
    phone: '+92 213 485 241 3',
    whatsapp: '923272937991',
  },
  {
    id: '3',
    name: 'Dr. Aqiba Sarfaraz',
    photo: '/uploads/doctors/dr-aqiba-sarfaraz.jpg',
    specialization: 'Consultant Endocrinologist',
    qualification: 'MBBS, FCPS (Medicine), Fellowship Endocrinology',
    experience: '10+ years',
    clinic_days: 'Wednesday',
    timing: '2:00 PM – 3:00 PM',
    appointment: 'Appointment Only',
    bio:
      'Dr. Aqiba Sarfaraz is a Consultant Endocrinologist specializing in diabetes, thyroid disorders, hormonal imbalances, and other endocrine conditions. She provides evidence-based care for patients with complex hormonal and metabolic disorders.',
    phone: '+92 213 485 241 3',
    whatsapp: '923272937991',
  },
  {
    id: '4',
    name: 'Dr. Shahnaz Shah',
    photo: '/uploads/doctors/dr-shahnaz-shah.jpg',
    specialization: 'Consultant Neurologist',
    qualification: 'MBBS, FCPS (MED), FCPS (NEURO)',
    experience: '15+ years',
    clinic_days: 'Saturday',
    timing: '1:30 PM – 2:30 PM',
    appointment: 'Appointment Only',
    bio:
      'Dr. Shahnaz Shah is an Assistant Professor in the Department of Neurology at Jinnah Postgraduate Medical Center. She is a highly qualified Consultant Neurologist with expertise in epilepsy, stroke, headache disorders, movement disorders, and other neurological conditions.',
    phone: '+92 213 485 241 3',
    whatsapp: '923272937991',
  },
  {
    id: '5',
    name: 'Dr. M. Rizwan Rafiq',
    photo: '/uploads/doctors/dr-rizwan-rafiq.jpg',
    specialization: 'Consultant Dermatologist & Aesthetic Physician',
    qualification: 'MBBS, DDVL, Aesthetic Medicine',
    experience: '12+ years',
    clinic_days: 'Friday',
    timing: '2:00 PM – 4:00 PM',
    appointment: 'Appointment Only',
    bio:
      'Dr. M. Rizwan Rafiq is a Consultant Dermatologist and Aesthetic Physician with expertise in skin diseases, cosmetic dermatology, hair loss, acne, eczema, psoriasis, and advanced aesthetic procedures including laser treatments and skin rejuvenation.',
    phone: '+92 213 485 241 3',
    whatsapp: '923272937991',
  },
  {
    id: '6',
    name: 'Dr. Maira Riaz',
    photo: '/uploads/doctors/dr-maira-riaz.jpg',
    specialization: 'Consultant Pediatrician',
    qualification: 'MBBS, FCPS (Paediatrics)',
    experience: '8+ years',
    clinic_days: 'Wednesday & Saturday',
    timing: '4:30 PM – 6:30 PM',
    appointment: 'Walk-ins & Appointments',
    bio:
      'Dr. Maira Riaz is a Consultant Pediatrician providing comprehensive healthcare for infants, children, and adolescents. She specializes in child growth & development, vaccinations, common childhood illnesses, and preventive healthcare for children of all ages.',
    phone: '+92 213 485 241 3',
    whatsapp: '923272937991',
  },
  {
    id: '7',
    name: 'Dr. Beenish Syed',
    photo: '/uploads/doctors/dr-beenish-syed.jpg',
    specialization: 'Consultant Physician & Infectious Diseases Specialist',
    qualification: 'MBBS, FCPS (Medicine), Infectious Diseases',
    experience: '10+ years',
    clinic_days: 'Daily (Monday – Saturday)',
    timing: '4:00 PM – 5:00 PM',
    appointment: 'Appointment Only',
    bio:
      'Dr. Beenish Syed is a Consultant Physician and Infectious Diseases Specialist with expertise in diagnosing and treating a wide range of infectious diseases, fever management, hepatitis, tuberculosis, and general internal medicine.',
    phone: '+92 213 485 241 3',
    whatsapp: '923272937991',
  },
  {
    id: '8',
    name: 'Mrs. Shaheen Sheikh',
    photo: '/uploads/doctors/mrs-shaheen-sheikh.jpg',
    specialization: 'Speech Therapist & Audiologist',
    qualification: 'M.Sc. (Speech & Language Therapy), Audiology',
    experience: '12+ years',
    clinic_days: 'Monday, Wednesday, Thursday',
    timing: '3:00 PM – 5:00 PM',
    appointment: 'Appointment Only',
    bio:
      'Mrs. Shaheen Sheikh is a qualified Speech Therapist and Audiologist specializing in assessment and treatment of speech, language, voice, and swallowing disorders in children and adults. She also provides hearing assessment and rehabilitation services.',
    phone: '+92 213 485 241 3',
    whatsapp: '923272937991',
  },
  {
    id: '9',
    name: 'Prof. Faisal Ziauddin',
    photo: '/uploads/doctors/prof-faisal-ziauddin.jpg',
    specialization: 'Gastroenterologist, General Physician & Internal Medicine',
    qualification: 'MBBS, FCPS, MCPS',
    experience: '20+ years',
    clinic_days: 'Monday, Thursday & Saturday',
    timing: '6:30 PM – 7:30 PM',
    appointment: 'Appointment Only',
    bio:
      'Prof. Faisal Ziauddin is a highly experienced Professor and Consultant with expertise in Gastroenterology, General Medicine, and Internal Medicine. With over 20 years of clinical experience, he specializes in digestive disorders, liver diseases, and complex internal medicine cases.',
    phone: '+92 213 485 241 3',
    whatsapp: '923272937991',
  },
]

// ─── Services ──────────────────────────────────────────────────
export interface Service {
  id: string
  category: string
  name: string
  description: string
  icon: string
}

export interface ServiceCategory {
  id: string
  name: string
  services: Service[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'rheumatology',
    name: 'Rheumatology',
    services: [
      {
        id: 's1',
        category: 'rheumatology',
        name: 'Rheumatoid Arthritis',
        description: 'Diagnosis and management of rheumatoid arthritis with the latest disease-modifying therapies.',
        icon: 'fa-hand-dots',
      },
      {
        id: 's2',
        category: 'rheumatology',
        name: 'Lupus (SLE)',
        description: 'Comprehensive care for Systemic Lupus Erythematosus and autoimmune diseases.',
        icon: 'fa-shield-halved',
      },
      {
        id: 's3',
        category: 'rheumatology',
        name: 'Gout Treatment',
        description: 'Expert management of gout and crystal arthropathy for pain relief and prevention.',
        icon: 'fa-droplet',
      },
      {
        id: 's4',
        category: 'rheumatology',
        name: 'Osteoporosis',
        description: 'Bone density assessment and treatment to prevent fractures and strengthen bones.',
        icon: 'fa-bone',
      },
      {
        id: 's5',
        category: 'rheumatology',
        name: 'Juvenile Arthritis',
        description: 'Specialized rheumatology care for children with juvenile idiopathic arthritis.',
        icon: 'fa-child',
      },
      {
        id: 's6',
        category: 'rheumatology',
        name: 'Psoriatic Arthritis',
        description: 'Combined dermatology and rheumatology care for psoriatic arthritis patients.',
        icon: 'fa-microscope',
      },
    ],
  },
  {
    id: 'specialist',
    name: 'General Medicine & Specialist',
    services: [
      {
        id: 's7',
        category: 'specialist',
        name: 'Neurology',
        description: 'Expert care for epilepsy, stroke, migraines, movement disorders and other neurological conditions.',
        icon: 'fa-brain',
      },
      {
        id: 's8',
        category: 'specialist',
        name: 'Endocrinology & Diabetes',
        description: 'Management of diabetes, thyroid disorders, hormonal imbalances and metabolic diseases.',
        icon: 'fa-syringe',
      },
      {
        id: 's9',
        category: 'specialist',
        name: 'Dermatology & Aesthetics',
        description: 'Skin disease treatment, acne, eczema, psoriasis, hair loss and aesthetic procedures.',
        icon: 'fa-soap',
      },
      {
        id: 's10',
        category: 'specialist',
        name: 'Pediatrics',
        description: 'Comprehensive child healthcare, growth monitoring, vaccinations and illness management.',
        icon: 'fa-baby',
      },
      {
        id: 's11',
        category: 'specialist',
        name: 'Gastroenterology',
        description: 'Digestive disorders, liver diseases, gastritis, and internal medicine by a senior professor.',
        icon: 'fa-stethoscope',
      },
      {
        id: 's12',
        category: 'specialist',
        name: 'Infectious Diseases',
        description: 'Fever, hepatitis, tuberculosis, and general infectious disease management.',
        icon: 'fa-virus',
      },
    ],
  },
  {
    id: 'therapy',
    name: 'Diagnostics & Therapy',
    services: [
      {
        id: 's13',
        category: 'therapy',
        name: 'Physiotherapy',
        description: 'Manual therapy, exercise rehabilitation, post-surgical recovery and pain management.',
        icon: 'fa-person-walking',
      },
      {
        id: 's14',
        category: 'therapy',
        name: 'Speech Therapy',
        description: 'Assessment and treatment of speech, language, voice and swallowing disorders.',
        icon: 'fa-comment-medical',
      },
      {
        id: 's15',
        category: 'therapy',
        name: 'Hearing Assessment',
        description: 'Audiological evaluation and hearing rehabilitation for children and adults.',
        icon: 'fa-ear-listen',
      },
    ],
  },
]

// ─── Testimonials ──────────────────────────────────────────────
export interface Testimonial {
  id: string
  patient_name: string
  role: string
  rating: number
  review: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    patient_name: 'Ahmed Khan',
    role: 'Patient',
    rating: 5,
    review:
      'Excellent experience at Al-Hamd! Dr. Tahira Perveen diagnosed my rheumatoid arthritis accurately after years of misdiagnosis. The staff is warm and professional. Highly recommend.',
  },
  {
    id: 't2',
    patient_name: 'Fatima Siddiqui',
    role: 'Patient',
    rating: 5,
    review:
      'Dr. Maira Riaz is wonderful with children. My son was very nervous but she made him feel completely at ease. The clinic is clean, modern, and very well-organized.',
  },
  {
    id: 't3',
    patient_name: 'Usman Malik',
    role: 'Patient',
    rating: 5,
    review:
      'Prof. Faisal Ziauddin is extremely knowledgeable and thorough. He took time to explain my condition in detail and the treatment has been very effective. Best clinic in Bahadurabad.',
  },
  {
    id: 't4',
    patient_name: 'Sara Baig',
    role: 'Patient',
    rating: 5,
    review:
      'The physiotherapy sessions with Dr. Farah Deeba have transformed my recovery. After my knee surgery I thought I would never walk properly — now I am better than ever. Thank you!',
  },
  {
    id: 't5',
    patient_name: 'Tariq Mehmood',
    role: 'Patient',
    rating: 5,
    review:
      'I visited Dr. Shahnaz Shah for severe migraines. Her diagnosis was spot on and the medication she prescribed has significantly reduced my episodes. Very caring and attentive doctor.',
  },
  {
    id: 't6',
    patient_name: 'Aisha Noor',
    role: 'Patient',
    rating: 4,
    review:
      'Dr. Beenish Syed is very professional and attentive. She treated my fever and infection promptly. The clinic appointment system is smooth and waiting time is minimal.',
  },
]

// ─── Health Posts ──────────────────────────────────────────────
export interface HealthPost {
  id: string
  title: string
  excerpt: string
  content: string
  tags: string[]
  date: string
  post_type: 'article' | 'video'
}

export const HEALTH_POSTS: HealthPost[] = [
  {
    id: 'h1',
    title: 'Understanding Rheumatoid Arthritis: Symptoms, Causes & Treatment',
    excerpt:
      'Rheumatoid arthritis (RA) is a chronic autoimmune disease that primarily affects joints, causing inflammation, pain, and stiffness. Early diagnosis is key to effective management.',
    content: `<p>Rheumatoid arthritis (RA) is one of the most common autoimmune diseases, affecting millions worldwide. Unlike osteoarthritis, which is caused by wear and tear, RA occurs when the immune system mistakenly attacks the body's own tissues, particularly the synovium — the lining of the joints.</p>
<h3>Common Symptoms</h3>
<ul>
<li>Tender, warm, and swollen joints</li>
<li>Morning stiffness lasting more than 30 minutes</li>
<li>Fatigue and fever</li>
<li>Symmetrical joint involvement (both hands, both knees)</li>
<li>Rheumatoid nodules under the skin</li>
</ul>
<h3>Diagnosis</h3>
<p>Diagnosis involves physical examination, blood tests (RF factor, Anti-CCP antibodies, ESR, CRP), and imaging (X-rays, ultrasound, or MRI). Early diagnosis within the first few months of symptoms is crucial to prevent joint damage.</p>
<h3>Treatment Options</h3>
<p>Modern rheumatology offers excellent treatment options including DMARDs (disease-modifying antirheumatic drugs), biologics, and JAK inhibitors that can significantly slow disease progression and improve quality of life. At Al-Hamd, Dr. Tahira Perveen specializes in the latest RA treatments for both adults and children.</p>`,
    tags: ['Rheumatology', 'Arthritis', 'Joint Pain'],
    date: '2025-01-15',
    post_type: 'article',
  },
  {
    id: 'h2',
    title: 'Managing Diabetes: A Complete Guide to Blood Sugar Control',
    excerpt:
      'Diabetes affects millions in Pakistan. With the right approach — diet, exercise, medication and regular monitoring — it can be effectively managed to prevent complications.',
    content: `<p>Diabetes mellitus is a chronic metabolic condition characterized by elevated blood glucose levels. In Pakistan, the prevalence of diabetes is among the highest in the world, making proper management critically important.</p>
<h3>Types of Diabetes</h3>
<ul>
<li><strong>Type 1:</strong> Autoimmune destruction of insulin-producing cells, requires insulin therapy</li>
<li><strong>Type 2:</strong> Most common form, related to insulin resistance and lifestyle factors</li>
<li><strong>Gestational:</strong> Occurs during pregnancy</li>
</ul>
<h3>Key Management Strategies</h3>
<ul>
<li>Regular blood glucose monitoring (fasting and post-meal)</li>
<li>HbA1c testing every 3 months</li>
<li>Dietary modifications — reducing refined carbohydrates and sugars</li>
<li>Regular physical activity (30 minutes daily)</li>
<li>Medications as prescribed (oral hypoglycaemics or insulin)</li>
<li>Annual eye, kidney and foot examinations</li>
</ul>
<p>Dr. Aqiba Sarfaraz at Al-Hamd provides comprehensive diabetes and endocrinology care with the latest management protocols.</p>`,
    tags: ['Diabetes', 'Endocrinology', 'Blood Sugar'],
    date: '2025-02-20',
    post_type: 'article',
  },
  {
    id: 'h3',
    title: 'Physiotherapy for Joint Recovery: What to Expect',
    excerpt:
      'Physiotherapy is a cornerstone of recovery after joint surgery or injury. Learn how a structured program can restore movement, reduce pain, and help you return to normal life.',
    content: `<p>Physiotherapy plays a vital role in recovery from musculoskeletal injuries, joint surgeries, and chronic pain conditions. A skilled physiotherapist creates a personalised treatment plan to restore function and improve quality of life.</p>
<h3>Conditions Treated</h3>
<ul>
<li>Post-operative knee, hip, and shoulder rehabilitation</li>
<li>Lower back pain and sciatica</li>
<li>Sports injuries and muscle strains</li>
<li>Arthritis-related joint stiffness</li>
<li>Stroke rehabilitation and neurological conditions</li>
</ul>
<h3>Treatment Techniques</h3>
<ul>
<li>Manual therapy and joint mobilization</li>
<li>Therapeutic exercises and stretching programs</li>
<li>Electrotherapy (TENS, ultrasound therapy)</li>
<li>Hot and cold therapy</li>
<li>Postural correction and ergonomic advice</li>
</ul>
<p>Dr. Farah Deeba at Al-Hamd offers daily physiotherapy sessions with a compassionate approach to help patients regain their independence.</p>`,
    tags: ['Physiotherapy', 'Rehabilitation', 'Joint Recovery'],
    date: '2025-03-10',
    post_type: 'article',
  },
  {
    id: 'h4',
    title: 'Neurological Warning Signs You Should Never Ignore',
    excerpt:
      'Sudden headache, weakness on one side, vision changes — these could signal a stroke or other serious neurological emergency. Know when to seek immediate help.',
    content: `<p>The brain and nervous system control everything in your body. When something goes wrong, the signs can appear suddenly and require immediate attention. Recognizing warning signs early can be the difference between full recovery and permanent disability.</p>
<h3>Warning Signs of Stroke (Act FAST)</h3>
<ul>
<li><strong>F</strong>ace: Sudden facial drooping on one side</li>
<li><strong>A</strong>rms: Weakness or numbness in one arm</li>
<li><strong>S</strong>peech: Sudden slurred or confused speech</li>
<li><strong>T</strong>ime: Call emergency services immediately</li>
</ul>
<h3>Other Neurological Red Flags</h3>
<ul>
<li>Severe "thunderclap" headache (worst headache of your life)</li>
<li>Sudden loss of balance or coordination</li>
<li>New onset seizures or convulsions</li>
<li>Sudden vision loss in one or both eyes</li>
<li>Confusion or altered consciousness</li>
</ul>
<p>Dr. Shahnaz Shah at Al-Hamd is a Consultant Neurologist with expertise in stroke, epilepsy, and headache disorders. Early consultation is always recommended.</p>`,
    tags: ['Neurology', 'Stroke', 'Brain Health'],
    date: '2025-04-05',
    post_type: 'article',
  },
]
