import request from "../common/request"

export function queryTodoTasks(from: number, size: number, params: any) {
    return request.get({ url: 'flow/todo/tasks/from/${from}/size/${size}', data: params })
}