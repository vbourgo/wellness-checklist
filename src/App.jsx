import { useState, useEffect } from "react";

const C = {
cream:"#F8F4EE", ink:"#1C1814", sage:"#5C7A5C", ember:"#C8440A",
gold:"#C9960A", mist:"#E8E2D8", stone:"#8A8070", sand:"#EDE7DC",
};

const PROGRAM = [
{week:1,title:"Reset Your Biology",theme:"Circadian Foundations",color:"#B85A2A",light:"#FFF3EE",
tagline:"Align your body clock — everything else builds on this.",
science:"Circadian rhythm synchronisation (Saper et al., Science 2005) is the master regulator of mood, energy and sleep quality.",
habits:[
{id:"w1h1",emoji:"🌅",title:"Morning light in first 30 min",micro:"Step outside for 10 min — no sunglasses",time:"10 min",
howTo:["Step outside within 30 min of waking","No sunglasses — outdoor light is 10–50x brighter than indoor","Cloudy? Stay 20–30 min instead of 10","Can't go outside? Sit by a bright open window facing the light"],
benefit:"Activates melanopsin receptors, resets the SCN clock and sets cortisol rhythm for the entire day.",
source:"Huberman Lab / Leproult & Van Cauter, Sleep 2010",sourceUrl:"https://doi.org/10.1093/sleep/33.5.645"},
{id:"w1h2",emoji:"🛏️",title:"Fixed wake-up time — 7 days/week",micro:"Same time weekends. Non-negotiable.",time:"0 effort",
howTo:["Set one alarm, same time every day including weekends","Do not hit snooze — place alarm across the room if needed","If tired: go to bed earlier tonight, never sleep in tomorrow","Stick for 14 days before judging the impact"],
benefit:"Sleep consistency is a stronger predictor of health than total sleep duration. Irregular schedules raise cardiovascular and metabolic risk.",
source:"Phillips et al., Science Advances 2017",sourceUrl:"https://doi.org/10.1126/sciadv.1601666"},
{id:"w1h3",emoji:"📵",title:"Phone outside the bedroom",micro:"Buy a €5 alarm clock tonight",time:"5 min setup",
howTo:["Buy a basic alarm clock — any supermarket, under €5","Charge your phone in the hallway or kitchen permanently","Enable Do Not Disturb from 9pm — calls from favourites still get through","If anxious: you can still check it, just not in bed"],
benefit:"Eliminates pre-sleep blue light, kills the morning scroll reflex, and breaks phone dependency without willpower.",
source:"Kushlev & Dunn, Computers in Human Behavior 2015",sourceUrl:"https://doi.org/10.1016/j.chb.2014.09.044"},
{id:"w1h4",emoji:"🔵",title:"Blue-light filter auto-on at 19:00",micro:"Night Shift scheduled — set once, done forever",time:"2 min setup",
howTo:["iPhone: Settings > Display & Brightness > Night Shift > Scheduled","Mac: System Settings > Displays > Night Shift > Scheduled","Android: Settings > Display > Night Mode > Automatic","Optional: orange-tinted glasses after 8pm for stronger protection"],
benefit:"Evening blue light delays melatonin onset by 90–180 min. Filtering it restores natural sleep pressure from night one.",
source:"Chang et al., PNAS 2015",sourceUrl:"https://doi.org/10.1073/pnas.1418490112"},
]},
{week:2,title:"The Body Awakens",theme:"Embodied Wellbeing",color:"#A06B10",light:"#FFF8ED",
tagline:"Hydrate, breathe, move — your body speaks before your mind does.",
science:"Embodied cognition research (Niedenthal, Science 2007) shows body states directly shape emotional and cognitive experience.",
habits:[
{id:"w2h1",emoji:"💧",title:"500 ml water immediately on waking",micro:"Bottle ready on the nightstand the night before",time:"2 min/day",
howTo:["Fill a 500ml bottle each evening and place it on your nightstand","Drink it before coffee, tea or any food","Add a pinch of sea salt or lemon to boost electrolyte absorption","Room temperature water absorbs faster than cold"],
benefit:"Even mild dehydration (1–2%) degrades short-term memory, concentration and mood — measurable within 30 minutes of waking.",
source:"Ganio et al., British Journal of Nutrition 2011",sourceUrl:"https://doi.org/10.1017/S0007114511002005"},
{id:"w2h2",emoji:"🌬️",title:"4-7-8 breathing — 4 cycles",micro:"Inhale 4s · hold 7s · exhale 8s — before any screen",time:"2 min/day",
howTo:["Sit upright or lie flat with spine straight","Inhale through nose for 4 seconds","Hold breath completely for 7 seconds","Exhale slowly through mouth for 8 seconds","Repeat 4 full cycles — always before checking any screen"],
benefit:"Activates the parasympathetic nervous system within 60 seconds. Measurably lowers cortisol and heart rate. Effective against situational anxiety.",
source:"Brown & Gerbarg, J. Alternative & Complementary Medicine 2005",sourceUrl:"https://doi.org/10.1089/acm.2005.11.189"},
{id:"w2h3",emoji:"☕",title:"Delay your first coffee by 90 min",micro:"Cortisol peaks in hour 1 — caffeine then is wasted",time:"0 effort",
howTo:["Set a coffee-allowed reminder 90 min after your alarm","Use this window for water, light, and breathing instead","If you get a headache: this is caffeine dependency — resolves in 3–4 days","Decaf or herbal tea are fine in the first 90 minutes"],
benefit:"Adenosine competes with caffeine receptors. Waiting for the natural cortisol drop maximises the stimulant effect and reduces the afternoon energy crash.",
source:"Lovallo et al., Psychosomatic Medicine 2006",sourceUrl:"https://doi.org/10.1097/01.psy.0000204926.97596.2a"},
{id:"w2h4",emoji:"🚶",title:"20-min walk — one daily anchor",micro:"Replace one commute segment permanently",time:"20 min/day",
howTo:["Pick one daily trip and modify it permanently — exit one stop earlier","No commute? Walk after breakfast or lunch","Leave your phone in your pocket: this is thinking time","Walk in green or outdoor environments whenever possible"],
benefit:"Non-intentional walking is more sustainable than exercise goals. Blue Zones research shows it is the single most common longevity habit.",
source:"Buettner, Blue Zones — National Geographic 2005",sourceUrl:"https://www.bluezones.com"},
]},
{week:3,title:"Gratitude Architecture",theme:"Positive Emotions",color:"#5C7A5C",light:"#EEF6EE",
tagline:"Rewire your default emotional frequency — specifically, not generically.",
science:"GGIA Berkeley's gratitude practices are among the most replicated interventions in positive psychology, with effect sizes rivalling CBT for mild depression.",
habits:[
{id:"w3h1",emoji:"✍️",title:"3 specific gratitudes each evening",micro:"Physical notebook — go specific, not generic",time:"5 min/day",
howTo:["Use a physical notebook — not your phone (no screens before sleep)","Write 3 things specific to today — generic entries don't count","Describe WHY you're grateful: the barista remembered my order — I felt seen","Do this at the same time each evening, 10–30 min before sleep"],
benefit:"Increases subjective wellbeing by 25%, reduces depressive symptoms and improves sleep. Effects begin within 3 weeks and persist for months.",
source:"Emmons & McCullough, J. Personality & Social Psychology 2003",sourceUrl:"https://doi.org/10.1037/0022-3514.84.2.377"},
{id:"w3h2",emoji:"💌",title:"Write one gratitude letter this week",micro:"To anyone, living or not. You don't have to send it.",time:"20 min once",
howTo:["Choose someone who impacted your life and was never properly thanked","Describe specifically what they did, how it affected you, and where you are because of it","You don't have to send it — but if you do, read it aloud in person for maximum effect","This works even for people who have passed away"],
benefit:"The gratitude letter is GGIA Berkeley's highest-impact single exercise. It produced the largest and most durable boost in happiness of all tested interventions.",
source:"Seligman et al., American Psychologist 2005",sourceUrl:"https://doi.org/10.1037/0003-066X.60.5.410"},
{id:"w3h3",emoji:"🌸",title:"Savour one moment daily — eyes open",micro:"Pause for 30 seconds. Notice texture, sound, temperature.",time:"30 sec/day",
howTo:["Pick a moment that already exists in your day: coffee, a meal, a walk","Stop. Put down your phone. Breathe.","Notice 3 sensory details: a sound, a texture, a temperature","Say internally: I am here, and this is good — do not rush past it"],
benefit:"Savouring interrupts hedonic adaptation and sustains positive emotion. Bryant & Veroff showed it independently boosts life satisfaction over 4 weeks.",
source:"Bryant & Veroff, Savoring: A New Model of Positive Experience 2007",sourceUrl:"https://greatergood.berkeley.edu/topic/savoring"},
{id:"w3h4",emoji:"🍽️",title:"One screen-free, seated meal per day",micro:"Start with lunch. Phone in a drawer.",time:"Daily",
howTo:["Start with just one meal — lunch is easiest","Put your phone face-down in a drawer or bag before sitting","Eat slowly: chew each bite more than feels natural","Notice flavours, textures and your actual hunger and satiety signals"],
benefit:"Mindful eating reduces portion size by 20–30% without conscious effort and improves digestion via parasympathetic activation.",
source:"Allirot et al., British Journal of Nutrition 2013",sourceUrl:"https://doi.org/10.1017/S0007114512004540"},
]},
{week:4,title:"Social Vitality",theme:"Relational Wealth",color:"#2A6B8A",light:"#EBF5FA",
tagline:"The most powerful predictor of a long, happy life is the quality of your relationships.",
science:"The Harvard Study of Adult Development (80 years, 724 men) found relationship quality outperforms income, IQ, genes and social class as a predictor of wellbeing.",
habits:[
{id:"w4h1",emoji:"🤝",title:"One deep conversation daily",micro:"Call, not text. No agenda. Listen more than you talk.",time:"15 min/day",
howTo:["Call (voice or video), not text — tone of voice matters neurologically","Have no agenda: start with How are you really?","Listen without preparing your next sentence — ask follow-up questions","Aim for at least one person a day: family, friend or colleague"],
benefit:"The Harvard Good Life study identifies relationship quality as the single strongest predictor of health and happiness at age 80.",
source:"Waldinger & Schulz, The Good Life 2023",sourceUrl:"https://www.goodlifeproject.com"},
{id:"w4h2",emoji:"🎁",title:"One act of kindness per day",micro:"Specific, spontaneous, directed at one person",time:"Daily",
howTo:["Make it specific and personal — a direct action for someone you can see","Examples: make a colleague's coffee, text I thought of you, hold the lift","Vary the recipient — do not always give to the same person","Notice how you feel afterwards — this is the dopamine loop to reinforce"],
benefit:"Performing acts of kindness increases life satisfaction, self-esteem and mood. Giving produces more happiness than spending on oneself.",
source:"Dunn, Aknin & Norton, Science 2008",sourceUrl:"https://doi.org/10.1126/science.1150952"},
{id:"w4h3",emoji:"📞",title:"Replace one scroll session with a real call",micro:"Someone you have been meaning to catch up with",time:"Daily",
howTo:["Identify your usual scroll time (commute, lunch, before bed)","Replace it once a day with a phone call","I was just thinking of you is a perfect opening","Even 5 minutes counts: brief unexpected calls produce significant wellbeing gains"],
benefit:"People systematically underestimate how much others enjoy unexpected calls. Epley & Schroeder found it produces far more wellbeing than either party predicts.",
source:"Epley & Schroeder, J. Experimental Psychology 2014",sourceUrl:"https://doi.org/10.1037/xge0000030"},
{id:"w4h4",emoji:"🫂",title:"Express appreciation to one person today",micro:"Specific, sincere, out loud or in writing",time:"2 min/day",
howTo:["Say or write specifically what you appreciate and why","Not thanks for everything — but I appreciated how you handled X, it made me feel Y","Do it in person when possible — eye contact amplifies the effect for both","This works even for strangers"],
benefit:"Expressing appreciation strengthens relational bonds and activates the giver's reward system as strongly as the receiver's.",
source:"GGIA Berkeley — Expressing Gratitude practice",sourceUrl:"https://ggia.berkeley.edu/practice/gratitude_letter"},
]},
{week:5,title:"Mindful Attention",theme:"Awareness & Wonder",color:"#6B4A9A",light:"#F3F0FA",
tagline:"Where attention goes, wellbeing follows.",
science:"MBSR is one of the most studied psychological interventions, with structural brain changes measurable after just 8 weeks.",
habits:[
{id:"w5h1",emoji:"🧘",title:"10-minute meditation — every morning",micro:"Headspace · Petit Bambou · or just follow your breath",time:"10 min/day",
howTo:["Do it before checking email or social media","Use a guided app for the first 2 weeks: Headspace, Petit Bambou or Waking Up","Sit comfortably, close your eyes, focus on the sensation of breathing","When your mind wanders (it will), simply notice and return — that is the exercise"],
benefit:"After 8 weeks, MRI scans show increased grey matter in the prefrontal cortex and reduced amygdala volume. Meta-analyses show 38% anxiety reduction.",
source:"Holzel et al., Psychiatry Research: Neuroimaging 2011",sourceUrl:"https://doi.org/10.1016/j.pscychresns.2010.08.006"},
{id:"w5h2",emoji:"😮",title:"Awe walk — once per week",micro:"Walk slowly. Look up. Notice scale and beauty.",time:"20 min/week",
howTo:["Walk alone — awe is harder in conversation","Look for things that feel vast, beautiful or complex: sky, architecture, trees, water","Walk slowly — let yourself stop and look","UC Berkeley protocol: take a brief photo of one thing that moved you"],
benefit:"UC Berkeley's awe walk study: 15-min weekly awe walks over 8 weeks significantly increased positive emotions and reduced daily stressors.",
source:"Sturm et al., Emotion 2022 — Keltner Lab, UC Berkeley",sourceUrl:"https://doi.org/10.1037/emo0000876"},
{id:"w5h3",emoji:"🔕",title:"One hour digital-free per day",micro:"Same hour every day — consistency matters more than duration",time:"60 min/day",
howTo:["Choose the same hour every day — morning or evening, not random","Put your phone in a drawer or another room","Fill the time with a physical activity, reading, cooking, or simply sitting","Start with 30 minutes if 60 feels impossible — and build up"],
benefit:"Planned digital detox periods measurably reduce anxiety and restore attentional capacity. The predictable boundary matters more than total duration.",
source:"Newport, Deep Work 2016 / Kushlev & Dunn 2015",sourceUrl:"https://doi.org/10.1016/j.chb.2014.09.044"},
{id:"w5h4",emoji:"🌿",title:"Spend 20 min in nature today",micro:"Park, garden, waterside — not a screen wallpaper",time:"20 min/day",
howTo:["Find the nearest green space — a park, garden, riverside or forest path","Leave headphones behind at least once per week","Sit or walk slowly — the dose-response plateaus at 120 min/week total","No nature nearby? Trees and plants on a street still count"],
benefit:"Nature exposure for 20+ min measurably lowers cortisol. The dose-response curve plateaus at 120 min/week — a surprisingly achievable target.",
source:"Hunter et al., Frontiers in Psychology 2019",sourceUrl:"https://doi.org/10.3389/fpsyg.2019.00722"},
]},
{week:6,title:"Movement & Resilience",theme:"Physical Foundation",color:"#8A4A2A",light:"#FBF0EB",
tagline:"Your body is your oldest emotional regulation tool.",
science:"Exercise is now a first-line treatment for mild-to-moderate depression in UK NICE guidelines (2022), with effect sizes matching antidepressants.",
habits:[
{id:"w6h1",emoji:"🏃",title:"Aerobic exercise 3x this week",micro:"20–30 min at conversational intensity",time:"3x20 min",
howTo:["Choose any aerobic activity: brisk walking, cycling, swimming, jogging or dancing","Target intensity: you can speak a sentence but not comfortably sing","Schedule all 3 sessions in your calendar now as fixed appointments","Missing one session does not break the streak — just do the next one"],
benefit:"Reduces bad mental health days by 43% (Lancet, 1.2M people). Raises BDNF (brain fertiliser), reduces inflammation. Rivals antidepressants for mild depression.",
source:"Chekroud et al., The Lancet Psychiatry 2018",sourceUrl:"https://doi.org/10.1016/S2215-0366(18)30227-X"},
{id:"w6h2",emoji:"🌡️",title:"End shower with 30 sec cold water",micro:"Warm first, cold last. Breathe through it.",time:"Daily",
howTo:["Finish your normal warm shower as usual","Turn the temperature to cold for 30 seconds at the end","Breathe slowly and steadily — the urge to gasp passes in 10 seconds","Increase by 15 seconds per week until you reach 2–3 minutes"],
benefit:"Cold exposure raises noradrenaline by 200–300% and dopamine by 250%, effects lasting 3–4 hours. Reduces chronic fatigue and produces measurable anti-inflammatory action.",
source:"Shevchuk, Medical Hypotheses 2008",sourceUrl:"https://doi.org/10.1016/j.mehy.2007.04.052"},
{id:"w6h3",emoji:"📦",title:"Declutter one space you use daily",micro:"Desk, nightstand, or kitchen counter — pick one only",time:"30 min once",
howTo:["Choose just one surface — not a whole room","Apply the 3-box rule: keep, donate, bin","Once clear, establish a 1 in, 1 out rule for that surface","Take a before/after photo to appreciate the change"],
benefit:"Visual clutter creates persistent background cognitive load. Princeton demonstrated measurable attention and cortisol effects from disordered environments.",
source:"McMains & Kastner, J. Neuroscience 2011",sourceUrl:"https://doi.org/10.1523/JNEUROSCI.6138-10.2011"},
{id:"w6h4",emoji:"🥦",title:"Redesign your food environment",micro:"Healthy food at eye level. Snacks hidden at the back.",time:"20 min once",
howTo:["Move healthy foods to the front and centre of your fridge at eye level","Put fruit in a bowl on the counter — visible food gets eaten","Move snacks and sweets to high shelves or opaque containers at the back","Cut and prep vegetables in advance so they are as convenient as a bag of crisps"],
benefit:"Environmental cues drive 70% of eating decisions, independent of hunger or willpower. Small friction changes produce consistent, lasting dietary improvements.",
source:"Wansink, Mindless Eating — Cornell Food & Brand Lab",sourceUrl:"https://doi.org/10.1093/jn/nxac141"},
]},
{week:7,title:"Compassion & Meaning",theme:"Inner Compass",color:"#2A7A6A",light:"#EBF6F4",
tagline:"Treating yourself with the kindness you would offer a friend is not weakness — it is neuroscience.",
science:"Kristin Neff's self-compassion research shows it is a stronger predictor of emotional resilience than self-esteem, without its fragility.",
habits:[
{id:"w7h1",emoji:"💙",title:"Self-compassion practice — 5 min/day",micro:"What would I say to a friend in this situation? Say it to yourself.",time:"5 min/day",
howTo:["When you notice self-criticism, pause and ask: What would I say to a close friend who told me this?","Say that to yourself — out loud if possible","Place one hand on your chest: the physical gesture activates the caregiving system","Or write it: 3 sentences of compassionate self-talk in your journal"],
benefit:"Self-compassion reduces anxiety, depression and perfectionism while increasing motivation. Unlike self-esteem, it does not require success and produces no narcissistic side-effects.",
source:"Neff & Germer, J. Clinical Psychology 2013",sourceUrl:"https://doi.org/10.1002/jclp.21923"},
{id:"w7h2",emoji:"🌟",title:"Identify one source of meaning today",micro:"Not a goal. A moment, a person, a why.",time:"2 min/day",
howTo:["Ask yourself each morning: What will make today feel worth it?","It does not have to be big — a conversation, a task done well, a moment of beauty","Write it in your journal or phone notes","In the evening, note whether it happened and how it felt"],
benefit:"Sense of meaning (eudaimonia) is a stronger predictor of longevity and immune function than hedonic pleasure. Meaning buffers stress and predicts resilience.",
source:"Fredrickson et al., PNAS 2013",sourceUrl:"https://doi.org/10.1073/pnas.1305419110"},
{id:"w7h3",emoji:"🎨",title:"One hour of flow activity per week",micro:"Something absorbing, non-digital, skill-matched",time:"60 min/week",
howTo:["Flow requires a task challenging but not overwhelming your skills","Examples: cooking a complex recipe, playing an instrument, drawing, building, gardening","No notifications during this hour — distractions immediately break flow","Start a timer: flow often takes 15–20 minutes to begin"],
benefit:"Csikszentmihalyi's flow state is associated with peak positive affect and intrinsic motivation. Regular flow experiences correlate with higher life satisfaction and lower depression.",
source:"Csikszentmihalyi, Flow: The Psychology of Optimal Experience 1990",sourceUrl:"https://ggia.berkeley.edu/practice/find_your_flow_activities"},
{id:"w7h4",emoji:"🌱",title:"Write your good life in 3 sentences",micro:"Not goals. What does a good day, year, life look and feel like?",time:"10 min once",
howTo:["Find 15 quiet minutes with a pen and paper","Write 3 sentences: A good day for me is…, A good year involves…, A good life means…","Focus on feelings and experiences, not achievements or possessions","Keep this somewhere visible — return to it when decisions feel hard"],
benefit:"Values clarification improves decision-making, reduces regret and activates the brain self-referential network in ways linked to sustained wellbeing.",
source:"Lyubomirsky, The How of Happiness 2008",sourceUrl:"https://sonjalyubomirsky.com/books/the-how-of-happiness/"},
]},
{week:8,title:"Integration & Momentum",theme:"Your Permanent Stack",color:"#4A4A8A",light:"#EEEEF8",
tagline:"Habits do not need discipline — they need identity. You are now someone who does this.",
science:"Identity-based habit formation (Fogg, Stanford / Clear, Atomic Habits) shows framing habits as who I am vs what I do produces far superior long-term adherence.",
habits:[
{id:"w8h1",emoji:"🔁",title:"Review your 8-week habit stack",micro:"Which 5 had the biggest impact? Keep those as non-negotiables.",time:"20 min once",
howTo:["Look back through completed weeks and note which habits you actually felt clearly","Identify your top 5 by impact — these become your non-negotiables","For lower-impact habits: continue, modify, or drop","Write your final 5 non-negotiables on a card and put it somewhere visible"],
benefit:"Systematic reflection on habit outcomes increases adherence and enables pruning of low-ROI behaviours. Consolidation is as critical as acquisition.",
source:"Fogg, Tiny Habits — Stanford Behaviour Design Lab 2019",sourceUrl:"https://tinyhabits.com"},
{id:"w8h2",emoji:"📅",title:"Schedule your social anchor for next month",micro:"One real gathering with people who matter. In the calendar now.",time:"5 min once",
howTo:["Open your calendar right now and block a date in the next 4 weeks","Invite at least one person whose company you genuinely value","Make it specific: a meal, a walk, a film — not we should get together sometime","Add a recurring monthly reminder — relationships need investment, not luck"],
benefit:"The Harvard Good Life study shows that people who actively invest in relationships report higher life satisfaction at every age.",
source:"Waldinger & Schulz, The Good Life 2023",sourceUrl:"https://www.goodlifeproject.com"},
{id:"w8h3",emoji:"🧾",title:"Write your wellbeing OS — one page",micro:"Your non-negotiables, your values, your three anchors",time:"30 min once",
howTo:["Section 1: My 5 non-negotiable daily habits (from your week 8 review)","Section 2: My values in 3 words (from your good life sentences in week 7)","Section 3: What I do when I am struggling — coping anchor: breathe, walk, call someone","Print or hand-write it — make it physical, not digital"],
benefit:"Externalising personal norms creates psychological accountability and reduces the decision fatigue that leads to habit breakdown during high-stress periods.",
source:"Baumeister & Tierney, Willpower 2011",sourceUrl:"https://www.amazon.com/Willpower-Rediscovering-Greatest-Human-Strength/dp/0143122231"},
{id:"w8h4",emoji:"🎯",title:"Celebrate — genuinely, specifically",micro:"Note what changed. Tell someone. Mark the moment.",time:"10 min",
howTo:["Write down 3 specific things that are different about you after 8 weeks","Tell one person who matters what you accomplished and why it was hard","Do something that feels like a genuine reward: a meal, an experience, a meaningful purchase","Set a 3-month check-in in your calendar to revisit your operating system"],
benefit:"Celebration triggers dopamine release and encodes the habit loop. BJ Fogg identifies celebration as the single most underused and most effective habit-formation tool.",
source:"Fogg, Tiny Habits — Stanford 2019",sourceUrl:"https://tinyhabits.com"},
]},
];

