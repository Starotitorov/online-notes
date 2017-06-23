import fetch from 'isomorphic-fetch';

export default (url, options = {}) =>
    fetch(url, options)
        .then(response =>
            (response.status >= 200 && response.status < 300) ?
                Promise.resolve(response) :
                Promise.reject(response));
