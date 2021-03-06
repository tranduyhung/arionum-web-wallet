# arionum-web-wallet

[![Latest Version on NPM][ico-version]][link-npm]
[![Software License][ico-license]](LICENSE.md)
[![Build Status][ico-travis]][link-travis]
[![Code Coverage][ico-code-quality]][link-code-quality]
[![Total Downloads][ico-downloads]][link-downloads]

A Node web wallet for the Arionum cryptocurrency.

## Install

Via CLI

```bash
$ git clone git@github.com:pxgamer/arionum-web-wallet.git
$ cd arionum-web-wallet
$ yarn
```

## Usage

This wallet requires a Node with the `Access-Control-Allow-Origin` header set to function correctly.
This can be set in the `.env` file.

In theory, all you need to provide is your public key. To do this, add it in the `/settings` view.

For development, you can use `yarn serve`. For production, you can use `yarn build`.

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [pxgamer][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[ico-version]: https://img.shields.io/npm/v/arionum-web-wallet.svg?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/pxgamer/arionum-web-wallet/master.svg?style=flat-square
[ico-code-quality]: https://img.shields.io/codecov/c/github/pxgamer/arionum-web-wallet.svg?style=flat-square
[ico-downloads]: https://img.shields.io/npm/dt/arionum-web-wallet.svg?style=flat-square

[link-npm]: https://npmjs.com/package/arionum-web-wallet
[link-travis]: https://travis-ci.com/pxgamer/arionum-web-wallet
[link-code-quality]: https://codecov.io/gh/pxgamer/arionum-web-wallet
[link-downloads]: https://npmjs.com/package/arionum-web-wallet
[link-author]: https://github.com/pxgamer
[link-contributors]: ../../contributors
