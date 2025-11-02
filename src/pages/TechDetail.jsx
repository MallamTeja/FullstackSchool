import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import techData from '../data/techlist.json';

const Section = ({ title, children }) => (
  <section style={{ marginBottom: '1.5rem' }}>
    <h3 style={{ color: '#e2e8f0', margin: '0 0 .5rem' }}>{title}</h3>
    {children}
  </section>
);

const List = ({ items }) => (
  <ul style={{ paddingLeft: '1.1rem', margin: 0, color: '#94a3b8', lineHeight: 1.7 }}>
    {items.map((it, i) => (<li key={i}>{it}</li>))}
  </ul>
);

const Chips = ({ items, color = 'rgba(255,255,255,0.12)' }) => (
  <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
    {items.map((d) => (
      <span key={d} style={{ padding: '.25rem .6rem', borderRadius: 999, border: `1px solid ${color}`, color: '#e2e8f0' }}>{d}</span>
    ))}
  </div>
);

const TechDetail = () => {
  const { id } = useParams();
  const tech = techData.technologies.find(t => String(t.id) === String(id));

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!tech) {
    return (
      <div style={{ paddingTop: '100px', minHeight: '80vh' }} className="app-container">
        <h2 style={{ color: '#fff' }}>Technology not found</h2>
        <p style={{ color: '#94a3b8' }}>The requested technology does not exist.</p>
        <Link to="/" style={{ color: '#60a5fa' }}>Back to Home</Link>
      </div>
    );
  }

  // Derived helpful defaults
  const defaults = {
    why: `Why ${tech.name}? It excels when you need reliability and a strong ecosystem. Consider it for production workloads where community support and tooling matter.`,
    core: [
      'Key terminology and mental model',
      'Installation and basic setup',
      'Hello-world / first pipeline / first app',
      'Configuration and environment',
      'Debugging and logging basics'
    ],
    integration: [
      'Where it fits in typical architectures',
      'Common frameworks/libraries it pairs with',
      'Local vs. cloud deployment considerations'
    ],
    checklist: [
      'Install tooling and verify versions',
      'Create a minimal project from scratch',
      'Run a simple example end-to-end',
      'Add one real-world feature (auth, DB, API call, test, etc.)',
      'Write down 3 questions and answer them using docs'
    ],
    useCases: [
      'Portfolio-ready demo app',
      'Automate a repetitive workflow',
      'Integrate with a database or an API',
      'Deploy to a free tier or sandbox environment'
    ],
    pitfalls: [
      'Skipping fundamentals before jumping to advanced topics',
      'Ignoring version compatibility and prerequisites',
      'Not reading official docs for configuration nuances'
    ],
    best: [
      'Start small, iterate quickly',
      'Learn by building something you would actually use',
      'Use linters/formatters and scripts to maintain quality'
    ],
    path: {
      beginner: [
        'Understand the problem it solves and terminology',
        'Install, run hello-world, explore CLI/UI',
        'Follow the official quickstart or tutorial'
      ],
      intermediate: [
        'Integrate with other tools in your stack',
        'Add testing/monitoring/CI to your sample project',
        'Deploy to a hosted environment'
      ],
      advanced: [
        'Performance tuning and scaling',
        'Security hardening and secrets management',
        'Automate workflows and advanced configuration'
      ]
    }
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }} className="app-container">
      <header style={{ marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <img src={tech.iconUrl} alt={tech.name} style={{ width: 48, height: 48 }} />
          <div>
            <h1 style={{ margin: 0, color: '#fff' }}>{tech.name}</h1>
            <div style={{ color: '#64ffda', fontWeight: 600 }}>{tech.category}</div>
          </div>
        </div>
      </header>

      <Section title="Overview">
        <p style={{ color: '#94a3b8', lineHeight: 1.7 }}>{tech.desc}</p>
      </Section>

      <Section title="Why use it?">
        <p style={{ color: '#cbd5e1' }}>{defaults.why}</p>
      </Section>

      {Array.isArray(tech.dependencies) && tech.dependencies.length > 0 && (
        <Section title="Prerequisites">
          <Chips items={tech.dependencies} color={'rgba(244,114,182,0.35)'} />
          <p style={{ color: '#94a3b8', marginTop: '.5rem' }}>Brush up on these first for a smoother learning curve.</p>
        </Section>
      )}

      <Section title="Core concepts">
        <List items={defaults.core} />
      </Section>

      <Section title="Typical stack integration">
        <List items={defaults.integration} />
      </Section>

      {Array.isArray(tech.leads_to) && tech.leads_to.length > 0 && (
        <Section title="Next steps">
          <Chips items={tech.leads_to} color={'rgba(52,211,153,0.35)'} />
          <p style={{ color: '#94a3b8', marginTop: '.5rem' }}>Natural directions to explore after you gain confidence.</p>
        </Section>
      )}

      <Section title="Getting started checklist">
        <List items={defaults.checklist} />
      </Section>

      <Section title="Real-world use cases">
        <List items={defaults.useCases} />
      </Section>

      <Section title="Common pitfalls">
        <List items={defaults.pitfalls} />
      </Section>

      <Section title="Best practices">
        <List items={defaults.best} />
      </Section>

      <Section title="Learning path">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '0.75rem' }}>
            <h4 style={{ margin: 0, color: '#e2e8f0' }}>Beginner</h4>
            <List items={defaults.path.beginner} />
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '0.75rem' }}>
            <h4 style={{ margin: 0, color: '#e2e8f0' }}>Intermediate</h4>
            <List items={defaults.path.intermediate} />
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '0.75rem' }}>
            <h4 style={{ margin: 0, color: '#e2e8f0' }}>Advanced</h4>
            <List items={defaults.path.advanced} />
          </div>
        </div>
      </Section>

      <Section title="Official Resources">
        <ul>
          <li>
            <a href={tech.url} target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa' }}>
              {tech.url}
            </a>
          </li>
        </ul>
      </Section>

      <footer style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <a href={tech.url} target="_blank" rel="noopener noreferrer" className="learn-more-btn" style={{ textDecoration: 'none' }}>
          <i className="fas fa-external-link"></i>
          Official Site
        </a>
        <Link to="/" className="btn-ghost" style={{ textDecoration: 'none' }}>
          ⟵ Back to Home
        </Link>
      </footer>
    </div>
  );
};

export default TechDetail;
