import { createSelector } from 'reselect';

const getHeaderAuth = (state) => state.dataUser.isAuth;

const getName = (state) => state.dataUser.user.name;

const getImage = (state) => state.dataUser.user.image;

export const getHeaderSelector = createSelector(
    getHeaderAuth,
    getName,
    getImage,
    (isAuth, name, image) => ({isAuth, name, image})
)