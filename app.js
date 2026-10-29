/**
 * GOOGLE ASSOCIATE ENGINEERING FELLOWSHIP - APPLICATION ENGINE
 * Candidate: Sidhant Saini (ID: GOOG-ENG-84092)
 * 100-Day / 1,000-Hour Enterprise Tracker, Valuable Projects Hub & Telemetry System
 */

(function () {
  'use strict';

  // Constants
  const STORAGE_KEY = 'gap_fellowship_v3';
  const TOTAL_TARGET_HOURS = 1000.0;
  const TOTAL_DAYS = 100;
  const DAILY_TARGET_HOURS = 10.0;
  const START_DATE_STR = '2026-10-29'; // Day 1: Oct 29, 2026

  // Phase Definitions
  const PHASES_METADATA = [
    {
      phase: 1,
      title: 'Advanced Kotlin Coroutines, Flow & Systems',
      days: 'Days 1 &ndash; 10',
      dates: 'Oct 29 &ndash; Nov 07, 2026',
      badge: 'PHASE 01: CORE ARCHITECTURE',
      desc: 'Mastery of Kotlin 2.x concurrency, structured concurrency, cold vs hot Flow pipelines, and low-level ART runtime memory profiling.'
    },
    {
      phase: 2,
      title: 'Jetpack Compose & Material Design 3',
      days: 'Days 11 &ndash; 20',
      dates: 'Nov 08 &ndash; Nov 17, 2026',
      badge: 'PHASE 02: UI SYSTEMS',
      desc: 'Declarative UI architecture, subcomposition, custom hardware-accelerated Canvas, gesture engines, and 120Hz frame stability.'
    },
    {
      phase: 3,
      title: 'Clean Multi-Module Architecture & Room',
      days: 'Days 21 &ndash; 30',
      dates: 'Nov 18 &ndash; Nov 27, 2026',
      badge: 'PHASE 03: PERSISTENCE & DATA',
      desc: 'Modular enterprise architecture (Domain/Data/Feature), Hilt DI at scale, Room 2.6+ auto-migrations, and resilient offline-first sync.'
    },
    {
      phase: 4,
      title: 'Google AdMob & In-App Monetization Suite',
      days: 'Days 31 &ndash; 40',
      dates: 'Nov 28 &ndash; Dec 07, 2026',
      badge: 'PHASE 04: COMMERCIAL MONETIZATION',
      desc: 'Google Mobile Ads (GMA) SDK v23+, Adaptive Banners, Rewarded SSV, Real-Time Bidding (RTB), and UMP consent compliance.'
    },
    {
      phase: 5,
      title: 'Google Ads (UAC) Growth & Acquisition',
      days: 'Days 41 &ndash; 50',
      dates: 'Dec 08 &ndash; Dec 17, 2026',
      badge: 'PHASE 05: USER ACQUISITION & GROWTH',
      desc: 'Universal App Campaigns (tCPI & tCPA), tROAS value-based bidding, Play Install Referrer, Android App Links, and LTV/CAC optimization.'
    },
    {
      phase: 6,
      title: 'Android Runtime, Performance & Profiling',
      days: 'Days 51 &ndash; 60',
      dates: 'Dec 18 &ndash; Dec 27, 2026',
      badge: 'PHASE 06: PERFORMANCE & NDK',
      desc: 'Systrace, Perfetto, Baseline Profiles, cold startup reduction (<500ms), LeakCanary memory leak elimination, and Android NDK/JNI.'
    },
    {
      phase: 7,
      title: 'Firebase, Cloud Microservices & Analytics',
      days: 'Days 61 &ndash; 70',
      dates: 'Dec 28, 2026 &ndash; Jan 06, 2027',
      badge: 'PHASE 07: CLOUD & TELEMETRY',
      desc: 'FCM push infrastructure, Remote Config server-side A/B tests, Crashlytics velocity triggers, BigQuery raw event analytics.'
    },
    {
      phase: 8,
      title: 'Google Play Console, Android Vitals & ASO',
      days: 'Days 71 &ndash; 80',
      dates: 'Jan 07 &ndash; Jan 16, 2027',
      badge: 'PHASE 08: PLAY STORE ECOSYSTEM',
      desc: 'Android Vitals excellence (crash rate <0.1%, ANR <0.47%), Play Billing 7.x subscriptions, ASO keyword indexing, and Play Integrity.'
    },
    {
      phase: 9,
      title: 'Production Capstone Application Launch',
      days: 'Days 81 &ndash; 90',
      dates: 'Jan 17 &ndash; Jan 26, 2027',
      badge: 'PHASE 09: CAPSTONE PRODUCTION',
      desc: 'Architecting and executing an end-to-end commercial Android app with monetization, automated testing (80%+ coverage), and CI/CD.'
    },
    {
      phase: 10,
      title: 'Ecosystem Scale, Tech Leadership & Revenue',
      days: 'Days 91 &ndash; 100',
      dates: 'Jan 27 &ndash; Feb 05, 2027',
      badge: 'PHASE 10: SCALE & VALUATION',
      desc: 'Scaling to 1M+ active users, engineering team governance, and scaling revenue systems toward the ₹2L/mo base and ₹2 Cr+ valuation tier.'
    }
  ];

  // 100 Days Curriculum Topics
  const CURRICULUM_TOPICS = [
    // Phase 1 (1-10)
    { t: "Coroutines Architecture, Dispatchers (IO/Default/Main) & Structured Concurrency", d: "Deep dive into CoroutineScope, Job hierarchies, and lifecycle-aware coroutines in Android." },
    { t: "Kotlin Flow Fundamentals: Cold vs Hot Streams, SharedFlow vs StateFlow", d: "Implement reactive UI state emission with backpressure and replay caching." },
    { t: "Custom Flow Operators, Buffering, Conflation & Debounce Pipelines", d: "Build search debouncing, sensor event throttling, and high-frequency stream processors." },
    { t: "Kotlin 2.0 K2 Compiler, Context Receivers & Modern Language Features", d: "Leverage K2 compiler optimizations, value classes, and domain-specific languages." },
    { t: "Android Runtime (ART) Memory Model, GC Algorithms & Heap Optimization", d: "Analyze generational garbage collection, object allocations, and avoid boxing overhead." },
    { t: "Advanced Functional Programming & Immutability Patterns in Android", d: "Implement functional error handling (Result monads), sealed interfaces, and pure functions." },
    { t: "Asynchronous Exception Handling, CoroutineExceptionHandler & SupervisorJob", d: "Design resilient failure isolation boundaries so child exceptions do not crash parent jobs." },
    { t: "Thread Safety, Mutex, Atomic References & Concurrent Data Structures", d: "Compare synchronization primitives, read-write locks, and lock-free thread coordination." },
    { t: "Kotlin Benchmarking with kotlinx-benchmark & Microbenchmarks", d: "Measure algorithm throughput, memory allocations, and loop vectorization on ART." },
    { t: "Phase 1 Evaluation: High-Throughput Asynchronous Pipeline Engine", d: "Complete architecture audit and automated unit test suite for the core asynchronous engine." },

    // Phase 2 (11-20)
    { t: "Jetpack Compose Architecture, Slot API & Declarative State Hoisting", d: "Build modular, reusable UI components utilizing unidirectional data flow (UDF)." },
    { t: "Recomposition Optimization, remember, derivedStateOf & Stability Analysis", d: "Use Compose Compiler metrics to diagnose unstable classes and eliminate redundant redraws." },
    { t: "Custom Layouts, Subcomposition & Intrinsic Measurements", d: "Build bespoke layout managers using Layout modifier and SubcomposeLayout." },
    { t: "Hardware-Accelerated Canvas Rendering & Custom Shader Effects", d: "Draw high-performance graphics with DrawScope, BlendModes, and RuntimeShader (AGSL)." },
    { t: "Material 3 Design Tokens, Dynamic Color Adaptation & Dark Theme", d: "Integrate Material You tonal palettes, dynamic elevation, and typography scales." },
    { t: "Complex Gestures, Drag-and-Drop & Velocity Tracking in Compose", d: "Implement multi-touch gestures, swipe-to-dismiss, and spring physics animations." },
    { t: "Compose Navigation 2.8+ with Type-Safe Routing & Deep Links", d: "Configure Kotlin Serialization type-safe routes, backstack arguments, and transitions." },
    { t: "Compose Performance: Layout Inspector, Tracing & Baseline Profiles", d: "Profile jank using Android Studio Layout Inspector and macrobenchmark frame metrics." },
    { t: "Accessibility (a11y), Screen Readers & TalkBack Optimization in Compose", d: "Ensure high contrast, touch target sizes (48dp min), and custom semantic properties." },
    { t: "Phase 2 Evaluation: Enterprise Compose Design System & Component Library", d: "Deliver complete, documented design system with zero recomposition anomalies." },

    // Phase 3 (21-30)
    { t: "Modular Clean Architecture: Domain, Data, Core & Feature Split", d: "Decouple business logic from UI and framework APIs using gradle multi-module boundaries." },
    { t: "Dependency Injection at Scale: Hilt, Custom Scopes & Component Lifecycles", d: "Configure assisted injection, ViewModelScoped providers, and testing modules." },
    { t: "Room Database 2.6+: Relations, TypeConverters & Reactive Queries", d: "Model complex SQL relationships (1:1, 1:N, M:N) with Flow-returning DAOs." },
    { t: "Room Database Migrations with AutoMigration & Automated SQLite Tests", d: "Write database migrations and verify schema changes using MigrationTestHelper." },
    { t: "Jetpack DataStore (Preferences & Proto) with Encrypted SharedPreferences", d: "Migrate legacy SharedPreferences to thread-safe, coroutine-powered DataStore." },
    { t: "High-Performance Networking: Ktor Client / Retrofit & Custom Interceptors", d: "Implement token refresh interceptors, certificate pinning, and connection pooling." },
    { t: "Offline-First Synchronization Engine with WorkManager Expedited Jobs", d: "Handle intermittent network conditions with persistent queues and exponential backoff." },
    { t: "Cache Invalidation, LRU Policies & Network Resiliency Frameworks", d: "Build two-tier caching (in-memory + disk) with ETags and stale-while-revalidate." },
    { t: "Unit Testing Core Domain with JUnit 5, MockK & Turbine for Flows", d: "Write unit tests for complex business use cases and collect Flow emissions via Turbine." },
    { t: "Phase 3 Evaluation: Multi-Module Offline-First Enterprise Data Core", d: "Deploy verified offline-first repository pattern with 85%+ automated test coverage." },

    // Phase 4 (31-40)
    { t: "Google Mobile Ads (GMA) SDK v23+ Integration & Architecture", d: "Initialize AdMob SDK on background thread, handle app open events and lifecycle states." },
    { t: "Adaptive Banners & Inline Adaptive Banner Placement Strategies", d: "Implement dynamic screen-width banners without content jumping or layout shift." },
    { t: "Interstitial Ads & High-Retention Natural Break Placements", d: "Preload interstitials cleanly, handle dismiss callbacks, and avoid user jarring." },
    { t: "Rewarded Video Ads: Reward Lifecycle & Server-Side Verification (SSV)", d: "Implement fraud-proof user rewards and cryptographic server callbacks." },
    { t: "Native Advanced Ads: Custom Compose Layouts & Brand Matching", d: "Build native ad views styled to blend seamlessly with the app interface." },
    { t: "Google AdMob Mediation: Waterfall Setup & Partner SDK Integrations", d: "Connect top ad networks (Meta, AppLovin, Unity) and maximize international fill rates." },
    { t: "Real-Time Bidding (RTB) / Open Bidding Auction Optimization", d: "Configure real-time auction bids to eliminate latency and boost effective eCPM." },
    { t: "User Messaging Platform (UMP) SDK & Global Privacy Compliance (GDPR/CCPA)", d: "Present consent forms, handle TCF v2.2 strings, and enforce non-personalized ad rules." },
    { t: "Ad Inspector, Mediation Test Suite & Fill Rate Diagnostics", d: "Audit live ad auctions on test devices and identify mediation timeout bottlenecks." },
    { t: "Phase 4 Evaluation: Commercial Monetization Suite with 99%+ Fill Rate", d: "Validate multi-format monetization architecture with zero policy violations." },

    // Phase 5 (41-50)
    { t: "Google Ads Platform & Universal App Campaigns (UAC) Architecture", d: "Connect Google Ads with Play Console, configure campaign types and bidding models." },
    { t: "UAC for Installs (tCPI) Setup: Target Bidding & Budget Allocation", d: "Calibrate target cost-per-install (tCPI) algorithms for high-volume market acquisition." },
    { t: "UAC for In-App Actions (tCPA): Target Event Mapping & Conversion Tracking", d: "Track high-value user milestones (registration, level completion, subscription trial)." },
    { t: "Target Return on Ad Spend (tROAS) Modeling & Value-Based Bidding", d: "Calculate revenue cohorts to let Google Ads machine learning target highest-paying users." },
    { t: "High-Converting Creative Assets: Video Dimensions, HTML5 Playables, Copy", d: "Develop 16:9, 1:1, and 9:16 video ad creatives, landscape graphics, and concise text." },
    { t: "Google Play Install Referrer API & Deep Attribution Modeling", d: "Read campaign source parameters on first install to personalize initial user onboarding." },
    { t: "Android App Links & Seamless Post-Install Deep Linking", d: "Verify assetlinks.json on domain and route users directly into deep app activities." },
    { t: "Creative A/B Testing & Creative Asset Performance Grading", d: "Analyze asset report scores (Low, Good, Best) and cycle out underperforming creatives." },
    { t: "Cohort Retention vs Acquisition Cost: LTV/CAC Ratio Optimization", d: "Model Day 1, Day 7, Day 30 retention curves to guarantee positive ROAS within 90 days." },
    { t: "Phase 5 Evaluation: Full-Funnel Automated Google Ads Acquisition Loop", d: "Finalize acquisition funnel with automated conversion pipelines and verified tracking." },

    // Phase 6 (51-60)
    { t: "Android Studio Profiler Deep Dive: CPU Trace, Systrace & Perfetto", d: "Analyze method traces, flame charts, and identify CPU scheduling bottlenecks." },
    { t: "Memory Profiler: Native Allocation, HPROF Heap Dumps & LeakCanary", d: "Inspect retained object paths, eliminate static context references and coroutine leaks." },
    { t: "Baseline Profiles Generation & Macrobenchmark Metric Suites", d: "Precompile critical user journeys using ART Cloud Profiles to eliminate JIT compilation." },
    { t: "App Startup Latency Optimization: Cold, Warm & Hot Launches (< 500ms)", d: "Use AndroidX App Startup library, defer non-critical SDK initializations." },
    { t: "Battery & Energy Optimization: Doze Mode, WakeLocks & JobScheduler", d: "Minimize cellular radio activations and batch network requests to save power." },
    { t: "Network Profiling, Payload Compression (Gzip / Brotli) & Data Saver", d: "Audit HTTP headers, eliminate redundant API calls, and support Android Data Saver." },
    { t: "App Size Optimization: R8 Full Mode, ProGuard Rules & Resource Shrinking", d: "Configure aggressive code stripping, vector drawable usage, and dynamic features." },
    { t: "Android NDK / JNI: High-Performance C++ Math & Data Processing", d: "Integrate native C++ libraries for computationally heavy image and audio processing." },
    { t: "Rendering Performance: 120Hz ProMotion Frame Budget (< 8ms / frame)", d: "Identify GPU overdraw and ensure smooth 120 FPS animations across modern devices." },
    { t: "Phase 6 Evaluation: Ultra-Low Latency & Memory Optimized Release Candidate", d: "Generate benchmark report proving 40%+ reduction in launch latency and memory footprint." },

    // Phase 7 (61-70)
    { t: "Firebase Cloud Messaging (FCM): High-Priority Push & Notification Channels", d: "Build notification channels, handle data vs notification payloads, and rich media." },
    { t: "Firebase Remote Config: Server-Driven UI & Dynamic Parameter Rollouts", d: "Push real-time feature flags and configuration values without releasing an app update." },
    { t: "Firebase A/B Testing: Server-Side Statistical Significance Evaluation", d: "Run experiments on paywall copy, ad frequency, and UI layouts with real users." },
    { t: "Crashlytics Advanced: Custom Keys, Log Tracing & Velocity Alerts", d: "Tag crash logs with user session state, breadcrumbs, and monitor critical crash rates." },
    { t: "Google Analytics for Firebase: Custom Funnels & User Property Segmentation", d: "Track custom engagement events, screen classes, and build user audience groups." },
    { t: "BigQuery Integration: Exporting Raw Telemetry & SQL Cohort Analytics", d: "Write SQL queries on raw Firebase analytics events to analyze retention and ARPPU." },
    { t: "Google Cloud Functions & Microservices for Android Sync", d: "Deploy serverless backend functions on GCP to validate purchases and process webhook events." },
    { t: "Cloud Storage for Firebase: Resumable Media Uploads & Thumbnail Generation", d: "Implement resilient chunked background file uploads with progress callbacks." },
    { t: "Firebase App Check: Device Attestation with Play Integrity", d: "Shield backend API endpoints against scrapers and modified APK clients." },
    { t: "Phase 7 Evaluation: Intelligent Cloud-Connected Analytics & Remote Control", d: "Verify end-to-end cloud telemetry and real-time remote configuration switchboards." },

    // Phase 8 (71-80)
    { t: "Google Play Console Architecture & Internal / Closed Testing Tracks", d: "Set up release tracks, manage testers, and automate internal app sharing." },
    { t: "Android Vitals Mastery: Keeping Crash Rate < 0.1% & ANR Rate < 0.47%", d: "Audit vital thresholds to ensure app remains prioritized in Google Play search rankings." },
    { t: "Google Play Billing Library 7.x: Subscriptions, Grace Periods & Account Hold", d: "Implement real-time developer notifications (RTDN), subscription offers, and renewals." },
    { t: "Android App Bundles (.aab) & Dynamic Feature Delivery on Demand", d: "Split application into dynamic feature modules downloaded only when requested by user." },
    { t: "App Store Optimization (ASO): Keyword Indexing, Visual Assets & Video Trailers", d: "Optimize title, short description, 4K screenshots, and localization for 30+ regions." },
    { t: "Store Listing Experiments (Google Play A/B Testing for Conversion)", d: "Run icon and graphic asset experiments directly in Google Play Console." },
    { t: "Google Play Policy Compliance: Privacy Policies, Data Safety Section, COPPA", d: "Complete exact permissions declaration, target SDK 35+ compliance, and security disclosures." },
    { t: "Play Integrity API: Anti-Tamper, License Check & Risk Assessment", d: "Verify cryptographic device integrity tokens before granting access to premium content." },
    { t: "Fastlane & GitHub Actions CI/CD Pipeline for Continuous Deployment", d: "Automate build, code signing, testing, and artifact deployment to Play Console." },
    { t: "Phase 8 Evaluation: Zero-Defect Production Release to Google Play Console", d: "Execute complete pre-launch audit report with 100% green Android Vitals checklist." },

    // Phase 9 (81-90)
    { t: "Capstone Project Kickoff: High-Scale Commercial Android Application", d: "Define product requirements, system architecture diagram, and commercial objectives." },
    { t: "Capstone Architecture: Clean Multi-Module Scaffold & Dependency Injection", d: "Implement Hilt modular architecture, core UI components, and domain business rules." },
    { t: "Capstone Data Layer: Room Database, Ktor Networking & Offline Engine", d: "Build robust offline data engine with encrypted local storage and reactive Flow DAOs." },
    { t: "Capstone UI/UX: Material 3 Compose Design System & Animations", d: "Deliver complete screens with responsive layouts, dark theme, and high-fluidity animations." },
    { t: "Capstone Monetization: AdMob Banners, Interstitials & Rewarded Video", d: "Integrate full AdMob suite with mediation waterfall and consent management." },
    { t: "Capstone Subscriptions: Google Play Billing Integration & Paywall UI", d: "Deploy subscription paywall with trial offers, annual discounts, and restore flow." },
    { t: "Capstone Growth: Deep Links, FCM Engagement Notifications & Analytics", d: "Configure automated retention push sequences and custom analytics funnels." },
    { t: "Capstone Profiling: Baseline Profiles, Systrace & 120fps Validation", d: "Ensure app boots under 400ms and executes zero jank frames across all user flows." },
    { t: "Capstone Automated Testing: 80%+ Code Coverage with JUnit & Compose Tests", d: "Run full suite of unit, integration, and UI automation tests in CI pipeline." },
    { t: "Phase 9 Evaluation: End-to-End Production Capstone Review", d: "Candidate app deployed to closed testing track with complete operational telemetry." },

    // Phase 10 (91-100)
    { t: "Scaling Android Apps to 1M+ Active Users: Infrastructure & CDN Architecture", d: "Design backend load balancing, edge caching, and mobile client request compression." },
    { t: "Multi-App Portfolio Management & Shared SDK Architecture", d: "Package shared authentication, analytics, and ad monetization modules across multiple apps." },
    { t: "Internationalization (i18n), RTL Support & Global Localization", d: "Localize string resources, date formats, currencies, and right-to-left layout mirrors." },
    { t: "Engineering Leadership: Code Review Standards & Architecture Decision Records (ADRs)", d: "Establish team code hygiene guidelines, CI lint gates, and formal architectural documentation." },
    { t: "Technical Mentorship & Scaling Engineering Teams", d: "Structure training roadmaps, pair programming protocols, and agile sprint cadence." },
    { t: "Commercial Model Optimization: Maximizing eCPM, ARPU & Lifetime Value (LTV)", d: "Implement dynamic ad refresh, pricing tiers per country tier (Tier 1 vs Tier 3), and cross-promotions." },
    { t: "Enterprise Partnership Strategy: Consulting, Contracting & Associate Governance", d: "Structure enterprise software contracts, technical SLAs, and advisory retainers." },
    { t: "Scaling to ₹2,00,000/mo Baseline to ₹2 Crore+ Annual Portfolio ARR", d: "Mathematical modeling of app portfolio valuation, ad revenue compounding, and ARR scaling." },
    { t: "Final Comprehensive Systems Audit, Code Signing & Repository Archival", d: "Perform comprehensive security audit, dependency CVE scan, and clean repository freeze." },
    { t: "Google Associate Engineering Graduation & 1,000-Hour Certification Milestone", d: "Audit full 1,000 active hours ledger and finalize official Google Associate Fellowship credential." }
  ];

  // 6 Flagship Valuable Production Projects
  const INITIAL_PROJECTS = [
    {
      id: "gap-p1",
      code: "GAP-PROJ-01",
      category: "fintech",
      title: "FinPulse UPI & Global Neo-Banking Suite",
      valuation: "₹50,00,000+ Market Value",
      status: "Verified Architecture",
      desc: "High-throughput banking and instant UPI payment client engineered with Clean Multi-Module Architecture, biometric hardware attestation, and dynamic on-demand feature modules.",
      tags: ["Kotlin 2.0", "Compose M3", "SQLCipher Room", "BiometricPrompt API", "Hilt DI", "Dynamic Delivery"],
      deliverables: [
        { text: "Unidirectional Data Flow (MVI) Architecture Scaffold", done: true },
        { text: "Biometric Hardware Key Attestation & SQLite Encryption", done: true },
        { text: "Dynamic Feature Split for On-Demand KYC Verification", done: true },
        { text: "Automated Fraud Detection Interceptors & SSL Pinning", done: false }
      ],
      spec: {
        architecture: "Clean Multi-Module (:core:network, :core:database, :feature:payments, :feature:kyc)",
        security: "Android Keystore backed AES-256 GCM token storage with BiometricPrompt StrongBox",
        monetization: "Transaction interchange fees, micro-lending API hooks, and partner lead generation",
        playVitals: "Cold start < 380ms, 0% crash rate target, ProGuard aggressive R8 stripping"
      }
    },
    {
      id: "gap-p2",
      code: "GAP-PROJ-02",
      category: "monetization",
      title: "AdMob Hyper-Yield Monetization & Mediation Engine",
      valuation: "₹65,00,000+ / Year Ad Revenue",
      status: "SDK Integrated & Tested",
      desc: "Commercial ad monetization framework maximizing eCPM across international tiers using Google AdMob Mediation, Open Bidding real-time auctions, and server-side verification.",
      tags: ["Google Mobile Ads SDK v23+", "Real-Time Bidding (RTB)", "Rewarded Video SSV", "UMP Consent SDK", "Ad Inspector"],
      deliverables: [
        { text: "Adaptive Banner & Collapsible Banner Lifecycle Integration", done: true },
        { text: "Pre-cached Interstitial Natural Break Handler", done: true },
        { text: "Server-Side Verification (SSV) Cryptographic Callback Verifier", done: true },
        { text: "Multi-Network Mediation Waterfall (AppLovin, Unity, Meta)", done: false }
      ],
      spec: {
        architecture: "Reactive GMA SDK wrapper emitting Flow states (AdLoading, AdLoaded, AdShown, AdFailed)",
        security: "Cryptographic ECDSA public key signature verification on rewarded ad callbacks",
        monetization: "High eCPM tier targeting (US/UK/EU @ $18-$35 eCPM, IN/SEA @ $1.5-$3.5 eCPM)",
        playVitals: "Ad pre-warming without UI thread blocking, zero frame drops on ad transitions"
      }
    },
    {
      id: "gap-p3",
      code: "GAP-PROJ-03",
      category: "media",
      title: "AuraStream: 4K HDR & Short-Form Video Platform",
      valuation: "₹40,00,000+ Market Value",
      status: "Core Pipeline Verified",
      desc: "Ultra-fluid, jank-free video feed with hardware-accelerated AGSL runtime shaders, ExoPlayer Media3, and pre-warmed media caching for instant playback.",
      tags: ["Jetpack Media3", "ExoPlayer", "RuntimeShader (AGSL)", "SubcomposeLayout", "Baseline Profiles", "120Hz ProMotion"],
      deliverables: [
        { text: "120Hz ProMotion Frame Timing Pipeline (<8ms per frame)", done: true },
        { text: "Pre-caching Chunked Media Pipeline for 0-latency playback start", done: true },
        { text: "Custom AGSL Dynamic Saturation & Vignette Shaders", done: false },
        { text: "Picture-in-Picture (PiP) & Background Audio Services", done: false }
      ],
      spec: {
        architecture: "Media3 MediaSessionService with custom cache datasource and OkHttp pooling",
        security: "Widevine Modular DRM L1 hardware integration for licensed streaming",
        monetization: "Rewarded video unlocks, VIP subscription passes, and sponsored creator channels",
        playVitals: "Macrobenchmark verified startup latency < 420ms, zero ANRs during video scrolling"
      }
    },
    {
      id: "gap-p4",
      code: "GAP-PROJ-04",
      category: "offline",
      title: "CloudSync Enterprise: Offline-First Field Operations SDK",
      valuation: "₹35,00,000+ Annual Retainer",
      status: "Architecture Approved",
      desc: "Resilient data persistence and bidirectional synchronization engine designed for zero-connectivity environments with automated conflict resolution.",
      tags: ["Ktor Client (HTTP/3)", "Room Database 2.6+", "WorkManager Expedited", "SQLite WAL mode", "Crypto DataStore"],
      deliverables: [
        { text: "Offline-First Multi-Tier Caching Engine (Memory + Disk)", done: true },
        { text: "Background Expedited Sync with Exponential Backoff", done: true },
        { text: "Distributed Conflict Resolution Engine with Vector Clocks", done: false },
        { text: "Network Constraint Observers & Low Data Mode Adapters", done: false }
      ],
      spec: {
        architecture: "Single Source of Truth (SSOT) Room database emitting Flow to UI, background Ktor sync",
        security: "Encrypted Room DB via SQLCipher, TLS 1.3 certificate pinning with SHA-256 hashes",
        monetization: "B2B Enterprise SaaS licensing, multi-seat developer retainers",
        playVitals: "Zero database disk lock contention via SQLite WAL (Write-Ahead Logging)"
      }
    },
    {
      id: "gap-p5",
      code: "GAP-PROJ-05",
      category: "monetization",
      title: "Nexus Commerce: Global Play Billing 7.0 & Subscription SaaS",
      valuation: "₹45,00,000+ / Year Recurring ARR",
      status: "Architecture Approved",
      desc: "Scalable commercial monetization pipeline managing multi-tier subscriptions, prepaid passes, trial conversions, and real-time developer notifications.",
      tags: ["Play Billing Library 7.x", "Firebase Remote Config", "GCP Cloud Functions", "Play Integrity API", "BigQuery"],
      deliverables: [
        { text: "Play Billing 7.0 Multi-Offer Subscription Paywall UI", done: true },
        { text: "Real-Time Developer Notifications (RTDN) Webhook Ingestion", done: true },
        { text: "Automated Account Hold & Grace Period Churn Recovery Flow", done: false },
        { text: "Server-Side Cryptographic Purchase Token Verification", done: false }
      ],
      spec: {
        architecture: "BillingClient wrapper with state machine handling pending, purchased, and canceled states",
        security: "Play Integrity device attestation preventing token spoofing and cloned APK execution",
        monetization: "Monthly ($4.99) & Annual ($39.99) plans with 7-day free trial dynamic pricing",
        playVitals: "Instant paywall load via pre-cached SKU details, 0% purchase dropouts"
      }
    },
    {
      id: "gap-p6",
      code: "GAP-PROJ-06",
      category: "ai",
      title: "OmniPulse AI: On-Device Gemini Nano & WearOS Health Companion",
      valuation: "₹30,00,000+ Market Value",
      status: "Pipeline Approved",
      desc: "Edge AI health intelligence platform integrating Google AICore Gemini Nano on-device LLM with Android Health Connect and WearOS sensor streams.",
      tags: ["Android AICore (Gemini Nano)", "Health Connect API", "WearOS Compose", "Foreground Services", "TFLite"],
      deliverables: [
        { text: "Health Connect Aggregated Metric Ingestion & Permissions Flow", done: true },
        { text: "On-Device Privacy-Preserving Gemini Nano Summarization", done: true },
        { text: "Low-Battery Sensor Sampling Routine (<1.5% per 24 hours)", done: false },
        { text: "WearOS Watch Face Tile & Live Complication Engine", done: false }
      ],
      spec: {
        architecture: "AICore Edge inference service running offline without cloud telemetry latency",
        security: "Zero user biometric data leaves device; fully HIPAA & GDPR compliant",
        monetization: "Premium AI fitness coaching subscription, corporate wellness enterprise tiers",
        playVitals: "Background battery drain audited < 1.2% per day, strict Doze mode compliance"
      }
    }
  ];

  // Helper: Format Date
  function formatDate(dateObj) {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return dateObj.toLocaleDateString('en-US', options);
  }

  // Generate 100 Days Data Array
  function generateInitialDays() {
    const days = [];
    const startDate = new Date(START_DATE_STR + 'T00:00:00');

    for (let i = 0; i < TOTAL_DAYS; i++) {
      const current = new Date(startDate);
      current.setDate(startDate.getDate() + i);

      const dayNumber = i + 1;
      const phaseNumber = Math.min(10, Math.floor(i / 10) + 1);
      const topicObj = CURRICULUM_TOPICS[i] || {
        t: `Android Engineering Sprint & Technical Implementation Day ${dayNumber}`,
        d: '10-hour focused execution block on Kotlin, Compose, and Google Developer Ecosystem tools.'
      };

      // Day 1 (Oct 29, 2026): 10 hours completed
      const isDay1 = (dayNumber === 1);
      days.push({
        day: dayNumber,
        date: current.toISOString().split('T')[0],
        dateFormatted: formatDate(current),
        phase: phaseNumber,
        title: topicObj.t,
        deliverables: topicObj.d,
        hours: isDay1 ? 10.0 : 0.0,
        completed: isDay1 ? true : false,
        notes: isDay1 ? 'Day 1 completed — 10 hrs logged.' : ''
      });
    }

    return days;
  }

  // Application State
  let appState = {
    candidateName: 'Sidhant Saini',
    candidateId: 'GOOG-ENG-84092',
    days: [],
    projects: [],
    timerRunning: false,
    timerElapsedSeconds: 0,
    timerIntervalId: null,
    editingDayIndex: null,
    filterPhase: 'all',
    filterStatus: 'all',
    searchQuery: '',
    projectCategoryFilter: 'all'
  };

  // Load from LocalStorage
  function loadState() {
    try {
      let saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        saved = localStorage.getItem('gap_fellowship_v2');
      }
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.days && parsed.days.length === TOTAL_DAYS) {
          appState.days = parsed.days;
          // Ensure Day 1 reflects the 10 completed hours on Oct 29, 2026
          if (appState.days[0] && (parseFloat(appState.days[0].hours) < 10 || !appState.days[0].completed)) {
            appState.days[0].hours = 10.0;
            appState.days[0].completed = true;
            if (!appState.days[0].notes) {
              appState.days[0].notes = 'Day 1 completed — 10 hrs logged.';
            }
          }
          appState.projects = parsed.projects && parsed.projects.length ? parsed.projects : INITIAL_PROJECTS;
          appState.candidateName = 'Sidhant Saini'; // Guarantee correct name
          appState.candidateId = 'GOOG-ENG-84092';
          saveState();
          return;
        }
      }
    } catch (e) {
      console.warn('Could not read existing state from localStorage:', e);
    }

    // Default Initial Setup
    appState.days = generateInitialDays();
    appState.projects = INITIAL_PROJECTS;
    appState.candidateName = 'Sidhant Saini';
    appState.candidateId = 'GOOG-ENG-84092';
    saveState();
  }

  // Save to LocalStorage
  function saveState() {
    try {
      const payload = {
        candidateName: appState.candidateName,
        candidateId: appState.candidateId,
        days: appState.days,
        projects: appState.projects,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      console.error('Failed to save state to localStorage:', e);
    }
  }

  // Calculate Metrics
  function getAggregates() {
    let totalLogged = 0.0;
    let completedDaysCount = 0;

    appState.days.forEach(d => {
      const h = parseFloat(d.hours) || 0;
      totalLogged += h;
      if (h >= DAILY_TARGET_HOURS || d.completed) {
        completedDaysCount++;
      }
    });

    const remainingHours = Math.max(0, TOTAL_TARGET_HOURS - totalLogged);
    const completionPercent = Math.min(100, (totalLogged / TOTAL_TARGET_HOURS) * 100);
    const remainingDays = Math.max(0, TOTAL_DAYS - completedDaysCount);
    const paceRequired = remainingDays > 0 ? (remainingHours / remainingDays).toFixed(1) : '0.0';

    return {
      totalLogged: totalLogged.toFixed(1),
      remainingHours: remainingHours.toFixed(1),
      completionPercent: completionPercent.toFixed(1),
      completedDaysCount,
      remainingDays,
      paceRequired
    };
  }

  // Subtle Web Audio Feedback
  function playSuccessTone() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880.00, ctx.currentTime + 0.15); // A5
      osc.frequency.exponentialRampToValueAtTime(1174.66, ctx.currentTime + 0.35); // D6

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch (e) {
      // Audio context might be restricted before user gesture
    }
  }

  // Show Toast
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // Update UI Telemetry & Counters
  function updateTelemetryUI() {
    const stats = getAggregates();

    // Candidate Name sync
    const nameDisplay = document.getElementById('candidate-name-display');
    if (nameDisplay) nameDisplay.textContent = 'Candidate Sidhant Saini';

    const certName = document.getElementById('cert-candidate-name');
    if (certName) certName.textContent = 'SIDHANT SAINI';

    // Hero KPI Cards
    const completedEl = document.getElementById('kpi-completed-hours');
    if (completedEl) completedEl.innerHTML = `${stats.totalLogged} <span class="kpi-unit">HRS</span>`;

    const remainingEl = document.getElementById('kpi-remaining-hours');
    if (remainingEl) remainingEl.innerHTML = `${stats.remainingHours} <span class="kpi-unit">HRS</span>`;

    const completionRateEl = document.getElementById('kpi-completion-rate');
    if (completionRateEl) completionRateEl.textContent = `${stats.completionPercent}% of 1,000h quota`;

    const remainingDaysEl = document.getElementById('kpi-remaining-days');
    if (remainingDaysEl) remainingDaysEl.textContent = `${stats.remainingDays} Days remaining`;

    const progressFill = document.getElementById('master-progress-fill');
    if (progressFill) progressFill.style.width = `${stats.completionPercent}%`;

    const progressLabel = document.getElementById('progress-percentage-label');
    if (progressLabel) progressLabel.textContent = `${stats.completionPercent}%`;

    const daysCountLabel = document.getElementById('days-completed-count');
    if (daysCountLabel) daysCountLabel.textContent = stats.completedDaysCount;

    const navBadge = document.getElementById('nav-progress-badge');
    if (navBadge) navBadge.textContent = `${Math.round(stats.completionPercent)}%`;

    const paceEl = document.getElementById('vel-required-pace');
    if (paceEl) paceEl.textContent = `${stats.paceRequired} hrs / day`;

    // Tracker Section Strip
    const tLogged = document.getElementById('tracker-stat-logged');
    if (tLogged) tLogged.textContent = stats.totalLogged;

    const tRemaining = document.getElementById('tracker-stat-remaining');
    if (tRemaining) tRemaining.textContent = stats.remainingHours;

    const tDays = document.getElementById('tracker-stat-days');
    if (tDays) tDays.textContent = stats.completedDaysCount;

    const tPercent = document.getElementById('tracker-stat-percent');
    if (tPercent) tPercent.textContent = stats.completionPercent;

    // Certificate Audit Section
    const certLogged = document.getElementById('cert-logged-hours');
    if (certLogged) certLogged.textContent = `${stats.totalLogged} Hours`;

    const certRemaining = document.getElementById('cert-remaining-hours');
    if (certRemaining) certRemaining.textContent = `${stats.remainingHours} Hours`;

    const certPercent = document.getElementById('cert-percentage');
    if (certPercent) certPercent.textContent = `${stats.completionPercent}%`;

    const certStatus = document.getElementById('cert-status-text');
    if (certStatus) {
      if (parseFloat(stats.totalLogged) >= TOTAL_TARGET_HOURS) {
        certStatus.textContent = 'FELLOWSHIP COMPLETED & VERIFIED';
        certStatus.style.background = 'rgba(52, 168, 83, 0.2)';
        certStatus.style.color = '#34A853';
      } else {
        certStatus.textContent = 'FELLOWSHIP IN PROGRESS';
        certStatus.style.background = 'rgba(66, 133, 244, 0.15)';
        certStatus.style.color = '#79B8FF';
      }
    }

    renderRoadmapMiniCards();
  }

  // Render Mini Roadmap Cards in Overview
  function renderRoadmapMiniCards() {
    const container = document.getElementById('phases-summary-container');
    if (!container) return;

    container.innerHTML = '';

    PHASES_METADATA.forEach(meta => {
      const startIndex = (meta.phase - 1) * 10;
      const phaseDays = appState.days.slice(startIndex, startIndex + 10);
      let phaseHours = 0;
      phaseDays.forEach(d => phaseHours += (parseFloat(d.hours) || 0));
      const phaseTarget = 100.0;
      const percent = Math.min(100, Math.round((phaseHours / phaseTarget) * 100));

      const card = document.createElement('div');
      card.className = 'phase-summary-card';
      card.innerHTML = `
        <div class="psc-badge">${meta.badge}</div>
        <div class="psc-title">${meta.title}</div>
        <div class="psc-days">${meta.days} &bull; ${meta.dates}</div>
        <div class="psc-progress">
          <div class="psc-bar">
            <div class="psc-bar-fill" style="width: ${percent}%;"></div>
          </div>
          <span>${phaseHours.toFixed(0)} / 100 hrs (${percent}%)</span>
        </div>
      `;

      card.addEventListener('click', () => {
        setPhaseFilter(meta.phase.toString());
        switchToSection('tracker-section');
      });

      container.appendChild(card);
    });
  }

  // Set Phase Filter
  function setPhaseFilter(phaseVal) {
    appState.filterPhase = phaseVal;
    
    // Update select dropdown
    const select = document.getElementById('filter-phase-select');
    if (select) select.value = phaseVal;

    // Update phase pills
    document.querySelectorAll('.phase-pill').forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-phase') === phaseVal);
    });

    renderDaysList();
  }

  // Reset all filters to show all 100 days
  function resetAllFilters() {
    appState.filterPhase = 'all';
    appState.filterStatus = 'all';
    appState.searchQuery = '';

    const searchInput = document.getElementById('tracker-search-input');
    if (searchInput) searchInput.value = '';

    const phaseSelect = document.getElementById('filter-phase-select');
    if (phaseSelect) phaseSelect.value = 'all';

    const statusSelect = document.getElementById('filter-status-select');
    if (statusSelect) statusSelect.value = 'all';

    document.querySelectorAll('.phase-pill').forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-phase') === 'all');
    });

    const searchWrapper = document.querySelector('.toolbar-search');
    if (searchWrapper) searchWrapper.classList.remove('has-input');

    renderDaysList();
    showToast('Showing all 100 days (Full 1,000-Hour Quota).', 'info');
  }

  // Render 100-Day Tracker List
  function renderDaysList() {
    const container = document.getElementById('days-list-container');
    if (!container) return;

    container.innerHTML = '';

    const todayStr = new Date().toISOString().split('T')[0];
    const q = appState.searchQuery.toLowerCase().trim();

    const filteredDays = appState.days.filter((d) => {
      // Phase Filter
      if (appState.filterPhase !== 'all' && d.phase.toString() !== appState.filterPhase) {
        return false;
      }

      // Status Filter
      const h = parseFloat(d.hours) || 0;
      if (appState.filterStatus === 'completed' && h < DAILY_TARGET_HOURS && !d.completed) return false;
      if (appState.filterStatus === 'partial' && (h <= 0 || h >= DAILY_TARGET_HOURS)) return false;
      if (appState.filterStatus === 'pending' && h > 0) return false;

      // Search Query
      if (q) {
        const matchTitle = d.title.toLowerCase().includes(q);
        const matchDesc = d.deliverables.toLowerCase().includes(q);
        const matchDay = `day ${d.day}`.includes(q) || d.day.toString() === q;
        const matchNotes = (d.notes || '').toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchDay && !matchNotes) return false;
      }

      return true;
    });

    // Update Filter Feedback Strip
    const feedbackSummary = document.getElementById('filter-status-summary');
    const clearBtn = document.getElementById('btn-clear-active-filter');
    const isFiltered = (appState.filterPhase !== 'all' || appState.filterStatus !== 'all' || q !== '');

    if (feedbackSummary) {
      if (isFiltered) {
        let msg = `Showing ${filteredDays.length} of 100 Days`;
        if (appState.filterPhase !== 'all') msg += ` &bull; Phase ${appState.filterPhase}`;
        if (appState.filterStatus !== 'all') msg += ` &bull; Status: ${appState.filterStatus}`;
        if (q) msg += ` &bull; Keyword: "${q}"`;
        feedbackSummary.innerHTML = msg;
        if (clearBtn) clearBtn.style.display = 'inline-flex';
      } else {
        feedbackSummary.innerHTML = `Showing All 100 Days &bull; 1,000 Hours Quota (Oct 29, 2026 &ndash; Feb 05, 2027)`;
        if (clearBtn) clearBtn.style.display = 'none';
      }
    }

    if (filteredDays.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle); color: var(--text-muted);">
          <p style="font-size: 1.1rem; color: #FFFFFF; font-weight: 700;">No fellowship days match your current filter.</p>
          <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">Click below to reset filters and view all 100 days.</p>
          <button class="btn btn-primary" id="btn-empty-reset" style="margin-top: 1rem;">Show All 100 Days</button>
        </div>
      `;
      const btnEmptyReset = document.getElementById('btn-empty-reset');
      if (btnEmptyReset) btnEmptyReset.addEventListener('click', resetAllFilters);
      return;
    }

    // Render cards
    filteredDays.forEach(d => {
      const hours = parseFloat(d.hours) || 0;
      let statusClass = 'pending';
      if (hours >= DAILY_TARGET_HOURS || d.completed) {
        statusClass = 'completed';
      } else if (hours > 0) {
        statusClass = 'partial';
      }

      const isToday = d.date === todayStr;

      const card = document.createElement('div');
      card.className = `day-card ${statusClass} ${isToday ? 'today-active' : ''}`;
      card.id = `day-card-${d.day}`;

      card.innerHTML = `
        <div class="day-meta-col">
          <div class="day-number-tag">
            <span>Day ${String(d.day).padStart(3, '0')}</span>
            ${isToday ? '<span class="status-dot pulse" title="Today"></span>' : ''}
          </div>
          <div class="day-date-str">${d.dateFormatted}</div>
          <span class="day-phase-chip">Phase ${d.phase}</span>
        </div>

        <div class="day-content-col">
          <div class="day-topic-title">${d.title}</div>
          <div class="day-deliverables">${d.deliverables}</div>
          ${d.notes ? `<div class="day-notes-preview"><strong>Engineering Note:</strong> ${escapeHtml(d.notes)}</div>` : ''}
        </div>

        <div class="day-action-col">
          <div class="hours-logger-widget">
            <button class="hours-stepper-btn btn-minus" data-day="${d.day}" title="Decrease 1 Hour">&minus;</button>
            <span class="hours-display-badge ${hours >= 10 ? 'text-green' : hours > 0 ? 'text-amber' : 'text-muted'}">${hours.toFixed(1)}h</span>
            <button class="hours-stepper-btn btn-plus" data-day="${d.day}" title="Increase 1 Hour">+</button>
          </div>

          <button class="quick-complete-btn ${hours >= 10 ? 'active' : ''}" data-day="${d.day}">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            ${hours >= 10 ? '10h Standard Done' : 'Mark 10h Completed'}
          </button>

          <div class="day-sub-actions">
            <button class="btn-icon-text btn-open-notes" data-day="${d.day}">
              ${d.notes ? 'Edit Log / Notes' : '+ Add Note'}
            </button>
          </div>
        </div>
      `;

      // Event Listeners for Card buttons
      const btnMinus = card.querySelector('.btn-minus');
      const btnPlus = card.querySelector('.btn-plus');
      const btnQuick = card.querySelector('.quick-complete-btn');
      const btnNotes = card.querySelector('.btn-open-notes');

      btnMinus.addEventListener('click', (e) => {
        e.stopPropagation();
        adjustDayHours(d.day, -1.0);
      });

      btnPlus.addEventListener('click', (e) => {
        e.stopPropagation();
        adjustDayHours(d.day, 1.0);
      });

      btnQuick.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFullDayStandard(d.day);
      });

      btnNotes.addEventListener('click', (e) => {
        e.stopPropagation();
        openEditModal(d.day);
      });

      container.appendChild(card);
    });
  }

  // Adjust Day Hours
  function adjustDayHours(dayNum, delta) {
    const dayIndex = appState.days.findIndex(d => d.day === dayNum);
    if (dayIndex === -1) return;

    let current = parseFloat(appState.days[dayIndex].hours) || 0;
    current = Math.max(0, Math.min(24, current + delta));
    appState.days[dayIndex].hours = parseFloat(current.toFixed(1));
    appState.days[dayIndex].completed = current >= DAILY_TARGET_HOURS;

    saveState();
    updateTelemetryUI();
    renderDaysList();

    if (current >= DAILY_TARGET_HOURS) {
      playSuccessTone();
      showToast(`Day ${dayNum}: 10-Hour commitment reached! Ledger updated.`, 'success');
    }
  }

  // Toggle 10h Full Standard
  function toggleFullDayStandard(dayNum) {
    const dayIndex = appState.days.findIndex(d => d.day === dayNum);
    if (dayIndex === -1) return;

    const current = parseFloat(appState.days[dayIndex].hours) || 0;
    if (current >= DAILY_TARGET_HOURS) {
      appState.days[dayIndex].hours = 0.0;
      appState.days[dayIndex].completed = false;
      showToast(`Day ${dayNum}: Reset to 0 hours.`, 'info');
    } else {
      appState.days[dayIndex].hours = DAILY_TARGET_HOURS;
      appState.days[dayIndex].completed = true;
      playSuccessTone();
      showToast(`Day ${dayNum}: Full 10 Hours logged successfully for Sidhant Saini!`, 'success');
    }

    saveState();
    updateTelemetryUI();
    renderDaysList();
  }

  // Quick Log Next Day
  function quickLogNextDay() {
    const nextDay = appState.days.find(d => (parseFloat(d.hours) || 0) < DAILY_TARGET_HOURS);
    if (!nextDay) {
      showToast('All 100 days have achieved the 10-hour standard! Target 1,000h fulfilled.', 'success');
      return;
    }

    nextDay.hours = DAILY_TARGET_HOURS;
    nextDay.completed = true;
    saveState();
    updateTelemetryUI();
    renderDaysList();
    playSuccessTone();

    showToast(`Quick Log: Day ${nextDay.day} marked with 10.0 Hours!`, 'success');
  }

  // Open Edit Modal for a Day
  function openEditModal(dayNum) {
    const day = appState.days.find(d => d.day === dayNum);
    if (!day) return;

    appState.editingDayIndex = day.day;

    const modal = document.getElementById('day-modal');
    const modalTitle = document.getElementById('modal-day-title');
    const modalDate = document.getElementById('modal-day-date');
    const hoursInput = document.getElementById('modal-hours-input');
    const notesInput = document.getElementById('modal-notes-input');

    modalTitle.textContent = `Log Hours & Deliverables: Day ${day.day}`;
    modalDate.textContent = `${day.dateFormatted} &bull; Phase ${day.phase}: ${day.title}`;
    hoursInput.value = day.hours || 10;
    notesInput.value = day.notes || '';

    updateModalSummary();

    document.querySelectorAll('.preset-pill').forEach(pill => {
      const h = parseFloat(pill.getAttribute('data-hours'));
      pill.classList.toggle('active', h === parseFloat(hoursInput.value));
    });

    modal.style.display = 'flex';
  }

  function closeModal() {
    const modal = document.getElementById('day-modal');
    if (modal) modal.style.display = 'none';
    appState.editingDayIndex = null;
  }

  function updateModalSummary() {
    const hoursInput = document.getElementById('modal-hours-input');
    const currentInputHours = parseFloat(hoursInput.value) || 0;

    let total = 0;
    appState.days.forEach(d => {
      if (d.day === appState.editingDayIndex) {
        total += currentInputHours;
      } else {
        total += (parseFloat(d.hours) || 0);
      }
    });

    const remaining = Math.max(0, TOTAL_TARGET_HOURS - total);
    const totalEl = document.getElementById('modal-calc-total');
    const remainingEl = document.getElementById('modal-calc-remaining');

    if (totalEl) totalEl.textContent = `${total.toFixed(1)} hrs`;
    if (remainingEl) remainingEl.textContent = `${remaining.toFixed(1)} hrs`;
  }

  function saveModalHours() {
    if (appState.editingDayIndex === null) return;

    const dayIndex = appState.days.findIndex(d => d.day === appState.editingDayIndex);
    if (dayIndex === -1) return;

    const hoursInput = document.getElementById('modal-hours-input');
    const notesInput = document.getElementById('modal-notes-input');

    const hours = Math.max(0, Math.min(24, parseFloat(hoursInput.value) || 0));
    const notes = notesInput.value.trim();

    appState.days[dayIndex].hours = parseFloat(hours.toFixed(1));
    appState.days[dayIndex].completed = hours >= DAILY_TARGET_HOURS;
    appState.days[dayIndex].notes = notes;

    saveState();
    updateTelemetryUI();
    renderDaysList();
    closeModal();

    if (hours >= DAILY_TARGET_HOURS) {
      playSuccessTone();
    }
    showToast(`Day ${appState.days[dayIndex].day} hours & deliverables saved.`, 'success');
  }

  // ==========================================================================
  // VALUABLE PROJECTS HUB ENGINE
  // ==========================================================================

  function renderProjectsGrid() {
    const container = document.getElementById('projects-grid-container');
    if (!container) return;

    container.innerHTML = '';

    const catFilter = appState.projectCategoryFilter;
    const filteredProjects = appState.projects.filter(p => {
      if (catFilter === 'all') return true;
      return p.category === catFilter;
    });

    filteredProjects.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.id = `project-card-${proj.id}`;

      let tagsHtml = '';
      if (proj.tags && proj.tags.length) {
        tagsHtml = proj.tags.map(t => `<span class="pc-tag">${escapeHtml(t)}</span>`).join('');
      }

      let checklistHtml = '';
      if (proj.deliverables && proj.deliverables.length) {
        checklistHtml = proj.deliverables.map((del, idx) => `
          <label class="pc-check-item ${del.done ? 'done' : ''}">
            <input type="checkbox" data-proj-id="${proj.id}" data-item-idx="${idx}" ${del.done ? 'checked' : ''}>
            <span>${escapeHtml(del.text)}</span>
          </label>
        `).join('');
      }

      card.innerHTML = `
        <div class="pc-top-row">
          <span class="pc-code">${proj.code}</span>
          <span class="pc-status-chip">${proj.status}</span>
        </div>

        <h3 class="pc-title">${escapeHtml(proj.title)}</h3>

        <div class="pc-val-box">
          <span class="pc-val-label">ESTIMATED VALUATION</span>
          <span class="pc-val-num text-gold">${proj.valuation}</span>
        </div>

        <p class="pc-desc">${escapeHtml(proj.desc)}</p>

        <div class="pc-tags">
          ${tagsHtml}
        </div>

        <div class="pc-checklist">
          <div class="pc-cl-title">VERIFIED DELIVERABLES & MODULES</div>
          ${checklistHtml}
        </div>

        <div class="pc-actions">
          <button class="btn btn-outline btn-view-spec" data-proj-id="${proj.id}">
            View Technical Spec
          </button>
        </div>
      `;

      // Checkbox click listener
      card.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', (e) => {
          const pId = e.target.getAttribute('data-proj-id');
          const idx = parseInt(e.target.getAttribute('data-item-idx'), 10);
          toggleProjectDeliverable(pId, idx, e.target.checked);
        });
      });

      // Spec modal listener
      const btnSpec = card.querySelector('.btn-view-spec');
      btnSpec.addEventListener('click', () => {
        openProjectSpecModal(proj.id);
      });

      container.appendChild(card);
    });
  }

  function toggleProjectDeliverable(projId, itemIdx, isChecked) {
    const proj = appState.projects.find(p => p.id === projId);
    if (!proj || !proj.deliverables || !proj.deliverables[itemIdx]) return;

    proj.deliverables[itemIdx].done = isChecked;
    saveState();
    renderProjectsGrid();

    if (isChecked) {
      playSuccessTone();
      showToast(`Milestone completed in ${proj.title}!`, 'success');
    }
  }

  function openProjectSpecModal(projId) {
    const proj = appState.projects.find(p => p.id === projId);
    if (!proj) return;

    const modal = document.getElementById('project-spec-modal');
    const title = document.getElementById('modal-proj-title');
    const meta = document.getElementById('modal-proj-meta');
    const body = document.getElementById('modal-proj-body');

    title.textContent = proj.title;
    meta.textContent = `${proj.code} &bull; ${proj.valuation} &bull; Architect: Sidhant Saini`;

    let specHtml = `
      <div class="proj-spec-section">
        <h4>1. EXECUTIVE ARCHITECTURE OVERVIEW</h4>
        <p>${escapeHtml(proj.desc)}</p>
      </div>

      <div class="proj-spec-section">
        <h4>2. TECHNICAL ARCHITECTURE & MODULE MAP</h4>
        <div class="code-snippet-box">
