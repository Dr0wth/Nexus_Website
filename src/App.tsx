import { useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { siteConfig } from './siteConfig';
import { LANGUAGE_STORAGE_KEY, type SupportedLanguage } from './i18n';

type NavigationItem = { key: string; href: string };

const navigation: NavigationItem[] = [
  { key: 'welcome', href: '#welcome' },
  { key: 'about', href: '#about' },
  { key: 'planner', href: '#planner' },
  { key: 'development', href: '#development' },
  { key: 'releases', href: '#releases' },
  { key: 'questions', href: '#questions' },
  { key: 'contact', href: '#contact' },
];

const features = [1, 2, 3] as const;
const roadmap = [
  { phase: 1, status: 'active' },
  { phase: 2, status: 'planned' },
  { phase: 3, status: 'planned' },
  { phase: 4, status: 'planned' },
  { phase: 5, status: 'planned' },
  { phase: 6, status: 'planned' },
  { phase: 7, status: 'planned' },
] as const;
const questions = [1, 2, 3, 4] as const;

function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const selectedLanguage: SupportedLanguage = i18n.resolvedLanguage?.startsWith('zh')
    ? 'zh-CN'
    : 'en';

  function changeLanguage(language: SupportedLanguage) {
    void i18n.changeLanguage(language);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Switching still works without storage.
    }
  }

  return (
    <div className="language-switcher">
      <label className="sr-only" htmlFor="nexus-language">{t('ui.language')}</label>
      <select
        id="nexus-language"
        className="language-select"
        value={selectedLanguage}
        onChange={(event) => changeLanguage(event.target.value as SupportedLanguage)}
      >
        <option value="en">EN</option>
        <option value="zh-CN">简体中文</option>
      </select>
    </div>
  );
}

