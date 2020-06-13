// Add to reservation array
$("#submit").on("click", function (e) {
    e.preventDefault();
    const newReservation = {
        name: $("#name").val().trim(),
        number: $("#phone").val().trim(),
        email: $("#email").val().trim(),
        id: $("#uid").val().trim()
    };

    $.post("/api/tables", newReservation)
        .then(function (data) {
            alert(data);
        });
});