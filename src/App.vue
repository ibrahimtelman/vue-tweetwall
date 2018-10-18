<template>
    <div id="app">
        <div class="container">
            <div class="controlBar">
                <input type="text" class="controlBar__searchInput"
                       placeholder="Search" v-model="search"
                       :disabled="is_run">
                <button class="controlBar__action" v-on:click="toggleServer">
                    {{ is_run ? '&#10074;&#10074;' : '&#9658;'}}
                </button>
            </div>
            <div class="tweetList">
                <Tweet v-for="(tweet, index) in tweets" :tweet="tweet" :key="index"></Tweet>
            </div>

        </div>
    </div>
</template>

<script>
import io from 'socket.io-client';
import Tweet from './components/Tweet.vue';

export default {
  name: 'App',
  components: {
    Tweet,
  },
  data() {
    return {
      socket: io('//:8081'),
      tweets: [],
      is_run: false,
      search: '',
    };
  },
  mounted() {
    this.socket.on('new-tweet', (data) => {
      this.tweets.unshift(data);
    });
  },
  methods: {
    toggleServer() {
      const self = this;
      if (this.is_run) {
        this.socket.emit('stop-stream', { }, (callback) => {
          if (callback) {
            self.is_run = !self.is_run;
          }
        });
      } else {
        this.socket.emit('start-stream', { query: this.search }, (callback) => {
          if (callback) {
            self.is_run = !self.is_run;
          }
        });
      }
    },
  },
};
</script>

<style lang="scss">
    body {
        text-align: center;
        height: 100%;
        margin: 0;
        background: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%) no-repeat fixed;
    }

    .container {
        padding: 50px;

        @media screen and (max-width: 768px) {
            padding: 10px;
        }
    }

    .controlBar {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        &__searchInput {
            width: 85%;
            padding: 10px;
            outline: none;
            border: none;
            background-color: transparent;
            border-bottom: 1px solid #999;
            font-size: 16px;

            &:disabled{
                opacity: 0.5;
                border-bottom-style: dashed;
            }
        }

        &__action {
            padding: 0;
            border: none;
            background: #fc4482;
            width: 45px;
            height: 45px;
            color: #fff;
            border-radius: 50%;
            box-shadow: 0 1px 1px #00000033;
            outline: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

</style>
