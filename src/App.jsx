import { useState, useEffect } from "react";

// Responsive hook: returns true when viewport >= 1024px (desktop breakpoint)
function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= breakpoint : false
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => setIsDesktop(window.innerWidth >= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isDesktop;
}

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
     howTo:["Set a recurring phone reminder labelled 'light' 15 minutes after your alarm so you never forget the first 3 days.","Step outside within 30 minutes of waking — a balcony, garden, doorstep or the walk to the bakery all count.","Do not wear sunglasses: outdoor light is 10–50× brighter than indoor light and your eyes need the full spectrum.","Clear sky: 5–10 minutes is enough. Overcast: aim for 15–20 minutes. Heavy rain or before sunrise: use a 10,000 lux lightbox.","Cannot go outside? Sit within 1 metre of a wide-open window facing the brightest direction — do not rely on light through double glazing alone.","Pair it with an existing routine (coffee outside, walking the dog, a 5-minute stretch) so it becomes automatic within a week."],
     benefit:"Morning light within 30 minutes of waking is the single most potent zeitgeber — the biological cue that synchronises your suprachiasmatic nucleus, the master clock in your hypothalamus. It triggers a sharp cortisol awakening response that raises daytime alertness and, 14–16 hours later, initiates the melatonin release that makes falling asleep effortless. Huberman Lab field data and Leproult & Van Cauter (Sleep, 2010) show that people who consistently get morning light fall asleep faster, experience fewer middle-of-the-night awakenings, and report measurably better mood and focus within 7–10 days — at zero cost and with no side effects.",
     source:"Huberman Lab / Leproult & Van Cauter, Sleep 2010",sourceUrl:"https://doi.org/10.1093/sleep/33.5.645"},
    {id:"w1h2",emoji:"🛏️",title:"Fixed wake-up time — 7 days/week",micro:"Same time weekends. Non-negotiable.",time:"0 effort",
     howTo:["Pick one wake time you can realistically hold every single day — including weekends, holidays and the day after a late night.","Set one alarm only — no snooze. Place the phone (or alarm clock) across the room so you have to stand up to turn it off.","Too tired? Go to bed 30 minutes earlier tonight rather than sleeping in tomorrow. Never 'catch up' on sleep by extending the morning.","After a bad night, accept the tiredness and stick to the wake time — your sleep drive will rebuild itself in 24–48 hours.","Weekends are where the habit is made or broken: a Saturday lie-in of 90 minutes creates a mini-jetlag that costs the whole week.","Commit for 14 full days before judging the effect — the first 3 mornings are the hardest, then it becomes self-sustaining."],
     benefit:"Phillips et al. (Science Advances, 2017) tracked Harvard students and found that the regularity of sleep timing was a stronger predictor of academic performance and mood than total hours slept. Follow-up work in adults links irregular sleep schedules to higher cardiovascular risk, metabolic disease and depressive symptoms — independent of sleep duration. A fixed wake time anchors every downstream circadian process: hunger hormones, testosterone and cortisol cycles, body temperature and peak cognitive windows. It is the cheapest, most powerful sleep intervention that exists, and unlike sleeping more, it requires no extra time.",
     source:"Phillips et al., Science Advances 2017",sourceUrl:"https://doi.org/10.1126/sciadv.1601666"},
    {id:"w1h3",emoji:"📵",title:"Phone outside the bedroom",micro:"Buy a €5 alarm clock tonight",time:"5 min setup",
     howTo:["Order or buy a basic alarm clock tonight — any supermarket or pharmacy sells them for under €10. Do not postpone this step.","Choose a permanent charging spot outside the bedroom: hallway, kitchen counter or living room. Make it the one and only spot.","Enable Do Not Disturb from 21:00 to 07:00 — allow calls from 'favourites' so genuine emergencies still get through.","Tell your household and closest contacts for the first week so they know not to expect late-night replies.","If anxiety spikes in the first 3 nights (it usually does), leave the phone further from the bedroom door, not closer.","Replace the pre-sleep scroll with a book, a notebook or a short breathing practice — the void needs to be filled, not just emptied."],
     benefit:"Kushlev & Dunn (Computers in Human Behavior, 2015) found that simply reducing phone checking produced measurable drops in stress and increased attentional focus within a single week. Sleeping with the phone in the bedroom correlates with shorter sleep, more night awakenings and a harder wake-up, because even the unconscious expectation of a notification keeps the nervous system in a lightly vigilant state. Removing it physically — not relying on willpower — eliminates the pre-sleep doom scroll, the middle-of-the-night check, and the morning cortisol hit from email and social media before you have even stood up. It is the single cheapest environmental change with compounding benefits.",
     source:"Kushlev & Dunn, Computers in Human Behavior 2015",sourceUrl:"https://doi.org/10.1016/j.chb.2014.09.044"},
    {id:"w1h4",emoji:"🔵",title:"Blue-light filter auto-on at 19:00",micro:"Night Shift scheduled — set once, done forever",time:"2 min setup",
     howTo:["iPhone: Settings → Display & Brightness → Night Shift → Scheduled → from 19:00 to 07:00, warmth slider at 'More warm'.","Mac: System Settings → Displays → Night Shift → Scheduled → custom from 19:00 to 07:00.","Android: Settings → Display → Night Light / Eye Comfort → Schedule → custom from sunset.","Windows: Settings → System → Display → Night Light → Schedule → turn on from 19:00.","For a stronger effect: install f.lux on desktop, or wear amber/orange blue-blocking glasses after 20:00.","Dim overhead lights in the evening — use lamps, candles or warm LED bulbs (2700K or below) rather than bright ceiling lights."],
     benefit:"Chang et al. (PNAS, 2015) compared reading a backlit e-reader versus a printed book before bed and found that blue light suppressed melatonin release by over 50%, delayed sleep onset by an average of 10 minutes, reduced REM sleep, and — most importantly — made participants feel groggier the next morning despite sleeping the same number of hours. Blue wavelengths (around 460–480 nm) are the exact signal your brain uses to detect daylight, so evening exposure tells your master clock that it is still midday. Filtering them out removes that false signal and lets natural sleep pressure build normally, starting from the very first night.",
     source:"Chang et al., PNAS 2015",sourceUrl:"https://doi.org/10.1073/pnas.1418490112"},
  ]},
  {week:2,title:"The Body Awakens",theme:"Embodied Wellbeing",color:"#A06B10",light:"#FFF8ED",
   tagline:"Hydrate, breathe, move — your body speaks before your mind does.",
   science:"Embodied cognition research (Niedenthal, Science 2007) shows body states directly shape emotional and cognitive experience.",
   habits:[
    {id:"w2h1",emoji:"💧",title:"500 ml water immediately on waking",micro:"Bottle ready on the nightstand the night before",time:"2 min/day",
     howTo:["Fill a 500 ml glass or bottle every evening and place it on the nightstand — prepare it at the same time you brush your teeth.","Drink it all within the first 10 minutes of waking, before coffee, tea, food or your phone.","Add a pinch of sea salt, a squeeze of lemon, or a splash of electrolyte mix to improve absorption and replace overnight sodium loss.","Room-temperature water absorbs faster than cold; avoid ice water first thing in the morning.","Travelling? Use a bottle you already own — consistency matters more than the vessel.","Pair it with another morning action (stepping onto the cold floor, opening the curtains) to lock in the routine."],
     benefit:"Ganio et al. (British Journal of Nutrition, 2011) showed that even mild dehydration of 1–2% — normal after a full night without fluid intake — impairs short-term memory, concentration, mood and increases perceived fatigue within 30 minutes. Your body loses 300–500 ml overnight through breathing and sweating, and morning cortisol further dehydrates cells. Rehydrating immediately restores plasma volume, supports cerebral blood flow, activates gut motility and provides a cheap but reliable energy lift. It is the single fastest mood and focus intervention of the entire program.",
     source:"Ganio et al., British Journal of Nutrition 2011",sourceUrl:"https://doi.org/10.1017/S0007114511002005"},
    {id:"w2h2",emoji:"🌬️",title:"4-7-8 breathing — 4 cycles",micro:"Inhale 4s · hold 7s · exhale 8s — before any screen",time:"2 min/day",
     howTo:["Sit or lie with a straight spine. Rest your tongue tip behind your upper front teeth throughout.","Exhale fully through your mouth with a soft whoosh sound.","Close the mouth, inhale quietly through the nose for a count of 4.","Hold the breath, completely still, for a count of 7.","Exhale audibly through the mouth for a count of 8 — twice as long as the inhale.","Repeat for 4 full cycles. Do it first thing in the morning and, ideally, before any moment of stress (meetings, commute, bedtime)."],
     benefit:"Slow, extended-exhale breathing at around 6 breaths per minute — the heart-rate-variability resonant frequency — activates the vagus nerve and shifts the autonomic nervous system from sympathetic (fight-or-flight) to parasympathetic (rest-and-digest) dominance within 60 seconds. Brown & Gerbarg (J. Alternative & Complementary Medicine, 2005) and subsequent clinical trials show measurable drops in cortisol, heart rate, blood pressure and self-reported anxiety after a single session. Unlike meditation, no training is required: the physiology is hardwired and works from day one — it is the closest thing to a pharmaceutical-strength calming effect you can trigger yourself.",
     source:"Brown & Gerbarg, J. Alternative & Complementary Medicine 2005",sourceUrl:"https://doi.org/10.1089/acm.2005.11.189"},
    {id:"w2h3",emoji:"☕",title:"Delay your first coffee by 90 min",micro:"Cortisol peaks in hour 1 — caffeine then is wasted",time:"0 effort",
     howTo:["Set a 'coffee allowed' reminder for exactly 90 minutes after your wake time.","Fill the first 90 minutes with water, daylight, breathing and light movement — this is the energy stack.","Decaf, herbal tea or hot water with lemon are fine during the waiting window.","Expect a mild headache or fog for the first 2–4 days if you have a strong coffee habit — this is adenosine recalibration, not deprivation.","Keep total daily caffeine under 400 mg and stop all caffeine at least 8 hours before your target bedtime.","Prefer filter coffee or light espresso on an emptyish stomach — pair with a small protein snack if you feel jittery."],
     benefit:"Cortisol follows a natural surge in the first 45–60 minutes after waking — the 'cortisol awakening response' — which is what actually makes you alert. Drinking coffee during that window blunts the cortisol effect and builds caffeine tolerance far faster, so you need more coffee to feel the same lift. Lovallo et al. (Psychosomatic Medicine, 2006) showed that strategic caffeine timing produces stronger subjective alertness with lower total daily intake and less of the mid-afternoon energy crash. Delaying your first cup also extends the time between caffeine and your target bedtime, which protects deep sleep.",
     source:"Lovallo et al., Psychosomatic Medicine 2006",sourceUrl:"https://doi.org/10.1097/01.psy.0000204926.97596.2a"},
    {id:"w2h4",emoji:"🚶",title:"20-min walk — one daily anchor",micro:"Replace one commute segment permanently",time:"20 min/day",
     howTo:["Pick one existing trip and modify it permanently: get off the metro one stop earlier, park 10 minutes further, walk to lunch.","No commute? Walk immediately after breakfast or straight after lunch — post-meal walking also lowers glucose spikes.","Leave your phone in your pocket on silent — the walk is thinking time, not content time.","Choose the greenest or most open route available, even if it is slightly longer — nature amplifies the effect.","Walk at a comfortable conversational pace. This is not exercise — it is movement hygiene.","Rain or cold: wear the right jacket and go anyway. Missing the walk because of weather is how the habit dies."],
     benefit:"Non-intentional, daily walking is the single most consistent longevity habit across all five Blue Zones (Buettner, National Geographic 2005 / 2023). It improves cardiovascular health, reduces all-cause mortality by 20–30% at just 7,000–8,000 steps per day, lowers blood glucose, improves creativity (Stanford, 2014) and is strongly protective against depression. Unlike structured exercise, walking requires no recovery, produces no injury risk, and compounds effortlessly over decades — which is why it outperforms almost every gym routine in observational longevity data.",
     source:"Buettner, Blue Zones — National Geographic 2005",sourceUrl:"https://www.bluezones.com"},
  ]},
  {week:3,title:"Gratitude Architecture",theme:"Positive Emotions",color:"#5C7A5C",light:"#EEF6EE",
   tagline:"Rewire your default emotional frequency — specifically, not generically.",
   science:"GGIA Berkeley's gratitude practices are among the most replicated interventions in positive psychology, with effect sizes rivalling CBT for mild depression.",
   habits:[
    {id:"w3h1",emoji:"✍️",title:"3 specific gratitudes each evening",micro:"Physical notebook — go specific, not generic",time:"5 min/day",
     howTo:["Each night, for at least one week, write down three things that went well for you today and briefly explain why they went well.","Use a physical notebook — not your phone — and keep it on your nightstand. A physical record matters far more than doing it in your head.","Entries can be small everyday events or bigger milestones.","Always add the 'why': 'the barista remembered my order — I felt seen because I rarely feel recognised in this new city'.","Do it at the same time each evening, ideally 10–30 minutes before sleep, as the final act of the day.","If you miss a day, do not backfill — just start again tomorrow. The habit is the streak, not the perfection."],
     benefit:"The 'Three Good Things' exercise is one of the most replicated interventions in positive psychology. In Seligman's landmark 2005 study (and Emmons & McCullough, 2003), participants who did this for just one week reported higher happiness and lower depressive symptoms — and the effects were still measurable 6 months later. Writing engages episodic memory more deeply than thinking, trains your brain to scan for positive events during the day, and displaces the negativity bias that evolution built in. It takes 5 minutes and is free.",
     source:"Emmons & McCullough, J. Personality & Social Psychology 2003",sourceUrl:"https://doi.org/10.1037/0022-3514.84.2.377"},
    {id:"w3h2",emoji:"💌",title:"Write one gratitude letter this week",micro:"To anyone, living or not. You don't have to send it.",time:"20 min once",
     howTo:["Choose one person who had a meaningful impact on your life and was never properly thanked — a teacher, mentor, relative, friend.","Write a full letter (300+ words): describe specifically what they did, how it affected you, and where you are today because of it.","Use concrete details, not generalities — name the moment, the words, the feeling.","You do not have to send it. But if you can deliver it in person and read it aloud, the effect is measurably larger for both of you.","If the person has passed away, write it anyway — the benefit comes from the author, not the recipient.","Keep a copy. Re-read it the next time you feel flat or disconnected."],
     benefit:"In Seligman et al. (American Psychologist, 2005), the gratitude letter produced the single largest and most durable increase in happiness of any positive psychology intervention tested — larger than meditation, mindfulness, signature strengths, or three good things. Participants who delivered the letter in person showed happiness gains that were still measurable one month later. The act of writing forces you to translate vague appreciation into specific causal memory, which activates reward circuitry and consolidates a more generous view of your own life story.",
     source:"Seligman et al., American Psychologist 2005",sourceUrl:"https://doi.org/10.1037/0003-066X.60.5.410"},
    {id:"w3h3",emoji:"🌸",title:"Savour one moment daily — eyes open",micro:"Pause for 30 seconds. Notice texture, sound, temperature.",time:"30 sec/day",
     howTo:["Pick a moment that already exists in your day — the first sip of coffee, a meal, a walk, sunlight on your face.","When it happens, stop. Put down your phone. Take one slow breath.","Notice three sensory details: one sound, one texture, one temperature or smell.","Say internally: 'I am here, and this is good.' Hold the moment for 20–30 seconds — do not rush past it.","Return to the same moment every day to anchor the habit — novelty is not the point, attention is.","No apps, no timers, no photos: savouring through a screen is not savouring."],
     benefit:"Savouring — the deliberate amplification and prolongation of positive experience — is one of the most effective and least practised happiness skills. Bryant & Veroff (2007) and subsequent studies show it independently boosts life satisfaction over a 4-week window and directly interrupts hedonic adaptation, the process by which the brain filters out recurring positive stimuli. Just 20–30 seconds of full attention converts an ordinary event into a stored positive memory, building a reservoir of emotional fuel to draw on during harder periods.",
     source:"Bryant & Veroff, Savoring: A New Model of Positive Experience 2007",sourceUrl:"https://greatergood.berkeley.edu/topic/savoring"},
    {id:"w3h4",emoji:"🍽️",title:"One screen-free, seated meal per day",micro:"Start with lunch. Phone in a drawer.",time:"Daily",
     howTo:["Start with the easiest meal — usually lunch, then one dinner, then breakfast.","Phone face-down in a drawer, bag or another room — not next to the plate.","Sit at a table. Eating standing up or at your desk does not count.","Chew each bite a little more than feels natural, and put the fork down between bites.","Notice 3 things about the food: temperature, texture and a single flavour note.","If you eat with others, use the time for real conversation — no TV in the background."],
     benefit:"Mindful eating reduces portion size by 20–30% without conscious effort, improves digestion and strengthens the natural hunger-satiety signals that distraction suppresses. Allirot et al. (British Journal of Nutrition, 2013) showed that eating while distracted increases food consumption and reduces meal satisfaction — the neurological equivalent of never quite feeling full.",
     source:"Allirot et al., British Journal of Nutrition 2013",sourceUrl:"https://doi.org/10.1017/S0007114512004540"},
  ]},
  {week:4,title:"Social Vitality",theme:"Relational Wealth",color:"#2A6B8A",light:"#EBF5FA",
   tagline:"The most powerful predictor of a long, happy life is the quality of your relationships.",
   science:"The Harvard Study of Adult Development (80 years, 724 men) found relationship quality outperforms income, IQ, genes and social class as a predictor of wellbeing.",
   habits:[
    {id:"w4h1",emoji:"🤝",title:"One deep conversation daily",micro:"Call, not text. No agenda. Listen more than you talk.",time:"15 min/day",
     howTo:["Choose voice or video over text — tone of voice carries 40% of emotional information that disappears in writing.","Start with a real question: 'How are you really?' or 'What is on your mind this week?'. Skip the weather.","Listen without preparing your next sentence. Ask one follow-up question before you share your own view.","Aim for at least one person a day — family, friend, colleague, neighbour. Rotate the list, do not always call the same person.","15 minutes is enough. Quality beats duration.","If the day is too busy: send a 30-second voice note with a real question. Better than a text, better than nothing."],
     benefit:"The Harvard Study of Adult Development — the longest longitudinal study of human wellbeing ever conducted (80+ years, 724 men) — concludes that relationship quality is the single strongest predictor of health and happiness at age 80, stronger than cholesterol, income, IQ or social class (Waldinger & Schulz, The Good Life, 2023). Even brief, regular meaningful contact activates oxytocin release, buffers cortisol and supports immune function. Deep conversations require no budget, no calendar and no travel — they just require that you pick up the phone and listen for 15 minutes.",
     source:"Waldinger & Schulz, The Good Life 2023",sourceUrl:"https://www.goodlifeproject.com"},
    {id:"w4h2",emoji:"🎁",title:"One act of kindness per day",micro:"Specific, spontaneous, directed at one person",time:"Daily",
     howTo:["Make it specific and personal — a direct action for a specific person you can see, not an abstract donation.","Examples: make a colleague's coffee, text someone 'I thought of you today', hold the lift, let the car behind you pass.","Vary the recipient over the week — do not always give to the same person.","Do it silently when possible — anonymous kindness activates reward circuits more cleanly than praised kindness.","Notice how you feel for the next 10 minutes — this is the dopamine-and-oxytocin signature you are training.","Once the daily habit is locked, pick one 'big' act per month: donation, volunteering, helping someone move."],
     benefit:"Performing acts of kindness consistently increases life satisfaction, self-esteem, mood and even physical health markers across dozens of trials. Dunn, Aknin & Norton (Science, 2008) demonstrated that spending on others produces more happiness than spending the same amount on oneself — an effect replicated in countries with very different income levels. Kind acts release oxytocin, reduce social anxiety through repeated positive exposure, and strengthen the giver's perceived social connectedness.",
     source:"Dunn, Aknin & Norton, Science 2008",sourceUrl:"https://doi.org/10.1126/science.1150952"},
    {id:"w4h3",emoji:"📞",title:"Replace one scroll session with a real call",micro:"Someone you have been meaning to catch up with",time:"Daily",
     howTo:["Identify your go-to scroll moment: commute, lunch break, before bed, waiting at the doctor's.","Pick one of those slots and replace it once a day with a phone call — not a text, not a Like.","Keep a rolling list of 5 people you owe a call: rotate through them.","Opening line: 'I was just thinking of you — do you have 5 minutes?' works 95% of the time.","5 minutes counts. Even brief, unexpected calls produce significant wellbeing gains for both people.","If they do not answer, leave a warm voicemail — the habit is the act of reaching out, not the pickup."],
     benefit:"Epley & Schroeder (Journal of Experimental Psychology: General, 2014) ran experiments showing that people systematically underestimate how much both themselves and the other person will enjoy unexpected contact. When participants actually made the call, mood, connection and sense of life meaning increased far more than they had predicted. Trading 10 minutes of scrolling for 10 minutes of voice contact replaces a dopamine-depleting activity with an oxytocin-producing one.",
     source:"Epley & Schroeder, J. Experimental Psychology 2014",sourceUrl:"https://doi.org/10.1037/xge0000030"},
    {id:"w4h4",emoji:"🫂",title:"Express appreciation to one person today",micro:"Specific, sincere, out loud or in writing",time:"2 min/day",
     howTo:["Pick one person in your day. Say — or write — exactly what you appreciate and why.","Specific, not generic: 'I appreciated how you handled that meeting — your calm made it possible for me to stay focused.'","Eye contact amplifies the effect for both sides. Do it in person when you can.","For written messages, use a real sentence, not an emoji — the specificity is what makes it land.","Works with strangers too: 'You made that really pleasant, thank you' to a cashier costs nothing and lands hard.","Once a week, do it for someone you see too often to normally thank — partner, parent, close friend."],
     benefit:"Expressing appreciation strengthens relational bonds and simultaneously activates the giver's reward system as strongly as the receiver's — a neurological 'helper's high' documented in multiple imaging studies. Unlike generic thanks, specific appreciation that names the behaviour and its effect ('what you did' + 'how it made me feel') is processed as a social narrative, which encodes more deeply and is remembered months later by both parties (GGIA Berkeley).",
     source:"GGIA Berkeley — Expressing Gratitude practice",sourceUrl:"https://ggia.berkeley.edu/practice/gratitude_letter"},
  ]},
  {week:5,title:"Mindful Attention",theme:"Awareness & Wonder",color:"#6B4A9A",light:"#F3F0FA",
   tagline:"Where attention goes, wellbeing follows.",
   science:"MBSR is one of the most studied psychological interventions, with structural brain changes measurable after just 8 weeks.",
   habits:[
    {id:"w5h1",emoji:"🧘",title:"10-minute meditation — every morning",micro:"Headspace · Petit Bambou · or just follow your breath",time:"10 min/day",
     howTo:["Do it before checking email or social media — let it be the first intentional act of the day.","Use a guided app for the first 2 weeks: Headspace, Petit Bambou or Waking Up all have free tiers.","Sit comfortably on a chair or the floor with your back straight — lying down usually leads to sleep.","Close your eyes, set a timer for 10 minutes, and focus entirely on the physical sensation of breathing in your nostrils or chest.","When your mind wanders (it will — this is not a failure, it is the exercise), simply notice the thought, label it 'thinking', and gently return.","Progress is not fewer thoughts — it is faster recovery. After 8 weeks, the gap between a stressful stimulus and your response begins to widen."],
     benefit:"After 8 weeks of daily mindfulness meditation, Holzel et al. (Psychiatry Research: Neuroimaging, 2011, Harvard/MGH) measured structural brain changes: increased grey matter density in the prefrontal cortex and hippocampus, and reduced amygdala volume — the stress-response centre. A 2014 JAMA Internal Medicine meta-analysis of 47 trials found a 38% reduction in anxiety symptoms. These are not self-report outcomes — they are physical changes in brain architecture, measurable on MRI, produced by 10 minutes a day of focused attention.",
     source:"Holzel et al., Psychiatry Research: Neuroimaging 2011",sourceUrl:"https://doi.org/10.1016/j.pscychresns.2010.08.006"},
    {id:"w5h2",emoji:"😮",title:"Awe walk — once per week",micro:"Walk slowly. Look up. Notice scale and beauty.",time:"20 min/week",
     howTo:["Walk alone — awe is harder in conversation and easier in silence.","Look for things that feel vast, beautiful or complex: sky, water, architecture, trees, a piece of music heard through an open window.","Walk slowly — stop if something moves you. The UC Berkeley protocol recommends looking outward rather than inward.","Take a brief photo of one thing that genuinely moved you — not to share, but to anchor the memory.","20 minutes is the minimum effective dose, according to the UC Berkeley study protocol.","Do not fill the walk with podcasts or calls — the silence is the active ingredient."],
     benefit:"Sturm et al. (Emotion, 2022, Keltner Lab, UC Berkeley) conducted an 8-week randomised controlled trial in which participants took 15-minute weekly awe walks. Compared to a control walking group, the awe walkers showed significantly greater increases in positive emotions, decreases in daily stress, increased prosocial feelings, and reported greater 'small self' — the healthy sense of perspective that comes from feeling part of something larger. Awe is one of the few positive emotions that actively shrinks the ego and expands concern for others.",
     source:"Sturm et al., Emotion 2022 — Keltner Lab, UC Berkeley",sourceUrl:"https://doi.org/10.1037/emo0000876"},
    {id:"w5h3",emoji:"🔕",title:"One hour digital-free per day",micro:"Same hour every day — consistency matters more than duration",time:"60 min/day",
     howTo:["Choose the same hour every day — consistency creates the psychological permission to be unreachable.","Put your phone in a drawer or another room. Leaving it face-down on the same table does not count.","Replace the time with one physical, non-digital activity: reading, cooking, walking, journalling, instrument, stretching.","Tell anyone who needs to know that you are offline from X to Y — setting expectations eliminates the anxiety of being unreachable.","Start with 30 minutes if 60 feels impossible, but commit to the same slot every day.","Notice what arises in the quiet — mild discomfort in week 1 is normal; genuine relief and clarity typically arrive in week 2."],
     benefit:"Planned, predictable digital detox periods — as opposed to impulsive phone-checking reduction — measurably reduce cognitive load, anxiety and the background 'availability pressure' that characterises modern work. Newport (Deep Work, 2016) and Kushlev & Dunn (2015) both show that the predictable boundary matters more than the total duration: knowing 'I am offline until 8pm' produces more calm than vague reduction. A 60-minute window is also the minimum for entering deep focus, which is associated with the highest levels of subjective wellbeing at work.",
     source:"Newport, Deep Work 2016 / Kushlev & Dunn 2015",sourceUrl:"https://doi.org/10.1016/j.chb.2014.09.044"},
    {id:"w5h4",emoji:"🌿",title:"Spend 20 min in nature today",micro:"Park, garden, waterside — not a screen wallpaper",time:"20 min/day",
     howTo:["Find the nearest green space — a park, garden, riverside or forest path counts equally.","Leave headphones behind at least once per week — the unmediated soundscape is part of the dose.","Sit or walk slowly — the research dose-response plateaus at 120 minutes per week total, so 20 minutes daily is the optimal distribution.","Cloudy or cold? It still counts. The effect comes from green space and natural soundscape, not sunshine alone.","No park nearby? Even 5–10 minutes among street trees produces a measurable cortisol reduction — any green counts.","Combine with the awe walk if possible, but any unhurried outdoor time fulfils the requirement."],
     benefit:"A large-scale study by Hunter et al. (Frontiers in Psychology, 2019) confirmed that spending 20+ minutes in natural environments measurably lowers salivary cortisol — a direct marker of physiological stress. The dose-response relationship peaks at about 120 minutes per week; beyond that, additional benefits are marginal. Even city parks produce the effect: the key factors are visual complexity (trees, water, sky), reduced anthropogenic sound, and the opportunity for unhurried, non-goal-directed movement.",
     source:"Hunter et al., Frontiers in Psychology 2019",sourceUrl:"https://doi.org/10.3389/fpsyg.2019.00722"},
  ]},
  {week:6,title:"Movement & Resilience",theme:"Physical Foundation",color:"#8A4A2A",light:"#FBF0EB",
   tagline:"Your body is your oldest emotional regulation tool.",
   science:"Exercise is now a first-line treatment for mild-to-moderate depression in UK NICE guidelines (2022), with effect sizes matching antidepressants.",
   habits:[
    {id:"w6h1",emoji:"🏃",title:"Aerobic exercise 3x this week",micro:"20–30 min at conversational intensity",time:"3x20 min",
     howTo:["Choose any aerobic activity you can realistically do 3 times this week: brisk walking, cycling, swimming, jogging, dancing, rowing.","Target intensity: the 'talk test' — you can speak a full sentence but you would not choose to sing.","Schedule all 3 sessions in your calendar now, as fixed appointments with yourself. Decide: which 3 days, what time, what activity.","Missing one session does not break the streak — simply do the next one. Perfection is the enemy of consistency.","No gym required: a 20-minute run outside, a cycle to work, or a swim in the local pool all qualify.","If you feel resistance, reduce the target to 15 minutes rather than skip — showing up matters more than duration."],
     benefit:"Chekroud et al. (The Lancet Psychiatry, 2018), analysing 1.2 million adults, found that people who exercised had 43% fewer self-reported poor mental health days per month than those who did not — an effect size larger than differences in income, education or employment status. Exercise raises BDNF (brain-derived neurotrophic factor — the 'fertiliser' for new neurons), reduces systemic inflammation, improves sleep quality and cognitive function, and matches antidepressants for mild-to-moderate depression in head-to-head trials. Three sessions of 20–30 minutes is the minimum effective dose.",
     source:"Chekroud et al., The Lancet Psychiatry 2018",sourceUrl:"https://doi.org/10.1016/S2215-0366(18)30227-X"},
    {id:"w6h2",emoji:"🌡️",title:"End shower with 30 sec cold water",micro:"Warm first, cold last. Breathe through it.",time:"Daily",
     howTo:["Finish your normal warm shower exactly as you usually do — this is not a cold shower, it is a warm shower with a cold finish.","Turn the temperature to cold (as cold as it goes) for the final 30 seconds. Do not pre-cool gradually.","Breathe slowly and steadily through the cold — the urge to gasp passes in 5–10 seconds if you control the exhale.","Do not hold your breath — keep a slow rhythm: in through nose, out through mouth.","Increase the duration by 15 seconds per week until you reach 2–3 minutes.","Consistency beats intensity: daily 30-second cold exposure outperforms twice-weekly 3-minute immersion for mood effects."],
     benefit:"Cold water immersion acutely raises plasma noradrenaline by 200–300% and dopamine by up to 250% — effects that last 3–4 hours and produce the characteristic post-cold 'alert-calm' state that regular practitioners report. Shevchuk (Medical Hypotheses, 2008) proposed cold water as a low-cost treatment for depression, citing the activation of temperature-sensitive receptors that project directly to the locus coeruleus and the anti-inflammatory effects of cold stress adaptation. Separate data from Buijze et al. (PLOS ONE, 2016) found that a 30-day cold shower habit significantly reduced sick days and fatigue.",
     source:"Shevchuk, Medical Hypotheses 2008",sourceUrl:"https://doi.org/10.1016/j.mehy.2007.04.052"},
    {id:"w6h3",emoji:"📦",title:"Declutter one space you use daily",micro:"Desk, nightstand, or kitchen counter — pick one only",time:"30 min once",
     howTo:["Choose one specific surface — not a room, not a floor: one desk, one nightstand, one kitchen counter.","Remove everything from the surface. Clean it. Then return only what genuinely belongs there and is used daily.","Apply the 3-box rule for everything you removed: keep (daily use), donate/pass on, bin.","Set a rule: once this surface is clear, it operates on a 1-in-1-out policy.","Take a before/after photo and keep it in your phone — visual evidence that change happened is motivating.","Do not expand to other surfaces this week — one surface done completely beats five surfaces started."],
     benefit:"Clutter creates persistent background cognitive load — an unconscious demand on working memory and attention that you never fully escape while in the same space. McMains & Kastner (Journal of Neuroscience, 2011, Princeton) showed that competing visual stimuli actively suppress neural activity in regions responsible for focus and decision-making. Reducing visible clutter has measurable effects on cortisol, sustained attention and decision fatigue. The one-surface rule works because it is completable in one session, which produces the closure effect that motivates the next step.",
     source:"McMains & Kastner, J. Neuroscience 2011",sourceUrl:"https://doi.org/10.1523/JNEUROSCI.6138-10.2011"},
    {id:"w6h4",emoji:"🥦",title:"Redesign your food environment",micro:"Healthy food at eye level. Snacks hidden at the back.",time:"20 min once",
     howTo:["Open your fridge and move every healthy food — fruit, vegetables, cooked protein, yoghurt — to eye level and the front.","Move snacks, sweets, cheese and processed foods to the bottom shelf, the back, or opaque containers.","Put a bowl of whole fruit on the kitchen counter — visible food is eaten; invisible food is forgotten.","Pre-wash and chop vegetables and store them in clear containers at eye level so they are as easy to grab as a bag of crisps.","Move serving bowls off the table during meals — serving from the hob reduces portion size by about 20%.","Replace large plates with side plates for main courses — same food, 20–30% smaller portions with no conscious restriction."],
     benefit:"Wansink (Cornell Food & Brand Lab) and subsequent replications show that environmental cues — visibility, proximity, container size, plate size — drive up to 70% of eating decisions, independent of hunger, willpower or stated intention. Healthy food placed at eye level is eaten 3× more than the same food placed on a low shelf. Small friction changes (moving sweets to an opaque container in the back of a drawer) produce consistent, lasting reductions in consumption without any deliberate restraint — the decision is made by the environment, not by willpower.",
     source:"Wansink, Mindless Eating — Cornell Food & Brand Lab",sourceUrl:"https://doi.org/10.1093/jn/nxac141"},
  ]},
  {week:7,title:"Compassion & Meaning",theme:"Inner Compass",color:"#2A7A6A",light:"#EBF6F4",
   tagline:"Treating yourself with the kindness you would offer a friend is not weakness — it is neuroscience.",
   science:"Kristin Neff's self-compassion research shows it is a stronger predictor of emotional resilience than self-esteem, without its fragility.",
   habits:[
    {id:"w7h1",emoji:"💙",title:"Self-compassion practice — 5 min/day",micro:"What would I say to a friend in this situation? Say it to yourself.",time:"5 min/day",
     howTo:["When you notice self-critical thoughts, pause and write down exactly what you are saying to yourself.","Then write: 'What would I say to a close friend who told me this exact thing?' — be as warm and specific as you would actually be.","Read your compassionate response aloud, or say it internally while placing one hand gently on your chest.","The physical gesture is not optional — it activates the caregiving system (oxytocin) and changes the felt sense of what you are reading.","Do this for 5 minutes daily — or whenever a harsh self-critical voice appears.","Over 8 weeks, notice whether the gap between the critical voice and the compassionate response begins to narrow automatically."],
     benefit:"Neff & Germer (Journal of Clinical Psychology, 2013) in their landmark Mindful Self-Compassion program found that self-compassion is a stronger and more stable predictor of emotional resilience than self-esteem — without the fragility and defensive reactions that high self-esteem often produces. Unlike self-esteem (which requires success), self-compassion is available in failure, illness and difficulty. It reduces anxiety, depression and perfectionism while simultaneously increasing motivation and willingness to try again after setbacks — the opposite of the 'letting yourself off the hook' that most people fear.",
     source:"Neff & Germer, J. Clinical Psychology 2013",sourceUrl:"https://doi.org/10.1002/jclp.21923"},
    {id:"w7h2",emoji:"🌟",title:"Identify one source of meaning today",micro:"Not a goal. A moment, a person, a why.",time:"2 min/day",
     howTo:["Ask yourself each morning, in writing or in your head: 'What is one thing I could do today that would make it feel worth it?'","It does not need to be large — a conversation, a task done with care, a moment of beauty, finishing something unfinished.","Write it in a journal or phone note so you have a trace of the intention.","At the end of the day, note whether it happened and — if not — why. This is data, not failure.","Over 7 days, look back at your list. Which types of things appear repeatedly? These are your meaning signals.","Use this to start designing more of those moments deliberately into your week."],
     benefit:"Fredrickson et al. (PNAS, 2013) distinguished eudaimonic wellbeing (meaning, purpose, contribution) from hedonic wellbeing (pleasure, comfort, absence of pain) and found that eudaimonia is a stronger predictor of longevity, immune function and inflammatory response than hedonic happiness alone. People who regularly identify and act toward a sense of meaning show greater resilience under stress, faster recovery from illness and lower rates of depression — independently of how pleasant or comfortable their lives are.",
     source:"Fredrickson et al., PNAS 2013",sourceUrl:"https://doi.org/10.1073/pnas.1305419110"},
    {id:"w7h3",emoji:"🎨",title:"One hour of flow activity per week",micro:"Something absorbing, non-digital, skill-matched",time:"60 min/week",
     howTo:["Choose an activity that requires your full attention and matches your current skill level — slightly challenging, but not overwhelming.","Examples: cooking a complex recipe, playing an instrument, drawing, woodworking, solving mathematical puzzles, gardening, writing.","Block 60 minutes and remove all notifications — distractions break flow state immediately, and re-entry takes 15–20 minutes.","Start the timer. The first 15–20 minutes often feel resistant or distracted — this is normal. Push through without checking your phone.","If the task feels too easy, increase the difficulty. If it feels overwhelming, break it into smaller steps.","After the session, notice how you feel. Flow produces a characteristic post-state of calm alertness that is distinct from relaxation."],
     benefit:"Csikszentmihalyi's decades of research on flow (optimal experience characterised by total absorption, clear goals and immediate feedback) consistently show it correlates with peak positive affect, intrinsic motivation and the subjective sense of a life well-lived. Unlike hedonic pleasure, which habituates rapidly, flow experiences produce satisfaction that persists hours after the session. Regular flow experiences over 8 weeks are associated with higher life satisfaction, lower rates of anxiety and depression, and greater overall sense of personal effectiveness (GGIA Berkeley / Csikszentmihalyi, 1990).",
     source:"Csikszentmihalyi, Flow: The Psychology of Optimal Experience 1990",sourceUrl:"https://ggia.berkeley.edu/practice/find_your_flow_activities"},
    {id:"w7h4",emoji:"🌱",title:"Write your good life in 3 sentences",micro:"Not goals. What does a good day, year, life look and feel like?",time:"10 min once",
     howTo:["Find 15 quiet minutes alone with a pen and a blank page.","Write these three sentence starters and complete them honestly: 'A good day for me is...', 'A good year involves...', 'A good life means...'","Focus entirely on feelings and experiences — not achievements, income, status or possessions.","Do not edit — write the first honest answers that come. You can refine them later.","Keep the page somewhere visible: stuck to a mirror, in your wallet, or as your phone wallpaper.","Return to it when a decision feels hard — ask 'which option moves me closer to this?'"],
     benefit:"Values clarification — putting your core priorities into explicit, personal language — activates the brain's medial prefrontal cortex (the self-referential network) and is associated with reduced defensiveness, improved decision-making quality and lower regret in follow-up studies (Lyubomirsky, The How of Happiness, 2008). When values are implicit and unexamined, decisions are driven by habit, social pressure or short-term comfort. When they are written and visible, they become a filter that reduces the cognitive load of choices and produces the sustained sense of living intentionally.",
     source:"Lyubomirsky, The How of Happiness 2008",sourceUrl:"https://sonjalyubomirsky.com/books/the-how-of-happiness/"},
  ]},
  {week:8,title:"Integration & Momentum",theme:"Your Permanent Stack",color:"#4A4A8A",light:"#EEEEF8",
   tagline:"Habits do not need discipline — they need identity. You are now someone who does this.",
   science:"Identity-based habit formation (Fogg, Stanford / Clear, Atomic Habits) shows framing habits as who I am vs what I do produces far superior long-term adherence.",
   habits:[
    {id:"w8h1",emoji:"🔁",title:"Review your 8-week habit stack",micro:"Which 5 had the biggest impact? Keep those as non-negotiables.",time:"20 min once",
     howTo:["Set aside 20 minutes — ideally on the same day every week going forward as your 'weekly review' ritual.","Go through the program week by week. For each habit, rate it 1–5: how much did it change how you feel?","Identify the top 5 habits by personal impact. These become your non-negotiables — the habits you protect first.","For the others: keep if enjoyable, modify if almost working, drop entirely if genuinely incompatible with your life.","Write your final 5 non-negotiables on a card or sticky note and put it somewhere you will see every morning.","Schedule a 3-month check-in in your calendar to review again. Habits need maintenance, not perfection."],
     benefit:"Systematic reflection on habit outcomes — what worked, what changed and why — is a distinct cognitive skill that markedly improves adherence and enables the pruning of low-ROI behaviours that otherwise drain motivation without producing return. Fogg (Tiny Habits, Stanford 2019) identifies this consolidation step as the most underrated stage of habit formation: the ability to curate a sustainable personal stack is more valuable than any single habit in it.",
     source:"Fogg, Tiny Habits — Stanford Behaviour Design Lab 2019",sourceUrl:"https://tinyhabits.com"},
    {id:"w8h2",emoji:"📅",title:"Schedule your social anchor for next month",micro:"One real gathering with people who matter. In the calendar now.",time:"5 min once",
     howTo:["Open your calendar right now, on this screen, and find a date in the next 28 days.","Book one social gathering — not 'we should catch up' but a specific event with a time and place.","It can be small: a dinner, a walk, a museum, a film. Size does not matter — commitment does.","Send the invite or message before closing this screen.","Add a recurring monthly reminder so this becomes a monthly structure, not a one-off.","Once a month, make it with someone outside your regular circle — relationships need cultivation to survive life's natural drift."],
     benefit:"The Harvard Good Life study shows that people who actively invest in relationships — who deliberately create regular social structure rather than waiting for it to happen — report higher life satisfaction at every age measured and show better physical health outcomes in later life. Social anchors (a fixed monthly lunch, a weekly call) work because they shift relationship maintenance from intention to infrastructure: you do not have to decide to connect, the decision has already been made.",
     source:"Waldinger & Schulz, The Good Life 2023",sourceUrl:"https://www.goodlifeproject.com"},
    {id:"w8h3",emoji:"🧾",title:"Write your wellbeing OS — one page",micro:"Your non-negotiables, your values, your three anchors",time:"30 min once",
     howTo:["Section 1: My 5 non-negotiable daily habits (from week 8 review). Write them out as if instructions to your future self: 'Every day I do...'","Section 2: My values in 3 words (from the good life sentences in week 7). Simple nouns: 'depth, presence, creation'.","Section 3: What I do when I am struggling — coping anchor: 'When I notice I am off track, I always start with: breathe, walk, call someone.'","Section 4 (optional): My warning signs — the specific thoughts or behaviours that appear first when I am deteriorating.","Print or hand-write it. Make it physical — digital documents get forgotten.","Give a copy to someone who knows you well. Accountability is infrastructure, not weakness."],
     benefit:"Externalising personal norms and coping plans in a written, visible 'operating system' creates a form of psychological pre-commitment that significantly reduces decision fatigue and maintains behaviour during high-stress periods when motivation collapses. Baumeister & Tierney (Willpower, 2011) and implementation intention research (Gollwitzer, 1999) both show that specifying not just 'what I will do' but 'when, where and how I will respond to obstacles' dramatically improves follow-through in exactly the moments it is hardest.",
     source:"Baumeister & Tierney, Willpower 2011",sourceUrl:"https://www.amazon.com/Willpower-Rediscovering-Greatest-Human-Strength/dp/0143122231"},
    {id:"w8h4",emoji:"🎯",title:"Celebrate — genuinely, specifically",micro:"Note what changed. Tell someone. Mark the moment.",time:"10 min",
     howTo:["Write 3 specific things that are genuinely different about you compared to 8 weeks ago. Not what you did — what changed.","Tell one person whose opinion matters to you what you accomplished, why it was difficult, and what it means to you.","Do something that feels like a genuine reward — a meal you love, an experience you have been postponing, a meaningful purchase.","Set a reminder for 3 months from today: 'Review my wellbeing OS and choose the next 8 weeks.'","Take one photo or write one sentence that captures this moment and why it mattered.","The program does not end here — it restarts. You now know which levers move you. Pull them."],
     benefit:"Celebration is the most underused and most mechanistically important tool in habit formation, according to BJ Fogg (Tiny Habits, Stanford, 2019). Immediately following a completed behaviour with a genuine positive emotion creates a neurological mark — a dopamine signal that encodes 'this behaviour belongs in my identity'. Without celebration, habits remain effortful. With it, they begin to feel automatic and self-sustaining. The scale does not matter: a genuine internal 'yes!' works as well as a party. What matters is sincerity and immediacy.",
     source:"Fogg, Tiny Habits — Stanford 2019",sourceUrl:"https://tinyhabits.com"},
  ]},
];


