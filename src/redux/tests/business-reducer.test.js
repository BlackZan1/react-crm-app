import businessReducer, { addTagAction, addTagTaskAction, deleteTag, deleteTagTask } from "../business-reducer";

let state = {
    tasks: [
        {name: "Саморазвитие", color: "red", _id: "t1", data: [
            {_id: "t1_1", title: "Прочесть книгу Энтони Роббинса", done: false},
            {_id: "t1_2", title: "Медитация крия", done: true},
            {_id: "t1_3", title: "Прогуляться и послушать музыку", done: true}
        ]},
        {name: "Бизнес", color: "blue", _id: "t2", data: [
            {_id: "t2_1", title: "Найти поставщика стекол для смартфонов", done: false},
            {_id: "t2_2", title: "Заменить кейс в бизнес плане",done: true},
            {_id: "t2_3", title: "Встреча с инвесторами вечером", done: true}
        ]},
        {name: "Семья", color: "leaf", _id: "t3", data: [
            {_id: "t3_1", title: "Найти девушку", done: false},
            {_id: "t3_2", title: "Помочь родителям с переездом", done: false}
        ]},
        {name: "Другое", color: "pink", _id: "t4", data: [
            {_id: "t4_1", title: "Помыться", done: false},
            {_id: "t4_2", title: "Купить хлеб", done: true},
            {_id: "t4_3", tite: "Сходить на митап", done: true},
            {_id: "t4_4", title: "Узнать где есть вкусная шаурма", done: true}
        ]}
    ]
}

it('addTagTask without crashing', () => {
    let action = addTagTaskAction({id: "t1", data: 'TEST!'});

    let newState = businessReducer(state, action);

    expect(newState.tasks[0].data.length).toBe(4);
});

it('addTag without crashing', () => {
    let action = addTagAction({title: 'TEST!'});

    let newState = businessReducer(state, action);

    expect(newState.tasks.length).toBe(5);
});

it('deleteTag without craching', () => {
    let action = deleteTag('t1');

    let newState = businessReducer(state, action);

    expect(newState.tasks.length).toBe(3);
})

it('deleteTagTasks without crashing', () => {
    let taskId = 't1_1', tagId = 't1';

    let action = deleteTagTask({tagId, taskId});

    let newState = businessReducer(state, action);

    expect(newState.tasks[0].data.length).toBe(2)
})