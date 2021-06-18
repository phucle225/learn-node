import {person} from "./models";

let data = new person({username: "test", password: "test"})
export var service = {
    get: ({username: string, password: string}) => {
        return data;
    },
};