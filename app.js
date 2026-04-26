const STORAGE_KEY = "swapskill-frontend-state-v1";

const defaultState = {
  profile: {
    name: "Swapnil Jadhav",
    college: "AIT Pune - Computer Engineering",
    email: "",
    studentId: "",
    verified: false,
    pro: false,
    swapcoins: 760,
    trustScore: 94,
    streak: 12,
    referrals: 34,
    campaign: 52
  },
  filters: {
    mode: "ALL",
    category: "All",
    search: ""
  },
  listings: [
    {
      id: "L-101",
      title: "React frontend sprint",
      mode: "SWAP",
      category: "Coding",
      owner: "Aarav Mehta",
      college: "AIT Pune",
      rating: 4.9,
      value: 180,
      availability: "Tonight and weekends",
      description: "I can build a polished React interface and need a UI/UX audit for my hackathon dashboard.",
      demand: 92,
      saved: false
    },
    {
      id: "L-102",
      title: "Logo and pitch deck polish",
      mode: "RENT",
      category: "Design",
      owner: "Nisha Rao",
      college: "COEP Tech",
      rating: 4.8,
      value: 450,
      availability: "Weekday evenings",
      description: "Clean brand assets, investor deck layout, and social media launch tiles for student startups.",
      demand: 84,
      saved: false
    },
    {
      id: "L-103",
      title: "Learn Python debugging",
      mode: "LEARN",
      category: "Coding",
      owner: "Kabir Shah",
      college: "AIT Pune",
      rating: 4.7,
      value: 120,
      availability: "Morning slots",
      description: "Need help understanding stack traces, file handling, and API errors before a mini project demo.",
      demand: 78,
      saved: false
    },
    {
      id: "L-104",
      title: "Video editing for reels",
      mode: "RENT",
      category: "Video",
      owner: "Meera Kulkarni",
      college: "Symbiosis Pune",
      rating: 4.9,
      value: 350,
      availability: "48 hour delivery",
      description: "Fast cuts, captions, sound sync, and launch reels for campus clubs and hackathon projects.",
      demand: 89,
      saved: true
    },
    {
      id: "L-105",
      title: "DSA crash tutoring",
      mode: "SWAP",
      category: "Academics",
      owner: "Rohan Iyer",
      college: "PICT Pune",
      rating: 4.6,
      value: 160,
      availability: "Saturday 4 PM",
      description: "I teach arrays, recursion, and dynamic programming. Looking for presentation design help in exchange.",
      demand: 73,
      saved: false
    },
    {
      id: "L-106",
      title: "Guitar basics from zero",
      mode: "LEARN",
      category: "Music",
      owner: "Sara D'Souza",
      college: "Fergusson College",
      rating: 4.8,
      value: 90,
      availability: "Sunday afternoon",
      description: "Looking for a patient peer who can teach chords, rhythm, and one complete song over two sessions.",
      demand: 68,
      saved: false
    },
    {
      id: "L-107",
      title: "Excel dashboard build",
      mode: "RENT",
      category: "Business",
      owner: "Tanvi Patil",
      college: "BMCC Pune",
      rating: 4.7,
      value: 300,
      availability: "Next 3 days",
      description: "Budget trackers, charts, pivot tables, and clean dashboards for club finance teams.",
      demand: 81,
      saved: false
    },
    {
      id: "L-108",
      title: "Spoken English practice",
      mode: "SWAP",
      category: "Language",
      owner: "Imran Khan",
      college: "MIT WPU",
      rating: 4.5,
      value: 110,
      availability: "Daily 20 minutes",
      description: "Conversation practice and interview drills in exchange for help with basic web development.",
      demand: 76,
      saved: false
    }
  ],
  deals: [
    {
      id: "D-421",
      title: "React landing page audit",
      peer: "Aarav Mehta",
      mode: "SWAP",
      status: "In progress",
      progress: 64,
      coins: 160,
      escrow: 0,
      due: "Today 7:00 PM"
    },
    {
      id: "D-422",
      title: "Launch reel edit",
      peer: "Meera Kulkarni",
      mode: "RENT",
      status: "Escrow held",
      progress: 35,
      coins: 0,
      escrow: 350,
      due: "Tomorrow 6:00 PM"
    }
  ],
  wallet: [
    { id: "W-1", label: "Campus launch bonus", detail: "Founder account", amount: 300 },
    { id: "W-2", label: "Completed DSA tutoring", detail: "SwapCoin reward", amount: 120 },
    { id: "W-3", label: "Escrow hold", detail: "Launch reel edit", amount: -350 }
  ],
  reviews: [
    { id: "R-1", peer: "Nisha Rao", rating: 5, text: "Clear scope, fast delivery, and a strong design eye.", date: "Today" },
    { id: "R-2", peer: "Rohan Iyer", rating: 4, text: "Good DSA explanations and useful practice questions.", date: "Yesterday" }
  ],
  disputes: [
    { id: "DP-14", deal: "Excel dashboard build", issue: "Scope mismatch", status: "Mediation scheduled", notes: "Both peers agreed to revise deliverables." }
  ],
  portfolio: [
    { id: "P-1", title: "FloodSense landing page", type: "Frontend", impact: "Built a responsive pitch page for a hackathon demo.", rating: 5 },
    { id: "P-2", title: "Codeforces tracker UI", type: "Dashboard", impact: "Designed standings, filters, and contest status views.", rating: 5 }
  ],
  chat: {
    peer: "Aarav Mehta",
    messages: [
      { mine: false, text: "Hey, I can review your hackathon dashboard tonight.", time: "10:20" },
      { mine: true, text: "Perfect. I will send the Figma and repo link.", time: "10:22" }
    ]
  },
  activeTab: "deals"
};