function Navigation() {
  const { t } = useTranslation();
  const externalLinks = [
    { key: 'github', href: siteConfig.githubProfileUrl },
    { key: 'mcmaster', href: siteConfig.mcmasterUniversityUrl },
    { key: 'calendar', href: siteConfig.academicCalendarUrl },
    { key: 'a2l', href: siteConfig.a2LUrl },
    { key: 'mosaic', href: siteConfig.mosaicUrl },
  ];

  return (
    <nav className="site-navigation" aria-label={t('ui.mainNavigation')}>
      <div className="nav-heading">{t('nav.heading')}</div>
      {navigation.map((item) => (
        <a key={item.href} href={item.href} className="nav-item">
          <span aria-hidden="true" className="nav-marker">›</span>{t(`nav.${item.key}`)}
        </a>
      ))}
      <div className="nav-divider" />
      <div className="nav-heading nav-heading-secondary">{t('nav.externalHeading')}</div>
      {externalLinks.map((link) => (
        <a
          key={link.key}
          className="nav-item"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span aria-hidden="true" className="nav-marker">›</span>
          {t(`nav.${link.key}`)} <span className="sr-only">{t('ui.newTab')}</span>
        </a>
      ))}
      <div className="nav-note">.<br />.</div>
    </nav>
  );
}

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage?.startsWith('zh')
      ? 'zh-CN'
      : 'en';
  }, [i18n.resolvedLanguage]);

  return (
    <>
      <a href="#main-content" className="skip-link">{t('ui.skip')}</a>
      <div className="site-shell" id="welcome">
        <header className="masthead">
          <div className="masthead-inner">
            <div className="masthead-brand">
              <div className="masthead-wordmark">
                <span className="wordmark">Nexus</span>
                <span className="wordmark-caption">{t('masthead.caption')}</span>
              </div>
            </div>
            <div className="masthead-actions">
              <div className="masthead-side">
                <span>{t('masthead.greeting')}</span>
                <span className="masthead-edition"> </span>
              </div>
              <LanguageSwitcher />
            </div>
          </div>
        </header>

        <div className="site-body">
          <Navigation />
          <main id="main-content">
            <div className="utility-line">
              <span>{t('utility.title')}</span>
              <span>{t('utility.established')}</span>
            </div>

            <section className="hero" aria-labelledby="hero-heading">
              <div className="hero-content">
                <p className="hero-kicker">{t('hero.kicker')}</p>
                <h1 id="hero-heading">
                  {t('hero.title1')}<br /><em>{t('hero.title2')}</em>
                </h1>
                <p className="hero-lead">{t('hero.lead')}</p>
                <p className="hero-copy">{t('hero.description')}</p>
                <div className="hero-actions">
                  <a className="classic-button primary-button" href="#planner">
                    {t('hero.plannerButton')} <span aria-hidden="true">»</span>
                  </a>
                  <a className="classic-button" href="#development">{t('hero.statusButton')}</a>
                </div>
              </div>
              <aside className="hero-bulletin" aria-label={t('bulletin.heading')}>
                <div className="bulletin-top">{t('bulletin.heading')}</div>
                <div className="bulletin-content">
                  <div className="bulletin-number">01</div>
                  <h3>{t('bulletin.title')}</h3>
                  <p>{t('bulletin.description')}</p>
                  <div className="bulletin-rule" />
                  <p className="bulletin-field">{t('bulletin.statusField')}</p>
                  <p className="bulletin-value">{t('bulletin.statusValue')}</p>
                  <p className="bulletin-field">{t('bulletin.targetField')}</p>
                  <p className="bulletin-value">{siteConfig.targetRelease}*</p>
                  <p className="bulletin-footnote">{t('bulletin.footnote')}</p>
                </div>
              </aside>
            </section>

            <div className="content-wrap">
              <div className="intro-note">
                <strong>{t('intro.label')}</strong> {t('intro.description')}
              </div>

              <section id="about" className="content-section" aria-labelledby="about-heading">
                <SectionHeading eyebrow={t('about.eyebrow')} title={t('about.title')} id="about-heading" />
                <div className="two-col-text">
                  <p>{t('about.paragraph1')}</p>
                  <p>
                    <Trans i18nKey="about.paragraph2" components={{ emphasis: <strong /> }} />
                  </p>
                </div>
              </section>

              <section id="planner" className="content-section" aria-labelledby="planner-heading">
                <SectionHeading eyebrow={t('planner.eyebrow')} title={t('planner.title')} id="planner-heading" />
                <p className="section-intro">{t('planner.intro')}</p>
                <div className="feature-grid">
                  {features.map((feature, index) => (
                    <div className="feature-item" key={feature}>
                      <div className="feature-index">0{index + 1}</div>
                      <h3>{t(`planner.feature${feature}Title`)}</h3>
                      <p>{t(`planner.feature${feature}Description`)}</p>
                    </div>
                  ))}
                </div>
                <p className="fineprint">{t('planner.fineprint')}</p>
              </section>

              <section id="development" className="content-section" aria-labelledby="development-heading">
                <SectionHeading eyebrow={t('roadmap.eyebrow')} title={t('roadmap.title')} id="development-heading" />
                <p className="section-intro">{t('roadmap.intro')}</p>
                <div className="roadmap" role="list" aria-label={t('roadmap.aria')}>
                  {roadmap.map(({ phase, status }, index) => (
                    <div className="roadmap-row" key={phase} role="listitem">
                      <span className="roadmap-step">{String(index + 1).padStart(2, '0')}</span>
                      <div className="roadmap-copy">
                        <strong className="roadmap-label">{t(`roadmap.phase${phase}Title`)}</strong>
                        <span className="roadmap-description">{t(`roadmap.phase${phase}Description`)}</span>
                      </div>
                      <span className={`roadmap-state ${status}`}>
                        {t(status === 'active' ? 'roadmap.statusActive' : 'roadmap.statusPlanned')}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="fineprint">
                  <strong>{t('roadmap.progressLabel')}</strong> {t('roadmap.progressText')}
                </p>
                <p className="fineprint">{t('roadmap.disclaimer')}</p>
              </section>

              <section id="releases" className="content-section" aria-labelledby="releases-heading">
                <SectionHeading eyebrow={t('release.eyebrow')} title={t('release.title')} id="releases-heading" />
                <div className="release-box">
                  <div className="release-icon" aria-hidden="true">↧</div>
                  <div className="release-details">
                    <h3>{t('release.productTitle')}</h3>
                    <p>{t('release.description')}</p>
                    <span className="release-note">{t('release.targeting', { date: siteConfig.targetRelease })}</span>
                  </div>
                  {siteConfig.publicReleasesUrl ? (
                    <a className="classic-button" href={siteConfig.publicReleasesUrl} target="_blank" rel="noopener noreferrer">
                      {t('release.view')} <span className="sr-only">{t('ui.newTab')}</span>
                    </a>
                  ) : (
                    <span className="release-tag">{t('release.soon')}</span>
                  )}
                </div>
              </section>

              <section id="questions" className="content-section" aria-labelledby="faq-heading">
                <SectionHeading eyebrow={t('faq.eyebrow')} title={t('faq.title')} id="faq-heading" />
                <div className="faq-list">
                  {questions.map((number) => (
                    <details key={number}>
                      <summary>{t(`faq.q${number}`)}</summary>
                      <p>{t(`faq.a${number}`)}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section id="contact" className="content-section contact-section" aria-labelledby="contact-heading">
                <SectionHeading eyebrow={t('contact.eyebrow')} title={t('contact.title')} id="contact-heading" />
                <p>{t('contact.description')}</p>
                <p>
                  <a href={siteConfig.githubProfileUrl} target="_blank" rel="noopener noreferrer">
                    {t('contact.link')} <span aria-hidden="true">↗</span>
                    <span className="sr-only">{t('ui.newTab')}</span>
                  </a>
                </p>
              </section>
            </div>
          </main>
        </div>
        <footer className="footer">
          <span>{t('footer.copyright')}</span>
          <span>{t('footer.disclaimer')}</span>
          <a href="#welcome">{t('footer.backToTop')} ↑</a>
        </footer>
      </div>
    </>
  );
}

export default App;
