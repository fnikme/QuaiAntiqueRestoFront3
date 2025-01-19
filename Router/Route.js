export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[] -> Tout le monde peut y accéder
["disconnected"] ->Réservé aux utilisaters déconnectés
["client"] ->Réservé aux utilisaters avec le rôle client
["admin"] ->Réservé aux utilisaters avec le rôle admin
["admin", "client"] ->Réservé aux utilisaters avec le rôle admin OU client
*/