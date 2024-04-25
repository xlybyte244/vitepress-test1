# 代码仓库

管理版本，【记录】记录代码开发的过程，每一次的代码变化。【回退】将代码回退到之前的版本，【查看】查看所有版本，【协作】配合远程仓库，实现多人协作，可以解决多人开发，代码合并的问题

版本管理软件分类

集中式，例如SVN, CVN （代码版本集中到一个服务器，无网络无服务将无法使用）

分布式，例如Git , hg , bazaar （代码版本存储在每个电脑）

在版本控制系统中，大概90%都是在本地仓库中进行的，只有需要和团队共享时才需要远程仓库

# Git的使用

记录Git版本管理软件的使用步骤

下载地址： https://git-scm.com/download

Git GUI 是图形化界面工具，Git Bash 是命令行工具

Mac电脑安装后需要额外配置下：访达 -> 服务 -> 服务偏好设置 -> 勾选“新建位于文件夹位置的终端窗口”

**查询Git版本**

```javascript
git --version	//成功安装了的话，大概会提示 git version 2.27.0.windows.1
```

```javascript
clear	//清屏
```



## 配置信息

配置文件在用户目录下的mongoose\\.gitconfig

用户名和邮箱最好使用所注册的`github`账号或者码云`gitee`账号



配置信息

```javascript
// 设置全局
git config --global user.name 林忆;	//配置用户名
git config --global user.email hello@itcast.cn; //配置邮箱
```

查看配置信息

```javascript
git config --list;	//查看所有配置
git config user.name;	//查看单个配置，查看用户名
```

## 提交步骤

工作区	>	暂存区	>	代码仓库

首次记录当前项目之前，需要先初始化当前项目目录，在所在目录打开控制台窗口

只有提交到代码仓库了才会形成一个版本，切记不能嵌套已经初始化的文件夹，初始化后.git文件夹不能删除，它保存的是各个版本记录

```javascript
// 在作为仓库的文件夹中打开Git Bash命令行窗口，然后执行以下命令
// 1.初始化仓库
git init	//初始化当前目录为本地仓库，成功后目录下多个.git文件夹
git status	//查看文件状态
// 2.提交到暂存区
git add . 	//添加当前目录所有文件到暂存区
git add	a.js 	文件列表 //添加指定文件到暂存区,可以空格隔开添加多个文件
git add [dir] [file]   // 添加指定目录到暂存区，包括子目录
// 3.提交到仓库
git commit -m a.js ‘说明信息’	//提交暂存区指定文件到仓库
git commit -m ‘说明信息’	//将暂存区文件提交到仓库。只有提交到仓库了才会形成一个版本

git log	//查看提交信息,版本号
// 以上步骤执行完成后，方可推送到远程仓库
```

```javascript
git commit -a -m  //提交到暂存区并提交到提交到仓库,有新文件则无法使用该命令
git commit a.txt -m '说明信息'	//提交指定文件
```

## 撤销和切换版本

```javascript
// 查看版本
git log --oneline

// 将暂存区的代码文件撤销(覆盖)到工作区
git checkout 文件名		//文件名写(.)代表全部

//将仓库最后一条记录撤销(覆盖)到暂存区
git reset HEAD~     // 撤销本地的上次commit提交
git reset 文件

//将仓库的代码文件撤销(覆盖)到暂存区/工作区
git reset --hard 版本id;	//恢复到指定提交记录
// 如果reset后，版本回退了，无法直接push到远程仓库(因为远程仓库版本更加新)
// 可用git push -f 覆盖推送(会覆盖掉远程仓库成本地仓库为最新的代码)
git revert -n 版本id  //撤销指定commit提交记录，撤销后需要 再提交一次形成一次commit
```

```javascript
// 切换版本
git reset --hard commitID	//commitID就是版本ID，可用 git log 指令查看日志查看
// 版本ID是40位数的字符串，它保证每个版本版本号唯一，实际开发只需要使用前几位即可(不重复前提)
```

切换到前面的版本后，必须加`--reflog` 才能看到所有的版本号，否则看不到后面的版本

## 分支命令

> 分支就是当前项目的一个副本
>
> 在初始化仓库之后，默认是在master主分支进行操作的，一般都不允许在主分支上进行开发，一般在分支上开发，最后测试无误后将代码合并到master主分支，以确保主分支的正确性

