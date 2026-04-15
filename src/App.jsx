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
     howTo:[
       "Set a recurring phone reminder labelled 'light' 15 minutes after your alarm so you never forget the first 3 days.",
       "Step outside within 30 minutes of waking — a balcony, garden, doorstep or the walk to the bakery all count.",
       "Do not wear sunglasses: outdoor light is 10–50× brighter than indoor light and your eyes need the full spectrum.",
       "Clear sky: 5–10 minutes is enough. Overcast: aim for 15–20 minutes. Heavy rain or before sunrise: use a 10,000 lux lightbox.",
       "Cannot go outside? Sit within 1 metre of a wide-open window facing the brightest direction — do not rely on light through double glazing alone.",
       "Pair it with an existing routine (coffee outside, walking the dog, a 5-minute stretch) so it becomes automatic within a week."
     ],
     benefit:"Morning light within 30 minutes of waking is the single most potent zeitgeber — the biological cue that synchronises your suprachiasmatic nucleus, the master clock in your hypothalamus. It triggers a sharp cortisol awakening response that raises daytime alertness and, 14–16 hours later, initiates the melatonin release that makes falling asleep effortless. Huberman Lab field data and Leproult & Van Cauter (Sleep, 2010) show that people who consistently get morning light fall asleep faster, experience fewer middle-of-the-night awakenings, and report measurably better mood and focus within 7–10 days — at zero cost and with no side effects.",
     source:"Huberman Lab / Leproult & Van Cauter, Sleep 2010",sourceUrl:"https://doi.org/10.1093/sleep/33.5.645"},
    {id:"w1h2",emoji:"🛏️",title:"Fixed wake-up time — 7 days/week",micro:"Same time weekends. Non-negotiable.",time:"0 effort",
     howTo:[
       "Pick one wake time you can realistically hold every single day — including weekends, holidays and the day after a late night.",
       "Set one alarm only — no snooze. Place the phone (or alarm clock) across the room so you have to stand up to turn it off.",
       "Too tired? Go to bed 30 minutes earlier tonight rather than sleeping in tomorrow. Never 'catch up' on sleep by extending the morning.",
       "After a bad night, accept the tiredness and stick to the wake time — your sleep drive will rebuild itself in 24–48 hours.",
       "Weekends are where the habit is made or broken: a Saturday lie-in of 90 minutes creates a mini-jetlag that costs the whole week.",
       "Commit for 14 full days before judging the effect — the first 3 mornings are the hardest, then it becomes self-sustaining."
     ],
     benefit:"Phillips et al. (Science Advances, 2017) tracked Harvard students and found that the regularity of sleep timing was a stronger predictor of academic performance and mood than total hours slept. Follow-up work in adults links irregular sleep schedules to higher cardiovascular risk, metabolic disease and depressive symptoms — independent of sleep duration. A fixed wake time anchors every downstream circadian process: hunger hormones, testosterone and cortisol cycles, body temperature and peak cognitive windows. It is the cheapest, most powerful sleep intervention that exists, and unlike sleeping more, it requires no extra time.",
     source:"Phillips et al., Science Advances 2017",sourceUrl:"https://doi.org/10.1126/sciadv.1601666"},
    {id:"w1h3",emoji:"📵",title:"Phone outside the bedroom",micro:"Buy a €5 alarm clock tonight",time:"5 min setup",
     howTo:[
       "Order or buy a basic alarm clock tonight — any supermarket or pharmacy sells them for under €10. Do not postpone this step.",
       "Choose a permanent charging spot outside the bedroom: hallway, kitchen counter or living room. Make it the one and only spot.",
       "Enable Do Not Disturb from 21:00 to 07:00 — allow calls from 'favourites' so genuine emergencies still get through.",
       "Tell your household and closest contacts for the first week so they know not to expect late-night replies.",
       "If anxiety spikes in the first 3 nights (it usually does), leave the phone further from the bedroom door, not closer.",
       "Replace the pre-sleep scroll with a book, a notebook or a short breathing practice — the void needs to be filled, not just emptied."
     ],
     benefit:"Kushlev & Dunn (Computers in Human Behavior, 2015) found that simply reducing phone checking produced measurable drops in stress and increased attentional focus within a single week. Sleeping with the phone in the bedroom correlates with shorter sleep, more night awakenings and a harder wake-up, because even the unconscious expectation of a notification keeps the nervous system in a lightly vigilant state. Removing it physically — not relying on willpower — eliminates the pre-sleep doom scroll, the middle-of-the-night check, and the morning cortisol hit from email and social media before you have even stood up. It is the single cheapest environmental change with compounding benefits.",
     source:"Kushlev & Dunn, Computers in Human Behavior 2015",sourceUrl:"https://doi.org/10.1016/j.chb.2014.09.044"},
    {id:"w1h4",emoji:"🔵",title:"Blue-light filter auto-on at 19:00",micro:"Night Shift scheduled — set once, done forever",time:"2 min setup",
     howTo:[
       "iPhone: Settings → Display & Brightness → Night Shift → Scheduled → from 19:00 to 07:00, warmth slider at 'More warm'.",
       "Mac: System Settings → Displays → Night Shift → Scheduled → custom from 19:00 to 07:00.",
       "Android: Settings → Display → Night Light / Eye Comfort → Schedule → custom from sunset.",
       "Windows: Settings → System → Display → Night Light → Schedule → turn on from 19:00.",
       "For a stronger effect: install f.lux on desktop, or wear amber/orange blue-blocking glasses after 20:00.",
       "Dim overhead lights in the evening — use lamps, candles or warm LED bulbs (2700K or below) rather than bright ceiling lights."
     ],
     benefit:"Chang et al. (PNAS, 2015) compared reading a backlit e-reader versus a printed book before bed and found that blue light suppressed melatonin release by over 50%, delayed sleep onset by an average of 10 minutes, reduced REM sleep, and — most importantly — made participants feel groggier the next morning despite sleeping the same number of hours. Blue wavelengths (around 460–480 nm) are the exact signal your brain uses to detect daylight, so evening exposure tells your master clock that it is still midday. Filtering them out removes that false signal and lets natural sleep pressure build normally, starting from the very first night.",
     source:"Chang et al., PNAS 2015",sourceUrl:"https://doi.org/10.1073/pnas.1418490112"},
  ]},
  {week:2,title:"The Body Awakens",theme:"Embodied Wellbeing",color:"#A06B10",light:"#FFF8ED",
   tagline:"Hydrate, breathe, move — your body speaks before your mind does.",
   science:"Embodied cognition research (Niedenthal, Science 2007) shows body states directly shape emotional and cognitive experience.",
   habits:[
    {id:"w2h1",emoji:"💧",title:"500 ml water immediately on waking",micro:"Bottle ready on the nightstand the night before",time:"2 min/day",
     howTo:[
       "Fill a 500 ml glass or bottle every evening and place it on the nightstand — prepare it at the same time you brush your teeth.",
       "Drink it all within the first 10 minutes of waking, before coffee, tea, food or your phone.",
       "Add a pinch of sea salt, a squeeze of lemon, or a splash of electrolyte mix to improve absorption and replace overnight sodium loss.",
       "Room-temperature water absorbs faster than cold; avoid ice water first thing in the morning.",
       "Travelling? Use a bottle you already own — consistency matters more than the vessel.",
       "Pair it with another morning action (stepping onto the cold floor, opening the curtains) to lock in the routine."
     ],
     benefit:"Ganio et al. (British Journal of Nutrition, 2011) showed that even mild dehydration of 1–2% — normal after a full night without fluid intake — impairs short-term memory, concentration, mood and increases perceived fatigue within 30 minutes. Your body loses 300–500 ml overnight through breathing and sweating, and morning cortisol further dehydrates cells. Rehydrating immediately restores plasma volume, supports cerebral blood flow, activates gut motility and provides a cheap but reliable energy lift. It is the single fastest mood and focus intervention of the entire program.",
     source:"Ganio et al., British Journal of Nutrition 2011",sourceUrl:"https://doi.org/10.1017/S0007114511002005"},
    {id:"w2h2",emoji:"🌬️",title:"4-7-8 breathing — 4 cycles",micro:"Inhale 4s · hold 7s · exhale 8s — before any screen",time:"2 min/day",
     howTo:[
       "Sit or lie with a straight spine. Rest your tongue tip behind your upper front teeth throughout.",
       "Exhale fully through your mouth with a soft whoosh sound.",
       "Close the mouth, inhale quietly through the nose for a count of 4.",
       "Hold the breath, completely still, for a count of 7.",
       "Exhale audibly through the mouth for a count of 8 — twice as long as the inhale.",
       "Repeat for 4 full cycles. Do it first thing in the morning and, ideally, before any moment of stress (meetings, commute, bedtime)."
     ],
     benefit:"Slow, extended-exhale breathing at around 6 breaths per minute — the heart-rate-variability resonant frequency — activates the vagus nerve and shifts the autonomic nervous system from sympathetic (fight-or-flight) to parasympathetic (rest-and-digest) dominance within 60 seconds. Brown & Gerbarg (J. Alternative & Complementary Medicine, 2005) and subsequent clinical trials show measurable drops in cortisol, heart rate, blood pressure and self-reported anxiety after a single session. Unlike meditation, no training is required: the physiology is hardwired and works from day one — it is the closest thing to a pharmaceutical-strength calming effect you can trigger yourself.",
     source:"Brown & Gerbarg, J. Alternative & Complementary Medicine 2005",sourceUrl:"https://doi.org/10.1089/acm.2005.11.189"},
    {id:"w2h3",emoji:"☕",title:"Delay your first coffee by 90 min",micro:"Cortisol peaks in hour 1 — caffeine then is wasted",time:"0 effort",
     howTo:[
       "Set a 'coffee allowed' reminder for exactly 90 minutes after your wake time.",
       "Fill the first 90 minutes with water, daylight, breathing and light movement — this is the energy stack.",
       "Decaf, herbal tea or hot water with lemon are fine during the waiting window.",
       "Expect a mild headache or fog for the first 2–4 days if you have a strong coffee habit — this is adenosine recalibration, not deprivation.",
       "Keep total daily caffeine under 400 mg and stop all caffeine at least 8 hours before your target bedtime.",
       "Prefer filter coffee or light espresso on an emptyish stomach — pair with a small protein snack if you feel jittery."
     ],
     benefit:"Cortisol follows a natural surge in the first 45–60 minutes after waking — the 'cortisol awakening response' — which is what actually makes you alert. Drinking coffee during that window blunts the cortisol effect and builds caffeine tolerance far faster, so you need more coffee to feel the same lift. Lovallo et al. (Psychosomatic Medicine, 2006) showed that strategic caffeine timing produces stronger subjective alertness with lower total daily intake and less of the mid-afternoon energy crash. Delaying your first cup also extends the time between caffeine and your target bedtime, which protects deep sleep.",
     source:"Lovallo et al., Psychosomatic Medicine 2006",sourceUrl:"https://doi.org/10.1097/01.psy.0000204926.97596.2a"},
    {id:"w2h4",emoji:"🚶",title:"20-min walk — one daily anchor",micro:"Replace one commute segment permanently",time:"20 min/day",
     howTo:[
       "Pick one existing trip and modify it permanently: get off the metro one stop earlier, park 10 minutes further, walk to lunch.",
       "No commute? Walk immediately after breakfast or straight after lunch — post-meal walking also lowers glucose spikes.",
       "Leave your phone in your pocket on silent — the walk is thinking time, not content time.",
       "Choose the greenest or most open route available, even if it is slightly longer — nature amplifies the effect.",
       "Walk at a comfortable conversational pace. This is not exercise — it is movement hygiene.",
       "Rain or cold: wear the right jacket and go anyway. Missing the walk because of weather is how the habit dies."
     ],
     benefit:"Non-intentional, daily walking is the single most consistent longevity habit across all five Blue Zones (Buettner, National Geographic 2005 / 2023). It improves cardiovascular health, reduces all-cause mortality by 20–30% at just 7,000–8,000 steps per day, lowers blood glucose, improves creativity (Stanford, 2014) and is strongly protective against depression. Unlike structured exercise, walking requires no recovery, produces no injury risk, and compounds effortlessly over decades — which is why it outperforms almost every gym routine in observational longevity data.",
     source:"Buettner, Blue Zones — National Geographic 2005",sourceUrl:"https://www.bluezones.com"},
  ]},
  {week:3,title:"Gratitude Architecture",theme:"Positive Emotions",color:"#5C7A5C",light:"#EEF6EE",
   tagline:"Rewire your default emotional frequency — specifically, not generically.",
   science:"GGIA Berkeley's gratitude practices are among the most replicated interventions in positive psychology, with effect sizes rivalling CBT for mild depression.",
   habits:[
    {id:"w3h1",emoji:"✍️",title:"3 specific gratitudes each evening",micro:"Physical notebook — go specific, not generic",time:"5 min/day",
     howTo:[
       "Each night, for at least one week, write down three things that went well for you today and briefly explain why they went well.",
       "Use a physical notebook — not your phone — and keep it on your nightstand. A physical record matters far more than doing it in your head.",
       "Entries can be small everyday events or bigger milestones: 'I got out of bed today', 'my colleague laughed at my joke', 'I got a promotion'.",
       "Always add the 'why': 'the barista remembered my order — I felt seen because I rarely feel recognised in this new city'.",
       "Do it at the same time each evening, ideally 10–30 minutes before sleep, as the final act of the day.",
       "If you miss a day, do not backfill — just start again tomorrow. The habit is the streak, not the perfection."
     ],
     benefit:"The 'Three Good Things' exercise is one of the most replicated interventions in positive psychology. In Seligman's landmark 2005 study (and Emmons & McCullough, 2003), participants who did this for just one week reported higher happiness and lower depressive symptoms — and the effects were still measurable 6 months later. Writing engages episodic memory more deeply than thinking, trains your brain to scan for positive events during the day, and displaces the negativity bias that evolution built in. It takes 5 minutes and is free. Greater Good Science Center, UC Berkeley, lists it as one of its highest-impact research-backed practices.",
     source:"Emmons & McCullough, J. Personality & Social Psychology 2003",sourceUrl:"https://doi.org/10.1037/0022-3514.84.2.377"},
    {id:"w3h2",emoji:"💌",title:"Write one gratitude letter this week",micro:"To anyone, living or not. You don't have to send it.",time:"20 min once",
     howTo:[
       "Choose one person who had a meaningful impact on your life and was never properly thanked — a teacher, mentor, relative, friend.",
       "Write a full letter (300+ words): describe specifically what they did, how it affected you, and where you are today because of it.",
       "Use concrete details, not generalities — name the moment, the words, the feeling.",
       "You do not have to send it. But if you can deliver it in person and read it aloud, the effect is measurably larger for both of you.",
       "If the person has passed away, write it anyway — the benefit comes from the author, not the recipient.",
       "Keep a copy. Re-read it the next time you feel flat or disconnected."
     ],
     benefit:"In Seligman et al. (American Psychologist, 2005), the gratitude letter produced the single largest and most durable increase in happiness of any positive psychology intervention tested — larger than meditation, mindfulness, signature strengths, or three good things. Participants who delivered the letter in person showed happiness gains that were still measurable one month later. The act of writing forces you to translate vague appreciation into specific causal memory, which activates reward circuitry and consolidates a more generous view of your own life story. GGIA Berkeley lists it as a top-tier practice — 20 minutes, one time, lasting effect.",
     source:"Seligman et al., American Psychologist 2005",sourceUrl:"https://doi.org/10.1037/0003-066X.60.5.410"},
    {id:"w3h3",emoji:"🌸",title:"Savour one moment daily — eyes open",micro:"Pause for 30 seconds. Notice texture, sound, temperature.",time:"30 sec/day",
     howTo:[
       "Pick one moment that already exists in your day — the first sip of coffee, a meal, a walk, sunlight on your face.",
       "When it happens, stop. Put down your phone. Take one slow breath.",
       "Notice three sensory details: one sound, one texture, one temperature or smell.",
       "Say internally: 'I am here, and this is good.' Hold the moment for 20–30 seconds — do not rush past it.",
       "Return to the same moment every day to anchor the habit — novelty is not the point, attention is.",
       "No apps, no timers, no photos: savouring through a screen is not savouring."
     ],
     benefit:"Savouring — the deliberate amplification and prolongation of positive experience — is one of the most effective and least practised happiness skills. Bryant & Veroff (2007) and subsequent studies show it independently boosts life satisfaction over a 4-week window and directly interrupts hedonic adaptation, the process by which the brain filters out recurring positive stimuli. Just 20–30 seconds of full attention converts an ordinary event into a stored positive memory, building a reservoir of emotional fuel to draw on during harder periods. It is the cheapest upgrade possible to experiences you are already having.",
     source:"Bryant & Veroff, Savoring: A New Model of Positive Experience 2007",sourceUrl:"https://greatergood.berkeley.edu/topic/savoring"},
    {id:"w3h4",emoji:"🍽️",title:"One screen-free, seated meal per day",micro:"Start with lunch. Phone in a drawer.",time:"Daily",
     howTo:[
       "Start with the easiest meal — usually lunch, then one dinner, then breakfast.",
       "Phone face-down in a drawer, bag or another room — not next to the plate.",
       "Sit at a table. Eating standing up or at your desk does not count.",
       "Chew each bite a little more than feels natural, and put the fork down between bites.",
       "Notice 3 things about the food: temperature, texture and a single flavour note.",
       "If you eat with others, use the time for real conversation — no TV in the background."
     ],
     benefit:"Mindful eating reliably reduces portion size by 20–30% without conscious effort, improves digestion via parasympathetic activation, and strengthens the natural hunger-satiety signals that distractions suppress (Allirot et al., British Journal of Nutrition, 2013). Eating while scrolling or watching a screen disconnects you from interoceptive feedback, which is why it is so easy to finish a bag of crisps in front of a series without noticing. A single daily screen-free meal is the smallest possible dose that still produces a measurable shift in how much you eat and how much pleasure you get from it.",
     source:"Allirot et al., British Journal of Nutrition 2013",sourceUrl:"https://doi.org/10.1017/S0007114512004540"},
  ]},
  {week:4,title:"Social Vitality",theme:"Relational Wealth",color:"#2A6B8A",light:"#EBF5FA",
   tagline:"The most powerful predictor of a long, happy life is the quality of your relationships.",
   science:"The Harvard Study of Adult Development (80 years, 724 men) found relationship quality outperforms income, IQ, genes and social class as a predictor of wellbeing.",
   habits:[
    {id:"w4h1",emoji:"🤝",title:"One deep conversation daily",micro:"Call, not text. No agenda. Listen more than you talk.",time:"15 min/day",
     howTo:[
       "Choose voice or video over text — tone of voice carries 40% of emotional information that disappears in writing.",
       "Start with a real question: 'How are you really?' or 'What is on your mind this week?'. Skip the weather.",
       "Listen without preparing your next sentence. Ask one follow-up question before you share your own view.",
       "Aim for at least one person a day — family, friend, colleague, neighbour. Rotate the list, do not always call the same person.",
       "15 minutes is enough. Quality beats duration.",
       "If the day is too busy: send a 30-second voice note with a real question. Better than a text, better than nothing."
     ],
     benefit:"The Harvard Study of Adult Development — the longest longitudinal study of human wellbeing ever conducted (80+ years, 724 men, now including partners and children) — concludes that relationship quality is the single strongest predictor of health and happiness at age 80, stronger than cholesterol, income, IQ or social class (Waldinger & Schulz, The Good Life, 2023). Even brief, regular meaningful contact activates oxytocin release, buffers cortisol and supports immune function. Deep conversations require no budget, no calendar and no travel — they just require that you pick up the phone and actually listen for 15 minutes.",
     source:"Waldinger & Schulz, The Good Life 2023",sourceUrl:"https://www.goodlifeproject.com"},
    {id:"w4h2",emoji:"🎁",title:"One act of kindness per day",micro:"Specific, spontaneous, directed at one person",time:"Daily",
     howTo:[
       "Make it specific and personal — a direct action for a specific person you can see, not an abstract donation.",
       "Examples: make a colleague's coffee, text someone 'I thought of you today', hold the lift, let the car behind you pass.",
       "Vary the recipient over the week — do not always give to the same person.",
       "Do it silently when possible — anonymous kindness activates reward circuits more cleanly than praised kindness.",
       "Notice how you feel for the next 10 minutes — this is the dopamine-and-oxytocin signature you are training.",
       "Once the daily habit is locked, pick one 'big' act per month: donation, volunteering, helping someone move."
     ],
     benefit:"Performing acts of kindness consistently increases life satisfaction, self-esteem, mood and even physical health markers across dozens of trials. Dunn, Aknin & Norton (Science, 2008) demonstrated that spending on others produces more happiness than spending the same amount on oneself — an effect replicated in countries with very different income levels. Kind acts release oxytocin, reduce social anxiety through repeated positive exposure, and strengthen the giver's perceived social connectedness. The daily dose matters more than the size: one small, specific act each day outperforms one large act per month.",
     source:"Dunn, Aknin & Norton, Science 2008",sourceUrl:"https://doi.org/10.1126/science.1150952"},
    {id:"w4h3",emoji:"📞",title:"Replace one scroll session with a real call",micro:"Someone you have been meaning to catch up with",time:"Daily",
     howTo:[
       "Identify your go-to scroll moment: commute, lunch break, before bed, waiting at the doctor's.",
       "Pick one of those slots and replace it once a day with a phone call — not a text, not a Like.",
       "Keep a rolling list of 5 people you owe a call: rotate through them.",
       "Opening line: 'I was just thinking of you — do you have 5 minutes?' works 95% of the time.",
       "5 minutes counts. Even brief, unexpected calls produce significant wellbeing gains for both people.",
       "If they do not answer, leave a warm voicemail — the habit is the act of reaching out, not the pickup."
     ],
     benefit:"Epley & Schroeder (Journal of Experimental Psychology: General, 2014) ran a series of field experiments showing that people systematically underestimate how much both themselves and the other person will enjoy unexpected contact — a robust bias they call 'undersociality'. When participants were pushed past the hesitation and actually made the call, mood, connection and even sense of life meaning increased far more than they had predicted. Trading 10 minutes of scrolling for 10 minutes of voice contact replaces a dopamine-depleting activity with an oxytocin-producing one — a near-perfect trade for your nervous system.",
     source:"Epley & Schroeder, J. Experimental Psychology 2014",sourceUrl:"https://doi.org/10.1037/xge0000030"},
    {id:"w4h4",emoji:"🫂",title:"Express appreciation to one person today",micro:"Specific, sincere, out loud or in writing",time:"2 min/day",
     howTo:[
       "Pick one person in your day. Say — or write — exactly what you appreciate and why.",
       "Specific, not generic: 'I appreciated how you handled that meeting — your calm made it possible for me to stay focused.'",
       "Eye contact amplifies the effect for both sides. Do it in person when you can.",
       "For written messages, use a real sentence, not an emoji — the specificity is what makes it land.",
       "Works with strangers too: 'You made that really pleasant, thank you' to a cashier or a driver costs nothing and lands hard.",
       "Once a week, do it for someone you see too often to normally thank — partner, parent, close friend."
     ],
     benefit:"Expressing appreciation strengthens relational bonds, increases closeness and activates the giver's reward system as strongly as the receiver's (GGIA Berkeley; Algoe, 2012). Unlike generic thanks, specific appreciation forces the brain to reconstruct exactly why the action mattered, which encodes the positive association more deeply for both people. Couples who regularly express specific appreciation report higher relationship satisfaction and lower break-up rates. At the individual level, it is an almost-free intervention that trains you to actively scan for what is good in your social world instead of defaulting to criticism.",
     source:"GGIA Berkeley — Expressing Gratitude practice",sourceUrl:"https://ggia.berkeley.edu/practice/gratitude_letter"},
  ]},
  {week:5,title:"Mindful Attention",theme:"Awareness & Wonder",color:"#6B4A9A",light:"#F3F0FA",
   tagline:"Where attention goes, wellbeing follows.",
   science:"MBSR is one of the most studied psychological interventions, with structural brain changes measurable after just 8 weeks.",
   habits:[
    {id:"w5h1",emoji:"🧘",title:"10-minute meditation — every morning",micro:"Headspace · Petit Bambou · or just follow your breath",time:"10 min/day",
     howTo:[
       "Do it before checking email, social media or the news — ideally straight after your morning light.",
       "Use a guided app for the first 2 weeks: Headspace, Petit Bambou, Waking Up or Calm are all well-designed.",
       "Sit upright on a chair or cushion with a straight spine. Lying down tends to send beginners to sleep.",
       "Close your eyes. Focus on the simple sensation of breathing — not on controlling the breath.",
       "When your mind wanders (it will, constantly), gently notice and return — that 'noticing and returning' is the entire exercise.",
       "Miss a day? Just sit the next morning. Do not give up on week 1 because of one missed session."
     ],
     benefit:"Hölzel et al. (Psychiatry Research: Neuroimaging, 2011) showed that after just 8 weeks of daily meditation, MRI scans revealed increased grey matter density in the prefrontal cortex, hippocampus and insula, along with reduced amygdala reactivity to stress. Meta-analyses of MBSR trials report average anxiety reductions of around 38% and significant improvements in attention, emotional regulation and sleep. Ten minutes a day — less than a coffee break — is the dose that consistently produces measurable effects. Unlike most interventions, the benefits continue to compound for years of practice, making it the highest-leverage mental skill you can build in this program.",
     source:"Holzel et al., Psychiatry Research: Neuroimaging 2011",sourceUrl:"https://doi.org/10.1016/j.pscychresns.2010.08.006"},
    {id:"w5h2",emoji:"😮",title:"Awe walk — once per week",micro:"Walk slowly. Look up. Notice scale and beauty.",time:"20 min/week",
     howTo:[
       "Block 20 minutes in your calendar once per week — Sunday morning is an easy slot.",
       "Walk alone — awe is harder to experience in conversation.",
       "Seek vastness: look up at trees, sky, tall buildings, waves, mountains, stars, old architecture.",
       "Walk slowly. Let yourself stop. The point is noticing, not covering distance.",
       "UC Berkeley protocol: take one quick photo of something that moved you — it helps you remember and anchor the state.",
       "Afterwards, note in one sentence what surprised you. Over weeks, patterns will emerge."
     ],
     benefit:"Sturm et al. (Emotion, 2022), from Dacher Keltner's lab at UC Berkeley, ran the landmark 'awe walk' study: older adults who took one 15-minute awe-focused walk per week for 8 weeks reported significantly more positive emotions and smaller selves in photos (a measurable marker of reduced self-preoccupation), compared to controls who took regular walks. Awe — the feeling of encountering something vast that expands your mental frame — reduces inflammatory markers, shifts attention outward from rumination, and reliably lifts mood. It takes 20 minutes a week and costs nothing.",
     source:"Sturm et al., Emotion 2022 — Keltner Lab, UC Berkeley",sourceUrl:"https://doi.org/10.1037/emo0000876"},
    {id:"w5h3",emoji:"🔕",title:"One hour digital-free per day",micro:"Same hour every day — consistency matters more than duration",time:"60 min/day",
     howTo:[
       "Choose the same hour every day — morning before work, or evening after dinner. Not random slots.",
       "Physical removal beats willpower: put the phone in a drawer or another room, turn off laptop notifications.",
       "Fill the hour deliberately — reading, cooking, walking, a hobby, a conversation, a bath — rather than hoping the boredom resolves itself.",
       "Start with 30 minutes if 60 feels impossible, and add 10 minutes a week until you reach an hour.",
       "Tell one person in your household so they know not to expect a reply during that window.",
       "Do not celebrate the hour with an extra hour of scrolling afterwards — that defeats the point."
     ],
     benefit:"Kushlev & Dunn's research on smartphone use (2015, and follow-ups) and Cal Newport's 'Digital Minimalism' synthesis (2019) both conclude that a predictable, protected window free from digital input is more effective for reducing anxiety and restoring attention than trying to reduce total daily screen time. The brain's default-mode network — the network associated with reflection, creativity and memory consolidation — only activates when input stops. A daily, recurring digital hour gives that network reliable room to operate and has been linked to reduced rumination, better sleep quality and increased perceived meaning in life.",
     source:"Newport, Deep Work 2016 / Kushlev & Dunn 2015",sourceUrl:"https://doi.org/10.1016/j.chb.2014.09.044"},
    {id:"w5h4",emoji:"🌿",title:"Spend 20 min in nature today",micro:"Park, garden, waterside — not a screen wallpaper",time:"20 min/day",
     howTo:[
       "Find the nearest green or blue space — park, garden, riverside, canal, forest path, coastline.",
       "Aim for at least 120 minutes per week total — split however works (20 min daily, or 2 × 60 min).",
       "Walk or sit — both work. The dose is exposure, not effort.",
       "Leave headphones out at least once a week — natural sounds have an independent calming effect.",
       "No big park nearby? Tree-lined streets, a community garden, or even a plant-filled balcony still count.",
       "In bad weather, a 10-minute stand under a tree in the rain is worth more than scrolling indoors."
     ],
     benefit:"White et al. (Scientific Reports, 2019) analysed nearly 20,000 people and found that spending at least 120 minutes per week in natural environments was the threshold at which people reported significantly better health and wellbeing — with the effect plateauing around 200–300 minutes. Hunter et al. (Frontiers in Psychology, 2019) measured salivary cortisol and found that 20–30 minutes of nature contact produced the greatest per-minute stress-reduction effect. Nature exposure lowers cortisol, blood pressure and rumination while increasing positive affect and attentional restoration — an unusually large payoff for something that is free and requires no skill.",
     source:"Hunter et al., Frontiers in Psychology 2019",sourceUrl:"https://doi.org/10.3389/fpsyg.2019.00722"},
  ]},
  {week:6,title:"Movement & Resilience",theme:"Physical Foundation",color:"#8A4A2A",light:"#FBF0EB",
   tagline:"Your body is your oldest emotional regulation tool.",
   science:"Exercise is now a first-line treatment for mild-to-moderate depression in UK NICE guidelines (2022), with effect sizes matching antidepressants.",
   habits:[
    {id:"w6h1",emoji:"🏃",title:"Aerobic exercise 3x this week",micro:"20–30 min at conversational intensity",time:"3x20 min",
     howTo:[
       "Pick any aerobic activity you already tolerate: brisk walking, cycling, jogging, swimming, dancing, hiking.",
       "Target intensity: you can speak a sentence but not comfortably sing. This is around 60–75% of max heart rate.",
       "Schedule all 3 sessions in your calendar now, as fixed appointments with yourself.",
       "Shorter is better than skipped: 15 minutes counts on a bad day.",
       "Pair the sessions with something you already enjoy — a favourite playlist, a podcast, a walking friend.",
       "Missed a session? Just do the next one. Never double up to compensate."
     ],
     benefit:"Chekroud et al. (The Lancet Psychiatry, 2018) analysed self-reported mental health in 1.2 million Americans and found that people who exercised regularly experienced 43% fewer 'bad mental health days' per month than those who did not — a larger effect than any other modifiable factor studied, including income and education. The mechanism: exercise increases BDNF (brain-derived neurotrophic factor, essentially fertiliser for neurons), reduces systemic inflammation, and acutely lifts mood through endocannabinoid and dopamine release. UK NICE guidelines now list aerobic exercise as a first-line treatment for mild-to-moderate depression, with effect sizes that match SSRI antidepressants and far fewer side effects.",
     source:"Chekroud et al., The Lancet Psychiatry 2018",sourceUrl:"https://doi.org/10.1016/S2215-0366(18)30227-X"},
    {id:"w6h2",emoji:"🌡️",title:"End shower with 30 sec cold water",micro:"Warm first, cold last. Breathe through it.",time:"Daily",
     howTo:[
       "Finish your normal warm shower as usual — this is an add-on, not a replacement.",
       "Turn the temperature to fully cold for 30 seconds at the end, starting from the feet and moving up.",
       "Breathe slowly and deeply through the nose — the urge to gasp passes within 10–15 seconds.",
       "Add 15 seconds each week until you reach 2–3 minutes total.",
       "Do it in the morning, not before bed — the noradrenaline spike lasts several hours.",
       "Skip it if you have uncontrolled high blood pressure or a cardiac condition — always check with your doctor first."
     ],
     benefit:"Šrámek et al. and Shevchuk (Medical Hypotheses, 2008) document that short cold exposure raises noradrenaline by 200–300% and dopamine by around 250% — effects lasting 2–4 hours. This produces sustained alertness without the crash of caffeine, reduces inflammatory markers, and has been repeatedly linked to reduced chronic fatigue and improved mood in healthy adults. Beyond the chemistry, the daily act of voluntarily doing something unpleasant trains a small dose of psychological resilience — you teach yourself that discomfort is tolerable and time-limited, which transfers to other stressful moments in your day.",
     source:"Shevchuk, Medical Hypotheses 2008",sourceUrl:"https://doi.org/10.1016/j.mehy.2007.04.052"},
    {id:"w6h3",emoji:"📦",title:"Declutter one space you use daily",micro:"Desk, nightstand, or kitchen counter — pick one only",time:"30 min once",
     howTo:[
       "Pick one surface only — desk, nightstand, kitchen counter, bathroom shelf. Not a whole room.",
       "Empty it completely, then apply a 3-box rule: keep, donate, bin.",
       "Only put back what you genuinely use in a normal week. Be honest.",
       "Establish a '1 in, 1 out' rule for that surface going forward.",
       "Take a before/after photo — visible progress is a strong motivator to do the next surface.",
       "Repeat on one new surface per week until the key spaces in your home are calm."
     ],
     benefit:"McMains & Kastner (Journal of Neuroscience, 2011), using fMRI at Princeton, demonstrated that visual clutter in your environment competes for neural resources and measurably reduces the brain's ability to focus on any single task. Follow-up work links disorganised environments to higher cortisol levels, particularly in women. Decluttering a single frequently-used space reduces background cognitive load every time you look at it, lowers daily decision fatigue and produces a small but reliable mood lift for weeks — one of the highest-leverage 30-minute investments you can make.",
     source:"McMains & Kastner, J. Neuroscience 2011",sourceUrl:"https://doi.org/10.1523/JNEUROSCI.6138-10.2011"},
    {id:"w6h4",emoji:"🥦",title:"Redesign your food environment",micro:"Healthy food at eye level. Snacks hidden at the back.",time:"20 min once",
     howTo:[
       "Move fruit, vegetables and protein to the front and centre of your fridge at eye level.",
       "Put a bowl of fruit on the counter — visible food gets eaten.",
       "Move sweets, crisps and alcohol to high shelves or opaque containers at the back.",
       "Wash, cut and portion vegetables on shopping day so they are as convenient as a packet of crisps.",
       "Keep ready-to-go protein (eggs, yoghurt, tofu, chicken) in clear containers at eye level.",
       "Do not buy what you do not want to eat — you cannot resist what is already in the cupboard at 22:00."
     ],
     benefit:"Brian Wansink's work at the Cornell Food & Brand Lab, and subsequent replication studies, estimate that around 70% of daily eating decisions are driven by environmental cues — visibility, convenience, portion size, plate colour — rather than conscious hunger or willpower. Small friction changes (moving crisps to a high cupboard, putting fruit in plain view) produce consistent, lasting dietary improvements without any attempt at dieting. Because the change happens once, then runs on autopilot, it is one of the few food interventions whose effect does not fade over time.",
     source:"Wansink, Mindless Eating — Cornell Food & Brand Lab",sourceUrl:"https://doi.org/10.1093/jn/nxac141"},
  ]},
  {week:7,title:"Compassion & Meaning",theme:"Inner Compass",color:"#2A7A6A",light:"#EBF6F4",
   tagline:"Treating yourself with the kindness you would offer a friend is not weakness — it is neuroscience.",
   science:"Kristin Neff's self-compassion research shows it is a stronger predictor of emotional resilience than self-esteem, without its fragility.",
   habits:[
    {id:"w7h1",emoji:"💙",title:"Self-compassion practice — 5 min/day",micro:"What would I say to a friend in this situation? Say it to yourself.",time:"5 min/day",
     howTo:[
       "When you notice self-criticism, pause and ask: 'What would I say to a close friend in exactly this situation?'.",
       "Say that sentence to yourself — out loud if possible, or silently with conviction.",
       "Place one hand on your chest or cheek. The physical gesture activates the mammalian caregiving system.",
       "Name the feeling out loud: 'this is stress', 'this is disappointment'. Labelling reduces its intensity (Lieberman, UCLA).",
       "Remind yourself that this is part of being human — 'other people feel this too' — not a personal failure.",
       "Optional written version: 3 sentences of compassionate self-talk in your journal each evening."
     ],
     benefit:"Kristin Neff's two decades of research (Neff & Germer, J. Clinical Psychology, 2013; and many replications) show that self-compassion reduces anxiety, depression, perfectionism and rumination while simultaneously increasing motivation, learning from mistakes and resilience after failure. Unlike self-esteem, which requires a steady supply of success and can produce narcissistic side effects, self-compassion is available even during failure — which is precisely when you need it most. Meta-analyses show effect sizes comparable to established CBT interventions, with no downsides and no cost.",
     source:"Neff & Germer, J. Clinical Psychology 2013",sourceUrl:"https://doi.org/10.1002/jclp.21923"},
    {id:"w7h2",emoji:"🌟",title:"Identify one source of meaning today",micro:"Not a goal. A moment, a person, a why.",time:"2 min/day",
     howTo:[
       "Each morning, ask yourself: 'What would make today feel worth it?'.",
       "Keep it small and concrete — a good conversation, a task done well, helping someone, a moment of beauty.",
       "Write it in your journal or a phone note (3–8 words is plenty).",
       "In the evening, check whether it happened and how it felt. Note anything surprising.",
       "On harder days, the answer can simply be 'getting through it with kindness' — that still counts.",
       "At the end of the week, re-read your 7 answers. Patterns reveal what your life is actually oriented around."
     ],
     benefit:"Fredrickson et al. (PNAS, 2013) showed that eudaimonic wellbeing — the kind that comes from meaning and purpose rather than pleasure alone — is associated with a distinct pattern of gene expression that includes lower inflammation and stronger antiviral response. Longitudinal studies also find that a sustained sense of purpose predicts longer lifespan, lower risk of Alzheimer's, and greater resilience to stress. A daily 2-minute practice of naming your 'why' does not replace long-term purpose work — but it keeps you connected to it at the scale of real life, where days blur without intention.",
     source:"Fredrickson et al., PNAS 2013",sourceUrl:"https://doi.org/10.1073/pnas.1305419110"},
    {id:"w7h3",emoji:"🎨",title:"One hour of flow activity per week",micro:"Something absorbing, non-digital, skill-matched",time:"60 min/week",
     howTo:[
       "Pick an activity that is challenging but just within your skills — too easy is boredom, too hard is frustration.",
       "Good candidates: cooking a new recipe, playing an instrument, drawing, building, gardening, climbing, writing, sport.",
       "Block 60 uninterrupted minutes in your calendar. No notifications. No multitasking.",
       "Start a timer — flow typically takes 15–20 minutes to begin, so any distraction resets the clock.",
       "If you resist starting, commit to 10 minutes only — the activation energy is where flow sessions die.",
       "Over weeks, pay attention to which activities actually produce the absorbed state, and do more of those."
     ],
     benefit:"Mihaly Csikszentmihalyi's original flow research (1975–1990s) and subsequent decades of replication show that regular flow experiences are among the strongest correlates of life satisfaction, intrinsic motivation and long-term happiness — stronger than almost any material condition. In flow, self-monitoring and time perception fade, focus is effortless, and the brain consolidates skill faster than in forced practice. One protected hour per week is the minimum dose shown to produce a detectable effect on weekly mood, and it compounds over time as your skill grows.",
     source:"Csikszentmihalyi, Flow: The Psychology of Optimal Experience 1990",sourceUrl:"https://ggia.berkeley.edu/practice/find_your_flow_activities"},
    {id:"w7h4",emoji:"🌱",title:"Write your good life in 3 sentences",micro:"Not goals. What does a good day, year, life look and feel like?",time:"10 min once",
     howTo:[
       "Find 15 quiet minutes with a pen and paper — not a screen.",
       "Sentence 1: 'A good day for me is…'. Focus on how it feels, not what you achieve.",
       "Sentence 2: 'A good year involves…'. Think experiences, relationships and growth, not titles or purchases.",
       "Sentence 3: 'A good life means…'. One line. Do not overthink — your gut knows.",
       "Keep the paper somewhere visible: wallet, bedside table, desk, phone wallpaper.",
       "Re-read it when you are about to make a hard decision — and honestly ask whether the choice brings you closer or further from it."
     ],
     benefit:"Values clarification exercises improve decision-making, reduce regret, buffer against stress, and are linked to activation patterns in the medial prefrontal cortex — the brain's self-referential network — associated with durable wellbeing (Lyubomirsky, The How of Happiness, 2008; and Cohen & Sherman's affirmation literature). When your 'why' is explicit and on paper, minor daily choices start to compound in the same direction, and you stop wasting energy on options that do not fit. 10 minutes, one time, with effects that can last years — one of the highest-leverage exercises of the program.",
     source:"Lyubomirsky, The How of Happiness 2008",sourceUrl:"https://sonjalyubomirsky.com/books/the-how-of-happiness/"},
  ]},
  {week:8,title:"Integration & Momentum",theme:"Your Permanent Stack",color:"#4A4A8A",light:"#EEEEF8",
   tagline:"Habits do not need discipline — they need identity. You are now someone who does this.",
   science:"Identity-based habit formation (Fogg, Stanford / Clear, Atomic Habits) shows framing habits as who I am vs what I do produces far superior long-term adherence.",
   habits:[
    {id:"w8h1",emoji:"🔁",title:"Review your 8-week habit stack",micro:"Which 5 had the biggest impact? Keep those as non-negotiables.",time:"20 min once",
     howTo:[
       "Block 20 minutes alone with your notes and the program. No distractions.",
       "Go week by week and rate each habit 1–5 on how clearly it improved your life.",
       "Identify your top 5 by impact — these become your permanent non-negotiables.",
       "For medium-impact habits: decide to continue, modify the dose, or drop them.",
       "For low-impact habits: drop without guilt. Not every habit works for every person.",
       "Write your final 5 non-negotiables on a single card and put it somewhere you see every day."
     ],
     benefit:"BJ Fogg's Tiny Habits research (Stanford Behaviour Design Lab, 2019) and James Clear's Atomic Habits synthesis both show that the consolidation phase — explicit reflection on what worked — is as critical as the acquisition phase for long-term adherence. Habits that are reviewed and named become part of identity; habits that are not fade within weeks. Reducing your habit stack to the 5 that produced the clearest subjective effect increases the probability of long-term maintenance by a factor of 2–3 in tracking studies, and eliminates the cognitive overhead of trying to maintain everything.",
     source:"Fogg, Tiny Habits — Stanford Behaviour Design Lab 2019",sourceUrl:"https://tinyhabits.com"},
    {id:"w8h2",emoji:"📅",title:"Schedule your social anchor for next month",micro:"One real gathering with people who matter. In the calendar now.",time:"5 min once",
     howTo:[
       "Open your calendar right now. Pick a concrete date within the next 4 weeks.",
       "Invite at least one person whose company you genuinely value — ideally 2–4 people.",
       "Be specific: a meal, a walk, a film, a coffee — never 'we should get together sometime'.",
       "Send the invitation in the same 5 minutes. Do not wait for the 'right moment'.",
       "Add a recurring monthly reminder in your calendar titled 'social anchor'.",
       "Once you have the rhythm, add a second recurring anchor with a different circle (family, old friends, colleagues)."
     ],
     benefit:"The Harvard Study of Adult Development (Waldinger & Schulz, The Good Life, 2023) consistently shows that people who proactively invest in relationships — rather than waiting for them to happen — report the highest life satisfaction at every age, regardless of introversion or extraversion. Scheduling relationships like you schedule meetings protects them from the tyranny of urgent tasks. A recurring monthly anchor transforms friendships from something that 'should happen more often' into something that actually does — which is the only version that counts for wellbeing.",
     source:"Waldinger & Schulz, The Good Life 2023",sourceUrl:"https://www.goodlifeproject.com"},
    {id:"w8h3",emoji:"🧾",title:"Write your wellbeing OS — one page",micro:"Your non-negotiables, your values, your three anchors",time:"30 min once",
     howTo:[
       "One page. Print it or hand-write it — physical, not digital.",
       "Section 1: My 5 non-negotiable daily habits (from your week 8 review).",
       "Section 2: My values in 3 words (from your 'good life' sentences in week 7).",
       "Section 3: What I do when I am struggling — 3 concrete anchors: breathe, walk, call one specific person.",
       "Add a line at the bottom: the next check-in date (3 months from today).",
       "Put it somewhere visible: fridge, desk, notebook cover. Re-read it weekly for the first month."
     ],
     benefit:"Baumeister & Tierney (Willpower, 2011) and subsequent implementation-intention research (Gollwitzer) show that externalising personal rules — putting them on paper, in advance — doubles adherence compared to holding them in memory alone. When a decision has already been made, high-stress moments do not have to be renegotiated, and willpower is preserved for the things that actually need it. A one-page wellbeing OS acts as a personal constitution — it is what you fall back on when you are tired, stressed or tempted to drop the habits that made the program work.",
     source:"Baumeister & Tierney, Willpower 2011",sourceUrl:"https://www.amazon.com/Willpower-Rediscovering-Greatest-Human-Strength/dp/0143122231"},
    {id:"w8h4",emoji:"🎯",title:"Celebrate — genuinely, specifically",micro:"Note what changed. Tell someone. Mark the moment.",time:"10 min",
     howTo:[
       "Write down 3 specific things that are different about you after 8 weeks — energy, mood, sleep, relationships, focus, self-talk.",
       "Tell one person who matters what you achieved and why it was hard. Out loud, in person if possible.",
       "Do one genuine reward: a favourite meal, a trip, a meaningful purchase, an experience you have been postponing.",
       "Take a photo of your wellbeing OS page next to a coffee — you will want the memory later.",
       "Schedule a 3-month check-in in your calendar right now to re-read your page and re-run this reflection.",
       "Say, explicitly: 'I did this. I am someone who follows through.' Identity is built from statements like that."
     ],
     benefit:"BJ Fogg (Tiny Habits, Stanford 2019) identifies deliberate celebration as the single most underused and most effective tool in habit formation — because the immediate positive emotion chemically encodes the habit loop in a way that delayed rewards cannot. Reviewing specific gains, telling others and marking the moment converts an 8-week effort into a durable identity shift: 'I am someone who invests in my wellbeing.' That identity is what keeps the habits running for months and years after the formal program ends — which is, ultimately, the only outcome that matters.",
     source:"Fogg, Tiny Habits — Stanford 2019",sourceUrl:"https://tinyhabits.com"},
  ]},
];

