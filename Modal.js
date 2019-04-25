/**
 * Created by PhpStorm.
 * User: 高俊东
 * Date: 2019/4/25
 * Time: 11:15 AM
 */


//父元素要设置为 postion:relative;

function Modal(text = '',type = 1 ,node = 'body'){
    this.text = text;
    this.node = node;
    this.type = type;
}

Modal.prototype.show = function(){
    let className = 'gao_modal_mask_index_' + new Date().getTime()
    let html = `
		<div class="${className}" style = 'display:none;'>
			<div class="gao_modal_mask">
				<img src="./img/loading${this.type}.gif" class="gao_modal_loading">
				${this.text == '' ?   '' : '<p class="gao_modal_loading_text">' + this.text+ '</p>'}
			</div>
		</div>
	`;
    $(this.node).append(html)
    $(`.${className}`).fadeIn(200)

    return className
};

Modal.prototype.close = function(){
    console.log('a.close')
};



$.extend({
    showModal(text,type,node,remove=false){
        if(remove){
            $("[class^='gao_modal_mask_index']").remove(); // 创建新的loading之前 先移除现有的loading层
        }

        let a = new Modal(text,type,node);
        return a.show()
    },
    closeModal(className=''){
        if(className){
            $('.'+className).remove()
        }else{
            $("[class^='gao_modal_mask_index']").fadeOut(300).remove()
        }

    }
})
