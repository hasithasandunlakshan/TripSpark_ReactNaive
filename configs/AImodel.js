/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = 'AIzaSyD432z8xNiTMitQVNPqs-uCZTqebTimD74';
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate a travel plan for Location: Aaaaaa, Hùng Vương, Phường Phú Thủy, Thành phố Phan Thiết, Tỉnh Bình Thuận, Việt Nam, spanning 2 days and 1 nights, tailored for 2. The plan should include:\n\n1. Flight details:\n   - Flight options with prices and booking URLs.\n\n2. Hotel options:\n   - List of hotels with:\n     - Hotel name\n     - Address\n     - Price per night\n     - Image URL\n     - Geo coordinates\n     - Rating\n     - Description\n\n3. Places to visit nearby:\n   - List of places with:\n     - Place name\n     - Detailed description\n     - Image URL\n     - Geo coordinates\n     - Ticket pricing\n     - Estimated travel time to each location\n\n4. Day-by-day itinerary:\n   - Each day's plan with:\n     - Best time to visit\n     - Activities and places to visit"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "## AAAAA, HÙNG VƯƠNG, PHAN THIẾT TRAVEL PLAN (2 Days & 1 Night)\n\nThis travel plan is designed for two people and focuses on exploring the beautiful coastal areas around AAAAA, HÙNG VƯƠNG, Phan Thiết, Vietnam.\n\n**1. Flight Details:**\n\n* **Flight options are not available for this location.** AAAAA, HÙNG VƯƠNG is a specific address within Phan Thiết, not a separate airport or city. You will need to fly to Phan Thiết Airport (PQT) and travel to the address from there. \n* **To find flight options to Phan Thiết Airport (PQT) and book your tickets:**\n    * Use flight comparison websites like Google Flights, Skyscanner, Kayak, etc.\n    * Enter your departure city and PQT as the destination.\n    * Select your desired travel dates and time.\n    * Compare prices and choose your preferred airline and flight.\n\n**2. Hotel Options:**\n\n* **[Hotel Name 1]**\n    * **Address:** [Address of hotel]\n    * **Price per night:** [Price range]\n    * **Image URL:** [Image URL]\n    * **Geo Coordinates:** [Latitude, Longitude]\n    * **Rating:** [Rating]\n    * **Description:** [Short description of the hotel]\n* **[Hotel Name 2]**\n    * **Address:** [Address of hotel]\n    * **Price per night:** [Price range]\n    * **Image URL:** [Image URL]\n    * **Geo Coordinates:** [Latitude, Longitude]\n    * **Rating:** [Rating]\n    * **Description:** [Short description of the hotel]\n* **[Hotel Name 3]**\n    * **Address:** [Address of hotel]\n    * **Price per night:** [Price range]\n    * **Image URL:** [Image URL]\n    * **Geo Coordinates:** [Latitude, Longitude]\n    * **Rating:** [Rating]\n    * **Description:** [Short description of the hotel]\n\n**Note:** I need further information about the specific location of AAAAA, HÙNG VƯƠNG to provide accurate hotel recommendations. Please provide the street name or a more detailed address.\n\n**3. Places to Visit Nearby:**\n\n* **Mui Ne Beach:**\n    * **Description:** This is a renowned beach with beautiful white sand, turquoise waters, and various water sports opportunities. \n    * **Image URL:** [Image URL]\n    * **Geo Coordinates:** 10.8687° N, 108.2084° E\n    * **Ticket Pricing:** Free\n    * **Estimated travel time from AAAAA, HÙNG VƯƠNG:** [Time]\n* **Fairy Stream:**\n    * **Description:** A unique and picturesque stream flowing through a valley of red sand dunes, creating stunning natural beauty.\n    * **Image URL:** [Image URL]\n    * **Geo Coordinates:** 10.8812° N, 108.2157° E\n    * **Ticket Pricing:** [Price]\n    * **Estimated travel time from AAAAA, HÙNG VƯƠNG:** [Time]\n* **White Sand Dunes:**\n    * **Description:** An impressive expanse of white sand dunes stretching across the landscape. You can enjoy dune buggy rides, sandboarding, and stunning views.\n    * **Image URL:** [Image URL]\n    * **Geo Coordinates:** 10.8918° N, 108.2183° E\n    * **Ticket Pricing:** [Price]\n    * **Estimated travel time from AAAAA, HÙNG VƯƠNG:** [Time]\n* **Ta Cu Mountain:**\n    * **Description:** This mountain offers stunning views over Phan Thiết and the surrounding areas. There are temples and pagodas to explore.\n    * **Image URL:** [Image URL]\n    * **Geo Coordinates:** 10.9196° N, 108.2105° E\n    * **Ticket Pricing:** [Price]\n    * **Estimated travel time from AAAAA, HÙNG VƯƠNG:** [Time]\n* **Phan Thiết Market:**\n    * **Description:** A bustling market where you can experience local life, find fresh seafood, souvenirs, and local delicacies.\n    * **Image URL:** [Image URL]\n    * **Geo Coordinates:** 10.8994° N, 108.1963° E\n    * **Ticket Pricing:** Free\n    * **Estimated travel time from AAAAA, HÙNG VƯƠNG:** [Time]\n\n**4. Day-by-Day Itinerary:**\n\n**Day 1:**\n\n* **Morning (9:00 AM):**\n    * Visit Mui Ne Beach.\n    * Enjoy swimming, sunbathing, or try water sports activities like windsurfing or kitesurfing.\n* **Afternoon (1:00 PM):**\n    * Lunch at a local seafood restaurant by the beach.\n    * Head to Fairy Stream.\n    * Take a leisurely walk along the stream and admire the unique natural formations.\n* **Evening (5:00 PM):**\n    * Drive to the White Sand Dunes.\n    * Enjoy a dune buggy ride or try sandboarding.\n    * Take stunning photographs of the sunset over the dunes.\n\n**Day 2:**\n\n* **Morning (8:00 AM):**\n    * Visit Ta Cu Mountain.\n    * Climb the mountain and enjoy breathtaking views.\n    * Explore the temples and pagodas at the top.\n* **Afternoon (1:00 PM):**\n    * Have lunch at a local restaurant with a panoramic view.\n    * Visit Phan Thiết Market.\n    * Experience local life and shop for fresh seafood or souvenirs.\n* **Evening (5:00 PM):**\n    * Relax at your hotel or enjoy a farewell dinner at a beachfront restaurant.\n\n**Note:** This is just a suggested itinerary and can be adjusted based on your preferences and interests. You can also choose to visit other places of interest nearby, such as the fishing village of Mũi Né or the Binh Thuan Museum. \n\n**Additional Tips:**\n\n* **Travel during the dry season (November to April) for the best weather conditions.**\n* **Learn a few basic Vietnamese phrases to enhance your travel experience.**\n* **Bargain for goods at the market.**\n* **Try the local seafood and cuisine.**\n* **Respect local customs and traditions.**\n* **Be prepared for hot and sunny weather.**\n* **Bring sunscreen, sunglasses, and a hat.**\n* **Stay hydrated.**\n\nI hope this travel plan helps you plan an enjoyable and memorable trip to Phan Thiết! Remember that this is a general outline, and you can adjust it based on your specific interests and needs.  Enjoy your trip!\n"},
        ],
      },
    ],
  });

  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text());
  


