document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.video-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const name = this.previousElementSibling.alt.toLowerCase(); // Get the name of the person from the alt attribute
            let videoUrl;

            // Determine the video URL based on the person's name
            switch(name) {
                case 'mima':
                    videoUrl = 'mima_video_url';
                    break;
                case 'edamommy':
                    videoUrl = 'edamommy_video_url';
                    break;
                case 'nana':
                    videoUrl = 'nana_video_url';
                    break;
                case 'bri-bri':
                    videoUrl = 'bri_bri_video_url';
                    break;
                default:
                    videoUrl = 'default_video_url'; // Provide a default video URL
            }

            // Open the video URL in a new tab
            window.open(videoUrl, '_blank');
        });
    });
});