`master` 主分支
`develop` 主开发分支，包含即将发布的代码
`feature` 新功能分支，一个新功能对应一个分支
`release` 发布分支，发布时用的分支，测试阶段发现BUG，在此分支进行修复
`hotfix` 热补丁分支，用于线上版本紧急修复BUG

有`master`主分支和`develop`开发分支，一般开发的提交到开发分支

(切换前先保存)切换分支后，工作区的代码也就相应的切换成了分支对应的代码

```bash
git branch	# 查看本地所有分支
git branch -r	# 查看远程所有分支
git branch -a	# 查看本地+远程所有分支
git branch 分支名称	# 创建新分支
git checkout 分支名称	# 切换分支(前后前，请先保存当前分支提交存储)
git checkout -b 分支名称	# 创建分支并切换
git merge 来源分支	# 合并分支，会将来源分支的所有记录都提交到该分支
git merge --abort  # 取消本次合并
git rebase 分支 # 合并分支，可以得到更加简洁的提交历史，去掉了merge commit，很少使用
# 删除前请先切换到其他分支
git cherry-pick [commit]  # 选择一个commit合并到当前分支
git branch -d 分支名称	# 删除分支(分支合并后才允许删除)
git branch -D 分支名称	 # -D强制删除(大写D)
git push origin 分支名称  # 推送本地分支到远程(远程不存在则会创建该分支)
git push origin -d 分支名  # 删除远程分支
```

```bash
# 合并分支，不将该分支的所有提交记录合并到本分支
git checkout master  # 切换到主分支
git merge --squash  branch   # 将功能分支合并到主分支，并不合并记录 
git commit -m "branch功能完成，合并到主干" # 提交一次
```



**快进合并分支**

一个分支包含另一个分支的全部提交记录

如果需要吧 login 分支的代码合并到 master 分支
1.切换到master分支
2.执行git merge login ，即可把login 分支的代码合并到 master
合并之后 两个分支的代码就一样了

**三方合并分支**

两个分支，比如master和login,特点是都有新的提交
也就是一个分支 不包括 另一个分支的全部提交记录
这种模式的合并，可能会有冲突(两个分支修改了同一个文件)

假设把login的代码合并到master分支
1.切换到master分支
2.执行 git merge login,表示将login分支的代码合并到当前master分支
3.可能会出现如下提示

提示1

```
Merge branch 'login'
# Please enter a commit message to explain why this merge is necessary,
# especially if it merges an updated upstream into a topic branch.
#
# Lines starting with '#' will be ignored, and an empty message aborts
# the comit
~
~
~
```

出现这个画面，意思是 合并成功了，但是这次合并，需要在提交一次，这里让你输入提交说明，第一行就是默认的提交说明

需要执行以下操作

- 直接按  `:q`,直接退出
- 如果需要修改说明，则以下操作
  - 按 `i`，进入插入模式，即可对文字进行修改，按方向键可移动光标位置
  - #开头的 代表注释，不必理会
  - 按`Esc`，退出插入模式
  - 输入 `:wq`，则退出当前画面，从而完成合并



提示2

```
Auto-merging js/category.js
CONFLICT(content): Merge conflict in js/category.js	//冲突的意思这里
Automatic merge; fix conflicts and then commit the result.

xxxxxx/xxxxxxx/xxxxxxx (master|login)   //表示正在合并中，并未结束
```

出现这个画面，表示正在合并，但是遇到冲突，需要你在代码中解决冲突，并保存代码，并在提交一次

操作如下

- 打开有冲突的文件，在分割线处 解决冲突代码
- 保存代码，提交暂存区，在提交 仓库，从而完成这个合并过程

------

## 标签

给提交打标签，比如标识版本 2.0.0，2.1.0

```bash
# 列出所有tag
$ git tag

# 新建一个tag在当前commit
$ git tag [tag]

# 新建一个tag在指定commit
$ git tag [tag] [commit]

# 删除本地tag
$ git tag -d [tag]

# 删除远程tag
$ git push origin :refs/tags/[tagName]

# 查看tag信息
$ git show [tag]

# 提交指定tag
$ git push [remote] [tag]

# 提交所有tag
$ git push [remote] --tags

# 新建一个分支，指向某个tag
$ git checkout -b [branch] [tag]
```