const TR = {
en:{
nav:{home:"Home",program:"Program",pricing:"Pricing",blog:"Blog"},
hero:{badge:"Science-backed · 8 weeks · Free to start",h1a:"So small",h1b:"you can't say no.",sub:"Science-backed tiny habits to drastically improve your wellbeing in 8 weeks — rooted in Harvard, Berkeley and peer-reviewed research.",cta1:"Start free — Week 1",cta2:"See the full program"},
stats:[{n:"80 yrs",label:"Harvard Study of Adult Development"},{n:"43%",label:"Fewer bad mental health days (Lancet)"},{n:"38%",label:"Anxiety reduction via mindfulness (JAMA)"},{n:"8 wks",label:"To measurable brain changes (Harvard/MGH)"}],
howLabel:"How it works",howH:"One tiny habit per day. Eight science-packed weeks.",
howCards:[
{emoji:"🌅",title:"Weeks 1-2",sub:"Biology reset",text:"Align your circadian rhythm, fix your sleep anchor, and remove digital friction."},
{emoji:"🙏",title:"Weeks 3-4",sub:"Emotional rewiring",text:"Berkeley's gratitude practices and Harvard's relational habits — the two most replicated wellbeing interventions."},
{emoji:"🧘",title:"Weeks 5-6",sub:"Attention & body",text:"Mindfulness, awe walks, aerobic exercise and cold exposure. A new nervous system baseline."},
{emoji:"🌱",title:"Weeks 7-8",sub:"Meaning & integration",text:"Self-compassion, purpose, flow — and a permanent habit stack designed to last your lifetime."},
],
sciLabel:"Scientific foundations",testiLabel:"What people say",
testimonials:[
{name:"Marie L.",role:"Product Manager, Paris",text:"Week 3's gratitude letter made me cry. In a good way. I sent it to my father. We talked for two hours. Worth the entire program.",stars:5},
{name:"Thomas R.",role:"Entrepreneur, Lyon",text:"I have tried every habit app. This is the only one where the science actually changes how you feel about doing the habit.",stars:5},
{name:"Camille D.",role:"Doctor, Bordeaux",text:"I recommend this to patients. The program is genuinely evidence-based. The source citations are all real and peer-reviewed.",stars:5},
],
ctaH:"Your 8 weeks start with one tiny thing.",ctaSub:"Free to start. No credit card. Backed by decades of peer-reviewed research.",ctaBtn:"Begin Week 1 — Free",
programTitle:"8-Week Program",programSub:"GGIA Berkeley · Harvard · Lancet Psychiatry · Stanford · MGH",weekLabel:"Week",
proTag:"PRO",proTitle:"Unlock Week",proSub:"Full 8-week program from €7.99/month",proBtn:"Start 7-day free trial",
sciNote:"The science of tiny",sciNoteText:"BJ Fogg's Stanford research shows motivation alone never sustains habits. The secret is friction reduction and celebration. Each week is designed so the habit feels almost too small to matter — until everything shifts.",
moreInfo:"more info",streakLabel:"day streak",completedLabel:"done",
panel:{howTo:"How to do it",evidence:"Evidence that it works",source:"Research source",close:"Close"},
pricingTitle:"Start free. Upgrade when you feel it working.",pricingSub:"No dark patterns. Cancel anytime. Backed by science.",monthly:"Monthly",annual:"Annual (save 38%)",mostPop:"Most popular",
trustItems:[{emoji:"🔒",title:"Secure & private",sub:"No data sold. Ever."},{emoji:"↩️",title:"Cancel anytime",sub:"No lock-in, no dark patterns"},{emoji:"🔬",title:"Evidence-based",sub:"Every habit is peer-reviewed"},{emoji:"💬",title:"Real support",sub:"Human answers within 24h"}],
faqTitle:"Common questions",
faqs:[
{q:"Is the science real?",a:"Yes. Every habit links to a peer-reviewed study — sources are visible and clickable in-app. We draw primarily from GGIA Berkeley, the Harvard Study of Adult Development, The Lancet Psychiatry and JAMA Internal Medicine."},
{q:"What if I miss a day?",a:"Nothing. The program is designed for real life. Missing a day never breaks the chain. The app never guilts you."},
{q:"Why only 4 habits per week?",a:"BJ Fogg's Stanford research shows habit stacking works best when new habits are introduced slowly. Four tiny habits per week is the evidence-based sweet spot for long-term retention."},
],
blogTitle:"Research, translated.",blogSub:"The peer-reviewed science behind every habit — written for humans, not academics.",blogFeatured:"Featured",blogBack:"Back to Blog",blogRelated:"Related habit in your program",newsletterTitle:"One study. One habit. Every Monday.",newsletterSub:"Free for everyone. Pro members get the full analysis with practical protocol.",newsletterPlaceholder:"Your email",
plans:[
{id:"free",name:"Starter",price:"Free",period:"",cta:"Start free",color:"#8A8070",highlight:false,desc:"Discover the first two weeks. No card required.",
features:[{ok:true,text:"Weeks 1 & 2 of the 8-week program"},{ok:true,text:"Interactive checklist"},{ok:true,text:"Scientific benefit notes & sources"},{ok:false,text:"Weeks 3-8 unlocked"},{ok:false,text:"Progress tracking & streaks"},{ok:false,text:"Weekly science digest"},{ok:false,text:"Community access"},{ok:false,text:"Personalised habit stack"}]},
{id:"pro",name:"Pro",price:"€7.99",period:"/month",cta:"Start 7-day trial",color:"#C8440A",highlight:true,desc:"The full 8-week program. Cancel anytime.",
features:[{ok:true,text:"All 8 weeks unlocked"},{ok:true,text:"Interactive checklist + streaks"},{ok:true,text:"Full science notes, how-to guides & sources"},{ok:true,text:"Weekly science digest (email)"},{ok:true,text:"Progress dashboard"},{ok:false,text:"Community access"},{ok:false,text:"Personalised habit stack"},{ok:false,text:"Monthly group webinar"}]},
{id:"annual",name:"Pro Annual",price:"€59",period:"/year",cta:"Best value — save 38%",color:"#5C7A5C",highlight:false,desc:"Commit to your year. Pay once, transform fully.",
features:[{ok:true,text:"Everything in Pro"},{ok:true,text:"Private community access"},{ok:true,text:"Personalised habit stack (quiz)"},{ok:true,text:"Monthly group science webinar"},{ok:true,text:"Priority support"},{ok:true,text:"Early access to new programs"},{ok:true,text:"Downloadable PDF program guide"},{ok:true,text:"Annual progress review"}]},
],
blogPosts:[
{id:1,tag:"HARVARD RESEARCH",readTime:"5 min read",color:"#C8440A",title:"The 80-Year Study That Proved Relationships Beat Everything Else",excerpt:"When Harvard researchers followed 724 men from 1938 to the end of their lives, they found that the quality of relationships at age 50 predicted health and happiness at 80 better than cholesterol levels, income or IQ.",author:"Waldinger & Schulz, The Good Life, 2023",related:"Week 4 — Social Vitality: One deep conversation daily — the direct application of the Harvard Good Life findings."},
{id:2,tag:"GGIA BERKELEY",readTime:"4 min read",color:"#5C7A5C",title:"Why a Gratitude Letter Is the Highest-Return 20 Minutes of Your Week",excerpt:"In Seligman's 2005 landmark study, the gratitude letter produced the largest and most durable increase in wellbeing of all positive psychology interventions tested — larger than meditation, larger than goal-setting.",author:"Seligman et al., American Psychologist 2005",related:"Week 3 — Gratitude Architecture: Write one gratitude letter this week — the exact Seligman protocol, with in-app how-to guide."},
{id:3,tag:"NEUROSCIENCE",readTime:"6 min read",color:"#6B4A9A",title:"Your Brain on Exercise: Why 20 Minutes Rivals Antidepressants",excerpt:"A 2018 Lancet Psychiatry analysis of 1.2 million Americans found that people who exercised had 43% fewer bad mental health days per month — a stronger effect than socioeconomic factors.",author:"Chekroud et al., The Lancet Psychiatry 2018",related:"Week 6 — Movement & Resilience: Aerobic exercise 3x per week — designed around the Lancet dosage findings."},
{id:4,tag:"CIRCADIAN SCIENCE",readTime:"3 min read",color:"#C9960A",title:"The Free Habit That Resets Your Entire Biology in 10 Minutes",excerpt:"Morning light exposure within 30 minutes of waking activates melanopsin-containing retinal cells, triggering a cortisol pulse that sets your circadian clock for the next 24 hours.",author:"Huberman Lab / Leproult & Van Cauter, Sleep 2010",related:"Week 1 — Circadian Foundations: Morning light in first 30 min — the most impactful zero-cost habit in the entire program."},
],
},
fr:{
nav:{home:"Accueil",program:"Programme",pricing:"Tarifs",blog:"Blog"},
hero:{badge:"Fondé sur la science · 8 semaines · Gratuit pour commencer",h1a:"Si petit",h1b:"que tu ne peux pas refuser.",sub:"Des micro-habitudes validées scientifiquement pour transformer ton bien-être en 8 semaines — fondées sur Harvard, Berkeley et la recherche peer-reviewed.",cta1:"Commencer gratuitement — Semaine 1",cta2:"Voir le programme complet"},
stats:[{n:"80 ans",label:"Étude Harvard sur le développement adulte"},{n:"43%",label:"Jours de mauvaise santé mentale en moins (Lancet)"},{n:"38%",label:"Réduction de l'anxiété par la pleine conscience (JAMA)"},{n:"8 sem.",label:"Pour des changements cérébraux mesurables (MGH)"}],
howLabel:"Comment ça marche",howH:"Une micro-habitude par jour. Huit semaines de science.",
howCards:[
{emoji:"🌅",title:"Semaines 1-2",sub:"Réinitialisation biologique",text:"Aligne ton rythme circadien, fixe ton ancre de sommeil, supprime les frictions numériques."},
{emoji:"🙏",title:"Semaines 3-4",sub:"Recâblage émotionnel",text:"Les pratiques de gratitude de Berkeley et les habitudes relationnelles de Harvard — les deux interventions les plus répliquées."},
{emoji:"🧘",title:"Semaines 5-6",sub:"Attention & corps",text:"Pleine conscience, marche d'émerveillement, exercice et froid. Un nouveau niveau de base."},
{emoji:"🌱",title:"Semaines 7-8",sub:"Sens & intégration",text:"Auto-compassion, raison d'être, flow — une pile d'habitudes permanentes pour toute ta vie."},
],
sciLabel:"Fondements scientifiques",testiLabel:"Ce qu'ils disent",
testimonials:[
{name:"Marie L.",role:"Product Manager, Paris",text:"L'exercice de la lettre de gratitude de la semaine 3 m'a fait pleurer. Dans le bon sens. Je l'ai envoyée à mon père. On a parlé deux heures.",stars:5},
{name:"Thomas R.",role:"Entrepreneur, Lyon",text:"J'ai essayé toutes les apps d'habitudes. C'est la seule où la science change vraiment ta façon de ressentir l'habitude.",stars:5},
{name:"Camille D.",role:"Médecin, Bordeaux",text:"Je le recommande à mes patients. Le programme est réellement fondé sur des preuves. Les citations sont toutes peer-reviewed.",stars:5},
],
ctaH:"Tes 8 semaines commencent par une seule petite chose.",ctaSub:"Gratuit pour commencer. Pas de carte bancaire. Fondé sur des décennies de recherche.",ctaBtn:"Commencer la Semaine 1 — Gratuit",
programTitle:"Programme 8 Semaines",programSub:"GGIA Berkeley · Harvard · Lancet Psychiatry · Stanford · MGH",weekLabel:"Semaine",
proTag:"PRO",proTitle:"Débloquer la Semaine",proSub:"Programme complet à partir de 7,99€/mois",proBtn:"Essai gratuit 7 jours",
sciNote:"La science du minuscule",sciNoteText:"Les recherches de BJ Fogg à Stanford montrent que la motivation seule ne maintient jamais les habitudes. Le secret est la réduction des frictions et la célébration. Chaque semaine est conçue pour que l'habitude paraisse presque trop petite — jusqu'à ce que tout change.",
moreInfo:"en savoir +",streakLabel:"jours consécutifs",completedLabel:"terminée",
panel:{howTo:"Comment le faire",evidence:"Preuves que ça marche",source:"Source scientifique",close:"Fermer"},
pricingTitle:"Commence gratuitement. Upgrade quand tu le ressens.",pricingSub:"Aucun dark pattern. Résiliation à tout moment. Fondé sur la science.",monthly:"Mensuel",annual:"Annuel (économise 38%)",mostPop:"Le plus populaire",
trustItems:[{emoji:"🔒",title:"Sécurisé & privé",sub:"Aucune donnée vendue. Jamais."},{emoji:"↩️",title:"Résiliation libre",sub:"Aucun engagement, aucun dark pattern"},{emoji:"🔬",title:"Fondé sur les preuves",sub:"Chaque habitude est peer-reviewed"},{emoji:"💬",title:"Support humain",sub:"Réponse humaine en moins de 24h"}],
faqTitle:"Questions fréquentes",
faqs:[
{q:"La science est-elle réelle ?",a:"Oui. Chaque habitude renvoie à une étude peer-reviewed — les sources sont visibles et cliquables dans l'app. GGIA Berkeley, l'Étude Harvard, The Lancet Psychiatry et JAMA Internal Medicine."},
{q:"Et si je rate un jour ?",a:"Rien. Le programme est conçu pour la vraie vie. Rater un jour ne casse jamais la série. L'app ne te culpabilise jamais."},
{q:"Pourquoi seulement 4 habitudes par semaine ?",a:"Les recherches de BJ Fogg à Stanford montrent que l'empilement d'habitudes fonctionne mieux quand de nouvelles habitudes sont introduites lentement. Quatre par semaine est le point optimal."},
],
blogTitle:"La recherche, traduite.",blogSub:"La science peer-reviewed derrière chaque habitude — écrite pour les humains, pas les académiques.",blogFeatured:"À la une",blogBack:"Retour au Blog",blogRelated:"Habitude liée dans ton programme",newsletterTitle:"Une étude. Une habitude. Chaque lundi.",newsletterSub:"Gratuit pour tous. Les membres Pro reçoivent l'analyse complète avec le protocole pratique.",newsletterPlaceholder:"Ton adresse email",
plans:[
{id:"free",name:"Starter",price:"Gratuit",period:"",cta:"Commencer gratuitement",color:"#8A8070",highlight:false,desc:"Découvre les deux premières semaines. Sans carte bancaire.",
features:[{ok:true,text:"Semaines 1 & 2 du programme"},{ok:true,text:"Checklist interactive"},{ok:true,text:"Notes scientifiques & sources"},{ok:false,text:"Semaines 3-8 débloquées"},{ok:false,text:"Suivi de progression & séries"},{ok:false,text:"Digest hebdomadaire"},{ok:false,text:"Accès communauté"},{ok:false,text:"Pile d'habitudes personnalisée"}]},
{id:"pro",name:"Pro",price:"7,99€",period:"/mois",cta:"Essai gratuit 7 jours",color:"#C8440A",highlight:true,desc:"Le programme complet 8 semaines. Résiliation à tout moment.",
features:[{ok:true,text:"Les 8 semaines débloquées"},{ok:true,text:"Checklist interactive + séries"},{ok:true,text:"Notes scientifiques, guides & sources"},{ok:true,text:"Digest hebdomadaire (email)"},{ok:true,text:"Tableau de progression"},{ok:false,text:"Accès communauté"},{ok:false,text:"Pile d'habitudes personnalisée"},{ok:false,text:"Webinaire mensuel"}]},
{id:"annual",name:"Pro Annuel",price:"59€",period:"/an",cta:"Meilleur prix — économise 38%",color:"#5C7A5C",highlight:false,desc:"Engage-toi pour l'année. Un seul paiement.",
features:[{ok:true,text:"Tout ce qui est dans Pro"},{ok:true,text:"Accès communauté privée"},{ok:true,text:"Pile d'habitudes personnalisée (quiz)"},{ok:true,text:"Webinaire science mensuel"},{ok:true,text:"Support prioritaire"},{ok:true,text:"Accès anticipé aux nouveaux programmes"},{ok:true,text:"Guide PDF téléchargeable"},{ok:true,text:"Bilan annuel de progression"}]},
],
blogPosts:[
{id:1,tag:"RECHERCHE HARVARD",readTime:"5 min",color:"#C8440A",title:"L'étude de 80 ans qui a prouvé que les relations battent tout le reste",excerpt:"Quand des chercheurs de Harvard ont suivi 724 hommes de 1938 jusqu'à la fin de leur vie, ils ont découvert que la qualité des relations à 50 ans prédisait mieux la santé et le bonheur à 80 ans que le cholestérol, le revenu ou le QI.",author:"Waldinger & Schulz, The Good Life, 2023",related:"Semaine 4 — Vitalité Sociale : Une conversation profonde par jour — l'application directe des conclusions Harvard Good Life."},
{id:2,tag:"GGIA BERKELEY",readTime:"4 min",color:"#5C7A5C",title:"Pourquoi une lettre de gratitude est les 20 minutes les plus rentables de ta semaine",excerpt:"Dans l'étude phare de Seligman en 2005, la lettre de gratitude a produit la plus grande et la plus durable augmentation du bien-être de toutes les interventions testées — plus grande que la méditation et la pleine conscience.",author:"Seligman et al., American Psychologist 2005",related:"Semaine 3 — Architecture de la Gratitude : Écrire une lettre de gratitude cette semaine — le protocole Seligman exact avec guide pratique."},
{id:3,tag:"NEUROSCIENCES",readTime:"6 min",color:"#6B4A9A",title:"Ton cerveau à l'exercice : pourquoi 20 minutes rivalisent avec les antidépresseurs",excerpt:"Une analyse Lancet Psychiatry 2018 sur 1,2 million d'Américains a révélé que les personnes qui faisaient de l'exercice avaient 43% de jours de mauvaise santé mentale en moins — un effet plus fort que les facteurs socioéconomiques.",author:"Chekroud et al., The Lancet Psychiatry 2018",related:"Semaine 6 — Mouvement & Résilience : Exercice aérobie 3x par semaine — conçu autour des dosages Lancet."},
{id:4,tag:"SCIENCE CIRCADIENNE",readTime:"3 min",color:"#C9960A",title:"L'habitude gratuite qui réinitialise toute ta biologie en 10 minutes",excerpt:"L'exposition à la lumière matinale dans les 30 minutes suivant le réveil active les cellules rétiniennes contenant de la mélanopsine, déclenchant une impulsion de cortisol qui règle ton horloge circadienne pour les prochaines 24 heures.",author:"Huberman Lab / Leproult & Van Cauter, Sleep 2010",related:"Semaine 1 — Fondations Circadiennes : Lumière naturelle dans les 30 premières minutes — l'habitude à impact le plus élevé de tout le programme."},
],
},
};

