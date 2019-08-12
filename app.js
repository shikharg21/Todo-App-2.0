$(() => {

    let list = $('#list')
    let input = $('#input')
    let li = $('li')

    $('#addbtn').click(() => {
        let val = input.val()
        list.append(`<li class='list-group-item'>${val}</li>`)
        input.val('')
    })

    list.click((event) => {
        let val = event.target.getAttribute('class')

        if (val == 'list-group-item taken') {
            event.target.setAttribute('class', 'list-group-item')
        } else {
            event.target.setAttribute('class', 'list-group-item taken')
        }
    });

    $('#delbtn').click(() => {
        $('.taken').remove()
    })

})