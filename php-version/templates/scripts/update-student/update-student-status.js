function update(updateStatus){
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/student-crud/php-version/templates/php/rest/update-status.php",
        data: JSON.stringify(updateStatus),
        dataType: "application/json",
        success: function (response) {

        }
    });
}
    let element=$('input[name="status"][type="checkbox"]');
    element.click((element)=>{
        let id=element.target.id;
        let status=element.target.checked;
        console.log(JSON.stringify({"status":`${status}`,"id":id}));
        update({"status":`${status}`,"id":id});
    });