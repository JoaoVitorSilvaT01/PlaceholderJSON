
document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("tbody");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            data.forEach(person => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${person.id}</td>
                    <td>${person.name}</td>
                    <td>${person.email}</td>
                    <td>${person.website}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.log("Erro ao buscar dados:", error));
});
