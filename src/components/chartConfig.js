export const data = {
    labels: ['Correct', 'Wrong', 'Skipped'],
    datasets: [
        {
            backgroundColor: ['#4B9AFA', '#FF9D01', '#183B6E'],
            data: [40, 20, 80]
        }
    ]
}

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    borderWidth: 0,
    plugins: {
        legend: {
            display: false, // Set this to false to hide the legends
        },
    },
}
