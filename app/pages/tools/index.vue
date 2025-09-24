<script setup lang="ts">
import { ref } from "vue";

// 热门网站数据
const popularWebsites = ref([
  {
    id: 1,
    name: "DeepSeek大模型",
    description: "深度求索DeepSeek大语言模型,由深度求索公司开发",
    icon: "🐋",
    clicks: 9840,
    url: "https://www.deepseek.com",
  },
  {
    id: 2,
    name: "DeepSeek对话",
    description: "深度求索DeepSeek大语言模型,由深度求索公司开发",
    icon: "🐋",
    clicks: 3710,
    url: "https://chat.deepseek.com",
  },
  {
    id: 3,
    name: "豆包AI助手",
    description: "豆包是字节跳动公司基于云雀模型开发的AI工具",
    icon: "👩",
    clicks: 2760,
    url: "https://www.doubao.com",
  },
  {
    id: 4,
    name: "Kimi智能助手",
    description: "Kimi 是由月之暗面科技有限公司开发的智能聊天助手",
    icon: "K",
    clicks: 2160,
    url: "https://kimi.moonshot.cn",
  },
  {
    id: 5,
    name: "火山方舟-火山引擎",
    description: "火山引擎是字节跳动旗下的云服务平台,火山方舟提供AI服务",
    icon: "⛰️",
    clicks: 1810,
    url: "https://www.volcengine.com",
  },
  {
    id: 6,
    name: "16Personalities",
    description: "免费MBTI性格测试、类型描述、人际关系和职业指导",
    icon: "🎯",
    clicks: 1750,
    url: "https://www.16personalities.com",
  },
  {
    id: 7,
    name: "CueMe智能助手",
    description: "CueMe 是由夸克自主研发的一款智能对话助手",
    icon: "💜",
    clicks: 1540,
    url: "https://cume.quark.cn",
  },
  {
    id: 8,
    name: "SC.Net 超算互联网",
    description: "[无需注册] 国家超算互联网,上线 DeepSeek,提供AI对话服务",
    icon: "SC",
    clicks: 1500,
    url: "https://sc.net",
  },
  {
    id: 9,
    name: "司南大模型竞技场",
    description: "CompassArena:免费体验国内外的一些主流开源大模型",
    icon: "🧭",
    clicks: 1490,
    url: "https://compassarena.ai",
  },
  {
    id: 10,
    name: "vectorCraftr",
    description: "开源插画网站",
    icon: "🔺",
    clicks: 1410,
    url: "https://vectorcraftr.com",
  },
  {
    id: 11,
    name: "Yi大模型",
    description: "零一万物推出的千亿参数大模型,提供问答及文本生成服务",
    icon: "Y",
    clicks: 1220,
    url: "https://yi.01.ai",
  },
  {
    id: 12,
    name: "文心大模型",
    description: "百度文心一言大语言模型,可以与人对话互动,回答问题",
    icon: "文",
    clicks: 1200,
    url: "https://yiyan.baidu.com",
  },
]);

// 在线游戏数据
const onlineGames = ref([
  {
    id: 1,
    name: "召唤神龙",
    description:
      "体验激动人心的召唤神龙在线游戏。从蝌蚪,青蛙,蛇一步步进化成神龙",
    icon: "🐉",
    url: "https://games.shenlong.com",
  },
  {
    id: 2,
    name: "斗兽棋",
    description: "低难度版的斗兽棋游戏,益智类小游戏,画面精美,操作简单",
    icon: "🐅",
    url: "https://games.doushouqi.com",
  },
]);

// 点击处理函数
const handleClick = (item: any) => {
  item.clicks = (item.clicks || 0) + 1;
  // 在新窗口打开链接
  window.open(item.url, "_blank");
};

// 格式化点击次数
const formatClicks = (clicks: number) => {
  if (clicks >= 1000) {
    return `${Math.floor(clicks / 1000)}${clicks % 1000 >= 100 ? Math.floor((clicks % 1000) / 100) : ""}${clicks % 1000 >= 10 ? Math.floor((clicks % 1000) / 10) : ""}0+次点击`;
  }
  return `${clicks}+次点击`;
};
</script>

<template>
  <div class="tools-container">
    <!-- 热门网站部分 -->
    <section class="section">
      <h2 class="section-title">热门网站</h2>
      <div class="cards-grid">
        <div
          v-for="item in popularWebsites"
          :key="item.id"
          class="card"
          @click="handleClick(item)"
        >
          <div class="card-icon">{{ item.icon }}</div>
          <div class="card-content">
            <h3 class="card-title">{{ item.name }}</h3>
            <p class="card-description">{{ item.description }}</p>
            <div class="card-clicks">{{ formatClicks(item.clicks) }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 在线游戏部分 -->
    <section class="section">
      <h2 class="section-title">在线游戏</h2>
      <div class="games-grid">
        <div
          v-for="item in onlineGames"
          :key="item.id"
          class="card game-card"
          @click="handleClick(item)"
        >
          <div class="card-icon">{{ item.icon }}</div>
          <div class="card-content">
            <h3 class="card-title">{{ item.name }}</h3>
            <p class="card-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.tools-container {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  background: var(--bg-content);
  min-height: 100vh;
}

.section {
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--primary-color);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 60px;
    height: 2px;
    background: var(--primary-color);
  }
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-large);
  padding: 20px;
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-color), #764ba2);
    transform: scaleX(0);
    transition: transform var(--transition-normal);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-medium);
    background: var(--bg-card-hover);
    border-color: var(--primary-color);

    &::before {
      transform: scaleX(1);
    }

    .card-icon {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: translateY(-2px);
  }
}

.game-card {
  background: linear-gradient(
    135deg,
    var(--bg-card) 0%,
    rgba(102, 126, 234, 0.05) 100%
  );

  &:hover {
    background: linear-gradient(
      135deg,
      var(--bg-card-hover) 0%,
      rgba(102, 126, 234, 0.1) 100%
    );
  }
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius);
  background: linear-gradient(135deg, var(--primary-color), #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  margin-bottom: 16px;
  transition: transform var(--transition-normal);
  box-shadow: var(--shadow-light);
}

.card-content {
  flex: 1;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.4;
}

.card-description {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-clicks {
  font-size: 12px;
  color: var(--primary-color);
  font-weight: 500;
  background: rgba(102, 126, 234, 0.1);
  padding: 4px 8px;
  border-radius: var(--border-radius-small);
  display: inline-block;
}

// 响应式设计
@media (max-width: 768px) {
  .tools-container {
    padding: 16px;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .games-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .card {
    padding: 16px;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .tools-container {
    padding: 12px;
  }

  .card-icon {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .card-title {
    font-size: 16px;
  }

  .card-description {
    font-size: 13px;
  }
}

// 暗黑模式适配
[data-theme="dark"] {
  .card {
    background: var(--bg-card);
    border-color: var(--border-color);

    &:hover {
      background: var(--bg-card-hover);
    }
  }

  .game-card {
    background: linear-gradient(
      135deg,
      var(--bg-card) 0%,
      rgba(102, 126, 234, 0.1) 100%
    );

    &:hover {
      background: linear-gradient(
        135deg,
        var(--bg-card-hover) 0%,
        rgba(102, 126, 234, 0.15) 100%
      );
    }
  }
}
</style>
