import app from 'flarum/forum/app';
import FirstVisitIndexPage from "./components/FirstVisitIndexPage";


app.initializers.add('justoverclock/first-visit-indexpage', () => {
  app.routes.FirstVisitIndexPage = {
    path: "/forum-rules",
    component: FirstVisitIndexPage,
  };
});
