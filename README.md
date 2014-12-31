node-train
---

[![NPM version][npm-image]][npm-url]
[![David deps][david-image]][david-url]

[npm-image]: https://img.shields.io/npm/v/cntrain.svg?style=flat
[npm-url]: https://npmjs.org/package/cntrain
[david-image]: https://img.shields.io/david/SFantasy/node-train.svg?style=flat
[david-url]: https://david-dm.org/SFantasy/node-train

[![NPM](https://nodei.co/npm/cntrain.png?downloads&downloadRank)](https://nodei.co/npm/cntrain/)

Query things about Chinese railway via CLI.

## Install

```
[sudo] npm install cntrain [-g]
```

## Usage

- Query train schedule

```sh
cntrain -n g1
```

- Query left tickets

```sh
cntrain -f 南京南 -t 北京南 -d 2015-01-05
```

- Look for help

```sh
cntrain -h
```

- Get the vertion

```sh
cntrain -V
```

## Screenshot

- Query train schedule

![screenshot1](screenshot1.png)

- Query left tickets

![screenshot2](screenshot2.png)

## License

The MIT License
