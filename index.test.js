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
        const user = await new User({
            username: "jsj179",
            email: "jsj179@gmail.com"
        });
        expect(user.username).toBe('jsj179');
    })

    it("Constructs Profile Model", async () => {
        const profile = await new Profile({
            bio: "I'm a software engineer",
            profilePicture: "profilePicture",
            birthday: "25/07/1996"
        });
        expect(profile.bio).toBe("I'm a software engineer");
    })

    it("Constructs Post Model", async () => {
        const post = await new Post({
            title: "First Post",
            body: "This is my first post",
            createdAt: "2022-01-01 12:00:00"
        });
        expect(post.title).toBe('First Post');
    })

    it("Constructs Comment Model", async () => {
        const post = await new Comment({
            body: "This is my first comment",
            createdAt: "2022-01-01 12:00:00"
        });
        expect(post.body).toBe('This is my first comment');
    })

    it("Constructs Like Model", async () => {
        const like = await new Like({
            reactionType: "like",
            createdAt: "2022-01-01 12:00:00"
        });
        expect(like.reactionType).toBe('like');
    })

    it("User-Profile association" , async () => {
        const user = await User.create({
            username: "jsj179",
            email: "jsj179@gmail.com"
        });
        const profile = await Profile.create({
            bio: "I'm a software engineer",
            profilePicture: "profilePicture",
            birthday: "25/07/1996"
        });

        await user.setProfile(profile);
        const userProfile = await user.getProfile()

        expect(userProfile.bio).toBe("I'm a software engineer");
    })

    it("User-Post association" , async () => {
        const user = await User.create({
            username: "jsj179",
            email: "jsj179@gmail.com"
        });
        const post = await Post.create({
            title: "First Post",
            body: "This is my first post",
            createdAt: "2022-01-01 12:00:00"
        });

        await user.addPost(post);
        const userPosts = await user.getPosts()
        expect(userPosts.length).toBe(1);
    })

    it("Post-Comment association" , async () => {
        const post = await Post.create({
            title: "First Post",
            body: "This is my first post",
            createdAt: "2022-01-01 12:00:00"
        });

        const comment = await Comment.create({
            body: "This is my first comment",
            createdAt: "2022-01-01 12:00:00"
        })

        await post.addComment(comment);
        const postComments = await post.getComments()
        expect(postComments.length).toBe(1);
    })

    it("User-Likes association", async () => {
        const user = await User.create({
            username: "jsj179",
            email: "jsj179@gmail.com"
        });
        const like = await Like.create({
            reactionType: "like",
            createdAt: "2022-01-01 12:00:00"
        });

        await user.addLike(like);
        const userLikes = await user.getLikes()
        expect(userLikes.length).toBe(1);
    })
})