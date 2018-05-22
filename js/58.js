$(function(){

    /*选择*/
    $('#all').change(function(){//给全选挂事件（change）
        if($(this).is(":checked")){//is
            $('.check').prop("checked",true);//prop/attr改变属性的方法
        }else{
            $('.check').prop("checked",false);//
        }
    });

    /*删除*/
    $('#bun').click(function(){
        //选择器选中（被勾选的产品）再选中父级元素（一个parent选中td，两个parent选中tr），然后进行删除（remove（删除的意思））
        $('.check:checked').parent().parent().remove();
    });
    //注意：
    //prop/attr改变属性的方法
    // .parent（）选中
    // .remove（）删除
    //:checked匹配所有选中的被选中元素
    //this 自己
    //children()--儿子
    //eq（）第几个儿子
    //text把文件提取出来
    //val()用再input上


    /*修改+确定*/
    $('.xiugai').click(function() {//给修改挂事件
        updata(this);
    });

    //封装方法---修改函数
    function updata(xg){
         var tr=$(xg).parent().parent();//找tr元素

         if($(xg).text()==='修改'){//判断确认

         for(var a=1;a<4;a++){//取值
         var str=tr.children().eq(a).text();//tr下面的儿子，第1个儿子，
         tr.children().eq(a).html("<input type='text' value="+str+">");//把取出来的值放在input里面
         }
         $(xg).text("确认");

         }else{
         //点击确认
         for(var u=1;u<4;u++){
         var value=tr.children().eq(u).children().val();
         tr.children().eq(u).html(value);
         }
         $(xg).text("修改");
         }
    }



    //增加商品
    $('#btn').click(function(){//给确认挂事件

        var gn=$('#goodName').val();//取值 商品名称
        var gm=$('#goodNumber').val();//取值 商品数量
        var gu=$('#goodUnit').val();// 取值 商品单位

        if(gn==="" || gm==="" || gu===""){//状态为空的情况下
            alert('请完善信息')
        }else{
            var tr=$('<tr></tr>');//创建一个tr

            //第一个td
            var td1=$('<td></td>');//创建第一个td
            var input1=$('<input type="checkbox"/>');
            input1.addClass('check');//给input添加一个class
            input1.appendTo(td1);//把input放在td1里面
            td1.appendTo(tr);//把td放在tr里面

            //第二个td
            var td2=$('<td></td>');//创建一个td
            td2.text(gn);//把文件放进来
            td2.appendTo(tr);//把td2放在tr里面

            //第三个td
            var td3=$('<td></td>');//创建一个td
            td3.text(gm);//把文件放进去
            td3.appendTo(tr);//把td3放在tr里面

            //第四个td
            var td4=$('<td></td>');//创建一个td
            td4.text(gu);//把文件放进去
            td4.appendTo(tr);//把td4放在tr里面

            //第五个
            var td5=$('<td></td>');
            var input2=$('<button class="xiugai" >修改</button>');
            input2.appendTo(td5);
            input2.click(function(){
                updata(this);
            });
            td5.appendTo(tr);

            //把tr放在tbody里面
           tr.appendTo('#toy');

        }

    });





























});