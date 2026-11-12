import { siteConfig } from './siteConfig';

type NavigationItem = { label: string; href: string };

const navigation: NavigationItem[] = [
  { label: 'Welcome', href: '#welcome' },
  { label: 'About Nexus', href: '#about' },
  { label: 'Course Planner', href: '#planner' },
  { label: 'Development', href: '#development' },
  { label: 'Releases', href: '#releases' },
  { label: 'Questions', href: '#questions' },
  { label: 'Contact', href: '#contact' },
];

const features = [
  {
    title: 'Explore courses',
    description: 'Find course and program information, requirements, and electives in one place.',
  },
  {
    title: 'Understand the rules',
    description: 'See prerequisites, antirequisites, corequisites, and alternative course paths.',
  },
  {
    title: 'Plan what comes next',
    description: 'Investigate what may still be possible after dropping, failing, or postponing a course.',
  },
];


const roadmap = [
  {
    title: 'Course Planner',
    description:
      'Academic data, prerequisite rules, degree progress, term planning, and what-if scenarios.',
    status: 'active',
  },
  {
    title: 'Desktop Application',
    description:
      'Electron and React for Windows and macOS, with a unified dashboard and university resources.',
    status: 'planned',
  },
  {
    title: 'Local Academic File System',
    description:
      'Course-based file organization, local storage, document previews, search, and note-taking.',
    status: 'planned',
  },
  {
    title: 'Embedded Browser & Integrations',
    description:
      'Chromium-based browsing, persistent sessions where supported, and authorized A2L and third-party integrations.',
    status: 'planned',
  },
  {
    title: 'Academic Automation',
    description:
      'Course material synchronization, document parsing, deadline extraction, and calendar exports.',
    status: 'planned',
  },
  {
    title: 'Iris — Academic Intelligence',
    description:
      'Context-aware academic assistance, local and cloud language models, and optional proactive workflows.',
    status: 'planned',
  },
  {
    title: 'Campus Ecosystem',
    description:
      'Messaging, moderated forums, student communities, club management, and multi-university expansion.',
    status: 'planned',
  },
] as const;


const questions = [
  {
    question: 'What is Nexus?',
    answer: 'An independent, student-built project exploring a connected academic and campus platform for students, instructors, organizations, and university staff.',
  },
  {
    question: 'Can it tell me which courses I can take if I fail one?',
    answer: 'That is a central goal of the Course Planner. The feature is still in development and results will need to be checked against official academic rules.',
  },
  {
    question: 'Why start with McMaster?',
    answer: 'The project starts with McMaster University because it is the institution the developer knows best. Multi-institution support is a long-term goal.',
  },
  {
    question: 'Is this an official university website?',
    answer: 'No. Nexus is not affiliated with or endorsed by McMaster University or any other institution.',
  },
];



