const app = require('./app');
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
        
    });
    
}

const server = app.listen(port, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`);
});

// Handle unhandle promise rejection

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error:${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});



