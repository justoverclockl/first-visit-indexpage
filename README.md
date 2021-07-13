# FirstVisitIndexPage

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](http://poser.pugx.org/justoverclock/first-visit-indexpage/v)](https://packagist.org/packages/justoverclock/first-visit-indexpage) [![Total Downloads](http://poser.pugx.org/justoverclock/first-visit-indexpage/downloads)](https://packagist.org/packages/justoverclock/first-visit-indexpage)

A [Flarum](http://flarum.org) extension. Redirect first user visit (only for registered users) to a custom IndexPage that shows forum rules. This happen only for the FIRST visit of a registered users.

![ezgif-4-f3686d39f04a](https://user-images.githubusercontent.com/79002016/125260903-11522280-e301-11eb-8539-c8fcc53e768b.gif)


### Installation

Install with composer:

```sh
composer require justoverclock/first-visit-indexpage:"*"
```

### Updating

```sh
composer update justoverclock/first-visit-indexpage:"*"
php flarum migrate
php flarum cache:clear
```

### Links

- [Packagist](https://packagist.org/packages/justoverclock/first-visit-indexpage)
- [GitHub](https://github.com/justoverclockl/first-visit-indexpage)
