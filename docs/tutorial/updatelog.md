# 升级变动

## 核心库

- **1.1.35及以后，dirtyPenRect 重命名为updatePenRect**
- **1.1.22及以后，render规则优化，即topology.render(Infinity); 修改为 topology.render();**
- **版本 \[1.1.34,1.1.39\] 之间，节点事件中使用到了codition字段，我们发现这样不太合理，请直接升级到1.1.39版本**

## 图形库

- **@topology/form-diagram图形库（对应官网表单）中，table升级为table2，table不再维护**