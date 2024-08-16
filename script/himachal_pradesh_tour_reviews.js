const ratingsData = [
    { stars: 5, percentage: 56.9249147607078, count: 22900 },
    { stars: 4, percentage: 34.628306911226694, count: 13900 },
    { stars: 3, percentage: 8.349717528184964, count: 3400 },
    { stars: 2, percentage: 0, count: 0 },
    { stars: 1, percentage: 0.09706079988054055, count: 49 }
];

function generateStarRating(ratings) {
    const container = document.getElementById('ratingBarsContainer');
    container.innerHTML = ''; // Clear any existing content

    ratings.forEach(rating => {
        const ratingBar = document.createElement('div');
        ratingBar.className = 'RatingBars_ratingBar';

        const leftSection = document.createElement('div');
        leftSection.className = 'RatingBars_leftSection';
        leftSection.innerHTML = `
            <span>${rating.stars}</span>
            <svg class="RatingBars_starIcon" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1555 5.63406L11.8408 4.90408L9.46504 0.352135C9.40015 0.227506 9.2934 0.126615 9.16152 0.0652895C8.8308 -0.0890138 8.4289 0.0395723 8.26354 0.352135L5.88774 4.90408L0.573088 5.63406C0.426563 5.65384 0.292598 5.71912 0.190031 5.81803C0.0660325 5.93848 -0.00229606 6.10053 5.89153e-05 6.26856C0.00241389 6.4366 0.0752597 6.59688 0.20259 6.71418L4.04781 10.2572L3.13936 15.2602C3.11806 15.3766 3.13169 15.4963 3.1787 15.6057C3.22571 15.7151 3.30423 15.8099 3.40534 15.8793C3.50646 15.9488 3.62613 15.99 3.75079 15.9984C3.87544 16.0068 4.0001 15.982 4.11061 15.9269L8.86429 13.5648L13.618 15.9269C13.7477 15.9922 13.8985 16.0139 14.0429 15.9902C14.4071 15.9308 14.652 15.6044 14.5892 15.2602L13.6808 10.2572L17.526 6.71418C17.6306 6.61724 17.6997 6.49064 17.7207 6.35216C17.7772 6.00597 17.5218 5.68549 17.1555 5.63406Z" fill="#FFBA0A"></path>
            </svg>
        `;

        const midSection = document.createElement('div');
        midSection.className = 'RatingBars_midSection';
        midSection.innerHTML = `
            <div class="progress">
                <div role="progressbar" class="progress-bar bg-primary" style="width: ${rating.percentage}%;"></div>
            </div>
        `;

        const rightSection = document.createElement('div');
        rightSection.className = 'RatingBars_rightSection';
        rightSection.textContent = rating.count;

        ratingBar.appendChild(leftSection);
        ratingBar.appendChild(midSection);
        ratingBar.appendChild(rightSection);

        container.appendChild(ratingBar);
    });
}