## 其它

暂时保存更改

```javascript
git stash;	//存储临时改动
git stash -u;  // 暂存未跟踪的文件
git stash pop;	//恢复改动
git stash list // 查看暂存列表
```

移出文件

```javascript
//将文件从暂存区删除,删除后不被git管理
git rm -r --cached 文件	//把文件从仓库中移出
git rm 文件	//把文件从工作区和仓库中同时移出
```

GIT忽略清单

```javascript
//忽略清单设置
//工作目录下 新建文件 .gitignore 将要忽略的文件或文件夹添加到文件中，一行一个
//如果文件已经被Git管理，但是想忽略，那么就需要移出文件
```

忽略文件格式 	`.gitignore` 的写法

```
text.html	//忽略当前目录下的 text.html文件
/test	//忽略当前目录的test文件夹
test/	//忽略任何目录中的test文件夹
/**/*.png	//忽略任何目录中的 png 文件
```

使用git复制出 尚未提交的文件

```bash
# 在源代码根目录，使用git status命令获取已修改文件的列表
git status | grep modified | awk '{print $2}' > list.txt
# 在当前目录下，创建temp目录
mkdir temp
# 将已修改文件列表逐一复制到当前目录下的temp目录
xargs -a ./list.txt cp --parents -t ./temp

# 将temp目录下的所有文件打包为modules.tar.gz
cd temp
tar -czf modules.tar.gz *
```





## 查看状态和日志

跟多命令选项查看官网文档：https://git-scm.com/docs/git-log

查看日志

```javascript
git log	//查看提交日志
git log --oneline	//单行查看简略版日志
git log -n	// 查看最近 n 次提交
git log --oneline --reflog	//查看全部日志
// 版本号比较长，一般用前7位即可
// 如果出现：则代表记录较多，未显示全部，可按下方向键查看，按 Q 退出
```

查看文件状态

```javascript
git status // 查看文件状态
git status -s // 查看简略版信息
git status --short // 查看简略版信息
```

- 已经提交 (nothing to commit)
  - 表示所有内容都提交过了，暂时没有需要提交的新内容

- 未跟踪 (新增的文件)
- 已暂存 (新增的文件，已添加到暂存区)
- 已修改 M(红) (文件已被Git记录，并在工作区修改了它，但是修改后未重新提交)

**VsCode中Git管理后的标识**

```
红色，未加入版本控制
绿色，已加入版本控制，未提交 U
蓝色，已加入版本控制，已提交，有修改
白色，已加入版本控制，已提交，未修改
灰色，版本控制忽略文件
```

```
A，增加的文件。C，文件的新拷贝。D，删除了。
M，文件修改了。R，文件名改了。T，文件类型改了
U，文件未合并
X，未知状态
```



查看信息

```bash
# 显示有变更的文件
$ git status

# 显示当前分支的版本历史
$ git log

# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat

# 搜索提交历史，根据关键词
$ git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示指定文件相关的每一次diff
$ git log -p [file]

# 显示过去5次提交
$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个commit的差异
$ git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交
$ git reflog
```

## git仓库清理大文件

git仓库用时间长了，有时候可能会忘记忽略掉大文件，zip，dll等，会把git仓库体积变大。直接删除大文件的话，.git文件夹体积并不会缩小。想要清理大文件并保留提交记录，那么就只能通过别的方法来解决

1. 查看仓库中的大文件

```bash
git rev-list --objects --all | grep -E `git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -10 | awk '{print$1}' | sed ':a;N;$!ba;s/\n/|/g'`
```

或者

```bash
git rev-list --objects --all | grep "$(git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -15 | awk '{print$1}')"
```

2. 删除所有的`zip`文件

```bash
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch *.zip' --prune-empty --tag-name-filter cat -- --all
```

从提交历史删除uploads文件夹中的所有文件

```bash
git filter-branch --force --index-filter 'git rm -r --cached --ignore-unmatch uploads/' --prune-empty --tag-name-filter cat -- --all
```

清理残余objects，并通过`GC`回收空间

```bash
rm -rf .git/refs/original/ 
git reflog expire --expire=now --all
git gc --prune=now
git gc --aggressive --prune=now
```

