import axios from "axios";

const PAGE_ID = "215470341909937";

export async function handler(event) {
  const PAGE_API_KEY = process.env.PAGE_API_KEY;
  const url = `https://graph.facebook.com/v7.0/${PAGE_ID}?fields=hours&access_token=${PAGE_API_KEY}`;

  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    const response = await axios({
      method: "get",
      url: url,
    });
    return {
      statusCode: response.status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response.data),
    };
  } catch (e) {
    return {
      statusCode: 500,
    };
  }
}
