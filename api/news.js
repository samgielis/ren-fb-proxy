import axios from "axios";

const PAGE_ID = "215470341909937";

export async function handler(event) {
  const PAGE_API_KEY = process.env.PAGE_API_KEY;
  let fields = [
    "full_picture",
    "is_hidden",
    "is_published",
    "message",
    "permalink_url",
    "from",
  ];
  fields = fields.join("%2C");
  const url = `https://graph.facebook.com/v7.0/${PAGE_ID}/posts?fields=${fields}&access_token=${PAGE_API_KEY}`;

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
