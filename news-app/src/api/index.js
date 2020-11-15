const requestCall = function(url, config) {
    return fetch(url, config).then(res => res.json()).catch(err => console.log(err));
}

export default {
    get: function(url, config) { return requestCall(url, {...config, method: 'GET'}) },
    post: function(url, config) { return requestCall(url, {...config, method: 'POST'}) }, 
    put: function(url, config) { return requestCall(url, {...config, method: 'PUT'}) },
    delete: function(url, config) { return requestCall(url, {...config, method: 'DELETE'}) },
};