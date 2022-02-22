"use strict";
var common_request = require("../common/request.js");
function queryTodoTasks(from, size) {
  return common_request.request.get({ url: `/flow/todo/tasks/from/${from}/size/${size}` });
}
exports.queryTodoTasks = queryTodoTasks;
