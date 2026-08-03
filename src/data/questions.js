export const LEVELS = [
  {
    id: 'level-1',
    slug: 'level1',
    number: '01',
    title: 'First Impressions & Good Vibes',
    subtitle: 'Icebreakers and getting to know each other',
    tagline: 'Perfect for breaking the ice and getting to know one another.',
    accentColor: '#E11D48',
    bgColor: 'rgba(225, 29, 72, 0.08)',
    cardBg: '#FFFFFF',
    borderColor: 'rgba(225, 29, 72, 0.25)'
  },
  {
    id: 'level-2',
    slug: 'level2',
    number: '02',
    title: 'Real Talk & Life Stories',
    subtitle: 'Vulnerability, growth, and real life',
    tagline: 'Go past surface answers into what is actually on your heart.',
    accentColor: '#0284C7',
    bgColor: 'rgba(2, 132, 199, 0.08)',
    cardBg: '#FFFFFF',
    borderColor: 'rgba(2, 132, 199, 0.25)'
  },
  {
    id: 'level-3',
    slug: 'level3',
    number: '03',
    title: 'Faith & Life with Jesus',
    subtitle: 'Walking with God, hearing his voice, and growing together',
    tagline: 'Warm, honest conversation about walking with Jesus every single day.',
    accentColor: '#D97706',
    bgColor: 'rgba(217, 119, 6, 0.08)',
    cardBg: '#FFFFFF',
    borderColor: 'rgba(217, 119, 6, 0.25)'
  },
  {
    id: 'level-4',
    slug: 'level4',
    number: '04',
    title: 'Heart to Heart',
    subtitle: 'Raw vulnerability, confessions, and miracle turning points',
    tagline: 'A safe space for deep transparency, hard surrender, and breakthrough stories.',
    accentColor: '#8B5CF6',
    bgColor: 'rgba(139, 92, 246, 0.08)',
    cardBg: '#FFFFFF',
    borderColor: 'rgba(139, 92, 246, 0.25)'
  },
  {
    id: 'wildcards',
    slug: 'level5',
    number: '05',
    title: 'Wildcards & Group Actions',
    subtitle: 'Group actions, quick prayers, and fun challenges',
    tagline: 'Interactive moments to encourage, activate, and bless one another.',
    accentColor: '#059669',
    bgColor: 'rgba(5, 150, 105, 0.08)',
    cardBg: '#FFFFFF',
    borderColor: 'rgba(5, 150, 105, 0.25)'
  }
];

