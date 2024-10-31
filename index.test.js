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

    it("Constructs Profile Model", async () => {
        const profile = new Profile({
            bio: "I'm a software engineer",
            profilePicture: "profilePicture",
            birthday: "25/07/1996"
        });
        expect(profile.bio).toBe("I'm a software engineer");
    })

    it("Constructs Post Model", async () => {
        const post = new Post({
            title: "First Post",
            body: "This is my first post",
            createdAt: "2022-01-01 12:00:00"
        });
        expect(post.title).toBe('First Post');
    })

    it("Constructs Comment Model", async () => {
        const post = new Comment({
            body: "This is my first comment",
            createdAt: "2022-01-01 12:00:00"
        });
        expect(post.body).toBe('This is my first comment');
    })

    it("Constructs Like Model", async () => {
        const like = new Like({
            reactionType: "like",
            createdAt: "2022-01-01 12:00:00"
        });
        expect(like.reactionType).toBe('like');
    })
})