${escapeHtml(proj.spec ? proj.spec.architecture : 'Clean Architecture Multi-Module Split')}
        </div>
      </div>

      <div class="proj-spec-section">
        <h4>3. SECURITY & RUNTIME TELEMETRY</h4>
        <p>${escapeHtml(proj.spec ? proj.spec.security : 'Standard Google Play Integrity Attestation')}</p>
      </div>

      <div class="proj-spec-section">
        <h4>4. COMMERCIAL MONETIZATION & VALUATION LEVERS</h4>
        <p>${escapeHtml(proj.spec ? proj.spec.monetization : 'AdMob Open Bidding & In-App Subscriptions')}</p>
      </div>

      <div class="proj-spec-section">
        <h4>5. GOOGLE PLAY VITALS BENCHMARK</h4>
        <p>${escapeHtml(proj.spec ? proj.spec.playVitals : 'Crash rate < 0.1%, Cold startup < 400ms, R8 Shrinking')}</p>
      </div>
    `;

    body.innerHTML = specHtml;
    modal.style.display = 'flex';
  }

  function closeProjectSpecModal() {
    const modal = document.getElementById('project-spec-modal');
    if (modal) modal.style.display = 'none';
  }

  // Add Custom Project
  function initCustomProjectModal() {
    const btnAdd = document.getElementById('btn-add-custom-project');
    const modal = document.getElementById('custom-project-modal');
    const btnClose = document.getElementById('modal-custom-proj-close');
    const btnCancel = document.getElementById('modal-custom-proj-cancel');
    const btnSave = document.getElementById('modal-custom-proj-save');

    if (btnAdd && modal) {
      btnAdd.addEventListener('click', () => {
        modal.style.display = 'flex';
      });
    }

    if (btnClose && modal) {
      btnClose.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }

    if (btnCancel && modal) {
      btnCancel.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }

    if (btnSave && modal) {
      btnSave.addEventListener('click', () => {
        const nameInput = document.getElementById('cp-name');
        const catSelect = document.getElementById('cp-category');
        const valInput = document.getElementById('cp-val');
        const stackInput = document.getElementById('cp-stack');
        const descInput = document.getElementById('cp-desc');

        const title = nameInput.value.trim();
        if (!title) {
          showToast('Please enter a project name.', 'info');
          return;
        }

        const newId = `custom-p-${Date.now()}`;
        const newCode = `GAP-CUST-0${appState.projects.length + 1}`;
        const tags = stackInput.value.split(',').map(s => s.trim()).filter(Boolean);

        const newProject = {
          id: newId,
          code: newCode,
          category: catSelect.value,
          title: title,
          valuation: valInput.value.trim() || '₹25,00,000+ Potential Valuation',
          status: 'In Development',
          desc: descInput.value.trim() || 'Custom commercial Android project engineered for the Google Associate Program.',
          tags: tags.length ? tags : ['Kotlin', 'Jetpack Compose', 'Clean Architecture'],
          deliverables: [
            { text: "Core Architecture & Domain Layer Scaffold", done: true },
            { text: "UI System & Jetpack Compose Components", done: false },
            { text: "Monetization Engine & Release Pipeline", done: false }
          ],
          spec: {
            architecture: "Custom Multi-Module Architecture",
            security: "Play Integrity API verification",
            monetization: "AdMob Mediation & In-App Purchases",
            playVitals: "Crash rate < 0.1%, ANR rate < 0.47%"
          }
        };

        appState.projects.push(newProject);
        saveState();
        renderProjectsGrid();

        // Clear inputs
        nameInput.value = '';
        valInput.value = '';
        stackInput.value = '';
        descInput.value = '';
        modal.style.display = 'none';

        playSuccessTone();
        showToast(`Project "${title}" registered to your portfolio!`, 'success');
      });
    }
  }

  // Render Full Curriculum Accordion in Section 4
  function renderCurriculumAccordion() {
    const container = document.getElementById('curriculum-accordion-container');
    if (!container) return;

    container.innerHTML = '';

    PHASES_METADATA.forEach(meta => {
      const startIndex = (meta.phase - 1) * 10;
      const phaseTopics = CURRICULUM_TOPICS.slice(startIndex, startIndex + 10);

      const item = document.createElement('div');
      item.className = 'curriculum-phase-item';
      if (meta.phase === 1) item.classList.add('open');

      let topicsHtml = '';
      phaseTopics.forEach((top, idx) => {
        const dayNum = startIndex + idx + 1;
        topicsHtml += `
          <div class="topic-box">
            <h4>Day ${dayNum}: ${top.t}</h4>
            <p>${top.d}</p>
          </div>
        `;
      });

      item.innerHTML = `
        <div class="cpi-header">
          <div class="cpi-title-block">
            <span class="cpi-num">PHASE ${meta.phase}</span>
            <div>
              <div class="cpi-heading">${meta.title}</div>
              <div class="cpi-dates">${meta.days} &bull; ${meta.dates}</div>
            </div>
          </div>
          <svg class="cpi-toggle-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>
        <div class="cpi-body">
          <p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 1rem; line-height: 1.5;">${meta.desc}</p>
          <div class="curriculum-topics-grid">
            ${topicsHtml}
          </div>
        </div>
      `;

      const header = item.querySelector('.cpi-header');
      header.addEventListener('click', () => {
        item.classList.toggle('open');
      });

      container.appendChild(item);
    });
  }

  // Section Navigation Switching (Multi-Page Portal Behavior)
  function switchToSection(targetSectionId) {
    document.querySelectorAll('.portal-section').forEach(sec => {
      sec.classList.remove('active');
    });

    const targetSec = document.getElementById(targetSectionId);
    if (targetSec) {
      targetSec.classList.add('active');
    }

    const heroBanner = document.getElementById('hero-banner');
    if (heroBanner) {
      // Show hero banner only on dashboard overview, hide on other dedicated pages
      if (targetSectionId === 'dashboard-section') {
        heroBanner.classList.remove('banner-minimized');
      } else {
        heroBanner.classList.add('banner-minimized');
      }
    }

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-target') === targetSectionId);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Live Clock & Active Window Indicator
  function initLiveClock() {
    const clockEl = document.getElementById('live-clock');
    const dateBanner = document.getElementById('today-date-banner');

    function updateTime() {
      const now = new Date();
      if (clockEl) {
        clockEl.textContent = now.toLocaleTimeString('en-US', { hour12: false }) + ' IST';
      }
      if (dateBanner) {
        dateBanner.textContent = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
      }
    }

    updateTime();
    setInterval(updateTime, 1000);
  }

  // Focus Timer / Stopwatch Widget
  function initStopwatch() {
    const display = document.getElementById('stopwatch-display');
    const btnToggle = document.getElementById('btn-timer-toggle');
    const btnPause = document.getElementById('btn-timer-pause');
    const btnReset = document.getElementById('btn-timer-reset');
    const btnCommit = document.getElementById('btn-commit-timer-to-today');

    function formatTime(totalSec) {
      const hrs = Math.floor(totalSec / 3600);
      const mins = Math.floor((totalSec % 3600) / 60);
      const secs = totalSec % 60;
      return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function tick() {
      appState.timerElapsedSeconds++;
      if (display) display.textContent = formatTime(appState.timerElapsedSeconds);
    }

    btnToggle.addEventListener('click', () => {
      if (!appState.timerRunning) {
        appState.timerRunning = true;
        appState.timerIntervalId = setInterval(tick, 1000);
        btnToggle.textContent = 'Session Running...';
        btnToggle.classList.add('btn-accent');
        btnPause.disabled = false;
      }
    });

    btnPause.addEventListener('click', () => {
      if (appState.timerRunning) {
        clearInterval(appState.timerIntervalId);
        appState.timerRunning = false;
        btnToggle.textContent = 'Resume Session';
        btnToggle.classList.remove('btn-accent');
        btnPause.disabled = true;
      }
    });

    btnReset.addEventListener('click', () => {
      clearInterval(appState.timerIntervalId);
      appState.timerRunning = false;
      appState.timerElapsedSeconds = 0;
      if (display) display.textContent = '00:00:00';
      btnToggle.textContent = 'Start Focus Session';
      btnToggle.classList.remove('btn-accent');
      btnPause.disabled = true;
    });

    btnCommit.addEventListener('click', () => {
      const elapsedHours = (appState.timerElapsedSeconds / 3600);
      if (elapsedHours < 0.05) {
        showToast('Please record at least a few minutes of focus time before committing.', 'info');
        return;
      }

      const nextDay = appState.days.find(d => (parseFloat(d.hours) || 0) < DAILY_TARGET_HOURS);
      if (!nextDay) {
        showToast('All 100 days already completed!', 'info');
        return;
      }

      const added = parseFloat(elapsedHours.toFixed(1));
      const current = parseFloat(nextDay.hours) || 0;
      const newTotal = Math.min(24, current + added);
      nextDay.hours = parseFloat(newTotal.toFixed(1));
      nextDay.completed = newTotal >= DAILY_TARGET_HOURS;

      saveState();
      updateTelemetryUI();
      renderDaysList();

      showToast(`Committed +${added} hrs to Day ${nextDay.day} for Sidhant Saini.`, 'success');

      clearInterval(appState.timerIntervalId);
      appState.timerRunning = false;
      appState.timerElapsedSeconds = 0;
      if (display) display.textContent = '00:00:00';
      btnToggle.textContent = 'Start Focus Session';
      btnToggle.classList.remove('btn-accent');
      btnPause.disabled = true;
    });
  }

  // Export / Import Backup Data
  function initExportImport() {
    const btnExport = document.getElementById('btn-export-json');
    const inputImport = document.getElementById('import-json-input');

    if (btnExport) {
      btnExport.addEventListener('click', () => {
        const payload = {
          program: "Google Associate Engineering Program",
          candidateName: appState.candidateName,
          candidateId: appState.candidateId,
          exportedAt: new Date().toISOString(),
          totalTargetHours: TOTAL_TARGET_HOURS,
          aggregates: getAggregates(),
          days: appState.days,
          projects: appState.projects
        };

        const jsonStr = JSON.stringify(payload, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `google_associate_ledger_sidhant_saini_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('Hours Ledger & Projects successfully exported as JSON.', 'success');
      });
    }

    if (inputImport) {
      inputImport.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const parsed = JSON.parse(event.target.result);
            if (parsed.days && Array.isArray(parsed.days) && parsed.days.length === TOTAL_DAYS) {
              appState.days = parsed.days;
              if (parsed.projects) appState.projects = parsed.projects;
              appState.candidateName = 'Sidhant Saini';
              saveState();
              updateTelemetryUI();
              renderDaysList();
              renderProjectsGrid();
              showToast('Backup successfully imported! 100 days loaded.', 'success');
            } else {
              showToast('Invalid backup format: Must contain 100 days array.', 'info');
            }
          } catch (err) {
            showToast('Failed to parse JSON file.', 'info');
          }
        };
        reader.readAsText(file);
      });
    }
  }

  // Print Official PDF Audit
  function initPrintAudit() {
    const btnPrint = document.getElementById('btn-print-audit');
    if (btnPrint) {
      btnPrint.addEventListener('click', () => {
        switchToSection('audit-section');
        setTimeout(() => {
          window.print();
        }, 300);
      });
    }
  }

  // Helper Escape HTML
  function escapeHtml(text) {
    if (!text) return '';
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }

  // Setup DOM Event Listeners
  function setupEventListeners() {
    // Navigation Links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const target = link.getAttribute('data-target');
        switchToSection(target);
      });
    });

    // Dashboard Quick Actions
    const btnQuickLog = document.getElementById('btn-quick-log-today');
    if (btnQuickLog) {
      btnQuickLog.addEventListener('click', quickLogNextDay);
    }

    const btnJumpTracker = document.getElementById('btn-jump-tracker');
    if (btnJumpTracker) {
      btnJumpTracker.addEventListener('click', () => {
        switchToSection('tracker-section');
      });
    }

    const btnJumpProjects = document.getElementById('btn-jump-projects');
    if (btnJumpProjects) {
      btnJumpProjects.addEventListener('click', () => {
        switchToSection('projects-section');
      });
    }

    const btnStartTimerToday = document.getElementById('btn-start-timer-today');
    if (btnStartTimerToday) {
      btnStartTimerToday.addEventListener('click', () => {
        switchToSection('protocol-section');
      });
    }

    // Tracker Filter Controls: Reset Buttons
    const btnResetFilters = document.getElementById('btn-reset-filters');
    if (btnResetFilters) {
      btnResetFilters.addEventListener('click', resetAllFilters);
    }

    const btnClearActiveFilter = document.getElementById('btn-clear-active-filter');
    if (btnClearActiveFilter) {
      btnClearActiveFilter.addEventListener('click', resetAllFilters);
    }

    // Phase Pills Quick Bar
    document.querySelectorAll('.phase-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const phaseVal = pill.getAttribute('data-phase');
        setPhaseFilter(phaseVal);
      });
    });

    // Project Category Pills
    document.querySelectorAll('.proj-filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.proj-filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        appState.projectCategoryFilter = pill.getAttribute('data-cat');
        renderProjectsGrid();
      });
    });

    // Tracker Search Input
    const searchInput = document.getElementById('tracker-search-input');
    const searchWrapper = document.querySelector('.toolbar-search');
    const btnClearSearch = document.getElementById('btn-clear-search');

    if (searchInput) {
      searchInput.value = ''; // Ensure blank on load
      searchInput.addEventListener('input', (e) => {
        appState.searchQuery = e.target.value;
        if (searchWrapper) {
          searchWrapper.classList.toggle('has-input', e.target.value.length > 0);
        }
        renderDaysList();
      });
    }

    if (btnClearSearch && searchInput) {
      btnClearSearch.addEventListener('click', () => {
        searchInput.value = '';
        appState.searchQuery = '';
        if (searchWrapper) searchWrapper.classList.remove('has-input');
        renderDaysList();
      });
    }

    const phaseSelect = document.getElementById('filter-phase-select');
    if (phaseSelect) {
      phaseSelect.addEventListener('change', (e) => {
        setPhaseFilter(e.target.value);
      });
    }

    const statusSelect = document.getElementById('filter-status-select');
    if (statusSelect) {
      statusSelect.addEventListener('change', (e) => {
        appState.filterStatus = e.target.value;
        renderDaysList();
      });
    }

    // Project Spec Modal Dismiss
    const btnSpecDismiss = document.getElementById('modal-proj-dismiss-btn');
    const btnSpecClose = document.getElementById('modal-proj-close-btn');
    const specModal = document.getElementById('project-spec-modal');

    if (btnSpecDismiss) btnSpecDismiss.addEventListener('click', closeProjectSpecModal);
    if (btnSpecClose) btnSpecClose.addEventListener('click', closeProjectSpecModal);
    if (specModal) {
      specModal.addEventListener('click', (e) => {
        if (e.target === specModal) closeProjectSpecModal();
      });
    }

    // Modal Steppers & Presets
    const modalClose = document.getElementById('modal-close-btn');
    const modalCancel = document.getElementById('modal-cancel-btn');
    const modalSave = document.getElementById('modal-save-btn');
    const modalMinus = document.getElementById('modal-hours-minus');
    const modalPlus = document.getElementById('modal-hours-plus');
    const modalHoursInput = document.getElementById('modal-hours-input');

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalCancel) modalCancel.addEventListener('click', closeModal);
    if (modalSave) modalSave.addEventListener('click', saveModalHours);

    if (modalMinus) {
      modalMinus.addEventListener('click', () => {
        let val = parseFloat(modalHoursInput.value) || 0;
        val = Math.max(0, val - 1);
        modalHoursInput.value = val;
        updateModalSummary();
      });
    }

    if (modalPlus) {
      modalPlus.addEventListener('click', () => {
        let val = parseFloat(modalHoursInput.value) || 0;
        val = Math.min(24, val + 1);
        modalHoursInput.value = val;
        updateModalSummary();
      });
    }

    if (modalHoursInput) {
      modalHoursInput.addEventListener('input', updateModalSummary);
    }

    document.querySelectorAll('.preset-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const h = parseFloat(pill.getAttribute('data-hours'));
        modalHoursInput.value = h;
        document.querySelectorAll('.preset-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        updateModalSummary();
      });
    });

    const modalBackdrop = document.getElementById('day-modal');
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
      });
    }
  }

  // Application Entry Point
  function init() {
    loadState();
    initLiveClock();
    initStopwatch();
    initExportImport();
    initPrintAudit();
    initCustomProjectModal();
    setupEventListeners();

    renderCurriculumAccordion();
    renderProjectsGrid();
    updateTelemetryUI();
    renderDaysList();

    console.log('Google Associate Engineering Fellowship Portal initialized for Sidhant Saini.');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
