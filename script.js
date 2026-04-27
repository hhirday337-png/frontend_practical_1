const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", fetchData);

async function fetchData() {
    output.innerHTML = "Loading...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error("Error fetching data");
        }

        const data = await response.json();

        let result = "";

        data.slice(0, 8).forEach(post => {
            result += `
        <div class="card">
          <h4>${post.title}</h4>
          <p>${post.body}</p>
        </div>
      `;
        });

        output.innerHTML = result;

    } catch (error) {
        output.innerHTML = "<p style='color:red;'>Failed to load data ❌</p>";
        console.log(error);
    }
}