module.exports = {
  async up(db, client) {
    // TODO write your migration here.
  
    await db.collection('ads').insertMany([

      {
        title: "bag for sale",
        images: ["https://res.cloudinary.com/bongo-mart/image/upload/v1629644817/ads/nnt73f65dp5srh3edsnu.png"],
        description: "big and beautiful bag for sale",
        price: 2000,
        tags: ["New", "latest"],
        category: "612221f96a4d7b12a877f17c",
        owner: "61231252fe423a3e2cc9e65f",
        status: "Active",
        priceType: "Fixed",
        condition: "Brand New"
  
      },
  
      {
        title: "shoe for sale",
        images: ["https://res.cloudinary.com/bongo-mart/image/upload/v1629644817/ads/nnt73f65dp5srh3edsnu.png"],
        description: "big and beautiful shoe for sale",
        price: 2000,
        tags: ["New"],
        category: "612221f96a4d7b12a877f17c",
        owner: "61231252fe423a3e2cc9e65f",
        status: "Active",
        priceType: "Fixed",
        condition: "Brand New"
  
      },
  
      {
        title: "house for sale",
        images: ["https://res.cloudinary.com/bongo-mart/image/upload/v1629644817/ads/nnt73f65dp5srh3edsnu.png"],
        description: "2 bed room flat apartment for sale",
        tags: ["Popular"],
        category: "61232ec2ff8ae59d1cd66609",
        owner: "612312fb3065f139dc762e2b",
        status: "Active",
        priceType: "Price On Call",
  
      },
  
      {
        title: "Land for sale",
        images: ["https://res.cloudinary.com/bongo-mart/image/upload/v1629644817/ads/nnt73f65dp5srh3edsnu.png"],
        description: "10,000 Square acre of land for sale",
        tags: ["Popular"],
        category: "61232ec2ff8ae59d1cd66609",
        owner: "612312fb3065f139dc762e2b",
        status: "Active",
        priceType: "Price On Call",
  
      },
  
      {
        title: "Hp probook 450g3 for sale",
        images: ["https://res.cloudinary.com/bongo-mart/image/upload/v1629644817/ads/nnt73f65dp5srh3edsnu.png"],
        description: "clean used Hp probook 450g3 for sale",
        tags: ["Popular"],
        category: "61232ec2ff8ae59d1cd6660a",
        owner: "612313273065f139dc762e2e",
        status: "Active",
        priceType: "Price On Call",
        condition: "Used"
  
      },
  
      {
        title: "Apple MacBook pro 2015 for sale",
        images: ["https://res.cloudinary.com/bongo-mart/image/upload/v1629644817/ads/nnt73f65dp5srh3edsnu.png"],
        description: "clean used MacBook pro  for sale",
        tags: ["Latest"],
        price: 450000,
        category: "61232ec2ff8ae59d1cd6660a",
        owner: "612313273065f139dc762e2e",
        status: "Active",
        priceType: "Fixed",
        condition: "Used"
  
      },
  
      
      {
        title: "Apple MacBook pro 16GB for sale",
        images: ["https://res.cloudinary.com/bongo-mart/image/upload/v1629644817/ads/nnt73f65dp5srh3edsnu.png"],
        description: "clean used MacBook pro for sale",
        tags: ["Latest"],
        price: 450000,
        category: "61232ec2ff8ae59d1cd6660a",
        owner: "612313273065f139dc762e2e",
        status: "Active",
        priceType: "Fixed",
        condition: "Used"
  
      },
  
      {
        title: "Iphone 12 pro for sale",
        images: ["https://res.cloudinary.com/bongo-mart/image/upload/v1629644817/ads/nnt73f65dp5srh3edsnu.png"],
        description: "clean used iphone 12 pro for sale",
        tags: ["Latest"],
        price: 400000,
        category: "61232ec2ff8ae59d1cd6660a",
        owner: "612313273065f139dc762e2e",
        status: "Active",
        priceType: "Fixed",
        condition: "Used"
  
      },
  
      
      {
        title: "Mercedees Benz for sale",
        images: ["https://res.cloudinary.com/bongo-mart/image/upload/v1629644817/ads/nnt73f65dp5srh3edsnu.png"],
        description: "Used Mercedees Benz GLK450 for sale",
        tags: ["Latest"],
        price: 40000000,
        category: "61232ec2ff8ae59d1cd66608",
        owner: "612313273065f139dc762e2e",
        status: "Active",
        priceType: "Fixed",
        condition: "Used"
  
      },
  
      {
        title: "House for sale",
        description: "clean 2 storey building for sale",
        tags: ["New", "Popular"],
        category: "61232ec2ff8ae59d1cd66609",
        owner: "612313273065f139dc762e2e",
        status: "Active",
        priceType: "Price On Call",
  
      },

    ]);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    await db.collection('ads').deleteMany({});
  }
};
