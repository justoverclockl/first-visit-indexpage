import app from 'flarum/forum/app';
import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';

export default class FirstVisitIndexPage extends Page {
    view() {
        const baseUrl = app.forum.attribute('baseUrl');

        return m('.IndexPage', [
            IndexPage.prototype.hero(),
            m('.container',
                m('.sideNavContainer', [
                    m('.IndexPage-results.sideNavOffset',
                        m('div', { className: 'body-post' }, [
                            m('section',
                                { className: 'timeline-outer', id: 'timeline' },
                                m('div',
                                    { className: 'container', id: 'content' },
                                    m('div',
                                        { className: 'row' },
                                        m('div', { className: 'col s12 m12 l12' }, [
                                            m('h1', { className: 'maintitle-text lighten-1 header' },
                                              app.translator.trans('first-visit-indexpage.forum.title')
                                            ),
                                          m("div", {id:"warningbox"},
                                            m("div", {id:"rulesbox"},
                                              [
                                                m("p",
                                                  [
                                                    m("i", {className:"fas fa-exclamation"}),
                                                    m("strong", app.translator.trans('first-visit-indexpage.forum.warning-title')
                                                    )]),
                                                m("p", app.translator.trans('first-visit-indexpage.forum.warning-text')
                                                )])
                                          ),
                                            m('ul', { className: 'timeline' }, [
                                                m('li', { className: 'event' }, [
                                                    m('h3', { id: 'generalRules' }, app.translator.trans('first-visit-indexpage.forum.general-rules')),
                                                    m('p',  app.translator.trans('first-visit-indexpage.forum.general-rules-text')
                                                    ),
                                                ]),
                                                m('li', { className: 'event' }, [
                                                    m('h3', { id: 'posting' }, app.translator.trans('first-visit-indexpage.forum.posting-rules')),
                                                    m('p',  app.translator.trans('first-visit-indexpage.forum.posting-rules-text')
                                                    ),
                                                ]),
                                                m('li', { className: 'event' }, [
                                                    m('h3', { id: 'spam' }, app.translator.trans('first-visit-indexpage.forum.spam')),
                                                    m('p',  app.translator.trans('first-visit-indexpage.forum.spam-text')
                                                    ),
                                                ]),
                                                m('li', { className: 'event' }, [
                                                    m('h3', { id: 'copyright' }, app.translator.trans('first-visit-indexpage.forum.copyright')),
                                                    m('p',  app.translator.trans('first-visit-indexpage.forum.copyright-text')
                                                    ),
                                                ]),
                                                m('li', { className: 'event' }, [
                                                    m('h3', { id: 'break' }, app.translator.trans('first-visit-indexpage.forum.rule-break')),
                                                    m('p',  app.translator.trans('first-visit-indexpage.forum.rule-break-text')
                                                    ),
                                                ]),
                                            ]),
                                        ])
                                    )
                                )
                            ),
                            m('button',
                                {
                                    className: 'btn btn1',
                                    onclick: () => {
                                      window.location = baseUrl;
                                    },
                                },
                              app.translator.trans('first-visit-indexpage.forum.agree-button')
                            ),
                        ])
                    ),
                ])
            ),
        ]);
    }
}
