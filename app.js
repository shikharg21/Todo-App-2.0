$(() => {

    
    let list = $('#list')
    let input = $('#input')

    $('#addbtn').click(() => {
        let val = input.val()
        if (val == '') {
            alert('Please Enter a Task')
        } else {
            list.append(`<li class='list-group-item'>${val}</li>`)
        }
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


    $('#pdfbtn').click(() => {

        var doc = new jsPDF();
        doc.text('TODO LIST', 100, 20)
        doc.fromHTML($('#list').html(),20,20)
        doc.save('myTodo.pdf')
        
    })
})