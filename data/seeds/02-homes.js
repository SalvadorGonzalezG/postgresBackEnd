/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('homes').truncate()
  await knex('homes').insert([
    // este arreglo lo tome de https://www.jsondataai.com/ generado por inteligencia artificial
    {
      hose_id: 1,
      title: 'Cozy Cottage',
      description: 'A charming cottage in the heart of the city.',
      guests: 2,
      address: '123 Main St',
      rental_price: 1500
    },
    {
      hose_id: 2,
      title: 'Luxury Loft',
      description: 'A modern loft with stunning views.',
      guests: 4,
      address: '456 Elm St',
      rental_price: 2500
    },
    {
      hose_id: 3,
      title: 'Beach Bungalow',
      description: 'A quaint bungalow just steps from the beach.',
      guests: 3,
      address: '789 Ocean Ave',
      rental_price: 1800
    },
    {
      hose_id: 4,
      title: 'Mountain Retreat',
      description: 'A cozy cabin nestled in the mountains.',
      guests: 6,
      address: '321 Pine Rd',
      rental_price: 3000
    },
    {
      hose_id: 5,
      title: 'Urban Oasis',
      description: 'A stylish apartment in the heart of downtown.',
      guests: 2,
      address: '987 Market St',
      rental_price: 2000
    },
    {
      hose_id: 6,
      title: 'Lake House',
      description: 'A peaceful retreat on the shores of the lake.',
      guests: 8,
      address: '654 Shoreline Dr',
      rental_price: 3500
    },
    {
      hose_id: 7,
      title: 'Historic Mansion',
      description: 'An elegant mansion with a rich history.',
      guests: 10,
      address: '1234 Heritage Ln',
      rental_price: 5000
    },
    {
      hose_id: 8,
      title: 'Ski Chalet',
      description: 'A charming chalet near the ski slopes.',
      guests: 4,
      address: '567 Snowy Rd',
      rental_price: 2800
    },
    {
      hose_id: 9,
      title: 'Tropical Villa',
      description: 'A luxurious villa in a tropical paradise.',
      guests: 12,
      address: '890 Palm Ave',
      rental_price: 6000
    },
    {
      hose_id: 10,
      title: 'Desert Retreat',
      description: 'A secluded oasis in the desert.',
      guests: 2,
      address: '111 Sand Dune Rd',
      rental_price: 2200
    },
    {
      hose_id: 11,
      title: 'Rustic Farmhouse',
      description: 'A quaint farmhouse with rustic charm.',
      guests: 6,
      address: '222 Country Rd',
      rental_price: 3200
    },
    {
      hose_id: 12,
      title: 'City View Penthouse',
      description: 'A stunning penthouse with panoramic city views.',
      guests: 4,
      address: '333 Skyline Ave',
      rental_price: 3800
    },
    {
      hose_id: 13,
      title: 'Seaside Cottage',
      description: 'A cozy cottage by the sea.',
      guests: 2,
      address: '444 Beach Blvd',
      rental_price: 1700
    },
    {
      hose_id: 14,
      title: 'Vineyard Estate',
      description: 'A beautiful estate in the heart of wine country.',
      guests: 8,
      address: '555 Vineyard Ln',
      rental_price: 4500
    },
    {
      hose_id: 15,
      title: 'Island Paradise',
      description: 'A private island retreat.',
      guests: 10,
      address: '666 Palm Tree Rd',
      rental_price: 5500
    },
    {
      hose_id: 16,
      title: 'Historic Townhouse',
      description: 'A charming townhouse in a historic neighborhood.',
      guests: 4,
      address: '777 Main St',
      rental_price: 2600
    },
    {
      hose_id: 17,
      title: 'Serenity Cabin',
      description: 'A peaceful cabin surrounded by nature.',
      guests: 2,
      address: '888 Forest Rd',
      rental_price: 1900
    },
    {
      hose_id: 18,
      title: 'Modern Condo',
      description: 'A sleek and modern condo in the city center.',
      guests: 2,
      address: '999 Highrise Ave',
      rental_price: 2100
    },
    {
      hose_id: 19,
      title: 'Castle on the Hill',
      description: 'A majestic castle with breathtaking views.',
      guests: 16,
      address: '1010 Royal Rd',
      rental_price: 8000
    },
    {
      hose_id: 20,
      title: 'Countryside Cottage',
      description: 'A charming cottage in the countryside.',
      guests: 4,
      address: '1111 Meadow Ln',
      rental_price: 2800
    },
    {
      hose_id: 21,
      title: 'Beachfront Villa',
      description: 'A luxurious villa right on the beach.',
      guests: 12,
      address: '1212 Shoreline Dr',
      rental_price: '6000'
    },
    {
      hose_id: 22,
      title: 'Rustic Log Cabin',
      description: 'A cozy log cabin in the woods.',
      guests: 6,
      address: '1313 Forest Rd',
      rental_price: 3200
    },
    {
      hose_id: 23,
      title: 'Garden Retreat',
      description: 'A peaceful retreat in a beautiful garden.',
      guests: 2,
      address: '1414 Rose St',
      rental_price: 2000
    },
    {
      hose_id: 24,
      title: 'Historic Brownstone',
      description: 'A historic brownstone in a vibrant neighborhood.',
      guests: 4,
      address: '1515 Main St',
      rental_price: 2400
    },
    {
      hose_id: 25,
      title: 'Mountain View Lodge',
      description: 'A lodge with stunning mountain views.',
      guests: 10,
      address: '1616 Summit Rd',
      rental_price: 5000
    }
  ])
}
