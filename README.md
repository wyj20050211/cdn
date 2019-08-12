# CDN  
静态文件访问加速 由[jsDelivr](https://www.jsdelivr.com/)提供  
# 使用教程  
1. 新建一个仓库，名称随意，设置为公开，建议勾选使用README初始化仓库  
![新建仓库](https://ae01.alicdn.com/kf/HTB1b0EuXoH1gK0jSZSy760tlpXaG.png)  
2. 往这个仓库里传你想加速的文件  
3. （可选）来到发布页，创建一个新版本  
![发布页](https://ae01.alicdn.com/kf/HTB1k3MvXeP2gK0jSZFo761uIVXaG.png)
4. （可选）版本号任意，记住你写的版本号，然后发布  
![创建新版本](https://ae01.alicdn.com/kf/HTB1M43sXX67gK0jSZPf761hhFXaV.png)  
5. 接下来就可以访问以下几种链接来加速你的文件了  
- 指定已发布的版本：  
```
https://cdn.jsdelivr.net/gh/用户名/仓库名@版本号/文件路径
```  
- 最新已发布的版本：  
```
https://cdn.jsdelivr.net/gh/用户名/仓库名@latest/文件路径
```  
- 仓库已更新但未发布：  
```
https://cdn.jsdelivr.net/gh/用户名/仓库名/文件路径
```
  
# 示例  
- [https://cdn.jsdelivr.net/gh/wyj20050211/demo@0.1/IMG_20190707_102951.png](https://cdn.jsdelivr.net/gh/wyj20050211/demo@0.1/IMG_20190707_102951.png)  
- [https://cdn.jsdelivr.net/gh/wyj20050211/demo@latest/IMG_20190707_102951.png](https://cdn.jsdelivr.net/gh/wyj20050211/demo@latest/IMG_20190707_102951.png)  
- [https://cdn.jsdelivr.net/gh/wyj20050211/demo/IMG_20190707_102951.png](https://cdn.jsdelivr.net/gh/wyj20050211/demo/IMG_20190707_102951.png)
  
**注意：jsDelivr加速的单文件不能超过20MB**  