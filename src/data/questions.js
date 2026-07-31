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

  // LEVEL 3: FAITH & LIFE WITH JESUS (25 QUESTIONS)

  {
    id: 'q3-2',
    levelId: 'level-3',
    type: 'question',
    category: 'Hearing God',
    text: 'How does God usually speak to your heart when you spend quiet time with him?',
    subtext: 'Through the Bible, quiet inner peace, advice from friends, or gentle thoughts?'
  },
  {
    id: 'q3-3',
    levelId: 'level-3',
    type: 'question',
    category: 'Testimony',
    text: 'What is a moment in your life where you felt God step in and help you when you needed it most?',
    subtext: 'Share a personal story of how he met you.'
  },
  {
    id: 'q3-4',
    levelId: 'level-3',
    type: 'question',
    category: 'Waiting Seasons',
    text: 'If you are waiting on a decision or prayer answer right now, what is God teaching you in the middle of it?',
    subtext: 'How are you staying hopeful while waiting?'
  },
  {
    id: 'q3-5',
    levelId: 'level-3',
    type: 'question',
    category: 'Calling & Destiny',
    text: 'What goal or opportunity has God put on your heart that feels exciting yet challenging?',
    subtext: 'Why do you think he put it there?'
  },
  {
    id: 'q3-6',
    levelId: 'level-3',
    type: 'question',
    category: 'Praise & Worship',
    text: 'What is 1 Bible verse or song lyric that has given you strength lately?',
    subtext: 'Share it with the group.'
  },
  {
    id: 'q3-7',
    levelId: 'level-3',
    type: 'question',
    category: 'Faith Journey',
    text: 'When did your faith shift from just something you grew up with to a real, personal relationship with Jesus?',
    subtext: 'What marked that change for you?'
  },
  {
    id: 'q3-8',
    levelId: 'level-3',
    type: 'question',
    category: 'Intercession',
    text: 'Who is someone in your life that you are praying for right now?',
    subtext: 'Let the group join you in praying for them.'
  },
  {
    id: 'q3-9',
    levelId: 'level-3',
    type: 'question',
    category: 'Discernment',
    text: 'What is a negative thought or distraction you had to filter out recently to stay focused on God\'s truth?',
    subtext: 'How did you spot the distraction?'
  },
  {
    id: 'q3-10',
    levelId: 'level-3',
    type: 'question',
    category: 'Spiritual Heritage',
    text: 'What kind of example or positive impact do you want to leave for the people around you?',
    subtext: 'Think about your family, friends, and workplace.'
  },
  {
    id: 'q3-11',
    levelId: 'level-3',
    type: 'question',
    category: 'Spiritual Gifts',
    text: 'When was a time you felt led to pray for or encourage a friend, and took that step?',
    subtext: 'How did it go?'
  },
  {
    id: 'q3-12',
    levelId: 'level-3',
    type: 'question',
    category: 'Encounters',
    text: 'Describe a moment in church, prayer, or worship where you felt God\'s peace cover you.',
    subtext: 'What shifted in your heart?'
  },

  {
    id: 'q3-14',
    levelId: 'level-3',
    type: 'question',
    category: 'Obedience',
    text: 'What was a step of faith or obedience that was hard to take, but brought good results afterward?',
    subtext: 'Reflect on the journey.'
  },
  {
    id: 'q3-15',
    levelId: 'level-3',
    type: 'question',
    category: 'Prayer Life',
    text: 'How has your quiet time with God changed over time?',
    subtext: 'Is it structured, conversational, quick, or relaxed?'
  },
  {
    id: 'q3-16',
    levelId: 'level-3',
    type: 'question',
    category: 'Spiritual Warfare',
    text: 'What truth from God do you lean on when doubts try to mess with your confidence?',
    subtext: 'Share what grounds your identity in Christ.'
  },
  {
    id: 'q3-17',
    levelId: 'level-3',
    type: 'question',
    category: 'Fast & Consecration',
    text: 'Have you ever taken a fast from social media, news, or food to focus more on God? What did you discover?',
    subtext: 'Share what you learned during that time.'
  },
  {
    id: 'q3-18',
    levelId: 'level-3',
    type: 'question',
    category: 'Church Community',
    text: 'Why do you think having a local church family is important in a world where many people feel isolated?',
    subtext: 'Share why connection matters.'
  },

  {
    id: 'q3-20',
    levelId: 'level-3',
    type: 'question',
    category: 'Holy Spirit',
    text: 'How do you involve God in your daily choices, like career steps or relationships?',
    subtext: 'Share how you ask for his direction.'
  },
  {
    id: 'q3-21',
    levelId: 'level-3',
    type: 'question',
    category: 'Testimony',
    text: 'What is a prayer God answered differently than you expected, but it turned out even better?',
    subtext: 'Reflect on how he works things out.'
  },
  {
    id: 'q3-22',
    levelId: 'level-3',
    type: 'question',
    category: 'Generosity',
    text: 'What has giving or being generous taught you about trusting God to provide?',
    subtext: 'Share a story of kindness or provision.'
  },
  {
    id: 'q3-23',
    levelId: 'level-3',
    type: 'question',
    category: 'Surrender',
    text: 'What area of your life are you learning to trust God with step by step?',
    subtext: 'Control, future plans, relationships, or comfort?'
  },
  {
    id: 'q3-24',
    levelId: 'level-3',
    type: 'question',
    category: 'Discernment',
    text: 'How do you know when an opportunity is right for you versus when it is just a distraction?',
    subtext: 'Share how you make wise choices.'
  },
  {
    id: 'q3-25',
    levelId: 'level-3',
    type: 'question',
    category: 'Hope',
    text: 'What gives you genuine hope for your future and for the Church moving forward?',
    subtext: 'Speak hope over the group.'
  },
  {
    id: 'q3-26',
    levelId: 'level-3',
    type: 'question',
    category: 'Surrender & Response',
    text: 'If Jesus personally walked into the room right now and asked, "What do you want me to do for you?", how would you respond?',
    subtext: 'Be completely honest with what your heart needs most.'
  },
  {
    id: 'q3-27',
    levelId: 'level-3',
    type: 'question',
    category: 'Calling & Response',
    text: 'If God explicitly told you, "Leave your comfort zone and take this step," what area of your life would hurt or scare you most to step out of?',
    subtext: 'Security, career, reputation, or convenience?'
  },
  {
    id: 'q3-28',
    levelId: 'level-3',
    type: 'question',
    category: 'Faith & Prompt',
    text: 'If Jesus looked at your daily routine, what is 1 thing he would gently tell you to stop worrying about?',
    subtext: 'Consider what anxiety takes up unnecessary space.'
  },

  // LEVEL 4: HEART TO HEART (25 DEEP & RAW QUESTIONS)
  {
    id: 'q4-1',
    levelId: 'level-4',
    type: 'question',
    category: 'Confessions',
    text: 'What is 1 silent struggle or worry you carry that you rarely tell anyone about?',
    subtext: 'Take your time. You are surrounded by kindness and grace.'
  },
  {
    id: 'q4-2',
    levelId: 'level-4',
    type: 'question',
    category: 'Surrender',
    text: 'What is the hardest thing God has ever asked you to lay down or let go of?',
    subtext: 'A relationship, control, a backup plan, or a personal goal?'
  },
  {
    id: 'q4-3',
    levelId: 'level-4',
    type: 'question',
    category: 'Wilderness',
    text: 'What do you do when God feels quiet and you are still waiting for clarity?',
    subtext: 'How do you keep your heart steady in the quiet?'
  },
  {
    id: 'q4-4',
    levelId: 'level-4',
    type: 'question',
    category: 'Forgiveness',
    text: 'Is there a past hurt or betrayal where forgiving felt almost impossible at first?',
    subtext: 'How did you take the first step toward releasing it?'
  },
  {
    id: 'q4-5',
    levelId: 'level-4',
    type: 'question',
    category: 'Breakthrough',
    text: 'What is 1 moment where you were at your lowest, and God met you right there to rescue you?',
    subtext: 'Share your turning point story.'
  },
  {
    id: 'q4-6',
    levelId: 'level-4',
    type: 'question',
    category: 'Doubts & Faith',
    text: 'Have you ever had a season of quiet doubt or questions about faith? What helped anchor your heart?',
    subtext: 'Honest questions are safe here.'
  },
  {
    id: 'q4-7',
    levelId: 'level-4',
    type: 'question',
    category: 'Inner Peace',
    text: 'What is 1 secret insecurity that sometimes tries to make you feel like you are not enough?',
    subtext: 'Speak truth over that feeling.'
  },
  {
    id: 'q4-8',
    levelId: 'level-4',
    type: 'question',
    category: 'Surrender',
    text: 'Where in your life right now are you trying to manage everything yourself instead of trusting God?',
    subtext: 'Career, finances, family, or future?'
  },
  {
    id: 'q4-9',
    levelId: 'level-4',
    type: 'question',
    category: 'Comparison',
    text: 'Have you ever caught yourself comparing your journey or season to someone else? How did you reset?',
    subtext: 'Overcoming envy with gratitude.'
  },
  {
    id: 'q4-10',
    levelId: 'level-4',
    type: 'question',
    category: 'Unanswered Prayer',
    text: 'What is 1 prayer you prayed for a long time that seemed to get a "no" or "wait"? How did you process it?',
    subtext: 'Trusting his heart even when plans change.'
  },
  {
    id: 'q4-11',
    levelId: 'level-4',
    type: 'question',
    category: 'Calling & Fear',
    text: 'What dream or calling makes you feel completely dependent on God\'s strength to pull off?',
    subtext: 'When a vision is bigger than your own capacity.'
  },
  {
    id: 'q4-12',
    levelId: 'level-4',
    type: 'question',
    category: 'Heart Check',
    text: 'What is 1 habit, mindset, or distraction you know is holding back your personal growth right now?',
    subtext: 'Honest evaluation of what needs to change.'
  },
  {
    id: 'q4-13',
    levelId: 'level-4',
    type: 'question',
    category: 'Breakthrough',
    text: 'What is a breakthrough in your health, mind, or relationships that you know only God could have done?',
    subtext: 'Give honor to his goodness.'
  },
  {
    id: 'q4-14',
    levelId: 'level-4',
    type: 'question',
    category: 'Deep Rest',
    text: 'When was the last time you felt truly rested in your soul, not just physically tired?',
    subtext: 'What helps you find real, quiet rest?'
  },
  {
    id: 'q4-15',
    levelId: 'level-4',
    type: 'question',
    category: 'Sacrifice',
    text: 'What choice did you make out of faith that cost you comfort, money, or reputation, but was 100% worth it?',
    subtext: 'Reflect on that step of courage.'
  },
  {
    id: 'q4-16',
    levelId: 'level-4',
    type: 'question',
    category: 'Healing',
    text: 'What is an old emotional wound that you feel God has gently healed over time?',
    subtext: 'Share the grace you experienced.'
  },
  {
    id: 'q4-17',
    levelId: 'level-4',
    type: 'question',
    category: 'Authenticity',
    text: 'What mask or expectation do you feel tempted to wear around people, and how are you taking it off?',
    subtext: 'Being your real, authentic self.'
  },
  {
    id: 'q4-18',
    levelId: 'level-4',
    type: 'question',
    category: 'Fear of Man',
    text: 'When was a time you were afraid of what people would think, but chose to follow your convictions anyway?',
    subtext: 'Choosing truth over approval.'
  },
  {
    id: 'q4-19',
    levelId: 'level-4',
    type: 'question',
    category: 'Surrender',
    text: 'If God asked you to change your plans tomorrow, how easily could you let go of your current timeline?',
    subtext: 'Checking how tightly we hold our plans.'
  },
  {
    id: 'q4-20',
    levelId: 'level-4',
    type: 'question',
    category: 'Miracle Story',
    text: 'What is a financial or practical miracle you experienced when things looked impossible on paper?',
    subtext: 'A story of provision.'
  },
  {
    id: 'q4-21',
    levelId: 'level-4',
    type: 'question',
    category: 'Love & Grace',
    text: 'When did you first realize that God\'s love for you is not based on your performance, but on who he is?',
    subtext: 'A powerful truth about grace.'
  },
  {
    id: 'q4-22',
    levelId: 'level-4',
    type: 'question',
    category: 'Second Chances',
    text: 'What is 1 second chance God gave you that completely restored your hope?',
    subtext: 'Celebrating fresh starts.'
  },
  {
    id: 'q4-23',
    levelId: 'level-4',
    type: 'question',
    category: 'Burden for Others',
    text: 'Who in your family or friend group keeps you up at night with prayer and care for their future?',
    subtext: 'Holding space for those you love.'
  },
  {
    id: 'q4-24',
    levelId: 'level-4',
    type: 'question',
    category: 'Deep Trust',
    text: 'What is 1 promise from God that you are holding onto with everything you have right now?',
    subtext: 'Declare it over your life.'
  },
  {
    id: 'q4-25',
    levelId: 'level-4',
    type: 'question',
    category: 'Holy Ground',
    text: 'Looking around this room tonight, what makes you feel that you are standing on Holy Ground together?',
    subtext: 'A quiet moment of gratitude.'
  },
  {
    id: 'q4-26',
    levelId: 'level-4',
    type: 'question',
    category: 'Generational Freedom',
    text: 'Is there a negative family pattern, cycle, or generational struggle you are trusting Jesus to break in your life?',
    subtext: 'Acknowledge the courage it takes to step into freedom and start a new story.'
  },
  {
    id: 'q4-27',
    levelId: 'level-4',
    type: 'question',
    category: 'Inner Renewal',
    text: 'What is 1 battle in your mind that you are learning to take captive and replace with God\'s peace?',
    subtext: 'Sharing how you guard your thoughts daily.'
  },

  {
    id: 'q4-29',
    levelId: 'level-4',
    type: 'question',
    category: 'Identity & Truth',
    text: 'If Jesus whispered, "You don\'t have to prove anything to anyone anymore," what pressure in your life would drop immediately?',
    subtext: 'Reflect on freedom from performance.'
  },
  {
    id: 'q4-30',
    levelId: 'level-4',
    type: 'question',
    category: 'Trust & Faith',
    text: 'If God asked you to surrender your biggest dream and wait for him, what fear would surface first?',
    subtext: 'A safe space to discuss fear of the unknown.'
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