function InfoPanel({item, color, light, onClose, t}) {
return (
<div onClick={onClose} style={{position:"fixed",inset:0,zIndex:300,background:"rgba(28,24,20,0.65)",display:"flex",alignItems:"flex-end",justifyContent:"center",backdropFilter:"blur(4px)"}}>
<div onClick={e=>e.stopPropagation()} style={{background:"white",borderRadius:"20px 20px 0 0",padding:"8px 20px 44px",maxWidth:580,width:"100%",boxShadow:"0 -12px 60px rgba(0,0,0,0.2)",maxHeight:"90vh",overflowY:"auto"}}>
<div style={{width:32,height:4,borderRadius:2,background:"#DDD",margin:"14px auto 16px"}}/>
<div style={{display:"flex",gap:12,alignItems:"flex-start",marginBottom:16}}>
<span style={{fontSize:26}}>{item.emoji}</span>
<div style={{flex:1}}>
<div style={{fontSize:15,fontWeight:"bold",color:"#1C1814",lineHeight:1.3,marginBottom:5}}>{item.title}</div>
<span style={{background:light,color:color,fontSize:10,fontFamily:"monospace",padding:"3px 8px",borderRadius:4}}>{item.time}</span>
</div>
</div>
<div style={{background:"#F7F5F0",borderRadius:12,padding:"14px 16px",marginBottom:10}}>
<div style={{fontSize:10,color:"#8A8070",fontFamily:"monospace",textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:10,fontWeight:"bold"}}>
{"-> "}{t.panel.howTo}
</div>
<ul style={{margin:0,padding:"0 0 0 16px"}}>
{item.howTo.map((s,i)=>(
<li key={i} style={{fontSize:12.5,color:"#1C1814",lineHeight:1.65,marginBottom:i<item.howTo.length-1?5:0}}>{s}</li>
))}
</ul>
</div>
<div style={{background:light,borderLeft:"3px solid "+color,borderRadius:"0 12px 12px 0",padding:"14px 16px",marginBottom:10}}>
<div style={{fontSize:10,color:color,fontFamily:"monospace",textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:7,fontWeight:"bold"}}>{"* "}{t.panel.evidence}</div>
<p style={{margin:0,fontSize:13,color:"#2A2A2A",lineHeight:1.7,fontStyle:"italic"}}>{item.benefit}</p>
</div>
<div style={{background:"#F7F5F0",borderRadius:12,padding:"13px 16px",display:"flex",gap:11,alignItems:"flex-start",marginBottom:18}}>
<span style={{fontSize:15,flexShrink:0,marginTop:1}}>{">"}</span>
<div style={{flex:1}}>
<div style={{fontSize:10,color:"#8A8070",fontFamily:"monospace",textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:5}}>{t.panel.source}</div>
<a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} style={{fontSize:12.5,color:color,lineHeight:1.55,textDecoration:"underline",cursor:"pointer",display:"block"}}>{item.source}</a>
</div>
</div>
<button onClick={onClose} style={{width:"100%",padding:"12px",background:"#1C1814",color:"white",border:"none",borderRadius:12,fontSize:14,cursor:"pointer"}}>{t.panel.close}</button>
</div>
</div>
);
}

