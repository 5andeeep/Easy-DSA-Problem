
async function fetchData() {
    try {
        const response = await fetch("https://api.github.com/repos/yyx990803/laravel-vue-cli-3/stats/commit_activity");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

fetchData();