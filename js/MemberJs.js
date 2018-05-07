$(function(){
	// 发布作品模块出现
		$('.release p').on('click',function(){
			$('.bounced').css('display','flex');
		})
		// 作品分类选择
		let select_content_state=false;
		$('.select span').on('click',function( ){
			if (select_content_state) {
				$('.select_content').css('display','none');
				select_content_state=false;
			}else{
				$('.select_content').css('display','block');
				$('.select_ul li').eq(0).trigger('click')
				select_content_state=true;
			}
		})
		//一级菜单栏选择
		$('.select_ul').on('click','li',function(){
			$(this).addClass('colorOrange').siblings().removeClass('colorOrange');
			$('#select_hidden').val($(this).text()+"/")
		})
		//二级菜单栏选择
		$('.select_second_ul').on('click','li',function(){
			$('#select_hidden').val($('#select_hidden').val()+$(this).text())
			$('.select span').trigger('click').text($('#select_hidden').val())
		})

	// 标签栏切换
	// let upload_images=document.getElementById("upload_images")
	// $('#upload_images').eq(0).on('change',function(){
	// 	let fileType= new Array('jpg','png');
	// 	let file=$(this).files[0]
	// 	console.log(file)
	// 	console.log($(this).val())
	// })
	$('#upload_images').on('change',function(){
		let fileList=$(this)[0].files;
		// console.log(fileList)
		if (fileList.length>5) {
			alert('选取图片超过5张，请重新选择！');
			$('#upload_images').val('');
			let fileList="";
			return false;
		}
		if (window.FileReader) {
			let num=0;
			let reader = new FileReader();
			reader.readAsDataURL(this.files[num]);
			/*let fileUrl= new Array();
			// $.each(fileList,(index,val)=>{
				reader.readAsDataURL(this.files[num]);
				reader.onload =function(){
					fileUrl.push(this.result)
					if (num<fileList.length) {
						num++;
						reader.readAsDataURL(this.files[num]);
					}
				}

			// })
			console.log(fileUrl)*/
		}
	})
})