3. 强制覆盖远程仓库

```bash
git push origin --tags --force
git push origin --all --force
```

4. 查看清理后的体积

```bash
du .git -lsh
```

清理完毕后，并同步到远程仓库，其他人电脑必须`重新克隆`，否则又会回归变大变回原样

参考：[git 查找大文件，删除大文件 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904046797520909)



# 远程仓库

工作区  》 暂存区  》 本地仓库  》 远程仓库

只能将`本地仓库`的代码推送到`远程仓库`，(仓库所有记录都被会被上传远程仓库)，远程仓库提供的代码仓库管理服务

推送有两种方式，https和ssh方式

```
https://github.com/linyi52/node_web_server.git;	//测试仓库
https://gitee.com/linyi152/node_web_server;	//gitee库
github已经于2021.8.13移除了老的密码访问方式，必须使用token个人访问令牌当密码使用
```

## 推送分支

```javascript
//先将代码提交到暂存区，在提交到本地仓库，在推送到远程仓库
git push 远程仓库地址/仓库别名 本地分支名:远程分支名称;	//推送到远程仓库
git push -u 远程仓库地址 分支名称;	//-u 代表记住地址和分支，下次只需git push即可
// 比如，有个本地分支叫做 reg，推送到远程之后叫做 register
git push -u origin reg:register
// 如果本地分支和远程分支同名称，则可以简写
git push -u origin reg

git remote -v  //查看所有的别名或地址
git remote add 起的别名 远程仓库HTTP或者SSH完整地址;	//给远程地址起一个别名
git remote remove 别名	//删除别名
git remote rename 旧名称 新名称	//重命名别名
// 操作步骤
git remote add origin 地址  // 保存别名
git push -u origin master // 推送
```

查看远程分支

```javascript
git remote show 仓库别名	//查看分支
git branch -a //查看所有分支，a代表all
```

创建，删除远程分支

```bash
git push origin 分支名称  # 推送本地分支到远程(远程不存在则会创建该分支)
git push origin -d 分支名  # 删除远程分支
```



## 拉取、克隆

```javascript
git clone 仓库地址;		//克隆仓库
git clone -b 分支名 仓库地址;	//克隆指定分支仓库
git pull 远程仓库地址 分支名称;	//拉取远程仓库中的最新版本，拉取后会自动与本地分支合并
```

加速拉取

```js
git ls-remote -h -t https://github.com.cnpmjs.org/nhn/raphael.git
```



下载分支

```javascript
git pull   // 先拉取同步，在拉需要的分支
git checkout 远程分支名   // 将远程分支下载到本地
//下载后修改名字
git checkout -b user2 origin/user	//远程分支叫user，下载到本地叫user2
```

删除远程分支

```javascript
git push origin --delete 分支名
```

git强制覆盖本地仓库

```javascript
// 1.从远程仓库获取所有更新
git fetch --all

// 2.撤销本地、暂存区、版本库(用远程服务器的origin/master替换本地、暂存区、版本库)
git reset --hard origin/master

// 3.更新到本地仓库
git pull

// git强制覆盖本地命令（单条执行）：
git fetch --all && git reset --hard origin/master && git pull
```



## 多人协作

`管理员角色`

- 创建本地仓库，推送到远程仓库
  - 初始化本地仓库，git init
  - 添加到暂存区 git add .   提交到代码仓库 git commit -m '提交的初始代码'
- 推送到远程仓库
  - git push -u 远程仓库地址 master
- 邀请成员

`成员角色`

- 同意邀请
- 克隆项目到本地
  - 在想要保存的目录下，执行 git clone 远程仓库地址
- 开发
  - 编辑代码
  - 提交代码，将代码添加到暂存区，git add .    ,在添加到本地仓库 git commit -m '说明信息'
  - 如果有人在你之前推送了，则需要先拉取下来和自己的代码合并 git pull 地址 master
  - 如果合并有冲突，则需要解决冲突，然后在提交一次
  - 最后推送 git push 地址 master