function Landing({setTab, t}) {
const ember = "#C8440A";
const sand = "#EDE7DC";
const mist = "#E8E2D8";
const stone = "#8A8070";
const ink = "#1C1814";
const cream = "#F8F4EE";
const sage = "#5C7A5C";
const [heroVisible, setHeroVisible] = useState(false);
useEffect(() => { setTimeout(() => setHeroVisible(true), 100); }, []);
return (
<div style={{background:cream}}>
{/* HERO */}
<div style={{background:`linear-gradient(165deg, ${ink} 0%, #2A2420 50%, #1C1814 100%)`,padding:"80px 24px 72px",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",top:-120,right:-120,width:450,height:450,borderRadius:"50%",background:"radial-gradient(circle,rgba(200,68,10,0.14) 0%,transparent 60%)",pointerEvents:"none"}}/>
<div style={{position:"absolute",bottom:-100,left:-100,width:350,height:350,borderRadius:"50%",background:"radial-gradient(circle,rgba(92,122,92,0.08) 0%,transparent 60%)",pointerEvents:"none"}}/>
<div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:600,height:600,borderRadius:"50%",border:"1px solid rgba(200,68,10,0.06)",pointerEvents:"none"}}/>
<div style={{maxWidth:620,margin:"0 auto",position:"relative",textAlign:"center",opacity:heroVisible?1:0,transform:heroVisible?"translateY(0)":"translateY(20px)",transition:"all 0.8s cubic-bezier(0.16,1,0.3,1)"}}>
<div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(200,68,10,0.12)",border:"1px solid rgba(200,68,10,0.25)",borderRadius:24,padding:"6px 18px",marginBottom:32}}>
<div style={{width:6,height:6,borderRadius:"50%",background:ember,boxShadow:"0 0 8px rgba(200,68,10,0.6)"}}/>
<span style={{color:ember,fontSize:11,fontFamily:"monospace",letterSpacing:"0.12em",textTransform:"uppercase"}}>{t.hero.badge}</span>
</div>
<h1 style={{color:"white",fontSize:"clamp(34px,8vw,58px)",fontFamily:"Georgia,serif",fontWeight:"normal",lineHeight:1.08,margin:"0 0 20px",letterSpacing:"-1px"}}>
{t.hero.h1a}<br/><span style={{color:ember,textShadow:"0 0 40px rgba(200,68,10,0.3)"}}>{t.hero.h1b}</span>
</h1>
<p style={{color:"#A09888",fontSize:17,margin:"0 auto 40px",lineHeight:1.7,maxWidth:460,fontStyle:"italic"}}>{t.hero.sub}</p>
<div style={{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center"}}>
<button onClick={()=>setTab("program")} style={{background:ember,color:"white",border:"none",borderRadius:12,padding:"15px 32px",fontSize:15,cursor:"pointer",fontFamily:"Georgia,serif",boxShadow:"0 4px 24px rgba(200,68,10,0.35)",transition:"transform 0.2s, box-shadow 0.2s"}} onMouseEnter={e=>{e.target.style.transform="translateY(-2px)";e.target.style.boxShadow="0 6px 32px rgba(200,68,10,0.45)";}} onMouseLeave={e=>{e.target.style.transform="translateY(0)";e.target.style.boxShadow="0 4px 24px rgba(200,68,10,0.35)";}}>{t.hero.cta1}</button>
<button onClick={()=>setTab("program")} style={{background:"rgba(255,255,255,0.05)",color:"#B0A898",border:"1px solid rgba(255,255,255,0.12)",borderRadius:12,padding:"15px 26px",fontSize:14,cursor:"pointer",backdropFilter:"blur(4px)",transition:"border-color 0.2s"}} onMouseEnter={e=>e.target.style.borderColor="rgba(255,255,255,0.3)"} onMouseLeave={e=>e.target.style.borderColor="rgba(255,255,255,0.12)"}>{t.hero.cta2}</button>
</div>
</div>
</div>

{/* STATS */}
<div style={{background:sand,borderBottom:"1px solid "+mist}}>
<div style={{maxWidth:620,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",padding:"24px 16px"}}>
{t.stats.map((s,i)=>(
<div key={i} style={{textAlign:"center",padding:"8px 6px",borderRight:i<t.stats.length-1?"1px solid "+mist:"none"}}>
<div style={{fontSize:26,fontFamily:"Georgia,serif",color:ember,marginBottom:4,fontWeight:"normal",letterSpacing:"-0.5px"}}>{s.n}</div>
<div style={{fontSize:10,color:stone,lineHeight:1.4,maxWidth:130,margin:"0 auto"}}>{s.label}</div>
</div>
))}
</div>
</div>

{/* HOW IT WORKS */}
<div style={{maxWidth:620,margin:"0 auto",padding:"56px 20px 0"}}>
<div style={{textAlign:"center",marginBottom:36}}>
<div style={{fontSize:10,color:stone,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:10}}>{t.howLabel}</div>
<h2 style={{fontSize:24,fontFamily:"Georgia,serif",fontWeight:"normal",color:ink,margin:0,letterSpacing:"-0.3px",lineHeight:1.3}}>{t.howH}</h2>
</div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
{t.howCards.map((c,i)=>{
const colors = [ember, "#C9960A", sage, "#4A4A8A"];
return (
<div key={i} style={{background:"white",border:"1px solid "+mist,borderRadius:16,padding:"20px 16px",position:"relative",overflow:"hidden",transition:"transform 0.2s, box-shadow 0.2s",cursor:"default"}} onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 8px 30px rgba(0,0,0,0.08)";}} onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";}}>
<div style={{position:"absolute",top:0,left:0,right:0,height:3,background:`linear-gradient(90deg, ${colors[i]}, ${colors[i]}80)`}}/>
<div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
<div style={{width:32,height:32,borderRadius:"50%",background:colors[i]+"12",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,flexShrink:0}}>{c.emoji}</div>
<div style={{fontSize:12,fontFamily:"monospace",color:colors[i],fontWeight:"bold",textTransform:"uppercase",letterSpacing:"0.06em",lineHeight:1.2}}>{c.title}</div>
</div>
<div style={{fontSize:11,fontFamily:"monospace",color:colors[i],marginBottom:6,textTransform:"uppercase",letterSpacing:"0.08em",opacity:0.7}}>{c.sub}</div>
<div style={{fontSize:12.5,color:"#666",lineHeight:1.6}}>{c.text}</div>
</div>
);})}
</div>
</div>

{/* SCIENTIFIC FOUNDATIONS */}
<div style={{maxWidth:620,margin:"0 auto",padding:"48px 20px 0"}}>
<div style={{fontSize:10,color:stone,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:14,textAlign:"center"}}>{t.sciLabel}</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8}}>
{[{l:"GGIA",s:"UC Berkeley",icon:"\uD83C\uDF93"},{l:"Harvard",s:"Adult Development",icon:"\uD83C\uDFDB\uFE0F"},{l:"Stanford",s:"Behaviour Design",icon:"\uD83D\uDD2C"},{l:"MIT/MGH",s:"Neuroscience",icon:"\uD83E\uDDE0"}].map((x,i)=>(
<div key={i} style={{background:"white",border:"1px solid "+mist,borderRadius:12,padding:"16px 8px",textAlign:"center",transition:"transform 0.2s",cursor:"default"}} onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"} onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}>
<div style={{fontSize:18,marginBottom:6}}>{x.icon}</div>
<div style={{fontSize:11,fontFamily:"Georgia,serif",color:ink,fontWeight:"bold",marginBottom:2}}>{x.l}</div>
<div style={{fontSize:9,color:stone,lineHeight:1.3}}>{x.s}</div>
</div>
))}
</div>
</div>

{/* TESTIMONIALS */}
<div style={{maxWidth:620,margin:"0 auto",padding:"48px 20px 0"}}>
<div style={{textAlign:"center",marginBottom:20}}>
<div style={{fontSize:10,color:stone,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:8}}>{t.testiLabel}</div>
</div>
{t.testimonials.map((tt,i)=>{
const avatarColors = [ember, sage, "#2A6B8A"];
const initials = tt.name.split(" ").map(n=>n[0]).join("");
return (
<div key={i} style={{background:"white",border:"1px solid "+mist,borderRadius:16,padding:"22px 20px",marginBottom:10,position:"relative",transition:"transform 0.2s",cursor:"default"}} onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"} onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}>
<div style={{position:"absolute",top:16,right:18,fontSize:36,color:mist,fontFamily:"Georgia,serif",lineHeight:1}}>{"\u201C"}</div>
<div style={{display:"flex",gap:8,marginBottom:10}}>
{[1,2,3,4,5].map(s=>(
<span key={s} style={{fontSize:13,color:s<=tt.stars?ember:"#DDD"}}>{"\u2605"}</span>
))}
</div>
<p style={{fontSize:14,color:ink,lineHeight:1.75,margin:"0 0 16px",fontStyle:"italic",position:"relative",zIndex:1}}>{"\u201C"}{tt.text}{"\u201D"}</p>
<div style={{display:"flex",alignItems:"center",gap:10}}>
<div style={{width:36,height:36,borderRadius:"50%",background:avatarColors[i],display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:12,fontFamily:"monospace",fontWeight:"bold",letterSpacing:"0.05em"}}>{initials}</div>
<div>
<div style={{fontSize:12,fontWeight:"bold",color:ink}}>{tt.name}</div>
<div style={{fontSize:11,color:stone}}>{tt.role}</div>
</div>
</div>
</div>
);})}
</div>

{/* FINAL CTA */}
<div style={{maxWidth:620,margin:"0 auto",padding:"40px 20px 64px"}}>
<div style={{background:`linear-gradient(145deg, ${ink}, #2A2420)`,borderRadius:20,padding:"44px 28px",textAlign:"center",position:"relative",overflow:"hidden",boxShadow:"0 12px 48px rgba(28,24,20,0.3)"}}>
<div style={{position:"absolute",top:-60,right:-60,width:200,height:200,borderRadius:"50%",background:"radial-gradient(circle,rgba(200,68,10,0.15) 0%,transparent 60%)",pointerEvents:"none"}}/>
<div style={{position:"absolute",bottom:-40,left:-40,width:160,height:160,borderRadius:"50%",background:"radial-gradient(circle,rgba(92,122,92,0.1) 0%,transparent 60%)",pointerEvents:"none"}}/>
<div style={{position:"relative"}}>
<div style={{fontSize:22,fontFamily:"Georgia,serif",color:"white",marginBottom:12,letterSpacing:"-0.3px",lineHeight:1.3}}>{t.ctaH}</div>
<p style={{color:"#A09888",fontSize:13,margin:"0 auto 28px",fontStyle:"italic",lineHeight:1.6,maxWidth:400}}>{t.ctaSub}</p>
<button onClick={()=>setTab("program")} style={{background:ember,color:"white",border:"none",borderRadius:12,padding:"16px 36px",fontSize:15,cursor:"pointer",fontFamily:"Georgia,serif",boxShadow:"0 4px 24px rgba(200,68,10,0.4)",transition:"transform 0.2s, box-shadow 0.2s"}} onMouseEnter={e=>{e.target.style.transform="translateY(-2px)";e.target.style.boxShadow="0 6px 32px rgba(200,68,10,0.5)";}} onMouseLeave={e=>{e.target.style.transform="translateY(0)";e.target.style.boxShadow="0 4px 24px rgba(200,68,10,0.4)";}}>{t.ctaBtn}</button>
<div style={{marginTop:18,display:"flex",justifyContent:"center",gap:16,flexWrap:"wrap"}}>
{[{icon:"\uD83D\uDD12",label:t.trustItems[0].title},{icon:"\uD83D\uDD2C",label:t.trustItems[2].title},{icon:"\u21A9\uFE0F",label:t.trustItems[1].title}].map((item,i)=>(
<div key={i} style={{display:"flex",alignItems:"center",gap:5}}>
<span style={{fontSize:11}}>{item.icon}</span>
<span style={{fontSize:10,color:"#777",fontFamily:"monospace"}}>{item.label}</span>
</div>
))}
</div>
</div>
</div>
</div>
</div>
);
}