export const QUESTIONS = [
  // LEVEL 1: FIRST IMPRESSIONS & GOOD VIBES (25 QUESTIONS)
  {
    id: 'q1-1',
    levelId: 'level-1',
    type: 'question',
    category: 'Perception',
    text: 'What was your honest first impression of me when we first met?',
    subtext: 'Keep it fun and real!'
  },
  {
    id: 'q1-2',
    levelId: 'level-1',
    type: 'question',
    category: 'Observation',
    text: 'What is a gift or strength you see in me, even if I do not notice it myself?',
    subtext: 'Think about encouragement, kindness, wisdom, or leadership.'
  },
  {
    id: 'q1-4',
    levelId: 'level-1',
    type: 'question',
    category: 'Vibe Check',
    text: 'What is something people often get wrong about me before they get to know me?',
    subtext: 'Share what surprised you when you got past the surface.'
  },
  {
    id: 'q1-5',
    levelId: 'level-1',
    type: 'question',
    category: 'Daily Life',
    text: 'What is 1 habit or routine in my life that you admire?',
    subtext: 'It can be spiritual, practical, or just how I organize my day.'
  },
  {
    id: 'q1-6',
    levelId: 'level-1',
    type: 'question',
    category: 'Perception',
    text: 'On a scale of 1 to 10, how easy is it for me to share what is on my mind?',
    subtext: 'Explain why you picked that number.'
  },
  {
    id: 'q1-7',
    levelId: 'level-1',
    type: 'question',
    category: 'Connection',
    text: 'What is 1 small detail or moment that let you know we would be good friends?',
    subtext: 'Recall a specific moment, conversation, or laugh.'
  },
  {
    id: 'q1-8',
    levelId: 'level-1',
    type: 'question',
    category: 'Observation',
    text: 'Do I seem more energized when I am helping others, creating things, resting, or leading?',
    subtext: 'Where do you see me come alive most?'
  },
  {
    id: 'q1-9',
    levelId: 'level-1',
    type: 'question',
    category: 'Fun',
    text: 'If our group were stuck on an island, what role would I naturally take?',
    subtext: 'Group leader, fire builder, chef, or peacekeeper?'
  },
  {
    id: 'q1-10',
    levelId: 'level-1',
    type: 'question',
    category: 'Vibe Check',
    text: 'What topic could I talk about for 30 minutes straight without stopping?',
    subtext: 'Name my ultimate topic of interest.'
  },
  {
    id: 'q1-12',
    levelId: 'level-1',
    type: 'question',
    category: 'Observation',
    text: 'If you had to pick 1 emotion I bring into a room, what is it?',
    subtext: 'Joy, calm, focus, excitement, or peace?'
  },
  {
    id: 'q1-13',
    levelId: 'level-1',
    type: 'question',
    category: 'Everyday Habits',
    text: 'What drink or snack do you immediately think of when you see me?',
    subtext: 'Match me with my go-to order.'
  },
  {
    id: 'q1-14',
    levelId: 'level-1',
    type: 'question',
    category: 'Group Dynamic',
    text: 'In group hangouts, am I usually the planner, the hype person, or the one making sure everyone feels included?',
    subtext: 'Describe my role when we hang out.'
  },
  {
    id: 'q1-16',
    levelId: 'level-1',
    type: 'question',
    category: 'First Impressions',
    text: 'When did our friendship move from small talk to real friendship?',
    subtext: 'Describe that specific moment.'
  },
  {
    id: 'q1-18',
    levelId: 'level-1',
    type: 'question',
    category: 'Observation',
    text: 'How do I react when plans change at the last minute?',
    subtext: 'Do I adapt quickly, or do I need a minute to reset?'
  },
  {
    id: 'q1-19',
    levelId: 'level-1',
    type: 'question',
    category: 'Perception',
    text: 'What compliment have I given you that actually stuck with you?',
    subtext: 'Share why it meant something to you.'
  },
  {
    id: 'q1-20',
    levelId: 'level-1',
    type: 'question',
    category: 'Everyday Life',
    text: 'What time of day do you think I am most active and productive?',
    subtext: 'Early morning riser or late night thinker?'
  },
  {
    id: 'q1-21',
    levelId: 'level-1',
    type: 'question',
    category: 'Fun',
    text: 'If my life were a movie, what style or genre would the soundtrack be?',
    subtext: 'Indie film, feel-good comedy, or high-energy adventure?'
  },
  {
    id: 'q1-22',
    levelId: 'level-1',
    type: 'question',
    category: 'Observation',
    text: 'What do I do when I am secretly stressed or tired, even if I try to hide it?',
    subtext: 'Point out my telltale sign.'
  },
  {
    id: 'q1-23',
    levelId: 'level-1',
    type: 'question',
    category: 'Perception',
    text: 'What is 1 word you would use to describe the feeling you get when hanging out with me?',
    subtext: 'Peaceful, inspiring, fun, joyful, or grounded?'
  },
  {
    id: 'q1-24',
    levelId: 'level-1',
    type: 'question',
    category: 'Connection',
    text: 'What is a memory of us together that always makes you smile?',
    subtext: 'Take a moment to share it.'
  },
  {
    id: 'q1-25',
    levelId: 'level-1',
    type: 'question',
    category: 'Perception',
    text: 'If you had to pick 1 Bible story or person that reminds you of me, who comes to mind?',
    subtext: 'David, Barnabas, Mary, Peter, or Nehemiah?'
  },

  // LEVEL 2: REAL TALK & LIFE STORIES (25 QUESTIONS)
  {
    id: 'q2-1',
    levelId: 'level-2',
    type: 'question',
    category: 'Current Season',
    text: 'What is a challenge you are navigating right now that you have not talked about much?',
    subtext: 'Take your time. You are in a safe, caring space.'
  },
  {
    id: 'q2-2',
    levelId: 'level-2',
    type: 'question',
    category: 'Growth',
    text: 'What is an area of your life where God has been helping you grow recently?',
    subtext: 'Think about patience, trust, boundaries, or letting go of pride.'
  },
  {
    id: 'q2-3',
    levelId: 'level-2',
    type: 'question',
    category: 'Vulnerability',
    text: 'What is a prayer you prayed recently that felt really honest and deep?',
    subtext: 'What changed in your heart after praying it?'
  },
  {
    id: 'q2-4',
    levelId: 'level-2',
    type: 'question',
    category: 'Relationships',
    text: 'What does good community look like to you in this season?',
    subtext: 'Share how friends can support you best right now.'
  },
  {
    id: 'q2-5',
    levelId: 'level-2',
    type: 'question',
    category: 'Heart Check',
    text: 'What is 1 thing you are holding onto right now that you know you need to let go of?',
    subtext: 'It could be an expectation, a past hurt, or a timeline.'
  },
  {
    id: 'q2-6',
    levelId: 'level-2',
    type: 'question',
    category: 'Reflection',
    text: 'Looking back at who you were 2 years ago, what lesson would you share with that version of yourself?',
    subtext: 'Give yourself some grace and encouragement.'
  },
  {
    id: 'q2-7',
    levelId: 'level-2',
    type: 'question',
    category: 'Work & Rest',
    text: 'How are you balancing work and rest right now?',
    subtext: 'Are you resting well, or running on empty?'
  },
  {
    id: 'q2-8',
    levelId: 'level-2',
    type: 'question',
    category: 'Friendship',
    text: 'When you feel overwhelmed or down, how can a friend support you best?',
    subtext: 'Quiet space, encouraging words, practical help, or a coffee run?'
  },
  {
    id: 'q2-9',
    levelId: 'level-2',
    type: 'question',
    category: 'Gratitude',
    text: 'What is a good thing that happened this past month that you forgot to give thanks for?',
    subtext: 'Take a moment to celebrate it.'
  },
  {
    id: 'q2-10',
    levelId: 'level-2',
    type: 'question',
    category: 'Honesty',
    text: 'What is 1 dream in your heart that you sometimes worry might not happen?',
    subtext: 'Share it openly with the group.'
  },
  {
    id: 'q2-11',
    levelId: 'level-2',
    type: 'question',
    category: 'Vulnerability',
    text: 'What is a healthy boundary you set recently to protect your peace?',
    subtext: 'Was it hard to stick to?'
  },
  {
    id: 'q2-12',
    levelId: 'level-2',
    type: 'question',
    category: 'Mental Health',
    text: 'When worry or stress creeps in, what is your first response?',
    subtext: 'Do you pull back, talk to a friend, or go straight to prayer?'
  },
  {
    id: 'q2-13',
    levelId: 'level-2',
    type: 'question',
    category: 'Growth',
    text: 'What mistake from your past turned into a valuable lesson that made you stronger?',
    subtext: 'Reflect on how you grew from it.'
  },
  {
    id: 'q2-14',
    levelId: 'level-2',
    type: 'question',
    category: 'Relationships',
    text: 'Have you ever felt lonely even in a crowd or at church? What helped you get through it?',
    subtext: 'Share what made a difference.'
  },
  {
    id: 'q2-15',
    levelId: 'level-2',
    type: 'question',
    category: 'Heart Check',
    text: 'Is there a situation where you know you need to forgive someone, but it still feels hard?',
    subtext: 'Share as much or as little as you feel comfortable.'
  },
  {
    id: 'q2-16',
    levelId: 'level-2',
    type: 'question',
    category: 'Career & Calling',
    text: 'Are you feeling energized by your daily work or studies right now, or are you looking for a change?',
    subtext: 'An honest check-in on your daily routine.'
  },
  {
    id: 'q2-17',
    levelId: 'level-2',
    type: 'question',
    category: 'Family & Roots',
    text: 'What habit or mindset from your family background are you choosing to change in your own life?',
    subtext: 'Recognize the courage it takes to change.'
  },
  {
    id: 'q2-18',
    levelId: 'level-2',
    type: 'question',
    category: 'Honesty',
    text: 'What is 1 request you feel hesitant to ask God for because you are worried about the answer?',
    subtext: 'Talk through that feeling.'
  },
  {
    id: 'q2-19',
    levelId: 'level-2',
    type: 'question',
    category: 'Friendship',
    text: 'What makes you feel truly appreciated and valued by a friend?',
    subtext: 'Help us understand what matters most to you.'
  },
  {
    id: 'q2-20',
    levelId: 'level-2',
    type: 'question',
    category: 'Current Season',
    text: 'If you had to give this current chapter of your life a book title, what would it be?',
    subtext: 'A New Start, The Learning Curve, Building Momentum, or Quiet Rest?'
  },
  {
    id: 'q2-21',
    levelId: 'level-2',
    type: 'question',
    category: 'Growth',
    text: 'What piece of advice from a leader, parent, or friend saved you from a big mistake?',
    subtext: 'Share the wisdom you received.'
  },
  {
    id: 'q2-22',
    levelId: 'level-2',
    type: 'question',
    category: 'Vulnerability',
    text: 'What is an insecurity you thought you moved past, but felt again recently?',
    subtext: 'How are you reminding yourself of what is true?'
  },
  {
    id: 'q2-23',
    levelId: 'level-2',
    type: 'question',
    category: 'Gratitude',
    text: 'Who in your life or community has quietly encouraged or helped you recently?',
    subtext: 'Give them a quick shoutout right now.'
  },
  {
    id: 'q2-24',
    levelId: 'level-2',
    type: 'question',
    category: 'Reflection',
    text: 'What is 1 simple habit you started recently that gave you more peace of mind?',
    subtext: 'Share a practical tip.'
  },
  {
    id: 'q2-25',
    levelId: 'level-2',
    type: 'question',
    category: 'Real Talk',
    text: 'If you could improve 1 thing about how our generation builds friendships, what would it be?',
    subtext: 'Share your honest thoughts.'
  },

  // LEVEL 3: DEEP PERSONAL – IDENTITY, TENSION, REALITY
  {
    id: 'q3-L3-1',
    levelId: 'level-3',
    type: 'question',
    category: 'Identity & Self-Awareness',
    text: 'What version of yourself do people see that isn’t fully true?',
    subtext: 'Focus on honesty and real-life specifics.'
  },
  {
    id: 'q3-L3-2',
    levelId: 'level-3',
    type: 'question',
    category: 'Identity & Self-Awareness',
    text: 'What’s something you pretend doesn’t affect you—but actually does?',
    subtext: 'Examine hidden tensions and quiet impact.'
  },
  {
    id: 'q3-L3-3',
    levelId: 'level-3',
    type: 'question',
    category: 'Identity & Self-Awareness',
    text: 'When do you feel most like a "fake" version of yourself?',
    subtext: 'Reflect on moments of performance vs authenticity.'
  },
  {
    id: 'q3-L3-4',
    levelId: 'level-3',
    type: 'question',
    category: 'Identity & Self-Awareness',
    text: 'What part of your personality was shaped more by survival than truth?',
    subtext: 'Unpack habits formed out of protection.'
  },
  {
    id: 'q3-L3-5',
    levelId: 'level-3',
    type: 'question',
    category: 'Fear & Insecurity',
    text: 'What are you afraid people would discover about you if they knew everything?',
    subtext: 'Bring quiet fears into a safe, grace-filled room.'
  },
  {
    id: 'q3-L3-6',
    levelId: 'level-3',
    type: 'question',
    category: 'Fear & Insecurity',
    text: 'What’s a quiet insecurity that still influences your decisions today?',
    subtext: 'Recognize how subtle fears steer your choices.'
  },
  {
    id: 'q3-L3-7',
    levelId: 'level-3',
    type: 'question',
    category: 'Fear & Insecurity',
    text: 'When was the last time fear—not wisdom—made your choice?',
    subtext: 'Evaluate recent decisions honestly.'
  },
  {
    id: 'q3-L3-8',
    levelId: 'level-3',
    type: 'question',
    category: 'Relationships',
    text: 'Who do you feel misunderstood by—and why haven’t you fixed it?',
    subtext: 'Reflect on relational barriers and hesitation.'
  },
  {
    id: 'q3-L3-9',
    levelId: 'level-3',
    type: 'question',
    category: 'Relationships',
    text: 'What kind of person do you tend to avoid, and what does that reveal about you?',
    subtext: 'Explore personal triggers and self-awareness.'
  },
  {
    id: 'q3-L3-10',
    levelId: 'level-3',
    type: 'question',
    category: 'Relationships',
    text: 'When have you withheld love even though you knew you should give it?',
    subtext: 'Acknowledge moments of emotional hesitation.'
  },
  {
    id: 'q3-L3-11',
    levelId: 'level-3',
    type: 'question',
    category: 'Regret & Reflection',
    text: 'What’s a decision you still think about more than you’d like?',
    subtext: 'Reflect on lingering thoughts and grace.'
  },
  {
    id: 'q3-L3-12',
    levelId: 'level-3',
    type: 'question',
    category: 'Regret & Reflection',
    text: 'What lesson did you learn too late?',
    subtext: 'Share hard-earned wisdom.'
  },
  {
    id: 'q3-L3-13',
    levelId: 'level-3',
    type: 'question',
    category: 'Regret & Reflection',
    text: 'If your past self could confront you today, what would they call you out on?',
    subtext: 'Look at your growth and remaining compromises.'
  },
  {
    id: 'q3-L3-14',
    levelId: 'level-3',
    type: 'question',
    category: 'Habits & Patterns',
    text: 'What cycle do you keep repeating even though you know better?',
    subtext: 'Identify persistent personal loops.'
  },
  {
    id: 'q3-L3-15',
    levelId: 'level-3',
    type: 'question',
    category: 'Habits & Patterns',
    text: 'What do you run to when life gets overwhelming?',
    subtext: 'Examine your default coping mechanisms.'
  },
  {
    id: 'q3-L3-16',
    levelId: 'level-3',
    type: 'question',
    category: 'Habits & Patterns',
    text: 'What’s one unhealthy pattern you’ve normalized?',
    subtext: 'Bring awareness to subtle unhealthy routines.'
  },

  // LEVEL 4: SPIRITUAL DEPTH – CONVICTION, SURRENDER, TRANSFORMATION
  {
    id: 'q4-L4-1',
    levelId: 'level-4',
    type: 'question',
    category: 'Faith vs Reality',
    text: 'When has your life not matched what you say you believe?',
    subtext: 'Be transparent about faith gaps.'
  },
  {
    id: 'q4-L4-2',
    levelId: 'level-4',
    type: 'question',
    category: 'Faith vs Reality',
    text: 'What truth from God do you struggle to fully accept?',
    subtext: 'Grace, identity, forgiveness, or sovereign plan?'
  },
  {
    id: 'q4-L4-3',
    levelId: 'level-4',
    type: 'question',
    category: 'Faith vs Reality',
    text: 'Where do you trust God in words but not in action?',
    subtext: 'Pinpoint practical friction in trusting Him.'
  },
  {
    id: 'q4-L4-4',
    levelId: 'level-4',
    type: 'question',
    category: 'Conviction & Obedience',
    text: 'What is God asking you to do that you’re delaying?',
    subtext: 'Reflect on obedience vs hesitation.'
  },
  {
    id: 'q4-L4-5',
    levelId: 'level-4',
    type: 'question',
    category: 'Conviction & Obedience',
    text: 'When was the last time you clearly felt conviction, and what did you do with it?',
    subtext: 'Share your response to the Holy Spirit.'
  },
  {
    id: 'q4-L4-6',
    levelId: 'level-4',
    type: 'question',
    category: 'Conviction & Obedience',
    text: 'What area of your life do you keep negotiating with God about?',
    subtext: 'Finances, relationships, timing, or habits?'
  },
  {
    id: 'q4-L4-7',
    levelId: 'level-4',
    type: 'question',
    category: 'Surrender & Control',
    text: 'What are you still trying to control instead of surrendering?',
    subtext: 'Identify what you need to release.'
  },
  {
    id: 'q4-L4-8',
    levelId: 'level-4',
    type: 'question',
    category: 'Surrender & Control',
    text: 'If God said "give this up," what would be hardest to release?',
    subtext: 'Examine where attachment is strongest.'
  },
  {
    id: 'q4-L4-9',
    levelId: 'level-4',
    type: 'question',
    category: 'Surrender & Control',
    text: 'What outcome are you afraid to trust God with?',
    subtext: 'Talk about fear of the unknown outcome.'
  },
  {
    id: 'q4-L4-10',
    levelId: 'level-4',
    type: 'question',
    category: 'Authenticity in Faith',
    text: 'When do you feel most spiritually "performative"?',
    subtext: 'Reflect on appearance vs heart state.'
  },
  {
    id: 'q4-L4-11',
    levelId: 'level-4',
    type: 'question',
    category: 'Authenticity in Faith',
    text: 'What part of your faith feels real, and what part feels forced?',
    subtext: 'Dissect genuine spiritual fruit vs duty.'
  },
  {
    id: 'q4-L4-12',
    levelId: 'level-4',
    type: 'question',
    category: 'Authenticity in Faith',
    text: 'What do you do spiritually just because it’s expected?',
    subtext: 'Evaluate religious habits vs heart devotions.'
  },
  {
    id: 'q4-L4-13',
    levelId: 'level-4',
    type: 'question',
    category: 'Calling & Purpose',
    text: 'What do you think God is calling you to, but you feel unqualified for?',
    subtext: 'Relying on His strength over personal capability.'
  },
  {
    id: 'q4-L4-14',
    levelId: 'level-4',
    type: 'question',
    category: 'Calling & Purpose',
    text: 'Where do you feel burdened for others but haven’t acted yet?',
    subtext: 'Turn compassion into faithful action.'
  },
  {
    id: 'q4-L4-15',
    levelId: 'level-4',
    type: 'question',
    category: 'Calling & Purpose',
    text: 'If you fully obeyed God right now, what would actually change?',
    subtext: 'Envision the radical output of total surrender.'
  },
  {
    id: 'q4-L4-16',
    levelId: 'level-4',
    type: 'question',
    category: 'Grace & Gospel Depth',
    text: 'Where do you still feel like you have to earn God’s approval?',
    subtext: 'Rest in the finished work of Jesus.'
  },
  {
    id: 'q4-L4-17',
    levelId: 'level-4',
    type: 'question',
    category: 'Mutual Vulnerability',
    text: 'What is something you have never said out loud to a group before, but feel safe enough to share right now?',
    subtext: 'Trust the room. This is holy ground.'
  },
  {
    id: 'q4-L4-18',
    levelId: 'level-4',
    type: 'question',
    category: 'Empathetic Witness',
    text: 'What is a weight you have been carrying alone that you wish someone would just acknowledge without trying to fix it?',
    subtext: 'Sometimes being seen is the healing.'
  },
  {
    id: 'q4-L4-19',
    levelId: 'level-4',
    type: 'question',
    category: 'Shared Burden',
    text: 'If the person next to you was going through the hardest season of their life, what is 1 thing you would want them to know they could ask you for (no questions asked)?',
    subtext: 'Declare your loyalty before it is tested.'
  },
  {
    id: 'q4-L4-20',
    levelId: 'level-4',
    type: 'question',
    category: 'Identity Mirror',
    text: 'Look at the person across from you and tell them: what strength do you see in them that you genuinely wish you had more of?',
    subtext: 'Speak life. Let them hear what you actually see.'
  },
  {
    id: 'q4-L4-21',
    levelId: 'level-4',
    type: 'question',
    category: 'Deep Trust',
    text: 'What is a conversation you have been avoiding with someone you love, and what is holding you back from having it?',
    subtext: 'Name the gap between what you feel and what you have said.'
  },
  {
    id: 'q4-L4-22',
    levelId: 'level-4',
    type: 'question',
    category: 'Honest Need',
    text: 'What kind of friend do you actually need right now - not the kind you think you should want, but the kind your heart is quietly asking for?',
    subtext: 'Be specific. Let people know how to reach you.'
  },
  {
    id: 'q4-L4-23',
    levelId: 'level-4',
    type: 'question',
    category: 'Emotional Courage',
    text: 'When was the last time you cried, and what were the tears really about underneath the surface?',
    subtext: 'Tears reveal what words sometimes cannot.'
  },
  {
    id: 'q4-L4-24',
    levelId: 'level-4',
    type: 'question',
    category: 'Radical Honesty',
    text: 'If everyone in this room could see the internal dialogue you had with yourself today, what would surprise them most?',
    subtext: 'Let people into the conversation you usually have alone.'
  },
  {
    id: 'q4-L4-25',
    levelId: 'level-4',
    type: 'question',
    category: 'Sacred Belonging',
    text: 'What is 1 thing about this group or season that has made you feel less alone, even if you have not said it until now?',
    subtext: 'Gratitude spoken out loud builds permanent bonds.'
  },
  {
    id: 'q4-L4-26',
    levelId: 'level-4',
    type: 'question',
    category: 'Healing Confession',
    text: 'What is a story from your past that still shapes how you show up in relationships today, and are you ready to let it stop defining you?',
    subtext: 'Share the origin. Name the pattern. Choose freedom.'
  },
  {
    id: 'q4-L4-27',
    levelId: 'level-4',
    type: 'question',
    category: 'Unspoken Gratitude',
    text: 'Is there someone in your life who changed your trajectory and never knew it? What would you say to them if they were here right now?',
    subtext: 'Speak it out. The room can hold it.'
  },
  {
    id: 'q4-L4-28',
    levelId: 'level-4',
    type: 'question',
    category: 'Relational Courage',
    text: 'What is 1 thing you wish you could hear from someone you love, but have never asked them to say?',
    subtext: 'Name the words your heart has been waiting for.'
  },
  {
    id: 'q4-L4-29',
    levelId: 'level-4',
    type: 'question',
    category: 'Inner Child',
    text: 'If you could go back and sit with yourself at your lowest point, what would you say to that version of you?',
    subtext: 'Speak with the tenderness you needed then.'
  },
  {
    id: 'q4-L4-30',
    levelId: 'level-4',
    type: 'question',
    category: 'Quiet Grief',
    text: 'What is a loss or ending you never fully grieved because you felt like you had to keep going?',
    subtext: 'You are allowed to feel it here.'
  },
  {
    id: 'q4-L4-31',
    levelId: 'level-4',
    type: 'question',
    category: 'Inherited Weight',
    text: 'What burden did you inherit from your family that was never yours to carry in the first place?',
    subtext: 'Naming it is the first step to putting it down.'
  },
  {
    id: 'q4-L4-32',
    levelId: 'level-4',
    type: 'question',
    category: 'True Belonging',
    text: 'When was the last time you felt fully accepted without having to explain, perform, or prove anything?',
    subtext: 'Recall what that safety felt like.'
  },
  {
    id: 'q4-L4-33',
    levelId: 'level-4',
    type: 'question',
    category: 'Protective Walls',
    text: 'What wall have you built to protect yourself that is now keeping good things out?',
    subtext: 'Sometimes the thing that saved you is the thing you need to release.'
  },
  {
    id: 'q4-L4-34',
    levelId: 'level-4',
    type: 'question',
    category: 'Honest Prayer',
    text: 'If you could pray the most brutally honest prayer right now with zero filter, what would you actually say?',
    subtext: 'He already knows. Say it anyway.'
  },
  {
    id: 'q4-L4-35',
    levelId: 'level-4',
    type: 'question',
    category: 'Legacy & Impact',
    text: 'If the people closest to you described the impact you have had on their lives, what do you hope they would say, and what are you afraid they would say?',
    subtext: 'Let the gap between the two teach you something.'
  },

  // LEVEL 5: WILDCARDS & GROUP ACTIONS (15 CARDS)
  {
    id: 'qw-1',
    levelId: 'wildcards',
    type: 'wildcard',
    category: 'Prayer Action',
    text: 'Group Action: Choose 1 person in the circle and take 60 seconds to pray a quick prayer of encouragement and strength for them.',
    subtext: 'Everyone can extend a hand or speak a word of encouragement.'
  },
  {
    id: 'qw-2',
    levelId: 'wildcards',
    type: 'wildcard',
    category: 'Encouragement',
    text: 'Group Action: Everyone in the circle says 1 genuine sentence of appreciation for the person on their left.',
    subtext: 'No skipping! Keep it simple and sweet.'
  },
  {
    id: 'qw-3',
    levelId: 'wildcards',
    type: 'wildcard',
    category: 'Testimony Blitz',
    text: '60-Second Challenge: Share 1 good thing God did for you this week in under 60 seconds.',
    subtext: 'Keep it brief, joyful, and encouraging.'
  },
  {
    id: 'qw-4',
    levelId: 'wildcards',
    type: 'wildcard',
    category: 'Encouragement',
    text: 'Group Action: Think of 1 encouraging thought or Bible verse for the person sitting across from you, and share it with them.',
    subtext: 'Keep it warm and uplifting.'
  },
  {
    id: 'qw-5',
    levelId: 'wildcards',
    type: 'wildcard',
    category: 'Honest Talk',
    text: 'Wildcard: Share 1 thing you are trusting God for, and 1 worry you are ready to let go of tonight.',
    subtext: 'Being honest brings freedom.'
  },
  {
    id: 'qw-6',
    levelId: 'wildcards',
    type: 'wildcard',
    category: 'Community Connection',
    text: 'Group Action: Pair up with someone and swap 1 prayer request. Check in with each other before Wednesday.',
    subtext: 'Building genuine friendship that lasts.'
  },
  {
    id: 'qw-7',
    levelId: 'wildcards',
    type: 'wildcard',
    category: 'Honor Round',
    text: 'Group Action: Share 1 great quality you notice in the person who drew this card.',
    subtext: 'Encourage one another.'
  },
  {
    id: 'qw-8',
    levelId: 'wildcards',
    type: 'wildcard',
    category: 'Worship Moment',
    text: 'Worship Moment: Sing or read 2 lines of your favorite worship song right now.',
    subtext: 'Do not be shy! Bring joy into the room.'
  },
  {
    id: 'qw-9',
    levelId: 'wildcards',
    type: 'wildcard',
    category: 'Hot Seat',
    text: 'Hot Seat: The person on your right gets to ask you 1 respectful question, and you get to answer honestly.',
    subtext: 'Friendly and safe space.'
  },
  {
    id: 'qw-10',
    levelId: 'wildcards',
    type: 'wildcard',
    category: 'Scripture Challenge',
    text: 'Scripture Challenge: Everyone in the circle gets 30 seconds to share their favorite Bible verse out loud.',
    subtext: 'Help each other out if needed!'
  },
  {
    id: 'qw-11',
    levelId: 'wildcards',
    type: 'wildcard',
    category: 'Prayer for Peace',
    text: 'Group Action: Is anyone in the group feeling tired, sick, or stressed out right now? Take a moment to pray for them.',
    subtext: 'Believing for peace and healing together.'
  },
  {
    id: 'qw-12',
    levelId: 'wildcards',
    type: 'wildcard',
    category: 'Gratitude Blitz',
    text: '30-Second Challenge: Name 5 things you are grateful for in under 30 seconds.',
    subtext: 'Ready, set, go!'
  },
  {
    id: 'qw-13',
    levelId: 'wildcards',
    type: 'wildcard',
    category: 'Kindness Action',
    text: 'Kindness Challenge: Send a quick text right now to a friend outside this room letting them know you are thinking of them.',
    subtext: 'Spread encouragement today.'
  },
  {
    id: 'qw-14',
    levelId: 'wildcards',
    type: 'wildcard',
    category: 'Prayer Swap',
    text: 'Prayer Swap: Pair up in 2s and pray for 45 seconds for your partner\'s family, work, and week ahead.',
    subtext: 'Supporting each other in prayer.'
  },
  {
    id: 'qw-15',
    levelId: 'wildcards',
    type: 'wildcard',
    category: 'Group Blessing',
    text: 'Group Blessing: Speak a warm sentence of blessing over the youngest person in the room.',
    subtext: 'Encouraging the next generation.'
  }
];
