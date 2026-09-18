export const LEVELS = [
  {
    id: 'level-1',
    slug: 'level1',
    number: '01',
    title: 'Who Are You?',
    subtitle: 'Personality, quirks, and everyday life',
    tagline: 'Get past small talk into how you think, what makes you laugh, and what makes you tick.',
    accentColor: '#E11D48',
    bgColor: 'rgba(225, 29, 72, 0.08)',
    cardBg: '#FFFFFF',
    borderColor: 'rgba(225, 29, 72, 0.25)'
  },
  {
    id: 'level-2',
    slug: 'level2',
    number: '02',
    title: 'What Made You You?',
    subtitle: 'Origins, childhood, and shaping experiences',
    tagline: 'Unpack the stories, family patterns, and turning points that shaped who you are today.',
    accentColor: '#D97706',
    bgColor: 'rgba(217, 119, 6, 0.08)',
    cardBg: '#FFFFFF',
    borderColor: 'rgba(217, 119, 6, 0.25)'
  },
  {
    id: 'level-3',
    slug: 'level3',
    number: '03',
    title: 'How Do You Show Up?',
    subtitle: 'Relationships, conflict, trust, and communication',
    tagline: 'Discover how you relate to others, navigate conflict, communicate needs, and build trust.',
    accentColor: '#0284C7',
    bgColor: 'rgba(2, 132, 199, 0.08)',
    cardBg: '#FFFFFF',
    borderColor: 'rgba(2, 132, 199, 0.25)'
  },
  {
    id: 'level-4',
    slug: 'level4',
    number: '04',
    title: 'What Are You Carrying?',
    subtitle: 'Inner world, coping, fears, and quiet hopes',
    tagline: 'Understand the person beneath the persona—internal dialogue, tensions, fears, and gratitude.',
    accentColor: '#8B5CF6',
    bgColor: 'rgba(139, 92, 246, 0.08)',
    cardBg: '#FFFFFF',
    borderColor: 'rgba(139, 92, 246, 0.25)'
  },
  {
    id: 'level-5',
    slug: 'level5',
    number: '05',
    title: 'Who Are You With Jesus?',
    subtitle: 'Surrender, calling, grace, and transformation',
    tagline: 'Where theology meets your real story—discovering how Jesus walks with and changes you.',
    accentColor: '#C59B27',
    bgColor: 'rgba(197, 155, 39, 0.08)',
    cardBg: '#FFFFFF',
    borderColor: 'rgba(197, 155, 39, 0.25)'
  },
  {
    id: 'final-round',
    slug: 'reflection',
    number: 'FINAL',
    title: 'The Reflection Round',
    subtitle: 'Mutual understanding, honor, and blessing',
    tagline: 'Synthesize what you learned about each other, speak blessing, and step out changed.',
    accentColor: '#059669',
    bgColor: 'rgba(5, 150, 105, 0.08)',
    cardBg: '#FFFFFF',
    borderColor: 'rgba(5, 150, 105, 0.25)'
  }
];