const PROGRAM_FR = [
  {week:1,title:"Réinitialise ta biologie",theme:"Fondations circadiennes",color:"#B85A2A",light:"#FFF3EE",
   tagline:"Aligne ton horloge biologique — tout le reste se construit là-dessus.",
   science:"La synchronisation du rythme circadien (Saper et al., Science 2005) est le régulateur maître de l'humeur, de l'énergie et de la qualité du sommeil.",
   habits:[
    {id:"w1h1",emoji:"🌅",title:"Lumière du matin dans les 30 premières minutes",micro:"Sors 10 min — sans lunettes de soleil",time:"10 min",
     howTo:[
       "Programme un rappel récurrent sur ton téléphone intitulé « lumière », 15 minutes après ton réveil — indispensable les 3 premiers jours.",
       "Sors dans les 30 minutes qui suivent ton réveil : un balcon, un jardin, le pas de porte ou un aller-retour à la boulangerie comptent.",
       "Ne porte pas de lunettes de soleil : la lumière extérieure est 10 à 50× plus forte que la lumière intérieure, et tes yeux ont besoin du spectre complet.",
       "Ciel clair : 5 à 10 minutes suffisent. Ciel couvert : vise 15 à 20 minutes. Pluie battante ou avant le lever du soleil : utilise une lampe de luminothérapie 10 000 lux.",
       "Impossible de sortir ? Place-toi à moins d'un mètre d'une fenêtre grande ouverte, orientée vers la lumière — ne compte pas sur la lumière filtrée par un double-vitrage fermé.",
       "Associe ce rituel à une routine existante (café dehors, balade du chien, 5 minutes d'étirement) pour qu'il devienne automatique en une semaine."
     ],
     benefit:"La lumière du matin dans les 30 minutes suivant le réveil est le zeitgeber le plus puissant — le signal biologique qui synchronise ton noyau suprachiasmatique, l'horloge maîtresse située dans l'hypothalamus. Elle déclenche un pic de cortisol qui booste la vigilance diurne et, 14 à 16 heures plus tard, la libération de mélatonine qui rend l'endormissement naturel. Les données du Huberman Lab et l'étude de Leproult & Van Cauter (Sleep, 2010) montrent que les personnes exposées régulièrement à la lumière matinale s'endorment plus vite, se réveillent moins la nuit et rapportent une humeur et une concentration nettement meilleures en 7 à 10 jours — gratuitement, sans aucun effet secondaire.",
     source:"Huberman Lab / Leproult & Van Cauter, Sleep 2010",sourceUrl:"https://doi.org/10.1093/sleep/33.5.645"},
    {id:"w1h2",emoji:"🛏️",title:"Heure de réveil fixe — 7 jours sur 7",micro:"Même heure le week-end. Non négociable.",time:"0 effort",
     howTo:[
       "Choisis une seule heure de réveil que tu peux tenir tous les jours — y compris les week-ends, les vacances et le lendemain d'une soirée tardive.",
       "Une seule alarme, pas de snooze. Pose le téléphone (ou le réveil) à l'autre bout de la pièce : tu dois te lever pour l'éteindre.",
       "Trop fatigué·e ? Couche-toi 30 minutes plus tôt ce soir, plutôt que de dormir plus tard demain. Ne rattrape jamais le sommeil en étirant la matinée.",
       "Après une mauvaise nuit, accepte la fatigue et garde l'heure de réveil : ta pression de sommeil se reconstruit seule en 24 à 48 heures.",
       "Les week-ends, c'est là que l'habitude se fait ou se défait : une grasse mat' de 90 minutes crée un mini jet-lag qui coûte toute la semaine.",
       "Engage-toi sur 14 jours complets avant de juger l'effet — les 3 premiers matins sont les plus durs, après ça roule seul."
     ],
     benefit:"Phillips et al. (Science Advances, 2017) ont suivi des étudiants de Harvard et démontré que la régularité des horaires de sommeil prédit mieux les performances cognitives et l'humeur que le nombre total d'heures dormies. Les études qui ont suivi chez les adultes associent l'irrégularité du sommeil à un risque cardiovasculaire, métabolique et dépressif accru — indépendamment de la durée. Une heure de réveil fixe ancre tous les processus circadiens en aval : hormones de la faim, cycles de cortisol et de testostérone, température corporelle, fenêtres cognitives de pointe. C'est l'intervention sommeil la moins chère et la plus puissante qui existe, et contrairement à « dormir plus », elle ne coûte aucun temps supplémentaire.",
     source:"Phillips et al., Science Advances 2017",sourceUrl:"https://doi.org/10.1126/sciadv.1601666"},
    {id:"w1h3",emoji:"📵",title:"Téléphone hors de la chambre",micro:"Achète un réveil à 5 € ce soir",time:"5 min setup",
     howTo:[
       "Commande ou achète un réveil basique ce soir — on en trouve à moins de 10 € en supermarché ou pharmacie. Ne reporte pas cette étape.",
       "Choisis un emplacement de recharge permanent hors de la chambre : entrée, cuisine, salon. Un seul endroit fixe, toujours le même.",
       "Active « Ne pas déranger » de 21 h à 7 h — autorise les appels des « favoris » pour laisser passer les vraies urgences.",
       "Préviens ton entourage la première semaine pour qu'on ne s'attende pas à des réponses tardives.",
       "Si l'anxiété monte les 3 premières nuits (c'est fréquent), éloigne le téléphone davantage — surtout pas plus près de la porte de la chambre.",
       "Remplace le scroll avant dodo par un livre, un carnet ou une pratique respiratoire courte — le vide doit être comblé, pas seulement créé."
     ],
     benefit:"Kushlev & Dunn (Computers in Human Behavior, 2015) ont montré que simplement réduire les consultations du téléphone produit une baisse mesurable du stress et une amélioration de l'attention en une semaine. Dormir avec son téléphone dans la chambre est corrélé à un sommeil plus court, plus de réveils nocturnes et un réveil plus difficile — parce que l'attente inconsciente d'une notification maintient le système nerveux en vigilance légère. Retirer physiquement le téléphone — plutôt que de compter sur la volonté — élimine le scroll du soir, le check nocturne et la dose de cortisol du matin avant même d'être debout. C'est l'un des changements environnementaux les moins coûteux aux bénéfices les plus composés.",
     source:"Kushlev & Dunn, Computers in Human Behavior 2015",sourceUrl:"https://doi.org/10.1016/j.chb.2014.09.044"},
    {id:"w1h4",emoji:"🔵",title:"Filtre lumière bleue auto à 19 h",micro:"Night Shift programmé — à configurer une fois, fini",time:"2 min setup",
     howTo:[
       "iPhone : Réglages → Luminosité & affichage → Night Shift → Programmation → de 19 h à 7 h, curseur sur « Plus chaud ».",
       "Mac : Réglages Système → Moniteurs → Night Shift → Programmé → horaire personnalisé de 19 h à 7 h.",
       "Android : Paramètres → Affichage → Confort visuel / mode nuit → Programmation → à partir du coucher du soleil.",
       "Windows : Paramètres → Système → Affichage → Éclairage nocturne → Planifier → activé à partir de 19 h.",
       "Pour un effet plus fort : installe f.lux sur l'ordinateur, ou porte des lunettes ambrées / orange anti-lumière bleue après 20 h.",
       "Baisse la lumière générale le soir — privilégie lampes d'appoint, bougies, ampoules chaudes (2700 K ou moins) plutôt que les plafonniers vifs."
     ],
     benefit:"Chang et al. (PNAS, 2015) ont comparé la lecture sur liseuse rétroéclairée à un livre papier avant le coucher : la lumière bleue a supprimé la mélatonine de plus de 50 %, retardé l'endormissement de 10 minutes en moyenne, réduit le sommeil paradoxal et — surtout — rendu les participants plus somnolents le lendemain malgré un temps de sommeil identique. Les longueurs d'onde bleues (460 à 480 nm) sont exactement le signal que ton cerveau utilise pour détecter la lumière du jour : l'exposition en soirée lui fait croire qu'il est encore midi. Filtrer ces longueurs d'onde supprime ce faux signal et laisse la pression de sommeil s'installer naturellement — effet visible dès la première nuit.",
     source:"Chang et al., PNAS 2015",sourceUrl:"https://doi.org/10.1073/pnas.1418490112"},
  ]},
  {week:2,title:"Le corps s'éveille",theme:"Bien-être incarné",color:"#A06B10",light:"#FFF8ED",
   tagline:"Hydrate, respire, bouge — ton corps parle avant ton mental.",
   science:"La recherche sur la cognition incarnée (Niedenthal, Science 2007) montre que les états corporels façonnent directement l'expérience émotionnelle et cognitive.",
   habits:[
    {id:"w2h1",emoji:"💧",title:"500 ml d'eau au réveil",micro:"Bouteille prête sur la table de nuit la veille",time:"2 min/j",
     howTo:[
       "Remplis un verre ou une bouteille de 500 ml tous les soirs et pose-le sur la table de nuit — fais-le au moment où tu te brosses les dents.",
       "Bois le tout dans les 10 premières minutes du réveil, avant café, thé, nourriture ou téléphone.",
       "Ajoute une pincée de sel de mer, un filet de citron ou un peu de mélange électrolytes pour améliorer l'absorption et compenser la perte de sodium nocturne.",
       "L'eau à température ambiante s'absorbe plus vite que l'eau glacée — évite l'eau froide dès le réveil.",
       "En déplacement ? Utilise la bouteille que tu as déjà — la régularité compte plus que le contenant.",
       "Ancre le geste à une autre action matinale (poser le pied au sol, ouvrir les rideaux) pour le rendre automatique."
     ],
     benefit:"Ganio et al. (British Journal of Nutrition, 2011) ont montré qu'une déshydratation légère de 1 à 2 % — normale après une nuit sans apport liquide — dégrade la mémoire à court terme, la concentration, l'humeur et augmente la fatigue perçue en moins de 30 minutes. Ton corps perd 300 à 500 ml par nuit par la respiration et la transpiration, et la cortisolémie matinale déshydrate encore les cellules. Se réhydrater immédiatement restaure le volume plasmatique, soutient le débit sanguin cérébral, active la motilité digestive et fournit un coup de boost fiable. C'est l'intervention humeur + concentration la plus rapide de tout le programme.",
     source:"Ganio et al., British Journal of Nutrition 2011",sourceUrl:"https://doi.org/10.1017/S0007114511002005"},
    {id:"w2h2",emoji:"🌬️",title:"Respiration 4-7-8 — 4 cycles",micro:"Inspire 4 s · retiens 7 s · expire 8 s — avant tout écran",time:"2 min/j",
     howTo:[
       "Assieds-toi ou allonge-toi, dos droit. Place la pointe de la langue derrière les incisives supérieures pendant tout l'exercice.",
       "Expire complètement par la bouche avec un léger « whoosh ».",
       "Ferme la bouche et inspire calmement par le nez sur un compte de 4.",
       "Retiens le souffle, immobile, sur un compte de 7.",
       "Expire audiblement par la bouche sur un compte de 8 — deux fois plus long que l'inspiration.",
       "Répète 4 cycles complets. Fais-le dès le matin et, idéalement, avant tout moment stressant (réunion, transport, coucher)."
     ],
     benefit:"La respiration lente à expiration prolongée, autour de 6 respirations par minute — la fréquence de résonance de la variabilité cardiaque — active le nerf vague et fait basculer le système nerveux autonome du sympathique (fuite-combat) au parasympathique (repos-digestion) en moins de 60 secondes. Brown & Gerbarg (J. Alternative & Complementary Medicine, 2005) et les essais cliniques qui ont suivi mesurent une baisse du cortisol, de la fréquence cardiaque, de la tension artérielle et de l'anxiété subjective dès la première séance. Contrairement à la méditation, aucun entraînement n'est requis : la physiologie est câblée et l'effet fonctionne dès le premier jour — ce qui en fait l'outil de régulation le plus proche d'un anxiolytique naturel.",
     source:"Brown & Gerbarg, J. Alternative & Complementary Medicine 2005",sourceUrl:"https://doi.org/10.1089/acm.2005.11.189"},
    {id:"w2h3",emoji:"☕",title:"Retarde ton premier café de 90 min",micro:"Le cortisol culmine la 1re heure — le café y est gâché",time:"0 effort",
     howTo:[
       "Programme un rappel « café autorisé » exactement 90 minutes après ton heure de réveil.",
       "Remplis cette fenêtre avec eau, lumière, respiration et mouvement léger — c'est la pile énergie naturelle.",
       "Déca, infusion ou eau chaude citronnée sont tolérés pendant la fenêtre d'attente.",
       "Attends-toi à un léger mal de tête ou à du brouillard les 2 à 4 premiers jours si tu bois beaucoup de café — c'est un recalibrage de l'adénosine, pas un manque durable.",
       "Reste sous 400 mg de caféine par jour, et coupe toute caféine au moins 8 heures avant ton heure de coucher cible.",
       "Privilégie un café filtre ou un espresso léger sur un estomac peu chargé — ajoute un petit en-cas protéiné si tu sens des palpitations."
     ],
     benefit:"Le cortisol suit un pic naturel dans les 45 à 60 premières minutes après le réveil — la « réponse d'éveil du cortisol » — qui est ce qui te réveille vraiment. Boire du café dans cette fenêtre émousse l'effet du cortisol et accélère la tolérance à la caféine : il t'en faut davantage pour ressentir le même coup de boost. Lovallo et al. (Psychosomatic Medicine, 2006) ont montré qu'un timing stratégique de la caféine produit une vigilance subjective plus forte, avec une dose quotidienne totale plus faible et un crash d'après-midi atténué. Retarder aussi la première tasse rallonge l'écart entre la caféine et l'heure du coucher, ce qui protège le sommeil profond.",
     source:"Lovallo et al., Psychosomatic Medicine 2006",sourceUrl:"https://doi.org/10.1097/01.psy.0000204926.97596.2a"},
    {id:"w2h4",emoji:"🚶",title:"Marche 20 min — un ancrage quotidien",micro:"Remplace un segment de trajet de façon permanente",time:"20 min/j",
     howTo:[
       "Modifie un trajet existant de façon permanente : descends un arrêt de métro plus tôt, gare-toi 10 minutes plus loin, va à pied au déjeuner.",
       "Pas de trajet quotidien ? Marche juste après le petit-déjeuner ou le déjeuner — marcher après un repas réduit aussi les pics de glycémie.",
       "Garde le téléphone dans la poche, en silencieux — c'est un temps de réflexion, pas un temps de contenu.",
       "Choisis l'itinéraire le plus vert ou le plus ouvert possible, même s'il est un peu plus long — la nature amplifie l'effet.",
       "Marche à rythme de conversation — ce n'est pas du sport, c'est de l'hygiène de mouvement.",
       "Pluie ou froid : mets la bonne veste et vas-y quand même. C'est en ratant la marche à cause de la météo que l'habitude meurt."
     ],
     benefit:"La marche quotidienne, non intentionnelle, est l'habitude de longévité la plus commune dans les cinq Zones Bleues (Buettner, National Geographic 2005 / 2023). Elle améliore la santé cardiovasculaire, réduit la mortalité toutes causes de 20 à 30 % à seulement 7 000–8 000 pas par jour, abaisse la glycémie, améliore la créativité (Stanford, 2014) et protège fortement contre la dépression. Contrairement au sport structuré, la marche ne demande aucune récupération, ne crée aucun risque de blessure, et se compose sans effort sur des décennies — c'est pour ça qu'elle surpasse presque n'importe quelle routine de salle dans les données longitudinales de longévité.",
     source:"Buettner, Blue Zones — National Geographic 2005",sourceUrl:"https://www.bluezones.com"},
  ]},
  {week:3,title:"Architecture de la gratitude",theme:"Émotions positives",color:"#5C7A5C",light:"#EEF6EE",
   tagline:"Reprogramme ta fréquence émotionnelle par défaut — avec précision, pas en généralités.",
   science:"Les pratiques de gratitude du GGIA Berkeley sont parmi les interventions les plus répliquées de la psychologie positive, avec des tailles d'effet rivalisant avec la TCC pour la dépression légère.",
   habits:[
    {id:"w3h1",emoji:"✍️",title:"3 gratitudes spécifiques chaque soir",micro:"Cahier papier — sois précis·e, pas générique",time:"5 min/j",
     howTo:[
       "Chaque soir, pendant au moins une semaine, écris trois choses qui se sont bien passées aujourd'hui, et explique brièvement pourquoi elles se sont bien passées.",
       "Utilise un vrai cahier papier — pas ton téléphone — et garde-le sur la table de nuit. Le support physique compte bien plus que de le faire dans sa tête.",
       "Les items peuvent être petits ou importants : « je suis sorti·e du lit », « un collègue a ri de ma blague », « j'ai eu une promotion ».",
       "Ajoute toujours le « pourquoi » : « le serveur s'est souvenu de ma commande — je me suis senti·e reconnu·e, ce qui est rare depuis que j'ai déménagé ».",
       "Fais-le à la même heure chaque soir, idéalement 10 à 30 minutes avant de dormir, comme dernier geste de la journée.",
       "Si tu sautes un jour, ne rattrape pas — reprends simplement demain. L'habitude, c'est la régularité, pas la perfection."
     ],
     benefit:"L'exercice « Trois bonnes choses » est l'une des interventions les plus répliquées de la psychologie positive. Dans l'étude phare de Seligman (2005) et Emmons & McCullough (2003), les participants qui l'ont pratiqué pendant une seule semaine ont rapporté un bonheur accru et moins de symptômes dépressifs — effets encore mesurables 6 mois plus tard. L'écriture sollicite la mémoire épisodique plus profondément que la pensée, entraîne le cerveau à scanner les événements positifs de la journée, et contrebalance le biais de négativité que l'évolution a câblé. 5 minutes, gratuit. Le Greater Good Science Center de UC Berkeley le classe parmi ses pratiques à plus fort impact.",
     source:"Emmons & McCullough, J. Personality & Social Psychology 2003",sourceUrl:"https://doi.org/10.1037/0022-3514.84.2.377"},
    {id:"w3h2",emoji:"💌",title:"Écris une lettre de gratitude cette semaine",micro:"À qui tu veux, vivant ou non. Pas besoin de l'envoyer.",time:"20 min une fois",
     howTo:[
       "Choisis une personne qui a eu un impact réel sur ta vie et que tu n'as jamais vraiment remerciée — un·e prof, mentor, parent, ami·e.",
       "Écris une vraie lettre (300+ mots) : décris précisément ce qu'elle a fait, comment ça t'a affecté·e, et où tu en es aujourd'hui grâce à elle.",
       "Utilise des détails concrets, pas des généralités — nomme le moment, les mots, le sentiment.",
       "Tu n'es pas obligé·e de l'envoyer. Mais si tu peux la livrer en personne et la lire à voix haute, l'effet mesuré est nettement plus grand pour les deux.",
       "Si la personne est décédée, écris-la quand même — le bénéfice vient de l'auteur, pas du destinataire.",
       "Garde une copie. Relis-la la prochaine fois que tu te sens plat·e ou déconnecté·e."
     ],
     benefit:"Dans Seligman et al. (American Psychologist, 2005), la lettre de gratitude a produit la plus grande et la plus durable augmentation de bonheur de toutes les interventions testées en psychologie positive — plus grande que la méditation, la pleine conscience, les forces de signature ou les trois bonnes choses. Les participants qui l'ont livrée en personne présentaient encore des gains mesurables un mois plus tard. L'acte d'écrire force le cerveau à traduire une reconnaissance floue en mémoire causale spécifique, ce qui active les circuits de récompense et consolide une lecture plus généreuse de sa propre histoire. GGIA Berkeley la classe comme une pratique de tout premier plan — 20 minutes, une seule fois, effet durable.",
     source:"Seligman et al., American Psychologist 2005",sourceUrl:"https://doi.org/10.1037/0003-066X.60.5.410"},
    {id:"w3h3",emoji:"🌸",title:"Savoure un moment par jour — yeux ouverts",micro:"30 secondes. Remarque texture, son, température.",time:"30 s/j",
     howTo:[
       "Choisis un moment qui existe déjà dans ta journée — première gorgée de café, un repas, une marche, le soleil sur ton visage.",
       "Au moment venu : stop. Pose le téléphone. Prends une respiration lente.",
       "Remarque trois détails sensoriels : un son, une texture, une température ou une odeur.",
       "Dis-toi intérieurement : « je suis ici, et c'est bon ». Tiens le moment 20 à 30 secondes — ne le traverse pas à toute vitesse.",
       "Reviens au même moment chaque jour pour ancrer l'habitude — la nouveauté n'est pas le point, l'attention si.",
       "Pas d'app, pas de minuteur, pas de photo : savourer à travers un écran, ce n'est plus savourer."
     ],
     benefit:"Le savouring — l'amplification et la prolongation délibérée d'une expérience positive — est l'une des compétences du bonheur les plus efficaces et les moins pratiquées. Bryant & Veroff (2007) et les études ultérieures montrent qu'il augmente indépendamment la satisfaction de vie sur 4 semaines et interrompt directement l'adaptation hédonique, le processus par lequel le cerveau filtre les stimuli positifs récurrents. Juste 20 à 30 secondes d'attention pleine transforment un événement banal en souvenir positif stocké, constituant une réserve émotionnelle dans laquelle puiser pendant les périodes plus difficiles. C'est la mise à niveau la moins chère possible des expériences que tu vis déjà.",
     source:"Bryant & Veroff, Savoring: A New Model of Positive Experience 2007",sourceUrl:"https://greatergood.berkeley.edu/topic/savoring"},
    {id:"w3h4",emoji:"🍽️",title:"Un repas sans écran, assis·e, par jour",micro:"Commence par le déjeuner. Téléphone dans un tiroir.",time:"Quotidien",
     howTo:[
       "Commence par le repas le plus facile — souvent le déjeuner, puis un dîner, puis le petit-déjeuner.",
       "Téléphone face contre tiroir, sac ou autre pièce — jamais à côté de l'assiette.",
       "Assieds-toi à table. Manger debout ou au bureau ne compte pas.",
       "Mâche chaque bouchée un peu plus que naturellement, et repose la fourchette entre les bouchées.",
       "Remarque 3 choses sur le plat : température, texture, une note de saveur.",
       "Si tu manges à plusieurs, utilise le temps pour une vraie conversation — pas de télé en fond."
     ],
     benefit:"Manger en conscience réduit de manière fiable les portions de 20 à 30 % sans effort conscient, améliore la digestion via l'activation parasympathique et renforce les signaux naturels de faim et de satiété que les distractions suppriment (Allirot et al., British Journal of Nutrition, 2013). Manger en scrollant ou devant un écran te déconnecte du feedback intéroceptif — c'est pour ça qu'il est si facile de finir un paquet de chips devant une série sans s'en apercevoir. Un seul repas sans écran par jour est la plus petite dose qui produise encore un changement mesurable sur la quantité mangée et le plaisir retiré.",
     source:"Allirot et al., British Journal of Nutrition 2013",sourceUrl:"https://doi.org/10.1017/S0007114512004540"},
  ]},
  {week:4,title:"Vitalité sociale",theme:"Richesse relationnelle",color:"#2A6B8A",light:"#EBF5FA",
   tagline:"Le meilleur prédicteur d'une vie longue et heureuse, c'est la qualité de tes relations.",
   science:"L'étude Harvard sur le développement adulte (80 ans, 724 hommes) a montré que la qualité des relations bat le revenu, le QI, les gènes et la classe sociale comme prédicteur du bien-être.",
   habits:[
    {id:"w4h1",emoji:"🤝",title:"Une conversation profonde par jour",micro:"Appel, pas texto. Sans agenda. Écoute plus que tu ne parles.",time:"15 min/j",
     howTo:[
       "Privilégie la voix (ou la visio) au texto — le ton de la voix transmet 40 % de l'information émotionnelle que l'écrit ne capte pas.",
       "Commence par une vraie question : « Comment tu vas, vraiment ? » ou « Qu'est-ce qui t'occupe cette semaine ? ». Passe la météo.",
       "Écoute sans préparer ta prochaine phrase. Pose une relance avant de partager ton propre avis.",
       "Vise au moins une personne par jour — famille, ami·e, collègue, voisin·e. Fais tourner la liste, n'appelle pas toujours la même personne.",
       "15 minutes suffisent. La qualité l'emporte sur la durée.",
       "Journée trop chargée ? Envoie un mémo vocal de 30 secondes avec une vraie question. Mieux qu'un texto, mieux que rien."
     ],
     benefit:"L'étude Harvard sur le développement adulte — la plus longue étude longitudinale jamais menée sur le bien-être humain (80+ ans, 724 hommes, puis leurs conjointes et enfants) — conclut que la qualité des relations est le meilleur prédicteur de santé et de bonheur à 80 ans, plus fort que le cholestérol, les revenus, le QI ou la classe sociale (Waldinger & Schulz, The Good Life, 2023). Même des contacts brefs et réguliers, mais significatifs, activent la libération d'ocytocine, amortissent le cortisol et soutiennent la fonction immunitaire. Les conversations profondes ne demandent ni budget, ni calendrier, ni voyage — juste de décrocher le téléphone et d'écouter vraiment pendant 15 minutes.",
     source:"Waldinger & Schulz, The Good Life 2023",sourceUrl:"https://www.goodlifeproject.com"},
    {id:"w4h2",emoji:"🎁",title:"Un acte de bonté par jour",micro:"Spécifique, spontané, dirigé vers une personne",time:"Quotidien",
     howTo:[
       "Rends-le spécifique et personnel — une action directe envers une personne que tu peux voir, pas un don abstrait.",
       "Exemples : prépare le café d'un collègue, texte « j'ai pensé à toi aujourd'hui », tiens l'ascenseur, laisse passer la voiture derrière.",
       "Fais tourner les destinataires sur la semaine — ne donne pas toujours à la même personne.",
       "Quand c'est possible, fais-le en silence — la bonté anonyme active plus nettement le circuit de récompense que la bonté applaudie.",
       "Observe ce que tu ressens les 10 minutes qui suivent — c'est la signature dopamine + ocytocine que tu entraînes.",
       "Une fois la dose quotidienne bien ancrée, choisis un « gros » acte par mois : don, bénévolat, aider quelqu'un à déménager."
     ],
     benefit:"Les actes de bonté répétés augmentent la satisfaction de vie, l'estime de soi, l'humeur et même des marqueurs de santé physique à travers des dizaines d'essais. Dunn, Aknin & Norton (Science, 2008) ont démontré que dépenser pour les autres produit plus de bonheur que dépenser pour soi-même, pour un même montant — effet répliqué dans des pays aux niveaux de revenu très différents. Les actes bienveillants libèrent de l'ocytocine, réduisent l'anxiété sociale par exposition positive répétée et renforcent le sentiment de connexion sociale chez celui qui donne. La fréquence compte plus que la taille : un petit acte spécifique chaque jour surpasse un gros acte par mois.",
     source:"Dunn, Aknin & Norton, Science 2008",sourceUrl:"https://doi.org/10.1126/science.1150952"},
    {id:"w4h3",emoji:"📞",title:"Remplace un scroll par un vrai appel",micro:"Quelqu'un à qui tu voulais donner des nouvelles",time:"Quotidien",
     howTo:[
       "Repère ton créneau de scroll habituel : transport, pause déj', avant de dormir, salle d'attente.",
       "Remplace-le une fois par jour par un appel — pas un texto, pas un like.",
       "Tiens une liste tournante de 5 personnes à qui tu dois un appel, et pioche dedans.",
       "Ouverture qui marche 9 fois sur 10 : « Je pensais à toi — tu as 5 minutes ? ».",
       "5 minutes comptent. Même les appels brefs et inattendus produisent des gains mesurables de bien-être pour les deux.",
       "Pas de réponse ? Laisse un message vocal chaleureux — l'habitude, c'est le geste, pas le décrochage."
     ],
     benefit:"Epley & Schroeder (Journal of Experimental Psychology: General, 2014) ont mené une série d'expériences de terrain qui montrent que les gens sous-estiment systématiquement à quel point eux-mêmes et l'autre personne apprécieront un contact inattendu — un biais robuste qu'ils nomment « undersociality ». Quand les participants franchissent l'hésitation et passent l'appel, l'humeur, le sentiment de connexion et même le sens de la vie augmentent bien plus que ce qu'ils avaient prédit. Échanger 10 minutes de scroll contre 10 minutes de voix, c'est remplacer une activité qui épuise la dopamine par une qui produit de l'ocytocine — un deal presque parfait pour ton système nerveux.",
     source:"Epley & Schroeder, J. Experimental Psychology 2014",sourceUrl:"https://doi.org/10.1037/xge0000030"},
    {id:"w4h4",emoji:"🫂",title:"Exprime ta reconnaissance à une personne aujourd'hui",micro:"Spécifique, sincère, à voix haute ou par écrit",time:"2 min/j",
     howTo:[
       "Choisis une personne de ta journée. Dis — ou écris — exactement ce que tu apprécies et pourquoi.",
       "Spécifique, pas générique : « J'ai apprécié ta gestion de la réunion — ton calme m'a permis de rester concentré·e. »",
       "Le contact visuel amplifie l'effet des deux côtés. Fais-le en personne dès que possible.",
       "Pour un message écrit, utilise une vraie phrase, pas un emoji — c'est la précision qui fait mouche.",
       "Ça marche aussi avec des inconnus : « Vous avez rendu ce moment vraiment agréable, merci » à une caissière ou un chauffeur — zéro coût, impact réel.",
       "Une fois par semaine, fais-le pour quelqu'un que tu vois trop pour normalement remercier — partenaire, parent, ami·e proche."
     ],
     benefit:"Exprimer de la reconnaissance renforce les liens relationnels, augmente la proximité ressentie et active le système de récompense du donneur aussi fortement que celui du receveur (GGIA Berkeley ; Algoe, 2012). Contrairement à un « merci » générique, une reconnaissance spécifique oblige le cerveau à reconstruire exactement pourquoi l'action comptait, ce qui encode l'association positive plus profondément chez les deux. Les couples qui pratiquent régulièrement la reconnaissance spécifique rapportent une satisfaction relationnelle plus élevée et des taux de rupture plus bas. À l'échelle individuelle, c'est une intervention quasi gratuite qui entraîne à scanner activement ce qui va bien dans ton monde social au lieu de basculer par défaut vers la critique.",
     source:"GGIA Berkeley — Expressing Gratitude practice",sourceUrl:"https://ggia.berkeley.edu/practice/gratitude_letter"},
  ]},
  {week:5,title:"Attention consciente",theme:"Présence et émerveillement",color:"#6B4A9A",light:"#F3F0FA",
   tagline:"Là où va l'attention, le bien-être suit.",
   science:"Le MBSR est l'une des interventions psychologiques les plus étudiées, avec des changements cérébraux structuraux mesurables après seulement 8 semaines.",
   habits:[
    {id:"w5h1",emoji:"🧘",title:"10 minutes de méditation — chaque matin",micro:"Petit Bambou · Headspace · ou suis ta respiration",time:"10 min/j",
     howTo:[
       "Fais-le avant de consulter emails, réseaux sociaux ou actus — idéalement juste après ton exposition à la lumière matinale.",
       "Utilise une app guidée les 2 premières semaines : Petit Bambou, Headspace, Waking Up ou Calm sont toutes bien conçues.",
       "Assieds-toi droit·e, sur une chaise ou un coussin. S'allonger endort la plupart des débutants.",
       "Ferme les yeux. Pose l'attention sur la sensation simple de la respiration — sans chercher à la contrôler.",
       "Quand le mental s'éloigne (il le fera, sans arrêt), remarque-le doucement et reviens — ce « remarquer et revenir » EST l'exercice.",
       "Jour manqué ? Assieds-toi le lendemain matin. N'abandonne pas la première semaine à cause d'une séance sautée."
     ],
     benefit:"Hölzel et al. (Psychiatry Research: Neuroimaging, 2011) ont montré qu'après seulement 8 semaines de méditation quotidienne, les IRM révélaient une augmentation de la densité de matière grise dans le cortex préfrontal, l'hippocampe et l'insula, ainsi qu'une baisse de la réactivité de l'amygdale face au stress. Les méta-analyses des essais MBSR rapportent une réduction moyenne de l'anxiété d'environ 38 % et des améliorations significatives de l'attention, de la régulation émotionnelle et du sommeil. Dix minutes par jour — moins qu'une pause café — est la dose qui produit régulièrement des effets mesurables. Contrairement à la plupart des interventions, les bénéfices continuent de s'accumuler pendant des années, ce qui en fait la compétence mentale à plus fort levier du programme.",
     source:"Holzel et al., Psychiatry Research: Neuroimaging 2011",sourceUrl:"https://doi.org/10.1016/j.pscychresns.2010.08.006"},
    {id:"w5h2",emoji:"😮",title:"Marche d'émerveillement — une fois par semaine",micro:"Marche lentement. Lève la tête. Remarque l'échelle, la beauté.",time:"20 min/sem",
     howTo:[
       "Bloque 20 minutes dans ton agenda une fois par semaine — un dimanche matin est un créneau facile.",
       "Marche seul·e — l'awe est plus difficile à ressentir en conversation.",
       "Cherche la vastité : regarde les arbres, le ciel, les vieux bâtiments, l'eau, les montagnes, les étoiles.",
       "Marche lentement. Laisse-toi t'arrêter. L'enjeu est de remarquer, pas de faire des kilomètres.",
       "Protocole UC Berkeley : prends une photo rapide d'une chose qui t'a touché·e — ça aide à ancrer l'état.",
       "Après coup, note en une phrase ce qui t'a surpris·e. Sur plusieurs semaines, des motifs émergent."
     ],
     benefit:"Sturm et al. (Emotion, 2022), du laboratoire de Dacher Keltner à UC Berkeley, ont mené la fameuse étude de la « marche d'émerveillement » : des personnes âgées ayant pratiqué une marche de 15 minutes centrée sur l'awe une fois par semaine pendant 8 semaines ont rapporté significativement plus d'émotions positives et, sur leurs selfies, se dessinaient plus petites dans le cadre (un marqueur mesurable de la réduction de l'auto-préoccupation), par rapport aux marcheurs ordinaires. L'émerveillement — ressentir quelque chose de vaste qui élargit ton cadre mental — réduit les marqueurs inflammatoires, détourne l'attention de la rumination et booste l'humeur. 20 minutes par semaine, zéro coût.",
     source:"Sturm et al., Emotion 2022 — Keltner Lab, UC Berkeley",sourceUrl:"https://doi.org/10.1037/emo0000876"},
    {id:"w5h3",emoji:"🔕",title:"Une heure sans écran par jour",micro:"Même heure chaque jour — la régularité > la durée",time:"60 min/j",
     howTo:[
       "Choisis la même heure chaque jour — matin avant le travail, ou soir après le dîner. Pas un créneau aléatoire.",
       "L'écart physique bat la volonté : téléphone dans un tiroir ou une autre pièce, notifications coupées sur l'ordinateur.",
       "Remplis l'heure délibérément — lecture, cuisine, marche, hobby, conversation, bain — plutôt que d'espérer que l'ennui se résolve seul.",
       "Commence par 30 minutes si 60 te paraît impossible, puis ajoute 10 minutes par semaine jusqu'à atteindre l'heure.",
       "Préviens une personne de ton entourage pour qu'on ne s'attende pas à une réponse pendant ce créneau.",
       "Ne compense pas l'heure gagnée par une heure de scroll supplémentaire ensuite — sinon tu annules tout."
     ],
     benefit:"Les travaux de Kushlev & Dunn sur l'usage du smartphone (2015, et suites) et la synthèse de Cal Newport (« Digital Minimalism », 2019) convergent : une fenêtre prévisible et protégée sans input numérique est plus efficace pour réduire l'anxiété et restaurer l'attention que d'essayer de réduire le temps d'écran total. Le réseau du mode par défaut du cerveau — associé à la réflexion, à la créativité et à la consolidation mnésique — ne s'active que lorsque l'input s'arrête. Une heure quotidienne et récurrente sans numérique donne à ce réseau un espace fiable pour fonctionner, et est corrélée à une baisse de la rumination, un meilleur sommeil et un sens de la vie plus élevé.",
     source:"Newport, Deep Work 2016 / Kushlev & Dunn 2015",sourceUrl:"https://doi.org/10.1016/j.chb.2014.09.044"},
    {id:"w5h4",emoji:"🌿",title:"Passe 20 min dans la nature aujourd'hui",micro:"Parc, jardin, bord d'eau — pas un fond d'écran",time:"20 min/j",
     howTo:[
       "Repère l'espace vert ou bleu le plus proche — parc, jardin, berge, canal, chemin forestier, littoral.",
       "Vise au moins 120 minutes cumulées par semaine — réparties comme tu veux (20 min/j, ou 2 × 60 min).",
       "Marche ou assieds-toi — les deux marchent. La dose, c'est l'exposition, pas l'effort.",
       "Retire tes écouteurs au moins une fois par semaine — les sons naturels ont un effet apaisant indépendant.",
       "Pas de grand parc à proximité ? Les rues bordées d'arbres, un jardin partagé, un balcon plein de plantes comptent aussi.",
       "Par mauvais temps, 10 minutes debout sous un arbre sous la pluie valent mieux qu'un scroll à l'intérieur."
     ],
     benefit:"White et al. (Scientific Reports, 2019) ont analysé près de 20 000 personnes et trouvé que passer au moins 120 minutes par semaine en milieu naturel est le seuil à partir duquel on rapporte une santé et un bien-être nettement meilleurs — effet qui plafonne autour de 200 à 300 minutes. Hunter et al. (Frontiers in Psychology, 2019) ont mesuré le cortisol salivaire et trouvé que 20 à 30 minutes de contact avec la nature produisent le plus grand effet anti-stress par minute. L'exposition à la nature abaisse le cortisol, la tension artérielle et la rumination, tout en augmentant l'affect positif et la récupération attentionnelle — un rendement exceptionnellement élevé pour quelque chose de gratuit et sans compétence requise.",
     source:"Hunter et al., Frontiers in Psychology 2019",sourceUrl:"https://doi.org/10.3389/fpsyg.2019.00722"},
  ]},
  {week:6,title:"Mouvement & résilience",theme:"Fondation physique",color:"#8A4A2A",light:"#FBF0EB",
   tagline:"Ton corps est ton plus ancien outil de régulation émotionnelle.",
   science:"L'exercice est désormais un traitement de première ligne de la dépression légère à modérée dans les recommandations NICE (2022), avec des tailles d'effet équivalentes aux antidépresseurs.",
   habits:[
    {id:"w6h1",emoji:"🏃",title:"Exercice aérobie 3× cette semaine",micro:"20 à 30 min à intensité conversationnelle",time:"3×20 min",
     howTo:[
       "Choisis n'importe quelle activité aérobie déjà tolérée : marche rapide, vélo, jogging, natation, danse, rando.",
       "Intensité cible : tu peux dire une phrase mais pas chanter confortablement. Soit environ 60 à 75 % de ta fréquence cardiaque max.",
       "Planifie les 3 séances dans ton agenda maintenant, comme des rendez-vous fixes avec toi-même.",
       "Plus court vaut mieux que sauté : 15 minutes comptent sur une mauvaise journée.",
       "Associe les séances à quelque chose que tu aimes déjà — une playlist préférée, un podcast, un·e partenaire de marche.",
       "Séance ratée ? Fais juste la suivante. Jamais de double session pour compenser."
     ],
     benefit:"Chekroud et al. (The Lancet Psychiatry, 2018) ont analysé la santé mentale auto-déclarée de 1,2 million d'Américains et trouvé que les personnes qui faisaient de l'exercice régulier vivaient 43 % de « mauvais jours mentaux » en moins par mois que celles qui n'en faisaient pas — effet plus grand que n'importe quel autre facteur modifiable étudié, y compris le revenu et l'éducation. Le mécanisme : l'exercice augmente le BDNF (facteur neurotrophique, littéralement l'engrais du cerveau), réduit l'inflammation systémique et booste l'humeur aiguë via la libération d'endocannabinoïdes et de dopamine. Les recommandations NICE (UK) listent désormais l'exercice aérobie comme traitement de première ligne de la dépression légère à modérée, avec des effets équivalents aux ISRS et bien moins d'effets secondaires.",
     source:"Chekroud et al., The Lancet Psychiatry 2018",sourceUrl:"https://doi.org/10.1016/S2215-0366(18)30227-X"},
    {id:"w6h2",emoji:"🌡️",title:"Termine la douche par 30 s d'eau froide",micro:"Chaud d'abord, froid à la fin. Respire à travers.",time:"Quotidien",
     howTo:[
       "Termine ta douche chaude habituelle normalement — c'est un ajout, pas un remplacement.",
       "Passe le robinet totalement froid pendant 30 secondes à la fin, en commençant par les pieds et en remontant.",
       "Respire lentement et profondément par le nez — l'envie de haleter passe en 10 à 15 secondes.",
       "Ajoute 15 secondes par semaine jusqu'à atteindre 2 à 3 minutes au total.",
       "Fais-le le matin, pas avant de dormir — le pic de noradrénaline dure plusieurs heures.",
       "Saute-le si tu as une hypertension non contrôlée ou une pathologie cardiaque — demande toujours à ton médecin d'abord."
     ],
     benefit:"Šrámek et al. et Shevchuk (Medical Hypotheses, 2008) documentent qu'une courte exposition au froid augmente la noradrénaline de 200 à 300 % et la dopamine d'environ 250 % — effets qui durent 2 à 4 heures. Résultat : vigilance soutenue sans le crash de la caféine, marqueurs inflammatoires en baisse, et une réduction régulièrement observée de la fatigue chronique avec une amélioration de l'humeur chez les adultes en bonne santé. Au-delà de la chimie, le geste quotidien de faire volontairement quelque chose d'inconfortable entraîne une petite dose de résilience psychologique — tu t'apprends que l'inconfort est tolérable et borné dans le temps, ce qui se transfère à d'autres moments stressants de ta journée.",
     source:"Shevchuk, Medical Hypotheses 2008",sourceUrl:"https://doi.org/10.1016/j.mehy.2007.04.052"},
    {id:"w6h3",emoji:"📦",title:"Désencombre un espace que tu utilises chaque jour",micro:"Bureau, table de nuit, plan de travail — un seul",time:"30 min une fois",
     howTo:[
       "Choisis une seule surface — bureau, table de nuit, plan de travail, étagère de salle de bain. Pas une pièce entière.",
       "Vide-la complètement, puis applique la règle des 3 boîtes : garder, donner, jeter.",
       "Ne remets que ce que tu utilises vraiment dans une semaine normale. Sois honnête.",
       "Applique la règle « 1 qui entre, 1 qui sort » à cette surface à partir de maintenant.",
       "Prends une photo avant/après — le progrès visible est une motivation forte pour s'attaquer à la suivante.",
       "Refais l'exercice sur une nouvelle surface chaque semaine jusqu'à ce que les zones clés de ton logement soient calmes."
     ],
     benefit:"McMains & Kastner (Journal of Neuroscience, 2011), en utilisant l'IRMf à Princeton, ont démontré que l'encombrement visuel dans ton environnement entre en compétition pour les ressources neurales et réduit mesurablement la capacité du cerveau à se concentrer sur une tâche. Des travaux ultérieurs associent les environnements désordonnés à des niveaux de cortisol plus élevés, en particulier chez les femmes. Désencombrer un seul espace fréquemment utilisé réduit la charge cognitive de fond chaque fois que tu le regardes, abaisse la fatigue décisionnelle quotidienne et produit un petit mais fiable coup d'humeur pendant plusieurs semaines — l'un des investissements 30-minutes les plus rentables que tu puisses faire.",
     source:"McMains & Kastner, J. Neuroscience 2011",sourceUrl:"https://doi.org/10.1523/JNEUROSCI.6138-10.2011"},
    {id:"w6h4",emoji:"🥦",title:"Redessine ton environnement alimentaire",micro:"Sain à hauteur des yeux. Snacks cachés au fond.",time:"20 min une fois",
     howTo:[
       "Déplace fruits, légumes et protéines à l'avant et au centre de ton frigo, à hauteur des yeux.",
       "Pose une coupe de fruits sur le plan de travail — la nourriture visible est celle qui est mangée.",
       "Déplace sucreries, chips et alcool en hauteur ou dans des contenants opaques, tout au fond.",
       "Lave, coupe et portionne tes légumes le jour des courses, pour qu'ils soient aussi pratiques qu'un paquet de chips.",
       "Garde des protéines prêtes à l'emploi (œufs, yaourt, tofu, poulet) dans des contenants transparents à hauteur des yeux.",
       "N'achète pas ce que tu ne veux pas manger — tu ne résistes pas à ce qui est déjà dans le placard à 22 h."
     ],
     benefit:"Les travaux de Brian Wansink au Cornell Food & Brand Lab, et les études de réplication qui ont suivi, estiment qu'environ 70 % des décisions alimentaires quotidiennes sont dictées par des signaux environnementaux — visibilité, commodité, taille de portion, couleur de l'assiette — plutôt que par la faim consciente ou la volonté. De petits changements de friction (chips en hauteur, fruits en évidence) produisent des améliorations alimentaires durables, sans effort de régime. Comme le changement se fait une fois et tourne ensuite en pilote automatique, c'est l'une des rares interventions alimentaires dont l'effet ne s'érode pas avec le temps.",
     source:"Wansink, Mindless Eating — Cornell Food & Brand Lab",sourceUrl:"https://doi.org/10.1093/jn/nxac141"},
  ]},
  {week:7,title:"Compassion & sens",theme:"Boussole intérieure",color:"#2A7A6A",light:"#EBF6F4",
   tagline:"Te traiter avec la gentillesse que tu offrirais à un ami n'est pas une faiblesse — c'est de la neurosciences.",
   science:"Les travaux de Kristin Neff sur l'auto-compassion montrent qu'elle prédit mieux la résilience émotionnelle que l'estime de soi, sans les effets secondaires narcissiques de cette dernière.",
   habits:[
    {id:"w7h1",emoji:"💙",title:"Pratique d'auto-compassion — 5 min/j",micro:"Que dirais-tu à un·e ami·e dans la même situation ? Dis-le-toi.",time:"5 min/j",
     howTo:[
       "Quand tu remarques une auto-critique, fais une pause et demande : « Que dirais-je à un·e proche qui me raconterait ça ? ».",
       "Dis cette phrase à toi-même — à voix haute si possible, ou en silence mais avec conviction.",
       "Place une main sur ton cœur ou ta joue. Le geste physique active le système de soin (caregiving) des mammifères.",
       "Nomme l'émotion à voix haute : « ceci est du stress », « ceci est de la déception ». Le fait de nommer réduit l'intensité (Lieberman, UCLA).",
       "Rappelle-toi que cette expérience fait partie de l'humain — « d'autres ressentent ça aussi » — pas un échec personnel.",
       "Version écrite optionnelle : 3 phrases bienveillantes pour toi-même chaque soir, dans ton journal."
     ],
     benefit:"Les deux décennies de recherche de Kristin Neff (Neff & Germer, J. Clinical Psychology, 2013, et de nombreuses réplications) montrent que l'auto-compassion réduit l'anxiété, la dépression, le perfectionnisme et la rumination — tout en augmentant la motivation, l'apprentissage à partir des erreurs et la résilience après un échec. Contrairement à l'estime de soi, qui nécessite un flux constant de succès et peut produire des effets secondaires narcissiques, l'auto-compassion reste disponible pendant l'échec — exactement le moment où tu en as le plus besoin. Les méta-analyses rapportent des tailles d'effet comparables aux interventions TCC établies, sans inconvénient et sans coût.",
     source:"Neff & Germer, J. Clinical Psychology 2013",sourceUrl:"https://doi.org/10.1002/jclp.21923"},
    {id:"w7h2",emoji:"🌟",title:"Identifie une source de sens aujourd'hui",micro:"Pas un objectif. Un moment, une personne, un pourquoi.",time:"2 min/j",
     howTo:[
       "Chaque matin, demande-toi : « Qu'est-ce qui ferait que cette journée en vaut la peine ? ».",
       "Garde-le petit et concret — une bonne conversation, une tâche bien faite, aider quelqu'un, un moment de beauté.",
       "Écris-le dans ton journal ou une note téléphone (3 à 8 mots suffisent).",
       "Le soir, regarde si c'est arrivé et ce que tu as ressenti. Note ce qui t'a surpris·e.",
       "Les jours difficiles, la réponse peut simplement être « traverser avec douceur » — ça compte aussi.",
       "À la fin de la semaine, relis tes 7 réponses. Les motifs révèlent autour de quoi ta vie s'organise vraiment."
     ],
     benefit:"Fredrickson et al. (PNAS, 2013) ont montré que le bien-être eudémonique — celui qui vient du sens et du but plutôt que du plaisir seul — est associé à un profil d'expression génétique distinct, avec moins d'inflammation et une meilleure réponse antivirale. Les études longitudinales trouvent aussi qu'un sens soutenu prédit une espérance de vie plus longue, un risque d'Alzheimer plus faible et une meilleure résilience au stress. Une pratique quotidienne de 2 minutes pour nommer ton « pourquoi » ne remplace pas un travail de fond sur le sens — mais elle te garde connecté·e à lui à l'échelle de la vraie vie, là où les journées se brouillent sans intention.",
     source:"Fredrickson et al., PNAS 2013",sourceUrl:"https://doi.org/10.1073/pnas.1305419110"},
    {id:"w7h3",emoji:"🎨",title:"Une heure de flow par semaine",micro:"Quelque chose d'absorbant, non numérique, à ta hauteur",time:"60 min/sem",
     howTo:[
       "Choisis une activité stimulante mais juste à la hauteur de tes compétences — trop facile, c'est l'ennui ; trop dur, la frustration.",
       "Bons candidats : cuisiner une recette nouvelle, jouer d'un instrument, dessiner, bricoler, jardiner, grimper, écrire, faire du sport.",
       "Bloque 60 minutes d'affilée dans ton agenda. Zéro notification. Pas de multitâche.",
       "Lance un minuteur — le flow met généralement 15 à 20 minutes à démarrer, donc toute distraction remet le chrono à zéro.",
       "Si tu résistes à commencer, engage-toi sur 10 minutes seulement — l'énergie d'activation est l'endroit où les séances de flow meurent.",
       "Sur plusieurs semaines, observe quelles activités produisent vraiment l'état absorbé — et fais-en davantage."
     ],
     benefit:"Les travaux originaux de Mihaly Csikszentmihalyi (1975–1990) et les décennies de réplications qui ont suivi montrent que les expériences régulières de flow sont parmi les corrélats les plus forts de la satisfaction de vie, de la motivation intrinsèque et du bonheur à long terme — plus fort que presque n'importe quelle condition matérielle. En flow, l'auto-monitoring et la perception du temps s'effacent, la concentration est sans effort, et le cerveau consolide les compétences plus vite qu'en pratique forcée. Une heure protégée par semaine est la dose minimale qui produise un effet détectable sur l'humeur hebdomadaire, et cet effet se compose au fur et à mesure que ta compétence grandit.",
     source:"Csikszentmihalyi, Flow: The Psychology of Optimal Experience 1990",sourceUrl:"https://ggia.berkeley.edu/practice/find_your_flow_activities"},
    {id:"w7h4",emoji:"🌱",title:"Écris ta « bonne vie » en 3 phrases",micro:"Pas des objectifs. À quoi ressemble une bonne journée, une bonne année, une bonne vie ?",time:"10 min une fois",
     howTo:[
       "Trouve 15 minutes tranquilles, avec un stylo et du papier — pas un écran.",
       "Phrase 1 : « Une bonne journée pour moi, c'est… ». Concentre-toi sur la sensation, pas sur ce que tu accomplis.",
       "Phrase 2 : « Une bonne année implique… ». Pense expériences, relations, croissance — pas titres ni achats.",
       "Phrase 3 : « Une bonne vie signifie… ». Une seule ligne. Ne sur-réfléchis pas — ton instinct sait.",
       "Garde le papier visible : portefeuille, table de nuit, bureau, fond d'écran.",
       "Relis-le au moment de prendre une décision difficile — et demande-toi honnêtement si ce choix te rapproche ou t'éloigne de cette vie."
     ],
     benefit:"Les exercices de clarification des valeurs améliorent la prise de décision, réduisent le regret, protègent contre le stress et sont liés à des profils d'activation du cortex préfrontal médian — le réseau auto-référentiel du cerveau — associés à un bien-être durable (Lyubomirsky, The How of Happiness, 2008 ; et la littérature sur l'affirmation de Cohen & Sherman). Quand ton « pourquoi » est explicite et écrit noir sur blanc, les petites décisions quotidiennes commencent à se composer dans la même direction, et tu cesses de gaspiller de l'énergie sur des options qui ne te correspondent pas. 10 minutes, une seule fois, pour des effets qui peuvent durer des années — l'un des exercices à plus fort levier du programme.",
     source:"Lyubomirsky, The How of Happiness 2008",sourceUrl:"https://sonjalyubomirsky.com/books/the-how-of-happiness/"},
  ]},
  {week:8,title:"Intégration & élan",theme:"Ton stack permanent",color:"#4A4A8A",light:"#EEEEF8",
   tagline:"Les habitudes n'ont pas besoin de discipline — elles ont besoin d'identité. Tu es maintenant quelqu'un qui fait ça.",
   science:"La formation d'habitudes basée sur l'identité (Fogg, Stanford / Clear, Atomic Habits) montre que cadrer les habitudes comme « qui je suis » plutôt que « ce que je fais » produit une adhérence long terme nettement supérieure.",
   habits:[
    {id:"w8h1",emoji:"🔁",title:"Passe en revue tes 8 semaines",micro:"Quelles 5 habitudes ont eu le plus d'impact ? Garde-les comme non négociables.",time:"20 min une fois",
     howTo:[
       "Bloque 20 minutes seul·e avec tes notes et le programme. Zéro distraction.",
       "Reviens semaine par semaine et note chaque habitude de 1 à 5 sur la clarté de son impact.",
       "Identifie ton top 5 par impact — elles deviennent tes non négociables permanents.",
       "Pour les habitudes à impact moyen : décide de continuer, de modifier la dose ou de laisser tomber.",
       "Pour les habitudes à faible impact : laisse tomber sans culpabilité. Toutes les habitudes ne marchent pas pour tout le monde.",
       "Écris tes 5 non négociables finaux sur une seule carte et mets-la quelque part que tu vois chaque jour."
     ],
     benefit:"Les travaux de BJ Fogg sur Tiny Habits (Stanford Behaviour Design Lab, 2019) et la synthèse de James Clear dans Atomic Habits montrent tous les deux que la phase de consolidation — la réflexion explicite sur ce qui a marché — est aussi critique que la phase d'acquisition pour l'adhérence long terme. Les habitudes qui sont revues et nommées deviennent partie de l'identité ; celles qui ne le sont pas s'effacent en quelques semaines. Réduire ton stack aux 5 habitudes qui ont produit l'effet subjectif le plus clair multiplie par 2 à 3 les chances de maintien à long terme dans les études de suivi, et élimine la charge cognitive de tout vouloir maintenir.",
     source:"Fogg, Tiny Habits — Stanford Behaviour Design Lab 2019",sourceUrl:"https://tinyhabits.com"},
    {id:"w8h2",emoji:"📅",title:"Planifie ton ancrage social du mois prochain",micro:"Un vrai rassemblement avec des gens qui comptent. Dans l'agenda maintenant.",time:"5 min une fois",
     howTo:[
       "Ouvre ton agenda maintenant. Choisis une date concrète dans les 4 prochaines semaines.",
       "Invite au moins une personne dont tu apprécies vraiment la compagnie — idéalement 2 à 4 personnes.",
       "Sois spécifique : un repas, une balade, un film, un café — jamais « on devrait se voir bientôt ».",
       "Envoie l'invitation dans les 5 minutes qui suivent. N'attends pas le « bon moment ».",
       "Ajoute un rappel récurrent mensuel dans ton agenda, intitulé « ancrage social ».",
       "Une fois le rythme pris, ajoute un deuxième ancrage mensuel avec un autre cercle (famille, vieux amis, collègues)."
     ],
     benefit:"L'étude Harvard sur le développement adulte (Waldinger & Schulz, The Good Life, 2023) montre de manière constante que les personnes qui investissent activement dans leurs relations — plutôt que d'attendre qu'elles se produisent — rapportent la satisfaction de vie la plus élevée à tout âge, indépendamment de l'introversion ou l'extraversion. Planifier les relations comme on planifie les réunions les protège de la tyrannie des tâches urgentes. Un ancrage mensuel récurrent transforme les amitiés de quelque chose qui « devrait arriver plus souvent » en quelque chose qui arrive vraiment — la seule version qui compte pour le bien-être.",
     source:"Waldinger & Schulz, The Good Life 2023",sourceUrl:"https://www.goodlifeproject.com"},
    {id:"w8h3",emoji:"🧾",title:"Écris ton OS du bien-être — une page",micro:"Tes non négociables, tes valeurs, tes trois ancrages",time:"30 min une fois",
     howTo:[
       "Une seule page. Imprimée ou écrite à la main — physique, pas numérique.",
       "Section 1 : mes 5 habitudes quotidiennes non négociables (extraites de ta revue semaine 8).",
       "Section 2 : mes valeurs en 3 mots (extraites de tes phrases « bonne vie » de la semaine 7).",
       "Section 3 : ce que je fais quand je vais mal — 3 ancrages concrets : respirer, marcher, appeler une personne précise.",
       "Ajoute une ligne en bas : la date de ta prochaine relecture (dans 3 mois).",
       "Mets-la quelque part de visible : frigo, bureau, couverture de carnet. Relis-la chaque semaine pendant le premier mois."
     ],
     benefit:"Baumeister & Tierney (Willpower, 2011) et les recherches ultérieures sur les intentions d'implémentation (Gollwitzer) montrent qu'externaliser des règles personnelles — les mettre sur papier, à l'avance — double l'adhérence par rapport au simple fait de les garder en mémoire. Quand une décision est déjà prise, les moments stressants ne doivent pas être renégociés, et la volonté est préservée pour ce qui en a vraiment besoin. Une page « OS du bien-être » agit comme une constitution personnelle — c'est ce sur quoi tu te reposes quand tu es fatigué·e, stressé·e ou tenté·e d'abandonner les habitudes qui ont fait que ce programme a marché.",
     source:"Baumeister & Tierney, Willpower 2011",sourceUrl:"https://www.amazon.com/Willpower-Rediscovering-Greatest-Human-Strength/dp/0143122231"},
    {id:"w8h4",emoji:"🎯",title:"Célèbre — sincèrement, précisément",micro:"Note ce qui a changé. Dis-le à quelqu'un. Marque le moment.",time:"10 min",
     howTo:[
       "Écris 3 choses spécifiques qui sont différentes chez toi après 8 semaines — énergie, humeur, sommeil, relations, concentration, dialogue intérieur.",
       "Dis à une personne qui compte ce que tu as accompli et pourquoi c'était dur. À voix haute, en personne si possible.",
       "Offre-toi une vraie récompense : un repas favori, un voyage, un achat qui a du sens, une expérience que tu reportais.",
       "Prends une photo de ton OS du bien-être à côté d'un café — tu en voudras le souvenir plus tard.",
       "Programme un check-in à 3 mois dans ton agenda, maintenant, pour relire ta page et refaire cette réflexion.",
       "Dis-le explicitement : « Je l'ai fait. Je suis quelqu'un qui va au bout. » L'identité se construit avec des phrases comme celle-là."
     ],
     benefit:"BJ Fogg (Tiny Habits, Stanford 2019) identifie la célébration délibérée comme l'outil le plus sous-utilisé et le plus efficace de la formation d'habitudes — parce que l'émotion positive immédiate encode chimiquement la boucle d'habitude d'une façon que les récompenses différées ne peuvent pas égaler. Revoir les gains spécifiques, le dire à d'autres, marquer le moment : cela convertit 8 semaines d'effort en un basculement identitaire durable — « je suis quelqu'un qui investit dans son bien-être ». Cette identité est ce qui fait tourner les habitudes pendant des mois et des années après la fin du programme formel — ce qui est, au final, le seul résultat qui compte.",
     source:"Fogg, Tiny Habits — Stanford 2019",sourceUrl:"https://tinyhabits.com"},
  ]},
];

