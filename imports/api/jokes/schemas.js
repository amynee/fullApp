SimpleSchema.extendOptions(['autoform']);
import SimpleSchema from 'simpl-schema';

export const jokeSchema = new SimpleSchema({
    name: {
        type: String,
        autoform: {
            placeholder: "Joke Name",
            label: false
        }
    },
    post: {
        type: String, 
        autoform: {
            placeholder: "Joke Post",
            label: false
        }
    }
});