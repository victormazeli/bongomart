module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    
    await db.collection('categories').insertMany([
      {
        title: "Fashion"
      },
  
      {
        title: "Mobile Phones"
      },
  
      {
        title: "Vehicle"
      },
  
      {
        title: "Property"
      },
  
      {
        title: "Pc & Laptops"
      }


    ]);
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    await db.collection('categories').deleteMany({});
  }
};
