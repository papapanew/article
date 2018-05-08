# git如何上传代码到github
  * 下载安装git客户端 地址 [https://git-scm.com/](https://git-scm.com/)
  * 注册github账号 

## 第一次使用git上传项目，需要配置ssh
  * 打开git.bash 输入：ssh-keygen -t rsa -C "邮箱"
  * 打开c盘/用户/当前用户/.ssh/id_rsa.pub 复制全部内容
  * 然后上github[官网](https://github.com/)登陆用户
  * 点击settings->SSH and GPG keys->New SSH key 把复制的内容粘贴进去保存
  * 输入：ssh -T git@github.com   判断连接是否成功

## 需要上传的目录
  * 首先我们对 Git 进行用户名和邮箱进行设置，请参照下面格式，替换为你自己常用的用户名和邮箱来完成设置：
  * git config --global user.name "Your Name"
  * git config --global user.email your@example.com
  * github创建一个项目 github首页->New repository->输入名称->Create repository->复制：例子 git@github.com:papapa/-.git
  * cd 当前文件目录
  * git init
  * git add README.md
  * git commit -m "first commit"
  * git remote add origin git@github.com:papapa/-.git
  * git push -u origin master




