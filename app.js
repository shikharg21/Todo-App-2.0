$(() => {

    let list = $('#list')

    $('#addbtn').click(() => {
        let input = $('#input').val()
        list.append(`<li class="list-group-item">${input}</li>`)
    })

    list.click((event) => {
        event.target.setAttribute('style', "background-color:lightblue;text-decoration:line-through")
        event.target.setAttribute('class', "list-group-item taken")
    })

    // $('.list-group-item.taken').click(() => {
    //     console.log('clicked')
    // })

    $('#delbtn').click(() => {
        $('.taken').remove()
    })

})