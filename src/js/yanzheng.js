
$(function(){
				// 表单验证插件
				$("form").validate({

					// 设置验证规则
					rules:{
						user:{required:true,rangelength:[3,10]},
						email:{email:true,required:true},
						url:{url:true},
						tel:{number:true},
//						password: {required: true,minlength: 5},
//    			confirm_password: {required: true,minlength: 5,equalTo: "#password"},
      			confirm_password: {
        required: true,
        minlength: 5,
        equalTo: "#password"
      },agree: {required:true},
      },
					
					// 设置提示信息
					messages:{
						user:{required:'亲，这是必要输入的'},
						agree: "请接受我们的声明",
						password: {required: "请输入密码",minlength: "密码长度不能小于 5 个字母"},

					confirm_password: {
					        required: "请输入密码",
					        minlength: "密码长度不能小于 5 个字母",
					        equalTo: "两次密码输入不一致"
					      },
     				email: "请输入一个正确的邮箱",},
     				
     				
     				submitHandler:function(form){
     					console.log('hah');
     					var username = $(form).find('#email').val();
     					var password = $(form).find('#password').val();
     					var count = 0;


     					var user = $.cookie('user');
     					user = JSON.parse(user);

     					if(user==null){
     						user=[];
     					}
     					for(var i=0;i<user.length;i++){
     						if(username==user[i].username){
     							count++;
     							alert('该youxiang已注册');
     						}
     					}
     					if(count==0){
     						var jsonUser = {};
	     					jsonUser.username = username;
	     					jsonUser.password = password;
	     					user.push(jsonUser);
	           				$.cookie('user', JSON.stringify(user), {expires: 7,path:'/'});
	           				alert('注册成功');
//	           				location.go(0);
							location.href="../../index.html";
     					}
        }    
     				

     				
				});
				

				$('.login').on('click',function(){
					var count = 0;
					var username = $('#login_email').val();
					var pwd = $('#login_pwd').val();

					var user = $.cookie('user');
					user = JSON.parse(user);
					for(var i = 0;i<user.length;i++){
						if(username==user[i].username&&pwd==user[i].password){
							count ++;
//							e.preventDefault()
							location.href="../../index.html";
						}
					}
					if(count==0){
						alert('账号或密码有错误');
					}
				});


				  
				
			});