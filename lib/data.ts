// ─── Clinic Info ───────────────────────────────────────────────
export const CLINIC = {
  name: 'Al-Hamd Rheumatology & Polyclinic',
  tagline: 'Your Health, Our Priority',
  address: 'Ground Floor, Baab e Siddiq, Plot No. 38/3, Near Ali Masjid, BMCHS, Bahadurabad, Karachi',
  phone1: '+9221-34852413',
  phone1_display: '(021) 34852413',
  phone2: '+92302-2425855',
  phone2_display: '0302-2425855',
  whatsapp: '923272937991',
  whatsapp_display: '+92 327 293 7991',
  timings: ['Mon – Sat', '11:00 AM – 8:00 PM'],
  facebook_url: 'https://www.facebook.com/AlHamdClinicKarachi/',
  instagram_url: 'https://www.instagram.com/alhamdclinic/',
  google_maps_url: 'https://maps.app.goo.gl/qhjEB3ETW4upJU8H6',
  map_cid: '6532284906225352571',
  about:
    'Al-Hamd Rheumatology & Polyclinic is a leading multi-specialty healthcare facility located in Bahadurabad, Karachi. We are dedicated to providing compassionate, high-quality healthcare to our community with a team of experienced specialists across multiple disciplines including Rheumatology, Neurology, Endocrinology, Dermatology, Pediatrics, Physiotherapy, and more.',
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
  image: string
  gallery: string[]
}

