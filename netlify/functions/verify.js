const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const body = JSON.parse(event.body);
  const { proof } = body;

  const response = await fetch(
    'https://developer.worldcoin.org/api/v1/verify/app_staging_129259332fd6f93d4fabaadcc5e4ff9d',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...proof, action: 'test' }),
    }
  );

  if (response.ok) {
    const { verified } = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ verified }),
    };
  } else {
    const { code, detail } = await response.json();
    return {
      statusCode: 400,
      body: JSON.stringify({ code, detail }),
    };
  }
};
