const { Router } = require("express");
const router = Router();
const request = require("request");

const URL = "https://atlantia-dev-test.herokuapp.com/api/presence-share-chart/";

router.get("/", (req, res) => {
  request.get(URL, { json: true }, function (err, r) {
    if (err) {
      console.log(err);
    } else {
      res.json(r.body);
    }
  });
});

module.exports = router;
