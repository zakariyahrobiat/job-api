// const express = require("express");

// const router = express.Router();

// const {
//   getAllJobs,
//   getJob,
//   createJob,
//   updateJob,
//   deleteJob,
// } = require("../controllers/job");

// router.route("/").post(createJob).get(getAllJobs);
// router.route("/:id").get(getJob).delete(deleteJob).patch(updateJob);

// module.exports = router;
const express = require("express");

const router = express.Router();

const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/job");

/**
 * @swagger
 * /jobs:
 *   get:
 *     summary: Get all jobs
 *     tags:
 *       - Jobs
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all jobs
 *
 *   post:
 *     summary: Create a new job
 *     tags:
 *       - Jobs
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - company
 *               - position
 *             properties:
 *               company:
 *                 type: string
 *                 example: Google
 *               position:
 *                 type: string
 *                 example: Frontend Developer
 *               status:
 *                 type: string
 *                 enum:
 *                   - pending
 *                   - interview
 *                   - decline
 *                 example: pending
 *     responses:
 *       201:
 *         description: Job created successfully
 */
router.route("/").post(createJob).get(getAllJobs);

/**
 * @swagger
 * /jobs/{id}:
 *   get:
 *     summary: Get a single job
 *     tags:
 *       - Jobs
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 68c123456789abcdef123456
 *     responses:
 *       200:
 *         description: Job found
 *       404:
 *         description: Job not found
 *
 *   patch:
 *     summary: Update a job
 *     tags:
 *       - Jobs
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 68c123456789abcdef123456
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               company:
 *                 type: string
 *               position:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum:
 *                   - pending
 *                   - interview
 *                   - decline
 *     responses:
 *       200:
 *         description: Job updated successfully
 *
 *   delete:
 *     summary: Delete a job
 *     tags:
 *       - Jobs
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 68c123456789abcdef123456
 *     responses:
 *       200:
 *         description: Job deleted successfully
 */
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
