出现加载 coa-gzip 依赖时出现错误:npm WARN deprecated koa-gzip@0.1.0: please use koa-compress instead.

解决问题的方式是:用nodejs command  运行命令
```nodejs
npm install coa-gzip --save
```

可以使用另一种方法解决改问题
然后在全局里复制组件到node_modules中
```nodejs
npm install coa-frouter -g
```

