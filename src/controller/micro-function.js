const express = require('express');
const router = new express.Router();
const path = require('path');

function weeklyReport(req, res) {
  res.render('pages/weekly-report', { title: '周报生成 '});
}

router.route('/weekly-report')
  .get(weeklyReport);

module.exports = router;