function Program({checked, setChecked, streak, isPro, setTab, t}) {
const [expanded, setExpanded] = useState({1:true});
const [activeItem, setActiveItem] = useState(null);
const [activeWeek, setActiveWeek] = useState(null);
const FREE = isPro ? [1,2,3,4,5,6,7,8] : [1,2];
const ember = "#C8440A"; const gold = "#C9960A"; const mist = "#E8E2D8";
const stone = "#8A8070"; const ink = "#1C1814"; const cream = "#F8F4EE";
const total = PROGRAM.flatMap(w=>w.habits).length;
const done = Object.values(checked).filter(Boolean).length;
const pct = Math.round((done/total)*100);
const toggle = (id,e) => { e.stopPropagation(); setChecked(p=>({...p,[id]:!p[id]})); };
const wp = w => w.habits.filter(h=>checked[h.id]).length;
return (
<div style={{background:cream,minHeight:"100vh"}}>
<div style={{background:ink,padding:"28px 20px 20px",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",top:-40,right:-40,width:180,height:180,borderRadius:"50%",background:"radial-gradient(circle,rgba(200,68,10,0.15) 0%,transparent 70%)",pointerEvents:"none"}}/>
<div style={{maxWidth:620,margin:"0 auto",position:"relative"}}>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6}}>
<div style={{fontSize:10,color:ember,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase"}}>{t.programTitle}</div>
{streak>0&&<div style={{background:"rgba(200,68,10,0.2)",border:"1px solid rgba(200,68,10,0.35)",borderRadius:12,padding:"3px 10px",fontSize:11,color:ember,fontFamily:"monospace"}}>{streak} {t.streakLabel}</div>}
</div>
<h2 style={{color:"white",fontSize:20,fontFamily:"Georgia,serif",fontWeight:"normal",margin:"0 0 2px",letterSpacing:"-0.3px"}}>Science-Backed Tiny Habits</h2>
<p style={{color:"#666",fontSize:10,margin:"0 0 16px",fontStyle:"italic"}}>{t.programSub}</p>
<div style={{display:"flex",alignItems:"center",gap:12}}>
<div style={{flex:1,height:5,background:"#2A2A2A",borderRadius:3,overflow:"hidden"}}>
<div style={{height:"100%",width:pct+"%",background:"linear-gradient(90deg,"+ember+","+gold+")",borderRadius:3,transition:"width 0.4s"}}/>
</div>
<span style={{color:"#777",fontSize:11,fontFamily:"monospace",minWidth:42,textAlign:"right"}}>{done}/{total}</span>
<span style={{color:ember,fontSize:12,fontFamily:"monospace",fontWeight:"bold"}}>{pct}%</span>
</div>
</div>
</div>
<div style={{maxWidth:620,margin:"0 auto",padding:"12px 10px 48px"}}>
{PROGRAM.map(week=>{
const wd=wp(week); const wt=week.habits.length;
const isOpen=expanded[week.week]; const allDone=wd===wt;
const locked=!FREE.includes(week.week);
return (
<div key={week.week} style={{marginBottom:8,borderRadius:14,overflow:"hidden",border:"1px solid "+(allDone?week.color+"50":mist),background:"white",transition:"border-color 0.3s"}}>
<button onClick={()=>setExpanded(p=>({...p,[week.week]:!p[week.week]}))} style={{width:"100%",display:"flex",alignItems:"flex-start",padding:"14px 14px",background:allDone?week.light:"white",border:"none",cursor:"pointer",textAlign:"left",gap:11}}>
<div style={{width:4,minHeight:50,borderRadius:2,background:week.color,flexShrink:0,marginTop:2}}/>
<div style={{flex:1}}>
<div style={{display:"flex",alignItems:"center",gap:7,marginBottom:3,flexWrap:"wrap"}}>
<span style={{fontSize:10,fontFamily:"monospace",color:week.color,textTransform:"uppercase",letterSpacing:"0.12em",fontWeight:"bold"}}>{t.weekLabel} {week.week}</span>
<span style={{fontSize:10,fontFamily:"monospace",color:"#AAA"}}>- {wd}/{wt}</span>
{locked&&<span style={{fontSize:9,fontFamily:"monospace",background:"#EDE7DC",color:stone,padding:"1px 6px",borderRadius:4}}>{"🔒"} {t.proTag}</span>}
{allDone&&<span style={{fontSize:9,fontFamily:"monospace",background:week.color+"20",color:week.color,padding:"1px 6px",borderRadius:4}}>{"✓"} {t.completedLabel}</span>}
</div>
<div style={{fontSize:14,color:ink,fontWeight:"bold",letterSpacing:"-0.2px",marginBottom:3}}>{week.title}</div>
<div style={{fontSize:11,color:"#666",fontStyle:"italic",lineHeight:1.5,paddingRight:8}}>{week.tagline}</div>
<div style={{fontSize:9,color:week.color,fontFamily:"monospace",marginTop:5,background:week.light,display:"inline-block",padding:"2px 7px",borderRadius:4}}>{week.theme}</div>
</div>
<div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5,flexShrink:0,paddingTop:2}}>
<div style={{width:28,height:28,borderRadius:"50%",background:allDone?week.color:"#F0EDE8",display:"flex",alignItems:"center",justifyContent:"center",fontSize:allDone?12:10,color:allDone?"white":week.color,fontFamily:"monospace",fontWeight:"bold",transition:"all 0.2s"}}>
{allDone?"✓":Math.round((wd/wt)*100)+"%"}
</div>
<span style={{color:"#CCC",fontSize:15,transform:isOpen?"rotate(90deg)":"rotate(0deg)",display:"inline-block",transition:"transform 0.2s"}}>{">"}</span>
</div>
</button>
{isOpen&&(
<div style={{borderTop:"1px solid "+week.color+"20"}}>
<div style={{background:week.light,borderBottom:"1px solid "+week.color+"15",padding:"9px 14px 9px 18px",display:"flex",gap:8}}>
<span style={{fontSize:12,flexShrink:0}}>{"[sci]"}</span>
<p style={{margin:0,fontSize:11,color:"#555",fontStyle:"italic",lineHeight:1.5}}>{week.science}</p>
</div>
{locked?(
<div style={{padding:"28px 20px",textAlign:"center"}}>
<div style={{fontSize:24,marginBottom:8}}>{"🔒"}</div>
<div style={{fontSize:14,fontFamily:"Georgia,serif",color:ink,marginBottom:4}}>{t.proTitle} {week.week}</div>
<div style={{fontSize:11,color:stone,marginBottom:14}}>{t.proSub}</div>
<button onClick={()=>setTab("pricing")} style={{background:ember,color:"white",border:"none",borderRadius:8,padding:"10px 22px",fontSize:13,cursor:"pointer"}}>{t.proBtn}</button>
</div>
):week.habits.map((habit,i)=>{
const isDone=checked[habit.id];
return (
<div key={habit.id} style={{display:"flex",alignItems:"flex-start",gap:10,padding:"12px 14px",background:isDone?week.light:"white",borderBottom:i<week.habits.length-1?"1px solid #F5F2EE":"none",transition:"background 0.2s"}}>
<div onClick={e=>toggle(habit.id,e)} style={{width:20,height:20,borderRadius:5,border:isDone?"2px solid "+week.color:"2px solid #D0CCC4",background:isDone?week.color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2,cursor:"pointer",transition:"all 0.15s"}}>
{isDone&&<span style={{color:"white",fontSize:11}}>{"✓"}</span>}
</div>
<span style={{fontSize:15,flexShrink:0,marginTop:1}}>{habit.emoji}</span>
<div style={{flex:1,minWidth:0}}>
<div style={{fontSize:12.5,fontWeight:"bold",color:isDone?"#AAA":ink,textDecoration:isDone?"line-through":"none",marginBottom:2,lineHeight:1.3}}>{habit.title}</div>
<div style={{fontSize:11,color:"#BBB",fontStyle:"italic",lineHeight:1.4}}>{habit.micro}</div>
</div>
<div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4,flexShrink:0}}>
<div style={{background:isDone?week.color+"20":"#F0EDE8",color:isDone?week.color:"#999",fontSize:9,fontFamily:"monospace",padding:"2px 6px",borderRadius:4,whiteSpace:"nowrap"}}>{habit.time}</div>
<button onClick={e=>{e.stopPropagation();setActiveItem(habit);setActiveWeek(week);}} style={{background:"none",border:"1px solid "+week.color+"40",borderRadius:5,cursor:"pointer",fontSize:9,color:week.color,fontFamily:"monospace",padding:"2px 6px",whiteSpace:"nowrap"}}>{"i"} {t.moreInfo}</button>
</div>
</div>
);
})}
</div>
)}
</div>
);
})}
<div style={{marginTop:12,padding:"16px 18px",background:ink,borderRadius:12,display:"flex",gap:12}}>
<span style={{fontSize:16,flexShrink:0}}>{"💡"}</span>
<div>
<div style={{color:gold,fontSize:10,fontFamily:"monospace",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:5}}>{t.sciNote}</div>
<p style={{color:"#CCC",fontSize:12,margin:0,lineHeight:1.65,fontStyle:"italic"}}>{t.sciNoteText}</p>
</div>
</div>
</div>
{activeItem&&activeWeek&&<InfoPanel item={activeItem} color={activeWeek.color} light={activeWeek.light} onClose={()=>{setActiveItem(null);setActiveWeek(null);}} t={t}/>}
</div>
);
}

