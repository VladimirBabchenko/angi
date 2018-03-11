export default function fabricServices($http) {
    this.getPosts = function(url) {
        return $http.get(url);
    }
}