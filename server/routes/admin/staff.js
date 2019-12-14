const express = require("express");
const router = express.Router();

const staffAdminController = require("../../controllers/admin/staff");
const authMiddleware = require("../../middlewares/auth");

router.get("/", staffAdminController.getIndex);

router.get(
  "/recruiting",
  authMiddleware.isAuthenticated,
  staffAdminController.getApplicationForm
);

router.get(
<<<<<<< HEAD
	'/recruiting',
	authMiddleware.isAuthenticated,
	staffAdminController.showApplicationForm
);
router.get(
	'/requisition',
	authMiddleware.isAuthenticated,
	staffAdminController.showStaffCandidatesList
);
router.get(
	'/management',
	authMiddleware.isAuthenticated,
	staffAdminController.showDetailAllExistedStaff
);
router.post(
	'/sendQuery',
	async function(request, response) {
		try {
			await connector.query(request.body.sql);
			response.json({
				status: 200
			})
		} catch {
			response.json({
				status: 400
			});
		}
	}
);
router.post(
	'/getQuery',
	async function(request, response) {
		try {
			let data = await connector.query(request.body.sql)
			response.json({
				result: data[0],
				status: 200
			});
		} catch {
			response.json({
				status: 400
			})
		}
	}
);
=======
  "/requisition",
  authMiddleware.isAuthenticated,
  staffAdminController.getStaffCandidatesList
);

router.get(
  "/management",
  authMiddleware.isAuthenticated,
  staffAdminController.getDetailAllExistedStaff
);
router.post("/sendQuery", async function(request, response) {
  try {
    await connector.query(request.body.sql);
    response.json({
      status: 200
    });
  } catch (err) {
    response.json({
      status: 400
    });
  }
});
router.post("/getQuery", async function(request, response) {
  try {
    let data = await connector.query(request.body.sql);
    response.json({
      result: data[0],
      status: 200
    });
  } catch (err) {
    response.json({
      status: 400
    });
  }
});
>>>>>>> fa5e37233a971c4d50b703bf7d7f8e882c4c1f25

module.exports = router;