const TR = {
  en:{
    nav:{home:"Home",program:"Program",pricing:"Pricing",blog:"Blog",faq:"FAQ"},
    chat:{
      title:"Science Coach",
      subtitle:"Powered by AI — your personal guide to the tinywell program",
      proOnly:"Available for Pro members",
      proOnlySub:"Upgrade to ask unlimited questions about the program, the science, and how to adapt each habit to your life.",
      proOnlyBtn:"Unlock Science Coach →",
      placeholder:"Ask about any habit, the science, or how to adapt the program...",
      send:"Send",
      thinking:"Thinking...",
      welcome:"Hi! I am your tinywell Science Coach. I can answer any question about the 8-week program, the habits, the research behind them, and how to adapt exercises to your life. Every answer I give about a specific habit will include its scientific source. What would you like to know?",
      errorMsg:"Something went wrong. Please try again.",
      suggestionsLabel:"Quick questions:",
      suggestions:[
        "Can I split the 20-min walk into 2x10 min?",
        "What does the Harvard study say about relationships?",
        "How do I start cold showers if I hate cold?",
        "Which habits are most important if I only have 10 min/day?",
        "Does gratitude journalling really work — what is the evidence?",
      ],
      closeBtn:"Close",
      poweredBy:"Powered by Claude — Anthropic",
      sourceLabel:"Source",
    },
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
    homeNewsletterTitle:"One science insight, every Monday.",homeNewsletterSub:"Join 2,400+ readers. One habit. One study. Under 3 minutes.",homeNewsletterPlaceholder:"Your email address",homeNewsletterBtn:"Get the weekly brief →",homeNewsletterConfirm:"You're in. First issue lands Monday.",
    programTitle:"8-Week Program",programSub:"GGIA Berkeley · Harvard · Lancet Psychiatry · Stanford · MGH",weekLabel:"Week",
    proTag:"PRO",proTitle:"Unlock Week",proSub:"Full 8-week program from €7.99/month",proBtn:"Start 7-day free trial",
    sciNote:"The science of tiny",sciNoteText:"BJ Fogg's Stanford research shows motivation alone never sustains habits. The secret is friction reduction and celebration. Each week is designed so the habit feels almost too small to matter — until everything shifts.",
    moreInfo:"more info",streakLabel:"day streak",completedLabel:"done",
    panel:{howTo:"How to do it",evidence:"Evidence that it works",source:"Research source",close:"Close"},
    pricingTitle:"Start free. Upgrade when you feel it working.",pricingSub:"No dark patterns. Cancel anytime. Backed by science.",monthly:"Monthly",annual:"Annual (save 38%)",mostPop:"Most popular",
    trustItems:[{emoji:"🔒",title:"Secure & private",sub:"No data sold. Ever."},{emoji:"↩️",title:"Cancel anytime",sub:"No lock-in, no dark patterns"},{emoji:"🔬",title:"Evidence-based",sub:"Every habit is peer-reviewed"},{emoji:"💬",title:"Real support",sub:"Human answers within 24h"}],
    faqTitle:"Common questions",
    faqPageTitle:"Frequently Asked Questions",
    faqPageSub:"Everything you need to know about tinywell — the science-backed habit program rooted in Harvard, GGIA Berkeley and peer-reviewed research.",
    faqCTA:"Still have a question?",faqCTASub:"We answer every message personally.",faqCTABtn:"Start free — no card needed →",
    faqCategories:[
      {id:"program",label:"The Program",icon:"📋",faqs:[
        {q:"What is tinywell and how does it work?",a:"tinywell is an 8-week science-backed habit program built around the concept of tiny habits — micro-behaviours so small they require almost no motivation. Each week introduces 4 new habits drawn from peer-reviewed research (Harvard, GGIA Berkeley, Stanford, The Lancet). You tick habits daily, unlock science notes, and build a permanent wellbeing stack week by week."},
        {q:"How much time does the program require each day?",a:"Most habits take 2 to 15 minutes. The full daily stack in peak weeks (weeks 5–6) adds up to roughly 30–40 minutes — but spread across the day, not in one block. Many habits replace existing behaviours (phone scrolling, commute time) rather than adding new slots. Week 1 requires less than 10 minutes per day."},
        {q:"Can I do the program at my own pace?",a:"Yes. The 8-week structure is a guide, not a constraint. If you want to spend two weeks on a single module, the app supports that. The only rule backed by research is that you should not rush: BJ Fogg's Stanford data shows introducing too many habits at once is the primary cause of relapse."},
        {q:"What makes tinywell different from other habit-tracking apps?",a:"Three things: (1) Every habit links to a specific peer-reviewed study — sources are clickable in-app. (2) The program is sequential and progressive, not a random habit library. (3) Each habit includes a science explanation, a practical how-to guide, and a research source — not just a reminder. Most apps track behaviour. tinywell explains why the behaviour works at a neurological level."},
        {q:"Do I need any equipment or prior experience?",a:"None. Every habit in the program is designed to work with what you already have: a bed, a window, a notebook, and 10 minutes. There is no gym, no meditation cushion, and no supplements required. The program is designed for people starting from zero."},
      ]},
      {id:"science",label:"The Science",icon:"🔬",faqs:[
        {q:"Is the science behind tinywell genuinely peer-reviewed?",a:"Yes. Every habit in the program links to a named study published in a peer-reviewed journal — including Science Advances, The Lancet Psychiatry, JAMA Internal Medicine, PNAS, and the Journal of Personality and Social Psychology. Sources are visible and clickable in-app. We draw primarily from GGIA Berkeley, the Harvard Study of Adult Development, Stanford Behaviour Design Lab, and Harvard/MGH neuroscience research."},
        {q:"What did the Harvard Study of Adult Development find?",a:"The Harvard Study of Adult Development — the longest-running study of adult life ever conducted, following 724 men and then their families over 80 years — found that the quality of close relationships is the single strongest predictor of health and happiness in later life. It outperformed income, IQ, social class, and even physical health metrics. This is the scientific foundation of tinywell's Week 4 module on Social Vitality."},
        {q:"What is GGIA Berkeley and why does tinywell use its research?",a:"GGIA stands for the Greater Good in Action lab at UC Berkeley. It is one of the world's leading research centres on gratitude, awe, compassion, and prosocial behaviour. Its gratitude practices — including the gratitude letter and daily specific gratitudes — have been replicated dozens of times and produce effect sizes rivalling CBT for mild depression. tinywell's Week 3 module is built directly from GGIA's validated protocols."},
        {q:"How long does it take to form a new habit?",a:"The popular claim that habits take 21 days is a myth with no scientific basis. The most cited study on habit formation (Lally et al., European Journal of Social Psychology, 2010) found that automaticity develops between 18 and 254 days, with a median around 66 days — which is exactly why tinywell runs for 8 weeks. Critically, missing occasional days did not prevent habit formation, which is why the program never penalises skipped days."},
        {q:"Can improving tiny daily habits really affect mental health?",a:"The evidence is unambiguous. A 2018 analysis published in The Lancet Psychiatry covering 1.2 million Americans found that exercise alone reduced self-reported poor mental health days by 43%. A 2014 JAMA Internal Medicine meta-analysis of mindfulness programs showed a 38% reduction in anxiety symptoms. Gratitude journalling over 3 weeks produces measurable increases in wellbeing that persist for months (Emmons & McCullough, 2003). Small habits, consistently practised, produce large neurological changes."},
      ]},
      {id:"results",label:"Results",icon:"📈",faqs:[
        {q:"How quickly will I see results from the program?",a:"Most users report a noticeable shift in energy and mood within the first two weeks — primarily from the circadian and sleep habits in Week 1. Measurable reductions in anxiety typically appear around weeks 4–5, consistent with MBSR research timelines. Structural brain changes (increased prefrontal grey matter, reduced amygdala volume) have been documented after 8 weeks of daily meditation (Holzel et al., 2011, Harvard/MGH). The key is consistency over intensity."},
        {q:"What if I miss a day or fall off the program?",a:"Nothing happens. The program is designed for real life, not perfect conditions. Lally et al.'s habit formation research confirms that missing occasional days does not break the automaticity process — you simply continue from where you stopped. tinywell never shows guilt-inducing streaks lost, and the program never resets. You pick up where you left off."},
        {q:"Does tinywell work for stress, anxiety, and burnout?",a:"The habits in weeks 1–5 — circadian anchoring, 4-7-8 breathing, mindfulness, nature exposure, and digital detox — are all individually validated for stress and anxiety reduction in peer-reviewed trials. tinywell is not a medical product and does not replace professional mental health support. However, the lifestyle interventions it teaches are the same ones recommended in UK NICE guidelines and recommended by organisations including the NHS and the American Psychological Association."},
        {q:"I have tried habit apps before and they never stick. Why would this be different?",a:"Most habit apps fail for three reasons: they require too much willpower, they do not explain why a behaviour matters, and they create guilt when users miss days. tinywell addresses all three: habits are designed to require near-zero willpower (BJ Fogg's tiny habits methodology); every habit includes a neuroscience explanation that creates intrinsic motivation; and the program explicitly rejects streak-based guilt. The science of habit stacking — not app design — is what drives retention."},
      ]},
      {id:"pricing",label:"Pricing & Account",icon:"💳",faqs:[
        {q:"How much does tinywell cost?",a:"tinywell is free to start — Weeks 1 and 2 of the program are fully accessible with no payment required. The Pro plan (full 8-week program, science digests, progress dashboard) costs €7.99/month. The Annual plan includes everything in Pro plus community access, a personalised habit stack, and monthly webinars for €59/year — equivalent to €4.92/month, a 38% saving over monthly billing."},
        {q:"Is there a free trial for the Pro plan?",a:"Yes. The Pro plan includes a 7-day free trial. You can access the full 8-week program immediately, and your card is not charged until the trial ends. You can cancel at any time before the trial period ends with no charge."},
        {q:"Can I cancel my subscription at any time?",a:"Yes, with no conditions, no cancellation fees, and no dark patterns. You can cancel from your account settings at any time. If you cancel a monthly plan, you retain Pro access until the end of your current billing period. We do not send guilt emails when you cancel."},
        {q:"What is the difference between the Free, Pro and Annual plans?",a:"Free gives you Weeks 1 and 2, the interactive checklist, and the scientific sources. Pro unlocks all 8 weeks, streaks, the weekly science digest by email, and the full progress dashboard. Annual includes everything in Pro plus the private community, a personalised habit quiz, monthly group science webinars, and the downloadable PDF guide."},
        {q:"Is my personal data safe?",a:"Yes. tinywell does not sell user data to any third party, ever. Habit data stays on your device and in your account. We do not serve ads, do not share data with advertisers, and are built on infrastructure compliant with GDPR. For detailed information, see our Privacy Policy."},
      ]},
    ],
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
    nav:{home:"Accueil",program:"Programme",pricing:"Tarifs",blog:"Blog",faq:"FAQ"},
    chat:{
      title:"Coach Science",
      subtitle:"Propulsé par IA — ton guide personnel du programme tinywell",
      proOnly:"Disponible pour les membres Pro",
      proOnlySub:"Passe à Pro pour poser des questions illimitées sur le programme, la science et comment adapter chaque habitude à ta vie.",
      proOnlyBtn:"Débloquer le Coach Science →",
      placeholder:"Pose une question sur une habitude, la science, ou comment adapter le programme...",
      send:"Envoyer",
      thinking:"En train de réfléchir...",
      welcome:"Bonjour ! Je suis ton Coach Science tinywell. Je peux répondre à toutes tes questions sur le programme de 8 semaines, les habitudes, la recherche derrière elles, et comment adapter les exercices à ta vie. Chaque réponse sur une habitude spécifique inclura sa source scientifique. Qu'est-ce que tu voudrais savoir ?",
      errorMsg:"Une erreur est survenue. Veuillez réessayer.",
      suggestionsLabel:"Questions rapides :",
      suggestions:[
        "Peut-on diviser la marche de 20 min en 2x10 min ?",
        "Que dit l'étude Harvard sur les relations ?",
        "Comment commencer les douches froides si je déteste le froid ?",
        "Quelles habitudes sont les plus importantes avec seulement 10 min/jour ?",
        "Le journal de gratitude fonctionne-t-il vraiment — quelles sont les preuves ?",
      ],
      closeBtn:"Fermer",
      poweredBy:"Propulsé par Claude — Anthropic",
      sourceLabel:"Source",
    },
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
    homeNewsletterTitle:"Un insight science, chaque lundi.",homeNewsletterSub:"Rejoins 2 400+ lecteurs. Une habitude. Une étude. Moins de 3 minutes.",homeNewsletterPlaceholder:"Ton adresse email",homeNewsletterBtn:"Recevoir la lettre hebdo →",homeNewsletterConfirm:"C'est parti. Premier numéro lundi.",
    programTitle:"Programme 8 Semaines",programSub:"GGIA Berkeley · Harvard · Lancet Psychiatry · Stanford · MGH",weekLabel:"Semaine",
    proTag:"PRO",proTitle:"Débloquer la Semaine",proSub:"Programme complet à partir de 7,99€/mois",proBtn:"Essai gratuit 7 jours",
    sciNote:"La science du minuscule",sciNoteText:"Les recherches de BJ Fogg à Stanford montrent que la motivation seule ne maintient jamais les habitudes. Le secret est la réduction des frictions et la célébration. Chaque semaine est conçue pour que l'habitude paraisse presque trop petite — jusqu'à ce que tout change.",
    moreInfo:"en savoir +",streakLabel:"jours consécutifs",completedLabel:"terminée",
    panel:{howTo:"Comment le faire",evidence:"Preuves que ça marche",source:"Source scientifique",close:"Fermer"},
    pricingTitle:"Commence gratuitement. Upgrade quand tu le ressens.",pricingSub:"Aucun dark pattern. Résiliation à tout moment. Fondé sur la science.",monthly:"Mensuel",annual:"Annuel (économise 38%)",mostPop:"Le plus populaire",
    trustItems:[{emoji:"🔒",title:"Sécurisé & privé",sub:"Aucune donnée vendue. Jamais."},{emoji:"↩️",title:"Résiliation libre",sub:"Aucun engagement, aucun dark pattern"},{emoji:"🔬",title:"Fondé sur les preuves",sub:"Chaque habitude est peer-reviewed"},{emoji:"💬",title:"Support humain",sub:"Réponse humaine en moins de 24h"}],
    faqTitle:"Questions fréquentes",
    faqPageTitle:"Questions fréquemment posées",
    faqPageSub:"Tout ce que tu dois savoir sur tinywell — le programme d'habitudes fondé sur Harvard, le GGIA Berkeley et la recherche peer-reviewed.",
    faqCTA:"Tu as encore une question ?",faqCTASub:"On répond à chaque message personnellement.",faqCTABtn:"Commencer gratuitement — sans carte →",
    faqCategories:[
      {id:"program",label:"Le Programme",icon:"📋",faqs:[
        {q:"Qu'est-ce que tinywell et comment ça fonctionne ?",a:"tinywell est un programme d'habitudes de 8 semaines fondé sur la science des micro-habitudes — des comportements si petits qu'ils ne nécessitent presque aucune motivation. Chaque semaine introduit 4 nouvelles habitudes issues de la recherche peer-reviewed (Harvard, GGIA Berkeley, Stanford, The Lancet). Tu coches les habitudes au quotidien, accèdes aux notes scientifiques, et construis progressivement une pile d'habitudes permanente."},
        {q:"Combien de temps le programme demande-t-il chaque jour ?",a:"La plupart des habitudes prennent entre 2 et 15 minutes. La pile quotidienne complète en semaines de pointe (semaines 5–6) représente environ 30–40 minutes — réparties sur la journée, pas en un seul bloc. Beaucoup d'habitudes remplacent des comportements existants (scroll du téléphone, temps de trajet) plutôt que d'ajouter de nouvelles plages. La semaine 1 nécessite moins de 10 minutes par jour."},
        {q:"Puis-je faire le programme à mon propre rythme ?",a:"Oui. La structure de 8 semaines est un guide, pas une contrainte. Si tu veux passer deux semaines sur un seul module, l'app le supporte. La seule règle validée par la recherche : ne pas se précipiter. Les données de BJ Fogg à Stanford montrent qu'introduire trop d'habitudes à la fois est la principale cause de rechute."},
        {q:"En quoi tinywell est-il différent des autres apps d'habitudes ?",a:"Trois choses : (1) Chaque habitude renvoie à une étude peer-reviewed spécifique — les sources sont cliquables dans l'app. (2) Le programme est séquentiel et progressif, pas une bibliothèque d'habitudes aléatoires. (3) Chaque habitude inclut une explication scientifique, un guide pratique et une source de recherche — pas seulement un rappel. La plupart des apps suivent un comportement. tinywell explique pourquoi ce comportement fonctionne au niveau neurologique."},
        {q:"Ai-je besoin d'équipement particulier ou d'une expérience préalable ?",a:"Aucun. Chaque habitude du programme est conçue pour fonctionner avec ce que tu as déjà : un lit, une fenêtre, un carnet et 10 minutes. Pas de salle de sport, pas de coussin de méditation, pas de compléments alimentaires. Le programme est conçu pour les personnes qui démarrent de zéro."},
      ]},
      {id:"science",label:"La Science",icon:"🔬",faqs:[
        {q:"La science derrière tinywell est-elle réellement peer-reviewed ?",a:"Oui. Chaque habitude du programme renvoie à une étude nommée publiée dans une revue peer-reviewed — dont Science Advances, The Lancet Psychiatry, JAMA Internal Medicine, PNAS et le Journal of Personality and Social Psychology. Les sources sont visibles et cliquables dans l'app. Nous nous appuyons principalement sur le GGIA Berkeley, l'Étude Harvard sur le développement adulte, le Stanford Behaviour Design Lab et la recherche en neurosciences de Harvard/MGH."},
        {q:"Qu'a révélé l'étude Harvard sur le développement adulte ?",a:"L'étude Harvard sur le développement adulte — la plus longue étude sur la vie adulte jamais conduite, suivant 724 hommes puis leurs familles sur 80 ans — a montré que la qualité des relations proches est le prédicteur le plus puissant de la santé et du bonheur à un âge avancé. Elle surpasse le revenu, le QI, la classe sociale et même les indicateurs de santé physique. C'est le fondement scientifique du module Semaine 4 de tinywell sur la Vitalité Sociale."},
        {q:"Qu'est-ce que le GGIA Berkeley et pourquoi tinywell utilise ses recherches ?",a:"GGIA signifie Greater Good in Action, le laboratoire de recherche de l'UC Berkeley. C'est l'un des principaux centres mondiaux sur la gratitude, l'émerveillement, la compassion et le comportement prosocial. Ses pratiques de gratitude — dont la lettre de gratitude et les gratitudes quotidiennes spécifiques — ont été répliquées des dizaines de fois et produisent des tailles d'effet comparables à la TCC pour la dépression légère. Le module Semaine 3 de tinywell est construit directement sur les protocoles validés du GGIA."},
        {q:"Combien de temps faut-il pour former une nouvelle habitude ?",a:"La croyance populaire selon laquelle les habitudes prennent 21 jours est un mythe sans fondement scientifique. L'étude la plus citée sur la formation des habitudes (Lally et al., European Journal of Social Psychology, 2010) a montré que l'automaticité se développe entre 18 et 254 jours, avec une médiane autour de 66 jours — ce qui explique précisément pourquoi tinywell dure 8 semaines. Critiquement, rater des jours occasionnellement n'a pas empêché la formation des habitudes."},
        {q:"De petites habitudes quotidiennes peuvent-elles vraiment améliorer la santé mentale ?",a:"Les preuves sont sans ambiguïté. Une analyse 2018 dans The Lancet Psychiatry portant sur 1,2 million d'Américains a montré que l'exercice seul réduisait les jours de mauvaise santé mentale de 43%. Une méta-analyse JAMA 2014 sur les programmes de pleine conscience a montré une réduction de 38% des symptômes d'anxiété. Le journal de gratitude sur 3 semaines produit des augmentations mesurables du bien-être qui persistent pendant des mois (Emmons & McCullough, 2003). De petites habitudes, pratiquées régulièrement, produisent de grands changements neurologiques."},
      ]},
      {id:"results",label:"Résultats",icon:"📈",faqs:[
        {q:"À quelle vitesse vais-je voir des résultats ?",a:"La plupart des utilisateurs rapportent un changement notable dans l'énergie et l'humeur dans les deux premières semaines — principalement grâce aux habitudes circadiennes et de sommeil de la Semaine 1. Des réductions mesurables de l'anxiété apparaissent généralement autour des semaines 4–5, conformément aux délais de la recherche MBSR. Des changements structurels du cerveau ont été documentés après 8 semaines de méditation quotidienne (Holzel et al., 2011, Harvard/MGH). La clé est la régularité plutôt que l'intensité."},
        {q:"Et si je rate un jour ou que je décroche du programme ?",a:"Rien ne se passe. Le programme est conçu pour la vraie vie, pas pour des conditions parfaites. La recherche de Lally et al. sur la formation des habitudes confirme que rater des jours occasionnels ne brise pas le processus d'automaticité — tu continues simplement là où tu t'es arrêté. tinywell n'affiche jamais de séries perdues culpabilisantes, et le programme ne se réinitialise jamais."},
        {q:"tinywell fonctionne-t-il pour le stress, l'anxiété et le burnout ?",a:"Les habitudes des semaines 1 à 5 — ancrage circadien, respiration 4-7-8, pleine conscience, exposition à la nature et détox numérique — sont toutes validées individuellement pour la réduction du stress et de l'anxiété dans des essais peer-reviewed. tinywell n'est pas un produit médical et ne remplace pas un soutien professionnel en santé mentale. Cependant, les interventions de style de vie qu'il enseigne sont les mêmes que celles recommandées dans les guidelines NICE britanniques."},
        {q:"J'ai déjà essayé des apps d'habitudes et ça n'a jamais tenu. Pourquoi ce serait différent ?",a:"La plupart des apps d'habitudes échouent pour trois raisons : elles demandent trop de volonté, elles n'expliquent pas pourquoi un comportement compte, et elles créent de la culpabilité quand on rate des jours. tinywell répond aux trois : les habitudes sont conçues pour nécessiter presque zéro volonté (méthodologie tiny habits de BJ Fogg) ; chaque habitude inclut une explication neuroscientifique qui crée une motivation intrinsèque ; et le programme rejette explicitement la culpabilité basée sur les séries."},
      ]},
      {id:"pricing",label:"Tarifs & Compte",icon:"💳",faqs:[
        {q:"Combien coûte tinywell ?",a:"tinywell est gratuit pour commencer — les Semaines 1 et 2 du programme sont entièrement accessibles sans paiement. Le plan Pro (programme complet 8 semaines, digest scientifiques, tableau de progression) coûte 7,99€/mois. Le plan Annuel inclut tout dans Pro plus l'accès communauté, une pile d'habitudes personnalisée et des webinaires mensuels pour 59€/an — soit 4,92€/mois, une économie de 38% par rapport à la facturation mensuelle."},
        {q:"Y a-t-il un essai gratuit pour le plan Pro ?",a:"Oui. Le plan Pro inclut un essai gratuit de 7 jours. Tu accèdes immédiatement au programme complet de 8 semaines, et ta carte n'est pas débitée avant la fin de l'essai. Tu peux annuler à tout moment avant la fin de la période d'essai sans aucun frais."},
        {q:"Puis-je annuler mon abonnement à tout moment ?",a:"Oui, sans conditions, sans frais d'annulation et sans dark patterns. Tu peux annuler depuis les paramètres de ton compte à tout moment. Si tu annules un plan mensuel, tu conserves l'accès Pro jusqu'à la fin de ta période de facturation en cours. Nous n'envoyons pas d'emails culpabilisants à l'annulation."},
        {q:"Quelle est la différence entre les plans Gratuit, Pro et Annuel ?",a:"Le Gratuit te donne les Semaines 1 et 2, la checklist interactive et les sources scientifiques. Pro débloque les 8 semaines, les séries, le digest scientifique hebdomadaire par email et le tableau de progression complet. L'Annuel inclut tout dans Pro plus la communauté privée, un quiz d'habitudes personnalisé, des webinaires scientifiques mensuels et le guide PDF téléchargeable."},
        {q:"Mes données personnelles sont-elles en sécurité ?",a:"Oui. tinywell ne vend les données utilisateurs à aucun tiers, jamais. Les données d'habitudes restent sur ton appareil et dans ton compte. Nous ne diffusons pas de publicités, ne partageons pas de données avec des annonceurs et sommes construits sur une infrastructure conforme au RGPD."},
      ]},
    ],
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

function NewsletterBlock({t, ember, mist, sand, stone, ink}) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(false);
  const handleSubmit = () => {
    if (email.includes("@")) { setSent(true); setEmail(""); }
  };
  return (
    <div style={{background:"white",border:"1px solid "+mist,borderRadius:16,padding:"28px 22px",marginBottom:16,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:-30,right:-30,width:120,height:120,borderRadius:"50%",background:"radial-gradient(circle,rgba(200,68,10,0.08) 0%,transparent 70%)",pointerEvents:"none"}}/>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
        <div style={{width:32,height:32,borderRadius:8,background:"rgba(200,68,10,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>📬</div>
        <div style={{fontSize:10,color:ember,fontFamily:"monospace",letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:"bold"}}>Weekly Science Brief</div>
      </div>
      <h3 style={{fontSize:18,fontFamily:"Georgia,serif",fontWeight:"normal",color:ink,margin:"0 0 6px",letterSpacing:"-0.2px",lineHeight:1.3}}>{t.homeNewsletterTitle}</h3>
      <p style={{fontSize:12,color:stone,margin:"0 0 18px",lineHeight:1.55}}>{t.homeNewsletterSub}</p>
      {sent ? (
        <div style={{display:"flex",alignItems:"center",gap:10,padding:"12px 16px",background:"#EDFAF2",borderRadius:10,border:"1px solid #3DBD6840"}}>
          <span style={{fontSize:18}}>✅</span>
          <span style={{fontSize:13,color:"#2A6B3A",fontFamily:"Georgia,serif",fontStyle:"italic"}}>{t.homeNewsletterConfirm}</span>
        </div>
      ) : (
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          <input
            type="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            onKeyDown={e=>e.key==="Enter"&&handleSubmit()}
            onFocus={()=>setFocused(true)}
            onBlur={()=>setFocused(false)}
            placeholder={t.homeNewsletterPlaceholder}
            style={{flex:"1 1 200px",padding:"11px 14px",border:"1.5px solid "+(focused?ember:mist),borderRadius:10,fontSize:13,background:sand,color:ink,outline:"none",fontFamily:"Georgia,serif",transition:"border-color 0.2s",minWidth:0}}
          />
          <button
            onClick={handleSubmit}
            style={{flexShrink:0,padding:"11px 18px",background:ember,color:"white",border:"none",borderRadius:10,fontSize:13,cursor:"pointer",fontFamily:"Georgia,serif",whiteSpace:"nowrap"}}
          >{t.homeNewsletterBtn}</button>
        </div>
      )}
      <p style={{margin:"10px 0 0",fontSize:10,color:stone,fontStyle:"italic"}}>No spam. Unsubscribe in one click. Free forever.</p>
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
  return (
    <div style={{background:cream}}>
      <div style={{background:ink,padding:"64px 24px 56px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-80,right:-80,width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle,rgba(200,68,10,0.18) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{position:"absolute",bottom:-60,left:-60,width:220,height:220,borderRadius:"50%",background:"radial-gradient(circle,rgba(92,122,92,0.12) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{maxWidth:620,margin:"0 auto",position:"relative"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(200,68,10,0.15)",border:"1px solid rgba(200,68,10,0.3)",borderRadius:20,padding:"5px 14px",marginBottom:26}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:ember}}/>
            <span style={{color:ember,fontSize:11,fontFamily:"monospace",letterSpacing:"0.12em",textTransform:"uppercase"}}>{t.hero.badge}</span>
          </div>
          <h1 style={{color:"white",fontSize:"clamp(30px,7vw,52px)",fontFamily:"Georgia,serif",fontWeight:"normal",lineHeight:1.12,margin:"0 0 14px",letterSpacing:"-0.5px"}}>
            {t.hero.h1a}<br/><span style={{color:ember}}>{t.hero.h1b}</span>
          </h1>
          <p style={{color:"#B0A898",fontSize:16,margin:"0 0 32px",lineHeight:1.65,maxWidth:480,fontStyle:"italic"}}>{t.hero.sub}</p>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            <button onClick={()=>setTab("program")} style={{background:ember,color:"white",border:"none",borderRadius:10,padding:"13px 24px",fontSize:14,cursor:"pointer",fontFamily:"Georgia,serif"}}>{t.hero.cta1}</button>
            <button onClick={()=>setTab("program")} style={{background:"transparent",color:"#B0A898",border:"1px solid rgba(255,255,255,0.15)",borderRadius:10,padding:"13px 22px",fontSize:13,cursor:"pointer"}}>{t.hero.cta2}</button>
          </div>
        </div>
      </div>
      <div style={{background:sand,borderBottom:"1px solid "+mist}}>
        <div style={{maxWidth:620,margin:"0 auto",display:"flex",padding:"16px 20px",overflowX:"auto"}}>
          {t.stats.map((s,i)=>(
            <div key={i} style={{flex:"0 0 auto",minWidth:140,padding:"0 16px",borderRight:i<t.stats.length-1?"1px solid "+mist:"none"}}>
              <div style={{fontSize:18,fontFamily:"Georgia,serif",color:ember,marginBottom:2}}>{s.n}</div>
              <div style={{fontSize:10,color:stone,lineHeight:1.4}}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{maxWidth:620,margin:"0 auto",padding:"44px 20px 0"}}>
        <div style={{fontSize:10,color:stone,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:8}}>{t.howLabel}</div>
        <h2 style={{fontSize:22,fontFamily:"Georgia,serif",fontWeight:"normal",color:ink,margin:"0 0 28px",letterSpacing:"-0.3px",lineHeight:1.3}}>{t.howH}</h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {t.howCards.map((c,i)=>(
            <div key={i} style={{background:"white",border:"1px solid "+mist,borderRadius:14,padding:"16px 14px"}}>
              <div style={{fontSize:20,marginBottom:7}}>{c.emoji}</div>
              <div style={{fontSize:10,fontFamily:"monospace",color:ember,marginBottom:4,textTransform:"uppercase",letterSpacing:"0.08em"}}>{c.title} - {c.sub}</div>
              <div style={{fontSize:12,color:stone,lineHeight:1.55}}>{c.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{maxWidth:620,margin:"0 auto",padding:"36px 20px 0"}}>
        <div style={{fontSize:10,color:stone,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:12,textAlign:"center"}}>{t.sciLabel}</div>
        <div style={{display:"flex",border:"1px solid "+mist,borderRadius:12,overflow:"hidden",background:"white"}}>
          {[{l:"GGIA",s:"UC Berkeley"},{l:"Harvard",s:"Adult Development"},{l:"Stanford",s:"Behaviour Design"},{l:"MIT/MGH",s:"Neuroscience"}].map((x,i)=>(
            <div key={i} style={{flex:1,padding:"12px 6px",textAlign:"center",borderRight:i<3?"1px solid "+mist:"none"}}>
              <div style={{fontSize:11,fontFamily:"Georgia,serif",color:ink,fontWeight:"bold",marginBottom:2}}>{x.l}</div>
              <div style={{fontSize:9,color:stone,lineHeight:1.3}}>{x.s}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{maxWidth:620,margin:"0 auto",padding:"36px 20px 0"}}>
        <div style={{fontSize:10,color:stone,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:12}}>{t.testiLabel}</div>
        {t.testimonials.map((tt,i)=>(
          <div key={i} style={{background:"white",border:"1px solid "+mist,borderRadius:14,padding:"16px 18px",marginBottom:8}}>
            <div style={{color:ember,fontSize:11,marginBottom:7}}>{"*****".slice(0,tt.stars*1)}</div>
            <p style={{fontSize:13,color:ink,lineHeight:1.7,margin:"0 0 9px",fontStyle:"italic"}}>"{tt.text}"</p>
            <div style={{fontSize:11,color:stone}}>{tt.name} - {tt.role}</div>
          </div>
        ))}
      </div>
      <div style={{maxWidth:620,margin:"0 auto",padding:"32px 20px 56px"}}>
        {/* Newsletter signup */}
        <NewsletterBlock t={t} ember={ember} mist={mist} sand={sand} stone={stone} ink={ink}/>
        {/* Bottom CTA */}
        <div style={{background:ink,borderRadius:16,padding:"30px 24px",textAlign:"center"}}>
          <div style={{fontSize:19,fontFamily:"Georgia,serif",color:"white",marginBottom:9,letterSpacing:"-0.3px",lineHeight:1.3}}>{t.ctaH}</div>
          <p style={{color:"#B0A898",fontSize:12,margin:"0 0 20px",fontStyle:"italic"}}>{t.ctaSub}</p>
          <button onClick={()=>setTab("program")} style={{background:ember,color:"white",border:"none",borderRadius:10,padding:"13px 28px",fontSize:14,cursor:"pointer",fontFamily:"Georgia,serif"}}>{t.ctaBtn}</button>
        </div>
      </div>
    </div>
  );
}

function Program({checked, setChecked, streak, isPro, setTab, t, lang}) {
  const program = lang === "fr" ? PROGRAM_FR : PROGRAM;
  const [expanded, setExpanded] = useState({1:true});
  const [activeItem, setActiveItem] = useState(null);
  const [activeWeek, setActiveWeek] = useState(null);
  const FREE = isPro ? [1,2,3,4,5,6,7,8] : [1,2];
  const ember = "#C8440A"; const gold = "#C9960A"; const mist = "#E8E2D8";
  const stone = "#8A8070"; const ink = "#1C1814"; const cream = "#F8F4EE";
  const total = program.flatMap(w=>w.habits).length;
  const done = Object.values(checked).filter(Boolean).length;
  const pct = Math.round((done/total)*100);
  const toggle = (id,e) => { e.stopPropagation(); setChecked(p=>({...p,[id]:!p[id]})); };
  const wp = w => w.habits.filter(h=>checked[h.id]).length;

  // Auto-close a week bloc when all its habits are checked
  useEffect(() => {
    program.forEach(week => {
      const allChecked = week.habits.every(h => checked[h.id]);
      if (allChecked && expanded[week.week]) {
        const timer = setTimeout(() => {
          setExpanded(p => ({...p, [week.week]: false}));
        }, 600);
        return () => clearTimeout(timer);
      }
    });
  }, [checked]);
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
        {program.map(week=>{
          const wd=wp(week); const wt=week.habits.length;
          const isOpen=expanded[week.week]; const allDone=wd===wt;
          const locked=!FREE.includes(week.week);
          const greenLight = "#EDF7EF";
          const greenMid = "#3D8A4A";
          return (
            <div key={week.week} style={{marginBottom:8,borderRadius:14,overflow:"hidden",border:"1px solid "+(allDone?"#3D8A4A50":mist),background:"white",transition:"all 0.4s ease"}}>
              <button onClick={()=>setExpanded(p=>({...p,[week.week]:!p[week.week]}))} style={{width:"100%",display:"flex",alignItems:"flex-start",padding:"14px 14px",background:allDone?greenLight:"white",border:"none",cursor:"pointer",textAlign:"left",gap:11,transition:"background 0.4s"}}>
                <div style={{width:4,minHeight:50,borderRadius:2,background:allDone?greenMid:week.color,flexShrink:0,marginTop:2,transition:"background 0.4s"}}/>
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:3,flexWrap:"wrap"}}>
                    <span style={{fontSize:10,fontFamily:"monospace",color:allDone?greenMid:week.color,textTransform:"uppercase",letterSpacing:"0.12em",fontWeight:"bold"}}>{t.weekLabel} {week.week}</span>
                    <span style={{fontSize:10,fontFamily:"monospace",color:"#AAA"}}>- {wd}/{wt}</span>
                    {locked&&<span style={{fontSize:9,fontFamily:"monospace",background:"#EDE7DC",color:stone,padding:"1px 6px",borderRadius:4}}>{"🔒"} {t.proTag}</span>}
                    {allDone&&<span style={{fontSize:9,fontFamily:"monospace",background:"#D1F0D8",color:greenMid,padding:"2px 8px",borderRadius:4,fontWeight:"bold"}}>{"✓"} {t.completedLabel}</span>}
                  </div>
                  <div style={{fontSize:14,color:ink,fontWeight:"bold",letterSpacing:"-0.2px",marginBottom:3}}>{week.title}</div>
                  <div style={{fontSize:11,color:"#666",fontStyle:"italic",lineHeight:1.5,paddingRight:8}}>{week.tagline}</div>
                  <div style={{fontSize:9,color:allDone?greenMid:week.color,fontFamily:"monospace",marginTop:5,background:allDone?"#D1F0D8":week.light,display:"inline-block",padding:"2px 7px",borderRadius:4}}>{week.theme}</div>
                </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5,flexShrink:0,paddingTop:2}}>
                  <div style={{width:28,height:28,borderRadius:"50%",background:allDone?greenMid:"#F0EDE8",display:"flex",alignItems:"center",justifyContent:"center",fontSize:allDone?14:10,color:allDone?"white":week.color,fontFamily:"monospace",fontWeight:"bold",transition:"all 0.4s"}}>
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
                  <span style={{fontSize:11,flexShrink:0,color:f.ok?plan.color:"#DDD"}}>{f.ok?"✓":"o"}</span>
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
      </div>
    </div>
  );
}

function FAQ({t, setTab}) {
  const [openCat, setOpenCat] = useState("program");
  const [openQ, setOpenQ] = useState(null);
  const mist="#E8E2D8"; const stone="#8A8070"; const ink="#1C1814";
  const cream="#F8F4EE"; const sand="#EDE7DC"; const ember="#C8440A";

  const toggleQ = (key) => setOpenQ(prev => prev===key ? null : key);

  // All FAQ items flattened for SEO schema
  const allFaqs = t.faqCategories.flatMap(c => c.faqs.map(f => ({...f, cat:c.id})));

  return (
    <div style={{background:cream,minHeight:"100vh"}}>
      {/* SEO-structured header */}
      <div style={{background:ink,padding:"36px 20px 28px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-60,right:-60,width:220,height:220,borderRadius:"50%",background:"radial-gradient(circle,rgba(200,68,10,0.14) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{maxWidth:640,margin:"0 auto",position:"relative"}}>
          <div style={{fontSize:10,color:ember,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:10}}>FAQ</div>
          <h1 style={{color:"white",fontSize:"clamp(20px,5vw,30px)",fontFamily:"Georgia,serif",fontWeight:"normal",margin:"0 0 10px",letterSpacing:"-0.4px",lineHeight:1.25}}>{t.faqPageTitle}</h1>
          <p style={{color:"#999",fontSize:13,margin:0,lineHeight:1.6,fontStyle:"italic",maxWidth:520}}>{t.faqPageSub}</p>
        </div>
      </div>

      {/* Category tabs */}
      <div style={{background:"white",borderBottom:"1px solid "+mist,position:"sticky",top:44,zIndex:50}}>
        <div style={{maxWidth:640,margin:"0 auto",display:"flex",overflowX:"auto",padding:"0 10px"}}>
          {t.faqCategories.map(cat=>(
            <button key={cat.id} onClick={()=>{setOpenCat(cat.id);setOpenQ(null);}}
              style={{padding:"12px 14px 10px",background:"none",border:"none",borderBottom:"2px solid "+(openCat===cat.id?ember:"transparent"),cursor:"pointer",whiteSpace:"nowrap",flexShrink:0,transition:"border-color 0.2s"}}>
              <span style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.07em",textTransform:"uppercase",color:openCat===cat.id?ember:stone,fontWeight:openCat===cat.id?"bold":"normal"}}>
                {cat.icon} {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div style={{maxWidth:640,margin:"0 auto",padding:"20px 12px 60px"}}>
        {t.faqCategories.filter(c=>c.id===openCat).map(cat=>(
          <div key={cat.id}>
            {cat.faqs.map((faq,i)=>{
              const key = cat.id+"-"+i;
              const isOpen = openQ===key;
              return (
                <div key={key} style={{marginBottom:8,borderRadius:12,overflow:"hidden",border:"1px solid "+(isOpen?ember+"40":mist),background:"white",transition:"border-color 0.2s"}}>
                  {/* Question — h2-level for SEO */}
                  <button onClick={()=>toggleQ(key)}
                    style={{width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"space-between",padding:"16px 16px",background:isOpen?"#FFF8F6":"white",border:"none",cursor:"pointer",textAlign:"left",gap:12,transition:"background 0.2s"}}>
                    <div style={{flex:1}}>
                      <div style={{fontSize:14,fontWeight:"bold",color:isOpen?ember:ink,lineHeight:1.4,letterSpacing:"-0.1px"}}>{faq.q}</div>
                    </div>
                    <div style={{width:22,height:22,borderRadius:"50%",background:isOpen?ember+"15":"#F0EDE8",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1,transition:"all 0.2s"}}>
                      <span style={{fontSize:13,color:isOpen?ember:stone,lineHeight:1,transform:isOpen?"rotate(45deg)":"rotate(0deg)",display:"inline-block",transition:"transform 0.2s",marginTop:isOpen?0:-1}}>{isOpen?"×":"+"}</span>
                    </div>
                  </button>
                  {/* Answer */}
                  {isOpen&&(
                    <div style={{padding:"0 16px 18px",borderTop:"1px solid "+ember+"15"}}>
                      <p style={{margin:"12px 0 0",fontSize:13.5,color:"#333",lineHeight:1.75}}>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        {/* Quick search across all categories */}
        <div style={{marginTop:20,background:sand,border:"1px solid "+mist,borderRadius:14,padding:"18px 18px"}}>
          <div style={{fontSize:10,fontFamily:"monospace",color:stone,textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:10}}>
            {t.faqCategories.reduce((acc,c)=>acc+c.faqs.length,0)} questions across {t.faqCategories.length} categories
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
            {t.faqCategories.map(cat=>(
              <button key={cat.id} onClick={()=>{setOpenCat(cat.id);setOpenQ(null);}}
                style={{padding:"5px 12px",borderRadius:20,border:"1px solid "+(openCat===cat.id?ember:mist),background:openCat===cat.id?ember:"white",color:openCat===cat.id?"white":stone,fontSize:11,fontFamily:"monospace",cursor:"pointer",letterSpacing:"0.04em",transition:"all 0.15s"}}>
                {cat.icon} {cat.label} ({cat.faqs.length})
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{marginTop:16,background:ink,borderRadius:14,padding:"24px 20px",textAlign:"center"}}>
          <div style={{fontSize:17,fontFamily:"Georgia,serif",color:"white",marginBottom:6,letterSpacing:"-0.2px"}}>{t.faqCTA}</div>
          <p style={{color:"#999",fontSize:12,margin:"0 0 18px",fontStyle:"italic"}}>{t.faqCTASub}</p>
          <button onClick={()=>setTab("program")} style={{background:ember,color:"white",border:"none",borderRadius:10,padding:"12px 26px",fontSize:13,cursor:"pointer",fontFamily:"Georgia,serif"}}>{t.faqCTABtn}</button>
        </div>
      </div>
    </div>
  );
}

const SYSTEM_PROMPT = `You are the tinywell Science Coach. Help paying members understand the 8-week wellbeing program and the peer-reviewed science behind every habit. RULES: (1) Every answer about a specific habit MUST end with a SOURCE: line citing the study. (2) Be concise: 3-5 sentences for simple questions. (3) Be warm and non-judgmental. (4) Never invent a source. PROGRAM CONTEXT: WEEK 1 CIRCADIAN FOUNDATIONS: Morning light (30 min after waking) activates melanopsin receptors, resets SCN clock SOURCE: Leproult & Van Cauter, Sleep 2010. Fixed wake-up 7 days/week SOURCE: Phillips et al., Science Advances 2017. Phone outside bedroom SOURCE: Kushlev & Dunn, Computers in Human Behavior 2015. Blue-light filter at 19:00 SOURCE: Chang et al., PNAS 2015. WEEK 2 EMBODIED WELLBEING: 500ml water on waking SOURCE: Ganio et al., British Journal of Nutrition 2011. 4-7-8 breathing SOURCE: Brown & Gerbarg, J. Alt. Comp. Medicine 2005. Delay coffee 90 min SOURCE: Lovallo et al., Psychosomatic Medicine 2006. 20-min walk daily NOTE: splitting into 2x10 min produces EQUIVALENT cardiovascular and metabolic benefits to one 20-min session SOURCE: Murphy et al., J Am Coll Nutr 2002 + Buettner, Blue Zones 2005. WEEK 3 POSITIVE EMOTIONS GGIA BERKELEY: 3 specific gratitudes nightly SOURCE: Emmons & McCullough, J. Personality & Social Psychology 2003. Gratitude letter SOURCE: Seligman et al., American Psychologist 2005. Savouring 30 sec/day SOURCE: Bryant & Veroff, Savoring 2007 GGIA Berkeley. Screen-free meal SOURCE: Allirot et al., British Journal of Nutrition 2013. WEEK 4 RELATIONAL WEALTH HARVARD: Deep conversation daily Harvard Study of Adult Development 80 years 724 men relationship quality is #1 predictor of health and happiness at 80 SOURCE: Waldinger & Schulz, The Good Life 2023. Acts of kindness SOURCE: Dunn, Aknin & Norton, Science 2008. Unexpected calls SOURCE: Epley & Schroeder, J. Experimental Psychology 2014. Express appreciation SOURCE: GGIA Berkeley. WEEK 5 AWARENESS AND WONDER: 10-min meditation after 8 weeks increased prefrontal grey matter reduced amygdala 38% anxiety reduction SOURCE: Holzel et al., Psychiatry Research Neuroimaging 2011 Harvard/MGH. Awe walk weekly SOURCE: Sturm et al., Emotion 2022 Keltner Lab UC Berkeley. 1 hour digital-free/day SOURCE: Newport, Deep Work 2016. 20 min nature SOURCE: Hunter et al., Frontiers in Psychology 2019. WEEK 6 PHYSICAL FOUNDATION: Aerobic exercise 3x/week reduces bad mental health days 43% NOTE: accumulated short bouts 3x10 min produce similar benefits to one 30-min session SOURCE: Chekroud et al., Lancet Psychiatry 2018 + Jakicic et al., JAMA 1999. Cold shower SOURCE: Shevchuk, Medical Hypotheses 2008. Declutter SOURCE: McMains & Kastner, J. Neuroscience 2011 Princeton. Food environment SOURCE: Wansink, Cornell Food and Brand Lab. WEEK 7 INNER COMPASS: Self-compassion 5 min/day SOURCE: Neff & Germer, J. Clinical Psychology 2013. Identify meaning daily SOURCE: Fredrickson et al., PNAS 2013. Flow activity SOURCE: Csikszentmihalyi, Flow 1990 GGIA aligned. Good life 3 sentences SOURCE: Lyubomirsky, The How of Happiness 2008. WEEK 8 PERMANENT STACK: Review stack SOURCE: Fogg, Tiny Habits Stanford 2019. Social anchor SOURCE: Waldinger & Schulz 2023. Wellbeing OS SOURCE: Baumeister & Tierney, Willpower 2011. Celebrate SOURCE: Fogg, Tiny Habits Stanford 2019.`;

function Chat({isPro, setTab, t}) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSugg, setShowSugg] = useState(true);
  const ember="#C8440A"; const ink="#1C1814"; const mist="#E8E2D8";
  const stone="#8A8070"; const cream="#F8F4EE";

  useEffect(() => {
    if (open) {
      const el = document.getElementById("twchat-end");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open, loading]);

  const send = async (text) => {
    const q = (text || input).trim();
    if (!q || loading) return;
    setInput(""); setShowSugg(false);
    const hist = [...messages, { role: "user", content: q }];
    setMessages(hist); setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: hist.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || t.chat.errorMsg;
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: "assistant", content: t.chat.errorMsg }]);
    }
    setLoading(false);
  };

  const renderMsg = (content) => {
    const srcMatch = content.match(/SOURCE:\s*(.+?)(?:\n|$)/i);
    const body = content.replace(/SOURCE:\s*.+?(?:\n|$)/gi, "").trim();
    return (
      <div>
        <div style={{fontSize:13,lineHeight:1.75,color:ink,whiteSpace:"pre-wrap"}}>{body}</div>
        {srcMatch && (
          <div style={{marginTop:10,padding:"7px 12px",background:"#F0EDE8",borderLeft:"3px solid "+ember,borderRadius:"0 8px 8px 0"}}>
            <span style={{fontSize:9,fontFamily:"monospace",color:stone,textTransform:"uppercase",letterSpacing:"0.1em"}}>{t.chat.sourceLabel}: </span>
            <span style={{fontSize:11.5,color:ink,fontStyle:"italic"}}>{srcMatch[1]}</span>
          </div>
        )}
      </div>
    );
  };

  if (!open) return (
    <button onClick={()=>setOpen(true)} style={{position:"fixed",bottom:20,right:16,zIndex:150,background:ember,color:"white",border:"none",borderRadius:28,padding:"11px 18px",display:"flex",alignItems:"center",gap:8,boxShadow:"0 4px 20px rgba(200,68,10,0.4)",cursor:"pointer",fontFamily:"Georgia,serif",fontSize:13}}>
      <span style={{fontSize:16}}>🔬</span>
      <span>Science Coach</span>
      {!isPro&&<span style={{background:"rgba(255,255,255,0.25)",borderRadius:4,fontSize:9,padding:"1px 5px",fontFamily:"monospace"}}>PRO</span>}
    </button>
  );

  return (
    <div style={{position:"fixed",inset:0,zIndex:250,display:"flex",flexDirection:"column",background:cream}}>
      <style>{`@keyframes twdot{0%,80%,100%{opacity:.3;transform:scale(.7)}40%{opacity:1;transform:scale(1)}}`}</style>
      <div style={{background:ink,padding:"14px 16px 12px",display:"flex",alignItems:"center",gap:12,flexShrink:0}}>
        <div style={{width:34,height:34,borderRadius:"50%",background:"rgba(200,68,10,0.2)",border:"1px solid rgba(200,68,10,0.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,flexShrink:0}}>🔬</div>
        <div style={{flex:1}}>
          <div style={{color:"white",fontSize:14,fontFamily:"Georgia,serif"}}>{t.chat.title}</div>
          <div style={{color:"#555",fontSize:10,fontFamily:"monospace",letterSpacing:"0.05em"}}>{t.chat.poweredBy}</div>
        </div>
        <button onClick={()=>setOpen(false)} style={{background:"rgba(255,255,255,0.08)",border:"none",color:"#888",cursor:"pointer",borderRadius:8,padding:"5px 11px",fontSize:12,fontFamily:"monospace"}}>{t.chat.closeBtn}</button>
      </div>

      {!isPro ? (
        <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 24px",textAlign:"center"}}>
          <div style={{fontSize:36,marginBottom:16}}>🔬</div>
          <div style={{fontSize:17,fontFamily:"Georgia,serif",color:ink,marginBottom:8}}>{t.chat.proOnly}</div>
          <p style={{fontSize:13,color:stone,lineHeight:1.65,margin:"0 0 24px",maxWidth:280}}>{t.chat.proOnlySub}</p>
          <button onClick={()=>{setOpen(false);setTab("pricing");}} style={{background:ember,color:"white",border:"none",borderRadius:10,padding:"12px 24px",fontSize:13,cursor:"pointer",fontFamily:"Georgia,serif"}}>{t.chat.proOnlyBtn}</button>
        </div>
      ) : (
        <>
          <div style={{flex:1,overflowY:"auto",padding:"14px 12px 8px",display:"flex",flexDirection:"column",gap:10}}>
            {messages.length===0&&(
              <div style={{display:"flex",gap:10,alignItems:"flex-start"}}>
                <div style={{width:28,height:28,borderRadius:"50%",background:ember,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,flexShrink:0}}>🔬</div>
                <div style={{background:"white",border:"1px solid "+mist,borderRadius:"4px 12px 12px 12px",padding:"11px 13px",maxWidth:"86%",fontSize:13,lineHeight:1.7,color:ink}}>{t.chat.welcome}</div>
              </div>
            )}
            {showSugg&&messages.length===0&&(
              <div style={{paddingLeft:38}}>
                <div style={{fontSize:10,color:stone,fontFamily:"monospace",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:7}}>{t.chat.suggestionsLabel}</div>
                <div style={{display:"flex",flexDirection:"column",gap:5}}>
                  {t.chat.suggestions.map((s,i)=>(
                    <button key={i} onClick={()=>send(s)} style={{background:"white",border:"1px solid "+mist,borderRadius:8,padding:"8px 12px",fontSize:12,color:ink,cursor:"pointer",textAlign:"left",lineHeight:1.4}}>{s}</button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m,i)=>(
              <div key={i} style={{display:"flex",gap:9,alignItems:"flex-start",flexDirection:m.role==="user"?"row-reverse":"row"}}>
                {m.role==="assistant"&&<div style={{width:28,height:28,borderRadius:"50%",background:ember,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,flexShrink:0,marginTop:2}}>🔬</div>}
                <div style={{background:m.role==="user"?ember:"white",border:m.role==="user"?"none":"1px solid "+mist,borderRadius:m.role==="user"?"12px 4px 12px 12px":"4px 12px 12px 12px",padding:"10px 13px",maxWidth:"85%",color:m.role==="user"?"white":ink}}>
                  {m.role==="user"?<div style={{fontSize:13,lineHeight:1.6}}>{m.content}</div>:renderMsg(m.content)}
                </div>
              </div>
            ))}
            {loading&&(
              <div style={{display:"flex",gap:9,alignItems:"flex-start"}}>
                <div style={{width:28,height:28,borderRadius:"50%",background:ember,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,flexShrink:0}}>🔬</div>
                <div style={{background:"white",border:"1px solid "+mist,borderRadius:"4px 12px 12px 12px",padding:"13px 16px",display:"flex",gap:5,alignItems:"center"}}>
                  {[0,1,2].map(j=><div key={j} style={{width:7,height:7,borderRadius:"50%",background:stone,animation:"twdot 1.2s ease-in-out infinite",animationDelay:j*0.2+"s"}}/>)}
                </div>
              </div>
            )}
            <div id="twchat-end"/>
          </div>
          <div style={{padding:"10px 12px 18px",background:"white",borderTop:"1px solid "+mist,flexShrink:0}}>
            <div style={{display:"flex",gap:7,alignItems:"flex-end"}}>
              <textarea value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}} placeholder={t.chat.placeholder} rows={2}
                style={{flex:1,padding:"9px 12px",border:"1px solid "+mist,borderRadius:10,fontSize:12.5,background:cream,color:ink,outline:"none",resize:"none",fontFamily:"Georgia,serif",lineHeight:1.5}}/>
              <button onClick={()=>send()} disabled={!input.trim()||loading}
                style={{background:input.trim()&&!loading?ember:"#DDD",color:"white",border:"none",borderRadius:10,padding:"10px 15px",fontSize:13,cursor:input.trim()&&!loading?"pointer":"default",fontFamily:"Georgia,serif",flexShrink:0,alignSelf:"flex-end",transition:"background 0.15s"}}>
                {loading?"...":t.chat.send}
              </button>
            </div>
            <div style={{fontSize:9,color:"#CCC",fontFamily:"monospace",marginTop:5,textAlign:"center",letterSpacing:"0.05em"}}>{t.chat.poweredBy}</div>
          </div>
        </>
      )}
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
          <p style={{color:"#888",fontSize:12,margin:"0 0 12px",lineHeight:1.6}}>{posts[0].excerpt.slice(0,150)}...</p>
          <div style={{fontSize:10,color:"#555",fontStyle:"italic",marginBottom:10}}>{posts[0].author}</div>
          <div style={{fontSize:11,color:posts[0].color,fontFamily:"monospace"}}>Read -{">"}</div>
        </div>
        {posts.slice(1).map(p=>(
          <div key={p.id} onClick={()=>setOpen(p.id)} style={{background:"white",border:"1px solid "+mist,borderRadius:14,padding:"14px 14px",marginBottom:8,cursor:"pointer",display:"flex",gap:11}}>
            <div style={{width:4,alignSelf:"stretch",borderRadius:2,background:p.color,flexShrink:0}}/>
            <div style={{flex:1}}>
              <div style={{fontSize:9,color:p.color,fontFamily:"monospace",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:4}}>{p.tag} - {p.readTime}</div>
              <div style={{fontSize:13,fontFamily:"Georgia,serif",color:ink,lineHeight:1.35,marginBottom:4}}>{p.title}</div>
              <div style={{fontSize:11,color:stone,lineHeight:1.5}}>{p.excerpt.slice(0,100)}...</div>
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

  const tabs=[{id:"home",label:t.nav.home},{id:"program",label:t.nav.program},{id:"pricing",label:t.nav.pricing},{id:"blog",label:t.nav.blog},{id:"faq",label:t.nav.faq}];

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
      {tab==="program"&&<Program checked={checked} setChecked={setChecked} streak={streak} isPro={isPro} setTab={setTab} t={t} lang={lang}/>}
      {tab==="pricing"&&<Pricing t={t} isPro={isPro} setIsPro={setIsPro} setTab={setTab}/>}
      {tab==="blog"&&<Blog t={t}/>}
      {tab==="faq"&&<FAQ t={t} setTab={setTab}/>}
    </div>
  );
}