export const QUESTIONS = [
  // ==========================================
  // LEVEL 1: WHO ARE YOU? (20 CARDS)
  // ==========================================
  {
    id: 'q1-1',
    levelId: 'level-1',
    archetype: 'standard',
    category: 'Passion',
    text: 'What’s something you could spend three hours doing and not realize three hours passed?',
    deeper: 'When did this first become a love of yours?',
    options: null,
    subtext: 'Share what naturally absorbs your focus and brings you joy.'
  },
  {
    id: 'q1-2',
    levelId: 'level-1',
    archetype: 'standard',
    category: 'Social Personality',
    text: 'When you’re completely comfortable around people, what version of you comes out?',
    deeper: 'What is an environment where that version of you feels easiest to access?',
    options: null,
    subtext: 'Think about who you are when you have zero need to impress anyone.'
  },
  {
    id: 'q1-3',
    levelId: 'level-1',
    archetype: 'standard',
    category: 'Quirks & Competition',
    text: 'What’s something you get weirdly competitive about, even when it doesn’t matter?',
    deeper: 'Where did that competitive streak come from?',
    options: null,
    subtext: 'Board games, driving, walking speed, trivia, or packing efficiently?'
  },
  {
    id: 'q1-4',
    levelId: 'level-1',
    archetype: 'standard',
    category: 'Emotional Preferences',
    text: 'What’s a very small, specific thing that can instantly make a bad day better?',
    deeper: 'When was the last time that small thing saved your day?',
    options: null,
    subtext: 'A specific snack, a song, a quiet drive, fresh sheets, or a voice memo?'
  },
  {
    id: 'q1-5',
    levelId: 'level-1',
    archetype: 'standard',
    category: 'Hidden Interests',
    text: 'What’s something you genuinely love that you almost never get to talk about?',
    deeper: 'Why does it usually stay in the background?',
    options: null,
    subtext: 'A niche interest, obscure genre, childhood fascination, or hobby.'
  },
  {
    id: 'q1-6',
    levelId: 'level-1',
    archetype: 'standard',
    category: 'Private Side',
    text: 'What’s something your closest friends know about you that a new person would never guess?',
    deeper: 'Why do you think that part of you stays behind the curtain at first?',
    options: null,
    subtext: 'Look for the gap between first impressions and true familiarity.'
  },
  {
    id: 'q1-7',
    levelId: 'level-1',
    archetype: 'standard',
    category: 'Private Behavior',
    text: 'What is something you do completely differently when nobody else is in the room?',
    deeper: 'What does that reveal about your true unmasked self?',
    options: null,
    subtext: 'Unfiltered habits, how you eat, how you think out loud, or how you relax.'
  },
  {
    id: 'q1-8',
    levelId: 'level-1',
    archetype: 'standard',
    category: 'Belonging',
    text: 'What’s a very specific sensory detail, routine, or feeling that makes you feel at home somewhere?',
    deeper: 'Where is a place outside of your house where you felt that instantly?',
    options: null,
    subtext: 'A smell, a temperature, the sound of laughter, shoes off, or music playing.'
  },
  {
    id: 'q1-9',
    levelId: 'level-1',
    archetype: 'standard',
    category: 'Desires & Social Needs',
    text: 'What’s something you quietly wish people would invite you to do more often?',
    deeper: 'What holds you back from initiating it yourself?',
    options: null,
    subtext: 'Spontaneous coffee, late-night talks, museum trips, outdoor adventures, or doing nothing together.'
  },
  {
    id: 'q1-10',
    levelId: 'level-1',
    archetype: 'standard',
    category: 'Relational Identity',
    text: 'What kind of person do you naturally become around your oldest, closest friends?',
    deeper: 'Who in your life brings out the truest version of you?',
    options: null,
    subtext: 'The storyteller, the listener, the goofy one, or the practical anchor?'
  },
  {
    id: 'q1-11',
    levelId: 'level-1',
    archetype: 'diagnostic',
    category: 'Social Dynamics',
    text: 'In a group gathering, which mode do you naturally default into?',
    deeper: null,
    options: [
      'The Observant Listener',
      'The Conversation Spark',
      'The Quiet Anchor',
      'The Host Making Sure Everyone is OK'
    ],
    subtext: 'Point to your natural reflex in the room.'
  },
  {
    id: 'q1-12',
    levelId: 'level-1',
    archetype: 'standard',
    category: 'Harmless Opinions',
    text: 'What is something you have surprisingly passionate opinions about that ultimately doesn’t matter at all?',
    deeper: 'What hill are you irrationally prepared to die on?',
    options: null,
    subtext: 'Food debates, movie sequels, pronunciation, or household rules.'
  },
  {
    id: 'q1-13',
    levelId: 'level-1',
    archetype: 'standard',
    category: 'Daily Rhythm',
    text: 'What part of your daily routine do you fiercely protect from interruption?',
    deeper: 'What happens to your mood if that rhythm gets thrown off?',
    options: null,
    subtext: 'Morning silence, post-work decompression, workout, or reading before sleep.'
  },
  {
    id: 'q1-14',
    levelId: 'level-1',
    archetype: 'diagnostic',
    category: 'Energy Drain',
    text: 'What drains your social battery faster than anything else?',
    deeper: null,
    options: [
      'Surface Small Talk',
      'Chaos & Loud Noise',
      'Constant Decision Making',
      'Unresolved Conflict in the Room',
      'Feeling Pressure to Perform'
    ],
    subtext: 'Identify what wears you out first.'
  },
  {
    id: 'q1-15',
    levelId: 'level-1',
    archetype: 'standard',
    category: 'First Impressions',
    text: 'What is something people often misinterpret about you before they actually get to know you?',
    deeper: 'Can you recall a time someone admitted their initial impression was totally wrong?',
    options: null,
    subtext: 'Intimidating, shy, aloof, overly serious, or overly bubbly?'
  },
  {
    id: 'q1-16',
    levelId: 'level-1',
    archetype: 'standard',
    category: 'Humor & Joy',
    text: 'What kind of humor makes you laugh so hard your stomach hurts?',
    deeper: 'Who is the person who can make you laugh faster than anyone else?',
    options: null,
    subtext: 'Dry sarcasm, physical comedy, awkward situations, or unhinged memes?'
  },
  {
    id: 'q1-17',
    levelId: 'level-1',
    archetype: 'standard',
    category: 'Spontaneity vs Order',
    text: 'How do you react when a whole weekend’s plans get cancelled at the last minute?',
    deeper: 'Is it secret relief or restless frustration?',
    options: null,
    subtext: 'Do you rejoice in the open schedule or scramble to fill it?'
  },
  {
    id: 'q1-18',
    levelId: 'level-1',
    archetype: 'standard',
    category: 'Natural Gravitation',
    text: 'If you were left completely alone in a giant bookstore or record shop for two hours, which section would we find you in?',
    deeper: 'What draws you toward that world?',
    options: null,
    subtext: 'History, theology, design, sci-fi, biography, cooking, or psychology?'
  },
  {
    id: 'q1-19',
    levelId: 'level-1',
    archetype: 'diagnostic',
    category: 'Group Decisions',
    text: 'When a group cannot decide where to eat or what to do next, what is your instinct?',
    deeper: null,
    options: [
      'Step in and make the call',
      'Go with whatever others want',
      'Secretly feel impatient',
      'Quietly slip away'
    ],
    subtext: 'Your instinct when inertia strikes.'
  },
  {
    id: 'q1-20',
    levelId: 'level-1',
    archetype: 'story',
    category: 'Signature Story',
    text: 'Tell us about a funny, quirky, or absurd moment in your life that perfectly summarizes your personality.',
    deeper: null,
    options: null,
    subtext: 'A story that captures your essence in under two minutes.'
  },

  // ==========================================
  // LEVEL 2: WHAT MADE YOU YOU? (20 CARDS)
  // ==========================================
  {
    id: 'q2-1',
    levelId: 'level-2',
    archetype: 'standard',
    category: 'Childhood Continuity',
    text: 'What were you like as an eight-year-old that you are still like today?',
    deeper: 'Can you recall a specific childhood moment when that trait was on full display?',
    options: null,
    subtext: 'Look for the continuous thread connecting your past to your present.'
  },
  {
    id: 'q2-2',
    levelId: 'level-2',
    archetype: 'standard',
    category: 'Childhood Desires',
    text: 'What did you love doing as a child that you eventually stopped doing as you grew up?',
    deeper: 'Why did you let it go, and do you ever miss it?',
    options: null,
    subtext: 'Drawing, climbing, writing stories, playing instruments, or daydreaming?'
  },
  {
    id: 'q2-3',
    levelId: 'level-2',
    archetype: 'standard',
    category: 'Family Role',
    text: 'What was something you were known for in your family or household growing up?',
    deeper: 'Did that role feel like a gift or an expectation you had to carry?',
    options: null,
    subtext: 'The peacemaker, the responsible one, the achiever, the baby, or the rebel?'
  },
  {
    id: 'q2-4',
    levelId: 'level-2',
    archetype: 'standard',
    category: 'Childhood Needs',
    text: 'What did you need a lot of as a child that you didn’t always get or know how to ask for?',
    deeper: 'How does that unmet need still echo in your life today?',
    options: null,
    subtext: 'Validation, emotional safety, freedom, guidance, or tenderness.'
  },
  {
    id: 'q2-5',
    levelId: 'level-2',
    archetype: 'story',
    category: 'Defining Memory',
    text: 'Tell us about one childhood or teenage memory that explains a lot about who you are today.',
    deeper: null,
    options: null,
    subtext: 'An origin scene that acts as a key to your personality.'
  },
  {
    id: 'q2-6',
    levelId: 'level-2',
    archetype: 'standard',
    category: 'Generational Lessons: Success',
    text: 'What did your family or upbringing teach you about what it means to be "successful"?',
    deeper: 'How much of that definition do you still agree with today?',
    options: null,
    subtext: 'Hard work, reputation, stability, financial security, or serving others?'
  },
  {
    id: 'q2-7',
    levelId: 'level-2',
    archetype: 'standard',
    category: 'Generational Lessons: Failure',
    text: 'What did your family teach you about failure—was it met with anger, silence, humor, or problem-solving?',
    deeper: 'Can you remember a specific mistake you made and how the adults around you reacted?',
    options: null,
    subtext: 'Notice how your response to failure was conditioned early on.'
  },
  {
    id: 'q2-8',
    levelId: 'level-2',
    archetype: 'standard',
    category: 'Generational Lessons: Love',
    text: 'How was love expressed in your home growing up: words, affection, acts of service, providing, or high expectations?',
    deeper: 'What felt easiest to feel, and what felt rare?',
    options: null,
    subtext: 'What did love look and feel like in your living room?'
  },
  {
    id: 'q2-9',
    levelId: 'level-2',
    archetype: 'standard',
    category: 'Generational Lessons: Conflict',
    text: 'What did you learn about conflict from watching the adults around you?',
    deeper: 'Did you learn to yell, appease, withdraw, or resolve?',
    options: null,
    subtext: 'Was conflict an explosive storm, a cold silence, or a calm conversation?'
  },
  {
    id: 'q2-10',
    levelId: 'level-2',
    archetype: 'contrast',
    category: 'Generational Legacy',
    text: 'What is one value or habit from your upbringing you are determined to carry forward, and what is one you want to leave behind?',
    deeper: null,
    options: null,
    subtext: 'Honor what was good while intentionally breaking unhelpful cycles.'
  },
  {
    id: 'q2-11',
    levelId: 'level-2',
    archetype: 'standard',
    category: 'Relational Guardrails',
    text: 'What happened in your life that taught you to become careful about trusting people?',
    deeper: 'What was the turning point where you realized not everyone is safe?',
    options: null,
    subtext: 'Share the experience that put up your emotional guardrails.'
  },
  {
    id: 'q2-12',
    levelId: 'level-2',
    archetype: 'story',
    category: 'Growing Up',
    text: 'Tell us about a specific moment when you suddenly realized, "I am not a kid anymore."',
    deeper: null,
    options: null,
    subtext: 'The moment adulthood, responsibility, or mortality became real.'
  },
  {
    id: 'q2-13',
    levelId: 'level-2',
    archetype: 'story',
    category: 'The Unseen Believer',
    text: 'Tell us about a time someone believed in you before you believed in yourself.',
    deeper: null,
    options: null,
    subtext: 'A mentor, friend, teacher, or relative who saw potential in you first.'
  },
  {
    id: 'q2-14',
    levelId: 'level-2',
    archetype: 'story',
    category: 'Out of Place',
    text: 'Tell us about a time you felt completely out of place, and how you handled being on the outside.',
    deeper: null,
    options: null,
    subtext: 'A school, church, city, or gathering where you felt like a total stranger.'
  },
  {
    id: 'q2-15',
    levelId: 'level-2',
    archetype: 'story',
    category: 'Friendship Turning Point',
    text: 'Tell us about a friendship that changed the trajectory of your life.',
    deeper: null,
    options: null,
    subtext: 'A friend who opened a new door, introduced you to faith, or changed your worldview.'
  },
  {
    id: 'q2-16',
    levelId: 'level-2',
    archetype: 'standard',
    category: 'School Years',
    text: 'What kind of kid were you in school—the rule follower, the invisible one, the perfectionist, the class clown, or the rebel?',
    deeper: 'What were you trying to protect or prove back then?',
    options: null,
    subtext: 'How did your younger self navigate social belonging?'
  },
  {
    id: 'q2-17',
    levelId: 'level-2',
    archetype: 'story',
    category: 'Fork in the Road',
    text: 'Tell us about a decision that felt small at the time, but completely changed the direction of your life.',
    deeper: null,
    options: null,
    subtext: 'An unplanned conversation, showing up to an event, or taking a chance.'
  },
  {
    id: 'q2-18',
    levelId: 'level-2',
    archetype: 'standard',
    category: 'Outside Influences',
    text: 'Besides your parents, who was an adult who had a profound, lasting impact on the person you became?',
    deeper: 'What did they say or model that stayed with you?',
    options: null,
    subtext: 'A coach, pastor, youth leader, aunt, uncle, or neighbor.'
  },
  {
    id: 'q2-19',
    levelId: 'level-2',
    archetype: 'standard',
    category: 'Perspective Shift',
    text: 'What is something you were confident you were right about when you were younger that you now see completely differently?',
    deeper: 'What experience humbled or expanded your view?',
    options: null,
    subtext: 'Reflect on how experience softened your certainties.'
  },
  {
    id: 'q2-20',
    levelId: 'level-2',
    archetype: 'standard',
    category: 'Overcoming',
    text: 'What was a season in your earlier life that felt overwhelming while you were in it, but gave you strength you still rely on today?',
    deeper: 'What did you learn about your own resilience?',
    options: null,
    subtext: 'A battle you survived that now serves as proof of your endurance.'
  },

  // ==========================================
  // LEVEL 3: HOW DO YOU SHOW UP? (20 CARDS)
  // ==========================================
  {
    id: 'q3-1',
    levelId: 'level-3',
    archetype: 'standard',
    category: 'Feeling Cared For',
    text: 'What makes you feel deeply cared for by a friend?',
    deeper: 'Can you share a specific moment when someone did that for you?',
    options: null,
    subtext: 'Remembering details, proactive checking in, food, prayers, or quiet company.'
  },
  {
    id: 'q3-2',
    levelId: 'level-3',
    archetype: 'standard',
    category: 'Relational Safety',
    text: 'What makes you feel safe enough to be completely honest with someone without filtering yourself?',
    deeper: 'What is an immediate sign that tells you a room or person is not safe?',
    options: null,
    subtext: 'Zero judgment, confidentiality, steady presence, or reciprocated vulnerability.'
  },
  {
    id: 'q3-3',
    levelId: 'level-3',
    archetype: 'standard',
    category: 'Withdrawal Instincts',
    text: 'What makes you instinctively pull back or go cold toward someone you care about?',
    deeper: 'What does your withdrawal look like—silence, busyness, humor, or physical distance?',
    options: null,
    subtext: 'Knowing your withdrawal cues helps others recognize when you are hurting.'
  },
  {
    id: 'q3-4',
    levelId: 'level-3',
    archetype: 'diagnostic',
    category: 'Conflict Style',
    text: 'When someone hurts your feelings or frustrates you, what is your immediate first reflex?',
    deeper: null,
    options: [
      'Explain myself / Confront immediately',
      'Withdraw into quiet distance',
      'Rush to fix it & smooth things over',
      'Pretend I’m fine / Brush it off',
      'Vent to a third party'
    ],
    subtext: 'Your default instinct before you have time to think.'
  },
  {
    id: 'q3-5',
    levelId: 'level-3',
    archetype: 'diagnostic',
    category: 'Vulnerability Gate',
    text: 'Which sentence is genuinely hardest for you to say out loud to someone close to you?',
    deeper: null,
    options: [
      '“I need help.”',
      '“I was wrong / I’m sorry.”',
      '“I don’t know.”',
      '“You hurt my feelings.”'
    ],
    subtext: 'Identify which phrase triggers the greatest internal friction.'
  },
  {
    id: 'q3-6',
    levelId: 'level-3',
    archetype: 'standard',
    category: 'Unspoken Needs',
    text: 'What is something you genuinely need from people close to you, but almost never ask for?',
    deeper: 'What makes it so difficult to ask for directly?',
    options: null,
    subtext: 'Affirmation, practical support, uninterrupted time, touch, or honest feedback.'
  },
  {
    id: 'q3-7',
    levelId: 'level-3',
    archetype: 'contrast',
    category: 'Giving vs Receiving',
    text: 'What is something you are very generous at giving to other people, but feel terribly awkward receiving yourself?',
    deeper: null,
    options: null,
    subtext: 'Gifts, compliments, hospitality, grace, or financial help?'
  },
  {
    id: 'q3-8',
    levelId: 'level-3',
    archetype: 'standard',
    category: 'Being Misunderstood',
    text: 'Who in your life do you feel most misunderstood by, and what has made it hard to clear the air?',
    deeper: 'What is the assumption they make about you that hurts the most?',
    options: null,
    subtext: 'Examine where the communication bridge broke down.'
  },
  {
    id: 'q3-9',
    levelId: 'level-3',
    archetype: 'standard',
    category: 'Boundaries',
    text: 'What is a healthy boundary you’ve had to learn the hard way in relationships?',
    deeper: 'What did it cost you before you learned to set it?',
    options: null,
    subtext: 'Saying no, protecting your peace, or stopping people-pleasing.'
  },
  {
    id: 'q3-10',
    levelId: 'level-3',
    archetype: 'standard',
    category: 'Space vs Closeness',
    text: 'When you are going through a difficult time, do you want people to check in constantly, or do you need space first?',
    deeper: 'What is the ideal way a friend can step into your world when you’re overwhelmed?',
    options: null,
    subtext: 'Help your friends know how to love you when the storm hits.'
  },
  {
    id: 'q3-11',
    levelId: 'level-3',
    archetype: 'standard',
    category: 'Loneliness in Community',
    text: 'Have you ever felt completely lonely even while surrounded by friends or at church? What was going on underneath?',
    deeper: 'What would have helped bridge the gap?',
    options: null,
    subtext: 'Physical proximity is not the same as being known.'
  },
  {
    id: 'q3-12',
    levelId: 'level-3',
    archetype: 'standard',
    category: 'Trust Signals',
    text: 'What is one small green flag that makes you trust a person quickly, and one red flag that makes you shut down?',
    deeper: 'Where did you learn to watch for that red flag?',
    options: null,
    subtext: 'How they speak about others, how they listen, or consistency.'
  },
  {
    id: 'q3-13',
    levelId: 'level-3',
    archetype: 'story',
    category: 'Grace Encounter',
    text: 'Tell us about a time someone gave you unexpected grace when you fully expected frustration, anger, or judgment.',
    deeper: null,
    options: null,
    subtext: 'A moment where mercy completely disarmed your defenses.'
  },
  {
    id: 'q3-14',
    levelId: 'level-3',
    archetype: 'standard',
    category: 'Showing Love',
    text: 'How do you naturally show love to others when you really care about them?',
    deeper: 'Do the people in your life usually recognize it as love, or does it get missed?',
    options: null,
    subtext: 'Practical errands, sending songs, showing up silently, or verbal praise.'
  },
  {
    id: 'q3-15',
    levelId: 'level-3',
    archetype: 'story',
    category: 'Seen Without Speaking',
    text: 'Tell us about a time someone noticed you were struggling before you said a single word. What did that feel like?',
    deeper: null,
    options: null,
    subtext: 'Being noticed in silence is one of the deepest gifts.'
  },
  {
    id: 'q3-16',
    levelId: 'level-3',
    archetype: 'standard',
    category: 'Repair & Apology',
    text: 'What does a meaningful apology sound like to you—and what kind of apology feels completely empty?',
    deeper: 'Can you recall an apology that genuinely healed a relationship for you?',
    options: null,
    subtext: 'Taking ownership vs offering excuses.'
  },
  {
    id: 'q3-17',
    levelId: 'level-3',
    archetype: 'standard',
    category: 'Rejection Sensitivity',
    text: 'When a friend takes days to respond or plans fall through, what narrative does your mind instinctively jump to?',
    deeper: 'How do you bring yourself back to what is actually true?',
    options: null,
    subtext: '“They don’t care,” “I did something wrong,” or “They are just busy”?'
  },
  {
    id: 'q3-18',
    levelId: 'level-3',
    archetype: 'standard',
    category: 'Ideal Friendship',
    text: 'If you could describe the exact kind of friendship your heart is longing for in this season, what does it look like?',
    deeper: 'What step can you take to invite that in?',
    options: null,
    subtext: 'Accountability, laughter, spiritual depth, or effortless hangouts.'
  },
  {
    id: 'q3-19',
    levelId: 'level-3',
    archetype: 'contrast',
    category: 'Patience',
    text: 'Where are you noticeably more patient and forgiving with other people than you are with yourself?',
    deeper: null,
    options: null,
    subtext: 'Give yourself the same grace you hand out so freely to others.'
  },
  {
    id: 'q3-20',
    levelId: 'level-3',
    archetype: 'standard',
    category: 'Encouragement That Landed',
    text: 'What is a compliment or word of encouragement someone gave you years ago that you still remember word for word?',
    deeper: 'Why did that particular sentence stick to your bones?',
    options: null,
    subtext: 'Specific words spoken in love hold permanent power.'
  },

  // ==========================================
  // LEVEL 4: WHAT ARE YOU CARRYING? (20 CARDS)
  // ==========================================
  {
    id: 'q4-1',
    levelId: 'level-4',
    archetype: 'standard',
    category: 'The Shield',
    text: 'What is something you pretend doesn’t affect you—but secretly gets to you every time?',
    deeper: 'Why do you feel the need to act unbothered by it?',
    options: null,
    subtext: 'Examine the comments or situations that pierce right through your armor.'
  },
  {
    id: 'q4-2',
    levelId: 'level-4',
    archetype: 'standard',
    category: 'Survival Mechanisms',
    text: 'What part of your personality was shaped more by survival or self-protection than truth?',
    deeper: 'When did that protective wall start going up?',
    options: null,
    subtext: 'Humor, perfectionism, hyper-independence, aggression, or being agreeable?'
  },
  {
    id: 'q4-3',
    levelId: 'level-4',
    archetype: 'standard',
    category: 'Midnight Thoughts',
    text: 'What does your mind tend to replay when you are alone in bed at night and everything is quiet?',
    deeper: 'Is it past conversations, worries about tomorrow, or old regrets?',
    options: null,
    subtext: 'What fills the silence when all external distractions fade?'
  },
  {
    id: 'q4-4',
    levelId: 'level-4',
    archetype: 'diagnostic',
    category: 'Under Stress',
    text: 'When life feels completely overwhelming and stress peaks, what do you become more of?',
    deeper: null,
    options: [
      'Hyper-Quiet & Withdrawn',
      'Controlling & Micromanaging',
      'Sarcastic / Overly Funny',
      'Frantic & Ultra-Busy',
      'Irritated & Short-Tempered'
    ],
    subtext: 'Your signature stress disguise.'
  },
  {
    id: 'q4-5',
    levelId: 'level-4',
    archetype: 'diagnostic',
    category: 'Failure Reflex',
    text: 'When you fail at something you cared deeply about, what is the very first sentence your mind says to you?',
    deeper: null,
    options: [
      '“You should have known better.”',
      '“You’re not cut out for this.”',
      '“How do I fix this right now?”',
      '“It wasn’t my fault anyway.”'
    ],
    subtext: 'Notice the immediate voice of your internal critic.'
  },
  {
    id: 'q4-6',
    levelId: 'level-4',
    archetype: 'diagnostic',
    category: 'Uncertainty Reflex',
    text: 'When life feels completely unpredictable, what is the thing you instinctively try to control?',
    deeper: null,
    options: [
      'My schedule & routine',
      'Other people’s perceptions',
      'Food / Exercise / Body',
      'Money & Spending',
      'Nothing (I freeze / check out)'
    ],
    subtext: 'Where you reach for the illusion of control.'
  },
  {
    id: 'q4-7',
    levelId: 'level-4',
    archetype: 'contrast',
    category: 'Public vs Private Self',
    text: 'What do you want other people to think about you, and what do you actually think about yourself in private?',
    deeper: null,
    options: null,
    subtext: 'Name the difference between your public impression and private reality.'
  },
  {
    id: 'q4-8',
    levelId: 'level-4',
    archetype: 'contrast',
    category: 'Stated Values vs Reality',
    text: 'What is something you sincerely say you value, but your schedule and habits prove you struggle to make room for?',
    deeper: null,
    options: null,
    subtext: 'Rest, relationships, prayer, health, or creative pursuits?'
  },
  {
    id: 'q4-9',
    levelId: 'level-4',
    archetype: 'contrast',
    category: 'Confidence vs Fragility',
    text: 'What is an area of life where you feel rock-solid confident, and what is an area where you feel surprisingly fragile?',
    deeper: null,
    options: null,
    subtext: 'We are all strong in places and tender in others.'
  },
  {
    id: 'q4-10',
    levelId: 'level-4',
    archetype: 'values',
    category: 'What You Won’t Become',
    text: 'What is something you would never want to become, even if becoming it guaranteed you wealth and success?',
    deeper: 'Where did that conviction come from?',
    options: null,
    subtext: 'Arrogant, distant, disconnected from family, cynical, or compromising.'
  },
  {
    id: 'q4-11',
    levelId: 'level-4',
    archetype: 'values',
    category: 'Earning Respect',
    text: 'What kind of person earns your respect almost immediately—and what makes you lose respect for someone just as fast?',
    deeper: 'What core boundary does that touch in you?',
    options: null,
    subtext: 'Humility, courage, loyalty, follow-through, or kindness to the vulnerable.'
  },
  {
    id: 'q4-12',
    levelId: 'level-4',
    archetype: 'values',
    category: 'Beneath the Resume',
    text: 'If someone described you accurately to a room of strangers but left out all your titles, work, and achievements, what would you want them to mention?',
    deeper: null,
    options: null,
    subtext: 'Who are you when the accolades are stripped away?'
  },
  {
    id: 'q4-13',
    levelId: 'level-4',
    archetype: 'standard',
    category: 'Comparison Trap',
    text: 'When you find yourself falling into comparison or envy, who or what is usually triggering it?',
    deeper: 'What fear does that comparison tap into?',
    options: null,
    subtext: 'Career timing, relationship status, appearance, or spiritual depth?'
  },
  {
    id: 'q4-14',
    levelId: 'level-4',
    archetype: 'standard',
    category: 'Hidden Gratitude',
    text: 'What is something you are deeply grateful happened to you now, even though you hated every second of it when it occurred?',
    deeper: 'How did that season reshape your character?',
    options: null,
    subtext: 'Pain that produced endurance and unexpected wisdom.'
  },
  {
    id: 'q4-15',
    levelId: 'level-4',
    archetype: 'standard',
    category: 'Present Wonder',
    text: 'What is something about your life right now that you genuinely don’t want to take for granted?',
    deeper: 'Take a moment to speak that gratitude out loud.',
    options: null,
    subtext: 'A friend, your health, peace in your home, or a simple routine.'
  },
  {
    id: 'q4-16',
    levelId: 'level-4',
    archetype: 'values',
    category: 'Protecting What Matters',
    text: 'What is one conviction or relationship you would protect even if it cost you your reputation or convenience?',
    deeper: null,
    options: null,
    subtext: 'What is non-negotiable on your holy ground?'
  },
  {
    id: 'q4-17',
    levelId: 'level-4',
    archetype: 'standard',
    category: 'The Unspoken Wish',
    text: 'What is something you wish the people in your life understood about what you carry every day, without you having to explain it?',
    deeper: 'What stops you from letting them carry it with you?',
    options: null,
    subtext: 'Bring the quiet weight into a room that can hold it.'
  },
  {
    id: 'q4-18',
    levelId: 'level-4',
    archetype: 'standard',
    category: 'Lingering Regret',
    text: 'What’s a past decision or conversation that you still think about more than you’d like to admit?',
    deeper: 'What grace or closure has been hard to accept there?',
    options: null,
    subtext: 'Where do you need to finally release yourself from the hook?'
  },
  {
    id: 'q4-19',
    levelId: 'level-4',
    archetype: 'standard',
    category: 'Looking Forward',
    text: 'What would make you look back at your life thirty years from now and think, “I am so glad I lived this way”?',
    deeper: 'What choice today keeps you on that path?',
    options: null,
    subtext: 'Focus on legacy, love, faithfulness, and character.'
  },
  {
    id: 'q4-20',
    levelId: 'level-4',
    archetype: 'story',
    category: 'The Mask Comes Off',
    text: 'Tell us about a time you tried so hard to keep it all together until you finally broke down and let someone see you were falling apart.',
    deeper: null,
    options: null,
    subtext: 'The relief that comes when the facade collapses.'
  },

  // ==========================================
  // LEVEL 5: WHO ARE YOU WITH JESUS? (20 CARDS)
  // ==========================================
  {
    id: 'q5-1',
    levelId: 'level-5',
    archetype: 'standard',
    category: 'Character of God',
    text: 'What part of God’s character is easiest for you to believe, and which part is hardest to believe when life gets difficult?',
    deeper: 'Compassion, sovereignty, justice, presence, or provision?',
    options: null,
    subtext: 'Tether your theology to your actual lived experience.'
  },
  {
    id: 'q5-2',
    levelId: 'level-5',
    archetype: 'standard',
    category: 'Trust & Release',
    text: 'What is hardest for you to trust God with, and why do you think that particular thing is so difficult to release?',
    deeper: 'What outcome are you terrified will happen if you let go?',
    options: null,
    subtext: 'Your timeline, your children, finances, relationships, or your calling?'
  },
  {
    id: 'q5-3',
    levelId: 'level-5',
    archetype: 'standard',
    category: 'The Divine Gaze',
    text: 'When you picture God looking directly at you right now, what do you honestly imagine He sees and feels?',
    deeper: 'Is it disappointment, patience, affection, or expectation?',
    options: null,
    subtext: 'Unpack the lens through which you view your Heavenly Father.'
  },
  {
    id: 'q5-4',
    levelId: 'level-5',
    archetype: 'contrast',
    category: 'Forgiveness vs Enjoyment',
    text: 'Which is easier for your heart to believe: that God forgives you, or that God actually enjoys being with you?',
    deeper: null,
    options: null,
    subtext: 'There is a vast difference between being pardoned and being cherished.'
  },
  {
    id: 'q5-5',
    levelId: 'level-5',
    archetype: 'standard',
    category: 'Spiritual Silence',
    text: 'What do you tend to do when God feels silent or distant in your life?',
    deeper: 'Do you press in, get cynical, work harder, or drift into numbness?',
    options: null,
    subtext: 'Notice how you navigate the quiet seasons of faith.'
  },
  {
    id: 'q5-6',
    levelId: 'level-5',
    archetype: 'standard',
    category: 'Head vs Heart',
    text: 'What is something about God you understand completely in your head, but still struggle to live like it’s true?',
    deeper: 'What would your daily life look like if your heart caught up with your mind?',
    options: null,
    subtext: 'Name the gap between doctrine and your daily emotional reality.'
  },
  {
    id: 'q5-7',
    levelId: 'level-5',
    archetype: 'standard',
    category: 'Faith Evolution',
    text: 'What did you believe about God when you were younger that has matured or changed as you’ve experienced real life?',
    deeper: 'What shattered the earlier, simpler view?',
    options: null,
    subtext: 'How has your faith outgrown tidy formulas?'
  },
  {
    id: 'q5-8',
    levelId: 'level-5',
    archetype: 'story',
    category: 'Unexpected Kindness',
    text: 'Tell us about a time you experienced God’s kindness in a way you completely didn’t expect or deserve.',
    deeper: null,
    options: null,
    subtext: 'A moment where His tenderness caught you off guard.'
  },
  {
    id: 'q5-9',
    levelId: 'level-5',
    archetype: 'standard',
    category: 'Gospel in the Flesh',
    text: 'What part of following Jesus has most visibly changed the way you treat other people?',
    deeper: 'Who is someone you love differently today because of Jesus?',
    options: null,
    subtext: 'Where has Christ’s love altered your patience, forgiveness, or generosity?'
  },
  {
    id: 'q5-10',
    levelId: 'level-5',
    archetype: 'standard',
    category: 'The Resisted Lesson',
    text: 'What is something you keep asking God to change or take away, and what do you think He might be teaching you through it instead?',
    deeper: 'Why is that lesson so hard to embrace?',
    options: null,
    subtext: 'Surrendering your agenda for His refining work.'
  },
  {
    id: 'q5-11',
    levelId: 'level-5',
    archetype: 'standard',
    category: 'Performance vs Grace',
    text: 'Where in your life or faith do you still quietly feel like you have to earn God’s approval?',
    deeper: 'What happens to your peace when you slip up?',
    options: null,
    subtext: 'Resting in the finished work of Jesus over your spiritual checklist.'
  },
  {
    id: 'q5-12',
    levelId: 'level-5',
    archetype: 'story',
    category: 'The Surprising God',
    text: 'Tell us about a time God surprised you—either by an unexpected answer, a shut door, or a sudden peace.',
    deeper: null,
    options: null,
    subtext: 'When His ways were demonstrably higher than your plans.'
  },
  {
    id: 'q5-13',
    levelId: 'level-5',
    archetype: 'values',
    category: 'The Overlooked Christ',
    text: 'What do you think Jesus cares deeply about in a person that the modern church or culture often overlooks?',
    deeper: 'How does that challenge your own priorities?',
    options: null,
    subtext: 'Quiet humility, mercy to outcasts, sincerity, or secret obedience.'
  },
  {
    id: 'q5-14',
    levelId: 'level-5',
    archetype: 'standard',
    category: 'Calling & Reluctance',
    text: 'What is something you sense God nudging you toward, but you feel unqualified or hesitant to step into?',
    deeper: 'What is the fear saying to you?',
    options: null,
    subtext: 'Stepping out of the boat when the waves look high.'
  },
  {
    id: 'q5-15',
    levelId: 'level-5',
    archetype: 'story',
    category: 'Prayer in the Dark',
    text: 'Tell us about a time a season of prayer changed your heart, even when your external circumstances didn’t change at all.',
    deeper: null,
    options: null,
    subtext: 'When the miracle was peace inside instead of a changed situation outside.'
  },
  {
    id: 'q5-16',
    levelId: 'level-5',
    archetype: 'standard',
    category: 'What He Is Forming',
    text: 'Knowing your quirks, wounds, and hopes, what kind of person do you sense Jesus is patiently forming you into?',
    deeper: 'What old layer of yourself is having to die in the process?',
    options: null,
    subtext: 'Trusting the slow, intentional work of the Master Potter.'
  },
  {
    id: 'q5-17',
    levelId: 'level-5',
    archetype: 'standard',
    category: 'Doubts & Anchors',
    text: 'What kind of situation makes you wrestle most with your faith, and what is the anchor that always pulls you back?',
    deeper: 'What truth keeps you from walking away?',
    options: null,
    subtext: 'Honest questions and the foundational truth you cannot deny.'
  },
  {
    id: 'q5-18',
    levelId: 'level-5',
    archetype: 'standard',
    category: 'Generous Grace',
    text: 'When has your understanding of the cross gone from an abstract doctrine to something that broke your heart wide open?',
    deeper: 'What was happening in your life when that clicked?',
    options: null,
    subtext: 'Moving from knowledge to personal salvation and tears of gratitude.'
  },
  {
    id: 'q5-19',
    levelId: 'level-5',
    archetype: 'standard',
    category: 'Spiritual Hunger',
    text: 'If Jesus sat across the table from you tonight and asked, “What do you want Me to do for you?”, what would you say?',
    deeper: 'Speak the raw, unedited answer.',
    options: null,
    subtext: 'Name the deepest longing sitting in your chest right now.'
  },
  {
    id: 'q5-20',
    levelId: 'level-5',
    archetype: 'standard',
    category: 'Holy Ground',
    text: 'Where in your life right now are you standing on holy ground—in a place that requires reverence, courage, and faith?',
    deeper: 'Who are you inviting into that space with you?',
    options: null,
    subtext: 'Take off your sandals; God is present in this exact moment.'
  },

  // ==========================================
  // FINAL ROUND: THE REFLECTION ROUND (8 CARDS)
  // ==========================================
  {
    id: 'qf-1',
    levelId: 'final-round',
    archetype: 'reflection',
    category: 'Being Understood',
    text: 'After everything you’ve shared tonight, what is something about who you are that you hope this group understands better now?',
    deeper: null,
    options: null,
    subtext: 'Name the fruit of being truly seen.'
  },
  {
    id: 'qf-2',
    levelId: 'final-round',
    archetype: 'reflection',
    category: 'The Unexpected Gift',
    text: 'What is something you learned about someone sitting here tonight that you didn’t expect, and why did it move you?',
    deeper: null,
    options: null,
    subtext: 'Celebrate the stories that touched your heart.'
  },
  {
    id: 'qf-3',
    levelId: 'final-round',
    archetype: 'reflection',
    category: 'How to Be Loved',
    text: 'Knowing where you are in life right now, what is one practical way this community can genuinely love and support you in the coming weeks?',
    deeper: null,
    options: null,
    subtext: 'Prayer, checking in, dinner, quiet support, or fun distractions.'
  },
  {
    id: 'qf-4',
    levelId: 'final-round',
    archetype: 'reflection',
    category: 'What to Remember',
    text: 'If this group only remembered one thing you said tonight, what would you want it to be?',
    deeper: null,
    options: null,
    subtext: 'Your single anchor takeaway.'
  },
  {
    id: 'qf-5',
    levelId: 'final-round',
    archetype: 'reflection',
    category: 'The Ongoing Story',
    text: 'Knowing what you know about yourself now—your history, your struggles, and your hopes—what do you hope Jesus is still writing into your story?',
    deeper: null,
    options: null,
    subtext: 'He who began a good work in you will carry it on to completion.'
  },
  {
    id: 'qf-6',
    levelId: 'final-round',
    archetype: 'reflection',
    category: 'Relief & Truth',
    text: 'What was the most surprising moment of relief or freedom you felt during this game tonight?',
    deeper: null,
    options: null,
    subtext: 'The weight that lifted when honesty entered the room.'
  },
  {
    id: 'qf-7',
    levelId: 'final-round',
    archetype: 'reflection',
    category: 'Seeing Christ in Others',
    text: 'Look at the person to your right: What is one reflection of Jesus’ character that you saw clearly in them as they shared tonight?',
    deeper: null,
    options: null,
    subtext: 'His tenderness, wisdom, joy, steadfastness, or courage.'
  },
  {
    id: 'qf-8',
    levelId: 'final-round',
    archetype: 'reflection',
    category: 'A Blessing Spoken',
    text: 'Before we close, speak a one-sentence blessing, prayer, or declaration of hope over the person across from you.',
    deeper: null,
    options: null,
    subtext: 'Speak life into their next season.'
  }
];