let state = loadState();

const els = {
  mainNav: document.getElementById("mainNav"),
  searchInput: document.getElementById("searchInput"),
  categorySelect: document.getElementById("categorySelect"),
  listingGrid: document.getElementById("listingGrid"),
  matchResults: document.getElementById("matchResults"),
  valuationForm: document.getElementById("valuationForm"),
  valuationResult: document.getElementById("valuationResult"),
  dealList: document.getElementById("dealList"),
  walletBalance: document.getElementById("walletBalance"),
  walletLedger: document.getElementById("walletLedger"),
  portfolioGrid: document.getElementById("portfolioGrid"),
  analyticsGrid: document.getElementById("analyticsGrid"),
  reviewList: document.getElementById("reviewList"),
  disputeList: document.getElementById("disputeList"),
  leaderboardList: document.getElementById("leaderboardList"),
  badgeList: document.getElementById("badgeList"),
  recruiterList: document.getElementById("recruiterList"),
  verificationStatus: document.getElementById("verificationStatus"),
  profileName: document.getElementById("profileName"),
  profileCollege: document.getElementById("profileCollege"),
  profileStatus: document.getElementById("profileStatus"),
  heroCoinCount: document.getElementById("heroCoinCount"),
  heroTrustScore: document.getElementById("heroTrustScore"),
  liveTicker: document.getElementById("liveTicker"),
  streakCount: document.getElementById("streakCount"),
  referralCount: document.getElementById("referralCount"),
  campaignMeter: document.getElementById("campaignMeter"),
  badgeCount: document.getElementById("badgeCount"),
  chatDrawer: document.getElementById("chatDrawer"),
  chatPeer: document.getElementById("chatPeer"),
  chatLog: document.getElementById("chatLog"),
  detailBody: document.getElementById("detailBody"),
  disputeDealSelect: document.getElementById("disputeDealSelect"),
  toastRegion: document.getElementById("toastRegion")
};

document.addEventListener("DOMContentLoaded", () => {
  bindEvents();
  render();
  syncIcons();
});

function bindEvents() {
  document.addEventListener("click", handleAction);
  document.getElementById("postForm").addEventListener("submit", handlePostSubmit);
  document.getElementById("verificationForm").addEventListener("submit", handleVerificationSubmit);
  document.getElementById("reviewForm").addEventListener("submit", handleReviewSubmit);
  document.getElementById("disputeForm").addEventListener("submit", handleDisputeSubmit);
  document.getElementById("chatForm").addEventListener("submit", handleChatSubmit);
  els.valuationForm.addEventListener("submit", handleValuationSubmit);
  els.searchInput.addEventListener("input", (event) => {
    state.filters.search = event.target.value;
    saveState();
    renderListings();
  });
  els.categorySelect.addEventListener("change", (event) => {
    state.filters.category = event.target.value;
    saveState();
    renderListings();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllModals();
      closeChat();
      closeMenu();
    }
  });
}

