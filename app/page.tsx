'use client';

import {
  ArrowRight,
  AtSign,
  CalendarDays,
  Check,
  Heart,
  MapPin,
  Menu as MenuIcon,
  Phone,
  ShoppingBag,
  Sparkles,
  Truck,
  UtensilsCrossed,
  Users,
  X,
} from 'lucide-react';
import { useState } from 'react';

const ORDER_URL = 'https://order.toasttab.com/online/jeeroz';

const featured = [
  {
    name: 'Chicken Shawarma',
    detail: 'Garlic sauce · cucumber pickles · thin bread',
    price: '$14.50',
    label: 'Crowd favorite',
  },
  {
    name: 'Lamb & Beef Gyro',
    detail: 'Tzatziki · spring mix · onion · tomato',
    price: '$14.95',
    label: 'Truck classic',
  },
  {
    name: 'Vegan Falafel',
    detail: 'Tahini · tomato · cucumber pickles',
    price: '$13.25',
    label: 'Plant powered',
  },
];

const menuSections = [
  {
    category: 'Wraps',
    items: [
      ['Chicken Shawarma Wrap', 'Garlic sauce and cucumber pickles', '$14.50'],
      ['Beef Shawarma Wrap', 'Tahini, red onion, parsley, sumac and pickles', '$14.95'],
      ['Lamb & Beef Gyro', 'Tzatziki, spring mix, onion and tomato', '$14.95'],
      ['Chicken Gyro Wrap', 'Tzatziki, spring mix, onion and tomato', '$14.50'],
      ['Vegan Falafel', 'Tahini, tomato and cucumber pickles', '$13.25'],
      ['Lamb Kofta Wrap', 'Tahini, red onion, tomato, parsley, sumac and pickles', '$15.25'],
    ],
  },
  {
    category: 'Plates',
    items: [
      ['Chicken Shawarma Plate', 'Shawarma rolls, fries and garlic sauce', '$17.95'],
      ['Beef Shawarma Plate', 'Shawarma rolls, fries and tahini', '$18.39'],
      ['Lamb Kofta Plate', 'Kofta rolls, fries and tahini', '$18.85'],
      ['Falafel Plate', 'Crisp falafel plate with house pairings', '$16.55'],
      ['Family Chicken Plate', '6 chicken shawarma wraps and 4 fries', '$85'],
      ['Family Mix Plate', '3 chicken + 3 beef shawarma wraps and 4 fries', '$89'],
    ],
  },
  {
    category: 'Sides & Sips',
    items: [
      ['Cajun Fries', 'Golden, crisp and boldly seasoned', '$5.95'],
      ['Regular Fries', 'Hot, crisp and salted', '$5.95'],
      ['Hummus Appetizer', 'Creamy hummus with olive oil', '$7.95'],
      ['Strawberry Lemonade', 'Bright, tart and refreshing', '$4.49'],
      ['Lemonade', 'Classic citrus refresher', '$4.49'],
      ['Shasta Soda', 'Cola, Zero Cola or Lime', '$2.50'],
    ],
  },
];

