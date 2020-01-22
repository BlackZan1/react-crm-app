type AddTagTask = (id: ID, data: TaskItem) => void
type AddTag = (data: TagItem) => void
type DeleteTagTask = (tagId: ID, taskID: ID) => void
type DeleteTag = (id: ID) => void
type SetTaskDone = (tagId: ID, taskId: ID) => void
type SetTagName = (id: ID, title: string) => void
type ID = string | number | null

export interface BusinessContainerProps {
    getBusinessDataAction: Function
    isFetching: boolean
    tasks: TagItem[] | []
    deleteTagAction: DeleteTag
    addTagTaskAction: AddTagTask
    addTagAction: AddTag
    deleteTagTaskAction: DeleteTagTask
    setTaskDoneAction: SetTaskDone
    setTagNameAction: SetTagName
}

export interface BusinessProps {
    tasks: TagItem[] | []
    deleteTagAction: DeleteTag
    addTagTaskAction: AddTagTask
    addTagAction: AddTag
    deleteTagTaskAction: DeleteTagTask
    setTaskDoneAction: SetTaskDone
    setTagNameAction: SetTagName
}

export interface BusinessNavProps {
    tasks: TagItem[]
    changeTagId: (id: ID) => void
    onClickDelete: (id: ID) => void
    toggleAddTagModal: () => void 
}

export interface NavTagItemProps {
    name: string
    color: string
    id: ID
    onClick: (id: ID) => void
    deleteTag: (id: ID) => void
}

export interface TasksListProps {
    data: TagItem[]
    addTagTask: AddTagTask
    deleteTagTaskAction: DeleteTagTask
    setTaskDoneAction: SetTaskDone
    setTagNameAction: SetTagName
}

export interface TasksListItemProps {
    name: string
    color: string
    data: TaskItem[]
    id: ID
    addTagTask: AddTagTask
    deleteTagTaskAction: DeleteTagTask
    setTaskDoneAction: SetTaskDone
    setTagNameAction: SetTagName
}

export interface ListInputProps {
    color: string
    addNewTagTask: (data: TaskItem) => void
}

export interface TagItem {
    _id: ID
    name: string
    color: string
    data: TaskItem[]
}

export interface TaskItem {
    _id: ID
    title: string
    done: boolean
}