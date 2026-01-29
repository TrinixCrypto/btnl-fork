function init(){
    const saved = localStorage.getItem('activeTab') || 'home';
    const btn = document.querySelector(`.nav-btn[onclick*="${saved}"]`);
    if (btn) tab(saved, btn);
}

function tab(id, el){
movePill(el);
document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
el.classList.add('active');

document.querySelectorAll('.page-wrap').forEach(p=>p.classList.remove('active'));
document.getElementById(id+'-tab').classList.add('active');

window.scrollTo({top:0,behavior:'smooth'});

localStorage.setItem('activeTab', id);
}

function movePill(el){
    const pill=document.getElementById('nav-pill');
pill.style.width=el.offsetWidth+'px';
pill.style.left=el.offsetLeft+'px';
}

function openModal(html){
document.getElementById('modalContent').innerHTML=html;
document.getElementById('modal').classList.add('open');
}

function closeModal(){
document.getElementById('modal').classList.remove('open');
}

/* ===== UPDATE CONTENT ===== */
const update01 = `
<div class="space-y-8">

    <div>
        <span class="card-tag">STABLE</span>
        <h2 class="text-3xl font-black text-white mt-2">
            Discord Update 01.01
        </h2>
        <p class="text-gray-500 text-sm mt-2">
            Major embed overhaul, moderation expansion, and the introduction of a comprehensive booster perk system.
        </p>
    </div>

    <div class="space-y-4">
        <h3 class="text-white font-bold text-lg">General Updates</h3>
        <ul class="space-y-2 text-gray-400 text-sm leading-relaxed list-disc list-inside">
            <li>Embeds updated across the server for improved clarity and consistency</li>
            <li>New embed types introduced: info, notice, teaser, and event</li>
            <li>Additional AutoMod rules deployed to mitigate spam and abuse</li>
            <li>Role icons added to improve hierarchy visibility</li>
            <li>Notification roles introduced for notices, previews, and events</li>
        </ul>
    </div>

    <div class="space-y-4">
        <h3 class="text-white font-bold text-lg">Booster Perks Added</h3>
        <ul class="space-y-2 text-gray-400 text-sm leading-relaxed list-disc list-inside">
            <li>10,000 economy currency granted per boost</li>
            <li>Expanded embed, attachment, and reaction permissions</li>
            <li>Access to external emojis, stickers, soundboard, and activities</li>
            <li>Slowmode bypass and custom voice status access</li>
        </ul>
    </div>

</div>
`;

const update02 = `
<div class="space-y-8">

    <div>
        <span class="card-tag">STABLE</span>
        <h2 class="text-3xl font-black text-white mt-2">
            Discord Update 01.02
        </h2>
        <p class="text-gray-500 text-sm mt-2">
            Automation improvements, server boost integration, and the launch of a structured bug reporting system.
        </p>
    </div>

    <div class="space-y-4">
        <h3 class="text-white font-bold text-lg">System & Automation Updates</h3>
        <ul class="space-y-2 text-gray-400 text-sm leading-relaxed list-disc list-inside">
            <li>Synthova Community Bot now automatically applies economy rewards when a user boosts the server</li>
            <li>No manual staff intervention is required for booster rewards</li>
        </ul>
    </div>

    <div class="space-y-4">
        <h3 class="text-white font-bold text-lg">Bug Reporting System</h3>
        <ul class="space-y-2 text-gray-400 text-sm leading-relaxed list-disc list-inside">
            <li>Users receive an automatic confirmation upon submitting a bug report</li>
            <li>Staff can manage bug report tags and statuses via dedicated commands</li>
        </ul>
    </div>

</div>
`;

const update03 = `
<div class="space-y-8">

    <div>
        <span class="card-tag">STABLE</span>
        <h2 class="text-3xl font-black text-white mt-2">
            Discord Update 01.03
        </h2>
        <p class="text-gray-500 text-sm mt-2">
            Logging expansion, moderation archives, backend optimisation, and emoji lifecycle management.
        </p>
    </div>

    <div class="space-y-4">
        <h3 class="text-white font-bold text-lg">Logging & Moderation Enhancements</h3>
        <ul class="space-y-2 text-gray-400 text-sm leading-relaxed list-disc list-inside">
            <li>Expanded advanced join screening and role update logging</li>
            <li>Voice moderation events archived for long-term accountability</li>
            <li>Server mute, unmute, deafen, and undeafen logs preserved</li>
        </ul>
    </div>

    <div class="space-y-4">
        <h3 class="text-white font-bold text-lg">Backend & Infrastructure</h3>
        <ul class="space-y-2 text-gray-400 text-sm leading-relaxed list-disc list-inside">
            <li>Backend optimisation through removal of redundant internal variables</li>
            <li>Improved bot performance, stability, and efficiency</li>
            <li>Emoji rotation and lifecycle management system introduced</li>
        </ul>
    </div>

</div>
`;

