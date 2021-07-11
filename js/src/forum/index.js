import {extend} from "flarum/common/extend";
import app from 'flarum/forum/app';
import FirstVisitIndexPage from "./components/FirstVisitIndexPage";
import HeaderPrimary from "flarum/forum/components/HeaderPrimary";
import Page from "flarum/common/components/Page";


app.initializers.add('justoverclock/first-visit-indexpage', () => {
  app.routes.FirstVisitIndexPage = {
    path: "/forum-rules",
    component: FirstVisitIndexPage,
  };
  extend(Page.prototype, 'oninit', function () {
    const User = app.session.user;
    const baseUrl = app.forum.attribute('baseUrl');

    if (User){
    function redirect() {
      var thecookie = readCookie('doRedirect');
      if (!thecookie) {
        window.location = baseUrl + '/forum-rules';
      }
    }

    function createCookie(name, value, days) {
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
      } else var expires = "";
      document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    window.onload = function () {
      redirect();
      createCookie('doRedirect', 'true', '9999');
    }
  }})
});





