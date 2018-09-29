<template>
    <div class="tweet">
        <div class="avatarContainer">
            <img :src="tweet.user.profile_image_url" class="avatar" width="70" height="70">
        </div>
        <div class="tweetBody">
            <div class="tweetHead">
                    <span class="author">
                        <b class="name">{{ tweet.user.name }}</b>
                        <small class="link">@{{ tweet.user.screen_name }}</small>
                    </span>
            </div>
            <div class="tweetContent">
                {{ tweet.text }}
            </div>
        </div>

    </div>
</template>

<script>
module.exports = {
  props: ['tweet'],
  data() {
    return {};
  },
};
</script>

<style>
    .tweet{
        background: #8ea1a1;
        margin: 20px 0;
        padding: 10px 15px;
        display: flex;
        align-items: center;
    }
    .avatarContainer {
        margin-right: 20px;
        float: left;
    }

    .avatar {
        margin-top: 3px;
        border-radius: 50%;
    }

    .tweetBody{
        text-align: left;
    }

    .tweetHead{
        margin-bottom: 5px;
    }

    .tweetHead .author .name{
        color: #333;
        margin-right: 10px;
    }
</style>