const update04 = `
<div class="space-y-8">

    <div>
        <span class="card-tag">BETA</span>
        <h2 class="text-3xl font-black text-white mt-2">
            Website Launch
        </h2>
        <p class="text-gray-500 text-sm mt-2">
            Website launch, public access rollout, core feature deployment, and platform infrastructure stabilization.
        </p>
    </div>

    <div class="space-y-4">
        <h3 class="text-white font-bold text-lg">General Updates</h3>
        <ul class="space-y-2 text-gray-400 text-sm leading-relaxed list-disc list-inside">
            <li>New website launched with a fully responsive layout and modern UI</li>
            <li>Top navigation bar introduced with direct links to the game and Discord</li>
            <li>Animated feature cards added for improved engagement and visual clarity</li>
            <li>Optimized page structure for faster load times and smoother navigation</li>
            <li>Foundation deployed for future content, updates, and integrations</li>
        </ul>
    </div>

</div>
`;

/* ===== STATUS ===== */
const statusSynthova = `
<h2 class="text-3xl font-black text-white mb-6">Synthova</h2>

<div class="space-y-3 text-gray-400 text-sm">
  <div class="flex justify-between">
    <span>Latency</span>
    <span class="text-white font-medium">40–80ms</span>
  </div>

  <div class="flex justify-between">
    <span>API Latency</span>
    <span class="text-white font-medium">15–45ms</span>
  </div>

  <div class="flex justify-between">
    <span>Uptime</span>
    <span class="text-white font-medium">99.9%</span>
  </div>

  <div class="flex justify-between">
    <span>Servers</span>
    <span class="text-white font-medium">8</span>
  </div>
</div>
`;

const statusAPI = `
<h2 class="text-3xl font-black text-white mb-6">Synthova API</h2>

<div class="space-y-3 text-gray-400 text-sm">
  <div class="flex justify-between">
    <span>Latency</span>
    <span class="text-white font-medium">30–60ms</span>
  </div>

  <div class="flex justify-between">
    <span>API Latency</span>
    <span class="text-white font-medium">15–35ms</span>
  </div>

  <div class="flex justify-between">
    <span>Uptime</span>
    <span class="text-white font-medium">99.9%</span>
  </div>

  <div class="flex justify-between">
    <span>Servers</span>
    <span class="text-white font-medium">8</span>
  </div>
</div>
`;

const statusAppeals = `
<h2 class="text-3xl font-black text-white mb-6">Synthova Appeals</h2>

<div class="space-y-3 text-gray-400 text-sm">
  <div class="flex justify-between">
    <span>Latency</span>
    <span class="text-white font-medium">45–90ms</span>
  </div>

  <div class="flex justify-between">
    <span>API Latency</span>
    <span class="text-white font-medium">50–80ms</span>
  </div>

  <div class="flex justify-between">
    <span>Uptime</span>
    <span class="text-white font-medium">99.9%</span>
  </div>

  <div class="flex justify-between">
    <span>Servers</span>
    <span class="text-white font-medium">2</span>
  </div>
</div>
`;

const statusCommunity = `
<h2 class="text-3xl font-black text-white mb-6">Synthova Community</h2>

<div class="space-y-3 text-gray-400 text-sm">
  <div class="flex justify-between">
    <span>Latency</span>
    <span class="text-white font-medium">50–100ms</span>
  </div>

  <div class="flex justify-between">
    <span>API Latency</span>
    <span class="text-white font-medium">50–80ms</span>
  </div>

  <div class="flex justify-between">
    <span>Uptime</span>
    <span class="text-white font-medium">99.9%</span>
  </div>

  <div class="flex justify-between">
    <span>Servers</span>
    <span class="text-white font-medium">2</span>
  </div>
</div>
`;

