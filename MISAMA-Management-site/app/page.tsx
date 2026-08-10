const brands = [
  { name: "Maanos", tag: "Massages", text: "Des expériences de massage pensées pour offrir une parenthèse de récupération et de bien-être.", url: "https://www.maanos.com", tone: "sage" },
  { name: "Smooden", tag: "Huiles de massage", text: "Des huiles développées pour le geste professionnel, le confort et l'expérience sensorielle.", url: "https://www.smooden.com", tone: "sand" },
  { name: "MOLM", tag: "Chèques cadeaux", text: "Le cadeau bien-être simple à offrir, qui laisse à chacun la liberté de choisir son moment.", url: "https://www.molm-care.com", tone: "clay" },
  { name: "Directa Luxembourg", tag: "Immobilier", text: "Une activité de marchand de biens dédiée à l'acquisition et à la valorisation d'actifs.", url: "https://directa-luxembourg.vercel.app/", tone: "ink" },
  { name: "My Massage Shop", tag: "E-commerce", text: "Une sélection d'articles et de matériel de massage destinée aux particuliers et aux professionnels.", url: "https://www.mymassageshop.com", tone: "cream" },
  { name: "De Coiffer", tag: "Salons de coiffure", text: "Des salons où savoir-faire, attention et sens du style façonnent une expérience personnelle.", url: "https://www.decoiffer.lu", tone: "rose" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="wordmark" href="#top" aria-label="MISAMA Management, accueil">MISAMA <span>Management</span></a>
        <nav aria-label="Navigation principale">
          <a href="#groupe">Le groupe</a>
          <a href="#activites">Nos activités</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="navCta" href="mailto:contact@misama-management.com">Nous contacter</a>
      </header>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> Luxembourg · Entreprendre avec sens</div>
        <h1>Des idées qui prennent <em>forme.</em></h1>
        <div className="heroBottom">
          <p>MISAMA Management est un groupe entrepreneurial luxembourgeois qui développe des marques, des expériences et des actifs à fort potentiel.</p>
          <a className="roundLink" href="#activites" aria-label="Découvrir nos activités">↓</a>
        </div>
        <div className="heroArt" aria-hidden="true"><i /><b /><span>6<br /><small>activités</small></span></div>
      </section>

      <section className="intro shell" id="groupe">
        <p className="sectionLabel">01 — Le groupe</p>
        <div>
          <h2>Construire aujourd'hui<br />les références de demain.</h2>
          <p>Nous réunissons des activités complémentaires dans le bien-être, la beauté, le commerce et l'immobilier. Notre rôle : donner à chaque projet une vision claire, une structure solide et l'espace nécessaire pour grandir.</p>
          <div className="principles">
            <span><b>01</b> Vision long terme</span>
            <span><b>02</b> Excellence opérationnelle</span>
            <span><b>03</b> Synergies concrètes</span>
          </div>
        </div>
      </section>

      <section className="portfolio" id="activites">
        <div className="shell portfolioHead">
          <p className="sectionLabel light">02 — Notre écosystème</p>
          <h2>Six activités.<br /><em>Une même ambition.</em></h2>
          <p>Des marques autonomes, reliées par une culture commune : l'attention portée à l'expérience, à la qualité et à la création de valeur durable.</p>
        </div>
        <div className="brandGrid shell">
          {brands.map((brand, index) => (
            <a className={`brandCard ${brand.tone}`} href={brand.url} target="_blank" rel="noreferrer" key={brand.name}>
              <div className="cardTop"><span>{String(index + 1).padStart(2, "0")}</span><Arrow /></div>
              <div><p>{brand.tag}</p><h3>{brand.name}</h3><div className="line" /><p className="description">{brand.text}</p></div>
            </a>
          ))}
        </div>
      </section>

      <section className="model shell">
        <p className="sectionLabel">03 — Notre modèle</p>
        <div>
          <h2>Créer des passerelles,<br />multiplier les possibles.</h2>
          <div className="modelGrid">
            <p>Nos expertises se répondent : les lieux accueillent les expériences, les produits prolongent le geste, le digital élargit l'accès et l'immobilier ancre notre développement.</p>
            <p>Cette approche transversale nous permet d'accompagner chaque activité avec agilité, tout en conservant l'identité et la singularité de chaque marque.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contactInner">
          <p className="sectionLabel light">04 — Contact</p>
          <h2>Parlons de ce que nous<br />pourrions construire <em>ensemble.</em></h2>
          <div className="contactRow">
            <a href="mailto:contact@misama-management.com">contact@misama-management.com <Arrow /></a>
            <address>26, avenue de la Faïencerie<br />L-1510 Luxembourg</address>
          </div>
        </div>
      </section>

      <footer className="shell">
        <div className="wordmark">MISAMA <span>Management</span></div>
        <p>© {new Date().getFullYear()} MISAMA Management</p>
        <a href="#top">Retour en haut ↑</a>
      </footer>
    </main>
  );
}
