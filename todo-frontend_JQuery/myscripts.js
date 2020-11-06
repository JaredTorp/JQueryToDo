function deleteRecord() {
    console.log('delete function');
    document.getElementById('deleteMessage').innerHTML = 'Deleting record ... Wait';
    document.getElementById('deletebtn').setAttribute('disabled', true);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            console.log('Delete success ');
            window.location.assign('student-list.html');
        } else if(xmlhttp.readyState === 4) {
            console.log('Delete error ' + this.statusText);
            console.log('incoming Text ' + this.responseText);
        }
    };
    xmlhttp.open('DELETE', '/todoapi /lists' + urlParam('id'), true);
    xmlhttp.send({});
}