const statusGame = `
<h2 class="text-3xl font-black text-white mb-6">Bonaire, The Netherlands</h2>

<div class="space-y-3 text-gray-400 text-sm">
  <div class="flex justify-between">
    <span>Latency</span>
    <span class="text-white font-medium">50–90ms</span>
  </div>

  <div class="flex justify-between">
    <span>API Latency</span>
    <span class="text-white font-medium">40–60ms</span>
  </div>

  <div class="flex justify-between">
    <span>Uptime</span>
    <span class="text-white font-medium">99.9%</span>
  </div>

  <div class="flex justify-between">
    <span>Servers</span>
    <span class="text-white font-medium">10</span>
  </div>
</div>
`;

/* ===== TEAM BIOS (FULL) ===== */
const teamRob = `
<div class="modal-content">
    <div class="modal-header">
        <div class="modal-name">R0BFISHY</div>
        <div class="modal-role">Founder & Owner</div>
    </div>

    <div class="modal-divider"></div>

    <div class="modal-body">
        Hey, I’m Robert (R0BFISHY on Roblox). I’m a scripter, as well as the founder and owner of the project.
        I’m a neat, detail-oriented person who values order and structure, and I aim to make BTNL a place
        where everyone is recognised, treated fairly, and given the opportunity to grow.
        <br><br>
        I care strongly about consistency, strong moral standards, and maintaining a positive environment,
        with the goal of building something stable, meaningful, and welcoming for everyone involved.
    </div>
</div>
`;

const teamZack = `
<div class="modal-content">
    <div class="modal-header">
        <div class="modal-name">ZlindbergVirus</div>
        <div class="modal-role">Developer Lead</div>
    </div>

    <div class="modal-divider"></div>

    <div class="modal-body">
        Hi, I’m Zack (ZlindbergVirus on Roblox). I’m the Developer Lead and oversee the
        technical direction of BTNL. My focus is on building stable, scalable systems
        while maintaining consistency, fairness, and high development standards across
        the project.
    </div>
</div>
`;

const teamOllie = `
<div class="modal-content">
    <div class="modal-header">
        <div class="modal-name">OllieChurchblox</div>
        <div class="modal-role">Developer</div>
    </div>

    <div class="modal-divider"></div>

    <div class="modal-body">
        Hi, I'm Ollie, an A-Level computing student and developer here at Synthova. My main assignment is to work on
        the scripting side of the game. I hope to create and maintain high-quality scripts that keep the game interactive
        and enjoyable for all players. Despite having ample experience in many languages such as Java and C#, this is my first
        time properly working in Luau. 
        <br><br>
        It's certainly a challenge, but one I'm eager to take on and I can't wait to see what
        we can create! I also have the additional responsibility of overseeing the Verisentry moderation team. 
        <br><br>
        My role is to
        ensure the team is operating smoothly and according to our expectations, as well as provide any developmental assistance
        needed for the team to moderate effectively. Our aim is to keep the community a safe place where everyone can feel welcome :)
    </div>
</div>
`;

const teamFire = `
<div class="modal-content">
    <div class="modal-header">
        <div class="modal-name">FireHyperrr</div>
        <div class="modal-role">Developer & Investor</div>
    </div>

    <div class="modal-divider"></div>

    <div class="modal-body">
        Hello, I’m FireHyperrr. I’m an investor and developer of the project, and I’m committed to ensuring BTNL is polished
        and of the highest quality. I look forward to working with the community and the other members of the team to create
        an experience that’s fun and inclusive for all.
    </div>
</div>
`;

const teamKelz = `
<div class="modal-content">
    <div class="modal-header">
        <div class="modal-name">KelzGotGame</div>
        <div class="modal-role">Developer</div>
    </div>

    <div class="modal-divider"></div>

    <div class="modal-body">
        Hi, I’m Kelz (KelzGotGame on Roblox). I’m a developer who loves creating innovative and engaging experiences. I believe in
        a balanced approach to development, where creativity and structure come together to make something truly unique. I value
        teamwork, consistency, and honesty, and I aim to build a supportive community where everyone can grow and thrive.
        My goal is to help make the project a fun and welcoming place for all.
    </div>
</div>
`;

const teamRyan = `
<div class="modal-content">
    <div class="modal-header">
        <div class="modal-name">Vontirax</div>
        <div class="modal-role">Developer</div>
    </div>

    <div class="modal-divider"></div>

    <div class="modal-body">
        Hi, I’m Ryan (Vontirax on Roblox). I’m a developer dedicated to building well-crafted projects with a focus on functionality
        and efficiency. I believe in creating a community where everyone feels valued and has the opportunity to contribute and
        improve. My core values are fairness, consistency, and integrity, and I strive to maintain a positive environment where
        collaboration and growth are at the forefront. My goal is to build something lasting and meaningful for everyone involved.
    </div>
</div>
`;