function handleAction(event) {
  const trigger = event.target.closest("[data-action]");
  if (!trigger) return;

  const action = trigger.dataset.action;
  const id = trigger.dataset.id;
  const mode = trigger.dataset.mode;
  const tab = trigger.dataset.tab;

  if (action === "toggle-menu") toggleMenu();
  if (action === "set-mode") setMode(mode);
  if (action === "open-post-modal") openModal("postModal");
  if (action === "open-verification") openModal("verificationModal");
  if (action === "close-modal") closeAllModals();
  if (action === "view-listing") openListingDetail(id);
  if (action === "request-listing") requestListing(id);
  if (action === "message-peer") openChat(id);
  if (action === "bookmark-listing") toggleBookmark(id);
  if (action === "generate-matches") generateMatches(true);
  if (action === "save-match") saveMatch(id);
  if (action === "start-match") startMatch(id);
  if (action === "switch-tab") switchTab(tab);
  if (action === "advance-deal") advanceDeal(id);
  if (action === "release-escrow") releaseEscrow(id);
  if (action === "open-review") openModal("reviewModal");
  if (action === "open-dispute") openDisputeModal(id);
  if (action === "simulate-escrow") simulateEscrow();
  if (action === "earn-coins") earnCoins();
  if (action === "upgrade-pro") togglePro();
  if (action === "copy-invite") copyInvite();
  if (action === "add-referral") addReferral();
  if (action === "launch-campaign") launchCampaign();
  if (action === "reset-demo") resetDemo();
  if (action === "close-chat") closeChat();
}

function render() {
  els.searchInput.value = state.filters.search;
  els.categorySelect.value = state.filters.category;
  renderProfile();
  renderModeControls();
  renderTicker();
  renderListings();
  generateMatches(false);
  renderDeals();
  renderWallet();
  renderPortfolio();
  renderAnalytics();
  renderReviews();
  renderDisputes();
  renderGrowth();
  renderChat();
  renderDisputeOptions();
  switchTab(state.activeTab, false);
  syncIcons();
}

function renderProfile() {
  els.profileName.textContent = state.profile.name;
  els.profileCollege.textContent = state.profile.college;
  els.heroCoinCount.textContent = state.profile.swapcoins;
  els.heroTrustScore.textContent = state.profile.trustScore;
  els.streakCount.textContent = `${state.profile.streak} day streak`;
  els.referralCount.textContent = `${state.profile.referrals} referrals`;
  els.campaignMeter.style.width = `${Math.min(state.profile.campaign, 100)}%`;

  if (state.profile.verified) {
    els.verificationStatus.textContent = "Campus verified";
    els.verificationStatus.classList.add("verified");
    els.profileStatus.textContent = "Campus verified profile";
    els.profileStatus.classList.add("verified");
  } else {
    els.verificationStatus.textContent = "Unverified";
    els.verificationStatus.classList.remove("verified");
    els.profileStatus.textContent = "Campus verification pending";
    els.profileStatus.classList.remove("verified");
  }
}

function renderModeControls() {
  document.querySelectorAll("[data-action='set-mode']").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.filters.mode);
  });
}

function renderTicker() {
  const recent = [
    ["Nisha", "published a design rental"],
    ["Aarav", "matched for a React swap"],
    ["Meera", "released escrow after delivery"],
    ["Rohan", "earned a Tutor badge"]
  ];

  els.liveTicker.innerHTML = recent
    .map((item) => `<div class="ticker-item"><span><strong>${item[0]}</strong> ${item[1]}</span><span>Live</span></div>`)
    .join("");
}