function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="site-navigation" aria-label="Main navigation">
      <div className="nav-heading">INFORMATION</div>
      {navigation.map((item) => (
        <a key={item.href} href={item.href} className="nav-item">
          <span aria-hidden="true" className="nav-marker">›</span>{item.label}
        </a>
      ))}
      <div className="nav-divider" />
      <div className="nav-heading nav-heading-secondary">EXTERNAL LINKS</div>
      <a className="nav-item" href={siteConfig.githubProfileUrl} target="_blank" rel="noopener noreferrer">
        <span aria-hidden="true" className="nav-marker">›</span>GitHub profile <span className="sr-only">(opens in new tab)</span>
      </a>
      <a className="nav-item" href={siteConfig.mcmasterUniversityUrl} target="_blank" rel="noopener noreferrer">
        <span aria-hidden="true" className="nav-marker">›</span>McMaster University <span className="sr-only">(opens in new tab)</span>
      </a>
      <a className="nav-item" href={siteConfig.academicCalendarUrl} target="_blank" rel="noopener noreferrer">
        <span aria-hidden="true" className="nav-marker">›</span>Academic Calendar <span className="sr-only">(opens in new tab)</span>
      </a>
      <a className="nav-item" href={siteConfig.a2LUrl} target="_blank" rel="noopener noreferrer">
        <span aria-hidden="true" className="nav-marker">›</span>A2L <span className="sr-only">(opens in new tab)</span>
      </a>
      <a className="nav-item" href={siteConfig.mosaicUrl} target="_blank" rel="noopener noreferrer">
        <span aria-hidden="true" className="nav-marker">›</span>Mosaic <span className="sr-only">(opens in new tab)</span>
      </a>
      <div className="nav-note">.<br />.</div>

    </nav>
  );
}

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="site-shell" id="welcome">
        <header className="masthead">
          <div className="masthead-inner">
            <div className="masthead-brand">

              <div className="masthead-wordmark">
                <span className="wordmark">Nexus</span>
                <span className="wordmark-caption">AN ACADEMIC PLATFORM PROJECT</span>
              </div>
            </div>
            <div className="masthead-side">
              <span>Hi:)</span>
              <span className="masthead-edition">     </span>
            </div>
          </div>
        </header>

        <div className="site-body">
          <Navigation />
          <main id="main-content">
            <div className="utility-line">
              <span>NEXUS INFORMATION CENTER</span>
              <span>EST. 2026</span>
            </div>

            <section className="hero" aria-labelledby="hero-heading">
              <div className="hero-content">
                <p className="hero-kicker">WELCOME TO NEXUS</p>
                <h1 id="hero-heading">Your academic life,<br /><em>upgraded.</em></h1>
                <p className="hero-lead">University life shouldn't require a dozen disconnected systems.</p>
                <p className="hero-copy">Nexus is a student-built project working toward one connected home for academic planning, teaching, campus communities, and administration.</p>
                <div className="hero-actions">
                  <a className="classic-button primary-button" href="#planner">Explore Course Planner <span aria-hidden="true">»</span></a>
                  <a className="classic-button" href="#development">Development status</a>
                </div>
              </div>
              <aside className="hero-bulletin" aria-label="Project bulletin">
                <div className="bulletin-top">PROJECT BULLETIN</div>
                <div className="bulletin-content">
                  <div className="bulletin-number">01</div>
                  <h3>Course Planner</h3>
                  <p>The first independent Nexus module is under development.</p>
                  <div className="bulletin-rule" />
                  <p className="bulletin-field">CURRENT SUB-MODULE STATUS</p>
                  <p className="bulletin-value">Academic Data & Planning Logic</p>
                  <p className="bulletin-field">TARGET WINDOW</p>
                  <p className="bulletin-value">{siteConfig.targetRelease}*</p>
                  <p className="bulletin-footnote">*Tentative. Release timing may change.</p>
                </div>
              </aside>
            </section>

            <div className="content-wrap">
              <div className="intro-note"><strong>Note:</strong> Nexus is a large-scale project, but expect independent sub-modules to be released overtime.</div>

              <section id="about" className="content-section" aria-labelledby="about-heading">
                <SectionHeading eyebrow="01 / OVERVIEW" title="A more connected campus." id="about-heading" />
                <div className="two-col-text">
                  <p>Today's university experience is spread across course calendars, learning systems, emails, spreadsheets, and club portals. Useful information can be difficult to find—and harder to connect.</p>
                  <p>Nexus aims to bring those workflows together for <strong>students, instructors, clubs, and university staff</strong>. The long-term vision includes degree planning, communication, campus resources, and support for multiple institutions.</p>
                </div>
              </section>

              <section id="planner" className="content-section" aria-labelledby="planner-heading">
                <SectionHeading eyebrow="02 / MODULES" title="Introducing Course Planner." id="planner-heading" />
                <p className="section-intro">More than a course catalog: a tool designed to help you understand how degree requirements and academic decisions affect what you can do next.</p>
                <div className="feature-grid">
                  {features.map((feature, index) => (
                    <div className="feature-item" key={feature.title}>
                      <div className="feature-index">0{index + 1}</div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
                <p className="fineprint">Planned capabilities, not features available today. Scope may change during development.</p>
              </section>


<section
  id="development"
  className="content-section"
  aria-labelledby="development-heading"
>
  <SectionHeading
    eyebrow="03 / DEVELOPMENT"
    title="Development roadmap."
    id="development-heading"
  />

  <p className="section-intro">
    Nexus is being developed as a modular academic platform.
    Each phase builds toward a more connected university
    experience, beginning with the Course Planner.
  </p>

  <div
    className="roadmap"
    role="list"
    aria-label="Nexus development roadmap"
  >
    {roadmap.map((phase, index) => (
      <div
        className="roadmap-row"
        key={phase.title}
        role="listitem"
      >
        <span className="roadmap-step">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="roadmap-copy">
          <strong className="roadmap-label">
            {phase.title}
          </strong>

          <span className="roadmap-description">
            {phase.description}
          </span>
        </div>

        <span className={`roadmap-state ${phase.status}`}>
          {phase.status === 'active'
            ? 'IN DEVELOPMENT'
            : 'PLANNED'}
        </span>
      </div>
    ))}
  </div>

  <p className="fineprint">
    <strong>Current progress:</strong> Initial McMaster
    academic data collection and SQLite storage are in place.
    Course planning logic and the first user interface
    remain under development.
  </p>

  <p className="fineprint">
    This roadmap represents long-term goals, not guaranteed
    features or release dates. Development priorities and
    technical implementations may change.
  </p>
</section>


              <section id="releases" className="content-section" aria-labelledby="releases-heading">
                <SectionHeading eyebrow="04 / DISTRIBUTION" title="Software releases." id="releases-heading" />
                <div className="release-box">
                  <div className="release-icon" aria-hidden="true">↧</div>
                  <div className="release-details">
                    <h3>Course Planner v1.0.0 - Web Edition</h3>
                    <p>Public release pending, no downloads available yet.</p>
                    <span className="release-note">Targeting {siteConfig.targetRelease} · Subject to change</span>
                  </div>
                  {siteConfig.publicReleasesUrl ? (
                    <a className="classic-button" href={siteConfig.publicReleasesUrl} target="_blank" rel="noopener noreferrer">
                      View releases <span className="sr-only">(opens in new tab)</span>
                    </a>
                  ) : (
                    <span className="release-tag">COMING SOON</span>
                  )}
                </div>
              </section>

              <section id="questions" className="content-section" aria-labelledby="faq-heading">
                <SectionHeading eyebrow="05 / GOOD TO KNOW" title="Frequently asked questions." id="faq-heading" />
                <div className="faq-list">
                  {questions.map((item) => (
                    <details key={item.question}>
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section id="contact" className="content-section contact-section" aria-labelledby="contact-heading">
                <SectionHeading eyebrow="06 / GET IN TOUCH" title="Build something better." id="contact-heading" />
                <p>Interested in contributing or following the project? Developers and students who share the vision are welcome to get in touch.</p>
                <p><a href={siteConfig.githubProfileUrl} target="_blank" rel="noopener noreferrer">Visit the developer's GitHub profile <span aria-hidden="true">↗</span><span className="sr-only">(opens in new tab)</span></a></p>
              </section>
            </div>
          </main>
        </div>
        <footer className="footer">
          <span>© 2026 NEXUS PROJECT · A LESS MISERABLE ACADEMIC LIFE.</span>
          <span>NOT AFFILIATED WITH MCMASTER UNIVERSITY OR ANY OTHER INSTITUTION.</span>
          <a href="#welcome">BACK TO TOP ↑</a>
        </footer>
      </div>
    </>
  );
}

export default App;