const teamLaura = `
<div class="modal-content">
    <div class="modal-header">
        <div class="modal-name">mlxlaura</div>
        <div class="modal-role">Moderation Lead</div>
    </div>

    <div class="modal-divider"></div>

    <div class="modal-body">
        Hi! I'm Laura (mlxlaura on Roblox), and I am the Moderation Lead of BTNL! My focus within this community is to ensure
        it stays a safe environment for others to chat & play together, while still maintaining fairness and organisation. ★
    </div>
</div>
`;

const teamMax = `
<div class="modal-content">
    <div class="modal-header">
        <div class="modal-name">ThePuggle2</div>
        <div class="modal-role">QA Lead</div>
    </div>

    <div class="modal-divider"></div>

    <div class="modal-body">
        Hey, I’m Max (ThePuggle2 on Roblox). I’m the Quality Assurance Lead, as well as the commandant of The Netherlands Armed
        Forces (TNAF) in Bonaire. I am an organised, dedicated, and trusting person who values honesty and respect, and I aim to
        make BTNL and TNAF, more specifically, a place where everyone has an equal chance to thrive and have fun, as well as be
        treated fairly and with respect. 
        <br><br>
        I care about maintaining strong standards as well as a close, enriching environment,
        with the ultimate goal of building a service that has a meaningful impact and is welcoming for everyone. In Quality Assurance,
        I, alongside my team, aim to deliver a stable, working experience for the players, one which allows them to fully immerse
        themselves and experience new, innovative features that enrich their overall game experience.
    </div>
</div>
`;

/* ===== LEGAL ===== */

const privacySafety = `
<div class="modal-content">
  <div class="modal-header">
    <div class="modal-name">Privacy & Personal Safety</div>
    <div class="modal-role">Safety & Privacy</div>
  </div>
  <div class="modal-divider"></div>
  <div class="modal-body">
    Sharing personal or private information without clear consent is strictly prohibited.
    This includes doxxing, threats of doxxing, or any form of intimidation involving personal data.
    Violations will result in immediate enforcement action, including permanent bans where applicable.
  </div>
</div>
`;

const dataRetention = `
<div class="modal-content">
  <div class="modal-header">
    <div class="modal-name">Data Retention & Privacy</div>
    <div class="modal-role">Privacy</div>
  </div>
  <div class="modal-divider"></div>
  <div class="modal-body">
    We handle personal data in accordance with applicable data protection laws, including POPIA
    and, where applicable, GDPR principles.
    <br><br>
    Stored data may include Roblox User ID, username, and moderation-related logs.
    Users may request data removal by emailing <strong>x2rob39@gmail.com</strong>
    or creating a support ticket. Requests are reviewed and processed where legally permissible.
  </div>
</div>
`;

const fairUsage = `
<div class="modal-content">
  <div class="modal-header">
    <div class="modal-name">Fair Usage Policy</div>
    <div class="modal-role">Bots & Automation</div>
  </div>
  <div class="modal-divider"></div>
  <div class="modal-body">
    Excessive or repetitive command usage is not permitted.
    Spamming commands may trigger automatic rate limits and will result in timeouts
    to ensure stable and fair bot operation for all users.
  </div>
</div>
`;

const minimodding = `
<div class="modal-content">
  <div class="modal-header">
    <div class="modal-name">Mini-Modding & Unauthorized Moderation</div>
    <div class="modal-role">Conduct</div>
  </div>
  <div class="modal-divider"></div>
  <div class="modal-body">
    Minimodding is not allowed. Do not enforce rules, warn users, threaten punishments,
    or speak on behalf of staff.
    <br><br>
    All moderation actions are handled exclusively by trained staff to avoid confusion
    and misuse of authority.
  </div>
</div>
`;

const coordinatedAbuse = `
<div class="modal-content">
  <div class="modal-header">
    <div class="modal-name">Coordinated Abuse & Disruption</div>
    <div class="modal-role">Server Integrity</div>
  </div>
  <div class="modal-divider"></div>
  <div class="modal-body">
    Raiding, brigading, mass mentions, spam attacks, or coordinated disruption are strictly prohibited.
    Organising or encouraging others to overwhelm channels, staff, or bots is not allowed.
    <br><br>
    Evading moderation through alternate accounts, VPNs, or repeated rejoining will result
    in enforcement action.
  </div>
</div>
`;