function renderListings() {
  const search = state.filters.search.trim().toLowerCase();
  const filtered = state.listings.filter((listing) => {
    const matchesMode = state.filters.mode === "ALL" || listing.mode === state.filters.mode;
    const matchesCategory = state.filters.category === "All" || listing.category === state.filters.category;
    const matchesSearch = !search || [listing.title, listing.description, listing.owner, listing.category].join(" ").toLowerCase().includes(search);
    return matchesMode && matchesCategory && matchesSearch;
  });

  if (!filtered.length) {
    els.listingGrid.innerHTML = `
      <div class="empty-state">
        <h3>No listings found</h3>
        <p>Try another mode, category, or search term.</p>
        <button class="button" type="button" data-action="open-post-modal">
          <i data-lucide="plus"></i>
          Add First Listing
        </button>
      </div>
    `;
    syncIcons();
    return;
  }

  els.listingGrid.innerHTML = filtered
    .map(
      (listing) => `
      <article class="skill-card">
        <div class="card-topline">
          <span class="mode-badge">${listing.mode}</span>
          <button class="icon-button" type="button" data-action="bookmark-listing" data-id="${listing.id}" aria-label="Save ${escapeHtml(listing.title)}">
            <i data-lucide="${listing.saved ? "bookmark-check" : "bookmark"}"></i>
          </button>
        </div>
        <div>
          <span class="category-badge">${listing.category}</span>
          <h3>${escapeHtml(listing.title)}</h3>
          <p>${escapeHtml(listing.description)}</p>
        </div>
        <div class="skill-meta">
          <span>${escapeHtml(listing.owner)} - ${escapeHtml(listing.college)}</span>
          <span>Rating ${listing.rating.toFixed(1)} - Demand ${listing.demand}%</span>
          <span>${listing.mode === "RENT" ? `Rs ${listing.value}` : `${listing.value} SwapCoins`} - ${escapeHtml(listing.availability)}</span>
        </div>
        <div class="card-actions">
          <button class="button" type="button" data-action="request-listing" data-id="${listing.id}">
            <i data-lucide="${listing.mode === "RENT" ? "credit-card" : "repeat-2"}"></i>
            ${listing.mode === "RENT" ? "Rent" : listing.mode === "LEARN" ? "Learn" : "Swap"}
          </button>
          <button class="button button-secondary" type="button" data-action="view-listing" data-id="${listing.id}">
            <i data-lucide="panel-top-open"></i>
            View
          </button>
          <button class="button button-secondary" type="button" data-action="message-peer" data-id="${listing.id}">
            <i data-lucide="message-square"></i>
            Chat
          </button>
        </div>
      </article>
    `
    )
    .join("");
  syncIcons();
}

function generateMatches(showToast = false) {
  const matches = state.listings
    .slice()
    .sort((a, b) => b.demand - a.demand)
    .slice(0, 4)
    .map((listing, index) => ({
      ...listing,
      score: Math.min(98, listing.demand + 5 + index),
      reason: listing.mode === "SWAP" ? "Balanced barter value" : listing.mode === "RENT" ? "Strong delivery history" : "High learning fit"
    }));

  els.matchResults.innerHTML = matches
    .map(
      (match) => `
      <article class="match-card">
        <div class="match-meta">
          <span class="mode-badge">${match.mode}</span>
          <span>${match.score}% fit</span>
        </div>
        <div>
          <h3>${escapeHtml(match.title)}</h3>
          <p>${escapeHtml(match.reason)} with ${escapeHtml(match.owner)} from ${escapeHtml(match.college)}.</p>
        </div>
        <div class="match-score">
          <span>Compatibility</span>
          <div><span style="width: ${match.score}%"></span></div>
        </div>
        <div class="card-actions">
          <button class="button button-dark" type="button" data-action="start-match" data-id="${match.id}">
            <i data-lucide="play"></i>
            Start
          </button>
          <button class="button button-dark button-secondary" type="button" data-action="save-match" data-id="${match.id}">
            <i data-lucide="bookmark-plus"></i>
            Save
          </button>
        </div>
      </article>
    `
    )
    .join("");

  if (showToast) showToastMessage("Matches refreshed", "The engine recalculated fit using demand, rating, and SwapCoin value.");
  syncIcons();
}

function renderDeals() {
  if (!state.deals.length) {
    els.dealList.innerHTML = `<div class="empty-state"><h3>No active deals</h3><p>Start a swap, rent a skill, or publish a learning request.</p></div>`;
    return;
  }

  els.dealList.innerHTML = state.deals
    .map(
      (deal) => `
      <article class="deal-card">
        <div class="deal-topline">
          <div>
            <span class="mode-badge">${deal.mode}</span>
            <h3>${escapeHtml(deal.title)}</h3>
          </div>
          <span class="status-badge">${escapeHtml(deal.status)}</span>
        </div>
        <p>${escapeHtml(deal.peer)} - Due ${escapeHtml(deal.due)} - ${deal.escrow ? `Rs ${deal.escrow} in escrow` : `${deal.coins} SwapCoins`}</p>
        <div class="progress-track" aria-label="Progress ${deal.progress}%"><span style="width: ${deal.progress}%"></span></div>
        <div class="deal-actions">
          <button class="button" type="button" data-action="advance-deal" data-id="${deal.id}">
            <i data-lucide="activity"></i>
            Advance
          </button>
          <button class="button button-secondary" type="button" data-action="release-escrow" data-id="${deal.id}">
            <i data-lucide="unlock"></i>
            Complete
          </button>
          <button class="button button-secondary" type="button" data-action="open-review" data-id="${deal.id}">
            <i data-lucide="star"></i>
            Review
          </button>
          <button class="button button-secondary" type="button" data-action="open-dispute" data-id="${deal.id}">
            <i data-lucide="scale"></i>
            Dispute
          </button>
        </div>
      </article>
    `
    )
    .join("");
  syncIcons();
}