const PROGRAM_FR = [
  {week:1,title:"Réinitialiser ta biologie",theme:"Fondations circadiennes",color:"#B85A2A",light:"#FFF3EE",
   tagline:"Synchronise ton horloge biologique — tout le reste se construit là-dessus.",
   science:"La synchronisation du rythme circadien (Saper et al., Science 2005) est le régulateur maître de l'humeur, de l'énergie et de la qualité du sommeil.",
   habits:[
    {id:"w1h1",emoji:"🌅",title:"Lumière matinale dans les 30 premières minutes",micro:"Sors 10 min — sans lunettes de soleil",time:"10 min",
     howTo:["Mets un rappel récurrent sur ton téléphone, 15 minutes après ton réveil, pour ne pas oublier les 3 premiers jours.","Sors dans les 30 minutes suivant le réveil — un balcon, un jardin, une terrasse ou le chemin jusqu'à la boulangerie.","Ne porte pas de lunettes de soleil : la lumière extérieure est 10 à 50 fois plus intense que la lumière intérieure.","Ciel dégagé : 5 à 10 minutes suffisent. Ciel couvert : vise 15 à 20 minutes. Pluie ou avant le lever du soleil : utilise une lampe de luminothérapie 10 000 lux.","Tu ne peux pas sortir ? Assieds-toi à moins d'un mètre d'une fenêtre grande ouverte orientée vers la lumière.","Associe-le à une routine existante (café dehors, promener le chien, 5 minutes d'étirements) pour que ça devienne automatique en une semaine."],
     benefit:"La lumière matinale dans les 30 minutes suivant le réveil est le zeitgeber le plus puissant — le signal biologique qui synchronise ton noyau suprachiasmatique, l'horloge maître de ton hypothalamus. Elle déclenche une montée du cortisol qui augmente la vigilance diurne et, 14 à 16 heures plus tard, initie la libération de mélatonine qui facilite l'endormissement. Les données de Huberman Lab et de Leproult & Van Cauter (Sleep, 2010) montrent que les personnes qui s'exposent régulièrement à la lumière matinale s'endorment plus vite, ont moins de réveils nocturnes et rapportent une humeur et une concentration améliorées en 7 à 10 jours — sans coût ni effets secondaires.",
     source:"Huberman Lab / Leproult & Van Cauter, Sleep 2010",sourceUrl:"https://doi.org/10.1093/sleep/33.5.645"},
    {id:"w1h2",emoji:"🛏️",title:"Heure de réveil fixe — 7 jours/7",micro:"Le même horaire le week-end. Non négociable.",time:"0 effort",
     howTo:["Choisis une heure de réveil que tu peux tenir chaque jour — week-ends, vacances et lendemains de soirée inclus.","Un seul réveil, pas de snooze. Place le téléphone de l'autre côté de la pièce pour être obligé de te lever.","Trop fatigué(e) ? Couche-toi 30 minutes plus tôt ce soir plutôt que de faire la grasse matinée demain.","Après une mauvaise nuit, accepte la fatigue et tiens l'horaire — la pression de sommeil se reconstruit en 24 à 48 heures.","Les week-ends sont où l'habitude se fait ou se défait : une grasse matinée de 90 minutes crée un mini-décalage horaire qui coûte toute la semaine.","Tiens 14 jours complets avant de juger l'effet — les 3 premiers matins sont les plus durs, ensuite ça devient automatique."],
     benefit:"Phillips et al. (Science Advances, 2017) ont suivi des étudiants de Harvard et découvert que la régularité des horaires de sommeil était un meilleur prédicteur de la performance académique et de l'humeur que le nombre total d'heures dormies. Une heure de réveil fixe ancre tous les processus circadiens en aval : les hormones de la faim, les cycles de testostérone et de cortisol, la température corporelle et les fenêtres de performance cognitive optimale.",
     source:"Phillips et al., Science Advances 2017",sourceUrl:"https://doi.org/10.1126/sciadv.1601666"},
    {id:"w1h3",emoji:"📵",title:"Téléphone hors de la chambre",micro:"Achète un réveil à 5€ ce soir",time:"5 min installation",
     howTo:["Commande ou achète un réveil basique ce soir — n'importe quelle pharmacie ou supermarché en vend pour moins de 10€.","Choisis un endroit fixe pour charger ton téléphone hors de la chambre : couloir, plan de travail cuisine, salon.","Active le mode Ne pas déranger de 21h à 7h — autorise les appels des 'favoris' pour les vraies urgences.","Préviens ta famille et tes proches la première semaine pour qu'ils ne s'attendent pas à des réponses tardives.","Si l'anxiété monte les 3 premières nuits, éloigne le téléphone encore plus plutôt que de le rapprocher.","Remplace le scroll du soir par un livre, un carnet ou une courte pratique de respiration — le vide doit être rempli, pas seulement créé."],
     benefit:"Kushlev & Dunn (Computers in Human Behavior, 2015) ont montré que réduire simplement l'usage du téléphone produisait des baisses mesurables de stress et une meilleure concentration en l'espace d'une semaine. Dormir avec le téléphone dans la chambre est corrélé à un sommeil plus court, plus de réveils nocturnes et un réveil plus difficile. Le supprimer physiquement élimine le scroll du soir, la vérification nocturne et le pic de cortisol matinal provoqué par les mails et réseaux sociaux avant même de s'être levé.",
     source:"Kushlev & Dunn, Computers in Human Behavior 2015",sourceUrl:"https://doi.org/10.1016/j.chb.2014.09.044"},
    {id:"w1h4",emoji:"🔵",title:"Filtre lumière bleue automatique à 19h",micro:"Night Shift programmé — une fois réglé, oublié à jamais",time:"2 min installation",
     howTo:["iPhone : Réglages → Affichage et luminosité → Night Shift → Programmé → de 19h à 7h, curseur sur 'Plus chaud'.","Mac : Préférences système → Moniteurs → Night Shift → Programmé → personnalisé de 19h à 7h.","Android : Paramètres → Affichage → Mode nuit / Confort visuel → Programmer → à partir du coucher du soleil.","Windows : Paramètres → Système → Affichage → Éclairage nocturne → Programmer → activer de 19h.","Pour un effet renforcé : installe f.lux sur ordinateur, ou porte des lunettes orange bloquant la lumière bleue après 20h.","Diminue les lumières au plafond le soir — utilise des lampes, bougies ou LED chauds (2700K ou moins)."],
     benefit:"Chang et al. (PNAS, 2015) ont comparé la lecture sur liseuse rétroéclairée versus livre imprimé avant de dormir : la lumière bleue a supprimé la mélatonine de plus de 50%, retardé l'endormissement de 10 minutes en moyenne, réduit le sommeil paradoxal et rendu les participants plus groggy le lendemain malgré un nombre d'heures identique. Les longueurs d'onde bleues (460–480 nm) sont exactement le signal que ton cerveau utilise pour détecter la lumière du jour. Les filtrer supprime ce faux signal dès la première nuit.",
     source:"Chang et al., PNAS 2015",sourceUrl:"https://doi.org/10.1073/pnas.1418490112"},
  ]},
  {week:2,title:"L'éveil du corps",theme:"Bien-être incarné",color:"#A06B10",light:"#FFF8ED",
   tagline:"Hydrate, respire, bouge — ton corps parle avant ton esprit.",
   science:"Les recherches sur la cognition incarnée (Niedenthal, Science 2007) montrent que les états corporels façonnent directement l'expérience émotionnelle et cognitive.",
   habits:[
    {id:"w2h1",emoji:"💧",title:"500 ml d'eau dès le réveil",micro:"Bouteille prête sur la table de nuit la veille",time:"2 min/jour",
     howTo:["Remplis un verre ou une bouteille de 500 ml chaque soir et pose-le sur ta table de nuit.","Bois-le entièrement dans les 10 premières minutes du réveil, avant le café, le thé, la nourriture ou le téléphone.","Ajoute une pincée de sel de mer, un filet de citron ou un mélange d'électrolytes pour améliorer l'absorption.","L'eau à température ambiante est absorbée plus vite que l'eau froide — évite les glaçons au réveil.","En déplacement ? Utilise une bouteille que tu as déjà — la constance compte plus que le récipient.","Associe-le à une autre action matinale (poser les pieds sur le sol froid, ouvrir les rideaux) pour ancrer la routine."],
     benefit:"Ganio et al. (British Journal of Nutrition, 2011) ont montré qu'une déshydratation légère de 1 à 2 % — normale après une nuit sans liquide — altère la mémoire à court terme, la concentration, l'humeur et augmente la fatigue perçue en 30 minutes. Ton corps perd 300 à 500 ml durant la nuit par la respiration et la transpiration. Se réhydrater immédiatement restaure le volume plasmatique, soutient la circulation cérébrale et offre un coup de boost en énergie fiable et peu coûteux.",
     source:"Ganio et al., British Journal of Nutrition 2011",sourceUrl:"https://doi.org/10.1017/S0007114511002005"},
    {id:"w2h2",emoji:"🌬️",title:"Respiration 4-7-8 — 4 cycles",micro:"Inspire 4s · retiens 7s · expire 8s — avant tout écran",time:"2 min/jour",
     howTo:["Assieds-toi ou allonge-toi avec le dos droit. Place le bout de ta langue derrière les incisives supérieures.","Expire complètement par la bouche avec un son soufflé.","Ferme la bouche, inspire doucement par le nez pendant 4 secondes.","Retiens ta respiration complètement pendant 7 secondes.","Expire audiblement par la bouche pendant 8 secondes — deux fois plus long que l'inspire.","Répète pour 4 cycles complets. Fais-le au réveil et avant tout moment de stress."],
     benefit:"Une respiration lente avec une expiration prolongée active le nerf vague et bascule le système nerveux autonome de la dominance sympathique (combat-fuite) vers la dominance parasympathique (repos-digestion) en 60 secondes. Brown & Gerbarg (J. Alternative & Complementary Medicine, 2005) et des essais cliniques ultérieurs montrent des baisses mesurables de cortisol, de fréquence cardiaque et d'anxiété après une seule séance.",
     source:"Brown & Gerbarg, J. Alternative & Complementary Medicine 2005",sourceUrl:"https://doi.org/10.1089/acm.2005.11.189"},
    {id:"w2h3",emoji:"☕",title:"Retarder le premier café de 90 minutes",micro:"Le cortisol pic à l'heure 1 — la caféine est alors gaspillée",time:"0 effort",
     howTo:["Programme un rappel 'café autorisé' exactement 90 minutes après ton réveil.","Remplis les 90 premières minutes avec de l'eau, de la lumière, de la respiration et du mouvement.","Décaféiné, thé de plantes ou eau chaude au citron sont autorisés pendant l'attente.","Attends-toi à un léger mal de tête les 2 à 4 premiers jours si tu as une forte habitude de café — c'est la recalibration de l'adénosine.","Maintiens la caféine totale sous 400 mg/jour et arrête toute caféine au moins 8 heures avant ton coucher.","Préfère le café filtre ou un léger expresso — associe-le à une petite collation protéinée si tu te sens nerveux(se)."],
     benefit:"Le cortisol suit une montée naturelle dans les 45 à 60 premières minutes après le réveil — la 'réponse d'éveil cortisol' — qui te rend naturellement alerte. Boire du café durant cette fenêtre atténue cet effet et développe une tolérance à la caféine plus rapidement. Lovallo et al. (Psychosomatic Medicine, 2006) ont montré qu'un timing stratégique de la caféine produit une vigilance subjective plus forte avec une consommation totale plus faible et moins de coup de fatigue en après-midi.",
     source:"Lovallo et al., Psychosomatic Medicine 2006",sourceUrl:"https://doi.org/10.1097/01.psy.0000204926.97596.2a"},
    {id:"w2h4",emoji:"🚶",title:"20 min de marche — une ancre quotidienne",micro:"Remplace un segment de trajet définitivement",time:"20 min/jour",
     howTo:["Choisis un trajet existant et modifie-le définitivement : descends un arrêt plus tôt, gare-toi 10 minutes plus loin.","Pas de trajet ? Marche immédiatement après le petit-déjeuner ou après le déjeuner.","Laisse ton téléphone dans ta poche — cette marche est un temps de pensée, pas un temps de contenu.","Choisis le parcours le plus vert ou le plus ouvert disponible — la nature amplifie l'effet.","Marche à une allure confortable. Ce n'est pas de l'exercice — c'est de l'hygiène de mouvement.","Pluie ou froid : mets la bonne veste et vas-y quand même. Rater la marche à cause de la météo, c'est ainsi que l'habitude meurt."],
     benefit:"La marche quotidienne non intentionnelle est l'habitude de longévité la plus constante dans les cinq Zones Bleues (Buettner, National Geographic 2005). Elle améliore la santé cardiovasculaire, réduit la mortalité toutes causes de 20 à 30%, abaisse la glycémie et est fortement protectrice contre la dépression. Contrairement à l'exercice structuré, la marche ne nécessite aucune récupération, ne produit aucun risque de blessure, et se cumule sans effort sur des décennies.",
     source:"Buettner, Blue Zones — National Geographic 2005",sourceUrl:"https://www.bluezones.com"},
  ]},
  {week:3,title:"Architecture de la gratitude",theme:"Émotions positives",color:"#5C7A5C",light:"#EEF6EE",
   tagline:"Recâble ta fréquence émotionnelle par défaut — de façon spécifique, pas générique.",
   science:"Les pratiques de gratitude du GGIA Berkeley sont parmi les interventions les plus répliquées en psychologie positive, avec des tailles d'effet rivales de la TCC pour la dépression légère.",
   habits:[
    {id:"w3h1",emoji:"✍️",title:"3 gratitudes spécifiques chaque soir",micro:"Carnet papier — va dans le spécifique, pas le générique",time:"5 min/jour",
     howTo:["Chaque soir, écris trois choses qui se sont bien passées aujourd'hui et explique brièvement pourquoi.","Utilise un carnet papier — pas ton téléphone — et garde-le sur ta table de nuit.","Les entrées peuvent être petites ou grandes : 'j'ai réussi à sortir du lit', 'mon collègue a ri de ma blague'.","Ajoute toujours le 'pourquoi' : 'le barista se souvient de ma commande — je me suis senti(e) reconnu(e) dans cette nouvelle ville'.","Fais-le à la même heure chaque soir, idéalement 10 à 30 minutes avant de dormir.","Si tu rates un jour, ne rattrape pas — recommence simplement le lendemain."],
     benefit:"L'exercice des 'Trois bonnes choses' est l'une des interventions les plus répliquées en psychologie positive. Dans l'étude phare de Seligman (2005) et Emmons & McCullough (2003), les participants qui l'ont pratiqué pendant une semaine ont rapporté un bonheur plus élevé et moins de symptômes dépressifs — des effets encore mesurables 6 mois plus tard. L'écriture engage la mémoire épisodique plus profondément que la pensée et entraîne le cerveau à scanner les événements positifs tout au long de la journée.",
     source:"Emmons & McCullough, J. Personality & Social Psychology 2003",sourceUrl:"https://doi.org/10.1037/0022-3514.84.2.377"},
    {id:"w3h2",emoji:"💌",title:"Écrire une lettre de gratitude cette semaine",micro:"À n'importe qui, vivant ou non. Tu n'es pas obligé(e) de l'envoyer.",time:"20 min une fois",
     howTo:["Choisis une personne qui a eu un impact significatif sur ta vie et n'a jamais été vraiment remerciée.","Écris une lettre complète (300+ mots) : décris précisément ce qu'elle a fait, comment ça t'a affecté(e) et où tu en es aujourd'hui.","Utilise des détails concrets — nomme le moment, les mots, la sensation.","Tu n'es pas obligé(e) de l'envoyer. Mais si tu peux la lire à voix haute en personne, l'effet est mesuralement plus grand.","Si la personne est décédée, écris quand même — le bénéfice vient de l'auteur, pas du destinataire.","Garde une copie. Relis-la la prochaine fois que tu te sens à plat."],
     benefit:"Dans Seligman et al. (American Psychologist, 2005), la lettre de gratitude a produit la plus grande et plus durable augmentation du bonheur de toutes les interventions de psychologie positive testées — plus que la méditation, la pleine conscience ou les trois bonnes choses. Les participants qui ont remis la lettre en personne montraient encore des gains de bonheur un mois plus tard.",
     source:"Seligman et al., American Psychologist 2005",sourceUrl:"https://doi.org/10.1037/0003-066X.60.5.410"},
    {id:"w3h3",emoji:"🌸",title:"Savourer un moment quotidien — les yeux ouverts",micro:"Pause de 30 secondes. Remarque texture, son, température.",time:"30 sec/jour",
     howTo:["Choisis un moment qui existe déjà dans ta journée — la première gorgée de café, un repas, une promenade.","Quand ce moment arrive, arrête-toi. Pose ton téléphone. Prends une respiration lente.","Remarque trois détails sensoriels : un son, une texture, une température ou une odeur.","Dis intérieurement : 'Je suis ici, et c'est bien.' Reste dans le moment 20 à 30 secondes.","Reviens au même moment chaque jour pour ancrer l'habitude — la nouveauté n'est pas le but, l'attention l'est.","Pas d'applis, pas de minuteries, pas de photos : savourer à travers un écran n'est pas savourer."],
     benefit:"Savourer — l'amplification et la prolongation délibérées d'une expérience positive — est l'une des compétences de bonheur les plus efficaces et les moins pratiquées. Bryant & Veroff (2007) montrent qu'elle stimule indépendamment la satisfaction de vie sur 4 semaines et interrompt directement l'adaptation hédonique. Juste 20 à 30 secondes d'attention complète convertit un événement ordinaire en un souvenir positif stocké.",
     source:"Bryant & Veroff, Savoring: A New Model of Positive Experience 2007",sourceUrl:"https://greatergood.berkeley.edu/topic/savoring"},
    {id:"w3h4",emoji:"🍽️",title:"Un repas sans écran par jour, assis(e)",micro:"Commence par le déjeuner. Téléphone dans un tiroir.",time:"Quotidien",
     howTo:["Commence par le repas le plus facile — généralement le déjeuner, puis un dîner, puis le petit-déjeuner.","Téléphone retourné dans un tiroir, un sac ou une autre pièce — pas à côté de l'assiette.","Assieds-toi à table. Manger debout ou à ton bureau ne compte pas.","Mâche chaque bouchée un peu plus que d'habitude et pose les couverts entre les bouchées.","Remarque 3 choses sur la nourriture : température, texture et une note de saveur.","Si tu manges avec d'autres, utilise le temps pour une vraie conversation — pas de télé en fond sonore."],
     benefit:"La pleine conscience alimentaire réduit les portions de 20 à 30% sans effort conscient, améliore la digestion et renforce les signaux naturels de faim-satiété que les distractions suppriment (Allirot et al., British Journal of Nutrition, 2013). Manger en scrollant te déconnecte du feedback intéroceptif — c'est pourquoi il est si facile de finir un paquet de chips sans s'en rendre compte.",
     source:"Allirot et al., British Journal of Nutrition 2013",sourceUrl:"https://doi.org/10.1017/S0007114512004540"},
  ]},
  {week:4,title:"Vitalité sociale",theme:"Richesse relationnelle",color:"#2A6B8A",light:"#EBF5FA",
   tagline:"Le prédicteur le plus puissant d'une vie longue et heureuse est la qualité de tes relations.",
   science:"La Harvard Study of Adult Development (80 ans, 724 hommes) a montré que la qualité des relations dépasse le revenu, le QI, les gènes et la classe sociale comme prédicteur du bien-être.",
   habits:[
    {id:"w4h1",emoji:"🤝",title:"Une vraie conversation chaque jour",micro:"Appel, pas SMS. Sans ordre du jour. Écoute plus que tu ne parles.",time:"15 min/jour",
     howTo:["Choisis la voix ou la vidéo plutôt que le texte — le ton de voix transporte 40% des informations émotionnelles.","Commence par une vraie question : 'Comment tu vas vraiment ?' ou 'Qu'est-ce qui occupe ton esprit cette semaine ?'","Écoute sans préparer ta prochaine phrase. Pose une question de suivi avant de partager ton propre avis.","Vise au moins une personne par jour — famille, ami(e), collègue, voisin(e). Fais tourner la liste.","15 minutes suffisent. La qualité prime sur la durée.","Si la journée est trop chargée : envoie un message vocal de 30 secondes avec une vraie question."],
     benefit:"La Harvard Study of Adult Development — la plus longue étude longitudinale sur le bien-être humain (80+ ans, 724 hommes) — conclut que la qualité des relations est le prédicteur le plus fort de santé et de bonheur à 80 ans (Waldinger & Schulz, The Good Life, 2023). Même un contact bref et régulier active la libération d'ocytocine, tamponne le cortisol et soutient la fonction immunitaire.",
     source:"Waldinger & Schulz, The Good Life 2023",sourceUrl:"https://www.goodlifeproject.com"},
    {id:"w4h2",emoji:"🎁",title:"Un acte de gentillesse par jour",micro:"Spécifique, spontané, dirigé vers une personne",time:"Quotidien",
     howTo:["Rends-le spécifique et personnel — une action directe pour une personne précise que tu peux voir.","Exemples : préparer le café d'un(e) collègue, écrire 'j'ai pensé à toi', retenir l'ascenseur, laisser passer la voiture derrière toi.","Fais varier le destinataire sur la semaine — ne donne pas toujours à la même personne.","Fais-le silencieusement si possible — la gentillesse anonyme active les circuits de récompense plus clairement.","Remarque comment tu te sens dans les 10 minutes qui suivent — c'est la signature dopamine-ocytocine que tu entraînes.","Une fois l'habitude quotidienne ancrée, choisis un 'grand' acte par mois : don, bénévolat, aide pratique."],
     benefit:"Accomplir des actes de gentillesse augmente de façon constante la satisfaction de vie, l'estime de soi et l'humeur. Dunn, Aknin & Norton (Science, 2008) ont démontré que dépenser pour les autres produit plus de bonheur que dépenser la même somme pour soi-même — un effet répliqué dans des pays à niveaux de revenus très différents.",
     source:"Dunn, Aknin & Norton, Science 2008",sourceUrl:"https://doi.org/10.1126/science.1150952"},
    {id:"w4h3",emoji:"📞",title:"Remplace une session de scroll par un vrai appel",micro:"Quelqu'un que tu voulais rappeler depuis un moment",time:"Quotidien",
     howTo:["Identifie ton moment de scroll habituel : trajet, pause déjeuner, avant de dormir.","Prends un de ces créneaux et remplace-le une fois par jour par un appel téléphonique.","Garde une liste tournante de 5 personnes à qui tu dois un appel.","Phrase d'ouverture : 'Je pensais à toi — tu as 5 minutes ?' fonctionne à 95%.","5 minutes comptent. Même des appels courts et inattendus produisent des gains de bien-être significatifs.","S'ils ne répondent pas, laisse un message vocal chaleureux — l'habitude, c'est l'acte de tendre la main, pas le décroché."],
     benefit:"Epley & Schroeder (Journal of Experimental Psychology, 2014) ont montré que les gens sous-estiment systématiquement combien eux-mêmes et l'autre personne apprécieront un contact inattendu. Quand les participants ont finalement passé l'appel, l'humeur, la connexion et le sentiment de sens ont augmenté bien plus qu'ils ne l'avaient prévu. Échanger 10 minutes de scroll contre 10 minutes de voix remplace une activité qui épuise la dopamine par une activité qui produit de l'ocytocine.",
     source:"Epley & Schroeder, J. Experimental Psychology 2014",sourceUrl:"https://doi.org/10.1037/xge0000030"},
    {id:"w4h4",emoji:"🫂",title:"Exprime ta reconnaissance à quelqu'un aujourd'hui",micro:"Spécifique, sincère, à voix haute ou par écrit",time:"2 min/jour",
     howTo:["Choisis une personne dans ta journée. Dis — ou écris — exactement ce que tu apprécies et pourquoi.","Spécifique, pas générique : 'J'ai apprécié comment tu as géré cette réunion — ton calme m'a permis de rester concentré(e).'","Le contact visuel amplifie l'effet pour les deux côtés. Fais-le en personne quand tu peux.","Pour les messages écrits, utilise une vraie phrase, pas un emoji.","Ça fonctionne aussi avec des inconnus : 'Vous avez rendu ça vraiment agréable, merci' à un caissier ou un chauffeur.","Une fois par semaine, fais-le pour quelqu'un que tu vois trop souvent pour le remercier normalement."],
     benefit:"Exprimer de la reconnaissance renforce les liens relationnels et active simultanément le système de récompense du donneur aussi fortement que celui du receveur. Contrairement au merci générique, la reconnaissance spécifique qui nomme le comportement et son effet est traitée comme un récit social, s'encode plus profondément et est mémorisée des mois plus tard par les deux parties (GGIA Berkeley).",
     source:"GGIA Berkeley — Expressing Gratitude practice",sourceUrl:"https://ggia.berkeley.edu/practice/gratitude_letter"},
  ]},
  {week:5,title:"Attention et émerveillement",theme:"Conscience & Émerveillement",color:"#6B4A9A",light:"#F3F0FA",
   tagline:"Là où va l'attention, le bien-être suit.",
   science:"La MBSR est l'une des interventions psychologiques les plus étudiées, avec des changements cérébraux structurels mesurables après seulement 8 semaines.",
   habits:[
    {id:"w5h1",emoji:"🧘",title:"10 minutes de méditation — chaque matin",micro:"Headspace · Petit Bambou · ou suis simplement ta respiration",time:"10 min/jour",
     howTo:["Fais-le avant de consulter tes mails ou réseaux sociaux — que ce soit le premier acte intentionnel de la journée.","Utilise une appli guidée les 2 premières semaines : Headspace, Petit Bambou ou Waking Up.","Assieds-toi confortablement sur une chaise ou au sol, dos droit.","Ferme les yeux, règle un minuteur sur 10 minutes et concentre-toi sur la sensation physique de ta respiration.","Quand ton esprit s'égare (il le fera — ce n'est pas un échec, c'est l'exercice), remarque simplement la pensée et reviens doucement.","Le progrès n'est pas moins de pensées — c'est une récupération plus rapide."],
     benefit:"Après 8 semaines de méditation quotidienne, Holzel et al. (Psychiatry Research: Neuroimaging, 2011, Harvard/MGH) ont mesuré des changements cérébraux structurels : augmentation de la densité de matière grise dans le cortex préfrontal et l'hippocampe, et réduction du volume de l'amygdale. Une méta-analyse de 2014 dans JAMA Internal Medicine (47 essais) a trouvé une réduction de 38% des symptômes d'anxiété.",
     source:"Holzel et al., Psychiatry Research: Neuroimaging 2011",sourceUrl:"https://doi.org/10.1016/j.pscychresns.2010.08.006"},
    {id:"w5h2",emoji:"😮",title:"Marche de l'émerveillement — une fois par semaine",micro:"Marche lentement. Lève les yeux. Remarque l'échelle et la beauté.",time:"20 min/semaine",
     howTo:["Marche seul(e) — l'émerveillement est plus difficile en conversation et plus facile dans le silence.","Cherche des choses qui semblent vastes, belles ou complexes : ciel, eau, architecture, arbres.","Marche lentement — arrête-toi si quelque chose te touche.","Prends une brève photo d'une chose qui t'a vraiment ému(e) — pas pour partager, mais pour ancrer le souvenir.","20 minutes est la dose minimale efficace selon le protocole de UC Berkeley.","Ne remplis pas la marche de podcasts ou d'appels — le silence est l'ingrédient actif."],
     benefit:"Sturm et al. (Emotion, 2022, Keltner Lab, UC Berkeley) ont mené un essai contrôlé randomisé de 8 semaines. Par rapport au groupe contrôle, les marcheurs de l'émerveillement ont montré des augmentations significativement plus grandes des émotions positives, des diminutions du stress quotidien et des sentiments prosociaux accrus. L'émerveillement est l'une des rares émotions positives qui rétrécit activement l'ego et élargit la préoccupation pour les autres.",
     source:"Sturm et al., Emotion 2022 — Keltner Lab, UC Berkeley",sourceUrl:"https://doi.org/10.1037/emo0000876"},
    {id:"w5h3",emoji:"🔕",title:"Une heure sans numérique par jour",micro:"La même heure chaque jour — la constance compte plus que la durée",time:"60 min/jour",
     howTo:["Choisis la même heure chaque jour — matin ou soir, pas aléatoire.","Mets ton téléphone dans un tiroir ou une autre pièce.","Remplace le temps par une activité physique non numérique : lecture, cuisine, marche, journal, instrument, étirements.","Dis aux personnes qui ont besoin de le savoir que tu es hors ligne de X à Y.","Commence par 30 minutes si 60 semble impossible, mais engage-toi sur le même créneau chaque jour.","Remarque ce qui émerge dans le silence — un léger inconfort en semaine 1 est normal ; le vrai soulagement arrive en semaine 2."],
     benefit:"Des périodes de détox numérique planifiées et prévisibles réduisent mesurément la charge cognitive, l'anxiété et la pression de disponibilité. Newport (Deep Work, 2016) et Kushlev & Dunn (2015) montrent tous deux que la frontière prévisible compte plus que la durée totale. Une fenêtre de 60 minutes est aussi le minimum pour entrer en focus profond, associé aux niveaux de bien-être subjectif les plus élevés au travail.",
     source:"Newport, Deep Work 2016 / Kushlev & Dunn 2015",sourceUrl:"https://doi.org/10.1016/j.chb.2014.09.044"},
    {id:"w5h4",emoji:"🌿",title:"20 minutes dans la nature aujourd'hui",micro:"Parc, jardin, bord de l'eau — pas un fond d'écran",time:"20 min/jour",
     howTo:["Trouve l'espace vert le plus proche — un parc, un jardin, un bord de rivière ou un chemin forestier.","Laisse les écouteurs de côté au moins une fois par semaine.","Assieds-toi ou marche lentement — la dose-réponse plafonne à 120 minutes par semaine.","Temps nuageux ou froid ? Ça compte quand même.","Pas de parc à proximité ? Même 5 à 10 minutes parmi des arbres de rue produit une réduction mesurable du cortisol.","Combine avec la marche de l'émerveillement si possible."],
     benefit:"Une grande étude de Hunter et al. (Frontiers in Psychology, 2019) a confirmé que passer 20+ minutes dans des environnements naturels réduit mesurément le cortisol salivaire — un marqueur direct du stress physiologique. La relation dose-réponse culmine à environ 120 minutes par semaine. Même les parcs urbains produisent l'effet : les facteurs clés sont la complexité visuelle, le son naturel réduit et l'opportunité de mouvement non dirigé.",
     source:"Hunter et al., Frontiers in Psychology 2019",sourceUrl:"https://doi.org/10.3389/fpsyg.2019.00722"},
  ]},
  {week:6,title:"Mouvement et résilience",theme:"Fondation physique",color:"#8A4A2A",light:"#FBF0EB",
   tagline:"Ton corps est ton outil de régulation émotionnelle le plus ancien.",
   science:"L'exercice est désormais un traitement de première ligne pour la dépression légère à modérée dans les recommandations NICE du Royaume-Uni (2022), avec des tailles d'effet comparables aux antidépresseurs.",
   habits:[
    {id:"w6h1",emoji:"🏃",title:"Exercice aérobique 3 fois cette semaine",micro:"20–30 min à intensité conversationnelle",time:"3×20 min",
     howTo:["Choisis n'importe quelle activité aérobique que tu peux réellement faire 3 fois cette semaine.","Intensité cible : le 'test de la conversation' — tu peux dire une phrase entière mais tu ne choisirais pas de chanter.","Programme les 3 séances dans ton agenda maintenant, comme des rendez-vous fixes.","Rater une séance ne casse pas la série — fais simplement la suivante.","Pas de salle nécessaire : un jogging dehors, un vélo au travail ou une nage comptent.","Si tu ressens de la résistance, réduis l'objectif à 15 minutes plutôt que de sauter."],
     benefit:"Chekroud et al. (The Lancet Psychiatry, 2018), analysant 1,2 million d'adultes, ont trouvé que les personnes qui faisaient de l'exercice avaient 43% moins de mauvaises journées de santé mentale par mois. L'exercice augmente le BDNF, réduit l'inflammation systémique, améliore la qualité du sommeil et rivalise avec les antidépresseurs pour la dépression légère à modérée.",
     source:"Chekroud et al., The Lancet Psychiatry 2018",sourceUrl:"https://doi.org/10.1016/S2215-0366(18)30227-X"},
    {id:"w6h2",emoji:"🌡️",title:"Finir ta douche avec 30 sec d'eau froide",micro:"Chaud d'abord, froid en dernier. Respire à travers.",time:"Quotidien",
     howTo:["Finis ta douche chaude normale exactement comme d'habitude.","Tourne la température au froid (aussi froid que possible) pendant les 30 dernières secondes.","Respire lentement et régulièrement — l'envie de haleter passe en 5 à 10 secondes si tu contrôles l'expiration.","Ne retiens pas ta respiration — garde un rythme lent : inspire par le nez, expire par la bouche.","Augmente la durée de 15 secondes par semaine jusqu'à atteindre 2 à 3 minutes.","La constance prime sur l'intensité : 30 secondes quotidiennes surpassent 3 minutes deux fois par semaine pour les effets sur l'humeur."],
     benefit:"L'immersion en eau froide augmente aiguement la noradrénaline plasmatique de 200 à 300% et la dopamine jusqu'à 250% — des effets qui durent 3 à 4 heures. Shevchuk (Medical Hypotheses, 2008) a proposé l'eau froide comme traitement à faible coût de la dépression. Buijze et al. (PLOS ONE, 2016) ont constaté qu'une habitude de douche froide sur 30 jours réduisait significativement les jours de maladie et la fatigue.",
     source:"Shevchuk, Medical Hypotheses 2008",sourceUrl:"https://doi.org/10.1016/j.mehy.2007.04.052"},
    {id:"w6h3",emoji:"📦",title:"Désencombrer un espace que tu utilises chaque jour",micro:"Bureau, table de nuit ou plan de travail — un seul",time:"30 min une fois",
     howTo:["Choisis une surface précise — pas une pièce, pas un étage : un bureau, une table de nuit, un plan de travail.","Retire tout de la surface. Nettoie-la. Puis remets uniquement ce qui appartient vraiment là et est utilisé chaque jour.","Applique la règle des 3 boîtes pour tout ce que tu as retiré : garder, donner, jeter.","Établis une règle : une fois cette surface dégagée, elle fonctionne en mode 1 entrée pour 1 sortie.","Prends une photo avant/après et garde-la dans ton téléphone.","N'étends pas à d'autres surfaces cette semaine — une surface faite complètement vaut mieux que cinq commencées."],
     benefit:"Le désordre crée une charge cognitive de fond persistante. McMains & Kastner (Journal of Neuroscience, 2011, Princeton) ont montré que des stimuli visuels concurrents suppriment activement l'activité neuronale dans les régions responsables de la concentration. Réduire le désordre visible a des effets mesurables sur le cortisol, l'attention soutenue et la fatigue décisionnelle.",
     source:"McMains & Kastner, J. Neuroscience 2011",sourceUrl:"https://doi.org/10.1523/JNEUROSCI.6138-10.2011"},
    {id:"w6h4",emoji:"🥦",title:"Réaménage ton environnement alimentaire",micro:"Aliments sains à hauteur des yeux. Snacks cachés au fond.",time:"20 min une fois",
     howTo:["Ouvre ton frigo et déplace tous les aliments sains — fruits, légumes, protéines cuites, yaourts — à hauteur des yeux et au devant.","Déplace les snacks, sucreries, fromages et aliments transformés sur l'étagère du bas, au fond, ou dans des contenants opaques.","Pose un bol de fruits entiers sur le plan de travail — les aliments visibles sont mangés.","Pré-lave et coupe les légumes et stocke-les dans des contenants transparents à hauteur des yeux.","Éloigne les plats de service de la table pendant les repas — servir depuis la cuisinière réduit les portions d'environ 20%.","Remplace les grandes assiettes par des assiettes à dessert pour les plats principaux."],
     benefit:"Wansink (Cornell Food & Brand Lab) et des réplications ultérieures montrent que les signaux environnementaux — visibilité, proximité, taille des contenants, taille des assiettes — influencent jusqu'à 70% des décisions alimentaires, indépendamment de la faim ou de la volonté. Les aliments sains placés à hauteur des yeux sont mangés 3× plus que les mêmes aliments sur une étagère basse.",
     source:"Wansink, Mindless Eating — Cornell Food & Brand Lab",sourceUrl:"https://doi.org/10.1093/jn/nxac141"},
  ]},
  {week:7,title:"Compassion et sens",theme:"Boussole intérieure",color:"#2A7A6A",light:"#EBF6F4",
   tagline:"Te traiter avec la bienveillance que tu offrirais à un(e) ami(e) n'est pas une faiblesse — c'est de la neuroscience.",
   science:"Les recherches de Kristin Neff sur l'auto-compassion montrent que c'est un prédicteur plus fort de la résilience émotionnelle que l'estime de soi, sans sa fragilité.",
   habits:[
    {id:"w7h1",emoji:"💙",title:"Pratique d'auto-compassion — 5 min/jour",micro:"Que dirais-je à un(e) ami(e) dans cette situation ? Dis-le-toi.",time:"5 min/jour",
     howTo:["Quand tu remarques des pensées autocritiques, fais une pause et écris exactement ce que tu te dis.","Puis écris : 'Que dirais-je à un(e) proche qui me dirait exactement ça ?' — sois aussi chaleureux(se) que tu le serais vraiment.","Lis ta réponse compatissante à voix haute, ou dis-la intérieurement en posant doucement une main sur ta poitrine.","Le geste physique n'est pas optionnel — il active le système de soin (ocytocine) et change la sensation de ce que tu lis.","Fais-le 5 minutes par jour — ou chaque fois qu'une voix autocritique dure apparaît.","Sur 8 semaines, remarque si l'écart entre la voix critique et la réponse compatissante commence à se réduire automatiquement."],
     benefit:"Neff & Germer (Journal of Clinical Psychology, 2013) ont trouvé que l'auto-compassion est un prédicteur plus fort et plus stable de la résilience émotionnelle que l'estime de soi — sans la fragilité que l'estime de soi élevée produit souvent. Contrairement à l'estime de soi (qui nécessite le succès), l'auto-compassion est disponible dans l'échec, la maladie et la difficulté. Elle réduit l'anxiété, la dépression et le perfectionnisme tout en augmentant la motivation.",
     source:"Neff & Germer, J. Clinical Psychology 2013",sourceUrl:"https://doi.org/10.1002/jclp.21923"},
    {id:"w7h2",emoji:"🌟",title:"Identifie une source de sens aujourd'hui",micro:"Pas un objectif. Un moment, une personne, un pourquoi.",time:"2 min/jour",
     howTo:["Demande-toi chaque matin, par écrit ou dans ta tête : 'Quelle est une chose que je pourrais faire aujourd'hui qui rendrait la journée valable ?'","Ça ne doit pas être grand — une conversation, une tâche faite avec soin, un moment de beauté.","Écris-le dans un journal ou des notes de téléphone pour avoir une trace de l'intention.","En fin de journée, note si c'est arrivé et — si non — pourquoi. C'est de la data, pas un échec.","Sur 7 jours, regarde en arrière ta liste. Quels types de choses apparaissent répétitivement ? Ce sont tes signaux de sens.","Utilise ça pour commencer à concevoir plus délibérément ces moments dans ta semaine."],
     benefit:"Fredrickson et al. (PNAS, 2013) ont distingué le bien-être eudaimonique (sens, but, contribution) du bien-être hédonique (plaisir, confort) et ont trouvé que l'eudaimonie est un meilleur prédicteur de la longévité et de la fonction immunitaire que le bonheur hédonique seul. Les personnes qui identifient et agissent régulièrement vers un sens montrent une plus grande résilience au stress et une récupération plus rapide.",
     source:"Fredrickson et al., PNAS 2013",sourceUrl:"https://doi.org/10.1073/pnas.1305419110"},
    {id:"w7h3",emoji:"🎨",title:"Une heure d'activité de flow par semaine",micro:"Quelque chose d'absorbant, non numérique, adapté à tes compétences",time:"60 min/semaine",
     howTo:["Choisis une activité qui demande toute ton attention et correspond à ton niveau de compétence actuel — légèrement stimulante, mais pas écrasante.","Exemples : cuisiner une recette complexe, jouer d'un instrument, dessiner, menuiserie, jardinage, écriture.","Bloque 60 minutes et retire toutes les notifications.","Lance le minuteur. Les 15 à 20 premières minutes semblent souvent résistantes — c'est normal. Continue sans vérifier ton téléphone.","Si la tâche est trop facile, augmente la difficulté. Si elle semble écrasante, décompose-la en étapes.","Après la séance, remarque comment tu te sens. Le flow produit un état post-séance caractéristique de calme alerte."],
     benefit:"Des décennies de recherche de Csikszentmihalyi sur le flow montrent de façon constante qu'il est corrélé avec l'affect positif maximal et la motivation intrinsèque. Contrairement au plaisir hédonique, qui s'habitue rapidement, les expériences de flow produisent une satisfaction qui persiste des heures après la séance. Des expériences de flow régulières sur 8 semaines sont associées à une satisfaction de vie plus élevée et à des taux d'anxiété et de dépression plus faibles.",
     source:"Csikszentmihalyi, Flow: The Psychology of Optimal Experience 1990",sourceUrl:"https://ggia.berkeley.edu/practice/find_your_flow_activities"},
    {id:"w7h4",emoji:"🌱",title:"Écris ta belle vie en 3 phrases",micro:"Pas des objectifs. Comment ressemble et se sent un bon jour, une bonne année, une belle vie ?",time:"10 min une fois",
     howTo:["Trouve 15 minutes calmes seul(e) avec un stylo et une feuille blanche.","Écris ces trois amorces de phrases et complète-les honnêtement : 'Un bon jour pour moi c'est...', 'Une bonne année implique...', 'Une belle vie signifie...'","Concentre-toi entièrement sur les sensations et les expériences — pas les réalisations, le revenu ou les possessions.","N'édite pas — écris les premières réponses honnêtes qui viennent.","Garde la page quelque part de visible : collée à un miroir, dans ton portefeuille ou en fond d'écran.","Reviens-y quand une décision est difficile — demande-toi : 'quelle option m'en rapproche ?'"],
     benefit:"La clarification des valeurs active le cortex préfrontal médial (le réseau auto-référentiel du cerveau) et est associée à une prise de décision de meilleure qualité et moins de regrets dans les études de suivi (Lyubomirsky, The How of Happiness, 2008). Quand les valeurs sont implicites et non examinées, les décisions sont pilotées par l'habitude, la pression sociale ou le confort à court terme. Quand elles sont écrites et visibles, elles deviennent un filtre.",
     source:"Lyubomirsky, The How of Happiness 2008",sourceUrl:"https://sonjalyubomirsky.com/books/the-how-of-happiness/"},
  ]},
  {week:8,title:"Intégration et élan",theme:"Ta pile permanente",color:"#4A4A8A",light:"#EEEEF8",
   tagline:"Les habitudes n'ont pas besoin de discipline — elles ont besoin d'identité. Tu es maintenant quelqu'un qui fait ça.",
   science:"La formation d'habitudes basée sur l'identité (Fogg, Stanford / Clear, Atomic Habits) montre que se cadrer comme 'qui je suis' plutôt que 'ce que je fais' produit une adhérence à long terme bien supérieure.",
   habits:[
    {id:"w8h1",emoji:"🔁",title:"Révise ta pile d'habitudes sur 8 semaines",micro:"Lesquelles ont eu le plus grand impact ? Garde celles-là comme non-négociables.",time:"20 min une fois",
     howTo:["Prends 20 minutes — idéalement le même jour chaque semaine pour ta 'révision hebdomadaire'.","Parcours le programme semaine par semaine. Pour chaque habitude, note-la de 1 à 5 : combien a-t-elle changé ce que tu ressens ?","Identifie les 5 habitudes avec le plus d'impact personnel. Ce sont tes non-négociables.","Pour les autres : garde si agréable, modifie si presque fonctionnel, supprime entièrement si vraiment incompatible avec ta vie.","Écris tes 5 non-négociables finaux sur une carte et mets-la quelque part que tu vois chaque matin.","Programme un bilan à 3 mois dans ton agenda."],
     benefit:"La réflexion systématique sur les résultats des habitudes améliore de manière marquée l'adhérence et permet l'élagage des comportements à faible ROI. Fogg (Tiny Habits, Stanford 2019) identifie cette étape de consolidation comme la plus sous-estimée de la formation d'habitudes.",
     source:"Fogg, Tiny Habits — Stanford Behaviour Design Lab 2019",sourceUrl:"https://tinyhabits.com"},
    {id:"w8h2",emoji:"📅",title:"Programme ton ancre sociale pour le mois prochain",micro:"Un vrai rassemblement avec des gens qui comptent. Dans l'agenda maintenant.",time:"5 min une fois",
     howTo:["Ouvre ton agenda maintenant et trouve une date dans les 28 prochains jours.","Réserve un rassemblement social — pas 'on devrait se voir' mais un événement précis avec une heure et un lieu.","Ça peut être petit : un dîner, une promenade, un musée, un film. La taille n'a pas d'importance — l'engagement oui.","Envoie l'invitation ou le message avant de fermer cet écran.","Ajoute un rappel mensuel récurrent pour que ça devienne une structure mensuelle.","Une fois par mois, fais-le avec quelqu'un hors de ton cercle habituel."],
     benefit:"La Harvard Good Life Study montre que les personnes qui investissent activement dans les relations — qui créent délibérément une structure sociale régulière — rapportent une satisfaction de vie plus élevée à chaque âge mesuré et montrent de meilleurs résultats de santé physique plus tard dans la vie.",
     source:"Waldinger & Schulz, The Good Life 2023",sourceUrl:"https://www.goodlifeproject.com"},
    {id:"w8h3",emoji:"🧾",title:"Écris ton OS de bien-être — une page",micro:"Tes non-négociables, tes valeurs, tes trois ancres",time:"30 min une fois",
     howTo:["Section 1 : Mes 5 habitudes quotidiennes non-négociables (depuis la révision de la semaine 8).","Section 2 : Mes valeurs en 3 mots (depuis les phrases de belle vie de la semaine 7).","Section 3 : Ce que je fais quand je suis en difficulté — ancre d'adaptation : 'Quand je remarque que je suis hors piste, je commence toujours par : respirer, marcher, appeler quelqu'un.'","Section 4 (optionnelle) : Mes signaux d'alerte — les pensées ou comportements spécifiques qui apparaissent en premier quand je me détériore.","Imprime ou écris à la main. Rends-le physique.","Donne une copie à quelqu'un qui te connaît bien."],
     benefit:"Externaliser les normes personnelles et les plans d'adaptation dans un 'système d'exploitation' écrit et visible crée une forme de pré-engagement psychologique qui réduit significativement la fatigue décisionnelle et maintient le comportement pendant les périodes de stress élevé. Baumeister & Tierney (Willpower, 2011).",
     source:"Baumeister & Tierney, Willpower 2011",sourceUrl:"https://www.amazon.com/Willpower-Rediscovering-Greatest-Human-Strength/dp/0143122231"},
    {id:"w8h4",emoji:"🎯",title:"Célèbre — vraiment, spécifiquement",micro:"Note ce qui a changé. Dis-le à quelqu'un. Marque le moment.",time:"10 min",
     howTo:["Écris 3 choses spécifiques qui sont genuinement différentes chez toi par rapport à il y a 8 semaines.","Dis à une personne dont l'opinion compte pour toi ce que tu as accompli, pourquoi c'était difficile et ce que ça signifie pour toi.","Fais quelque chose qui ressemble à une vraie récompense — un repas que tu aimes, une expérience que tu reportes.","Programme un rappel dans 3 mois : 'Révise mon OS de bien-être et choisis les 8 prochaines semaines.'","Prends une photo ou écris une phrase qui capture ce moment et pourquoi il comptait.","Le programme ne s'arrête pas ici — il redémarre. Tu sais maintenant quels leviers te font bouger. Actionne-les."],
     benefit:"La célébration est l'outil le plus sous-utilisé et le plus important mécanistiquement dans la formation d'habitudes, selon BJ Fogg (Tiny Habits, Stanford, 2019). Suivre immédiatement un comportement accompli d'une émotion positive genuinement vécue crée une marque neurologique — un signal dopamine qui encode 'ce comportement fait partie de mon identité'.",
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
    panel:{howTo:"How to do it",evidence:"Evidence that it works",source:"Research source",close:"Close",backToProgram:"← Back to Program"},
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
    panel:{howTo:"Comment le faire",evidence:"Preuves que ça marche",source:"Source scientifique",close:"Fermer",backToProgram:"← Retour au programme"},
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

function HabitDetail({habit, week, onBack, t}) {
  const isDesktop = useIsDesktop();
  const ember = "#C8440A"; const mist = "#E8E2D8"; const stone = "#8A8070";
  const ink = "#1C1814"; const cream = "#F8F4EE"; const sand = "#EDE7DC";
  return (
    <div style={{background:cream,minHeight:"100vh"}}>
      <div style={{background:ink,padding:isDesktop?"28px 32px 24px":"18px 16px 16px",position:"sticky",top:0,zIndex:50}}>
        <div style={{maxWidth:isDesktop?760:580,margin:"0 auto"}}>
          <button onClick={onBack} style={{background:"none",border:"none",color:"#888",cursor:"pointer",fontFamily:"monospace",fontSize:isDesktop?12:11,letterSpacing:"0.08em",padding:0,marginBottom:isDesktop?14:10,display:"block"}}>
            {t.panel.backToProgram}
          </button>
          <div style={{display:"flex",gap:isDesktop?14:12,alignItems:"flex-start"}}>
            <span style={{fontSize:isDesktop?32:26,flexShrink:0}}>{habit.emoji}</span>
            <div style={{flex:1}}>
              <div style={{fontSize:isDesktop?22:17,fontWeight:"bold",color:"white",lineHeight:1.25,marginBottom:isDesktop?6:4}}>{habit.title}</div>
              <span style={{background:week.light,color:week.color,fontSize:isDesktop?11:10,fontFamily:"monospace",padding:"3px 10px",borderRadius:4}}>{habit.time}</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{maxWidth:isDesktop?760:580,margin:"0 auto",padding:isDesktop?"36px 32px 80px":"20px 16px 56px"}}>
        <div style={{background:sand,borderRadius:14,padding:isDesktop?"20px 24px":"16px 18px",marginBottom:isDesktop?16:12}}>
          <div style={{fontSize:isDesktop?11:10,color:stone,fontFamily:"monospace",textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:isDesktop?14:11,fontWeight:"bold"}}>{"→ "}{t.panel.howTo}</div>
          <ol style={{margin:0,padding:"0 0 0 20px",listStyleType:"decimal"}}>
            {habit.howTo.map((s,i)=>(
              <li key={i} style={{fontSize:isDesktop?14:13,color:ink,lineHeight:1.7,marginBottom:i<habit.howTo.length-1?(isDesktop?10:7):0,paddingLeft:4}}>{s}</li>
            ))}
          </ol>
        </div>
        <div style={{background:week.light,borderLeft:"3px solid "+week.color,borderRadius:"0 14px 14px 0",padding:isDesktop?"20px 24px":"16px 18px",marginBottom:isDesktop?16:12}}>
          <div style={{fontSize:isDesktop?11:10,color:week.color,fontFamily:"monospace",textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:isDesktop?10:8,fontWeight:"bold"}}>{"* "}{t.panel.evidence}</div>
          <p style={{margin:0,fontSize:isDesktop?14:13,color:"#2A2A2A",lineHeight:1.8,fontStyle:"italic"}}>{habit.benefit}</p>
        </div>
        <div style={{background:"white",border:"1px solid "+mist,borderRadius:14,padding:isDesktop?"18px 24px":"14px 18px",display:"flex",gap:isDesktop?12:10,alignItems:"flex-start"}}>
          <span style={{fontSize:isDesktop?16:14,flexShrink:0,marginTop:2}}>{">"}</span>
          <div style={{flex:1}}>
            <div style={{fontSize:isDesktop?11:10,color:stone,fontFamily:"monospace",textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:isDesktop?5:4}}>{t.panel.source}</div>
            <a href={habit.sourceUrl} target="_blank" rel="noopener noreferrer" style={{fontSize:isDesktop?13:12,color:week.color,lineHeight:1.55,textDecoration:"underline",cursor:"pointer",display:"block"}}>{habit.source}</a>
          </div>
        </div>
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
  const isDesktop = useIsDesktop();
  const ember = "#C8440A";
  const sand = "#EDE7DC";
  const mist = "#E8E2D8";
  const stone = "#8A8070";
  const ink = "#1C1814";
  const cream = "#F8F4EE";
  const containerMax = isDesktop ? 1200 : 620;
  return (
    <div style={{background:cream}}>
      <div style={{background:ink,padding:isDesktop?"96px 32px 80px":"64px 24px 56px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-80,right:-80,width:isDesktop?460:300,height:isDesktop?460:300,borderRadius:"50%",background:"radial-gradient(circle,rgba(200,68,10,0.18) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{position:"absolute",bottom:-60,left:-60,width:isDesktop?340:220,height:isDesktop?340:220,borderRadius:"50%",background:"radial-gradient(circle,rgba(92,122,92,0.12) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{maxWidth:containerMax,margin:"0 auto",position:"relative",display:isDesktop?"grid":"block",gridTemplateColumns:isDesktop?"1.1fr 0.9fr":"none",gap:isDesktop?64:0,alignItems:"center"}}>
          <div>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(200,68,10,0.15)",border:"1px solid rgba(200,68,10,0.3)",borderRadius:20,padding:"5px 14px",marginBottom:26}}>
              <div style={{width:6,height:6,borderRadius:"50%",background:ember}}/>
              <span style={{color:ember,fontSize:11,fontFamily:"monospace",letterSpacing:"0.12em",textTransform:"uppercase"}}>{t.hero.badge}</span>
            </div>
            <h1 style={{color:"white",fontSize:isDesktop?"clamp(48px,5.5vw,76px)":"clamp(30px,7vw,52px)",fontFamily:"Georgia,serif",fontWeight:"normal",lineHeight:1.08,margin:"0 0 18px",letterSpacing:"-1px"}}>
              {t.hero.h1a}<br/><span style={{color:ember}}>{t.hero.h1b}</span>
            </h1>
            <p style={{color:"#B0A898",fontSize:isDesktop?19:16,margin:"0 0 36px",lineHeight:1.65,maxWidth:isDesktop?520:480,fontStyle:"italic"}}>{t.hero.sub}</p>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <button onClick={()=>setTab("program")} style={{background:ember,color:"white",border:"none",borderRadius:10,padding:isDesktop?"15px 30px":"13px 24px",fontSize:isDesktop?15:14,cursor:"pointer",fontFamily:"Georgia,serif"}}>{t.hero.cta1}</button>
              <button onClick={()=>setTab("program")} style={{background:"transparent",color:"#B0A898",border:"1px solid rgba(255,255,255,0.15)",borderRadius:10,padding:isDesktop?"15px 28px":"13px 22px",fontSize:isDesktop?14:13,cursor:"pointer"}}>{t.hero.cta2}</button>
            </div>
          </div>
          {isDesktop && (
            <div style={{position:"relative"}}>
              <div style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:20,padding:"32px 28px",backdropFilter:"blur(8px)"}}>
                <div style={{fontSize:11,color:ember,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:18}}>// Evidence at a glance</div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18}}>
                  {t.stats.map((s,i)=>(
                    <div key={i} style={{padding:"14px 0",borderTop:i>1?"1px solid rgba(255,255,255,0.08)":"none"}}>
                      <div style={{fontSize:28,fontFamily:"Georgia,serif",color:"white",marginBottom:5,letterSpacing:"-0.5px"}}>{s.n}</div>
                      <div style={{fontSize:11,color:"#888",lineHeight:1.45}}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {!isDesktop && (
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
      )}
      <div style={{maxWidth:containerMax,margin:"0 auto",padding:isDesktop?"80px 32px 0":"44px 20px 0"}}>
        <div style={{fontSize:isDesktop?12:10,color:stone,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:10}}>{t.howLabel}</div>
        <h2 style={{fontSize:isDesktop?34:22,fontFamily:"Georgia,serif",fontWeight:"normal",color:ink,margin:"0 0 36px",letterSpacing:"-0.5px",lineHeight:1.25,maxWidth:isDesktop?720:"none"}}>{t.howH}</h2>
        <div style={{display:"grid",gridTemplateColumns:isDesktop?"repeat(4,1fr)":"1fr 1fr",gap:isDesktop?16:10}}>
          {t.howCards.map((c,i)=>(
            <div key={i} style={{background:"white",border:"1px solid "+mist,borderRadius:14,padding:isDesktop?"22px 20px":"16px 14px"}}>
              <div style={{fontSize:isDesktop?26:20,marginBottom:isDesktop?12:7}}>{c.emoji}</div>
              <div style={{fontSize:isDesktop?11:10,fontFamily:"monospace",color:ember,marginBottom:isDesktop?7:4,textTransform:"uppercase",letterSpacing:"0.08em"}}>{c.title} - {c.sub}</div>
              <div style={{fontSize:isDesktop?14:12,color:stone,lineHeight:1.6}}>{c.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{maxWidth:containerMax,margin:"0 auto",padding:isDesktop?"64px 32px 0":"36px 20px 0"}}>
        <div style={{fontSize:isDesktop?12:10,color:stone,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:isDesktop?16:12,textAlign:"center"}}>{t.sciLabel}</div>
        <div style={{display:"flex",border:"1px solid "+mist,borderRadius:12,overflow:"hidden",background:"white"}}>
          {[{l:"GGIA",s:"UC Berkeley"},{l:"Harvard",s:"Adult Development"},{l:"Stanford",s:"Behaviour Design"},{l:"MIT/MGH",s:"Neuroscience"}].map((x,i)=>(
            <div key={i} style={{flex:1,padding:isDesktop?"20px 10px":"12px 6px",textAlign:"center",borderRight:i<3?"1px solid "+mist:"none"}}>
              <div style={{fontSize:isDesktop?15:11,fontFamily:"Georgia,serif",color:ink,fontWeight:"bold",marginBottom:isDesktop?4:2}}>{x.l}</div>
              <div style={{fontSize:isDesktop?12:9,color:stone,lineHeight:1.3}}>{x.s}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{maxWidth:containerMax,margin:"0 auto",padding:isDesktop?"64px 32px 0":"36px 20px 0"}}>
        <div style={{fontSize:isDesktop?12:10,color:stone,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:isDesktop?20:12}}>{t.testiLabel}</div>
        <div style={{display:isDesktop?"grid":"block",gridTemplateColumns:isDesktop?"repeat(3,1fr)":"none",gap:isDesktop?16:0}}>
          {t.testimonials.map((tt,i)=>(
            <div key={i} style={{background:"white",border:"1px solid "+mist,borderRadius:14,padding:isDesktop?"22px 24px":"16px 18px",marginBottom:isDesktop?0:8}}>
              <div style={{color:ember,fontSize:isDesktop?13:11,marginBottom:isDesktop?10:7}}>{"*****".slice(0,tt.stars*1)}</div>
              <p style={{fontSize:isDesktop?14:13,color:ink,lineHeight:1.75,margin:isDesktop?"0 0 12px":"0 0 9px",fontStyle:"italic"}}>"{tt.text}"</p>
              <div style={{fontSize:isDesktop?12:11,color:stone}}>{tt.name} - {tt.role}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{maxWidth:containerMax,margin:"0 auto",padding:isDesktop?"60px 32px 96px":"32px 20px 56px"}}>
        <div style={{display:isDesktop?"grid":"block",gridTemplateColumns:isDesktop?"1fr 1fr":"none",gap:isDesktop?20:0}}>
          <NewsletterBlock t={t} ember={ember} mist={mist} sand={sand} stone={stone} ink={ink}/>
          <div style={{background:ink,borderRadius:16,padding:isDesktop?"40px 32px":"30px 24px",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <div style={{fontSize:isDesktop?24:19,fontFamily:"Georgia,serif",color:"white",marginBottom:isDesktop?12:9,letterSpacing:"-0.4px",lineHeight:1.3}}>{t.ctaH}</div>
            <p style={{color:"#B0A898",fontSize:isDesktop?14:12,margin:isDesktop?"0 0 24px":"0 0 20px",fontStyle:"italic"}}>{t.ctaSub}</p>
            <button onClick={()=>setTab("program")} style={{alignSelf:"center",background:ember,color:"white",border:"none",borderRadius:10,padding:isDesktop?"15px 36px":"13px 28px",fontSize:isDesktop?15:14,cursor:"pointer",fontFamily:"Georgia,serif"}}>{t.ctaBtn}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Program({checked, setChecked, streak, isPro, setTab, t, lang, setHabitView}) {
  const isDesktop = useIsDesktop();
  const [expanded, setExpanded] = useState({1:true});
  const data = lang === "fr" ? PROGRAM_FR : PROGRAM;
  const FREE = isPro ? [1,2,3,4,5,6,7,8] : [1,2];
  const ember = "#C8440A"; const gold = "#C9960A"; const mist = "#E8E2D8";
  const stone = "#8A8070"; const ink = "#1C1814"; const cream = "#F8F4EE";
  const containerMax = isDesktop ? 1200 : 620;
  const total = PROGRAM.flatMap(w=>w.habits).length;
  const done = Object.values(checked).filter(Boolean).length;
  const pct = Math.round((done/total)*100);
  const toggle = (id,e) => { e.stopPropagation(); setChecked(p=>({...p,[id]:!p[id]})); };
  const wp = w => w.habits.filter(h=>checked[h.id]).length;

  // Auto-close a week bloc when all its habits are checked
  useEffect(() => {
    PROGRAM.forEach(week => {
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
      <div style={{background:ink,padding:isDesktop?"48px 32px 36px":"28px 20px 20px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-40,right:-40,width:isDesktop?280:180,height:isDesktop?280:180,borderRadius:"50%",background:"radial-gradient(circle,rgba(200,68,10,0.15) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{maxWidth:containerMax,margin:"0 auto",position:"relative"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6}}>
            <div style={{fontSize:isDesktop?12:10,color:ember,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase"}}>{t.programTitle}</div>
            {streak>0&&<div style={{background:"rgba(200,68,10,0.2)",border:"1px solid rgba(200,68,10,0.35)",borderRadius:12,padding:"3px 10px",fontSize:11,color:ember,fontFamily:"monospace"}}>{streak} {t.streakLabel}</div>}
          </div>
          <h2 style={{color:"white",fontSize:isDesktop?32:20,fontFamily:"Georgia,serif",fontWeight:"normal",margin:"0 0 4px",letterSpacing:"-0.5px"}}>Science-Backed Tiny Habits</h2>
          <p style={{color:"#666",fontSize:isDesktop?13:10,margin:isDesktop?"0 0 22px":"0 0 16px",fontStyle:"italic"}}>{t.programSub}</p>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <div style={{flex:1,height:isDesktop?7:5,background:"#2A2A2A",borderRadius:4,overflow:"hidden"}}>
              <div style={{height:"100%",width:pct+"%",background:"linear-gradient(90deg,"+ember+","+gold+")",borderRadius:4,transition:"width 0.4s"}}/>
            </div>
            <span style={{color:"#777",fontSize:isDesktop?13:11,fontFamily:"monospace",minWidth:42,textAlign:"right"}}>{done}/{total}</span>
            <span style={{color:ember,fontSize:isDesktop?14:12,fontFamily:"monospace",fontWeight:"bold"}}>{pct}%</span>
          </div>
        </div>
      </div>
      <div style={{maxWidth:containerMax,margin:"0 auto",padding:isDesktop?"24px 24px 80px":"12px 10px 48px"}}>
        <div style={{display:"block"}}>
        {data.map(week=>{
          const wd=wp(week); const wt=week.habits.length;
          const isOpen=expanded[week.week]; const allDone=wd===wt;
          const locked=!FREE.includes(week.week);
          const greenLight = "#EDF7EF";
          const greenMid = "#3D8A4A";
          return (
            <div key={week.week} style={{marginBottom:isDesktop?12:8,borderRadius:14,overflow:"hidden",border:"1px solid "+(allDone?"#3D8A4A50":mist),background:"white",transition:"all 0.4s ease"}}>
              <button onClick={()=>setExpanded(p=>({...p,[week.week]:!p[week.week]}))} style={{width:"100%",display:"flex",alignItems:"flex-start",padding:isDesktop?"20px 22px":"14px 14px",background:allDone?greenLight:"white",border:"none",cursor:"pointer",textAlign:"left",gap:isDesktop?16:11,transition:"background 0.4s"}}>
                <div style={{width:isDesktop?5:4,minHeight:isDesktop?60:50,borderRadius:2,background:allDone?greenMid:week.color,flexShrink:0,marginTop:2,transition:"background 0.4s"}}/>
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:isDesktop?5:3,flexWrap:"wrap"}}>
                    <span style={{fontSize:isDesktop?13:10,fontFamily:"monospace",color:allDone?greenMid:week.color,textTransform:"uppercase",letterSpacing:"0.12em",fontWeight:"bold"}}>{t.weekLabel} {week.week}</span>
                    <span style={{fontSize:isDesktop?13:10,fontFamily:"monospace",color:"#AAA"}}>— {wd}/{wt}</span>
                    {locked&&<span style={{fontSize:isDesktop?11:9,fontFamily:"monospace",background:"#EDE7DC",color:stone,padding:"2px 8px",borderRadius:4}}>{"🔒"} {t.proTag}</span>}
                    {allDone&&<span style={{fontSize:isDesktop?11:9,fontFamily:"monospace",background:"#D1F0D8",color:greenMid,padding:"2px 8px",borderRadius:4,fontWeight:"bold"}}>{"✓"} {t.completedLabel}</span>}
                  </div>
                  <div style={{fontSize:isDesktop?20:14,color:ink,fontWeight:"bold",letterSpacing:"-0.3px",marginBottom:isDesktop?5:3}}>{week.title}</div>
                  <div style={{fontSize:isDesktop?14:11,color:"#666",fontStyle:"italic",lineHeight:1.55,paddingRight:8}}>{week.tagline}</div>
                  <div style={{fontSize:isDesktop?11:9,color:allDone?greenMid:week.color,fontFamily:"monospace",marginTop:isDesktop?7:5,background:allDone?"#D1F0D8":week.light,display:"inline-block",padding:"3px 9px",borderRadius:4}}>{week.theme}</div>
                </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5,flexShrink:0,paddingTop:2}}>
                  <div style={{width:isDesktop?36:28,height:isDesktop?36:28,borderRadius:"50%",background:allDone?greenMid:"#F0EDE8",display:"flex",alignItems:"center",justifyContent:"center",fontSize:allDone?(isDesktop?16:14):(isDesktop?12:10),color:allDone?"white":week.color,fontFamily:"monospace",fontWeight:"bold",transition:"all 0.4s"}}>
                    {allDone?"✓":Math.round((wd/wt)*100)+"%"}
                  </div>
                  <span style={{color:"#CCC",fontSize:isDesktop?18:15,transform:isOpen?"rotate(90deg)":"rotate(0deg)",display:"inline-block",transition:"transform 0.2s"}}>{">"}</span>
                </div>
              </button>
              {isOpen&&(
                <div style={{borderTop:"1px solid "+week.color+"20"}}>
                  <div style={{background:week.light,borderBottom:"1px solid "+week.color+"15",padding:isDesktop?"12px 22px 12px 26px":"9px 14px 9px 18px",display:"flex",gap:10}}>
                    <span style={{fontSize:isDesktop?14:12,flexShrink:0}}>{"[sci]"}</span>
                    <p style={{margin:0,fontSize:isDesktop?13:11,color:"#555",fontStyle:"italic",lineHeight:1.6}}>{week.science}</p>
                  </div>
                  {locked?(
                    <div style={{padding:isDesktop?"36px 24px":"28px 20px",textAlign:"center"}}>
                      <div style={{fontSize:isDesktop?28:24,marginBottom:8}}>{"🔒"}</div>
                      <div style={{fontSize:isDesktop?17:14,fontFamily:"Georgia,serif",color:ink,marginBottom:4}}>{t.proTitle} {week.week}</div>
                      <div style={{fontSize:isDesktop?13:11,color:stone,marginBottom:14}}>{t.proSub}</div>
                      <button onClick={()=>setTab("pricing")} style={{background:ember,color:"white",border:"none",borderRadius:8,padding:isDesktop?"12px 28px":"10px 22px",fontSize:isDesktop?14:13,cursor:"pointer"}}>{t.proBtn}</button>
                    </div>
                  ):week.habits.map((habit,i)=>{
                    const isDone=checked[habit.id];
                    return (
                      <div key={habit.id} style={{display:"flex",alignItems:"flex-start",gap:isDesktop?14:10,padding:isDesktop?"16px 22px":"12px 14px",background:isDone?week.light:"white",borderBottom:i<week.habits.length-1?"1px solid #F5F2EE":"none",transition:"background 0.2s"}}>
                        <div onClick={e=>toggle(habit.id,e)} style={{width:isDesktop?24:20,height:isDesktop?24:20,borderRadius:6,border:isDone?"2px solid "+week.color:"2px solid #D0CCC4",background:isDone?week.color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:3,cursor:"pointer",transition:"all 0.15s"}}>
                          {isDone&&<span style={{color:"white",fontSize:isDesktop?13:11}}>{"✓"}</span>}
                        </div>
                        <span style={{fontSize:isDesktop?20:15,flexShrink:0,marginTop:2}}>{habit.emoji}</span>
                        <div style={{flex:1,minWidth:0}}>
                          <div style={{fontSize:isDesktop?16:12.5,fontWeight:"bold",color:isDone?"#AAA":ink,textDecoration:isDone?"line-through":"none",marginBottom:isDesktop?4:2,lineHeight:1.3}}>{habit.title}</div>
                          <div style={{fontSize:isDesktop?13:11,color:"#999",fontStyle:"italic",lineHeight:1.45}}>{habit.micro}</div>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:isDesktop?6:4,flexShrink:0}}>
                          <div style={{background:isDone?week.color+"20":"#F0EDE8",color:isDone?week.color:"#999",fontSize:isDesktop?11:9,fontFamily:"monospace",padding:isDesktop?"3px 9px":"2px 6px",borderRadius:4,whiteSpace:"nowrap"}}>{habit.time}</div>
                          <button style={{background:"none",border:"1px solid "+week.color+"40",borderRadius:5,cursor:"pointer",fontSize:isDesktop?11:9,color:week.color,fontFamily:"monospace",padding:isDesktop?"3px 9px":"2px 6px",whiteSpace:"nowrap"}} onClick={e=>{e.stopPropagation();setHabitView({habit,week});}}>{"i"} {t.moreInfo}</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
        </div>
        <div style={{marginTop:isDesktop?20:12,padding:isDesktop?"22px 28px":"16px 18px",background:ink,borderRadius:12,display:"flex",gap:14}}>
          <span style={{fontSize:isDesktop?20:16,flexShrink:0}}>{"💡"}</span>
          <div>
            <div style={{color:gold,fontSize:isDesktop?12:10,fontFamily:"monospace",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:6}}>{t.sciNote}</div>
            <p style={{color:"#CCC",fontSize:isDesktop?14:12,margin:0,lineHeight:1.7,fontStyle:"italic"}}>{t.sciNoteText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pricing({t, isPro, setIsPro, setTab}) {
  const isDesktop = useIsDesktop();
  const [billing,setBilling] = useState("monthly");
  const ember="#C8440A"; const mist="#E8E2D8"; const stone="#8A8070";
  const ink="#1C1814"; const cream="#F8F4EE"; const sand="#EDE7DC";
  const containerMax = isDesktop ? 1200 : 600;
  return (
    <div style={{background:cream,minHeight:"100vh"}}>
      <div style={{background:ink,padding:isDesktop?"56px 20px 44px":"36px 20px 28px",textAlign:"center"}}>
        <div style={{fontSize:isDesktop?12:10,color:ember,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:isDesktop?12:8}}>{t.nav.pricing}</div>
        <h2 style={{color:"white",fontSize:isDesktop?34:20,fontFamily:"Georgia,serif",fontWeight:"normal",margin:isDesktop?"0 0 12px":"0 0 8px",letterSpacing:"-0.5px",lineHeight:1.25}}>{t.pricingTitle}</h2>
        <p style={{color:"#888",fontSize:isDesktop?15:12,margin:isDesktop?"0 0 28px":"0 0 20px",fontStyle:"italic"}}>{t.pricingSub}</p>
        <div style={{display:"inline-flex",background:"#2A2A2A",borderRadius:8,padding:3}}>
          {["monthly","annual"].map(b=>(
            <button key={b} onClick={()=>setBilling(b)} style={{padding:isDesktop?"8px 18px":"6px 14px",borderRadius:6,border:"none",cursor:"pointer",fontSize:isDesktop?12:11,fontFamily:"monospace",background:billing===b?"white":"transparent",color:billing===b?ink:"#888",transition:"all 0.2s"}}>
              {b==="annual"?t.annual:t.monthly}
            </button>
          ))}
        </div>
      </div>
      <div style={{maxWidth:containerMax,margin:"0 auto",padding:isDesktop?"32px 24px 80px":"18px 10px 48px"}}>
        <div style={{display:isDesktop?"grid":"block",gridTemplateColumns:isDesktop?"repeat(3,1fr)":"none",gap:isDesktop?16:0,alignItems:"start"}}>
        {t.plans.map(plan=>(
          <div key={plan.id} style={{background:"white",border:(plan.highlight?"2px":"1px")+" solid "+(plan.highlight?plan.color:mist),borderRadius:16,overflow:"hidden",marginBottom:isDesktop?0:10,transform:isDesktop&&plan.highlight?"scale(1.03)":"none",boxShadow:isDesktop&&plan.highlight?"0 12px 40px rgba(200,68,10,0.15)":"none"}}>
            {plan.highlight&&<div style={{background:plan.color,color:"white",textAlign:"center",fontSize:isDesktop?11:10,fontFamily:"monospace",letterSpacing:"0.1em",padding:isDesktop?"7px 0":"5px 0",textTransform:"uppercase"}}>{t.mostPop}</div>}
            <div style={{padding:isDesktop?"24px 24px 0":"18px 18px 0"}}>
              <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:isDesktop?10:5,flexDirection:isDesktop?"column":"row",gap:isDesktop?8:0}}>
                <div>
                  <div style={{fontSize:isDesktop?11:10,fontFamily:"monospace",color:plan.color,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:isDesktop?6:3}}>{plan.name}</div>
                  <div style={{display:"flex",alignItems:"baseline",gap:4}}>
                    <span style={{fontSize:isDesktop?34:24,fontFamily:"Georgia,serif",color:ink}}>{billing==="annual"&&plan.id==="pro"?"€4.92":plan.price}</span>
                    <span style={{fontSize:isDesktop?12:11,color:stone}}>{billing==="annual"&&plan.id==="pro"?"/mo billed annually":plan.period}</span>
                  </div>
                </div>
                <div style={{fontSize:isDesktop?12:11,color:stone,fontStyle:"italic",textAlign:isDesktop?"left":"right",lineHeight:1.5,maxWidth:isDesktop?"100%":120}}>{plan.desc}</div>
              </div>
              <button
                onClick={()=>{
                  if(plan.id==="pro"||plan.id==="annual"){setIsPro(true);setTab("program");}
                }}
                style={{width:"100%",padding:isDesktop?"13px":"11px",background:isPro&&(plan.id==="pro"||plan.id==="annual")?"#3D8A3D":plan.highlight?plan.color:sand,color:(plan.highlight||isPro&&(plan.id==="pro"||plan.id==="annual"))?"white":ink,border:"1px solid "+(plan.highlight?plan.color:mist),borderRadius:10,fontSize:isDesktop?14:13,cursor:"pointer",fontFamily:"Georgia,serif",marginBottom:isDesktop?18:14}}>
                {isPro&&(plan.id==="pro"||plan.id==="annual")?"✓ Program unlocked — go to Program ->":plan.cta+(plan.id!=="free"?" ->":"")}
              </button>
            </div>
            <div style={{padding:isDesktop?"0 24px 24px":"0 18px 18px"}}>
              {plan.features.map((f,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:isDesktop?10:8,padding:isDesktop?"7px 0":"5px 0",borderBottom:i<plan.features.length-1?"1px solid #F7F5F0":"none"}}>
                  <span style={{fontSize:isDesktop?13:11,flexShrink:0,color:f.ok?plan.color:"#DDD"}}>{f.ok?"✓":"o"}</span>
                  <span style={{fontSize:isDesktop?13:12,color:f.ok?ink:"#CCC"}}>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:isDesktop?"repeat(4,1fr)":"1fr 1fr",gap:isDesktop?14:8,marginTop:isDesktop?28:8}}>
          {t.trustItems.map((ti,i)=>(
            <div key={i} style={{background:"white",border:"1px solid "+mist,borderRadius:12,padding:isDesktop?"18px 16px":"13px 12px",display:"flex",gap:isDesktop?12:9}}>
              <span style={{fontSize:isDesktop?22:17}}>{ti.emoji}</span>
              <div>
                <div style={{fontSize:isDesktop?13:12,fontWeight:"bold",color:ink,marginBottom:isDesktop?3:2}}>{ti.title}</div>
                <div style={{fontSize:isDesktop?12:11,color:stone}}>{ti.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQ({t, setTab}) {
  const isDesktop = useIsDesktop();
  const [openCat, setOpenCat] = useState("program");
  const [openQ, setOpenQ] = useState(null);
  const mist="#E8E2D8"; const stone="#8A8070"; const ink="#1C1814";
  const cream="#F8F4EE"; const sand="#EDE7DC"; const ember="#C8440A";
  const containerMax = isDesktop ? 1200 : 640;

  const toggleQ = (key) => setOpenQ(prev => prev===key ? null : key);

  // All FAQ items flattened for SEO schema
  const allFaqs = t.faqCategories.flatMap(c => c.faqs.map(f => ({...f, cat:c.id})));

  return (
    <div style={{background:cream,minHeight:"100vh"}}>
      {/* SEO-structured header */}
      <div style={{background:ink,padding:isDesktop?"56px 32px 44px":"36px 20px 28px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-60,right:-60,width:isDesktop?320:220,height:isDesktop?320:220,borderRadius:"50%",background:"radial-gradient(circle,rgba(200,68,10,0.14) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{maxWidth:containerMax,margin:"0 auto",position:"relative"}}>
          <div style={{fontSize:isDesktop?12:10,color:ember,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:isDesktop?14:10}}>FAQ</div>
          <h1 style={{color:"white",fontSize:isDesktop?"clamp(30px,4vw,42px)":"clamp(20px,5vw,30px)",fontFamily:"Georgia,serif",fontWeight:"normal",margin:"0 0 12px",letterSpacing:"-0.5px",lineHeight:1.2}}>{t.faqPageTitle}</h1>
          <p style={{color:"#999",fontSize:isDesktop?15:13,margin:0,lineHeight:1.65,fontStyle:"italic",maxWidth:isDesktop?640:520}}>{t.faqPageSub}</p>
        </div>
      </div>

      {/* Category tabs — mobile only */}
      {!isDesktop && (
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
      )}

      <div style={{maxWidth:containerMax,margin:"0 auto",padding:isDesktop?"40px 24px 80px":"20px 12px 60px"}}>
        <div style={{display:isDesktop?"grid":"block",gridTemplateColumns:isDesktop?"260px 1fr":"none",gap:isDesktop?32:0,alignItems:"start"}}>
          {/* Desktop sidebar */}
          {isDesktop && (
            <div style={{position:"sticky",top:80}}>
              <div style={{fontSize:11,fontFamily:"monospace",color:stone,textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:14,paddingLeft:4}}>Categories</div>
              <div style={{display:"flex",flexDirection:"column",gap:4}}>
                {t.faqCategories.map(cat=>(
                  <button key={cat.id} onClick={()=>{setOpenCat(cat.id);setOpenQ(null);}}
                    style={{padding:"12px 16px",background:openCat===cat.id?ember+"10":"transparent",border:"1px solid "+(openCat===cat.id?ember+"30":"transparent"),borderRadius:10,cursor:"pointer",textAlign:"left",transition:"all 0.15s",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <span style={{fontSize:13,color:openCat===cat.id?ember:ink,fontWeight:openCat===cat.id?"bold":"normal"}}>{cat.icon} {cat.label}</span>
                    <span style={{fontSize:11,fontFamily:"monospace",color:stone}}>{cat.faqs.length}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* Main content */}
          <div>
            {t.faqCategories.filter(c=>c.id===openCat).map(cat=>(
              <div key={cat.id}>
                {isDesktop && (
                  <div style={{marginBottom:24}}>
                    <div style={{fontSize:11,fontFamily:"monospace",color:ember,textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:6}}>{cat.icon} {cat.label}</div>
                    <h2 style={{fontSize:24,fontFamily:"Georgia,serif",fontWeight:"normal",color:ink,margin:0,letterSpacing:"-0.4px"}}>{cat.faqs.length} questions</h2>
                  </div>
                )}
                {cat.faqs.map((faq,i)=>{
                  const key = cat.id+"-"+i;
                  const isOpen = openQ===key;
                  return (
                    <div key={key} style={{marginBottom:isDesktop?10:8,borderRadius:12,overflow:"hidden",border:"1px solid "+(isOpen?ember+"40":mist),background:"white",transition:"border-color 0.2s"}}>
                      <button onClick={()=>toggleQ(key)}
                        style={{width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"space-between",padding:isDesktop?"18px 22px":"16px 16px",background:isOpen?"#FFF8F6":"white",border:"none",cursor:"pointer",textAlign:"left",gap:12,transition:"background 0.2s"}}>
                        <div style={{flex:1}}>
                          <div style={{fontSize:isDesktop?15:14,fontWeight:"bold",color:isOpen?ember:ink,lineHeight:1.4,letterSpacing:"-0.1px"}}>{faq.q}</div>
                        </div>
                        <div style={{width:isDesktop?26:22,height:isDesktop?26:22,borderRadius:"50%",background:isOpen?ember+"15":"#F0EDE8",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1,transition:"all 0.2s"}}>
                          <span style={{fontSize:isDesktop?15:13,color:isOpen?ember:stone,lineHeight:1,transform:isOpen?"rotate(45deg)":"rotate(0deg)",display:"inline-block",transition:"transform 0.2s",marginTop:isOpen?0:-1}}>{isOpen?"×":"+"}</span>
                        </div>
                      </button>
                      {isOpen&&(
                        <div style={{padding:isDesktop?"0 22px 22px":"0 16px 18px",borderTop:"1px solid "+ember+"15"}}>
                          <p style={{margin:"14px 0 0",fontSize:isDesktop?15:13.5,color:"#333",lineHeight:1.8}}>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Quick search across all categories — mobile only */}
            {!isDesktop && (
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
            )}

            {/* CTA */}
            <div style={{marginTop:isDesktop?32:16,background:ink,borderRadius:14,padding:isDesktop?"36px 32px":"24px 20px",textAlign:"center"}}>
              <div style={{fontSize:isDesktop?22:17,fontFamily:"Georgia,serif",color:"white",marginBottom:isDesktop?8:6,letterSpacing:"-0.3px"}}>{t.faqCTA}</div>
              <p style={{color:"#999",fontSize:isDesktop?14:12,margin:isDesktop?"0 0 22px":"0 0 18px",fontStyle:"italic"}}>{t.faqCTASub}</p>
              <button onClick={()=>setTab("program")} style={{background:ember,color:"white",border:"none",borderRadius:10,padding:isDesktop?"14px 32px":"12px 26px",fontSize:isDesktop?14:13,cursor:"pointer",fontFamily:"Georgia,serif"}}>{t.faqCTABtn}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SYSTEM_PROMPT = `You are the tinywell Science Coach. Help paying members understand the 8-week wellbeing program and the peer-reviewed science behind every habit. RULES: (1) Every answer about a specific habit MUST end with a SOURCE: line citing the study. (2) Be concise: 3-5 sentences for simple questions. (3) Be warm and non-judgmental. (4) Never invent a source. PROGRAM CONTEXT: WEEK 1 CIRCADIAN FOUNDATIONS: Morning light (30 min after waking) activates melanopsin receptors, resets SCN clock SOURCE: Leproult & Van Cauter, Sleep 2010. Fixed wake-up 7 days/week SOURCE: Phillips et al., Science Advances 2017. Phone outside bedroom SOURCE: Kushlev & Dunn, Computers in Human Behavior 2015. Blue-light filter at 19:00 SOURCE: Chang et al., PNAS 2015. WEEK 2 EMBODIED WELLBEING: 500ml water on waking SOURCE: Ganio et al., British Journal of Nutrition 2011. 4-7-8 breathing SOURCE: Brown & Gerbarg, J. Alt. Comp. Medicine 2005. Delay coffee 90 min SOURCE: Lovallo et al., Psychosomatic Medicine 2006. 20-min walk daily NOTE: splitting into 2x10 min produces EQUIVALENT cardiovascular and metabolic benefits to one 20-min session SOURCE: Murphy et al., J Am Coll Nutr 2002 + Buettner, Blue Zones 2005. WEEK 3 POSITIVE EMOTIONS GGIA BERKELEY: 3 specific gratitudes nightly SOURCE: Emmons & McCullough, J. Personality & Social Psychology 2003. Gratitude letter SOURCE: Seligman et al., American Psychologist 2005. Savouring 30 sec/day SOURCE: Bryant & Veroff, Savoring 2007 GGIA Berkeley. Screen-free meal SOURCE: Allirot et al., British Journal of Nutrition 2013. WEEK 4 RELATIONAL WEALTH HARVARD: Deep conversation daily Harvard Study of Adult Development 80 years 724 men relationship quality is #1 predictor of health and happiness at 80 SOURCE: Waldinger & Schulz, The Good Life 2023. Acts of kindness SOURCE: Dunn, Aknin & Norton, Science 2008. Unexpected calls SOURCE: Epley & Schroeder, J. Experimental Psychology 2014. Express appreciation SOURCE: GGIA Berkeley. WEEK 5 AWARENESS AND WONDER: 10-min meditation after 8 weeks increased prefrontal grey matter reduced amygdala 38% anxiety reduction SOURCE: Holzel et al., Psychiatry Research Neuroimaging 2011 Harvard/MGH. Awe walk weekly SOURCE: Sturm et al., Emotion 2022 Keltner Lab UC Berkeley. 1 hour digital-free/day SOURCE: Newport, Deep Work 2016. 20 min nature SOURCE: Hunter et al., Frontiers in Psychology 2019. WEEK 6 PHYSICAL FOUNDATION: Aerobic exercise 3x/week reduces bad mental health days 43% NOTE: accumulated short bouts 3x10 min produce similar benefits to one 30-min session SOURCE: Chekroud et al., Lancet Psychiatry 2018 + Jakicic et al., JAMA 1999. Cold shower SOURCE: Shevchuk, Medical Hypotheses 2008. Declutter SOURCE: McMains & Kastner, J. Neuroscience 2011 Princeton. Food environment SOURCE: Wansink, Cornell Food and Brand Lab. WEEK 7 INNER COMPASS: Self-compassion 5 min/day SOURCE: Neff & Germer, J. Clinical Psychology 2013. Identify meaning daily SOURCE: Fredrickson et al., PNAS 2013. Flow activity SOURCE: Csikszentmihalyi, Flow 1990 GGIA aligned. Good life 3 sentences SOURCE: Lyubomirsky, The How of Happiness 2008. WEEK 8 PERMANENT STACK: Review stack SOURCE: Fogg, Tiny Habits Stanford 2019. Social anchor SOURCE: Waldinger & Schulz 2023. Wellbeing OS SOURCE: Baumeister & Tierney, Willpower 2011. Celebrate SOURCE: Fogg, Tiny Habits Stanford 2019.`;

function Chat({isPro, setTab, t}) {
  const isDesktop = useIsDesktop();
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
    <>
      {isDesktop && <div onClick={()=>setOpen(false)} style={{position:"fixed",inset:0,zIndex:240,background:"rgba(28,24,20,0.4)",backdropFilter:"blur(2px)"}}/>}
      <div style={{position:"fixed",zIndex:250,display:"flex",flexDirection:"column",background:cream,...(isDesktop ? {top:0,right:0,bottom:0,width:480,boxShadow:"-12px 0 60px rgba(0,0,0,0.18)",borderLeft:"1px solid "+mist} : {inset:0})}}>
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
    </>
  );
}

function Blog({t}) {
  const isDesktop = useIsDesktop();
  const [open,setOpen] = useState(null);
  const posts = t.blogPosts;
  const post = posts.find(p=>p.id===open);
  const mist="#E8E2D8"; const stone="#8A8070"; const ink="#1C1814";
  const cream="#F8F4EE"; const sand="#EDE7DC"; const ember="#C8440A";
  const containerMax = isDesktop ? 1100 : 620;
  if(open&&post) return (
    <div style={{background:cream,minHeight:"100vh"}}>
      <div style={{background:ink,padding:isDesktop?"32px 32px 28px":"20px 20px 18px"}}>
        <div style={{maxWidth:containerMax,margin:"0 auto"}}>
          <button onClick={()=>setOpen(null)} style={{background:"none",border:"none",color:"#888",cursor:"pointer",fontFamily:"monospace",fontSize:11,letterSpacing:"0.08em",marginBottom:isDesktop?20:12,padding:0}}>{t.blogBack}</button>
          <div style={{maxWidth:isDesktop?760:"100%"}}>
            <div style={{fontSize:isDesktop?12:10,color:post.color,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:isDesktop?10:7}}>{post.tag} - {post.readTime}</div>
            <h1 style={{color:"white",fontSize:isDesktop?"clamp(28px,3.5vw,40px)":"clamp(16px,4vw,22px)",fontFamily:"Georgia,serif",fontWeight:"normal",lineHeight:1.25,margin:0,letterSpacing:"-0.5px"}}>{post.title}</h1>
          </div>
        </div>
      </div>
      <div style={{maxWidth:containerMax,margin:"0 auto",padding:isDesktop?"40px 32px 80px":"26px 20px 56px"}}>
        <div style={{maxWidth:isDesktop?760:"100%"}}>
          <p style={{fontSize:isDesktop?17:14,color:ink,lineHeight:1.8,margin:isDesktop?"0 0 22px":"0 0 16px",fontStyle:"italic"}}>{post.excerpt}</p>
          <div style={{background:sand,border:"1px solid "+mist,borderRadius:12,padding:isDesktop?"16px 20px":"13px 16px",marginBottom:isDesktop?24:18}}>
            <div style={{fontSize:isDesktop?11:10,color:stone,fontFamily:"monospace",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:4}}>Primary source</div>
            <div style={{fontSize:isDesktop?14:13,color:ink}}>{post.author}</div>
          </div>
          <div style={{background:"white",border:"1px solid "+mist,borderRadius:14,padding:isDesktop?"22px 22px":"18px 16px"}}>
            <div style={{fontSize:isDesktop?11:10,color:stone,fontFamily:"monospace",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:isDesktop?12:9}}>{t.blogRelated}</div>
            <div style={{fontSize:isDesktop?14:13,color:ink,lineHeight:1.7}}>{post.related}</div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div style={{background:cream,minHeight:"100vh"}}>
      <div style={{background:ink,padding:isDesktop?"48px 32px 36px":"30px 20px 22px"}}>
        <div style={{maxWidth:containerMax,margin:"0 auto"}}>
          <div style={{fontSize:isDesktop?12:10,color:ember,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:isDesktop?10:7}}>The Science Brief</div>
          <h2 style={{color:"white",fontSize:isDesktop?32:20,fontFamily:"Georgia,serif",fontWeight:"normal",margin:isDesktop?"0 0 6px":"0 0 4px",letterSpacing:"-0.5px"}}>{t.blogTitle}</h2>
          <p style={{color:"#888",fontSize:isDesktop?14:12,margin:0,fontStyle:"italic"}}>{t.blogSub}</p>
        </div>
      </div>
      <div style={{maxWidth:containerMax,margin:"0 auto",padding:isDesktop?"24px 24px 80px":"16px 10px 56px"}}>
        {/* Featured */}
        <div onClick={()=>setOpen(posts[0].id)} style={{background:ink,borderRadius:16,padding:isDesktop?"40px 36px":"24px 20px",marginBottom:isDesktop?20:10,cursor:"pointer",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:-40,right:-40,width:isDesktop?260:150,height:isDesktop?260:150,borderRadius:"50%",background:"radial-gradient(circle,rgba(200,68,10,0.2) 0%,transparent 70%)",pointerEvents:"none"}}/>
          <div style={{maxWidth:isDesktop?720:"100%"}}>
            <div style={{fontSize:isDesktop?12:10,color:posts[0].color,fontFamily:"monospace",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:isDesktop?10:7}}>{t.blogFeatured} - {posts[0].tag}</div>
            <h3 style={{color:"white",fontSize:isDesktop?26:16,fontFamily:"Georgia,serif",fontWeight:"normal",margin:isDesktop?"0 0 14px":"0 0 10px",lineHeight:1.3,letterSpacing:"-0.4px"}}>{posts[0].title}</h3>
            <p style={{color:"#888",fontSize:isDesktop?14:12,margin:isDesktop?"0 0 16px":"0 0 12px",lineHeight:1.65}}>{isDesktop?posts[0].excerpt:posts[0].excerpt.slice(0,150)+"..."}</p>
            <div style={{fontSize:isDesktop?12:10,color:"#555",fontStyle:"italic",marginBottom:isDesktop?14:10}}>{posts[0].author}</div>
            <div style={{fontSize:isDesktop?13:11,color:posts[0].color,fontFamily:"monospace"}}>Read -{">"}</div>
          </div>
        </div>
        {/* Other posts grid */}
        <div style={{display:isDesktop?"grid":"block",gridTemplateColumns:isDesktop?"repeat(3,1fr)":"none",gap:isDesktop?16:0}}>
          {posts.slice(1).map(p=>(
            <div key={p.id} onClick={()=>setOpen(p.id)} style={{background:"white",border:"1px solid "+mist,borderRadius:14,padding:isDesktop?"20px 20px":"14px 14px",marginBottom:isDesktop?0:8,cursor:"pointer",display:"flex",gap:isDesktop?14:11}}>
              <div style={{width:4,alignSelf:"stretch",borderRadius:2,background:p.color,flexShrink:0}}/>
              <div style={{flex:1}}>
                <div style={{fontSize:isDesktop?10:9,color:p.color,fontFamily:"monospace",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:isDesktop?7:4}}>{p.tag} - {p.readTime}</div>
                <div style={{fontSize:isDesktop?16:13,fontFamily:"Georgia,serif",color:ink,lineHeight:1.35,marginBottom:isDesktop?8:4,letterSpacing:"-0.2px"}}>{p.title}</div>
                <div style={{fontSize:isDesktop?12:11,color:stone,lineHeight:1.55}}>{p.excerpt.slice(0,isDesktop?120:100)}...</div>
                <div style={{fontSize:isDesktop?11:10,color:p.color,fontFamily:"monospace",marginTop:isDesktop?12:7}}>Read -{">"}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Newsletter signup */}
        <div style={{marginTop:isDesktop?32:10,background:sand,border:"1px solid "+mist,borderRadius:14,padding:isDesktop?"32px 36px":"18px 16px",display:isDesktop?"grid":"block",gridTemplateColumns:isDesktop?"1fr 1fr":"none",gap:isDesktop?32:0,alignItems:"center"}}>
          <div>
            <div style={{fontSize:isDesktop?11:10,fontFamily:"monospace",color:ember,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:isDesktop?8:5}}>Weekly Science Brief</div>
            <div style={{fontSize:isDesktop?20:13,fontFamily:"Georgia,serif",color:ink,marginBottom:isDesktop?8:5,lineHeight:1.3,letterSpacing:"-0.3px"}}>{t.newsletterTitle}</div>
            <div style={{fontSize:isDesktop?13:11,color:stone,marginBottom:isDesktop?0:13,lineHeight:1.6}}>{t.newsletterSub}</div>
          </div>
          <div style={{display:"flex",gap:7}}>
            <input placeholder={t.newsletterPlaceholder} style={{flex:1,padding:isDesktop?"12px 14px":"9px 12px",border:"1px solid "+mist,borderRadius:8,fontSize:isDesktop?14:12,background:"white",color:ink,outline:"none",fontFamily:"Georgia,serif"}}/>
            <button style={{background:ember,color:"white",border:"none",borderRadius:8,padding:isDesktop?"12px 22px":"9px 16px",fontSize:isDesktop?14:13,cursor:"pointer",flexShrink:0,fontFamily:"Georgia,serif"}}>-{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}


function Breadcrumb({tab, habitView, setTab, setHabitView, t, isDesktop}) {
  const stone = "#8A8070"; const ember = "#C8440A"; const mist = "#E8E2D8";
  const ink = "#1C1814";
  const tabLabels = {home:t.nav.home,program:t.nav.program,pricing:t.nav.pricing,blog:t.nav.blog,faq:t.nav.faq};
  const segments = [{label:t.nav.home,onClick:()=>{setTab("home");setHabitView(null);}}];
  if(tab!=="home"){
    segments.push({label:tabLabels[tab],onClick:tab!=="home"?()=>{setTab(tab);setHabitView(null);}:null});
  }
  if(habitView){
    segments.push({label:habitView.habit.title,onClick:null});
  }
  return (
    <div style={{background:"white",borderBottom:"1px solid "+mist,padding:"0"}}>
      <div style={{maxWidth:isDesktop?1200:620,margin:"0 auto",padding:isDesktop?"0 32px":"0 10px",display:"flex",alignItems:"center",gap:0,overflowX:"auto",height:isDesktop?30:26}}>
        {segments.map((seg,i)=>(
          <span key={i} style={{display:"flex",alignItems:"center",flexShrink:0}}>
            {i>0&&<span style={{fontSize:isDesktop?11:10,color:ember,fontFamily:"monospace",margin:"0 6px"}}>{">"}</span>}
            <span
              onClick={seg.onClick||undefined}
              style={{fontSize:isDesktop?11:10,fontFamily:"monospace",color:seg.onClick?ink:stone,cursor:seg.onClick?"pointer":"default",letterSpacing:"0.04em",maxWidth:isDesktop?320:180,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textDecoration:seg.onClick?"underline":"none",textDecorationColor:mist}}
            >{seg.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}


export default function App() {
  const isDesktop = useIsDesktop();
  const [tab,setTab] = useState("home");
  const [lang,setLang] = useState("en");
  const [checked,setChecked] = useState({});
  const [streak,setStreak] = useState(0);
  const [isPro,setIsPro] = useState(false);
  const [habitView,setHabitView] = useState(null);
  const t = TR[lang];
  const ember="#C8440A"; const mist="#E8E2D8"; const stone="#8A8070";
  const ink="#1C1814"; const cream="#F8F4EE"; const sand="#EDE7DC";

  useEffect(()=>{
    const totalDone=Object.values(checked).filter(Boolean).length;
    setStreak(totalDone>0?Math.floor(totalDone/2):0);
  },[checked]);

  const tabs=[{id:"home",label:t.nav.home},{id:"program",label:t.nav.program},{id:"pricing",label:t.nav.pricing},{id:"blog",label:t.nav.blog},{id:"faq",label:t.nav.faq}];
  const handleTabChange = (id) => { setTab(id); setHabitView(null); };

  return (
    <div style={{fontFamily:"Georgia,'Times New Roman',serif",minHeight:"100vh",background:cream}}>
      <div style={{position:"sticky",top:0,zIndex:100,background:"rgba(248,244,238,0.96)",backdropFilter:"blur(8px)",borderBottom:"1px solid "+mist}}>
        <div style={{maxWidth:isDesktop?1200:620,margin:"0 auto",display:"flex",alignItems:"center",padding:isDesktop?"0 32px":"0 10px"}}>
          <div style={{padding:isDesktop?"16px 0 12px":"10px 0 8px",marginRight:isDesktop?32:4,flexShrink:0}}>
            <span style={{fontSize:isDesktop?20:13,fontFamily:"Georgia,serif",color:ink,letterSpacing:"-0.4px",fontWeight:"bold"}}>tiny<span style={{color:ember}}>well</span></span>
          </div>
          <div style={{display:"flex",flex:1,overflowX:"auto",gap:isDesktop?4:0}}>
            {tabs.map(tt=>(
              <button key={tt.id} onClick={()=>handleTabChange(tt.id)} style={{padding:isDesktop?"16px 14px 14px":"11px 9px 9px",background:"none",border:"none",cursor:"pointer",borderBottom:"2px solid "+(tab===tt.id?ember:"transparent"),transition:"border-color 0.2s",whiteSpace:"nowrap",flexShrink:0}}>
                <span style={{fontSize:isDesktop?12:10,fontFamily:"monospace",letterSpacing:"0.07em",textTransform:"uppercase",color:tab===tt.id?ember:stone,fontWeight:tab===tt.id?"bold":"normal"}}>{tt.label}</span>
              </button>
            ))}
          </div>
          <div style={{display:"flex",background:sand,borderRadius:6,padding:2,gap:1,border:"1px solid "+mist,flexShrink:0,marginLeft:isDesktop?16:6}}>
            {["en","fr"].map(l=>(
              <button key={l} onClick={()=>setLang(l)} style={{padding:isDesktop?"5px 12px":"3px 8px",borderRadius:4,border:"none",cursor:"pointer",fontSize:isDesktop?11:10,fontFamily:"monospace",fontWeight:"bold",letterSpacing:"0.05em",textTransform:"uppercase",background:lang===l?ember:"transparent",color:lang===l?"white":stone,transition:"all 0.15s"}}>{l}</button>
            ))}
          </div>
        </div>
      </div>
      {tab!=="home"&&<Breadcrumb tab={tab} habitView={habitView} setTab={handleTabChange} setHabitView={setHabitView} t={t} isDesktop={isDesktop}/>}
      {habitView&&<HabitDetail habit={habitView.habit} week={habitView.week} onBack={()=>setHabitView(null)} t={t}/>}
      {!habitView&&tab==="home"&&<Landing setTab={setTab} t={t}/>}
      {!habitView&&tab==="program"&&<Program checked={checked} setChecked={setChecked} streak={streak} isPro={isPro} setTab={setTab} t={t} lang={lang} setHabitView={setHabitView}/>}
      {!habitView&&tab==="pricing"&&<Pricing t={t} isPro={isPro} setIsPro={setIsPro} setTab={setTab}/>}
      {!habitView&&tab==="blog"&&<Blog t={t}/>}
      {!habitView&&tab==="faq"&&<FAQ t={t} setTab={setTab}/>}
    </div>
  );
}
