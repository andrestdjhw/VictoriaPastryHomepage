<?php
/* Template Name: Home */
get_header();
?>

<!-- ═══════════════════════════════════════════
     VICTORIA PASTRY CO. — HOME TEMPLATE
════════════════════════════════════════════ -->

<style>
  @keyframes vp-fade-up {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes vp-line-grow {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }

  .vp-hero-eyebrow  { animation: vp-fade-up  .7s  ease both; animation-delay: .1s; }
  .vp-hero-headline { animation: vp-fade-up  .85s ease both; animation-delay: .28s; }
  .vp-hero-sub      { animation: vp-fade-up  .8s  ease both; animation-delay: .44s; }
  .vp-hero-ctas     { animation: vp-fade-up  .75s ease both; animation-delay: .58s; }
  .vp-hero-rule     { animation: vp-line-grow .9s ease both; animation-delay: .15s; transform-origin: left; }

  .vp-grain::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
    pointer-events: none;
    opacity: .55;
  }

  .vp-qa-card { transition: background-color .25s ease, transform .25s ease; }
  .vp-qa-card:hover { background-color: rgba(198,156,60,0.12) !important; transform: translateY(-2px); }

  .vp-layer { transition: transform .25s ease, box-shadow .25s ease; }
  .vp-layer:hover { transform: translateX(8px); box-shadow: -4px 0 0 #C69C3C; }

  .vp-btn-primary { transition: background-color .22s ease, color .22s ease, transform .18s ease; }
  .vp-btn-primary:hover { background-color: #C69C3C !important; color: #3B2314 !important; transform: translateY(-1px); }

  .vp-btn-secondary { transition: background-color .22s ease, color .22s ease, border-color .22s ease; }
  .vp-btn-secondary:hover { background-color: #3B2314 !important; color: #F5EFE0 !important; }

  .vp-gold-link { transition: color .2s ease; }
  .vp-gold-link:hover { color: #F5EFE0 !important; }

  .vp-ornament { display: inline-flex; align-items: center; gap: .6rem; color: #C69C3C; }
  .vp-ornament::before, .vp-ornament::after { content: ""; display: block; width: 28px; height: 1px; background-color: currentColor; opacity: .6; }

  .vp-carousel { scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; }
  .vp-carousel > * { scroll-snap-align: start; }

  .vp-quote-marks { font-family: 'Playfair Display', serif; font-size: 6rem; line-height: .6; color: #C69C3C; opacity: .3; user-select: none; }

  /* ── HERO SLIDESHOW ── */
  @keyframes vp-slide-fade {
    0%      { opacity: 0; }
    5.56%   { opacity: 1; }
    27.78%  { opacity: 1; }
    33.33%  { opacity: 0; }
    100%    { opacity: 0; }
  }
  @keyframes vp-kb-1 {
    0%   { transform: scale(1.00) translate(  0%,   0%); }
    100% { transform: scale(1.08) translate( -2%,  -1%); }
  }
  @keyframes vp-kb-2 {
    0%   { transform: scale(1.06) translate(  1%, 0.5%); }
    100% { transform: scale(1.00) translate( -1%,-1.5%); }
  }
  @keyframes vp-kb-3 {
    0%   { transform: scale(1.04) translate(-0.5%,  1%); }
    100% { transform: scale(1.10) translate( 1.5%,-0.5%); }
  }

  /* wrapper div that animates */
  .vp-slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    will-change: opacity, transform;
    overflow: hidden;
  }
  /* img fills the wrapper; Ken Burns is on the wrapper */
  .vp-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  .vp-slide:nth-child(1) { animation: vp-slide-fade 18s ease-in-out infinite 0s,  vp-kb-1 18s ease-in-out infinite 0s; }
  .vp-slide:nth-child(2) { animation: vp-slide-fade 18s ease-in-out infinite 6s,  vp-kb-2 18s ease-in-out infinite 6s; }
  .vp-slide:nth-child(3) { animation: vp-slide-fade 18s ease-in-out infinite 12s, vp-kb-3 18s ease-in-out infinite 12s; }

  .vp-slide-blend-left {
    position: absolute; inset: 0;
    background: linear-gradient(to right, #F5EFE0 0%, rgba(245,239,224,.6) 12%, transparent 35%);
    pointer-events: none; z-index: 2;
  }
  .vp-slide-blend-bottom {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(59,35,20,.35) 0%, transparent 50%);
    pointer-events: none; z-index: 2;
  }

  @keyframes vp-dot-pulse {
    0%      { opacity: .35; transform: scale(1); }
    5.56%   { opacity: 1;   transform: scale(1.4); }
    27.78%  { opacity: 1;   transform: scale(1.4); }
    33.33%  { opacity: .35; transform: scale(1); }
    100%    { opacity: .35; transform: scale(1); }
  }

  /* ── FLIP CARDS ── */
  .vp-flip-card.is-flipped .vp-flip-inner { transform: rotateY(180deg); }
  .vp-card-cta { transition: background-color .2s ease, color .2s ease; }
  .vp-card-cta:hover { background-color: #C69C3C !important; color: #3B2314 !important; }
  @keyframes vp-hint-bounce {
    0%, 100% { transform: translateY(0);   opacity: .55; }
    50%       { transform: translateY(-3px); opacity: .9; }
  }
  .vp-flip-hint { animation: vp-hint-bounce 2.2s ease-in-out infinite; }
</style>


<!-- ████████████████████████████████████████
     §1  HERO
████████████████████████████████████████ -->
<?php
/*
 * HERO SLIDESHOW IMAGES
 * Cambia cada 'src' por la ruta de tu imagen.
 * Puedes usar /wp-content/uploads/... o get_template_directory_uri() . '/images/...'
 */
$vp_hero_slides = [
  [
    'src' => '/wp-content/uploads/2026/04/HeroVPastry1-scaled.jpg',
    'alt' => 'Victoria Pastry — slide 1',
  ],
  [
    'src' => '/wp-content/uploads/2026/04/HeroVPastry1-scaled.jpg', /* ← cambia por slide 2 */
    'alt' => 'Victoria Pastry — slide 2',
  ],
  [
    'src' => '/wp-content/uploads/2026/04/HeroVPastry1-scaled.jpg', /* ← cambia por slide 3 */
    'alt' => 'Victoria Pastry — slide 3',
  ],
];
?>

<section class="vp-grain relative" style="background-color:#F5EFE0; min-height:calc(100vh - 68px); display:grid; grid-template-columns:1fr; overflow:hidden;">
  <div class="grid grid-cols-1 lg:grid-cols-2" style="min-height:calc(100vh - 68px);">

    <!-- LEFT — text -->
    <div style="background-color:#F5EFE0; background-image:radial-gradient(ellipse 80% 60% at 0% 100%, rgba(198,156,60,.07) 0%, transparent 65%); display:flex; align-items:center; padding:calc(54px + 4rem) 3.5rem 4rem; position:relative; z-index:1;">
      <div class="hidden lg:block absolute left-8 top-0 bottom-0 w-px" style="background:linear-gradient(to bottom, transparent, rgba(198,156,60,.25), transparent);"></div>
      <div style="max-width:520px; width:100%;">

        <div class="vp-hero-eyebrow flex flex-wrap items-center gap-3 mb-7">
          <span style="font-family:'Lato',sans-serif; font-weight:300; font-size:.68rem; letter-spacing:.22em; text-transform:uppercase; color:#B85C38;">North Beach, San Francisco</span>
          <span style="display:inline-block; width:3px; height:3px; border-radius:50%; background:#C69C3C; opacity:.7;"></span>
          <span style="font-family:'Lato',sans-serif; font-weight:300; font-size:.68rem; letter-spacing:.22em; text-transform:uppercase; color:#B85C38;">Est. 1914</span>
        </div>

        <div class="vp-hero-rule mb-8" style="width:56px; height:1.5px; background:#C69C3C;"></div>

        <h1 class="vp-hero-headline" style="font-family:'Playfair Display',serif; font-style:italic; font-weight:700; font-size:clamp(2.8rem,5.5vw,5.5rem); line-height:1.0; letter-spacing:-.02em; color:#3B2314; margin-bottom:1.75rem;">Authentic<br>Since 1914.</h1>

        <p class="vp-hero-sub" style="font-family:'Lato',sans-serif; font-weight:300; font-size:clamp(.875rem,1.4vw,1rem); line-height:1.85; color:rgba(59,35,20,.6); margin-bottom:2.75rem; max-width:42ch;">Over a century of Italian pastry, made the same way — by Italian families who understood that some recipes should never change.</p>

        <div class="vp-hero-ctas flex flex-wrap items-center gap-4">
          <a href="#order" class="vp-btn-primary" style="font-family:'Lato',sans-serif; font-weight:400; font-size:.78rem; letter-spacing:.16em; text-transform:uppercase; text-decoration:none; display:inline-block; padding:14px 36px; background-color:#3B2314; color:#F5EFE0; border-radius:2px;">Order Pickup</a>
          <a href="#catering" class="vp-btn-secondary" style="font-family:'Lato',sans-serif; font-weight:300; font-size:.78rem; letter-spacing:.16em; text-transform:uppercase; text-decoration:none; display:inline-block; padding:13px 36px; border:1.5px solid #3B2314; color:#3B2314; border-radius:2px;">Catering</a>
        </div>

      </div>
    </div><!-- /left -->

    <!-- RIGHT — slideshow -->
    <div class="relative overflow-hidden" style="min-height:380px;">

      <?php foreach ( $vp_hero_slides as $slide ) : ?>
      <div class="vp-slide">
        <img
          src="<?php echo esc_url( $slide['src'] ); ?>"
          alt="<?php echo esc_attr( $slide['alt'] ); ?>"
        />
      </div>
      <?php endforeach; ?>

      <div class="vp-slide-blend-left hidden lg:block"></div>
      <div class="vp-slide-blend-bottom lg:hidden"></div>

      <!-- dots -->
      <div style="position:absolute; bottom:1.25rem; left:50%; transform:translateX(-50%); display:flex; gap:.5rem; z-index:3;" aria-hidden="true">
        <?php foreach ( $vp_hero_slides as $i => $slide ) : $dot_delay = $i * 6; ?>
        <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:#F5EFE0; opacity:.35; animation:vp-dot-pulse 18s infinite <?php echo $dot_delay; ?>s;"></span>
        <?php endforeach; ?>
      </div>

    </div><!-- /right -->
  </div>
</section>


<!-- ████████████████████████████████████████
     §2  QUICK ACTIONS BAR
████████████████████████████████████████ -->

<style>
  /*
   * Uiverse pattern by csemszepp — adapted palette:
   *   --c1 #f7d2a1 (light peach) → #C69C3C gold
   *   --c2 #05057e (deep blue)   → #2A180E espresso dark
   */
  .vp-qa-pattern {
    --s:  150px;
    --c1: #C69C3C;
    --c2: #2A180E;
    --_g: var(--c1) 0% 5%, var(--c2) 6% 15%, var(--c1) 16% 25%, var(--c2) 26% 35%,
          var(--c1) 36% 45%, var(--c2) 46% 55%, var(--c1) 56% 65%, var(--c2) 66% 75%,
          var(--c1) 76% 85%, var(--c2) 86% 95%, #0000 96%;
    position: absolute;
    inset: 0;
    opacity: 0.10;
    pointer-events: none;
    background:
      radial-gradient(50% 50% at 100% 0,   var(--_g)),
      radial-gradient(50% 50% at 0 100%,   var(--_g)),
      radial-gradient(50% 50%,             var(--_g)),
      radial-gradient(50% 50%,             var(--_g)) calc(var(--s) / 2) calc(var(--s) / 2) var(--c1);
    background-size: var(--s) var(--s);
  }
</style>

<section style="background-color:#3B2314; position:relative; z-index:1;">

  <!-- Uiverse burst pattern -->
  <div class="vp-qa-pattern" aria-hidden="true"></div>
  <div style="height:2px; background:linear-gradient(90deg,transparent,#C69C3C,transparent); opacity:.5;"></div>
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-2 lg:grid-cols-4">
      <?php
      $qa_items = [
        [ 'glyph'=>'🥐', 'label'=>'Order Pickup',  'body'=>'Same-day pickup',    'sub'=>'700 Filbert St',    'href'=>'#order',         'border'=>true  ],
        [ 'glyph'=>'🎂', 'label'=>'Catering',       'body'=>'Weddings · Events',  'sub'=>'Delivery 50 miles', 'href'=>'#catering',      'border'=>true  ],
        [ 'glyph'=>'✦',  'label'=>'Princess Cake',  'body'=>"SF's most beloved",  'sub'=>'Italian cake',      'href'=>'#princess-cake', 'border'=>true  ],
        [ 'glyph'=>'📍', 'label'=>'Visit Us',        'body'=>'Open daily 7am–8pm', 'sub'=>'North Beach, SF',   'href'=>'#visit',         'border'=>false ],
      ];
      foreach ($qa_items as $item) :
        $border_r = $item['border'] ? 'border-r border-r-[rgba(245,239,224,0.07)]' : '';
      ?>
      <a href="<?php echo esc_attr($item['href']); ?>" class="vp-qa-card <?php echo $border_r; ?> flex flex-col items-center text-center gap-2 px-5 py-8 no-underline" style="background-color:transparent; border-bottom:1px solid rgba(245,239,224,.06);">
        <span style="font-size:1.4rem; opacity:.85; margin-bottom:2px;"><?php echo $item['glyph']; ?></span>
        <span style="font-family:'Lato',sans-serif; font-weight:400; font-size:.7rem; letter-spacing:.18em; text-transform:uppercase; color:#C69C3C;"><?php echo esc_html($item['label']); ?></span>
        <span style="font-family:'Lato',sans-serif; font-weight:300; font-size:.78rem; color:rgba(245,239,224,.65); line-height:1.5;"><?php echo esc_html($item['body']); ?></span>
        <span style="font-family:'Lato',sans-serif; font-weight:300; font-size:.72rem; color:rgba(245,239,224,.35); letter-spacing:.05em;"><?php echo esc_html($item['sub']); ?></span>
      </a>
      <?php endforeach; ?>
    </div>
  </div>
  <div style="height:1px; background:linear-gradient(90deg,transparent,rgba(198,156,60,.2),transparent);"></div>
</section>


<!-- ████████████████████████████████████████
     §3  PRODUCT CAROUSEL — FLIP CARDS
████████████████████████████████████████ -->
<section style="background-color:#FAF6ED; padding:6rem 0;">

  <div class="max-w-6xl mx-auto px-6 mb-14">
    <div class="vp-ornament mb-4">
      <span style="font-family:'Lato',sans-serif; font-weight:300; font-size:.65rem; letter-spacing:.26em; text-transform:uppercase; color:#C69C3C;">From Our Cases</span>
    </div>
    <h2 style="font-family:'Playfair Display',serif; font-style:italic; font-weight:700; font-size:clamp(2rem,4.5vw,3.2rem); color:#3B2314; line-height:1.1;">Made Fresh.<br>Every Morning.</h2>
  </div>

  <div class="max-w-6xl mx-auto px-6">
    <div class="vp-carousel flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto pb-6 lg:overflow-visible lg:pb-0">

      <?php
      $products = [
        [
          'name'       => 'Princess Cake',
          'badge'      => 'Signature',
          'badge_c'    => '#6B8F3A',
          'desc'       => 'Vanilla sponge, triple sec, raspberry jam, pastry cream — draped in green marzipan. Made the same way since 1914.',
          'price'      => 'Slice $6.75',
          'price_full' => 'Sheet from $82.99',
          'href'       => '#princess-cake',
          'accent'     => '#6B8F3A',
          'img'        => '/wp-content/uploads/2026/04/PrincesCake-scaled.jpg',
        ],
        [
          'name'       => 'Cannoli',
          'badge'      => 'Best in SF',
          'badge_c'    => '#B85C38',
          'desc'       => 'Crisp shell, sweetened ricotta, chocolate chips. Nominated Best Cannoli in San Francisco.',
          'price'      => '$7.50 each',
          'price_full' => null,
          'href'       => '#order',
          'accent'     => '#B85C38',
          'img'        => '/wp-content/uploads/2026/04/Canoli-scaled.jpg',
        ],
        [
          'name'       => 'St. Honoré',
          'badge'      => null,
          'badge_c'    => null,
          'desc'       => 'A classic from the original 1914 recipes. Puff pastry, pastry cream, caramelized choux.',
          'price'      => 'Slice $7.50',
          'price_full' => null,
          'href'       => '#order',
          'accent'     => '#C69C3C',
          'img'        => '/wp-content/uploads/2026/04/StHonore-scaled.jpg',
        ],
      ];
      foreach ( $products as $p ) :
      ?>

      <div class="vp-flip-card flex-shrink-0 relative [perspective:1000px] cursor-pointer" style="height:440px; min-width:280px;" onclick="this.classList.toggle('is-flipped')">
        <div class="vp-flip-inner group absolute w-full h-full [transform-style:preserve-3d] [transition:transform_0.75s_cubic-bezier(0.4,0.2,0.2,1)] hover:[transform:rotateY(180deg)]">

          <!-- FRONT -->
          <div class="absolute w-full h-full overflow-hidden [backface-visibility:hidden]" style="border-radius:4px;">
            <img
              src="<?php echo esc_url($p['img']); ?>"
              alt="<?php echo esc_attr($p['name']); ?>"
              style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center;"
            />
            <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(42,18,10,.88) 0%, rgba(42,18,10,.4) 35%, transparent 65%);"></div>
            <div style="position:absolute; top:0; left:0; right:0; height:3px; background:<?php echo esc_attr($p['accent']); ?>;"></div>
            <?php if ($p['badge']) : ?>
            <div style="position:absolute; top:1rem; right:1rem; font-family:'Lato',sans-serif; font-weight:400; font-size:.58rem; letter-spacing:.14em; text-transform:uppercase; color:<?php echo esc_attr($p['badge_c']); ?>; background:rgba(245,239,224,.92); border:1px solid <?php echo esc_attr($p['badge_c']); ?>; padding:4px 9px; border-radius:2px; backdrop-filter:blur(4px);"><?php echo esc_html($p['badge']); ?></div>
            <?php endif; ?>
            <div style="position:absolute; bottom:0; left:0; right:0; padding:1.5rem 1.5rem 1.25rem;">
              <h3 style="font-family:'Playfair Display',serif; font-style:italic; font-weight:700; font-size:1.5rem; color:#F5EFE0; line-height:1.1; margin:0 0 .6rem;"><?php echo esc_html($p['name']); ?></h3>
              <p class="vp-flip-hint" style="font-family:'Lato',sans-serif; font-weight:300; font-size:.62rem; letter-spacing:.18em; text-transform:uppercase; color:rgba(245,239,224,.55); margin:0; display:flex; align-items:center; gap:.4rem;">
                <span style="font-size:.75rem;">↻</span> Discover
              </p>
            </div>
          </div><!-- /front -->

          <!-- BACK -->
          <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]" style="background-color:#2A180E; border-radius:4px; overflow:hidden;">
            <div style="height:3px; background:<?php echo esc_attr($p['accent']); ?>;"></div>
            <div style="position:absolute; inset:0; background:radial-gradient(ellipse 80% 60% at 50% 110%, rgba(198,156,60,.09) 0%, transparent 65%); pointer-events:none;"></div>
            <div style="padding:1.75rem 1.75rem 1.5rem; height:calc(100% - 3px); display:flex; flex-direction:column; gap:1rem; position:relative;">
              <?php if ($p['badge']) : ?>
              <span style="align-self:flex-start; font-family:'Lato',sans-serif; font-weight:400; font-size:.58rem; letter-spacing:.14em; text-transform:uppercase; color:<?php echo esc_attr($p['badge_c']); ?>; border:1px solid <?php echo esc_attr($p['badge_c']); ?>; padding:4px 10px; border-radius:2px;"><?php echo esc_html($p['badge']); ?></span>
              <?php endif; ?>
              <h3 style="font-family:'Playfair Display',serif; font-style:italic; font-weight:700; font-size:1.5rem; color:#F5EFE0; line-height:1.1; margin:0;"><?php echo esc_html($p['name']); ?></h3>
              <div style="height:1px; background:rgba(198,156,60,.25);"></div>
              <p style="font-family:'Lato',sans-serif; font-weight:300; font-size:.82rem; line-height:1.75; color:rgba(245,239,224,.65); margin:0; flex:1;"><?php echo esc_html($p['desc']); ?></p>
              <div style="display:flex; flex-direction:column; gap:.25rem; padding:.75rem 0; border-top:1px solid rgba(245,239,224,.07); border-bottom:1px solid rgba(245,239,224,.07);">
                <span style="font-family:'Playfair Display',serif; font-style:italic; font-size:1.1rem; color:<?php echo esc_attr($p['accent']); ?>;"><?php echo esc_html($p['price']); ?></span>
                <?php if ($p['price_full']) : ?>
                <span style="font-family:'Lato',sans-serif; font-weight:300; font-size:.72rem; letter-spacing:.05em; color:rgba(245,239,224,.35);"><?php echo esc_html($p['price_full']); ?></span>
                <?php endif; ?>
              </div>
              <a href="<?php echo esc_url($p['href']); ?>" class="vp-card-cta" onclick="event.stopPropagation()" style="font-family:'Lato',sans-serif; font-weight:400; font-size:.72rem; letter-spacing:.16em; text-transform:uppercase; text-decoration:none; display:flex; align-items:center; justify-content:center; padding:11px 0; border:1.5px solid <?php echo esc_attr($p['accent']); ?>; color:<?php echo esc_attr($p['accent']); ?>; border-radius:2px; text-align:center;">Order Now</a>
            </div>
          </div><!-- /back -->

        </div>
      </div>

      <?php endforeach; ?>
    </div>
  </div>
</section>


<!-- ████████████████████████████████████████
     §4  PRINCESS CAKE FEATURE
████████████████████████████████████████ -->
<section id="princess-cake" style="background-color:#F5EFE0; padding:7rem 0; position:relative; overflow:hidden;">
  <div style="position:absolute; right:-2%; top:50%; transform:translateY(-50%); font-family:'Playfair Display',serif; font-style:italic; font-size:clamp(6rem,14vw,13rem); color:#6B8F3A; opacity:.04; pointer-events:none; user-select:none; white-space:nowrap; line-height:1;">Princess</div>
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

      <div>
        <div class="vp-ornament mb-5"><span style="font-family:'Lato',sans-serif; font-weight:300; font-size:.65rem; letter-spacing:.26em; text-transform:uppercase; color:#6B8F3A;">Our Signature</span></div>
        <h2 style="font-family:'Playfair Display',serif; font-weight:700; font-size:clamp(1.9rem,4vw,3rem); color:#3B2314; line-height:1.1; margin-bottom:.4rem;">The Princess Cake.</h2>
        <h3 style="font-family:'Playfair Display',serif; font-style:italic; font-weight:400; font-size:clamp(1.2rem,2.5vw,1.6rem); color:#6B8F3A; margin-bottom:1.75rem;">Since 1914.</h3>
        <p style="font-family:'Lato',sans-serif; font-weight:300; font-size:.92rem; line-height:1.85; color:rgba(59,35,20,.7); margin-bottom:2.25rem; max-width:44ch;">San Francisco has been celebrating with this cake for over a century. Vanilla sponge, triple sec, raspberry jam, pastry cream — draped in green marzipan. Every layer made from scratch. Every time.</p>
        <div class="grid grid-cols-3 gap-4 mb-8">
          <?php
          $prices = [
            ['label'=>'Slice',      'price'=>'$6.75'],
            ['label'=>'Sheet Cake', 'price'=>'From $82.99'],
            ['label'=>'Custom',     'price'=>'Call us'],
          ];
          foreach ($prices as $pr) :
          ?>
          <div style="border-top:2px solid #C69C3C; padding-top:.75rem;">
            <div style="font-family:'Lato',sans-serif; font-weight:300; font-size:.62rem; letter-spacing:.15em; text-transform:uppercase; color:rgba(59,35,20,.45); margin-bottom:.25rem;"><?php echo esc_html($pr['label']); ?></div>
            <div style="font-family:'Playfair Display',serif; font-style:italic; font-size:1.05rem; color:#3B2314; font-weight:700;"><?php echo esc_html($pr['price']); ?></div>
          </div>
          <?php endforeach; ?>
        </div>
        <a href="#order" class="vp-btn-primary" style="font-family:'Lato',sans-serif; font-weight:400; font-size:.78rem; letter-spacing:.16em; text-transform:uppercase; text-decoration:none; display:inline-block; padding:14px 32px; background-color:#6B8F3A; color:#F5EFE0; border-radius:2px;">Order the Princess Cake</a>
      </div>

      <div style="position:relative;">
        <div style="background-color:#fff; border:1px solid rgba(59,35,20,.08); border-radius:4px; padding:2.5rem 2rem; box-shadow:0 8px 40px rgba(59,35,20,.08); position:relative; overflow:hidden;">
          <div style="position:absolute; top:0; right:0; width:60px; height:60px; background:linear-gradient(225deg,rgba(107,143,58,.15) 0%,transparent 60%);"></div>
          <div style="font-family:'Lato',sans-serif; font-weight:300; font-size:.62rem; letter-spacing:.22em; text-transform:uppercase; color:rgba(59,35,20,.35); margin-bottom:1.5rem;">Every layer · Made from scratch</div>
          <?php
          $layers = [
            ['label'=>'Green Marzipan Dome',        'color'=>'#6B8F3A', 'text_c'=>'#fff'],
            ['label'=>'Pastry Cream',               'color'=>'#F5EFE0', 'text_c'=>'#3B2314', 'border'=>'rgba(59,35,20,.15)'],
            ['label'=>'Raspberry Jam',              'color'=>'#B85C38', 'text_c'=>'#fff'],
            ['label'=>'Vanilla Sponge & Triple Sec','color'=>'#E8D9B5', 'text_c'=>'#3B2314', 'border'=>'rgba(59,35,20,.15)'],
          ];
          foreach ($layers as $i => $layer) :
            $border_style = isset($layer['border']) ? "border:1px solid {$layer['border']};" : '';
          ?>
          <div class="vp-layer" style="background-color:<?php echo esc_attr($layer['color']); ?>; <?php echo $border_style; ?> padding:.85rem 1.25rem; margin-bottom:3px; border-radius:2px; display:flex; align-items:center; justify-content:space-between; cursor:default;">
            <span style="font-family:'Lato',sans-serif; font-weight:<?php echo $i===0?'400':'300'; ?>; font-size:.78rem; letter-spacing:.04em; color:<?php echo esc_attr($layer['text_c']); ?>;"><?php echo esc_html($layer['label']); ?></span>
            <span style="font-family:'Lato',sans-serif; font-weight:300; font-size:.6rem; letter-spacing:.1em; color:<?php echo esc_attr($layer['text_c']); ?>; opacity:.55; text-transform:uppercase;">Layer <?php echo $i+1; ?></span>
          </div>
          <?php endforeach; ?>
          <div style="margin-top:1.25rem; font-family:'Playfair Display',serif; font-style:italic; font-size:.8rem; color:rgba(59,35,20,.4); text-align:center;">Unchanged since 1914.</div>
        </div>
      </div>

    </div>
  </div>
</section>


<!-- ████████████████████████████████████████
     §5  PICKUP
████████████████████████████████████████ -->

<style>
  /*
   * Uiverse pattern by csemszepp — adapted palette:
   *   --c1 #f8b195 (salmon) → #C69C3C gold
   *   --c2 #355c7d (blue)   → #2A180E espresso dark
   */
  .vp-pickup-pattern {
    --s:  100px;
    --c1: #C69C3C;
    --c2: #2A180E;
    --_g: var(--c2) 6% 14%, var(--c1) 16% 24%, var(--c2) 26% 34%,
          var(--c1) 36% 44%, var(--c2) 46% 54%, var(--c1) 56% 64%, var(--c2) 66% 74%,
          var(--c1) 76% 84%, var(--c2) 86% 94%;
    position: absolute;
    inset: 0;
    opacity: 0.12;
    pointer-events: none;
    background:
      radial-gradient(
        100% 100% at 100% 0,
        var(--c1) 4%,
        var(--_g),
        #0008 96%,
        #0000
      ),
      radial-gradient(
        100% 100% at 0 100%,
        #0000,
        #0008 4%,
        var(--_g),
        var(--c1) 96%
      )
      var(--c1);
    background-size: var(--s) var(--s);
  }
</style>

<section id="order" style="background-color:#3B2314; padding:7rem 0; position:relative; overflow:hidden;">

  <!-- Uiverse stripe pattern -->
  <div class="vp-pickup-pattern" aria-hidden="true"></div>

  <!-- decorative faded "Pickup" word -->
  <div style="position:absolute; right:-2%; top:50%; transform:translateY(-50%); font-family:'Playfair Display',serif; font-style:italic; font-size:clamp(7rem,16vw,15rem); color:#F5EFE0; opacity:.03; pointer-events:none; user-select:none; line-height:1;">Pickup</div>
  <div class="max-w-6xl mx-auto px-6 relative">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <div class="vp-ornament mb-5"><span style="font-family:'Lato',sans-serif; font-weight:300; font-size:.65rem; letter-spacing:.26em; text-transform:uppercase; color:#C69C3C;">Ready When You Are</span></div>
        <h2 style="font-family:'Playfair Display',serif; font-style:italic; font-weight:700; font-size:clamp(2rem,4.5vw,3.2rem); color:#F5EFE0; line-height:1.1; margin-bottom:1.5rem;">Order Pickup</h2>
        <p style="font-family:'Lato',sans-serif; font-weight:300; font-size:.92rem; line-height:1.85; color:rgba(245,239,224,.6); margin-bottom:2rem; max-width:44ch;">Skip the wait. Order ahead and pick up at 700 Filbert St, North Beach. Open daily, 7am to 8pm.</p>
        <ul style="list-style:none; padding:0; margin:0 0 2.5rem; display:flex; flex-direction:column; gap:.85rem;">
          <?php foreach (['Same-day orders welcome','Full menu: cakes, pastries, cookies by the pound','ADA accessible · Outdoor seating'] as $b) : ?>
          <li style="display:flex; align-items:flex-start; gap:.75rem; font-family:'Lato',sans-serif; font-weight:300; font-size:.85rem; color:rgba(245,239,224,.65); line-height:1.55;">
            <span style="display:inline-block; width:5px; height:5px; border-radius:50%; background:#C69C3C; flex-shrink:0; margin-top:6px;"></span>
            <?php echo esc_html($b); ?>
          </li>
          <?php endforeach; ?>
        </ul>
        <a href="#order-form" class="vp-btn-primary" style="font-family:'Lato',sans-serif; font-weight:400; font-size:.78rem; letter-spacing:.16em; text-transform:uppercase; text-decoration:none; display:inline-block; padding:14px 36px; background-color:#C69C3C; color:#3B2314; border-radius:2px;">Start Your Order</a>
      </div>
      <div style="border:1px solid rgba(198,156,60,.2); border-radius:3px; padding:2.5rem; background-color:rgba(245,239,224,.04);">
        <div style="font-family:'Lato',sans-serif; font-weight:300; font-size:.6rem; letter-spacing:.22em; text-transform:uppercase; color:#C69C3C; margin-bottom:1.5rem;">Location & Hours</div>
        <div style="font-family:'Playfair Display',serif; font-style:italic; font-size:1.4rem; color:#F5EFE0; margin-bottom:.25rem; line-height:1.2;">700 Filbert St</div>
        <div style="font-family:'Lato',sans-serif; font-weight:300; font-size:.82rem; color:rgba(245,239,224,.45); margin-bottom:2rem; letter-spacing:.05em;">North Beach, San Francisco, CA 94133</div>
        <div style="height:1px; background:rgba(198,156,60,.15); margin-bottom:1.5rem;"></div>
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:.6rem;">
          <span style="font-family:'Lato',sans-serif; font-weight:300; font-size:.78rem; color:rgba(245,239,224,.55);">Open Daily</span>
          <span style="font-family:'Playfair Display',serif; font-style:italic; font-size:.95rem; color:#F5EFE0;">7:00 AM – 8:00 PM</span>
        </div>
        <div style="height:1px; background:rgba(198,156,60,.1); margin-bottom:1.5rem;"></div>
        <a href="tel:+14157812015" class="vp-gold-link" style="font-family:'Lato',sans-serif; font-weight:300; font-size:.85rem; letter-spacing:.06em; color:#C69C3C; text-decoration:none; display:flex; align-items:center; gap:.6rem;"><span style="opacity:.7;">📞</span>(415) 781-2015</a>
      </div>
    </div>
  </div>
</section>


<!-- ████████████████████████████████████████
     §6  CATERING
████████████████████████████████████████ -->
<section id="catering" style="background-color:#F5EFE0; padding:7rem 0; position:relative; overflow:hidden;">
  <div style="position:absolute; left:-2%; top:50%; transform:translateY(-50%); font-family:'Playfair Display',serif; font-style:italic; font-size:clamp(7rem,16vw,15rem); color:#B85C38; opacity:.04; pointer-events:none; user-select:none; line-height:1;">Catering</div>
  <div class="max-w-6xl mx-auto px-6 relative">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div style="background-color:#fff; border:1px solid rgba(59,35,20,.07); border-radius:3px; padding:2.5rem; box-shadow:0 6px 32px rgba(59,35,20,.06); position:relative; overflow:hidden;">
        <div style="position:absolute; top:0; left:0; width:4px; height:100%; background-color:#B85C38;"></div>
        <div style="font-family:'Lato',sans-serif; font-weight:300; font-size:.6rem; letter-spacing:.22em; text-transform:uppercase; color:#B85C38; margin-bottom:1.5rem;">We Deliver To</div>
        <?php foreach (['San Francisco','Marin County','Napa Valley','Peninsula'] as $r) : ?>
        <div style="display:flex; align-items:center; gap:.75rem; padding:.65rem 0; border-bottom:1px solid rgba(59,35,20,.06);">
          <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:#B85C38; opacity:.5; flex-shrink:0;"></span>
          <span style="font-family:'Lato',sans-serif; font-weight:300; font-size:.85rem; color:rgba(59,35,20,.7);"><?php echo esc_html($r); ?></span>
          <span style="margin-left:auto; font-family:'Lato',sans-serif; font-weight:300; font-size:.65rem; letter-spacing:.1em; color:rgba(59,35,20,.3); text-transform:uppercase;">Within 50 mi</span>
        </div>
        <?php endforeach; ?>
        <div style="margin-top:1.5rem; font-family:'Playfair Display',serif; font-style:italic; font-size:.82rem; color:rgba(59,35,20,.4);">Custom orders: <a href="tel:+14157812015" style="color:#B85C38;text-decoration:none;">(415) 781-2015</a></div>
      </div>
      <div>
        <div class="vp-ornament mb-5"><span style="font-family:'Lato',sans-serif; font-weight:300; font-size:.65rem; letter-spacing:.26em; text-transform:uppercase; color:#B85C38;">Weddings · Events · Corporate</span></div>
        <h2 style="font-family:'Playfair Display',serif; font-style:italic; font-weight:700; font-size:clamp(2rem,4.5vw,3.2rem); color:#3B2314; line-height:1.1; margin-bottom:1.5rem;">Catering &amp;<br>Custom Orders</h2>
        <p style="font-family:'Lato',sans-serif; font-weight:300; font-size:.92rem; line-height:1.85; color:rgba(59,35,20,.65); margin-bottom:2rem; max-width:44ch;">From intimate celebrations to large events — we deliver anywhere within 50 miles, including Marin, Peninsula, and Napa.</p>
        <ul style="list-style:none; padding:0; margin:0 0 2.5rem; display:flex; flex-direction:column; gap:.85rem;">
          <?php foreach (['Wedding cakes · Anniversary cakes · Corporate gifting','Delivery up to 50 miles — SF, Marin, Napa, Peninsula','Custom orders: (415) 781-2015'] as $b) : ?>
          <li style="display:flex; align-items:flex-start; gap:.75rem; font-family:'Lato',sans-serif; font-weight:300; font-size:.85rem; color:rgba(59,35,20,.65); line-height:1.55;">
            <span style="display:inline-block; width:5px; height:5px; border-radius:50%; background:#B85C38; flex-shrink:0; margin-top:6px;"></span>
            <?php echo esc_html($b); ?>
          </li>
          <?php endforeach; ?>
        </ul>
        <a href="#contact" class="vp-btn-primary" style="font-family:'Lato',sans-serif; font-weight:400; font-size:.78rem; letter-spacing:.16em; text-transform:uppercase; text-decoration:none; display:inline-block; padding:14px 36px; background-color:#B85C38; color:#F5EFE0; border-radius:2px;">Inquire About Catering</a>
      </div>
    </div>
  </div>
</section>


<!-- ████████████████████████████████████████
     §7  BRAND QUOTE
████████████████████████████████████████ -->

<style>
  /*
   * Uiverse pattern — adapted to Victoria Pastry palette.
   *
   * Original:  base #e5e5f7  ·  stripes rgba(#ffb5b5, .54)
   * Adapted:   base #F5EFE0 (cream)  ·  stripes gold + terracotta
   *
   * The pattern sits on a pseudo-element at low opacity so the
   * espresso background and text remain fully legible.
   */
  .vp-quote-bg {
    position: relative;
    background-color: #2A180E;
    overflow: hidden;
  }

  /* Pattern layer */
  .vp-quote-bg::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.13;           /* subtle — just enough texture */
    background-color: #F5EFE0;
    background-image:
      repeating-radial-gradient(
        circle at 0 0,
        transparent 0,
        #F5EFE0 28px
      ),
      repeating-linear-gradient(
        135deg,
        rgba(198,156,60, .7),   /* gold */
        rgba(184,92,56,  .55)   /* terracotta */
      );
    pointer-events: none;
  }

  /* Soft vignette on top of the pattern to focus the center */
  .vp-quote-bg::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse 75% 70% at 50% 50%,
      transparent 30%,
      rgba(42,24,14,.65) 100%
    );
    pointer-events: none;
  }
</style>

<section class="vp-quote-bg" style="padding:7rem 0;">

  <!-- gold accent line top -->
  <div style="position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,#C69C3C,transparent); opacity:.5; z-index:2;"></div>

  <div class="max-w-4xl mx-auto px-6 text-center" style="position:relative; z-index:2;">

    <div class="vp-quote-marks" aria-hidden="true">&ldquo;</div>

    <blockquote style="
      font-family:'Playfair Display',serif;
      font-style:italic;
      font-weight:400;
      font-size:clamp(1.1rem,2.5vw,1.55rem);
      line-height:1.75;
      color:#F5EFE0;
      margin:0 0 3rem;
    ">Victoria Pastry Company was born in North Beach in 1914 — and has been passed down through generations of Italian families ever since, each one committed to the same authentic recipes, original flavors, and quality ingredients. Over a century later, nothing has changed.</blockquote>

    <!-- attribution badges -->
    <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:1rem;">
      <?php
      $badges = ['SF Business Legendary','Nominated Best Cannoli in San Francisco','Est. 1914'];
      foreach ($badges as $i => $badge) :
        if ($i > 0) : ?><span style="display:inline-block; width:3px; height:3px; border-radius:50%; background:#C69C3C; opacity:.5;"></span><?php endif; ?>
        <span style="font-family:'Lato',sans-serif; font-weight:300; font-size:.65rem; letter-spacing:.2em; text-transform:uppercase; color:rgba(198,156,60,.65);"><?php echo esc_html($badge); ?></span>
      <?php endforeach; ?>
    </div>

  </div>
</section>


<?php get_footer(); ?>