function Pricing({t, isPro, setIsPro, setTab}) {
const [billing,setBilling] = useState("monthly");
const ember="#C8440A"; const mist="#E8E2D8"; const stone="#8A8070";
const ink="#1C1814"; const cream="#F8F4EE"; const sand="#EDE7DC";
return (
<div style={{background:cream,minHeight:"100vh"}}>
<div style={{background:ink,padding:"36px 20px 28px",textAlign:"center"}}>
<div style={{fontSize:10,color:ember,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:8}}>{t.nav.pricing}</div>
<h2 style={{color:"white",fontSize:20,fontFamily:"Georgia,serif",fontWeight:"normal",margin:"0 0 8px",letterSpacing:"-0.3px",lineHeight:1.3}}>{t.pricingTitle}</h2>
<p style={{color:"#888",fontSize:12,margin:"0 0 20px",fontStyle:"italic"}}>{t.pricingSub}</p>
<div style={{display:"inline-flex",background:"#2A2A2A",borderRadius:8,padding:3}}>
{["monthly","annual"].map(b=>(
<button key={b} onClick={()=>setBilling(b)} style={{padding:"6px 14px",borderRadius:6,border:"none",cursor:"pointer",fontSize:11,fontFamily:"monospace",background:billing===b?"white":"transparent",color:billing===b?ink:"#888",transition:"all 0.2s"}}>
{b==="annual"?t.annual:t.monthly}
</button>
))}
</div>
</div>
<div style={{maxWidth:600,margin:"0 auto",padding:"18px 10px 48px"}}>
{t.plans.map(plan=>(
<div key={plan.id} style={{background:"white",border:(plan.highlight?"2px":"1px")+" solid "+(plan.highlight?plan.color:mist),borderRadius:16,overflow:"hidden",marginBottom:10}}>
{plan.highlight&&<div style={{background:plan.color,color:"white",textAlign:"center",fontSize:10,fontFamily:"monospace",letterSpacing:"0.1em",padding:"5px 0",textTransform:"uppercase"}}>{t.mostPop}</div>}
<div style={{padding:"18px 18px 0"}}>
<div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:5}}>
<div>
<div style={{fontSize:10,fontFamily:"monospace",color:plan.color,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:3}}>{plan.name}</div>
<div style={{display:"flex",alignItems:"baseline",gap:3}}>
<span style={{fontSize:24,fontFamily:"Georgia,serif",color:ink}}>{billing==="annual"&&plan.id==="pro"?"€4.92":plan.price}</span>
<span style={{fontSize:11,color:stone}}>{billing==="annual"&&plan.id==="pro"?"/mo billed annually":plan.period}</span>
</div>
</div>
<div style={{fontSize:11,color:stone,fontStyle:"italic",textAlign:"right",lineHeight:1.4,maxWidth:120}}>{plan.desc}</div>
</div>
<button
onClick={()=>{
if(plan.id==="pro"||plan.id==="annual"){setIsPro(true);setTab("program");}
}}
style={{width:"100%",padding:"11px",background:isPro&&(plan.id==="pro"||plan.id==="annual")?"#3D8A3D":plan.highlight?plan.color:sand,color:(plan.highlight||isPro&&(plan.id==="pro"||plan.id==="annual"))?"white":ink,border:"1px solid "+(plan.highlight?plan.color:mist),borderRadius:10,fontSize:13,cursor:"pointer",fontFamily:"Georgia,serif",marginBottom:14}}>
{isPro&&(plan.id==="pro"||plan.id==="annual")?"✓ Program unlocked — go to Program ->":plan.cta+(plan.id!=="free"?" ->":"")}
</button>
</div>
<div style={{padding:"0 18px 18px"}}>
{plan.features.map((f,i)=>(
<div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"5px 0",borderBottom:i<plan.features.length-1?"1px solid #F7F5F0":"none"}}>
<span style={{fontSize:11,flexShrink:0,color:f.ok?plan.color:"#DDD"}}>{f.ok?"✓":"○"}</span>
<span style={{fontSize:12,color:f.ok?ink:"#CCC"}}>{f.text}</span>
</div>
))}
</div>
</div>
))}
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:8}}>
{t.trustItems.map((ti,i)=>(
<div key={i} style={{background:"white",border:"1px solid "+mist,borderRadius:12,padding:"13px 12px",display:"flex",gap:9}}>
<span style={{fontSize:17}}>{ti.emoji}</span>
<div>
<div style={{fontSize:12,fontWeight:"bold",color:ink,marginBottom:2}}>{ti.title}</div>
<div style={{fontSize:11,color:stone}}>{ti.sub}</div>
</div>
</div>
))}
</div>
<div style={{marginTop:16}}>
<div style={{fontSize:10,color:stone,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:10}}>{t.faqTitle}</div>
{t.faqs.map((f,i)=>(
<div key={i} style={{background:"white",border:"1px solid "+mist,borderRadius:12,padding:"14px 16px",marginBottom:7}}>
<div style={{fontSize:13,fontWeight:"bold",color:ink,marginBottom:5}}>{f.q}</div>
<div style={{fontSize:12,color:stone,lineHeight:1.6}}>{f.a}</div>
</div>
))}
</div>
</div>
</div>
);
}

