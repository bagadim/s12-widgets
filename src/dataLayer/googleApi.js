import axios from 'axios';
const key = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

export default {
    translate(text, language) {
        return axios.post(
            'https://translation.googleapis.com/language/translate/v2',
            {},
            {
                params: {
                    q: text,
                    target: language,
                    key
                }
            }
        );
    }
};
