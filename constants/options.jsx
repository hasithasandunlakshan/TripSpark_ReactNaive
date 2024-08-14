export const SelectTravelList = [
    {
        id: 1,
        title: "Just Me",
        description: "A solo trip for self-discovery.",
        icon: "🧍",
        people: 1
    },
    {
        id: 2,
        title: "Couple",
        description: "A romantic getaway for two.",
        icon: "💑",  
        people: 2
    },
    {
        id: 3,
        title: "Family",
        description: "A fun trip for the entire family.",
        icon: "👨‍👩‍👧‍👦",
        people: 4
    },
    {
        id: 4,
        title: "Friends",
        description: "An adventure with your best friends.",
        icon: "👫",
        people: "3-5"
    },
    {
        id: 5,
        title: "Staff",
        description: "A team-building retreat for colleagues.",
        icon: "👔",
        people: 5
    }
];
export const AI_PROMPT = `Generate a travel plan for Location: {location}, spanning {totalDay} days and {totalNight} nights, tailored for {traveller}. The plan should include:

1. Flight details:
   - Flight options with prices and booking URLs.

2. Hotel options:
   - List of hotels with:
     - Hotel name
     - Address
     - Price per night
     - Image URL
     - Geo coordinates
     - Rating
     - Description

3. Places to visit nearby:
   - List of places with:
     - Place name
     - Detailed description
     - Image URL
     - Geo coordinates
     - Ticket pricing
     - Estimated travel time to each location

4. Day-by-day itinerary:
   - Each day's plan with:
     - Best time to visit
     - Activities and places to visit

Provide the output in JSON format.`