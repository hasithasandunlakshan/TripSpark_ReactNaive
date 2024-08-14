

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.EXPO_GOOGLE_GEMINI_API_KEY;
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
            {text: "Generate Travel Plan for Location: New York USA, for 1 Days and 1 Night for Family with a Luxury budnet with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 1 days and 1 night with each day plan with best time to visit in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"trip_name\": \"New York City Family Getaway\",\n  \"duration\": \"1 Day, 1 Night\",\n  \"travel_style\": \"Luxury\",\n  \"flight_details\": {\n    \"airline\": \"Delta Airlines\",\n    \"flight_number\": \"DL1234\",\n    \"departure_airport\": \"SFO\",\n    \"arrival_airport\": \"JFK\",\n    \"departure_date\": \"2024-03-15\",\n    \"departure_time\": \"10:00 AM\",\n    \"arrival_date\": \"2024-03-15\",\n    \"arrival_time\": \"01:00 PM\",\n    \"flight_price\": \"$450\",\n    \"booking_url\": \"https://www.delta.com\"\n  },\n  \"hotel_options\": [\n    {\n      \"hotel_name\": \"The Peninsula New York\",\n      \"hotel_address\": \"700 Fifth Avenue, New York, NY 10019\",\n      \"price\": \"$1500\",\n      \"hotel_image_url\": \"https://www.thepeninsula.com/newyork/en/images/hotel/exterior/peninsula-new-york-exterior-01.jpg\",\n      \"geo_coordinates\": {\n        \"latitude\": 40.7580,\n        \"longitude\": -73.9855\n      },\n      \"rating\": 4.5,\n      \"description\": \"A luxurious hotel with stunning views of Central Park and Fifth Avenue.\"\n    },\n    {\n      \"hotel_name\": \"The Ritz-Carlton New York, Central Park\",\n      \"hotel_address\": \"50 Central Park South, New York, NY 10019\",\n      \"price\": \"$1200\",\n      \"hotel_image_url\": \"https://www.ritzcarlton.com/en/hotels/new-york/central-park/media/hotel-images/hotel-exterior.jpg\",\n      \"geo_coordinates\": {\n        \"latitude\": 40.7649,\n        \"longitude\": -73.9772\n      },\n      \"rating\": 4.7,\n      \"description\": \"A sophisticated hotel with elegant rooms and unparalleled views of Central Park.\"\n    },\n    {\n      \"hotel_name\": \"The St. Regis New York\",\n      \"hotel_address\": \"2 East 55th Street, New York, NY 10022\",\n      \"price\": \"$1000\",\n      \"hotel_image_url\": \"https://www.marriott.com/static/media/images/hotels/new-york/new-york-st-regis/exterior/hotel-exterior-st-regis-new-york-512.jpg\",\n      \"geo_coordinates\": {\n        \"latitude\": 40.7586,\n        \"longitude\": -73.9681\n      },\n      \"rating\": 4.6,\n      \"description\": \"A legendary hotel known for its classic elegance and impeccable service.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"morning\": {\n        \"time\": \"10:00 AM - 12:00 PM\",\n        \"location\": {\n          \"place_name\": \"Central Park\",\n          \"place_details\": \"A sprawling urban oasis offering walking trails, playgrounds, gardens, and the iconic Bethesda Terrace.\",\n          \"place_image_url\": \"https://www.nycgovparks.org/images/parks/CentralPark/central-park-bethesda-terrace-2015.jpg\",\n          \"geo_coordinates\": {\n            \"latitude\": 40.7829,\n            \"longitude\": -73.9654\n          },\n          \"ticket_pricing\": \"Free\",\n          \"time_to_travel\": \"1-2 hours\"\n        }\n      },\n      \"afternoon\": {\n        \"time\": \"12:00 PM - 3:00 PM\",\n        \"location\": {\n          \"place_name\": \"American Museum of Natural History\",\n          \"place_details\": \"A world-renowned museum with exhibits on dinosaurs, space, cultures, and more.\",\n          \"place_image_url\": \"https://www.amnh.org/sites/default/files/styles/hero_image/public/hero_images/amnh_exterior.jpg\",\n          \"geo_coordinates\": {\n            \"latitude\": 40.7815,\n            \"longitude\": -73.9733\n          },\n          \"ticket_pricing\": \"Adults: $23, Children: $13\",\n          \"time_to_travel\": \"2-3 hours\"\n        }\n      },\n      \"evening\": {\n        \"time\": \"6:00 PM - 9:00 PM\",\n        \"location\": {\n          \"place_name\": \"Times Square\",\n          \"place_details\": \"A bustling intersection known for its bright lights, Broadway theaters, and iconic billboards.\",\n          \"place_image_url\": \"https://www.timeout.com/images/uploads/2022/09/times-square-new-york-city-guide-things-to-do-attractions-what-to-see-visit-travel-nyc-usa-0-2054558-1662900077.jpg\",\n          \"geo_coordinates\": {\n            \"latitude\": 40.7580,\n            \"longitude\": -73.9855\n          },\n          \"ticket_pricing\": \"Free\",\n          \"time_to_travel\": \"1-2 hours\"\n        }\n      }\n    },\n    \"day2\": {\n      \"morning\": {\n        \"time\": \"10:00 AM - 12:00 PM\",\n        \"location\": {\n          \"place_name\": \"Statue of Liberty and Ellis Island\",\n          \"place_details\": \"A historic landmark symbolizing freedom and a gateway to immigration.\",\n          \"place_image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Statue_of_Liberty_2006.jpg/1280px-Statue_of_Liberty_2006.jpg\",\n          \"geo_coordinates\": {\n            \"latitude\": 40.6892,\n            \"longitude\": -74.0445\n          },\n          \"ticket_pricing\": \"Adults: $30, Children: $18\",\n          \"time_to_travel\": \"2-3 hours\"\n        }\n      },\n      \"afternoon\": {\n        \"time\": \"12:00 PM - 3:00 PM\",\n        \"location\": {\n          \"place_name\": \"The Metropolitan Museum of Art\",\n          \"place_details\": \"A world-class museum showcasing art and artifacts from around the globe.\",\n          \"place_image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Metropolitan_Museum_of_Art_exterior.jpg/1280px-Metropolitan_Museum_of_Art_exterior.jpg\",\n          \"geo_coordinates\": {\n            \"latitude\": 40.7794,\n            \"longitude\": -73.9632\n          },\n          \"ticket_pricing\": \"Suggested Donation: $25\",\n          \"time_to_travel\": \"2-3 hours\"\n        }\n      },\n      \"evening\": {\n        \"time\": \"6:00 PM - 9:00 PM\",\n        \"location\": {\n          \"place_name\": \"Top of the Rock\",\n          \"place_details\": \"An observation deck offering panoramic views of the city, including Central Park and the Empire State Building.\",\n          \"place_image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Top_of_the_Rock_night_view_from_the_Empire_State_Building.jpg/1280px-Top_of_the_Rock_night_view_from_the_Empire_State_Building.jpg\",\n          \"geo_coordinates\": {\n            \"latitude\": 40.7580,\n            \"longitude\": -73.9803\n          },\n          \"ticket_pricing\": \"Adults: $39, Children: $33\",\n          \"time_to_travel\": \"1-2 hours\"\n        }\n      }\n    }\n  }\n}\n```\n\n**Notes:**\n\n* This plan is a suggested itinerary and can be customized based on your family's interests and preferences.\n* Flight prices and hotel prices are subject to change.\n* Booking URLs are provided for reference and may not be the most current or accurate.\n* It is recommended to book flights and hotels in advance, especially during peak season.\n* The time allocated for each location is an estimate and may need to be adjusted based on your pace and interests.\n* Consider purchasing a New York City Pass for discounted admission to popular attractions.\n* Always check the latest travel advisories and guidelines before your trip.\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