function renderWallet() {
  els.walletBalance.textContent = state.profile.swapcoins;
  els.walletLedger.innerHTML = state.wallet
    .map(
      (item) => `
      <div class="ledger-row">
        <div>
          <strong>${escapeHtml(item.label)}</strong>
          <small>${escapeHtml(item.detail)}</small>
        </div>
        <strong class="${item.amount >= 0 ? "positive" : "negative"}">${item.amount >= 0 ? "+" : ""}${item.amount}</strong>
      </div>
    `
    )
    .join("");
}

function renderPortfolio() {
  els.portfolioGrid.innerHTML = state.portfolio
    .map(
      (item) => `
      <article class="portfolio-card">
        <div class="portfolio-meta">
          <span class="mode-badge">${escapeHtml(item.type)}</span>
          <span>${item.rating}/5</span>
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.impact)}</p>
      </article>
    `
    )
    .join("");
}

function renderAnalytics() {
  const proLabel = state.profile.pro ? "Pro active" : "Upgrade to unlock";
  const totalDemand = Math.round(state.listings.reduce((sum, listing) => sum + listing.demand, 0) / state.listings.length);
  els.analyticsGrid.innerHTML = `
    <article class="analytics-card"><strong>${totalDemand}%</strong><span>Average campus demand</span></article>
    <article class="analytics-card"><strong>${state.listings.filter((listing) => listing.saved).length}</strong><span>Saved opportunities</span></article>
    <article class="analytics-card"><strong>${proLabel}</strong><span>Profile viewers, demand trends, and priority listing</span></article>
  `;
}

function renderReviews() {
  els.reviewList.innerHTML = state.reviews
    .map(
      (review) => `
      <article class="review-card">
        <div class="card-topline">
          <strong>${escapeHtml(review.peer)}</strong>
          <span>${review.rating}/5</span>
        </div>
        <p>${escapeHtml(review.text)}</p>
        <span class="status-badge">${escapeHtml(review.date)}</span>
      </article>
    `
    )
    .join("");
}

function renderDisputes() {
  els.disputeList.innerHTML = state.disputes
    .map(
      (dispute) => `
      <article class="dispute-card">
        <div class="card-topline">
          <strong>${escapeHtml(dispute.deal)}</strong>
          <span class="status-badge">${escapeHtml(dispute.status)}</span>
        </div>
        <p>${escapeHtml(dispute.issue)} - ${escapeHtml(dispute.notes)}</p>
      </article>
    `
    )
    .join("");
}

function renderGrowth() {
  const leaderboard = [
    ["Swapnil", "1,420 pts"],
    ["Nisha", "1,280 pts"],
    ["Aarav", "1,105 pts"],
    ["Meera", "980 pts"]
  ];

  const badges = ["Verified Builder", "Fast Responder", "Swap Streak", "Top Tutor", "Launch Lead"];
  const recruiters = [
    ["Frontend", "18 verified profiles"],
    ["Design", "12 verified profiles"],
    ["Video", "9 verified profiles"]
  ];

  els.leaderboardList.innerHTML = leaderboard
    .map(
      (row, index) => `
      <div class="leaderboard-row">
        <div><strong>#${index + 1} ${row[0]}</strong><span>Campus contributor</span></div>
        <strong>${row[1]}</strong>
      </div>
    `
    )
    .join("");

  els.badgeList.innerHTML = badges.map((badge) => `<div class="badge-chip"><span class="coin-badge">${escapeHtml(badge)}</span></div>`).join("");
  els.badgeCount.textContent = `${badges.length} earned`;
  els.recruiterList.innerHTML = recruiters
    .map((row) => `<div class="recruiter-row"><strong>${row[0]}</strong><span>${row[1]}</span></div>`)
    .join("");
}

function renderChat() {
  els.chatPeer.textContent = state.chat.peer;
  els.chatLog.innerHTML = state.chat.messages
    .map(
      (message) => `
      <div class="message ${message.mine ? "mine" : ""}">
        <small>${message.mine ? "You" : escapeHtml(state.chat.peer)} - ${escapeHtml(message.time)}</small>
        ${escapeHtml(message.text)}
      </div>
    `
    )
    .join("");
  els.chatLog.scrollTop = els.chatLog.scrollHeight;
}

