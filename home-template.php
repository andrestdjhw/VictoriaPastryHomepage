<?php
/* Template Name: Home */
get_header();
?>

<style>
  :root {
    --vp-dark: #3f1016;
    --vp-wine: #65333c;
    --vp-muted: #9d7961;
    --vp-cream: #feefdc;
    --vp-rose: #d6bcad;

    --vp-text: #3f1016;
    --vp-text-soft: rgba(63, 16, 22, 0.72);
    --vp-border: rgba(63, 16, 22, 0.14);
    --vp-light-border: rgba(254, 239, 220, 0.16);
  }

  @keyframes vp-fade-up {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes vp-line-grow {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }

  @keyframes vp-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  .vp-reveal {
    opacity: 0;
    transform: translateY(34px);
    transition: opacity .8s ease, transform .8s ease;
  }

  .vp-reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .vp-hero-eyebrow { animation: vp-fade-up .75s ease both .1s; }
  .vp-hero-rule    { animation: vp-line-grow .85s ease both .22s; transform-origin: left; }
  .vp-hero-title   { animation: vp-fade-up .85s ease both .32s; }
  .vp-hero-sub     { animation: vp-fade-up .85s ease both .48s; }
  .vp-hero-ctas    { animation: vp-fade-up .85s ease both .62s; }

  .vp-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .6rem;
    font-family: 'Lato', sans-serif;
    font-size: .76rem;
    font-weight: 700;
    letter-spacing: .16em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 0;
    padding: 15px 30px;
    transition: transform .22s ease, background-color .22s ease, color .22s ease, border-color .22s ease;
  }

  .vp-btn:hover { transform: translateY(-2px); }

  .vp-btn-primary {
    background: var(--vp-cream);
    color: var(--vp-dark);
    border: 1px solid var(--vp-cream);
  }
  .vp-btn-primary:hover {
    background: var(--vp-rose);
    border-color: var(--vp-rose);
    color: var(--vp-dark);
  }

  .vp-btn-dark {
    background: var(--vp-dark);
    color: var(--vp-cream);
    border: 1px solid var(--vp-dark);
  }
  .vp-btn-dark:hover {
    background: var(--vp-wine);
    border-color: var(--vp-wine);
    color: var(--vp-cream);
  }

  .vp-btn-outline {
    background: transparent;
    color: var(--vp-cream);
    border: 1px solid rgba(254, 239, 220, .65);
  }
  .vp-btn-outline:hover {
    background: var(--vp-cream);
    color: var(--vp-dark);
    border-color: var(--vp-cream);
  }

  .vp-label {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: .68rem;
    letter-spacing: .22em;
    text-transform: uppercase;
  }

  .vp-heading {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -.025em;
  }

  .vp-body {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    line-height: 1.85;
  }

  .vp-grain::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: .22;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.05'/%3E%3C/svg%3E");
  }

  .vp-qa-card {
    transition: transform .25s ease, background-color .25s ease;
  }
  .vp-qa-card:hover {
    transform: translateY(-4px);
    background: rgba(254, 239, 220, .075) !important;
  }

  .vp-ornament {
    display: inline-flex;
    align-items: center;
    gap: .7rem;
    color: var(--vp-muted);
  }
  .vp-ornament::before,
  .vp-ornament::after {
    content: "";
    display: block;
    width: 30px;
    height: 1px;
    background: currentColor;
    opacity: .65;
  }

  /* ─── HERO VIDEO ─────────────────────────────────────────── */
  .vp-hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .vp-hero-video {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .vp-hero-video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  /* Multi-layer overlay: dark at bottom + sides for legibility, lighter center */
  .vp-hero-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background:
      linear-gradient(
        to right,
        rgba(63,16,22,.88) 0%,
        rgba(63,16,22,.55) 50%,
        rgba(63,16,22,.20) 100%
      ),
      linear-gradient(
        to top,
        rgba(63,16,22,.60) 0%,
        transparent 50%
      );
  }

  /* Grain texture over video */
  .vp-hero-grain {
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    opacity: .18;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.05'/%3E%3C/svg%3E");
  }

  /* Copy sits above everything */
  .vp-hero-content {
    position: relative;
    z-index: 3;
    padding: 6rem clamp(1.5rem, 6vw, 7rem);
    padding-top: calc(32px + 72px + 4rem); /* admin bar + navbar height + breathing room */
    max-width: 780px;
  }

  /* Thin rose rule left edge */
  .vp-hero-content::before {
    content: "";
    position: absolute;
    left: clamp(1.5rem, 6vw, 7rem);
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 60%;
    background: linear-gradient(to bottom, transparent, var(--vp-rose), transparent);
    opacity: .30;
  }

  /* Est. badge — bottom right of hero */
  .vp-hero-badge {
    position: absolute;
    right: 2rem;
    bottom: 2.5rem;
    background: rgba(63,16,22,.72);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(214,188,173,.30);
    color: var(--vp-cream);
    padding: .9rem 1.3rem;
    z-index: 4;
  }

  @media (max-width: 768px) {
    .vp-hero-content { padding: 4rem 1.5rem; padding-top: calc(32px + 72px + 2.5rem); }
    .vp-hero-content::before { display: none; }
    .vp-hero-badge { right: 1rem; bottom: 1.5rem; }
    .vp-btn { width: 100%; }
  }

  /* ─── CAROUSEL ─────────────────────────────────────────── */
  .vp-carousel-section {
    background: var(--vp-cream);
    padding: 0;
    position: relative;
    overflow: hidden;
  }

  .vp-carousel-header {
    background: var(--vp-wine);
    padding: 4.5rem 0 5rem;
    position: relative;
    overflow: hidden;
  }

  .vp-carousel-header::before {
    content: "1914";
    position: absolute;
    right: -1%;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: clamp(7rem, 16vw, 15rem);
    color: var(--vp-wine);
    opacity: .35;
    pointer-events: none;
    line-height: 1;
    letter-spacing: -.04em;
  }

  .vp-carousel-header::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--vp-rose), transparent);
  }

  .vp-carousel-cards {
    margin-top: -3.5rem;
    padding: 0 0 5rem;
    position: relative;
    z-index: 2;
  }

  .vp-carousel {
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
  .vp-carousel > * {
    scroll-snap-align: start;
  }

  .vp-flip-card.is-flipped .vp-flip-inner {
    transform: rotateY(180deg);
  }

  .vp-card-cta {
    transition: background-color .2s ease, color .2s ease, transform .2s ease;
  }
  .vp-card-cta:hover {
    background: var(--vp-rose) !important;
    color: var(--vp-dark) !important;
    transform: translateY(-2px);
  }

  .vp-product-front,
  .vp-product-back {
    border-radius: 0 !important;
    box-shadow: 0 20px 55px rgba(63,16,22,.22) !important;
  }
  .vp-product-front img {
    filter: saturate(1.06) contrast(1.03);
  }
  .vp-product-front-overlay {
    background: linear-gradient(
      to top,
      rgba(63,16,22,.72) 0%,
      rgba(63,16,22,.30) 36%,
      rgba(63,16,22,.03) 68%
    ) !important;
  }

  /* ─── PRINCESS CAKE FEATURE ────────────────────────────── */
  .vp-layer {
    transition: transform .25s ease, box-shadow .25s ease;
  }
  .vp-layer:hover {
    transform: translateX(8px);
    box-shadow: -4px 0 0 var(--vp-muted);
  }

  .vp-square-box { border-radius: 0 !important; }

  .vp-feature-media {
    position: relative;
  }

  .vp-feature-main-img {
    width: 100%;
    height: 580px;
    object-fit: cover;
    object-position: center top;
    display: block;
  }

  .vp-feature-slide-img {
    position: absolute;
    right: -24px;
    bottom: -24px;
    width: 38%;
    height: 260px;
    object-fit: cover;
    object-position: center;
    border: 6px solid var(--vp-cream);
    box-shadow: 0 20px 55px rgba(63,16,22,.30);
    z-index: 3;
  }

  .vp-feature-stamp {
    position: absolute;
    left: 18px;
    top: 18px;
    background: var(--vp-dark);
    color: var(--vp-cream);
    padding: .9rem 1.1rem;
    box-shadow: 0 14px 40px rgba(63,16,22,.32);
    animation: vp-float 4s ease-in-out infinite;
    z-index: 4;
  }

  .vp-trustindex-wrap .ti-widget,
  .vp-trustindex-wrap iframe {
    max-width: 100%;
  }

  /* ─── QUICK ACTIONS (now attached directly to carousel, no divider) ─── */
  .vp-quick-actions {
    background: var(--vp-dark);
    position: relative;
  }

  /* ─── RESPONSIVE ────────────────────────────────────────── */
  @media (max-width: 1024px) {
    .vp-feature-main-img { height: 480px; }

    .vp-feature-slide-img {
      position: relative;
      right: auto;
      bottom: auto;
      width: 60%;
      height: 220px;
      margin: 1.2rem 0 0 auto;
      display: block;
      border: 5px solid var(--vp-cream);
    }

    .vp-feature-stamp {
      position: relative;
      left: auto;
      top: auto;
      margin-bottom: 1rem;
      display: inline-block;
    }
  }

  @media (max-width: 768px) {
    .vp-feature-main-img { height: 360px; }

    .vp-feature-slide-img {
      width: 72%;
      height: 190px;
    }

    .vp-carousel-header { padding: 3.5rem 0 4.5rem; }
  }
</style>

<?php
$vp_products = [
  [
    'name'       => 'Princess Cake',
    'badge'      => 'Signature',
    'desc'       => 'Vanilla sponge, triple sec, raspberry jam, pastry cream — draped in green marzipan. Made the same way since 1914.',
    'price'      => 'Slice $6.75',
    'price_full' => 'Sheet from $82.99',
    'href'       => '#princess-cake',
    'img'        => '/wp-content/uploads/2026/04/DSC03847.jpg',
  ],
  [
    'name'       => 'Cannoli',
    'badge'      => 'Nominated Best in SF',
    'desc'       => 'Crisp shell, sweetened ricotta, chocolate chips. Nominated Best Cannoli in San Francisco.',
    'price'      => '$7.50 each',
    'price_full' => null,
    'href'       => '#order',
    'img'        => '/wp-content/uploads/2026/04/DSC04171.jpg',
  ],
  [
    'name'       => 'St. Honore',
    'badge'      => null,
    'desc'       => 'A classic from the original 1914 recipes. Puff pastry, pastry cream, caramelized choux.',
    'price'      => 'Slice $7.50',
    'price_full' => null,
    'href'       => '#order',
    'img'        => '/wp-content/uploads/2026/04/DSC03618.jpg',
  ],
];
?>

<main class="vp-home" style="background:var(--vp-cream); color:var(--vp-text); overflow:hidden;">

  <!-- HERO — VIDEO BACKGROUND -->
  <section class="vp-hero">

    <!-- Video layer -->
    <div class="vp-hero-video">
      <video autoplay muted loop playsinline preload="auto">
        <source src="/wp-content/uploads/2026/04/Diseno-sin-titulo.mp4" type="video/mp4">
      </video>
    </div>

    <!-- Dark gradient overlay -->
    <div class="vp-hero-overlay"></div>

    <!-- Grain texture -->
    <div class="vp-hero-grain"></div>

    <!-- Copy -->
    <div class="vp-hero-content">

      <div class="vp-hero-eyebrow flex flex-wrap items-center gap-3 mb-7">
        <span class="vp-label" style="color:var(--vp-rose);">North Beach, San Francisco</span>
        <span style="width:4px; height:4px; background:var(--vp-rose); opacity:.5;"></span>
        <span class="vp-label" style="color:var(--vp-rose);">Est. 1914</span>
      </div>

      <div class="vp-hero-rule mb-8" style="width:72px; height:2px; background:var(--vp-rose);"></div>

      <h1 class="vp-hero-title vp-heading" style="font-size:clamp(3rem,5.5vw,5.8rem); color:var(--vp-cream); margin:0 0 1.65rem;">
        Authentic<br>Since 1914.
      </h1>

      <p class="vp-hero-sub vp-body" style="font-size:clamp(.95rem,1.4vw,1.08rem); color:rgba(254,239,220,.78); max-width:44ch; margin:0 0 2.75rem;">
        Over a century of Italian pastry, made the same way — by Italian families who understood that some recipes should never change.
      </p>

      <div class="vp-hero-ctas flex flex-wrap gap-4">
        <a href="#order" class="vp-btn vp-btn-primary">Order Pickup</a>
        <a href="#catering" class="vp-btn vp-btn-outline">Catering</a>
      </div>

    </div>

    <!-- Est. badge bottom-right -->
    <div class="vp-hero-badge vp-square-box">
      <div class="vp-label" style="color:var(--vp-rose); font-size:.52rem; margin-bottom:4px;">North Beach</div>
      <div class="vp-heading" style="font-size:1.1rem; color:var(--vp-cream);">700 Filbert St.</div>
    </div>

  </section>

  <!-- QUICK ACTIONS — directly attached to carousel section, no divider -->
  <section class="vp-quick-actions">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-2 lg:grid-cols-4">
        <?php
        $qa_items = [
          ['label'=>'Order Pickup',   'body'=>'Same-day pickup',    'sub'=>'700 Filbert St',   'href'=>'#menu'],
          ['label'=>'Catering',       'body'=>'Weddings · Events',  'sub'=>'Delivery 50 miles','href'=>'#catering'],
          ['label'=>'Princess Cake',  'body'=>"SF's most beloved",  'sub'=>'Italian cake',     'href'=>'#princess-cake'],
          ['label'=>'Visit Us',       'body'=>'Open daily 7am–8pm', 'sub'=>'North Beach, SF',  'href'=>'#visit'],
        ];
        foreach ($qa_items as $item) :
        ?>
          <a href="<?php echo esc_attr($item['href']); ?>" class="vp-qa-card vp-reveal no-underline px-5 py-8 text-center flex flex-col items-center gap-2" style="border-right:1px solid rgba(254,239,220,.08); border-bottom:1px solid rgba(254,239,220,.08);">
            <span class="vp-label" style="color:var(--vp-rose);"><?php echo esc_html($item['label']); ?></span>
            <span class="vp-body" style="font-size:.82rem; color:rgba(254,239,220,.74); line-height:1.45;"><?php echo esc_html($item['body']); ?></span>
            <span style="font-family:'Lato',sans-serif; font-size:.73rem; color:rgba(254,239,220,.45); letter-spacing:.06em;"><?php echo esc_html($item['sub']); ?></span>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- PRODUCT CAROUSEL -->
<section id="menu" class="vp-carousel-section">

    <!-- Dark header band with headline -->
    <div class="vp-carousel-header">
      <div class="max-w-7xl mx-auto px-6 vp-reveal" style="position:relative; z-index:2;">
        <div class="vp-ornament mb-5">
          <span class="vp-label" style="color:var(--vp-rose);">From Our Cases</span>
        </div>
        <h2 class="vp-heading" style="font-size:clamp(2.4rem,5vw,4rem); color:var(--vp-cream); margin:0 0 1.1rem;">
          Made Fresh.<br>Every Morning.
        </h2>
        <p class="vp-body" style="font-size:.92rem; color:rgba(254,239,220,.58); max-width:46ch; margin:0;">
          Italian pastry made from scratch — the same recipes, the same hands, since 1914.
        </p>
      </div>
    </div>

    <!-- Cards pulling up over the dark band -->
    <div class="vp-carousel-cards">
      <div class="max-w-7xl mx-auto px-6">
        <div class="vp-carousel flex xl:grid xl:grid-cols-3 gap-8 overflow-x-auto pb-2 xl:overflow-visible xl:pb-0">
          <?php foreach ($vp_products as $p) : ?>
            <div class="vp-flip-card vp-reveal flex-shrink-0 relative [perspective:1000px] cursor-pointer" style="height:460px; min-width:340px;" onclick="this.classList.toggle('is-flipped')">
              <div class="vp-flip-inner group absolute w-full h-full [transform-style:preserve-3d] [transition:transform_0.75s_cubic-bezier(0.4,0.2,0.2,1)] hover:[transform:rotateY(180deg)]">

                <!-- FRONT -->
                <div class="vp-product-front absolute w-full h-full overflow-hidden [backface-visibility:hidden]">
                  <img src="<?php echo esc_url($p['img']); ?>" alt="<?php echo esc_attr($p['name']); ?>" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center;">
                  <div class="vp-product-front-overlay" style="position:absolute; inset:0;"></div>

                  <?php if ($p['badge']) : ?>
                    <div class="vp-label" style="position:absolute; top:1rem; right:1rem; color:var(--vp-dark); background:rgba(254,239,220,.94); border:1px solid rgba(63,16,22,.18); padding:7px 12px; border-radius:0; font-size:.55rem;">
                      <?php echo esc_html($p['badge']); ?>
                    </div>
                  <?php endif; ?>

                  <div style="position:absolute; bottom:0; left:0; right:0; padding:1.75rem;">
                    <h3 class="vp-heading" style="font-size:1.9rem; color:var(--vp-cream); margin:0 0 .65rem;">
                      <?php echo esc_html($p['name']); ?>
                    </h3>
                    <p class="vp-label" style="color:rgba(254,239,220,.72); margin:0;">↻ Discover</p>
                  </div>
                </div>

                <!-- BACK -->
                <div class="vp-product-back absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]" style="background:var(--vp-dark); overflow:hidden;">
                  <div style="height:5px; background:var(--vp-muted);"></div>
                  <div style="padding:1.8rem; height:calc(100% - 5px); display:flex; flex-direction:column; gap:1rem;">
                    <?php if ($p['badge']) : ?>
                      <span class="vp-label" style="align-self:flex-start; color:var(--vp-rose); border:1px solid rgba(214,188,173,.45); border-radius:0; padding:6px 12px; font-size:.55rem;">
                        <?php echo esc_html($p['badge']); ?>
                      </span>
                    <?php endif; ?>

                    <h3 class="vp-heading" style="font-size:1.65rem; color:var(--vp-cream); margin:0;">
                      <?php echo esc_html($p['name']); ?>
                    </h3>

                    <div style="height:1px; background:rgba(254,239,220,.14);"></div>

                    <p class="vp-body" style="font-size:.88rem; color:rgba(254,239,220,.74); margin:0; flex:1;">
                      <?php echo esc_html($p['desc']); ?>
                    </p>

                    <div style="border-top:1px solid rgba(254,239,220,.12); border-bottom:1px solid rgba(254,239,220,.12); padding:.8rem 0;">
                      <div class="vp-heading" style="font-size:1.12rem; color:var(--vp-rose);">
                        <?php echo esc_html($p['price']); ?>
                      </div>
                      <?php if ($p['price_full']) : ?>
                        <div class="vp-body" style="font-size:.74rem; color:rgba(254,239,220,.48);">
                          <?php echo esc_html($p['price_full']); ?>
                        </div>
                      <?php endif; ?>
                    </div>

                    <a href="<?php echo esc_url($p['href']); ?>" class="vp-card-cta vp-label" style="display:block; text-align:center; text-decoration:none; color:var(--vp-cream); background:var(--vp-wine); padding:13px 18px; border-radius:0;">
                      Order Pickup
                    </a>
                  </div>
                </div>

              </div>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </section>

  <!-- PRINCESS CAKE FEATURE -->
  <section id="princess-cake" style="background:var(--vp-rose); padding:7rem 0; position:relative; overflow:hidden;">
    <div style="position:absolute; right:-4%; top:8%; font-family:'Playfair Display',serif; font-style:italic; font-size:clamp(6rem,15vw,14rem); color:var(--vp-dark); opacity:.06; pointer-events:none;">Princess</div>

    <div class="max-w-7xl mx-auto px-6 relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        <!-- LEFT: Media block -->
        <div class="vp-reveal vp-feature-media" style="position:relative; padding-bottom:2rem; padding-right:2rem;">

          <div class="vp-feature-stamp vp-square-box">
            <div class="vp-label" style="color:var(--vp-rose); font-size:.56rem;">Our Signature</div>
            <div class="vp-heading" style="font-size:1.25rem;">Since 1914.</div>
          </div>

          <div class="vp-square-box" style="overflow:hidden; box-shadow:0 30px 80px rgba(63,16,22,.26); border:8px solid rgba(254,239,220,.30);">
            <img class="vp-feature-main-img" src="/wp-content/uploads/2026/04/DSC03841-rotated.jpg" alt="Victoria Pastry Princess Cake">
          </div>

          <img class="vp-feature-slide-img" src="/wp-content/uploads/2026/04/DSC04197.jpg" alt="Princess Cake slice at Victoria Pastry">
        </div>

        <!-- RIGHT: Copy -->
        <div class="vp-reveal">
          <div class="vp-ornament mb-5">
            <span class="vp-label" style="color:var(--vp-muted);">Our Signature</span>
          </div>

          <h2 class="vp-heading" style="font-size:clamp(2.1rem,4.5vw,3.5rem); color:var(--vp-dark); margin:0 0 1.8rem;">
            The Princess Cake.<br>Since 1914.
          </h2>

          <p class="vp-body" style="font-size:.98rem; color:rgba(63,16,22,.76); max-width:48ch; margin:0 0 2.2rem;">
            San Francisco has been celebrating with this cake for over a century. Vanilla sponge, triple sec, raspberry jam, pastry cream — draped in green marzipan. Every layer made from scratch. Every time.
          </p>

          <div class="vp-square-box" style="background:rgba(254,239,220,.52); border:1px solid rgba(63,16,22,.12); padding:1.4rem; margin-bottom:2rem;">
            <?php
            $layers = [
              'Green marzipan dome',
              'Pastry cream',
              'Raspberry jam',
              'Vanilla sponge & triple sec',
            ];
            foreach ($layers as $i => $layer) :
            ?>
              <div class="vp-layer vp-square-box" style="display:flex; align-items:center; justify-content:space-between; gap:1rem; background:<?php echo $i === 0 ? 'var(--vp-wine)' : 'var(--vp-cream)'; ?>; color:<?php echo $i === 0 ? 'var(--vp-cream)' : 'var(--vp-dark)'; ?>; border:1px solid rgba(63,16,22,.12); padding:.85rem 1rem; margin-bottom:.55rem;">
                <span class="vp-body" style="font-size:.82rem; line-height:1.4;"><?php echo esc_html($layer); ?></span>
                <span class="vp-label" style="font-size:.52rem; opacity:.6;">Layer <?php echo $i + 1; ?></span>
              </div>
            <?php endforeach; ?>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <?php
            $prices = [
              ['label'=>'Slice',      'value'=>'$6.75'],
              ['label'=>'Sheet Cake', 'value'=>'From $82.99'],
              ['label'=>'Custom',     'value'=>'Call us'],
            ];
            foreach ($prices as $pr) :
            ?>
              <div style="border-top:2px solid var(--vp-wine); padding-top:.8rem;">
                <div class="vp-label" style="color:rgba(63,16,22,.55); font-size:.58rem;"><?php echo esc_html($pr['label']); ?></div>
                <div class="vp-heading" style="font-size:1.1rem; color:var(--vp-dark);"><?php echo esc_html($pr['value']); ?></div>
              </div>
            <?php endforeach; ?>
          </div>

          <a href="#order" class="vp-btn vp-btn-dark">Order the Princess Cake</a>
        </div>

      </div>
    </div>
  </section>

  <!-- PICKUP + CATERING -->
  <section id="order" style="background:var(--vp-dark); padding:7rem 0; position:relative; overflow:hidden;">
    <div class="max-w-7xl mx-auto px-6 relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div class="vp-reveal vp-square-box" style="background:rgba(254,239,220,.06); border:1px solid var(--vp-light-border); padding:2.4rem;">
          <div class="vp-label mb-4" style="color:var(--vp-rose);">Ready When You Are</div>
          <h2 class="vp-heading" style="font-size:clamp(2rem,4vw,3rem); color:var(--vp-cream); margin:0 0 1.3rem;">Order Pickup</h2>
          <p class="vp-body" style="color:rgba(254,239,220,.74); margin:0 0 1.6rem;">
            Skip the wait. Order ahead and pick up at 700 Filbert St, North Beach. Open daily, 7am to 8pm.
          </p>
          <ul style="list-style:none; padding:0; margin:0 0 2rem; display:flex; flex-direction:column; gap:.8rem;">
            <?php foreach (['Same-day orders welcome','Full menu: cakes, pastries, cookies by the pound','ADA accessible · Outdoor seating'] as $b) : ?>
              <li class="vp-body" style="display:flex; gap:.75rem; color:rgba(254,239,220,.7); font-size:.88rem; line-height:1.55;">
                <span style="width:6px; height:6px; border-radius:0; background:var(--vp-rose); margin-top:8px; flex-shrink:0;"></span>
                <?php echo esc_html($b); ?>
              </li>
            <?php endforeach; ?>
          </ul>
          <a href="#visit" class="vp-btn vp-btn-primary">Start Your Order</a>
        </div>

        <div id="catering" class="vp-reveal vp-square-box" style="background:var(--vp-cream); border:1px solid rgba(254,239,220,.16); padding:2.4rem;">
          <div class="vp-label mb-4" style="color:var(--vp-muted);">Weddings · Events · Corporate</div>
          <h2 class="vp-heading" style="font-size:clamp(2rem,4vw,3rem); color:var(--vp-dark); margin:0 0 1.3rem;">Catering &<br>Custom Orders</h2>
          <p class="vp-body" style="color:var(--vp-text-soft); margin:0 0 1.6rem;">
            From intimate celebrations to large events — we deliver anywhere within 50 miles, including Marin, Peninsula, and Napa.
          </p>
          <ul style="list-style:none; padding:0; margin:0 0 2rem; display:flex; flex-direction:column; gap:.8rem;">
            <?php foreach (['Wedding cakes · Anniversary cakes · Corporate gifting','Delivery up to 50 miles — SF, Marin, Napa, Peninsula','Custom orders: (415) 781-2015'] as $b) : ?>
              <li class="vp-body" style="display:flex; gap:.75rem; color:var(--vp-text-soft); font-size:.88rem; line-height:1.55;">
                <span style="width:6px; height:6px; border-radius:0; background:var(--vp-wine); margin-top:8px; flex-shrink:0;"></span>
                <?php echo esc_html($b); ?>
              </li>
            <?php endforeach; ?>
          </ul>
          <a href="#contact" class="vp-btn vp-btn-dark">Inquire About Catering</a>
        </div>

      </div>
    </div>
  </section>

  <!-- REVIEWS / TRUSTINDEX -->
  <section style="background:var(--vp-cream); padding:6rem 0;">
    <div class="max-w-7xl mx-auto px-6">
      <div class="vp-reveal text-center mb-10">
        <div class="vp-ornament mb-4">
          <span class="vp-label">From Our Guests</span>
        </div>
        <h2 class="vp-heading" style="font-size:clamp(2rem,4vw,3.2rem); color:var(--vp-dark); margin:0;">
          North Beach, Remembered Daily.
        </h2>
      </div>
      <div class="vp-trustindex-wrap vp-reveal">
        <?php echo do_shortcode('[trustindex no-registration=google]'); ?>
      </div>
    </div>
  </section>

  <!-- BRAND QUOTE -->
  <section style="background:linear-gradient(135deg, var(--vp-wine) 0%, #7a4650 55%, var(--vp-muted) 100%); padding:7rem 0; position:relative; overflow:hidden;">
    <div style="position:absolute; inset:0; background:
  radial-gradient(ellipse 70% 70% at 50% 45%, rgba(254,239,220,.16), transparent 70%),
  linear-gradient(180deg, rgba(254,239,220,.04), rgba(63,16,22,.18));
"></div>
    <div class="max-w-4xl mx-auto px-6 text-center relative vp-reveal">
      <div style="font-family:'Playfair Display',serif; font-size:6rem; line-height:.6; color:var(--vp-rose); opacity:.38;">&ldquo;</div>
      <blockquote class="vp-heading" style="font-size:clamp(1.25rem,2.6vw,1.75rem); line-height:1.65; font-weight:400; color:var(--vp-cream); margin:0 0 2.7rem;">
        Victoria Pastry Company was born in North Beach in 1914 — and has been passed down through generations of Italian families ever since, each one committed to the same authentic recipes, original flavors, and quality ingredients. Over a century later, nothing has changed.
      </blockquote>
      <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:.9rem; align-items:center;">
        <?php
        $badges = ['SF Business Legendary', 'Nominated Best Cannoli in San Francisco', 'Est. 1914'];
        foreach ($badges as $i => $badge) :
          if ($i > 0) : ?>
            <span style="width:4px; height:4px; border-radius:0; background:var(--vp-rose); opacity:.6;"></span>
          <?php endif; ?>
          <span class="vp-label" style="color:rgba(254,239,220,.72); font-size:.58rem;"><?php echo esc_html($badge); ?></span>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- VISIT -->
  <section id="visit" style="background:var(--vp-dark); position:relative; overflow:hidden;">

    <div style="position:absolute; inset:0; z-index:0;">
      <video
        autoplay
        muted
        loop
        playsinline
        style="width:100%; height:100%; object-fit:cover; object-position:center;">
        <source src="/wp-content/uploads/2026/04/C0043.mp4" type="video/mp4">
      </video>
      <div style="position:absolute; inset:0; background:
  linear-gradient(90deg, rgba(63,16,22,.84) 0%, rgba(63,16,22,.62) 55%, rgba(63,16,22,.26) 100%),
  linear-gradient(180deg, rgba(101,51,60,.18), rgba(63,16,22,.55));
"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative vp-reveal" style="z-index:2; padding-top:6.5rem; padding-bottom:6.5rem;">

      <div class="vp-label mb-5" style="color:var(--vp-rose);">Visit Us</div>

      <h2 class="vp-heading" style="font-size:clamp(2.2rem,5vw,3.8rem); color:var(--vp-cream); margin:0 0 1.4rem; max-width:18ch;">
        700 Filbert St,<br>North Beach.
      </h2>

      <p class="vp-body" style="font-size:.95rem; color:rgba(254,239,220,.68); margin:0 0 2.6rem; max-width:36ch;">
        Open Daily 7:00 AM – 8:00 PM &nbsp;·&nbsp; (415) 781-2015
      </p>

      <div class="flex flex-wrap gap-4">
        <a href="tel:+14157812015" class="vp-btn vp-btn-primary">Call Us</a>
        <a href="https://www.google.com/maps/search/?api=1&query=700%20Filbert%20St%20San%20Francisco%20CA%2094133"
           target="_blank" rel="noopener" class="vp-btn vp-btn-outline">Get Directions</a>
      </div>

    </div>
  </section>

</main>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".vp-reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    reveals.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index * 55, 220)}ms`;
      observer.observe(el);
    });
  });
</script>

<?php get_footer(); ?>