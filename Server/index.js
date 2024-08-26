const express = require('express');
const multer = require('multer');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-portal.amcozop.mongodb.net/?retryWrites=true&w=majority&appName=Job-portal`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("jobPortal");
    const jobCollections = db.collection("jobs");
    const userCollections = db.collection("users");
    const applicationCollections = db.collection("applications");

    // Post a job
    app.post("/post-job", async (req, res) => {
      try {
        const body = req.body;
        body.createdAt = new Date();
        const result = await jobCollections.insertOne(body);
        if (result.insertedId) {
          res.status(200).send(result);
        } else {
          res.status(404).send({ message: "Cannot insert! Try again later", status: false });
        }
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // Get all jobs
    app.get("/all-jobs", async (req, res) => {
      try {
        const jobs = await jobCollections.find({}).toArray();
        res.send(jobs);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // Get single job using id
    app.get("/all-jobs/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const job = await jobCollections.findOne({ _id: new ObjectId(id) });
        res.send(job);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // Get jobs by email
    app.get("/myjobs/:email", async (req, res) => {
      try {
        const jobs = await jobCollections.find({ postedBy: req.params.email }).toArray();
        res.send(jobs);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // Delete job
    app.delete("/job/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await jobCollections.deleteOne(filter);
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // Update and edit job
    app.patch("/edit-job/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const jobData = req.body;
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updateDoc = {
          $set: { ...jobData },
        };
        const result = await jobCollections.updateOne(filter, updateDoc, options);
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // Create or update user profile
    app.post("/profile-update", async (req, res) => {
      try {
        const profileData = req.body;
        const filter = { email: profileData.email };
        const options = { upsert: true };
        const updateDoc = {
          $set: { ...profileData },
        };

        const result = await userCollections.updateOne(filter, updateDoc, options);
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // Get user profile by email
    app.get("/profile-update/:email", async (req, res) => {
      try {
        const email = req.params.email;
        const userProfile = await userCollections.findOne({ email: email });
        res.send(userProfile);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // Update user role
    app.patch("/user-role/:email", async (req, res) => {
      try {
        const email = req.params.email;
        const role = req.body.role;
        const filter = { email: email };
        const updateDoc = {
          $set: { role: role },
        };

        const result = await userCollections.updateOne(filter, updateDoc);
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // Post a job application
    app.post("/apply-job", upload.single('resume'), async (req, res) => {
      try {
        const { coverLetter, jobId, userId, fullName, email } = req.body;
        const resume = req.file;

        if (!resume) {
          return res.status(400).send({ message: 'Resume file is required' });
        }

        const applicationData = {
          coverLetter,
          jobId,
          userId,
          fullName,
          email,
          resume: {
            data: resume.buffer,
            contentType: resume.mimetype,
            originalName: resume.originalname
          },
          createdAt: new Date()
        };

        const result = await applicationCollections.insertOne(applicationData);
        if (result.insertedId) {
          res.status(200).send(result);
        } else {
          res.status(404).send({ message: "Cannot insert! Try again later", status: false });
        }
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // Get applications for a job
    app.get("/applications/:jobId", async (req, res) => {
      try {
        const applications = await applicationCollections.find({ jobId: req.params.jobId }).toArray();
        res.send(applications);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("An error occurred while connecting to MongoDB:", error);
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello Crank!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