function renderDisputeOptions() {
  els.disputeDealSelect.innerHTML = state.deals
    .map((deal) => `<option value="${deal.id}">${escapeHtml(deal.title)} - ${escapeHtml(deal.peer)}</option>`)
    .join("");
}

function setMode(mode) {
  state.filters.mode = mode;
  saveState();
  renderModeControls();
  renderListings();
  document.getElementById("marketplace").scrollIntoView({ behavior: "smooth", block: "start" });
  closeMenu();
}

function handlePostSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const title = String(formData.get("title")).trim();
  const mode = String(formData.get("mode"));
  const value = Number(formData.get("value"));

  state.listings.unshift({
    id: uniqueId("L"),
    title,
    mode,
    category: String(formData.get("category")),
    owner: state.profile.name,
    college: "Your campus",
    rating: 5,
    value,
    availability: String(formData.get("availability")).trim(),
    description: String(formData.get("description")).trim(),
    demand: Math.min(99, 70 + Math.floor(Math.random() * 25)),
    saved: false
  });

  state.wallet.unshift({ id: uniqueId("W"), label: "Listing reward", detail: title, amount: 20 });
  state.profile.swapcoins += 20;
  saveState();
  closeAllModals();
  event.currentTarget.reset();
  render();
  showToastMessage("Listing published", "Your skill is live and 20 SwapCoins were added.");
}

function handleVerificationSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  state.profile.name = String(formData.get("name")).trim();
  state.profile.college = String(formData.get("college")).trim();
  state.profile.email = String(formData.get("email")).trim();
  state.profile.studentId = String(formData.get("studentId")).trim();
  state.profile.verified = true;
  state.profile.trustScore = Math.min(100, state.profile.trustScore + 4);
  saveState();
  closeAllModals();
  render();
  showToastMessage("Campus verified", "Trust score increased and verified actions are unlocked.");
}

function handleReviewSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const rating = Number(formData.get("rating"));
  state.reviews.unshift({
    id: uniqueId("R"),
    peer: String(formData.get("peer")).trim(),
    rating,
    text: String(formData.get("text")).trim(),
    date: "Just now"
  });
  state.profile.trustScore = Math.min(100, state.profile.trustScore + rating);
  state.profile.streak += 1;
  saveState();
  closeAllModals();
  render();
  showToastMessage("Review saved", "Dual feedback updated your trust and streak metrics.");
}

function handleDisputeSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const deal = state.deals.find((item) => item.id === formData.get("dealId"));
  state.disputes.unshift({
    id: uniqueId("DP"),
    deal: deal ? deal.title : "Manual dispute",
    issue: String(formData.get("issue")),
    status: "Mediation opened",
    notes: String(formData.get("notes")).trim()
  });
  saveState();
  closeAllModals();
  renderDisputes();
  showToastMessage("Dispute opened", "A mediation record was added to the frontend dispute desk.");
}

function handleChatSubmit(event) {
  event.preventDefault();
  const input = event.currentTarget.elements.message;
  const text = input.value.trim();
  if (!text) return;
  state.chat.messages.push({ mine: true, text, time: currentTime() });
  input.value = "";
  saveState();
  renderChat();
  setTimeout(() => {
    state.chat.messages.push({ mine: false, text: "Got it. I will confirm the slot and scope.", time: currentTime() });
    saveState();
    renderChat();
  }, 450);
}

function handleValuationSubmit(event) {
  event.preventDefault();
  const hours = Number(document.getElementById("hoursInput").value || 1);
  const mySkill = document.getElementById("mySkillSelect").value;
  const neededSkill = document.getElementById("neededSkillSelect").value;
  const coins = Math.max(40, hours * 40);
  els.valuationResult.innerHTML = `<strong>${coins} SwapCoins</strong><span>${escapeHtml(mySkill)} for ${escapeHtml(neededSkill)} across ${hours} hour${hours === 1 ? "" : "s"}.</span>`;
  showToastMessage("Value calculated", `${coins} SwapCoins is the suggested fair barter value.`);
}