const cateringGroups = [
  {
    title: 'Trays & salads',
    note: 'Half / full tray',
    items: [
      ['Hummus', '$30 / $50'],
      ['Baba Ghannouj', '$25 / $45'],
      ['Greek or Caesar Salad', '$20 / $35'],
      ['Fattoush Salad', '$30 / $50'],
      ['Tabbouleh Salad', '$40 / $75'],
      ['Yogurt Cucumber Salad', '$25 / $45'],
      ['Baklava (24 / 48 pcs)', '$35 / $60'],
    ],
  },
  {
    title: 'Rice & mains',
    note: 'Catering pans',
    items: [
      ['Kabsa Rice', '$40'],
      ['Rice with Ground Beef', '$45'],
      ['Yellow Rice', '$30'],
      ['Ouzi Rice', '$45'],
      ['16 Whole Chickens', '$185'],
      ['15 lb Chicken Kabob', '$185'],
      ['Whole Lamb with Rice', '$495'],
    ],
  },
  {
    title: 'Wrap service',
    note: 'Can be cut for sharing',
    items: [
      ['Chicken Shawarma', '$11'],
      ['Beef / Lamb Shawarma', '$13'],
      ['Chicken Gyro', '$11'],
      ['Beef / Lamb Gyro', '$13'],
      ['Vegan Falafel', '$9'],
      ['Add a side of fries', '+$3'],
    ],
  },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main>
      <div className="announce">
        <span>Greater Sacramento&apos;s roaming Mediterranean kitchen</span>
        <span className="announce-dot" />
        <a href="tel:9165441311">Call to confirm today&apos;s stop</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Jeeroz home">
          <img src="./assets/jeeroz-logo.avif" alt="Jeeroz Mediterranean Cuisine" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#menu">Menu</a>
          <a href="#catering">Catering</a>
          <a href="#find-us">Find the truck</a>
          <a href="#story">Our story</a>
        </nav>

        <a className="order-button order-button--small" href={ORDER_URL} target="_blank" rel="noreferrer">
          <ShoppingBag size={17} /> Order online
        </a>

        <button
          className="mobile-toggle"
          type="button"
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X /> : <MenuIcon />}
        </button>

        {mobileOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#menu" onClick={() => setMobileOpen(false)}>Menu</a>
            <a href="#catering" onClick={() => setMobileOpen(false)}>Catering</a>
            <a href="#find-us" onClick={() => setMobileOpen(false)}>Find the truck</a>
            <a href="#story" onClick={() => setMobileOpen(false)}>Our story</a>
            <a href={ORDER_URL} target="_blank" rel="noreferrer">Order online <ArrowRight size={18} /></a>
          </nav>
        )}
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src="./assets/jeeroz-hero.jpg" alt="Shawarma and gyro wraps with hummus and Cajun fries" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow"><Sparkles size={15} /> Made fresh. Served wherever you are.</div>
          <h1>The real taste<br />of the <em>Mediterranean.</em></h1>
          <p>Shawarma carved hot, gyros wrapped to order, and Cajun fries worth following a food truck for.</p>
          <div className="hero-actions">
            <a className="order-button" href={ORDER_URL} target="_blank" rel="noreferrer">
              Start an order <ArrowRight size={18} />
            </a>
            <a className="ghost-button" href="#find-us"><MapPin size={18} /> Find today&apos;s stop</a>
          </div>
          <div className="hero-note">
            <span className="status-pulse" /> Pickup only · location changes weekly
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Jeeroz specialties">
        <div>SHAWARMA <span>✦</span> GYRO <span>✦</span> FALAFEL <span>✦</span> CAJUN FRIES <span>✦</span> CATERING <span>✦</span> SACRAMENTO <span>✦</span></div>
      </div>

      <section className="section popular" id="menu">
        <div className="section-heading">
          <div>
            <p className="kicker">The Jeeroz essentials</p>
            <h2>Start with a favorite.</h2>
          </div>
          <a className="text-link" href="#full-menu">Explore the full menu <ArrowRight size={18} /></a>
        </div>

        <div className="featured-grid">
          {featured.map((item, index) => (
            <article className="food-card" key={item.name}>
              <div className="food-card-top">
                <span className="food-number">0{index + 1}</span>
                <span className="food-label">{item.label}</span>
              </div>
              <div>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </div>
              <div className="food-card-bottom">
                <strong>{item.price}</strong>
                <a href={ORDER_URL} target="_blank" rel="noreferrer" aria-label={`Order ${item.name}`}><ArrowRight /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="story" id="story">
        <div className="story-image-wrap">
          <img src="./assets/jeeroz-brand-board.jpg" alt="Jeeroz food truck, family trays and shawarma spits" />
          <span className="story-stamp">Sacramento<br />on wheels</span>
        </div>
        <div className="story-copy">
          <p className="kicker">A local original</p>
          <h2>Big flavor.<br />Small kitchen.<br /><em>Zero shortcuts.</em></h2>
          <p>Jeeroz brings the real taste of the Mediterranean to the Greater Sacramento area—one hot wrap, generous plate and neighborhood stop at a time.</p>
          <div className="story-values">
            <div><UtensilsCrossed /><span><strong>Cooked to order</strong>Hot off the truck, every time.</span></div>
            <div><Truck /><span><strong>Made to move</strong>Follow the week&apos;s route.</span></div>
            <div><Heart /><span><strong>Built for sharing</strong>From lunch to full-scale catering.</span></div>
          </div>
        </div>
      </section>

      <section className="full-menu" id="full-menu">
        <div className="menu-intro">
          <p className="kicker">Full menu</p>
          <h2>Pick your<br /><em>kind of good.</em></h2>
          <p>Availability can change by stop. Order through Toast for the live menu and today&apos;s stock.</p>
          <a className="order-button" href={ORDER_URL} target="_blank" rel="noreferrer">View live ordering <ArrowRight size={18} /></a>
        </div>
        <div className="menu-sections">
          {menuSections.map((section, index) => (
            <article className="menu-section" key={section.category}>
              <header>
                <span>0{index + 1}</span>
                <h3>{section.category}</h3>
              </header>
              <div>
                {section.items.map(([name, detail, price]) => (
                  <div className="menu-row" key={name}>
                    <div><h4>{name}</h4><p>{detail}</p></div>
                    <strong>{price}</strong>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="catering" id="catering">
        <div className="catering-visual">
          <img src="./assets/jeeroz-catering.jpg" alt="Mediterranean catering spread with rice, shawarma, kebabs, salads and baklava" />
          <div className="catering-badge"><span>Feeds</span><strong>the whole table</strong></div>
        </div>
        <div className="catering-content">
          <p className="kicker">Jeeroz catering</p>
          <h2>Bring the truck&apos;s<br />best to your table.</h2>
          <p className="catering-lead">Office lunch, wedding, graduation or a house full of hungry people—we make Mediterranean food easy to serve and hard to forget.</p>
          <div className="catering-points">
            <span><Check size={17} /> Half and full trays</span>
            <span><Check size={17} /> Wraps cut for sharing</span>
            <span><Check size={17} /> Vegetarian options</span>
          </div>
          <a className="light-button" href="tel:2404229057"><Phone size={18} /> Call (240) 422-9057</a>
        </div>
      </section>

      <section className="catering-menu">
        <div className="section-heading">
          <div><p className="kicker">Catering guide</p><h2>Build the spread.</h2></div>
          <p className="price-note">Pricing shown from the current Jeeroz catering menu. Call to confirm availability and your final quote.</p>
        </div>
        <div className="catering-grid">
          {cateringGroups.map((group) => (
            <article key={group.title}>
              <header><div><h3>{group.title}</h3><p>{group.note}</p></div><span>+</span></header>
              {group.items.map(([name, price]) => <div className="catering-row" key={name}><span>{name}</span><strong>{price}</strong></div>)}
            </article>
          ))}
        </div>
      </section>

      <section className="find-us" id="find-us">
        <div className="find-us-heading">
          <p className="kicker">Find the truck</p>
          <h2>We move.<br /><em>You follow.</em></h2>
          <p>Our location changes with the week. Check the latest post before you head out, or call to confirm.</p>
        </div>
        <div className="find-steps">
          <a href="https://www.instagram.com/jeeroztruck/" target="_blank" rel="noreferrer">
            <span className="step-icon"><AtSign /></span>
            <span><small>Fastest update</small><strong>@jeeroztruck</strong></span>
            <ArrowRight />
          </a>
          <a href="https://www.facebook.com/JeerozTruck" target="_blank" rel="noreferrer">
            <span className="step-icon"><Users /></span>
            <span><small>Events & route posts</small><strong>JeerozTruck</strong></span>
            <ArrowRight />
          </a>
          <a href="tel:9165441311">
            <span className="step-icon"><Phone /></span>
            <span><small>Confirm today&apos;s stop</small><strong>(916) 544-1311</strong></span>
            <ArrowRight />
          </a>
        </div>
        <div className="schedule-note"><CalendarDays /><span><strong>Heads up:</strong> posted hours and locations can change for private events, weather and sell-outs.</span></div>
      </section>

      <section className="testimonial">
        <span className="quote-mark">“</span>
        <blockquote>Some of the best gyros I&apos;ve had in the area.</blockquote>
        <p>— Noah M. · Jeeroz customer</p>
      </section>

      <section className="final-cta">
        <img src="./assets/jeeroz-skewer.avif" alt="Jeeroz shawarma skewer" />
        <div>
          <p className="kicker">Hungry yet?</p>
          <h2>Your next Jeeroz<br />order is a tap away.</h2>
          <a className="light-button" href={ORDER_URL} target="_blank" rel="noreferrer">Order on Toast <ArrowRight size={18} /></a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><img src="./assets/jeeroz-logo.avif" alt="Jeeroz Mediterranean Cuisine" /><p>The real taste of the Mediterranean, roaming the Greater Sacramento area.</p></div>
        <div><h3>Explore</h3><a href="#menu">Menu</a><a href="#catering">Catering</a><a href="#find-us">Find the truck</a><a href={ORDER_URL} target="_blank" rel="noreferrer">Order online</a></div>
        <div><h3>Connect</h3><a href="https://www.instagram.com/jeeroztruck/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com/JeerozTruck" target="_blank" rel="noreferrer">Facebook</a><a href="tel:9165441311">Route: (916) 544-1311</a><a href="tel:2404229057">Catering: (240) 422-9057</a></div>
        <div className="footer-order"><h3>Ready when you are.</h3><a href={ORDER_URL} target="_blank" rel="noreferrer">Start an order <ArrowRight /></a></div>
        <p className="copyright">© {new Date().getFullYear()} Jeeroz Mediterranean. All rights reserved.</p>
      </footer>
    </main>
  );
}
