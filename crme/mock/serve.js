
let fs = require('fs')
let http = require('http')
let url = require('url')

function read(cd){
    fs.readFile('./data.json','utf-8',function(err,data){
        if(!err){
            cd&&cd(data)
        }
    })
}
function write(data,cb){
    fs.writeFile('./data.json',data,'utf-8',function(err){
        cb&&cb()
    })
}
    http.createServer(function(req,res){
        // req.url += Date.now()
        let {pathname,query} = url.parse(req.url,true)
        res.setHeader('Access-Control-Allow-Origin','*')
        res.setHeader('Access-Control-Allow-Headers','content-type')
        //对于options请求我们要有一个响应(post请求切传递的信息不是from data)
        if(req.method=='OPTIONS'){
            res.end()
            return
        }
        if(pathname == '/list'){
            read(function(data){
                res.end(data)
            })
        }
        if(pathname=='/delete'){
            read(function(data){
                let id = query.id
                if(id===undefined){
                    res.end('no ID')
                }else{
                    let ary = JSON.parse(data)
                    ary = ary.filter(item=>item.id != id)
                    write(JSON.stringify(ary),function(){
                        res.end('success')
                    })
                }
            })
        }
        if(pathname==='/add'){
            let str = ''
            req.on('data',function(append){
                //post传数据时会触发该函数，获取数据的时候是一点点获取到的
                str += append
                console.log(str)

            })
            req.on('end',function(){
                //用post获取数据，数据请求完毕后此函数执行
                console.log(str)
                let obj = JSON.parse(str)
                //新增前判断数据中有没有这个ID
                if(obj.id){
                    //存在
                    read(function(data){
                        let ary = JSON.parse(data)
                        for(let i = 0;i<ary.length;i++){
                            if(ary[i].id==obj.id){
                                ary[i]=obj
                            }
                        }
                        write(JSON.stringify(ary),()=>{
                            res.end('success')
                        })
                    })
                }else{
                    read(function(data){
                        let ary = JSON.parse(data)
                        obj.id = Math.random()
                        ary.push(obj)
                        write(JSON.stringify(ary),()=>{
                            res.end('success')
                        })
                    })
                }
            })
        }

}).listen('9090',function(){
    console.log(88)
})