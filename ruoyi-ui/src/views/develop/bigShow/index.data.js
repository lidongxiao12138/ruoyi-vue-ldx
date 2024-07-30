const config = {
  data: [
    {
      name: '哈尔滨',
      value: 55
    },
    {
      name: '齐齐哈尔',
      value: 120
    },
    {
      name: '大庆',
      value: 78
    },
    {
      name: '绥化',
      value: 66
    },
    {
      name: '鸡西',
      value: 80
    }
  ],
  color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
  radius: '65%',
  activeRadius: '70%',
  unit: '单位'
}

const config1 = {
  points: [
    {
      name: '哈尔滨',
      coordinate: [0.47, 0.80]
    },
    {
      name: '大兴安岭',
      coordinate: [0.30, 0.17]
    },
    {
      name: '齐齐哈尔',
      coordinate: [0.28, 0.61]
    },
    {
      name: '绥化',
      coordinate: [0.40, 0.68]
    },
    {
      name: '鸡西',
      coordinate: [0.73, 0.78],
    }
  ],
  lines: [
    {
      source: '大兴安岭',
      target: '哈尔滨',
    }, {
      source: '齐齐哈尔',
      target: '哈尔滨',
    }, {
      source: '绥化',
      target: '哈尔滨',
    }, {
      source: '鸡西',
      target: '哈尔滨',
    }
  ],
  text: {
    show: true,
    color: '#00baff',
  },
  k: 0.5,
  bgImgSrc: require('./components/datav/img/hljsMap.svg')
}

const config2 = {
  data: [
    ['行1列1', '行1列2', '行1列3'],
    ['行2列1', '行2列2', '行2列3'],
    ['行3列1', '行3列2', '行3列3'],
    ['行4列1', '行4列2', '行4列3'],
    ['行5列1', '行5列2', '行5列3'],
    ['行6列1', '行6列2', '行6列3'],
    ['行7列1', '行7列2', '行7列3'],
    ['行8列1', '行8列2', '行8列3'],
    ['行9列1', '行9列2', '行9列3'],
    ['行10列1', '行10列2', '行10列3']
  ],
  index: true,
  columnWidth: [50],
  align: ['center']
}

const config3 = {
  data: [
    {
      name: '哈尔滨',
      value: 55123
    },
    {
      name: '大兴安岭',
      value: 12022
    },
    {
      name: '齐齐哈尔',
      value: 78932
    },
    {
      name: '鸡西',
      value: 63411
    },
    {
      name: '绥化',
      value: 44231
    },
    {
      name: '大庆',
      value: 49231
    },
    {
      name: '佳木斯',
      value: 74931
    }
  ],
  unit: '单位',
  // valueFormatter({ value }) {
  //   console.warn(arguments)
  //   const reverseNumber = (value + '').split('').reverse()
  //   let valueStr = ''

  //   while (reverseNumber.length) {
  //     const seg = reverseNumber.splice(0, 3).join('')
  //     valueStr += seg
  //     if (seg.length === 3) valueStr += ','
  //   }

  //   return valueStr.split('').reverse().join('')
  // }
}

export { config, config1, config2, config3 }