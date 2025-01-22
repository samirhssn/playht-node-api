const PlayHT = require('playht');

PlayHT.init({
  apiKey: 'Your_PlayHT_Account_APIKey',
  userId: 'Your_PlayHT_Account_UserID',
});

// sample text to generate audio
const text = `In this video, we're going to explore an interesting question about relations and functions together. We'll show that the relation R, defined in the set of real numbers as R equal to a b such that a is less than or equal to b square is actually neither reflexive, nor symmetric, nor transitive.`;

(async () => {
  try {
    const result = await PlayHT.generate(text, {
      voiceId: 'William', // Specify voice
      voiceEngine: 'PlayHT2.0', // Engine
      speed: 0.9, // Adjust speed
    });

    console.log('Audio URL:', result.audioUrl);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