const botting = `
<div class="modal-content">
  <div class="modal-header">
    <div class="modal-name">Botting & Unauthorized Automation</div>
    <div class="modal-role">Automation</div>
  </div>
  <div class="modal-divider"></div>
  <div class="modal-body">
    Self-bots, user bots, scripts, macros, automation tools, or abuse of server bots
    are strictly prohibited.
    <br><br>
    Attempting to bypass moderation, cooldowns, or restrictions through automated means
    will result in enforcement action.
  </div>
</div>
`;

const updatesAmendments = `
<div class="modal-content">
  <div class="modal-header">
    <div class="modal-name">Updates & Amendments</div>
    <div class="modal-role">Governance</div>
  </div>
  <div class="modal-divider"></div>
  <div class="modal-body">
    These terms may be modified at any time without prior notice.
    Continued participation constitutes acceptance of the most current version.
    <br><br>
    Users are notified of changes via this website only.
  </div>
</div>
`;

const sensitiveTopics = `
<div class="modal-content">
  <div class="modal-header">
    <div class="modal-name">Sensitive Topics</div>
    <div class="modal-role">Safety & Privacy</div>
  </div>
  <div class="modal-divider"></div>
  <div class="modal-body">
    Sensitive or controversial topics including politics, religion, and graphic violence
    are not permitted. Attempts to introduce these topics may result in moderation action.
  </div>
</div>
`;

const nsfwContent = `
<div class="modal-content">
  <div class="modal-header">
    <div class="modal-name">NSFW & Inappropriate Content</div>
    <div class="modal-role">Safety & Privacy</div>
  </div>
  <div class="modal-divider"></div>
  <div class="modal-body">
    NSFW, sexually explicit, graphic, or otherwise inappropriate content is strictly
    prohibited regardless of context or channel.
  </div>
</div>
`;

const reportingCallouts = `
<div class="modal-content">
  <div class="modal-header">
    <div class="modal-name">Reporting & Public Callouts</div>
    <div class="modal-role">Community Behaviour</div>
  </div>
  <div class="modal-divider"></div>
  <div class="modal-body">
    Rule violations must be reported through official moderation channels.
    Public callouts, shaming, or naming other members is not permitted.
  </div>
</div>
`;

const exploits = `
<div class="modal-content">
  <div class="modal-header">
    <div class="modal-name">Exploits & Bad-Faith Conduct</div>
    <div class="modal-role">Server Integrity</div>
  </div>
  <div class="modal-divider"></div>
  <div class="modal-body">
    Exploiting bugs, abusing loopholes, trolling, or acting in bad faith to disrupt
    the community or systems is prohibited, even if not explicitly listed.
  </div>
</div>
`;

const altsEvasion = `
<div class="modal-content">
  <div class="modal-header">
    <div class="modal-name">Alternate Accounts & Evasion</div>
    <div class="modal-role">Server Integrity</div>
  </div>
  <div class="modal-divider"></div>
  <div class="modal-body">
    Using alternate accounts, VPNs, or repeated rejoining to evade moderation
    will result in enforcement action.
  </div>
</div>
`;

const mediaMisuse = `
<div class="modal-content">
  <div class="modal-header">
    <div class="modal-name">Misuse of Media & External Content</div>
    <div class="modal-role">Content & Media Use</div>
  </div>
  <div class="modal-divider"></div>
  <div class="modal-body">
    Media must not be used for harassment, misinformation, or without consent.
    Content taken out of context to target individuals is prohibited.
  </div>
</div>
`;

const moderationEnforcement = `
<div class="modal-content">
  <div class="modal-header">
    <div class="modal-name">Moderation & Enforcement</div>
    <div class="modal-role">Governance</div>
  </div>
  <div class="modal-divider"></div>
  <div class="modal-body">
    Staff may issue warnings, mutes, kicks, bans, or permanent bans at their discretion.
    Actions may escalate based on severity or repetition. Appeals are not guaranteed.
  </div>
</div>
`;

/* ===== AUTO LEGAL LAST UPDATED ===== */
(function setLegalLastUpdated(){
    const el = document.getElementById('legal-last-updated');
    if (!el) return;

    const d = new Date();
    el.textContent =
        "Last updated · " +
        d.toLocaleDateString("en-ZA", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
})();

document.getElementById('year').textContent = new Date().getFullYear();