export const HEALTH_POSTS: HealthPost[] = [
  {
    id: 'ankylosing-spondylitis',
    title: 'Ankylosing Spondylitis: Causes, Symptoms & Long-Term Management',
    excerpt:
      'Ankylosing spondylitis is a chronic inflammatory condition that mainly affects the spine, causing pain, stiffness, and progressive loss of flexibility. Early evaluation is key to preserving mobility.',
    content: `<p>Ankylosing spondylitis (AS) is a chronic form of inflammatory arthritis that primarily targets the spine and the sacroiliac joints connecting the lower spine to the pelvis. Over time, ongoing inflammation can cause new bone to form along the spine, leading to reduced flexibility and, in advanced cases, a stooped posture. AS belongs to a group of conditions known as spondyloarthropathies and tends to develop gradually — which is why persistent back stiffness, especially first thing in the morning or after long periods of rest, should never be dismissed as routine back pain.</p>
<h3>Common Symptoms</h3>
<ul>
<li>Persistent lower back pain that improves with movement but worsens with rest</li>
<li>Morning stiffness that can last well over 30 minutes</li>
<li>Reduced flexibility and difficulty bending or standing fully upright</li>
<li>Neck pain and stiffness as the disease progresses further up the spine</li>
<li>Fatigue linked to ongoing systemic inflammation</li>
</ul>
<h3>Who Is at Risk</h3>
<ul>
<li><strong>Family history:</strong> A genetic predisposition, particularly linked to the HLA-B27 gene, increases risk</li>
<li><strong>Age:</strong> Symptoms most often begin between ages 20 and 40</li>
<li><strong>Sex:</strong> AS is diagnosed more frequently in men, though it also affects women</li>
<li><strong>Smoking:</strong> Can increase both the risk of developing AS and the severity of symptoms</li>
<li><strong>Other autoimmune conditions:</strong> Related immune disorders may raise susceptibility</li>
</ul>
<p>Because early symptoms overlap with common mechanical back pain, AS is frequently misdiagnosed or diagnosed late, delaying treatment that could otherwise protect the spine from long-term damage.</p>
<h3>Managing Ankylosing Spondylitis</h3>
<ul>
<li>Regular, guided exercise to maintain flexibility and posture</li>
<li>Physical therapy to improve movement and mobility</li>
<li>Anti-inflammatory treatment to help control pain and swelling</li>
<li>Maintaining good posture to reduce stiffness and spinal damage</li>
<li>Regular follow-up with a rheumatologist to monitor disease activity and adjust treatment</li>
</ul>
<p>With consistent care, most patients with ankylosing spondylitis continue to lead active, functional lives. At Al-Hamd, Dr. Tahira Perveen — Assistant Professor and Head of the Department of Rheumatology at Liaquat National Hospital & Medical College — specializes in the early diagnosis and long-term management of AS and other inflammatory spinal conditions.</p>`,
    tags: ['Rheumatology', 'Ankylosing Spondylitis', 'Back Pain'],
    date: '2026-06-10',
    post_type: 'article',
    image: '/posts/AnkylosingSpondylitis_post/1.jpg',
    gallery: [
      '/posts/AnkylosingSpondylitis_post/2.jpg',
      '/posts/AnkylosingSpondylitis_post/3.jpg',
      '/posts/AnkylosingSpondylitis_post/4.jpg',
    ],
  },
  {
    id: 'diabetes',
    title: 'Understanding Diabetes: Symptoms, Risk Factors & Everyday Management',
    excerpt:
      'Diabetes is a long-term condition that affects how the body regulates blood sugar. Recognising the warning signs early and following a consistent care plan can prevent serious complications.',
    content: `<p>Diabetes is a long-term condition that affects how the body controls blood sugar (glucose) levels. When glucose builds up in the blood instead of being used for energy, it can gradually damage blood vessels, nerves, and organs — which is why consistent monitoring and timely medical guidance are essential to long-term health.</p>
<h3>Common Symptoms</h3>
<p>Diabetes often develops silently, with few or no symptoms in its early stages. This is why routine screening — at least once a year — is recommended even for people who feel well. Warning signs to watch for include:</p>
<ul>
<li><strong>Excessive thirst:</strong> Feeling thirsty more often than usual</li>
<li><strong>Frequent urination:</strong> Especially noticeable at night</li>
<li><strong>Unexplained weight loss:</strong> Sudden weight loss without changes in diet</li>
<li><strong>Blurred vision:</strong> High blood sugar levels can affect eyesight</li>
<li><strong>Fatigue:</strong> Persistent low energy throughout the day</li>
</ul>
<h3>Risk Factors</h3>
<ul>
<li><strong>Family history:</strong> Genetics play an important role in diabetes risk</li>
<li><strong>Obesity:</strong> Excess body weight increases insulin resistance</li>
<li><strong>Physical inactivity:</strong> A sedentary lifestyle affects blood sugar control</li>
<li><strong>Unhealthy diet:</strong> High intake of refined sugar and carbohydrates can contribute</li>
<li><strong>High blood pressure:</strong> Often linked with diabetes and shares similar risk factors</li>
<li><strong>Increasing age:</strong> Risk rises naturally as people get older</li>
</ul>
<h3>Everyday Management</h3>
<ul>
<li>Follow a balanced diet to help maintain healthy blood sugar levels</li>
<li>Stay physically active — regular exercise improves insulin sensitivity</li>
<li>Monitor blood sugar regularly, including periodic HbA1c testing</li>
<li>Take prescribed medications consistently and as directed</li>
<li>Attend routine checkups, including annual eye, kidney, and foot examinations, to catch complications early</li>
</ul>
<p>Small, consistent lifestyle changes make a significant difference in long-term diabetes control. Dr. Aqiba Sarfaraz at Al-Hamd, a Consultant Endocrinologist, provides comprehensive diabetes and hormonal health care built around each patient's individual needs.</p>`,
    tags: ['Diabetes', 'Endocrinology', 'Blood Sugar'],
    date: '2026-06-25',
    post_type: 'article',
    image: '/posts/Diabetes_Post/1.jpg',
    gallery: [
      '/posts/Diabetes_Post/2.jpg',
      '/posts/Diabetes_Post/3.jpg',
      '/posts/Diabetes_Post/4.jpg',
    ],
  },
  {
    id: 'bells-palsy',
    title: "Bell's Palsy: Recognising Sudden Facial Weakness and How to Recover",
    excerpt:
      "Bell's palsy can cause sudden weakness or paralysis on one side of the face. Recognising the early signs and seeking prompt care greatly improves the chances of full recovery.",
    content: `<p>Bell's palsy is a condition that causes sudden weakness or temporary paralysis on one side of the face, caused by inflammation or compression of the facial nerve. It can affect facial expressions, the ability to close one eye, and muscle control on the affected side. While the exact cause isn't always clear, the sudden onset can understandably be alarming — which is why prompt evaluation is important to rule out more serious conditions such as stroke and to begin treatment as early as possible.</p>
<h3>Common Symptoms</h3>
<ul>
<li><strong>Facial drooping:</strong> One side of the face may appear uneven or sag</li>
<li><strong>Weak eye closure:</strong> Difficulty closing one eye tightly</li>
<li><strong>Difficulty smiling:</strong> Facial muscles on the affected side become weak</li>
<li><strong>Speech difficulty:</strong> Words may sound unclear or slurred</li>
</ul>
<h3>What Can Cause It</h3>
<p>Bell's palsy is often linked to inflammation of the facial nerve, and several factors may increase vulnerability:</p>
<ul>
<li><strong>Viral infections:</strong> Certain viruses can trigger nerve swelling</li>
<li><strong>Weak immunity:</strong> Lower immunity can increase vulnerability</li>
<li><strong>Diabetes:</strong> People with diabetes are at higher risk</li>
<li><strong>Stress and fatigue:</strong> Physical stress may worsen the condition</li>
</ul>
<h3>Recovery and Treatment</h3>
<p>The encouraging news is that most people recover well with timely treatment and care. Recovery is supported by:</p>
<ul>
<li>Facial exercises to improve muscle strength and movement</li>
<li>Eye protection to prevent dryness and irritation while eye closure is weak</li>
<li>Medications to help reduce inflammation and speed recovery</li>
<li>Healthy nutrition to support nerve healing</li>
<li>Timely consultation — the earlier treatment begins, the better the outcome</li>
</ul>
<p>If you notice sudden facial drooping, difficulty closing one eye, or any sudden change in facial movement, seek medical advice promptly. Dr. Shahnaz Shah, Consultant Neurologist at Al-Hamd, has extensive experience diagnosing and treating Bell's palsy and other neurological conditions.</p>`,
    tags: ['Neurology', "Bell's Palsy", 'Facial Nerve'],
    date: '2026-07-10',
    post_type: 'article',
    image: '/posts/bellspalsy_post/1.jpg',
    gallery: [
      '/posts/bellspalsy_post/2.jpg',
      '/posts/bellspalsy_post/3.jpg',
      '/posts/bellspalsy_post/4.jpg',
    ],
  },
]
