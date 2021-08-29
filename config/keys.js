module.exports = {    
    secretOrKey: 'yoursecretkeyishere',
    // mongoURI: `mongodb://localhost:27017/sample_db`,
    mongoURI: `mongodb+srv://vivekkravindraa:${process.env.DB_PASSWORD}@cluster0.pswyb.mongodb.net/sample_db`
};