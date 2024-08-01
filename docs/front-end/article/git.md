# git

## [git配置与删除远程仓库地址](https://www.cnblogs.com/stronger-xsw/p/12991139.html)

1，查看本地是否配置了远程仓库地址
`git remote -v`

2,删除远程地址
`git remote rm origin`
如图：

![img](https://img2020.cnblogs.com/blog/1276937/202005/1276937-20200530101447149-979931885.png)

3，添加新地址
`git remote add origin url`
注意：url 为你远程仓库新地址
如图：

![img](https://img2020.cnblogs.com/blog/1276937/202005/1276937-20200530101933539-1782162103.png)



【git remote set-url origin URL】 更换远程仓库地址，URL为新地址。

## git强制覆盖远程分支

git push origin 分支名 --force

一般是

git push origin mian --force

现在的默认分支名不再是master

没有 git 包的时候记得一定得 git init 初始化

输入

```csharp
git  init
```

（此步操作完成后，会在此文件夹下生成一个隐藏的.git后缀文件）

![img](https://images2015.cnblogs.com/blog/831529/201609/831529-20160920155634527-492282485.png)

**添加、提交文件到本地仓库**

1. git add . 或者 git add <filename>

   git commit –m "项目描述"

**将本地文件推送到coding服务器**

git remote add origin https:// git.coding.net/用户名/项目名.git

git push origin master -f 强制更新



## git push失败。更新被拒绝，因为远程包含您所做的工作。

**解决方案**

**1）方案一**

①使用在linux本地git工作目录，使用 **git pull --rebase origin master** 命令，将远程[gitlab](https://so.csdn.net/so/search?q=gitlab&spm=1001.2101.3001.7020)仓库更新下载到本地

②再次使用 **git push -u origin master** 命令上传

但是这种办法依然报了如上错误

**2）方案二**

①使用 git clone git@xxxxx.git 命令，将远程仓库克隆到本地

②再次提交至本地仓库：[vim](https://so.csdn.net/so/search?q=vim&spm=1001.2101.3001.7020) xxx.txt --> git add . --> git commit -m “add xxx”

③使用 git push -u origin master 命令上传至远程仓库



**把gitlab拉取项目到本地**

git fetch origin master（master为gitlab仓库的分支名）



拉取远程的master分支，命令：

git fetch origin master（master远程仓库名称）



**把内容都拉取到本地**

git pull origin master（master远程仓库名称）



git  clone 'url' 拉去地址



## git 提交时忽略eslint检查

```
git commit -m "+" --no-verify
```

