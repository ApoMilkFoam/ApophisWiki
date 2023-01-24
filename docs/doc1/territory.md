---
sidebar_position: 2
---
# 领地用法与注意事项

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

## 如何圈地

- 前往 `毁神星` 后，在没有玩家圈地的地方拿着 `木铲子` 即可
- 然后在点击地上的方块，再点击起始方块的对角方块进行圈地

:::caution

点击的方块和圈地之后会暂时更改方块  
等到全部圈地完成之后，方块会自动复原，所以请不要反馈此问题

:::


## 领地常用指令
- /gd abandon claim - 放弃自己脚下的领地
- /gd abandon all - 放弃自己所有的领地 <Highlight color="#ff0000">慎用</Highlight>
- /gd claim list - 查看自己有权限的领地列表
- /claim - 开启领地模式
- /claimgui - 切换信息模式为 GUI/聊天
- /cf - 打开权限管理