```bash
# 假设现在要提交写好了的代码，需要推送到线上develop开发分支上，自己的分支为xlybyte

# 0. 先确保已经 git add .   git commit -m '提交了'

# 1. 切换到develop分支
git checkout develop

# 2. 拉取最新develop分支（没有配置origin直接使用仓库地址）
git pull origin develop

# 3. 合并，将自己的分支xlybyte 合并到develop分支
git merge xlybyte

# 4. 解决冲突(如果有冲突的话)，解决后需要再次 提交git add .   git commit -m '提交了'

# 5. 推送develop分支 （没有配置origin直接使用仓库地址）
git push origin develop

# 已完成整个流程
```











多人协作开发流程

```
A在自己电脑创建本地仓库，在创建远程仓库，再将本地仓库推送到远程仓库
B克隆远程仓库到本地进行开发，在将本地仓库开发的内容推送到远程仓库
A将远程仓库中的最新内容拉到本地
```

跨团队操作(非团队)

向代码作者贡献自己的代码

```
1.在github页面，点击fork按钮。将别人的仓库复制一份到自己的仓库
2.将复制的仓库克隆到本地进行修改
3.将修改后的代码推送到自己的远程仓库
4.发起pull reqest，源作者将接收到提交请求
5.等待源作者审核，如果源作者通过 并且合并代码，就完成了整个流程
```

## ssh免登入

通过配置ssh密钥，可以免登入

生成密钥

```
1.生成密钥：ssh-keygen -t rsa -C "邮箱"   可能需要按几次回车键确认，密码留空即可否则每次提交代码都要输入密码
2.生成的密钥在：c:\user\用户\.ssh
MAC 在 用户名的文件夹中 按 shift+commend+. 显示隐藏文件，这时可看到 .ssh文件夹
3.公钥名称：id_rsa.pub (配置到远程仓库)，私钥名称：id_rsa (本地用)
```

设置密钥到GitHub

```
个人中心头像 - Settings - SSH and GPG keys - New SSH key
将公钥粘贴进去即可
```

使用

```
进入代码仓库，复制 ssh地址即可	，控制台里面，第一次使用会有提示需要输入 yes
```

测试连接

```bash
ssh -T git@github.com   # 测试连接，如果成功会返回  Hi xxx 字样
ssh -T git@gitee.com   # 不同网站修改域名即可，前面git固定
```

同一台电脑配置多个ssh密钥

默认情况下，只能有一个密钥，再次创建密钥的时候原来的密钥会被覆盖掉，可以通过设置配置文件来拥有多个密钥，在密钥文件夹下创建`c:\user\用户\.ssh\config`文件，输入如下信息

```bash
# Gitee 密钥
Host gitee.com  # host地址
  Preferredauthentications publickey
  IdentityFile ~/.ssh/gitee_id_rsa  # 指定密钥文件
  
# GitLab 密钥
Host gitlab.xxx.com   # host地址
  Preferredauthentications publickey
  IdentityFile ~/.ssh/gitlab_id_rsa # 指定密钥文件
```

同一台电脑登录同一个git平台多个账号

参考：[如何在同一台电脑上使用两个github账户（亲测有效） - 走看看 (zoukankan.com)](http://t.zoukankan.com/fanbi-p-10185587.html)

```bash
存储key的时候，不要覆盖现有的id_rsa，使用一个新的名字，比如id_rsa_work

# 2.2 配置.ssh/config

$ vi .ssh/config

# 加上以下内容
#default github
Host github.com
HostName github.com
IdentityFile ~/.ssh/id_rsa

Host github_work
HostName github.com
IdentityFile ~/.ssh/id_rsa_work
# 2.3 git push remote add origin2　　

#push到github上去
$ git remote add origin2 git@github_work:B/test2.git
# 2.4 id_rsa_work.pub加到你的work账号上

$ git remote -v
origin  git@github.com:B/test2.git (fetch)
origin  git@github.com:B/test2.git (push)
origin2 git@github_work:B/test2.git (fetch)
origin2 git@github_work:B/test2.git (push)
这样就完成配置了。
```







### ssh认证问题

有时候新增，或者创建密钥后，会出现ssh认证失败的问题，公钥缓存问题

执行以下命令清理缓存即可

```bash
ssh-add ~/.ssh/id_rsa
```



# svn

使用教程[SVN使用教程 (svnbucket.com)](https://svnbucket.com/posts/)

服务端软件：VisualSVN

客户端软件：Tortoisesvn