function Blog({t}) {
const [open,setOpen] = useState(null);
const posts = t.blogPosts;
const post = posts.find(p=>p.id===open);
const mist="#E8E2D8"; const stone="#8A8070"; const ink="#1C1814";
const cream="#F8F4EE"; const sand="#EDE7DC"; const ember="#C8440A";
if(open&&post) return (
<div style={{background:cream,minHeight:"100vh"}}>
<div style={{background:ink,padding:"20px 20px 18px"}}>
<button onClick={()=>setOpen(null)} style={{background:"none",border:"none",color:"#888",cursor:"pointer",fontFamily:"monospace",fontSize:11,letterSpacing:"0.08em",marginBottom:12}}>{t.blogBack}</button>
<div style={{maxWidth:600,margin:"0 auto"}}>
<div style={{fontSize:10,color:post.color,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:7}}>{post.tag} - {post.readTime}</div>
<h1 style={{color:"white",fontSize:"clamp(16px,4vw,22px)",fontFamily:"Georgia,serif",fontWeight:"normal",lineHeight:1.3,margin:0,letterSpacing:"-0.3px"}}>{post.title}</h1>
</div>
</div>
<div style={{maxWidth:600,margin:"0 auto",padding:"26px 20px 56px"}}>
<p style={{fontSize:14,color:ink,lineHeight:1.8,margin:"0 0 16px",fontStyle:"italic"}}>{post.excerpt}</p>
<div style={{background:sand,border:"1px solid "+mist,borderRadius:12,padding:"13px 16px",marginBottom:18}}>
<div style={{fontSize:10,color:stone,fontFamily:"monospace",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:4}}>Primary source</div>
<div style={{fontSize:13,color:ink}}>{post.author}</div>
</div>
<div style={{background:"white",border:"1px solid "+mist,borderRadius:14,padding:"18px 16px"}}>
<div style={{fontSize:10,color:stone,fontFamily:"monospace",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:9}}>{t.blogRelated}</div>
<div style={{fontSize:13,color:ink,lineHeight:1.65}}>{post.related}</div>
</div>
</div>
</div>
);
return (
<div style={{background:cream,minHeight:"100vh"}}>
<div style={{background:ink,padding:"30px 20px 22px"}}>
<div style={{maxWidth:620,margin:"0 auto"}}>
<div style={{fontSize:10,color:ember,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:7}}>The Science Brief</div>
<h2 style={{color:"white",fontSize:20,fontFamily:"Georgia,serif",fontWeight:"normal",margin:"0 0 4px",letterSpacing:"-0.3px"}}>{t.blogTitle}</h2>
<p style={{color:"#888",fontSize:12,margin:0,fontStyle:"italic"}}>{t.blogSub}</p>
</div>
</div>
<div style={{maxWidth:620,margin:"0 auto",padding:"16px 10px 56px"}}>
<div onClick={()=>setOpen(posts[0].id)} style={{background:ink,borderRadius:16,padding:"24px 20px",marginBottom:10,cursor:"pointer",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",top:-40,right:-40,width:150,height:150,borderRadius:"50%",background:"radial-gradient(circle,rgba(200,68,10,0.2) 0%,transparent 70%)",pointerEvents:"none"}}/>
<div style={{fontSize:10,color:posts[0].color,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:7}}>{t.blogFeatured} - {posts[0].tag}</div>
<h3 style={{color:"white",fontSize:16,fontFamily:"Georgia,serif",fontWeight:"normal",margin:"0 0 10px",lineHeight:1.35,letterSpacing:"-0.2px"}}>{posts[0].title}</h3>
<p style={{color:"#888",fontSize:12,margin:"0 0 12px",lineHeight:1.6}}>{posts[0].excerpt.slice(0,150)}…</p>
<div style={{fontSize:10,color:"#555",fontStyle:"italic",marginBottom:10}}>{posts[0].author}</div>
<div style={{fontSize:11,color:posts[0].color,fontFamily:"monospace"}}>Read -{">"}</div>
</div>
{posts.slice(1).map(p=>(
<div key={p.id} onClick={()=>setOpen(p.id)} style={{background:"white",border:"1px solid "+mist,borderRadius:14,padding:"14px 14px",marginBottom:8,cursor:"pointer",display:"flex",gap:11}}>
<div style={{width:4,alignSelf:"stretch",borderRadius:2,background:p.color,flexShrink:0}}/>
<div style={{flex:1}}>
<div style={{fontSize:9,color:p.color,fontFamily:"monospace",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:4}}>{p.tag} - {p.readTime}</div>
<div style={{fontSize:13,fontFamily:"Georgia,serif",color:ink,lineHeight:1.35,marginBottom:4}}>{p.title}</div>
<div style={{fontSize:11,color:stone,lineHeight:1.5}}>{p.excerpt.slice(0,100)}…</div>
<div style={{fontSize:10,color:p.color,fontFamily:"monospace",marginTop:7}}>Read -{">"}</div>
</div>
</div>
))}
<div style={{marginTop:10,background:sand,border:"1px solid "+mist,borderRadius:14,padding:"18px 16px"}}>
<div style={{fontSize:10,fontFamily:"monospace",color:ember,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:5}}>Weekly Science Brief</div>
<div style={{fontSize:13,fontFamily:"Georgia,serif",color:ink,marginBottom:5,lineHeight:1.35}}>{t.newsletterTitle}</div>
<div style={{fontSize:11,color:stone,marginBottom:13,lineHeight:1.5}}>{t.newsletterSub}</div>
<div style={{display:"flex",gap:7}}>
<input placeholder={t.newsletterPlaceholder} style={{flex:1,padding:"9px 12px",border:"1px solid "+mist,borderRadius:8,fontSize:12,background:"white",color:ink,outline:"none",fontFamily:"Georgia,serif"}}/>
<button style={{background:ember,color:"white",border:"none",borderRadius:8,padding:"9px 16px",fontSize:13,cursor:"pointer",flexShrink:0}}>-{">"}</button>
</div>
</div>
</div>
</div>
);
}

export default function App() {
const [tab,setTab] = useState("home");
const [lang,setLang] = useState("en");
const [checked,setChecked] = useState({});
const [streak,setStreak] = useState(0);
const [isPro,setIsPro] = useState(false);
const t = TR[lang];
const ember="#C8440A"; const mist="#E8E2D8"; const stone="#8A8070";
const ink="#1C1814"; const cream="#F8F4EE"; const sand="#EDE7DC";

useEffect(()=>{
const totalDone=Object.values(checked).filter(Boolean).length;
setStreak(totalDone>0?Math.floor(totalDone/2):0);
},[checked]);

const tabs=[{id:"home",label:t.nav.home},{id:"program",label:t.nav.program},{id:"pricing",label:t.nav.pricing},{id:"blog",label:t.nav.blog}];

return (
<div style={{fontFamily:"Georgia,'Times New Roman',serif",minHeight:"100vh",background:cream}}>
<div style={{position:"sticky",top:0,zIndex:100,background:"rgba(248,244,238,0.96)",backdropFilter:"blur(8px)",borderBottom:"1px solid "+mist}}>
<div style={{maxWidth:620,margin:"0 auto",display:"flex",alignItems:"center",padding:"0 10px"}}>
<div style={{padding:"10px 0 8px",marginRight:4,flexShrink:0}}>
<span style={{fontSize:13,fontFamily:"Georgia,serif",color:ink,letterSpacing:"-0.2px",fontWeight:"bold"}}>tiny<span style={{color:ember}}>well</span></span>
</div>
<div style={{display:"flex",flex:1,overflowX:"auto"}}>
{tabs.map(tt=>(
<button key={tt.id} onClick={()=>setTab(tt.id)} style={{padding:"11px 9px 9px",background:"none",border:"none",cursor:"pointer",borderBottom:"2px solid "+(tab===tt.id?ember:"transparent"),transition:"border-color 0.2s",whiteSpace:"nowrap",flexShrink:0}}>
<span style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.07em",textTransform:"uppercase",color:tab===tt.id?ember:stone,fontWeight:tab===tt.id?"bold":"normal"}}>{tt.label}</span>
</button>
))}
</div>
<div style={{display:"flex",background:sand,borderRadius:6,padding:2,gap:1,border:"1px solid "+mist,flexShrink:0,marginLeft:6}}>
{["en","fr"].map(l=>(
<button key={l} onClick={()=>setLang(l)} style={{padding:"3px 8px",borderRadius:4,border:"none",cursor:"pointer",fontSize:10,fontFamily:"monospace",fontWeight:"bold",letterSpacing:"0.05em",textTransform:"uppercase",background:lang===l?ember:"transparent",color:lang===l?"white":stone,transition:"all 0.15s"}}>{l}</button>
))}
</div>
</div>
</div>
{tab==="home"&&<Landing setTab={setTab} t={t}/>}
{tab==="program"&&<Program checked={checked} setChecked={setChecked} streak={streak} isPro={isPro} setTab={setTab} t={t}/>}
{tab==="pricing"&&<Pricing t={t} isPro={isPro} setIsPro={setIsPro} setTab={setTab}/>}
{tab==="blog"&&<Blog t={t}/>}
</div>
);
}
