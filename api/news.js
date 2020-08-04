import axios from "axios";

const PAGE_ID = "215470341909937";

export async function handler(event) {
  const PAGE_API_KEY = process.env.PAGE_API_KEY;
  const url = `https://graph.facebook.com/v7.0/${PAGE_ID}/posts?fields=full_picture%2Cis_hidden%2Cis_published%2Cmessage%2Cpermalink_url&access_token=${PAGE_API_KEY}`;

  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const response = await axios({
    method: "get",
    url: url,
  });

  response.data;
  return {
    statusCode: response.status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: response.data,
  };
}