function requestListing(id) {
  const listing = findListing(id);
  if (!listing) return;

  if (!state.profile.verified) {
    openModal("verificationModal");
    showToastMessage("Verification needed", "Campus verification is required before starting a transaction.");
    return;
  }

  const deal = {
    id: uniqueId("D"),
    title: listing.title,
    peer: listing.owner,
    mode: listing.mode,
    status: listing.mode === "RENT" ? "Escrow held" : "Match requested",
    progress: listing.mode === "RENT" ? 18 : 12,
    coins: listing.mode === "RENT" ? 0 : listing.value,
    escrow: listing.mode === "RENT" ? listing.value : 0,
    due: "48 hours"
  };

  state.deals.unshift(deal);
  if (listing.mode !== "RENT") {
    state.profile.swapcoins = Math.max(0, state.profile.swapcoins - listing.value);
    state.wallet.unshift({ id: uniqueId("W"), label: "SwapCoin hold", detail: listing.title, amount: -listing.value });
  }
  saveState();
  render();
  switchTab("deals");
  showToastMessage("Transaction created", `${listing.title} was added to active deals.`);
}

function openListingDetail(id) {
  const listing = findListing(id);
  if (!listing) return;
  els.detailBody.innerHTML = `
    <div class="listing-detail">
      <span class="mode-badge">${listing.mode}</span>
      <p>${escapeHtml(listing.description)}</p>
      <div class="detail-stats">
        <div><strong>${listing.rating.toFixed(1)}</strong><span>Peer rating</span></div>
        <div><strong>${listing.demand}%</strong><span>Demand score</span></div>
        <div><strong>${listing.mode === "RENT" ? `Rs ${listing.value}` : `${listing.value}`}</strong><span>${listing.mode === "RENT" ? "Project price" : "SwapCoins"}</span></div>
      </div>
      <div class="skill-meta">
        <span>${escapeHtml(listing.owner)} - ${escapeHtml(listing.college)}</span>
        <span>${escapeHtml(listing.category)} - ${escapeHtml(listing.availability)}</span>
      </div>
      <div class="card-actions">
        <button class="button" type="button" data-action="request-listing" data-id="${listing.id}">
          <i data-lucide="repeat-2"></i>
          Start ${listing.mode}
        </button>
        <button class="button button-secondary" type="button" data-action="message-peer" data-id="${listing.id}">
          <i data-lucide="message-square"></i>
          Chat
        </button>
      </div>
    </div>
  `;
  document.getElementById("detailTitle").textContent = listing.title;
  openModal("detailModal");
  syncIcons();
}

function openChat(id) {
  const listing = findListing(id);
  if (listing) {
    state.chat.peer = listing.owner;
    state.chat.messages = [
      { mine: false, text: `I am available for ${listing.title}.`, time: currentTime() },
      { mine: true, text: "Great. Let us lock scope and timeline.", time: currentTime() }
    ];
  }
  saveState();
  renderChat();
  els.chatDrawer.classList.add("is-open");
  els.chatDrawer.setAttribute("aria-hidden", "false");
  closeAllModals();
}

function closeChat() {
  els.chatDrawer.classList.remove("is-open");
  els.chatDrawer.setAttribute("aria-hidden", "true");
}

function toggleBookmark(id) {
  const listing = findListing(id);
  if (!listing) return;
  listing.saved = !listing.saved;
  saveState();
  renderListings();
  renderAnalytics();
  showToastMessage(listing.saved ? "Saved" : "Removed", `${listing.title} ${listing.saved ? "was saved" : "was removed from saved opportunities"}.`);
}

function saveMatch(id) {
  toggleBookmark(id);
}

function startMatch(id) {
  requestListing(id);
}

function advanceDeal(id) {
  const deal = state.deals.find((item) => item.id === id);
  if (!deal) return;
  deal.progress = Math.min(100, deal.progress + 20);
  deal.status = deal.progress >= 100 ? "Ready for review" : "In progress";
  saveState();
  renderDeals();
  showToastMessage("Deal advanced", `${deal.title} is now ${deal.progress}% complete.`);
}

function releaseEscrow(id) {
  const deal = state.deals.find((item) => item.id === id);
  if (!deal) return;
  deal.progress = 100;
  deal.status = "Completed";
  if (!state.portfolio.some((item) => item.title === deal.title)) {
    state.portfolio.unshift({
      id: uniqueId("P"),
      title: deal.title,
      type: deal.mode,
      impact: `Completed with ${deal.peer} through SwapSkill.`,
      rating: 5
    });
  }
  if (deal.coins) {
    state.profile.swapcoins += Math.round(deal.coins / 2);
    state.wallet.unshift({ id: uniqueId("W"), label: "Completion reward", detail: deal.title, amount: Math.round(deal.coins / 2) });
  }
  state.profile.trustScore = Math.min(100, state.profile.trustScore + 2);
  saveState();
  render();
  showToastMessage("Deal completed", "Portfolio, trust score, and wallet records were updated.");
}

