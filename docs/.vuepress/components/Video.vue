<template>
    <iframe :src="src" scrolling="no" border="0" width="800" height="600" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</template>

<script>
let flvjs = require('flv.js')
export default {
    data() {
        return {
        }
    },
    props: {
        src: {
            type: String
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            // if (flvjs.isSupported()) {
            //     var videoElement = document.getElementById('videoElement');
            //     var flvPlayer = flvjs.createPlayer({
            //         type: 'flv',
            //         url: 'https://www.bilibili.com/video/BV1iE411E7sa/'
            //     });
            //     flvPlayer.attachMediaElement(videoElement);
            //     flvPlayer.load();
            //     flvPlayer.play();
            // }

        }
    },
}
</script>