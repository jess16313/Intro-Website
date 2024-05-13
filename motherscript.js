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
                    videoUrl = 'https://youtu.be/JiwZL-yUdnQ';
                    break;
                case 'nana':
                    videoUrl = 'https://youtu.be/8c20uIMzTOA';
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
