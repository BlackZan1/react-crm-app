import Axios from "axios"

let inst = Axios.create({
    // baseURL: 'http://localhost:3001'
    // baseURL: 'http://localhost:3000'
    baseURL: 'https://blackzan1.github.io/react-crm-app'
})

export const getBudgetData = async () => {
    let res = await inst.get('/data/budget.json');
    return res.data;
}

export const getBusinessData = async () => {
    let res = await inst.get('/data/business.json');
    return res.data;
}

export const getUserData = async () => {
    let res = await inst.get('/data/user.json');
    return res.data;
}

export const getBudgetProgress = async () => {
    let res = await inst.get('/data/budget.json');
    return res.data.budget;
}

export const getBusinessProgress = async () => {
    let res = await inst.get('data/business.json');
    return res.data.business.tasks;
}