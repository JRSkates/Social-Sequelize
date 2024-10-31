const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await db.sync({ force: true });
    })

    // Write your tests here
    
    test("Constructs User Model", async () => {
        const user = new User({
            username: "jsj179",
            email: "jsj179@gmail.com"
        });
        expect(user.username).toBe('jsj179');
    })

    it("Constructs Post Model", async () => {
        
    })


})