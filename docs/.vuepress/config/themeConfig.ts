import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";

export default <VdoingThemeConfig>{
  logo: 'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171252440.jpg',
  nav: [
    { text: '首页', link: '/' },
    { text: '成电', items: [
        { text: '本科相关(软院)', link: '/software/' },
        { text: '硕士相关(计院&国卓院)', link: '/computer/' }
      ] 
    },
    { text: '计算机', items: [
      { text: '嵌入式', link: '/embedded/' },
      { text: '大模型', link: '/LLM/' }
    ] 
  },
    {
      text: 'tips', items: [
        { text: '网站搭建', link: '/Blog/' }
      ]
    },
  ],
  sidebar: 'structuring',

  // // 编辑此页配置
  // repo: 'Peter-JXL/vuepress-learn',
  // docsDir: 'docs',
  // editLinks: true,
  // editLinkText: '编辑此页',
  bodyBgImg:[
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428743.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428742.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428741.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428738.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428736.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428735.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428734.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428733.png',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428732.png',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428730.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428731.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428726.jpg',
    'https://cdn.jsdelivr.net/gh/Wcacciatori/imgs/imgs/20251030171428725.jpg',
  ],
  bodyBgImgOpacity: 1,
  bodyBgImgInterval: 12,
  lastUpdated: '上次更新', 

  indexImg: {
    navColor: 2,    // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
    switchNavColor: true,    // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
    // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
    bgTimeColor: true,     // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
    bgTimeColorArray: ['transparent', 'transparent', 'rgba(0, 0, 0, .5)', 'rgba(0, 0, 0, .5)'],   // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效。提示：如果不想要这个效果，但是又想要时间窗口提示效果，则改为 ['transparent', 'transparent', 'transparent', 'transparent']
    descFade: true,   // 是否开启图片中间描述的淡入效果，默认为 false
    desc: ["淡泊而明志，宁静以致远", "跟随内心的指引，勇敢地做自己", "如果给我再来一次的机会，我绝对不会提前进组"],  // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFade 为 true 生效
    descFontSize: '1.2rem',   // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
    descFadeInTime: 200,  // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
    descFadeOutTime: 100,  // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
    descNextTime: 800,  // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
    bubble: false,    // 是否开启图片的气泡效果，默认为 false
    bubblePosition: 0,  // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
    bubbleNum: 200,   // 气泡的个数，bubble 为 true 生效，默认 200 个
  },
  
  


  // 页脚
  footer: {
    createYear: 2022,
    copyrightInfo: 'Heja',
  }
}