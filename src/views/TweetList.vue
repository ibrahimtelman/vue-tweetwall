<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button v-on:click="startServer">Start Server</button>
        <button v-on:click="stopServer">Stop Server</button>
        <div class="tweets">
            <div class="tweet" v-for="tweet in tweets">
                <tweet :tweet="tweet"></tweet>
            </div>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client';
import tweet from '../components/Tweet.vue';

export default {
  components: {
    tweet,
  },
  data() {
    return {
      socket: io('//:8081'),
      tweets: [],
    };
  },
  mounted() {
    this.socket.on('new-tweet', (data) => {
      console.log(data);
      this.tweets.push(data);
    });
  },
  methods: {
    startServer() {
      this.socket.emit('start-stream');
    },
    stopServer() {
      this.socket.emit('stop-stream');
    },
  },
};
</script>
