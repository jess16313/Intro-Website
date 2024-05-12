document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.video-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const name = this.previousElementSibling.alt.toLowerCase(); // Get the name of the person from the alt attribute
            let videoUrl;

            switch(name) {
                case 'mima':
                    videoUrl = 'https://drive.google.com/file/d/1ZV1apGK83CUreN-oz7DANMj8TFR8ftyR/view?usp=sharing';
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
                    videoUrl = 'default_video_url'; }

            window.open(videoUrl, '_blank');
        });
    });
});
