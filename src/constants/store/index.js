import { createHook, createStore } from "react-sweet-state";

const Store = createStore({
    initialState: {
        image: "",
        name: "",
        birthday: "",
        gender: "",
        position: "Web Developer Internship",
        address: "",
        mail: "",
        phone: "",
        interest: "",
        facebook: "https://www.facebook.com/johndoe",
        github: "https://github.com/",
    },
    actions: {
        insert:
            (e) =>
            ({ setState, getState }) => {
                setState({ ...getState(), [e.target.name]: e.target.value });
            },
        setImage:
            (url) =>
            ({ setState }) => {
                setState({
                    image: url,
                });
            },
    },
});

export const useInsert = createHook(Store);