function openDisputeModal(id) {
  renderDisputeOptions();
  if (id) els.disputeDealSelect.value = id;
  openModal("disputeModal");
}

function simulateEscrow() {
  const deal = {
    id: uniqueId("D"),
    title: "Escrow simulation",
    peer: "Demo Peer",
    mode: "RENT",
    status: "Escrow held",
    progress: 10,
    coins: 0,
    escrow: 500,
    due: "Demo timeline"
  };
  state.deals.unshift(deal);
  state.wallet.unshift({ id: uniqueId("W"), label: "Escrow simulation", detail: deal.title, amount: -500 });
  saveState();
  render();
  switchTab("deals");
  showToastMessage("Escrow simulated", "A rental deal with held payment was added.");
}

function earnCoins() {
  state.profile.swapcoins += 75;
  state.wallet.unshift({ id: uniqueId("W"), label: "Campus bonus claimed", detail: "Daily engagement reward", amount: 75 });
  saveState();
  renderProfile();
  renderWallet();
  showToastMessage("Bonus claimed", "75 SwapCoins were added to the wallet.");
}

function togglePro() {
  state.profile.pro = !state.profile.pro;
  saveState();
  renderAnalytics();
  showToastMessage(state.profile.pro ? "SwapSkill Pro active" : "Pro disabled", state.profile.pro ? "Priority listing and analytics are now enabled." : "The demo profile returned to the free tier.");
}

async function copyInvite() {
  const invite = "Join SwapSkill at AIT Pune: https://swapskill.in/invite/MrSJx";
  try {
    await navigator.clipboard.writeText(invite);
    showToastMessage("Invite copied", "Campus invite link copied to clipboard.");
  } catch {
    showToastMessage("Invite ready", invite);
  }
}

function addReferral() {
  state.profile.referrals += 1;
  state.profile.campaign = Math.min(100, state.profile.campaign + 3);
  state.profile.swapcoins += 10;
  state.wallet.unshift({ id: uniqueId("W"), label: "Referral reward", detail: "Campus ambassador program", amount: 10 });
  saveState();
  renderProfile();
  renderWallet();
  showToastMessage("Referral logged", "Referral count, campaign momentum, and wallet were updated.");
}

function launchCampaign() {
  state.profile.campaign = Math.min(100, state.profile.campaign + 18);
  saveState();
  renderProfile();
  showToastMessage("Whisper campaign launched", "Launch momentum increased across the campus ambassador kit.");
}

function switchTab(tab, persist = true) {
  state.activeTab = tab || "deals";
  document.querySelectorAll(".tab").forEach((button) => {
    const active = button.dataset.tab === state.activeTab;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.toggle("active", panel.id === `tab-${state.activeTab}`));
  if (persist) saveState();
}

function resetDemo() {
  localStorage.removeItem(STORAGE_KEY);
  state = structuredClone(defaultState);
  render();
  showToastMessage("Demo reset", "The frontend state returned to the original SwapSkill MVP data.");
}

function toggleMenu() {
  els.mainNav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", els.mainNav.classList.contains("is-open"));
}

function closeMenu() {
  els.mainNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

function openModal(id) {
  closeMenu();
  document.querySelectorAll(".modal").forEach((modal) => {
    const open = modal.id === id;
    modal.classList.toggle("is-open", open);
    modal.setAttribute("aria-hidden", String(!open));
  });
}

function closeAllModals() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  });
}

function findListing(id) {
  return state.listings.find((listing) => listing.id === id);
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? mergeState(structuredClone(defaultState), JSON.parse(stored)) : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function mergeState(base, saved) {
  return {
    ...base,
    ...saved,
    profile: { ...base.profile, ...saved.profile },
    filters: { ...base.filters, ...saved.filters },
    chat: { ...base.chat, ...saved.chat }
  };
}

function uniqueId(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

function currentTime() {
  return new Intl.DateTimeFormat("en", { hour: "2-digit", minute: "2-digit" }).format(new Date());
}

function showToastMessage(title, message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<strong>${escapeHtml(title)}</strong><span>${escapeHtml(message)}</span>`;
  els.toastRegion.appendChild(toast);
  setTimeout(() => toast.remove(), 4200);
}

function syncIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
