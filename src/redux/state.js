const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, massage: 'Hi, how are you?', likesCount: 5},
                {id: 2, massage: 'It`s my first post', likesCount: 3}
            ],
            newPostText: ''
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Vova'},
                {id: 2, name: 'Max'},
                {id: 3, name: 'Tanya'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Nikolai'},
                {id: 6, name: 'Julia'}
            ],
            massages: [
                {id: 1, massage: 'Hi'},
                {id: 2, massage: 'How are you?'},
                {id: 3, massage: 'Yo!'}
            ]
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Max'},
                {id: 2, name: 'Tanya'},
                {id: 3, name: 'Sasha'}
            ]
        }
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 3,
                massage: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});


export default store;
