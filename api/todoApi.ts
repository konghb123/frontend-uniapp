import request from "../common/request"

export function queryTodoTasks(from: number, size: number) {
    return request.get({ url: `/flow/todo/tasks/from/${from}/size/${size}` })
}