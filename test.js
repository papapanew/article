var fs=require('fs')
// fs.readFile('a.txt','utf8',(error,data)=>{
// 	console.log(data)
// })
// fs.writeFile('aa.txt','aaa4和',(error)=>{
// 	console.log(`修改成功回掉参数error：${error}`)
// })
// var contentText=fs.readFileSync('aa.txt','utf8');
// console.log(contentText)
fs.readlink('aa.txt',(err,linkString)=>{
	if (err) throw err;
  	console.log(linkString);
})
