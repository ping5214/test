/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...

// console.log('1111')
document.onkeydown = function(e){
    e = e || window.event
    e.preventDefault()
    const code = e.keyCode || e.which
    
    if(code === 13){
        if(!$('#title').val().trim()) return
        
        const content = $('#title').val().trim()
        const num = $('li').length
        const str  = `
            <input type="checkbox" />
            <p onclick="edit(${num + 1})">${content}</p>
            <a href="javascript:remove(${num + 1})">-</a>
        `
        const li = $('<li></li>')

        li.html(str)

        $('ol').append(li)

        $('#title').val('')

        $('#todocount').html(num + 1)
    }

}


// 正在做

$('ol').on('click', 'input', function(){
    const thing = $(this).parent()
    console.log(thing)
    $('ul').append(thing)
    const shu = $('ol > li').length
    $('#todocount').html(shu)
    // console.log(shu)
})


$('ol').on('click', 'a', function(){
    $(this).parents('li').remove()
    const count = $('ol > li').length
    $('#todocount').html(count)
})


function edit(index){
    $('ol p').eq(index - 1).html($('<input type=text/>'))

}


// 已经完成

$('ul').on('click', 'input', function(){
    const thing = $(this).parent()
    console.log(thing)
    $('ol').append(thing)
    const shu = $('ul > li').length
    $('#donecount').html(shu)
    // console.log(shu)
})


$('ul').on('click', 'a', function(){
    $(this).parents('li').remove()
    const count = $('ul > li').length
    $('#donecount').html(count)
})

function edit(index){
    $('p').eq(index + 1).html($('<input type=text/>'))  
}

























