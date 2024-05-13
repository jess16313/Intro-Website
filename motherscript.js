document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.video-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const name = this.previousElementSibling.alt.toLowerCase(); // Get the name of the person from the alt attribute
            let videoUrl;

            switch(name) {
                case 'mima':
                    videoUrl = 'https://youtu.be/P8J_x2FWkBQ';
                    break;
                case 'edamommy':
                    videoUrl = 'edamommy_video_url';
                    break;
                case 'nana':
                    videoUrl = 'nana_video_url';
                    break;
                case 'bri-bri':
                    videoUrl = 'https://youtu.be/6hTklseZMpk';
                    break;
                default:
                    videoUrl = 'default_video_url'; }

            window.open(videoUrl, '_blank');
        });
    });
});
