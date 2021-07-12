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
                                            m('h1', { className: 'blue-text lighten-1 header' }, 'Steps to become a good user'),
                                            m('ul', { className: 'timeline' }, [
                                                m('li', { className: 'event' }, [
                                                    m('h3', 'Management and Entreprenurship (MSc)'),
                                                    m('p',
                                                        ' This September 2015 I will begin an MSc in Management and Entrepreneurship at University of Sussex, to broaden my knowledge and gain skills necessary for my future in business and management. '
                                                    ),
                                                ]),
                                                m('li', { className: 'event' }, [
                                                    m('h3', 'Claromentis'),
                                                    m('p',
                                                        ' Claromentis is an intranet software provider company. I started working at the Brighton office as a Marketing Designer while I was still attending my final year at the University of Sussex. My primary responsibilities included creating corporate identity for the company; I re-designed their website, and have created marketing materials such as brochures. '
                                                    ),
                                                    m('p',
                                                        'Since graduating from university, I have also undertaken responsibilities for designing a product for the company. The roles I have been given have provided the perfect opportunity to implement the skills I have gained throughout my higher education, as well as experiencing the running of a successful business.'
                                                    ),
                                                ]),
                                                m('li', { className: 'event' }, [
                                                    m('h3', 'Games & Multimedia Environments BSc (Hons)'),
                                                    m('p',
                                                        "Throughout my degree I have gained expansive knowledge of informatics areas including Human Computer Interaction, Multimedia Design and Development, Program Analysis and Design For my final year project, I created a 2D Puzzler Game for iOS called 'Flat Ball' and received a first. I therefore hope to release this game and further develop it to add new levels and improve the features. "
                                                    ),
                                                ]),
                                                m('li', { className: 'event' }, [
                                                    m('h3', '1108 Studios'),
                                                    m('p',
                                                        'This is a small startup that a friend and I created to gain more skills and apply those I had learned while completing my diploma. Since its inception, as a front - end web developer I have advised, designed and built web solutions for numerous clients.'
                                                    ),
                                                ]),
                                                m('li', { className: 'event' }, [
                                                    m('h3', 'IT Practitioners BTEC National Diploma'),
                                                    m('p',
                                                        'This is where my interest in building things for interactive media began. During my first computing course I studied a range of core topics including multimedia design, database design, computer games development, computer networks and object oriented programming.'
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
                                'I agree'
                            ),
                        ])
                    ),
                ])
            ),
        ]);
    }
}
