const { test, expect } = require('@playwright/test');

test.only('the GraphQL API works', async ({request}) => {
  // Recording...
  const response = await request.post("https://countries.trevorblades.com/",
  {
    data: {
      query: `
      {
        countries {
          code
          emoji
          languages {
            name
            code
          }
        }
        
      }
      `
    }
  }

  )
  const body = await response.json();
  console.log(body);
});